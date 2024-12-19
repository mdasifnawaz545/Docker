FROM node:20

WORKDIR /myapp

COPY . .

RUN npm install

EXPOSE 5173

CMD [ "npm", "dev" ] 

# en charon ko execute karke ek docker image bana lo aur phir usko cmd wale command se run kar do



