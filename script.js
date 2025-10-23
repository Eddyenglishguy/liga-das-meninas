// Mostrar botão "voltar ao topo" ao rolar a página
const btnTopo = document.createElement("button");
btnTopo.id = "btnTopo";
btnTopo.textContent = "↑";
document.body.appendChild(btnTopo);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

// Ao clicar, volta suavemente para o topo
btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mensagem de boas-vindas no console
console.log("Bem-vindo ao Meu Blog! Personalize à vontade 😄");
