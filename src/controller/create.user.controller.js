
import createUserService from "../service/create.user.service.js";

const createUserController = (req, res) => {
  const { userid, name, age, created_at } = req.body;

  createUserService(userid, name, age,created_at, (err) => {
    if (err) {
     
      return res.status(500).send("Internal Server Error");
    }
    res.status(201).json({ message: "User added successfully", result: {userid,name,age} });
  });
};

export default createUserController;
