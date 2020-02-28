import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SerialTestComponent } from './serial-test.component';

describe('SerialTestComponent', () => {
  let component: SerialTestComponent;
  let fixture: ComponentFixture<SerialTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialTestComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SerialTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
