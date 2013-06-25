function expandFullLinks() {
  for (var link of document.querySelectorAll('.full-link')) {
    link.textContent = link.href;
  }
}
