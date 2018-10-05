const getInput = function(event) {

    event.preventDefault();

    //Retreive User Input
    console.log("search clicked");
    const keywordInput = $('#keyword').val();
    console.log(keywordInput);
    const numRecordInput = $('#numRecord').val();
    console.log(numRecordInput);
    const startYearInput = $('#startYear').val();
    console.log(startYearInput);
    const endYearInput = $('#endYear').val();
    console.log(endYearInput);

    //Display Articles on the screen
    displayResults(keywordInput, numRecordInput, startYearInput, endYearInput);
}

const displayResults = function(keywordInput, numRecordInput, startYearInput, endYearInput) {
    console.log ("displayResults keywordInput", keywordInput);

    const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bccea3c2aaa1417790728926205111bc&q=shadow`;
    // const queryURL = `https://api.iextrading.com/1.0/stock/${/quote/batch?types=quote,news&range=1m&last=1`;
  

$.ajax({
    url: queryURL,
    method: 'GET'

}).then(function(response) {

    const article = response.name;
    console.log(response);
    // console.log(jason.stringify(response));

    const artElement = $('<p>').text(`${article}`);

    $('#results').append(artElement);

});

}



$('#search').on('click', getInput);

