
import llamadasPodcast from '../funcionalidades/llamadasPodcast'
import Episodio from './Episodio'
export default class Podcast{
  id=0
  titulo=""
  imagen= ''
  autor=''
  descripcion=''
  episodios=[]
  totalEpisodios=0
  constructor(obj) {
    this.id=obj.id || ''
    this.titulo=obj.titulo || ''
    this.imagen=obj.imagen || ''
    this.autor=obj.autor || ''
    this.descripcion=obj.descripcion || ''
    this.episodios=obj.episodios || []
    this.totalEpisodios=obj.totalEpisodios || 0
  }
  cargarDatosPodcast(){
    let thisPodcast = this
    return new Promise(function(resolve, reject) {
       llamadasPodcast.getDatosPodcast(thisPodcast.id).then(async function(result){
          console.log("result",result)
          let contents= await JSON.parse(result.contents)
          console.log("contents",contents)
          let informacion=contents.results.shift()
          thisPodcast.totalEpisodios=informacion.trackCount || 0
          let listadoEpisodios =[]
          contents.results.map(function(item,index){
            let episodio=new Episodio({
              id:item.trackId,
              titulo:item.trackName,
              descripcion:item.description,
              fecha:item.releaseDate,
              duracion:item.trackTimeMillis,
              urlAudio:item.episodeUrl
            })
            listadoEpisodios.push(episodio)
          })
          thisPodcast.episodios=listadoEpisodios
          resolve(thisPodcast);
       },function(err){
          console.log('Error cargarDatosPodcast -> '+err);
          reject(err);
       })
    });
  }
} 