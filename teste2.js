const data = require("./fakeData");

module.exports = function(req, res) {
  const { name, job } = req.body;

  const newUser = {
    name: name,
    job: job,
  };

  data.push(newUser);

  res.send(newUser);
};