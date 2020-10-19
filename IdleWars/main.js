var clicks = 0;
var clickXP = 0;
var gatheringActive = false;
var gathering = null;

function incrementGathering() {
    clicks += 1;
    document.getElementById("clicks").textContent = "Gathering Actions: " + clicks;
}

function gather() {
    if (gatheringActive == false) {
        gatheringActive = true;
        gathering = setInterval(startGathering, 1000);
        document.getElementById("gatheringTrueFalse").textContent = "Currently Gathering: " + gatheringActive;
    } else {
        gatheringActive = false;
        document.getElementById("gatheringTrueFalse").textContent = "Currently Gathering: " + gatheringActive;
        clearInterval(gathering);
    }
}

function gainGatheringXP(){
    var test = Math.floor(Math.random() * 10);
    if (test < 7) {
        clickXP += 10;
    }
    document.getElementById("clickXP").textContent = "Gathering XP: " + clickXP;
}

function startGathering() {
    incrementGathering();
    gainGatheringXP()
}