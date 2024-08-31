# TO CHECK
- [ ] CORS
- [ ] Event Loop
- [ ] function*
- [ ] [Caching](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Caching)
- [ ] [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA)
- [ ] [testing-library](https://testing-library.com/docs/)

# HTML: [Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

`data-*` attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, or extra properties on DOM.

**JavaScript access**
- getAttribute()
- or `dataset` property

```html
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
  …
</article>
```
```js
const article = document.querySelector("#electric-cars");
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314" //(note that dashes are converted to camel case).
article.dataset.parent; // "cars"
```

**Each property is a string** and can be read and written. In the above case setting article.dataset.columns = 5 would change that attribute to "5".

**CSS access**

```css
article::before {
  content: attr(data-parent);
}
```
```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

# JS：Object.assign()
The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

# NaN

The NaN global property is a value representing Not-A-Number.

```js
function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitise('1'));
// Expected output: "1"

console.log(sanitise('NotANumber'));
// Expected output: NaN
```