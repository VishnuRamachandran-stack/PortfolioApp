import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesandacheivementsComponent } from './hobbiesandacheivements.component';

describe('HobbiesandacheivementsComponent', () => {
  let component: HobbiesandacheivementsComponent;
  let fixture: ComponentFixture<HobbiesandacheivementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbiesandacheivementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbiesandacheivementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
