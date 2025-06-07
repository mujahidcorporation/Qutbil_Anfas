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
        <p><strong>Alamat:</strong> <a href="${item.alamat.link}" target="_blank">${item.alamat.teks}</a></p>
      </div>
    `;

    container.appendChild(el);
  }
);

document.addEventListener("DOMContentLoaded", () => {
    fetch('kitab-kuning.json')  // Ambil data dari file JSON
        .then(response => response.json())  // Ubah data JSON menjadi objek JavaScript
        .then(data => {
            const matanContainer = document.getElementById('matan-container');

            if (matanContainer) {
                data.forEach(kitab => {
                    // Membuat elemen artikel baru untuk setiap entri di JSON
                    const article = document.createElement('article');
                    article.className = 'article-item';

                    // Menambahkan judul artikel
                    const title = document.createElement('h2');
                    title.textContent = kitab.judul;
                    article.appendChild(title);

                    // Menambahkan teks matan (teks Arab)
                    const arabicText = document.createElement('p');
                    arabicText.textContent = kitab.matan;
                    arabicText.dir = "rtl";  // Teks Arab perlu disusun dari kanan ke kiri
                    arabicText.className = 'arabic-text';
                    article.appendChild(arabicText);

                  // Menambahkan artikel ke dalam container
                    matanContainer.appendChild(article);
                });
            }
        })
        .catch(error => {
            console.error("Gagal memuat kitab:", error);
        });
});
