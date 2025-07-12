document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-publicaciones");

  fetch("../json/ofrecer.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(pub => {
        const prestaciones = pub.prestaciones.map(p => `<li>${p}</li>`).join("");

        contenedor.innerHTML += `
          <div class="publicacion">
            <img src="../${pub.imagen}" alt="${pub.titulo}">

            <div class="contenido">
              <div class="info">
                <h4>${pub.titulo}</h4>
                <p>Dirección: ${pub.direccion}</p>
                <p>Localidad: ${pub.localidad}</p>
                <p>Provincia: ${pub.provincia}</p>
                <p>País: ${pub.pais}</p>
              </div>

              <ul class="prestaciones">
                ${prestaciones}
              </ul>

              <div class="tipo-valor">
                <p><strong>Tipo de oferta:</strong> ${pub.tipo}</p>
                <p><strong>Valor publicado:</strong> $ ${pub.valor}</p>
              </div>

              <div class="acciones">
                <button class="editar" title="Editar">
                  <i class="fa-solid fa-pen-to-square"></i> Editar publicación
                </button>
                <button class="pausar" title="Pausar">
                  <i class="fa-solid fa-pause"></i> Pausar publicación
                </button>
                <button class="eliminar" title="Eliminar">
                  <i class="fa-solid fa-trash"></i> Eliminar publicación
                </button>
              </div>
            </div>
          </div>
        `;
      });
    })
    .catch(err => console.error("Error al cargar publicaciones:", err));
});
