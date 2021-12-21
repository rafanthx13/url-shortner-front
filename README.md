# URL Shortener FrontEnd Vue

## Project setup
```
npm install
```

### Exec Application
```
npm run serve
```
## Estrutura das páginas/Urls

**Parte Pública**
+ / : página inicial. Criação de URL curta no modo público
+ /top-ruls : lista as Top Urls mais acessadas
+ /login : login
+ /sign-up : cadastro de usuário

**Parte Privada**
+ Autenticada. Só é possível acessar a partir do login bem sucedido na tela de login. 
+ Apresenta menu lateral onde pode acessar outras rotas
  + /app/home: página inicial
  + /app/list-url : lista as Url encurtadas criadas pelo usuário e permite ação para deletá-la
  + /app/create-url : Cria URL no modo privado (pode ser acessada pelo seu respectivo usuário e também deletada
  + /app/top-urls : lista as Top Urls mais acessadas

