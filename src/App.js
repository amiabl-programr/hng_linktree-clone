import React from 'react';


import profile_img from "./assets/profile-img.jpg";
import Zuri_logo from "./assets/Zuri.Internship_Logo.svg";
import I4G_Logo from "./assets/I4G.svg";
import './App.css';

function App() {
  return (
    <>
      <main>

        <div className='profile__img-container'>
          <img src={profile_img} id="profile__img" alt="profile-image" />
          <span>Annette Black</span>
        </div>

        <div className='grids'>
          <div className='grid'>Twitter Link</div>
          <div className='grid'>Zuri Team</div>
          <div className='grid'>Zuri Books</div>
          <div className='grid'>Python Books</div>
          <div className='grid'>Background Check for Coders</div>
          <div className='grid'>Design Books</div>
        </div>
        <footer>
          <div>
            <img src={Zuri_logo} alt="" />
          </div>
          <p>HNG Internship 9 Frontend Task</p>
          <div>
            <img src={I4G_Logo} alt="" />
            <img src="." alt="" />njk
          </div>
        </footer>
      </main>
    </>
  )
}

export default App;
