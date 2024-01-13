const { Router } = require('express');
const router = Router();

const { createUser,authUser } = require('../controllers/auth.controller');
const {createBuildingProject} = require('../controllers/builder.controller');
const {listBuildingProject} = require('../controllers/provider.controller');

router.post('/user/add', createUser);
router.post('/auth', authUser);
router.post('/buildingProject/create', createBuildingProject);
router.get('/buildingProject/list', listBuildingProject);


module.exports = router;