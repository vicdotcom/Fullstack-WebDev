# CSS
CSS (Cascading Style Sheets) is the code used to control the visual presentation, layout, and overall design of a website. Goes hand in hand with HTML which acts as the structural skeleton of a webpage; then CSS dictates how these structural elements are displayed to the user.

Without CSS, a webage would look like a plain text document with unformatted text and images running down a single column. CSS allows for:
- Colors and Typography: Modifying background colors, font styles, sizes, and text alignments.
- Layout and Positioning: Building multi-column designs, footers, sidebars, and spacing around elements.
- Responsive Design: Adapting the layout seamlessly to look great on any screen size, from desktop monitors to mobile phones.
- Animations: Creating transitions, hover effects, and decorative flourishes

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
