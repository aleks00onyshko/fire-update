import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RootStoreModule } from './store/store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootComponentsModule } from './components/components.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    RootStoreModule,
    RootComponentsModule,
    AppRoutingModule,
    environment.production ? null : StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    MatSidenavModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
