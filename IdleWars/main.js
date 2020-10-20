function openSkill(evt, skillName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(skillName).style.display = "block";
    evt.currentTarget.className += " active";
  }

document.getElementById("defaultOpen").click();

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