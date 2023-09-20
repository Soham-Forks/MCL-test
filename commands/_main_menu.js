/*CMD
  command: /main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let isMemeber = Libs.MCL.isMember(["@MCLTestChannel1", "@MCLTestChannel2", "@MCLTestGroup"]).status;

if (!isMemeber) {
    Bot.sendMessage("You are not a member of the channel or group");
    if(isMemeber.nonCheckedChats.length > 0){
        Libs.MCL.check({
            chats: isMemeber.nonCheckedChats        
        })
    }
    return;
}

Api.sendMessage({
    text: "Hello, " + user.first_name + "!",
    reply_markup: {
        keyboard: [
            [
                { text: "Button 1" },{ text: "Button 2" }
            ],
            [
                { text: "Button 3" },{ text: "Button 4" }
            ]
        ],
        resize_keyboard: true
    }
})
