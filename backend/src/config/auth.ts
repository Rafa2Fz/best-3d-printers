export default {
  jwt: {
    secret: process.env.SECRET_JWT_TOKEN || 'alter secret default here',
    expiresIn: '1m',
  },
};
