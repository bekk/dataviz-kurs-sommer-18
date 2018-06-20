# Helt grunnleggende

Første oppgave går ut på å ta disse dataene:

~~~javascript
    const data = [
      {name: "diamond", hardness: 10, color: "white"},
      {name: "ruby", hardness: 9, color: "red"},
      {name: "sapphire", hardness: 9, color: "blue"},
      {name: "topaz", hardness: 8, color: "yellow"},
      {name: "emerald", hardness: 7.5, color: "green"},
      {name: "amethyst", hardness: 7, color: "purple"},
      {name: "opal", hardness: 6, color: "black"},
    ];
~~~

og få dette resultatet:

![Resultat oppgave 1](img/1-table.png)

Legg merke til nummerformateringen og fargene. Oppgaven er ferdig når du synes at ditt resultat er likt nok.

### Utdelt oppsett

Boilerplate-koden som trengs for å få bygd en d3-visualisering i en react.js-app er allerede satt opp i denne mappen. Du vil mest sannsynlig skrive mesteparten av koden din i `Table.js` hvor det står `// ENTRY POINT FOR D3`.

Det er ikke en del av kurset å lære seg JavaScript eller react.js. Oppsettet følger det vanlige filoppsettet i react-applikasjoner. Her er allikevel en kort guide over filene i oppsettet:

```javascript
1-table/
├── node_modules/           // Internt brukt av npm
├── public/                 
│   └── index.html          // Html-en ligger her
├── src/
│   ├── App.css             // CSS-en ligger her
│   ├── index.js            // Inngangsporten til javascript-koden
│   ├── App.js              // React-komponent som wrapper hele applikasjonen
│   ├── Table.js            // React-komponenten med visualiseringen
│   └── Roboto-Light.tff    // En kul font
├── package.json            // Byggekonfigurasjonen til npm
└── README.md               // Denne readme-filen
```

### Bygging og kjøring

Bygg med `npm install`. Dette gjøres typisk kun 1 gang.

Kjør med `npm start`. Dette vil åpne en utviklings-server som serverer applikasjonen og oppdaterer seg automatisk hver gang du lagrer filer.

### Tips

* D3 trenger ikke å nødvendigvis å bindes til svg-elementer. I denne oppgaven skal den bindes til en vanlig HTML-tabell `<table>`

* For å lage en `<tr>` i tabellen for hvert innslag i dataene gjør man altså:

```javascript
const dataTR = select(table)
    .selectAll("tr")
    .data(data)
    .enter()
    .append("tr");
```

* Måten man bruker `.append påvirker hierarkiet av elementer: 

```javascript
dataTR
    .append("foo")
    .append("foo")
    .append("foo");

/* resultat: 
<tr>
    <foo>
        <foo>
            <foo />
        </foo>
    </foo>
</tr>
*/
```

```javascript
dataTR.append("foo");
dataTR.append("foo");
dataTR.append("foo");

/* resultat: 
<tr>
    <foo />
    <foo />
    <foo />
</tr>
*/
```

* For å appende bare tekst, og ikke et DOM-element, bruk `.text((d, i) => "en tekst")`

### Fasit

Se `fasit.js` for en mulig løsning og ekstra hint. Det er viktig å huske at det er som regel veldig mange forskjellige måter å lage samme visualisering på.