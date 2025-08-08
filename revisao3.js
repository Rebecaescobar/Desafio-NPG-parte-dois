//Listar os numeros de 1 a 20
console.log("listando de 1 a 20");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// criando um inventário para Ayla 
let inventario = ["Poção de Cura", "Espada de Fogo", "Mapa Antigo", "Chave dourada ", "Anel de Invisibilidade"];

//Mostrando os itens do inventário
console.log("Inventario de Ayla");
// com lenght nós pegamos o tamanho exato do array
for (let i = 0; i < inventario.length; i++) {
    console.log(`-${inventario[i]}`);
}