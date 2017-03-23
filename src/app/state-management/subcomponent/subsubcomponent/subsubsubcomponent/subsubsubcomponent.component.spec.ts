import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsubsubcomponentComponent } from './subsubsubcomponent.component';

describe('SubsubsubcomponentComponent', () => {
  let component: SubsubsubcomponentComponent;
  let fixture: ComponentFixture<SubsubsubcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsubsubcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsubsubcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
