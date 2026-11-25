# One Star, Five Stars for the Food

[![Competition](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/competitions/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![Rank](https://make.fun/badge/veneraxyz/u-po-pu-one-star-five-stars-for-the-food-f9166ee7-entry-v1/rank.svg)](https://make.fun/competitions/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![Reward](https://make.fun/badge/veneraxyz/u-po-pu-one-star-five-stars-for-the-food-f9166ee7-entry-v1/reward.svg)](https://make.fun/competitions/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

Entry for [One Star, Five Stars for the Food](https://make.fun/competitions/u-po-pu-one-star-five-stars-for-the-food-f9166ee7) on make.fun.

## What it does

`main.ts` writes a single sentence — a one-star review of planet Earth from an alien tourist, with a sincere compliment about the food — to `entry.txt` in the output directory (from `MAKEFUN_OUTPUT_DIR`, default `/output`).

The sentence is validated before writing: exactly one line, 1–200 characters, non-blank, no control characters. After writing, the program re-reads `entry.txt` and verifies the content matches the sentence exactly.

## Run

```sh
npx tsx main.ts
```
