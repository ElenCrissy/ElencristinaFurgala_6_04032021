class Form {
  constructor(photographerName, selector) {
    this.photographerName = photographerName;
    this.selector = selector;
  }

  createForm() {
    const formBackground = document.createElement('div');
    const formContent = document.createElement('div');
    const close = document.createElement('span');
    const formBody = document.createElement('div');
    const formTitle = document.createElement('div');
    const recipientName = document.createElement('div');
    const form = document.createElement('form');
  
    const firstName = document.createElement('div');
    const firstNameLabel = document.createElement('label');
    const firstNameInput = document.createElement('input');
    const firstNameError = document.createElement('div');
  
    const lastName = document.createElement('div');
    const lastNameLabel = document.createElement('label');
    const lastNameInput = document.createElement('input');
    const lastNameError = document.createElement('div');
  
    const email = document.createElement('div');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const emailError = document.createElement('div');
  
    const message = document.createElement('div');
    const messageLabel = document.createElement('label');
    const messageInput = document.createElement('textarea');
    const messageError = document.createElement('div');
  
    const submitBtn = document.createElement('input');
    const confirmationMsg = document.createElement('div');
  
    formBackground.classList.add('form-background');
    formContent.classList.add('form-content');
    close.classList.add('close');
    formBody.classList.add('form-body');
    formTitle.classList.add('form-title');
    recipientName.classList.add('recipient-name');

    recipientName.appendChild(document.createTextNode(`${this.photographerName.name}`));
    formTitle.innerHTML = `Contactez-moi <br>`;
  
    form.setAttribute('id', 'contact');
    form.setAttribute('name', 'contact');
    form.setAttribute('action', '');
    form.setAttribute('method', 'get');
    form.setAttribute('onsubmit', 'return validate()');
    form.setAttribute('novalidate', 'novalidate');
  
    const formData = [firstName, lastName, email, message];
    formData.forEach(element => element.classList.add('formData'));
    firstName.classList.add('first-name');
    lastName.classList.add('last-name');
    email.classList.add('email');
    message.classList.add('message');
  
    firstNameLabel.setAttribute('for', 'first');
    lastNameLabel.setAttribute('for', 'last');
    emailLabel.setAttribute('for', 'email');
    messageLabel.setAttribute('for', 'message');
  
    firstNameLabel.appendChild(document.createTextNode('Prénom'));
    lastNameLabel.appendChild(document.createTextNode('Nom'));
    emailLabel.appendChild(document.createTextNode('E-mail'));
    messageLabel.appendChild(document.createTextNode('Message'));
  
    const allInputs = [firstNameInput, lastNameInput, emailInput, messageInput];
    allInputs.forEach(input => input.classList.add('text-control'));
  
    firstNameInput.setAttribute('type', 'text');
    firstNameInput.setAttribute('name', 'first');
    firstNameInput.setAttribute('minlength', '2');

    lastNameInput.setAttribute('type', 'text');
    lastNameInput.setAttribute('name', 'last');
    lastNameInput.setAttribute('minlength', '2');

    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');

    messageInput.classList.add('text-control__message');
    messageInput.setAttribute('type', 'text')
    messageInput.setAttribute('name', 'message');
  
    firstNameError.setAttribute('id', 'firstNameError');
    lastNameError.setAttribute('id', 'lastNameError');
    emailError.setAttribute('id', 'emailError');
    messageError.setAttribute('id', 'messageError');
  
    const errors = [firstNameError, lastNameError, emailError, messageError]
    errors.forEach(error => error.classList.add('error'));
  
    firstNameError.appendChild(document.createTextNode('Veuillez entrer votre prénom - 2 caractères minimum'));
    lastNameError.appendChild(document.createTextNode('Veuillez entrer votre nom - 2 caractères minimum'));
    emailError.appendChild(document.createTextNode('Veuillez renseigner votre adresse mail'));
    messageError.appendChild(document.createTextNode('Entrez votre message'));
  
    submitBtn.classList.add('btn-submit', 'button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Envoyer');
    submitBtn.addEventListener('click', this.validate);
  
    confirmationMsg.setAttribute('id', 'confirmationMsg');
    confirmationMsg.innerHTML = `Merci !<br> Votre message a été envoyé <br> à ${this.photographerName.name}.`

    formBackground.appendChild(formContent);
    formContent.append(close, formBody, confirmationMsg);
    formBody.append(formTitle, form, submitBtn);
    formTitle.appendChild(recipientName);
    form.append(firstName, lastName, email, message);
    firstName.append(firstNameLabel, firstNameInput, firstNameError);
    lastName.append(lastNameLabel, lastNameInput, lastNameError);
    email.append(emailLabel, emailInput, emailError);
    message.append(messageLabel, messageInput, messageError);
  
    this.selector.appendChild(formBackground);

    close.addEventListener('click', () => {
      formBackground.style.display = 'none';
    });

  }

  launchForm() {
    const modal = document.querySelector('.form-background'); 
    modal.style.display = 'block';
  }

  validate(event) {
    const form = document.getElementById('contact');
    const confirmationMsg = document.querySelector('#confirmationMsg');
    const submitBtn = document.querySelector('.btn-submit');
    let formOk;

    event.preventDefault();

    //help
    const checkInputs = () => {
      const first = document.querySelector('input[name=first]');
      const last = document.querySelector('input[name=last]');
      const email = document.querySelector('input[name=email]');
      const message = document.querySelector('textarea[name=message]');
      const firstError = document.getElementById('firstNameError');
      const lastError = document.getElementById('lastNameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');
      let formOk = false;
  
      const verifName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
      if (verifName.exec(first.value) === null || first.length < 2) {
        firstError.style.visibility = 'visible';
        console.log('erreur sur checkinput first name')
        return formOk === false;
      }
  
      if (verifName.exec(last.value) === null || last.length < 2) {
        lastError.style.visibility = 'visible';
        console.log('erreur sur checkinput last name')
        return formOk === false;
      }
  
      const verifEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      if (verifEmail.exec(email.value) === null) {
        emailError.style.visibility = 'visible';
        console.log('erreur sur checkinput email')
        return formOk === false;
      }
  
      if (message.value === '') {
        messageError.style.visibility = 'visible';
        console.log('erreur sur checkinput message')
        return formOk === false;
      }
      const contactContent = `Prénom : ${first.value}, Nom : ${last.value}, Message : ${message.value}`;
      console.log(contactContent)
      return formOk = true;
    }
    
    checkInputs();
    
    if (formOk === true) {
      form.style.display = 'none';
      submitBtn.style.display = 'none';
      confirmationMsg.style.display = 'flex';
    }
    return true;
  }
}