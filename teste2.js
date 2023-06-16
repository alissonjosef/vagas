const data = require("./fakeData");

let lastId = data.length > 0 ? data[data.length - 1].id : 0;

module.exports = function(req, res) {
  const { name, job } = req.body;

  const newUser = {
    id: ++lastId,
    name: name,
    job: job,
  };

  data.push(newUser);

  res.send({
    ...newUser,
    lastId: lastId,
  });
};
