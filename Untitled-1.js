
// const tabelaVdd = [[true],[true],[true],[false],];
// const tabelaVdd2 = [[false],[false],[false],[true],];

// let tenhoEscopoBloco = "Bloco";
// const textoImutavel = "Texto";

// variavelHosting= 'Usando Hoisting';
// var variavelHosting;  
// console.log(variavelHosting);

// let variavelVazia = null;  
// let variavelSemValor;


//function soma(a, b) {
//    return a + b;
//}

//let newArray = [2,3];
//console.log(soma(...newArray));


class Status {
    constructor(hp, mp, power, defense, atacke, speed) {
        this.hp = hp;
        this.mp = mp;
        this.power = power;
        this.defense = defense;
        this.atacke = atacke;
        this.speed = speed;
    }
}

class Type {
    constructor(element, level, classe) {
        Type.construtorDeStatus(element, level, classe)

    }

    static construtorDeStatus(...dadosBrutos){
        const statusBase = [100,100,100,100,100,100];

        const verifyLogic = function(element, level, classe){
            if((typeof element !== "string" || typeof classe !== "string") ||
             (typeof level !== "number" || (level > 100 || level < 1))){
                throw new Error("Caracteristicas invalidaes");
            } 
            return true;
        }

        if(verifyLogic(element,level,classe)) {console.log("")}
    } 
}


const exemploClasseType = new Type("fire", 5, "guerreiro");
console.log(exemploClasseType);












// const arrayDigimon = ["Agumon", "Gabumon", "Patamon", "Gatomon", "Tentomon", "Palmon", "Biyomon", "Gomamon", "Piyomon", "Tokomon"];

// const arrayDeTeste = [];
// for(let linha = 0; linha < 10; linha++) {
//     arrayDeTeste.push([]);
//     for(let coluna = 0; coluna < 10; coluna++){
//         arrayDeTeste[linha].push(arrayDigimon[coluna]);
//     }
// }
// console.log(arrayDeTeste);



// for (let [linha, coluna] of arrayDeTeste) {
//     console.log(arrayDeTeste[linha], arrayDeTeste[coluna]);
// }



// //const inimigo1 = new Enemy();
// //console.log(inimigo1);









// let variavelLet;
// variavelLet = 'Usando Let';
// console.log(variavelLet);


// exemploHoisting();  
// function exemploHoisting() {
//     console.log("texto")
// }

// function FuncaoEscopoLexico() {
//     console.log(tenhoEscopoBloco)
//     let variavelQueSai = 10;
    
//     function escopoInterno() {
//         console.log(variavelQueSai);
//     }
//     escopoInterno();
// }

// FuncaoEscopoLexico();

// //console.log(variavelQueSai)




// console.log(variavelVazia);
// console.log(variavelSemValor);


// if (!(variavelVazia && variavelSemValor)) {
//     console.log("negação de um falsy é true, negação ");
// }


// if (tabelaVdd[0] || tabelaVdd2[0]) console.log("Operador OU");

// if (tabelaVdd[3] && tabelaVdd2[3]) console.log("Operador E");

// if (!(tabelaVdd[0] || tabelaVdd2[3])) console.log("Operador OU com negação");

// if (!(tabelaVdd[1] && tabelaVdd2[0])) console.log("Operador E com negação");

// if ((tabelaVdd[0] || tabelaVdd[3]) && (tabelaVdd[0] != tabelaVdd2[3])) console.log("XOR com operadores básicos");


// function regularFunction() {
//     const expressFunction = function() {
//         return this;
//     }
//     return console.log(expressFunction());
    
// }  
// regularFunction();


// const arrowFunction = () => {
//     return "arrowFunction with more letters";
// }

// const shortArrowFunction = x => x * x;

// console.log(shortArrowFunction(5));



// class Digimon {
//     constructor(name, level, element) {
//         this.name = name;
//         this.level = level;
//         this.element = element;
//     }

//     elemento(element) {
//         this.element = "SEILA"
//     }

//     Hp = 100;

//     Atacke(target) {
//         if ((!target instanceof Digimon)) {
//             throw new Error("Target must be a Digimon");
//         }
//         target.Hp = target.Hp - 10;
//         console.log(`${this.name} attacked ${target.name}, ${target.name} has ${target.Hp} Hp left. `)
        
//     }
// }

// const Agumon = new Digimon("Agumon", "Rookie", "Fire");

// const Gabumon = new Digimon("Gabumon", "Rookie");

// Agumon.Atacke(Gabumon);
// Gabumon.Atacke(Agumon);




