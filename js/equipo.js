document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-equipo");

  fetch("../json/equipo.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(colaborador => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-equipo");

        tarjeta.innerHTML = `
          <img src="${colaborador.imagen}" alt="${colaborador.nombre}">
          <h4>${colaborador.nombre}</h4>
          <p>${colaborador.puesto}</p>
        `;

        contenedor.appendChild(tarjeta);
      });
    })
    .catch(error => {
      console.error("Error al cargar el equipo:", error);
    });
});
