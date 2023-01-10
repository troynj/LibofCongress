//var locUrl = "https://www.loc.gov/";
var format = "";
var userInput = "";
var locUrl = `https://www.loc.gov/${format}/?q=${userInput}&fo=json`


function setFormat() {
    var userDrop = "";
    switch (getFormat()) {
        case 'Maps': userDrop = "maps"
            break;
        case 'Audio Recordings': userDrop = "audio"
            break;
        case 'Photo, print, drawings': userDrop = "photos"
            break;
        case 'Manuscripts / Mixed Material': userDrop = "manuscripts"
            break;
        case 'Newspapers': userDrop = "newspapers"
            break;
        case 'Film, Video': userDrop = "film-and-videos"
            break;
        case 'Printed Music, such as Sheet Music': userDrop = "notated-music"
            break;
        case 'Archived Websites': userDrop = "websites"
            break;
        default: alert("Please make a selection.");
            break;
    } return userDrop
}

function setUserInput() {
    var tempUserInput = getUserInput();
    var userInputArr = tempUserInput.split(" ");
    console.log(typeof userInputArr);
    console.log(userInputArr);
    var userInputStr = userInputArr.join('')
    console.log(userInputStr)
    return userInputStr
}

function setSearch() {
    format = setFormat();
    userInput = setUserInput();
}

function getFormat() {
    return $('#format').selectmenu().val()

}

function getUserInput() {
    return $('#userInput').val()
}

$('#search-btn').click(() => {
    setSearch()

    console.log(format)
    console.log(userInput)
    console.log(`https://www.loc.gov/${format}/?q=${userInput}&fo=json`);

    fetch(locUrl)
        .then((response) => {
            //if statement to check response.status
            return response.json()
        })
        .then((data) => {
            console.log(data)
            //append data to page
        })
}
)

//function to dynamically generate divs with data 

//reload page with document.location