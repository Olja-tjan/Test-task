# Тестовое задание на Angular:

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Development server:

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Building:

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Поставленные задачи:

Работаем с ресурсом https://reqres.in/

Реализовать приложение на Angular:

```bash
  1) Сделать страницу, которая выводит список пользователей GET(https://reqres.in/api/users?page=2) 
    и список ресурсов GET(https://reqres.in/api/unknown)
  2) При нажатии на пользователя должен быть переход на страницу подробной карточки о нём
    GET(https://reqres.in/api/users/2)
  3) На странице подробной карточки пользователя сделать возможность изменить его данные
    PUT(https://reqres.in/api/users/2)
  4) На странице списка пользователей сделать возможность удалить пользователя из списка
    DELETE(https://reqres.in/api/users/2)
```

Не обязательное задание с повышенной сложностью:
```bash
  1) Сделать страницу авторизации 
    POST(https://reqres.in/api/login) 
    и регистрации 
    POST(https://reqres.in/api/register)
```

Реализованно на текущий момент:
```bash
  1) Страница, которая выводит список пользователей и список ресурсов
  2) Переход на страницу подробной карточки о пользователе при нажатии на него
  3) Возможность изменить данные пользователя на странице подробной карточки,
    но пока не работает, так как авторизация не настроена
  4) Возможность удалить пользователя из списка тоже пока не работает без авторизации
```

В планах:
```bash
  1) Доделать запросы на авторизацию и регистрацию
  2) Настроить аутентификацию
  3) В связи с тем, что запросы: 
    POST (https://reqres.in/api/login) и POST (https://reqres.in/api/register) 
    возвращают не токен, а список ресурсов, нужно реализовать перехват и
    заменить данные на релевантные
```
