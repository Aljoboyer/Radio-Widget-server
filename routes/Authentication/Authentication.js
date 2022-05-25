const { UserLogin, UserRegister } = require("../../controller/Authentication/Authentication");
const router = require("express").Router();

router.post("/login", UserLogin);
router.post("/register", UserRegister);

module.exports = router;