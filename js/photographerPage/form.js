class Form {
  constructor(photographerName, selector, app) {
    this.photographerName = photographerName;
    this.selector = selector;
    this.app = app;
  }

  createForm() {
    const formBackground = document.createElement('div');
    const formContent = document.createElement('div');
    const close = document.createElement('span');
    const formBody = document.createElement('div');
    const formTitle = document.createElement('h1');
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
  
    const submitBtn = document.createElement('button');
    const confirmationMsg = document.createElement('div');
  
    formBackground.classList.add('form-background');
    formBackground.setAttribute('role', 'dialog');
    formBackground.setAttribute('aria-hidden', 'true');
    formBackground.setAttribute('aria-modal', 'false');
    formBackground.setAttribute('aria-labelledby', 'modal-heading');

    formContent.classList.add('form-content');
    formContent.setAttribute('tabindex', '0');

    close.classList.add('close');
    close.setAttribute('aria-label', 'Fermer modale');
    close.setAttribute('tabindex', '0');
    close.setAttribute('role', 'button');

    formBody.classList.add('form-body');

    formTitle.classList.add('form-title');
    formTitle.setAttribute('id', 'modal-heading');
    formTitle.innerHTML = `Contactez-moi <br>`;

    recipientName.classList.add('recipient-name');
    recipientName.appendChild(document.createTextNode(`${this.photographerName.name}`));

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
    firstNameInput.setAttribute('aria-required', 'true');
    firstNameInput.setAttribute('aria-label', 'Entrer votre prénom');

    lastNameInput.setAttribute('type', 'text');
    lastNameInput.setAttribute('name', 'last');
    lastNameInput.setAttribute('minlength', '2');
    lastNameInput.setAttribute('aria-required', 'true');
    lastNameInput.setAttribute('aria-label', 'Entrer votre nom');

    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('aria-required', 'true');
    emailInput.setAttribute('aria-label', 'Entrer votre mail');

    messageInput.classList.add('text-control__message');
    messageInput.setAttribute('type', 'text');
    messageInput.setAttribute('name', 'message');
    messageInput.setAttribute('aria-required', 'true');
    messageInput.setAttribute('aria-label', 'Entrer votre message');

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
    submitBtn.setAttribute('aria-label', 'Envoyer')
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Envoyer');
    submitBtn.appendChild(document.createTextNode('Envoyer'));
    submitBtn.addEventListener('click', this.validate.bind(this));
  
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

    // événements fermeture modale
    window.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') {
        this.closeForm();
      }
    });
  
    close.addEventListener('click', this.closeForm.bind(this));
    close.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this.closeForm();
      }
    });
  }

  launchForm() {
    const formBackground = document.querySelector('.form-background');
    previousActiveElement = document.activeElement;

    formBackground.style.display = 'block';
    formBackground.removeAttribute('aria-hidden');
    formBackground.setAttribute('aria-modal', 'true');

    this.app.setAttribute('aria-hidden', 'true');
    console.log(this.app);
    const first = document.querySelector('input[name=first]');
    first.focus();
  }

  closeForm() {
    const formBackground = document.querySelector('.form-background'); 
    formBackground.style.display = 'none';
    formBackground.setAttribute('aria-hidden', 'true');
    this.app.style.display = 'block';
  }

  validate(event) {
    const form = document.getElementById('contact');
    const confirmationMsg = document.querySelector('#confirmationMsg');
    const submitBtn = document.querySelector('.btn-submit');
    let formOk;

    event.preventDefault();

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
        console.log('erreur sur checkinput first name');
        first.setAttribute('aria-invalid', 'true');
        return formOk === false;
      }
  
      if (verifName.exec(last.value) === null || last.length < 2) {
        lastError.style.visibility = 'visible';
        console.log('erreur sur checkinput last name');
        last.setAttribute('aria-invalid', 'true');
        return formOk === false;
      }
  
      const verifEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      if (verifEmail.exec(email.value) === null) {
        emailError.style.visibility = 'visible';
        console.log('erreur sur checkinput email');
        email.setAttribute('aria-invalid', 'true');
        return formOk === false;
      }
  
      if (message.value === '') {
        messageError.style.visibility = 'visible';
        console.log('erreur sur checkinput message');
        message.setAttribute('aria-invalid', 'true');
        return formOk === false;
      }

      const contactContent = `Prénom : ${first.value}, Nom : ${last.value}, Message : ${message.value}`;
      console.log(contactContent)
      return formOk = true;
    }
    
    checkInputs();
    
    //help
    if (formOk === true) {
      form.style.display = 'none';
      submitBtn.style.display = 'none';
      confirmationMsg.style.display = 'flex';
    }
    return true;
  }
}