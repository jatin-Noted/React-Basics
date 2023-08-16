import './App.css';

import Products from './Components/Products/Products';

import NewProduct from './Components/NewProduct/NewProduct';


function App() {

  const products = [
    {
      id: "p1",
      title: "Nirma",
      amount: 100,
      date: new Date(2021, 8, 10)
    },
    {
      id: "p2",
      title: "Surf Excel",
      amount: 200,
      date: new Date(2021, 2, 2)
    },
    {
      id: "p3",
      title: "Tide",
      amount: 130,
      date: new Date(2021, 12, 28)
    },
    {
      id: "p4",
      title: "Arial",
      amount: 450,
      date: new Date(2021, 5, 5)
    }
  ];
  return (

    <div className='App'>
      
      <Products items = {products}></Products>

      <NewProduct></NewProduct>

    </div>


  );
}

export default App;
