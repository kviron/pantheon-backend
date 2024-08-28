### Базовые настройки

1. Порт базы данных `5432`
2. Порт сервера `4200`
3. Адрес админера <a href="http://localhost:8080">http://localhost:8080</a>
4. Адрес swagger <a href="http://localhost:8080">http://localhost:4200/api/</a>

## Установка

Создаем файл окружения .env

```bash
$ copy .env.example .env
```

Если нужно меняем настройки под наши нужды.

Устанавливаем контейнеры докера

```bash
$ docker compose up --build -d
```

Делаем первоначальный пуш

```bash
$ yarn db:push
```

После нужно сгенерировать типы для typescript

```bash
$ yarn db:generate
```

## Все команды

Запускаем сервер (Запускаеться по умолчанию при старте)

```bash
$ docker-compose exec nestjs yarn run start:dev
```

Генерация типов из бд

```bash
$ docker-compose exec nestjs npx prisma generate
```

Создание миграции

```bash
$ docker-compose exec nestjs npx prisma migrate dev --name init
```

Пуш в базу данных

```bash
$ docker-compose exec nestjs npx prisma db push
```

Собрать проект

```bash
$ docker-compose exec nestjs yarn run build
```

Запустить проект в рабочем состоянии

```bash
$ docker-compose exec nestjs yarn start
```

Запустить проект в продакшен

```bash
$ docker-compose exec nestjs yarn start:prod
```
