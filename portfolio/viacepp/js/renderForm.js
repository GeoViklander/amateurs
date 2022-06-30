import Form from './form.js'

function renderForm() {
  document.body.insertAdjacentHTML('beforeend', Form())
  console.log("oi")
}

function getCep() {
  const $cep = document.getElementById('cep')
  return $cep.value 
}

function getForm() {
  const $form = document.querySelector('[data-form]')
  return $form
}

function limparForm() {
  const $form = getForm()
  const $resetButton = document.querySelector('[data-reset]')
    $resetButton.addEventListener('click', function(event){
      $form.reset()
    })
}

function searchCep() {
  const $form = getForm()
  $form.addEventListener('submit', function(event) {
    event.preventDefault()
    const cep = getCep()
    const api = 'https://viacep.com.br/ws/'+ cep + '/json';
    fetch(api).then(function(result) {
      return result.json()
    }).then(function(result){
      console.log(result)
      const $rua = document.getElementById('rua')
      const $bairro = document.getElementById('bairro')
      const $cidade = document.getElementById('cidade')
      const $uf = document.getElementById('uf')
      $rua.value = result.logradouro
      $bairro.value = result.bairro
      $cidade.value = result.localidade
      $uf.value = result.uf
    }).catch(function(error){
        console.log(error)
    })
  })
}

renderForm()
getCep()
searchCep()
limparForm()