export class Locais {

    private i = 1;
    private g = 2;
    private f = 3;
    private c = 4;
    private o = 5;
    private gc = 6;
    private ga = 7;

    // public servicos: [
    //     i: "Psicoterapia individual",
    //     g: "Psicoterapia de Grupo",
    //     f: "Psicoterapia Familiar",
    //     c: "Psicoterapia Conjugal",
    //     o: "Orientação Profissional",
    //     gc: "Grupo para crianças",
    //     ga: "Grupo para adolescentes"
    // ]

    // estabelecimentos: [
    //     {
    //         nome: "Instituto de Saúde da Faculdade Unijorge",
    //         end: "Av. Luís Viana Filho, 6775, Paralela",
    //         tel: "3206-8015",
    //         valor: "Gratuito",
    //         servs: [Locais["s"]["i"], s.g]
    //     },
    //     {
    //         nome: "Faculdade da Cidade do Salvador (FACS)",
    //         end: "Av. Estados Unidos, 37, 3° andar, Comércio",
    //         tel: "3254-6916/6943",
    //         valor: "Gratuito",
    //         servs: [servicos.i, this.s.g, this.s.gc,]
    //     },
    // ]

    estabelecimentos() {
        this.i = 1;
        var g = 2;
        var f = 3;
        var c = 4;
        var o = 5;
        var gc = 6;
        var ga = 7;
        
        let s = {
            i:  "Psicoterapia individual",
            g:  "Psicoterapia de Grupo",
            f:  "Psicoterapia Familiar",
            c:  "Psicoterapia Conjugal",
            o:  "Orientação Profissional",
            gc: "Grupo para crianças",
            ga: "Grupo para adolescentes"
        }
        
        let estabelecimentos = [
            {nome: "Instituto de Saúde da Faculdade Unijorge",
             end: "Av. Luís Viana Filho, 6775, Paralela",
             tel: "3206-8015",
             valor: "Gratuito",
             servs:[s.i, s.g]   	
            },
            
            {nome: "Faculdade da Cidade do Salvador (FACS)",
            end: "Av. Estados Unidos, 37, 3° andar, Comércio",
            tel: "3254-6916/6943",
            valor: "Gratuito",
            servs:[s.i, s.g, s.gc, ]   	
           },
        ]
        
    }


}