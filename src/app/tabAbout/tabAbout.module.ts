import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TabAboutPageRoutingModule } from './tabAbout-routing.module';
import { TabAboutPage } from './tabAbout.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabAboutPageRoutingModule
  ],
  declarations: [TabAboutPage]
})
export class TabAboutPageModule {}
