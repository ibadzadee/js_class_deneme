const name = document.querySelector("#name")
const price = document.querySelector("#price")
const stock = document.querySelector("#stock")
const addBtn = document.querySelector("#addNew")
const spinner = document.querySelector(".spinnerDiv")
const done = document.querySelector("#done")
const error = document.querySelector("#error")

addBtn.addEventListener("click" , ()=>{
    if(name.value.trim()==="" || price.value.trim()==="" || stock.value.trim()===""){
        error.style.display = "flex"
    }
    else{
        error.style.display = "none"
        spinner.style.display = "flex"

        axios.post(`https://northwind.vercel.app/api/products`,
        {
            name : name.value,
            unitPrice: price.value,
            unitsInStock : stock.value,
        })
        .then(element =>{
            setTimeout( ()=>{
                window.location = "./index.html"
            } , 3500)
            spinner.style.display = "none"
            done.innerHTML+=`ID nomresi : ${element.data.id}`
            done.style.display = "flex"
        })
    }
})