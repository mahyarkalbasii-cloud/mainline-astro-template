# Home Page Spec

## Purpose
The home page is the primary conversion page for V1.
Its job is to:
- explain what PersianSaze does
- clarify who it is for
- explain why it matters
- drive demo/contact intent
- support SEO/AEO with clear information structure

## Source of truth
All raw copy comes from `docs/content-source-of-truth.md`.
The source copy must not be paraphrased, compressed, expanded, or rewritten unless explicitly instructed later.

## Required sections

### 1) Hero
Content source:
- صفحه ۱

Required elements:
- brand name
- main headline
- geographic coverage
- short explanatory paragraph
- primary CTA
- secondary CTA

Implementation notes:
- keep this section clean and high-clarity
- do not overload with too many UI elements
- one strong visual or dashboard mockup is enough

### 2) Market Problem
Content source:
- صفحه ۲

Required elements:
- section heading
- short explanation of why construction sales is difficult
- 3 pain points:
  - project dispersion
  - weak / outdated market data
  - wrong contact timing

Implementation notes:
- can be presented as paragraph + 3 supporting cards or bullets
- tone should stay serious and practical

### 3) PersianSaze Solution
Content source:
- صفحه ۳

Required elements:
- section heading
- short intro
- 3 value pillars:
  - اطلاعات به‌روز پروژه‌ها
  - ابزارهای اجرایی فروش
  - آموزش برای استفاده بهتر
- each pillar should have:
  - title
  - body text
  - optional “مشاهده جزئیات”

Implementation notes:
- use a 3-column or stacked-card layout
- this is one of the most important sections on the page

### 4) How It Works
Content source:
- صفحه ۴

Required elements:
- section heading
- short explanatory paragraph
- sub-block 1:
  - لایه جمع‌آوری و به‌روزرسانی اطلاعات
- sub-block 2:
  - لایه هوش مصنوعی
- each with optional “بیشتر بدانید”

Implementation notes:
- if template allows, show as process/system blocks
- must communicate system thinking, not just features

### 5) Usage Steps
Content source:
- صفحه ۵

Required elements:
- section heading
- 4 sequential steps:
  1. پروژه مناسب را پیدا کنید
  2. پروژه را بررسی کنید
  3. ارتباط را شروع کنید
  4. پیگیری را جلو ببرید

Implementation notes:
- present as a 4-step visual flow
- should feel operational and actionable

### 6) Construction Stages Covered
Content source:
- صفحه ۵

Required elements:
- heading or supporting label
- list of stages:
  - تخریب و گودبرداری
  - فونداسیون
  - اسکلت‌بندی
  - دیوارچینی
  - گچ و خاک
  - ابتدای نازک‌کاری
  - نازک‌کاری
  - ظریف‌کاری
  - پایان کار

Implementation notes:
- render as chips, tags, timeline, or segmented band
- keep easy to scan

### 7) Who Uses PersianSaze
Content source:
- صفحه ۶

Required elements:
- section heading
- intro paragraph
- segment 1:
  - وقتی سرعت رسیدن مهم‌تر است
  - associated product examples
- segment 2:
  - وقتی زودتر وارد مذاکره شدن مهم‌تر است
  - associated product examples

Implementation notes:
- use a 2-column comparison or two stacked panels
- should help users self-identify quickly

### 8) Pricing / Plans
Content source:
- صفحه ۷

Required elements:
- section heading
- intro paragraph
- 4 plans:
  - بنیان
  - رویان
  - تابان
  - تابان پلاس
- each plan must show:
  - coverage
  - included stages
  - 3/6/12 month pricing
  - extra stage pricing
- supporting note:
  - تمامی اشتراک‌ها شامل : دسترسی در لحظه، CRM، پنل پیامک و کارگاه‌های آموزشی

Implementation notes:
- keep pricing legible, not flashy
- include CTA under or near the pricing block

### 9) FAQ
Required elements:
- placeholder section only for now
- detailed FAQ copy will be added later

Implementation notes:
- keep component in place if template supports it

### 10) Footer
Required elements:
- navigation links
- contact links
- copyright
- optional social links

## Header / navigation
Header must include at minimum:
- logo / brand
- primary nav links from `docs/site-architecture.md`
- primary CTA

## CTA guidance
Recommended primary CTA options:
- درخواست دمو
- مشاوره انتخاب پلن
- شروع گفتگو

Recommended secondary CTA options:
- مشاهده تعرفه‌ها
- چگونه کار می‌کند

## Content integrity rules
- Raw content from the source file must remain intact.
- Do not rewrite source copy during the first implementation pass.
- Structural labels, button labels, and helper microcopy may be added separately.
- Any missing UI text must be minimal and functional.

## Design guidance
- calm, serious, high-trust presentation
- minimal visual clutter
- avoid startup cliché gradients and noisy animations
- prioritize typography, spacing, and clarity
- preserve the strongest parts of the template instead of over-customizing early

## Implementation priority inside the page
1. Hero
2. Market Problem
3. PersianSaze Solution
4. Usage Steps
5. Pricing
6. Who Uses PersianSaze
7. How It Works
8. Construction Stages Covered
9. FAQ
10. Footer
