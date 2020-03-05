function censor(text, censoredWords, censorSymbol = '#') {
  console.log(text.split(/\b/));
  
  return text.split(/\b/).map(
    (word) => {
        return censoredWords.includes(word.toLowerCase()) ? censorSymbol.repeat(word.length) : word
    }).join('');
}

module.exports = censor;

