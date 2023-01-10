/*
const el = document.getElementById("key1");
const e2 = document.getElementById("key2");
const e3 = document.getElementById("key3");

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
        setTimeout(()=>{window.location.href = '/index.html'}, 3000)       
    }else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Form Incomplete</strong>'
        msgSuccess.setAttribute('style', 'display: none')
        msgSuccess.innerHTML = ''
    }
}

function login(){
    let user = document.querySelector('#user')
    let userLabel = document.querySelector('#labelUser1')
    let pass = document.querySelector('#password1')
    let labelPass = document.querySelector('#labelPassword1')
    let msgError = document.querySelector('#msgError')
    let userList = []
    let userValid = {name: '', user: '', password: ''}
    userList = JSON.parse(localStorage.getItem('listUser'))
    userList.forEach(element => {
        if(user.value == element.userName && pass.value == element.password){
            userValid = {name: element.name, user: element.userName, password: element.password}
        }
    });
    if(user.value == userValid.user && pass.value == userValid.password){
        window.location.href = '/main.html'
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)
        localStorage.setItem('userLoggedIn', JSON.stringify(userValid))
    }else{
        userLabel.setAttribute('style', 'color: red')
        user.setAttribute('style', 'border-color: red')
        labelPass.setAttribute('style', 'color: red')
        pass.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'User or Password incorrect'
        user.focus()
    }
}

let userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'))
alert(userLoggedIn)
let LoggedIn = document.querySelector('#test11')
LoggedIn.innerHTML = 'Hello ${userLoggedIn.name}'


if(localStorage.getItem('token') == null){
    alert("You need to login to access this page")
    window.location.href = '/index.html'
}

function exitbtn(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLoggedIn')
    window.location.href = '/index.html'
}

function modifyType() {
    const inputPassword = document.getElementById("password1");
    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type','text');
    }else{
        inputPassword.setAttribute('type','password')
    }   
  }

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
 
if(el){
    el.addEventListener('click', modifyType, false);
  }
if(e2){
    e2.addEventListener('click', modifyType2, false);
  }   
if(e3){
    e3.addEventListener('click', modifyType3, false);
  }


  */