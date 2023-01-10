const TelegramApi = require('node-telegram-bot-api')
const token = "5703464504:AAGpcBDq2pKeB7D0arq5JbSk9Qqh3v5yR8o"

const SECRET_TOKEN = "4472656^###$@kjkUpipKlkhR//wqerWQWQ"
const SHANYA = "env_dode--3/44/wwytycvvig--NPM"

const bot = new TelegramApi(token, {polling: true})

const { palekhovaOptions, palekhovaTheory, palekhovaCodeExamples } = require('./palekhova')
const { rakovaOptions, rakovaTheory } = require('./rakova')

const selectItemText = `Выбери предмет из списка 😉`
const questNumberText = `Выбери номер вопроса 😉`
const sectionsText = `Выбери раздел из списка 😉`

const lessonsOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Основы программирования', callback_data: 'palekhova'}],
            [{text: 'Введение в it', callback_data: 'rakova'}],
        ]
    })
}

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Приветствие'},
        {command: '/info', description: 'Информация'},
        {command: '/otvet', description: 'Ответы'},
    ])
    
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        switch (text) {
            case '/start':
                await bot.sendMessage(chatId, `Привет, ${msg.from.first_name}! Это гуру-бот. Я буду помогать тебе на экзаменах и в подготовке к ним! 🙂`)
                return bot.sendMessage(chatId, `Чтобы получить ответы, кликни /otvet. Или выбери этот раздел в меню :)`)
                break;
            case '/info':
                await bot.sendMessage(chatId, `${msg.from.first_name}, наша команда сделала меня - бота - для народа! 🙃`)
                await bot.sendMessage(chatId, `Я могу дать ответ на экзаменационный вопрос, но пока что по двум предметам: Основы проги и Введение в IT!`)
                await bot.sendMessage(chatId, `Пользуйся с умом и на здоровье! ❤`)  
                await bot.sendMessage(chatId, `Кстати, подпишись на наш телеграм канал! Там публикуем новости и обновления! https://t.me/shporabot229`)
                return bot.sendMessage(chatId, `Пожалуйста, оставляй в канале обратную связь, нам важно знать, что можно и нужно улучшить! 🙏`)
                break;
            case '/otvet':
                return bot.sendMessage(chatId, selectItemText, lessonsOptions)
                break;
            case SHANYA:
                await bot.sendMessage(chatId, 'Начинаю шерстить базу данных...')
                await bot.sendDocument(chatId, './img/rakova/super/rakovaSecert228.docx')
                return bot.sendMessage(chatId, 'Вот ещё файлик для Введения в IT! ❤')
                break;
            case 'хуй':
                return bot.sendMessage(chatId, 'сам хуй')
                break;
            case 'Хуй':
                return bot.sendMessage(chatId, 'сам хуй')
                break;
            case SECRET_TOKEN:
                for (i = 1; i < 10; i++) {
                    await bot.sendPhoto(chatId, `./img/rakova/super/rakovaSuper0${i}.jpg`)
                }
                await bot.sendPhoto(chatId, `./img/rakova/super/rakovaSuper10.jpg`)
                return bot.sendMessage(chatId, `Высылаю секретные материалы по Введению в IT... 🤫`)
                break;
            default:
                return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй ещё раз!)')
        }
    })

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        if (data === 'palekhova') {
            return bot.sendMessage(chatId, sectionsText, palekhovaOptions)
        }
        if (data === 'rakova') {
            return bot.sendMessage(chatId, sectionsText, rakovaOptions)
        }
        if (data === 'theoryProga') {
            return bot.sendMessage(chatId, questNumberText, palekhovaTheory)
        }
        if (data === 'code_examples') {
            return bot.sendMessage(chatId, `Выбери нужный кусок кода 😉`, palekhovaCodeExamples) 
        }
        if (data === 'theoryIt') {
            return bot.sendMessage(chatId, questNumberText, rakovaTheory)
        }
    })

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        console.log(data);
        if (data === 'palekhovaSections') {
            return bot.sendMessage(chatId, selectItemText, palekhovaOptions)
        }
        if (data === 'home') {
            return bot.sendMessage(chatId, selectItemText, lessonsOptions)
        }
        if (data.slice(0, -2) === 'palekhovaQuestions') {
            await bot.sendPhoto(chatId, `./img/palekhova/questions/${data}.jpg`)
            if (data === 'palekhovaQuestions05') {
                return bot.sendPhoto(chatId, `./img/palekhova/questions/${data}Dop.jpg`)
            } else {
                return
            }
        }
        if (data.slice(0, -2) === 'palekhovaCodeExamples') {
            return bot.sendPhoto(chatId, `./img/palekhova/codeExamples/${data}.jpg`)
        }
        if (data.slice(0, -2) === 'rakovaQuestions') {
            await bot.sendPhoto(chatId, `./img/rakova/${data}.jpg`)
            if (data === 'rakovaQuestions43') {
                return bot.sendPhoto(chatId, `./img/rakova/${data}Dop.jpg`);
            }
            if (data === 'rakovaQuestions46') {
                return bot.sendPhoto(chatId, `./img/rakova/${data}Dop.jpg`);
            }
            if (data === 'rakovaQuestions53') {
                return bot.sendPhoto(chatId, `./img/rakova/${data}Dop.jpg`);
            }
            return;
        }
    })
}

start()
