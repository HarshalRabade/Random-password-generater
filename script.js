const passwordBox=document.getElementById("password");
let length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&*()_+|<>-=";
const allChar=uppercase+lowercase+number+symbol;
function createPassword() {
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while (length>password.length) {
        password+=allChar[Math.floor(Math.random()*allChar.length)];
        
    }
    passwordBox.value=password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy")
}