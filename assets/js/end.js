// END GAME PAGE

const username = document.getElementById("username");
const saveScoreButton = document.getElementById("saveScoreButton");

// get score out of storage
const recentScore = localStorage.getItem("recentScore");

// save game disabled if username not inputed
username.addEventListener("keyup", () => {
    // check if it logs usernames: console.log(username.value);
    saveScoreButton.disabled = !username.value;
});

saveScore = e => {
    console.log("clicked the save button");
    e.preventDefault();
};
