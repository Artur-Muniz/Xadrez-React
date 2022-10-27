import React from 'react'
import Logo from '../../../img/logo.svg'
import triangulo from '../../../img/triangulo.svg'
import './style.css'

function LoginArea () {
  return (
      <section class="login-area">
        <img class='triangulo1' src={triangulo}/>
        <img class='triangulo2' src={triangulo}/>
        <div class="login">
                <img src={Logo} alt="LOGO"/>
        <form method="post">
            <input type="text" name="Nome" placeholder="Nome de Usuário" autofocus/>
            <input type="password" name="Senha" placeholder="Senha" autofocus/>
            <input type="submit" value="entrar"/>
        </form>
        <p>Ainda não tem sua conta? <a href="/Register">Criar conta</a></p>
        </div>
      </section>
    
  )
}

export default LoginArea