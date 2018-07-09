function getDayOfTheWeek(date) {
  var hi = new Date(date)
  var bye = hi.getDay()
  if(bye == 0){
    bye = "Sunday"
  }
  else if(bye == 1){
    bye = "Monday"
  }
  else if(bye == 2){
    bye = "Tuesday"
  }
  else if(bye == 3){
    bye = "Wednesday"
  }
  else if(bye == 4){
    bye = "Thursday"
  }
  else if(bye == 5){
    bye = "Friday"
  }
  else if(bye == 6){
    bye = "Satursday"
  }
  return bye

}
