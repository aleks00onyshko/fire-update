import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SidebarComponent } from './sidebar';
import { MainComponent } from './main';
import { RouterModule } from '@angular/router';

const COMPONENTS = [SidebarComponent, MainComponent];
const MAT_MODULES = [MatSidenavModule, MatListModule, MatProgressSpinnerModule];

@NgModule({
  imports: [CommonModule, RouterModule, ...MAT_MODULES],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class RootComponentsModule {}
