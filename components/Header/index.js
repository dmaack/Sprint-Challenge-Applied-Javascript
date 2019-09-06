// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const pageHeader = document.querySelector('.header-container');

function createHeader() {
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const title = document.createElement('h1');
    const temperature = document.createElement('span');

    header.classList.add('header');
    headerDate.classList.add('date');
    temperature.classList.add('temp');

    headerDate.textContent = 'SMARCH 28, 2019';
    title.textContent ='Lambda Times';
    temperature.textContent = '98&#176;';

    header.appendChild(headerDate);
    header.appendChild(title);
    header.appendChild(temperature);

    return header;
}

header-container.appendChild(createHeader(obj));