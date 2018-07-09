'use strict';

const products = [
{product_name: "Sesame Street® Extra Sensitive 3-in-1",           weight: 3.13, volume: 17, margin: 0.3},
{product_name: "Heliocare® Capsules",                             weight: 9.42, volume: 10, margin: 0.46},
{product_name: "Balmex® Complete Protection Against Diaper Rash", weight: 1.62, volume: 10, margin: 0.69},
{product_name: "Mekar Firming Eye Cream",                         weight: 1.5,  volume: 17, margin: 0.51},
{product_name: "Pantene Nature Fusion Smooth Vitality Shampoo",   weight: 7.86, volume: 2,  margin: 0.27},
{product_name: "Breeze Litter System from Tidy Cats®",            weight: 0.87, volume: 11, margin: 0.89},
{product_name: "EXPO Low Odor Ultra Fine Dry Erase Marker",       weight: 7.33, volume: 19, margin: 0.64},
{product_name: "Olay Ultra Moisture body wash",                   weight: 9.71, volume: 11, margin: 0.12},
{product_name: "vbeauté - Eye Never®",                            weight: 4.4,  volume: 15, margin: 0.06},
{product_name: "Maxwell House International Suisse Mocha",        weight: 1.23, volume: 14, margin: 0.6}
];

function shipIt(arr, weight, volume) {
  const len = arr.length; // 10
  const unordered = arr;  // it mutates
  const ordered = [];
  let w = weight * 100;   // to prevent float miscalculation
  let v = volume;

  // sorts the product by margin into the variable 'ordered'
  for (let i = 0; i < len; i++) {
    let max = { margin: 0 };
    let position = 0;
    for (let j = 0; j < unordered.length; j++) {
      if ((arr[j].margin * 100) > (max.margin * 100)) {
        max = arr[j];
        position = j;
      }
      if (j === unordered.length - 1) {
        unordered.splice(position, 1);
      }
    }
    ordered.unshift(max);
  }

  /* Products are ordered from lowest to highest in the variable 'ordered' */

  // Loop until weight limit is reached (checking highest margin to lowest):
  const wOptimized = [];
  const wOrdered = ordered.slice(); // copy of the array
  while (w >= 0) {
    // console.log(wOrdered[wOrdered.length - 1].margin * 100);
    w -= wOrdered[wOrdered.length - 1].margin * 100;
    wOptimized.push(wOrdered[wOrdered.length - 1]);
    wOrdered.pop();
  }
  console.log('\nWeight Optimized\n');
  console.log(wOptimized); // Gives us the most margin value for the weight restriction

  // Loop until volume limit is reached (checking from highest margin to lowest):
  const vOptimized = [];
  const vOrdered = ordered.slice(); // copy of the array
  while (v >= 0) {
    // console.log(vOrdered[vOrdered.length - 1]);
    if (vOrdered.length <= 0) break;

    if (v - vOrdered[vOrdered.length - 1].volume >= 0) {
      vOptimized.push(vOrdered[vOrdered.length - 1]);
      v -= vOrdered[vOrdered.length - 1].volume;
    }
    vOrdered.pop();
  }

  console.log('\nVolume Optimized\n');
  console.log(vOptimized);
}

shipIt(products, 2, 13);
