
const deleteUserController = (req, res) => {
  const userId = req.params.id;

  deleteUserService(userId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to delete user", details: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  });
};

export default deleteUserController;

// jobs/deleteUserCronJob.js
