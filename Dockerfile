FROM node:20 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=prod-deps /app/api/node_modules /app/api/node_modules
COPY --from=prod-deps /app/web/node_modules /app/web/node_modules
EXPOSE 8080
ENV NODE_ENV=production
WORKDIR /app/api
CMD [ "pnpm", "start" ]