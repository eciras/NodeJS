fetch('http://localhost:3000/') //fetch funkcija yra asinchronine ir del to mes naudojame then metoda, kad nesidubliuotu duomenys, kad palauktu, REACTE naudojama AXIO
.then((response) => response.json()) //kreipimasis
.then(jsonObjektas => { //responsas paverstas i json formata
console.log(jsonObjektas.degrees)
    
document.querySelector('.degrees').textContent += jsonObjektas.degrees + '°';
document.querySelector('.weather-status').textContent += jsonObjektas.status;
document.querySelector('.feeling').textContent += 'Feeling: ' + jsonObjektas.feeling + '°';
document.querySelector('.humidity').textContent += 'Humidity: ' + jsonObjektas.humidity;

let image = (jsonObjektas.status == "Broken Clouds") ? 'cloud.png' : 'cloudy.png'

document.querySelector('.img').innerHTML = `<img src="./images/${image}" />` 
       
})
