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

let check = Libs.MCL.check({
    chats: ["@MCLTestChannel1", "@MCLTestChannel2", "@MCLTestGroup"],
    callback: {
        onAllJoining : "onAllJoining",
        onAllNeedJoining : "onAllNeedJoining",
    }
})

if(request.data){
  switch (check.satatus){
    case "checkScheduled":
      Api.answerCallbackQuery({
        callback_query_id: request.id,
        text: "Check is scheduled"
      })
      break;
    case "checking":
      Api.answerCallbackQuery({
        callback_query_id: request.id,
        text: "Checking..."
      })
      break;
    case "tooFast":
      Api.answerCallbackQuery({
        callback_query_id: request.id,
        text: "Too fast"
      })
      break;
  }

}