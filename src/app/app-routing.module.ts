import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootComponentsModule } from './components/components.module';
import { MainComponent } from './components/main';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent
  }
];

@NgModule({
  imports: [RootComponentsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
