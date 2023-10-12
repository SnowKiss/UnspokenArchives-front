import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcProfileComponent } from './npc-profile.component';

describe('NpcProfileComponent', () => {
  let component: NpcProfileComponent;
  let fixture: ComponentFixture<NpcProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NpcProfileComponent]
    });
    fixture = TestBed.createComponent(NpcProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
