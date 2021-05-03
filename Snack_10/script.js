let persone = [
	{ nome: 'Mario', cognome: 'Rossi', eta: 60 },
	{ nome: 'Luigi', cognome: 'Verdi', eta: 12 },
	{ nome: 'Silvia', cognome: 'Neri', eta: 25 },
];

let frasi= persone.map((element)=> {
  let conferma = (element.eta >=18) ? 'può guidare' : 'non può guidare'
  let frase = `${element.nome} ${element.cognome} ${conferma} dato che ha ${element.eta} anni!`
  return frase;
});

console.log(frasi)