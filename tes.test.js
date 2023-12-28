const users = require('./reg/reg2');

test(
    'Проверяем, что пользователь при регистрации добавляется в БД',
    ()=>{
        expect(users()).toEqual({name: 'Евгений',surname: 'Трофимец',num: '89643885332', email: 'genovaoz@yandex.ru',pass: 'qwerty123'});
    }
);
