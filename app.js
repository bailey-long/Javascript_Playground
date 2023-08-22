function getRandomNumberInRange(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function rolluntill20(){
  let count = 0;
  let num = 0;
  for(let i = count; i < 100; i ++){
    if (num != 20){
      console.log(num);
      count++;
      num = getRandomNumberInRange(1,20);
    } else {
      return  console.log(i);
    }
  }
}

//console.log(rolluntill20());

function findBigNumber(arr){
  let big = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > big){
      big = arr[i];
    }
  }
  return big;
};
console.log(findBigNumber([1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));