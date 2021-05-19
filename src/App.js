import s from './App.modue.scss';
import Header from './components/blocks/header/Header';
import Main from "./components/blocks/main/Main";
import Photosession from "./components/blocks/photosession/Photosession";
import Ratingg from "./components/rating/Ratingg";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Main />
      <Photosession />
      <Ratingg />
    </div>
  );
}

export default App;
