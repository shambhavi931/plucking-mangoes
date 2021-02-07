class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length : 10
        }

        this.pointB= pointB;
        this.throw= Constraint.create(options);   
    }
    fly(){
        this.throw.bodyA=null;
    }
    Launch(bodyA){
        this.throw.bodyA=bodyA;
    }
    display(){
        
    }
}