function crearMalla() {
  const malla = document.getElementById("malla");
  const anios = [...new Set(cursos.map(c => c.anio))];

  anios.forEach(anio => {
    const col = document.createElement("div");
    col.className = "anio";
    col.innerHTML = `<h3>Año ${anio}</h3>`;

    [1, 2].forEach(ciclo => {
      const cicloDiv = document.createElement("div");
      cicloDiv.className = "ciclo";
      cicloDiv.innerHTML = `<strong>Ciclo ${ciclo}</strong>`;

      cursos
        .filter(c => c.anio === anio && c.ciclo === ciclo)
        .forEach(curso => {
          const btn = document.createElement("div");
          btn.className = "curso bloqueado";
          btn.dataset.codigo = curso.codigo;

          btn.innerHTML = curso.optativo
            ? `<em>Curso optativo</em><br/><small><a href="https://ean.ucr.ac.cr/sites/default/files/docs/malla_curricular_2022_dn_0.pdf" target="_blank">Ver lista en plan oficial</a></small>`
            : `${curso.codigo} - ${curso.nombre}`;

          btn.addEventListener("click", () => toggleCurso(curso.codigo));
          cicloDiv.appendChild(btn);
        });

      col.appendChild(cicloDiv);
    });

    malla.appendChild(col);
  });

  actualizarCursos();
}

function toggleCurso(codigo) {
  const btn = document.querySelector(`[data-codigo='${codigo}']`);
  if (btn.classList.contains("bloqueado")) return;
  btn.classList.toggle("activo");
  actualizarCursos();
}

function actualizarCursos() {
  cursos.forEach(curso => {
    const btn = document.querySelector(`[data-codigo='${curso.codigo}']`);
    const completados = Array.from(document.querySelectorAll(".curso.activo")).map(b => b.dataset.codigo);
    const puedeActivarse = curso.prerrequisitos.every(pr => completados.includes(pr));
    if (!btn.classList.contains("activo")) {
      btn.classList.toggle("bloqueado", !puedeActivarse);
    }
  });
}

window.onload = crearMalla;
