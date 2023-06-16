const data = require("./fakeData");

module.exports = function(req, res) {
  const { name } = req.query;

  let count = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].name === name) {
      count = data[i].searchCount || 0;
      data[i].searchCount = count + 1;
      break;
    }
  }

  res.send(`Usuário ${name} foi lido ${count} vez(es).`);
};
