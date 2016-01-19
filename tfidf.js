var natural = require('natural'),
  TfIdf = natural.TfIdf,
  tfidf = new TfIdf();


doc0 = 'It\'s important not to eat or drink anything if you think you\'ve broken your arm because you may need a general anaesthetic so that the bone can be realigned.'
doc1 = '-Pinch all the soft parts of the nose together between the thumb and index finger.\n-Press firmly toward the face - compressing the pinched parts of the nose against the bones of the face'
doc2 = 'If you get a nosebleed, sit down and bend forward. Sitting is preferable to lying down, since keeping the head above the level of the heart will help reduce the bleeding. Bending forward is also important.'
tfidf.addDocument(doc0);
tfidf.addDocument(doc1);
tfidf.addDocument(doc2);

var docs = {
    0: doc0,
    1: doc1,
    2: doc2
};


function search(query) {
  score = 0
  for (var i = 0; i < tfidf.documents.length; i++) {
    if (score < (tfidf.tfidf(query, i))) {
      score = i
    }
  }
  return docs[score]
}



module.exports = {
  search
}
