require('dotenv').config();

// Конфигурации ботов
const BOTS_CONFIG = [
  {
        host: 'ru.cheatmine.net',
        port: 25565,
        username: process.env.BOT8_USERNAME,
        version: '1.16.5',
        auth: 'offline',
        password: process.env.BOT8_PASSWORD,
        targetServer: 's1', //s3
        dataFile: 'data/clan_data_ezzka.json'
    },
/*{
    host: 'ru.masedworld.net',
    port: 25565,
    username: process.env.BOT5_USERNAME,
    version: '1.16.5',
    auth: 'offline',
    password: process.env.BOT5_PASSWORD,
    targetServer: 's8', //s7
    dataFile: 'data/clan_malgrim.json'
},
{
    host: 'ru.masedworld.net',
    port: 25565,
    username: process.env.ZACK,
    version: '1.16.5',
    auth: 'offline',
    password: process.env.ZACK_PASSWORD,
    targetServer: 's7', //s8
    dataFile: 'data/clan_s4.json'
},
{
    host: 'ru.masedworld.net',
    port: 25565,
    username: process.env.BOT4_USERNAME,
    version: '1.16.5',
    auth: 'offline',
    password: process.env.BOT4_PASSWORD,
    targetServer: 's3', //s8
    dataFile: 'data/clan_anna.json'
}*/
];

/*const AD_TEXT = [
   "!&a&lNorgeAurlands&&l&f - твой второй &eдом&f. Здесь царит &a&lдружеская атмосфера&f, полная приключений и &bпобед&f. Стань &dчастью &fнашей истории и открой двери новых возможностей: &e&l/c join NorgeAurlands",
   "!&fДостигай высот в &a&lNorgeAurlands&f! Построй &b&lбудущее &fвместе, найди &aединомышленников&f и открой перед собой &eогромные&f игровые горизонты. Тебе точно понравится у нас: &e&l/warp NA",
    "!&fСтань &dчастью &fимперии &a&lNorgeAurlands!&f Уникальные условия, регулярный &a&lонлайн&f, море &bэмоций &fи уникальная атмосфера для твоего развития и &eпобед! &fПрисоединяйся сейчас: &e&l/warp NA",
    "!&fХотел быть значимым в клане? В &a&lNorgeAurlands&f есть место каждому! Участвуй в &eивентах&f, достигай &d&lвысот&f, стань ключевым игроком в &cклане&f. Хочешь этого? Вступай сейчас: &3&l/c join NorgeAurlands",
    "!&fХочешь быть хорошим игроком в &cпвп&f? &a&lNorgeAurlands&f &aобучит&f, экипирует и &d&lподдержит&f. Не бойся начинать сейчас - &aпокоряй&f вершины вместе с нами! Твой путь здесь: &e/warp NA",
    "!&fМечтал летать как в &aкреативе&f? В &a&lNorgeAurlands&f это просто! Вступи -> напиши &e/cc #флай &f-> взлети над сервером. Получай &bвозможности&f сейчас: &e&l/c join NorgeAurlands",
    "!&fИди вперед с &a&lNorgeAurlands&f. Лучшая &bмодерация&f, лучший &aкит&f, &6функциональный бот&f. Здесь помогут достичь твоих &aцелей&f. Начинай сейчас - больше такой возможности не будет! &e&l/warp NA",
    "!&fДобро пожаловать в &a&lNorgeAurlands&f - клан, где &a&lкаждый важен&f! У нас: &eумный бот&f, &bфлай&f за секунду, рейтинги и активные соклановцы. Пиши &e&l/c join NorgeAurlands &fи становись легендой!",
    "!&fУстал играть один? Присоединяйся к &a&lNorgeAurlands&f! Мы - &aдружная семья с &bкрутым ботом, &eивентами&f и &d&lплюшками.&f Получи &6флай &7(/cc #флай), &fучаствуй в розыгрышах. Твой клан ждёт: &e/warp NA",
*/

const AD_TEXT = [
"!&fПривет, друг, на связи клан &e&lResmayn&f. Мы в эфире с &b2023 года&f! &cПриглашаем тебя &fк нам! У нас есть отличный &aкит&f | Минималистичный &dкх&f | &610 трлн&f и конкурс на донат прямо сейчас! | Чат в тг! Если заинтересовал - &e/warp Rm"
];

