import React from 'react';


import profile_img from "../../assets/profile-img.jpg";
import Zuri_logo from "../../assets/Zuri.Internship_Logo.svg";
import I4G_Logo from "../../assets/I4G.svg";
import slack_icon from "../../assets/slack-icon.svg";
import github_icon from "../../assets/github-icon.svg";
import share_icon from "../../assets/share-btn.svg";

import './index.css';

function Home() {
    return (
        <>
            <main>

                <div className='profile'>
                    <div className='profile__img-container'>
                        <img src={profile_img} id="profile__img" alt="profile-image" />
                        <span id='twitter'>vicayo_oluwa</span>
                        <span id='slack'>vicayo</span>
                    </div>

                    <div className='tooltip__container'>
                        <div className="tooltip">
                            <img src={share_icon} alt="" />
                            <span className="tooltiptext"> Share Link</span>
                        </div>
                    </div>
                </div>

                <div className='grids'>
                    <a href="https://twitter.com/vicayo_oluwa" target="_blank" rel='noopener noreferrer' id="" className='grid'>Twitter Link</a>
                    <a href="https://training.zuri.team/" target="_blank" rel='noopener noreferrer' id="btn__zuri" className='grid'>Zuri Team</a>
                    <a href="http://books.zuri.team" target="_blank" title='find books about design and coding here' rel='noopener noreferrer' id="books" className='grid'>Zuri Books</a>
                    <a href="https://books.zuri.team/python-for-beginners?ref_id=victoroluwayemi" target="_blank" rel='noopener noreferrer' id="book__python" className='grid'>Python Books</a>
                    <a href="https://background.zuri.team" target="_blank" rel='noopener noreferrer' id="pitch" className='grid'>Background Check for Coders</a>
                    <a href="https://books.zuri.team/design-rules" target="_blank" rel='noopener noreferrer' id="book__design" className='grid'>Design Books</a>

                    <div className='icons'>
                        <span>
                            <img src={slack_icon} alt="slack_icon" />
                        </span>
                        <span>
                            <img src={github_icon} alt="github_icon" />
                        </span>
                    </div>
                </div>


                <footer>
                    <div>
                        <img src={Zuri_logo} alt="Zuri_logo" />
                    </div>
                    <p>HNG Internship 9 Frontend Task</p>
                    <div>
                        <img src={I4G_Logo} alt="I4G_Logo" />
                    </div>
                </footer>
            </main>
        </>
    )
}

export default Home;
