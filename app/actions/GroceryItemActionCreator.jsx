var dispatcher = require('./../dispatcher.js');

module.exports = {
    add: function(item){
        dispatcher.dispatch({
            paylaod: item,
            type: "grocery-item: add"
        });
    }
}