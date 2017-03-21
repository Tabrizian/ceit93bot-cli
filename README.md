# ceit93bot-cli
This library will help you manage your telegram channel without having to 
install telegram on your computer.

## Prerequisites
* A telegram bot with API token from the @botfather.
* Above telegram bot should be adminstrator of the channel that you want to control.

## Installation
Installation is pretty simple:

With yarn:

```sh
yarn global add ceit93bot-cli
```

With npm:
```sh
npm install -g ceit93bot-cli
```

Now you should only configure it:
```sh
tcli config --bot-username @YOUR_BOT_USERNAME  
tcli config --bot-hash YOUR_BOT_API_KEY  
tcli config --channel @YOUR_CHANNEL_ID
```

## Usage
Currently only sending messages and documents are supported 

### Sending message

```sh
tcli send --message "Hello World from CLI :)"
```

### Sending documents

```sh
tcli send --file document.pdf
```

