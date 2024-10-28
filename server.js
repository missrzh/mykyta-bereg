const express = require('express');
const path = require('path');
const app = express();

// Обслуживаем статические файлы из папки build
app.use(express.static(path.join(__dirname, 'build')));

// Для всех остальных маршрутов отправляем index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запуск сервера на порту 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
