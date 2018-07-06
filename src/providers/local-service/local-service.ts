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

  public estabelicimentoCache: any;

  obterEstabelecimentos(): any {

    // Tipos de serviço psicologia e psiquiatria
    let s = {
      "i": "Terapia individual",
      "g": "Terapia de Grupo",
      "f": "Terapia Familiar",
      "c": "Terapia Conjugal",
      "p": "Orientação Profissional",
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
        servico: [s.i, s.f],
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



      // Thaiane

      {
        nome: "CREASI - Centro de Referência de Atenção à Saúde do Idoso",
        end: "Av. Antonio Carlos Magalhães, s/n, Iguatemi",
        tel: "3270-5741/5758",
        valor: "Gratuito",
        servico: [s.i, s.g],
        descricao_servicos: "Psicoterapia individual e em grupo para idosos, grupos de convivência, atendimento familiar, avaliação cognitiva, atividades educativas e psiquiatria.",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.253897976643!2d-38.511242241618795!3d-12.993793332773462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b3c486d22fb%3A0xcf98d6732a5be127!2sCREASI!5e0!3m2!1spt-BR!2sbr!4v1530883858773" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },

      {
        nome: "Centro de Referência LGBT",
        end: "Avenida Oceânica, 3.731, Rio Vermelho",
        tel: "3202-2750",
        valor: "Gratuito",
        servico: [s.i],
        descricao_servicos: "acompanhamento e orientação jurídica, psicológica e social ao público LGBT",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3967385491915!2d-38.501651249497044!3d-13.010388590785437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716035b98065213%3A0x5506b9f6469feb22!2sCentro+Municipal+de+Refer%C3%AAncia+LGBT!5e0!3m2!1spt-BR!2sbr!4v1530884873584" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },

      {
        nome: "ABRE - Associação Baiana de Reabilitação e Educação do Excepcional",
        end: "Rua Raul Leite, 93, Vila Laura, Matatu de Brotas.",
        tel: "3021-0500",
        valor: "Gratuito",
        servico: [s.i],
        descricao_servicos: "Reabilitação, Habilitação e educação de crianças e adolescentes portadores de deficiência mental, Serviço Social, Neurologia, Fonoaudiologia, Psiquiatria, Psicoterapia e Psicopedagogia.         Pagamento: Gratuito credenciado pelo SUS.", mapa: ' Rua Raul Leite, 93, Vila Laura, Matatu de Brotas.'
      },

      {
        nome: "INESPI - Associação de Pais e Amigos de Crianças e Adolescentes com Distúrbios de Comportamento",
        end: "Rua Alberto Fiúza, no 500, Imbuí.",
        tel: "3231-1502",
        valor: "Gratuito",
        servico: [s.i],
        descricao_servicos: "Avaliação psicológica, pedagógica e psiquiátrica. Grupos pedagógicos e terapêuticos.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.048465646228!2d-38.43822564949772!3d-12.968750590812864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a50c23e2471%3A0x91aaa4b6ed532a96!2sR.+Alberto+Fi%C3%BAsa%2C+500+-+Imbu%C3%AD%2C+Salvador+-+BA!5e0!3m2!1spt-BR!2sbr!4v1530886579980" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  '
      },


      //Ester

      {
        nome: "IBR - Instituto Baiano de Reabilitação",
        end: " Av. Presidente Vargas, no 2947, Ondina.",
        tel: "Tel: 3504-5900",
        // E-mail: ibr@fjs.org.br
        valor: "Gratuito",
        servico: [s.i, s.f],
        descricao_servicos: "Reabilitação e atendimento psicossocial a pessoa com deficiência física",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },

      {
        nome: "Centro de Atendimento Educacional Especializado Pestalozzi da Bahia",
        end: " Av. Ademar de Barros, s/n, Ondina.",
        tel: " 3247-0049/3331-9456",
        valor: "Gratuito",
        servico: [s.i, s.f, s.g],
        descricao_servicos: "Serviços: Educacionais, pedagógicos e psicopedagógicos a pessoas de 6 a 35 anos com necessidades educacionais especiais em deficiência intelectual e TGB - Transtorno Global em Desenvolvimento (autismo). Núcleos de arte-cultura, esporte e lazer, apoio pedagógico e de tecnologia e informação.",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.46869232791!2d-38.511250049144174!3d-13.00579799078847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716036094a21545%3A0x9af813f09a75851f!2sAv.+Adhemar+de+Barros+-+Ondina%2C+Salvador+-+BA!5e0!3m2!1sen!2sbr!4v1530883126152" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },

      {
        nome: "Instituto Guanabara",
        end: "Rua Frederico Costa, n 93, Brotas.",
        tel: "3244-1142",
        valor: "Gratuito",
        servico: [s.f, s.g],
        descricao_servicos: " Reabilitação, habilitação, educação e tratamento de crianças, adolescentes e adultos portadores de deficiência mental e transtornos nas áreas emocional, psicomotora e neurológica.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8477617282606!2d-38.50219964914424!3d-12.981587290804386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604c6c4346085%3A0xf0f0e745dfd2786e!2sR.+Frederico+Costa%2C+93+-+Engenho+Velho+de+Brotas%2C+Salvador+-+BA%2C+40243-045!5e0!3m2!1sen!2sbr!4v1530883353890" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  '
      },

      {
        nome: "Centro Estadual de Prevenção de Deficiência (SUS)",
        end: "Av. ACM, s/n, Iguatemi",
        tel: "3351-2330/ 3270-5601",
        valor: "Gratuito",
        servico: [s.f, s.p],
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
        servico: [s.i, s.g],
        descricao_servicos: "Psicoterapia individual (todas as faixas etárias) e Grupo terapêuticos.",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7056640692804!2d-38.49023994949735!3d-12.990668090798456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604b468305749%3A0x72a5e386090aeb20!2sBAHIANA+-+School+of+Medicine+and+Public+Health!5e0!3m2!1sen!2sbr!4v1530796297375" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },

      {
        nome: "Núcleo de Estudos e Práticas Psicológicas (NEPSI) da Unifacs",
        end: "Rua Solimões, 181, Saboeiro",
        tel: "3271-8119",
        valor: "Gratuito",
        servico: [s.i, s.c, s.f, s.p],
        descricao_servicos: "Psicoterapia individual, conjugal, familiar, psicodiagnóstico e orientação profissional",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0610173228656!2d-38.444615349497695!3d-12.967947390813427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a56347e5f53%3A0x2e23aca9bc3c28e1!2sUnifacs+PA+10!5e0!3m2!1sen!2sbr!4v1530796458956" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },

      {
        nome: "FTC - Faculdade de Tecnologia e Ciências",
        end: "Av. Luís Viana Filho, 8812, Paralela",
        tel: "3281-8073",
        valor: "Gratuito",
        servico: [s.i],
        descricao_servicos: "Psicodiagnóstico, psicoterapia individual (todas as faixas etárias) e psicoterapia em grupos, família e casal",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5754021517782!2d-38.39477344949795!3d-12.934988990835148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716174fae89b33b%3A0x163e53b115d615cd!2sFTC+-+Faculdade+de+Tecnologia+e+Ci%C3%AAncias%2C+Campus+Salvador!5e0!3m2!1sen!2sbr!4v1530796580180" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },

      //Naiara

      {
        nome: "UFBA - Universidade Federal da Bahia",
        end: "Rua Professor Aristides Novais, 197, Federação (São Lázaro)",
        tel: "3235-4589",
        valor: "Gratuito ou Preco Negociado",
        servico: [s.i, s.p],
        descricao_servicos: "Atendimento psicológico individual (adolescente, adulto psicodiagnóstico e orientação profissional e idoso)",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.54935361837!2d-38.513638949529465!3d-13.000649963871066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716049de15a3b17%3A0xe744f5fde0253b33!2sR.+Prof.+Arist%C3%ADdes+Novis%2C+197+-+Federa%C3%A7%C3%A3o%2C+Salvador+-+BA%2C+40210-630!5e0!3m2!1spt-BR!2sbr!4v1530883874947" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },

      {
        nome: "Faculdade Ruy Barbosa",
        end: "Rua Theodomiro Batista, 422, Rio Vermelho",
        tel: "3205-1745",
        valor: "Gratuito",
        servico: [s.i, s.p],
        descricao_servicos: "Orientação profissional, psicoterapia individual e familiar (todas as faixas etárias), diagnóstico e reabilitação cognitiva.Atendimento psicológico com enfoque em gênero(núcleo de Direitos Humanos e LGBT).",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.7040583534754!2d-38.48220960800574!3d-13.009662778361196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161cabb1e48e97%3A0x2980e20c7b0b64ea!2sRua+Theodomiro+Baptista%2C+422+-+Rio+Vermelho%2C+BA%2C+41940-320!5e0!3m2!1spt-BR!2sbr!4v1530884106686" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },

      {
        nome: "Instituto de Saúde da Faculdade Unijorge",
        end: "Av. Luís Viana Filho, 6775, Paralela",
        tel: "3206-8015",
        valor: "Gratuito",
        servico: [s.i, s.g, s.p],
        descricao_servicos: "Psicoterapia individual a todas as faixas etárias, Psicodiagnóstico, Avaliação Psiconeurológica, Orientação Profissional e Grupos terapêuticos.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31106.389013382017!2d-38.43724443958639!3d-12.952733188922403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71610af309d2219%3A0xbc365de20840c79e!2sAv.+Lu%C3%ADs+Viana%2C+6775+-+S%C3%A3o+Marcos%2C+Salvador+-+BA!5e0!3m2!1spt-BR!2sbr!4v1530884231477" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },

      {
        nome: "Faculdade da Cidade do Salvador",
        end: "Av. Estados Unidos, 37, 3° andar, Comércio",
        tel: "3254-6916/6943",
        valor: "Gratuito ou Preço Negociado",
        servico: [s.i, s.g],
        descricao_servicos: "Psicoterapia individual e em grupo para crianças, adolescentes e adultos.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.069513768239!2d-38.5115930495299!3d-12.967403663193645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604e11a5d4391%3A0x3ab90f53e136da6a!2sAv.+Estados+Unidos%2C+37+-+3%C2%B0+andar+-+Comercio%2C+Salvador+-+BA%2C+40010-020!5e0!3m2!1spt-BR!2sbr!4v1530884363209" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },

      // Beatriz
      {
        nome: "Núcleo de Atendimento Psicológico (NAP) da Faculdade Castro Alves/UNIRB",
        end: "Rua Rubem Berta, 128, Pituba",
        tel: "3033-0009",
        valor: "Gratuito",
        servico: [s.i],
        descricao_servicos: "Psicoterapia individual para crianças, adolescentes e adultos",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5721685101134!2d-38.45320374949717!3d-12.999193490792829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x450657f3ff4cc65%3A0x9e7c2345cb524bb0!2sFaculdade+Castro+Alves!5e0!3m2!1spt-BR!2sbr!4v1530882231553" width="600" height="450" frameborder="0" style="border:0" allowfullscreen> </iframe>'
      },
      {
        nome: "FACULDADE SOCIAL DA BAHIA – FSBA",
        end: "Av. Oceânica, 2717, Ondina",
        tel: "4009-2937/2935",
        valor: "Gratuito",
        servico: [s.i],
        descricao_servicos: "Psicoterapia individual a todas as faixas etárias",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.395059549233!2d-38.510682749497334!3d-13.01049569078536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716036635c57f13%3A0xaabc087e3c266e12!2sFaculdade+Social+da+Bahia!5e0!3m2!1spt-BR!2sbr!4v1530882460413" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        nome: "UNIME PARALELA",
        end: "Rua Jairo Simões, 3172, Imbuí",
        tel: "3879-9155",
        valor: "Gratuito",
        servico: [s.i, s.p],
        descricao_servicos: "Atendimento psicológico individual(criança, adolescente, adulto e idoso) grupos terapêuticos, orientação para pais, orientação profissional(carreira / coaching, inserção no mercado de trabalho, qualidade de vida no trabalho e saúde mental do/a trabalhador/a)",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1748632446975!2d-38.43402704949762!3d-12.960659990818193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a42d714b603%3A0xdf606e5008e75b2b!2sR.+Prof.+Ja%C3%ADro+Sim%C3%B5es%2C+3172+-+Pitua%C3%A7u%2C+Salvador+-+BA%2C+41720-375!5e0!3m2!1spt-BR!2sbr!4v1530882793957" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        nome: "Faculdade Estácio",
        end: "Rua Xingu, 179, Jd Atalaia, Stiep.",
        tel: "2107-8144",
        valor: "Gratuito",
        servico: [s.i, s.f],
        descricao_servicos: "psicoterapia individual (todas as faixas etárias) e familiar",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.845016404577!2d-38.44905474949743!3d-12.981762790804314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b06e3eee8a5%3A0x33988cea9946e2e0!2zRXN0w6FjaW8!5e0!3m2!1spt-BR!2sbr!4v1530883024622" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        nome: "UNIVERSIDADE DO ESTADO DA BAHIA – UNEB",
        end: "Rua Silveira Martins, 2555, Cabula",
        tel: "3117-5336/5341",
        valor: "Gratuito",
        servico: [s.i, s.g],
        descricao_servicos: "psicoterapia individual e em grupo com todas as faixas etárias",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.318776205092!2d-38.46079249843412!3d-12.951442199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71612308d8d0ea7%3A0xdddaf66ca849c879!2sUniversidade+do+Estado+da+Bahia!5e0!3m2!1spt-BR!2sbr!4v1530883300079" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
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
        if (servicoDesejado == servico) {
          estabelecimentosEncontrados.push(estabelecimento)
        }
      });
    });

    return estabelecimentosEncontrados;

  }

}
