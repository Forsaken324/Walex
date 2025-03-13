// this linear search algorithm will return the first occurence of a value
const linearSearch = (array, target) => {
    for(let i = 0; i < array.length; i++){
        if (array[i] === target){
            return i;
        }
    }
    return -1;
}



// this other algorithm will return all occurence of value

const findAllOccurence = (array, target) => {
    const indexes = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] == target){
            indexes.push(i);
        }
    }
    if(indexes.length){
        return indexes;
    }
    return -1;
}

