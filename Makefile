all: dockerBuild go

dockerBuild:
	docker build -t earbud .
go: dockerBuild
	docker run -v $(PWD)/output:/usr/src/app/output earbud

runIt: dockerBuild
	docker run -it earbud /bin/bash
