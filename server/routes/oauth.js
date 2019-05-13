const passport = require('passport')
const router = require('express').Router()
const { baseUrl } = require('../lib/config').getPreDbConfig()

router.get(
  '/auth/oauth',
  passport.authenticate('oauth2', { scope: ['profile email'] })
)

router.get(
  '/auth/oauth/callback',
  passport.authenticate('oauth2', {
    successRedirect: baseUrl + '/',
    failureRedirect: baseUrl + '/signin'
  })
)

module.exports = router
