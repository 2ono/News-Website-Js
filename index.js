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
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=kr&apiKey="
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=kr&category=general&apiKey="
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey="
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey="
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey="
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey="
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q="

generalBtn.addEventListener("click", function () {
    fetchGeneralNews();

});

businessBtn.addEventListener("click", function () {
    fetchBusinessNews();

});

sportBtn.addEventListener("click", function () {
    fetchSportsNews();

});

technologyBtn.addEventListener("click", function () {
    fetchTechnologyNews();

});

entertainmentBtn.addEventListener("click", function () {
    fetchEntertainmentNews();

});

searchBtn.addEventListener("click", function () {
    fetchQueryNews();

});


const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson;
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
        newsDataArr = myJson;
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
        newsDataArr = myJson;
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
        newsDataArr = myJson;
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
        newsDataArr = myJson;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchQueryNews = async () => {
    const response = await fetch(SEARCH_NEWS+API_KEY);
    newsDataArr = [];

    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

