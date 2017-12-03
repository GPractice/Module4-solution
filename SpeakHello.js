(function (window) {
  var helloSpeaker = {};
  helloSpeaker.name = "Jean";
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
   	  console.log(speakWord + " " + helloSpeaker.name)
  }

  window.helloSpeaker = helloSpeaker;

})(window);