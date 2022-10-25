import { components } from './components';
import definitions from './definitions';
import paths from './endpoints';
import { tags } from './tags';

export const options = {
  swaggerOptions: {
    docExpansion: 'none',
  },
};

export const docs = {
  components,
  ...definitions,
  tags,
  paths,
};
