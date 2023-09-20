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

Libs.MCL.handle({
    chats: ["@MCLTestChannel1", "@MCLTestChannel2", "@MCLTestGroup"],
    callback: {
        onJoining: false,
        onNeedJoining: false,
        onAllJoining: false,
        onAllNeedJoining: "onAllNeedJoining",
        onError: "onError"
    },
    delay: "15", //in minutes
    except: ["/start","Check"],
    bb_options: {
        data: "to",
        pass: "any"
    }
});
