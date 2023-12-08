const table = document.querySelector("table")
const search = document.querySelector("#search")

fetch(`https://northwind.vercel.app/api/products`)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
        table.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td><a href="./info.html?id=${element.id}">${element.name}</a></td>
            <td>${element.unitPrice}</td>
            <td>${element.unitsInStock}</td>
            <td>
            <button><a href="./update.html?id=${element.id}">update</button>
            <button>delete</button>
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
            </tr>`
            filtered.forEach(element => {
                table.innerHTML += `
                <tr>
                    <td>${element.id}</td>
                    <td><a href="./info.html?id=${element.id}">${element.name}</a></td>
                    <td>${element.unitPrice}</td>
                    <td>${element.unitsInStock}</td>
                    <td>
                    <button><a href="./update.html?id=${element.id}">update</button>
                    <button>delete</button>
                    </td>
                </tr>`
            })
        })
    })

