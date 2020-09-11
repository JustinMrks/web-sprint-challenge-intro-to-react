import React, { useEffect, useState }from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import PageChange from './components/PageChange'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [page, setPage] = useState(8)
  const [characters, setCharacters] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(charData => {
      setTotalPages(charData.data.info.pages)
      setCharacters(charData.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [page])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
      <PageChange page={page} setPage={setPage} totalPages={totalPages}/>
      {characters.map((char) => {
        return <Character charData={char} />
      })}
      <PageChange page={page} setPage={setPage} totalPages={totalPages}/>
    </div>
  );
}

export default App;
