const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const get = urlParams.get('get')
const element = document.getElementById(get);
element.scrollIntoView({ behavior: "smooth" });
