import "./Input.css";

function Input({label, type, errorText, isVisible, isRequired}) {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input type={type}className={`input__line input__error ${isVisible && 'input__error_visible'}`} required={isRequired}></input>
      <span className={`input__help-text input__error ${isVisible && 'input__error_visible'}`}>{errorText}</span>
    </div>
  );
}

export default Input;