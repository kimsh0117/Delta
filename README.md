## Getting Started

### Important
Create `.env.local` file in root directory.
Create variable `NEXT_PUBLIC_RAWG_KEY` and put your `rawg secret key`


run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Описание Тестовое задание

Требуется реализовать web-приложение - “витрину” игр наподобие [https://rawg.io/](https://rawg.io/) или [https://web.archive.org/web/20180831053229/https://gamegid.online/](https://web.archive.org/web/20180831053229/https://gamegid.online/) на базе API [https://rawg.io/apidocs](https://rawg.io/apidocs).

Приложение будет состоять из двух страниц:
- / - главная, каталог игр:
  - Необходимый функционал
      - Пагинация (в идеале, бесконечный скролл)
      - Сортировка по: рейтингу и дате релиза игры (в обе стороны)
      - Фильтрация по платформам
      - Поиск по названию
  - Содержимое каждой “плитки” игры:
      - Название
      - Постер
      - Рейтинг
      - Дата релиза
  - /game/[slug] - страница игры, на которую можно попасть, кликнув на плитку игры в каталоге, должна содержать более полную информацию об игре (помимо имевшейся на плитке):
      - Описание
      - Ссылка на сайт игры
      - Слайдер со скриншотами игры

`Требования`:
- Реализация на React
- Код на ES6 (без TypeScript)
- Реализация в виде SSR-приложения на Next.js
- Вёрстка с использованием styled components
- Адаптивная mobile-first вёрстка
- Вёрстка с нуля без использования UI-библиотек типа MaterialUI (нам важнее оценить, как вы верстаете с нуля, чем итоговые “рюшки” и красота)
