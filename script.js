(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  this.helloSpeaker.names = names;
  this.byeSpeaker.names = names;

  var speakWord;
  
  for (var i = 0; i < names.length; i++){
    var firstLetter = (names[i].charAt(0).toLowerCase());
    if (firstLetter === 'j') {
      speakWord = "Good Bye ";
      byeSpeaker.speak = function (x) {
      console.log(speakWord + byeSpeaker.names[i]);
      }
      byeSpeaker.speak(names[i]);

    } else {
     speakWord = "Hello ";
     helloSpeaker.speak = function (x) {
     console.log(speakWord + helloSpeaker.names[i]);
     }
     helloSpeaker.speak(names[i]);
    }
  }

  window.helloSpeaker = helloSpeaker;
  window.byeSpeaker = byeSpeaker;

})(window);

