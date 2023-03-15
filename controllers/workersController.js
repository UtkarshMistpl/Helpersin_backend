const db = require("../models");
const { getDistance } = require("../services/workers");

const Workers = db.workers;

const getWorkers = async (req, res) => {
	const category = req.body.category;
	const lat = req.body.lat;
	const lng = req.body.lng;
	const distance = req.body.distance ? req.body.distance : 5;

	// Find all categories
	const workers = await Workers.findAll({
		where: {
			category: category,
		},
	});

	if (!workers) {
		res.json({ status: "error", message: "failed no workers found" });
	}

	//calculate distance
	let filteredWorkers = workers.filter((it) => {
		return getDistance(it.lat, it.lng, lat, lng) <= distance;
	});

	console.log("All Workers:", JSON.stringify(filteredWorkers, null, 2));
	res.json({ status: "success", workers: filteredWorkers });
};

const getOneWorker = async (req, res) => {
	const id = req.body.id;

	// Find all categories
	const worker = await Workers.findAll({
		where: {
			id: id,
		},
	});

	if (!worker) {
		res.json({ status: "error", message: "failed no workers found" });
	}

	//calculate distance
	// let filteredWorkers = worker.filter((it) => {
	// 	return getDistance(it.lat, it.lng, lat, lng) <= distance;
	// });

	console.log("one Worker", JSON.stringify(worker, null, 2));
	res.json({ status: "success", worker: worker });
};

const getAllWorkers = async (req, res) => {
	const page = req.body.page ? req.body.page : 50;

	// Find all categories
	const workers = await Workers.findAll({
		offset: 100,
		limit: page,
	});

	if (!workers) {
		res.json({ status: "error", message: "failed no workers found" });
	}

	//calculate distance
	// let filteredWorkers = worker.filter((it) => {
	// 	return getDistance(it.lat, it.lng, lat, lng) <= distance;
	// });

	console.log("all workers", JSON.stringify(workers, null, 2));
	res.json({ status: "success", workers: workers });
};

const deleteOneWorker = async (req, res) => {
	const id = req.body.id;

	// Find all categories
	const worker = await Workers.findAll({
		where: {
			id: id,
		},
	});

	if (!worker) {
		res.json({ status: "error", message: "failed no workers found" });
	}

	//calculate distance
	// let filteredWorkers = worker.filter((it) => {
	// 	return getDistance(it.lat, it.lng, lat, lng) <= distance;
	// });

	console.log("one Worker", JSON.stringify(worker, null, 2));
	res.json({ status: "success", worker: worker });
};
module.exports = {
	getWorkers,
	getOneWorker,
	getAllWorkers,
	deleteOneWorker,
};
