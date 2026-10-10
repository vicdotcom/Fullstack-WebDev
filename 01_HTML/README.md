# HTML Fundamentals
Hypertext Markup Language (HTML) is the standard markup language for creating web pages. It describes the structure of a web page semantically and originally included cues for the appearance of the document. 

- [HTML Fundamentals](#html-fundamentals)
  - [Project Structure](#project-structure)
  - [Basic HTML Structure](#basic-html-structure)
  - [HTML Elements](#html-elements)
    - [HTML Nesting](#html-nesting)

## Project Structure
```
01_html_basics/
├── 01_news_article/
│   ├── 01_news_article.html
│   └── mars.jpg
├── 02_signup_page/
│   └── 02_signup_page.html
├── build_google.html
├── image.png
├── index.html
└── README.md
```

## Basic HTML Structure
Below is the basic structure of an HTML document shown via a simple news article example.

```html
<div>
    <!-- Header 1 -->
    <h1> Humans have reached Mars </h1>

    <!-- Header 2 -->
    <h2> The starship rocket has successfully landed on the red planet this morning </h2>

    <!-- Paragraph -->
    <p> After an 115 days long journey, the cew of 12 have finally arrived to their destination. This is the first time humans have set foor on another planet besides Mars. </p>

    <!-- Image  -->
    <img src="mars.jpg" alt="Mars", width="100%">

</div>
```

The above code renders the following output:
![Simple News Article](image.png)

## HTML Elements
### HTML Nesting
HTML nesting is the practice of placing one HTML element inside another element. The element on the inside is called a child, while the element on the outside is called its parent.

In the above code snippet, `<div>` is the parent element, while `<h1>`, `<h2>`, `<p>`, and `<img>` are its child elements. The nested child elements are siblings of each other as they share the same parent element. 

Nesting allows for a more organized and structured HTML document. It also allows for better styling and manipulation of elements using CSS and JavaScript.

