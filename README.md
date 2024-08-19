## Installation

```bash
$ docker compose up --build -d
```

### Генерация типов из бд
```bash
$ docker-compose exec nestjs npx prisma generate
```

### Создание миграции
```bash
$ docker-compose exec nestjs npx prisma migrate dev --name init
```

### Пуш в базу данных
```bash
$ docker-compose exec nestjs npx prisma db push
```

### Базовые настройки
1. Порт базы данных `5432`
2. Порт сервера `4200`
3. Адрес админера <a href="http://localhost:8080">http://localhost:8080</a>
4. Адрес swagger <a href="http://localhost:8080">http://localhost:4200/api/</a>