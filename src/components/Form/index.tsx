import React, { useState } from "react"
import { Text } from "../Text"
import { List } from "../List"
import { Button } from "../Button"
import './style.css'

interface FormProps {
  handleSubmit: any
  squadList: string[]
}

export function Form({handleSubmit, squadList}: FormProps) {
  const [name, setName] = useState('')
  const [office, setOffice] = useState('')
  const [image, setImage] = useState('')
  const [squad, setSquad] = useState('')

  function handleSave(event: { preventDefault: () => void} ) {
    event.preventDefault()
    alert('Card criado com sucesso.')
    
    setImage('')
    setName('')
    setOffice('')
    setSquad('Valorant')

    handleSubmit({
      name,
      office,
      image,
      squad
    })
  }

  return (
    <section className="form">
      <form onSubmit={handleSave}>
        <h2>Preencha os dados para criar o card do jogador</h2>
        <Text
          inputValue={name} 
          handleChange={(value: string) => setName(value)}
          label="Nome completo" 
          placeholder="Digite seu nome" 
          required={true}
        />
        <Text
          inputValue={office}
          handleChange={(value: string) => setOffice(value)}
          label="Função" 
          placeholder="Digite sua função"
          required={true}
        />
        <Text 
          inputValue={image}
          handleChange={(value: string) => setImage(value)}
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
        />
        <List 
          label="Time" 
          items={squadList} 
          required={true}
          selectValue={squad}
          handleChange={(value: string) => setSquad(value)}
        />
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
}