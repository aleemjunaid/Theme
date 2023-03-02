let menu=document.getElementById('menu')
let menushow=document.getElementById('menu_show')
let menu_cross=document.getElementById('menu_cross')
let flags=document.getElementById('flag')
let flagstwo=document.getElementById('flagtwo')
let flagsthree=document.getElementById('flagthree')
let flagsfour=document.getElementById('flagfour')
let firstname=document.getElementById('first_Name')
let Lastname=document.getElementById('last_Name')
let Email=document.getElementById('Email')
let Password=document.getElementById('Password')
let btncreate=document.getElementById('create')
// console.log(firstname,Lastname,Email,Password,'test');




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

btncreate.addEventListener('click',()=>{
    let data=localStorage.getItem('data')
    if(data)
    {
        let obj={firstname:`${firstname.value}`,lastname:`${Lastname.value}`,email:`${Email.value}`,pass:`${Password.value}`}
        let mydata=JSON.parse(data)
        mydata.push(obj)
        localStorage.setItem('data',JSON.stringify(mydata))

    }
    else{
        let obj={firstname:`${firstname.value}`,lastname:`${Lastname.value}`,email:`${Email.value}`,pass:`${Password.value}`}
        localStorage.setItem('data',JSON.stringify([obj]))
    }
})