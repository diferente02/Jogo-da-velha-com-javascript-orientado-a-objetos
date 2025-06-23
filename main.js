console.log("hello world")

class Matriz3x3 {
    constructor(){
        this.matriz = this.#criarMatrizVazia();
    }

    // Método privado pra criar matiz 3x3 preenchida com zeros
    #criarMatrizVazia(){
        const matriz = [];
        for(let indiceLinha = 0; indiceLinha<3; indiceLinha++){
            const linha = [];
            for(let j = 0; j < 3; j++){
                linha.push(" ");
            }
            matriz.push(linha);
        }
        return matriz;
    }

    //Exibe a matriz no console
    exibir(){
        console.log("Matriz 3x3:");
        this.matriz.forEach(linha => console.log(linha));
    }
    temEspacoLivre(){
        return this.matriz.some(linha => linha.includes(" "));
    }

    // Preenche uma posição aleatoria da matriz com X 
  preencherX() {
    if (!this.temEspacoLivre()) {
        console.log("A matriz está cheia. Não é possível preencher mais.");
        return;
    }
    let pos_i = Math.floor(Math.random() * 3);
    let pos_j = Math.floor(Math.random() * 3);
    if (this.matriz[pos_i][pos_j] !== " "){
        // Posição preenchida,reinicie a função
        return this.preencherO();   
    }
    this.matriz[pos_i][pos_j] = "X";
    console.log(pos_i,pos_j);
  }

  preencherO() {
    if (!this.temEspacoLivre()) {
        console.log("A matriz está cheia. Não é possível preencher mais.");
        return;
    }
    let pos_i = Math.floor(Math.random() * 3);
    let pos_j = Math.floor(Math.random() * 3);
    if (this.matriz[pos_i][pos_j] !== " "){
        // Posição preenchida,reinicie a função
        return this.preencherO();   
    }
    this.matriz[pos_i][pos_j] = "O";
    console.log(pos_i,pos_j);
  }
  
    vitorias() {
    const jogadores = ["X", "O"];

    for (const jogador of jogadores) {
        const m = this.matriz;

        // Verifica todas as vitórias possíveis
        if (
        (m[0][0] === jogador && m[0][1] === jogador && m[0][2] === jogador) ||
        (m[1][0] === jogador && m[1][1] === jogador && m[1][2] === jogador) ||
        (m[2][0] === jogador && m[2][1] === jogador && m[2][2] === jogador) ||

        (m[0][0] === jogador && m[1][0] === jogador && m[2][0] === jogador) ||
        (m[0][1] === jogador && m[1][1] === jogador && m[2][1] === jogador) ||
        (m[0][2] === jogador && m[1][2] === jogador && m[2][2] === jogador) ||

        (m[0][0] === jogador && m[1][1] === jogador && m[2][2] === jogador) ||
        (m[0][2] === jogador && m[1][1] === jogador && m[2][0] === jogador)
        ) {
        console.log(`O jogador "${jogador}" venceu!`);
        return true;
        }
    }

    return false;
    }

}


const matriz = new Matriz3x3();

let rodadas = 0;

for( let posicoes = 0; posicoes<5;posicoes++){
    
    matriz.preencherX();
    matriz.exibir();
    matriz.preencherO();
    matriz.exibir();
    if (rodadas >= 2){
        if(matriz.vitorias()){
            console.log("fim do jogo!");
            break;
        }
    }
    rodadas += 1;
}

