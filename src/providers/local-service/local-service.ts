import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Locais } from '../../models/locais';


/*
  Generated class for the LocalServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalServiceProvider {

  constructor() {
    console.log('Hello LocalServiceProvider Provider');
  }

  obterEstabelecimentos(): any {
   
    let s = {
      "i": "Psicoterapia individual",
      "g": "Psicoterapia de Grupo",
      "f": "Psicoterapia Familiar",
      "c": "Psicoterapia Conjugal",
      "o": "Orientação Profissional",
      "gc": "Grupo para crianças",
      "ga": "Grupo para adolescentes"
    }

    let estabelecimentos = [
      {
        nome: "Instituto de Saúde da Faculdade Unijorge",
        end: "Av. Luís Viana Filho, 6775, Paralela",
        tel: "3206-8015",
        valor: "Gratuito",
        servs: [s.i, s.g]
      },
      {
        nome: "Faculdade da Cidade do Salvador (FACS)",
        end: "Av. Estados Unidos, 37, 3° andar, Comércio",
        tel: "3254-6916/6943",
        valor: "Gratuito",
        servs: [s.i, s.g, s.gc,]
      },
    ]
    return estabelecimentos;
  }

  obterEstabelecimentosPorServico(servicoDesejado: String): any {
    servicoDesejado = servicoDesejado.toLowerCase();
    let estabelecimentos = this.obterEstabelecimentos();

    let estabelecimentosEncontrados = [];


    estabelecimentos.forEach(estabelecimento => {
      estabelecimento.servs.forEach(servico => {
         servico = servico.toLowerCase();         
         if(servicoDesejado == servico){
          estabelecimentosEncontrados.push(estabelecimento)
         }
      });
    });

    return  estabelecimentosEncontrados;

  }

}
