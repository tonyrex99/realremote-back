const Joi = require("joi");

exports.jobValidation = Joi.object({
  category: Joi.string().allow(""),
  link: Joi.required(),
  country: Joi.string().allow(""),
  city: Joi.string().allow(""),
  date: Joi.string().allow(""),
  description: Joi.string().allow(""),
  employmentType: Joi.string().allow(""),
  endDate: Joi.string().allow(""),
  experience: Joi.string().allow(""),
  hotOrVerified: Joi.string().allow(""),
  jobTitle: Joi.string().allow(""),
  keywordArray: Joi.string().allow(""),
  logo: Joi.string().allow(""),
  name: Joi.string().allow(""),
  offerSalary: Joi.string().allow(""),
  startDate: Joi.string().allow(""),
  workLevel: Joi.string().allow(""),
  whatWeOffer: Joi.string().allow(""),
  responsibilities: Joi.string().allow(""),
  qualifications: Joi.string().allow(""),
  tags: Joi.string().allow(""),
  createAt: Joi.date().allow(""),
});