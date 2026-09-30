import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/**
 * Sin Lambdas: las escrituras van por el CRUD que genera Amplify, protegido con reglas que
 * AppSync aplica en el servidor en cada petición.
 */
const schema = a.schema({
  Curso: a
    .model({
      nombre: a.string().required(),
      descripcion: a.string().required(),
      cupo: a.integer().required(),
      fechaInicio: a.date().required(),
      fechaFin: a.date().required(),
    })
    .authorization((allow) => [
      allow.group('COORDINADOR'), // crea, lee, actualiza y borra
      allow.authenticated().to(['read']), // cualquier usuario con sesión ve el catálogo
    ]),

  Inscripcion: a
    .model({
      cursoId: a.id().required(),
      fechaInscripcion: a.datetime().required(),
      // `owner` lo llena AppSync con el usuario del token: el cliente no puede falsificarlo.
    })
    .authorization((allow) => [
      allow.owner(), // el afiliado crea y ve solo las suyas
      allow.group('COORDINADOR').to(['read']), // el coordinador ve todas
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    // Las reglas owner y group se evalúan con el JWT del User Pool.
    defaultAuthorizationMode: 'userPool',
  },
});
