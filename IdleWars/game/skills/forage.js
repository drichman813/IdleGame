var foragingLevel = 0;
var foragingClicks = 0;
var foragingXP = 0;
var foragingActive = false;
var foraging = null;

function gainForagingXP(){
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