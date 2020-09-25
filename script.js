//constants
const my_consts = {
    g:1, //gravity
    friction: 0.99
}

///click event on box
window.onload = () => {
    const box = document.getElementById("box");
    box.onclick = start;
}
///delete the advice from screen
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
    const {g,friction} =  my_consts;
    
    const ang_transformed = (Math.PI/2)-ob.ang;    
    ob.v += (2*Math.cos(ang_transformed)*g)/ob.h;   ///acceleration equation
    ob.ang+= ob.v;  //acceleration
    
    ob.id.style.transform= "rotate("+ob.ang+"rad)";   ///apply rotation at css

    window.requestAnimationFrame( () => {rotation(ob)});    ////let the animation last forever
    ob.v*=friction;     ////aply friction
}
