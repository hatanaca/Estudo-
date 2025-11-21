
const tabelaVdd = [[true],[true],[true],[false],];
const tabelaVdd2 = [[false],[false],[false],[true],];

let tenhoEscopoBloco = "Bloco";
const textoImutavel = "Texto";

variavelHosting= 'Usando Hoisting';
var variavelHosting;  
console.log(variavelHosting);

let variavelVazia = null;  
let variavelSemValor;




let variavelLet;
variavelLet = 'Usando Let';
console.log(variavelLet);


exemploHoisting();  
function exemploHoisting() {
    console.log("texto")
}

function FuncaoEscopoLexico() {
    console.log(tenhoEscopoBloco)
    let variavelQueSai = 10;
    
    function escopoInterno() {
        console.log(variavelQueSai);
    }
    escopoInterno();
}

FuncaoEscopoLexico();

//console.log(variavelQueSai)




console.log(variavelVazia);
console.log(variavelSemValor);


if (!(variavelVazia && variavelSemValor)) {
    console.log("negação de um falsy é true, negação ");
}


if (tabelaVdd[0] || tabelaVdd2[0]) console.log("Operador OU");

if (tabelaVdd[3] && tabelaVdd2[3]) console.log("Operador E");

if (!(tabelaVdd[0] || tabelaVdd2[3])) console.log("Operador OU com negação");

if (!(tabelaVdd[1] && tabelaVdd2[0])) console.log("Operador E com negação");

if ((tabelaVdd[0] || tabelaVdd[3]) && (tabelaVdd[0] != tabelaVdd2[3])) console.log("XOR com operadores básicos");


