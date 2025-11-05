const register = async (req, res) => {
    
}

const login = async (req, res) => {
    try { 
        res.json({
            message: "Login Success",
            status: "success"
        });
    } catch (error) {
        res.status(500).json(
            {
                message: "Error Interno", 
                status: "error", error: error
            }
        );
    }
};

module.exports = {
    login,
    register
};