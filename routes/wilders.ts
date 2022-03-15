// Routes
const wilderController = require("../src/controllers/WilderController");
const expressRouter = require("express");
const router = expressRouter.Router();

router.post("/api/wilders/", wilderController.create);
router.get("/api/wilders/", wilderController.read);
router.post("/api/wilder/:id/", wilderController.update);
router.delete("/api/wilder/:id", wilderController.delete);

module.exports = router;
