import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import jsonData from '../public/DATA.json';

// Menu
const menu = document.querySelector('#menu');
const drawer = document.querySelector('#navigationDrawer');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});

const datas = jsonData['restaurants'];
let dataList = '';
datas.forEach((data) => {
  dataList += `
    <div class="list-item">
        <img class="list-item-thumb" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}" tabindex="0">
        <div class="info-city" tabindex="0">${data['city']}</div>
        <div class="list-item-content">
            <p class="list-item-rating" tabindex="0">
                Rating : <span class="list-item-rating-value">${data['rating']}</span>
            </p>
            <h1 class="list-item-title"><a href="#" tabindex="0">${data['name']}</a></h1>
            <div class="list-item-desc" tabindex="0">${data['description']}...</div>
        </div>
    </div>
  `;
});
document.querySelector('#list').innerHTML = dataList;
