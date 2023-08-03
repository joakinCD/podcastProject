

export default class Podcast{
  id=0
  titulo=""
  imagen= ''
  autor=''
  descripcion=''
  episodios=[]
  constructor(obj) {
    this.id=obj.id || ''
    this.titulo=obj.titulo || ''
    this.imagen=obj.imagen || ''
    this.autor=obj.autor || ''
    this.descripcion=obj.descripcion || ''
    this.episodios=obj.episodios || []
  }
} 