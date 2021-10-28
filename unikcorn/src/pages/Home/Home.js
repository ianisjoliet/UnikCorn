import React from 'react';
import './Home.css'

function Home() {
  return (
    <div className="home_section" id="home">
      <div className="home_container">
        <div className="home_background">
          <div className="home_unicorn">Future Image Licorne</div>
          <div className="home_story">
            <a className="home_logo">UnikCornLogo</a>
            <div className="home_details container">
              <div className="home_heading">
                <p>Build a new world with a UnikCorn🦄</p>
              </div>
              <div className="home_paragraph">
                <p>
                  Welcome in a near future, where everything has been destroy by a Human.
                  Join our UnikCorn🦄  community where everyone (each of us) will have an impact to re-build a better world
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Home
