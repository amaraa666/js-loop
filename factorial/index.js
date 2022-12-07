let x = prompt("Garaas utga oruulna uu?");
let i=1;
let result=1;
if(Number.isInteger(Number(x))==true){
    while(i<=x){
        result *=i;
        i++;
    }
    console.log(x +"!=" , result);
}else{
    console.log("zuv utga oruulna uu?")
}