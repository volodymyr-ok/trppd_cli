const express = require('express');
const router = express.Router();

const ctrlWrapper = require('../../../helpers/ctrlWrapper.js');
const ctrl = require('../../../controllers/subscription');
const validate = require('../../../middlewares/validateBody.js');
const { emailJoiSchema } = require('../../../models/subsription.js');

router.post('/', validate(emailJoiSchema), ctrlWrapper(ctrl.subscribe));

module.exports = router;
