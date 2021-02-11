'use strict';

/**
 * Функция получает на вход обычный объект с вложенными свойствами, а вохвращает plain-объект
 * @param {Object} obj - объект с вложенными свойствами
 * @returns {Object} - plain-объект, полученный из obj
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
    let ret = {};
    for (var key in obj) {
        if (typeof obj[key] === 'object' && obj[key] != null) {
            let nextObj = plainify(obj[key]);
            for (var nextKey in nextObj) {
                ret[key + '.' + nextKey] = nextObj[nextKey];
            }
        } else {
            ret[key] = obj[key];
        }
    }

    return ret;
}