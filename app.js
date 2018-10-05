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

    const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bccea3c2aaa1417790728926205111bc&q=${keywordInput}&beg_date${startYearInput}&end_date${endYearInput}`;
    // const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bccea3c2aaa1417790728926205111bc&q=`;   
    // const queryURL = `https://api.iextrading.com/1.0/stock/ibm/quote/batch?types=quote,news&range=1m&last=1`;
  

$.ajax({
    url: queryURL,
    method: 'GET'

}).then(function(response) {
    console.log(response);

    for (let i=0; i<numRecordInput; i++) {
    const article = response.response.docs[i].headline.main;
    const articleUrl = response.response.docs[i].web_url;
 
    console.log("article", article);

    // console.log(jason.stringify(response));

    const artElement = $('<p>').text(`${article}`);
    const artUrlElement = $('<p>').text(`${articleUrl}`);

 
    $('#results').prepend(artUrlElement);
    $('#results').prepend(artElement);
    $('#results').prepend(`<hr>`);
   
    }
});

}

const clearResults = function() {

    $('#results').empty();
}


$('#search').on('click', getInput);
$('#clear').on('click', clearResults);

