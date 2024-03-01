const { Client, MessageEmbed } = require("discord.js-selfbot-v13");
const dotenv = require("dotenv");
require("dotenv").config();

const client = new Client({
  checkUpdate: false,
});

client.on("message", async (message) => {
  if (message.content === process.env.PREFIX) {
    message.channel.send("```ping``` ```web``` ```dv```");
  }
  if (message.content === process.env.PREFIX + "ping") {
    message.channel.send("Pong");
  }
  if (message.content === process.env.PREFIX + "web") {
    message.channel.send("[TECHNT.NET](https://technt.net)");
  }
  if (message.content === process.env.PREFIX + "dv") {
    message.channel.send(
      "**# Thông tin về TECHNT.NET**\n```WEB CHƯA CẬP NHẬT XONG 💀```\n- Hỗ trợ sinh viên làm các dự án website (HTML, CSS, JS, PHP, LARAVEL, WORDPRESS, REACTJS)\n- Chuyên xây dựng trang web về Wordpress dựa theo yêu cầu\n- Dịch vụ domain với giá cực kì ưu đãi/năm, mua 10 năm thì ưu đãi hơn nữa\n- Dịch vụ buff follow,... cho các mạng xã hội\n- Mua bán crypto (trao đổi USDT,....)\n- Dịch vụ trao đổi tiền từ ngân hàng sang các ví điện tử\n- Game: nhận cày thuê, bán acc game pet99"
    );
  }
});

client.on("ready", async () => {
  console.log("Bot on");
});
client.login(process.env.TOKEN);
