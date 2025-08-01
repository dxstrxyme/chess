import type { FC } from "react"
import type { Cell } from "../modules/Cell"

interface CellProps{
  cell: Cell
}

const CellComponent:FC<CellProps>=({cell}) =>{
  return (
    <div className={['cell',cell.color].join(' ')}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
    </div>
  )
}

export default CellComponent