# Etapa 1: build da aplicação Angular
FROM node:20 AS build

WORKDIR /app

# Copiar apenas os arquivos de dependência primeiro para aproveitar cache
COPY package*.json ./

# Instalar dependências com flags para evitar conflitos
RUN npm install

# Copiar o restante do código
COPY . .

# Build do projeto Angular (se estiver usando "start", talvez não precise)
# Descomente se quiser buildar para produção
# RUN npm run build -- --configuration production

# Etapa 2: executar em ambiente de desenvolvimento (usando ng serve)
EXPOSE 4200

CMD ["npm", "start"]
