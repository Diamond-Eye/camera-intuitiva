// Entradas
const modalOverlay = document.getElementById('modal-overlay');
const modalForm = document.getElementById('modal-form');
const modalCloseBtn = document.querySelector('.modal__close');
const heroBtn = document.querySelector('.hero .btn--primary');
const ctaBtn = document.querySelector('.cta .cta__button');

const nameInput = document.getElementById('input-name');
const emailInput = document.getElementById('input-email');
const phoneInput = document.getElementById('input-phone');

const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorPhone = document.getElementById('error-phone');

// Mensagens de erro
const errorMessages = {
  name: 'Nome é obrigatório',
  email: 'Email válido é obrigatório',
  phone: 'Telefone é obrigatório',
};

// Função abrir modal
function openModal() {
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Função fechar modal
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
  resetForm();
}

// Validação email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Limpar erros
function clearErrors() {
  errorName.textContent = '';
  errorName.classList.remove('active');
  errorEmail.textContent = '';
  errorEmail.classList.remove('active');
  errorPhone.textContent = '';
  errorPhone.classList.remove('active');

  nameInput.classList.remove('error');
  emailInput.classList.remove('error');
  phoneInput.classList.remove('error');
}

// Mostrar erros
function showError(input, errorElement, message) {
  input.classList.add('error');
  errorElement.textContent = message;
  errorElement.classList.add('active');
}

// Validar formulário
function validateForm() {
  clearErrors();
  let isValid = true;

  if (!nameInput.value.trim()) {
    showError(nameInput, errorName, errorMessages.name);
    isValid = false;
  }

  if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
    showError(emailInput, errorEmail, errorMessages.email);
    isValid = false;
  }

  if (!phoneInput.value.trim()) {
    showError(phoneInput, errorPhone, errorMessages.phone);
    isValid = false;
  }

  return isValid;
}

// Resetar formulário
function resetForm() {
  modalForm.reset();
  clearErrors();
}

// eventos de clique nos botões
heroBtn.addEventListener('click', openModal);
ctaBtn.addEventListener('click', openModal);

modalCloseBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateForm()) {
    closeModal();
  }
});

// eventos nos inputs de validação
nameInput.addEventListener('blur', () => {
  if (!nameInput.value.trim()) {
    showError(nameInput, errorName, errorMessages.name);
  } else {
    nameInput.classList.remove('error');
    errorName.classList.remove('active');
  }
});

emailInput.addEventListener('blur', () => {
  if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
    showError(emailInput, errorEmail, errorMessages.email);
  } else {
    emailInput.classList.remove('error');
    errorEmail.classList.remove('active');
  }
});

phoneInput.addEventListener('blur', () => {
  if (!phoneInput.value.trim()) {
    showError(phoneInput, errorPhone, errorMessages.phone);
  } else {
    phoneInput.classList.remove('error');
    errorPhone.classList.remove('active');
  }
});
