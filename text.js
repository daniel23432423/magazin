
const catalog = document.getElementById("catalog")

fetch("./data/products.json").then(uploadProducts)

function uploadProducts(data){
    data.json().then(getProducts)
}

function getProducts(data){
    for(let phoneName in data){
        const phoneData = data[phoneName]
        const phoneCard = getProducts(phoneName, phoneData)
        catalog.append(phoneCard)
    }
}


const phoneCard = document.createElement('div')
phoneCard.className = "phone-card"

const cardTitle = document.createElement('h4')
cardTitle.innerText = phoneName
phoneCard.append(cardTitle)


const cardImageSlider = getImagesSlider(phoneData.images)
phoneCard.append(cardImageSlider)

const descriptionDiv = getDescriptionDiv(phoneData)
phoneCard.append(descriptionDiv)
