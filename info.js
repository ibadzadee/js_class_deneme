let id = new URLSearchParams(window.location.search).get("id");

let infoDiv = document.querySelector("#info");
// console.log(id);

fetch(`https://northwind.vercel.app/api/products/${id}`)
.then(response => response.json())
.then(element =>{
    console.log(element.name);
    infoDiv.innerHTML += `
    <p>${element.name}</p>
    <p>${element.unitPrice}</p>
    <p>${element.unitsInStock}</p>
    <p>${element.quantityPerUnit}</p>
    <button><a href="./index.html">esas sehifeye qayit </a></button>
`
    
})