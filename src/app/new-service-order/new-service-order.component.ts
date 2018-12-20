import { Component, OnInit } from '@angular/core';
import { NewServiceOrderService } from './new-service-order.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import _ from 'lodash';

@Component({
  selector: 'app-new-service-order',
  templateUrl: './new-service-order.component.html',
  styleUrls: ['./new-service-order.component.scss'],
  providers: [NewServiceOrderService]
})
export class NewServiceOrderComponent implements OnInit {
  patients: any[];
  doctors: any[];
  healthInsurances: any[];
  examsBySector: any[];
  formGroup: FormGroup;
  patientSelected: number;
  doctorSelected: number;
  healthInsuranceSelected: number;
  examsSelected: any[];
  showExamsError = false;

  constructor(private newServiceOrderService: NewServiceOrderService, private router: Router, private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      patientControl: ['', Validators.required],
      doctorControl: ['', Validators.required],
      healthInsuranceControl: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.newServiceOrderService.getPatients().subscribe((data) => this.patients = data.results);
    this.newServiceOrderService.getDoctors().subscribe((data) => this.doctors = data.results);
    this.newServiceOrderService.getHealthInsurances().subscribe((data) => this.healthInsurances = data.results);
    this.newServiceOrderService.getExams().subscribe((data) => {
      this.examsBySector = _(data.results).groupBy((exam) => exam.sector.description).map((exams, sector) => ({exams, sector})).value();
    });
  }

  get patientControl() { return this.formGroup.get('patientControl'); }
  get doctorControl() { return this.formGroup.get('doctorControl'); }
  get healthInsuranceControl() { return this.formGroup.get('healthInsuranceControl'); }

  choosePatient(patientId: number) {
    this.patientSelected = patientId;
  }

  chooseDoctor(doctorId: number) {
    this.doctorSelected = doctorId;
  }

  chooseHealthInsurance(healthInsuranceId: number) {
    this.healthInsuranceSelected = healthInsuranceId;
  }

  checkExam(examId: number) {
    if (this.examsSelected === undefined) {
      this.examsSelected = [examId];
      this.showExamsError = false;
      return;
    }

    if (this.examsSelected !== undefined && this.examsSelected.includes(examId)) {
      const index = this.examsSelected.indexOf(examId);
      if (index > -1) {
        this.examsSelected.splice(index, 1);
      }
    } else {
      this.examsSelected.push(examId);
    }
    this.showExamsError = this.examsSelected === undefined || this.examsSelected.length === 0;
  }

  onSaveServiceOrderClick() {
    this.showExamsError = this.examsSelected === undefined || this.examsSelected.length === 0;
    if (!this.formGroup.hasError('required') && !this.showExamsError) {
      const collectionPoint = JSON.parse(localStorage.getItem('collectionPoint')).id;
      const body = {
        patient: this.patientSelected,
        doctor: this.doctorSelected,
        healthInsurance: this.healthInsuranceSelected,
        exams: this.examsSelected,
        collectionPoint: collectionPoint
      };
      this.newServiceOrderService.postServiceOrder(body).subscribe((data) => {
        sessionStorage.setItem('serviceOrder', JSON.stringify(data));
        this.router.navigate(['/so/protocol']);
      });
    }
  }
}
