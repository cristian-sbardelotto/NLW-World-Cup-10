const body = document.querySelector('body');
const cards = document.querySelector('.cards');
const select = document.querySelector('#change-theme__select');
const button = document.querySelector('#change-theme__button');

// CHANGE THEME
button.addEventListener('click', () => {
  body.attributes.removeNamedItem('class');
  body.classList.add(select.value);
});

// CARDS CREATION
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
    <blockquote class="card" style='animation-delay: ${delay}s'>
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </blockquote>
  `;
}

cards.innerHTML =
  createCard(
    '05/12',
    'segunda',
    createGame('japan', '12:00', 'croatia') +
      createGame('brazil', '16:00', 'southkorea')
  ) +
  createCard(
    '06/12',
    'terça',
    createGame('morocco', '12:00', 'spain') +
      createGame('portugal', '13:00', 'switzerland')
  );
