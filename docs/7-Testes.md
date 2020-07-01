[Leitura anterior: Implementação](/docs/6-Implementação.md)

# Avaliação da Aplicação

Está seção, trás o plano de testes da solução, bem como a execução dos testes, por fim, temos a avaliação de usabilidade da plataforma, determinando assim o nível de usabilidade alcançado.

## Plano de Testes

| Item | Condições  |Resultado esperado               | Resultado Obtido  |
|--------------------|------------------------------------|----------------------------------------|------------------------------------|
| [1]Teste de filtro de pesquisa  | *Entradas de Pesquisa* Bairro: Funcionários Faculdade: PUC Minas - Barreiro | Card de Ary Barroso | Card de Ary Barroso |
| [2]Teste de filtro de pesquisa  | *Entradas de Pesquisa* Bairro: Barro Preto Faculdade: PUC Minas - Coração Eucarístico | Card de Ary Barroso | Card de Ary Barroso |
| [3]Teste de filtro de pesquisa  | *Entradas de Pesquisa* Bairro: Buritis Faculdade: PUC Minas - Barreiro | Mensagem relatando que nenhum resultado foi encontrado | Mensagem relatando que nenhum resultado foi encontrado |
| [4]Teste de filtro de pesquisa  | *Entradas de Pesquisa* Bairro: Bairro: ~entrada vazia~ Faculdade: ~entrada vazia~ | Pesquisa bloqueada e solicitação de entradas | Pesquisa bloqueada e solicitação de entradas |
| [5]Teste de cadastro de universitário  | *Entradas de Cadastro user:* user123 / senha: senha123 *Entradas de Login* user: user123 / senha: senha123 | Acesso concedido | * |
| [6]Teste de castro de universitário  | *Entradas de Cadastro user:* user: user123 / senha: senha123 *Entradas de Login* user: user: user123 / senha: erro123  | Acesso negado | * |
| [7]Teste de cadastro de motorista  | *Entradas de Cadastro user:* user: user321 / senha: senha321 / senha: erro123 *Entrada de Login user:* user321/ senha: senha321 | Acesso concedido | * |
| [8]Teste de cadastro de motorista | *Entradas de Cadastro user:* user: user321 / senha: senha321 *Entrada de Login user:* user: user321 / senha: erro321 | Acesso concedido | * |





## Ferramentas de Testes (Opcional)

[1] Testar uma entrada para que encontre apenas um resultado de pesquisa;
	[2] Testar uma entrada para que encontre mais de um resultado de pesquisa;
	[3] Testar uma entrada que não encontre resultado correspondente;
	[4] Testar se é possível fazer uma pesquisa com os campos de entrada em branco;
	[5] Testar se o cadastro do universitário foi feito corretamente, verificando se o acesso é concedido após inserir o usuário e senha corretos;
	[6] Testar se o acesso é bloqueado para uma tentativa de login falha ao inserir um usuário correto, mas uma senha errada;
[7] Mesmo teste de [5], mas para o cadastro de motorista;
[8] Mesmo teste de [6], mas para o cadastro de motorista. 

*Os teste marcados com um asterismo em na coluna de “Resultado Obtido” ainda não foram realizados pois a implementação ainda está em andamento.

Além dos testes relatados acima, são feitos testes de navegabilidade e de responsividade.
Os testes de navegabilidade são feitos navegando pela página e conferindo se os links e botões levam para as partes específicas do site, baseados no User Flow e Wireframes descritos na Seção 3 - Projeto da Interface.
Os testes de responsividade são feitos analisando o site em diferentes dispositivos e telas, para avaliar se ele é compatível em todas elas. Como um auxílio nessa etapa, é utilizado a ferramenta da Google, Mobile Friendly Test, que avalia a responsividade do site em dispositivos móveis. A plataforma é acessada pelo link a seguir: https://search.google.com/test/mobile-friendly.



## Avaliação

### Avaliação de Usabilidade 

Com o objetivo de realizar a avaliação do sistema, foi definido como avaliação adicional, o método de avaliação de usabilidade por investigação, onde a técnica empregada para esse método foi o System Usability Scale (SUS). O emprego de uma avaliação de sistema, é um dos últimos passos no desenvolvimento de software, após identificar as necessidades e requisitos de usuário, fazer o design e o re-design, e criar uma versão interativa, faz-se necessário avaliar o que foi construído, com o objetivo de consolidar o produto final. 
A avaliação por investigação, é um tipo de avaliação em que existe a participação do usuário, envolve o uso de técnicas como questionários, entrevistas, grupos de foco e estudo de campo. A avaliação por meio de investigação foi escolhida devido ao fato de que, ela permite ao avaliador, ter acesso, interpretar e analisar as concepções, opiniões e expectativas.
A técnica do SUS, consiste em um método de averiguação do nível de usabilidade de um sistema. O método foi criado por John Brooke em 1986, e se trata de um questionário contendo 10 questões em escala likert, onde existe um método de cálculo da pontuação de forma normalizada. O método foi escolhido por ser cientificamente apurado, além de não ser longo para o participante.
As perguntas do questionário são pré definidas, e não podem ser alteradas de ordem, pois a ordem interfere na realização do cálculo final. 

## Resultados 

