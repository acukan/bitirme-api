var natural = require('natural'),
  TfIdf = natural.TfIdf,
  tfidf = new TfIdf();


var doc0 = {

Is_it : {   Closed :{ Do_you_have_Sisme:{
  yes:"qqqqw",
  no:"wwww"
}

},
 Open:'It\'s important not to eat or drink anything if you think you\'ve broken your arm because you may need a general anaesthetic so that the bone can be realigned.\nBefore reaching hospital, a sling may help stabilise the arm (this goes under the arm and around the neck). Avoid trying to straighten the arm.\nApplying an ice pack, such as a bag of frozen peas wrapped in a tea towel, to the injured area can help reduce pain and swelling.\nIf your child has injured their arm or wrist, try to get someone else to drive so you can support and comfort them.'}
};

doc1 = '-Pinch all the soft parts of the nose together between the thumb and index finger.\n-Press firmly toward the face - compressing the pinched parts of the nose against the bones of the face.\n-Lean forward slightly with the head tilted forward. Leaning back or tilting the head back allows the blood to run back into the sinuses and throat and can cause gagging or inhaling the blood.'
doc2 = 'If you get a nosebleed, sit down and bend forward. Sitting is preferable to lying down, since keeping the head above the level of the heart will help reduce the bleeding. Bending forward is also important. It lets the blood drain out through the nose rather than down the throat.\r\n\r\nHold the soft portion of your nose pinched together with your fingers until the bleeding stops. This might take five to ten minutes. Placing an ice pack across the bridge of your nose can also be helpful.'
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
