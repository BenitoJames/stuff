## Naming guides
### JSON
- Use camelCase (e.g. `userId`, not `user_id`)
- Keep names short but descriptive
- Group data semantically
### CSS
- Use lowercase letters
- Use hyphens (`-`), NOT underscores or camelCase
- make it reusable

|Component|CSS Class|Notes|
|---|---|---|
|Navigation bar|`.navbar`|Global|
|Navigation link|`.nav-link`|Scoped to nav|
|Main section|`.section`|Reusable layout|
|Review card|`.review-card`|Specific|
|Tags / filters|`.tag`, `.tag-container`|For filters or review labels|
|Buttons|`.btn`, `.btn-primary`, `.btn-outline`|Common pattern|
|Forms|`.form-group`, `.input-field`, `.form-label`|Consistent with Bootstrap style|
|Stars (rating)|`.stars`, `.star-filled`, `.star-half`|Styling star icons|

## AgnoRated Style Guide

### Colors:
- Dark: #2F5249
- Primary: #437057
- Accent: #97B067
- Light: #E3DE61
- Text Dark: #1E1E1E;
- Text Light:
- Background Light: #F4F6F5;
- Background Dark:

### Fonts:
- font family: Poppins, sans-serif
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

- header, big:
	- font size: 2rem
	- weight: 700
- supporting:
	- font size: 1.25 rem
	- weight: 600
- body text:
  - 1 rem
  - 400
- details:
	- font size: 0.875 rem
	- 400
- line-height: 1.6
- headers weight: 600-700
- p margin bottom: 1rem

![[Pasted image 20260213192437.png]]

### Layout:
- Container:
  - width: 90%
  - max-width: 1200px
  - margin: 0 auto
  - padding: 2rem 0

Use this spacing scale:
	0.5rem
	1rem
	1.5rem
	2rem
	3rem

### Components:
- `.btn` 
.btn
  - padding: 0.6rem 1.2rem
  - border-radius: 8px
  - font-weight: 600
  - font-size: 0.95rem
  - transition: 0.3s ease
- `.card`
.card
  - background: white
  - padding: 1.5rem
  - border-radius: 8px
  - box-shadow: soft shadow
  - margin-bottom: 1.5rem
- `.tag` 
.tag
  - font-size: 0.75rem
  - padding: 0.3rem 0.8rem
  - border-radius: 20px
  - display: inline-block
  - margin-right: 0.5rem

- `.stars`
.stars
  - font-size: 1rem
  - color: accent yellow
  - margin-bottom: 0.5rem


### Navbar
Left:
- Logo / App Name → **AgnoRated**
Right:
- Home
- Browse
- Login / Profile
- (Optional) Search icon

Navbar:
- height: auto (padding-based)
- background: primary green
- text color: white
- padding: 1rem 2rem
- display: flex
- justify-content: space-between
- align-items: center

Links:
- font-weight: 500
- no underline
- hover: underline or slight opacity change

Mobile:
- collapse to vertical
- stack links

### Responsiveness
Mobile breakpoint: 768px

Desktop (above 768px)
- Horizontal navbar
- Grid layout for cards
- Multiple columns
Mobile (below 768px)
- Navbar stacks vertically
- Cards full width
- Gallery becomes 1–2 columns

### Notes:
- Use `rem` units, not `px`
- Stick to 1.5rem padding between sections
- Mobile breakpoint: 768px

