 
 // Function to store or remove data in localStorage
 function toggleData(value, key) {
    let storedData = JSON.parse(localStorage.getItem('cartDetails')) || {};

    if (storedData[key]) {
      // If the key exists, remove it (deselect)
      delete storedData[key];
    } else {
      // If the key doesn't exist, add it (select)
      storedData[key] = value;
    }

    // Update localStorage with the new data
    localStorage.setItem('cartDetails', JSON.stringify(storedData));
  }

   // Function to perform calculations with stored data
   function calculateData() {
    let storedData = JSON.parse(localStorage.getItem('cartDetails')) || {};
    let total = Object.values(storedData).reduce((acc, num) => acc + num, 0);  // Sum of all selected numbers
    document.getElementById('result').textContent = `Total: ${total}`;
  }

//Event Listeners for all_____ cartbuttons
document.querySelectorAll('.cartBtn').forEach( button => {
    button.addEventListener( 'click',(e) => {
        const key = e.target.getAttribute('data-key');
        const value = parseInt(e.target.value);
        console.log(key)
        console.log(value)
         // Toggle data in localStorage
        toggleData(value, key);
    })
})

