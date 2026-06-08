function mostrarDica() {
    const dicas = [
        "O plantio direto evita a erosão do solo.",
        "A rotação de culturas mantém os nutrientes da terra.",
        "O uso de drones ajuda a economizar água e defensivos.",
        "Preservar as APPs garante água para as próximas gerações."
    ];
    
    // Sorteia uma dica do array
    const indice = Math.floor(Math.random() * dicas.length);
    document.getElementById("resultado").innerText = dicas[indice];
}
