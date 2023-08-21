run: _install
	make build-lib
	make run-app

run-app:
	(cd ./packages/app && npm run dev)

build-lib:
	(cd ./packages/lib && npm run build)

_install:
	npm install

