const data = require("./fakeData");

module.exports = function(req, res) {
  const { name } = req.query;

  let count = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].name === name) {
      count++;
    }
  }

  res.send(`Usuário ${name} foi lido ${count} vezes.`);
};
