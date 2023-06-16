const data = require("./fakeData");

const getUser = (req, res, next) => {
  const { name } = req.query;
  const user = data.find((item) => item.name === name);
  
  if (user) {
    res.send(user);
  } else {
    res.status(404).send("User not found");
  }
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers
};