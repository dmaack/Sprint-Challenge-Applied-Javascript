// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector('.topics');

tabs.appendChild(createdTab('All'));

function removeCards(elements) {
    elements.forEach(element => {
        element.remove();
    })
} 
function removeActiveTab(elements) {
    elements.forEach(element => {
        element.classList.remove('active-tab');
    })
} 

axios
.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log(response);
    response.data.topics.forEach(item => {
        const newTab = createdTab(item)
        tabs.appendChild(newTab);
    })
    
})
.catch(error => {
    console.log('The data was not returned' , error);
})


function createdTab(tabData) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = tabData;
    

    tab.addEventListener('click' , (e) => {
        removeCards(document.querySelectorAll('.card'));
        removeActiveTab(document.querySelectorAll('.tab'));
        tab.classList.toggle('active-tab');
        getCardsForTopic(tabData);
        

    })

    return tab;
}
