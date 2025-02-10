let currentCount = 0;
const maxCount = 30;
const increment = 5;

function createCard(title, body) {
    return `
        <div class="main__item">
            <img class="main__item-image" src="./images/card.jpg" alt="Card">
            <div class="main__item-content">
                <div class="main__item-info">
                    <h1 class="main__item-info-name">bridge</h1>
                    <h2 class="main__item-info-title">${title}</h2>
                    <p class="main__item-info-text">${body}</p>
                    <p class="main__item-info-user">Posted by Eugenia, on July 24, 2019</p>
                </div>
                <button class="main__item-button">
                    <span class="main__item-button-text">Continue reading</span>
                </button>
            </div>
        </div>
    `;
}

async function fetchData(startIndex, count) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        const limitedData = data.slice(startIndex, startIndex + count);

        const cardsContainer = document.getElementById('cards-container');

        limitedData.forEach(item => {
            const card = createCard(item.title, item.body);
            cardsContainer.insertAdjacentHTML('beforeend', card);
        });
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}

function loadMoreCards() {
    if (currentCount < maxCount) {
        const nextCount = Math.min(increment, maxCount - currentCount);
        fetchData(currentCount, nextCount);
        currentCount += nextCount;
    }

    if (currentCount >= maxCount) {
        document.getElementById('load-more-button').style.display = 'none';
    }
}

loadMoreCards();

document.getElementById('load-more-button').addEventListener('click', loadMoreCards);