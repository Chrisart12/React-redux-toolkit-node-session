// import { useState } from 'react'

import Title from './Components/Title';
import NavBar  from './Components/Nav/NavBar';


function App() {

  const title = "Nous sommes sur la page d'accueil"

const handleClick =() => {
  alert("Vous avez cliquez sur le bouton")
}

const showTitle = true

  return (
    <div>
      <NavBar />
      <div>
        <Title title={title} showTitle={showTitle} />
        <button className='btn btn-info'  type="button" onClick={handleClick}>Cliquer</button>
      </div>
    </div>
  )
}

export default App
