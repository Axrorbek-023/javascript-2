var elTitle = document.querySelector('.title')
var num = prompt('raqam kirit')

if(num % 3 == 0){
    elTitle.textContent = "bu son 3 ga bo'linadi"
}else{
    elTitle.textContent = "bu son 3ga bo'linmaydi"
}