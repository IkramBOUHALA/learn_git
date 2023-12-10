const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    let cart = [];

    function addToCart(product, price) {
      const existingItem = cart.find(item => item.product === product);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ product, price, quantity: 1 });
      }

      updateCart();
    }

    function adjustQuantity(product, price, quantityChange) {
      const existingItem = cart.find(item => item.product === product);

      if (existingItem) {
        existingItem.quantity += quantityChange;

        if (existingItem.quantity <= 0) {
          // Remove item if quantity is zero or negative
          cart = cart.filter(item => item.product !== product);
        }
      }

      updateCart();
    }

    function deleteItem(product) {
      cart = cart.filter(item => item.product !== product);
      updateCart();
    }

    function toggleHeart(heartButton) {
      heartButton.classList.toggle('clicked');
    }

    function updateCart() {
      cartItems.innerHTML = '';
      let total = 0;

      cart.forEach(item => {
        const li = document.createElement('li');
        const quantityString = item.quantity > 1 ? `(${item.quantity}x)` : '';
        li.textContent = `${item.product} ${quantityString} - $${item.price * item.quantity}`;

        const quantityDiv = document.createElement('div');
        quantityDiv.classList.add('quantity');
        const plusButton = document.createElement('button');
        plusButton.textContent = '+';
        plusButton.onclick = () => adjustQuantity(item.product, item.price, 1);
        const minusButton = document.createElement('button');
        minusButton.textContent = '-';
        minusButton.onclick = () => adjustQuantity(item.product, item.price, -1);

        const deleteButton = document.createElement('span');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => deleteItem(item.product);

        const heartButton = document.createElement('span');
        heartButton.classList.add('heart-button');
        heartButton.onclick = () => toggleHeart(heartButton);

        quantityDiv.appendChild(plusButton);
        quantityDiv.appendChild(minusButton);
        li.appendChild(quantityDiv);
        li.appendChild(deleteButton);
        li.appendChild(heartButton);

        cartItems.appendChild(li);
        total += item.price * item.quantity;
      });

      cartTotal.textContent = `Total: $${total}`;
    }