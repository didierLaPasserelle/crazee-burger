import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'



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
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !!!</h1>
        <br />
        <h2 className = "bonbon">Connectez-vous</h2>
            <input 
                value={inputValue} 
                onChange={handleChange} 
                type="text" 
                placeholder="Entrez votre nom..." 
                required
            />
            <button>Accédez à votre espace</button>
            <Link to="/order">Vers OrderPage</Link>
        </LoginFormStyled>
    </div>
  )
}

const LoginFormStyled = styled.div`
    background: green;
`


/* 
méthodes pour ajouter du style à un composant :
1. inline style
2. object style
3. modules CSS (avec className)
4. global style (index.css)
*/ 

/* 
Styled-components
--> éviter le style collision 'CSS, Sass)
--> conserver nested styling 'Sass)
*/

