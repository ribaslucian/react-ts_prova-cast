### Base Image: ribaslucian/rl-npm:18
    FROM ubuntu:20.04

    # Preparando ambiente.
        RUN apt-get upgrade
        RUN apt-get update
        RUN apt install -y curl wget

        # Configurando TzData para Chrome.
        ENV DEBIAN_FRONTEND=noninteractive
        RUN export DEBIAN_FRONTEND=noninteractive
        RUN ln -fs /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
        RUN apt-get install -y tzdata
        RUN dpkg-reconfigure --frontend noninteractive tzdata
    
    # Instalando Googhe Chrome para teste automatizados (BDD).
        RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
        RUN apt-get install -y ./google-chrome-stable_current_amd64.deb
        RUN rm google-chrome-stable_current_amd64.deb

    # Instalando NPM e YARN.
    # https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
        RUN cd ~
        RUN curl -sL https://deb.nodesource.com/setup_18.x -o /tmp/nodesource_setup.sh
        RUN bash /tmp/nodesource_setup.sh
        RUN apt install -y nodejs
        RUN npm install --global yarn
        RUN rm /tmp/nodesource_setup.sh


### Application Image: ribaslucian/rl-npm_{application}:latest

    # Copiando e atualizando aplicação (Para commit de imagem).
        WORKDIR /usr/src
        RUN npm install -g chromedriver
        # COPY . /usr/src
        # RUN rm -frv /usr/src/node_modules
        # RUN rm -frv package-lock.json
        # RUN npm install
