import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import Button from '../Button'
import Input from '../Input'

export type UserFormString = {
  name: string
  username: string
}

const InicialValues: UserFormString = {
  name: '',
  username: '',
}

interface UserFormProps {
  handleSubmit: (user: UserFormString) => void
}

export default function UserForm({ handleSubmit }: UserFormProps) {
  const [form, setForm] = useState(InicialValues)
  
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof UserFormString
    setForm({ ...form, [name]: e.target.value })
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    handleSubmit(form)
    setForm(InicialValues)
  }

  return (
    <>
      <Input value={form.name} name='name' placeholder='Nombre' handleChange={handleChange} />
      <Input value={form.username} name='username' placeholder='Usuario' handleChange={handleChange} />
      <Button handleClick={handleClick}>Enviar</Button>
    </>
  )
}
