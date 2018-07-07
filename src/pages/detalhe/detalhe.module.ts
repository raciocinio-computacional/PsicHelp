import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePage } from './detalhe';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePage),
    PipesModule,
  
  ],
})
export class DetalhePageModule {}
