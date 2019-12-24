function getC(link){
  fetch(link)
  .then(response => response.json())
  .then(elements => showdata(elements))
}

function showdata(elements){
  let result = ``
  let list = elements["results"]
  
  for(let i = 0; i<=list.length-1;i++){
      let element =` 
      <div class="item"><img src="${list[i].image}" alt="${list[i].name}">
      </div>
      `
      result+= element     
  }
  item.innerHTML += result 
}
let item = document.querySelector('.characters')

getC('https://rickandmortyapi.com/api/character/')

// item.addEventListener('click', event=>{

// })