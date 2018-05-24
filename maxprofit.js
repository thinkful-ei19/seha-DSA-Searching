'use strict';

let sharePrices= [128, 97, 121, 123, 98, 97, 105];


function findMax(array){
  let lowestSharePrice=array[0];
  let maxProfit = array[1] - lowestSharePrice;

  for(let i=1; i < array[1]; i++){
    if(array[i] < lowestSharePrice){
      lowestSharePrice =array[i];
    }
    if(maxProfit < array[i] - lowestSharePrice){
      maxProfit=array[i] - lowestSharePrice;
    }
  }
  return maxProfit;

}
console.log(findMax(sharePrices));