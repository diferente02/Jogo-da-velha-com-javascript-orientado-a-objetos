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
//   preencherX() {
//     if (!this.temEspacoLivre()) {
//         console.log("A matriz está cheia. Não é possível preencher mais.");
//         return;
//     }
//     let pos_i = Math.floor(Math.random() * 3);
//     let pos = Math.floor(Math.random() * 3);
//     if (this.matriz[pos_i][pos_j] !== " "){
//         // Posição preenchida,reinicie a função
//         return this.preencherO();   
//     }
//     this.matriz[pos_i][pos_j] = "X";
//     console.log(pos_i,pos_j);
//   }

  preencherO() {
    const botoes = document.querySelectorAll('.tabuleiro button');
    
    // Lista de posições livres
    const posicoesLivres = [];

    for (let linha = 0; linha < 3; linha++) {
        for (let coluna = 0; coluna < 3; coluna++) {
            if (this.matriz[linha][coluna] === " ") {
                posicoesLivres.push({ linha, coluna, index: linha * 3 + coluna });
            }
        }
    }

    if (posicoesLivres.length === 0) {
        console.log("Sem espaço livre");
        return;
    }

    // Posição aleatória
    const aleatoria = posicoesLivres[Math.floor(Math.random() * posicoesLivres.length)];

    // Atualiza botão e matriz
    botoes[aleatoria.index].textContent = "O";
    this.matriz[aleatoria.linha][aleatoria.coluna] = "O";
}

