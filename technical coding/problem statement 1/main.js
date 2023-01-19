//Technical Coding Assessment 1
//Method 1


var n = 1234,
rev = 0
do {
  rev = (rev*10) + (n%10)
} while (n = Math.trunc(n/10))

console.log(rev, "result of method 1")

//code by Rafik Maniyar




//method 2


let input = prompt("Pls enter an input", "1234");
    let output = 0;
    let size = input.length;
    
    document.getElementById("input").innerHTML = input;

    if (input > 0 && input != null) {
      for (i = 0; i < size; i++) {
        output = output * 10 + (input % 10);
        input = Math.floor(input / 10);
      }
      console.log(output,"result of method 2");
      document.getElementById("output").innerHTML = output;
    }
//code by Rafik Maniyar
