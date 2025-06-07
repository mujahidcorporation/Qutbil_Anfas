// kitab-script.js
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("pdf-link-container");

  daftarPDF.forEach(pdf => {
    const link = document.createElement("a");
    link.href = pdf.url;
    link.textContent = `📘 ${pdf.judul}`;
    link.target = "_blank";
    link.style.display = "block";
    link.style.margin = "10px 0";
    link.style.color = "#116530";
    link.style.fontWeight = "bold";
    link.style.textDecoration = "none";
    link.style.padding = "10px 15px";
    link.style.border = "2px solid #cce1c1";
    link.style.borderRadius = "8px";
    link.style.backgroundColor = "#f9fff3";
    link.onmouseover = () => link.style.backgroundColor = "#eaf6e2";
    link.onmouseout = () => link.style.backgroundColor = "#f9fff3";

    container.appendChild(link);
  });
});
