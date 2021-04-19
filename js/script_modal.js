function displayForm(relevantPhotographer) {
  const modal = document.querySelector('.background');
  modal.style.display = 'block';
  const form = document.getElementById('contact');
  const recipientName = document.querySelector('.recipient-name');
  let formOk = false;
  // const modal = document.querySelector('.background');
  const confirmationMsg = document.querySelector('#confirmationMsg');
  const first = document.getElementById('first');
  const last = document.getElementById('last');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const firstError = document.getElementById('firstError');
  const lastError = document.getElementById('lastError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  recipientName.append(document.createTextNode(`${relevantPhotographer.name}`));
  firstError.appendChild(document.createTextNode('Veuillez entrer votre prénom - 2 caractères minimum'));
  lastError.appendChild(document.createTextNode('Veuillez entrer votre nom - 2 caractères minimum'));
  emailError.appendChild(document.createTextNode('Veuillez renseigner votre adresse mail'));
  messageError.appendChild(document.createTextNode('Entrez votre message'));

  const closeCross = document.querySelector('.close');
  closeCross.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  checkInputs();


  function checkInputs() {
    const verifName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
    if (verifName.exec(first.value) === null || first.length < 2) {
      firstError.style.visibility = 'visible';
      return formOk === false;
    }

    if (verifName.exec(last.value) === null || last.length < 2) {
      lastError.style.visibility = 'visible';
      return formOk === false;
    }

    const verifEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (verifEmail.exec(email.value) === null) {
      emailError.style.visibility = 'visible';
      return formOk === false;
    }

    if (message.value === '') {
      messageError.style.visibility = 'visible';
      return formOk === false;
    }
    formOk = true;
    const contactContent = `Prénom : ${first.value}, Nom : ${last.value}, Message : ${message.value}`;
    return console.log(contactContent);
  }

  function validate(event) {
    event.preventDefault();
    checkInputs();
    const submitBtn = document.getElementById('submit');
    const closeBtnRed = document.getElementById('closeBtnRed');
    if (formOk === true) {
      form.style.display = 'none';
      submitBtn.style.display = 'none';
      confirmationMsg.style.display = 'flex';
      closeBtnRed.style.display = 'block';
      closeBtnRed.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  }

  form.addEventListener('submit', validate);
}