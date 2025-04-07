router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new UserModel({ name, email, password });

    try {
        await newUser.save();
        res.status(201).json({ message: "Usuário registrado com sucesso!" });
    } catch (error) {
        console.error("Erro ao registrar usuário:", error);
        res.status(500).json({ error: "Erro ao registrar usuário" });
    }
});