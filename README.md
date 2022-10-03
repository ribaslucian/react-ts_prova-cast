### Resolução do Lucian para prova Cast.

##### 1. Construir imagem a partir do dockerfile.:
`docker build -f 'dockerfile' -t 'ribaslucian/rl-npm:latest' .`
Essa imagem possui NPM, YARN, Google Chrome e Selenium instalado e pronto para rodar BDD.

##### 2. Criar container para executar ou testar a aplicação:
A Imagem está no docker.hub, então pode utilizar a buildada ou a pública: ribaslucian/rl-npm:latest.
<pre><code>docker run -d -it `
    --name rl-npm_apps `
    -h rl-npm_apps `
    -p 5173:5173 `
    -v "C:\Users\Lucian\Dev Projects\JavaScript:/usr/src" `
    -w /usr/src `
    ribaslucian/rl-npm:latest</code></pre>
OBS: Para rodar os testes é necessário ajustar o paramêtro --test no package.json.

##### 3. Entrar no container da aplicação e rodar:
Lembre de apagar node_modules baixados por outros sistemas operacionais.

`docker exec -it rl-npm_app bash`
`npm install`
`yarn dev`

##### 4. Enviar imagem para registry:
`docker push ribaslucian/rl-npm:latest`

##### 5. Pipelina completa no gitlab.
`https://gitlab.com/ribaslucian/react-ts_prova-cast`
Pages: https://ribaslucian.gitlab.io/react-ts_prova-cast

##### 6. Extras:
Rodar servidor json: `json-server --watch db.json`

<hr/>

##### Enunciado:
1. [ok] Crie um projeto React com template typescript.
2. [ok] Versione o projeto no Gitlab do sebrae e crie a estrutura de desenvolvimento e branches baseadas no gitflow.
3. [ok] Implemente uma tabela com duas linhas e duas colunas. Ela precisa ser responsiva e tableless.
4. [ok] Crie uma chamada para o serviço http://viacep.com.br/ws/01001000/json/ utilizando a biblioteca AXIOS e disponibilize o resultado da chamada em uma tela.
5. [ok] Desenvolva um CRUD utilizando o JSON "Conta". O JSON precisa ter apenas os atributos: nome e descrição. Os dados podem ser mantidos no browser.
6. [ok] Crie um teste utilizando a metodologia de BDD para o método POST do CRUD.
7. [ok] Implemente um cenário para testar a chamada da API http://viacep.com.br/ws/01001000/json/.
8. [ok] Crie um dockerfile da aplicação e execute localmente.
9. [ok] Defina a estrutura ideal de pasta no projeto e justifique-a.