class chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bird1.body,
            bodyB: constraiedLog.body,//el cuerpo B va estar conectado con el A por medio de la cadena
            stiffness: 0.08,//rigidez que va tener la liga 
            length: 10//es el largo de la liga 
        }
         this.chain = Constraint.create(options);//se crea la cadena para el cuerpo restringido
         World.add(world,this.chain);
    }
    display(){
        strokeWeight(3)// es el grosor de la liga 
        line(bird1.body.position.x, bird1.body.position.y, constraiedLog.body.position.x, constraiedLog.body.position.y)
        //se dibuja la linea entre bird1 y constraiedLog
    }
}