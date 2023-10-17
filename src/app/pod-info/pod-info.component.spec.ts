import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodInfoComponent } from './pod-info.component';

describe('PodInfoComponent', () => {
  let component: PodInfoComponent;
  let fixture: ComponentFixture<PodInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodInfoComponent]
    });
    fixture = TestBed.createComponent(PodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
