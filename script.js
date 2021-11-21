const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')
addressbtn.addEventListener('click', function(){
    document.querySelector('.address-form').style.display = "flex"
})
addressclose.addEventListener('click', function(){
    document.querySelector('.address-form').style.display = "none"
})
// slider 0....................................................
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
let index = 0
rightbtn.addEventListener("click",function(){
    index = index+1
    if(index>imgNumber.length-1){
        index=0
    }
    document.querySelector('.slider-content-left-top').style.right = index *100+"%"
})
leftbtn.addEventListener("click",function(){
    index = index-1
    if(index <=0){
        index=imgNumber.length-1
    }
    document.querySelector('.slider-content-left-top').style.right = index *100+"%"
})
// slider 1..........................................................
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumberLi.forEach(function(image,index){
    image.addEventListener('click',function(){
        removeActive()
        document.querySelector('.slider-content-left-top').style.right = index *100+"%"
        image.classList.add('active')
    })
})
function removeActive(){
    let imgActive = document.querySelector('.active')
    imgActive.classList.remove('active')
}
// slider 2...........................................................
function imgAuto(){
    index = index +1
    if(index>imgNumber.length-1){
        index=0
    }
    removeActive()
    document.querySelector('.slider-content-left-top').style.right = index *100+"%"
    imgNumberLi[index].classList.add('active')
}
setInterval(imgAuto,5000)
// slider product control................................................
const rightbtn2 = document.querySelector('.fa-chevron-right-2')
const leftbtn2 = document.querySelector('.fa-chevron-left-2')
const imgNumber2 = document.querySelectorAll('.slider-product-one-content-items')
rightbtn2.addEventListener("click",function(){
    index = index+1
    if(index>imgNumber2.length-1){
        index=0
    }
    document.querySelector('.slider-product-one-content-items-wrap').style.right = index *100+"%"
})
leftbtn2.addEventListener("click",function(){
    index = index-1
    if(index <=0){
        index=imgNumber2.length-1
    }
    document.querySelector('.slider-product-one-content-items-wrap').style.right = index *100+"%"
})
// Product Gallery control
const rightbtn3 = document.querySelector('.fa-chevron-right-3')
const leftbtn3 = document.querySelector('.fa-chevron-left-3')
const imgNumber3 = document.querySelectorAll('.product-gallery-two-content-right-bottom-items')
rightbtn3.addEventListener("click",function(){
    index = index+1
    if(index>imgNumber3.length-1){
        index=0
    }
    document.querySelector('.product-gallery-two-content-right-bottom-wrap').style.right = index *100+"%"
})
leftbtn3.addEventListener("click",function(){
    index = index-1
    if(index <=0){
        index=imgNumber3.length-1
    }
    document.querySelector('.product-gallery-two-content-right-bottom-wrap').style.right = index *100+"%"
})