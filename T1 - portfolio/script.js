// Данные об играх с изображениями для карточек и модальных окон
const gamesData = {
    cyberpunk: {
        title: "Cyberpunk Adventure",
        cardImage: "https://newcdn.igromania.ru/mnt/games/4/9/4/a/d/0/14727/73f7677257f9bfa6_original.webp",
        modalImage: "https://newcdn.igromania.ru/mnt/games/4/9/4/a/d/0/14727/73f7677257f9bfa6_original.webp",
        description: "Погрузитесь в неоновый мегаполис будущего, где технологии и человечность переплетаются. Исследуйте открытый мир, принимайте решения, влияющие на сюжет, и раскройте заговор корпораций, стремящихся к абсолютной власти.",
        genre: "RPG, Открытый мир",
        platform: "PC, PlayStation, Xbox",
        year: "2023"
    },
    fantasy: {
        title: "Fantasy Kingdom",
        cardImage: "https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2F52d107d2ecf2ed3cbe61c25d5fab1832e064a1ba-1920x1080.png%3Fauto%3Dformat&w=3840&q=75",
        modalImage: "https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2F52d107d2ecf2ed3cbe61c25d5fab1832e064a1ba-1920x1080.png%3Fauto%3Dformat&w=3840&q=75",
        description: "Отправьтесь в эпическое путешествие по волшебному королевству, полному древних тайн и магических существ. Создайте своего уникального героя, освойте могущественные заклинания и объединитесь с друзьями в масштабных PvP-битвах.",
        genre: "MMORPG, Фэнтези",
        platform: "PC, Mobile",
        year: "2022"
    },
    racing: {
        title: "Extreme Racing",
        cardImage: "https://cdn1.epicgames.com/spt-assets/f860c975e5f041aa895eaef6201e066a/extreme-offroad-racing-1rqz8.jpg",
        modalImage: "https://cdn1.epicgames.com/spt-assets/f860c975e5f041aa895eaef6201e066a/extreme-offroad-racing-1rqz8.jpg",
        description: "Испытайте адреналин на самых опасных трассах мира. Настройте свой автомобиль, участвуйте в турнирах и станьте легендой гоночного спорта. Реалистичная физика и потрясающая графика погрузят вас в мир скоростных соревнований.",
        genre: "Гонки, Экшен",
        platform: "PC, PlayStation, Xbox, Nintendo Switch",
        year: "2023"
    },
    strategy: {
        title: "Space Strategy",
        cardImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/261470/ss_eb57e8047c8c64261ad17d06d79a764b3a4d2327.1920x1080.jpg?t=1726821290",
        modalImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/261470/ss_eb57e8047c8c64261ad17d06d79a764b3a4d2327.1920x1080.jpg?t=1726821290",
        description: "Возглавьте межгалактическую империю в этой масштабной стратегической игре. Развивайте технологии, управляйте ресурсами, ведите дипломатические переговоры и сражайтесь в эпических космических битвах за господство во Вселенной.",
        genre: "Стратегия, Sci-Fi",
        platform: "PC, Mac",
        year: "2024"
    },
    horror: {
        title: "Dark Asylum",
        cardImage: "https://store-images.s-microsoft.com/image/apps.38096.67759939744253232.91d27dff-a27e-44ea-9d15-3d3fc6acfd00.36fea796-07d0-4264-8119-a1b921740492?q=90&w=480&h=270",
        modalImage: "https://store-images.s-microsoft.com/image/apps.38096.67759939744253232.91d27dff-a27e-44ea-9d15-3d3fc6acfd00.36fea796-07d0-4264-8119-a1b921740492?q=90&w=480&h=270",
        description: "Выживите в заброшенной психиатрической лечебнице, где обитают необъяснимые ужасы. Используйте стелс-механики, решайте головоломки и пытайтесь сохранить рассудок, пока раскрываете мрачные тайны этого проклятого места.",
        genre: "Хоррор, Выживание",
        platform: "PC, PlayStation, Xbox",
        year: "2023"
    },
    puzzle: {
        title: "Mind Puzzles",
        cardImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/859370/capsule_616x353.jpg?t=1727469534",
        modalImage: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/859370/capsule_616x353.jpg?t=1727469534",
        description: "Коллекция из более чем 200 уникальных головоломок, которые бросят вызов вашему интеллекту. От классических логических задач до инновационных механик - эта игра подарит часы увлекательного времяпровождения для всей семьи.",
        genre: "Головоломка, Казуальная",
        platform: "PC, Mobile, Nintendo Switch",
        year: "2022"
    }
};

