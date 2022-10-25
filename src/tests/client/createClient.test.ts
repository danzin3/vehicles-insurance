import { app } from '../../app';
import supertest from 'supertest';
import { HttpStatus } from '../../enums';
import { Client } from '../../database/entities';
import { AppDataSource } from '../../configs/dataSource';
import { Repository } from 'typeorm';
import { successCreatedClient } from './mocks';

describe('Tests end to end for business rules of create client endpoint', () => {
  let repository: Repository<Client>;

  beforeAll(async () => {
    await AppDataSource.initialize();
    repository = AppDataSource.getRepository(Client);
  });

  beforeEach(async () => {
    await repository.query('TRUNCATE "clients" CASCADE');
  });

  afterEach(async () => {
    await repository.query('TRUNCATE "clients" CASCADE');
  });

  afterAll(async () => {
    await repository.query('TRUNCATE "clients" CASCADE');
    jest.setTimeout(5000);
  });

  it('Should Create a client how specifed by business rules', async () => {
    const { body, status } = await supertest(app).post('/api/v1/clients').send({
      name: 'Jose da Silva',
      cpf: '25155751888',
      email: 'jose@gmail.com',
      password: 'Value',
      description: 'Some Value',
    });
    expect(status).toEqual(HttpStatus.CREATED);
    expect(body.message).toEqual('Sucesso ào cadastrar cliente!');
    expect(body.response).toEqual(successCreatedClient);
  });
});
