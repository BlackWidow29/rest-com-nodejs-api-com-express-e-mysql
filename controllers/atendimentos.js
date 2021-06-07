module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos'));

    app.post('/atendimentos', (req, res) => res.send('Você está na rota de atendimento e está realizando um POST'))
}