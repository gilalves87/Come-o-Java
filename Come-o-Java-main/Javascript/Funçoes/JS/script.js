//Função
function minhafuncao () {
    console.log("PHP")
}
minhafuncao();
minhafuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Derik Lacerda");
} ;

minhaFuncaoEmVariavel()

function funcaoComParametro (txt){
    console.log(`Imprimindo : ${txt}`);
}

funcaoComParametro("carros disney");
funcaoComParametro("Outra coisa");
//Return
const a=10
const b=45
const c=55
const d=60
function soma(n1,n2) {
    return n1 + n2;
}

const resultado = soma(a,b);
console.log(resultado)

console.log(soma (c,d))
