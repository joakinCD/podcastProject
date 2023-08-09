export default class Episodio{
  id=0
  titulo=""
  descripcion=''
  fecha=''
  duracion=0
  urlAudio=''
  constructor(obj) {
    this.id=obj.id || ''
    this.titulo=obj.titulo || ''
    this.descripcion=obj.descripcion || ''
    this.fecha=this.obtenerFecha(obj.fecha)
    this.duracion=this.obtenerDuracion(obj.duracion || 0)
    this.urlAudio=obj.urlAudio || ''
  }
  obtenerDuracion(milisegundos){
    let segundos=milisegundos/1000
    let minutos= Math.trunc(segundos/60)
    let restoSegundos = '0'+Math.trunc(segundos%60)
    return minutos+':'+restoSegundos.substr(-2)
  }
  obtenerFecha(release){
    let fecha = new Date(release)
    let anio = fecha.getFullYear();
    let mes  = "0" + (fecha.getMonth()+1);
    let dia = "0" + fecha.getDate();
    return dia.substr(-2)+'/'+mes.substr(-2)+'/'+anio
  }
} 