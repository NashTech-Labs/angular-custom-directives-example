import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NashtechComponent } from './nashtech.component';

describe('NashtechComponent', () => {
  let component: NashtechComponent;
  let fixture: ComponentFixture<NashtechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NashtechComponent]
    });
    fixture = TestBed.createComponent(NashtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
