const router = require("express").Router();
const { CreateChannel, GetAllChannel, GetEditChannel, PutEditChannel, DeleteChannel } = require("../../controller/RadioStation/RatioStation");

router.post("/createChannel", CreateChannel);
router.get("/getChannel", GetAllChannel);
router.get("/getChannel/:id", GetEditChannel);
router.put("/putEditChannel", PutEditChannel);
router.delete("/deleteChannel/:id", DeleteChannel)

module.exports = router;