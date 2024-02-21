var captchatextarea=document.getElementById("captchatextarea");
var captchaenter=document.getElementById("captchaenter");
var verifybtn=document.getElementById("verify-btn");

var refreshbtn=document.getElementById("refresh-btn");
refreshbtn.addEventListener(click,(e)=>{
    e.preventDefault();
})

var captcha,chars;
function genNewCaptcha(){
    chars="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    captcha=chars[Math.floor(Math.random()*chars.length)];
    for(var i=0;i<6;i++){
        captcha=captcha+chars[Math.floor(Math.random()*chars.length)];
      
    }
   form1.text.value=captcha;
  
}

function verifyCaptcha(){
    var verify=document.getElementById("captchaenter").value;
    if(captcha==verify){
        alert("valid captcha!")
        document.getElementById("captchaenter").value="";

    }
    else{
        alert("invalid")
        document.getElementById("captchaenter").value="";
        
    }
    genNewCaptcha()
}
