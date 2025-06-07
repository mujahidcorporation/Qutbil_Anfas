function renderAccordion(data, containerId) {
  const container = document.getElementById(containerId);
  data.forEach(item => {
    const acc = document.createElement("div");
    acc.className = "accordion";

    const title = document.createElement("div");
    title.className = "accordion-title";
    title.textContent = item.title;

    const content = document.createElement("div");
    content.className = "accordion-content";

    item.content.forEach((line, index) => {
      const lineDiv = document.createElement("div");
      lineDiv.className = "line " + (index % 2 === 0 ? "right" : "left");
      lineDiv.innerHTML = line;
      content.appendChild(lineDiv);
    });

    title.addEventListener("click", () => {
      content.classList.toggle("active");
    });

    acc.appendChild(title);
    acc.appendChild(content);
    container.appendChild(acc);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("sholawat-container")) {
    renderAccordion(sholawatData, "sholawat-container");
  }
  if (document.getElementById("nadzom-container")) {
    renderAccordion(nadzomData, "nadzom-container");
  }
});

const container = document.getElementById("berita-container");

  berita.forEach(item => {
    const el = document.createElement("div");
    el.classList.add("news-item");

    el.innerHTML = `
      <img src="${item.gambar}" alt="${item.judul}">
      <div class="news-item-content">
        <p>${item.deskripsi}</p>
        <iframe src="${item.peta}" allowfullscreen></iframe>
      </div>
    `;

    container.appendChild(el);
  }
);