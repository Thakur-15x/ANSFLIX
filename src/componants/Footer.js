import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Footer.css";
import logo from '../componants/logo/Logo2.png'
import fb from '../componants/fb/Logo3.png'
import twet from '../componants/twet/Logo4.png'
import insta from '../componants/insta/Logo5.png'
import you from '../componants/you/Logo6.png'
import app from '../componants/App/app.png'
import play from '../componants/Play/play.png'

function Footer() {
  const [movie, setTitle] = useState([]);
  const [movi, setTitl] = useState([]);
  const [move, setTital] = useState([]);
  const [mov, setTitil] = useState([]);
  const [moi, setTitel] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTreanding);
      setTitle(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    
      )
      return request;
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTreanding);
      setTitl(request.data.results[
        Math.floor(Math.random() * request.data.results.length )
      ]
      )
      return request;
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTreanding);
      setTital(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 2)
      ]
      )
      return request;
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTreanding);
      setTitil(request.data.results[
        Math.floor(Math.random() * request.data.results.length + 3)
      ]
      )
      return request;
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTreanding);
      setTitel(request.data.results[
        Math.floor(Math.random() * request.data.results.length + 1)
      ]
      )
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="tainer">
      <div style={{ borderTop: '1px solid gray', paddingBottom: '5px' }}></div>
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
              <li className="">
                <img src={you} alt="Youtube" />
              </li>
            </ul>
          </div>
          <div className="con">
            <h3 className="">TREANDING ON ANSFLIX</h3>
            <ul className="">
              <li className="">
                <a href="/" className="">
                {movie?.title || movie?.name || movie?.original_name}
                </a>
              </li>
              <li className="">
                <a href="/" className="">
                {movi?.title || movi?.name || movi?.original_name}
                </a>
              </li>
              <li className="">
                <a href="/" className="">
                {move?.title || move?.name || move?.original_name}
                </a>
              </li>
              <li className="">
                <a href="/" className="">
                {mov?.title || mov?.name || mov?.original_name}
                </a>
              </li>
              <li className="">
                <a href="/" className="">
                {moi?.title || moi?.name || moi?.original_name}
                </a>
              </li>
            </ul>
          </div>
          <div className="tin">
            <img src={logo} alt="logo" /><br />
            At ANSFLIX, we offer exclusive and premium stories.<br />
            Everything you want to watch, anytime, anywhere and as much.
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
