let id = new URLSearchParams(window.location.search).get("id")  ;

const table = document.querySelector("table");
console.log(id); 

fetch(`https://northwind.vercel.app/api/products/${id}`)
.then(response => response.json())
.then(element =>{
    table.innerHTML += `
    <tr>
    <td>${element.id}</td>
    <td><input type = "text" id='name' value =" ${element.name}"></td>
    <td><input type = "text" id='price' value =" ${element.unitPrice}"></td>
    <td><input type = "text" id='stock' value =" ${element.unitsInStock}"></td>
    <td>
    <button id='save'>Save</button>
    </td>
</tr>`

    let saveButton = document.querySelector("#save");
    const inpName = document.querySelector("#name")
    const inpPrice = document.querySelector("#price")
    const inpStock = document.querySelector("#stock")

    saveButton.addEventListener('click',()=>{
        fetch(`https://northwind.vercel.app/api/products/${id}`,{
            method : 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
              body : JSON.stringify({
                name : inpName.value,
                unitPrice: inpPrice.value,
                unitsInStock : inpStock.value,
              })
        })
        .then(res=>res.json())
        .then(data=> 
            window.location = "./index.html")
    })

})

{/* <a href="./info.html?id=${element.id}"> */}