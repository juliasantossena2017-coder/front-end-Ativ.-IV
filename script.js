// Alternar modo escuro
document.getElementById("btn-dark").addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
});

// Alternar alto contraste
document.getElementById("btn-contraste").addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});

// Acessibilidade: foco ao pular para o conteúdo
document.getElementById("skip-link").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const main = document.querySelector("main");
        main.setAttribute("tabindex", "-1");
        main.focus();
    }
});