import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNpcFormComponent } from './create-npc-form.component';

describe('CreateNpcFormComponent', () => {
  let component: CreateNpcFormComponent;
  let fixture: ComponentFixture<CreateNpcFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNpcFormComponent]
    });
    fixture = TestBed.createComponent(CreateNpcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
