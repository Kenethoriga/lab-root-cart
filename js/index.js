// ITERATION 1
function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').textContent.replace('$', ''));
  const quantity = parseInt(product.querySelector('.quantity input').value, 10);
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal.toFixed(2);
  console.log('Calculating subtotal, yey!', { price, quantity, subtotal });
}

// ITERATION 2
function calculateAll() {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    updateSubtotal(product);
  });
  calculateTotal();
}

// ITERATION 3
function calculateTotal() {
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach(product => {
    const subtotal = parseFloat(product.querySelector('.subtotal span').textContent);
    total += subtotal;
  });
  document.querySelector('#total-value span').textContent = total.toFixed(2);
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  const row = target.closest('.product');
  row.remove();
  calculateTotal();
}

// ITERATION 5
function createProduct() {
  const tbody = document.querySelector('#cart tbody');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
    <td class="name">
      <span>New Product</span>
    </td>
    <td class="price">$<span>10.00</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
  tbody.appendChild(newRow);
  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelectorAll('.btn-remove').forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.getElementById('create');
  if (createProductBtn) {
    createProductBtn.addEventListener('click', createProduct);
  }
});
