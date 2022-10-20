import React from 'react'
import './style.css'
import Logo from "../../../img/logo.svg"

function RegisterArea() {
  return (
    <section class="registration-area">
        <div class="registration">
                <img src={Logo} alt="LOGO"/>
        <form method="post" id='formRegister'>
            <input type="email" name="Email" placeholder="Email" autofocus/>
            <input type="text" name="Nome" placeholder="Nome de Usuário" autofocus/>
            <input type="password" name="Senha" placeholder="Senha" autofocus/>
            <input type="password" name="Repetir a Senha" placeholder="Repetir a Senha" autofocus/>
            <input type="submit" value="entrar"/>
        </form>
        <p>Ja possui conta? <a href="/Login">Acesse sua conta</a></p>
        </div>
    </section>
  )
}

export default RegisterArea