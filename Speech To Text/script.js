var startbtn = document.getElementById("startbtn");
var mytextarea = document.getElementById("mytextarea");
var stopbtn = document.getElementById("stopbtn");


//Function for adding event on start button
startbtn.addEventListener("click", function () {
  var myspeech = true;
 
  window.SpeechRecognition = window.webkitSpeechRecognition;
                                                                               
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  
  recognition.interimResults = true;

  recognition.addEventListener("result", (allspeech) => {
    const transcript = Array.from(allspeech.results)
      .map((result) => result[0].transcript)
      .join("");

    mytextarea.innerHTML = transcript;
    console.log(transcript);
  });

  if (myspeech == true && recognition.continuous == true) {
    recognition.start();
    // alert("Voice recognition activated. Try speaking into the microphone.");
    stopbtn.addEventListener('click',function(){
        recognition.stop();
        alert("Voice recognition Stop");
    })
  }
 
});

