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
   
    // Tipos de serviço psicologia
    let s = {
      "i":  "Terapia individual",
      "g":  "Terapia de Grupo",  
      "f":  "Terapia Familiar",
      "c":  "Terapia Conjugal",
      "o":  "Orientação Profissional",
      "gc": "Grupo para crianças",
      "ga": "Grupo para adolescentes"
    }
  

// Tipos de serviço psicologia


    let estabelecimentos = [

      // // Modelo:
      // {
      //   nome: "",
      //   end: "",
      //   tel: "",
      //   valor: "Gratuito",
      //   servico: [,],
      //   mapa: ''
      // },

      {
        nome: "Hospital Geral Couto Maia",
        end: "Rua São Francisco, s/n, Monte Serrat",
        tel: "3316-3084",
        valor: "Gratuito",
        servico: [s.i,s.f],
        descricao_servicos: "Neurologia e acompanhamento psicológico a pacientes com hanseníase e familiares",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.71451969123!2d-38.515134449204204!3d-12.926061062354414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71605620d7cdfb1%3A0xcb2127d46940bdc0!2sHospital+Couto+Maia!5e0!3m2!1spt-BR!2sbr!4v1530881072450" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },


      {
        nome: "Instituto de Saúde da Faculdade Unijorge",
        end: "Av. Luís Viana Filho, 6775, Paralela",
        tel: "3206-8015",
        valor: "Gratuito",
        servico: [s.i, s.g],
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5362927581573!2d-38.41222634920404!3d-12.937497762586544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71610af309d2219%3A0xbc365de20840c79e!2sAv.+Lu%C3%ADs+Viana%2C+6775+-+S%C3%A3o+Marcos%2C+Salvador+-+BA!5e0!3m2!1spt-BR!2sbr!4v1530877497475" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        nome: "Faculdade da Cidade do Salvador (FACS)",
        end: "Av. Estados Unidos, 37, 3° andar, Comércio",
        tel: "3254-6916/6943",
        valor: "Gratuito",
        servico: [s.i, s.g, s.gc,]
      },
    ]
    return estabelecimentos;
  }

  obterEstabelecimentosPorServico(servicoDesejado: String): any {
    servicoDesejado = servicoDesejado.toLowerCase();
    let estabelecimentos = this.obterEstabelecimentos();

    let estabelecimentosEncontrados = [];


    estabelecimentos.forEach(estabelecimento => {
      estabelecimento.servico.forEach(servico => {
         servico = servico.toLowerCase();         
         if(servicoDesejado == servico){
          estabelecimentosEncontrados.push(estabelecimento)
         }
      });
    });

    return  estabelecimentosEncontrados;

  }

}
