import Joi from 'joi'
import Exception from '../exception.js'


const signUpschema = Joi.object({
  firstName: Joi.string().required().min(3).max(30),
  lastName: Joi.string().required().min(3).max(30),
  age: Joi.number().required().min(1).max(3),
  address: Joi.string().required(),
  telephone: Joi.string().required(),
  role: Joi.string().valid('parent', 'pupils', 'staffs','admin').required(),
  email: Joi.string().email().required().min(5).max(30),
  password: Joi.string().required(),
  
});

const signInschema = Joi.object({
  email: Joi.string().email().required().min(5).max(30),
  password: Joi.string().required().min(6).max(30),
  
})

export const validateSignUp = (req, res, next) => {
  const { error } = signUpschema.validate(req.body);
  if (error) {
    const { details } = error;
    const message = details.map(i => i.message).join(',');
    next(new Exception(message, 400))
  }
  next();
}

export const validateSignIn = (req, res, next) => {
  const { error } = signInschema.validate(req.body);
  if (error) {
    const { details } = error;
    const message = details.map(i => i.message).join(',');
    next(new Exception(message, 400))
  }
}