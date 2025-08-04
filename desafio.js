//1. Criação das variáveis principais
let nome = "Morgana";
let classe = "Bruxa";
let nivel = 20;
let vida = 5;
let ouro = 10;
let xp = 40;

//2. Definição de constantes mágicas 
let nomeArma= "varinhaMagica";
let danoBase = 20;
let nomeArmadura = "capaPeleCobra";
let defesaBase= 10;

console.log(`Arma: ${nomeArma}`);
console.log(`Dano base: ${danoBase}`);
console.log(`Nome armadura: ${nomeArmadura}`);
console.log(`Defesa base: ${defesaBase}`);

//3.Aplicação de operadores de atribuição
//  Valores base
let xpBonus = xp += 150
let ouroBonus = ouro -= 30
let vidaBonus = vida += 40
let varinhaMagica = danoBase *= 20


//4.Cálculo de atributos finais 
ataqueTotal = nivel + danoBase
defesaTotal = defesaBase + (nivel / 2)

//5. Avaliação da prontidão com operadores lógicos
let vidaSuficiente = vida > 70
let ataqueForte = ataqueTotal > 60
let nivelAvancado = nivel >= 10
let podeEnfrentarGuardiao =  vidaSuficiente && (ataqueForte || nivelAvancado)

//6. Geração da lore do personagem 
console.log('Lore da bruxa: Morgana');
console.log('Morgana é um abruxa muito poderosa, tem como arma sua varinha mágica e usa sua armadura de pele de cobra');
console.log('Morgana com sua experiência obteve mais 150 pontos bonus de xp e comprou mais 30 moedas de ouro ficando com 40 moedas,');
console.log('Oba! Morgana lutou com um mago e venceu, recuperou 40 pontos de vida');
console.log('A bruxa levou um golpe surpresa do mago e obteve 20 ponos de dano');

//Desafio parte 2
console.log("-------------------------------------");


//1.Resgate do nível um 

let nomePersonagem = "Morgana";
let classeNivelUm = "Bruxa";
let vidaAtual = 100;
let vidaMaxima = 50;
let nivel1 = 2;
let exprecienciaNova = 0;
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
    console.log("Morgana lutou com o mago")
}


if (forca >= 15) {
    console.log("Morgana venceu a batalha")
}
else {
    console.log("Morgana perdeu a batalha")
}


if (forca >= 15) {
    console.log("A bruxa Morgana lançou um feitiço surpresa e fez o mago perder algumas vidas ")
}
else if (forca < 15) {
    console.log("O mago fez a bruxa perder todas as suas forças com uma pancada na cabeça ")
}


//3. Condicionais simples- a primeira decisão 

// CAPÍTULO 1: Condicionais Simples na narrativa
console.log(" CAPÍTULO 1: A volta da bruxa ansiã");

// Verificação baseada no nível do personagem
if (nivel1 < 3) {
    console.log(" A bruxa ansiã diz: 'Você é muito imatura, a nossa convenção está apontada com você!'");
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

// Escolha bseada em recursos 
if (dinheiro >= 50) {
    console.log("Com dinheiro o suficiente," + Morgana+ "pode comprar uma varinha melhor");
    forca += 5;
    defesa += 3;
    dinheiro -= 50;
    console.log ("Força e defesa aumentaram! Dinheiro restante:"+ dinheiro);
} else {
    console.log("Sem dinheiro suficiente," + Morgana + "Deve confiar apenas em suas habilidades!");
    console.log("A adversidade fortalece o espírito! Agilidade  + 2");
    agilidade += 2;
}

// Sistema de recompensas narrativo
if (experiencia >= 100) {
    console.log(" A sabedoria acumulada se manifesta! " + Morgana + " sente-se mais poderosa!");
    nivel++;
    experiencia = 0;
    vidaAtual = vidaMaxima; // Vida restaurada
} else {
    console.log("" + nomePersonagem + " ainda busca mais conhecimento e experiência...");
    console.log("Sabedoria atual: " + experiencia + "/100");
}

//5. Condicionais encadeadas - táticas avançadas 

