const Joi = require("joi");

exports.IndustryValidation = (IndustryValidator)=>{

    validateScheme = Joi.object({
        destTitle : Joi.string().required(),
        p:  Joi.string().required(),
        address: Joi.string().required(),
        industry:Joi.string().required(),
        Location:Joi.string().required(),
        img:Joi.string().optional(),
        id:Joi.number().optional(),

    })
   // return validator.validateScheme(userValidation)
    return validateScheme.validate(IndustryValidator)
}