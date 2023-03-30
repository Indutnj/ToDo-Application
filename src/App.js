import './App.css';
 /* import component */
/*import TextComponent from './Components/TextComponent';*/
import TodoComponent from './Components/TodoComponent';
function App() {
  return (
    <div className="App">
      {/* show component */}
     {/*<TextComponent firstName="Indu" lastName="Rajan" age={25}/>
     <TextComponent firstName="Indu" lastName={null} age={22} />*/}
     <TodoComponent/>
    </div>
  );
}

export default App;
