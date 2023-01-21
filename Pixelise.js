// ==UserScript==
// @name         RealZoo Pixelise
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Made by moo#9754
// @author       You
// @match        https://realzoo.itsyipy.com/
// @icon         https://realzoo.itsyipy.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var inter;
    window.startPixel = function(e) {
        inter = setInterval(function () {
            var allImages = document.getElementsByTagName('img');
            for(var i = 0; i < allImages.length ; i++) {
                var source = allImages[i].src;
                if (source.startsWith("https://firebasestorage.googleapis.com/v0/b/project-zoo-c893d.appspot.com")) {
                    var img_tag = source.split("/");
                    allImages[i].src = ("https://pugalotl.github.io/ZooThing/"+img_tag[img_tag.length - 1].split(".")[0].toLowerCase()+".png")
                }
            }
        }, 500);
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', 'https://fonts.cdnfonts.com/css/common-pixel');
        document.head.appendChild(link);
        document.body.style.fontFamily = "Common Pixel, sans-serif";

    }

    // Your code here...
})();
