
import llamadasPodcast from '../funcionalidades/llamadasPodcast'
import { xml2js } from 'xml-js';
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
  cargarDatosPodcast(){
    let thisPodcast = this
    return new Promise(function(resolve, reject) {
       llamadasPodcast.getDatosPodcast(thisPodcast.id).then(async function(result){
          console.log("result",result)
          let contents= await JSON.parse(result.contents)
          console.log("contents",contents)
          let url = contents.results[0].feedUrl
           fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
              
            })
              .then(async response => {
                  let respuesta = await response.json()
                  console.log("respuesta",respuesta)
                  console.log("respuesta.contents",respuesta.contents)
                  const json = xml2js(respuesta.contents, { spaces: 50 });

                  console.log('json',json);

              })
              .catch((error) => {
                  console.error('Error getDatosPodcast -> ',error);
                  reject(error);
              })
          resolve(contents);
       },function(err){
          console.log('Error cargarDatosPodcast -> '+err);
          reject(err);
       })
    });
  }
} 