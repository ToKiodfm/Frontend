import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardysoftskillsComponent } from './hardysoftskills.component';

describe('HardysoftskillsComponent', () => {
  let component: HardysoftskillsComponent;
  let fixture: ComponentFixture<HardysoftskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardysoftskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardysoftskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
