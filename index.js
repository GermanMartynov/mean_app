const express = require('express')
const app = express()

// определяем хост и порт приложения
const host = '127.0.0.1'
const port = 3000

// установка pug в качестве движка шаблонов	
app.set('views', './views')
app.set('view engine', 'pug');

//маршруты приложения
app.get('/', (req, res)=>{
    res.render('main', { title: 'Greetings from Pug' });
    });
app.get('/about', (req, res)=>{
    res.send('Страница \"О Meadowlark Travel\"');
    });

// пользовательская страница 404
app.use(function(req, res){
    //res.type('text/plain');
    res.status(404);
    res.send('404 — Не найдено');
    });

// пользовательская страница 500
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 — Ошибка сервера');
    });

// начинаем прослушивать подключения на порту
app.listen(port, host, function(){
    console.log(`Server listens http://${host}:${port}`+
    'Нажмите Ctrl+C для завершения.')
    });
