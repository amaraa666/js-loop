let x = prompt("garaas 1-10 hoorond utga oruulna uu?");
let y = x;
let i=0 , j=0 , star="*" , zai=" ";
while(i < x){
    while(j < y){
        zai  = zai + " "
        j++
    }
    y = y-1;
    j = 0;
    console.log(zai +star);
    zai = " ";
    star += "**";
    i++;
}


