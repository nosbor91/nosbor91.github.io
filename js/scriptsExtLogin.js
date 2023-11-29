function submit() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    let storedUserJSON = localStorage.getItem(username);
    if (storedUserJSON) {
        let storedUser = JSON.parse(storedUserJSON);
        if (password === storedUser.password) {
            alert("Êxito! Conta acessada.");
            location.href = "index.html";
        } else {
            alert("Senha incorrecta.");
        }
    } else {
        alert("Usuário não encontrado.");
    }
}
username.addEventListener("keyup", ()=>{
    if(username.value.length <= 3){
        pUsername.setAttribute("style", "color : red");
    }else{
        pUsername.setAttribute("style", "color : green");
    }
})
password.addEventListener("keyup", ()=>{
    if(password.value.length <=3){
        pPassword.setAttribute("style", "color : red");
    }else{
        pPassword.setAttribute("style", "color : green");
    }
})
username.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      password.focus();
    }
  })
let submitBtn = document.getElementById("submit");
password.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitBtn.focus();
    }
  })
