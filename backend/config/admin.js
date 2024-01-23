module.exports = ({ env }) => ({

  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dwe07gwos'),
        api_key: env('489366255397539'),
        api_secret: env('CYlCbd4skCG8e3SNA1Ge2gHO_Fs'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
