function sumDiv() {
  n = prompt("Enter the number:");
  arr = [];
  sum = 0;
  for (let i = 0; i < n; i++) {
    x = parseInt(prompt(`Enter the ${i}th element:`));
    sum = sum + x;
    arr.push(x);
    // console.log(sum);
  }
//   console.log(sum);
  if (sum % 3 == 0 && sum % 11 == 0) {
    document.write("The array is divisible");
  }
  document.write("<br>" + arr);
  oddEven(arr, n);
}

function oddEven(arr, n) {
  odd = [];
  even = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    }
    if (arr[i] % 2 != 0) {
      odd.push(arr[i]);
    }
  }
  document.write("<br>" + "odd: " + odd);
  document.write("<br>" + "even: " + even);
  staticArray();
}

function staticArray() {
  arr = [1, 2, "hello world", { hello: "world"}, 3, {"Total": 8}];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    function hello() {
        console.log("Hello");
    }
    hello()
  }
}
