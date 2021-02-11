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

const plainify = (obj, lastKey) => {
    const ret = {};
    for (let key in obj) {
        const newKey = lastKey ? lastKey + '.' + key : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(ret, plainify(obj[key], newKey));
        } else {
            ret[newKey] = obj[key];
            console.log(ret);
        }
    }

    return ret;
}