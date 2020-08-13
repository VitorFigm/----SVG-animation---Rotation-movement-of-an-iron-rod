//constants
const g =1; //gravity
const friction = 0.99;

///click event on box
window.onload = function(){
    const box = document.getElementById("box");
    box.onclick = start;
}
function start(){
    const advice = document.getElementById("advice");
    advice.style.animation = "none"
    advice.style.opacity = "0%";
    const beam = new movingOb(document.getElementById("beam"),421);
}
//Class to rotate an element
class movingOb{
    constructor(ob,h){
        this.ang = Math.PI/180; //angle of the object
        this.id = ob;  ///element reference
        this.v=0;    ///velocity
        this.h = h;   ///height of object
        rotation(this);
    }
}
function rotation(ob){
    let ang_transformed = (Math.PI/2)-ob.ang;    
    ob.v += (2*Math.cos(ang_transformed)*g)/ob.h;   ///velocity equation
    ob.ang+= ob.v;  //acceleration
    
    ob.id.style.transform= "rotate("+ob.ang+"rad)";   ///apply rotation at css

    window.requestAnimationFrame(function(){rotation(ob)});    ////let the animation last forever
    ob.v*=friction;     ////aply
}
