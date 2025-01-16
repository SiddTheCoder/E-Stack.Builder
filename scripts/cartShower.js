// Show cart details in the popup
document.getElementById('cartOpenerBtn').addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cartDetails')) || {};
    const cartContainer = document.getElementById('cartContainer');
    const cartContent = Object.values(cart);
    const cartItems = cartContainer.querySelector('.cartItem');
  
    console.log(cartContainer)
    console.log(cartContent)
    // Clear existing cart content
    cartItems.innerHTML = '';
    let total = 0;
  
    cartContent.forEach((item) => {
      total += item.price;
      const cartHTML = `
        <div>
          <h3>${item.name}</h3>
          <p>${item.genre}</p>
          <p>${item.priceString}</p>
        </div>
      `;
      cartItems.insertAdjacentHTML('beforeend', cartHTML);
    });
  
    // Update total
    document.querySelector('.cart-total-btn').textContent = `Total: Rs. ${total}`;
  
    // Show the cart popup
    cartContainer.style.display = 'block';
  });
  
  // Close the cart popup
  document.querySelector('.cart-footer-closer').addEventListener('click', () => {
    document.getElementById('cartContainer').style.display = 'none';
  });
  