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


//Ester

      {
        nome: "IBR - Instituto Baiano de Reabilitação",
        end: " Av. Presidente Vargas, no 2947, Ondina.",
        tel: "Tel: 3504-5900",
        // E-mail: ibr@fjs.org.br
        valor: "Gratuito",
        servico: [s.i,s.f],
        descricao_servicos: "Reabilitação e atendimento psicossocial a pessoa com deficiência física",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },

      {
        nome: "Centro de Atendimento Educacional Especializado Pestalozzi da Bahia",
        end: " Av. Ademar de Barros, s/n, Ondina.",
        tel: " 3247-0049/3331-9456",
        valor: "Gratuito",
        servico:  [s.i,s.f,s.g],
        descricao_servicos: "Serviços: Educacionais, pedagógicos e psicopedagógicos a pessoas de 6 a 35 anos com necessidades educacionais especiais em deficiência intelectual e TGB - Transtorno Global em Desenvolvimento (autismo). Núcleos de arte-cultura, esporte e lazer, apoio pedagógico e de tecnologia e informação.",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.46869232791!2d-38.511250049144174!3d-13.00579799078847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716036094a21545%3A0x9af813f09a75851f!2sAv.+Adhemar+de+Barros+-+Ondina%2C+Salvador+-+BA!5e0!3m2!1sen!2sbr!4v1530883126152" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },

      {
        nome: "Instituto Guanabara",
        end: "Rua Frederico Costa, n 93, Brotas.",
        tel: "3244-1142",
        valor: "Gratuito",
        servico:  [s.f,s.g],
        descricao_servicos: " Reabilitação, habilitação, educação e tratamento de crianças, adolescentes e adultos portadores de deficiência mental e transtornos nas áreas emocional, psicomotora e neurológica.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8477617282606!2d-38.50219964914424!3d-12.981587290804386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604c6c4346085%3A0xf0f0e745dfd2786e!2sR.+Frederico+Costa%2C+93+-+Engenho+Velho+de+Brotas%2C+Salvador+-+BA%2C+40243-045!5e0!3m2!1sen!2sbr!4v1530883353890" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  '
      },

      {
        nome: "Centro Estadual de Prevenção de Deficiência (SUS)",
        end: "Av. ACM, s/n, Iguatemi",
        tel: "3351-2330/ 3270-5601",
        valor: "Gratuito",
        servico:  [s.f,s.p],
        descricao_servicos: "Acompanhamento psicossocial, oficina terapêutica e atendimento psicopedagógico, visando à reabilitação física e neuroevolutiva de pessoas com deficiência.",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62205.564779135166!2d-38.535121637809524!3d-12.98158492755927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa440c6fe29a3af6e!2sAvenida+Ant%C3%B4nio+Carlos+Magalh%C3%A3es%2C+S%2FN!5e0!3m2!1sen!2sbr!4v1530884342503" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
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
