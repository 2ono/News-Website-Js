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
const API_KEY = "9315583383614317814d7c611365a2ac";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey="
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey="
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey="
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey="
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q="

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
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}


const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchQueryNews = async () => {
    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+ encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
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

        let date = news.publishedAt.split("T");

        let col = document.createElement('div');
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

        let card = document.createElement('div');
        card.className = "p-2";

        let image = document.createElement('img');
        image.setAttribute("height", "marchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

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
        link.href = news.url;
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