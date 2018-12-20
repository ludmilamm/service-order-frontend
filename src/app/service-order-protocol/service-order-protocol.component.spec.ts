import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderProtocolComponent } from './service-order-protocol.component';

describe('ServiceOrderProtocolComponent', () => {
  let component: ServiceOrderProtocolComponent;
  let fixture: ComponentFixture<ServiceOrderProtocolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceOrderProtocolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOrderProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
