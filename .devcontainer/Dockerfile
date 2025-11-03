FROM node:20-bullseye

# Install OS packages needed for common native modules (sharp, etc.)
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    ca-certificates \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

# Enable pnpm via corepack and make it available
RUN corepack enable && corepack prepare pnpm@latest --activate

# Create and set workspace
WORKDIR /workspace

# Copy package files for dependency caching (context is repository root)
COPY package.json pnpm-lock.yaml ./

# Ensure permissions for the non-root `node` user and install deps as that user
RUN chown -R node:node /workspace
USER node
RUN pnpm install --frozen-lockfile --ignore-scripts

# Expose Next.js default dev port
EXPOSE 3000

# Default command when container starts (can be overridden by the devcontainer)
CMD ["pnpm", "dev", "--", "-H", "0.0.0.0"]