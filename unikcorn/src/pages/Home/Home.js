import React from 'react';
import './Home.css'

function Home() {
    return (
        <div className="home_section" id="home">
            <div className="home_container">
                <div className="home_background">
                  <div className="home_unicorn">Future Image Licorne</div>
                  <div className="home_story">
                    <a className="home_title">UnikCorn</a>
                    <div className="home_description">
                      <p>Première description du site</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Home
