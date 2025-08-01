document.querySelector('.order-btn').addEventListener('click', function() {
    alert('Ваш заказ принят! Скоро с вами свяжутся.');
}); 

const coffees = [
  { name: 'Эспрессо', price: 150, description: 'Крепкий и ароматный' },
  { name: 'Латте', price: 200, description: 'Нежный с молочной пенкой' }
];

const container = document.getElementById('coffeeContainer');
coffees.forEach(coffee => {
  const card = `
    <div class="coffee-card">
      <h3>${coffee.name}</h3>
      <p>${coffee.description}</p>
      <span>${coffee.price} ₽</span>
      <button class="buy-btn">Заказать</button>
    </div>
  `;
  container.innerHTML += card;
});
