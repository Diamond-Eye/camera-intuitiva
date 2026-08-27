export const mensagensDeErro = {
  nome: 'Nome é obrigatório',
  email: 'Email válido é obrigatório',
  telefone: 'Telefone é obrigatório',
};

// Validação email
export function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validarFormulario({ nome, email, telefone }) {
  const erros = {};

  if (!nome.trim()) {
    erros.nome = mensagensDeErro.nome;
  }

  if (!email.trim() || !validarEmail(email.trim())) {
    erros.email = mensagensDeErro.email;
  }

  if (!telefone.trim()) {
    erros.telefone = mensagensDeErro.telefone;
  }

  return erros;
}
