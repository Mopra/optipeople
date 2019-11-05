---
layout: landing
title:  "Optipeople | Turning data into decisions"
description: "asdf"
image: /assets/uploads/fordele.jpg
permalink: /prisen-for-nedetid0/
heading: "Hvad koster nedetid?"
---



  <section class="scrollspy" id="calculator">
    <div class="container">

      <div class="row">
        <p>
Hvor meget koster maskinernes nedetid i produktionen? Fra vores kunder hører vi alt fra 600,- kr. pr. time til 20.000 kr. pr. time. Hvis du ikke har en præcis udregning på dette idag, kan vi hjælpe dig. Du kan også prøve at sætte nogle tal ind i nedenstående model, med udgangspunkt i hvad du tror det koster pr. time.
<br><br>
Antal max. tilgængelige produktionstimer pr. dag tager udgangspunkt i hvor mange timer maskinerne max. kan køre pr. dag - eksempel: Døgnet har 24 timer, så det er udgangspunktet, men hvis vi kun har 2 skiftehold af 8 timer hver, så er vi nede på max. 16 timers tilgængelighed. Hvis der på hver af de 2 skiftehold er 30 minutters "tilladt" pause, hvor maskinerne holder stille, så er vi nede på max. 15 timers tilgængelig tid.
<br><br>
Tilgængelighed/Availability - Her skal du tage stilling til, hvor stor en procentdel af maskinens max. tilgængelighed, der udnyttes. Hvis du f.eks. tror at maskinen max. har en oppetid på 70% vil det med ovenstående eksempel betyde at den effektive produktionstid for maskinen pr. døgn er: 15*0,70=10,5 timer.
        </p>
      </div>

      <div class="space"></div>

      <div class="row">
        <div class="col s12 m12 l6 leftPos">

        <div class="row">
          <h4>
            Hvordan ser din produktion ud nu?
          </h4>
        </div>

          <div class="row calcInput">
            <div class="hours input-field">
                <input type="number" name="h" id="hours" data-length="2" />
                <label for="hours">Antal max. tilgængelige produktionstimer pr. dag</label><br>
            </div>
            <div class="cost input-field">
                <input type="number" name="c" id="cost" data-length="6" />
                <label for="cost">Pris pr. tabt produktionstime</label><br>
            </div>
            <div class="availability input-field">
                <input type="number" name="a" id="availability" data-length="2" />
                <label for="availability">Tilgængelighed/availability %</label><br>
            </div>
            <div class="week input-field">
                <input type="number" name="week" id="week" data-length="2" />
                <label for="week">Arbejdsdage pr. uge</label><br>
            </div>
          </div>

        </div>

        <div class="col s12 m12 l6 rightPos hide-on-med-and-down">

          <div class="row">
            <h4>
              Fremtiddig gevinst ved øget tilgængelighed
            </h4>
          </div>

            <div class="row calcInput">
              <div class="availabili ty input-field">
                  <input type="number" name="fa" id="favailability" data-length="2" />
                  <label for="favailability">Ønsket fremtiddig tilgængelighed/availability %</label><br>
              </div>
            </div>

        </div>

      </div>


      <div class="row">

        <div class="col s12 m12 l6 leftPos" id="completeResult">
          <div class="row">
            <div class="col s12 result">
              <p>Pris i tabt produktionstid pr. dag:</p>
              <div class="clpDay"></div>
            </div>
            <div class="col s12 m6 result">
              <p>pr. uge:</p>
              <div class="clpWeek"></div>
            </div>
            <div class="col s12 m6 result">
              <p>pr. år:</p>
              <div class="clpYear"></div>
            </div>
          </div>
        </div>

        <div class="col s12 m12 l6 rightPos hide-on-med-and-down" id="fcompleteResult">

          <div class="row">
            <div class="col s12 result">
              <p>Pris i tabt produktionstid pr. dag:</p>
              <div class="fclpDay"></div><div class="fclpDayGain"></div>
            </div>
            <div class="col s12 m6 result">
              <p>pr. uge:</p>
              <div class="fclpWeek"></div><div class="fclpWeekGain"></div>
            </div>
            <div class="col s12 m6 result">
              <p>pr. år:</p>
              <div class="fclpYear"></div><div class="fclpYearGain"></div>
            </div>
          </div>

        </div>

      </div>

      <div class="row" id="buttons">
        <div class="col s12 m12 l6 leftPos">

          <div class="row">
           <button type="button" class="calculate btn btn-large">Udregn</button>
          </div>

        </div>

        <div class="col s12 m12 l6 rightPos hide-on-med-and-down">

          <div class="row">
           <button type="button" class="fcalculate btn btn-large blue">Udregn</button>
          </div>

        </div>
      </div>

    </div>
  </section>
