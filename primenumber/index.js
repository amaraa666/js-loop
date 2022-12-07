let x = prompt("Ta 0-100 hoorond too oruulna uu?");
let strt = 2;
let primeNumber = true;
while(strt<x){
    if(x%strt==0){
        primeNumber = false;
    }
    strt++
    console.log(strt);
}
console.log(primeNumber);