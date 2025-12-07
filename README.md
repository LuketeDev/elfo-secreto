# Sorteador Secreto

Um pequeno app React para realizar um sorteio de amigo secreto (Secret Santa).<br>
Criado para o desafio número 4 da comunidade Café Bugado
<img width="1844" height="991" alt="image" src="https://github.com/user-attachments/assets/874f02ba-5ee0-4a28-a783-1c6370c9341a" />

## Tecnologias utilizadas

- React JSX
- Vite (estrutura de projeto típica)
- CSS (App.css, index.css, TailWindCSS)
- Estrutura de componentes em `src/components`
- Utilitários em `src/utils` (hooks e ícones)

## Instalação e execução (local)

1. Clone o repositório:
   ```bash
   git clone <repo-url>
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd sorteador-secreto
   ```
3. Instale dependências:
   ```bash
   npm install
   ```
4. Rode em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
   - Por padrão o Vite roda em `http://localhost:5173`
5. Build para produção:
   ```bash
   npm run build
   ```
6. Pré-visualizar build:
   ```bash
   npm run preview
   ```

(Se seu projeto usa yarn: substitua `npm` por `yarn`/`yarn dev` conforme necessário.)

## Estrutura principal

- src/
  - App.jsx — ponto de entrada da UI
  - main.jsx — bootstrap do React
  - components/
    - Header.jsx — cabeçalho
    - Listing.jsx — lista e cadastro de participantes
    - ElfCard.jsx — par de cada participante
    - Shuffled.jsx — tela pré-mostra dos pares
    - Revelation.jsx — tela de revelação de quem tirou quem
    - End.jsx — tela final e despedida
  - utils/
    - Hooks.jsx — hooks customizados
    - Icons.jsx — ícones reutilizáveis do fontawesome

## Como a lógica de sorteio foi implementada

A aplicação segue a lógica típica para um Amigo secreto:

1. Coleta de participantes

   - Usuários são adicionados via componente `Listing` e representados por `ElfCard`.
   - O estado dos participantes é mantido em um hook e persistido no localStorage.

2. Geração do sorteio (atribuição)

   - A lista de participantes é duplicada como lista de destinatários.
   - Para garantir aleatoriedade segura, é aplicado um algoritmo de embaralhamento na lista duplicada
   - Após o embaralhamento faz-se a atribuição por índice: `participante[i] => destinatário[i]`.
   - Prevenção de autoatribuição:
     - Se algum participante ficou com o próprio nome, a implementação típica resolve isso de duas formas:
       a) repetir o embaralhamento até que não existam autoatribuições; ou
       b) aplicar uma pequena correção (por exemplo, trocar o presenteado com outro índice ou rotacionar a lista) até obter uma permuta sem pontos fixos.
   - A atribuição final é armazenada e apresentada gradualmente.

3. Revelação
   - `Revelation` revela individualmente ao participante qual presenteado lhe foi atribuído, preservando o sigilo para os demais.
   - `End` exibe uma despedida e a opção de refazer o sorteio, além de resetar os dados do localStorage.

## Notas finais

- Teste com poucas entradas antes de executar com todos os participantes.
