<md-hidden>
🛑 Данный туториал отображается на GitHub 🔴 не корректно! Это лишь исходник.<br>
Правильная версия https://www.epic1h.com/build_conduit
</md-hidden>

# Туториал: собираем Conduit локально

Подойдет тем, кто хочет научится запускать проекты в режиме разработки.

# 👍 Что сделаем

* Форкнем проект с GitHub.
* Установим Postgres в Docker контейнере.
* Выполним обновление **автоматически.**

# 🔢 Шаги

## 1. GitHub аккаунт

- [x] Зарегистрируйся на https://github.com/ используя советы:

Создай красивый **логин:**

|         🟢        |     🔴     |
|------------------|------------|
| breslavsky       | vovan2023  |
| abreslavsky      | malishka15 |
| anton_breslavsky | test271631 |

Заполни имя на **английском:**

|         🟢        |    🔴    |
|:----------------:|:--------:|
| Anton Breslavsky | Петрович |

- [x] Заполни профиль: аватар, био.
- [x] Открой терминал — Git Bash.

<img class="cornered" title="Как запустить Git Bash" 
    width="670" height="435"
    src="assets/build_conduit/run_git_bash.gif">

- [x] Набери команду генерации ключей:

```bash
ssh-keygen -t rsa
```

- [x] На все вопросы нажми `ENTER`
- [x] Выведи на экран свой **публичный ключ:**

```bash
cat ~/.ssh/id_rsa.pub
```

- [x] Скопируй ключ в буфер обмена:

<img class="cornered" title="Как скопировать публичный RSA ключ" 
    width="614" height="180"
    src="assets/build_conduit/public_key.webp">

- [x] На GitHub зайди **Settings &rarr; SSH and PGP keys.**
- [x] Нажми **New SSH key.**
- [x] Добавь ключ с именем **Main key.**

<img class="cornered" title="Как добавить SSH ключ в GitHub" 
    width="820" height="507"
    src="assets/build_conduit/add_ssh_key.webp">

- [x] Проверь подключение через Git Bash:

```bash
ssh -T git@github.com
```

- [x] Проверь сообщение на экране:

```text
You've successfully authenticated, but GitHub does not provide shell access.
```

<img class="cornered" title="Как проверить подключение к GitHub" 
    width="670" height="359"
    src="assets/build_conduit/check_github.gif">

- [x] Переведи сообщение на русский.

* ❓ Почему GitHub must have №1 в IT?
* ❓ Зачем его используют программисты?
* ❓ Что такое открытый и закрытый ключ?
* ❓ У кого хранится закрытый ключ?
* ❓ Кому можно передавать открытый ключ?
* ❓ Что RSA?
* ❓ Как через открытый ключ GitHub нас идентифицировал?

## 2. Форкаем Conduit

И снова твой любимый мама проект.

Conduit имеет **множество реализаций** на разных языках программирования.

Начинающие разработчики на нем **тренируются.**

- [x] Открой проект на [GitHub](https://github.com/gothinkster/realworld)
- [x] Найди комментарий:

> See how the exact same Medium.com clone (called Conduit) is built using different frontends and backends.

- [x] Перейди по ссылке [backends](https://codebase.show/projects/realworld?category=backend)
- [x] Выбери в меню **Fullstack.**
- [x] Найди **Express + React + Sequelize**
- [x] Перейди по ссылке [TonyMckes/conduit-realworld-example-ap](https://github.com/TonyMckes/conduit-realworld-example-app)
- [x] Нажми **Fork** <img class="cornered" title="Form проекта на GitHub" width="191" height="28" src="assets/build_conduit/github_fork.webp"> на странице репозитория проекта.
- [x] Создай Fork проекта **внутри своего аккаунта.**

<img class="cornered" title="Как сделать Fork проекта" 
    width="748" height="527"
    src="assets/build_conduit/fork_conduit.webp">

- [x] Проверь, что репозиторий создан:

<img class="cornered" title="Fork проекта Conduit" 
    width="519" height="63"
    src="assets/build_conduit/forked_conduit.webp">

- [x] Прочитай и переведи `README.md` проекта. 

* ❓ Что такое Fullstack?
* ❓ Что такое React?
* ❓ Что такое Express?
* ❓ Что такое Sequelize?
* ❓ Что такое репозиторий?
* ❓ Что такое Fork?
* ❓ Зачем нужен Fork?

## 2. Клонируем репозиторий

<mark>Что бы работать с репозиторием локально, его нужно клонировать с облака.</mark>

- [x] Нажми **Clone** на странице репозитория и **скопируй путь.**

<img class="cornered" title="Clone проекта на GitHub" 
    width="400" height="365"
    src="assets/build_conduit/git_clone.gif">

- [x] Открой терминал — Git Bash.
- [x] Перейди в папку, где ты хранишь проекты для Cypress:

```bash
pwd
cd ~/projects/cypress/
```

- [x] Вставь **свою команду клонирования** из буфера обмена:

```bash
git clone git@github.com:{your_account}/conduit-realworld-example-app.git
```

* ❓ Что делает `git clone`?
* ❓ Куда ведет папка `~`?

## 3. Запускаем проект

- [x] Открой папку проекта в **Visual Code.**
- [x] Установи **зависимости** проекта из файла манифеста:

```bash
npm i
```

- [x] Запусти проект в режиме разработки:

```bash
npm run dev
```

- [x] Открой в Chrome http://localhost:3000/

* ❓ Откуда мы знаем про эти команды?

## 4. Ставим Postgres

Текущая реализация Conduit требует СУБД Postgres.

<mark>Можно поставить Postgres отдельно, а можно по **трушному** — через Docker.</mark>

- [x] Останови проект в терминале `CTRL`+`C`
- [x] Скачай и установи Docker с https://www.docker.com/

<img class="cornered" title="Fork проекта Conduit" 
    width="670" height="471"
    src="assets/build_conduit/install_docker.gif">

- [x] Если потребуется перезагрузи систему. 
- [x] Запусти  Docker Desktop.
- [x] Открой терминал Git Bash в Visual Code в проекте.
- [x] Запусти контейнер для Postgres:

```bash
docker run --name conduit_postgres -p 5432:5432 -e POSTGRES_PASSWORD=xyzzyx -d postgres
```

- [x] Проверь, что контейнер запущен:

```bash
docker ps
```

- [x] Останови контейнер:

```bash
docker stop conduit_postgres
```

- [x] Проверь, что контейнер остановлен:

```bash
docker ps
```

- [x] Снова запусти контейнер:

```bash
docker start conduit_postgres
```

- [x] Проверь, что контейнер запущен.

## 4. Инициализируем базу

***


# Домашка

```bash
docker rm conduit_postgres
docker system prune

npx -w backend sequelize-cli db:create
npx -w backend sequelize-cli db:seed
npx -w backend sequelize-cli db:seed:all

npx -w backend sequelize-cli db:seed:undo:all
```