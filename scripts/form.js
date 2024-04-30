document.getElementById('signup').addEventListener('submit', (ev) => {
  ev.preventDefault();

  const { 
    name: { value: name },
    email: { value: email },
    password: { value: password },
  } = ev.currentTarget;

  alert([
    `Olá ${name}!`,
    `Estamos criando sua conta. Por favor aguarde infinitamente...\n`,
    `É importante dizer que em nenhum momento temos acesso a:\n`,
    `Sua SENHA que é: ${password}`,
    `Muito menos seu E-MAIL: ${email} 😁👍`,
  ].join('\n'));
})