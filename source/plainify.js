'use strict';

const plainify = obj => {
    var ret = {};
    var flag = true;
    while (flag) {
        var newObj = Object();
        flag = false;
        for (var key in obj) {
            if (typeof obj[key] === 'object') {
                for (var nextKey in obj[key]) {
                    if (typeof obj[key][nextKey] == 'object') {
                        flag = true;
                    }
                    newObj[key + '.' + nextKey] = obj[key][nextKey];
                }
            } else {
                newObj[key] = obj[key];
            }
        }
        obj = newObj;
    }

    return obj;
}