import { Response, NextFunction } from 'express';
import { IGlobalRequest } from '../interfaces';

const setInitDatetime = async (
  request: IGlobalRequest,
  response: Response,
  next: NextFunction,
) => {
  request.startDatetime = new Date();
  next();
};

export { setInitDatetime };
