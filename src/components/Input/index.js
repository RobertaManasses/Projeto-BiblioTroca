import './estilo.css'

function Input({label, type = "text", placeholder, required=false}) {
  return (
    <div className="campo">

      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        required={required}
      />

    </div>
  );
}

export default Input;