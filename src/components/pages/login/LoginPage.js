import { useState } from "react"
import LoginForm from "./LoginForm"

export default function LoginPage() {


  return (
    <LoginForm />
  )
}

/* 
Pour la collecte des données, on met en place un useState que l'on projette sur l'affichage via l'attribut value. C'est la synchro descendante.
Ensuite la synchro ascendante en gérant le changement
*/