console.log("Js.-II-5")

let a,b

do{
     a= prompt("Enter value less than 4")
     b=Number(a)
     switch(b){
        case 0:
            alert("0")
            console.log(a+" The value is equal to Zero")
        break;
        case 1:
            alert("1")
            console.log(a+" The value is equal to One")
        break;
        case 2:
        case 3:
            alert("2,3")
            console.log(a+" The value is equal to 2 and 3")
            break;
    }}
while((a>=4))


