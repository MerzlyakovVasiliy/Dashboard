# Dashboard с A/B тестами

Это приложение представляет собой страницу панели управления для отображения списка созданных A/B тестов. Данные для таблицы загружаются через API и отображаются в виде таблицы с возможностью фильтрации, сортировки и навигации по страницам.

## Технические требования

- Используемые технологии: React.js, HTML, CSS/SCSS
- В проекте используется Vite/Parcel/Rsbuild как сборщик.
- Используются только следующие библиотеки:
  - `axios` для работы с API.
  - `classnames` для условных классов.
  - `react-router-dom` для маршрутизации.
  - `prop-types` для типизации (если не используется TypeScript).
- Для стилей используется CSS или SCSS.

## Функциональные требования

- Страница отображает список A/B тестов, полученных через API.
- При наведении на строку таблицы она подсвечивается, как показано в макете.
- В колонке "site" отображаются только домены без протоколов (http, https) и префикса "www".
- Возможность фильтрации по имени теста. Если запись найдена, скрываются все другие записи. Если запись не найдена, выводится сообщение с соответствующим текстом и кнопка для сброса фильтра.
- Возможность сортировки (ASC, DESC) по заголовкам столбцов:
  - name, type и site сортируются по алфавиту.
  - status сортируется в следующем порядке:
    - ASC: Online, Paused, Stopped, Draft
    - DESC: Draft, Stopped, Paused, Online

## Дополнительные задачи

1. Реализована маршрутизация между тремя страницами:
   - Dashboard (главная страница).
   - Results ([testId]).
   - Finalize ([testId]).
   
2. При клике на кнопки "Results" или "Finalize" на странице Dashboard происходит редирект на соответствующие URL без перезагрузки страницы.

## Дополнительные плюсы

- Проект выполнен с использованием TypeScript.
- Написаны тесты для проверки функциональности.

## Установка

1. Клонируйте репозиторий:
  ```sh
  git clone https://github.com/MerzlyakovVasiliy/Dashboard.git
  cd Dashboard
  ```

### 2. Установите зависимости
  ```sh
  npm install
  ```

### 4. Запустите проект
  ```sh
  npm run start:dev (запускает клиент и сервер) 
  ```  
