// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function getCardsForTopic(topic) {

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);
    if(topic === 'bootstrap' || topic ==='All'){
        response.data.articles.bootstrap.forEach(item => {
            cards.appendChild(createdCard(item)); 
        })
    }// closes if
  
    if(topic === 'javascript' || topic ==='All') {
    response.data.articles.javascript.forEach(item => {
        cards.appendChild(createdCard(item));
    })
    }

    if(topic === 'jquery' || topic ==='All') {
    response.data.articles.jquery.forEach(item => {
        cards.appendChild(createdCard(item));
    })
    }
    if(topic === 'node.js' || topic ==='All') {
    response.data.articles.node.forEach(item => {
        cards.appendChild(createdCard(item));
    })
    }
    if(topic === 'technology' || topic ==='All') {
    response.data.articles.technology.forEach(item => {
        cards.appendChild(createdCard(item));
    })
    }
})
.catch(error => {
    console.log('Did not work' , error);
})
}
const cards = document.querySelector('.cards-container');

function createdCard(cardData) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('healine');
    authorContainer.classList.add('author');
    imageContainer.classList.add('img-container');

    headline.textContent = cardData.headline;
    authorImg.src = cardData.authorPhoto;
    authorName.textContent = cardData.authorName;

    card.appendChild(headline);
    card.appendChild(authorContainer);
    authorContainer.appendChild(imageContainer);
    imageContainer.appendChild(authorImg);
    imageContainer.appendChild(authorName);

    return card;

    
}

