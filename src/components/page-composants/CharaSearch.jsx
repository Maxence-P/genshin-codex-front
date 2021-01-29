import Navigation from '../sous-composants/Navbar';
import Footer from '../sous-composants/Footer';
import { useEffect, useState } from 'react';
import SearchResult from '../sous-composants/SearchResult';

const CharaSearch = (props) => {
 
  const [results, setResults] = useState();

  useEffect(() => {
    const search = props.match.params.search;

    fetch(`http://localhost:8000/search/${search}`)
    .then(res => res.json())
    .then(res => { 
      setResults(res.results);
    })
  }, [props.match.params.search])

  return (
    <>
      <Navigation />
      <SearchResult test={results} />
      <Footer />
    </>
  )
}

export default CharaSearch;