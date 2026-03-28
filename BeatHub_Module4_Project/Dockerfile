# Stage 1: Builder
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

# Stage 2: Runner
FROM node:18-alpine AS runner

RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

USER appuser

WORKDIR /home/appuser/app

COPY --from=builder --chown=appuser:appgroup /app/package*.json ./
COPY --from=builder --chown=appuser:appgroup /app/node_modules ./node_modules

COPY --from=builder --chown=appuser:appgroup /app/src ./src



EXPOSE 5000


CMD ["node", "src/index.js"]