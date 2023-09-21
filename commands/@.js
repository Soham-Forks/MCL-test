/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let handle = Libs.MCL.handle({
    chats: ["@MCLTestChannel1", "@MCLTestChannel2", "@MCLTestGroup"],
    callback: {
        onAllNeedJoining: "onAllNeedJoining",
    },
    delay: "15", //in minutes
    except: ["/start","Check","/del"],
    bb_options: {
        data: "to",
        pass: "any"
    }
});

let isMember = Libs.MCL.isMember(["@MCLTestChannel1", "@MCLTestChannel2", "@MCLTestGroup"])

switch (handle.status) {
    case "internal":
        break;
    case "callback":
        break;
    case "exception":
        break;
    case "subCommand":
        break;
    case "delayToCome":
        if(!isMember.status){
            Bot.sendMessage("Access Denied")
            return
        }
        break;
    case "checking":
        if(!isMember.status){
            Bot.sendMessage("Access Denied")
            return
        }
        break;
    case "checkScheduled":
        if(!isMember.status){
            Bot.sendMessage("Access Denied")
            return
        }
        break;
    case "tooFast":
        if(!isMember.status){
            Bot.sendMessage("Access Denied")
            return
        }
        break;
}
