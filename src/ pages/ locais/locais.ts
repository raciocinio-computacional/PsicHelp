import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalServiceProvider } from '../../providers/local-service/local-service';
import { DetalhePage } from '../detalhe/detalhe';


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

  mostrarDetalhes(estabelecimento: any){
    this.navCtrl.push(DetalhePage, {
      estabelecimento: estabelecimento
    })
    // this.localService.estabelicimentoCache = estabelecimento;
    
    // console.log(estabelecimento);
  }

}
Button <
android : layout _width = " wrap_content "
android : layout _height = wrap_content "
android: text = " Detalhe  do  prestador "
android: id = " @ id / detalhedoprestador "
android: layout_below = " @ id / textView "
android: layout_centerHorizontal = " true "
android: layout_marginTop = " 58dp " />
Botão botao detalhedoprestador = (Botão) findViewById (R.id.botao detalhedoprestador);
botao detalhedoprestador.setOnClickListener (new View.OnClickListener () {
@Sobrepor
public void onClick (Ver v) {
setContentView;
}
});