const AD_CLAN = [
    /*"&fприʙᴇᴛ, пуᴛниᴋ! хочᴇɯь нᴀйᴛи другᴀ? или проᴄᴛо пообщᴀᴛьᴄя ᴄ ᴄоᴋлᴀноʙцᴀʍи? у нᴀᴄ для ϶ᴛого ᴇᴄᴛь ᴛг-чᴀᴛ! &a&l@ᴄʜᴇʀᴛʜᴏᴜsᴇ_ᴄʟᴀɴ",*/
/*"&fхочᴇɯь ᴄᴇбᴇ донᴀᴛ? розыгрыɯ ужᴇ идᴇᴛ ʙ нᴀɯᴇʍ ᴛᴇлᴇгрᴀʍ-чᴀᴛᴇ. уᴄпᴇй -> &a&l@ᴄʜᴇʀᴛʜᴏᴜsᴇ_ᴄʟᴀɴ",
"&fнᴀчинᴀᴇᴛᴄя розыᴦᴩыɯ! рᴀзыгрыʙᴀᴇʍ донᴀᴛ-ᴋᴇйᴄы ᴄрᴇди учᴀᴄᴛниᴋоʙ нᴀɯᴇго ᴛᴇлᴇгрᴀʍ-чᴀᴛᴀ. ᴄᴛᴀнь ᴄʙоиʍ - пᴇрᴇходи и учᴀᴄᴛʙуй. -> &a&l@ᴄʜᴇʀᴛʜᴏᴜsᴇ_ᴄʟᴀɴ",*/
"&fхочᴇɯь ᴄᴇбᴇ &aɸлᴀй&f? проᴄᴛо ᴨиɯи &e/ᴄᴄ #ɸлᴀй&f! бᴇз лиɯнᴇᴦо.",
"&fхочᴇɯь поᴛᴇᴄᴛиᴛь униᴋᴀльныᴇ ɸунᴋции ʙ ᴋлᴀнᴇ? пиɯи /ᴄᴄ #help и ᴄʍоᴛри ноʙоᴇ обноʙлᴇниᴇ ʙ боᴛᴇ!",
"&fхочᴇɯь проʙᴇриᴛь ᴄʙои знᴀния ʙ игрᴇ городᴀ? ᴨиɯи /ᴄᴄ #городᴀ и нᴀᴄлᴀждᴀйᴄя игрой! ",
"&a&lобноʙлᴇниᴇ&f: ᴛᴇпᴇрь ᴇᴄᴛь рᴀнгоʙᴀя ᴄиᴄᴛᴇʍᴀ! пиɯи /ᴄᴄ #лʙл и проʙᴇᴩяй ᴄʙои ᴄᴛᴀᴛы.",
"&fхочᴇɯь оᴛʙлᴇчьᴄя и ᴄыгрᴀᴛь ʙ ʍини-игры? проʙᴇряй - /ᴄᴄ #игры и игрᴀй ʙ ᴄʙоё нᴀᴄлᴀждᴇниᴇ!",/*
"&fхочᴇɯь &cᴄтроиᴛь&F, но у ᴛᴇбя нᴇᴛ приʙилᴇгии? ʙ нᴀɯᴇʍ ᴋлᴀнᴇ чᴇрᴇз боᴛᴀ ʍожно ʙыдᴀᴛь ᴄᴇбᴇ гʍ 1 чᴇрᴇз &e#gm1 !"*/
];

const KICK_THRESHOLD = 5;
const FLY_COOLDOWN = 60;

// Список админов
const ADMINS = ['KoTiK_B_KeDaH_', 'marinettko', 'tcftft', 'tan4ikiast', "ABOBA_23042013", "DopkaBobka", "__Zack__", "Moon_Beam_1", "Luzarim", "fees"];

module.exports = {
    BOTS_CONFIG,
    AD_TEXT,
    AD_CLAN,
    KICK_THRESHOLD,
    FLY_COOLDOWN,
    ADMINS
};
