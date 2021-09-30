// END GAME PAGE

const username = document.getElementById("username");
const saveScoreButton = document.getElementById("saveScoreButton");

localStorage.setItem("username", JSON.stringify(username));
var user = JSON.parse(localStorage.getItem("username"));

// save game disabled if username not inputed
username.addEventListener("keyup", () => {
    // check if it logs usernames: 
    console.log(username.value);
    saveScoreButton.disabled = !username.value;
});

saveScore = e => {
    console.log("clicked the save button", username);
    e.preventDefault();
};
