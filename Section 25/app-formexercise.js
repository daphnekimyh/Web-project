// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const listsContainer = document.querySelector('#list');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    addList(productInput.value, qtyInput.value);
    productInput.value = '';
    qtyInput.value = '';

});

const addList = (product, qty) => {
    const newProduct = `<li>${qty} ${product}</li>`;
    listsContainer.insertAdjacentHTML('beforeend', newProduct);
}