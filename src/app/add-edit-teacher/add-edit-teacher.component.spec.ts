import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditTeacherComponent } from './add-edit-teacher.component';

describe('AddEditTeacherComponent', () => {
  let component: AddEditTeacherComponent;
  let fixture: ComponentFixture<AddEditTeacherComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
