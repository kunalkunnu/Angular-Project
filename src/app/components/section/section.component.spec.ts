import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sectionComponent } from "./section.component";

describe('SectionComponent', () => {
  let component: sectionComponent;
  let fixture: ComponentFixture<sectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
