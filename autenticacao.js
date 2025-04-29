function autenticarUsuario(email, senha) { 
    if (email === "aluno@exemplo.com" && senha === "senha123") { 
        return "Login bem-sucedido"; 
    } 
    return "Erro no loging"; } 

    module.exports = { autenticarUsuario };