import {body,validationResult} from 'express-validator';



function validateRequest(req,res,next){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    next();
}





export const registerValidator = [
    body('fullname')
    .notEmpty().withMessage('Fullname is required')
    .isLength({min:3}).withMessage('Fullname must be at least 3 characters long'),
    body('contact')
    .notEmpty().withMessage('Contact is required')
    .matches(/^\d{10}$/).withMessage('Contact must be a valid 10-digit number'),
    body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Email must be a valid email address'),
    body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    validateRequest
]

// export const loginValidator = [
//     body('email')
//     .notEmpty().withMessage('Email is required')
//     .isEmail().withMessage('Email must be a valid email address'),
//     body('password')
//     .notEmpty().withMessage('Password is required')
// ]