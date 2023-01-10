const questionsName = [
    `Этапы разработки ПО`,
    `Системы счисления`,
    `Представление информации в компьютере`,
    `Представление в-х чисел IEEE 754`,
    `Классификация ЯП`,
    `Понятие алгоритма, св-ва алгоритма`,
    `Алгоритмические языки. Синтаксис и семантика языков`,
    `Основные элементы языка Си. Структура программы`,
    `Классы лексем языка Си`,
    `Понятие переменной, константы...`,
    'Понятие типа данных. Типы данных языка Си',
    'Принципы выбора типов данных при проектировании программы',
    'Объявление переменных в языке Си. Инициализация переменных',
    'Явные и именованные константы в программах на языке Си',
    'Выражения в языке Си, порядок вычисления значений',
    'Правила преобразования типов в языке Си',
    'Ввод/вывод в языке Си',
    'Функции форматного ввода и вывода языка Си',
    'Арифметические операции языка Си',
    'Операции отношения, логические операции языка Си',
    'Операции присваивания языка Си',
    'Поразрядные операции языка Си',
    'if / else / if else',
    'switch / case',
    'Циклы while / do while',
    'Инструкция for',
    'Предусловие  do while',
    'Арифмитические циклы',
    'Понятие указателя',
    'Массивы в языке Си',
    'Массивы: max/min',
    'Массивы: append/delete',
    'Массивы: сортировка',
    'Матрицы и так далее',
    'Массивы и указатели в языке Си',
    'Программирования матриц',
    'Программирование строк',
    'Массив символов. Си-строка',
    'Функции обработки строк',
    'Нисходящего/восходящее проектирование программ',
    'Прототип функции, определение функции',
    'Вызов функции. Оператор return',
    'Передача параметров в функцию',
    'Указатели в параметрах функций',
    'Обработка массивов в функциях',
    'Побочный эффект функции',
    'Рекурсия',
    'Параметры функции main()',
    'Функции с переменным числом параметров',
    'Внутренние и внешние объекты',
    'Классы памяти',
    'Динамическая память',
    'Препроцессор include',
    'Препроцессор define',
    'Макросы и функции: сходство и различие',
    'Структуры и объединения',
    'Работа с файлами на СИ',
    'Обработка текстовых файлов',
    'Обработка бинарных файлов',
    'Файлы произвольного и последовательного доступа',
]

let palekhovaQuestions = [];

for (let i = 0; i < 60; i+=2) {
    if (i < 10) {
        palekhovaQuestions.push([
            {text: `${questionsName[i]}`, callback_data: `palekhovaQuestions0${i+1}`},
            {text: `${questionsName[i+1]}`, callback_data: `palekhovaQuestions0${i+2}`}
        ])
    } else {
        palekhovaQuestions.push([
            {text: `${questionsName[i]}`, callback_data: `palekhovaQuestions${i+1}`},
            {text: `${questionsName[i+1]}`, callback_data: `palekhovaQuestions${i+2}`}
        ])
    }
}

palekhovaQuestions.push([{text: 'К разделам (GOBACK)', callback_data: 'palekhovaSections'}])

module.exports = {
    palekhovaOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Теория', callback_data: 'theoryProga'}],
                [{text: 'Примеры кодов', callback_data: 'code_examples'}],
                [{text: 'К предметам (GOBACK)', callback_data: 'home'}],
            ]
        })
    },
    
    palekhovaTheory: {
        reply_markup: JSON.stringify({
            inline_keyboard: palekhovaQuestions
        })
    },

    palekhovaCodeExamples: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Ввод массива/матрицы', callback_data: 'palekhovaCodeExamples01'}, {text: 'Динамический ввод массива/матрицы', callback_data: 'palekhovaCodeExamples02'}],
                [{text: 'Пузырьковая сортировка', callback_data: 'palekhovaCodeExamples03'}, {text: 'Сортировка методом выбора', callback_data: 'palekhovaCodeExamples04'}],
                [{text: 'Адрес/индекс max в массиве', callback_data: 'palekhovaCodeExamples05'}, {text: 'Реверс массива', callback_data: 'palekhovaCodeExamples06'}],
                [{text: 'Удалить элемент из массива', callback_data: 'palekhovaCodeExamples07'}, {text: 'Свап элементов', callback_data: 'palekhovaCodeExamples08'}],
                [{text: 'Грамотное открытие файла', callback_data: 'palekhovaCodeExamples09'}, {text: 'Запись данных в выходной файл', callback_data: 'palekhovaCodeExamples10'}],
                [{text: 'К разделам (GOBACK)', callback_data: 'palekhovaSections'}]
            ]
        })
    }
}