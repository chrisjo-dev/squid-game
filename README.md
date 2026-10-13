# Survival Choices MBTI Test / 서바이벌 선택 MBTI 테스트

A Nuxt 3 MBTI personality quiz framed around survival-game dilemmas.

- Korean: 나는 서바이벌 선택 게임에서 어떤 유형일까?
- English: What type are you in a survival game?

## Routes

| Path | Description |
|------|-------------|
| `/` | English home |
| `/ko` | Korean home |
| `/tutorial` | English tutorial |
| `/ko/tutorial` | Korean tutorial |
| `/questions` | English quiz |
| `/ko/questions` | Korean quiz |
| `/result/:MBTI` | English result (16 types) |
| `/ko/result/:MBTI` | Korean result (16 types) |

## Image Slots

All original images replaced with IP-free placeholders in `assets/image/illust/`.
Final artwork to be created as AI-generated flat illustrations.

| File | Size | Usage |
|------|------|-------|
| `assets/image/illust/main.png` | 800x600 | Home page hero |
| `assets/image/illust/q0.png` – `q13.png` | 600x400 | Question images (14 total) |
| `assets/image/illust/result_ENFJ.png` … (16 types) | 400x500 | Result page images |
| `public/image/meta/metaimg_*.png` | 1200x630 | Korean OG meta images |
| `public/image/meta_eng/metaimg_*.png` | 1200x630 | English OG meta images |

Art direction:
- **main.png**: A figure seen from behind facing three doors
- **q0–q13**: Everyday-object scenes, no show-specific games
- **result_XXXX**: One scene per archetype plus a badge/label

## Development

```bash
yarn install
yarn dev
```

## Static Generation

```bash
yarn generate
# Output: .output/public/
```

Nitro preset is `static` with `baseURL: '/'`.

## MBTI Scoring Axes

| Question | Axis |
|----------|------|
| Q0 | P/J |
| Q1–Q4 | E/I |
| Q5 | S/N |
| Q6 | T/F |
| Q7 | P/J |
| Q8 | E/I |
| Q9 | P/J |
| Q10–Q11 | T/F |
| Q12–Q13 | S/N |
