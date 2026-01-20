---
title: mpv-discordRPCX
description: >-
  Discord Rich Presence integration for mpv Media Player, with support for cover
  art scraping from anime titles based on filename. Beautifully laid out and
  automatically set up.
image: '@assets/projects/mpv-discord-rpcx/image.png'
startDate: 2025-06-17
endDate: 2025-06-28
skills:
  - Lua
  - Python
  - REST APIs
sourceLink: https://github.com/ujjwal-dev23/mpv-discordRPCX
---
<h1 align="center">
mpv-discordRPCX
</h1>

<h4 align="center">
An mpv plugin for displaying currently playing media on Discord
<br />
Forked from <a href="https://github.com/cniw/mpv-discordRPC">mpv-discordRPC</a>
</h4>

<p align="center">
<a href="#foreword">Foreword</a> •
<a href="#key-features">Key Features</a> •
<a href="#how-to-use">How To Use</a> •
<a href="#configuration">Configuration</a> •
<a href="#contact-me">Contact Me</a> •
<a href="#license">License</a>
</p>

## Foreword

The majority of the work in this fork comes from the original repo, credits to [cniw](https://github.com/cniw) for building a functional plugin. However I saw that the plugin wasnt actively being maintained and was missing a few features that would make it even better so I decided to maintain this fork. If you have any suggestions or feature requests please open an issue or contact me on Discord : `@knuckles_was_taken`

## Key Features

- Can fetch cover art for Music or Anime
- Support for http streams in Rich Presence
- Metadata tags (Title, Artist, Album, Genre)
- Icons for playing, paused, and buffering
- Supports Windows, Mac, and Linux
- Easy to use install script
- Support for multiple rpc wrappers
- Simple configuration file

## How To Use

> Dependencies
> 
> 1. Provided by user: mpv, Discord

1. Included: Discord RPC, status-line,lua-discordRPC
1. Optional: Python, pypresence

```bash
# Clone the repository
git clone https://github.com/ujjwal-dev23/mpv-discordRPC.git
cd mpv-discordRPC.git

# Use the appropriate install script
install-linux.sh
install-win.bat
install-osx.sh
```

## Configuration

```bash
rpc_wrapper=lua-discordRPC
# Available option, to set `rpc_wrapper`:
# * lua-discordRPC
# * python-pypresence

periodic_timer=15
# Recommendation value, to set `periodic_timer`:
# value >= 1 second, if use lua-discordRPC,
# value >= 3 second, if use pypresence (for the python3::asyncio process),
# value <= 15 second, because discord-rpc updates every 15 seconds.

playlist_info=yes
# Valid value to set `playlist_info`: (yes|no)

hide_url=no
# Valid value to set `hide_url`: (yes|no)

loop_info=yes
# Valid value to set `loop_info`: (yes|no)

cover_art=yes
# Valid value to set `cover_art`: (yes|no)

mpv_version=yes
# Valid value to set `mpv_version`: (yes|no)

active=yes
# Set Discord RPC active automatically when mpv started.
# Valid value to `set_active`: (yes|no)

key_toggle=D
# Key for toggle active/inactive the Discord RPC.
# Valid value to set `key_toggle`: same as valid value for mpv key binding.
# You also can set it in input.conf by adding this next line (without double quote).
# "D script-binding mpv_discordRPC/active-toggle"

anime_scraping=yes
# Enables scraping of anime cover art, titles, and genres from Jikan API
# Valid values to set `anime_scraping`: (yes|no)
```

## Contact Me

- Discord : `@knuckles_was_taken`
- Discord Server (in case direct DM doesnt work) : https://discord.gg/dT4teRN
- Email : ujjwalkandera23@tutamail.com
- Github : https://github.com/ujjwal-dev23

## You may also like...

- [cniw/mpv-discordRPC](https://github.com/cniw/mpv-discordRPC) - The source of this fork
- [noaione/mpv-discordRPC](https://github.com/noaione/mpv-discordRPC) - The original script that was the source of the source of this fork

## License

MIT

---
