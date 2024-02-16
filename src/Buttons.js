

function Buttons({setMonstersBridge, dataBridge}) {



    const filteredMonsters = (buttonWord) => {
        const newArray = dataBridge.filter(item => item.searchTerm.includes(buttonWord));
        setMonstersBridge(newArray);
    }

   return (
    <div className="cont">
        <button className="change"onClick={()=>setMonstersBridge(dataBridge)}>Show all</button>
        <button className="change"onClick={()=>filteredMonsters("award winner")}>Award winner</button>
        <button className="change"onClick={()=>filteredMonsters("angry")}>Angry</button>
        <button className="change"onClick={()=>filteredMonsters("funny")}>Funny</button>
        <button className="change"onClick={()=>filteredMonsters("sad")}>Sad</button>
        <button className="change"onClick={()=>filteredMonsters("indifferent")}>Indifferent</button>
        <button className="change"onClick={()=>filteredMonsters("charismatic")}>Charismatic</button>
    </div>
   )
}

export default Buttons;