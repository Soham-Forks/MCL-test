/*CMD
  command: Check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.MCL.check({
    chats: ["@MCLTestChannel1", "@MCLTestChannel2", "@MCLTestGroup"],
    except: ["/start","Check"],
    callback: {
        onAllJoining : "onAllJoining",
        onAllNeedJoining : "onAllNeedJoining",
    }
});
