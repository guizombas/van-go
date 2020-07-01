[Leitura anterior: Contexto](/docs/1-Contexto.md)

# Especificações Do Projeto


Com o problema levantado, bem definido, e com os objetivos bem especificados, 
bem como a contextualização bem fundamentada, partimos para a especificação do projeto **Van GO!** 
Neste documento, serão abordadas as especificações teoricas/praticas do projeto **Van GO!** 
com o objetivo de mostrar a base na qual foi fundamentado, 
com enfase no prosseguimento do que foi levantado durante as tarefas de pesquisa. 
 
Serão evidenciados neste documento, as Personas, as Historias de Usuario, os Requisitos sendo eles, funcionais e não funcionais, e as restrições do projeto.

## Personas

O público alvo inclui todos aqueles envolvidos na contratação de um serviço de van universitária e que enfrentam problemas para tal, sendo esses os alunos que não encontram um serviço com viabilidade de horários e financeira, e aqueles que oferecem tal serviço (motoristas, donos de vans e cooperativas) mas encontram dificuldades para divulgá-lo.

João, tem 20 anos, de Ribeirão das Neves, faz estágio, e é estudante na PUC Minas, faz uso de uma van universitária, porém ela não vem cumprindo com o horário acordado, forçando-o a perder de 20 a 30 minutos de aula, ele ainda não conseguiu encontrar outra van.

Natiely, tem 21 anos, é assistente administrativa, e estuda na UNI BH, e mora na região central de Ribeirão das Neves, ela acredita que não há nenhuma van universitária que faça a rota de sua residência, em dois anos de faculdade, nunca encontrou um motorista.

Arthur, tem 19 anos, é de Contagem, estudante do último ano do curso de Equipamentos Biomédicos no CEFET-MG, faz uso de transporte universitário tendo conhecimento prévio sobre o serviço, porém os horários de suas aulas são irregulares, tornando necessário, a busca por uma van que flexibilize seu serviço.

Seu Jorge, tem 47 anos, é de Belo Horizonte, é diretor de uma cooperativa de vans, se formou recentemente no curso de Processos Gerenciais, e durante o tempo que passou na faculdade, viu de perto o cenário do transporte universitário, teve contato com tecnologias, e viu que é possível realizar marketing pela internet, gosta de explorar sozinho, mas não aprendeu ainda como divulgar seus associados no meio tecnológico.

## Histórias de Usuários

Como parte da metodologia, levantadas 4 histórias de usuário, essas histórias têm como objetivo, promover uma especificação de usuário final, baseado em toda a análise e estudo de campo, possibilitando o desenvolvimento centrado em **quem é o usuário**, o que ele faz ou necessita fazer bem como sua função. As tabelas a seguir, representam as histórias de usuário desenvolvidas:


|EU COMO... | QUERO/PRECISO ...  |PARA ...                 |
|--------------------|------------------------------------|----------------------------------------|
|Estudante universitário  | Quero um canal de pesquisa com filtros para encontrar uma van    | Para encontrar uma van que atenda as minhas necessidades               |
|Motorista de van       | Quero um meio de divulgação do meu serviço.                | Para que eu possa fechar contratos de transporte com estudantes |
|Estudante universitário       | Quero avaliar o serviço oferecido pela minha van universitária               | Para que eu possa ajudar outros estudantes que estão procurando uma van, com informações relevantes. |
|Estudante universitário      | Quero encontrar informações específicas de cada van universitária, quero o contato telefônico do motorista, e ainda quero ver fotos de cada van universitária.                | Para que eu possa saber todos os detalhes do serviço |
|Motorista Universitario      | especificar a quantidade de lugares disponíveis.                | evitar contato desnecessário caso a van já esteja com todos lugares ocupados.. |
|Motorista Universitario      | Divulgar quantas vagas serão disponibilizadas ao final do semestre  | conseguir preenchê-las até o início do semestre |


> A primeira história representa um caso principal do projeto, pois baseado na especificação, encontrar uma van 
> universitária, é o core da plataforma. 
>
> A segunda história representa outro core do projeto, que é a divulgação do serviço por parte do motorista, 
> evidenciando o público alvo.
> 
> A terceira história de usuário é resultada de pesquisa, foi constatado que grande parte dos estudantes 
> não tem nenhum canal que mostre uma avaliação dos motoristas por parte de quem já é cliente, de fato, um  
> feedback é muito importante e determinante em uma escolha desse tipo, por tal motivo, se tornou uma 
> história de usuário.
>
> A quarta história de usuário faz parte do projeto a partir de que constatado que é relevante além de encontrar 
> uma van, saber informações específicas sobre ela, por exemplo as fotos da van podem atrair um cliente,
> informações como se a van possui Wi-Fi, TV, pode ser de grande ajuda na tomada de decisão do universitário, 
> além do contato com aquele motorista para fechar possivelmente um contrato.


## Requisitos

O levantamento de requisitos funcionais e não funcionais, foi feito de acordo com os padrões de mercado, visando o desenvolvimento de uma plataforma sólida. As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Realizar uma listagem de transportes universitários | ALTA | 
|RF-002| Fornecer um canal de pesquisa de vans universitárias com filtros específicos para procura do transporte, faculdade, bairro de residência, horários | ALTA |
|RF-003| Forncer informações específicas de cada van universitária e seu respectivo motorista | ALTA |
|RF-004| Permitir que seja feita avaliação e feedback (pontuação/score 0 a 5 estrelas, comentário) do serviço prestado do motorista, a avaliação é feita por quem já usa/usou o serviço de determinada van ou companhia de van; | MÉDIA |
|RF-005| Portal de submissão de perfil de motorista/van universitária, onde cada motorista pode divulgar seu serviço | ALTA |
|RF-006| Sistema de criação de conta, tanto do motorista quanto do universitário. | ALTA |
|RF-007| Sistema de criação de conta do motorista, informando dados de CNH, antecedentes criminais, modelo do carro, etc | ALTA |
|RF-008| Controle de disponibilidade de vagas  | ALTA |
|RF-009| Alteração de cadastro com inclusão ou exclusão de informações  | Média |
|RF-010| Lista de espera de vagas em cada veículo  | Média |

### Requisitos não Funcionais

No âmbito dos requisitos não funcionais do projeto, será verificado:

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| O sistema deve ter usabilidade |  ALTA | 
|RNF-003| O sistema deve ter integridade |  ALTA | 
|RNF-004| O sistema deve ter disponibilidade |  ALTA | 
|RNF-005| O sistema deve ser desenvolvido centrado no usuário |  ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Incerteza de encontros presenciais, entrevistas presenciais com usuários, devido a pandemia do Covid-19. |
|03| Falta de domínio total de todas tecnologias que serão usadas, por parte de todos integrantes do grupo |
|04| Incerteza da possibilidade de um canal de avaliação, no sentido de ter pessoas dispostas a avaliar |
|05| Incerteza de reunir todas as vans e cooperativas de determinada região |

[Próxima leitura: Interface](/docs/3-Interface.md)
