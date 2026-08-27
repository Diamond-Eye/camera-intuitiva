function FormField({ label, tipo, valor, placeholder, erro, aoAlterar, aoSairDoFoco }) {
  return (
    <div className="form-field">
      <label className="form-field__label">{label}</label>
      <input
        type={tipo}
        className={`form-field__input${erro ? ' error' : ''}`}
        placeholder={placeholder}
        value={valor}
        onChange={(event) => aoAlterar(event.target.value)}
        onBlur={aoSairDoFoco}
      />
      <span className={`form-field__error${erro ? ' active' : ''}`}>{erro}</span>
    </div>
  );
}

export default FormField;
