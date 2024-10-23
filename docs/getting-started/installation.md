---
sidebar_position: 1
---

# Installation

We have a docker images for amd64 and arm64. You can find them on [docker hub](https://hub.docker.com/r/shieldauth/shield).

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 1. Clone the repository

```bash
git clone https://github.com/shield-auth/shield.git
cd shield
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env
```

### 3. Build and Start the Containers

```bash
docker compose up -d --build --wait
```

### 4. Retrieve Default credentials

The default credentials are saved in `/usr/local/bin/logs/default_cred.json.
To view them:

```bash
docker exec shield-shield-1 cat /usr/local/bin/logs/default_cred.json
```

_Note: If the above command doesn't work, use `docker ps` to find the correct
container ID for the shield container._
