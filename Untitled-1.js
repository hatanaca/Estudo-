/*
function loopSimples(valor){
    for(let i = 0; i < valor;i++) {
        let matrizSimples = [];
        matrizSimples.push(i);
        console.log(matrizSimples[i])
    }
}
//loop Simples(10)

function loopComposto(valor){
    let matrizComposta = [[],[],[],[]]
    for (i in matrizComposta){
        for (j in matrizComposta){
            matrizComposta[i].push(j);
        }
        console.log(matrizComposta[i]);
    }
}
//loopComposto(10);

function loopCompostoV2(idade, nome){ 
    class objetoSimples { 
        constructor(idade, nome){ 
            this.idade = idade
            this.nome = nome
        }
    };  

    let matrizCompostaV2 = [[],[],[],[],[],[],[],[]];
    while (matrizCompostaV2) {
        matrizCompostaV2[0].push(new objetoSimples(prompt("Digite a idade: "), prompt("Digite o nome: ")));
            //for (i in matrizCompostaV2){
            // matrizCompostaV2[i].push({objetoNome:prompt("Digite o nome do objeto: ")});
            //matrizCompostaV2[i].push(i); 
        console.log(matrizCompostaV2[0]);
        if (matrizCompostaV2[0][0].idade !== undefined){ 
            break;
    }
            //console.log(matrizCompostaV2[i])
}
}
loopCompostoV2(10,"Thiago")*/
