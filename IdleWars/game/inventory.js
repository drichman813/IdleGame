
Inventory = function(items) {
    this.items = [];
    self.removeItem = function(id, amount){
        for(var i = 0 ; i < self.items.length; i++){
            if(self.items[i].id === id){
                self.items[i].amount -= amount;
                if(self.items[i].amount <= 0)
                    self.items.splice(i,i);
                return;
            }
        }
    }
    self.hasItem = function(id, amount){
        for(var i = 0 ; i < self.items.length; i++) {
            if (self.items[i].id === id) {
                return self.items[i].amount >= amount;
            }
        }
        return false;
    }
    self.refreshRender = function(){

    }
}

Item = function(id, name){
    var self = {
        id:id,
        name:name,
    }
    return self;
}

var stone = new Item("stone", "Stone");


function addItem(id, amount, items){
    for(var i = 0 ; i < items.length; i++){
        if(items[i].id === id){
            items[i].amount += amount;
            return;
        }
    }
    items.push({id:id, amount:amount});
}
