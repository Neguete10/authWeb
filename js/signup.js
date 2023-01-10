let namer = document.querySelector('#Name')
let labelName = document.querySelector('#labelName')
let validName = false

let userName = document.querySelector('#user')
let labelUserName = document.querySelector('#labelUser')
let validUserName = false

let password = document.querySelector('#password2')
let labelPassword = document.querySelector('#labelPassword')
let validPassword = false

let confPassword = document.querySelector('#password3')
let labelConfPassword = document.querySelector('#labelConfPassword')
let validConfPassword = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

namer.addEventListener('keyup', ()=>{
    if(namer.value.length <= 2){
        labelName.setAttribute('style', 'color: red')
        labelName.innerHTML = 'Name *Insert at least 3 characters'
        namer.setAttribute('style', 'border-color: red')
        validName = false

    }else{
        labelName.setAttribute('style', 'color: green')
        labelName.innerHTML = 'Name'
        namer.setAttribute('style', 'border-color: green')
        validName = true
    }
})

userName.addEventListener('keyup', ()=>{
    if(userName.value.length <= 4){
        labelUserName.setAttribute('style', 'color: red')
        labelUserName.innerHTML = 'User Name *Insert at least 5 characters'
        userName.setAttribute('style', 'border-color: red')
        validUserName = false

    }else{
        labelUserName.setAttribute('style', 'color: green')
        labelUserName.innerHTML = 'User Name'
        userName.setAttribute('style', 'border-color: green')
        validUserName = true
    }
})

password.addEventListener('keyup', ()=>{
    if(password.value.length <= 5){
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = 'Password *Insert at least 6 characters'
        password.setAttribute('style', 'border-color: red')
        validPassword = false

    }else{
        labelPassword.setAttribute('style', 'color: green')
        labelPassword.innerHTML = 'Password'
        password.setAttribute('style', 'border-color: green')
        validPassword = true
    }
})

confPassword.addEventListener('keyup', ()=>{
    if(confPassword.value != password.value){
        labelConfPassword.setAttribute('style', 'color: red')
        labelConfPassword.innerHTML = 'Confirm Password *Password does not match'
        confPassword.setAttribute('style', 'border-color: red')
        validConfPassword = false

    }else{
        labelConfPassword.setAttribute('style', 'color: green')
        labelConfPassword.innerHTML = 'Confirm Password'
        confPassword.setAttribute('style', 'border-color: green')
        validConfPassword = true
    }
})

function signup(){
    if(validName && validUserName && validPassword && validConfPassword){

        //oauth to database via RESTful API (IDEALLY)
        //We will use localStorage for now

        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')
        listUser.push({name: namer.value, userName: userName.value, password: password.value})
        localStorage.setItem('listUser', JSON.stringify(listUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Success!</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        setTimeout(()=>{window.location.href = '/loggin.html'}, 3000)       
    }else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Form Incomplete</strong>'
        msgSuccess.setAttribute('style', 'display: none')
        msgSuccess.innerHTML = ''
    }
}






const e2 = document.getElementById("key2");
const e3 = document.getElementById("key3");

function modifyType2() {
    const inputPassword = document.getElementById("password2");
    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type','text');
    }else{
        inputPassword.setAttribute('type','password')
    }   
  }

function modifyType3() {
    const inputPassword = document.getElementById("password3");
    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type','text');
    }else{
        inputPassword.setAttribute('type','password')
    }   
  }  

if(e2){
    e2.addEventListener('click', modifyType2, false);
  }   
if(e3){
    e3.addEventListener('click', modifyType3, false);
  }