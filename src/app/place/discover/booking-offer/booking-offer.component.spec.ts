import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingOfferComponent } from './booking-offer.component';

describe('BookingOfferComponent', () => {
  let component: BookingOfferComponent;
  let fixture: ComponentFixture<BookingOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingOfferComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
