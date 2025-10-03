# 🌱 Database Seeder & Model Generator

This directory contains tools and utilities for seeding the database and generating TypeORM entities for the RAWG Fullstack project.

## 📋 Prerequisites

- Node.js installed
- MySQL database running
- Access to the `rawgDatabase`

## 🚀 Quick Start

### 1. Initialize Project

```bash
npm init -y
```

### 2. Install Dependencies

#### Production Dependencies

```bash
npm install mysql2@3.12.0 reflect-metadata@0.2.2 typeorm@0.3.21 typeorm-model-generator
```

#### Development Dependencies

```bash
npm install -D ts-node
```

## 🛠 TypeORM Model Generator

### Installation

You can install the TypeORM model generator either globally or locally:

#### Global Installation

```bash
npm install -g typeorm-model-generator
```

#### Local Installation (Project-specific)

```bash
npm install typeorm-model-generator
```

### Usage

#### Basic Command Structure

```bash
typeorm-model-generator -h <host> -p <port> -d <database> -u <username> -e <engine> -x <password>
```

#### Example Commands

**For localhost setup:**
Generate the entities: 

```bash
typeorm-model-generator -h localhost -p 3307 -d rawgDatabase -u root -e mysql -x 1234
```

**For remote server:**

```bash
typeorm-model-generator -h server -p port -d rawgDatabase -u user-name -e mysql -x password
```

## 📚 Dependencies Overview

| Package                   | Version | Purpose                                        |
| ------------------------- | ------- | ---------------------------------------------- |
| `mysql2`                  | 3.12.0  | MySQL database driver                          |
| `reflect-metadata`        | 0.2.2   | Metadata reflection for decorators             |
| `typeorm`                 | 0.3.21  | TypeScript ORM for database operations         |
| `typeorm-model-generator` | Latest  | Generate TypeORM entities from database schema |
| `ts-node`                 | Latest  | TypeScript execution environment (dev only)    |

## 📖 Additional Resources

- [TypeORM Model Generator Documentation](https://www.npmjs.com/package/typeorm-model-generator)
- [TypeORM Model Generator Documentation](https://www.npmjs.com/package/typeorm)
- [TypeORM Official Documentation](https://typeorm.io/)

## 🔧 Configuration

Make sure your database connection parameters match your MySQL setup:

- **Host**: localhost (or your database server)
- **Port**: 3307 (default MySQL port is 3306)
- **Database**: rawgDatabase
- **Username**: root (or your database user)
- **Password**: Your database password

---

_Generated entities will be created in the `output/entities/` directory._
