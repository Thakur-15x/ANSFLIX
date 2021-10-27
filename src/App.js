import React from 'react';
import './App.css';
import Banner from './componants/Banner';
import Footer from './componants/Footer';
import MoviesRow from './componants/Movies_Row';
import Navbar from './componants/Navbar';
import requests from './requests';

function App(props) {
  // const [Loading, setLoading] = useState(true)
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <MoviesRow title="TREANDING NOW" fetchUrl={requests.fetchTreanding}/>
      <MoviesRow title="Popular Movies" fetchUrl={requests.fetchPopular}/>
      <MoviesRow title="TopRated Movies" fetchUrl={requests.fetchTopRated}/>
      <MoviesRow title="Action Movies" fetchUrl={requests.fetchAction}/>
      <MoviesRow title="Comedy Movies" fetchUrl={requests.fetchComedy}/>
      <MoviesRow title="Horrar Movies" fetchUrl={requests.fetchHorrar}/>
      <MoviesRow title="Romance Movies" fetchUrl={requests.fetchRomance}/>
      {/* <Movies_Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries}/> */}
      {/* <Movies_Row title="Web-Show" fetchUrl={requests.fetchWeb}/> */}
      <Footer/>
      
    </div>
      
  );
}

export default App;
