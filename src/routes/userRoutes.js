import { Router } from 'express';
import { loginUser, logOutUser, registerUser } from '../controllers/userController.js';
import { verifyJWT } from '../middlewares/authMiddleware.js';
import { upload } from '../middlewares/multerMiddleware.js';

const router = Router();

router.route('/register').post(
  upload.fields([
    {
      name: 'avatar',
      maxCount: 1,
    },
    {
      name: 'coverImage',
      maxCount: 1,
    },
  ]),
  registerUser
);
// router.post("/register", registerUser)

router.route('/login').post(loginUser);

// secured Routes....
router.route("/logout").post(verifyJWT, logOutUser)

export default router;
