import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivangswitchComponent } from './diretivangswitch.component';

describe('DiretivangswitchComponent', () => {
  let component: DiretivangswitchComponent;
  let fixture: ComponentFixture<DiretivangswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivangswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivangswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
