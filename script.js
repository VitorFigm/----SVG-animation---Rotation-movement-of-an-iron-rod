//constants
const g =1;
const t = 1;
const atr = 0.99;

///click event on box
window.onload = function(){
    let box = document.getElementById("box");
    box.onclick = start;
}
function start(){
    let advice = document.getElementById("advice");
    advice.style.animation = "none"
    advice.style.opacity = "0%";
    var beam = new movingOb(document.getElementById("beam"),421);
}
//Calss to rotate an element
class movingOb{
    constructor(ob,h){
        this.ang = Math.PI/180;
        this.id = ob;
        this.v=0;
        this.h = h;
        rotation(this);
    }
}
function rotation(ob){
    let ang_transformed = Math.PI/2-ob.ang;
    ob.v += (2*Math.cos(ang_transformed)*g)/ob.h;
    ob.ang+= ob.v;
    
    ob.id.style.transform= "rotate("+ob.ang+"rad)";
    console.log(ob.id.style.transform);
    window.requestAnimationFrame(function(){rotation(ob)});
    ob.v*=atr;
}
