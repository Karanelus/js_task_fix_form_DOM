document.querySelectorAll("input").forEach(function(e){var l=e.id.slice(8).replace(/-/g," "),r=l[0].toUpperCase()+l.slice(1),t=document.createElement("label");t.classList.add("field-label"),t.htmlFor=e.id,t.innerText=r,e.placeholder=r,e.parentNode.insertBefore(t,e)});
//# sourceMappingURL=index.b2d4a524.js.map
