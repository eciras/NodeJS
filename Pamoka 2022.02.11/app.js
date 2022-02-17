
let page = 1;

const imageLoader = () => {

fetch('https://picsum.photos/v2/list?page='+page+'&limit=10')
    .then((response) => response.json())
    .then(jsonObj => {
        console.log(jsonObj)

       jsonObj.forEach((val, key) => {
         document.querySelector('.img').innerHTML += `<div class="item"><img src="${val.download_url}" /></div>`
       });

     
        
    
 
     
})
}
imageLoader()

//pakartotinas kreipimasis:
document.querySelector('.loadMore').addEventListener('click', () => {
    page++;
    imageLoader();
})

//infinite scroll:
window.addEventListener('scroll', () => {
    page++;
    imageLoader();
})