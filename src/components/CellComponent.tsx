import type { FC } from "react"
import type { Cell } from "../modules/Cell"

interface CellProps{
  cell: Cell;
  selected:boolean;
}

const CellComponent:FC<CellProps>=({cell , selected}) =>{
  return (
    <div className={['cell',cell.color, selected ? 'selected':''].join(' ')}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
    </div>
  )
}

export default CellComponent