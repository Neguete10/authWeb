
function login(){
    let user = document.querySelector('#user')
    let userLabel = document.querySelector('#labelUser1')
    let pass = document.querySelector('#password1')
    let labelPass = document.querySelector('#labelPassword1')
    let msgError = document.querySelector('#msgError')
    let userList = []
    let userValid = {name: '', user: '', password: ''}
    userList = JSON.parse(localStorage.getItem('listUser'))
    try{
    userList.forEach(element => {
        if(user.value == element.userName && pass.value == element.password){
            userValid = {name: element.name, user: element.userName, password: element.password}
        }
    });
    }catch{
        userLabel.setAttribute('style', 'color: red')
        user.setAttribute('style', 'border-color: red')
        labelPass.setAttribute('style', 'color: red')
        pass.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'User or Password Incorrect'
        user.focus()
    }
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
        msgError.innerHTML = 'User or Password Incorrect'
        user.focus()
    }
}



function modifyType() {
    const inputPassword = document.getElementById("password1");
    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type','text');
    }else{
        inputPassword.setAttribute('type','password')
    }   
  }



const el = document.getElementById("key1");
 
if(el){
    el.addEventListener('click', modifyType, false);
  }

