(function (window) {
  var byeSpeaker = {};
  byeSpeaker.name = "Vivian";
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
   	  console.log(speakWord + " " + byeSpeaker.name)
  }

  window.byeSpeaker = byeSpeaker;

})(window);