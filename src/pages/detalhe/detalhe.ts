import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalServiceProvider } from '../../providers/local-service/local-service';

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  estabelecimento: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public localService: LocalServiceProvider) {
    this.estabelecimento = this.navParams.get('estabelecimento');
    console.log(this.estabelecimento);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage', this.estabelecimento);
  }

}
