# url-shortner-front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


##  time
book (3h)

backend (2h)

Front End Features
(4h) 15/12

##

Front-End
+ CreateURL Page
+ Delete and Update Modal
+ Notifications
+ About Page
+ Home Page
 - DashBoard with: Count of Urls (Sorted); Count of log access;
+Auth Block
+ Error Page

BackEnd
+ CRUD URL
  - Create URL, GetOne, GetAll, update/delete
  - forbidne delte other ID
+ CRUD auth
  - sign in, signup, delete account,
+ CRUD LOG
  - create
+ Database
  - LogAcess: log_id, user_id, url_id, create_date
  - generate dates without út date (by mysal)
+ Jest Unit Test

### O que falta noback

+ Proibir requisções de outro user para  manipular url de outro
  - ler routes.js para city
+ Testes unitários com JEST
+ Limpar tudo E CONSOLER_LOSTS
+ kNnnex create_table e SEED

######

usermae/passwrd/email, osmente isso


#3c9ec5
#c3613a
#0f9d58

https://mycolor.space/gradient?ori=to+right&hex=%23C3613A&hex2=%231976D2&sub=1


Por default usa material-icons por isso nao tem nenhum prefixo
https://quasar.dev/vue-components/icon#webfont-icons


###

Leia atentamente os requisitos.

- Pergunte em caso de dúvidas
- Implemente o que possa, qualidade é mais importante que completar todo o desafio.
- Eficiencia e otimização são itens importantes.

Requisitos fundamentais:

 - Construir um serviço de encurtamento de URLS com o menor tamanho possível.
 - Cadastro de usuário básico ( sign up/ login)
 - Usuarios podem criar urls de forma anonima ( sem fazer login )
 - Usuarios registrados podem deletar urls criadas por eles mesmos.
 - Redirecionar para url original quando a url encurtada for visitada (ex: shr.c/abcd -> www.google.com )
 - Incrementar o número de visitas de uma url a cada visita.
 - Página com o top 100 de urls visitadas
 - Mostrar o titulo das urls no top100
 - Escrever documentação de como rodar o projeto
 - Explicar partes do código que poderiam ser melhoradas se tivesse mais tempo disponível e porque.
 - Usar Vuejs no Frontend
 - Backend Nodejs ou Rails
 - Testes unitários e e2e

Entrega:
Coloca o código em um repositorio PRIVADO e compartilhar acesso com meu email diogo@speedio.com.br [me enviar a URL pf ; ))]
Faz um video da tela do aplicativo explicando as suas funcionalidades e eventuais features que ficaram de fora. (Se quiser dica de app pra gravar tela: extensão do chrome: https://www.vidyard.com/)


## Proximos Passos

+ Realizar Login/SignUp Corretamente com a protaçâo do Local Storage [x]
+ Listar as próprias URl [x]
+ criar o botão de Delete, criar o modela e assim deletar [x]
  - proteçao conta delete de outro na API pelo passport
+ adicionar contagem
+ API que retornar as 100 paginas mais vistas, todos os seus addos
  - por o count para contar e no log para contar
+ COntagem de Url e LIstar TOp Urls Acessadas

=

foi necessario por o passopor.initizlize em rotes.js para o passport funcionar

====

components: {
    'TopUrl': TopUrl,
  },

Se voce usar [] vai dar aquele erro de usctomerlement, como se desse problema em nestedCOMpoente, mas na verdade é um erro seu, pois

a proprieade compeontent é um objeto

======

acessar route.name em vue3

import { useRouter } from 'vue-router';

export default {

  name: "TopUrl",

  mixins: [notificationMixin],

  data() {
    return {
      // isInApp: currentRouteName == '/app/top-urls', // this.$router.options.location
      rows: [],
      columns: [
        { name: "actual_url", label: "Actual Link", field: "actual_url" },
        { name: "go_to_url", label: "GoTo Link", field: "go_to_url" },
        { name: "user_id", label: "User ID", field: "user_id" },
        // { name: "create_date", label: "CreateDate", field: "create_date" },
        { name: "count", label: "Count", field: "count" },
      ],
      initialPagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 20,
        // rowsNumber: xx if getting data from a server
      },
    };
  },

  computed: {
    isInApp() {
        return useRouter().currentRoute.value.name == "AppTopUrls"
    }
  },
