const games = [
    {
        title: "Jogo da Cobrinha",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Snake_game.png",
        description: "Versão clássica do jogo da cobrinha feita em JavaScript.",
        link: "https://seulink.com/jogo-cobrinha"
    },
    {
        title: "Space Shooter",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Space_Invaders.png",
        description: "Jogo de nave espacial com inimigos infinitos.",
        link: "https://seulink.com/space-shooter"
    },
    {
        title: "Quiz Interativo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Question_mark_white.svg/1200px-Question_mark_white.svg.png",
        description: "Teste seus conhecimentos com esse quiz de múltipla escolha.",
        link: "https://seulink.com/quiz"
    }
];

const container = document.getElementById('games-container');

games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';

    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <h2>${game.title}</h2>
        <p>${game.description}</p>
        <a href="${game.link}" target="_blank">Jogar</a>
    `;

    container.appendChild(card);
});
