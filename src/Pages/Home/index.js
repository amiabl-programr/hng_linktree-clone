import React from 'react';


import profile_img from "../../assets/profile-img.jpg";
import slack_icon from "../../assets/slack-icon.svg";
import github_icon from "../../assets/github-icon.svg";
import share_icon from "../../assets/share-btn.svg";

import Footer from "../../Components/Footer";

import './index.css';
import { Link } from 'react-router-dom';

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
                    <Link to={"contact/"} className="grid">Contact me</Link>

                    <div className='icons'>
                        <span>
                            <img src={slack_icon} alt="slack_icon" />
                        </span>
                        <span>
                            <img src={github_icon} alt="github_icon" />
                        </span>
                    </div>
                </div>


                <Footer />
            </main>
        </>
    )
}

export default Home;
