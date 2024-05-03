import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Todolist from './todos';
import Product from './product';

function App() {
  return (
    <div className=" border border-2 border-info m-2 p-2">
      <h1>APP</h1>
      <div>
        <Counter></Counter>
      </div>
      <div>
        <Todolist></Todolist>
      </div>
      <div>
        <Product></Product>
      </div>
    </div>
  );
}

export default App;
