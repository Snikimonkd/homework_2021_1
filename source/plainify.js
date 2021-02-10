'use strict';

/**
 * Функция получает на вход обычный объект с вложенными свойствами, а вохвращает plain-объект
 * @param {Object} obj - объект с вложенными свойствами
 * @returns {Object} newObj - plain-объект, полученный из obj
 * @example 
 * Получает на вход:
 * const nected = {
 *      deep: {
 *          foo: 'bar',
 *          baz: 42
 *      }
 * };
 * Возвращает:
 * const plain = {
 *      'deep.foo': 'bar',
 *      'deep.baz': 42
 * };
 */

const plainify = obj => {
    let newObj = new Object();
    let isNested = false;
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] != null) {
            for (let nextKey in obj[key]) {
                if (typeof obj[key][nextKey] === 'object' && obj[key][nextKey] != null) {
                    isNested = true;
                }
                newObj[key + '.' + nextKey] = obj[key][nextKey];
            }
        } else {
            newObj[key] = obj[key];
        }
    }

    if (isNested) {
        newObj = plainify(newObj);
    }

    return newObj;
}