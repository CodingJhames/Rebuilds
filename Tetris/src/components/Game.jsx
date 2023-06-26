import { Menu } from "./Menu";

export const Game = ( { rows, columns } ) => {

    const start = () => { console.log("start") };

    return (
        <div className="Game">
            <Menu  onClick={ start } />
            {/* Rows {rows} Columns {columns}  */}
        </div>

        
    )

}