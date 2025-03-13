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