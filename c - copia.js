class auto{
    constructor(color,marca,velocidad){
    this.c=color
    this.m=marca
    this.v=null
    }
    info(){
        document.write(this.c + "<br>")
        document.write(this.m + "<br>")
        document.write(this.v + "<br>")
        document.write(this.a + "<br>")
    }
    set setVelocidad(newv){
        this.v=newv
    }
    get getMarca(){
        return this.m
    }
}
class grúa extends auto{
    constructor(color,marca,velocidad,altura){
    super(color,marca,velocidad)
    this.a=altura
}
}

const grande = new auto("verde","ford","lento")
const mediano = new auto("rojo","reno","rápido")
const chico = new auto("verde","ford","rápido")
const muyGrande = new grúa("amarillo","audi","muy lento","5m")
grande.setVelocidad=5
grande.info()
document.write(chico.getMarca)



