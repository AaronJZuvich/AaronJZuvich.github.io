(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let cannon = window.opspark.cannon;

  /**
   * init: Initialize all cannons.
   *
   * GOAL: Add at least 3 cannons to make your level challenging.
   *
   * Use the createCannon Function to create cannons for the level.
   *
   * createCannon() takes these arguments:
   *
   *      createCannon(type, position, delay);
   *
   *      type: "top", "bottom", "left", or "right"
   *      position: The position of the cannon along whichever side the cannon is placed on
   *          - the x coordinate for "top" and "bottom" cannons
   *          - the y coordinate for "left" and "right" cannons
   *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
   */
  function init(game) {
    let createCannon = cannon.create;
    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    // example:
    
    //Main Cannons
    
    createCannon("top", 450);
    createCannon("bottom", 450);
    
    createCannon("left", 415);
    
    createCannon("top", 350);
    createCannon("bottom", 250);
    createCannon("top", 100);
    createCannon("right", 200, 2000);
    createCannon("right", 0, 1500);
    createCannon("bottom", 542.5);
    createCannon("top", 542.5);
    
    createCannon("bottom", 820);
    

    //Force Reset Cannons
    /*
    createCannon("right", 0, 2000);
    createCannon("right", 50, 2000);
    createCannon("right", 100, 2000);
    createCannon("right", 150, 2000);
    createCannon("right", 200, 2000);
    createCannon("right", 250, 2000);
    createCannon("right", 300, 2000);
    createCannon("right", 350, 2000);
    createCannon("right", 400, 2000);
    createCannon("right", 450, 2000);
    createCannon("right", 500, 2000);
    createCannon("right", 550, 2000);
    createCannon("right", 600, 2000);
    createCannon("right", 650, 2000);
    */
    
    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  cannon.init = init;
})(window);
