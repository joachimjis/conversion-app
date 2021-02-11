import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabConversion',
        loadChildren: () => import('../tabConversion/tabConversion.module').then(m => m.TabConversionPageModule)
      },
      {
        path: 'tabAbout',
        loadChildren: () => import('../tabAbout/tabAbout.module').then(m => m.TabAboutPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tabConversion',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabConversion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
