import React, { useState } from 'react';

const LoginForm = () => {
  // Estados para armazenar o e-mail, senha e a mensagem de resultado
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Função para lidar com a tentativa de login
  const handleLogin = () => {
    // Verifica se o e-mail e senha são iguais ao esperado
    if (email === 'gustavo.dev@pucpr.br' && password === 'senhaforte') {
      setMessage('Acessado com sucesso!');
    } else {
      setMessage('Usuário ou senha incorretos!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        {/* Input para o e-mail */}
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        {/* Input para a senha */}
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        {/* Botão para tentar login */}
        <button onClick={handleLogin}>Acessar</button>
      </div>
      <div>
        {/* Label para mostrar a mensagem de resultado */}
        <label>{message}</label>
      </div>
    </div>
  );
};

export default LoginForm;
