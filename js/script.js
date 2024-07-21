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
    var imageDB = [];
    var resetVars = function () {
      // Look up JSON files for this database
      // make getter functions
      // look at angularjs
      iTags = [];
      imageDB = [

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
      console.info('Variables and image database reset');
    };

    console.log("imageDB length = "+imageDB.length);
    resetVars();

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

    //Function for building the image path from the imageDB using the arguments of location(within the database array) and size for specifying whether it should be thumbnail or large.
    var getImgPath = function(loc, size) {
      console.info("getImgPath Loading image " + loc);
      if (size === "large") {
        return "/images/" + imageDB[loc].fileName;
      } else if (size === "thumbnail") {
        return "/images/thumbnails" + imageDB[loc].fileName;
      } else {
        console.error("getImgPath(" + loc + ", " + size + ") is having problems.");
        return false;
      }
    };

    //Concatenates all the tags in the imageDB to one array. Iz magic. HIGH POTENTIAL FOR BREAKING THINGS TERRIBLY. Broken window that needs fixing.
    var getTags = function() {
      for(x of imageDB) {
        for(i of x.tags) {
          if (iTags.length == 0){
            iTags.push(i);
          };
          if (!lookUpDupli(iTags, i)) {
            iTags.push(i);
          };
        };
      };
      // for (n of iTags) {
      //   if( n == null ) {
      //     console.error("There is nothing in iTags to print!");
      //   } else {
      //     console.log("There is a " + n + " INDEX NUM: " + iTags.indexOf(n));
      //   };
      // };
    };


    // Function to make buttons a little faster to create. Any passthrough variable that is not needed should be declared as null. eventFunc parameter can be any valid value for .addEventListener.
    // Example: let sideButton = makeSimpleButton("div", document.getElementById("exampleElement"), 'click', function() {event function}, "simpleButton1", null, null);
    var makeSimpleButton = function(elementKind, parentN, eventFuncType, eventFunc, idN, classN, srcN) {

      let simpleButton = document.createElement(elementKind ? elementKind : "div");

      simpleButton.id = idN ? idN : null;

      simpleButton.className = classN ? classN : null;

      simpleButton.addEventListener(eventFuncType, eventFunc);

      simpleButton.src = srcN ? srcN : null;

      if (parentN) {
        parentN.appendChild(simpleButton);
        console.log("parentN value is: " + parentN);
      } else {
        console.log("parentN parameter is invalid. Aborting button creation. Value of parentN: " + parentN);
        return;
      }

      return simpleButton;
    };





    //Function that all images call to that pops up the gallery when an image is clicked
    var galleryPopup = function(imgNum) {
      var galleryPosition = imgNum;

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
      var galleryLeftButton = document.createElement("img");
      galleryLeftButton.className = "galleryNavigationButtons";
      galleryLeftButton.id = "galleryLeftButton";
      galleryLeftButton.src = "img/ArrowChevronLeft.svg";
      //Changes image and prevents imgNum from going negative
      galleryLeftButton.addEventListener('click', function() {
        if(imgNum >= 1) {
          imgNum--;
          galleryPopupImage.src = getImgPath(imgNum, "large");
          console.log("imageDB length: "+imageDB.length);
        } else {
          console.log("Already at image 0");
        };
      });
      galleryPopupContainer.appendChild(galleryLeftButton);

      var galleryRightButton = makeSimpleButton(
        "img",
        galleryPopupContainer,
        'click',
        //Changes image and prevents imgNum from surpassing imageDB.length
        function() {
          if(imgNum < imageDB.length - 1) {
            imgNum++;
            galleryPopupImage.src = getImgPath(imgNum, "large");
          } else {
            console.log("Already at the end of imageDB: "+imgNum);
          };
        },
        "galleryRightButton",
        "galleryNavigationButtons",
        "img/ArrowChevronRight.svg"
      );

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
    //for (i of iTags) {
      //This one keeps using index 10
      //document.getElementById('imageTagI' + iTags.indexOf(i)).onclick = function() { console.log(i); };;
    //}
    //Sets up all the images on the page


    for (let i = 0; i <= 7; i++) {

      //Adds a container for the image, so a constant size can be maintained and the magnifying glass icon can be displayed over the image.
      var c = document.createElement("div");
      c.className = "galleryImageContainer";
      c.id = "galleryImageContainer" + i;
      document.getElementById('artContentPanel').appendChild(c);

      //Adds the actual image element and appends it to the gallery image container.
      var x = document.createElement("img");
      //Possibly hacky code here. Check out setAttribute vs. className
      // x.setAttribute("width", "350px");
      // x.setAttribute("display", "inline-block");
      // x.setAttribute("height", "auto");
      x.className = "galleryImage";
      x.id = "galleryImage" + i;
      x.setAttribute("src", getImgPath(i, "large"));

      //Look up difference between var and let in regards to loops and inputting the iterator to a function outside the scope.
      x.addEventListener('click', function () { galleryPopup(i) });
      document.getElementById('galleryImageContainer' + i).appendChild(x);
    };
    // var img = new Image();
    // var div = document.getElementById('artContentPanel');
    //
    // img.onload = function() {
    //   div.appendChild(img);
    // };
    //
    // img.src = '/images/bear person.jpg';
    // var divar = document.getElementById('artContentPanel');
    // divar.innerHTML = "<img src='/images/Cloudscape.png'/>";
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
    console.info("Page location should be writing-things: " + document.location.origin + document.location.pathname + "/n" + imageDB[2].name);
  };

  startPageInit = function(pageloc) {

    //STUFF FOR SITE-WIDE JAVASCRIPT STUFF

    console.info('Good day! Javascript has been successfully initialized!');

    //------------------------------------
    // Temporarily disabling this: resetVars();

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
  startPageInit(pageLocID);
};
