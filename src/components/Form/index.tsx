import React from "react"
import { Text } from "../Text"
import { List } from "../List"
import './style.css'

export function Form() {
  const lista = ["Valorant", "Counter-Strike", "Pubg"]

  return (
    <section className="form">
      <form action="">
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Text label="Nome" placeholder="Digite seu nome" />
        <Text label="Cargo" placeholder="Digite seu cargo" />
        <Text label="Imagem" placeholder="Digite o endereço da imagem" />
        <List label="Time" items={lista} />
      </form>
    </section>
  )
}