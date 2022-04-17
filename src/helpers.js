export const isPersistedState = stateName => {
    const sessionState = sessionStorage.getItem(stateName);
    return sessionStorage && JSON.parse(sessionState);
  };
  export const isPersistedStateLocalStorage = stateName => {
    const localState = localStorage.getItem(stateName);
    return localStorage && JSON.parse(localState);
  };

  export const uniqueMovies = state =>{
   const key = 'title';
  return [...new Map(state.map(item =>
      [item[key], item])).values()];
    };
  export const checker = (arr, target) => target.every(v=>arr.includes(v));
    
    
 