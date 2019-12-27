export function showdata(elements){
    let result = ``
    let cor = ''
    let item = document.querySelector('.characters')
    let text = document.querySelector('input[id = "search-input"]')
    let botao = document.getElementsByClassName('.botaok')
    let list = elements["results"]
      for(let i = 0; i<=11;i++){
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
    item.innerHTML = result
    text.addEventListener('change', function(){
      result = ''
      for(let i = 0; i<=11;i++){
        if (list[i].name.includes(text.value)){
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
        }}
    if (result == ''){
        result = '<h1>Não foi encontrado</h1>'
    }
     item.innerHTML = result
    })}

