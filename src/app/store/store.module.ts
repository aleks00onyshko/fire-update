import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FireUpdateEffects } from './effects';
import { fireUpdateReducer } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot({
      fireUpdate: fireUpdateReducer
    }),
    EffectsModule.forRoot([FireUpdateEffects])
  ]
})
export class RootStoreModule {}
