import './App.css';
import Row from './components/Row';
import request from './requests/request';
import Banner from './components/Banner';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row isLarge title="Netflix Original" fetchUrl={request.fetchNetflixOg} />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
