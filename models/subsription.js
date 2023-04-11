const Joi = require('joi');

const emailRegex = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/; // the same as Google uses

const emailJoiSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegex)
    .required()
    .messages({ 'any.required': 'Email is invalid' }),
});

module.exports = { emailJoiSchema };
