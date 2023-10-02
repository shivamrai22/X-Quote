let apiurl = 'https://api.api-ninjas.com/v1/quotes?category=';
let newButton = document.querySelector('.newButton');
let tweetButton = document.querySelector('.tweet');
let radioValue = document.getElementsByName("test");
let quoteTweet, AuthorTweet;
let Space = "%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20";

//fetch Api
async function fetchData(apiurl) {
    const response = await fetch(apiurl, {
        method: 'Get',
        headers: { 'X-Api-Key': 'oUa9AyeFmpxfuZZ7nP+NHw==Su1oRoZ9b08qlE8q' },
        contentType: 'application/json'
    })
    let data = await response.json();
    quoteTweet = data[0].quote;
    authorTweet = "- " + data[0].author;
    document.getElementById('quoteText').innerHTML = data[0].quote;
    document.getElementById('authorName').innerHTML = "- " + data[0].author;
}


//call after loading the page
fetchData(apiurl + "money");
let flag = 0;


//call after clicking radio button
radioValue.forEach((item) => {
    item.addEventListener('click', () => {
        fetchData(apiurl + item.value);
        flag = item.id;
    })
})


//Next Button 
newButton.addEventListener('click', () => {
    if (flag == 0) {
        fetchData(apiurl + "money");
    }
    else if (flag == 1) {
        fetchData(apiurl + "friendship");
    }
    else if (flag == 2) {
        fetchData(apiurl + "inspirational");
    }
    else if (flag == 3) {
        fetchData(apiurl + "happiness");
    }
    else if (flag == 4) {
        fetchData(apiurl + "business");
    }
})

//Tweet Button

tweetButton.addEventListener('click', () => {

    if (confirm("Tweet With Author Name")) {
        window.open('https://twitter.com/intent/tweet?text=' + quoteTweet + Space + authorTweet, '_blank');
    }
    else {
        window.open('https://twitter.com/intent/tweet?text=' + quoteTweet, '_blank');
    }
})
