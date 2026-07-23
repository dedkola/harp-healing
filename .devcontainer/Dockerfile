FROM node:24-bookworm-slim

ARG PNPM_VERSION=11.1.0

RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

USER node
WORKDIR /workspace

EXPOSE 3000

CMD ["sleep", "infinity"]
