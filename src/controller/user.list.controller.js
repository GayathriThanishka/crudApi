// add.user.controller.js
import UserListService from "../service/user.list.service.js";

const userListController = (req, res) => {
  UserListService((err, users) => {
    if (err) {
      console.error("Controller error:", err);
      return res.status(500).send("Internal Server Error");
    }
    res.json(users);
  });
};

export default userListController;

