# testTaskAdept
Tables (companies &amp; employees)

# Для запуска локально вам потребуется:
1. Версия NodeJs v16.15.0,

2. После клонирования и запуска в редакторе кода
    открыть терминал в корневой папке проекта и прописать команду 'npm install',

3. После успешной установки зависимостей перейдите в следующие файлы
    и выполните инструкции в комментариях:

    1. client/components/Companies/CompaniesTable.jsx

    2. client/src/redux/actions&thunks/addCompsAction.js, editCompsAction.js, getCompsAction.js,

    3. client/src/redux/actions&thunks/addEmpsAction.js, editEmpsAction.js, getEmpsAction.js,

    4. config/database.js;

4. Теперь после успешно покдкюченной базы данных, выполните следующие команды в терминале
    корневой папки 'npx sequelize db:migrate' и 'npx sequelize db:seed:all'

5. Далее в открытом терминале корневой папки прописать команду 'node app.js'
    и открыть терминал в папке client и прописать команду 'npm start',

6. Дополню, для отслеживания работоспособности динамической загрузки данных при скролле,
    откройте инспектор кода в браузере и отслеживайте сообщение 'fetching';

# В случае неудаче по запуску по инструкции, которая представлена выше, напишите Issue !
