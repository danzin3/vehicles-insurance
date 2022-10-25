export const wrongBodyShapeResponse = {
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
};
