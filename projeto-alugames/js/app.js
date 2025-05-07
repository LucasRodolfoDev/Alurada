// Função para alterar o status do jogo (alugar/devolver)
function alterarStatus(id) {
    const game = document.getElementById(`game-${id}`);
    const button = game.querySelector('.dashboard__item__button');
    const img = game.querySelector('.dashboard__item__img');
    
    // Verifica se o jogo está alugado
    const isRented = button.textContent === 'Devolver';
    
    if (isRented) {
        // Devolver o jogo
        button.textContent = 'Alugar';
        button.classList.remove('dashboard__item__button--return');
        img.classList.remove('dashboard__item__img--rented');
    } else {
        // Alugar o jogo
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');
        img.classList.add('dashboard__item__img--rented');
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona evento de clique em todos os botões
    const buttons = document.querySelectorAll('.dashboard__item__button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
        });
    });
});
