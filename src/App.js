import logo from './logo.svg';
import './App.css';
import HeaderLeft from './Header/HeaderLeft';
import HeaderRight from './Header/HeaderRight';
import MainLeft from './Main/MainLeft';
import MainRight from './Main/MainRight';
import FooterLeft from './Footer/FooterLeft';
import FooterRight from './Footer/FooterRight';

function App() {
  return (

    <div className="App">
      <div className='HeaderLeftRight'>
        <HeaderLeft />
        <HeaderRight />
      </div>
      <div className='Main'>
        <MainLeft />
        <MainRight />
      </div>
      <div className='Footer'>
        <FooterLeft />
        <FooterRight />
      </div>
    </div>
  );
}

export default App;
