const register = async (req, res) => {
    res.register('register');
};  
const login = async (req, res) => {
    res.login('login');
}
module.exports = {
    register,
    login
};