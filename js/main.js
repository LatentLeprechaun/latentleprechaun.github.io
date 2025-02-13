import *  as utillat from "./utils.js";

//Image Database and Tag functions
//Need to make this a proper database at some point
//Getter/Setter functions not really required for this database since it's static, but keep in mind if I change it to dynamic.
import { imageDB } from "./imageDB.js";

//TODO: Finish combing through code to remove unnecessary code blocks and make it DRYer
//TODO: Make images load as thumbnails by default and upgrade to full resolution in gallery mode.
const init = function(pageLocID) {

  //----- MAIN PAGE SCRIPTS -----
  const indexInit = function() {
    console.info("Page location should be index: " + document.location.origin + document.location.pathname);
  };

  //----- CODE PAGE SCRIPTS -----
  const codeThingsInit = function() {
    console.info("Page location should be code-things: " + document.location.origin + document.location.pathname);
  };

  //----- ART PAGE SCRIPTS -----
  const artThingsInit = function() {
    console.info("Page location should be art-things: " + document.location.origin + document.location.pathname);

    let iTags = utillat.getCombinedTags(imageDB);

    console.info('Image database initialized');

    console.log("imageDB length = "+imageDB.length);

    // function called when you click on a tag.
    const setFilter = function(tagname) {
      //temporarily just prints message
      console.log("The tag is: " + tagname);
    };

    //Function for building the image path from the imageDB using the arguments of location(within the database array) and size for specifying whether it should be thumbnail or large.
    const getImgPath = function(loc, size, db) {
      console.info("getImgPath Loading image " + loc);
      if (size === "large") {
        return "/images/" + db[loc].fileName;
      } else if (size === "thumbnail") {
        return "/images/thumbnails" + db[loc].fileName;
      } else {
        console.error("getImgPath(" + loc + ", " + size + ") is having problems.");
        return false;
      }
    };


    //Function that all images call to that pops up the gallery when an image is clicked
    const galleryPopup = function(imgNum) {

      //Gallery Container Element
      const galleryPopupContainer = document.createElement("div");
      galleryPopupContainer.id = "galleryPopupContainer";
      document.body.appendChild(galleryPopupContainer);
      console.log("galleryPopup function completed.");

      //Gallery Exit Button
      const galleryPopupExit = document.createElement("img");
      galleryPopupExit.id = "galleryPopupExit";
      galleryPopupExit.src = "img/exitX.png";
      galleryPopupExit.addEventListener('click', () => {galleryPopupContainer.remove()});
      galleryPopupContainer.appendChild(galleryPopupExit);

      //Gallery Image
      const galleryPopupImage = document.createElement("img");
      galleryPopupImage.className = "galleryPopupImage";
      galleryPopupImage.src = getImgPath(imgNum, "large", imageDB);
      galleryPopupContainer.appendChild(galleryPopupImage);
      console.log("galleryPopup imgNum = " + imgNum);

      //Gallery Side Button Function
      const galleryLeftButton = utillat.makeSimpleElem("img", "galleryLeftButton", "galleryNavigationButtons");
      galleryLeftButton.src = "img/ArrowChevronLeft.svg";
      //Changes image and prevents imgNum from going outside the range of where the images are stored in imageDB.
      galleryLeftButton.addEventListener('click', function() {
        let leftGalButtonAgVal = utillat.aggregateWithinBounds(0, imageDB.length - 1, imgNum, -1);
        if(leftGalButtonAgVal.isWithinRange){
          imgNum = leftGalButtonAgVal.resultNum;
          galleryPopupImage.src = getImgPath(imgNum, "large", imageDB);
        };
      });
      
      //Update function of galleryLeftButton that controls whether the arrow is grayed out or not. Called by a click event function attached to galleryPopupContainer.
      galleryLeftButton.galleryUpdate = (imageNumber) => {
        if (imageNumber <= 0) {
          galleryLeftButton.style.background = "rgba(0, 0, 0, 0.2)";
        } else {
          galleryLeftButton.style.background = "rgba(0, 0, 0, 0.7)";
        };
      };
      galleryPopupContainer.appendChild(galleryLeftButton);

      const galleryRightButton = utillat.makeSimpleElem("img", "galleryRightButton", "galleryNavigationButtons");
      galleryRightButton.src = "img/ArrowChevronRight.svg";
      //Changes image and prevents imgNum from going outside the range of where the images are stored in imageDB.
      galleryRightButton.addEventListener('click', function() {
        let rightGalButtonAgVal = utillat.aggregateWithinBounds(0, imageDB.length - 1, imgNum, 1);
        if(rightGalButtonAgVal.isWithinRange){
          imgNum = rightGalButtonAgVal.resultNum;
          galleryPopupImage.src = getImgPath(imgNum, "large", imageDB);
        };
      });
      //Update function of galleryRightButton that controls whether the arrow is grayed out or not. Called by a click event function attached to galleryPopupContainer.
      galleryRightButton.galleryUpdate = (imageNumber, imageDatabase) => {
        if (imageNumber >= imageDatabase.length - 1) {
          galleryRightButton.style.background = "rgba(0, 0, 0, 0.2)";
        } else {
          galleryRightButton.style.background = "rgba(0, 0, 0, 0.7)";
        };
      };
      galleryPopupContainer.appendChild(galleryRightButton);

      //Function that activates on any click on the galleryPopupContainer that calls the galleryUpdate function of any specified object.
      galleryPopupContainer.addEventListener('click', function() { galleryRightButton.galleryUpdate(imgNum, imageDB); galleryLeftButton.galleryUpdate(imgNum); });
      //Initially calls galleryUpdate() functions to make sure buttons are properly grayed out on startup.
      galleryRightButton.galleryUpdate(imgNum, imageDB);
      galleryLeftButton.galleryUpdate(imgNum);

    };

    //Sets up the tags
    iTags.forEach((uniqueTag) => {
      const tagElement = utillat.makeSimpleElem('div', `imageTag-${uniqueTag}`, 'imageTags');
      tagElement.textContent = uniqueTag;
      document.getElementById('tagsPanel').appendChild(tagElement);
      tagElement.addEventListener('click', function () { setFilter(uniqueTag) });
    });


    for (let i = 0; i <= 7; i++) {

      //Adds a container for the image, so a constant size can be maintained.
      const c = document.createElement("div");
      c.className = "galleryImageContainer";
      c.id = "galleryImageContainer" + i;
      document.getElementById('artContentPanel').appendChild(c);

      //Adds the actual image element and appends it to the gallery image container.
      const x = document.createElement("img");
      x.className = "galleryImage";
      x.id = "galleryImage" + i;
      x.src = getImgPath(i, "large", imageDB);

      //TODO: Look up difference between var and let in regards to loops and inputting the iterator to a function outside the scope.
      x.addEventListener('click', function () { galleryPopup(i) });
      document.getElementById('galleryImageContainer' + i).appendChild(x);
    };
  };



  //----- VOICEOVER PAGE SCRIPTS -----
  const voiceOversInit = function() {
    console.info("Page location should be voice-overs: " + document.location.origin + document.location.pathname);
  };




  //----- CONTACT PAGE SCRIPTS -----
  const contactInit = function() {
    console.info("Page location should be contact: " + document.location.origin + document.location.pathname);
    const addressHider = document.getElementById('emailHideBox');
    addressHider.innerHTML = "(Mouse over or click)";
    addressHider.onmouseover = function() {
      addressHider.innerHTML = "joseph.br.raymond@gmail.com";
    };
    addressHider.onmouseout = function() {
      addressHider.innerHTML = "(Mouse over or click)";
    };
  };



  //----- WRITING PAGE SCRIPTS -----
  const writingThingsInit = function() {
    console.info("Page location should be writing-things: " + document.location.origin + document.location.pathname);
  };


  //WRITE SITE-WIDE CODE BELOW THIS LINE


  switch(pageLocID){
    case "http://localhost:81/index.html":
      indexInit();
      break;
    case "http://localhost:81/code-things.html":
      codeThingsInit();
      break;
    case "http://localhost:81/art-things.html":
      artThingsInit();
      break;
    case "http://localhost:81/voice-overs.html":
      voiceOversInit();
      break;
    case "http://localhost:81/contact.html":
      contactInit();
      break;
    case "http://localhost:81/writing-things.html":
      writingThingsInit();
      break;
  }
};


//Change this to only look for the last part of the URI instead of the whole URI. WILL NOT WORK RELIABLY IN ITS CURRENT STATE
document.addEventListener('DOMContentLoaded', function() {
  init(document.documentURI);
  console.log(document.documentURI);
});