const { generateToken } = require("../shared/utils/jwt");
const { User } = require ("../shared/utils");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    try {
        const {username, email, password, documentNumber } = req.body;

        const existingUser = await User.findOne({ where:{email}});
        if (existingUser) {
            return res.status(400).json({
                message: "El usuario ya existe",
                timestamp: new Date().toISOString(),
                status: "error"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            documentNumber,
            isActive: true,
        });


        const token = generateToken({ userId: newUser.id, version: "v1"});

        res.status(201).json({
            message: "Usuario Registrado Exitosamente",
            timestamp: new Date().toISOString(),
            status: "success",
            token,
            user:{
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
            },
        });

    } catch (error) {
        console.error("Error en el Registro", error);
        res.status(500).json({
            message: "Error interno del servidor",
            timestamp: new Date().toISOString(),
            status: "error",
            error: error,
        });
    }
};

const login = async (req, res) => {
    try { 
        const {email,password} = req.body;

        const user = await User.findOne({
            where: {email, isActive: true},
        });

        const validatePassword = await bcrypt.compare(password, user.password);
        if (!user || !validatePassword) {
            return res.status(401).json({
                message: "Email o contraseña invalidos",
                status: "error",
            });
        }

        const tokenJWT = generateToken ({ userId: user.id, version: "v1"});

        res.json({
            status: "success",
            message: "Login Exitoso",
            timestamp: new Date().toISOString(),
            tokenJWT,
            user: {id: user.id, email: user.email, username: user.username},
        });
    } catch (error) {
        res.status(590).json({message: "Error Interno", status: "error"});
    }
};

module.exports = {
    login,
    register
};