
import express from 'express'
import cors from 'cors'
import Krepsinis from "./krepsinis.js";

const app = express()
app.use(cors())

// app.get('/', function (req, res) {
//     function randomNum(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min; 
//     }
        
//     let game = {        
//         firstTeam: randomNum(0, 100),   
//         secondTeam: randomNum(0, 100)
//     }
  

// //   res.send(weather)
//   res.json(game)
  
// })

// rezultatas pagal klase 'Krepsinis'
/*konstanta skirta klases inicijavimui ir pavertimui objektu 
(aprasoma virs route'o, nes jei aprasysim route, tai vis nuo nulio 
taskus rodys ir nedides taskai)*/
const rezultatas = new Krepsinis();
//console.log(rezultatas);

app.get("/checkscore", function (req, res) {
  res.json(rezultatas);  
});

 
app.listen(3000);