import React, {useState} from 'react';
import './App.css';
import Banner from './componants/Banner';
import Footer from './componants/Footer';
import MoviesRow from './componants/Movies_Row';
import Navbar from './componants/Navbar';
import Spinner from './componants/Spinner';
import requests from './requests';

function App(props) {
  const [loading, setloading] = useState(false)
  setTimeout(() => {
    setloading(true);
    
  },5000);

  return (
    <>
    {loading ?
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
      <MoviesRow title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries}/>
      <Footer/>
    </div> : <Spinner/>}
    </>
   
    
   
      
  );
  
 }

export default App;
