import Age from "./componet/Age";
import Book from "./componet/Book";
import By from "./componet/By";
import HelloWorld from "./componet/HelloWorld";
import Hochu from "./componet/Hochu";
import Lenght from "./componet/Lenght";
import Sing from "./componet/Sing";
import Swich from "./componet/Swich1";
import Water from "./componet/Water";
import Year from "./componet/Year";


function App() {
  return (
    <div className="App">
    <HelloWorld />
    <By />
    <Hochu v= "more" />
    <Hochu v= "kosmost" />
    <Book name= 'World' autor= 'Charlis  Darvin' />
    <Sing sing= 'Mirbek' write= 'Toktogul Satulganpv'  />
    <Lenght string= "Example string" />
    <Lenght string= "Hello World" />
    <Age year={1989} />
    <Age year={1900} />
    <Year age={21} />
   <Swich on={false} />
   <Swich on={true} />
   <Water c ={-1} />
   <Water c ={10} />
   <Water c ={102} />

    </div> 
  );
}

export default App;
