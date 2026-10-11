# CSS
CSS (Cascading Style Sheets) is the code used to control the visual presentation, layout, and overall design of a website. Goes hand in hand with HTML which acts as the structural skeleton of a webpage; then CSS dictates how these structural elements are displayed to the user.

Without CSS, a webage would look like a plain text document with unformatted text and images running down a single column. CSS allows for:
- Colors and Typography: Modifying background colors, font styles, sizes, and text alignments.
- Layout and Positioning: Building multi-column designs, footers, sidebars, and spacing around elements.
- Responsive Design: Adapting the layout seamlessly to look great on any screen size, from desktop monitors to mobile phones.
- Animations: Creating transitions, hover effects, and decorative flourishes

## Basic Syntax
CSS works by selecting certain HTML elements on the page and styling them accordingly. Say we have the following HTML code:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>test_site.com</title>
        <link rel="stylesheet" href="styles.css">
            
    </head>

    <body>
        Please accept our cookies.

        <br><br>
        <code>
            test
        </code>
    </body>

    <code></code>
</html>
```

If we want to change the font color of the text "Please accept our cookies." to red, we can do so by adding the following CSS code to `styles.css`:

```css
/* HTML body element */
body {color: blueviolet;}
```
where `body` is the selector that targets the `<body>` element in the HTML, and property-value pair `color: blueviolet;` is the declaration that changes the text color to blueviolet.