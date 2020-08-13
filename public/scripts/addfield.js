// procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//Quando clicar no botao

// Executar uma acao

function cloneField(){
    

//Duplicar os campos. quais campos?
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean

// limpar os campos. que campos?

const fields = newFieldContainer.querySelectorAll('input')

//para cada campo limpar
fields.forEach(function(field){
    //pegar o field do momento e limpa ele
    console.log(field)
})
//Colocar na página. onde?

document.querySelector('#schedule-items').appendChild(newFieldContainer)
}