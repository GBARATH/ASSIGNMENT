let x=Number( prompt("Enter the x "))
let n=Number(prompt("Enter the n "))

let pow=(x,n)=>{

    return Math.pow(x,n);

}

let power= pow(x,n)
console.log(power)
document.getElementById("pow").innerHTML="The power of "+ x +" :"+ power;
