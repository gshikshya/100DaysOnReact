import './App.css';

// import ConitionalRendering from './components/ConitionalRendering';
// import Rendering from './components/Rendering';
// import NameRendering from './components/NameRendering';
// import StyleSheet from './components/StyleSheet';
// import InlineStyle from './components/InlineStyle';

import './components/appStyle.css';
// import style from './components/appStyle.module.css';

import Hello from './Day1/Hello';

function App() {
  return (
    <div className='App'>
      <Hello />

      {/* <h1 className='error'>Error</h1>
<h1 className={style.success}>Success </h1>



 <ConitionalRendering> </ConitionalRendering>

 <Rendering></Rendering>

 <NameRendering/>

 <StyleSheet primary={true} ></StyleSheet>

 <InlineStyle></InlineStyle> */}
    </div>
  );
}

export default App;
