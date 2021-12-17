
const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')
addressbtn.addEventListener('click', function(){
    document.querySelector('.address-form').style.display = "flex"
})
addressclose.addEventListener('click', function(){
    document.querySelector('.address-form').style.display = "none"
})
// Slider phone
const rightbtn4 = document.querySelector('.fa-chevron-right-4')
const leftbtn4 = document.querySelector('.fa-chevron-left-4')
const imgNumber4 = document.querySelectorAll('.slider-phone-left-image img')
let index = 0
rightbtn4.addEventListener("click",function(){
    index = index+1
    if(index>imgNumber4.length-1){
        index=0
    }
    document.querySelector('.slider-phone-left-image').style.right = index *100+"%"
})
leftbtn4.addEventListener("click",function(){
    index = index-1
    if(index <=0){
        index=imgNumber4.length-1
    }
    document.querySelector('.slider-phone-left-image').style.right = index *100+"%"
})
//slider dot
const imgNumberBtn = document.querySelectorAll('.slider-phone-left-dots .dot')
imgNumberBtn.forEach(function(image,index){
    image.addEventListener('click',function(){
        removeActive()
        document.querySelector('.slider-phone-left-image').style.right = index *100+"%"
        image.classList.add('active')
    })
})
function removeActive(){
    let imgActive1 = document.querySelector('.active')
    imgActive1.classList.remove('active')
}
