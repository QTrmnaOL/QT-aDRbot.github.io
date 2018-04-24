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
        this.ignore_btn = $('#ignore.button');
        this.lonelyhut_btn = $('#location_outside');
        this.room_btn = $('#location_room');


        /* functions */
        this.earlygamestoke_TO = null;
        this.earlygamebuilding_TO = null;
        this.gather_TO = null;
        this.silentForest_TO = null;
        this.noises_TO = null; 

        /* Resources */
        this.wood = null;

        /* General */
        this.notification = null;
    };


    //GAME START
AutoGame.prototype.start = function() {
        var self = this;

var stokeCount = 1;

//ONCE light up fire.
if ( document.getElementById('stokeButton') )
    {
 	self.light_btn.click();
    console.log( 'Lighted Fire' );
    }
//All Noises ignore
this.noises_TO = window.setInterval(function() {
    if ( document.getElementById('exitButtons') ) {
    console.log('exit buttons vorhanden.');
    this.ignore_btn.click();
    } 
}, 1000);

//EARLY GAME (stoke) -> Offload to Function / Module
	this.earlygamestoke_TO = window.setInterval(function() {

    this.notification = document.getElementById('notifications').children;
        var i = null;
         for (i = 0; i <= this.notification.length - (this.notification.length + 3); i++) {
                 console.log(this.notification[i].innerHTML);
             if ( this.notification[i] == 'the room is cold.' ){
                  self.stoke_btn.click();
	             console.log( 'Stoked Fire' );
            }
         }

	}, 30000);
//END Earlygame (stoke) function
    
//A silent Forest
this.silentForest_TO = window.setInterval(function() {
        //Start only when forest is open
if ( document.getElementById('gatherButton') ) {

if ( !self.gather_btn.hasClass('disabled') ) {
    self.gather_btn.click();  //Gather
console.log( 'Gathered Wood' );
}
if ( !self.traps_btn.hasClass('disabled') ) {
    self.traps_btn.click(); // Collect traps
    console.log( 'Collected Traps' );
}
}
	}, 5000);

//EARLY GAME build-> Offload to Function / Module
//Index Build options - pick cheapeast.
this.earlygamebuild_TO = window.setInterval(function() {
    var build_options_array = [];
    build_options_array.push(["Option", "WoodPrice"]);
    if ( document.getElementById('buildBtns') ) {
//TRAP
        if ( document.getElementById('build_trap') ) {
        this.build_trap = document.getElementById('build_trap').childNodes;
        //console.log(build_trap);
        var build_trap_price = this.build_trap[2].children[1];
            console.log(build_trap_price);
        build_options_array.push(["Traps", build_trap_price.innerHTML]);
        console     
        }
        console.log( build_options_array );
//ENDTRAP

//CART
if ( document.getElementById('build_cart') ) {
    this.build_cart = document.getElementById('build_cart').childNodes;
    //console.log(build_cart);
    var build_cart_price = this.build_cart[2].children[1];
        console.log(build_cart_price);
    build_options_array.push(["Cart", build_cart_price.innerHTML]);
    console     
    }
    console.log( build_options_array );
//ENDCART

//hut
if ( document.getElementById('build_hut') ) {
    this.build_hut = document.getElementById('build_hut').childNodes;
    //console.log(build_hut);
    var build_hut_price = this.build_hut[2].children[1];
        console.log(build_hut_price);
    build_options_array.push(["hut", build_hut_price.innerHTML]);
    console     
    }
    console.log( build_options_array );
//ENDhut


//Find (For Now) chepeast stuff to buy
build_options_array.sort(compareSecondColumn);

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}



    } //END Buttons 

}, 5000);
//END Earlygame build function


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
