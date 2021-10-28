import React from 'react';
import './Footer.css'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";

function Footer() {
  return (
    <div className="footer_section" id="footer">
      <div className="footer_grid">
        <div className="column-section">
          <div className="footer_container">
            <div className="team-heading">UnikCorn Team</div>
            <div className="team-wrapper">
              <div className="team-block">
                <div className='team-image-border'>
                  <img src="images/cat.png" loading="lazy" alt="" className="team-image" />
                </div>
                <div className="pseudo">
                  <text cla>Nearyuk</text>
                </div>
                <div className="description">Developer</div>
              </div>
              <div className="team-block">
                <div className='team-image-border'>
                  <img src="images/cat.png" loading="lazy" alt="" className="team-image" />
                </div>
                <div className="pseudo">
                  <text cla>slash4u</text>
                </div>
                <div className="description">Artist</div>
              </div>
              <div className="team-block">
              <div className='team-image-border'>
                  <img src="images/cat.png" loading="lazy" alt="" className="team-image" />
                </div>
                <div className="pseudo">
                  <text cla>Hely</text>
                </div>
                <div className="description">Marketing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
