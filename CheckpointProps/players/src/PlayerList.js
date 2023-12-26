import PlayersData from './Player';
import Player1 from './Player1';



const PlayerList = () => {
return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {PlayersData.map((pl)=>(
        <Player1 P= {pl.age}  {...pl} />))}
    </div>
);

}
export default PlayerList;