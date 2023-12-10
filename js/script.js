const table = document.querySelector("table")
const search = document.querySelector("#search")
const spinner =document.querySelector('.spinner');


fetch(`https://northwind.vercel.app/api/products`)
    .then(response => response.json())
    .then(data => {
        spinner.style.display= 'none';
        data.forEach(element => {
        table.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td><a href="./info.html?id=${element.id}">${element.name}</a></td>
            <td>${element.unitPrice}</td>
            <td>${element.unitsInStock}</td>
            <td>
            <button onclick="deleteElement(${element.id})" id="delete">Delete</button>
            </td>
            <td>
            <button id ="update"><a href="./update.html?id=${element.id}">Update</button>
            </td>
        </tr>`
        })


        search.addEventListener("input", (e) => {
            let filtered = data.filter(element => {
                return element.name.toLowerCase().startsWith((e.target.value).toLowerCase());
            })
            table.innerHTML = `        
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>`
            filtered.forEach(element => {
                table.innerHTML += `
                <tr>
                    <td>${element.id}</td>
                    <td><a href="./info.html?id=${element.id}">${element.name}</a></td>
                    <td>${element.unitPrice}</td>
                    <td>${element.unitsInStock}</td>
                    <td>
                    <button onclick="deleteElement(${element.id})" id="delete">Delete</button>
                    </td>
                    <td>
                    <button id ="update"><a href="./update.html?id=${element.id}">Update</button>
                    </td>
                </tr>`
            })
        })
    })

function deleteElement(id){
    axios.delete(`https://northwind.vercel.app/api/products/${id}`)
    alert(`${id} nömrəli məhsul uğurla silindi!`)
    window.location.reload()
}