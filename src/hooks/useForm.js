import { useState } from 'react';

export default function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(evt) {
    setValue(
      evt.target.getAttribute('name'),
      evt.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    handleChange,
    values,
    clearForm,
  };
}
