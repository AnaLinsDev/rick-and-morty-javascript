import {showdata} from './lib.js';
import * as moment from 'moment'
//API DOS PERSONAGENS
let er = ''
let item = document.querySelector('.characters')
let text = document.querySelector('input[id = "search-input"]')
let botao = document.getElementsByClassName('.botaok')
function getC(link){
  fetch(link)
  .then(response => response.json())
  .then(elements => showdata(elements))
}

getC('https://rickandmortyapi.com/api/character/')


let button = document.querySelector('.but')
let form = document.querySelector('fieldset')
let nome = document.querySelector('#nome')
let email = document.querySelector('input[id = "email"]')


function is_email(email){
  er = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/; 
  if(!email.match(er))
  {
      
      alert('Email Inválido')
}
else{
  form.innerHTML = `<br><br>
  <h1>Obrigado(a) , ${nome.value}</h1><br>
  <h2> Earth (C-137) - ${moment().format("MMM Do YY")}</h2>`
}
}

button.addEventListener('click', function(){
  is_email(email.value)
})

