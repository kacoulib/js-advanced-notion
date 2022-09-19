

// 
const log = {
    count : 100,
    save: function () {
        'use strict';
        console.log(this.count);
    }
}

// Le this d'un objet est déterminé par la manière dont vous allez appeler l'objet "contexte".
// setTimeout(log.save, 500);

// par contre dans ce cas le contexte est bien celui de l'objet log
setTimeout(() => log.save(), 500);

