import { Link } from 'react-router-dom';

function Creatures ({bridge}) {
  return (
    <div className='products'>
      {bridge.map((element)=> {
        const{id, name, searchTerm, image} = element;

        return (
          <div key={id} className="product-card">

             <div>

              <Link to={`/${element.title}`}>
              <img src={image} width="200px" height="200px" alt="monster"/>
              </Link>

             </div>

             <div className="product-info">
              <p className="boldName">{name}</p>

              <div className="termBox">
                {searchTerm.map((term)=> (
                 <div key={term} className="termStyle">
                  {term}
                 </div>
                ))}
              </div>
             
             </div>

          </div>
        )
      })}

    </div>
  )
}

export default Creatures;