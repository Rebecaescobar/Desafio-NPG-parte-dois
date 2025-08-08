//1. Criação das variáveis principais
let nome = "Morgana";
let classe = "Bruxa";
let nivel = 20;
let vida = 5;
let ouro = 10;
let xp = 40;

//2. Definição de constantes mágicas
let nomeArma = "varinhaMagica";
let danoBase = 20;
let nomeArmadura = "capaPeleCobra";
let defesaBase = 10;

console.log(`Arma: ${nomeArma}`);
console.log(`Dano base: ${danoBase}`);
console.log(`Nome armadura: ${nomeArmadura}`);
console.log(`Defesa base: ${defesaBase}`);

//3.Aplicação de operadores de atribuição
//  Valores base
let xpBonus = (xp += 150);
let ouroBonus = (ouro -= 30);
let vidaBonus = (vida += 40);
let varinhaMagica = (danoBase *= 20);

//4.Cálculo de atributos finais
ataqueTotal = nivel + danoBase;
defesaTotal = defesaBase + nivel / 2;

//5. Avaliação da prontidão com operadores lógicos
let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

//6. Geração da lore do personagem
console.log("Lore da bruxa: Morgana");
console.log(
  "Morgana é uma bruxa muito poderosa, tem como arma sua varinha mágica e usa sua armadura de pele de cobra"
);
console.log(
  "Morgana com sua experiência obteve mais 150 pontos bonus de xp e comprou mais 30 moedas de ouro ficando com 40 moedas,"
);
console.log(
  "Oba! Morgana lutou com um mago e venceu, recuperou 40 pontos de vida"
);
console.log(
  "A bruxa levou um golpe surpresa do mago e obteve 20 pontos de dano"
);

//Desafio parte 2
console.log("-------------------------------------");

//1.Resgate do nível um

let nomePersonagem = "Morgana";
let classeNivelUm = "Bruxa";
let vidaAtual = 100;
let vidaMaxima = 50;
let nivel1 = 2;
let experiencia = 0;
let dinheiro = 100;

//novos atributos para a batalha
let forca = 15;
let defesa = 10;
let agilidade = 12;
let combatesVencidos = 0;

//Estado atual da história
let localAtual = "golpe surpresa";
let missaoAtual = "combate com mago";

//2. Estrutura narrativa obrigatória

if (vidaAtual >= 100) {
  console.log("Morgana lutou com o mago");
}

if (forca >= 15) {
  console.log("Morgana venceu a batalha");
} else {
  console.log("Morgana perdeu a batalha");
}

if (forca >= 15) {
  console.log(
    "A bruxa Morgana lançou um feitiço surpresa e fez o mago perder algumas vidas "
  );
} else if (forca < 15) {
  console.log(
    "O mago fez a bruxa perder todas as suas forças com uma pancada na cabeça "
  );
}

//3. Condicionais simples- a primeira decisão

// CAPÍTULO 1: Condicionais Simples na narrativa
console.log(" CAPÍTULO 1: A volta da bruxa ansiã");

// Verificação baseada no nível do personagem
if (nivel1 < 3) {
  console.log(
    " A bruxa ansiã diz: 'Você é muito imatura, a nossa convenção está apontada com você!'"
  );
  console.log("Mas " + nomePersonagem + " decide prosseguir mesmo assim...");
}

// Verificação de recursos especiais
if (ouro >= 100) {
  console.log(" Suas moedas são reluzentes, atraindo olhares cobiçosos...");
}

// Verificação de classe específica
if (classe === "Morgana") {
  console.log(" A energia mágica flui através de suas veias...");
}

//4. Condicionais compostas- escolhas estratégicas


// CAPÍTULO 2: Escolha Estratégica
console.log("CAPÍTULO 2: A mágica do Destino");

// Escolha baseada em recursos
if (dinheiro >= 50) {
  console.log(
    "Com dinheiro o suficiente, Morgana pode comprar uma varinha melhor"
  );
  forca += 5;
  defesa += 3;
  dinheiro -= 50;
  console.log("Força e defesa aumentaram! Dinheiro restante:" + dinheiro);
} else {
  console.log(
    "Sem dinheiro suficiente," +
      Morgana +
      "Deve confiar apenas em seus feitiços!"
  );
  console.log("Confie em sua agilidade! Agilidade  + 2");
  agilidade += 2;
}

