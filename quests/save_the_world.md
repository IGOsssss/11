# Квест: спасти мир от хакера Hакатика

> После выполнения заданий посмотри видео-разбор внизу туториала 👇

У нас плохие новости Док 😪

Систему безопасности **Пентагона** взломал китайский ☠️ хакер **Hакатика Hаебyка**.

<iframe src="https://giphy.com/embed/l4FGF4DVYSeS5oIx2"
width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

Он активировал запуск ядерных ракет **через 1 час** и полностью переписал оболочку системы управления.

Теперь никто не может войти в систему и отменить запуск 😱

**Вся надежда на тебя или 3 мировая неизбежна!**

<iframe src="https://giphy.com/embed/XUFPGrX5Zis6Y"
width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

***

Этот хакер **очень хитрый**, он сделал так, что через обычный браузер не возможно управлять системой.

**Ты должен написать скрипт авторизации и отмены запуска через Cypress.**

Мы верим в тебя! **Помни, каждая деталь имеет значение!**

***

# +1. Вход в систему

Что бы ввести коды отмены, нужно сначала **войти в систему.**

После взлома, мы нашли на наших серверах ряд файлов.

Один из них `colors_for_digits.txt`

<block>

```txt
8: 0, 50, 255
2: 30, 30, 80
6: 0, 0, 255
5: 0, 255, 0
7: 0, 155, 255
3: 0, 255, 120
1: 0, 120, 0
4: 255, 120, 0
9: 0, 0, 0
0: 255, 0, 0
```

</block>

Еще был файл `pin.txt`

<block>

Вояджер 1 DDMMYYYY

</block>

Мы так и не смогли расшифровать этот код, но наши программисты нашли что-то интересное в **🔥 инструментах
разработчика.**

## Что делать

- [x] Открой взломанную хакером [оболочку](https://breslavsky.github.io/hello-cypress/apps/pentagon.html) в Chrome и
  Cypress.
- [x] Попробуй понять зачем нужны данные из первого файла.
- [x] Подготовь кнопки цифр для ввода пина.
- [x] Введи пин.

Подсказка ниже 👇

***

<details>
  <summary>Подсказка 1</summary>

В Cypress через `invoke` задай цвет фона для каждой кнопки из файла `colors_for_digits.txt`

</details>

Еще подсказка ниже 👇

***

<details>
  <summary>Подсказка 2</summary>

Пин — это дата запуска **Вояджера 1**, а именно 05.09.1977 но только в формате `DDMMYYYY`

</details>

Еще подсказка ниже 👇

***

<details>
  <summary>Подсказка 3</summary>

```js
cy.visit('https://breslavsky.github.io/hello-cypress/apps/pentagon.html');

const colors = [
    'rgb(255, 0, 0)',
    'rgb(0, 120, 0)',
    'rgb(30, 30, 80)',
    'rgb(0, 255, 120)',
    'rgb(255, 120, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(0, 155, 255)',
    'rgb(0, 50, 255)',
    'rgb(0, 0, 0)'
];

for (let i = 0; i < 10; i++) {
    let color = colors[i];
    cy.get('.digit' + i)
        .invoke('css', 'background-color', color)
        .invoke('css', 'background-color')
        .should('eq', color);
}

const pin = '05091977';
for (let i = 0; i < pin.length; i++) {
    cy.get('.digit' + pin[i]).click();
}
```

</details>

***

# +2. Ввод кодов отмены

Этот **Hакатика** ненормальный 😵‍💫

Что бы в ручную нельзя было быстро ввести коды отмены, он сделал для каждой ракеты отдельное поле 🤯

Как мы поняли, коды хранятся в этом файле `cancel_codes.txt`

<block>

```text
1   ?   9   ?   25     ?
↓   ↓   ↓   ↓   ↓      ↓
50  49  48  47  46 ... 1
```

</block>

Но в нем, есть пробелы, часть информации потеряна.

## Что делать

- [x] Открой [оболочку](https://breslavsky.github.io/hello-cypress/apps/pentagon.html#codes) на этапе ввода кодов отмены
  в Chrome.
- [x] Попробуй понять, что ты видишь на экране и что делать.
- [x] Как увидишь поля ввода, экспериментируй с вводом.
- [x] Попробуй понять закономерность в кодах.

Подсказка ниже 👇

<details>
  <summary>Подсказка 1</summary>

В инструментах разработчика переключись на эмуляцию экрана телефона.

</details>

Еще подсказка ниже 👇

***

<details>
  <summary>Подсказка 2</summary>

Вводить коды запуска нужно с последнего 50 до 1: `1, 4, 9, 16, 25, 36 ... 2500`

</details>

Еще подсказка ниже 👇

***

<details>
  <summary>Подсказка 3</summary>

```js
cy.viewport('iphone-x');
for (let i = 0; i < 50; i++) {
    const j = 50 - i;
    cy.get('.code' + i).type(j * j);
}
```

</details>

***

# +3. Отмена запуска

У нас осталось мало времени! Осталось только нажать на кнопку Док!

## Что делать

- [x] Открой [оболочку](https://breslavsky.github.io/hello-cypress/apps/pentagon.html#stop) на этапе отмены запуска в
  Chrome.
- [x] Найди селектор кнопки и попробуй на нее нажать в Cypress.

Подсказка ниже 👇

***

<details>
  <summary>Подсказка 1</summary>

- [x] Скрой `iframe` через `invoke` CSS `display: none` в Cypress.

</details>

Еще подсказка ниже 👇

***

<details>
  <summary>Подсказка 2</summary>

- [x] Возьми Shadow DOM у `<stop-button>` и только потом найди кнопку.

</details>

Еще подсказка ниже 👇

***

<details>
  <summary>Подсказка 3</summary>

```js
cy.get('[data-name=stop] iframe').invoke('css', 'display', 'none');
cy.get('stop-button').shadow().find('button.stop').click();
```

</details>

# +📹 Видео-разбор

<iframe width="800" height="450" src="https://www.youtube.com/embed/laXEn6chiEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
