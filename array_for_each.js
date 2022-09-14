let student = ["spongebob", "patrick","squidward", "sumit"];

student.forEach(captalize);
student.forEach(print);

function captalize(element, index, array) {

    array[index] = element[0].toUpperCase() + element.substring(1);
    
}

function print(x) {
    console.log(x);
}

// console.log(element);