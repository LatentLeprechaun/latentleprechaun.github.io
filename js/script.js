var resetVars = function(){
  imageDB = {
    copicFlower = { name: "Copic Flower", description: "A flower drawn and colored with Copic markers.", fileName: "copic flower.jpg", large: "/images/" + this.fileName, thumbnail: "/images/thumbnails/" + this.fileName},
    annoyedGuy = { name: "Annoyed Guy", description: "Just an annoyed guy. Not much else to it.", fileName: "AnnoyedGuy(WIP).jpg", large: "/images/" + this.fileName, thumbnail: "/images/thumbnails/" + this.fileName},
    arabianSwordMage = { name: "Arabian Sword Mage", description: "This an arabian sword mage woman alien thingy. So, yeah.", fileName: "ArabianSwordMage.png", large: "/images/" + this.fileName, thumbnail: "/images/thumbnails/" + this.fileName}
  };
}

var indexInit = function() {
  console.info("Page location should be index: " + document.location.origin + document.location.pathname);
};

var codeThingsInit = function() {
  console.info("Page location should be code-things: " + document.location.origin + document.location.pathname);
};

var artThingsInit = function() {
  console.info("Page location should be art-things: " + document.location.origin + document.location.pathname);
};

var voiceOversInit = function() {
  console.info("Page location should be voice-overs: " + document.location.origin + document.location.pathname);
};

var contactInit = function() {
  console.info("Page location should be contact: " + document.location.origin + document.location.pathname);
};

var writingThingsInit = function() {
  console.info("Page location should be writing-things: " + document.location.origin + document.location.pathname);
};

init = function(pageLocID) {

  //STUFF FOR SITE-WIDE JAVASCRIPT STUFF

  console.info('Good day sir! Javascript has been successfully initialized!');

  //------------------------------------

  switch(pageLocID){
    case "index":
      indexInit();
      break;
    case "code-things":
      codeThingsInit();
      break;
    case "art-things":
      artThingsInit();
      break;
    case "voice-overs":
      voiceOversInit();
      break;
    case "contact":
      contactInit();
      break;
    case "writing-things":
      writingThingsInit();
      break;
  }
  /*document.getElementById('ditig').innerHTML = "Pay no mind to this (" + window.location.href + ")";
  var i = document.createElement("p");
  i.innerHTML = "Hello!";
  document.body.appendChild(i);
  alert(document.location.origin + document.location.pathname);
  //alert(document.location.origin + document.location.pathname.slice(0, this.length - 5));
  if (document.location.origin + document.location.pathname === document.location.origin + "/code-things.html") {
    alert("Ye found me code thingies!");
  }*/

};
