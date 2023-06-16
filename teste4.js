const data = require("./fakeData");
const validatePermissions = require("./middleware");

module.exports = function(req, res) {

  validatePermissions(req, res, () => {
    const { id } = req.query;

    const user = data.find((item) => item.id == id);

    if (user) {
      user.name = req.body.name;
      user.job = req.body.job;
      res.send(user);
    } else {
      res.status(404).send("User not found");
    }
  });
};
