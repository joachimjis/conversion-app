import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

enum TypeConversionEnum {
  Temperature = 0,
  Volume,
  Distance,
  Speed
}

export interface Conversion {
  title: string;
  header1:string;
  header2: string;
  type: TypeConversionEnum;

  calculateForHeader1?:(value: number) => number;
  calculateForHeader2?:(value: number) => number;
}

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage implements OnInit {

  _typeConversion: TypeConversionEnum;

  inputHeader1: number;
  inputHeader2: number;

  @Input() set typeConversion(typeConversion: TypeConversionEnum) {
    this._typeConversion = typeConversion;
    this.initConversionTypes();
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
  }

  private initConversionTypes() {
    this.conversions.push({
      title: 'Temperature',
      header1: 'Celcius',
      header2: 'Farenheit',
      type: TypeConversionEnum.Temperature,

      calculateForHeader1: function(value: number) {
        return (value - 32) * 5 / 9;
      },

      calculateForHeader2: function(value: number) {
        return (value * 9 / 5) + 32;
      }
    });

    this.conversions.push({
      title: 'Volume',
      header1: 'Liter',
      header2: 'US fluid ounce',
      type: TypeConversionEnum.Volume,

      calculateForHeader1: function(value: number) {
        return value / 33.814;
      },

      calculateForHeader2: function(value: number) {
        return value * 33.814;
      }
    });

    this.conversions.push({
      title: 'Speed',
      header1: 'Kilometre',
      header2: 'Mile',
      type: TypeConversionEnum.Speed,

      calculateForHeader1: function(value: number) {
        return value * 1.609344;
      },

      calculateForHeader2: function(value: number) {
        return value / 1.609344;
      }
    });

    this.conversions.push({
      title: 'Distance',
      header1: '',
      header2: '',
      type: TypeConversionEnum.Distance,

      calculateForHeader1: function(value: number) {
        return 0;
      },

      calculateForHeader2: function(value: number) {
        return 0;
      }
    });

    this.assignValuesBasedOnType();
  }

  assignValuesBasedOnType() {
    const conversion = this.conversions[this.typeConversion];
    
    this.selectedConversion = {
      title: conversion.title,
      header1: conversion.header1,
      header2: conversion.header2,
      type: conversion.type
    };
  }

  takeInputHeader1AndConvertToHeader2(value: number) {
    this.inputHeader2 = this.conversions[this.typeConversion].calculateForHeader2(value);
  }

  takeInputHeader2AndConvertToHeader1(value) {
    this.inputHeader1 = this.conversions[this.typeConversion].calculateForHeader1(value);
  }

   dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
