var goal = '';

function initGoal() {
  var goalInput = document.querySelector('#goalinput');
  //var goalText = document.querySelector('#goaltext');

  // retrieve goal from storage.
  chrome.storage.sync.get('goal', function(obj) {
    if(obj.goal) {
      goalInput.value = obj.goal;
      goal = obj.goal;
    }
  });

  // add event listener that saves goal on input
  goalInput.addEventListener('input', function() {
    goal = goalInput.value;
    chrome.storage.sync.set({'goal': goal});
  });
}

function displayWatch() {
  var timeElement = document.querySelector('#time');
  setInterval(function() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var time = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);
    timeElement.innerHTML = time;
  }, 1000);
}

function displayWeather() {
  
}

displayWatch();
initGoal();
