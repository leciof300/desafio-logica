function calcularNivel(vitorias, derrotas) {
    // Cálculo do saldo de vitórias
    let saldo = vitorias - derrotas;
    
    // Determinação do nível com base na quantidade de vitórias
    let nivel = '';
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else if (vitorias >= 101) {
        nivel = 'Imortal';
    }

    // Retorna saldo e nível
    return { saldo, nivel };
}

function mostrarResultado(vitorias, derrotas) {
    // Chama a função para calcular saldo e nível
    const { saldo, nivel } = calcularNivel(vitorias, derrotas);
    
    // Exibe a mensagem com o resultado
    console.log(`O Herói tem um saldo de ${saldo} vitórias e está no nível ${nivel}`);
}

// Definindo diretamente o número de vitórias e derrotas para nível Ouro
let vitorias = 60;  // Número de vitórias dentro da faixa de 51 a 80
let derrotas = 10;  // Exemplo de derrotas

mostrarResultado(vitorias, derrotas);
