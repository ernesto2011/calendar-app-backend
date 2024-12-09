import {Router} from 'express'
import * as user from '../controllers/auth.js'
import  {check} from 'express-validator'
import validateFields from '../middlewares/validator-fields.js'
import { validateJWT } from '../middlewares/validate-jwt.js'
const router= Router()

router.post('/new',
    [
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('password','El password debe de ser de 6 caracteres').isLength({min:6}),
    validateFields
],
user.createUser)
router.post('/', 
    [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({min:6}),
    validateFields
],
user.loginUser)
router.get('/refresh',validateJWT ,user.renewToken)

export default router;