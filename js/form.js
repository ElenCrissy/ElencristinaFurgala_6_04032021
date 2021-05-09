class Form {
   constructor(photographerName) {
     this.photographerName = photographerName;
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
    const messageInput = document.createElement('input');
    const messageError = document.createElement('div');
  
    const submitBtn = document.createElement('input');
    const confirmationMsg = document.createElement('div');
    const closeBtnRed = document.createElement('input');
  
    formBackground.classList.add('form-background');
    formContent.classList.add('form-content');
    close.classList.add('close');
    formBody.classList.add('form-body');
    formTitle.classList.add('form-title');
    recipientName.classList.add('recipient-name');
  
    recipientName.appendChild(document.createTextNode(`${this.photographerName}`));
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
  
    Object.assign(firstNameInput, {
      type: 'text',
      name: 'first',
      minlength: '2'
    })
  
    Object.assign(lastNameInput, {
      type: 'text',
      name: 'last',
      minlength: '2'
    })
  
    Object.assign(emailInput, {
      type: 'email',
      name: 'email',
    })
  
    Object.assign(messageInput, {
      className: 'text-control__message',
      type: 'text',
      name: 'message',
      rows: '5',
      cols: '100'
    })
  
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
  
    confirmationMsg.setAttribute('id', 'confirmationMsg');
    confirmationMsg.innerHTML = `Merci !<br> Votre message a été envoyé à ${recipientName}.`
  
    closeBtnRed.classList.add('button', 'btn-submit');
    closeBtnRed.setAttribute('type', 'button');
    closeBtnRed.setAttribute('id', 'closeBtnRed');
    closeBtnRed.setAttribute('value', 'Fermer');
  
    formBackground.appendChild(formContent);
    formContent.append(close, formBody, confirmationMsg, closeBtnRed);
    formBody.append(formTitle, form, submitBtn);
    formTitle.appendChild(recipientName);
    form.append(firstName, lastName, email, message);
    firstName.append(firstNameLabel, firstNameInput, firstNameError);
    lastName.append(lastNameLabel, lastNameInput, lastNameError);
    email.append(emailLabel, emailInput, emailError);
    message.append(messageLabel, messageInput, messageError);
  
    const photographerPageMain = document.querySelector('.photographer-page_main');
    photographerPageMain.appendChild(formBackground);
  
   }

   launchForm() {
    const modal = document.querySelector('.form-background');
    const closeCross = document.querySelector('.close');  
    const form = document.getElementById('contact');
    const first = document.querySelector('.first-name');
    const last = document.querySelector('.last-name');
    const email = document.querySelector('.email');
    const message = document.querySelector('.message');
    const firstError = document.getElementById('firstNameError');
    const lastError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const confirmationMsg = document.querySelector('#confirmationMsg');
    const submitBtn = document.querySelector('.btn-submit');
    const closeBtnRed = document.getElementById('closeBtnRed');
    let formOk = false;
  
    modal.style.display = 'block';
  
    closeCross.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    function checkInputs() {
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
      formOk = true;
      const contactContent = `Prénom : ${first.value}, Nom : ${last.value}, Message : ${message.value}`;
      return console.log(contactContent);
    }
  
    function validate(event) {
      event.preventDefault();
      checkInputs();
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
  
    submitBtn.addEventListener('click', validate);
   }
}

// export const createForm = (name) => {
//   const formBackground = document.createElement('div');
//   const formContent = document.createElement('div');
//   const close = document.createElement('span');
//   const formBody = document.createElement('div');
//   const formTitle = document.createElement('div');
//   const recipientName = document.createElement('div');
//   const form = document.createElement('form');

//   const firstName = document.createElement('div');
//   const firstNameLabel = document.createElement('label');
//   const firstNameInput = document.createElement('input');
//   const firstNameError = document.createElement('div');

//   const lastName = document.createElement('div');
//   const lastNameLabel = document.createElement('label');
//   const lastNameInput = document.createElement('input');
//   const lastNameError = document.createElement('div');

//   const email = document.createElement('div');
//   const emailLabel = document.createElement('label');
//   const emailInput = document.createElement('input');
//   const emailError = document.createElement('div');

//   const message = document.createElement('div');
//   const messageLabel = document.createElement('label');
//   const messageInput = document.createElement('input');
//   const messageError = document.createElement('div');

//   const submitBtn = document.createElement('input');
//   const confirmationMsg = document.createElement('div');
//   const closeBtnRed = document.createElement('input');

//   formBackground.classList.add('form-background');
//   formContent.classList.add('form-content');
//   close.classList.add('close');
//   formBody.classList.add('form-body');
//   formTitle.classList.add('form-title');
//   recipientName.classList.add('recipient-name');

//   recipientName.appendChild(document.createTextNode(`${name}`));
//   formTitle.innerHTML = `Contactez-moi <br>`;

//   form.setAttribute('id', 'contact');
//   form.setAttribute('name', 'contact');
//   form.setAttribute('action', '');
//   form.setAttribute('method', 'get');
//   form.setAttribute('onsubmit', 'return validate()');
//   form.setAttribute('novalidate', 'novalidate');

//   const formData = [firstName, lastName, email, message];
//   formData.forEach(element => element.classList.add('formData'));
//   firstName.classList.add('first-name');
//   lastName.classList.add('last-name');
//   email.classList.add('email');
//   message.classList.add('message');

//   firstNameLabel.setAttribute('for', 'first');
//   lastNameLabel.setAttribute('for', 'last');
//   emailLabel.setAttribute('for', 'email');
//   messageLabel.setAttribute('for', 'message');

//   firstNameLabel.appendChild(document.createTextNode('Prénom'));
//   lastNameLabel.appendChild(document.createTextNode('Nom'));
//   emailLabel.appendChild(document.createTextNode('E-mail'));
//   messageLabel.appendChild(document.createTextNode('Message'));

//   const allInputs = [firstNameInput, lastNameInput, emailInput, messageInput];
//   allInputs.forEach(input => input.classList.add('text-control'));

//   Object.assign(firstNameInput, {
//     type: 'text',
//     name: 'first',
//     minlength: '2'
//   })

//   Object.assign(lastNameInput, {
//     type: 'text',
//     name: 'last',
//     minlength: '2'
//   })

//   Object.assign(emailInput, {
//     type: 'email',
//     name: 'email',
//   })

//   Object.assign(messageInput, {
//     className: 'text-control__message',
//     type: 'text',
//     name: 'message',
//     rows: '5',
//     cols: '100'
//   })

//   firstNameError.setAttribute('id', 'firstNameError');
//   lastNameError.setAttribute('id', 'lastNameError');
//   emailError.setAttribute('id', 'emailError');
//   messageError.setAttribute('id', 'messageError');

//   const errors = [firstNameError, lastNameError, emailError, messageError]
//   errors.forEach(error => error.classList.add('error'));

//   firstNameError.appendChild(document.createTextNode('Veuillez entrer votre prénom - 2 caractères minimum'));
//   lastNameError.appendChild(document.createTextNode('Veuillez entrer votre nom - 2 caractères minimum'));
//   emailError.appendChild(document.createTextNode('Veuillez renseigner votre adresse mail'));
//   messageError.appendChild(document.createTextNode('Entrez votre message'));

//   submitBtn.classList.add('btn-submit', 'button');
//   submitBtn.setAttribute('type', 'submit');
//   submitBtn.setAttribute('value', 'Envoyer');

//   confirmationMsg.setAttribute('id', 'confirmationMsg');
//   confirmationMsg.innerHTML = `Merci !<br> Votre message a été envoyé à ${recipientName}.`

//   closeBtnRed.classList.add('button', 'btn-submit');
//   closeBtnRed.setAttribute('type', 'button');
//   closeBtnRed.setAttribute('id', 'closeBtnRed');
//   closeBtnRed.setAttribute('value', 'Fermer');

//   formBackground.appendChild(formContent);
//   formContent.append(close, formBody, confirmationMsg, closeBtnRed);
//   formBody.append(formTitle, form, submitBtn);
//   formTitle.appendChild(recipientName);
//   form.append(firstName, lastName, email, message);
//   firstName.append(firstNameLabel, firstNameInput, firstNameError);
//   lastName.append(lastNameLabel, lastNameInput, lastNameError);
//   email.append(emailLabel, emailInput, emailError);
//   message.append(messageLabel, messageInput, messageError);

//   const photographerPageMain = document.querySelector('.photographer-page_main');
//   photographerPageMain.appendChild(formBackground);

// }

// export const launchForm = () => {
//   const modal = document.querySelector('.form-background');
//   const closeCross = document.querySelector('.close');  
//   const form = document.getElementById('contact');
//   const first = document.querySelector('.first-name');
//   const last = document.querySelector('.last-name');
//   const email = document.querySelector('.email');
//   const message = document.querySelector('.message');
//   const firstError = document.getElementById('firstNameError');
//   const lastError = document.getElementById('lastNameError');
//   const emailError = document.getElementById('emailError');
//   const messageError = document.getElementById('messageError');
//   const confirmationMsg = document.querySelector('#confirmationMsg');
//   const submitBtn = document.querySelector('.btn-submit');
//   const closeBtnRed = document.getElementById('closeBtnRed');
//   let formOk = false;

//   modal.style.display = 'block';

//   closeCross.addEventListener('click', () => {
//     modal.style.display = 'none';
//   });

//   function checkInputs() {
//     const verifName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
//     if (verifName.exec(first.value) === null || first.length < 2) {
//       firstError.style.visibility = 'visible';
//       console.log('erreur sur checkinput first name')
//       return formOk === false;
//     }

//     if (verifName.exec(last.value) === null || last.length < 2) {
//       lastError.style.visibility = 'visible';
//       console.log('erreur sur checkinput last name')
//       return formOk === false;
//     }

//     const verifEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
//     if (verifEmail.exec(email.value) === null) {
//       emailError.style.visibility = 'visible';
//       console.log('erreur sur checkinput email')
//       return formOk === false;
//     }

//     if (message.value === '') {
//       messageError.style.visibility = 'visible';
//       console.log('erreur sur checkinput message')
//       return formOk === false;
//     }
//     formOk = true;
//     const contactContent = `Prénom : ${first.value}, Nom : ${last.value}, Message : ${message.value}`;
//     return console.log(contactContent);
//   }

//   function validate(event) {
//     event.preventDefault();
//     checkInputs();
//     if (formOk === true) {
//       form.style.display = 'none';
//       submitBtn.style.display = 'none';
//       confirmationMsg.style.display = 'flex';
//       closeBtnRed.style.display = 'block';
//       closeBtnRed.addEventListener('click', () => {
//         modal.style.display = 'none';
//       });
//     }
//   }

//   submitBtn.addEventListener('click', validate);
// }