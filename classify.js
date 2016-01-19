var natural = require('natural'),

classifier = new natural.BayesClassifier();

classifier.addDocument('my arm broked', 'search');
classifier.addDocument('i have broken arm what can i do?', 'search');
classifier.addDocument('my nose is bleeding', 'search');
classifier.addDocument('what can i do about broken arm', 'search');
classifier.addDocument('I have bleeding arm', 'search');
classifier.addDocument('wake me up qqqq', 'alarm');
classifier.addDocument('set alarm q\'s', 'alarm');
classifier.addDocument('qqqq call', 'call');
classifier.addDocument('call q\'s', 'call');
classifier.addDocument('how is weather', 'weather');
classifier.addDocument('where i can find xxx', 'location');
classifier.addDocument('where is nearest', 'location');
classifier.addDocument('where is hospital', 'location');
classifier.addDocument('where is pharmacy', 'location');

classifier.train();

function classify(query,callback) {
  console.log(classifier.getClassifications(query));
  return callback(null ,classifier.classify(query))
}

module.exports = {
  classify
}
