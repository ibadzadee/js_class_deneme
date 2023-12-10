let id = new URLSearchParams(window.location.search).get("id");
const spinner =document.querySelector('.spinnerDiv');

let infoDiv = document.querySelector("#info");
// console.log(id);

fetch(`https://northwind.vercel.app/api/products/${id}`)
.then(response => response.json())
.then(element =>{
    spinner.style.display= 'none';

    infoDiv.innerHTML += `
    <h1>Information</h1>
    <h3>Mehsulun adi:</h3>
    <p>${element.name}</p>
    <h3>Mehsulun qiymeti:</h3>
    <p>${element.unitPrice}</p>
    <h3>Stokda var:</h3>
    <p>${element.unitsInStock}</p>
    <h3>Qablasdirmada:</h3>
    <p>${element.quantityPerUnit}</p>
    `    
    
})