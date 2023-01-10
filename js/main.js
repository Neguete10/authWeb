let userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'))
let LoggedIn = document.querySelector('#welcomeTitle')
LoggedIn.innerHTML = 'Hello ' + userLoggedIn.name


if(localStorage.getItem('token') == null){
    alert("You need to login to access this page")
    window.location.href = '/loggin.html'
}



function exitbtn(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLoggedIn')
    window.location.href = '/loggin.html'
}