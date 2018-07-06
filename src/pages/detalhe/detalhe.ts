import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalServiceProvider } from '../../providers/local-service/local-service';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  estabelecimento: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public localService: LocalServiceProvider) {
    // this.estabelecimento = this.navParams.get('estabelecimento');
    // this.estabelecimento =  
    this.estabelecimento = this.localService.estabelicimentoCache;
    console.log(this.estabelecimento);
  }

  ionViewDidLoad() {
    this.estabelecimento = this.localService.estabelicimentoCache;
    console.log('ionViewDidLoad DetalhePage', this.estabelecimento);
  }

}
