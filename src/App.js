
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
 
  let todos= [
    {
      Sno: 1,
      title: "Go to the market",
      desc: "You have to go to the market to get this job done"

    },
    {
      Sno: 2,
      title: "Go to the mall",
      desc: "You have to go to the market to get this job done2"

    },
    {
      Sno: 3,
      title: "Go to the shop",
      desc: "You have to go to the market to get this job done3"

    }

  ]

  
  return (
   <>
  <Header title = "My Todos List" searchBar = {false}/>
  <Todos todo = {todos}/>
  <Footer/>
   </>
  );
}

export default App;
