
import { Menu } from "./Menu";
import { useGameOver } from "../hooks/useGameOver";
import { Tetris } from "./Tetris";

export const Game = ( { rows, columns } ) => {

    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    const start = () => { 
        resetGameOver();
    };

    return (
        <div className="Game">
            {
                gameOver ? (<Menu  onClick={ start } />) : 
                ( <Tetris rows={ rows } columns={ columns } setGameOver={ setGameOver } /> )
                
            }
            
            {/* Rows {rows} Columns {columns}  */}
        </div>
    )

}