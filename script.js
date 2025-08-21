
const orders = [
  {
    id: "#1",
    name: "WHITE FIT SHIRT",
    price: "₹2500",
    placed: "23/09/2025",
    delivery: "26/09/2025 (estimated)",
    image: "https://i.imgur.com/6P7rGAs.png"
  },
  {
    id: "#2",
    name: "RELAXED LINEN SHIRT",
    price: "₹3800",
    placed: "28/09/2025",
    delivery: "01/10/2025",
    image: "https://i.imgur.com/BEOfJqL.png"
  },
  {
    id: "#3",
    name: "REGULAR FIT SHIRT",
    price: "₹3400",
    placed: "27/09/2025",
    delivery: "30/09/2025 (estimated)",
    image: "https://i.imgur.com/6P7rGAs.png"
  },
  {
    id: "#4",
    name: "COTTON WHITE SHIRT",
    price: "₹4200",
    placed: "30/09/2025",
    delivery: "03/10/2025",
    image: "https://i.imgur.com/BEOfJqL.png"
  },
   {
    id: "#4",
    name: "COTTON WHITE SHIRT",
    price: "₹4200",
    placed: "30/09/2025",
    delivery: "03/10/2025",
    image: "https://i.imgur.com/BEOfJqL.png"
  },
   {
    id: "#4",
    name: "COTTON WHITE SHIRT",
    price: "₹4200",
    placed: "30/09/2025",
    delivery: "03/10/2025",
    image: "https://i.imgur.com/BEOfJqL.png"
  },
   {
    id: "#4",
    name: "COTTON WHITE SHIRT",
    price: "₹4200",
    placed: "30/09/2025",
    delivery: "03/10/2025",
    image: "https://i.imgur.com/BEOfJqL.png"
  },
   {
    id: "#4",
    name: "COTTON WHITE SHIRT",
    price: "₹4200",
    placed: "30/09/2025",
    delivery: "03/10/2025",
    image: "https://i.imgur.com/BEOfJqL.png"
  }
];

const leftContainer = document.getElementById("orders-left");

orders.forEach((order, index) => {
  const card = document.createElement("div");
  card.className = "order-card";

  card.innerHTML = `
    <div class="order-image">
      <img src="${order.image}" alt="${order.name}" />
    </div>
    <div class="order-info">
      <h3>Order ${order.id}</h3>
      <p>${order.name}</p>
      <p>${order.price}</p>
    </div>
    <div class="order-status">
      <p><strong>Order placed on:</strong> ${order.placed}</p>
      <p>${order.delivery.includes("estimated") ? "Estimated delivery time" : "Delivered on"}: ${order.delivery.replace(" (estimated)", "")}</p>
      <p>At: Chennai 600 001<br>Pallavaram</p>
    </div>
  `;

  // Alternate placing the cards into left and right containers
  if (index % 2 === 0) {
    leftContainer.appendChild(card);
  }
});
document.getElementById('menu-btn').addEventListener('click', function () {
  this.classList.toggle('active');
});
document.getElementById('by-short').addEventListener('click', function () {
  this.classList.toggle('active');
});