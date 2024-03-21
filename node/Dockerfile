# #Stage 1 - build
# FROM node:20-bookworm-slim

# WORKDIR /src

# COPY package*.json ./
# COPY tsconfig.json ./

# RUN npm install

# COPY ./src ./src

# EXPOSE 3000

# CMD ["npm","run", "build"]

# Stage 1: Node.js dependencies
FROM node:20-bookworm-slim

RUN apt-get update && \
    apt-get install -y python3 python3-pip python3-venv graphviz && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /src

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY ./src ./src

EXPOSE 3000
RUN python3 -m venv /venv
ENV PATH="/venv/bin:$PATH"

RUN pip install diagrams

CMD ["npm", "run", "build"]