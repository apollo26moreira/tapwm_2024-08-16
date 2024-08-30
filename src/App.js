import logo from './logo.svg';
import './App.css';
import ListaProdutos from './componentes/ListaProdutos';
import axios from 'axios';

let produtos = [];
axios.get('')
.then(res=>{
  produtos = res.data;
  console.log(produtos);
});

function App() {
  return (
    <div>
      <h1> Lista Produtos</h1>
      <ListaProdutos produtos={produtos}/>
    </div>
  );
} 

export default App;
