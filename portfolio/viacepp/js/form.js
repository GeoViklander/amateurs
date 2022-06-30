function Form () {
  return `
    <form class="form" data-form method="get" action=".">
      <label class="form__label">cep:
        <input name="cep" type="text" id="cep" value="" size="10" maxlength="9"/>
      </label>
      <label class="form__label">rua:
        <input name="rua" type="text" id="rua" size="60"/> 
      </label>
      <label class="form__label">bairro:
        <input name="bairro" type="text" id="bairro" size="40"/>
      </label>
      <label class="form__label">cidade:
        <input name="cidade" type="text" id="cidade" size="40"/>
      </label>
      <label class="form__label">estado:
        <input name="uf" type="text" id="uf" size="2"/>
      </label>
      <button data-button type="submit">pesquisar</button>
      </form>
      <button data-reset type="button">limpar</button>
  `
}

export default Form


//npx http-server -p 8080
