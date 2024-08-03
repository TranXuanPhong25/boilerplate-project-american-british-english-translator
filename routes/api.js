'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const text = req.body.text;
      const locale = req.body.locale;
      if (text=='') { 
        return res.json({ error: 'No text to translate' });
      }
      if ((!text&&!locale) || (!text)||(!locale)) {
        return res.json({ error: 'Required field(s) missing' });
      }
     
      if (locale !== 'american-to-british' && locale !== 'british-to-american') {
        return res.json({ error: 'Invalid value for locale field' });
      }
      const highlightWords = [];
      const translatedText = translator.translate(text, locale, highlightWords);
      if (highlightWords.length === 0) {
        return res.json({ text: text, translation: translatedText });
      }
      const translation = translator.highlight(translatedText, highlightWords);
      res.json({ text: text, translation: translation });
    });
};
