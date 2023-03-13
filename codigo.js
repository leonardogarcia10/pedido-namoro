const yesBtn = document.querySelector('#yes-btn');
const noBtn = document.querySelector('#no-btn');

yesBtn.addEventListener('click', () => {
  alert('Que ótimo! Vamos marcar um encontro?');
});

noBtn.addEventListener('click', () => {
  noBtn.classList.add('move');
  alert('Tudo bem, obrigado pela resposta.');
});
