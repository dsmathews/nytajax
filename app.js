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

}




$('#search').on('click', getInput);

