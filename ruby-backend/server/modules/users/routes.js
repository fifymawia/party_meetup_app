// users routes

const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

const User = require('./model');

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post(
  '/signup',
  [
    check('firstName', 'Please Enter a Valid Name')
      .not()
      .isEmpty(),
    check('lastName', 'Please Enter a Valid Last Name')
      .not()
      .isEmpty(),
    // check('email', 'Please enter a valid email').isEmail(),
    check('phoneNumber', 'Please enter a valid Phone Number').isLength({
      min: 10,
    }),
    check('password', 'Please enter a valid password').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    } = req.body;
    try {
      let user = await User.findOne({
        phoneNumber,
      });
      if (user) {
        return res.status(400).json({
          msg: 'User Already Exists',
        });
      }

      user = new User({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        'randomString', {
          // expiresIn: 10000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
      res.status(500).send('Error in Saving');
    }
  }
);
router.post(
  '/login',
  [
    check('phoneNumber', 'Please enter a valid Phone Number').isLength({
      min: 10,
    }),
    check('password', 'Please enter a valid password').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { phoneNumber, password } = req.body;
    try {
      const user = await User.findOne({
        phoneNumber,
      });
      if (!user) {
        return res.status(400).json({
          message: 'User Does Not Exist',
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: 'Incorrect Password !',
        });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        'secret',
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      res.status(500).json({
        message: e.message,
      });
    }
  }
);
/**
 * @method - GET
 * @description - Get LoggedIn User
 * @param - /user/me
 */
router.get('/me', async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.send({ message: 'Error in Fetching user' });
  }
});
module.exports = router;
