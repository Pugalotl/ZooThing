// ==UserScript==
// @name         RealZoo Pixelise
// @namespace    https://realzoo.itsyipy.com/
// @version      0.1
// @description  Pixelate Theme for RealZoo (Images by moo#9754, Script by Slluxx#7598)
// @author       Slluxx
// @match        https://realzoo.itsyipy.com/
// @icon         https://realzoo.itsyipy.com/favicon.ico
// @grant        none
// ==/UserScript==


(function () {
    'use strict';

    class Pixelate {

        constructor() {
            this.imageBaseUrl = "https://firebasestorage.googleapis.com/v0/b/project-zoo-c893d.appspot.com/o/";
            this.interval = null;
        }

        run() {
            this.startInterval();
            this.addPixelateCss();
        }

        startInterval() {
            this.interval = setInterval(()=>{this.pixelateAllImages();}, 500);
        }

        pixelateAllImages() {
            console.log("start pixelating")
            let allImages = document.getElementsByTagName('img');
            let allImagesArray = Array.from(allImages);

            for (let i in allImagesArray) {
                if (!allImagesArray[i].src.startsWith(this.imageBaseUrl)) continue;
                let name = allImagesArray[i].src
                    .replace(this.imageBaseUrl, '')
                    .replace("?alt=media", '')
                    .split(".")[0]
                    .toLowerCase();
                let url = "https://github.com/Pugalotl/ZooThing/raw/main/" + name + ".png";
                if (allImagesArray[i].src !== url) allImagesArray[i].src = url;
            }
        }

        addPixelateCss() {
            var link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.setAttribute('href', 'https://fonts.cdnfonts.com/css/common-pixel');
            document.head.appendChild(link);
            document.body.style.fontFamily = "Common Pixel, sans-serif";
        }
    }

	let p = new Pixelate();
	p.run();

})();