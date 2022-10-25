export const wrongCpfAndEmailValue = {
  statusCode: 400,
  message: 'Body Params is not valid',
  response: {
    success: false,
    data: [
      {
        message: 'cpf is not valid',
      },
      {
        message: 'email must be an email',
      },
    ],
  },
};
