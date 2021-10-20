import React from "react";
import "./Footer.css";
import logo from '../componants/logo/Logo2.png'
import fb from '../componants/fb/Logo3.jpg'
import twet from '../componants/twet/Logo4.jpg'
import insta from '../componants/insta/Logo5.jpg'
import app from '../componants/App/app.png'
import play from '../componants/Play/play.png'

function Footer() {
  return (
    <div className="tainer">
        <hr />
      <footer>
        <div className="container">
          <div className="con">
            <h3 className="">COMPANY</h3>
            <ul className="">
              <li className="">
                <a href="/" className="">
                  About US
                </a>
              </li>
              <li className="">
                <a href="/" className="">
                  Contact US
                </a>
              </li>
              <li className="">
                <a href="/" className="">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="con">
            <h3 className="">LEGAL</h3>
            <ul className="">
              <li className="">
                <a href="/" className="">
                  Privacy
                </a>
              </li>
              <li className="">
                <a href="/" className="">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="con">
            <h3 className="">CONNECT</h3>
            <ul className="">
              <li className="">
                <img src={fb} alt="facebook" />
              </li>
              <li className="">
                <img src={insta} alt="instagram" />
              </li>
              <li className="">
                <img src={twet} alt="tweeter" />
              </li>
            </ul>
          </div>
          <div className="con">
            <h3 className="">TREANDING ON ANSFLIX</h3>
            <ul className="">
            <li className="">
                <a href="/" className="">
                  Venom : Let There Be Carnage
                </a>
              </li>
              <li className="">
                <a href="/" className="">
                  Snake Eyes
                </a>
              </li>
              
              <li className="">
                <a href="/" className="">
                  F9
                </a>
              </li>
              <li className="">
                <a href="/" className="">
                  Dune
                </a>
              </li>
              <li className="">
                <a href="/" className="">
                  Free Guy
                </a>
              </li>
            </ul>
          </div>
          <div className="tin">
            <img src={logo} alt="logo" />
            <pre>
              At ANSFLIX, we offer exclusive and premium stories.
            </pre>
            <pre>Everything you want to watch, anytime, anywhere and as much.</pre>
            <h5 id='foot'>&copy; 2021 www.ANSFLIX.com : All rights Reserved </h5> 
            <img id="img" src={app} alt="app" />
            <img id="img" src={play} alt="play" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
