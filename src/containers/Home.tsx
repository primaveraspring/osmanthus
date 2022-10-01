import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <h1>Sudachi</h1>
      <div className="card">
        <Link to="/genki1">Genki 1</Link>
        {' | '}
        <Link to="/jfbp1">Japanese for Busy People 1</Link>
      </div>
    </div>
  );
}

export default Home;
