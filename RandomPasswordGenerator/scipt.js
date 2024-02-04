
var passwordbox = document.getElementById("password")
var icon = document.querySelector(".display i")
var btn = document.querySelector("button")
 var uppercase  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 var lowercase  = "abcdefghijklmnopqrstuvwxyz"
 var num = "012356789"
 var symbol = "!@#$%^&*():><}{|~`"
 var length = 12 ;
  var allchars = uppercase + lowercase + num +symbol ;
  function createpassword(){
    var password = " " ;
     password += uppercase[Math.floor(Math.random()*uppercase.length)] ;
     password += lowercase[Math.floor(Math.random()* lowercase.length)] ;
     password += num[Math.floor(Math.random()* num.length)] ;
     password += symbol[Math.floor(Math.random()*symbol.length)] ;
  while( length > password.length){
      password += allchars[Math.floor(Math.random()*allchars.length)] ;
  }
  passwordbox.value = password ; 
  
  }
  btn.addEventListener("click" , function(){
    createpassword()
})
function copypassword(){
  passwordbox.select() ;
  document.execCommand("copy")
}
icon.addEventListener("click" , function(){
 copypassword() ; 
})