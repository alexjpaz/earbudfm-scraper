FROM ubuntu:vivid

RUN apt-get update
RUN apt-get install -y python python-dev curl make gcc g++ bzip2 libfreetype6 libfontconfig1

RUN curl --silent --location https://deb.nodesource.com/setup_0.12 | bash -
RUN apt-get install -y nodejs

RUN npm install -g phantomjs

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD [ "./run.sh" ]
