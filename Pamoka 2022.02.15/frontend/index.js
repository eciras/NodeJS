// Sukurkite objektą routeryje '/', kuris grąžintų informaciją apie mačą.
// Ją pateikite objekte su šiais indeksais:
// round, date, stadium, time, team1, team2 Ir priskirkite jiems atitinkamas reikšmes pagal pateiktą maketą. 
// Rezultatui ir kėliniui priskirkite standartines reikšmes: 0 pelnytų taškų bei pirmas kėlinys (1st quarter).

// Sukurkite naują GET routerį kurio tikslas grąžinti atsitiktinį kiekvienos komandos rezultatą ir atsitiktinį kėlinį. 
// Frontende taip pat sukurkite kreipimasį šiuo adresu ir jį automatizuokite pasinaudodami setTimeout() funkcija. 
// Rezultatas turi automatiškai atsinaujinti kas minutę. Taip pat prijunkite rezultatų priėmimui mygtuką Renew Data, 
// kad kiekvieną kartą jį paspaudus rezultatai būtų atnaujinami.

// fetch('http://localhost:3000') //fetch funkcija yra asinchronine ir del to mes naudojame then metoda, kad nesidubliuotu duomenys, kad palauktu, REACTE naudojama AXIO
// .then((response) => response.json()) //kreipimasis
// .then(jsonObjektas => { //responsas paverstas i json formata


// document.querySelector('.scores__team1').textContent += jsonObjektas.firstTeam;
// document.querySelector('.scores__team2').textContent += jsonObjektas.secondTeam;

// })


const play = () => {
    fetch("http://localhost:3000/checkscore")
        .then((response) => response.json())
        .then((jsonObjektas) => {

            document.querySelector(".scores__team1").style.color += "#fff";
            document.querySelector(".scores__team2").style.color += "#fff";

            document.querySelector(".scores__team1").innerHTML += jsonObjektas.komanda1;
            document.querySelector(".scores__team2").innerHTML += jsonObjektas.komanda2;

            if (jsonObjektas.komanda1 === jsonObjektas.komanda2) {
                document.querySelector(".scores__team1").style.color = "#fff";
                document.querySelector(".scores__team2").style.color = "#fff";
            } else if (jsonObjektas.komanda1 > jsonObjektas.komanda2) {
                document.querySelector(".scores__team1").style.color = "#00F2A7";
            } else {
                document.querySelector(".scores__team2").style.color = "#00F2A7";
            }

            if (jsonObjektas.kelinys === 1) {
                document.querySelector(".match-stage").innerHTML = `${jsonObjektas.kelinys}st quarter`;
            } else if (jsonObjektas.kelinys === 2) {
                document.querySelector(".match-stage").innerHTML = `${jsonObjektas.kelinys}nd quarter`;
            } else if (jsonObjektas.kelinys === 3) {
                document.querySelector(".match-stage").innerHTML = `${jsonObjektas.kelinys}rd quarter`;
            } else if (jsonObjektas.kelinys === 4) {
                document.querySelector(".match-stage").innerHTML = `${jsonObjektas.kelinys}th quarter`;
            }
        });
    setTimeout(() => {
        play();
    }, 60000);
}
play();