// Получаем элементы DOM
const gameCards = document.querySelectorAll('.game-card');
const modal = document.getElementById('gameModal');
const closeModal = document.querySelector('.close-modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalGenre = document.getElementById('modalGenre');
const modalPlatform = document.getElementById('modalPlatform');
const modalYear = document.getElementById('modalYear');

// Функция для загрузки изображений на карточки
function loadCardImages() {
    const cardImages = document.querySelectorAll('.game-image img');
    
    cardImages.forEach(img => {
        const gameId = img.getAttribute('data-image');
        const game = gamesData[gameId];
        
        if (game && game.cardImage) {
            // Добавляем класс загрузки
            img.classList.add('image-loading');
            
            // Создаем новое изображение для предзагрузки
            const preloadImage = new Image();
            preloadImage.src = game.cardImage;
            
            preloadImage.onload = () => {
                // Когда изображение загружено, убираем класс загрузки и устанавливаем src
                img.src = game.cardImage;
                img.classList.remove('image-loading');
            };
            
            preloadImage.onerror = () => {
                // В случае ошибки загрузки
                console.error(`Не удалось загрузить изображение для игры: ${game.title}`);
                img.classList.remove('image-loading');
                // Можно установить placeholder изображение
                img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMkEyQTRBIi8+CjxwYXRoIGQ9Ik0yMDAgMTI1TDE1MCAxNTBMMjAwIDE3NUwyNTAgMTUwTDIwMCAxMjVaIiBmaWxsPSIjNENEQ0M0Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjODg5MkIwIiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
            };
        }
    });
}

// Функция для открытия модального окна
function openModal(gameId) {
    const game = gamesData[gameId];
    
    if (game) {
        // Показываем модальное окно сразу
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Устанавливаем текст
        modalTitle.textContent = game.title;
        modalDescription.textContent = game.description;
        modalGenre.textContent = game.genre;
        modalPlatform.textContent = game.platform;
        modalYear.textContent = game.year;
        
        // Загружаем большое изображение для модального окна
        const preloadModalImage = new Image();
        preloadModalImage.src = game.modalImage;
        
        preloadModalImage.onload = () => {
            modalImage.src = game.modalImage;
        };
        
        preloadModalImage.onerror = () => {
            console.error(`Не удалось загрузить модальное изображение для игры: ${game.title}`);
            modalImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMkEyQTRBIi8+CjxwYXRoIGQ9Ik00MDAgMjAwTDMwMCAzMDA0MDAgNDAwTDUwMCAzMDBMNDAwIDIwMFoiIGZpbGw9IiM0Q0RDQzQiLz4KPHRleHQgeD0iNDAwIiB5PSIyMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM4ODkyQjAiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtZmFtaWx5PSJBcmlhbCI+Tm8gSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
        };
    }
}

// Функция для закрытия модального окна
function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Загружаем изображения на карточки
    loadCardImages();
    
    // Добавляем анимацию появления карточек
    const cards = document.querySelectorAll('.game-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Добавляем обработчики событий для карточек игр
gameCards.forEach(card => {
    card.addEventListener('click', () => {
        const gameId = card.getAttribute('data-game');
        openModal(gameId);
    });
});

// Закрытие модального окна
closeModal.addEventListener('click', closeModalFunc);

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalFunc();
    }
});

// Закрытие модального окна по клавише Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModalFunc();
    }
});