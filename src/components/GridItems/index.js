import React from "react"
import * as C from "./styles"

import { ArrowUp, ArrowDown, TrashSimple } from "phosphor-react"
export default function GridItem({ item, onDelete }) {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td alignCenter>
        {item.expense ? <ArrowDown color="red"></ArrowDown> : <ArrowUp color="green"></ArrowUp>}
      </C.Td>

      <C.Td alignCenter>
        <TrashSimple onClick={() => onDelete(item.id)}/>
      </C.Td>
    </C.Tr>
  )
}
