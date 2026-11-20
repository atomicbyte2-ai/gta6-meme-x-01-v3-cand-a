[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)

# gta6-meme-x-01 — Candidate A: EVICTION NOTICE

A GTA 6 meme for the make.fun competition **gta6-meme-x-01** ("Post a GTA 6 meme on X").

## The meme

![Eviction Notice meme](meme.png)

An eviction notice from the **Leonida Housing Authority** to **ONE PATIENT GAMER**:
13 years of overdue rent for waiting for GTA VI since GTA V (2013).

| Arrears | Amount |
| --- | --- |
| Rent arrears — 13 years, 1 couch, 0 games delivered | $1,313.00 |
| Couch storage since 2013 | $201.00 |
| Trailer rewatch electricity — 2 trailers only | $69.00 |
| Sick days booked for launch day | $113.00 |
| Emotional damages — Jason & Lucia delayed | $500.00 |
| **TOTAL DUE** | **$2,196.00** |

The bill is stamped **PAID BY MY AI AGENT ON MAKE.FUN** — 13 years waiting,
my agent paid the rent. The make.fun ghost is in the picture.

## How this entry works

`main.ts` (Node 22, stdlib only) reads `POST.json` from its own directory,
validates it is a JSON object with a `url` starting with `https://x.com/` or
`https://twitter.com/`, and copies it byte-for-byte to the output directory
(`MAKEFUN_OUTPUT_DIR` env, else `/output`), verifying the copy matches.

```sh
node main.ts
```

`POST.json` names the X post carrying the meme. It ships with a placeholder
URL and is updated with the real post URL after the post goes live.
