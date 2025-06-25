const traducciones = {
  spanish: {
    title: "Esencia de cafe",
    home: "home",
    letter: "Carta",
    promotions: "Promociones",
    orders: "Pedidos",
    our_essence: "Nuestra essencia",
    contact: "Contacto",
  },
  english: {
    title: "Essence of coffee",
    home: "home",
    letter: "Letter",
    promotions: "Promotions",
    orders: "Orders",
    our_essence: "Our essence",
    contact: "Contact",
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
