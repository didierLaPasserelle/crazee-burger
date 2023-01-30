import { useState } from "react"

export default function LoginPage() {
    // state
    const [inputValue, setInputValue] = useState("")

    // comportements
const handleSubmit = (event) => {
    event.preventDefault()
    alert (`bonjour ${inputValue}`)
    setInputValue("")
 }

const handleChange = (event) => { 
    setInputValue(event.target.value)
  }

    // render

  return (
    <div>
        <h1>Bienvenue chez nous</h1>
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
        </form>
    </div>
  )
}

/* 
Pour la collecte des données, on met en place un useState que l'on projette sur l'affichage via l'attribut value. C'est la synchro descendante.
Ensuite la synchro ascendante en gérant le changement
*/