A avaliação por investigação de usabilidade da plataforma, foi realizada entre os dias 11-05-2020 a 23-06-2020, e durante esse tempo, a equipe solicitou a participação de potenciais usuários dentro do escopo do transporte universitário, a metodologia consistiu no uso por parte dos usuários da plataforma sendo via web mobile e/ou desktop, desta forma, e após o uso da plataforma, foi solicitado o preenchimento do formulário do SUS, que foi disponibilizado via Google Forms.  A avaliação do SUS, é anônima, o usuário não deve se identificar, garantindo respostas sinceras. Durante o tempo informado, obtivemos um total de 12 avaliações, com isso, exportamos todas as respostas a uma planilha com o objetivo de realizar os cálculos do score: 93,63.

Como informado anteriormente, a comunidade de pesquisa na área de Interação Humano Computador, estabeleceu índices de referência das pontuações do SUS, desta forma a média da avaliação é 68 pontos, sendo que os índices completos são: 
- Pontuação < 60 → Inaceitável 
- Entre 60 ~ 70 → Ok
- Entre 70 ~ 80 → Bom
- Entre 80 ~ 90 → Excelente
- Pontuação > 90 → Melhor usabilidade possível 

	Com isso, a avaliação da plataforma Van GO! alcançou a pontuação de 93,63 pontos, é necessário enfatizar que a avaliação não foi enviada aleatoriamente, e sim a potenciais usuários. 
Com a avaliação, podemos responder aos 3 pilares do método de usabilidade de sistemas:

- Efetividade → Os usuários conseguem completar os seus objetivos? De acordo com o resultado alcançado, pode-se afirmar que sim, os usuários conseguem.

- Eficiência → Quanto esforço e recursos são necessários para os usuários completarem seus objetivos? As perguntas 5, 6 e 8, refletem diretamente a eficiência, e de acordo com as respostas obtidas nessas perguntas, os usuários têm de baixo a médio nível de esforço e recursos para completar os seus objetivos.

- Satisfação → A experiência dos usuários foi satisfatória? De acordo com as perguntas 1, 4 e 9, podemos definir que sim, a experiência do usuários foi satisfatória.

Com os resultados apresentados, é possível ter uma visão das perguntas, relacionadas às heurísticas de Nielsen: 
As perguntas 3, 4, 7 e 10, estão diretamente relacionadas a facilidade de aprendizagem, sendo assim à heurística de Consistência e Padronização de Nielsen, que diz que o designer deve seguir as convenções da plataforma ou ambiente, sendo assim os usuários não devem se perguntar se palavras/botões/ações diferentes representam a mesma coisa;
As perguntas 5, 6 e 8, estão diretamente relacionadas à Eficiência, sendo assim à heurística de Flexibilidade e Eficiência de uso, que diz que o sistema deve servir igualmente os usuários experientes e os inexperientes;
A pergunta 2, está relacionada a facilidade de memorização, sendo assim à heurística de Reconhecimento em vez de Memorização, que diz que o designer deve tornar os objetos ações e opções visíveis;
A pergunta 6, está relacionada a minimização de erros, sendo assim pode ser relacionada a 2 heurísticas de Nielsen, sendo a Prevenção de Erros, que diz que, deve ser evitado que um problema ocorra, sempre que possível, e também a heurística de Ajudar os Usuários com os Erros, que diz que, os erros devem ser reconhecidos, diagnosticados e recuperados, as mensagens de erros devem ser expressas em linguagens simples sem códigos de erros, além disso deve ser indicado precisamente o problema, com sugestão de uma solução de forma construtiva; 
As perguntas 1, 4 e 9, estão relacionadas a satisfação do usuário, de acordo com elas, pode-se verificar o grau de satisfação que o usuário atingiu ao interagir com a plataforma. 

## Aplicação dos resultados

A partir dos resultados apresentados, a aplicação dos conceitos obtidos, se torna fundamental no contexto da plataforma. Por se tratar de uma interface web, a plataforma tem algumas características, como sendo, o Foco no conteúdo, a Preocupação com a arquitetura da informação, e a Preocupação com a navegação.  
Inicialmente, foi adotado ajustes nas estruturas das páginas com ajustes de responsividade, corrigindo “quebras” de layout, dando mais Foco ao conteúdo, de acordo com as características de uma interface web, de acordo também com a consistência e padronização. Com base na eficiência, foi constatado que a plataforma serve igualmente a usuarios experiencia e inexperientes, sendo assim não é necessário adotar ajustes para “separar” de certa forma, usuários experientes de não experientes, observamos que atendemos aos dois igualmente. Com relação ao reconhecimento em vez da memorização, foi adotado uma cor padrão para botões, de acordo com a cor padrão da plataforma, dando maior visibilidade para o reconhecimento do usuário. Com  relação a minimização de erros, foi adotado a apresentação de mensagens em linguagem natural, e sem códigos de erros, são mostrados quando o usuário não preenche alguma informação de pesquisa, ou quando não existe resultado para a pesquisa informada. Com relação a satisfação do usuário, pode ser citada o ajuste de responsividade, que permite ao usuário o acesso a plataforma, tanto no mobile quanto no desktop, e também o ajuste nas fontes de texto, com o import do Google Fonts, permitindo maior legibilidade do conteúdo. 
Pode ser evidenciado que a avaliação de usabilidade, permitiu a equipe compreender como as pessoas se movem no site, e como as pessoas descobrem o que há no site, as funcionalidades do site, e em como as pessoas descobrem onde estão essas funcionalidades, podendo ser observado, como isso impacta ou não no uso da plataforma.
