// Accquiring the section
const mainDiv = document.getElementById('main')

// Create Section
const section = document.createElement('section')
section.classList.add('section')
section.setAttribute('id', 'gameSection')

// Create Section_title
const secTitle = document.createElement('div')
secTitle.classList.add('section-title')
secTitle.textContent = `${onlineGamesData.name}`

// Create Items_container
const itemContainer = document.createElement('div')
itemContainer.classList.add('items-container')

// Loop through the games data
onlineGamesData.data.forEach(game => {
    // Create Item
    const item = document.createElement('div')
    item.classList.add('item')

    // Create Item__item-img
    const itemImg = document.createElement('div')
    itemImg.classList.add('item-img')
    const img = document.createElement('img')
    img.src = 'https://siddthecoder.github.io/E-Commerce-Website-Frontend/rgb-keyboard.jpg'
    img.alt = 'Image failed to load'
    itemImg.appendChild(img)

    // Create Item__item-details
    const itemDetails = document.createElement('div')
    itemDetails.classList.add('item-details')

    const itemTitle = document.createElement('div')
    itemTitle.textContent = `Name: ${game.name}`

    const itemGenre = document.createElement('div')
    itemGenre.textContent = `Genre: ${game.genre}`

    const itemRD = document.createElement('div')
    itemRD.textContent = `Released Date: ${game.releasedDate}`

    const itemFooter = document.createElement('div')
    itemFooter.classList.add('item-footer')
    const itemPrice = document.createElement('div')
    itemPrice.classList.add('item-price')
    itemPrice.textContent = `${game.priceString}`

    const itemAddToCartBtn = document.createElement('button')
    itemAddToCartBtn.classList.add('cartBtn')
    itemAddToCartBtn.classList.add('item-add-to-cart')
    itemAddToCartBtn.textContent = 'Add to Cart'
    itemAddToCartBtn.setAttribute('data-key',`${game.name}`)
    itemAddToCartBtn.value = `${game.price}`
    // console.log(itemAddToCartBtn)

    //for ____button__select__&__diselect
    let clickCount = 0;
    itemAddToCartBtn.addEventListener('click', () => {
        clickCount++;
        
        if (clickCount % 2 === 1) {
            itemAddToCartBtn.textContent = 'Added to Cart';
            itemAddToCartBtn.classList.add('item-added-to-cart')
            itemAddToCartBtn.classList.remove('item-add-to-cart')
        } else {
            itemAddToCartBtn.textContent = 'Add to Cart';
            itemAddToCartBtn.classList.remove('item-added-to-cart')
            itemAddToCartBtn.classList.add('item-add-to-cart')
        }
    });
    
    itemFooter.appendChild(itemPrice)
    itemFooter.appendChild(itemAddToCartBtn)

    // Append item details
    itemDetails.appendChild(itemTitle)
    itemDetails.appendChild(itemGenre)
    itemDetails.appendChild(itemRD)
    itemDetails.appendChild(itemFooter)

    // Append Item
    item.appendChild(itemImg)
    item.appendChild(itemDetails)
    itemContainer.appendChild(item)
})

// Append everything to the section and main div
section.appendChild(secTitle)
section.appendChild(itemContainer)
mainDiv.appendChild(section)

