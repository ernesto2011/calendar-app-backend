import {Router} from 'express'
import * as user from '../controllers/auth.js'

const router= Router()

router.get('/get',user.getUser)
router.post('/new',user.createUser)
router.put('/', user.updateUser)
router.delete('/',user.deleteUser)

export default router;