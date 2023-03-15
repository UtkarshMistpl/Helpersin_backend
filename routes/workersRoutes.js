const { application } = require("express");
const express = require("express");
const router = express.Router();

const {
	getWorkers,
	getOneWorker,
	getAllWorkers,
	deleteOneWorker,
} = require("../controllers/workersController");

router.post("/", getWorkers);
router.post("/one", getOneWorker);
router.post("/all", getAllWorkers);
router.post("/delete-one", deleteOneWorker);

module.exports = router;
