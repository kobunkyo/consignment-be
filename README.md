# Backend project for Myga

## Requirement
[PostgreSQL 17](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) (Required)
[pgAdmin4](https://www.pgadmin.org/download/pgadmin-4-windows/) (Optional)
## How to use
1. Intall all depedencies in terminal
   ```bash
   npm install
   ```
2. Make `.env` file (you can see the reference in `.env.development`)
3. Migrate the database schema
   ```bash
   npx prisma db push
   ```
4. Seed the database
   ```bash
   npx prisma db seed
   ```
5. Run the project
   ```bash
   node .
   ```
