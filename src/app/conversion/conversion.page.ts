import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

enum TypeConversionEnum {
  Temperature = 0,
  Volume,
  Distance,
  Speed
}

export class Conversion {
  title: string;
  header1:string;
  header2: string;
  type: TypeConversionEnum
}

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage implements OnInit {

  _typeConversion: TypeConversionEnum;

  header1: number;
  header2: number;

  @Input() set typeConversion(typeConversion: TypeConversionEnum) {
    this._typeConversion = typeConversion;
    this.assignValuesBasedOnType();
  }

  get typeConversion() {
    return this._typeConversion;
  }

  public get typeConversionEnum(): typeof TypeConversionEnum {
    return TypeConversionEnum; 
  }

  conversions: Conversion[] = [];

  selectedConversion: Conversion;
  
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.initConversionTypes();
  }

  private initConversionTypes() {
    this.conversions.push({
      title: 'Temperature',
      header1: 'Celcius',
      header2: 'Farenheit',
      type: TypeConversionEnum.Temperature
    });

    this.conversions.push({
      title: 'Volume',
      header1: '',
      header2: '',
      type: TypeConversionEnum.Volume
    });

    this.conversions.push({
      title: 'Speed',
      header1: '',
      header2: '',
      type: TypeConversionEnum.Speed
    });

    this.conversions.push({
      title: 'Distance',
      header1: '',
      header2: '',
      type: TypeConversionEnum.Distance
    });
  }

  assignValuesBasedOnType() {
    switch(this.typeConversion) {
      case this.typeConversionEnum.Temperature:
        this.selectedConversion = {
          title: 'Temperature',
          header1:'Celcius',
          header2:'Farenheit',
          type: this.typeConversionEnum.Temperature
        };
        break;
      case this.typeConversionEnum.Volume:
        this.selectedConversion = {
          title: 'Volume',
          header1:'',
          header2:'',
          type: this.typeConversionEnum.Volume
        };
        break;
      case this.typeConversionEnum.Speed:
        this.selectedConversion = {
          title: 'Speed',
          header1:'',
          header2:'',
          type: this.typeConversionEnum.Speed
        };
        break;
      case this.typeConversionEnum.Distance:
        this.selectedConversion = {
          title: 'Distance',
          header1:'',
          header2:'',
          type: this.typeConversionEnum.Distance
        };
        break;
      default:
        break;
    }
  }

  getConversionTitle() {
    switch(this.typeConversion){
      case this.typeConversionEnum.Temperature:
        return 'Temperature';
      case this.typeConversionEnum.Volume:
        return 'Volume';
      case this.typeConversionEnum.Speed:
        return 'Speed';
      case this.typeConversionEnum.Distance:
        return 'Distance';
      default:
        return '';
    }
  }

  inputHeader1OnChange(value: number) {
    switch(this.typeConversion) {
      case this.typeConversionEnum.Temperature:
        this.header2 = (value * 9 / 5) + 32;
        break;
      case this.typeConversionEnum.Volume:
        break;
      case this.typeConversionEnum.Speed:
        break;
      case this.typeConversionEnum.Distance:
        break;
      default:
        break;
    }
  }

  inputHeader2OnChange(value) {
    switch(this.typeConversion) {
      case this.typeConversionEnum.Temperature:
        this.header1 = (value - 32) * 5 / 9;
        break;
      case this.typeConversionEnum.Volume:
        break;
      case this.typeConversionEnum.Speed:
        break;
      case this.typeConversionEnum.Distance:
        break;
      default:
        break;
    }
  }

   dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
