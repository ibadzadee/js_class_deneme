const table = document.querySelector("table")
const search = document.querySelector("#search")

fetch(`https://northwind.vercel.app/api/products`)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
        table.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.unitPrice}</td>
            <td>${element.unitsInStock}</td>
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
                    <td>${element.name}</td>
                    <td>${element.unitPrice}</td>
                    <td>${element.unitsInStock}</td>
                </tr>`
            })
        })
    })

