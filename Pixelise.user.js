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

    var CHANGE_IMAGE = true;
    var CHANGE_FONT = true;
    var COLLECT_ALL = false;
    window.startPixel = function(e) {
        if (CHANGE_IMAGE == true) {
            inter = setInterval(function () {
                var allImages = document.getElementsByTagName('img');
                for(var i = 0; i < allImages.length ; i++) {
                    var img_tag = allImages[i].src.split("/");
                    allImages[i].src = ("https://pugalotl.github.io/ZooThing/"+img_tag[img_tag.length - 1].split(".")[0].toLowerCase()+".png")
                }
            }, 500);
        }
        if (CHANGE_FONT == true) {
            var link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.setAttribute('href', 'https://fonts.cdnfonts.com/css/common-pixel');
            document.head.appendChild(link);
            document.body.style.fontFamily = "Common Pixel, sans-serif";
        }
        if (COLLECT_ALL == true) {
            function collect_all() {
                let i = 0;
                let v = setInterval(() => {
                    i++;document.querySelectorAll(".listing")[i].click();
                    if(i >= document.querySelectorAll(".listing").length - 1) clearInterval(v);
                }, 1000)
                }
            setTimeout(function() {

                document.getElementsByClassName("flex flex-wrap items-center p-4 justify-between")[0].innerHTML += '<button class="sort-button bg-yellow-500 text-black font-bold whitespace-nowrap svelte-1aj0k98" id="collect_all">Collect All</button>';
                document.getElementById("collect_all").onclick = collect_all;
            }, 3000);
        }

    }
    // Your code here...
})();