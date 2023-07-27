const TelegramBot = require('node-telegram-bot-api');


const token = '6631975650:AAHVsti02Dm0p69gwYcQXFlznsaAQrVoFLA';



const bot = new TelegramBot(token, { polling: true });

const obj = {}
const gameOptions = {
    reply_markup:{
        inline_keyboard:[
            [
                {
                text: '1',
                callback_data:'1'
            },
                {
                    text: '2',
                    callback_data: '2'
                },
                {
                    text: '3',
                    callback_data: '3'
                },
            ],
            [
            {
                text: '4',
                callback_data: '4'
            },
            {
                text: '5',
                callback_data: '5'
            },
            {
                text: '6',
                callback_data: '6'
            },
            ],
            [
                {
                    text: '7',
                    callback_data: '7'
                },
                {
                    text: '8',
                    callback_data: '8'
                },
                {
                    text: '9',
                    callback_data: '9'
                },
            ],
     
      
              [  {
                    text: '0',
                    callback_data: '0'
                },],
      
        ],
    },
};


    const againOption = {
        reply_markup:{
            inline_keyboard: [
                [
                    {
                        text: 'qayta ishga tushir',
                        command: '/again'
                    },
                ],
            ],
        },
    };

    const startGame = async chatId =>{
        await bot.sendMessage(chatId, 'kompyuter 0 dan 9 gacha son oyladi ushani top');
        const randomNumber = Math.floor(Math.random() * 10);
        obj[chatId] = randomNumber;
        await bot.sendMessage(chatId, "togrsini top ", gameOptions);
    }
    const botFun = () =>{
  
        bot.setMyCommands([
            {
                command: '/start',
                description: 'botni ishga tushrish',
            },
            {
                command: '/info',
                description: 'siz haqizda malumot',
            },
            {
                command: '/book',
                description: 'kitob  olish ',
            },
            {
                command: '/kino',
                description: 'kino korish',
            },
            {
                command: '/game',
                description: 'oyin oynash',
            },
        ])

        bot.on('message', async msg => {
            const text = msg.text;
            const chatId = msg.chat.id;

            console.log(msg);

            if (text === "/start") {
                await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/3.jpg');

                return bot.sendMessage(chatId, `qales endi ${msg.from.first_name}`);
            }

            if (text === "/info") {
                await bot.sendPhoto(chatId, 'https://t.me/blackphotos1/56530');


                return bot.sendMessage(chatId, `sizning insfarmatsiyayiz 
        username -- ${msg.from.username}
        language -- ${msg.from.language_code}
        siz botmsiz -- ${msg.from.is_bot}
        premium bormi -- ${msg.from.is_premium}
        sizning idingiz -- ${msg.from.id}
       tabriklaymiz siz odam ekansiz
        `);
            }

            if (text === '/book') {
                return await bot.sendDocument(chatId, 'https://t.me/kitobkitobkitob/34');
            }
            if (text === '/kino') {
                return await bot.sendVideo(chatId, 'https://t.me/Qasoskorlar_marvel_disney/196');
            }
            if (text === '/game') {
  
                return startGame(chatId);
            }
            return bot.sendMessage(chatId, 'iltimos togri buyruq kirting  eg: /start');
        });
        

        bot.on('callback_query', async msg => {
            const data = msg.data;
            const chatId = msg.message.chat.id;
            if(data == '/again'){
                return startGame(chatId);
            }
            if(data == obj[chatId]){

                await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/12.webp');
                return bot.sendMessage(chatId, `🥳tabriklaymiz siz togri javob berdiz men ${obj[chatId]}  sonni oylagan edi`);
            }
            else{
                await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/11.webp');
                return  bot.sendMessage(chatId, ` yahshi yam xato toptiz togri topganizda nma bolar edi ${msg.from.first_name}  siz tanlagan son ${data} men  ${obj[chatId]}  sonni oylagan edim `);
            }
         
         
           
            
        });
    }

botFun();