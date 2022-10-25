export const emptyNameAndCpf = {
  statusCode: 400,
  message: 'Body Params is not valid',
  response: {
    success: false,
    data: [
      {
        message: "O atributo 'name' é obrigatório para essa ação",
      },
      {
        message: 'cpf is not valid',
      },
      {
        message: 'cpf must be a number string',
      },
      {
        message: "O atributo 'cpf' é obrigatório para essa ação",
      },
    ],
  },
};
