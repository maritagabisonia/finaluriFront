import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserAnswersComponent } from './add-user-answers.component';

describe('AddUserAnswersComponent', () => {
  let component: AddUserAnswersComponent;
  let fixture: ComponentFixture<AddUserAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserAnswersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUserAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
