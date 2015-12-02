var natural = require('natural'),

classifier = new natural.BayesClassifier();

classifier.addDocument('wake me up qqqq', 'alarm');
classifier.addDocument('set alarm q\'s', 'alarm');
classifier.addDocument('qqqq call', 'call');
classifier.addDocument('call q\'s', 'call');
classifier.addDocument('how is weather', 'weather');

classifier.train();

function classify(query,callback) {
  console.log(classifier.getClassifications(query));

  return callback(null ,classifier.classify(query))
}



module.exports = {
  classify
}
