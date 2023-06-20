

const dayButton =  document.querySelector("#day-button")
const nightButton = document.querySelector("#night-button")

const daySection =  document.querySelector(".day-section")
const nightSection =  document.querySelector(".night-section")
let doneButton = document.querySelectorAll(".done-button")

const modal = document.querySelector(".modal-wrapper")
const addItemButton =  document.querySelector("#add-item")
const closeModalButton =  document.querySelector("#close-modal")

const dayCheckbox = document.querySelector("#modal-day-checkbox")
const nightCheckbox = document.querySelector("#modal-night-checkbox")
const dayCheckboxWrapper = document.querySelector("#day-checkbox-wrapper")
const nightCheckboxWrapper = document.querySelector("#night-checkbox-wrapper") 

const form =  document.querySelector('form')
const submitTask = document.querySelector('save-task-button')

const daySectionList = document.querySelector('.day-section ul')
const nightSectionList = document.querySelector('.night-section ul')

let isDay = false
let isNight = false

let taskName = document.querySelector('#your-task')
let test = true

let taskCode = 2
let screenWidth
let oldScreen = 0





function scamAllButton(){
  for(let i = 0; i < doneButton.length; i++){
    doneButton[i].onclick = () => {
      deleteTask(doneButton[i].classList[1])
    }
  }
}

scamAllButton()


function changeSection(){
  daySection.classList.toggle("hide")
  nightSection.classList.toggle("hide")

  dayButton.classList.toggle('button-selected')
  dayButton.classList.toggle('button-not-selected')
  nightButton.classList.toggle('button-selected')
  nightButton.classList.toggle('button-not-selected')
}


dayButton.onclick = () => {
  changeSection()
} 


nightButton.onclick = () => {
  changeSection()
}

addItemButton.onclick = () => {
  modal.classList.toggle('hide-modal')
}

closeModalButton.onclick = () => {
  modal.classList.toggle('hide-modal')
}


function checkboxAction(checkbox, wrapper){
  if(checkbox.checked){
    wrapper.classList.remove('unstyled-checkbox')
    return true
  }
  else {
    wrapper.classList.add('unstyled-checkbox')
    return false
  }
}

dayCheckbox.oninput = () => {isDay = checkboxAction(dayCheckbox, dayCheckboxWrapper, isDay)}
nightCheckbox.oninput = () => {isNight = checkboxAction(nightCheckbox, nightCheckboxWrapper, isNight)}


function createTask (section){
  taskCode++
  let newDoneButton = document.createElement('button')
  newDoneButton.classList.add('done-button')
  newDoneButton.classList.add(taskCode)


  let taskPara = document.createElement('p')
  let newTask = document.createElement('li')
  taskPara.appendChild(document.createTextNode(taskName.value));
  newTask.classList.add(taskCode)
  newTask.appendChild(newDoneButton)
  newTask.appendChild(taskPara)

  section.appendChild(newTask)
  modal.classList.toggle('hide-modal')
  doneButton = document.querySelectorAll(".done-button")

  scamAllButton()
}

function deleteTask(taskID){
  let findTask = document.getElementsByClassName(taskID)
  console.log(findTask)
  findTask[0].remove()
}





form.onsubmit = (e) => {
  e.preventDefault()

  console.log(taskName.value)

  
  if (isDay == true && isNight == false){
    if (taskName.value == false){
      alert('Digite a sua tarefa.')
    }
    else{
      createTask(daySectionList)
    }
  }
  else if (isDay == false && isNight == true){
    if (taskName.value == false){
      alert('Digite a sua tarefa.')
    }
    else{
      createTask(nightSectionList)
    }
    
  }
  else if (isDay == true && isNight == true){
    if (taskName.value == false){
      alert('Digite a sua tarefa.')
    }
    else{
      createTask(nightSectionList)
      createTask(daySectionList)
    }
  }

  
  else {
    alert('Selecione se a tarefa é para o DIA ou NOITE')
  }
}

