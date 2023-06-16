const permissions = require("./permissions");

const validatePermissions = (req, res, next) => {
  const currentUser = req.user;

  if (
    req.path === "/users" &&
    req.method === "DELETE" &&
    !permissions.canDeleteUser
  ) {
    return res
      .status(403)
      .send("Você não tem permissão para deletar usuários.");
  }

  if (
    req.path === "/users" &&
    req.method === "PUT" &&
    !permissions.canUpdateUser
  ) {
    return res
      .status(403)
      .send("Você não tem permissão para atualizar usuários.");
  }

  next();
};

module.exports = validatePermissions;
