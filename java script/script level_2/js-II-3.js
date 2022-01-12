console.log("Js.-II-3")

let min=(a,b)=>{
    if(a>b){
    return b +" B is a minimum value"}
    else if(a==b){
        return a +" A equal to  B"
    }
    else{
        return a +" A is a minimum value"
    }
}
let r=Number(prompt("Enter the A value"))
let y=Number(prompt("Enter the B value"))

console.log("Value of A: "+ r)
console.log("Value of B: "+y)
console.log(min(r,y))
alert(min(r,y))
