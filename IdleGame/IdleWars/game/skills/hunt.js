var huntingLevel = 0;
var huntingClicks = 0;
var huntingXP = 0;
var huntingActive = false;
var hunting = null;

function gainHuntingXP(){
    var test = Math.floor(Math.random() * 10);
    if (test < 7) {
        huntingXP += 10;
    }
    document.getElementById("huntingXP").textContent = "Hunting XP: " + huntingXP;
}

function startHunting() {
    incrementHunting();
    gainHuntingXP();
    updateHuntingLevel();
}

function incrementHunting() {
    huntingClicks += 1;
    document.getElementById("huntingClicks").textContent = "Hunting Actions: " + huntingClicks;
}

function updateHuntingLevel() {
    if (huntingXP >= 100) {
        huntingLevel = 1;
    }
    else if (huntingXP >= 500) {
        huntingLevel = 2;
    }
    document.getElementById("huntingLvl").textContent = "Hunting Level: " + huntingingLevel;
}

function updateHuntingActive(){
    document.getElementById("huntingTrueFalse").textContent = "Currently Hunting: " + huntingActive;
}
