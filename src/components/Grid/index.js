import React from "react"
import GridItem from "../GridItems"
import * as C from "./styles"

export default function Grid({ items, setItems }) {
  const onDelete = (ID) => {
    const newArray = items.filter((transaction) => transaction.id !== ID)
    setItems(newArray)
    localStorage.setItem("transactions", JSON.stringify(newArray))
  }

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={40}>Valor R$</C.Th>
          <C.Th width={10} alignCenter>
            Tipo
          </C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {items.map((items, index) => (
          <GridItem key={index} item={items} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  )
}
