import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsubcomponentComponent } from './subsubcomponent.component';

describe('SubsubcomponentComponent', () => {
  let component: SubsubcomponentComponent;
  let fixture: ComponentFixture<SubsubcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsubcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsubcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
