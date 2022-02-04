console.log('Labas')

//Atsitiktines nuyotraukos paemimas is dog API
// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => {
//     return response.json() // konvetuojam json informacija atgal i objekta
// })
// .then(jsonData => {
//     console.log(jsonData)
//     //is gauto jsonData objekto paimama message reiksme ir atvaizduojama
//     document.getElementById('root').innerHTML = 
//     `<img src="${jsonData.message}" alt="">`
// })

//Nuotraukos paėmimas pagal šuns veislę
// const veisle = 'terrier/cairn';

// fetch(`https://dog.ceo/api/breed/${veisle}/images/random`)
//     .then(response => response.json())
//     .then(dataObj => {
//         // console.log(dataObj)
//         if(dataObj.status == 'success') {
//             document.getElementById('root').innerHTML =
//                 `<img src="${dataObj.message}" alt="Suns nuotrauka">`
//         }
//     })


//Sukurkite laukelį su pavadinimu: "Šuns veislė". Šalia priskirkite mugtuką su tekstu "Ieškoti".
//Paspaudus ant mygtuko paimkite iš laukelio įvestą reikšmę ir ją įdėkite į sukonstrruotą nuorodą.
//Jei rezultata negrąžino statuso "success", tuomet naršyklėje atvaizduokite žinutę: "Pagal tokią šuns veislę nuotraukos rasti nepavyko",
//o priešingu atveju atvaizduokite nuotraukos html elementą.


// document.getElementById('submit').addEventListener('click', () => {
//     console.log('Paspausta')
//     //paimame reikšmę iš ieškoti laukelio
//     const dog = document.getElementById('dog').value

//     fetch(`https://dog.ceo/api/breed/${dog}/images/random`)
//         .then(response => response.json())
//         .then(dataObj => {
//             console.log(dataObj)
//             if (dataObj.status == 'success') {
//                 document.getElementById('root').innerHTML =
//                     `<img src="${dataObj.message}" alt="Suns nuotrauka">`
//             } else {
//                 document.getElementById('root').innerText =
//                     'Pagal tokią šuns veislę nuotruakos rasti nepavyko'
//             }
//         })
// })



fetch(`http://localhost:3000/amelija`)
.then(response => response.json())
.then(data => {
    console.log(data)
    document.getElementById('name').innerHTML = data.rezultatas
})


