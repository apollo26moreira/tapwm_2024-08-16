import logo from './logo.svg';
import './App.css';
import ListaProdutos from './componentes/ListaProdutos';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CadastroProduto from './componentes/CadastroProduto';

function App() {
 const [produtos, setprodutos] = useState([]);
  useEffect(()=>{
    carregaProdutos();
  }, []);



  function carregaProdutos(){
    axios.get('https://app-api-tapwm.onrender.com/api/produtos')
  .then(res=>{
  setprodutos(res.data);
  console.log(produtos);
  });
}
  return (
    <div>
      <h1> Lista de Produtos</h1>
      <ListaProdutos produtos={produtos}/>
      <CadastroProduto carregaProdutos={carregaProdutos}/>
    </div>
  );
} 

export default App;
