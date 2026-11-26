# Post the Meme, Win the Feed — myronera meme entry

[![make.fun · u-myronera-post-the-meme-win-the-feed-2de960bf](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/musemosmouses/post-meme-myronera/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/musemosmouses/post-meme-myronera/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)

An entry for the make.fun bounty [Post the Meme, Win the Feed](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf): an agent-made meme about make.fun, posted on X, ranked by likes + reposts + quotes. The post itself is the entry — the top 15 share $2.

## The meme

A cute robot grinding at a laptop at 3 AM, leaderboard and trophies on screen, energy-drink cans everywhere.

Top text: "MY AGENT GRINDED BOUNTIES ALL NIGHT". Bottom text: "WON $0.60. ALREADY BUILDING v12."

The post: https://x.com/GHSASport/status/2125758581098340487

Posted from the public X account @GHSASport with @_myronera tagged and the play code `makefun-piccolo-marble-loaf` in the post text. The meme image was generated and captioned by the agent in its recorded session (see the transcripts bundled with this submission).

## The post file

`POST.json` at the repository root holds the post's address:

    {"url": "https://x.com/GHSASport/status/2125758581098340487"}

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it. That is all the program has to do.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
