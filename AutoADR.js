// ==UserScript==
// @name         AutoADR Testing
// @namespace    https://raw.githubusercontent.com/QTrmnaOL/QTrmnaOL.github.io/
// @version      V 0.1, alpha.
// @description  try to automate ADR
// @author       You
// @match        http://adarkroom.doublespeakgames.com/
// @grant        none
// @include 		 *http://adarkroom.doublespeakgames.com/*
// ==/UserScript==

(function() {
    'use strict';


    if ( window.AG ) {
        window.AG.reset();
        delete window.AG;
    }

//GAME Definitions
    var AutoGame = function() {
        /* Buttons */
        this.stoke_btn = $('#stokeButton');
 		this.light_btn = $('#lightButton');

        this.gather_btn = $('#gatherButton');
        this.traps_btn = $('#trapsButton');
        this.buildcart_btn = $('#build_cart');
        this.buildtrap_btn = $('#build_trap');
        this.buildhut_btn = $('#build_hut');
        this.buildlodge_btn = $('#build_lodge');

        this.notification = $('#notification');
        this.ruinedtrap_btn =  $('#ignore');
        this.lonelyhut_btn = $('#location_outside');
        this.room_btn = $('#location_room');

        /* functions */
        this.gather_timeout = null;
        this.room = null;
        this.village = null;
        this.build_timeout = null;

        /* Resources */
        this.wood = null;
    };


    //GAME START
AutoGame.prototype.start = function() {
        var self = this;

//ONCE light up fire.
if ( !document.getElementById('stokeButton') )
    {
 	self.light_btn.click();
    console.log( 'Lighted Fire' );
    }

//EARLY GAME -> Offload to Function / Module
this.earlygame_TO = window.setInterval(function() {
if ( !self.stoke_btn.hasClass('disabled'))
         {
 	     self.stoke_btn.click();
             console.log( 'Stoked Fire' );
         }
   else
   {
       console.log( 'Stoke Fire Disabled' );
   }
}, 2000);
//END Earlygame function

}; //End Function Autogame

AutoGame.prototype.reset = function() {
	if ( this.earlygame_TO )
		window.clearInterval(this.gather_timeout);
	if ( this.build_timeout )
		window.clearInterval(this.build_timeout);
};


console.log( 'restart');
    window.AG = new AutoGame();
    AG.start();
})();




  //   this.room = window.setInterval(function() {
  //           self.room_btn.click();
		// 	if ( !self.stoke_btn.hasClass('disabled') ) self.this.stoke_btn.click();
  //           /* build lodge */
  //           if ( !self.buildlodge_btn.hasClass('disabled') ) self.buildlodge_btn.click();
  //           /* build cart */
  //           if ( !self.buildcart_btn.hasClass('disabled') ) self.buildcart_btn.click();
  //           /* build trap */
  //           if ( !self.buildtrap_btn.hasClass('disabled') ) self.buildtrap_btn.click();
  //           /* build hut */
  //           if ( !self.buildhut_btn.hasClass('disabled') ) self.buildhut_btn.click();
  //       },
  //                                      5000);

  //       this.village = window.setInterval(function() {
  //           self.lonelyhut_btn.click();
  //           /* if ( !self.stoke_btn.hasClass('disabled') ) self.stoke_btn.click();
		// /* Collect wood */
  //           if ( !self.gather_btn.hasClass('disabled') ) self.gather_btn.click();
  //           /* Collect traps */
  //           if ( !self.traps_btn.hasClass('disabled') ) self.traps_btn.click();
  //           /* Collect traps */
  //           if ( !self.ruinedtrap_btn.hasClass('disabled') ) self.traps_btn.click();
  //           /* Get Resources */
  //           this.wood = document.getElementById('row_wood').children;
		// 	/* for (i = 0; i <= this.wood.length - 1; i++) {
  //               console.log(this.wood[i].innerHTML);
  //           }*/
  //          this.wood =  this.wood[1].innerHTML;
  //          this.console.log( this.wood );
  //       },
  //                                         5000);
