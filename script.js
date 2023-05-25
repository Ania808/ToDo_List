const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;


//add event 

btn.addEventListener('click', (e) => {
  console.log(input.value)
  if(input.value === '') return
  createDeleteElement(input.value)
  input.value = ''
} )


//create & delete todo
function createDeleteElement(value){
  console.log(value)
  i++
  const li = document.createElement('li')
  li.className = 'li'
  li.textContent = value

  const btn = document.createElement('button')
  btn.className = 'btn'
  btn.textContent = 'delete'
  li.appendChild(btn)

  //remove todo
  btn.addEventListener('click', (e) =>{
  i--
  total.textContent = i
  result.removeChild(li)
  })

  //toggle class active
  li.addEventListener('click', (e) =>{
    li.classList.toggle('li-active')
    })

    total.textContent = i

  result.appendChild(li)
}