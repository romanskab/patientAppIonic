import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecordToDoctorPage } from './record-to-doctor.page';

describe('RecordToDoctorPage', () => {
  let component: RecordToDoctorPage;
  let fixture: ComponentFixture<RecordToDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordToDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordToDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
