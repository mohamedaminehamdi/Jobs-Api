const getAllJobs = async (req, res) => {
    res.register('get all jobs');
};  
const getJob = async (req, res) => {
    res.login('get Job');
}
const createJob = async (req, res) => {
    res.register('create jobs');
};  
const updateJob = async (req, res) => {
    res.login('update Job');
}
const deleteJob = async (req, res) => {
    res.login('delete Job');
}
module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
};