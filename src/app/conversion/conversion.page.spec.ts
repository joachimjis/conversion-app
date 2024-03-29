import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConversionPage } from './conversion.page';

describe('ConversionPage', () => {
  let component: ConversionPage;
  let fixture: ComponentFixture<ConversionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConversionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
