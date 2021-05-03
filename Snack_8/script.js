let nomi = ['aLeSSandro', 'GiORGIO', 'luca', 'MANUELE','leOpoLdo'];

/* for(i=0;i<nomi.length;i++){
  let nome = nomi[i];
  nomi[i] = nome.toLowerCase();
} */

/* Mi sono offeso, il for normale mi piaceva di più */

let nomi_lower = nomi.map((element)=>{return element.toLowerCase()})
let nomi_corretti =nomi_lower.map((element)=>{return element.charAt(0).toUpperCase() + element.slice(1)})
console.log(nomi_lower)
console.log(nomi_corretti)
