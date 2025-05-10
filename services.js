let open_btn = document.getElementById('open');
let modal = document.getElementById('city_modal');
let close_btn = document.getElementById('close');
let city_name = document.querySelector('.city-name');
let cities = document.querySelectorAll('#city_list li');
let minus = document.getElementsByClassName('minus')
let plus = document.getElementsByClassName('plus')
let num = document.getElementsByClassName('num')
let price = document.getElementsByClassName('price')
let basket = document.getElementsByClassName('add-to-card')
let all_pages=document.getElementById('all_pages')
let main= document.getElementById('main')
let shop  = localStorage.getItem('shop')
all_pages.innerHTML = shop

open_btn.onclick = function () {
    modal.style.display = 'block';
}

close_btn.onclick = function () {
    modal.style.display = 'none';
}

cities.forEach(function(city) {
    city.onclick = function () {
        city_name.textContent = city.textContent;
        modal.style.display = 'none';
    }
});


