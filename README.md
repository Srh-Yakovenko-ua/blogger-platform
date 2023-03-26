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
