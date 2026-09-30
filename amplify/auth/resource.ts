import { defineAuth } from '@aws-amplify/backend';

/**
 * Login por correo y dos grupos. Al COORDINADOR se le agrega a mano (consola o CLI).
 * @see https://docs.amplify.aws/react/build-a-backend/auth/
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  groups: ['COORDINADOR', 'AFILIADO'],
});
