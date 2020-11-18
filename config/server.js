module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'c4310bffd689bc3df0329f809718c285'),
    },
  },
  cron: {
    enabled: true
  }
});
