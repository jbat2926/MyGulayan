let totalCost = 0;

function updateTotalCostDisplay() {
  const totalCostDisplay = document.getElementById("totalCost");
  totalCostDisplay.innerText = totalCost.toFixed(2);
}

function addItemToCart(price) {
  totalCost += parseFloat(price);
  updateTotalCostDisplay();
}
// modal for image
function showImageinModal(imageUrl) {
  document.getElementById("modalImage").src = imageUrl;
}

// modal for order
function setupModal(button) {
  const orderModal = document.getElementById("orderModal");
  const productIdInput = orderModal.querySelector("#productId");
  const productNameInput = orderModal.querySelector("#productName");
  const quantityInput = orderModal.querySelector("#quantity");
  const totalPriceInput = orderModal.querySelector("#totalPrice");
  const productImage = orderModal.querySelector("#productImage");

  productNameInput.value = button.dataset.name;
  productImage.src = button.dataset.image;
  productIdInput.value = button.dataset.id;
  const price = parseFloat(button.dataset.price);
  const unit = button.dataset.unit;
  quantityInput.value = "1"; // Default value for both kg and pc
  quantityInput.min = unit === "kg" ? "0.01" : "1"; // Minimum value based on unit
  quantityInput.step = unit === "kg" ? "0.01" : "1"; // Step value based on unit
  totalPriceInput.value = price.toFixed(2);

  quantityInput.oninput = () => {
    totalPriceInput.value = (parseFloat(quantityInput.value) * price).toFixed(
      2
    );
  };
}