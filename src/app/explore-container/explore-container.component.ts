import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ConversionPage } from '../conversion/conversion.page';
enum TypeConversionEnum {
  Temperature = 0,
  Volume,
  Distance,
  Size
}

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {

  public get typeConversion(): typeof TypeConversionEnum {
    return TypeConversionEnum; 
  }
  public tap: number = 0;
  
  constructor(
    private modalController:ModalController
  ) { }

  ngOnInit() {}

  openConversionPage(typeConversion: TypeConversionEnum) {
    console.log(typeConversion);

    this.presentModal(typeConversion);
  }

  async presentModal(typeConversion: TypeConversionEnum) {
    const modal = await this.modalController.create({
      component: ConversionPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'typeConversion': typeConversion,
      }
    });
    return await modal.present();
  }
}
