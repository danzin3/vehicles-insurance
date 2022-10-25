import { app } from '../../app';
import supertest from 'supertest';
import { HttpStatus } from '../../enums';
import {
  wrongBodyShapeResponse,
  emptyNameAndCpf,
  wrongCpfAndEmailValue,
} from './mocks';

describe('Tests end to end for dto class validator in create client endpoint', () => {
  afterAll(async () => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
  });

  it('Should return a error when not send body in request', async () => {
    const { body, status } = await supertest(app).post('/api/v1/clients');
    expect(status).toEqual(HttpStatus.BAD_REQUEST);
    expect(body).toEqual(wrongBodyShapeResponse);
  });

  it('Should return a error when send more fields that app expect', async () => {
    const { body, status } = await supertest(app).post('/api/v1/clients').send({
      name: 'Jose da Silva',
      cpf: '25155751888',
      email: 'jose@gmail.com',
      password: 'Value',
      description: 'Some Value',
      extraField: 'otherValue',
    });
    expect(status).toEqual(HttpStatus.BAD_REQUEST);
    expect(body).toEqual(wrongBodyShapeResponse);
  });

  it('Should return a error when send wrong field name on body', async () => {
    const { body, status } = await supertest(app).post('/api/v1/clients').send({
      name: 'Jose da Silva',
      cpfggg: '25155751888',
      emaddil: 'jose@gmail.com',
      passwords: 'Value',
      descriptiTon: 'Some Value',
    });
    expect(status).toEqual(HttpStatus.BAD_REQUEST);
    expect(body).toEqual(wrongBodyShapeResponse);
  });

  it('Should return a error when send empty name and cpf', async () => {
    const { body, status } = await supertest(app).post('/api/v1/clients').send({
      name: '',
      cpf: '',
      email: 'jose@gmail.com',
      password: 'Value',
      description: 'Some Value',
    });
    expect(status).toEqual(HttpStatus.BAD_REQUEST);
    expect(body).toEqual(emptyNameAndCpf);
  });

  it('Should return a error when send worng email and cpf values', async () => {
    const { body, status } = await supertest(app).post('/api/v1/clients').send({
      name: 'Jose da Silva',
      cpf: '11122233344',
      email: 'jose@dddd',
      password: 'Value',
      description: 'Some Value',
    });
    expect(status).toEqual(HttpStatus.BAD_REQUEST);
    expect(body).toEqual(wrongCpfAndEmailValue);
  });
});
