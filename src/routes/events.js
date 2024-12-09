import {Router} from 'express'
import * as evnts from '../controllers/events.js'
import { check } from 'express-validator'
import validateFields from '../middlewares/validator-fields.js'
import { isDate } from '../helpers/isDate.js'

const router= Router()

router.get('/', evnts.getEvents)
router.post('/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom(isDate),
        check('end','Fecha de finalizacion es obligatoria').custom(isDate),
        validateFields
    ],
    evnts.createEvent)
router.get('/:id', evnts.getEvent)
router.put('/:id',evnts.updateEvent)
router.delete('/:id', evnts.deleteEvent)

export default router;