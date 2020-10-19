var gatheringLevel = 0;
var gatheringClicks = 0;
var gatheringXP = 0;
var gatheringActive = false;
var gathering = null;
var foragingLevel = 0;
var foragingClicks = 0;
var foragingXP = 0;
var foragingActive = false;
var foraging = null;
var performingAction = false;

//Gathering Code
function gather() {
    if (foragingActive == true) {
        forage();
    }
    if (gatheringActive == false) {
        gatheringActive = true;
        gathering = setInterval(startGathering, 1000);
        updateGatheringActive();
    } else {
        gatheringActive = false;
        updateGatheringActive();
        clearInterval(gathering);
    }
}

function gainGatheringXP(){
    var test = Math.floor(Math.random() * 10);
    if (test < 7) {
        gatheringXP += 10;
    }
    document.getElementById("gatheringXP").textContent = "Gathering XP: " + gatheringXP;
}

function startGathering() {
    incrementGathering();
    gainGatheringXP();
    updateGatheringLevel();
}

function incrementGathering() {
    gatheringClicks += 1;
    document.getElementById("gatheringClicks").textContent = "Gathering Actions: " + gatheringClicks;
}

function updateGatheringLevel() {
    if (gatheringXP >= 100) {
        gatheringLevel = 1;
    }
    else if (gatheringXP >= 500) {
        gatheringLevel = 2;
    }
    document.getElementById("gatheringLvl").textContent = "Gathering Level: " + gatheringLevel;
}

function updateGatheringActive(){
    document.getElementById("gatheringTrueFalse").textContent = "Currently Gathering: " + gatheringActive;
}

//Foraging Code
function forage() {
    if (gatheringActive == true) {
        gather();
    }
    if (foragingActive == false) {
        foragingActive = true;
        foraging = setInterval(startForaging, 1000);
        updateForagingActive();
    } else {
        foragingActive = false;
        updateForagingActive();
        clearInterval(foraging);
    }
}function gainForagingXP(){
    var test = Math.floor(Math.random() * 10);
    if (test < 7) {
        foragingXP += 10;
    }
    document.getElementById("foragingXP").textContent = "Foraging XP: " + foragingXP;
}

function startForaging() {
    incrementForaging();
    gainForagingXP();
    updateForagingLevel();
}

function incrementForaging() {
    foragingClicks += 1;
    document.getElementById("foragingClicks").textContent = "Foraging Actions: " + foragingClicks;
}

function updateForagingLevel() {
    if (foragingXP >= 100) {
        foragingLevel = 1;
    }
    else if (foragingXP >= 500) {
        foragingLevel = 2;
    }
    document.getElementById("foragingLvl").textContent = "Foraging Level: " + foragingLevel;
}

function updateForagingActive(){
    document.getElementById("foragingTrueFalse").textContent = "Currently Foraging: " + foragingActive;
}