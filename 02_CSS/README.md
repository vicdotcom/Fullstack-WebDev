# CSS
CSS (Cascading Style Sheets) is the code used to control the visual presentation, layout, and overall design of a website. Goes hand in hand with HTML which acts as the structural skeleton of a webpage; then CSS dictates how these structural elements are displayed to the user.

Without CSS, a webage would look like a plain text document with unformatted text and images running down a single column. CSS allows for:
- Colors and Typography: Modifying background colors, font styles, sizes, and text alignments.
- Layout and Positioning: Building multi-column designs, footers, sidebars, and spacing around elements.
- Responsive Design: Adapting the layout seamlessly to look great on any screen size, from desktop monitors to mobile phones.
- Animations: Creating transitions, hover effects, and decorative flourishes

# Table of Contents

- [CSS](#css)
- [Table of Contents](#table-of-contents)
  - [Concepts Covered](#concepts-covered)
  - [Basic Syntax](#basic-syntax)
  - [Inheritance](#inheritance)
  - [The Box Model](#the-box-model)
    - [Display Types](#display-types)
    - [How Flexbox Works](#how-flexbox-works)
    - [Margin and Padding Shorthand](#margin-and-padding-shorthand)
  - [Miscellaneous](#miscellaneous)
    - [Resources](#resources)


## Concepts Covered
```yaml
02_CSS/
├── 01_simple_css/     # Linking a stylesheet (<link>), color, font-family, font-weight,
│
└── 02_build_google/   # Class selectors (.main), descendant selectors (.button button), display types (block / inline / inline-block /flex), margin types, alignment, border-radius, mix-blend-mode, HTML nesting, CSS inheritance
│
└── 03_padding/      # Padding, margin, border, the box model (margin, border, padding, content)
│
└── 04_following_tab/   # Practice the concepts specified above
│
└── 05_business_card/  # CSS box model (margin, border, padding, content), flexbox (flex-direction, justify-content, align-items), CSS inheritance
│
└── 06_space_website/  # Background images, custom fonts 
```

## Basic Syntax
CSS works by selecting certain HTML elements on the page and styling them accordingly. Say we have the following HTML code that mimics the [Google homepage](https://www.google.com/):

```html
<!DOCTYPE html>

<html>
    <head>
        <title>google.com</title>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <!-- div.main -->
        <div class="main">
                <!-- img_logo class -->
                <img class="img_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-D0-cTlzM8X__f505EwRQp3bwFfVETXisSDFLVepsg&s=10" alt="Google">

                <!-- search_bar class -->
                <input class="search_bar" type="search" placeholder="Ask me anything">

            <!-- div.button since we want to edit two button elements at once-->
            <div class="button">
                <a href="https://www.google.com/" target="_blank">
                    <button>Google Search</button>
                </a>
                <a href="https://theuselessweb.com/" target="_blank">
                    <button>I'm feeling lucky</button>
                </a>
            </div>
        </div>
    </body>
</html>
```

To style the page above (centered logo, search bar and buttons), we can add the following CSS code to `styles.css`:

```css
/* HTML Body element */
body {background-color: white;}


/* div.main */
.main {
    margin-top: 100px;
    display: flex;    /* Elements can be arranged column/row-wise */
    flex-direction: column;  /* Elements are arranged vertically (column-wise) */
    align-items: center;     /* Possible due to flex parameter above */
}


/* div.img_logo */
.img_logo {
    width: 200px;
    display: block;  
      /* Elements are arranged vertically but take the full available width */
    mix-blend-mode: multiply;  
      /* Makes the image blend into the background */
      /* Helpful to remove white background from some images*/
      /* May not be the best solution especially if the page background color changes */
}

/* div.input */
.search_bar{
    width: 350px;
    display: block;
    border-radius: 10px;     /* Degree of rounded edges applied */
}

/* div.button */
/* Specify the element as well to apply the styles to it */
.button button{
    display: inline;  
      /* Elements are arranged side-by-side */
      /* Use "inline-block" if you want to set custom dimensions */
    border-radius: 5px;
    margin-top: 20px;
}
```
Each rule has a **selector** (what to style) and **declarations** (`property: value;` pairs that say how to style it):

- `body` is an element selector that targets the `<body>` element, and `background-color: white;` sets the page background.
- `.main`, `.img_logo` and `.search_bar` are class selectors (prefixed with `.`) that target elements with `class="main"`, `class="img_logo"` and `class="search_bar"`.
- `.button button` is a descendant selector that targets only `<button>` elements inside an element with `class="button"`.

## Inheritance
Just as HTML elements nest inside one another (parent -> child), CSS styles can flow down the same tree. Some properties set on a parent are **inherited** by its children, so they don't need to be repeated on every element.

```html
<div class="card">
    <h2>Title</h2>
    <p>Some text <span>inside a span</span></p>
</div>
```

```css
.card {
    color: darkblue;       /* Inherited: h2, p and span all become dark blue */
    font-family: Arial;    /* Inherited: the whole card uses Arial */
    border: 1px solid black;  /* NOT inherited: only .card gets a border */
}

p {
    color: crimson;        /* Overrides the inherited color; the span inside p inherits crimson */
}
```

- Text-related properties (`color`, `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`) are inherited by default.
- Box-related properties (`margin`, `padding`, `border`, `background`, `width`) are **not** inherited.
- Layout and box properties generally describe an element's own box, so inheriting them would apply the same spacing, borders, background, or sizing to every descendant, often creating unintended layouts.
- A style can be set directly on a child which will always win over one inherited from a parent (the same way a nested element is more specific than its container).
- Set shared styles once on a high-level ancestor such as `body`, then override only where needed.
- Use `inherit` to force a property to take its parent's value, e.g. `border: inherit;`.

## The Box Model
Every HTML element is rendered as a rectangular box made of four layers (inside -> outside):

1. **Content**: the text/image itself (sized with `width` / `height`).
2. **Padding**: transparent space between the content and the border (inside the box).
3. **Border**: a line drawn around the padding.
4. **Margin**: transparent space outside the border, pushing other elements away.

```css
.box {
    width: 200px;
    padding: 20px;
    border: 2px solid black;
    margin: 30px;
    box-sizing: border-box;  /* width now includes padding + border (200px total) */
}
```

By default (`box-sizing: content-box`) `width` only sets the content, so the real width is `200 + 20*2 + 2*2 = 244px`. With `border-box` the width stays `200px`, which is usually easier to reason about.

### Display Types
The `display` property decides how a box behaves in the page flow:

| Value | Behaviour |
|---|---|
| `block` | Starts on a new line and takes the full available width. `width`, `height`, `margin` and `padding` all work. (`<div>`, `<p>`, `<h1>`) |
| `inline` | Sits within a line of text, only as wide as its content. `width`/`height` and vertical margins are ignored. (`<span>`, `<a>`) |
| `inline-block` | Sits inline like text, but accepts `width`, `height` and vertical margins/padding like a block. (`<button>`, `<img>` by default) |
| `flex` | Block-level container that lays out its children along one axis (see below). |
| `grid` | Block-level container that lays out its children in rows and columns. |
| `none` | Removes the element from the page entirely (it takes up no space). |

### How Flexbox Works
Setting `display: flex` on a **parent** (the flex container) turns its direct children into **flex items** that are arranged along a **main axis**; the perpendicular direction is the **cross axis**.

```css
.container {
    display: flex;
    flex-direction: row;          /* main axis: row (default, left->right) | column (top->bottom) */
    justify-content: space-between; /* align items along the MAIN axis: flex-start | center | flex-end | space-between | space-around */
    align-items: center;          /* align items along the CROSS axis: stretch (default) | flex-start | center | flex-end */
    gap: 10px;                    /* space between items */
    flex-wrap: wrap;              /* let items wrap onto a new line instead of shrinking */
}

.item {
    flex: 1;  /* grow to share leftover space equally with other items */
}
```

- `flex-direction: column` swaps the axes: `justify-content` then works vertically and `align-items` horizontally.
- Only direct children are affected; grandchildren need their own flex container.

### Margin and Padding Shorthand
`margin` (and `padding`) accept 1 to 4 values. Sides always go **clockwise from the top**: top, right, bottom, left.

```css
margin: 10px;                  /* all four sides */
margin: 10px 20px;             /* top & bottom = 10px, left & right = 20px */
margin: 10px 20px 30px;        /* top = 10px, left & right = 20px, bottom = 30px */
margin: 10px 20px auto auto;   /* top = 10px, right = 20px, bottom = auto, left = auto */
```

Individual sides can be set with `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.

- `auto` lets the browser compute the margin. On a block element with a set `width`, `margin: 0 auto;` centers it horizontally.
- In the `10px 20px auto auto` example, `left: auto` pushes the element to the right edge, while a vertical `auto` is `0` in normal block flow (it only absorbs free space inside a flex container).
- Vertical margins of adjacent block elements **collapse**: the gap between them is the larger of the two margins, not the sum.
- Margins can be negative (`margin-left: -10px`) to pull an element toward its neighbor.

## Miscellaneous
### Resources
- Color Palette Generator: [Coolors](https://coolors.co/)
- Background Removal: [Remove.bg](https://www.remove.bg/)
- Background Images: [Unsplash](https://unsplash.com/)
- Custom fonts and icons: [Google Fonts](https://fonts.google.com/), [Font Awesome](https://fontawesome.com/), [1001 Fonts](https://www.1001fonts.com/)
  - Google Fonts are obtained via embedding a `<link>` in the `<head>` of your HTML, then using the font-family in your CSS.
  - Other font sites may require downloading a `.ttf` or `.woff` file and using `@font-face` in your CSS to load it.


