async function getListadoPodcast(){
  return new Promise(function(resolve, reject) {
    var url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, {
      method: 'GET',

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      
    })
      .then(response => {
          if (response.status == 200) {
              resolve(response.json());
          }else{
              reject();
          }
      })
      .catch((error) => {
          console.error('Error getListadoPodcast -> ',error);
          reject(error);
      })
    });
}


export default {getListadoPodcast};
