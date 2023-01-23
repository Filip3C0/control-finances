import React from "react"
import { ArrowCircleDown, ArrowCircleUp, Wallet } from "phosphor-react"
import {
  H1,
  H2,
  Container,
  AmountContainers,
  AmountDesc,
  ContainerItems,
} from "./styles"

function Header({ income, expense, total }) {
  return (
    <Container>
      <H1>Dashboard</H1>

      <ContainerItems>
        <AmountContainers>
          <AmountDesc>
            Total
            <H2>{total}</H2>
          </AmountDesc>
          <Wallet
            size={45}
            color="white"
            style={{
              background: "#35018c",
              marginTop: 25,
              padding: 10,
              borderRadius: 25,
            }}
          />
        </AmountContainers>

        <AmountContainers>
          <AmountDesc>
            Entradas
            <H2>{income}</H2>
          </AmountDesc>
          <ArrowCircleUp
            size={45}
            color="white"
            style={{
              background: "#00C278",
              marginTop: 25,
              padding: 10,
              borderRadius: 25,
            }}
          />
        </AmountContainers>

        <AmountContainers>
          <AmountDesc>
            Saidas
            <H2>{expense}</H2>
          </AmountDesc>
          <ArrowCircleDown
            size={45}
            color="#fff"
            style={{
              background: "#EB3637",
              marginTop: 25,
              padding: 10,
              borderRadius: 25,
            }}
          />
        </AmountContainers>
      </ContainerItems>
    </Container>
  )
}

export default Header
