// Данные об услугах (игровых жанрах)
const servicesData = [
    {
        icon: '🎮',
        title: 'Экшн-игры',
        genre: 'Action',
        description: 'Динамичные игры с упором на реакцию и координацию игрока. Быстрый геймплей, интенсивные сражения и захватывающие приключения.',
        features: [
            'Разработка механик стрельбы и боя',
            'Создание ИИ противников',
            'Оптимизация производительности',
            'Системы прогрессии и улучшений'
        ]
    },
    {
        icon: '🧩',
        title: 'Головоломки',
        genre: 'Puzzle',
        description: 'Интеллектуальные вызовы, требующие логического мышления и креативного подхода к решению задач.',
        features: [
            'Проектирование уникальных механик',
            'Балансировка сложности',
            'Системы подсказок',
            'Прогрессивное обучение игрока'
        ]
    },
    {
        icon: '🏰',
        title: 'РПГ',
        genre: 'RPG',
        description: 'Погружающие ролевые игры с глубокими сюжетами, развитием персонажей и масштабными мирами.',
        features: [
            'Дизайн систем характеристик',
            'Создание ветвящихся диалогов',
            'Разработка квестовых цепочек',
            'Балансировка боевой системы'
        ]
    },
    {
        icon: '🚀',
        title: 'Стратегии',
        genre: 'Strategy',
        description: 'Тактические и стратегические игры, где успех зависит от планирования и принятия взвешенных решений.',
        features: [
            'Проектирование экономических систем',
            'Балансировка юнитов и технологий',
            'Создание ИИ для противников',
            'Мультиплеерные механики'
        ]
    },
    {
        icon: '🏎️',
        title: 'Гонки',
        genre: 'Racing',
        description: 'Высокоскоростные соревнования с реалистичной физикой транспорта и захватывающими трассами.',
        features: [
            'Реализация физики транспортных средств',
            'Создание систем тюнинга',
            'Разработка трасс и окружения',
            'Мультиплеерные гонки'
        ]
    },
    {
        icon: '🌍',
        title: 'Открытый мир',
        genre: 'Open World',
        description: 'Обширные игровые вселенные с свободой исследования и множеством активностей.',
        features: [
            'Проектирование масштабных миров',
            'Создание побочных активностей',
            'Оптимизация потоковой загрузки',
            'Динамические системы событий'
        ]
    },
];

// Функция для создания карточек услуг
function createServiceCards() {
    const grid = document.getElementById('servicesGrid');
    
    servicesData.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.style.animationDelay = `${(index * 0.1) + 0.1}s`;
        
        card.innerHTML = `
            <span class="service-icon">${service.icon}</span>
            <h3 class="service-title">${service.title}</h3>
            <span class="genre-tag">${service.genre}</span>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        
        grid.appendChild(card);
    });
}

// Функция для добавления интерактивности
function addInteractivity() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        card.addEventListener('click', function() {
            const title = this.querySelector('.service-title').textContent;
            alert(`Вы выбрали: ${title}\nСвяжитесь с нами для обсуждения проекта!`);
        });
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createServiceCards();
    addInteractivity();
    
    // Добавляем параллакс эффект для секции
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.services-section');
        parallax.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    });
});

// Дополнительная функция для фильтрации услуг (можно добавить позже)
function filterServices(genre) {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        const cardGenre = card.querySelector('.genre-tag').textContent;
        if (genre === 'all' || cardGenre === genre) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}