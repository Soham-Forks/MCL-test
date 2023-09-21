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
    except: ["/start","Check","/del","/test"],
    bb_options: {
        data: "to",
        pass: "any"
    }
});

Bot.inspect({...handle, ...{message:message}})
if (handle.status === "delayToCome" || handle.status === "checking" || handle.status === "checkScheduled" || handle.status === "tooFast") {
    let isMember = Libs.MCL.isMember(["@MCLTestChannel1", "@MCLTestChannel2", "@MCLTestGroup"])
    if (!isMember.status) {
        Bot.sendMessage("Access Denied");
        return;  // This return statement stops the code execution
    }
}
