<md-hidden>
🛑 Данный туториал отображается на GitHub 🔴 не корректно! Это лишь исходник.<br>
Правильная версия https://www.epic1h.com/build_conduit
</md-hidden>

# Туториал: собираем Conduit локально

Подойдет тем, кто хочет научится запускать и тестировать проекты в режиме разработки.

#GitHub #Docker #Postgres #Фронтенд #Бекенд

# 👍 Что сделаем

* **Форкнем** проект на GitHub.
* Установим Postgres в **Docker** контейнере.
* Запустим локально **фронтенд** и **бекенд** проекта.
* Научимся **сбрасывать базу** перед запуском End-To-End тестов.

# 😍 Живая обратная связь

<import from="/partials/zoom_standups.md"></import>

# 💪 Минутка мотивации

То, что ты сегодня узнаешь — знают **настоящие ниндзя 🥷**

Твой пусть тернист, но ты все сможешь, как этот парень!

<iframe src="https://giphy.com/embed/ccWbpIWwYi3BVGGZPc" 
    width="480" height="398" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

# 🙋‍ Перед началом

* Отключи все мессенджеры.
* Заварите вкусный чаёк.
* Оденься нарядно как на работу.
* Повесь на дверь табличку — не беспокоить 🙅‍♂️

# ✍️ По ходу туториала

* Ведите конспект.
* Выписывай термины своими словами.
* Выписывай вопросы со скриншотами для стендапа с мастером.

# 🔢 Шаги

<mark>Если что-то не получается ищи в конце каждого шага скринкаст 📹</mark>

## +1. Заводим GitHub аккаунт

- [x] Зарегистрируйся на https://github.com/ используя советы:

Создай красивый **логин:**

| 🟢                | 🔴          |
| ---------------- | ---------- |
| breslavsky       | vovan2023  |
| abreslavsky      | malishka15 |
| anton_breslavsky | test271631 |

Заполни имя на **английском:**

|        🟢         |    🔴     |
| :--------------: | :------: |
| Anton Breslavsky | Петрович |
| Anton Breslavsky |  Иришка  |
| Anton Breslavsky | Сталкер  |

- [x] Заполни профиль на английском: аватар, био, город, ссылку на LinedIn профиль.

***

- [x] Открой терминал — Git Bash.

<img class="cornered" title="Как запустить Git Bash" 
    width="670" height="435"
    src="assets/build_conduit/run_git_bash.gif">

- [x] Сгенерируй новую **пару RSA** ключей:

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

***

- [x] Проверь подключение через Git Bash:

```bash
ssh -T git@github.com
```

- [x] Проверь сообщение на экране:

```text
You've successfully authenticated, but GitHub does not provide shell access.
```

<video class="how-to" title="Как проверить подключение к GitHub"
    width="711" height="305" loop autoplay muted>
    <source src="assets/build_conduit/check_github.webm" type="video/webm">
</video>

- [x] Переведи сообщение на русский.

<details>
  <summary>Не получается 📹</summary>

<video width="600px" controls>
  <source src="assets/build_conduit/get_github.webm" type="video/webm">
</video>
</details>

* ❓ Почему GitHub must have №1 в IT?
* ❓ Зачем его используют программисты?
* ❓ Почему ключей пара?
* ❓ Что такое открытый и закрытый ключ?
* ❓ У кого хранится закрытый ключ?
* ❓ Кому можно передавать открытый ключ?
* ❓ Что такое RSA?
* ❓ Что такое SSH и shell access?
* ❓ Как через открытый ключ GitHub нас идентифицировал?

***

## +2. Форкаем Conduit

И снова твой любимый 🫶 мама проект.

Conduit имеет **множество реализаций** на разных языках программирования.

Начинающие разработчики на нем **тренируются.**

