// Buzz Fizzs Question

for (let i = 1; i <= 100; i++) {

    if (i % 5 == 0 && i % 3 == 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}


//set boolean isPrime to false
let isPrime = false;
//number input
let number = 5;


//While the value of isPrime is false, the condition !isPrime inside '( )' is never true
while (!isPrime) {
    //increment number by 1 at start, so we can find next Prime number that is larger than the number we given
    number++;
    //2 is only prime number that is divided by 2
    if (number == 2) {
        console.log(number + " is Prime Number");
        isPrime = true;
    }
    //Running Prime number check
    else {
        //Negative, 0 and 1 is not prime number
        if (number > 1) {
            // let given number divide by all number that is less than itself
            for (let i = 2; i <= number - 1; i++) {
                
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
                //at end of loop, if number is still not dividable by 2, isPrime=true
                else if(number % i !== 0&& i == number-1) {
                    
                    isPrime = true;
                }
            }
        }
        //if isPrime is true, we can output the number
        if (isPrime) {
            console.log(number + " is Prime Number");
        }
    }
}



//question 3



  

let title = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let splitRows = title.split("\n");
//  console.log(splitRows);


for (let element of splitRows){
    let cell = element.split(",");
    console.log(cell[0],cell[1],cell[2],cell[3]);
}