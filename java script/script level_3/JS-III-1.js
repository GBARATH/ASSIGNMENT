
class Car{
    constructor(describe,accelerate,motion="is not moving"){

        this.brand=describe
        this.speed=accelerate
        
        this.motion=motion
    }
 

Status(){
    
    console.log(this.brand+" running at "+this.speed+"km/h; status check:The car "+this.motion)
   document.getElementById("count").innerHTML=this.brand+" running at "+this.speed+"km/h; status check:The car "+this.motion
}
Speed( ){
    this.speed=this.speed+20
    this.motion="is moving"
   this.Status()

}
brake(){
    this.speed=this.speed-20
if(this.speed<1){
    this.motion="has stopped"
    this.speed=0
}
this.Status()
}
Stop(){
    this.speed=0
    this.motion=" has stopped"
    this.Status()
    
}
Createown(){
    this.motion="is moving"
    if(this.speed<1){
        this.motion="has stopped"}
}
}

create=()=>{

    x=String(prompt("Enter the brand"))
    y=Number(prompt("Enter the Speed"))
    let Car2=new Car(x,y)
    Car2.Createown()
   

    Car2.Status()
}


let Car1=new Car("ford ",0)


/*
Car1.Status();  Car1.Speed(50)
Car1.Status();  Car1.Speed(100)*/

Car1.Status();   




