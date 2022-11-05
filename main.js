function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira de ${player1}" />
      <span>${hour}</span>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira de ${player2}" />
    </li>
  `;
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style='animation-delay: ${delay}s'>
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `;
}

document.querySelector('.cards').innerHTML =
  createCard('22/11', 'terça', createGame('france', '16:00', 'australia')) +
  createCard(
    '24/11',
    'quinta',
    createGame('uruguay', '10:00', 'southkorea') +
      createGame('portugal', '13:00', 'ghana') +
      createGame('brazil', '16:00', 'serbia')
  ) +
  createCard('26/11', 'sábado', createGame('france', '13:00', 'denmark')) +
  createCard(
    '28/11',
    'segunda',
    createGame('southkorea', '10:00', 'ghana') +
      createGame('brazil', '13:00', 'switzerland') +
      createGame('portugal', '16:00', 'uruguay')
  ) +
  createCard('30/11', 'quarta', createGame('tunisia', '12:00', 'france')) +
  createCard(
    '02/12',
    'sexta',
    createGame('southkorea', '12:00', 'portugal') +
      createGame('ghana', '12:00', 'uruguay') +
      createGame('cameroon', '16:00', 'brazil')
  );
