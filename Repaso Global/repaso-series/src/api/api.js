const formatSerieItem = seriesItem => {
  const image = seriesItem.show.image === null ? "https://via.placeholder.com/210x295/ffffff/666666/?text=TV" : seriesItem.show.image.medium;
  return {
    name: seriesItem.show.name,
    id: seriesItem.show.id,
    image: image
  };
};

const getDataFromApi = searchText => {
  return fetch(`http://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(response => response.json())
    .then(series => series.map(formatSerieItem));
};

//  Hago un fetch con la API y el texto que voy a buscar. Denomino "series" a los datos, que mapeo para que me devuelva el name, el id, y la imagen, a los que denomino de fomra simple.
// Además, establezco en un ternario que si la imagen está vacía me pinte una imagen por defecto o me pinte la imagen medium.

export default getDataFromApi;