preencherX() {
    const botoes = document.querySelectorAll('.tabuleiro button');
    
    // Lista de posições livres
    const posicoesLivres = [];

    for (let linha = 0; linha < 3; linha++) {
        for (let coluna = 0; coluna < 3; coluna++) {
            if (this.matriz[linha][coluna] === " ") {
                posicoesLivres.push({ linha, coluna, index: linha * 3 + coluna });
            }
        }
    }

    if (posicoesLivres.length === 0) {
        console.log("Sem espaço livre");
        return;
    }

    // Posição aleatória
    const aleatoria = posicoesLivres[Math.floor(Math.random() * posicoesLivres.length)];

    // Atualiza botão e matriz
    botoes[aleatoria.index].textContent = "X";
    this.matriz[aleatoria.linha][aleatoria.coluna] = "X";
}

    ModoDeJogo(){
    const botaoModoDeJogo = document.querySelector('.ModoDeJogo');
    botaoModoDeJogo.onclick = () => {
        console.log("maquina Vs Maquina")
        for(let i = 0; i < 5; i++){
            this.preencherX();
        // Verifica vitória do jogador X
            if (this.vitorias()) {
                alert("Jogador X venceu!");
                this.bloquearTabuleiro();
                return;
            

            // Verifica se empatou (sem espaços)
            }else if (!this.temEspacoLivre()) {
                alert("Empate!");
                return;
            }

            // Jogada do Jogador O
            this.preencherO();

            // Verifica vitória do jogador O
            if (this.vitorias()) {
                alert("A Jogador 0 venceu!");
                return;
            }

            // Verifica empate novamente
            else if (!this.temEspacoLivre()) {
                alert("Empate!");
            }

            this.exibir(); // só para debug
        } 
    }
}


  bloquearTabuleiro() {
    // bloqueia botões em que o texto é O
    const botoes = document.querySelectorAll('.tabuleiro button');
    botoes.forEach(botao => botao.disabled = true);
    }

    // Interação usário e maquina 
  usuario(){
    const PosicoesTabuleiro = document.querySelectorAll('.tabuleiro button');

    // se botão 0 for clicado
    PosicoesTabuleiro[0].onclick = () => {
        console.log(PosicoesTabuleiro[1])
        PosicoesTabuleiro[0].textContent = "X";
        this.matriz[0][0] = "X";
        
            // Verifica vitória do jogador
            if (this.vitorias()) {
                alert("Você venceu!");
                this.bloquearTabuleiro();
                return;
            

            // Verifica se empatou (sem espaços)
            }else if (!this.temEspacoLivre()) {
                alert("Empate!");
                return;
            }

            // Jogada da máquina
            this.preencherO();

            // Verifica vitória da máquina
            if (this.vitorias()) {
                alert("A máquina venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica empate novamente
            else if (!this.temEspacoLivre()) {
                alert("Empate!");
            }

            this.exibir(); // só para debug

        //this.preencherO();

        if (this.vitorias()) {
            alert('Máquina venceu!');
            return;
        }

        this.exibir();
        
    }; 

    // se botão 1 for clicado 
    PosicoesTabuleiro[1].onclick = () =>{
        console.log(PosicoesTabuleiro[1])
        PosicoesTabuleiro[1].textContent = "X";
        this.matriz[0][1] = "X";
        
            // Verifica vitória do jogador
            if (this.vitorias()) {
                alert("Você venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica se empatou (sem espaços)
            if (!this.temEspacoLivre()) {
                alert("Empate!");
                return;
            }

            // Jogada da máquina
            this.preencherO();

            // Verifica vitória da máquina
            if (this.vitorias()) {
                alert("A máquina venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica empate novamente
            if (!this.temEspacoLivre()) {
                alert("Empate!");
            }

            this.exibir(); // só para debug
    }

    // se botão 2 for clicado 
    PosicoesTabuleiro[2].onclick = () =>{
        console.log(PosicoesTabuleiro[2])
        PosicoesTabuleiro[2].textContent = "X";
        this.matriz[0][2] = "X";
        
            // Verifica vitória do jogador
            if (this.vitorias()) {
                alert("Você venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica se empatou (sem espaços)
            if (!this.temEspacoLivre()) {
                alert("Empate!");
                return;
            }

            // Jogada da máquina
            this.preencherO();

            // Verifica vitória da máquina
            if (this.vitorias()) {
                alert("A máquina venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica empate novamente
            if (!this.temEspacoLivre()) {
                alert("Empate!");
            }

            this.exibir(); // só para debug
    }

    // se botão 3 for clicado
    PosicoesTabuleiro[3].onclick = () =>{
        console.log(PosicoesTabuleiro[3])
        PosicoesTabuleiro[3].textContent = "X";
        this.matriz[1][0] = "X";
        
            // Verifica vitória do jogador
            if (this.vitorias()) {
                alert("Você venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica se empatou (sem espaços)
            if (!this.temEspacoLivre()) {
                alert("Empate!");
                return;
            }

            // Jogada da máquina
            this.preencherO();

            // Verifica vitória da máquina
            if (this.vitorias()) {
                alert("A máquina venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica empate novamente
            if (!this.temEspacoLivre()) {
                alert("Empate!");
            }

            this.exibir(); // só para debug

        this.exibir();
    }

    // se botão 4 for clicado 
    PosicoesTabuleiro[4].onclick = () =>{
        console.log(PosicoesTabuleiro[4])
        PosicoesTabuleiro[4].textContent = "X";
        this.matriz[1][1] = "X";
        
            // Verifica vitória do jogador
            if (this.vitorias()) {
                alert("Você venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica se empatou (sem espaços)
            if (!this.temEspacoLivre()) {
                alert("Empate!");
                return;
            }

            // Jogada da máquina
            this.preencherO();

            // Verifica vitória da máquina
            if (this.vitorias()) {
                alert("A máquina venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica empate novamente
            if (!this.temEspacoLivre()) {
                alert("Empate!");
            }

            this.exibir(); // só para debug

        this.exibir();
    }

    // se botão 5 for clicado 
    PosicoesTabuleiro[5].onclick = () =>{
        console.log(PosicoesTabuleiro[5])
        PosicoesTabuleiro[5].textContent = "X";
        this.matriz[1][2] = "X";
        
            // Verifica vitória do jogador
            if (this.vitorias()) {
                alert("Você venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica se empatou (sem espaços)
            if (!this.temEspacoLivre()) {
                alert("Empate!");
                return;
            }

            // Jogada da máquina
            this.preencherO();

            // Verifica vitória da máquina
            if (this.vitorias()) {
                alert("A máquina venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica empate novamente
            if (!this.temEspacoLivre()) {
                alert("Empate!");
            }

            this.exibir(); // só para debug

        this.exibir();
    }

    // se botao 6 for clicado 
    PosicoesTabuleiro[6].onclick = () =>{
        console.log(PosicoesTabuleiro[6])
        PosicoesTabuleiro[6].textContent = "X";
        this.matriz[2][0] = "X";
        
            // Verifica vitória do jogador
            if (this.vitorias()) {
                alert("Você venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica se empatou (sem espaços)
            if (!this.temEspacoLivre()) {
                alert("Empate!");
                return;
            }

            // Jogada da máquina
            this.preencherO();

            // Verifica vitória da máquina
            if (this.vitorias()) {
                alert("A máquina venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica empate novamente
            if (!this.temEspacoLivre()) {
                alert("Empate!");
            }

            this.exibir(); // só para debug

        this.exibir();
    }

    // se botao 7 for clicado 
    PosicoesTabuleiro[7].onclick = () =>{
        console.log(PosicoesTabuleiro[7])
        PosicoesTabuleiro[7].textContent = "X";
        this.matriz[2][1] = "X";
        
            // Verifica vitória do jogador
            if (this.vitorias()) {
                alert("Você venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica se empatou (sem espaços)
            if (!this.temEspacoLivre()) {
                alert("Empate!");
                return;
            }

            // Jogada da máquina
            this.preencherO();

            // Verifica vitória da máquina
            if (this.vitorias()) {
                alert("A máquina venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica empate novamente
            if (!this.temEspacoLivre()) {
                alert("Empate!");
            }

            this.exibir(); // só para debug

        this.exibir();
    }

    // se botao 8 for clicado 
    PosicoesTabuleiro[8].onclick = () =>{
        console.log(PosicoesTabuleiro[8])
        PosicoesTabuleiro[8].textContent = "X";
        this.matriz[2][2] = "X";
        
            // Verifica vitória do jogador
            if (this.vitorias()) {
                alert("Você venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica se empatou (sem espaços)
            if (!this.temEspacoLivre()) {
                alert("Empate!");
                return;
            }

            // Jogada da máquina
            this.preencherO();

            // Verifica vitória da máquina
            if (this.vitorias()) {
                alert("A máquina venceu!");
                this.bloquearTabuleiro();
                return;
            }

            // Verifica empate novamente
            if (!this.temEspacoLivre()) {
                alert("Empate!");
            }

            this.exibir(); // só para debug
    }
  }
  // define jogadas que encerram o jogo e dão a vitoria ao jogador
    vitorias() {
    const jogadores = ["X", "O"];

    for (const jogador of jogadores) {
        const m = this.matriz;

        // Verifica todas as vitórias possíveis
        if (
        // linhas verticais
        (m[0][0] === jogador && m[0][1] === jogador && m[0][2] === jogador) ||
        (m[1][0] === jogador && m[1][1] === jogador && m[1][2] === jogador) ||
        (m[2][0] === jogador && m[2][1] === jogador && m[2][2] === jogador) ||

        // linhas horizontais
        (m[0][0] === jogador && m[1][0] === jogador && m[2][0] === jogador) ||
        (m[0][1] === jogador && m[1][1] === jogador && m[2][1] === jogador) ||
        (m[0][2] === jogador && m[1][2] === jogador && m[2][2] === jogador) ||

        // linhas diagonais
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

// ============================== Execução código principal ===============================

const matriz = new Matriz3x3();
matriz.ModoDeJogo();
matriz.usuario();


