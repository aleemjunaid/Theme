// manu
let menu=document.getElementById('menu')
let menushow=document.getElementById('menu_show')
let menu_cross=document.getElementById('menu_cross')
let flags=document.getElementById('flag')
let flagstwo=document.getElementById('flagtwo')
let flagsthree=document.getElementById('flagthree')
let flagsfour=document.getElementById('flagfour')

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
// Cart Start
let cartshow=document.getElementById('cartshow')
let carts=document.getElementById('carts')
let x=document.getElementById('x')
let cancel=document.getElementById('cancel')

// window.addEventListener('click',()=>{
//     // carts.style.right="0"
//     carts.style.right="-390px"
// })


cartshow.addEventListener('click',()=>{
    carts.style.right="0"
    x.style.visibility="visible"
})
x.addEventListener('click',()=>{
    // x.style.visibility="invisible"
    carts.style.right="-390px"
})

var addcart=document.querySelectorAll('.cartclass')
// console.log(addcart);
var divs=document.getElementById('divs')
let api;

var arr=[
    {
        img:'./Product12_large.png',
        title:'Double Succulent Galaxy Slush',
        price:'Rs. 750.00',
        Quantity:'1'
    },
    {
        img:'./Product17_2b2ab152-a253-4f6d-a2d8-a878df050b25_large.png',
        title:'Dry Hopped Lucid Cloud Drop',
        price:'Rs. 799.00',
        Quantity:'1'
    },
    {
        img:'./Product16_large.png',
        title:'Dry Hopped Ripe Fog Juicebox',
        price:'Rs. 799.00',
        Quantity:'1'
    },
    {
        img:'./Product10_large.png',
        title:'Dry Hopped Verdant Trellis',
        price:'Rs. 800.00',
        Quantity:'1'
    },
    {
        img:'./Product11_large.png',
        title:'Extra Ambrosia Hallucination',
        price:'Rs. 750.00',
        Quantity:'1'
    },
    {
        img:'./Product15_large.png',
        title:'Extra Curious Galaxy Coma',
        price:'Rs. 760.00',
        Quantity:'1'
    },
    {
        img:'./Product4_38e5f717-6f2c-4d7f-b9a3-c1573fcba504_large.png',
        title:'Extra Dank Nugget Cloud',
        price:'Rs. 850.00',
        Quantity:'1'
    },
    {
        img:'./Product9_large.png',
        title:'Extra Fevered Ambrosia Bomb',
        price:'Rs. 725.00',
        Quantity:'1'
    },
    {
        img:'./Product13_a906ce3e-0bc8-4920-9ee1-f4af6d889fe0_large.png',
        title:'Hopped Cloudy Vapor Drop',
        price:'Rs. 800.00',
        Quantity:'1'
    },
    {
        img:'./Product2_large.png',
        title:'Hopped Enchanted Fog Rocket',
        price:'Rs. 780.00',
        Quantity:'1'
    },
    {
        img:'./Product1_large.png',
        title:'Hopped Fevered Nectar Snack',
        price:'Rs. 850.00',
        Quantity:'1'
    },
    {
        img:'./Product18_large.png',
        title:'Hopped Galactic Murk Vision',
        price:'Rs. 800.00',
        Quantity:'1'
    },
    {
        img:'./Product5_b1a83a71-feb9-4f4c-a626-c759549c1adb_large.png',
        title:'Hopped Pulp Nightmare',
        price:'Rs. 800.00',
        Quantity:'1'
    },
    {
        img:'./Product14_large.png',
        title:'Hopped Resplendent Ambrosia',
        price:'Rs. 750.00',
        Quantity:'1'
    },
    {
        img:'./Product7_large.png',
        title:'Succulent Blender Delusion',
        price:'Rs. 799.00',
        Quantity:'1'
    },
    {
        img:'./Product6_large.png',
        title:'Wet Hopped Torrid Pulp',
        price:'Rs. 820.00',
        Quantity:'1'
    },
]

arr.map((ele,i)=>{
    api=arr
    var div=document.createElement('div')
    div.innerHTML+=`
    <div class="flex flex-col justify-evenly h-[90vh] h-[100%] w-[100%]">
    <img src="${ele.img}"></img>
    <button class="hov h-12 w-full bg-[#f89808] flex justify-center items-center text-white" onclick="addcarts(${i})">Add To Cart</button>
    <h1 class="text-white text-center text-[1.3rem] font-light">${ele.title}</h1>
    <h1 class="text-[#ea7617] text-center text-[1.5rem] font-light">${ele.price}</h1>
    </div>
    `
    divs.appendChild(div)
})
function addcarts (i) {
    // alert('working');
    obj=api[i]
    var data=JSON.parse(localStorage.getItem('carts'))
    if(data)
    {
        data.push(obj)
        localStorage.setItem('carts',JSON.stringify(data))
        carticon()
    }
    else{
        localStorage.setItem('carts',JSON.stringify([obj]))
        carticon()
    }
}
function carticon(){
    var data=JSON.parse(localStorage.getItem('carts'))
    carts.innerHTML=""
    if(data == "")
    {
        carts.style.right="-390px"
    }
    data.map((ele,i)=>{
    carts.innerHTML+=`
    <h1 id="shows" class="text-[#f89709] text-[1.3rem] p-5">Your Products</h1>
    <div id="shows" class="w-full h-[1px] bg-[#f89709]"></div>
    <div class="flex flex-col justify-evenly w-[100%] h-[35vh] pt-2">
    <img class="h-40 w-40 ml-24 pl-2" src="${ele.img}"></img>
    <h1 class="text-white text-center text-[1rem] font-light">${ele.title}</h1>
    <h1 class="text-[#ea7617] text-center text-[1.2rem] font-light">${ele.price}</h1>
    <i class="fa-solid fa-trash text-[#f89808] pt-2 text-center cursor-pointer" onclick="del(${i})"></i>
    </div>
    `
    length()
})
}
function del(i){
    var data=JSON.parse(localStorage.getItem('carts'))
    data.splice(i,1)
    localStorage.setItem('carts',JSON.stringify(data))
    carticon()
    length()
}
let len=document.querySelector('sup')
function length(){
    var data=JSON.parse(localStorage.getItem('carts'))
    if(data)
    {
        let c =data.length
        len.innerHTML =`${c}`
    }
}
length()