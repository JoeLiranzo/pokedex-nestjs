###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development
WORKDIR /usr/src/app
COPY --chown=node:node package.json ./
COPY --chown=node:node pnpm-lock*.yaml ./
RUN npm install -g pnpm
RUN pnpm install @nestjs/cli
RUN pnpm install --frozen-lockfile --silent
COPY --chown=node:node . .
USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine As build
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node pnpm-lock*.yaml ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile --prod && npm cache clean --force
RUN pnpm install @nestjs/cli
RUN pnpm run build
ENV NODE_ENV production
USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]
