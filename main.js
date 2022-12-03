function createGame(player1, hour, player2) {
  return `
  <li>
          <img src="assets/Icon-${player1}.svg"
           alt="Bandeira do ${player1}" />
          <strong>${hour}</strong>
          <img src="assets/Icon-${player2}.svg" 
          alt="Bandeira do ${player2}.svg" />
            </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s=">
          <h2>${date}<span> ${day}</span></h2>
          <ul>        
            ${games}        
          </ul>
        </div>
          `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "Quinta",
    createGame("brazil", "16:00", "Serbia") +
      createGame("portugal", "13:00", "ghana")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("japao", "10:00", "ghana")
  ) +
  createCard(
    "02/12",
    "Sexta",
    createGame("brazil", "08:00", "cameroon") +
      createGame("portugal", "16:00", "uruguay")
  )
