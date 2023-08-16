import './App.css';

import Item from './Components/Item/Item'

import ItemDate from './Components/ItemDate/ItemDate';

import Card from './Components/Cards/Card';

function App() {

  const response = [
    {
      itemName: "Nirma",
      itemdate: "20",
      itemMonth: "June",
      itemYear: "2000"
    },
    {
      itemName: "Fena",
      itemdate: "21",
      itemMonth: "July",
      itemYear: "2001"
    },
    {
      itemName: "SurfExcel",
      itemdate: "22",
      itemMonth: "August",
      itemYear: "2002"
    }
  ];
  return (

    <div>
      <Card>
        <Item name={response[0].itemName}>
          Kya Custom HTML ke andar ka content Print hota hai...???
          Ans: props.children ko call karo inside componet file
        </Item>
        <ItemDate day={response[0].itemdate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

        <Item name={response[1].itemName}></Item>
        <ItemDate day={response[1].itemdate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
        
        <Item name={response[2].itemName}></Item>
        <ItemDate day={response[2].itemdate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>



        <div className="App">
          Hello React, I am Jatin Singh
        </div>
      </Card>

      {/* <Item></Item>
      <ItemDate></ItemDate>

      <Item></Item>
      <ItemDate></ItemDate>
      
      <Item></Item>
      <ItemDate></ItemDate> */}
      
      
      {/* <Item name="Nirma"></Item>
      <ItemDate day="21" month="5" year="2000"></ItemDate>

      <Item name="SurfExcel"></Item>
      <ItemDate day="22" month="6" year="2001"></ItemDate>
      
      <Item name="55Soap"></Item>
      <ItemDate day="23" month="7" year="2002"></ItemDate> */}


      {/* <Item name={response[0].itemName}>
        Kya Custom HTML ke andar ka content Print hota hai...???
        Ans: props.children ko call karo inside componet file
      </Item>
      <ItemDate day={response[0].itemdate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemdate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
      
      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemdate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>



      <div className="App">
        Hello React, I am Jatin Singh
      </div> */}

    </div>

  );
}

export default App;
