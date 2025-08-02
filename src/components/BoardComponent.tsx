import type{ FC } from 'react';
import type { Board } from "../modules/Board"
import React, { useState } from 'react';
import CellComponent from './CellComponent';
import { Cell } from '../modules/Cell';

interface BoardProps{
  board: Board;
  setBoard:(board: Board)=>void;
}

const BoardComponent:FC<BoardProps> = ({board , setBoard})=> {
  const [selectedCell,setSelectedCell] = useState<Cell | null>(null);
  return (
    <div className='board'>
      {board.cells.map((row,index)=>
      <React.Fragment key={index}>
        {row.map(cell=>
          <CellComponent 
          cell={cell}
          key={cell.id}
          selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}/>
        )}
      </React.Fragment>)}
    </div>
  )
}

export default BoardComponent