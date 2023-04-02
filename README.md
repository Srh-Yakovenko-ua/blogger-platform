# Blogger-Platform

# Husky

- npx husky-init && yarn - для автоматической установки хаски.Создается папка husky где мы настраиваем pre-commit ,
  указываем компанды для запуска.В нашем случае npx lint-staged. Которая запустит настройки lint-staged указанные в package.json

###### ![img](https://files.fm/thumb_show.php?i=btpuf4js4)

- yarn add lint-staged - Установит lit-staged. Нужен для остлеживания конкретных директорий или файлов и внутри мы задаем настройки. Ниже пример при котором мы отслеживаем не весь проект, а только заданные настройки. Внутри настроек указываются команды заданные для линтера и притиера или одна команда которая собирает все остальные.Команды указываются в зависиомости как вы настроили скрипт для запуска проверки линтера и притиера. НА скрине выше npx lint-staged при пре-коммите будет запускать наши настройки и если не будет ошибок пропускать дальше

###### ![img](https://files.fm/thumb_show.php?i=n2zkwzrtq)

- Если при комите хаски выявит проблему в консоли он подстветит где именно была ошибка и не даст сделать коммит

###### ![img](https://files.fm/thumb_show.php?i=3jh6z4j22)

# Prettier

Prettier is an opinionated code formatter that supports a lot of different programming languages

# ESlint

ESLint statically analyzes your code to quickly find problems.

import/order: Enforce a convention in the order of require() / import statements

groups: How groups are defined, and the order to respect.
newlines-between: always-and-inside-groups: at least one new line between each group will be enforced.

# Tailwind

## Theme Configuration

The theme section of tailwind.config.js file is where define project’s color palette, type scale, fonts, breakpoints, border radius values, and more.

### Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| primary | ![#F8346B](https://via.placeholder.com/10/F8346B?text=+) #F8346B |
| font-color-black | ![#1A1718](https://via.placeholder.com/10/1A1718?text=+) #1A1718 |
| font-color-grey | ![#737067](https://via.placeholder.com/10/737067?text=+) #737067 |
| background-white | ![#FCFBFB](https://via.placeholder.com/10/FCFBFB?text=+) #FCFBFB |
| background-grey | ![#FAF7F8](https://via.placeholder.com/10/FAF7F8?text=+) #FAF7F8 |
| link-color | ![#3677F7](https://via.placeholder.com/10/3677F7?text=+) #3677F7 |

### Font Reference

Inter, sans-serif