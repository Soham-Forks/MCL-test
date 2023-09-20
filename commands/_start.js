/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendMessage({
    text: "Hello, " + user.first_name + "!" + "\n" + "Join our channel and group to get access to the bot" + "\n" + "Channel: @MCLTestChannel1" + "\n" + "Channel: @MCLTestChannel2" + "\n" + "Group: @MCLTestGroup",
    reply_markup: {
        inline_keyboard: [
            [
                { text: "Check", callback_data: "Check" }
            ]
        ]
    }
})
