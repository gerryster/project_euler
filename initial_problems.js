
// Problem 1:
var three_and_five = function(n) {
  var sum = 0;
  for(var i = 0; i < n; i++) {
    if(i%3==0 || i%5==0)
    {
      sum+=i;
    }

  }
  return sum;
};

console.log("sum of three and five below 1000: " + three_and_five(1000));

// Problem 2:
var fib = function(nth) {
  var nextFib = function(previous, nth) {
    if(nth <= 1) return 1;
    return nextFib(previous , nth - 1) + nextFib(previous, nth - 2);
  }

  return nextFib(0, nth);
};

console.log("the fib(1) is: " + fib(1));
console.log("the fib(2) is: " + fib(2));
console.log("the fib(3) is: " + fib(3));
console.log("the fib(4) is: " + fib(4));
console.log("the fib(5) is: " + fib(5));
console.log("the fib(6) is: " + fib(6));

var sum_even_fib = function(n){
  var sum = 0;
    var i =1;
  while(true)
  {
    var f = fib(i);

    if(f > n)
      return sum;

    if(f%2===0){
      sum+=f;
    }

    i=i+1;
  }

  return sum;
}

console.log("the sum of fib under is " + sum_even_fib(20));
console.log("the sum of fib under is " + sum_even_fib(1000));
console.log("the sum of fib under is " + sum_even_fib(4000000));

// Problem 3:
var nPrimes = function(nth) {
  var initial = 3
  var result = [2];


  return result;
}

var largestFactor = function(n) {
  var factor = Math.round(n / 2);
  while((n % factor !== 0) && factor !== largestFactor(factor)) {
    factor--;
  }
  return factor;
}

console.log("largestFactor(3): " + largestFactor(3));
console.log("largestFactor(10): " + largestFactor(10));
console.log("largestFactor(13195): " + largestFactor(13195));
