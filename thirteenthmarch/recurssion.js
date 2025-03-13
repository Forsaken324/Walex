// build a binary search algorithm in javascript to learn recursion.

// use this with the keydown event listener.

// the key attribute returns the key that was clicked.

// e.key.

// the isNaN function is used to check if an input is a number or not.

//  128 64 32 16 8 4 2 1 // These are used to calculate binary. This is called an octet. This is an 8-bit set known as a byte.
// a byte can represent any number between 0 and 255.


// fuck this shit keeps getting weird.

// infinit loop occurs when a while loop runs forever.

// it was all mind games, she did not remember you, it was the way she saw you when you looked at her, next time dont fall for it.

// The call stack is a collection of function calls stored in a stack structure. When you call a function, it is added to the top of the stack, and when it returns , it is removed from the top / end of the stack.

// implement a stack in javascript.


// recursion is when a function calls itself.

// see how he takes it step by step.

// today we are going to implement a binary search algorithm.

// a sorting algorithm.

// the String function converts a value into a string.

const data  = [1, 23, 32, 4, 2, 6, 0 , 199];

const sortArray = () => {
    for(let i = 0; i < data.length - 1; i++){
        for(let j = 0; j < data.length - 1 - i; j++){
            if (data[j] > data[j + 1]){
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
}

sortArray();
console.log(data);

beg = 0;
end = data.length - 1
target_var = 3

const binarySearch = (array, beg, end, target) => {

    if(beg > end) return -1;

    let mid = Math.floor((beg + end) / 2);
    if(array[mid] === target){
        return mid;
    }
    else if (array[mid] > target){
        end = mid - 1;
        return binarySearch(array, beg, end, target);
    }
    else if (array[mid] < target){
        beg = mid + 1;
        return binarySearch(array, beg, end, target);
    }
}

console.log(binarySearch(data, beg, end, target_var));

// The setTimeout function is used to set delay for a code to run

setTimeout(() => {
    console.log("This code is timed after 5 seconds")
}, 5000); // This function is asynchronous meaning it does not stop the flow of the code.

