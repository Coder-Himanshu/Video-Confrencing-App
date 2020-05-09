import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc'; // Add

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NgxAgoraModule } from 'ngx-agora';

// Add
const agoraConfig: AgoraConfig = {
  AppID: 'daf7d3b5780a4ee9b1011085c0872278',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularAgoraRtcModule.forRoot(agoraConfig),
    NgxAgoraModule.forRoot({ AppID: environment.agora.appId }) // Add
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
