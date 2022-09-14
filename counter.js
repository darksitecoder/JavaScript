let count = 0;


document.getElementById("decreaseBtn").onliclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onliclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onliclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}