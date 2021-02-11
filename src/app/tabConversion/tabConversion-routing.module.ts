import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabConversionPage } from './tabConversion.page';

const routes: Routes = [
  {
    path: '',
    component: TabConversionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