// Sistema de recompensas narrativo
if (experiencia >= 100) {
  console.log(
    " A sabedoria acumulada se manifesta! " +
      Morgana +
      " sente-se mais poderosa!"
  );
  nivel++;
  experiencia = 0;
  vidaAtual = vidaMaxima; // Vida restaurada
} else {
  console.log(
    "" + nomePersonagem + " ainda busca mais conhecimento e experiência..."
  );
  console.log("Sabedoria atual: " + experiencia + "/100");
}

//5. Condicionais encadeadas - táticas avançadas
// CAPÍTULO 3: A Batalha Decisiva
console.log(" CAPÍTULO 3: A Batalha Decisiva (O jogo de feitiços)");
let poderInimigo = 50;

// Sistema de combate inteligente baseado na situação
if (vidaAtual <= 30) {
  console.log(
    " Com pouca vida e já sem forças, " +
      Morgana +
      " usa de um feitiço surpresa!"
  );
  console.log("Ataque final com toda o feitiço restante!");
  poderInimigo -= forca * 2;
} else if (vidaAtual >= 30 && classe === "Mago") {
  console.log(" " + Morgana + " canaliza todo seu poder mágico!");
  console.log("Feitiço Incrível e aniquilador !");
  poderInimigo -= forca + 20;
  manaAtual -= 30;
} else if (agilidade >= 15) {
  console.log("Com grande estratégia, lança um feitiço certeiro!");
  poderInimigo -= forca;
} else {
  console.log(" Luta de poderes defensiva e calculada!");
  poderInimigo -= forca / 2;
  vidaAtual += 10; // Recupera um pouco de vida
}

//6.Exemplo de implementação narrativa completa
console.log(" === CONTINUAÇÃO DA JORNADA DE Morgana ===");
console.log("");

// PRÓLOGO - Conexão com o Nível 1
console.log("Após os eventos do "  +localAtual+ " a bruxa Morgana ");
console.log("da classe " + classe + " se depara com um novo desafio...");
console.log("O novo desafio de Morgana seria derrotar o mago com um feitiço surpresa");
console.log("Ela se depara com o mago, já cansado, mas contando vitória ");
console.log("Depois de um tempo... CABUM!! Morgana lança um feitiço inesperado e acaba com o mago")

// [Aqui você implementa os 3 capítulos com os conceitos das etapas anteriores]g

// EPÍLOGO - Resultado final
if (poderInimigo <= 0) {
  console.log(
    " VITÓRIA ÉPICA! Morgana Vence a batalha e o jogo de poderes!"
  );
  experiencia += 100;
  combatesVencidos++;
  console.log("A Maior bruxa de todas, épica Morgana cresce...");
} else {
  console.log(
    "A batalha muitas vezes não foi fácil, mas Morgana sobrevive para lutar outro dia, vivemos os dias de luta para aproveitar a glória!"
  );
}

console.log("");
console.log("FIM DO CAPÍTULO - Essa batalha, nossa bruxa venceu, mas será que a guerra também será de glória ?!");

// Desafio parte 3
console.log
  ("-------------------------------------");


// 1. Resgate da saga anterior

// === CONTINUAÇÃO DA SAGA ÉPICA - NÍVEL 3 ===
// Mantenha seu personagem dos níveis anteriores e adicione:

let nomePersonagem = Morgana;
let classe = Bruxa;
let nivel = 3; // Evoluiu após as batalhas anteriores!
let vidaAtual = 120;
let vidaMaxima = 120;
let experiencia = 200;
let ouro = 150;

// === NOVOS ELEMENTOS PARA O CASTELO DOS ARRAYS ===
// Inventário mágico - primeira coleção arcana
let inventario = ["Poção de Vida", "Glacium", "Aqualis"];
let aliados = ["Slade", "Guerreira Luna", "Raelion"];
let inimigosEncontrados = ["Sir Dareth", "Ravok", "Caelus"];
let salasCastelo = ["Biblioteca viventina", "Prisão das sombras", "Torre do Tempo"];
let tesouroColetado = [];

