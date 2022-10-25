import { responses } from './postClientResp';

export const postClient = {
  '/clients': {
    post: {
      tags: ['Clients'],
      summary: 'Register a Client in the application database',
      description:
        'Send an user body data in the request and get the server response about the registration',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                cpf: {
                  type: 'string',
                },
                email: {
                  type: 'string',
                },
                password: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
              },
              required: ['email', 'password'],
            },
            example: {
              name: 'Jose da Silva',
              cpf: '25155751888',
              email: 'jose@gmail.com',
              password: 'Value',
              description: 'Some Value',
            },
          },
        },
      },
      responses,
    },
  },
};
