import React, { useEffect, useRef, useState } from 'react';
import {  Header, Wrapper, GenreList, Genre, DropDownList, ListWrapper } from './DropDown.styles';
import API from '../../API';


const DropDown =({ title, multiSelect, setSelectedGenres })=> {
  const [open, setOpen] = useState(false);
  const [state, setState]= useState([]);
  const [genres, setGenres] = useState([]);
  const toggle = () => setOpen(!open);
  
  const fetchGenres = async () => {
    try {
      const genres = await API.fetchGenres();
      setGenres(genres);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchGenres();
  })
 
  useEffect(()=>{
      setSelectedGenres(state);
  },[setSelectedGenres, state])

 

  function handleOnClick(item) {
  
    if (!state.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setState([item]);
      } else if (multiSelect) {
        setState([...state, item]);
      }
    } else {
      let selectionAfterRemoval = state;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setState([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (state.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <Wrapper className="dd-wrapper">
      <GenreList>{state && state.map(genre=>(
      <Genre className='wtf' onClick={() => handleOnClick(genre)} key={genre.id}>{genre.name} </Genre>
    ))}</GenreList>
      <Header
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">{title}</p>
        </div>
        <div className="dd-header__action">
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </Header>
      {open && (
        <ListWrapper className="dd-list">
          {genres.genres.map(item => (
            <li  key={item.id}>
              <button  onClick={() => handleOnClick(item)}>
                <span>{item.name}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ListWrapper>
      )}
    </Wrapper>
  );
}

export default DropDown