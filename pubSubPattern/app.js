var events = {
    events: {},
    subscribe: function(eventName, fn){
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    },
    unsubscribe: function(eventName, fn) {
        var handlers = this.events[eventName];
        handlers = handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
    publish: function(eventName, args) {
        var handlers = this.events[eventName];

        handlers.forEach(function(item) {
            item(args);
        });
    }
};


// ########################### TODOlist API
var TODOlist = (function(){
    var items = 0;
    var addItem= function(){
        items++;
        events.publish("countChanged", items);
    }

    return {
        addNewItem: addItem,
    }
})();

var TODOstats = function(name){
    return {
        showDueCount: function(x){
            console.log(`${name} showDueCount: ${x}`);
        }
    }
};

var TODOstats1 = TODOstats('TODOstats1');
var TODOstats2 = TODOstats('TODOstats2');
var TODOstats3 = TODOstats('TODOstats3');

// create observers
TODOstats1.notify = function(arg){
    console.log(`I, the TODOstats1, notify YOU!`);
    TODOstats1.showDueCount(arg);
};
TODOstats2.notify = function(arg){
    console.log(`I, the TODOstats2, notify YOU!`);
    TODOstats2.showDueCount(arg);
};
TODOstats3.notify = function(arg){
    console.log(`I, the TODOstats3, notify YOU!`);
    TODOstats3.showDueCount(arg);
};

events.subscribe("countChanged", TODOstats1.notify);
events.subscribe("countChanged", TODOstats2.notify);
events.subscribe("countChanged", TODOstats3.notify);

TODOlist.addNewItem();
TODOlist.addNewItem();
TODOlist.addNewItem();