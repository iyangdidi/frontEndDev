innerHtml downsides:

-   Performance: Each time you assign to innerHTML, the browser has to parse the new HTML string and recreate all the elements in the container, even the ones that were already there. This can be inefficient, especially if the list is large or if the operation is performed frequently.

-   Potential for bugs: If event listeners or other JavaScript references are attached to the existing elements in jobListElem, they will be lost because the elements are being removed and recreated.

-   Security: If any of the job data is user-provided and not properly sanitized, it could lead to cross-site scripting (XSS) vulnerabilities when directly inserted into the HTML.
