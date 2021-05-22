import s from './App.modue.scss';
import Header from './components/blocks/header/Header';
import Main from "./components/blocks/main/Main";
import Photosession from "./components/blocks/photosession/Photosession";
import Ratingg from "./components/rating/Ratingg";
import Package from "./components/blocks/package/Package";
import Photographer from "./components/blocks/photographer/Photographer";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Main />
      <Photosession />
      <Ratingg />
      <Package />
      <Photographer />
    </div>
  );
}

export default App;
