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
   
    // Tipos de serviço psicologia e psiquiatria
    let s = {
      "i":  "Terapia individual",
      "g":  "Terapia de Grupo",  
      "f":  "Terapia Familiar",
      "c":  "Terapia Conjugal",
      "p":  "Orientação Profissional",
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
        servico: [s.i, s.g]
      },


      // Flávia
      {
        nome: "NACPC - Núcleo de Atendimento à Criança com Paralisia Cerebral",
        end: "Rua do Corte Grande, 160, Alto de Ondina",
        tel: "3611-2902",
        valor: "Gratuito",
        servico: [s.i, s.f],
        descricao_servicos: "Acompanhamento psicológico a crianças com paralisia cerebral e seus familiares.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.450451539659!2d-38.50325274949709!3d-13.006961890787682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716035ec9190fe9%3A0x44bbe300230168ba!2sNACPC!5e0!3m2!1sen!2sbr!4v1530795898069" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },


      
      {
        nome: "Escola Bahiana de Medicina e Saúde Pública",
        end: "Av. Dom João VI, 275, Brotas",
        tel: "3276-8259/8298",
        valor: "Gratuito",
        servico:  [s.i, s.g],
        descricao_servicos: "Psicoterapia individual (todas as faixas etárias) e Grupo terapêuticos.",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7056640692804!2d-38.49023994949735!3d-12.990668090798456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604b468305749%3A0x72a5e386090aeb20!2sBAHIANA+-+School+of+Medicine+and+Public+Health!5e0!3m2!1sen!2sbr!4v1530796297375" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },


      // Modelo:
      {
        nome: "Núcleo de Estudos e Práticas Psicológicas (NEPSI) da Unifacs",
        end: "Rua Solimões, 181, Saboeiro",
        tel: "3271-8119",
        valor: "Gratuito",
        servico:  [s.i, s.c, s.f, s.p],
        descricao_servicos: "Psicoterapia individual, conjugal, familiar, psicodiagnóstico e orientação profissional",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0610173228656!2d-38.444615349497695!3d-12.967947390813427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a56347e5f53%3A0x2e23aca9bc3c28e1!2sUnifacs+PA+10!5e0!3m2!1sen!2sbr!4v1530796458956" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },


// Modelo:
      {
        nome: "FTC - Faculdade de Tecnologia e Ciências",
        end: "Av. Luís Viana Filho, 8812, Paralela",
        tel: "3281-8073",
        valor: "Gratuito",
        servico:  [s.i],
        descricao_servicos: "Psicodiagnóstico, psicoterapia individual (todas as faixas etárias) e psicoterapia em grupos, família e casal",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5754021517782!2d-38.39477344949795!3d-12.934988990835148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716174fae89b33b%3A0x163e53b115d615cd!2sFTC+-+Faculdade+de+Tecnologia+e+Ci%C3%AAncias%2C+Campus+Salvador!5e0!3m2!1sen!2sbr!4v1530796580180" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
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
