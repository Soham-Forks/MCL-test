/*CMD
  command: onAllNeedJoining
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("You haven't joined all the chats yet!" + "\n Not joined List :- " + "\n" + options.needJoiningList.join("\n") );
