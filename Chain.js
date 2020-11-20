//const Constraint=Matter.Constraint;

class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10

        }
        this.constraint=Constraint.create(options);
        World.add(world,this.constraint);
    }
    display(){
        var pointA=this.constraint.bodyA.position;
        var pointB=this.constraint.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}