-<h1 align="center">Sniper</h1>

<p align="center">
  <img src="https://www.codefactor.io/repository/github/slow/nitro-sniper/badge" /> 
  <img src="https://img.shields.io/github/issues/slow/nitro-sniper?style=flat" />
  <img src="https://img.shields.io/github/stars/slow/nitro-sniper?style=flat" />
</p>

<p align="center">
   A lightweight, fast and efficient discord nitro sniper, giveaway sniper & invite sniper. 
   <img src="https://media.wtf/11603354" />
</p>

# Features
- Light, fast & efficient
- Nitro sniper
- Giveaway sniper
- Limit nitro redeems (e.g. 2 codes / 24 hours)
- Custom giveaway reaction delay (randomized between **delay** and (**delay** * 1.5))
- DM host on giveaway win
- Custom DM Delay
- Custom DM Message
- One-click Deploy
- Duplicate Protection
- Fake Code Detection
- Multi-Account Support
- 3 Modes - `main`, `alts`, `both`
- Webhook support (Giveaways & Nitro)
- Fully customizable webhook
- Ability to turn the webhook on/off for certain events
- @everyone ping on webhook message
- Ability to turn the ping on/off for certain events
- Whitelist words for the giveaway sniper
- Blacklist words for the giveaway sniper
- Whitelisted words only mode for giveaway sniper (Blacklist still applies)
- Blacklist servers from the giveaway sniper
- Announce nitro type on snipe
- Invite Sniper
- Minimum member count for invite sniper
- Maximum member count for invite sniper
- Limit invite joins (e.g. 10 invites / 6 hours)
- Minimum delay before sniping invite
- Maximum delay before sniping invite

## Installation
#### Heroku 
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/slow/nitro-sniper/tree/test)

 - Resources > Turn off the `web` toggle and turn on the `worker` toggle.
 - `More` dropdown > View Logs

#### Local

- Make sure [Node](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads) are installed on your system.
- Open a command prompt/terminal
- Run `cd %userprofile%\Downloads`
- Run `git clone https://github.com/slow/nitro-sniper nitro-sniper`
- Run `cd nitro-sniper`
- Run `npm install`
- Edit `.env` with the configuration you wish to use 
- Run `node .`