//const Constraint=Matter.Constraint;

class Chain{
    constructor(bodyA,bodyB, pointB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:pointB,
            stiffness:1.0,
            length:300

        }
        this.constraint=Constraint.create(options);
        World.add(world,this.constraint);
    }
    display(){
        var pointA=this.constraint.bodyA.position;
        var pointBx=this.constraint.bodyB.position.x+this.constraint.pointB.x;
        var pointBy=this.constraint.bodyB.position.y+this.constraint.pointB.y;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointBx,pointBy);
    }
}