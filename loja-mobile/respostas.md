# Respostas - Aula 07: Context API na Loja Mobile

## 1. O texto do input de login devia estar no AuthContext? Porquê?

Não. O texto que se escreve no input é estado local: só o formulário do Perfil precisa dele enquanto se escreve. Os outros componentes não precisam de saber o que está a ser digitado.

O que deve ser global é o resultado do login, ou seja, o utilizador (`usuario`), porque o Header e o Perfil precisam dele. Se o texto do input estivesse no contexto, todos os componentes que usam o AuthContext voltariam a renderizar a cada letra escrita, sem necessidade.

## 2. Quando o carrinho muda, que componentes voltam a renderizar?

Voltam a renderizar os componentes que usam `useCart()`: o Header (contador de itens), a TabBar (rótulo "Carrinho (n)"), o CarrinhoScreen (lista e total) e o AddButton de cada produto.

O ProductCard e o ProdutosScreen não usam o carrinho, por isso não precisam de ser atualizados por causa dele. O ThemeContext também não é afetado.

## 3. Porque usámos três contextos em vez de um só?

Porque são dados diferentes, que mudam em momentos diferentes e interessam a partes diferentes da app: o tema, o carrinho e o utilizador.

Com um contexto único, qualquer alteração (por exemplo, adicionar um produto ao carrinho) faria renderizar de novo todos os componentes que usam o contexto, mesmo os que só precisam do tema. Com três contextos, cada componente lê só o que precisa. O código também fica mais organizado e fácil de manter, com cada contexto a ter uma responsabilidade.

## 4. Em que caso trocariam Context por Redux ou Zustand?

Trocaria quando a app crescesse e o estado global ficasse grande e complexo: muitos dados partilhados, atualizações muito frequentes ou lógica de estado complicada (por exemplo, pedidos a uma API, vários utilizadores, histórico de compras).

O Context faz renderizar de novo todos os consumidores quando o valor muda. O Redux e o Zustand permitem que cada componente subscreva só a parte do estado de que precisa, e o Redux traz ainda ferramentas de depuração. Para uma app pequena como esta, o Context chega.