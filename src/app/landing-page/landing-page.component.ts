import { Component, OnInit } from '@angular/core';
import { LandingPageService } from './landing-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [LandingPageService]
})
export class LandingPageComponent implements OnInit {
  collectionPoints: any[];
  selected: any;

  constructor(private landingPageService: LandingPageService, private router: Router) { }

  ngOnInit() {
    this.landingPageService.getCollectionPoints().subscribe((data) => this.collectionPoints = data.results);
  }

  chooseCollectionPoint(collectionPoint: any) {
    this.selected = collectionPoint;
  }

  onNextButtonClick() {
    if (this.selected !== undefined) {
      localStorage.setItem('collectionPoint', JSON.stringify(this.selected));
      this.router.navigate(['/so/home']);
    }
  }

}
