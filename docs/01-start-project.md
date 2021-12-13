# Start Project

## Comandos usados para criar o projeto Vue

### Start Vue Project - Vue CLI

Cria pasta com esse nome e insere dependencias do vue
````sh
vue create url-shortner-front
````

É feito uma śerie de perguntas 

````
? Check the features needed for your project: 
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
 ◉ Unit Testing
❯◉ E2E Testing

Unit TEST: Jest
E2E Test: Cypress
````

## Instalar Quasar

Baseado no site

https://quasar.dev/start/vue-cli-plugin

tenha certeza de que tem o vue CLI mais recente com os comandos

````sh
$ npm uninstall -g vue-cli

$ npm install -g @vue/cli
````

Adicionar plugin Quasara a projeto já existente Vue**

Entre na pasta do projeto vue e use o vue CLI para inserir o plugin do quasar

````sh
$ vue add quasar
````sh

Escolhas para esse projeto
````
? Allow Quasar to replace App.vue, About.vue, Home.vue and (if available) router
.js? Yes
? Pick your favorite CSS preprocessor: None
? Choose Quasar Icon Set Material
? Default Quasar language pack - one from https://github.com/quasarframework/qua
sar/tree/dev/ui/lang (en-US)
? Use RTL support? No
? Select features: Roboto font, Material
````sh

Nâo faça esse processo com o projeto inicializado

Deve mostrar uma frae de sucesso, se der algum problema, refaça tudo, pois uma ez eu tenti por o quasar enquanto estava executando e acho que bagunçou tudo.

