const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const { test } = require('mocha');

suite('Unit Tests', () => {
   suite('American to British English', () => {
      test('Translate Mangoes are my favorite fruit. to British English', (done) => {
         const translator = new Translator();
         const text = 'Mangoes are my favorite fruit.';
         const locale = 'american-to-british';
         const expected = 'Mangoes are my favourite fruit.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });
   
      test('Translate I ate yogurt for breakfast. to British English', (done) => {
         const translator = new Translator();
         const text = 'I ate yogurt for breakfast.';
         const locale = 'american-to-british';
         const expected = 'I ate yoghurt for breakfast.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });
   
      test("Translate We had a party at my friend's condo. to British English", (done) => {
         const translator = new Translator();
         const text = "We had a party at my friend's condo.";
         const locale = 'american-to-british';
         const expected = "We had a party at my friend's flat.";
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });
   
      test('Translate Can you toss this in the trashcan for me? to British English', (done) => {
         const translator = new Translator();
         const text = 'Can you toss this in the trashcan for me?';
         const locale = 'american-to-british';
         const expected = 'Can you toss this in the bin for me?';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });
   
      test('Translate The parking lot was full. to British English', (done) => {
         const translator = new Translator();
         const text = 'The parking lot was full.';
         const locale = 'american-to-british';
         const expected = 'The car park was full.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });
   
      test('Translate Like a high tech Rube Goldberg machine. to British English', (done) => {
         const translator = new Translator();
         const text = 'Like a high tech Rube Goldberg machine.';
         const locale = 'american-to-british';
         const expected = 'Like a high tech Heath Robinson device.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test('Translate To play hooky means to skip class or work. to British English', (done) => {
         const translator = new Translator();
         const text = 'To play hooky means to skip class or work.';
         const locale = 'american-to-british';
         const expected = 'To bunk off means to skip class or work.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test('Translate No Mr. Bond, I expect you to die. to British English', (done) => {
         const translator = new Translator();
         const text = 'No Mr. Bond, I expect you to die.';
         const locale = 'american-to-british';
         const expected = 'No Mr Bond, I expect you to die.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test('Translate Dr. Grosh will see you now. to British English', (done) => {
         const translator = new Translator();
         const text = 'Dr. Grosh will see you now.';
         const locale = 'american-to-british';
         const expected = 'Dr Grosh will see you now.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test('Translate Lunch is at 12:15 today. to British English', (done) => {
         const translator = new Translator();
         const text = 'Lunch is at 12:15 today.';
         const locale = 'american-to-british';
         const expected = 'Lunch is at 12.15 today.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test('Translate We watched the footie match for a while. to American English', (done) => {
         const translator = new Translator();
         const text = 'We watched the footie match for a while.';
         const locale = 'british-to-american';
         const expected = 'We watched the soccer match for a while.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test('Translate Paracetamol takes up to an hour to work. to American English', (done) => {
         const translator = new Translator();
         const text = 'Paracetamol takes up to an hour to work.';
         const locale = 'british-to-american';
         const expected = 'Tylenol takes up to an hour to work.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test('Translate First, caramelise the onions. to American English', (done) => {
         const translator = new Translator();
         const text = 'First, caramelise the onions.';
         const locale = 'british-to-american';
         const expected = 'First, caramelize the onions.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test('Translate I spent the bank holiday at the funfair. to American English', (done) => {
         const translator = new Translator();
         const text = 'I spent the bank holiday at the funfair.';
         const locale = 'british-to-american';
         const expected = 'I spent the public holiday at the carnival.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test('Translate I had a bicky then went to the chippy. to American English', (done) => {
         const translator = new Translator();
         const text = 'I had a bicky then went to the chippy.';
         const locale = 'british-to-american';
         const expected = 'I had a cookie then went to the fish-and-chip shop.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test(`Translate I've just got bits and bobs in my bum bag. to American English`, (done) => {
         const translator = new Translator();
         const text = 'I\'ve just got bits and bobs in my bum bag.';
         const locale = 'british-to-american';
         const expected = 'I\'ve just got odds and ends in my fanny pack.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test('Translate The car boot sale at Boxted Airfield was called off. to American English', (done) => {
         const translator = new Translator();
         const text = 'The car boot sale at Boxted Airfield was called off.';
         const locale = 'british-to-american';
         const expected = 'The swap meet at Boxted Airfield was called off.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test('Translate Have you met Mrs Kalyani? to American English', (done) => {
         const translator = new Translator();
         const text = 'Have you met Mrs Kalyani?';
         const locale = 'british-to-american';
         const expected = 'Have you met Mrs. Kalyani?';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test('Translate Prof Joyner of King\'s College, London. to American English', (done) => {
         const translator = new Translator();
         const text = 'Prof Joyner of King\'s College, London.';
         const locale = 'british-to-american';
         const expected = 'Prof. Joyner of King\'s College, London.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test('Translate Tea time is usually around 4 or 4.30. to American English', (done) => {
         const translator = new Translator();
         const text = 'Tea time is usually around 4 or 4.30.';
         const locale = 'british-to-american';
         const expected = 'Tea time is usually around 4 or 4:30.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         assert.equal(actual, expected);
         done();
      });

      test('Highlight translation in Mangoes are my favorite fruit.', (done) => {
         const translator = new Translator();
         const text = 'Mangoes are my favorite fruit.';
         const locale = 'american-to-british';
         const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
         
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         const expectedHighlight = translator.highlight(actual,hightlightWord);
         assert.equal(expected, expectedHighlight);
         done();
      });

      test('Highlight translation in I ate yogurt for breakfast.', (done) => {
         const translator = new Translator();
         const text = 'I ate yogurt for breakfast.';
         const locale = 'american-to-british';
         const expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         const expectedHighlight = translator.highlight(actual,hightlightWord);
         assert.equal(expected, expectedHighlight);
         done();
      });

      test('Highlight translation in We watched the footie match for a while.', (done) => {
         const translator = new Translator();
         const text = 'We watched the footie match for a while.';
         const locale = 'british-to-american';
         const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         const expectedHighlight = translator.highlight(actual,hightlightWord);
         assert.equal(expected, expectedHighlight);
         done();
      });

      test('Highlight translation in Paracetamol takes up to an hour to work.', (done) => {
         const translator = new Translator();
         const text = 'Paracetamol takes up to an hour to work.';
         const locale = 'british-to-american';
         const expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
         const hightlightWord =[];
         const actual = translator.translate(text, locale,hightlightWord);
         const expectedHighlight = translator.highlight(actual,hightlightWord);
         assert.equal(expected, expectedHighlight);
         done();
      });

      



   });

});
