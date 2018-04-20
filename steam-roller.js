'use strict';

/* Bonfire Problem: Steamroller
 *
 * Basically flatten the array so the items inside
 * are not contained in nested arrays.
 *
 * */

function steamrollArray(arr) {
  var store = [];

  function roller(x) {
    if (Array.isArray(x)) {
      for (var i = 0; i < x.length; i++) {
        roller(x[i]);
      }
    } else {
      store.push(x);
    }
  }

  arr.forEach(function(el) {
    roller(el);
  });

  console.log(store);
  return store;
}

steamrollArray([1, [2], [3, [[4]]]]);
