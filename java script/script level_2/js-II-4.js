console.log("Js.-II-4")

let browser="Edge"
let user=String(prompt("Enter the browser name"))
if(browser==user){
    alert("You got the Edge")
}
else if(("Chrome"==user)||("Firefox"==user)||("Safari"==user)||("Opera"==user)){
    alert("Okay we support this browser too.")
}
else{
    alert("We hope that this page looks ok!")
}
//console.log(("Chrome"==user)||("Firefox"==user)||("Safari"==user)||("Opera"==user))
console.log(user)