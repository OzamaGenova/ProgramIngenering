const timeofworking = require('./main/main')

test(
    'Проверка отображения правильного времени',
    ()=>{
        expect(timeofworking(15, 17)).toBe(true);
    }
);