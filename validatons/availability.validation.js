import Joi from 'joi'
import Exception from '../exception.js'


const availabilitySchema = Joi.object({
  pupil: Joi.objectId().required(),
  parent: Joi.objectId().required(),
  checked: Joi.string().valid('checked in', 'checked out').required()
})

export const validateAvailability = ( req, res, next) => {
    const { error } = availabilitySchema.validate(req.body);

  if(error) {



    const {details} = error;
    const message = details.map(i => i.message).join(',');
    next(new Exception (message, 400))
  }

  next();
}