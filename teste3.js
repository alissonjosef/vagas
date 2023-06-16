const data = require("./fakeData");
const validatePermissions = require("./middleware");

module.exports = function (req, res) {
  validatePermissions(req, res, () => {
    const { name } = req.query;

    let deleted = false;

    for (let i = 0; i < data.length; i++) {
      if (data[i] && data[i].name === name) {
        data[i] = null;
        deleted = true;
        break;
      }
    }

    if (deleted) {
      res.send("success");
    } else {
      res.status(404).send("User not found");
    }
  });
};
