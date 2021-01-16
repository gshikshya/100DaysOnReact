import './App.css';

// import ConitionalRendering from './components/ConitionalRendering';
// import Rendering from './components/Rendering';
// import NameRendering from './components/NameRendering';
// import StyleSheet from './components/StyleSheet';
// import InlineStyle from './components/InlineStyle';

import './components/appStyle.css';
import Class from './Day1/Class';
import Greet from './Day1/Greet';
// import style from './components/appStyle.module.css';

import Hello from './Day1/Hello';
import Hello1 from './Day1/Hello1';
import PropsInFunction from './Day1/PropsInFunction';

function App() {
  return (
    <div className='App'>
      <Hello />
      <Hello1 />
      <Class />
      <Greet />
      <PropsInFunction fname='Shikshya'>
        <p>Sandhya</p>
      </PropsInFunction>

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
