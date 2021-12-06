class SlingShot{
    constructor(bodyA,pointB){ //son los parametros del cuerpoA y el puntoB(que esta fijo)
        var options = {
            bodyA: bodyA,
            pointB: pointB,//el cuerpo B va estar conectado con el A por medio de la cadena
            stiffness: 0.08,//rigidez que va tener la liga 
            length: 10//es el largo de la liga 
        }
        this.pointB = pointB;
         this.Sling = Constraint.create(options);//se crea la cadena para el cuerpo restringido
         World.add(world,this.Sling);
    }
     fly(){ //para que se suelte el ave 
         this.Sling.bodyA = null;
     }
    display(){
        if(this.Sling.bodyA){ //la liga de la resortera tiene agarrado al ave 
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3)// es el grosor de la liga 
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
        //se dibuja la linea entre bird1 y constraiedLog
    }
}