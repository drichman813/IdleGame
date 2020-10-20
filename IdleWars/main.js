var inventory = {
    items: {},
    add: function(key, item) {
        if (item !== null)
            this.items[key] = item
    },
    remove: function(key) {
        this.items[key] = null
    },
    get: function(key){
        if (this.items[key])
        {
            return this.items[key];
        } else {
            return null;
        }
    }
}
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
}







