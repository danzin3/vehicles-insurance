export const ErrorDefaultResponse = {
  properties: {
    statusCode: {
      date: {
        type: 'number',
      },
    },
    message: {
      date: {
        type: 'string,',
      },
    },
    response: {
      type: 'object',
      properties: {
        success: {
          type: 'boolean',
        },
        data: {
          type: 'array',
          message: {
            type: 'string',
          },
        },
      },
    },
  },
};
