import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LocalServiceProvider } from '../providers/local-service/local-service';
import { LocaisPage } from '../pages/locais/locais';
import { DetalhePage } from '../pages/detalhe/detalhe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LocaisPage,
    DetalhePage,    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LocaisPage,
    DetalhePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalServiceProvider
  ]
})
export class AppModule {}
