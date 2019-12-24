function getC(link){
  fetch(link)
  .then(response => response.json())
  .then(elements => showdata(elements))
}

function showdata(elements){
  let result = ``
  let list = elements["results"]
  for(let i = 0; i<=list.length-1;i++){
    if (list[i].status == 'Alive'){
      cor = 'rgb(0, 197, 16);'
    }
    if (list[i].status == 'Dead'){
      cor = 'rgb(221, 0, 0);'
    }
    if (list[i].status == 'unknown'){
      cor = 'whitesmoke;'
    }
      let element =`
      <div class="item"  style = "text-align: center;"><img src="${list[i].image}" alt="${list[i].name}">
      <p style = "text-align: center;">${list[i].name}</p>
      <p style = "color: ${cor};" style = "text-align: center;">${list[i].status}</p>
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
