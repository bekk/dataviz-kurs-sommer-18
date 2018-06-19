Tool of choice: D3
===================

* *Hva er D3?*
* *Hvordan henger D3 sammen?*
* *Hvordan lager man noe i D3?*

***

Agenda:

Hva er D3?
    Data-Driven Documents
    Rammeverk for datavisualisering
        Hovedsaklig ment for 2D
        Bygger på etablerte HTML5-standarder
        Veldig stabilt, veldig populært, veldig stort community
    Et mer lavnivås rammeverk ift andre graf-biblioteker
        Men, mye mer frihet til å gjøre noe originalt
Hvordan er D3 bygd opp?
    Ligger i navnet: Data-Driven Documents
        Documents er en DOM, som kan være html-en på siden, men spesielt viktig kan også være elementene i en SVG
    Dataene er som regel utgangspunktet
        De transformeres og masseres
        Og bindes til documentet
        Eller motsatt da, at dokumentet er utgangspunktet og bindes til dataene    Bottom line: Det bindes! Man kan se på det den ene eller andre veien
    Ved endringer i data kjøres hele rekka på nytt, og visualiseringen endres
Hvordan lager man noe i D3?
    Bindingen
        .data (mapping av data, med key)
        .enter (ved nye data)
        .exit (ved data som går bort)

    General Update Pattern for dynamiske visualiseringer

    D3 sine essensielle modules
        Selection
        Transitions
        Axes
        Scale
        Hierarchy
        ... (finn ut hvilke som er viktige for oppgavene)

***

Hva er D3?
-----------

Data-Driven Documents

* Rammeverk for datavisualisering

* Hovedsaklig ment for 2D på web

* Bygger på etablerte HTML5-standarder

* Veldig stabilt, veldig populært, veldig stort community

* Lavnivås rammeverk
    * Mer arbeid
    * Frihet til å gjøre noe originalt

![D3 examples](/img/d3-examples.jpg)

***

Hvordan henger D3 sammen?
--------------------------

D3 = Data-Driven Documents

### Data ###

JSON

    [
        { name:"Ireland", income:53000, life: 78, pop:6378, color: "black" },
        { name:"Norway", income:73000, life: 87, pop:5084, color: "blue" },
        { name:"Tanzania", income:27000, life: 50, pop:3407, color: "grey" }
    ]

CSV

    id,firstname,lastname,age
    1,holger,ludvigsen,31
    2,arne,bakke olsen,47
    3,bjarne,tellefsen,25
    4,hanne-lise,severinsen,28

osv

***

D3 = Data-Driven Documents

### Documents ###

HTML

    <html>
        <body>
            <div>
                <p>...</p>
                <table>
                    <tr><td>...</td><td>...</td></tr>
                    <tr><td>...</td><td>...</td></tr>
                </table>
                <svg>
                    ...
                </svg>
            </div>
        </body>
    </html>

SVG

    <svg height="100" width="500">
        <ellipse cx="240" cy="50" rx="220" ry="30" style="fill:yellow" />
        <ellipse cx="220" cy="50" rx="190" ry="20" style="fill:black" />
    </svg>

CSS

    h1 {
        color: blue;
    }

    svg:hover ellipse {
        fill: red;
    }

***

D3 = Data-Driven Documents

### Driven ###

    [
        { name:"Ireland", pop:6378 },
        { name:"Tanzania", pop:3407 },
        { name:"Norway", pop:5084 }
    ]

# &#8681;

    <svg height="300" width="600">
        <circle cx="100" cy="150" r="64" style="fill:green" />
        <circle cx="220" cy="150" r="34" style="fill:orange" />
        <circle cx="340" cy="150" r="51" style="fill:red" />
    </svg>

![SVG result](/img/svg-example.png)

***



~~~python
import time
# Quick, count to ten!
for i in range(10):
        # (but not *too* quick)
        time.sleep(0.5)
        print i
~~~

