// Função para validar os campos de entrada
function validarCampos(quantidade, de, ate) {
    // Verifica se algum campo está vazio
    if (!quantidade || !de || !ate) {
        return false;
    }

    // Converte para números
    quantidade = parseInt(quantidade);
    de = parseInt(de);
    ate = parseInt(ate);

    // Verifica se são números válidos
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        return false;
    }

    if (quantidade <= 0 || de <= 0 || ate <= 0) {
        return false;
    }

    if (de >= ate) {
        return false;
    }

    if (quantidade > (ate - de + 1)) {
        return false;
    }

    return true;
}

// Função para atualizar o estado dos botões
function atualizarEstadoBotoes(sortearHabilitado, reiniciarHabilitado) {
    const btnSortear = document.getElementById('btn-sortear');
    const btnReiniciar = document.getElementById('btn-reiniciar');

    if (sortearHabilitado) {
        btnSortear.classList.remove('container__botao-desabilitado');
        btnSortear.classList.add('container__botao');
    } else {
        btnSortear.classList.remove('container__botao');
        btnSortear.classList.add('container__botao-desabilitado');
    }

    if (reiniciarHabilitado) {
        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add('container__botao');
    } else {
        btnReiniciar.classList.remove('container__botao');
        btnReiniciar.classList.add('container__botao-desabilitado');
    }
}

// Função para atualizar o resultado na tela
function atualizarResultado(numeros) {
    const resultado = document.getElementById('resultado');
    if (numeros.length === 0) {
        resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    } else {
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeros.join(', ')}</label>`;
    }
}

function sortear() {
    const quantidade = document.getElementById('quantidade').value;
    const de = document.getElementById('de').value;
    const ate = document.getElementById('ate').value;

    if (!validarCampos(quantidade, de, ate)) {
        alert('Por favor, preencha todos os campos com números válidos!');
        return;
    }

    try {
        let numerosSorteados = [];
        let numerosDisponiveis = [];

        // Preenche o array com todos os números possíveis
        for (let i = parseInt(de); i <= parseInt(ate); i++) {
            numerosDisponiveis.push(i);
        }

        // Sorteia os números
        for (let i = 0; i < parseInt(quantidade); i++) {
            const indice = Math.floor(Math.random() * numerosDisponiveis.length);
            numerosSorteados.push(numerosDisponiveis[indice]);
            numerosDisponiveis.splice(indice, 1);
        }

        // Ordena os números
        numerosSorteados.sort((a, b) => a - b);

        // Atualiza o resultado na tela
        atualizarResultado(numerosSorteados);

        // Habilita o botão de reiniciar
        atualizarEstadoBotoes(true, true);

        // Adiciona animação de sucesso
        const resultado = document.getElementById('resultado');
        resultado.classList.add('resultado-sucesso');
        setTimeout(() => {
            resultado.classList.remove('resultado-sucesso');
        }, 1000);

    } catch (erro) {
        console.error('Erro ao sortear números:', erro);
        alert('Ocorreu um erro ao sortear os números. Por favor, tente novamente.');
    }
}

function reiniciar() {
    try {
        // Limpa os campos de entrada
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';

        // Reseta o resultado
        atualizarResultado([]);

        // Desabilita o botão de reiniciar
        atualizarEstadoBotoes(true, false);

        // Adiciona animação de reinício
        const resultado = document.getElementById('resultado');
        resultado.classList.add('resultado-reinicio');
        setTimeout(() => {
            resultado.classList.remove('resultado-reinicio');
        }, 500);

    } catch (erro) {
        console.error('Erro ao reiniciar:', erro);
        alert('Ocorreu um erro ao reiniciar. Por favor, tente novamente.');
    }
}

// Adiciona validação em tempo real dos campos
document.addEventListener('DOMContentLoaded', function() {
    const inputs = ['quantidade', 'de', 'ate'];
    
    inputs.forEach(id => {
        const input = document.getElementById(id);
        input.addEventListener('input', function() {
            const quantidade = document.getElementById('quantidade').value;
            const de = document.getElementById('de').value;
            const ate = document.getElementById('ate').value;
            
            // Só valida se todos os campos tiverem algum valor
            if (quantidade && de && ate) {
                atualizarEstadoBotoes(validarCampos(quantidade, de, ate), false);
            } else {
                atualizarEstadoBotoes(false, false);
            }
        });
    });

    // Inicializa os botões como desabilitados
    atualizarEstadoBotoes(false, false);
});
