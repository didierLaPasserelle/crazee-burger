import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginForm() {
     // state
     const [inputValue, setInputValue] = useState("")
     const navigate = useNavigate()

     // comportements
 const handleSubmit = (event) => {
     event.preventDefault()
     //alert (`bonjour ${inputValue}`)
     setInputValue("")
     navigate(`order/${inputValue}`)
  }
 
 const handleChange = (event) => { 
     setInputValue(event.target.value)
   }

  return (
    <div>
        <h1>Bienvenue chez nous !!!</h1>
        <br />
        <h2>Connectez-vous</h2>
        <form action="submit" onSubmit={handleSubmit}>
            <input 
                value={inputValue} 
                onChange={handleChange} 
                type="text" 
                placeholder="Entrez votre nom..." 
                required
            />
            <button>Accédez à votre espace</button>
            <Link to="/order">Vers OrderPage</Link>

        </form>
    </div>
  )
}
