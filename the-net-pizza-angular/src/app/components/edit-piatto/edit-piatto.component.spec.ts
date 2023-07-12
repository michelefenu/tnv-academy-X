import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPiattoComponent } from './edit-piatto.component';

describe('EditPiattoComponent', () => {
  let component: EditPiattoComponent;
  let fixture: ComponentFixture<EditPiattoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPiattoComponent]
    });
    fixture = TestBed.createComponent(EditPiattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
