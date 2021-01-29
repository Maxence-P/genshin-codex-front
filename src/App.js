import './App.css';
import { Switch, Route } from 'react-router-dom';
import Accueil from './components/page-composants/Accueil';
import CharaSelect from './components/page-composants/CharaSelect';
import CharaSearch from './components/page-composants/CharaSearch';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/Characters/:selector" component={CharaSelect} />
        <Route path="/Search/:search" component={CharaSearch} />
      </Switch>
    </div>
  );
}

export default App;
