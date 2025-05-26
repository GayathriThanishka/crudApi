import updateUserService from "../service/update.user.service.js";

const updateUserController = (req, res) => {
  const { userid, name, age } = req.body;

 

  updateUserService(userid, name, age, (err, result) => {
    if (err) {
      console.error("Update error:", err);
      return res.status(500).send("Internal Server Error");
    }
    res.status(200).json({ message: "User updated successfully", result });
  });
};

export default updateUserController;
