// const express = require('express')


import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())

app.get('/', function (req, res) {
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
    let status = ["Broken Clouds", "Mostly Sunny"];
    
    let weather = {
        status: status[randomNum(0, 1)],
        degrees: randomNum(10, 25),
        feeling: randomNum(13, 27),
        humidity: randomNum(50, 90)
    }



//   res.send(weather)
  res.json(weather)



})

app.listen(3000)

// Susikurkite objektą "weather" su šiais indeksais:
// status,
// degrees,
// feeling,
// humidity 
// Status gali turėti šias reikšmes:
// "Broken Clouds", "Mostly Sunny"
// Atsitiktinai parinkite vieną iš jų.
// Degrees reikšmei generuokite atsitiktinį skaičių nuo 10 iki 25.
// Feeling reikšmei skaičių nuo 13 iki 27.
// Humidity reikšmei skaičių nuo 50 iki 90.
// Visas reikšmes perduokite į frontend sekciją iš backend naudojantis fetch() funkcija.
// Priklausomai nuo statuso parinkite atitinkamą paveiksliuką.

