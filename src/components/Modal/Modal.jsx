import { useState } from 'react';
import FormField from './FormField.jsx';
import xIcon from '../../assets/icons/x.svg';
import { validarFormulario, validarEmail } from '../../utils/validacao.js';

const formularioVazio = { nome: '', email: '', telefone: '' };

function Modal({ aberto, inscricoes, aoFechar, aoInscrever }) {
  const [dados, setDados] = useState(formularioVazio);
  const [erros, setErros] = useState({});

  function fechar() {
    setDados(formularioVazio);
    setErros({});
    aoFechar();
  }

  function validarCampo(campo, valor) {
    const errosAtuais = validarFormulario({ ...dados, [campo]: valor });
    setErros((atual) => ({ ...atual, [campo]: errosAtuais[campo] }));
  }

  function enviar(event) {
    event.preventDefault();

    const errosForm = validarFormulario(dados);

    const emailJaCadastrado = validarEmail(dados.email.trim())
      && inscricoes.some((inscrito) => inscrito.email.toLowerCase() === dados.email.trim().toLowerCase());

    if (emailJaCadastrado) {
      errosForm.email = 'Este email já está cadastrado';
    }

    if (Object.keys(errosForm).length > 0) {
      setErros(errosForm);
      return;
    }

    aoInscrever({ nome: dados.nome.trim(), email: dados.email.trim(), telefone: dados.telefone.trim() });
    fechar();
  }

  return (
    <div className={`modal-overlay${aberto ? ' active' : ''}`} onClick={(event) => event.target === event.currentTarget && fechar()}>
      <div className="modal">
        <div className="modal__header">
          <h2 className="modal__title">Se inscrever</h2>
          <button className="modal__close" aria-label="Fechar modal" onClick={fechar}>
            <img src={xIcon} alt="" />
          </button>
        </div>

        <form className="modal__form" onSubmit={enviar}>
          <FormField
            label="Nome completo"
            tipo="text"
            placeholder="Seu nome"
            valor={dados.nome}
            erro={erros.nome}
            aoAlterar={(valor) => setDados((atual) => ({ ...atual, nome: valor }))}
            aoSairDoFoco={() => validarCampo('nome', dados.nome)}
          />

          <FormField
            label="Email"
            tipo="email"
            placeholder="seu.email@exemplo.com"
            valor={dados.email}
            erro={erros.email}
            aoAlterar={(valor) => setDados((atual) => ({ ...atual, email: valor }))}
            aoSairDoFoco={() => validarCampo('email', dados.email)}
          />

          <FormField
            label="Telefone"
            tipo="tel"
            placeholder="+55 (11) 99999-9999"
            valor={dados.telefone}
            erro={erros.telefone}
            aoAlterar={(valor) => setDados((atual) => ({ ...atual, telefone: valor }))}
            aoSairDoFoco={() => validarCampo('telefone', dados.telefone)}
          />

          <button type="submit" className="modal__submit">Enviar</button>
          <p className="modal__disclaimer">
            Ao se cadastrar, você concorda em receber comunicações sobre produtos e ofertas.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Modal;
