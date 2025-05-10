const chart = document.getElementById('chart').getContext('2d')

new Chart(chart, {
    type: 'pie',
    data: {
        labels: ['жақсы', 'орташа', 'төмен'],
            datasets: [{
                backgroundColor: ['green', 'orange', 'red'],
                label: 'Студенттер',
                data: [4, 6, 10]
            }]
    }
})

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: { el: '.swiper-pagination'},
    navigation: { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev'},
    autoplay: { delay: 2000},
})

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