const services  = require('./LK/lk1')

test(
    'Проверка на вывод данных из БД заказов пользователей',
    ()=>{
        expect(services()).toBe(true);
    }
);
