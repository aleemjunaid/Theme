let menu=document.getElementById('menu')
let menushow=document.getElementById('menu_show')
let menu_cross=document.getElementById('menu_cross')
let flags=document.getElementById('flag')
let flagstwo=document.getElementById('flagtwo')
let flagsthree=document.getElementById('flagthree')
let flagsfour=document.getElementById('flagfour')
let Email=document.getElementById('Email')
let Password=document.getElementById('Password')
let login=document.getElementById('login')
console.log(Email,Password,login);

console.log(flag)
menu.addEventListener('click',()=>{
    menushow.style.right="0"
    menushow.style.transitionDuration="0.5s"
})
menu_cross.addEventListener('click',()=>{
    menushow.style.right="384px"
})
function flag(){
    flagsfour.style="border-bottom:none"
    flagsthree.style="border-bottom:none"
    flagstwo.style="border-bottom:none"
    flags.style="border-bottom:2px solid white"
}
function flagtwo(){
    flags.style="border-bottom:none"
    flagstwo.style="border-bottom:2px solid white"
    flagsthree.style="border-bottom:none"
    flagsfour.style="border-bottom:none"
}
function flagthree(){
    flags.style="border-bottom:none"
    flagstwo.style="border-bottom:none"
    flagsthree.style="border-bottom:2px solid white"
    flagsfour.style="border-bottom:none"
}
function flagfour(){
    flags.style="border-bottom:none"
    flagstwo.style="border-bottom:none"
    flagsthree.style="border-bottom:none"
    flagsfour.style="border-bottom:2px solid white"
}

login.addEventListener('click',()=>{
    let data=JSON.parse(localStorage.getItem('data'))
    value1=Email.value
    value2=Password.value
    let z =data.filter((e)=>{
        if(e.email==value1 && e.pass==value2)
        {
            return e
        }
    })
    if(z!="")
    {
        alert("Login")
    }
    else{
        alert("User Not Found")
    }
})