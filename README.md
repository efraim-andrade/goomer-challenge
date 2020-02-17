# :fork_and_knife: Goomer Challenge :fork_and_knife:

<img src="./src/assets/images/goomer-logo.png" style="display: block; margin: 0 auto;" />

## ✨ Projeto

O Projeto mostra uma lista de restaurantes com seu cardápio e horário de funcionamento, onde envolve manipulação de horários e datas, filtragem de conteúdo, e consumo de API.

[Mais Informações...](#Challenge---Developer-Frontend)

<!-- Aqui vai vir as estatisticas/observacoes do projeto  -->

### [Demonstracao online](https://goomerchallenge.netlify.com)

<!-- Aqui vai vir o GIF do funcionamento  -->

#### Desafios

- Lidar com a parte de horários e datas foi sem dúvida a parte mais desafiadora do challenge, principalmente por conta de ter que lidar com horários de restaurantes que podiam abrir em um dia e fechar no outro.

#### Problemas

- Tive dificuldade na parte de fazer o mock do new Date() do javascript por alguma incompatibilidade com o date-fns ou por simplesmente resetar os setters do Date e nao pegar os dados corretos passados para a função

## :office: Usando Localmente

:cloud: Clonar projeto

`$ git clone git@github.com:efraim-andrade/goomer-challenge.git`

📦 Instalar dependencias

`$ yarn`

🚀 Iniciar o projeto

`$ yarn start`

---

### :scroll: Testes

Rodar testes automatizados

`$ yarn test`

Verificar o quanto a aplicação foi testada

`$ yarn coverage`

---

# Challenge - Developer Frontend

Você provavelmente já está participando do nosso processo seletivo, mas se você caiu aqui por acaso, leia esse documento até o final e se você se interessar, pode começar o processo à partir daqui =]

Não é esperado que todos consigam realizar esse desafio por completo, já que é destinado a todos os níveis de carreira.

Você será avaliado pela sua capacidade de escrever um código simples, de fácil manutenção, e pela quantidade de funcionalidades que você entregar.

### Instruções

- **Nome do Projeto:** Goomer Lista Rango
- **Objetivo do Projeto:** Criar uma aplicação Web responsiva que consulte nossa API e exiba uma lista de restaurantes e o cardápio de cada um deles.
- **Tecnologia:** React.
- **User Interface:** Você pode [usar esse link](https://xd.adobe.com/spec/f6e71782-ebba-4573-6f7a-005a1a6d391f-80d6/) como referência de UI durante o desenvolvimento.
- **Entregáveis:** Crie um repositório pessoal para esse projeto, siga as instruções abaixo e então envie um e-mail para joao.arcala@goomer.com.br informando o link do repositório.

### Desafio

- Consulte a API disponibilizada para buscar as informações.
- Crie uma tela para exibir a lista de restaurantes:
  - O usuário deve ser capaz de buscar por estabelecimento.
  - Indique se cada um deles está aberto ou fechado sem ser necessário recarregar ou reabrir a página.
  - Para cada restaurante, deve ser exibido os horários de funcionamento, as promoções ativas no momento e o cardápio.
  - O restaurante deve atualizar o status de aberto/fechado, de acordo com o horário de funcionamento, sem ser necessário recarregar ou reabrir a página.
- Crie uma tela para exibir os produto do cardápio de cada um dos restaurantes:
  - O usuário deve ser capaz de buscar os produtos.
  - Para os produtos com promoção ativa, deve ser exibido o valor original e o valor promocional.
  - As promoções ativas e o valor promocional devem ser atualizados na interface, de acordo com o horário, sem a necessidade de recarregar ou reabrir a página.

##### Formato de horários

- É necessário tratar os campos que indicam horários de funcionamento.
- Os campos `from` e `to` possuem o formato `HH:mm`.
- Caso o campo `to` possua um horário anterior ao valor de `from`, deve-se considerar que o horário se estende até o horário contido em `to` do próximo dia. Por exemplo, se `from` for `19:00` e `to` for `02:00`, o horário a ser considerado é das 19h do dia atual até às 02h do dia seguinte.
- O campo `days` guarda os dias da semana em que o horário é válido. Sendo Domingo o valor 1 e Sábado o valor 7. Os horários possuem intervalo mínimo de 15 minutos.

### O que nós vamos avaliar

- Você será avaliado pela qualidade do código, legibilidade e pela quantidade de funcionalidades implementadas.
- Você é livre para tomar as decisões técnicas com as quais você se sente mais confortável. Apenas esteja pronto para explicar as razões que fundamentaram suas escolhas =]
- Inclua um arquivo _README_ que possua:
  - desafios/problemas com os quais você se deparou durante a execução do projeto.
  - maneiras através das quais você pode melhorar a aplicação, seja em performance, estrutura ou padrões.
  - todas as intruções necessárias para que qualquer pessoa consiga rodar sua aplicação sem maiores problemas.

### Dicas

- Documente seu projeto em arquivos markdown explicando a estrutura, processo de setup e requisitos.
- Tenha sempre um mindset de usabilidade, acessibilidade e colaboração.
- A organização das branches e os commits no repositório falam muito sobre como você organiza seu trabalho.
- Você pode utilizar bibliotecas de componentes visuais;
- O material de UI/UX que fornecemos deve servir como uma referência, você não precisa necessariamente segui-lo à risca. No entanto, quanto mais próximo, melhor =]
- Os testes unitários são opcionais porém são mais do que desejados.
- O design/estrutura do código da aplicação deve ser _production ready_.
- Tenha em mente os conceitos de _SOLID, KISS, YAGNI e DRY_.
- Use boas práticas de programação.

### API que você deve consumir

https://challange.goomer.com.br é nossa API REST JSON para esse desafio e seus endpoints estão disponíveis publicamente.

**Examplos de consulta na API:**

- Busca de restaurantes - http://challange.goomer.com.br/restaurants

```
GET: http://challange.goomer.com.br/restaurants

Formato de Resposta:
[
  {
    "id": Number,
    "name": String,
    "address": String,
    "image": String,
    "hours:[
      {
        "from": String,
        "to": String,
        "days": [Number]
      }
    ]
  }
]
```

- Busca de cardápio de um restaurante - http://challange.goomer.com.br/restaurants/{id}/menu

```
GET: http://challange.goomer.com.br/restaurants/{id}/menu

Formato de resposta:
[
  {
    "restaurantId": Number,
    "name": String,
    "image": String,
    "price": Number,
    "group": String,
    "sales": [
      {
        "description": String,
        "price": Number,
        "hours": [
          {
            "from": String,
            "to": String,
            "days": [Number]
          }
        ]
      }
    ]
  }
]
```

### FAQ

#### Posso utilizar frameworks/bibliotecas?

Sim.

#### Quanto tempo eu tenho ?

Quanto mais tempo você demorar, mais críticos seremos na sua avaliação =]

#### React, Angular ou Vue?

Você precisa implementar em React.

### Happy coding

![alt text](https://github.com/goomerdev/job-dev-frontend-interview/raw/master/media/may-the-force-be-with-you.jpg 'Happy Ccoding!!!')
