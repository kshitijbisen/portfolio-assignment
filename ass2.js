//Task 1
function t1(arr) {
    let newarr = arr.map((ele) => {
        return ele * ele * ele;
    })
    return newarr;
}

//Task 2
function t2(arr) {
    let newarr = arr.reduce(sum);
    return newarr;
}
function sum(total, val) {
    return total + val
}

//Task 3
function isprime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
function t3(arr) {
    let newarr = arr.filter(isprime);
    return newarr;
}

//Task 4
function t4(arr) {
    let newarr = arr.filter(isodd).map((ele) => {
        return ele * ele;
    })
    return newarr.reduce(avg) / newarr.length;

}
function avg(total, num) {
    return total + num;
}
function isodd(num) {
    return num % 2 == 1;
}
function sum(total, val) {
    return total + val
}

//task 5
function t5(arr) {
    let newarr = arr.map((str) => {
        return str.length;
    })

    let len = newarr.reduce(maxlen);

    let ans = arr.filter((str) => {
        return str.length == len;
    }
    )
    return ans;
}
function maxlen(max, num) {
    return max = num > max ? num : max;
}

//task 6
function t5(arr) {
    arr = arr.split(" ");
    let newarr=arr.map((ele)=>{
        return ele.charAt(0).toUpperCase()+ele.slice(1);
    })
    return newarr.join(' ');

}

//task 7
function t7(arr){
    let newarr=arr.filter((ele)=>{
        return ele.marks>=60;
    })
    return newarr;
}
//task 8
function createInstanceCounter(){
    let count=0;
    return function(){
        ++count;
        return count;
    }
}
//task 9

function(num1,num2,operation){

}

//task 10
function t10(arr){
    let total=0;
    arr.forEach(ele => {
        total+=ele.marks;
    });
    return total;
}
