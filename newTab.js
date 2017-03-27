var goal = '';

function init() {
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

init();
