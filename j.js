class celulares {
    constructor(color,peso,rPantalla,rCámara,ram){
        this.color=color
        this.peso=peso
        this.rp=rPantalla
        this.rc=rCámara
        this.ram=ram
        this.estado=false
        this.info=this.color
    }
    prender(){
        if(this.estado==false){
            alert(`Encendiendo el teléfono`)
            this.estado=true
        }
        else{
            alert(`El teléfono ya está encendido`)
        }
    }
    apagar(){
        if(this.estado==true){
            alert(`Encendiendo el teléfono`)
            this.estado=false
        }
        else{
            alert(`El teléfono ya está apagado`)
        }1
    }
    infor(){
    document.write(this.info)
    }
}
const cel1= new celulares("verde","299","1080","39","3")
const cel2= new celulares("azul","200","720","20","6")
b=1
cel1.infor()
