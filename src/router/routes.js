import {Router} from 'express'
import user from '../controllers/user.js'
const router = Router()

router.post('/criar',user.newCount)
router.post('/login',user.Login)

export default  router