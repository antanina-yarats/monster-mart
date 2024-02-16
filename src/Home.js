
import { useState } from 'react';
import { data } from './data';
import Creatures from './Creatures';
import Buttons from './Buttons';



function Home() {

  const[monsters, setMonsters] = useState(data);
  

  return (
    <div>
    <div className='cont'>
      <h1 className="hFont">Choose your monster</h1>
    </div>
    <Buttons setMonstersBridge={setMonsters} dataBridge={data}/>
    <Creatures bridge={monsters}/>
   
    </div>
  )
}

export default Home;
