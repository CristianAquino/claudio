const traducciones = {
  spanish: {
    title: "Esencia de cafe",
    home: "Home",
    menu: "Carta de cafés",
    orders: "Pedidos",
    our_essence: "Nuestra esencia",
    slog1: "Cada taza, un momento que vale la pena.",
    slog2: "Más que café, es tu refugio diario.",
    phrase1:
      "En nuestra cafetería, cada taza cuenta una historia. No solo servimos café, creamos momentos especiales que invitan a desconectarte del ruido y reconectar contigo mismo. El aroma, el sabor y la calidez de nuestro espacio están pensados para hacerte sentir en casa desde el primer sorbo hasta la última sonrisa.",
    phrase2:
      "Más que una cafetería, somos un punto de encuentro para los amantes del buen café. Seleccionamos granos de calidad, cuidamos cada detalle en la preparación y te ofrecemos un ambiente único para disfrutar, trabajar o compartir. Porque sabemos que un buen día comienza con una excelente taza de café.",
  },
  english: {
    title: "Essence of coffee",
    home: "Home",
    menu: "coffee menu",
    orders: "Orders",
    our_essence: "Our essence",
    slog1: "Every cup, a moment worthwhile.",
    slog2: "More than coffee, it's your daily refuge.",
    phrase1:
      "At our coffee shop, every cup tells a story. We don’t just serve coffee — we create special moments that invite you to disconnect from the noise and reconnect with yourself. The aroma, the flavor, and the warmth of our space are all designed to make you feel at home from the first sip to the last smile.",
    phrase2:
      "More than just a coffee shop, we are a meeting point for coffee lovers. We carefully select high-quality beans, pay attention to every detail in the preparation, and offer you a unique atmosphere to enjoy, work, or share. Because we believe a great day starts with an exceptional cup of coffee.",
  },
};

function cambiarIdioma(idioma) {
  const elementos = document.querySelectorAll("[data-text]");
  elementos.forEach((el) => {
    const clave = el.getAttribute("data-text");
    if (traducciones[idioma] && traducciones[idioma][clave]) {
      el.textContent = traducciones[idioma][clave];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("translate");

  // Cargar idioma predeterminado
  cambiarIdioma(selector.value);

  // Cambiar idioma cuando el usuario selecciona uno distinto
  selector.addEventListener("change", (e) => {
    cambiarIdioma(e.target.value);
  });
});

// cards
const data = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2BJZjHWoItj9nk1VvGUwfXmMja5p6mOTtdqXqUt0SMHozHAjuXP4Oae9GrtbFYr6KwbYW-i9xdyYx3WGr72TXanrith--LuwdM62dUw",
    title: "Cafe espresso",
    description: "Fruta roja o verde.",
    price: 1,
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0U7ip3od1vMg9XXa5ubVqYsc9EMxc052S_gs2Ghjpyjdos66GXDtluzc7iQaAp57UimWl_ojJd-yG5Ojt6Fsg_e19AJ-jOfhZ6mxKQw",
    title: "Cafe americano",
    description: "Fruta amarilla tropical.",
    price: 2,
  },
  {
    id: 3,
    img: "https://www.cafes-santacristina.com/sites/default/files/2023-09/capuchino.jpg",
    title: "Cafe capuccino",
    description: "Fruta dulce y jugosa.",
    price: 3,
  },
  {
    id: 4,
    img: "https://www.nescafe.com/pe/sites/default/files/2023-06/Nes_Web3_RDP_CommunityCard_CaramelLatte_1066x1066.jpg",
    title: "Cafe latte",
    description: "Fruta dulce y jugosa.",
    price: 4,
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEx78nsIizgDrBZRTO6MjBzxHJZqTPvVw1fA&s",
    title: "Cafe moka",
    description: "Fruta dulce y jugosa.",
    price: 5,
  },
  {
    id: 6,
    img: "https://bakingmischief.com/wp-content/uploads/2016/01/better-than-starbucks-caramel-macchiato-image-square.jpg",
    title: "Caramel macchiato",
    description: "Fruta dulce y jugosa.",
    price: 6,
  },
];
const container = document.getElementById("container");
const search = document.getElementById("search");

function renderCards(item) {
  container.innerHTML = "";

  item.forEach((ele) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const bxImg = document.createElement("div");
    // bxImg.classList.add("bimg");

    const img = document.createElement("img");
    img.src = ele.img;

    const txt = document.createElement("p");
    txt.textContent = ele.title;

    const price = document.createElement("p");
    price.textContent = `S/.${ele.price}`;

    card.appendChild(img);
    card.appendChild(bxImg);
    card.appendChild(txt);
    card.appendChild(price);

    container.appendChild(card);
  });
}

search.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filter = data.filter((ele) => ele.title.toLowerCase().includes(term));
  renderCards(filter);
});

renderCards(data);