- [x] Открой проект на [GitHub](https://github.com/gothinkster/realworld)
- [x] Найди комментарий:

> See how the exact same Medium.com clone (called Conduit) is built 
> 
> using different frontends and backends.

- [x] Перейди по ссылке [backends](https://codebase.show/projects/realworld?category=backend)
- [x] Выбери в меню **Fullstack.**
- [x] Найди **Express + React + Sequelize**
- [x] Перейди по ссылке [TonyMckes/conduit-realworld-example-app](https://github.com/TonyMckes/conduit-realworld-example-app)
- [x] Нажми <img class="cornered" title="Form проекта на GitHub" width="141" height="28" src="assets/build_conduit/git_fork.webp"> на странице **репозитория** проекта.
- [x] Создай Fork проекта **внутри своего аккаунта.**

<img class="cornered" title="Как сделать Fork проекта" 
    width="748" height="527"
    src="assets/build_conduit/fork_conduit.webp">

- [x] Проверь, что репозиторий создан:

<img class="cornered" title="Fork проекта Conduit" 
    width="519" height="63"
    src="assets/build_conduit/forked_conduit.webp">

***

- [x] Прочитай и переведи `README.md`

<details>
  <summary>Не получается 📹</summary>

<video width="600px" controls>
  <source src="assets/build_conduit/fork_conduit.webm" type="video/webm">
</video>
</details>

* ❓ Что такое Fullstack?
* ❓ Что такое React?
* ❓ Что такое Express?
* ❓ Что такое Sequelize?
* ❓ Что такое репозиторий?
* ❓ Что такое Fork?
* ❓ Зачем нужен Fork?

## +3. Клонируем репозиторий

<mark>Что бы работать с репозиторием локально, его нужно клонировать с облака.</mark>

- [x] Нажми **Code** на странице репозитория и **скопируй путь.**

<video class="how-to"  title="Clone проекта на GitHub"
    width="414" height="381" loop autoplay muted>
    <source src="assets/build_conduit/git_clone.webm" type="video/webm">
</video>

- [x] Открой терминал — Git Bash.
- [x] Выведи текущую папку:

```bash
pwd
```

- [x] Перейди в папку, где ты хранишь проекты для Cypress:

```bash
cd ~/projects/cypress/
```

- [x] Вставь **свою команду клонирования** из буфера обмена:

```bash
git clone git@github.com:{your_account}/conduit-realworld-example-app.git
```

<details>
  <summary>Не получается 📹</summary>

<video width="600px" controls>
  <source src="assets/build_conduit/clone_repository.webm" type="video/webm">
</video>
</details>

* ❓ Что делает `git clone`?
* ❓ Куда ведет папка `~`?

***

## +4. Запускаем проект

- [x] Открой папку проекта в **Visual Code.**
- [x] Установи **зависимости** проекта из файла манифеста:

```bash
npm ci
```

- [x] Запусти проект в режиме разработки:

```bash
npm run dev
```

- [x] Открой в Chrome http://localhost:3000/

<details>
  <summary>Не получается 📹</summary>

<video width="600px" controls>
  <source src="assets/build_conduit/run_conduit.webm" type="video/webm">
</video>
</details>

* ❓ Откуда мы знаем про эти команды?
* ❓ Где хранится файл манифеста?
* ❓ Что делает `npm ci`?
* ❓ За что отвечает файл `package-lock.json`?

***

## +5. Ставим Postgres

Текущая **реализация** Conduit требует СУБД Postgres.

<mark>Можно поставить Postgres просто как обычную программу, а можно по **трушному** — через Docker.</mark>

- [x] Останови проект в терминале `CTRL`+`C`
- [x] Скачай и установи Docker с https://www.docker.com/
- [x] Если потребуется, перезагрузи систему. 
- [x] Запусти  Docker Desktop.

***

- [x] Открой терминал Git Bash в Visual Code в проекте.
- [x] Запусти контейнер для Postgres:

```bash
docker run --name conduit_postgres -p 5432:5432 -e POSTGRES_PASSWORD=zyxxyz -d postgres
```

- [x] Проверь, что контейнер запущен:

```bash
docker ps
```

- [x] Войди в контейнер:

```bash
docker exec -it conduit_postgres bash
```

- [x] Проверь, что Postgres принимает подключения **(команда за командой):**

```bash
su postgres
psql
\conninfo
\q
exit
exit
```

<img class="cornered" title="Проверка подключения к Postgres" 
    width="738" height="232"
    src="assets/build_conduit/check_postgres.gif">

<details>
  <summary>Не получается 📹</summary>

<video width="600px" controls>
  <source src="assets/build_conduit/install_postgres.webm" type="video/webm">
</video>
</details>

* ❓ Что такое СУБД?
* ❓ Что такое Postgres?
* ❓ Что такое контейнер?
* ❓ Кто такой `root`?
* ❓ Что делает `POSTGRES_PASSWORD=zyxxyz`?

***

## +6. Инициализируем базу данных

Базой данных управляет <md-placeholder value="бекенд"></md-placeholder> и нужно подключить его к Postgres.

- [x] Открой новый терминал и **перейди в папку** бекенда:

> ❗ Не забывай про авто-дополнение через `TAB`

```bash
cd backend
```

- [x] Создай `.env` файл из примера:

```bash
cp .env.example .env
```

- [x] Отредактируй файл `~/backend/.env`

```text
JWT_KEY=some_secret

DB_USER=postgres
DB_PASSWORD=zyxxyz
DB_DATABASE=conduit
```

- [x] ❗ Если ты на Windows, установи дополнительно пакет:

```bash
npm i -g win-node-env
```

Более подробно об этом можно почитать на [Stack Overflow](https://stackoverflow.com/questions/11928013/node-env-is-not-recognized-as-an-internal-or-external-command-operable-comman)

* ❓ Что делает параметр `-g`?

- [x] Создай базу данных:

```bash
npx sequelize-cli db:create
```

<img class="cornered" title="Создание базы данных через Sequelize" 
    width="567" height="148"
    src="assets/build_conduit/database_created.webp">

- [x] Открой новый терминал.
- [x] Запусти проект в режиме разработки:

```bash
npm run dev
```

- [x] Открой в Chrome http://localhost:3000/

<details>
  <summary>Не получается 📹</summary>

<video width="600px" controls>
  <source src="assets/build_conduit/create_db.webm" type="video/webm">
</video>
</details>

* ❓ Что делает команда `cp`?
* ❓ Почему мы прописали пользователя `postgres`?
* ❓ Почему мы поставили пароль `zyxxyz`?
* ❓ За что отвечает файл `.env`?

***

## +7. Наполняем базу

Как ты видишь, система пустая.

<img class="cornered" title="Пустой проект Conduit" 
    width="592" height="401"
    src="assets/build_conduit/empty_conduit.webp">

- [x] Открой новый терминал.
- [x] Войди в контейнер c Postgres:

```bash
docker exec -it conduit_postgres bash
```

- [x] Подключись к базе данных `conduit`

```bash
su postgres
psql
\c conduit
```

- [x] Посмотри **доступные таблицы** в базе:

```bash
\dt
```

<block>

Список таблиц в базе:

```text
           List of relations
 Schema |   Name    | Type  |  Owner   
--------+-----------+-------+----------
 public | Articles  | table | postgres
 public | Comments  | table | postgres
 public | Favorites | table | postgres
 public | Followers | table | postgres
 public | TagList   | table | postgres
 public | Tags      | table | postgres
 public | Users     | table | postgres
(7 rows)
```

</block>

***

- [x] Выбери все статьи:

```sql
select count(id) from "Articles";
```

<block>

Статей нет:

```text
 count 
-------
     0
```

</block>

***

- [x] Переключись на терминал с бекендом.
- [x] Загрузи **мок данные** в базу:

```bash
npx sequelize-cli db:seed:all
```

***

- [x] Вернись в терминал докера и снова выбери статьи:

> ❗ Используй историю команд через `↑`

```sql
select count(id) from "Articles";
```

<img class="cornered" title="Заполнение базы данных через Sequelize" 
    width="1002" height="240"
    src="assets/build_conduit/db_seed.gif">

<block>

Теперь статьи есть:

```text
 count 
-------
    55
```

</block>

- [x] Обнови страницу http://localhost:3000/
- [x] Убедись, что видишь статьи.

<details>
  <summary>Не получается 📹</summary>

<video width="600px" controls>
  <source src="assets/build_conduit/db_seed.webm" type="video/webm">
</video>
</details>

* ❓ Что такое `seed`?

***

## +8. Сброс базы перед тестом

- [x] В новом терминале установи свежий Cypress:

```bash
npm i cypress --save-dev
```

- [x] Создай файл конфигурации Cypress `~/cypress.config.js`

```js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000/',
        supportFile: false
    }
});
```

- [x] Создай файл `~/cypress/e2e/signup.cy.js`:

```js
describe('Sign up', () => {

    before(() => {
        cy.exec('npx -w backend sequelize-cli db:seed:undo:all')
            .its('code').should('eq', 0);
        cy.exec('npx -w backend sequelize-cli db:seed:all')
            .its('code').should('eq', 0);
    });

    beforeEach(() => {
        cy.visit('/');
        cy.get('.navbar').should('be.visible').as('appHeader');
    });

    it('should do register user', () => {

        cy.get('@appHeader').find('a[href$="/register"]').click();
        cy.url().should('include', '/#/register');

        cy.get('.auth-page').as('registerPage');
        cy.get('@registerPage').find('h1').should('have.text', 'Sign up');
        cy.get('@registerPage').find('form').should('be.visible').as('signupForm');
        cy.get('@signupForm').find('input[name=username]').type('test');
        cy.get('@signupForm').find('input[name=email]').type('test@test.com');
        cy.get('@signupForm').find('input[name=password]').type('xyzXYZ123_');
        cy.get('@signupForm').find('button').click();

        cy.get('@appHeader').should('contain.text', 'test');

    });

});
```

<details>
  <summary>❗ Особенность для тех кто на Windows</summary>

Запускать `npx cypres open` нужно через терминал **Power Shell.**

Не через 🙅‍♂️ **Git Bash** — иначе `cy.exeс` работать не будет! 

Подробно о проблеме можно почитать на [GitHub](https://github.com/cypress-io/cypress/issues/789#issuecomment-576706393)
</details>

- [x] Запусти Cypress.
- [x] Проверь, что тест 🟢 проходит.
- [x] Закомментируй хук `before`

* ❓ Почему тест 🔴 провален?

***

- [x] Верни **хук** обратно.

<details>
  <summary>Не получается 📹</summary>

<video width="600px" controls>
  <source src="assets/build_conduit/reset_db.webm" type="video/webm">
</video>
</details>

* ❓ Что делает `cy.exec`?
* ❓ Что за параметр `-w backend`?
* ❓ Что возвращает `its('code')`?
* ❓ Что делает `db:seed:undo:all`?

***

Та да 🥳 Ты дошел до конца.

# Читать и смотреть

<iframe width="560" height="315" src="https://www.youtube.com/embed/jlvK4pLoViI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

* [Что такое контейнер](https://www.docker.com/resources/what-container/)
* [Docker для начинающих](https://www.youtube.com/watch?v=n9uCgUzfeRQ)
* [Полный гайд по NPM для новичков](https://www.youtube.com/watch?v=FDfvuNbSs4U)

# 😭 Домашка

- [ ] Изучи еще полезные Docker команды:

```bash
docker ps
docker logs --follow conduit_postgres
docker stop conduit_postgres
docker start conduit_postgres
docker rm conduit_postgres
docker system prune --all
```

# 🙏 Фидбек пожалуйста

<import from="/partials/tutorial_feedback.md"></import>