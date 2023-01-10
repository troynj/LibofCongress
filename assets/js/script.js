//var locUrl = "https://www.loc.gov/";
var format = "";
var userInput = "";
var locUrl = `https://www.loc.gov/${format}/?q=${userInput}&fo=json`

function setSearch() {
    format = getFormat();
    userInput = getUserInput();
}

function getFormat() {
    return $('#format').selectmenu()
}

function getUserInput() {
    return $('#userInput').val()
}

$('#search-btn').click(() => {
setSearch()

fetch(locUrl)
.then((response) => {
    //if statement to check response.status
    return response.json()
})
.then((data) => {
    console.log(data)
    //append data to page
})}
)

//function to dynamically generate divs with data 

//reload page with document.location