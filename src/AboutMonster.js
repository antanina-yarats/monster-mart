import { useParams, useNavigate } from 'react-router-dom';
import { data } from './data';


function AboutMonster() {
    const navigate = useNavigate();
    const {title} = useParams();

    return (
        <div className="card">
            {data.filter(item => item.title === title).map((elem, index)=> {
                return (
                    <div className="cardContent" key={index}>
                     <h1>{elem.name}</h1>
                     <img src={elem.image} alt="monsterCard" width="200px"/>
                     <p>{elem.par}</p>
                     <button className="backButton" onClick={()=>navigate(-1)}>Go back</button>
                    </div>
                )
            })}
        </div>
    )
}

export default AboutMonster;