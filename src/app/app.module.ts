import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
// import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireMessagingModule,
    // ServiceWorkerModule.register('ngsw.js', { enabled: true })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
