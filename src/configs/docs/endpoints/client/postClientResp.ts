export const responses = {
  '201': {
    description: 'Sucesso ao cadastrar cliente!',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/Client',
        },
        example: {
          statusCode: 201,
          message: 'Sucesso ào cadastrar cliente!',
          response: {
            success: true,
            data: {
              publicId: '0f8e6322-56dd-4622-b630-22a596ac73a0',
              name: 'Jose da Silva',
              cpf: '25155751888',
              email: 'jose@gmail.com',
              password: 'Value',
              description: 'Some Value',
              extraClient: null,
            },
          },
        },
      },
    },
  },
  '400': {
    description: 'Returned when a body request sended are not valid',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/ErrorDefaultResponse',
        },
        example: {
          statusCode: 400,
          message: 'Shape of object in body request is not valid',
          response: {
            success: false,
            data: [
              {
                message: 'Shape of object in body request is not valid',
              },
            ],
          },
        },
      },
    },
  },
  '500': {
    description: 'Returns a internal server error',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/ErrorDefaultResponse',
        },
        example: {
          statusCode: 500,
          message: 'Internal Server Error',
          response: {
            success: false,
            data: [
              {
                message: 'Internal Server Error',
              },
            ],
          },
        },
      },
    },
  },
};
