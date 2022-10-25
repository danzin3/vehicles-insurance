#!/bin/bash
# For windows Operating System, it is necessary make some changes for this script works

export NODE_ENV=test
export DB_SCHEMA=public
export DATABASE_NAME=insurance_test_db

npm run create:database test \
&& npm run migrations:run \
&& npm run seeds \
&& jest --forceExit --config jest.config.json --no-cache
npm run drop:database test
