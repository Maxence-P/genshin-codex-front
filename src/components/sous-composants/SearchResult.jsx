import '../../styles/SearchResult.css';

const API_URL = process.env.REACT_APP_API_URL;

const SearchResult = ({test}) => {

  return (
    <section className="results-outline under">
      {test.map((item, index) => (
        <div className="result-card under" key={index}>
          <img src={`${API_URL}/${item.src}`} alt={item.alt} className="under" />
          <span className="result-name under">{item.name}</span>
      </div>
      ))}
    </section>
  )
}

export default SearchResult;