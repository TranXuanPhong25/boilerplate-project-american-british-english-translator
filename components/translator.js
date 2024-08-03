const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')
const AMERICAN_TO_BRITISH = 'american-to-british';
const BRITISH_TO_AMERICAN = 'british-to-american';
class Translator {
   constructor() {
      this.americanOnly = americanOnly;
      this.americanToBritishSpelling = americanToBritishSpelling;
      this.americanToBritishTitles = americanToBritishTitles;
      this.britishOnly = britishOnly;
   }
   translate(text, locale, highlightWords) {
      let translatedText = text;
      let translationFound = false;

      if (locale === AMERICAN_TO_BRITISH) {
         
         for (let word in this.americanOnly) {
            let regex = new RegExp('\\b' + word + '\\b', 'gi');
            if (regex.test(text)) {
               translationFound = true;
               highlightWords.push(this.americanOnly[word]);
               translatedText = translatedText.replace(regex, this.americanOnly[word]);
            }
         }
         for (let word in this.americanToBritishSpelling) {
            let regex = new RegExp('\\b' + word + '\\b', 'gi');
            if (regex.test(text)) {
               translationFound = true;
               highlightWords.push(this.americanToBritishSpelling[word]);

               translatedText = translatedText.replace(regex, this.americanToBritishSpelling[word]);
            }
         }
         for (let word in this.americanToBritishTitles) {
            let regex = new RegExp(word, 'gi');
            if (regex.test(text)) {
               translationFound = true;
               highlightWords.push(this.americanToBritishTitles[word]);

               translatedText = translatedText.replace(regex, this.americanToBritishTitles[word]);
            }
         }
         const timeRegex = /([0-9]{1,2}):([0-9]{2})/g;
         const timeMatch = text.match(timeRegex);
         if (timeMatch) {
            translationFound = true;
            
            timeMatch.forEach((time) => {
               translatedText = translatedText.replace(time, time.replace(':', '.'));
               highlightWords.push(time.replace(':', '.'));
            });

         }
      }

      // Translate British to American
      if (locale === BRITISH_TO_AMERICAN) {
         for(let word in this.britishOnly){
            let regex = new RegExp('\\b' + word + '\\b', 'gi');
            if (regex.test(text)) {
               translationFound = true;
               highlightWords.push(this.britishOnly[word]);

               translatedText = translatedText.replace(regex, this.britishOnly[word]);
            }
         }
         Object.values(this.americanToBritishSpelling).forEach((britishWord, index) => {
            let regex = new RegExp('\\b' + britishWord + '\\b', 'gi');
            if (regex.test(text)) {
               translationFound = true;
               highlightWords.push(Object.keys(this.americanToBritishSpelling)[index]);

               translatedText = translatedText.replace(regex, Object.keys(this.americanToBritishSpelling)[index]);
            }
         });
         Object.values(this.americanToBritishTitles).forEach((britishWord, index) => {
            let regex = new RegExp('\\b' + britishWord + '\\b', 'gi');
            if (regex.test(text)) {
               translationFound = true;
               highlightWords.push(Object.keys(this.americanToBritishTitles)[index]);

               translatedText = translatedText.replace(regex, Object.keys(this.americanToBritishTitles)[index]);
            }
         });
         const timeRegex = /([0-9]{1,2})\.([0-9]{2})/g;
         const timeMatch = text.match(timeRegex);
         if (timeMatch) {
            translationFound = true;

            timeMatch.forEach((time) => {
               translatedText = translatedText.replace(time, time.replace('.', ':'));
               highlightWords.push(time.replace('.', ':'));

            });
         }
      }
      return translationFound ? translatedText : 'Everything looks good to me!';
   }
   highlight(text, highlightWords) {
      highlightWords.forEach((word) => {
         text = text.replace(new RegExp(word, 'gi'), `<span class="highlight">${word}</span>`);
      });
      return text;
      
   }
}
module.exports = Translator;