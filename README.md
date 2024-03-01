
# Selfbot Discord V13
I don't take any responsibility for blocked Discord accounts that used this module.

Using this on a user account is prohibited by the Discord TOS and can lead to the account block.
## Prerequisites

 - Ensure that Node.js is installed on your machine.


## Installation


```bash
git clone https://github.com/huutai2312/selfbot-discord-v13
```
```bash
cd selfbot-discord-v13
```
```bash
npm install
```
-------OR-------
```bash
npm install discord.js-selfbot-v13
```
```bash
npm install dotenv
```

- Rename the file .env.example.txt to .env or create a new .env file.
- Access Discord through the web browser and open the Developer Tools (F12).
- In the Developer Tools, navigate to the Network tab.
- Select a direct message (DM) with any user in Discord.
- Wait for the network requests to load (approximately 4-5 seconds) and then press Ctrl + L.
- Send a random character in the DM to trigger a network request.
- In the network requests, find the one related to messages and click on it.
- Scroll down to locate the Authorization header and copy its content.
- Paste the copied token into the .env file under the TOKEN variable.
- Define your preferred prefix for the bot commands in the .env file.
## Running


```bash
  node .
```


## Support

- Website: [TECHNT.NET](https://technt.net)
- Discord: [TECHNT.NET](https://discord.gg/Th5CzztPCM)

