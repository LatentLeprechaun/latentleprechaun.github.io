init = function(pageLocID) {


  //----- MAIN PAGE SCRIPTS -----
  var indexInit = function() {
    console.info("Page location should be index: " + document.location.origin + document.location.pathname);
  };

  //----- CODE PAGE SCRIPTS -----
  var codeThingsInit = function() {
    console.info("Page location should be code-things: " + document.location.origin + document.location.pathname);
  };

  // function called when you click on a tag.
  var setFilter = function(tagname) {
    console.log("The tag is: " + tagname);
  };



  //----- ART PAGE SCRIPTS -----
  var artThingsInit = function() {
    console.info("Page location should be art-things: " + document.location.origin + document.location.pathname);


    //Image Database and Tag functions
    var iTags = [];
    var artDB = [];
    var initializeVars = function () {
      // Look up JSON files for this database
      // make getter functions
      // look at angularjs
      iTags = [];
      artDB = [

        // {
        //   name: "",
        //   description: "",
        //   fileName: "",
        //   tags: []
        // },

        {
          name: "Praying Mantis Study",
          description: "A praying mantis study.",
          fileName: "prayingMantis.jpg",
          tags: ["study", "insect", "animal", "nature", "pen", "traditional", "2D", "2016"]
        },

        {
          name: "Anna Blunck and her Horses",
          description: "Anna Blunck with her horses. Instagram: @ab.horses",
          fileName: "AbHorsesDraw.JPG",
          tags: ["sketch", "pencil", "animal", "human", "traditional", "2D", "2016"]
        },

        {
          name: "A Portrait of Erik Orozco",
          description: "This is a portrait I drew of Erik Orozco. Instagram: @erik_orozco",
          fileName: "ErikOrozcoDraw.png",
          tags: ["portrait", "pencil", "human", "traditional", "2D", "2016"]
        },

        {
          name: "Airship Concept",
          description: "An airship concept I drew.",
          fileName: "SpaceshipConcept.png",
          tags: ["concept", "vehicle", "digital", "sci-fi", "2D", "2016"]
        },

    // a repeat for testing purposes
        {
          name: "Airship Concept",
          description: "An airship concept I drew.",
          fileName: "SpaceshipConcept.png",
          tags: ["concept", "vehicle", "digital", "sci-fi", "2D", "2016"]
        },

        {
          name: "Praying Mantis Study",
          description: "A praying mantis study.",
          fileName: "prayingMantis.jpg",
          tags: ["study", "insect", "animal", "nature", "pen", "traditional", "2016"]
        },

        {
          name: "Anna Blunck and her Horses",
          description: "Anna Blunck with her horses. Instagram: @ab.horses",
          fileName: "AbHorsesDraw.JPG",
          tags: ["sketch", "pencil", "animal", "human", "traditional", "2D", "2016"]
        },

        {
          name: "A Portrait of Erik Orozco",
          description: "This is a portrait I drew of Erik Orozco. Instagram: @erik_orozco",
          fileName: "ErikOrozcoDraw.png",
          tags: ["portrait", "pencil", "human", "traditional", "2D", "2016"]
        }

      ];
      console.info('Variables and image database initialized');
    };

    console.log("artDB length = "+artDB.length);
    initializeVars();

    //Function for finding duplicates in a string with an argument
    var lookUpDupli = function(searchArray, searchFor) {
      var i;
      for (i of searchArray) {
        if (i == searchFor) {
          //console.log("lookUpDupli exited true with a match of: " + i + " = " + searchFor);
          return true;
        }
      };
      //console.log("lookUpDupli exited false without finding a match. Last comparison: " + i + " = " + searchFor);
      return false;
    };

    //Function for building the image path from the artDB using the arguments of location(within the database array) and size for specifying whether it should be thumbnail or large.
    var getImgPath = function(loc, size) {
      console.info("getImgPath Loading image " + loc);
      if (size === "large") {
        return "/images/" + artDB[loc].fileName;
      } else if (size === "thumbnail") {
        return "/images/thumbnails" + artDB[loc].fileName;
      } else {
        console.error("getImgPath(" + loc + ", " + size + ") is having problems.");
        return false;
      }
    };

    //Concatenates all the tags in the artDB to one array. HIGH POTENTIAL FOR BREAKING THINGS TERRIBLY. Needs to be reworked.
    var getTags = function() {
      for(x of artDB) {
        for(i of x.tags) {
          if (iTags.length == 0){
            iTags.push(i);
          };
          if (!lookUpDupli(iTags, i)) {
            iTags.push(i);
          };
        };
      };
    };


    // Function to make elements a little faster to create with less code. Any passthrough variable that is not needed should be declared as null.
    // Example: let sideButton = makeSimpleButton("div", "simpleButton1", "buttonClass");
    // Returns an element object
    var makeSimpleElem = function(elementKind, idN, classN) {

      let simpleElement = document.createElement(elementKind ? elementKind : "div");

      simpleElement.id = idN ? idN : null;

      simpleElement.className = classN ? classN : null;

      return simpleElement;
    };


    //Function that takes a number, a value to add to the number, and a lower value and higher value to specify a range.
    //Adds addVal to origVal as long is it doesn't exceed the range.
    //Range inclusive. Returns an object with the sum of origVal+addVal and a boolean value specifying whether requested summation is within bounds.
    //Example: aggregateWithinBounds(-4, 10, numberToAddTo, 1);
    var aggregateWithinBounds = function(rangeOne, rangeTwo, origVal, addVal) {
      //Throws error if rangeOne isn't less than rangeTwo.
      if(rangeOne < rangeTwo){
        if (origVal + addVal >= rangeOne && origVal + addVal <= rangeTwo){
          console.log("Requested summation successful.");
          return {resultNum:origVal+addVal, isWithinRange: true};
        } else {
          console.log("Requested summation using aggregateWithinBounds is out of specified range.");
          return {resultNum:origVal, isWithinRange: false};
        }
      } else {
        console.error("Function aggregateWithinBounds was likely given bad value(s). First range value should be less than the second range value. rangeOne: "+rangeOne+" rangeTwo: "+rangeTwo);
        return;
      }
    };





    //Function that all images call to that pops up the gallery when an image is clicked
    var galleryPopup = function(imgNum) {

      //Gallery Container Element
      var galleryPopupContainer = document.createElement("div");
      galleryPopupContainer.id = "galleryPopupContainer";
      document.body.appendChild(galleryPopupContainer);
      console.log("galleryPopup function completed.");

      //Gallery Exit Button
      var galleryPopupExit = document.createElement("img");
      galleryPopupExit.id = "galleryPopupExit";
      galleryPopupExit.src = "img/exitX.png";
      galleryPopupExit.addEventListener('click', function() {galleryPopupContainer.remove()});
      galleryPopupContainer.appendChild(galleryPopupExit);

      //Gallery Image
      var galleryPopupImage = document.createElement("img");
      galleryPopupImage.className = "galleryPopupImage";
      galleryPopupImage.src = getImgPath(imgNum, "large");
      galleryPopupContainer.appendChild(galleryPopupImage);
      console.log("galleryPopup imgNum = " + imgNum);

      //Gallery Side Button Function
      var galleryLeftButton = makeSimpleElem("img", "galleryLeftButton", "galleryNavigationButtons");
      galleryLeftButton.src = "img/ArrowChevronLeft.svg";
      //Changes image and prevents imgNum from going outside the range of where the images are stored in artDB.
      galleryLeftButton.addEventListener('click', function() {
        let leftGalButtonAgVal = aggregateWithinBounds(0, artDB.length - 1, imgNum, -1);
        if(leftGalButtonAgVal.isWithinRange == true){
          imgNum = leftGalButtonAgVal.resultNum;
          galleryPopupImage.src = getImgPath(imgNum, "large");
        };
      });
      //Update function of galleryLeftButton that controls whether the arrow is grayed out or not. Called by a click event function attached to galleryPopupContainer.
      galleryLeftButton.galleryUpdate = function () {
        if (imgNum <= 0) {
          galleryLeftButton.style.background = "rgba(0, 0, 0, 0.2)";
        } else {
          galleryLeftButton.style.background = "rgba(0, 0, 0, 0.7)";
        };
      };
      galleryPopupContainer.appendChild(galleryLeftButton);

      var galleryRightButton = makeSimpleElem("img", "galleryRightButton", "galleryNavigationButtons");
      galleryRightButton.src = "img/ArrowChevronRight.svg";
      //Changes image and prevents imgNum from going outside the range of where the images are stored in artDB.
      galleryRightButton.addEventListener('click', function() {
        let rightGalButtonAgVal = aggregateWithinBounds(0, artDB.length - 1, imgNum, 1);
        if(rightGalButtonAgVal.isWithinRange == true){
          imgNum = rightGalButtonAgVal.resultNum;
          galleryPopupImage.src = getImgPath(imgNum, "large");
        };
      });
      //Update function of galleryRightButton that controls whether the arrow is grayed out or not. Called by a click event function attached to galleryPopupContainer.
      galleryRightButton.galleryUpdate = function () {
        if (imgNum >= artDB.length - 1) {
          galleryRightButton.style.background = "rgba(0, 0, 0, 0.2)";
        } else {
          galleryRightButton.style.background = "rgba(0, 0, 0, 0.7)";
        };
      };
      galleryPopupContainer.appendChild(galleryRightButton);

      //Function that activates on any click on the galleryPopupContainer that calls the galleryUpdate function of any specified object.
      galleryPopupContainer.addEventListener('click', function() { galleryRightButton.galleryUpdate(); galleryLeftButton.galleryUpdate(); });
      //Initially calls galleryUpdate() functions to make sure buttons are properly grayed out on startup.
      galleryRightButton.galleryUpdate();
      galleryLeftButton.galleryUpdate();

    };

    //Hacky code alert
    //Sets up the tags
    getTags();
    iTags.forEach(function (uniqueTag, i) {
      var tagTag = document.createElement("div");
      tagTag.className = "imageTags";
      tagTag.id = "imageTagI_" + i;
      tagTag.textContent = uniqueTag;
      document.getElementById('tagsPanel').appendChild(tagTag);
      //I don't know what is going on here. Incre keeps pointing to the very last tag. It refuses to iterate.
      //This one keeps getting index 20
      tagTag.addEventListener('click', function () { setFilter(uniqueTag) });
    });


    for (let i = 0; i <= 7; i++) {

      //Adds a container for the image, so a constant size can be maintained.
      var c = document.createElement("div");
      c.className = "galleryImageContainer";
      c.id = "galleryImageContainer" + i;
      document.getElementById('artContentPanel').appendChild(c);

      //Adds the actual image element and appends it to the gallery image container.
      var x = document.createElement("img");
      x.className = "galleryImage";
      x.id = "galleryImage" + i;
      x.src = getImgPath(i, "large");

      //Look up difference between var and let in regards to loops and inputting the iterator to a function outside the scope.
      x.addEventListener('click', function () { galleryPopup(i) });
      document.getElementById('galleryImageContainer' + i).appendChild(x);
    };
  };



  //----- VOICEOVER PAGE SCRIPTS -----
  var voiceOversInit = function() {
    console.info("Page location should be voice-overs: " + document.location.origin + document.location.pathname);
  };




  //----- CONTACT PAGE SCRIPTS -----
  var contactInit = function() {
    console.info("Page location should be contact: " + document.location.origin + document.location.pathname);
    var addressHider = document.getElementById('emailHideBox');
    addressHider.innerHTML = "(Mouse over or click)";
    addressHider.onmouseover = function() {
      addressHider.innerHTML = "joseph.br.raymond@gmail.com";
    };
    addressHider.onmouseout = function() {
      addressHider.innerHTML = "(Mouse over or click)";
    };
  };



  //----- WRITING PAGE SCRIPTS -----
  var writingThingsInit = function() {
    console.info("Page location should be writing-things: " + document.location.origin + document.location.pathname + "/n" + artDB[2].name);
  };


  //FOR SITE-WIDE JAVASCRIPT STUFF
  console.info('Good day! Javascript has been successfully initialized!');

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
};
