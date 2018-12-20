import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-common',
  templateUrl: './base-common.component.html',
  styleUrls: ['./base-common.component.scss']
})
export class BaseCommonComponent implements OnInit {
  collectionPoint = '';

  constructor(private router: Router) { }

  ngOnInit() {
    const cache = JSON.parse(localStorage.getItem('collectionPoint'));
    if (cache) {
      this.collectionPoint = cache.description;
    } else {
      this.router.navigate(['']);
    }
  }

}
