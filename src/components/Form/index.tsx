import React from "react"
import { Text } from "../Text"
import { List } from "../List"
import { Button } from "../Button"
import './style.css'

export function Form() {
  const lista = [
    "Valorant", 
    "Counter-Strike 2", 
    "League of Legends",
    "Fortnite",
    "Tom Clancy's Rainbow Six Siege"
  ]

  function handleSave(event: { preventDefault: () => void} ) {
    event.preventDefault()
    alert('Card criado com sucesso.')
  }

  return (
    <section className="form">
      <form onSubmit={handleSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Text 
          label="Nome" 
          placeholder="Digite seu nome" 
          required={true}
        />
        <Text 
          label="Cargo" 
          placeholder="Digite seu cargo"
          required={true}
        />
        <Text 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
        />
        <List 
          label="Time" 
          items={lista} 
          required={true}
        />
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
}