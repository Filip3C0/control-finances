import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import { toast } from "react-toastify"
import { TextField } from "@mui/material"

import { Container, FormInput, InputContent, Button } from "./styles"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import Grid from "../Grid"

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    purple: {
      main: "#35018C",
    },
  },
})

function Form({ handleAdd, transactionsList, setTransactionsList }) {
  const [desc, setDesc] = useState("")
  const [amount, setAmount] = useState("")
  const [isExpense, setExpense] = useState(false)

  const generateId = uuidv4()

  const handleSave = () => {
    if (!desc || !amount) {
      toast.error("Informe a descrição e o valor!", {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      return
    } else if (amount < 1) {
      toast.error("O valor tem que ser positivo", {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    } else {
      toast.success("Adicionado com sucesso!! ", {
        theme: "light",
        autoClose: 3000,
      })
    }

    const transaction = {
      id: generateId,
      desc: desc,
      amount: amount,
      expense: isExpense,
    }

    handleAdd(transaction)

    setDesc("")
    setAmount("")
  }

  return (
    <>
      <Container>
        <FormInput>
          <InputContent>
            <ThemeProvider theme={theme}>
              <TextField
                label="Digite a descrição"
                variant="standard"
                color="purple"
                type="text"
                id="out"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}

              />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <TextField
                label="Digite um valor"
                variant="standard"
                color="purple"
                value={amount}
                id="entrence"
                type="number"
                onChange={(e) => setAmount(e.target.value)}
              />
            </ThemeProvider>
          </InputContent>

          <div>
            <input
              type="radio"
              id="rIncome"
              defaultChecked
              onChange={() => setExpense(!isExpense)}
              name="group1"
            />
            <label htmlFor="rIncome">Entrada</label>
            <input
              type="radio"
              id="rExpense"
              name="group1"
              onChange={() => setExpense(!isExpense)}
            />
            <label htmlFor="rExpense">Saida</label>
          </div>

          <Button onClick={handleSave}>Adicionar</Button>
        </FormInput>
      </Container>

      <Grid items={transactionsList} setItems={setTransactionsList} />
    </>
  )
}

export default Form
