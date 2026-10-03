(function () {
  var el = document.querySelector(".ia-rotate");
  if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var words = el.dataset.words.split("|");
  var wordIndex = 0;
  var characterIndex = words[0].length;
  var deleting = true;

  function tick() {
    var word = words[wordIndex];

    if (deleting) {
      characterIndex--;
      if (characterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    } else {
      characterIndex++;
      if (characterIndex === words[wordIndex].length) {
        deleting = true;
        el.textContent = words[wordIndex];
        window.setTimeout(tick, 2500);
        return;
      }
    }

    el.textContent = words[wordIndex].slice(0, characterIndex) || "\u200b";
    window.setTimeout(tick, deleting ? 40 : 90);
  }

  window.setTimeout(tick, 2500);
})();
