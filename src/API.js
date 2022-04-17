import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  LATEST_BASE_URL,
  TOP_RATED_BASE_URL,
  URL_BY_GENRES_BASE_URL,
  GENRES_BASE_URL,
  SELECTION_BASE_URL,
  API_URL,
  API_COMMENT_URL,
  API_REGISTER_URL,
  API_KEY,
  } from './config';
  
  const defaultConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  const apiSettings = {
    fetchMovies: async (searchTerm, page) => {
      const endpoint = searchTerm
        ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
        : `${POPULAR_BASE_URL}&page=${page}`;
      return await (await fetch(endpoint)).json();
    },
    fetchLatest: async () => {
      const latestEndpoint = `${LATEST_BASE_URL}`;
      console.log(latestEndpoint);
      return await (await fetch(latestEndpoint)).json();
    },
    fetchTopRated: async (page) => {
      const topRatedEndpoint = `${TOP_RATED_BASE_URL}&page=${page}`;
      return await (await fetch(topRatedEndpoint)).json();
    },
    fetchByGenres: async (selectedGenres, page) => {
      const byGenresEndpoint = `${URL_BY_GENRES_BASE_URL}&page=${page}&with_genres=${selectedGenres.map(genre => (genre.id))}`;
      return await (await fetch(byGenresEndpoint)).json();
    },
   
    fetchMovie: async movieId => {
      //console.log(`log from api; ${movieId}`)
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      return await (await fetch(endpoint)).json();
    },
    fetchCredits: async movieId => {
      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      return await (await fetch(creditsEndpoint)).json();
    },
    fetchGenres: async () => {
      const genresEndpoint = GENRES_BASE_URL;
      return await (await fetch(genresEndpoint)).json();
    },
    fetchSelection: async (selection, page) => {
      const selectionEndpoint = `${SELECTION_BASE_URL}${selection.map(genre => (genre.id))}&page=${page}`;
      return await (await fetch(selectionEndpoint)).json();
    },
    fetchComments: async (movieID)=>{
        const commentsEndpoint = `${API_COMMENT_URL}/${movieID}`
        console.log(commentsEndpoint);
      return await (await (await fetch(commentsEndpoint)).json());
    },
    postComment: async(data ,movieId)=>{

      console.log(`data from API ${JSON.stringify(data)}`);
      
      const postCommentsEndpoint = `${API_COMMENT_URL}/${movieId}`
      console.log(postCommentsEndpoint);
      const postComm =  await (await fetch(postCommentsEndpoint,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
        body: JSON.stringify(data)
      })
      );
        return postComm.text();
    },
    postRegister: async(data)=> {
      const registerEndPoint = `${API_REGISTER_URL}/register`
      const respond = await (await fetch(registerEndPoint, {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            
          },
        body: JSON.stringify(data)
      }))
      return respond.json();
    }
      

}

export default apiSettings;