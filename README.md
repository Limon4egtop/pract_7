# 📝 PWA "Заметки"

Простое офлайн-доступное веб-приложение для создания, редактирования и удаления заметок. Работает в браузере даже без подключения к интернету и может быть установлено на домашний экран как полноценное приложение.

## 🚀 Возможности

- Добавление и удаление текстовых заметок
- Хранение заметок в `localStorage`
- Автоматическое определение офлайн-режима
- Установка на домашний экран (как мобильное приложение)
- Работа офлайн благодаря Service Worker

## 📁 Структура проекта

```
notes-pwa/
├── index.html            # Главная страница
├── style.css             # Стили
├── script.js             # Логика приложения
├── manifest.json         # Web App Manifest
├── sw.js                 # Service Worker
└── icons/                # Иконки приложения
    ├── icon-192.png
    └── icon-512.png
```

## ⚙️ Как запустить

1. **Скачайте архив и распакуйте его**:
   [📦 Скачать архив проекта](https://github.com/Limon4egtop/pract_7/archive/refs/heads/master.zip)

2. **Откройте файл `index.html` в браузере.**

   Лучше всего использовать Google Chrome или Microsoft Edge.

3. **Разрешите установку на домашний экран** — в адресной строке появится предложение «Установить приложение».

4. **Отключите интернет и проверьте, что приложение продолжает работать офлайн.**

## 📱 Установка как PWA

- В Chrome/Edge откройте `index.html`.
- В правом верхнем углу нажмите на кнопку «Установить» или значок плюсика.
- Приложение будет добавлено на рабочий стол/домашний экран.

## 🧪 Тестирование офлайн-режима

- После первого открытия приложение кэширует все ресурсы.
- Выключите интернет и перезагрузите страницу — всё должно продолжать работать.
- Надпись «Офлайн-режим» появится, если устройство не в сети.

## 📦 Используемые технологии

- HTML5
- CSS3
- JavaScript (ES6)
- LocalStorage
- PWA: Service Worker + Manifest

---

👨‍💻 Автор: Филимонов Владимир  
📅 Версия: 1.0
