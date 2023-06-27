import { useBoard } from "../hooks/useBoard";
import { Board } from "./Board";
import "./Tetris.css";


export const Tetris = ({rows, columns, setGameover }) => {
    
    const [board, setBoard] = useBoard( {  rows, columns } );


    return (
        <Board board={ board } />
    )
    
}

