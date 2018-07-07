import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LocalServiceProvider } from '../providers/local-service/local-service';
// import { LocaisPage } from '../pages/locais/locais';
// import { DetalhePage } from '../pages/detalhe/detalhe';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html/sanitize-html';
import { LocaisPageModule } from '../pages/locais/locais.module';
// import { PipesModule } from '../pipes/pipes.module';
import { DetalhePageModule } from '../pages/detalhe/detalhe.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // SanitizeHtmlPipe
  ],
  imports: [
    LocaisPageModule,
    DetalhePageModule,
    BrowserModule,
    PipesModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // LocaisPage,
    // DetalhePage,
  ],
  exports: [],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalServiceProvider
  ]
})
export class AppModule {}
