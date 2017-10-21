install:
	npm install

start:
	npm run start

start-dev:
	npm run start-dev

build:
	npm run clean
	npm run build-client
	npm run build-server

test:
	NODE_ENV=test npm test

lint:
	npm run eslint -- src __tests__

.PHONY: test clean build