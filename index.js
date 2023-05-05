// variables
const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportBtn = document.getElementById("sport");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById('newsQuery')
const newsType = document.getElementById('newsType');
const newsdetails = document.getElementById('newsdetails');


//array
let newsDataArr = [];

// 2ono own api key
// set korean news
const API_KEY = "https://newsdata.io/api/1/news?apikey=pub_21663d45449ad5f30d19744e2e7212fa65c66";
const HEADLINES_NEWS = "&category=top&country=us"
const GENERAL_NEWS = "&category=health&country=us"
const BUSINESS_NEWS = "&category=business&country=us"
const SPORTS_NEWS = "&category=sports&country=us"
const ENTERTAINMENT_NEWS = "&category=entertainment&country=us"
const TECHNOLOGY_NEWS = "&category=technology&country=us"
const SEARCH_NEWS = "https://newsdata.io/api/1/news?apikey=pub_21663d45449ad5f30d19744e2e7212fa65c66&q="


window.onload = function() {
    newsType.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();

}

generalBtn.addEventListener("click", function () {
    newsType.innerHTML="<h4>General news</h4>";
    fetchGeneralNews();

});

businessBtn.addEventListener("click", function () {
    newsType.innerHTML="<h4>Business news</h4>";
    fetchBusinessNews();

});

sportBtn.addEventListener("click", function () {
    newsType.innerHTML="<h4>Sports news</h4>";
    fetchSportsNews();

});

technologyBtn.addEventListener("click", function () {
    newsType.innerHTML="<h4>Technology news</h4>";
    fetchTechnologyNews();

});

entertainmentBtn.addEventListener("click", function () {
    newsType.innerHTML="<h4>Entertainment news</h4>";
    fetchEntertainmentNews();

});

searchBtn.addEventListener("click", function () {
    newsType.innerHTML="<h4>Search :"+newsQuery.value+"</h4>";
    fetchQueryNews();

});

const fetchHeadlines = async () => {
    const response = await fetch(API_KEY+HEADLINES_NEWS);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.results;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}


const fetchGeneralNews = async () => {
    const response = await fetch(API_KEY+GENERAL_NEWS);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.results;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(API_KEY+BUSINESS_NEWS);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.results;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(API_KEY+SPORTS_NEWS);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.results;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(API_KEY+TECHNOLOGY_NEWS);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.results;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(API_KEY+ENTERTAINMENT_NEWS);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.results;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchQueryNews = async () => {
    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+ encodeURIComponent(newsQuery.value));
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.results;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}


function displayNews() {

    newsdetails.innerHTML = "";

    if(newsDataArr.length == 0) {
        newsdetails.innerHTML = "<h5>No date found.</h5>"
        return;
    }

    newsDataArr.forEach(news => {

        let date = news.pubDate.split("-");

        let col = document.createElement('div');
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

        let card = document.createElement('div');
        card.className = "p-2";

        let image = document.createElement('img');
        image.setAttribute("height", "marchparent");
        image.setAttribute("width","100%");
        image.src=news.image_url;

        let cardBody = document.createElement('div');

        let newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        let dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        let discription = document.createElement('p');
        discription.className = "text-muted";
        discription.innerHTML = news.discription;

        let link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.link;
        link.innerHTML="Read More";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    })
}