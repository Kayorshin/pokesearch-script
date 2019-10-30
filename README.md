# :milky_way: pokesearch-script (uma pequena parte do projeto pokesearch)

## Descrição

Este repositório guarda o script de construção das artes dos Pokémon que serão utilizadas no projeto pokesearch.

## Começando

Para execução, realize uma cópia do projeto para o seu ambiente de desenvolvimento.

### Pré-requisitos

Mas, antes de começar, é necessário possuir o **Node.js** e **NPM** (ou **YARN**) instalados em sua máquina.

Link para download: [**Node.js**](https://nodejs.org/en/download/).

**Obs. 1**: Os dois geralmente vêm juntos, então instale apenas o **Node.js**.

**Obs. 2**: Para distribuições Linux, recomenda-se a instalação **Node.js** pelo [**NVM**](https://github.com/creationix/nvm).

### Instalando

Tendo os pré-requisitos instalados na máquina, acesse a pasta do projeto pelo terminal e rode o seguintes comandos para instalar as dependências do projeto:

```
npm install
```
ou
```
yarn
```

Como resultado, deve surgir a pasta **node_modules** no projeto.

### Estilo de codificação

Estilos de codificação foram definidos com [**Eslinter**](https://eslint.org/) e podem ser mudados no arquivo *eslintrc.json*.

**Obs. 3**: Para uma melhor representação dos avisos produzidos pelo **Eslinter**, recomenda-se o uso de um plugin/extensão do mesmo para o editor de código escolhido, como por exemplo:

- [VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Sublime](https://github.com/SublimeLinter/SublimeLinter-eslint)
- [Atom](https://atom.io/packages/linter-eslint)
- [WebStorm](https://www.jetbrains.com/help/webstorm/eslint.html)
- [Brackets](https://github.com/brackets-userland/brackets-eslint)

### Principais dependências do projeto

**Auxiliam o desenvolvimento:**
- [Eslint](https://eslint.org/)

**Auxiliam o script:**
- [Jimp](https://github.com/oliver-moran/jimp)
- [Color-thief-jimp](https://github.com/jeanmatthieud/color-thief-jimp)

### Por dentro da estrutura

Os editáveis do projeto estão organizados na pasta *src* nos seguintes subdiretórios:
**import** - possui uma imagem jpg que servirá para a construção da arte recebendo a cor de fundo.
**public** - possui as artes criadas e é o destino de escrita do script de construção;
**services** - guarda pequenos serviços que auxiliarão na construção da imagem, fornecendo informações e as diretrizes necessárias para a execução.
**index.js** - script que orquestra a construção das artes dos 807 pokémon.

### Construindo as artes

Para ver o script de construção atuando, basta rodar:

```
npm run build
```
ou
```
yarn build
```

**Obs. 4**: Para notar com mais precisão o trabalho do script, você pode excluir a pasta public e então rodar o script.

## Agradecimentos

Ao usuário [**tiphedor**](https://github.com/tiphedor) pelas sprites png dos Pokémon que foram utilizados nas artes.

## Política

Em caso de qualquer tipo de violação de direitos, por favor, entre em contato com [**kayorshin**](https://github.com/kayorshin).



