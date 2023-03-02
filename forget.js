let menu=document.getElementById('menu')
let menushow=document.getElementById('menu_show')
let menu_cross=document.getElementById('menu_cross')
let flags=document.getElementById('flag')
let flagstwo=document.getElementById('flagtwo')
let flagsthree=document.getElementById('flagthree')
let flagsfour=document.getElementById('flagfour')
let conemail=document.getElementById('Email')
let newpass=document.getElementById('newPassword')
let conpass=document.getElementById('conPassword')
let confirm=document.getElementById('confirm')
let update=document.getElementById('update')

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
let myindex=-1
confirm.addEventListener('click',()=>{
    let data=JSON.parse(localStorage.getItem('data'))
    let z=data.filter((ele,i)=>{
        if(ele.email == conemail.value)
        {
            newpass.style.display="block"
            conpass.style.display="block"
            update.style.display="block"
            myindex=i
            return ele
        }
    })
    if(z!="")
    {
        alert('Email Is Confirm')
    }
    else{
        alert('Email Not Matched')
    }
})

update.addEventListener('click',()=>{
    if(newpass.value == conpass.value)
    {
    alert('Password Changed')
    let data=JSON.parse(localStorage.getItem('data'))
    data[myindex].pass=conpass.value
    localStorage.setItem('data',JSON.stringify(data))
    }
    else{
        alert('You Enter Incorrect Password')
    }
})