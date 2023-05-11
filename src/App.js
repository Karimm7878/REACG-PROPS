import './App.css';

import Pro from './Profile/Proo'
import img from './karimmmmmm.jpg'

function App() {
  const handelAlert = () => {
    alert("ENA KARIM");
  };
 
  

  return (
    <div className="App">

     <Pro  name={"Karim Marwani"}
          bio={"Une fois abonnés, ils sont susceptibles de continuer à vous suivre pendant longtemps mais il est important de rédiger de bonnes légendes pour vos posts Instagram. "}
          img={img}
          profession={"student in fullstack web js"}
          handelAlert={handelAlert}
          
     
     
     
     />
      
    </div>
  );
}

export default App;
