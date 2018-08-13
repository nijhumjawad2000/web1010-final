// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'
var quoteText = document.querySelector(".quote-text")  //q5
var quoteAuthor = document.querySelector(".quote-author") //q6
var button = document.querySelector("button")  //q7

function getQuote() {
    console.log(quoteText)  //q1
    console.log(quoteAuthor)  //q1
    $.ajax({
        type: "GET",
        url: API_URL,
        dataType: 'json',
        success: function (data) {
            quoteText.textContent = data.quoteText;     // $(".quote-text").text(data.quoteText);
            quoteAuthor.textContent = data.quoteAuthor;  // $(".quote-author").text(data.quoteAuthor);
        },
        error: function (error) {
            console.log(error)
        }
        
    })
}
getQuote()
button.addEventListener("click", function (event) {  //q7
    event.preventDefault()
    getQuote()
}) 
