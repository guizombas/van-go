[Leitura anterior: Interface](/docs/3-Interface.md)

# Gestão de Configuração

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório `upstream`.

O projeto segue a seguinte convenção para o nome de branchs:

- `master`: versão estável já testada do software
- `(nome da funcionalidade)`: versão onde será desenvolvida alguma funcionalidade nova, e o nome da funcionalidade é o nome da branch, como forma de representação.
- `testing`: versão em testes do software


Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `bugfix`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

[ Em construção ]

## Hospedagem

A hospedagem da plataforma, inicialmente é realizada através do serviço denominado Netlify, é um serviço de computação em nuvem, onde foi possível realizar a hospedagem da plataforma, o serviço é similar ao Heroku, citado em conferência de aula. O Netlify integra a implementação do projeto, diretamente no repositório do GitHub, basta fazer o conexão do GitHub com o serviço, e o Netlify irá configurar tudo que for necessário.
A plataforma está disponível para ser executada, sendo hospedada no serviço de nuvem Netlify, com o link de acesso: [Van GO!](https://van-go.netlify.app/)

[Próxima leitura: Gerenciamento do Projeto](/docs/5-Gerenciamento-Projeto.md)