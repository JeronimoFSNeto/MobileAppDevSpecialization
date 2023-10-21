let codigo = "3 - 14 - 12 - 15 - 20 - 19 - 1 - 4 - 14 - 17";

const substituicoes = {
    "1": "a",
    "3": "c",
    "4": "d",
    "12": "m",
    "14": "o",
    "15": "p",
    "17": "r",
    "19": "t",
    "20": "u"
};

const numeros = codigo.split(" - ");

const palavra = numeros.map(numero => {
    if (substituicoes[numero]) {
        return substituicoes[numero];
    }
    return numero;
}).join(""); 

console.log("Palavra gerada: " + palavra);
