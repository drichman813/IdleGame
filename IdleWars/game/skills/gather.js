var gatheringLevel = 0;
var gatheringClicks = 0;
var gatheringXP = 0;
var gatheringActive = false;
var gathering = null;

function gainGatheringXP(){
    var test = Math.floor(Math.random() * 10);
    if (test < 7) {
        gatheringXP += 10;
        document.getElementById("inventoryList").textContent = "Inventory List: " + inventory.items;

        inventory.add(1, "stone");
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
