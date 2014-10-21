
three_and_five = function(n) {
  var sum = 0;
  for(var i = 0; i < n; i++) {
    if(i%3==0 || i%5==0)
    {
      sum+=i;
    }

  }
  return sum;
}

console.log("sum of three and five below 1000: " + three_and_five(1000));
