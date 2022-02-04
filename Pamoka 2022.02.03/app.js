const express = require('express')
const app = express()




// app.get('/', function(req, res) {
//     // res.send('Hello world')

//     // res.sendFile(__dirname + '/views/index.html')

//     res.json({message: 'Testas', data: 'Testas2'})

// })


app.get('/:vardas', (req, res) => {

    let name = req.params.vardas
    let objektas = {rezultatas: name}
    if(name == 'amelija') {
        objektas.rezultatas = name + ' Moteriškas vardas'
    }

    res.json(objektas)
    

})


//Jei norime persiusti daugiau parametru
// app.get('/:id/:pavadinimas', (req, res) =>{
//     console.log(req.params)
//     res.send('veikia')

// })









app.listen(3000)