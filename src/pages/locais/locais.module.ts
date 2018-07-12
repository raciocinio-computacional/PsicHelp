import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocaisPage } from './locais';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    LocaisPage,
  ],
  imports: [
    IonicPageModule.forChild(LocaisPage),
    PipesModule,
  ],
})
export class LocaisPageModule {}
