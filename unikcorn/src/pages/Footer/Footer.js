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
                <img src="images/cat.png" loading="lazy" alt="" className="team-image" />
                <div className="pseudo">
                  <text cla>Nearyuk</text>
                </div>
                <div className="description">Developer</div>
              </div>
              <div className="team-block">
                <img src="images/cat.png" loading="lazy" alt="" className="team-image" />
                <div className="pseudo">
                  <text cla>slash4u</text>
                </div>
                <div className="team-description">Artist</div>
              </div>
              <div className="team-block">
                <img src="images/cat.png" loading="lazy" alt="" className="team-image" />
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

//<div className="footer_section" id="footer">
 //           <div className="footer_containers">
  //              <div className="footer_title">TEAM</div>
 //               <div className="footer_team">
 //                   <div className="footer_img"></div>
 //                   <div className="footer_desc"></div>
 //               </div>
 //           </div>
 //       </div>