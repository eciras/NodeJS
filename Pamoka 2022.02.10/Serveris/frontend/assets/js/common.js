// document.querySelector('body').innerHTML = '<h5>JS veikia</h5>'


// Is gauto objekto sukurkite vizitine kortele:
// Ir ja atvaizduokite HTML puslapyje.
// Pasinaudokite norimu CSS karkasu: Bootstrap, Foundation, etc.

fetch('https://randomuser.me/api/') //fetch funkcija yra asinchronine ir del to mes naudojame then metoda, kad nesidubliuotu duomenys, kad palauktu, REACTE naudojama AXIO
.then((response) => response.json()) //kreipimasis
.then(jsonObjektas => { //responsas paverstas i json formata
console.log(jsonObjektas.results)
    let fetch = jsonObjektas.results[0];

    document.querySelector('.img').innerHTML += `<img src="${fetch.picture.large}"/>`;
    document.querySelector('.card__name').innerHTML += fetch.name.first + ' ' + fetch.name.last;
    document.querySelector('.card__flex--phone').innerHTML += fetch.phone;
    document.querySelector('.card__flex--cell').innerHTML += fetch.cell;
    document.querySelector('.card__flex--email').innerHTML += fetch.email;

   
})

// fetch('https://randomuser.me/api/') //fetch funkcija yra asinchronine ir del to mes naudojame then metoda, kad nesidubliuotu duomenys, kad palauktu, REACTE naudojama AXIO
// .then((response) => response.json()) //kreipimasis
// .then(jsonObjektas => { //responsas paverstas i json formata
//     console.log(jsonObjektas.results[0])
//     let fetch = jsonObjektas.results[0];
//     let name = fetch.name;

//     document.querySelector('#card').innerHTML += `<img src="${fetch.picture.large}" />`;

// })

