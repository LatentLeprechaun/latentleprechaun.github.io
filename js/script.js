var navTab;
var navPanel;
var navToggle;
init = function() {
  navTab = document.getElementById('navtab');
  navPanel = document.getElementById('navigation');
  navPanel.setAttribute("class", "navHidden");
  navToggle = 0;
};

var navTabClicked = function(){
  if(navToggle == 0){
    navPanel.setAttribute("class", "navUnhidden");
    navToggle = 1;
  }else if(navToggle == 1){
    navPanel.setAttribute("class", "navHidden");
    navToggle = 0;
  }else{
    console.log("error in the navigation tab clicking script");
  }
};
