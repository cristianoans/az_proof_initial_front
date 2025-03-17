# Dashboard de Pedidos

Este projeto é uma aplicação React desenvolvida como parte de um teste de contratação, demonstrando habilidades em desenvolvimento frontend, integração com APIs e otimização de performance.

Trata-se de um **Dashboard de Pedidos** que exibe um resumo de métricas (totais de pedidos, vendas e ticket médio) e uma tabela paginada com informações detalhadas de pedidos, como ID, status, cliente e valores. O objetivo foi criar uma interface funcional, estilizada e otimizada, com foco em usabilidade e eficiência.

## Funcionalidades Principais

- **Resumo de Totais**: Exibe cards com quantidade de pedidos, vendas e ticket médio, atualizados dinamicamente.
- **Tabela de Pedidos**: Lista pedidos com colunas configuráveis (ID, data, cliente, status, etc.), incluindo formatações de moeda e data.
- **Paginação**: Permite navegar entre páginas e ajustar a quantidade de linhas exibidas por página (6, 10, 20, 50).
- **Otimização**: Inclui memoização (`React.memo`) e pré-processamento de dados para melhorar a performance ao manipular grandes quantidades de linhas.

## Como Usar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse o diretório do projeto:

```bash
cd <NOME_DO_DIRETORIO>
```

Instale as dependências:

```bash
npm install
```

### Configuração

Certifique-se de que o serviço de API (`fetchDashboardData` em `services/api.ts`) esteja configurado e acessível. O endpoint deve retornar os dados no formato esperado pelo tipo `DashboardData` (totais, paginação e pedidos).

### Execução

Inicie a aplicação:

```bash
npm run dev
```

Acesse o dashboard em [http://localhost:5173](http://localhost:5173)  no navegador.

## Uso

- **Visualizar Resumo**: Os cards na parte superior mostram as métricas totais automaticamente ao carregar.
- **Explorar Pedidos**: Use a tabela para ver os detalhes dos pedidos. Navegue entre páginas com os controles de paginação.
- **Ajustar Linhas**: Selecione o número de linhas por página no menu dropdown para personalizar a visualização.

## Otimizações Implementadas

- **Memoização**: O componente `DashboardTable` usa `React.memo` para evitar rerenderizações desnecessárias.
- **Pré-processamento**: Formatações (data, moeda, traduções) são feitas antes da renderização da tabela, reduzindo o impacto na performance.

---

