'use strict';

/**
 * Функция получает на вход обычный объект с вложенными свойствами, а возвращает plain-объект
 * @param {Object} obj - объект с вложенными свойствами
 * @param {string} lastKey - ключ, по которому лежит объект, который передается в функцию
 * @returns {Object} - plain-объект, полученный из obj
 * @example 
 * Получает на вход:
 * const nested = {
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
    for (const key in obj) {
        const newKey = lastKey ? lastKey + '.' + key : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(ret, plainify(obj[key], newKey));
        } else {
            ret[newKey] = obj[key];
        }
    }

    return ret;
}