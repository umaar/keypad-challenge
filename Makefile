# The default target must be at the top
.DEFAULT_GOAL := start

install:
	npm install

install-ci:
	npm ci

update-deps:
	ncu -u

unit:
	./node_modules/.bin/ava

test: unit

