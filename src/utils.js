
export function getSuggestion() {
  const ideas = [
    "cats", "dogs", "cities", "colorful", "flowers", "raindrops", "birds", "bugs", "landscape"
  ];

  return ideas[Math.floor(Math.random() * ideas.length)]
}


export function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + ' ' + month + ' ' + year;
  return time;
}
