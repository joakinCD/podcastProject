async function getListadoPodcast() {
  return new Promise(function (resolve, reject) {
    var url =
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, {
      method: "GET",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status == 200) {
          resolve(response.json());
        } else {
          reject();
        }
      })
      .catch((error) => {
        console.error("Error getListadoPodcast -> ", error);
        reject(error);
      });
  });
}
async function getDatosPodcast(id) {
  return new Promise(function (resolve, reject) {
    let url =
      "https://itunes.apple.com/lookup?id=" +
      id +
      "&media=podcast&entity=podcastEpisode&limit=100";

    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status == 200) {
          resolve(response.json());
        } else {
          reject();
        }
      })
      .catch((error) => {
        console.error("Error getDatosPodcast -> ", error);
        reject(error);
      });
  });
}

export default { getListadoPodcast, getDatosPodcast };
