# Oppgave 4 - Dynamiske data

Denne oppgaven går ut på å ta disse dataene:

~~~javascript
const data = [
  {name: "a", value: 5}, 
  {name: "b", value: 10}, 
  {name: "c", value: 1}, 
  {name: "e", value: 3}, 
  {name: "f", value: 2}, 
  {name: "g", value: 1}, 
  {name: "h", value: 4}, 
  {name: "i", value: 2}, 
  {name: "j", value: 7}
];
~~~

og håndtere at dataene endrer seg kontinuerlig. Det vil bli lagt til nye data, data vil blir fjernet, og eksisterende data vil få nye verdier. Alt skal animeres slik at resultat blir slik:

![Resultat dynamic data](../../img/4-dynamicdata.gif)

Hver sirkel har en fargenyanse og størrelse iht til sin verdi, og navnet sitt over seg. Ved endret verdi animeres endring i sirkelens størrelse. Ved fjerning og tillegging av data animeres translasjonen til nye posisjoner.

## Tips
