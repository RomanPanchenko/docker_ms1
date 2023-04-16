const getUser = async (req, res) => {
  return res.status(200).send({ name: 'User', age: '22' });
};

module.exports = {
  getUser,
};