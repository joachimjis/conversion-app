import { Component, OnInit, Input } from '@angular/core';
enum TypeConversionEnum {
  Temperature = 0,
  Volume,
  Distance,
  Speed
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
  
  constructor() { }

  ngOnInit() {}

  openConversionPage(typeConversion: TypeConversionEnum) {
    console.log(typeConversion);
  }

  tapEvent(e) {
    this.tap++;
  }
}
