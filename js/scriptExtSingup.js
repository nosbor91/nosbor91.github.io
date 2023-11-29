let pUsername = document.getElementById("pUsername");
let username = document.getElementById("username");
username.addEventListener("keyup", ()=>{
    if(username.value.length <= 3){
        pUsername.setAttribute("style", "color : red");
    }else{
        pUsername.setAttribute("style", "color : green");
    }
});
function clearFormFields() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password2').value = '';
}
function submit() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    var pPassword = document.getElementById('pPassword');
    var pPassword2 = document.getElementById('pPassword2');
    if (localStorage.getItem(username)) {
        alert("Nome de usuário já existe. Escolha outro.");
        return;
    }
    if(username.length <=3){
        alert("Nome de usuário tem de conter 4 ou mais caracteres.");
        return
    }
    if(password.length <=3){
        alert("A palavra-passe tem de conter 4 ou mais caracteres.");
        return
    }
    if (password !== password2) {
        alert("As senhas não coincidem.");
        return;
    }
    let user = {
        username: username, password: password
    }
    let userJSON = JSON.stringify(user);
    localStorage.setItem(username, userJSON);
    clearFormFields();
    alert("Cadastro bem-sucedido!");
    location.href = "index.html";
}
password.addEventListener("keyup", ()=>{
    if(password.value.length <=3){
        pPassword.setAttribute("style", "color : red");
    }else{
        pPassword.setAttribute("style", "color : green");
        password2.addEventListener("keyup", ()=>{
            if(password2.value != password.value){
                pPassword2.setAttribute("style", "color : red");
            }else{
                pPassword2.setAttribute("style", "color : green");
            }
        })
    }
})
username.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      password.focus();
    }
  })
password.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      password2.focus();
    }
  })
let submitBtn = document.getElementById("submit");
password2.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn.focus();
    }
  })