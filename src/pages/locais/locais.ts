import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalServiceProvider } from '../../providers/local-service/local-service';

/**
 * Generated class for the LocaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locais',
  templateUrl: 'locais.html',
})
export class LocaisPage {

  servico: String;
  locais: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private localService: LocalServiceProvider) {
    this.servico = this.navParams.get('servico');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocaisPage');
    this.locais = this.localService.obterEstabelecimentosPorServico(this.servico)
    console.log(this.locais);
  }

}
