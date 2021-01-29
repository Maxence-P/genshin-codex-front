import Navigation from '../sous-composants/Navbar';
import Footer from '../sous-composants/Footer';

const Accueil = (props) => {

  return (
    <>
      <Navigation search={props.search} handleSearch={props.handleSearch} setSearch={props.setSearch} />
      <Footer />
    </>
  )
}

export default Accueil;