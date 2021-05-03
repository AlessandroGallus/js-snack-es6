let automobili = [
  {
    marca:'a',
    modello:'i',
    alimentazione:'diesel'
  },
  {
    marca:'b',
    modello:'i',
    alimentazione:'metano' 
  },
  {
    marca:'c',
    modello:'j',
    alimentazione:'diesel'
  },
  {
    marca:'c',
    modello:'k',
    alimentazione:'benzina'
  },
  {
    marca:'c',
    modello:'i',
    alimentazione:'acqua(?)'
  },
  {
    marca:'a',
    modello:'k',
    alimentazione:'diesel'
  },
  {
    marca:'a',
    modello:'l',
    alimentazione:'diesel'
  },
  {
    marca:'b',
    modello:'i',
    alimentazione:'benzina'
  },
  {
    marca:'b',
    modello:'j',
    alimentazione:'metano'
  },
  {
    marca:'a',
    modello:'k',
    alimentazione:'idrogeno'
  }
];


let automobili_diesel = [];
let automobili_benzina = [];
let automobili_stranissime = [];

automobili_diesel = automobili.filter((automobili) => automobili.alimentazione == 'diesel')
automobili_benzina = automobili.filter((automobili) => automobili.alimentazione == 'benzina')
automobili_stranissime = automobili.filter((automobili) => automobili.alimentazione != 'benzina' && automobili.alimentazione != 'diesel')

console.log(automobili_diesel);
console.log(automobili_benzina);
console.log(automobili_stranissime);