console.log("🏰 === "+nomePersonagem+ "  ADENTRA O CASTELO DOS ARRAYS ===");
console.log("Após as vitórias dos níveis anteriores, nossa bruxa chegou ao castelo lendário...");
console.log("Inventário inicial: " + inventario.length + " itens mágicos");

// 2. Arays- as coleções arcanas 
// === CAPÍTULO 1: DESCOBERTA DAS COLEÇÕES ARCANAS ===
console.log("");
console.log("🗝️ CAPÍTULO 1: Os Baús Arcanos do Castelo");

// 3.5.1. Declaração e inicialização
let pocoesEncontradas = ["Sopro da tempestade", "Véu de névoa", "Néctar de sanguessol"];
let armadilhasAtiradas = []; // Array vazio - será preenchido na aventura

// 3.5.2. Acesso e modificação de elementos
console.log("🧪 Primeira poção encontrada: " + pocoesEncontradas[0]);
console.log("⚗️ Total de poções mágicas: " + pocoesEncontradas.length);

// Modificando elemento específico
inventario[0] = "Poção de Vida Suprema"; // Upgrade da poção!
console.log("✨ " + nomePersonagem + " aprimorou uma poção!");

// 3.5.3. Métodos de array fundamentais
inventario.push("Anel de Proteção"); // Adiciona no final
console.log("💍 Novo item adicionado! Inventário: " + inventario);

let itemRemovido = inventario.pop(); // Remove do final
console.log("📤 Item removido: " + itemRemovido);
console.log("🎒 Inventário atual: " + inventario);

inventario.push("Colar bola de cristal");
console.log("Novo item adicionado! Inventário:" + inventario +);

if (nivel >= 0) {
  console.log("Morgana aumentou seu nível por adicionar um novo item ao inventário ");
} else {
  console.log("Morgana  continuou com o mesmo nível, pois não coletou outro item");
}

//3. For loop tradicional - o ritual da repetição

// === CAPÍTULO 2: O RITUAL DA EXPLORAÇÃO ===
console.log("");
console.log("⚔️ CAPÍTULO 2: Explorando as Masmorras Sistemáticas");

// Explorando cada sala do castelo usando for tradicional
console.log("🗺️ Começando exploração das " + salasCastelo.length + " salas místicas...");

for (let i = 0; i < salasCastelo.length; i++) {
console.log("🚪 Sala " + (i + 1) + ": " + salasCastelo[i]);

// Lógica diferente para cada sala baseada no índice
if (i === 0) {
console.log("📚 " + nomePersonagem + " encontra coroa de ossos!");
experiencia += 50;
} else if (i === 1) {
console.log("💎 Anel do sussuro lunar pode mostrar o futuro!");
tesouroColetado.push("Cristal de Poder");
} else {
console.log("⏰ O tempo distorce ao redor de " + nomePersonagem + "!");
vidaAtual -= 10; // Pequeno dano temporal
}
}

console.log("📊 Exploração completa! XP: " + experiencia + " | Vida: " + vidaAtual);


//4. Gerenciamento de aliados com for 
// === CAPÍTULO 3: A UNIÃO DOS ALIADOS ===
console.log("");
console.log("🤝 CAPÍTULO 3: Reunindo os Aliados Arcanos");

// Recrutando aliados com for tradicional
console.log("🏹 " + nomePersonagem + " convoca seus aliados para a batalha final:");

for (let i = 0; i < aliados.length; i++) {
let aliado = aliados[i];
console.log("⚡ Slad " + (i + 1) + ": " + aliado + " se junta à missão!");

// Cada posição no array determina habilidade especial
if (i === 0) { // Primeiro aliado - Líder mágico
console.log("🔮 Como líder mágico, " + aliado + " multiplica o poder da equipe!");
ouro += 50;
} else if (i === 1) { // Segundo aliado - Defensor
console.log("🛡️ Como defensor principal, " + aliado + " fortalece a resistência!");
vidaMaxima += 30;
} else { // Demais aliados - Especialistas
console.log("🏹 Como especialista, " + aliado + " aprimora táticas de combate!");
experiencia += 40;
}
}

console.log("🎖️ Equipe completa! Ouro: " + ouro + " | Vida máxima: " + vidaMaxima);