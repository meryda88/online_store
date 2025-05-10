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

const swiper = new Swiper('.swiper', {
    loop: true,
    zoom: true,
    pagination: { el: '.swiper-pagination'},
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'},
    autoplay: { delay: 5000},
});

$('.swiper-button-next').fadeOut()
$('.swiper-button-prev').fadeOut()

$('.swiper').on('mouseleave', function() {
    $('.swiper-button-next').fadeOut()
    $('.swiper-button-prev').fadeOut()
})

$('.swiper').on('mouseenter', function() {
    $('.swiper-button-next').fadeIn()
    $('.swiper-button-prev').fadeIn()
})





window.onhashchange=()=>{

main.style.display = 'none'


    if(window.location.hash==='#woman'){
        all_pages.innerHTML=`<div class="section">
                <div class="product">
                    <img src="images/cloth_w1.jpg" alt="#">
                    <div class="desc">Летнее миди-платье с узорами оливкого цвета</div>
                    <span class="currency">₸</span><span class="price">23000</span><br>
                    <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                    <button class="add-to-card">В корзину</button>
                </div>               
                <div class="product">
                    <img src="images/cloth_w3.jpg" alt="#">
                    <div class="desc">Платье макси на бретелях бледно-желтого цвета</div>
                    <span class="currency">₸</span><span class="price">26000</span><br>
                    <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                    <button class="add-to-card">В корзину</button>
                </div>
                <div class="product">
                    <img src="images/c_woman111.jpg" alt="#">
                    <div class="desc">Вязаный кардиган с ребристым воротником кремового цвета</div>
                    <span class="currency">₸</span><span class="price">20000</span><br>
                    <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                    <button class="add-to-card">В корзину</button>
                </div>
                <div class="product">
                    <img src="images/c_woman2.jpg" alt="#">
                    <div class="desc">Миди-платье scuba bardot с витым ремешком розового цвета</div>
                    <span class="currency">₸</span><span class="price">27000</span><br>
                    <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                    <button class="add-to-card">В корзину</button>
                </div>
                <div class="product">
                    <img src="images/c_woman4.jpg" alt="#">
                    <div class="desc">Нежно голубой топ в рубчик с удлиненным вырезом</div>
                    <span class="currency">₸</span><span class="price">15000</span><br>
                    <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                    <button class="add-to-card">В корзину</button>
                </div>
                <div class="product">
                    <img src="images/cloth_w2.jpg" alt="#">
                    <div class="desc">Вечернее шифоновое платье с цветами черного цвета</div>
                    <span class="currency">₸</span><span class="price">45000</span><br>
                    <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                    <button class="add-to-card">В корзину</button>
                </div>
                <div class="product">
                    <img src="images/c_woman8.jpg" alt="#">
                    <div class="desc">Макси-платье с вырезом лодочкой и рюшами по бокам черного цвета</div>
                    <span class="currency">₸</span><span class="price">52000</span><br>
                    <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                    <button class="add-to-card">В корзину</button>
                </div>
                <div class="product">
                    <img src="images/cloth_w5.jpg" alt="#">
                    <div class="desc">Макси-платье обтягивающее и завязывающимся сзади вырезом сиреневого цвета</div>
                    <span class="currency">₸</span><span class="price">48000</span><br>
                    <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                    <button class="add-to-card">В корзину</button>
                </div>
                <div class="product">
                    <img src="images/woman_c14.jpg" alt="#">
                    <div class="desc">Вязаный крючком топ-кардиган с оборками по низу кремового цвета</div>
                    <span class="currency">₸</span><span class="price">19000</span><br>
                    <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                    <button class="add-to-card">В корзину</button>
                </div>
                <div class="product">
                    <img src="images/woman_c13.jpg" alt="#">
                    <div class="desc">Мини-платье с гофрированным корсетом в коричневую клетку</div>
                    <span class="currency">₸</span><span class="price">28000</span><br>
                    <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                    <button class="add-to-card">В корзину</button>
                </div>
            </div>`
            initButtons();
        }else if(window.location.hash=='#main'){
            all_pages.innerHTML =  `<main>
        <div id="all_pages"></div>
        <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="swiper-zoom-container">
                  <img src="images/slider (1).jpg" alt="">
                </div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-zoom-container">
                  <img src="images/slider (2).jpg" alt="">
                </div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-zoom-container">
                  <img src="images/slider (3).jpg" alt="">
                </div>
              </div>
              <div class="swiper-slide">
                <div class="swiper-zoom-container">
                  <img src="images/slider (4).jpg" alt="">
                </div>
              </div>
            </div>
    
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>

            <div class="show">Смотреть товары</div>
    </main>`
    }else if(window.location.hash=='#man'){
            all_pages.innerHTML =  `
            <div class="section">
            <div class="product">
                <img src="images/pmen3.jpg" alt="#">
                <div class="desc">Худи с принтом и дизайнерской вышивкой из золы</div>
                <span class="currency">₸</span><span class="price">35000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/pmen4.jpg" alt="#">
                <div class="desc">Облегающее поло с коротким рукавом и вышивкой зеленого цвета</div>
                <span class="currency">₸</span><span class="price">28000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/pmen5.jpg" alt="#">
                <div class="desc">Футболка с квадратной текстурой коричневого цвета, украшенная стежками</div>
                <span class="currency">₸</span><span class="price">17000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/pmen6.jpg" alt="#">
                <div class="desc">ХБ рубашка с коротким рукавом с цветочным принтом белого и коричневого цветов</div>
                <span class="currency">₸</span><span class="price">15000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/c_man9 (2).jpg" alt="#">
                <div class="desc">Вязаный поло нежно голубого цвета с замком и узорами</div>
                <span class="currency">₸</span><span class="price">23000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/c_man8.jpg" alt="#">
                <div class="desc">Пиджак оверсайз темно-синего цвета из материала хб</div>
                <span class="currency">₸</span><span class="price">30000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/c_man6.jpg" alt="#">
                <div class="desc">Костюм с брюками классического стиля, цвер канарский зеленый</div>
                <span class="currency">₸</span><span class="price">26000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/pmen1.jpg" alt="#">
                <div class="desc">Оверсайз жилет с v-образным вырезом черного цвета</div>
                <span class="currency">₸</span><span class="price">28000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/pmen2.jpg" alt="#">
                <div class="desc">Футболка ADPT оверсайз темно-серого цвета</div>
                <span class="currency">₸</span><span class="price">28000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/pmen7.jpg" alt="#">
                <div class="desc">Худи с капюшоном, цвет нежно-коричневый, выцветшая фирменная монограмма на спине</div>
                <span class="currency">₸</span><span class="price">28000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
        </div>`
        initButtons();
    }else if(window.location.hash=='#accessories'){
        all_pages.innerHTML = `
        <div class="section">
            <div class="product">
                <img src="images/accessories (11).jpg" alt="#">
                <div class="desc">Сумка с логотипом Valentino и ремешком через плечо черного цвета</div>
                <span class="currency">₸</span><span class="price">23000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>               
            <div class="product">
                <img src="images/accessories (9).jpg" alt="#">
                <div class="desc">Многорядное ожерелье "Созвездие звезды" в винтажном стиле</div>
                <span class="currency">₸</span><span class="price">26000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/accessories (8).jpg" alt="#">
                <div class="desc">Узкие солнцезащитные очки "кошачий глаз" блестящего черного цвета</div>
                <span class="currency">₸</span><span class="price">20000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/accss (2).jpg" alt="#">
                <div class="desc">Набор из 5 сережек-гвоздиков с ракушками и жемчугом золотого оттенка</div>
                <span class="currency">₸</span><span class="price">27000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/accessories (2).jpg" alt="#">
                <div class="desc">Белый клатч-сердечко, украшенный жемчугом</div>
                <span class="currency">₸</span><span class="price">15000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/accessories (6).jpg" alt="#">
                <div class="desc">Набор браслетов из бисера ASOS DESIGN 4 в черных и зеленых тонах</div>
                <span class="currency">₸</span><span class="price">45000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/accessories (5).jpg" alt="#">
                <div class="desc">Солнцезащитные очки ONLY & SONS с шестиугольной оправой из золота</div>
                <span class="currency">₸</span><span class="price">52000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/accss (1).jpg" alt="#">
                <div class="desc">Картхолдер с логотипом Calvin Klein Jeans черного цвета</div>
                <span class="currency">₸</span><span class="price">48000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/accs8.jpg" alt="#">
                <div class="desc">Галстук-бабочка ASOS DESIGN темно-синего цвета</div>
                <span class="currency">₸</span><span class="price">19000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/acs2.jpg" alt="#">
                <div class="desc">Сумка Jordan Airborne через плечо черного цвета</div>
                <span class="currency">₸</span><span class="price">28000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
        </div>`
        initButtons();
    }else if(window.location.hash=='#shoes'){
        all_pages.innerHTML = `
        <div class="section">
            <div class="product">
                <img src="images/img_s (2).jpg" alt="#">
                <div class="desc">Свадебные босоножки Ada на высоком каблуке в цвете айвори</div>
                <span class="currency">₸</span><span class="price">65000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>               
            <div class="product">
                <img src="images/sandals (1).jpg" alt="#">
                <div class="desc">Мюли на толстой стельке бордового цвета от ASOS DESIGN</div>
                <span class="currency">₸</span><span class="price">40000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/sands.jpg" alt="#">
                <div class="desc">ASOS DESIGN босоножки черного цвета</div>
                <span class="currency">₸</span><span class="price">32000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/p_shoes (1).jpg" alt="#">
                <div class="desc">VEJA Volley кроссовки в красном</div>
                <span class="currency">₸</span><span class="price">37000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/shoes (9).jpg" alt="#">
                <div class="desc">Кроссовки adidas Originals Samba OG из джинсовой ткани</div>
                <span class="currency">₸</span><span class="price">42000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/img_s (1).jpg" alt="#">
                <div class="desc">ASOS DESIGN Everest черные сапоги на расклешенном каблуке</div>
                <span class="currency">₸</span><span class="price">95000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/shoes (2).jpg" alt="#">
                <div class="desc">Остроконечный балет "Ривер Айленд" с леопардовым принтом</div>
                <span class="currency">₸</span><span class="price">30000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/p_shoes (3).jpg" alt="#">
                <div class="desc">ASOS DESIGN черные лоферы с узором в виде трензеля</div>
                <span class="currency">₸</span><span class="price">48000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/shoes (4).jpg" alt="#">
                <div class="desc">Мюли на среднем каблуке Hercules из зеленой змеи</div>
                <span class="currency">₸</span><span class="price">88000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
            <div class="product">
                <img src="images/p_shoes (2).jpg" alt="#">
                <div class="desc">ASOS DESIGN черные лоферы с квадратным носком</div>
                <span class="currency">₸</span><span class="price">56000</span><br>
                <button class="minus">-</button> <span class="num">0</span> <button class="plus">+</button><br>
                <button class="add-to-card">В корзину</button>
            </div>
        </div>`
        initButtons();
    }

    let search_items = document.getElementById('search_items')
    let find = document.getElementById('find')
    let desc = document.getElementsByClassName('desc')
    let product  = document.getElementsByClassName('product')
    let noResultsMessage = document.createElement("p");
    noResultsMessage.style.color = "#3a2721";
    noResultsMessage.style.position = "fixed";
    noResultsMessage.style.top = "50%";
    noResultsMessage.style.left = "50%";
    noResultsMessage.style.transform = "translate(-50%, -50%)";
    noResultsMessage.style.textAlign = "center";
    noResultsMessage.style.fontSize = "16px";
    noResultsMessage.style.padding = "20px";

    
    noResultsMessage.style.display = 'none';
    document.body.appendChild(noResultsMessage);

    find.addEventListener('click', function(){
        let item = false;
        let search_value = search_items.value.toLowerCase();
        for(let i=0; i<desc.length;i++)
            {
            let desc_text = desc[i].textContent.toLowerCase(); 
            if(desc_text.includes(search_value)) {
                product[i].style.display = 'block';
                item = true;
            }else{
                product[i].style.display = 'none'
            }
        }

        if (!item) {
            noResultsMessage.textContent = "По вашему запросу ничего не найдено. Пожалуйста, проверьте правильность ввода или попробуйте использовать более общие ключевые слова.";
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    })
        localStorage.setItem('shop', all_pages.innerHTML)
    }
    
    function updateBasketCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = cart.reduce((all, item) => all + item.quantity, 0);
        document.querySelector('.basket_numb').textContent = total; // Корзинадағы тауар саны
    }
    
    // Батырмалармен әрекет жасау
    function initButtons() {
        for (let i = 0; i < minus.length; i++) {
            let count = 0;
            let start_price = parseFloat(price[i].textContent);
    
            // Плюс батырмасы
            plus[i].addEventListener('click', function () {
                count++;
                num[i].textContent = count;
                price[i].textContent = (start_price * count);
            });
    
            // Минус батырмасы
            minus[i].addEventListener('click', function () {
                if (count > 0) {
                    count--;
                    num[i].textContent = count;
                    price[i].textContent = (start_price * count || start_price);
                }
            });
    
            // "В корзину" батырмасы
            basket[i].addEventListener('click', function () {
                if (count === 0) {
                    alert('Сначала выберите количество!');
                    return;
                }
    
                let image = document.getElementsByClassName('product')[i].querySelector('img').src;
                let description = document.getElementsByClassName('product')[i].querySelector('.desc').textContent;
                let productPrice = parseFloat(price[i].textContent);
    
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
                // Егер тауар уже бар болса, онда оны жаңартып қосамыз
                let existing = cart.find(item => item.description === description);
                if (existing) {
                    existing.quantity += count;
                    existing.price += productPrice;
                } else {
                    cart.push({
                        image: image,
                        description: description,
                        price: productPrice,
                        quantity: count
                    });
                }
    
                localStorage.setItem('cart', JSON.stringify(cart));
                updateBasketCount(); // Корзинадағы тауар саны жаңартылады
    
                alert("Товар добавлен в корзину");
            });
        }
    }
    
    initButtons();
    updateBasketCount(); // Бет жүктелгенде сразу корзинаның санын жаңарту