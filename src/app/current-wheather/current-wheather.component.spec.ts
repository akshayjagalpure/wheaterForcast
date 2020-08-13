import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWheatherComponent } from './current-wheather.component';

describe('CurrentWheatherComponent', () => {
  let component: CurrentWheatherComponent;
  let fixture: ComponentFixture<CurrentWheatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWheatherComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWheatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
