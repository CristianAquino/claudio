const traducciones = {
  spanish: {
    title: "Esencia de cafe",
    home: "Home",
    menu: "Carta de cafés",
    orders: "Pedidos",
    our_essence: "Nuestra esencia",
    language1: "Español",
    language2: "Ingles",
    slog1: "Cada taza, un momento que vale la pena.",
    slog2: "Más que café, es tu refugio diario.",
    placeholder: "Busca tus cafes preferidos",
    orderTxt: `"Tu café favorito, a solo un mensaje de distancia."`,
    phrase1:
      "En nuestra cafetería, cada taza cuenta una historia. No solo servimos café, creamos momentos especiales que invitan a desconectarte del ruido y reconectar contigo mismo. El aroma, el sabor y la calidez de nuestro espacio están pensados para hacerte sentir en casa desde el primer sorbo hasta la última sonrisa.",
    phrase2:
      "Más que una cafetería, somos un punto de encuentro para los amantes del buen café. Seleccionamos granos de calidad, cuidamos cada detalle en la preparación y te ofrecemos un ambiente único para disfrutar, trabajar o compartir. Porque sabemos que un buen día comienza con una excelente taza de café.",
    ne1: `"Pasión por el café, dedicación en cada detalle."`,
    ne2: `"Somos amantes del café y de las buenas conversaciones. Nacimos
              del deseo de crear un espacio donde el aroma del café se combine
              con la calidez del ambiente. Seleccionamos granos de calidad,
              tostados con esmero y servidos con pasión. Más que una cafetería,
              somos un lugar para compartir, relajarte y sentirte como en
              casa."`,
  },
  english: {
    title: "Essence of coffee",
    home: "Home",
    menu: "Coffee Menu",
    orders: "Orders",
    our_essence: "Our essence",
    language1: "Spanish",
    language2: "English",
    slog1: "Every cup, a moment worthwhile.",
    slog2: "More than coffee, it's your daily refuge.",
    placeholder: "Find your favorite coffees",
    orderTxt: `"Your favorite coffee, just a message away."`,
    phrase1:
      "At our coffee shop, every cup tells a story. We don’t just serve coffee — we create special moments that invite you to disconnect from the noise and reconnect with yourself. The aroma, the flavor, and the warmth of our space are all designed to make you feel at home from the first sip to the last smile.",
    phrase2:
      "More than just a coffee shop, we are a meeting point for coffee lovers. We carefully select high-quality beans, pay attention to every detail in the preparation, and offer you a unique atmosphere to enjoy, work, or share. Because we believe a great day starts with an exceptional cup of coffee.",
    ne1: `"Passion for coffee, dedication to every detail."`,
    ne2: `"We are lovers of coffee and good conversation. We were born from the desire to create a space where the aroma of coffee blends with the warmth of the atmosphere. We select quality beans, roasted with care, and served with passion. More than a coffee shop, we are a place to share, relax, and feel at home."`,
  },
};

function cambiarIdioma(idioma) {
  const elementos = document.querySelectorAll("[data-text]");
  elementos.forEach((el) => {
    const clave = el.getAttribute("data-text");
    if (traducciones[idioma] && traducciones[idioma][clave]) {
      el.textContent = traducciones[idioma][clave];
    }
    if (Object.keys(traducciones[idioma]).includes("placeholder")) {
      document.getElementById("search").placeholder =
        traducciones[idioma]["placeholder"];
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
    img: "./img/espresso.webp",
    title: "Cafe espresso",
    price: "1.00",
  },
  {
    id: 2,
    img: "./img/americano.webp",
    title: "Cafe americano",
    price: "2.00",
  },
  {
    id: 3,
    img: "./img/capuccino.jpg",
    title: "Cafe capuccino",
    price: "3.00",
  },
  {
    id: 4,
    img: "./img/latte.webp",
    title: "Cafe latte",
    price: "4.00",
  },
  {
    id: 5,
    img: "./img/moka.jpg",
    title: "Cafe moka",
    price: "5.00",
  },
  {
    id: 6,
    img: "./img/macchiato.webp",
    title: "Caramel macchiato",
    price: "6.00",
  },
  {
    id: 7,
    img: "./img/cupcake.jpeg",
    title: "Cupcake de Chocolate con fresa",
    price: "7.00",
  },
  {
    id: 8,
    img: "./img/rebanada.jpeg",
    title: "Rebanada pastel de Chocolate",
    price: "8.00",
  },
  {
    id: 9,
    img: "./img/pastel.jpeg",
    title: "Pastel de Galletas con Frutas",
    price: "9.00",
  },
  {
    id: 10,
    img: "./img/queso.jpeg",
    title: "Tarta de Queso con Fruta de Fresa",
    price: "10.00",
  },
  {
    id: 11,
    img: "./img/cookie.jpeg",
    title: "Galletas con chispa de Chocolate",
    price: "11.00",
  },
  {
    id: 12,
    img: "./img/flan.jpeg",
    title: "Flan",
    price: "12.00",
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

const all = document.querySelectorAll(".links li");

function activeLink() {
  all.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
all.forEach((item) => {
  item.addEventListener("click", activeLink);
});
