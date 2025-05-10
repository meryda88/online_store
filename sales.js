const line_chart = document.getElementById('chart1').getContext('2d');
new Chart(line_chart, {
    type: 'line',
    data: {
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт','Сб', 'Вс'],
        datasets: [{label: 'Users', data:[100, 120, 150, 140, 160, 110, 90]}],
    }
    }
)

const bar_chart = document.getElementById('chart2').getContext('2d');
new Chart(bar_chart, {
    type: 'bar',
    data: {
        labels: ['Женская', 'Мужская', 'Детская', 'Аксессуры', 'Спортивная', 'Верхняя'],
        datasets: [{label: 'Sales', 
        data:[4500, 3200, 2100, 1500, 2800, 1900]}],
    }
})

const pie_chart = document.getElementById('chart3').getContext('2d');
new Chart(pie_chart, {
    type: 'pie',
    data: {
        labels: ['Зима', 'Весна', 'Лето', 'Осень'],
        datasets: [{label: 'Sales %',
        data: [30, 15, 35, 20]}]
    }
})