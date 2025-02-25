  //Need to revert this back to a module once I have proper web hosting  
  
  //Function that takes a number, a value to add to the number, and a lower value and higher value to specify a range.
  //Adds addVal to origVal as long is it doesn't exceed the range.
  //Range inclusive. Returns an object with the sum of origVal+addVal and a boolean value specifying whether requested summation is within bounds.
  //Example: aggregateWithinBounds(-4, 10, numberToAddTo, 1);
  const aggregateWithinBounds = function(rangeOne, rangeTwo, origVal, addVal) {
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

  //Returns an array with all the 'tags' attributes in the specified database concatenated.
  const getCombinedTags = function(db) {
    let combinedArray = [];
    for(let x of db) {
      for(let i of x.tags) {
        if (!combinedArray.includes(i)) {
          combinedArray.push(i);
        };
      };
    };
    return combinedArray;
  };onload="init('art-things')"


  // Function to make elements a little faster to create with less code. Any passthrough variable that is not needed should be declared as null.
  // Example: let sideButton = makeSimpleButton("div", "simpleButton1", "buttonClass");
  // Returns an element object
  // TODO: look into function currying to make this better
  const makeSimpleElem = function(elementKind, idN, classN) {

    let simpleElement = document.createElement(elementKind ? elementKind : "div");

    simpleElement.id = idN ? idN : null;

    simpleElement.className = classN ? classN : null;

    return simpleElement;
  };