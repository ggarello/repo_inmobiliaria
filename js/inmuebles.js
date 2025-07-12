const contenedor = document.getElementById("contenedor-inmuebles");

fetch("../json/inmuebles.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      // Convertimos los valores a clases en minúsculas
      const claseOperacion = item.operacion.toLowerCase();   // "alquila", "vende", etc.
      const claseFrecuencia = item.frecuencia.toLowerCase(); // "mensual", "diario", etc.

      contenedor.innerHTML += `
        <div class="tarjeta">
          <img src="${item.imagen}" alt="${item.descripcion}">
          <div class="tags">
            <span class="${claseOperacion}">${item.operacion}</span>
            <span class="${claseFrecuencia}">${item.frecuencia}</span>
          </div>
          <p>${item.descripcion}</p>
          <p class="precio">$ ${item.precio}</p>
        </div>
      `;
    });
  })
  .catch(err => console.error("Error al cargar JSON:", err));
