// document.addEventListener('lazybeforeunveil', function(e) {
//   console.log(e.target.parentNode);
// });

// const lazyImages = document.querySelectorAll('img[data-src]');

// // Check for Cache support
// if (window.caches) {
//   const lazyImages = Array.prototype.slice.call(document.querySelectorAll('img[data-src]'));
//   console.log(window.caches);

//   Promise.all(lazyImages.map(function(img) {
//     const src = img.getAttribute('data-src');
//     console.log(src);

//     // Check if response for this image is cached
//     return window.caches.match(src).
//     then(function(response) {
//       console.log(response);
//       if (response) {
//         // The image is cached - load it
//           img.setAttribute('src', src);
//           img.setAttribute('alt', img.getAttribute('data-alt'));
//           img.removeAttribute('data-src');
//           img.removeAttribute('data-alt');
//       }
//     })
//   })).
//   then(initialiseLazyLoading); // finished loads from cache, lazy load others
// }
// // else {
// //   // cache not supported - lazy load all
// //   initialiseLazyLoading();
// // }

// function initialiseLazyLoading() {
//   // Determine the images to be lazy loaded
//   // const lazyImages = document.querySelectorAll('img[data-src]');
//   // console.log(lazyImages)

//   // ... set up lazy loading
// }


// var matchingMedia = function(source) {
//   var media = source.getAttribute('media');
//   return !media || matchingMedia(media).matches;
// };

// var createFadeup = function(insertElement, img, src) {
//   var timer, blurImg;
//   var removeImg = function() {
//       requestAnimationFrame(function(){
//           blurImg.remove();
//       });
//   };
//   var onload = function() {
//       clearTimeout(timer);
//       img.removeEventListener('load', onload);

//       if(blurImg){
//           blurImg.classList.add('is_loaded');
//           setTimeout(removeImg, 999);
//       }
//   };

//   img.addEventListener('load', onload);

//   timer = setTimeout(function() {
//       if(!img.complete){
//           requestAnimationFrame(function() {
//               if(!img.complete) {
//                   fadeImg = document.createElement('img');
//                   fadeImg.className = 'mediabox_blurupmedia';
//                   fadeImg.src = src;
//                   insertElement.parentNode.insertBefore(fadeImg, insertElement.nextSibling);
//               }
//           });
//       }
//   }, 33);
// };

// document.addEventListener('lazybeforeunveil', function(e){
//   var img = e.target;
//   var picture = img.closest('picture');
//   var sources = picture ?
//       Array.from(picture.querySelectorAll('source, img')) :
//       [img]
//   ;
//   var source = sources.find(matchingMedia);
//   var src = source.getAttribute('data-lowsrc');

//   if(src){
//       createFadeup(picture || img, img, src);
//   }
// });

// var lazyinstance;

// $('document').ready(function() {
//   // set picture fills
//   var $lazyconts = $('.lazycont');
//   $lazyconts.attr('data-picture', '');
//   window.picturefill();

//   // set filled images as .lazy
//   var $lazyimages = $('.lazycont img');
//   $lazyimages.addClass("lazy")

//   // run lazyload
//   lazyinstance = $(".lazy").lazy({
//     visibleOnly: true,
//     chainable: false,
//     afterLoad: function(element) {
//       element.addClass("loaded")
//     }
//   });

//   var resizeTimeout;
//   $(window).bind("resize",function(event){
//     resizeTimeout = setTimeout(function () {
//       $(".lazy").each(function() {
//         if ($(this).attr("src") != $(this).attr("data-src")) {
//           $(this).attr("src", $(this).attr("data-src"))
//           lazyinstance.addItems($(this));
//           lazyinstance.loadAll();
//         }
//       });
//     }, 100);
//   });

// });
