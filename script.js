// Preview the inquiry without sending data or creating a reservation.
const form = document.querySelector('#stay-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const stay = document.querySelector('#stay').value;
  const date = document.querySelector('#arrival').value;
  const guests = document.querySelector('#guests').value;
  document.querySelector('#confirmation').textContent =
    `Practice inquiry: ${stay}, arrival ${date}, ${guests} guest(s). Nothing was sent and no booking was made.`;
});
