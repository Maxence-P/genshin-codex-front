import Navigation from '../sous-composants/Navbar';
import Footer from '../sous-composants/Footer';

const CharaSelect = (props) => {

  console.log(props.match.params.selector);

  return (
    <>
      <Navigation />
      <Footer />
    </>
  )
}

export default CharaSelect;