const Eris = require("eris");

const { token, channelId } = require("./config.json");

const bot = new Eris(token);

bot.on("ready", () => {
  // botの準備できたら呼び出されるイベント
  console.log("Ready!");
});

bot.on("voiceChannelJoin", (member, newChannel) => {
  // 入室処理
  let ch = newChannel.guild.defaultChannel;
  console.log(
    "%s が チャンネル %s に入室しました。",
    member.username,
    newChannel.name
  );
  bot.createMessage(
    channelId,
    member.username + "が チャンネル[" + newChannel.name + "] に入室しました"
  );
});

bot.on("voiceChannelLeave", (member, oldChannel) => {
  // 退室処理
  let ch = oldChannel.guild.defaultChannel;
  console.log(
    "%s が チャンネル %s を退室しました。",
    member.username,
    oldChannel.name
  );
  bot.createMessage(
    channelId,
    member.username + "が チャンネル[" + oldChannel.name + "] を退室しました。"
  );
});

// Discord に接続します。
bot.connect();
