import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCommonComponent } from './base-common.component';

describe('BaseCommonComponent', () => {
  let component: BaseCommonComponent;
  let fixture: ComponentFixture<BaseCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
