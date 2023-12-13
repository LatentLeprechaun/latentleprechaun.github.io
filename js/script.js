init = function(pageLocID) {
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

        name: "Annoyed Guy",
        description: "Just an annoyed guy. Not much else to it.",
        fileName: "AnnoyedGuy(WIP).jpg",
        tags: ["character", "beard", "fantasy", "portrait", "digital", "2D", "2016"]
      },

      {
        name: "Arabian Sword Mage",
        description: "This is an arabian sword mage woman alien thingy. So, yeah.",
        fileName: "ArabianSwordMage.png",
        tags: ["character", "digital", "fantasy", "2D", "2016"]
      },

      {
        name: "Hedgehog in a Tree",
        description: "A hedgehog in a tree.",
        fileName: "hedgehogtree.jpg",
        tags: ["nature", "animal", "pencil", "cute", "traditional", "sketch", "2D", "2015"]
      },

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

  // a repeat for testing purposes
      {
        name: "Airship Concept",
        description: "An airship concept I drew.",
        fileName: "SpaceshipConcept.png",
        tags: ["concept", "vehicle", "digital", "sci-fi", "2D", "2016"]
      },

      {
        name: "Annoyed Guy",
        description: "Just an annoyed guy. Not much else to it.",
        fileName: "AnnoyedGuy(WIP).jpg",
        tags: ["character", "beard", "fantasy", "portrait", "digital", "2016"]
      },

      {
        name: "Arabian Sword Mage",
        description: "This is an arabian sword mage woman alien thingy. So, yeah.",
        fileName: "ArabianSwordMage.png",
        tags: ["character", "digital", "fantasy", "2016"]
      },

      {
        name: "Hedgehog in a Tree",
        description: "A hedgehog in a tree.",
        fileName: "hedgehogtree.jpg",
        tags: ["nature", "animal", "pencil", "cute", "traditional", "sketch", "2015"]
      },

      {
        name: "Praying Mantis Study",
        description: "A praying mantis study.",
        fileName: "prayingMantis.jpg",
        tags: ["study", "insect", "animal", "nature", "pen", "traditional", "2016"]
      }

    ];
    console.info('Variables and image database reset');
  };

  //Function that redraws elements so that the css rules actually get applied to them.
  //Doesn't seem to actually work.
  // function redraw(elem) {
  //   var n = document.createTextNode(' ');
  //   elem.aappendChild(n);
  //   setTimeout(function(){ n.parentNode.removeChild(n) }, 0);
  //   return elem;
  // }

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
    console.info("Loading image " + loc);
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

  var indexInit = function() {    console.log(iTags[4]);
    console.log(iTags[23]);
    console.info("Page location should be index: " + document.location.origin + document.location.pathname);
  };

  var codeThingsInit = function() {
    console.info("Page location should be code-things: " + document.location.origin + document.location.pathname);
  };

  // function called when you click on a tag.
  var setFilter = function(tagname) {
    console.log("The tag is: " + tagname);
  };

  var artThingsInit = function() {
    console.info("Page location should be art-things: " + document.location.origin + document.location.pathname);
    //Hacky code alert
    //Sets up the tags
    getTags();
    for (incre of iTags) {
      var n = document.createElement("div");
      n.className = "imageTags";
      n.id = "imageTagI" + iTags.indexOf(incre);
      n.innerHTML = incre;
      document.getElementById('tagsPanel').appendChild(n);
      //I don't know what is going on here. Incre keeps pointing to the very last tag. It refuses to iterate.
      //This one keeps getting index 20
      document.getElementById('imageTagI' + iTags.indexOf(incre)).onclick = function() { return setFilter(incre); };
      //this.n.onclick = function() { setFilter(incre); };
    };
    //for (i of iTags) {
      //This one keeps using index 10
      //document.getElementById('imageTagI' + iTags.indexOf(i)).onclick = function() { console.log(i); };;
    //}
    //Sets up all the images on the page
    for (i = 0; i <= 9; i++) {
      var x = document.createElement("img");
      //Possibly hacky code here. Check out setAttribute vs. className
      // x.setAttribute("width", "350px");
      // x.setAttribute("display", "inline-block");
      // x.setAttribute("height", "auto");
      x.className = "galleryImage";
      x.id = "galleryImage" + i;
      x.setAttribute("src", getImgPath(i, "large"));
      document.getElementById('artContentPanel').appendChild(x);
      var y = document.createElement("img");
      y.className = "galleryImageMag";
      y.id = "galleryImageMag" + i;
      y.setAttribute("src", "/img/MagnifyingGlass.svg");
      document.getElementById('galleryImage' + i).appendChild(y);
    };
    document.getElementById('galleryImage3').setAttribute("height", "5000px");
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

  var voiceOversInit = function() {
    console.info("Page location should be voice-overs: " + document.location.origin + document.location.pathname);
  };

  var contactInit = function() {
    console.info("Page location should be contact: " + document.location.origin + document.location.pathname);
    var addressHider = document.getElementById('emailHideBox');
    addressHider.innerHTML = "(Mouse over or click)";
    addressHider.onmouseover = function() {
      addressHider.innerHTML = "latentleprechaun.inquiries@gmail.com";
    };
    addressHider.onmouseout = function() {
      addressHider.innerHTML = "(Mouse over or click)";
    };
  };

  var writingThingsInit = function() {
    console.info("Page location should be writing-things: " + document.location.origin + document.location.pathname + "/n" + imageDB[2].name);
  };

  startPageInit = function(pageloc) {

    //STUFF FOR SITE-WIDE JAVASCRIPT STUFF

    console.info('Good day sir! Javascript has been successfully initialized!');

    //------------------------------------
    resetVars();

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
