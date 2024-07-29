import {Router} from 'express'
import user from '../controllers/user.js'
const router = Router()

router.post('/criar',user.newCount)
router.post('/login',user.Login)
router.patch('/update',user.Upate)
router.get('/usuario',user.User)

export default  router