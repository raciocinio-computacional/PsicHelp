import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocaisPage } from './locais';

@NgModule({
  declarations: [
    LocaisPage,
  ],
  imports: [
    IonicPageModule.forChild(LocaisPage),
  ],
})
export class LocaisPageModule {}
