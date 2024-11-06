
document.getElementById('formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('nmb').value;
    const assunto = document.querySelector('input[name="assunto"]:checked')?.value || 'Não especificado';
    const mensagem = document.getElementById('mensagem').value;
    
    const mensagemFinal = `
        <h3>Seus dados enviados:</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
    `;
    
    document.getElementById('mensagem-usuario').innerHTML = mensagemFinal;
});

