import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '6313347639:AAHlDz9_wG_HI3zytGvvlbGv8_lLwGCX-Y4'

const bot = new Telegraf(token)
const webAppUrl = 'https://angulartgapp.web.app/'

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать, нажмите на кнопку ниже, чтобы запустить приложение',
        Markup.keyboard([
            Markup.button.webApp(
                'Отправить сообщение',
                `${webAppUrl}/feedback`
            )
        ])
    )
})

bot.on(
    message('web_app_data'), async ctx => {
        const data = ctx.webAppData.data.json()
        ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? `empty message`)
    }
)

bot.launch()
