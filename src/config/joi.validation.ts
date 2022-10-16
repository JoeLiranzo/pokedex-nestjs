import * as Joi from "joi";

export const JoiValidationSchema = Joi.object({
	MONGODB: Joi.required(),
	PORT: Joi.required(),
	DEFAULT_LIMIT: Joi.number().default(6),
})
