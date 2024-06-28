export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "f3b9d18db7msh8955b2c2a4dd921p174dafjsn4c0d9396da90",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9649619860msh5df97cb7475fb51p144047jsn631f25f59e48',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async ( url, options) => {
    
    const response = await fetch(url, options);
    const data = await response.json();

    return data;

}
