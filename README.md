# Welcome to Magic link auth!
This is a simple example of how to implement magic link authentication in your app.
The step by step tutorial is available on medium [here](https://carbonable.medium.com/338d2896b8bd).

## Prerequisites 

### Database

In this tutorial we are using [Prisma](https://www.prisma.io/) as ORM and Postgres as database.
So you need to have a postgres database running on your machine.

### Environment variables
You should create a `.env` file at the root of the project and add the following variables:

```sh
DATABASE_URL="postgresql://postgres:@localhost:5432/yourdatabasename?schema=public"

SESSION_EXPIRATION_IN_SECONDS="A number in seconds"
SESSIONS_SECRETS="A random string"
HASH_SECRET="A valid salt for bcrypt"

MAILJS_PUBLIC_KEY="Your mailjs public key"
MAILJS_PRIVATE_KEY="Your mailjs private key"
MAILJS_SERVICE_ID="Your mailjs service id"
MAILJS_TEMPLATE_ID="Your mailjs template id"
```

### Setup
```sh
npm install
```

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

