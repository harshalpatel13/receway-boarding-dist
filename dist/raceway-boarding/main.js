(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app-footer-section/app-footer-section.component.css":
/*!*****************************************************************!*\
  !*** ./app/app-footer-section/app-footer-section.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font-style {\r\n  color: #fff;\r\n  font-size: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWZvb3Rlci1zZWN0aW9uL2FwcC1mb290ZXItc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAtZm9vdGVyLXNlY3Rpb24vYXBwLWZvb3Rlci1zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1zdHlsZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./app/app-footer-section/app-footer-section.component.html":
/*!******************************************************************!*\
  !*** ./app/app-footer-section/app-footer-section.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer section -->\r\n<footer class=\"footer-section\">\r\n  <div class=\"container\">\r\n    <ul class=\"main-menu footer-menu\">\r\n      <li><a>Home</a></li>\r\n      <li><a>Info</a></li>\r\n      <li><a>Entries</a></li>\r\n      <li><a>Gallery</a></li>\r\n      <li><a>Standings</a></li>\r\n      <li><a>Race Reports</a></li>\r\n      <li><a>Hall of Fame</a></li>\r\n      <li><a>Contact Us</a></li>\r\n    </ul>\r\n    <div class=\"font-style justify-content-center\">\r\n      <a>Copyright © Tygerberg Raceway 2013. All Rights Reserved.</a>\r\n      <!-- <a href=\"#\"><i class=\"fa fa-pinterest\"></i></a>\r\n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\r\n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\r\n      <a href=\"#\"><i class=\"fa fa-behance\"></i></a> -->\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./app/app-footer-section/app-footer-section.component.ts":
/*!****************************************************************!*\
  !*** ./app/app-footer-section/app-footer-section.component.ts ***!
  \****************************************************************/
/*! exports provided: AppFooterSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterSectionComponent", function() { return AppFooterSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppFooterSectionComponent = /** @class */ (function () {
    function AppFooterSectionComponent() {
    }
    AppFooterSectionComponent.prototype.ngOnInit = function () { };
    AppFooterSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-footer-section',
            template: __webpack_require__(/*! ./app-footer-section.component.html */ "./app/app-footer-section/app-footer-section.component.html"),
            styles: [__webpack_require__(/*! ./app-footer-section.component.css */ "./app/app-footer-section/app-footer-section.component.css"), __webpack_require__(/*! ../../content/styles/style.css */ "./content/styles/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppFooterSectionComponent);
    return AppFooterSectionComponent;
}());



/***/ }),

/***/ "./app/app-header-section/app-header-section.component.css":
/*!*****************************************************************!*\
  !*** ./app/app-header-section/app-header-section.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-warp {\r\n  max-width: 100% !important;\r\n  margin: 0 auto;\r\n}\r\n\r\n.margin-lft {\r\n  margin-left: 24%;\r\n}\r\n\r\n.pull-left {\r\n  float: left;\r\n}\r\n\r\n/* .nav-mrgn-left {\r\n  margin-left: 18%;\r\n} */\r\n\r\n.nav-background {\r\n  background: linear-gradient(to right, #330d38 0%, #190d36 100%);\r\n  padding: 1%;\r\n}\r\n\r\na {\r\n  display: block;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  color: #fff;\r\n  position: relative;\r\n  padding-right: 20px;\r\n  margin-right: 25px;\r\n}\r\n\r\n.dropdown-item {\r\n  color: black;\r\n}\r\n\r\n.navbar-brand {\r\n  margin-left: 1%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWhlYWRlci1zZWN0aW9uL2FwcC1oZWFkZXItc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSwrREFBK0Q7RUFDL0QsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC1oZWFkZXItc2VjdGlvbi9hcHAtaGVhZGVyLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItd2FycCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5tYXJnaW4tbGZ0IHtcclxuICBtYXJnaW4tbGVmdDogMjQlO1xyXG59XHJcblxyXG4ucHVsbC1sZWZ0IHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLyogLm5hdi1tcmduLWxlZnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxOCU7XHJcbn0gKi9cclxuXHJcbi5uYXYtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzMwZDM4IDAlLCAjMTkwZDM2IDEwMCUpO1xyXG4gIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG5hIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./app/app-header-section/app-header-section.component.html":
/*!******************************************************************!*\
  !*** ./app/app-header-section/app-header-section.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <header class=\"\">\r\n  <div class=\"header-warp\">\r\n    <div class=\"header-bar-warp d-flex\">\r\n      <a href=\"#\" class=\"site-logo\">\r\n        <img\r\n          style=\"margin-bottom: 10%;border-radius: 4px;\"\r\n          src=\"../../content/img/site-logo.jpg\"\r\n        />\r\n      </a>\r\n      <nav class=\"top-nav-area w-100 margin-lft\">\r\n        <ul class=\"main-menu primary-menu\">\r\n          <li><a routerLink=\"/home\">Home</a></li>\r\n          <li>\r\n            <a>Info</a>\r\n            <ul class=\"sub-menu\">\r\n              <li><a routerLink=\"/member-info\">Member Info</a></li>\r\n              <li><a routerLink=\"/public-info\">Public Info</a></li>\r\n              <li><a routerLink=\"/lap-time\">Lap Times</a></li>\r\n            </ul>\r\n          </li>\r\n          <li><a routerLink=\"/entries\">Entries</a></li>\r\n          <li>\r\n            <a>Standings</a>\r\n            <ul class=\"sub-menu\">\r\n              <li>\r\n                <a routerLink=\"/regional-standings\">Regional Standings</a>\r\n              </li>\r\n              <li><a routerLink=\"/regional-standings\">Club Standings</a></li>\r\n              <li>\r\n                <a routerLink=\"/regional-standings\">National Standings</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a>Gallery</a>\r\n            <ul class=\"sub-menu\">\r\n              <li><a routerLink=\"/gallery\">Abri de Bruin</a></li>\r\n              <li><a routerLink=\"/gallery\">Ashley Mills</a></li>\r\n              <li><a routerLink=\"/gallery\">Archives</a></li>\r\n              <li><a routerLink=\"/gallery\">Videos</a></li>\r\n              <li><a routerLink=\"/gallery\">Pitbabes</a></li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a>Hall Of Fame</a>\r\n            <ul class=\"sub-menu\">\r\n              <li><a>Abri de Bruin</a></li>\r\n              <li><a>Ashley Mills</a></li>\r\n              <li><a>Archives</a></li>\r\n              <li><a>Videos</a></li>\r\n              <li><a>Pitbabes</a></li>\r\n            </ul>\r\n          </li>\r\n          <li><a>Contact Us</a></li>\r\n          <li>\r\n            <a>Links</a>\r\n            <ul class=\"sub-menu\">\r\n              <li><a>Abri de Bruin</a></li>\r\n              <li><a>Ashley Mills</a></li>\r\n              <li><a>Archives</a></li>\r\n              <li><a>Videos</a></li>\r\n              <li><a>Pitbabes</a></li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a>Team Building</a>\r\n            <ul class=\"sub-menu\">\r\n              <li><a>Action Netbal 2014</a></li>\r\n              <li><a>Pictures</a></li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n\r\n    <div class=\"header-social d-flex justify-content-end pull-left\"></div>\r\n  </div>\r\n</header> -->\r\n\r\n<!-- Image and text -->\r\n<nav class=\"navbar navbar-expand-lg bg-dark navbar-dark nav-background\">\r\n  <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\r\n  <a routerLink=\"/home\" class=\"navbar-brand\">\r\n    <img\r\n      style=\"border-radius: 4px;height: 45px;\"\r\n      src=\"../../content/img/site-logo.jpg\"\r\n    />\r\n  </a>\r\n  <button\r\n    class=\"navbar-toggler\"\r\n    type=\"button\"\r\n    data-toggle=\"collapse\"\r\n    data-target=\"#navbarNav\"\r\n    aria-controls=\"navbarNav\"\r\n    aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\"\r\n  >\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse nav-mrgn-left\" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a\r\n          class=\"nav-link dropdown-toggle\"\r\n          href=\"#\"\r\n          id=\"navbardrop\"\r\n          data-toggle=\"dropdown\"\r\n        >\r\n          Info\r\n        </a>\r\n        <div class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" routerLink=\"/member-info\">Member Info</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/public-info\">Public Info</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/lap-time\">Lap Times</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/entries\">Entries</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a\r\n          class=\"nav-link dropdown-toggle\"\r\n          href=\"#\"\r\n          id=\"navbardrop\"\r\n          data-toggle=\"dropdown\"\r\n        >\r\n          Standings\r\n        </a>\r\n        <div class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" routerLink=\"/regional-standings\"\r\n            >Regional Standings</a\r\n          >\r\n          <a class=\"dropdown-item\" routerLink=\"/regional-standings\"\r\n            >Club Standings</a\r\n          >\r\n          <a class=\"dropdown-item\" routerLink=\"/regional-standings\"\r\n            >National Standings</a\r\n          >\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a\r\n          class=\"nav-link dropdown-toggle\"\r\n          href=\"#\"\r\n          id=\"navbardrop\"\r\n          data-toggle=\"dropdown\"\r\n        >\r\n          Gallery\r\n        </a>\r\n        <div class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" routerLink=\"/gallery\">Abri de Bruin</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/ashley-mills\">Ashley Mills</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/archives\">Archives</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/videos\">Videos</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/pitbabes\">Pitbabes</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a\r\n          class=\"nav-link dropdown-toggle\"\r\n          href=\"#\"\r\n          id=\"navbardrop\"\r\n          data-toggle=\"dropdown\"\r\n        >\r\n          Hall Of Fame\r\n        </a>\r\n        <div class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" routerLink=\"/gallery\">Abri de Bruin</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/gallery\">Abri de Bruin</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/gallery\">Abri de Bruin</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home\">Contact Us</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a\r\n          class=\"nav-link dropdown-toggle\"\r\n          href=\"#\"\r\n          id=\"navbardrop\"\r\n          data-toggle=\"dropdown\"\r\n        >\r\n          Links\r\n        </a>\r\n        <div class=\"dropdown-menu\">\r\n          <a\r\n            class=\"dropdown-item\"\r\n            href=\"http://www.capehelldrivers.co.za/\"\r\n            target=\"_blank\"\r\n            >Cape Hell Drivers</a\r\n          >\r\n          <a\r\n            class=\"dropdown-item\"\r\n            href=\"http://www.bredasdorpmotorklub.com/\"\r\n            target=\"_blank\"\r\n            >Bredasdorp Motor Club</a\r\n          >\r\n          <a\r\n            class=\"dropdown-item\"\r\n            href=\"http://www.georgemotorclub.com/\"\r\n            target=\"_blank\"\r\n            >George Motor Club</a\r\n          >\r\n          <a\r\n            class=\"dropdown-item\"\r\n            href=\"http://www.oudtshoornmotorclub.com/\"\r\n            target=\"_blank\"\r\n            >Oudtshoorn Motor Club</a\r\n          >\r\n          <a\r\n            class=\"dropdown-item\"\r\n            href=\"http://www.monstermob.co.za/\"\r\n            target=\"_blank\"\r\n            >Monster Mob</a\r\n          >\r\n          <a\r\n            class=\"dropdown-item\"\r\n            href=\"http://www.dirtkickers.com/\"\r\n            target=\"_blank\"\r\n            >Bloemfontein Oval Racing</a\r\n          >\r\n          <a\r\n            class=\"dropdown-item\"\r\n            href=\"http://www.victoryovaltrack.talkspot.com/\"\r\n            target=\"_blank\"\r\n            >Victory Oval Track</a\r\n          >\r\n          <a\r\n            class=\"dropdown-item\"\r\n            href=\"http://www.stockcars.za.org/\"\r\n            target=\"_blank\"\r\n            >Stock Cars</a\r\n          >\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a\r\n          class=\"nav-link dropdown-toggle\"\r\n          href=\"#\"\r\n          id=\"navbardrop\"\r\n          data-toggle=\"dropdown\"\r\n        >\r\n          Team Building\r\n        </a>\r\n        <div class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" routerLink=\"/action-netval-2014\"\r\n            >Action Netbal 2014</a\r\n          >\r\n          <a class=\"dropdown-item\" routerLink=\"/pictures-action-netbal\"\r\n            >Pictures</a\r\n          >\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <form class=\"form-inline\">\r\n    <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" />\r\n    <button class=\"btn btn-success\" type=\"submit\">Search</button>\r\n  </form>\r\n</nav>\r\n"

/***/ }),

/***/ "./app/app-header-section/app-header-section.component.ts":
/*!****************************************************************!*\
  !*** ./app/app-header-section/app-header-section.component.ts ***!
  \****************************************************************/
/*! exports provided: AppHeaderSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderSectionComponent", function() { return AppHeaderSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppHeaderSectionComponent = /** @class */ (function () {
    function AppHeaderSectionComponent() {
    }
    AppHeaderSectionComponent.prototype.ngOnInit = function () { };
    AppHeaderSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-header-section',
            template: __webpack_require__(/*! ./app-header-section.component.html */ "./app/app-header-section/app-header-section.component.html"),
            styles: [__webpack_require__(/*! ./app-header-section.component.css */ "./app/app-header-section/app-header-section.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppHeaderSectionComponent);
    return AppHeaderSectionComponent;
}());



/***/ }),

/***/ "./app/app-routing.module.ts":
/*!***********************************!*\
  !*** ./app/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/home/home.component */ "./app/home/home.component.ts");
/* harmony import */ var _app_info_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/info/info.component */ "./app/info/info.component.ts");
/* harmony import */ var _app_standings_standings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/standings/standings.component */ "./app/standings/standings.component.ts");
/* harmony import */ var _app_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/gallery/gallery.component */ "./app/gallery/gallery.component.ts");
/* harmony import */ var _app_entries_entries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/entries/entries.component */ "./app/entries/entries.component.ts");
/* harmony import */ var src_app_info_public_info_public_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/info/public-info/public-info.component */ "./app/info/public-info/public-info.component.ts");
/* harmony import */ var src_app_info_lap_times_lap_times_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/info/lap-times/lap-times.component */ "./app/info/lap-times/lap-times.component.ts");
/* harmony import */ var src_app_gallery_archives_archives_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/gallery/archives/archives.component */ "./app/gallery/archives/archives.component.ts");
/* harmony import */ var src_app_gallery_ashley_ashley_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/gallery/ashley/ashley.component */ "./app/gallery/ashley/ashley.component.ts");
/* harmony import */ var src_app_gallery_pitbabes_pitbabes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/gallery/pitbabes/pitbabes.component */ "./app/gallery/pitbabes/pitbabes.component.ts");
/* harmony import */ var src_app_gallery_videos_videos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/gallery/videos/videos.component */ "./app/gallery/videos/videos.component.ts");
/* harmony import */ var src_app_team_building_team_building_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/team-building/team-building.component */ "./app/team-building/team-building.component.ts");
/* harmony import */ var src_app_team_building_team_building_pictures_team_building_pictures_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/team-building/team-building-pictures/team-building-pictures.component */ "./app/team-building/team-building-pictures/team-building-pictures.component.ts");
















var routes = [
    { path: '', component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'member-info', component: _app_info_info_component__WEBPACK_IMPORTED_MODULE_4__["InfoComponent"] },
    { path: 'public-info', component: src_app_info_public_info_public_info_component__WEBPACK_IMPORTED_MODULE_8__["PublicInfoComponent"] },
    { path: 'lap-time', component: src_app_info_lap_times_lap_times_component__WEBPACK_IMPORTED_MODULE_9__["LapTimesComponent"] },
    { path: 'regional-standings', component: _app_standings_standings_component__WEBPACK_IMPORTED_MODULE_5__["StandingsComponent"] },
    { path: 'entries', component: _app_entries_entries_component__WEBPACK_IMPORTED_MODULE_7__["EntriesComponent"] },
    { path: 'gallery', component: _app_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"] },
    { path: 'archives', component: src_app_gallery_archives_archives_component__WEBPACK_IMPORTED_MODULE_10__["ArchivesComponent"] },
    { path: 'ashley-mills', component: src_app_gallery_ashley_ashley_component__WEBPACK_IMPORTED_MODULE_11__["AshleyComponent"] },
    { path: 'videos', component: src_app_gallery_videos_videos_component__WEBPACK_IMPORTED_MODULE_13__["VideosComponent"] },
    { path: 'pitbabes', component: src_app_gallery_pitbabes_pitbabes_component__WEBPACK_IMPORTED_MODULE_12__["PitbabesComponent"] },
    { path: 'action-netval-2014', component: src_app_team_building_team_building_component__WEBPACK_IMPORTED_MODULE_14__["TeamBuildingComponent"] },
    { path: 'pictures-action-netbal', component: src_app_team_building_team_building_pictures_team_building_pictures_component__WEBPACK_IMPORTED_MODULE_15__["TeamBuildingPicturesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.css":
/*!*******************************!*\
  !*** ./app/app.component.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-custom {\r\n  width: 100% !important;\r\n  padding-right: 2%;\r\n  padding-left: 2%;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWN1c3RvbSB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-app-header-section></app-app-header-section>\r\n<div class=\"container-custom\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-app-footer-section></app-app-footer-section>\r\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'raceway-boarding';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./app/home/home.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info/info.component */ "./app/info/info.component.ts");
/* harmony import */ var _entries_entries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entries/entries.component */ "./app/entries/entries.component.ts");
/* harmony import */ var _standings_standings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./standings/standings.component */ "./app/standings/standings.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery.component */ "./app/gallery/gallery.component.ts");
/* harmony import */ var _app_header_section_app_header_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-header-section/app-header-section.component */ "./app/app-header-section/app-header-section.component.ts");
/* harmony import */ var _app_footer_section_app_footer_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-footer-section/app-footer-section.component */ "./app/app-footer-section/app-footer-section.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_fs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-fs */ "../node_modules/ngx-fs/index.js");
/* harmony import */ var src_app_common_pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/common-pipe/safe-pipe */ "./app/common-pipe/safe-pipe.ts");
/* harmony import */ var _info_public_info_public_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./info/public-info/public-info.component */ "./app/info/public-info/public-info.component.ts");
/* harmony import */ var _info_lap_times_lap_times_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./info/lap-times/lap-times.component */ "./app/info/lap-times/lap-times.component.ts");
/* harmony import */ var _gallery_videos_videos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./gallery/videos/videos.component */ "./app/gallery/videos/videos.component.ts");
/* harmony import */ var _gallery_pitbabes_pitbabes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gallery/pitbabes/pitbabes.component */ "./app/gallery/pitbabes/pitbabes.component.ts");
/* harmony import */ var _gallery_archives_archives_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gallery/archives/archives.component */ "./app/gallery/archives/archives.component.ts");
/* harmony import */ var _gallery_ashley_ashley_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gallery/ashley/ashley.component */ "./app/gallery/ashley/ashley.component.ts");
/* harmony import */ var _team_building_team_building_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./team-building/team-building.component */ "./app/team-building/team-building.component.ts");
/* harmony import */ var _team_building_team_building_pictures_team_building_pictures_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./team-building/team-building-pictures/team-building-pictures.component */ "./app/team-building/team-building-pictures/team-building-pictures.component.ts");
/* harmony import */ var ngx_crystal_gallery__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-crystal-gallery */ "../node_modules/ngx-crystal-gallery/fesm5/ngx-crystal-gallery.js");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_6__["InfoComponent"],
                _entries_entries_component__WEBPACK_IMPORTED_MODULE_7__["EntriesComponent"],
                _standings_standings_component__WEBPACK_IMPORTED_MODULE_8__["StandingsComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"],
                _app_header_section_app_header_section_component__WEBPACK_IMPORTED_MODULE_10__["AppHeaderSectionComponent"],
                _app_footer_section_app_footer_section_component__WEBPACK_IMPORTED_MODULE_11__["AppFooterSectionComponent"],
                src_app_common_pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_15__["SafePipe"],
                _info_public_info_public_info_component__WEBPACK_IMPORTED_MODULE_16__["PublicInfoComponent"],
                _info_lap_times_lap_times_component__WEBPACK_IMPORTED_MODULE_17__["LapTimesComponent"],
                _gallery_videos_videos_component__WEBPACK_IMPORTED_MODULE_18__["VideosComponent"],
                _gallery_pitbabes_pitbabes_component__WEBPACK_IMPORTED_MODULE_19__["PitbabesComponent"],
                _gallery_archives_archives_component__WEBPACK_IMPORTED_MODULE_20__["ArchivesComponent"],
                _gallery_ashley_ashley_component__WEBPACK_IMPORTED_MODULE_21__["AshleyComponent"],
                _team_building_team_building_component__WEBPACK_IMPORTED_MODULE_22__["TeamBuildingComponent"],
                _team_building_team_building_pictures_team_building_pictures_component__WEBPACK_IMPORTED_MODULE_23__["TeamBuildingPicturesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                ngx_fs__WEBPACK_IMPORTED_MODULE_14__["NgxFsModule"],
                ngx_crystal_gallery__WEBPACK_IMPORTED_MODULE_24__["CrystalGalleryModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/common-pipe/safe-pipe.ts":
/*!**************************************!*\
  !*** ./app/common-pipe/safe-pipe.ts ***!
  \**************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./app/entries/entries.component.css":
/*!*******************************************!*\
  !*** ./app/entries/entries.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudHJpZXMvZW50cmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/entries/entries.component.html":
/*!********************************************!*\
  !*** ./app/entries/entries.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  entries works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/entries/entries.component.ts":
/*!******************************************!*\
  !*** ./app/entries/entries.component.ts ***!
  \******************************************/
/*! exports provided: EntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntriesComponent", function() { return EntriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var EntriesComponent = /** @class */ (function () {
    function EntriesComponent() {
    }
    EntriesComponent.prototype.ngOnInit = function () {
    };
    EntriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entries',
            template: __webpack_require__(/*! ./entries.component.html */ "./app/entries/entries.component.html"),
            styles: [__webpack_require__(/*! ./entries.component.css */ "./app/entries/entries.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EntriesComponent);
    return EntriesComponent;
}());



/***/ }),

/***/ "./app/gallery/archives/archives.component.css":
/*!*****************************************************!*\
  !*** ./app/gallery/archives/archives.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvYXJjaGl2ZXMvYXJjaGl2ZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/gallery/archives/archives.component.html":
/*!******************************************************!*\
  !*** ./app/gallery/archives/archives.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  archives works!\n</p>\n"

/***/ }),

/***/ "./app/gallery/archives/archives.component.ts":
/*!****************************************************!*\
  !*** ./app/gallery/archives/archives.component.ts ***!
  \****************************************************/
/*! exports provided: ArchivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivesComponent", function() { return ArchivesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var ArchivesComponent = /** @class */ (function () {
    function ArchivesComponent() {
    }
    ArchivesComponent.prototype.ngOnInit = function () {
    };
    ArchivesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-archives',
            template: __webpack_require__(/*! ./archives.component.html */ "./app/gallery/archives/archives.component.html"),
            styles: [__webpack_require__(/*! ./archives.component.css */ "./app/gallery/archives/archives.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArchivesComponent);
    return ArchivesComponent;
}());



/***/ }),

/***/ "./app/gallery/ashley/ashley.component.css":
/*!*************************************************!*\
  !*** ./app/gallery/ashley/ashley.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvYXNobGV5L2FzaGxleS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/gallery/ashley/ashley.component.html":
/*!**************************************************!*\
  !*** ./app/gallery/ashley/ashley.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ashley works!\n</p>\n"

/***/ }),

/***/ "./app/gallery/ashley/ashley.component.ts":
/*!************************************************!*\
  !*** ./app/gallery/ashley/ashley.component.ts ***!
  \************************************************/
/*! exports provided: AshleyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AshleyComponent", function() { return AshleyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AshleyComponent = /** @class */ (function () {
    function AshleyComponent() {
    }
    AshleyComponent.prototype.ngOnInit = function () {
    };
    AshleyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ashley',
            template: __webpack_require__(/*! ./ashley.component.html */ "./app/gallery/ashley/ashley.component.html"),
            styles: [__webpack_require__(/*! ./ashley.component.css */ "./app/gallery/ashley/ashley.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AshleyComponent);
    return AshleyComponent;
}());



/***/ }),

/***/ "./app/gallery/gallery.component.css":
/*!*******************************************!*\
  !*** ./app/gallery/gallery.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/gallery/gallery.component.html":
/*!********************************************!*\
  !*** ./app/gallery/gallery.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  gallery works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/gallery/gallery.component.ts":
/*!******************************************!*\
  !*** ./app/gallery/gallery.component.ts ***!
  \******************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./app/gallery/gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./app/gallery/pitbabes/pitbabes.component.css":
/*!*****************************************************!*\
  !*** ./app/gallery/pitbabes/pitbabes.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvcGl0YmFiZXMvcGl0YmFiZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/gallery/pitbabes/pitbabes.component.html":
/*!******************************************************!*\
  !*** ./app/gallery/pitbabes/pitbabes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pitbabes works!\n</p>\n"

/***/ }),

/***/ "./app/gallery/pitbabes/pitbabes.component.ts":
/*!****************************************************!*\
  !*** ./app/gallery/pitbabes/pitbabes.component.ts ***!
  \****************************************************/
/*! exports provided: PitbabesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitbabesComponent", function() { return PitbabesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var PitbabesComponent = /** @class */ (function () {
    function PitbabesComponent() {
    }
    PitbabesComponent.prototype.ngOnInit = function () {
    };
    PitbabesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pitbabes',
            template: __webpack_require__(/*! ./pitbabes.component.html */ "./app/gallery/pitbabes/pitbabes.component.html"),
            styles: [__webpack_require__(/*! ./pitbabes.component.css */ "./app/gallery/pitbabes/pitbabes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PitbabesComponent);
    return PitbabesComponent;
}());



/***/ }),

/***/ "./app/gallery/videos/videos.component.css":
/*!*************************************************!*\
  !*** ./app/gallery/videos/videos.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-padding {\r\n  padding: 1%;\r\n}\r\n\r\n.iframe-style {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS92aWRlb3MvdmlkZW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS92aWRlb3MvdmlkZW9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4uaWZyYW1lLXN0eWxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./app/gallery/videos/videos.component.html":
/*!**************************************************!*\
  !*** ./app/gallery/videos/videos.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-padding\">\n  <div class=\"col-md-12\">\n    <div class=\"card-columns\">\n      <div class=\"card bg-light\" *ngFor=\"let item of content.gallery.videoList\">\n        <div class=\"card-body text-center\">\n          <iframe class=\"iframe-style\" [src]=\"item.link | safe\"></iframe>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./app/gallery/videos/videos.component.ts":
/*!************************************************!*\
  !*** ./app/gallery/videos/videos.component.ts ***!
  \************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var VideosComponent = /** @class */ (function () {
    function VideosComponent() {
    }
    VideosComponent.prototype.ngOnInit = function () {
        this.content = __webpack_require__(/*! ../../../content/site-content/racing-content.json */ "./content/site-content/racing-content.json");
    };
    VideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./app/gallery/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.css */ "./app/gallery/videos/videos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "./app/home/home.component.css":
/*!*************************************!*\
  !*** ./app/home/home.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-carousel-inner {\r\n  width: 100%;\r\n  height: 600px;\r\n  margin-left: 0%;\r\n}\r\n\r\n.section-img {\r\n  margin-left: 0% !important;\r\n  margin-top: 2%;\r\n}\r\n\r\n.font-style-P1 {\r\n  font-family: auto;\r\n  font-weight: bolder;\r\n  font-size: x-large;\r\n  /* color: darkmagenta; */\r\n}\r\n\r\n.img-border {\r\n  /* border-style: solid;\r\n  border-radius: 4px;\r\n  border-color: darkslateblue; */\r\n  padding: 5%;\r\n}\r\n\r\n.list-border {\r\n  border-width: thick;\r\n  /* border-style: ridge; */\r\n}\r\n\r\n.text-justify {\r\n  text-align: justify;\r\n}\r\n\r\n.text-font-family {\r\n  font-family: serif;\r\n}\r\n\r\n.list-width {\r\n  width: 100%;\r\n}\r\n\r\n.card-color {\r\n  background-color: #f8f9fa !important;\r\n}\r\n\r\n.footer-space {\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.iframe-style {\r\n  width: 100%;\r\n  height: 90%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFOztnQ0FFOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY2Fyb3VzZWwtaW5uZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDAlO1xyXG59XHJcblxyXG4uc2VjdGlvbi1pbWcge1xyXG4gIG1hcmdpbi1sZWZ0OiAwJSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4uZm9udC1zdHlsZS1QMSB7XHJcbiAgZm9udC1mYW1pbHk6IGF1dG87XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgLyogY29sb3I6IGRhcmttYWdlbnRhOyAqL1xyXG59XHJcblxyXG4uaW1nLWJvcmRlciB7XHJcbiAgLyogYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBkYXJrc2xhdGVibHVlOyAqL1xyXG4gIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4ubGlzdC1ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogdGhpY2s7XHJcbiAgLyogYm9yZGVyLXN0eWxlOiByaWRnZTsgKi9cclxufVxyXG5cclxuLnRleHQtanVzdGlmeSB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnRleHQtZm9udC1mYW1pbHkge1xyXG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxufVxyXG5cclxuLmxpc3Qtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9vdGVyLXNwYWNlIHtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuLmlmcmFtZS1zdHlsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./app/home/home.component.html":
/*!**************************************!*\
  !*** ./app/home/home.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <title>Durt Racing Template</title>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"description\" content=\"EndGam Gaming Magazine Template\" />\r\n    <meta name=\"keywords\" content=\"endGam,gGaming, magazine, html\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <!-- Favicon -->\r\n    <link href=\"../../content/img/favicon.ico\" rel=\"shortcut icon\" />\r\n    <!-- Google Font -->\r\n    <link\r\n      href=\"https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i,900,900i\"\r\n      rel=\"stylesheet\"\r\n    />\r\n  </head>\r\n  <body>\r\n    <div style=\"margin-top: 2%;\">\r\n      <ngb-carousel *ngIf=\"images\">\r\n        <ng-template ngbSlide *ngFor=\"let item of images\">\r\n          <img\r\n            class=\"img-carousel-inner\"\r\n            [src]=\"item\"\r\n            alt=\"Random first slide\"\r\n          />\r\n          <div class=\"carousel-caption\">\r\n            <!-- <h3>First slide label</h3>\r\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->\r\n          </div>\r\n        </ng-template>\r\n      </ngb-carousel>\r\n    </div>\r\n\r\n    <div class=\"row section-img\">\r\n      <div class=\"col-md-9 card bg-light text-dark\">\r\n        <div class=\"card-body\">\r\n          <h4>\r\n            <p class=\"font-style-P1 text-font-family text-justify\">\r\n              {{ content.Home.RACINGQUOTES }}\r\n            </p>\r\n            <br />\r\n            <code\r\n              ><b>\r\n                <a class=\"font-style-P1\">ATTENTION ALL MEMBERS!!</a></b\r\n              ></code\r\n            >\r\n            <h4 class=\"font-style-P1 text-font-family text-justify\">\r\n              <ul>\r\n                <li\r\n                  *ngFor=\"\r\n                    let notification of content.Home.AttentionNotification\r\n                  \"\r\n                >\r\n                  {{ notification }}\r\n                </li>\r\n              </ul>\r\n            </h4>\r\n            <br />\r\n\r\n            <code\r\n              ><b> <a class=\"font-style-P1\">DO4SA Club Calender</a></b></code\r\n            >\r\n            <h4 class=\"font-style-P1 text-font-family text-justify\">\r\n              <ul>\r\n                <li *ngFor=\"let upcomingNews of content.Home.DO4SAClubCalender\">\r\n                  {{ upcomingNews }}\r\n                </li>\r\n              </ul>\r\n            </h4>\r\n          </h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 card bg-light text-dark\">\r\n        <div class=\"card-body\">\r\n          <h3 style=\"text-decoration: underline;\">\r\n            Tygerberg Raceway on YouTube\r\n          </h3>\r\n          <iframe class=\"iframe-style\" [src]=\"youTubeVideoLink | safe\">\r\n          </iframe>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row section-img footer-space\">\r\n      <div class=\"list-group list-border list-width\">\r\n        <div\r\n          *ngFor=\"\r\n            let TygerbergRacewayInfo of content.Home.TygerbergRacewayInfoList\r\n          \"\r\n          class=\"list-group-item list-group-item-action card-color\"\r\n        >\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n              <img\r\n                class=\"img-border\"\r\n                [src]=\"TygerbergRacewayInfo.imgPath\"\r\n                alt=\"Random first slide\"\r\n              />\r\n            </div>\r\n            <div class=\"col-md-10\">\r\n              <p\r\n                class=\"font-style-P1 text-justify\"\r\n                [innerHTML]=\"TygerbergRacewayInfo.infoDetails\"\r\n              ></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./app/home/home.component.ts":
/*!************************************!*\
  !*** ./app/home/home.component.ts ***!
  \************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.images = [
            '../../content/img/home-slider/1.jpg',
            '../../content/img/home-slider/2.jpg'
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.content = __webpack_require__(/*! ../../content/site-content/racing-content.json */ "./content/site-content/racing-content.json");
        this.getYoutubeVideoLink();
    };
    HomeComponent.prototype.getYoutubeVideoLink = function () {
        // this.youTubeVideoLink = this.sanitizer.bypassSecurityTrustResourceUrl(
        //   'https://www.youtube.com/embed/' + this.content.Home.YouTubeLink
        // );
        this.youTubeVideoLink =
            'https://www.youtube.com/embed/' + this.content.Home.YouTubeLink;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./app/home/home.component.html"),
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            styles: [__webpack_require__(/*! ./home.component.css */ "./app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/info/info.component.css":
/*!*************************************!*\
  !*** ./app/info/info.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-padding {\r\n  padding: 1%;\r\n}\r\n\r\n.background-color {\r\n  background: linear-gradient(to right, #330d38 0%, #190d36 100%);\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: large;\r\n  text-decoration: underline;\r\n}\r\n\r\n.list-group {\r\n  margin-top: 1%;\r\n}\r\n\r\na {\r\n  font-family: 'Alice', serif;\r\n  /* font-size: 18px; */\r\n  font-weight: bold;\r\n  line-height: 27px;\r\n  margin: 0 0 23px 0;\r\n  color: darkmagenta;\r\n}\r\n\r\n.text-justify {\r\n  text-align: justify;\r\n  font-family: 'Alice', serif;\r\n  font-size: 139%;\r\n  font-weight: bold;\r\n  line-height: 128%;\r\n  margin: 0 0 23px 0;\r\n}\r\n\r\nh2 {\r\n  font-family: 'Droid Serif', Georgia, Times, serif;\r\n  font-size: 40px;\r\n  line-height: 65px;\r\n}\r\n\r\n.font-style {\r\n  font-family: 'Corben', Georgia, Times, serif;\r\n  font-size: 30px;\r\n  line-height: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwrREFBK0Q7RUFDL0QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpREFBaUQ7RUFDakQsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzMwZDM4IDAlLCAjMTkwZDM2IDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cCB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtZmFtaWx5OiAnQWxpY2UnLCBzZXJpZjtcclxuICAvKiBmb250LXNpemU6IDE4cHg7ICovXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgbWFyZ2luOiAwIDAgMjNweCAwO1xyXG4gIGNvbG9yOiBkYXJrbWFnZW50YTtcclxufVxyXG5cclxuLnRleHQtanVzdGlmeSB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBmb250LWZhbWlseTogJ0FsaWNlJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMzklO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMjglO1xyXG4gIG1hcmdpbjogMCAwIDIzcHggMDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCBHZW9yZ2lhLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA2NXB4O1xyXG59XHJcblxyXG4uZm9udC1zdHlsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb3JiZW4nLCBHZW9yZ2lhLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./app/info/info.component.html":
/*!**************************************!*\
  !*** ./app/info/info.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-padding\">\r\n  <div class=\"col-md-6\">\r\n    <ul class=\"list-group font-style\">\r\n      <li class=\"list-group-item background-color font-style\">\r\n        MSA Circulars\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <a href=\"../../content/rules-pdf/DO4SA_Circular1-2018.pdf\"\r\n          >DO4SA 1/2018</a\r\n        >\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <a href=\"../../content/rules-pdf/DO4SA_Circular2-2018.pdf\"\r\n          >DO4SA 2/2018</a\r\n        >\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <a href=\"../../content/rules-pdf/DO4SA_Circular3-2018.pdf\"\r\n          >DO4SA 3/2018</a\r\n        >\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <a href=\"../../content/rules-pdf/DO4SA_Circular4-2018.pdf\">\r\n          DO4SA 4/2018\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"list-group font-style\">\r\n      <li class=\"list-group-item background-color font-style\">\r\n        DO4SA\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <a href=\"../../content/rules-pdf/DO4SA RULEBOOK 2018.pdf\">\r\n          Rulebook 2018/2019\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"list-group font-style\">\r\n      <li class=\"list-group-item background-color font-style\">\r\n        Motorsport South Africa\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <a href=\"../../content/rules-pdf/2019 GCRs  Circuit SSRs_14 Jan 19.pdf\"\r\n          >GCR's & SSR's 2019\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item background-color font-style\">\r\n        Entry Meetings:\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <p class=\"text-justify\">\r\n          Every Monday evening before races there will be a meeting at the\r\n          clubhouse. Should a driver not have a valid excuse by Monday\r\n          12h00,he/she will be penalised for the first 2 races. Any valid excuse\r\n          for attending the meeting on a Monday (prior to race event) must be\r\n          send to This email address is being protected from spambots. You need\r\n          JavaScript enabled to view it.\">leone@tygerbergraceway.com Entries can\r\n          be done either on the website or at the Monday evening meeting.\r\n          Entries at the meeting opens at 18h00 – 20h00. Meeting commences at\r\n          20h00.\r\n        </p>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item background-color font-style\">\r\n        2018/2019 Season\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <h2>Entry Fees: R150.00 per event.</h2>\r\n        <h2>Club Fees: R500.00 per driver per season</h2>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <h2>Included in the club fees:</h2>\r\n        <p class=\"text-justify\">\r\n          Club member driver will receive 4 entrance tickets per event. Please\r\n          note that these tickets will only be issued to participating drivers\r\n          per event. Guest drivers will receive 2 entrance tickets at the main\r\n          gate on the race day.\r\n        </p>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <img\r\n          width=\"100%\"\r\n          src=\"../../content/img/member-info/member_info_image2.jpg\"\r\n        />\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./app/info/info.component.ts":
/*!************************************!*\
  !*** ./app/info/info.component.ts ***!
  \************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./app/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./app/info/info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./app/info/lap-times/lap-times.component.css":
/*!****************************************************!*\
  !*** ./app/info/lap-times/lap-times.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vbGFwLXRpbWVzL2xhcC10aW1lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/info/lap-times/lap-times.component.html":
/*!*****************************************************!*\
  !*** ./app/info/lap-times/lap-times.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  lap-times works!\n</p>\n"

/***/ }),

/***/ "./app/info/lap-times/lap-times.component.ts":
/*!***************************************************!*\
  !*** ./app/info/lap-times/lap-times.component.ts ***!
  \***************************************************/
/*! exports provided: LapTimesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LapTimesComponent", function() { return LapTimesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var LapTimesComponent = /** @class */ (function () {
    function LapTimesComponent() {
    }
    LapTimesComponent.prototype.ngOnInit = function () {
    };
    LapTimesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lap-times',
            template: __webpack_require__(/*! ./lap-times.component.html */ "./app/info/lap-times/lap-times.component.html"),
            styles: [__webpack_require__(/*! ./lap-times.component.css */ "./app/info/lap-times/lap-times.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LapTimesComponent);
    return LapTimesComponent;
}());



/***/ }),

/***/ "./app/info/public-info/public-info.component.css":
/*!********************************************************!*\
  !*** ./app/info/public-info/public-info.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-padding {\r\n  padding: 1%;\r\n}\r\n\r\n.background-color {\r\n  background: linear-gradient(to right, #330d38 0%, #190d36 100%);\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: large;\r\n  text-decoration: underline;\r\n}\r\n\r\n.list-group {\r\n  margin-top: 1%;\r\n}\r\n\r\na {\r\n  font-family: 'Alice', serif;\r\n  /* font-size: 18px; */\r\n  font-weight: bold;\r\n  line-height: 27px;\r\n  margin: 0 0 23px 0;\r\n  color: darkmagenta;\r\n}\r\n\r\nh2 {\r\n  font-family: 'Droid Serif', Georgia, Times, serif;\r\n  font-size: 40px;\r\n  line-height: 65px;\r\n}\r\n\r\n.font-style {\r\n  font-family: 'Corben', Georgia, Times, serif;\r\n  font-size: 30px;\r\n  line-height: 51px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9wdWJsaWMtaW5mby9wdWJsaWMtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0RBQStEO0VBQy9ELFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlEQUFpRDtFQUNqRCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9pbmZvL3B1YmxpYy1pbmZvL3B1YmxpYy1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzMwZDM4IDAlLCAjMTkwZDM2IDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cCB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtZmFtaWx5OiAnQWxpY2UnLCBzZXJpZjtcclxuICAvKiBmb250LXNpemU6IDE4cHg7ICovXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgbWFyZ2luOiAwIDAgMjNweCAwO1xyXG4gIGNvbG9yOiBkYXJrbWFnZW50YTtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCBHZW9yZ2lhLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA2NXB4O1xyXG59XHJcblxyXG4uZm9udC1zdHlsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb3JiZW4nLCBHZW9yZ2lhLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./app/info/public-info/public-info.component.html":
/*!*********************************************************!*\
  !*** ./app/info/public-info/public-info.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-padding\">\n  <div class=\"col-md-12\">\n    <ul class=\"list-group font-style\">\n      <li class=\"list-group-item background-color font-style\">\n        Entrance Fees:\n      </li>\n      <li class=\"list-group-item\">\n        Entrance Fees: R80.00 per Adult\n      </li>\n      <li class=\"list-group-item\">\n        Entrance Fees: R40.00 per Children 15/U\n      </li>\n      <li class=\"list-group-item\">\n        GATES OPEN: 13:00\n      </li>\n      <li class=\"list-group-item\">\n        RACING STARTS: 18:30\n      </li>\n    </ul>\n\n    <ul class=\"list-group font-style\">\n      <li class=\"list-group-item background-color font-style\">\n        Links\n      </li>\n      <li class=\"list-group-item\">\n        <a target=\"_blank\" href=\"../../../content/rules-pdf/TRW 1 Dec 2018.pdf\"\n          >1 December 2018 Booklet\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./app/info/public-info/public-info.component.ts":
/*!*******************************************************!*\
  !*** ./app/info/public-info/public-info.component.ts ***!
  \*******************************************************/
/*! exports provided: PublicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicInfoComponent", function() { return PublicInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var PublicInfoComponent = /** @class */ (function () {
    function PublicInfoComponent() {
    }
    PublicInfoComponent.prototype.ngOnInit = function () {
    };
    PublicInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public-info',
            template: __webpack_require__(/*! ./public-info.component.html */ "./app/info/public-info/public-info.component.html"),
            styles: [__webpack_require__(/*! ./public-info.component.css */ "./app/info/public-info/public-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublicInfoComponent);
    return PublicInfoComponent;
}());



/***/ }),

/***/ "./app/standings/standings.component.css":
/*!***********************************************!*\
  !*** ./app/standings/standings.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YW5kaW5ncy9zdGFuZGluZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/standings/standings.component.html":
/*!************************************************!*\
  !*** ./app/standings/standings.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  standings works!\r\n</p>\r\n"

/***/ }),

/***/ "./app/standings/standings.component.ts":
/*!**********************************************!*\
  !*** ./app/standings/standings.component.ts ***!
  \**********************************************/
/*! exports provided: StandingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsComponent", function() { return StandingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var StandingsComponent = /** @class */ (function () {
    function StandingsComponent() {
    }
    StandingsComponent.prototype.ngOnInit = function () {
    };
    StandingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standings',
            template: __webpack_require__(/*! ./standings.component.html */ "./app/standings/standings.component.html"),
            styles: [__webpack_require__(/*! ./standings.component.css */ "./app/standings/standings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StandingsComponent);
    return StandingsComponent;
}());



/***/ }),

/***/ "./app/team-building/team-building-pictures/team-building-pictures.component.css":
/*!***************************************************************************************!*\
  !*** ./app/team-building/team-building-pictures/team-building-pictures.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".actions {\r\n  margin: 5px 10px;\r\n}\r\n.actions .option {\r\n  display: inline-block;\r\n  margin: 5px;\r\n}\r\n.actions .option input[type='number'] {\r\n  width: 50px;\r\n}\r\n.row-padding {\r\n  padding: 1%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1idWlsZGluZy90ZWFtLWJ1aWxkaW5nLXBpY3R1cmVzL3RlYW0tYnVpbGRpbmctcGljdHVyZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC90ZWFtLWJ1aWxkaW5nL3RlYW0tYnVpbGRpbmctcGljdHVyZXMvdGVhbS1idWlsZGluZy1waWN0dXJlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbnMge1xyXG4gIG1hcmdpbjogNXB4IDEwcHg7XHJcbn1cclxuLmFjdGlvbnMgLm9wdGlvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbi5hY3Rpb25zIC5vcHRpb24gaW5wdXRbdHlwZT0nbnVtYmVyJ10ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4ucm93LXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDElO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./app/team-building/team-building-pictures/team-building-pictures.component.html":
/*!****************************************************************************************!*\
  !*** ./app/team-building/team-building-pictures/team-building-pictures.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-padding\">\n  <crystal-gallery [images]=\"myImages\" [config]=\"myConfig\"></crystal-gallery>\n</div>\n"

/***/ }),

/***/ "./app/team-building/team-building-pictures/team-building-pictures.component.ts":
/*!**************************************************************************************!*\
  !*** ./app/team-building/team-building-pictures/team-building-pictures.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TeamBuildingPicturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamBuildingPicturesComponent", function() { return TeamBuildingPicturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var TeamBuildingPicturesComponent = /** @class */ (function () {
    function TeamBuildingPicturesComponent() {
        this.myImages = [
            {
                preview: '../../../content/img/gallery/yi-sung-tsai-01--preview.jpg',
                full: '../../../content/img/gallery/yi-sung-tsai-01.jpg',
                width: 1000,
                height: 669
            },
            {
                preview: '../../../content/img/gallery/yi-sung-tsai-03--preview.jpg',
                full: '../../../content/img/gallery/yi-sung-tsai-03.jpg',
                width: 1000,
                height: 669
            },
            {
                preview: '../../../content/img/gallery/yi-sung-tsai-05--preview.jpg',
                full: '../../../content/img/gallery/yi-sung-tsai-05.jpg',
                width: 1000,
                height: 669
            },
            {
                preview: '../../../content/img/gallery/yi-sung-tsai-06--preview.jpg',
                full: '../../../content/img/gallery/yi-sung-tsai-06.jpg',
                width: 1000,
                height: 669
            },
            {
                preview: '../../../content/img/gallery/yi-sung-tsai-07--preview.jpg',
                full: '../../../content/img/gallery/yi-sung-tsai-07.jpg',
                width: 1000,
                height: 669
            },
            {
                preview: '../../../content/img/gallery/yi-sung-tsai-08--preview.jpg',
                full: '../../../content/img/gallery/yi-sung-tsai-08.jpg',
                width: 1000,
                height: 669
            },
            {
                preview: '../../../content/img/gallery/yi-sung-tsai-09--preview.jpg',
                full: '../../../content/img/gallery/yi-sung-tsai-09.jpg',
                width: 1000,
                height: 669
            },
            {
                preview: '../../../content/img/gallery/yi-sung-tsai-10--preview.jpg',
                full: '../../../content/img/gallery/yi-sung-tsai-10.jpg',
                width: 1000,
                height: 669,
                description: 'description of the image'
            }
        ];
        this.myConfig = {
            masonry: false,
            masonryMaxHeight: 200,
            masonryGutter: 15,
            loop: true,
            backgroundOpacity: 0.85,
            animationDuration: 100,
            counter: false,
            lightboxMaxHeight: '100100vh - 86px',
            lightboxMaxWidth: '100%'
        };
    }
    TeamBuildingPicturesComponent.prototype.ngOnInit = function () { };
    TeamBuildingPicturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-building-pictures',
            template: __webpack_require__(/*! ./team-building-pictures.component.html */ "./app/team-building/team-building-pictures/team-building-pictures.component.html"),
            styles: [__webpack_require__(/*! ./team-building-pictures.component.css */ "./app/team-building/team-building-pictures/team-building-pictures.component.css")]
        })
    ], TeamBuildingPicturesComponent);
    return TeamBuildingPicturesComponent;
}());



/***/ }),

/***/ "./app/team-building/team-building.component.css":
/*!*******************************************************!*\
  !*** ./app/team-building/team-building.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-padding {\r\n  padding: 1%;\r\n}\r\n\r\n.background-color {\r\n  background: linear-gradient(to right, #330d38 0%, #190d36 100%);\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: large;\r\n  text-decoration: underline;\r\n}\r\n\r\n.list-group {\r\n  margin-top: 1%;\r\n}\r\n\r\na {\r\n  font-family: 'Alice', serif;\r\n  /* font-size: 18px; */\r\n  font-weight: bold;\r\n  line-height: 27px;\r\n  margin: 0 0 23px 0;\r\n  color: darkmagenta;\r\n}\r\n\r\nh2 {\r\n  font-family: 'Droid Serif', Georgia, Times, serif;\r\n  font-size: 40px;\r\n  line-height: 65px;\r\n}\r\n\r\n.font-style {\r\n  font-family: 'Corben', Georgia, Times, serif;\r\n  font-size: 30px;\r\n  line-height: 51px;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1idWlsZGluZy90ZWFtLWJ1aWxkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwrREFBK0Q7RUFDL0QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3RlYW0tYnVpbGRpbmcvdGVhbS1idWlsZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAxJTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtY29sb3Ige1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzMzMGQzOCAwJSwgIzE5MGQzNiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG59XHJcblxyXG5hIHtcclxuICBmb250LWZhbWlseTogJ0FsaWNlJywgc2VyaWY7XHJcbiAgLyogZm9udC1zaXplOiAxOHB4OyAqL1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIG1hcmdpbjogMCAwIDIzcHggMDtcclxuICBjb2xvcjogZGFya21hZ2VudGE7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgR2VvcmdpYSwgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogNjVweDtcclxufVxyXG5cclxuLmZvbnQtc3R5bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29yYmVuJywgR2VvcmdpYSwgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBsaW5lLWhlaWdodDogNTFweDtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./app/team-building/team-building.component.html":
/*!********************************************************!*\
  !*** ./app/team-building/team-building.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-padding\">\n  <div class=\"col-md-12\">\n    <ul class=\"list-group font-style\">\n      <li class=\"list-group-item background-color font-style\">\n        Action Netbal Liga 2014\n      </li>\n      <li class=\"list-group-item\">\n        <p>\n          Tygerberg Raceway het n liga ingeskryf vir spanbou teen die klasse en\n          'n challenge wat die klasse hou teen mekaar in die klub. Elke week sal\n          2 klasse teen mekaar speel vir punte en die klas wat die einde van die\n          action netball seisoen wen is die klub wenners. Die eerste wedstryd\n          was tussen die Late Models en 'n liga span van Brackenfell.\n        </p>\n      </li>\n      <li class=\"list-group-item\">\n        Die spelers\n      </li>\n      <li class=\"list-group-item\">\n        Danie T77\n      </li>\n      <li class=\"list-group-item\">\n        Eerick T14\n      </li>\n      <li class=\"list-group-item\">\n        Leone T99\n      </li>\n      <li class=\"list-group-item\">\n        Christelle T99\n      </li>\n      <li class=\"list-group-item\">\n        PJ Fourie T7\n      </li>\n      <li class=\"list-group-item\">\n        Etreshia Fourie T7\n      </li>\n      <li class=\"list-group-item\">\n        Elana Oliveira T15\n      </li>\n      <li class=\"list-group-item\">\n        Die tweede wedstryd was tussen 2.1's vs Hotrods. Vermaak was daar nie\n        tekort aan nie en na al die gestoei op die baan was die telling...\n        <b>Hotrods 7 vs 2.1's 7</b>\n      </li>\n      <li class=\"list-group-item\">\n        En so het die meer senior V8's ook op die baan kom draai maak. Oom\n        Prinsloo was 'n groot aanwins vir die span, wonder waar die oom al\n        gespeel het... Die 1660's was maar woelig op die baan en toe die\n        beseerders die baan verlaat het was die telling...\n        <b>V8's 12 vs 1660's 19</b>\n      </li>\n      <li class=\"list-group-item\">\n        Op Vrydag, 2014/10/03 het die Late Model Thunder die arena betree. Die\n        baan was seker te droog en hulle nooit die volle tracktion bereik nie...\n        Die vlugvoetige 1660's het seker gemaak hulle wen die ene. Spangees\n        tussen die twee spanne was elektries en op die einde van die aand was\n        Tygerberg Raceway die wenner.\n        <b>Late Models 10 vs 1660's 21</b>\n      </li>\n      <li class=\"list-group-item\">\n        Die eerste wedstryd tussen die Midgets en die 1660's was beslis 'n\n        gejaag na asems. Die 1660's het skielik besef dat hulle nie net hoef op\n        te daag om te wen nie, maar sal hard moet werk daarvoor. Julle sal\n        beslis die Midget span moet dophou...\n        <b> Midgets 20 vs 1660's 14</b>\n      </li>\n      <li class=\"list-group-item\">\n        <b>\n          Hier gaan nog groot dinge gebeur. <br />\n          Kom ondersteun julle klasse.</b\n        >\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"row row-padding\">\n  <div class=\"col-md-6\">\n    <ul class=\"list-group font-style\">\n      <li class=\"list-group-item background-color font-style\">\n        Wedstryd Program\n      </li>\n      <li class=\"list-group-item\">\n        <img src=\"../../content/img/team-building/netbal_dae_en_tye.jpg\" />\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"col-md-6\">\n    <ul class=\"list-group font-style\">\n      <li class=\"list-group-item background-color font-style\">\n        Punte\n      </li>\n      <li class=\"list-group-item\">\n        <img src=\"../../content/img/team-building/Punte_2014-10-03.jpg\" />\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./app/team-building/team-building.component.ts":
/*!******************************************************!*\
  !*** ./app/team-building/team-building.component.ts ***!
  \******************************************************/
/*! exports provided: TeamBuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamBuildingComponent", function() { return TeamBuildingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var TeamBuildingComponent = /** @class */ (function () {
    function TeamBuildingComponent() {
    }
    TeamBuildingComponent.prototype.ngOnInit = function () {
    };
    TeamBuildingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-building',
            template: __webpack_require__(/*! ./team-building.component.html */ "./app/team-building/team-building.component.html"),
            styles: [__webpack_require__(/*! ./team-building.component.css */ "./app/team-building/team-building.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamBuildingComponent);
    return TeamBuildingComponent;
}());



/***/ }),

/***/ "./content/site-content/racing-content.json":
/*!**************************************************!*\
  !*** ./content/site-content/racing-content.json ***!
  \**************************************************/
/*! exports provided: Home, gallery, default */
/***/ (function(module) {

module.exports = {"Home":{"RACINGQUOTES":"RACING QUOTES: “If you don't come walking back to the pits every once in a while, holding your steering wheel in your hands, you're not trying hard enough.” ― Mario Andretti","AttentionNotification":["2018 DO4SA Rules & Regulations - Under Info/Member Info update was done."],"DO4SAClubCalender":["1 Jun'19 Prize Giving","31 Aug'19","27&28 Sept Nat","26 Oct'19","30 Nov'19"],"YouTubeLink":"K1WkHwS7RTQ","TygerbergRacewayInfoList":[{"imgPath":"../../content/img/home/1.jpg","infoDetails":"Tygerberg Raceway hosted the <b> <code> DO4SA National </code></b>event on 30 November 2013, where-after the South African Champions were crowned. This will be the ONLY recognised SA Championship in South Africa for Dirt Oval Track Racing in 2013, ratified by MSA, SASCOC and the Dept Sport & Recreation. Any other claim by a competitor to be the South African Champion (or SA1) will, therefore, be fraudulent or a misrepresentation (like a false license plate on a road-car which is not registered on the E-Natis system). To be a South African Champion (SA1), your result needs to be registered with the relevant authorities, which will be the case following this prestigious DO4SA event."},{"imgPath":"../../content/img/home/2.jpg","infoDetails":"We are proud to announce the International events taking place on the 8th February 2014 (for the 2.1 modifieds), the 15th February (for the Hotrods) and March date still to be determined for the Late Models. After each event, the results will determine which competitors receive their Protea Colours for Motorsport. This is the highest achievement possible in Motorsport in South Africa, and we are proud to be in a position to offer you this opportunity."},{"imgPath":"../../content/img/home/3.jpg","infoDetails":"The Regional events to be competed in at the various DO4SA-affiliated clubs in 2014 will determine which competitors receive their Regional Colours (WP, EC, OFS, etc). We are proud to have reached the point in our sport where Regional Colours will once again become a reality."},{"imgPath":"../../content/img/home/1.jpg","infoDetails":"Chris Liebenberg het die regte van Dirt Oval Racing by MSA bekom en DIRT OVAL 4 SA tot stand gebring. Al die bestaande MSA grondbane (dirt oval) val nou onder DIRT OVAL 4 SA en sal net soos MSA en WOMZA hulle lede se wedren belange hanteer.<code><a> Kliek hier </a></code> vir meer besonderhede."}]},"gallery":{"videoList":[{"id":1,"link":"http://www.youtube.com/embed/MKWOdtym8oM?wmode=transparent"},{"id":2,"link":"http://www.youtube.com/embed/S9LV3xj6bLk?wmode=transparent"},{"id":3,"link":"http://www.youtube.com/embed/5BzizezpB84?wmode=transparent"},{"id":4,"link":"http://www.youtube.com/embed/AM5Q4SbbW4A?wmode=transparent"},{"id":5,"link":"http://www.youtube.com/embed/S3i2HEAol_0?wmode=transparent"},{"id":6,"link":"http://www.youtube.com/embed/D5Bk1GUnlGw?wmode=transparent"}]}};

/***/ }),

/***/ "./content/styles/style.css":
/*!**********************************!*\
  !*** ./content/styles/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* =================================\r\n------------------------------------\r\n  EndGam - Gaming Magazine Template\r\n  Version: 1.0\r\n ------------------------------------\r\n ====================================*/\r\n\r\n/*----------------------------------------*/\r\n\r\n/* Template default CSS\r\n/*----------------------------------------*/\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  font-family: 'Roboto', sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-smoothing: antialiased;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 0;\r\n  color: #111111;\r\n  font-weight: 500;\r\n}\r\n\r\nh1 {\r\n  font-size: 70px;\r\n}\r\n\r\nh2 {\r\n  font-size: 36px;\r\n}\r\n\r\nh3 {\r\n  font-size: 30px;\r\n}\r\n\r\nh4 {\r\n  font-size: 24px;\r\n}\r\n\r\nh5 {\r\n  font-size: 18px;\r\n}\r\n\r\nh6 {\r\n  font-size: 16px;\r\n}\r\n\r\np {\r\n  font-size: 15px;\r\n  color: #585858;\r\n  line-height: 1.6;\r\n  font-weight: 500;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\ninput:focus,\r\nselect:focus,\r\nbutton:focus,\r\ntextarea:focus {\r\n  outline: none;\r\n}\r\n\r\na:hover,\r\na:focus {\r\n  text-decoration: none;\r\n  outline: none;\r\n}\r\n\r\nul,\r\nol {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  color: #fff;\r\n  font-style: italic;\r\n  text-transform: uppercase;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  color: #fff;\r\n  font-style: italic;\r\n  text-transform: uppercase;\r\n}\r\n\r\n::placeholder {\r\n  color: #fff;\r\n  font-style: italic;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/*---------------------\r\n  Helper CSS\r\n-----------------------*/\r\n\r\n.section-title h2 {\r\n  font-size: 30px;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n}\r\n\r\n.set-bg {\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: top center;\r\n}\r\n\r\n.spad {\r\n  padding-top: 105px;\r\n  padding-bottom: 105px;\r\n}\r\n\r\n.text-white h1,\r\n.text-white h2,\r\n.text-white h3,\r\n.text-white h4,\r\n.text-white h5,\r\n.text-white h6,\r\n.text-white p,\r\n.text-white span,\r\n.text-white li,\r\n.text-white a {\r\n  color: #fff;\r\n}\r\n\r\n/*---------------------\r\n  Commom elements\r\n-----------------------*/\r\n\r\n/* buttons */\r\n\r\n.site-btn {\r\n  display: inline-block;\r\n  border: none;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  min-width: 186px;\r\n  padding: 24px 30px;\r\n  border-radius: 0;\r\n  text-transform: uppercase;\r\n  color: #081624;\r\n  line-height: normal;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  background: #fff;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.site-btn img {\r\n  position: relative;\r\n  left: 13px;\r\n  width: auto !important;\r\n  display: inline-block !important;\r\n}\r\n\r\n.site-btn:after,\r\n.site-btn:before {\r\n  position: absolute;\r\n  content: '';\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 9px;\r\n  top: 10px;\r\n  background: #b01ba5;\r\n  z-index: -2;\r\n  box-shadow: 0 0 9px 3px rgba(226, 30, 228, 0.24);\r\n}\r\n\r\n.site-btn:before {\r\n  left: 0;\r\n  top: 0;\r\n  background: #fff;\r\n  z-index: -1;\r\n}\r\n\r\n.site-btn:hover {\r\n  color: #081624;\r\n}\r\n\r\n/* Preloder */\r\n\r\n#preloder {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 999999;\r\n  background: #000;\r\n}\r\n\r\n.loader {\r\n  width: 40px;\r\n  height: 40px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-top: -13px;\r\n  margin-left: -13px;\r\n  border-radius: 60px;\r\n  animation: loader 0.8s linear infinite;\r\n  -webkit-animation: loader 0.8s linear infinite;\r\n}\r\n\r\n@keyframes loader {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    border: 4px solid #f44336;\r\n    border-left-color: transparent;\r\n  }\r\n  50% {\r\n    -webkit-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n    border: 4px solid #673ab7;\r\n    border-left-color: transparent;\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n    border: 4px solid #f44336;\r\n    border-left-color: transparent;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes loader {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    border: 4px solid #f44336;\r\n    border-left-color: transparent;\r\n  }\r\n  50% {\r\n    -webkit-transform: rotate(180deg);\r\n    border: 4px solid #673ab7;\r\n    border-left-color: transparent;\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    border: 4px solid #f44336;\r\n    border-left-color: transparent;\r\n  }\r\n}\r\n\r\n/*------------------\r\n  Header section\r\n---------------------*/\r\n\r\n.header-section {\r\n  position: absolute;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 99;\r\n  padding: 15px 15px 0;\r\n}\r\n\r\n.header-warp {\r\n  max-width: 1496px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.header-social p,\r\n.footer-social p,\r\n.geme-social-share p {\r\n  display: inline-block;\r\n  color: #9190a5;\r\n  font-size: 16px;\r\n  padding-top: 4px;\r\n}\r\n\r\n.header-social a,\r\n.footer-social a,\r\n.geme-social-share a {\r\n  display: -ms-inline-flex;\r\n  display: inline-flex;\r\n  width: 32px;\r\n  height: 32px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n  color: #fff;\r\n  font-size: 12px;\r\n  margin-left: 13px;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.header-social a:hover,\r\n.footer-social a:hover,\r\n.geme-social-share a:hover {\r\n  background: #b01ba5;\r\n}\r\n\r\n.header-bar-warp {\r\n  /* background: #081624;\r\n   */\r\n  background: linear-gradient(to right, #330d38 0%, #190d36 100%);\r\n  padding: 39px 40px 0;\r\n  box-shadow: 0 0 9px 3px rgba(226, 30, 228, 0.24);\r\n}\r\n\r\n.site-logo {\r\n  float: left;\r\n}\r\n\r\n.user-panel {\r\n  float: right;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  color: #fff;\r\n  padding-top: 3px;\r\n}\r\n\r\n.user-panel a {\r\n  color: #fff;\r\n}\r\n\r\n.user-panel a:hover {\r\n  color: #b01ba5;\r\n}\r\n\r\n.main-menu {\r\n  list-style: none;\r\n  text-align: center;\r\n  padding-top: 3px;\r\n}\r\n\r\n.main-menu li {\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.main-menu li a {\r\n  display: block;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  color: #fff;\r\n  margin-right: 40px;\r\n  padding-bottom: 28px;\r\n  position: relative;\r\n  padding-right: 20px;\r\n}\r\n\r\n.main-menu li a:after {\r\n  position: absolute;\r\n  content: '';\r\n  width: 20px;\r\n  height: 20px;\r\n  right: 0;\r\n  top: 10%;\r\n  background-image: url('arrow-down.png');\r\n  background-repeat: no-repeat;\r\n  background-position: right center;\r\n}\r\n\r\n.main-menu li a i {\r\n  color: #928d92;\r\n  margin-left: 5px;\r\n}\r\n\r\n.main-menu li a:hover {\r\n  color: #b01ba5;\r\n}\r\n\r\n.main-menu li a:hover:after {\r\n  background-image: url('arrow-down-color.png');\r\n}\r\n\r\n.main-menu li a:hover i {\r\n  color: #b01ba5;\r\n}\r\n\r\n.main-menu li:hover .sub-menu {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  margin-top: 0;\r\n}\r\n\r\n.main-menu li:hover > a {\r\n  color: #b01ba5;\r\n}\r\n\r\n.main-menu li:hover > a:after {\r\n  background-image: url('arrow-down-color.png');\r\n}\r\n\r\n.main-menu li .sub-menu {\r\n  position: absolute;\r\n  list-style: none;\r\n  text-align: left;\r\n  width: 220px;\r\n  left: 0;\r\n  top: 100%;\r\n  padding: 20px 0;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  margin-top: 50px;\r\n  background: #fff;\r\n  z-index: 99;\r\n  transition: all 0.4s;\r\n  box-shadow: 2px 7px 20px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.main-menu li .sub-menu li {\r\n  display: block;\r\n}\r\n\r\n.main-menu li .sub-menu li a {\r\n  display: block;\r\n  color: #000;\r\n  margin-right: 0;\r\n  padding: 8px 30px;\r\n}\r\n\r\n.main-menu li .sub-menu li a:after {\r\n  display: none;\r\n}\r\n\r\n.main-menu li .sub-menu li a:hover {\r\n  color: #b01ba5;\r\n}\r\n\r\n.slicknav_menu {\r\n  display: none;\r\n}\r\n\r\n/*------------------\r\n  Hero section\r\n---------------------*/\r\n\r\n.hero-slider .owl-dots {\r\n  display: -ms-flex;\r\n  display: flex;\r\n  z-index: 2;\r\n  left: calc(50% - 740px);\r\n  bottom: 38px;\r\n  position: relative;\r\n  width: 1496px;\r\n  position: absolute;\r\n}\r\n\r\n.hero-slider .owl-dots .owl-dot {\r\n  width: 44px;\r\n  height: 44px;\r\n  border-radius: 50%;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  border: 2px solid transparent;\r\n  color: #fff;\r\n  display: -ms-inline-flex;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.hero-slider .owl-dots .owl-dot.active {\r\n  color: #b01ba5;\r\n  border: 2px solid #b01ba5;\r\n}\r\n\r\n.hero-slider .owl-nav {\r\n  margin-top: -24px;\r\n  display: block;\r\n}\r\n\r\n.hero-slider .owl-nav .owl-next {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 100px;\r\n}\r\n\r\n.hero-item {\r\n  height: 921px;\r\n  padding-top: 125px;\r\n  border-bottom: 2px solid #b01ba5;\r\n}\r\n\r\n.hero-item h2 {\r\n  font-size: 160px;\r\n  color: #fff;\r\n  font-weight: 500;\r\n  line-height: 1;\r\n  position: relative;\r\n  top: 100px;\r\n  opacity: 0;\r\n}\r\n\r\n.hero-item p {\r\n  font-size: 24px;\r\n  color: rgba(255, 255, 255, 0.4);\r\n  font-weight: 500;\r\n  opacity: 0.39;\r\n  margin-bottom: 70px;\r\n  position: relative;\r\n  top: 80px;\r\n  opacity: 0;\r\n}\r\n\r\n.hero-item .site-btn {\r\n  position: relative;\r\n  top: 50px;\r\n  opacity: 0;\r\n}\r\n\r\n.hero-slider .owl-item.active .hero-item h2,\r\n.hero-slider .owl-item.active .hero-item p,\r\n.hero-slider .owl-item.active .hero-item .site-btn {\r\n  top: 0;\r\n  opacity: 1;\r\n}\r\n\r\n.hero-slider .owl-item.active .hero-item h2 {\r\n  transition: all 0.5s ease 0.4s;\r\n}\r\n\r\n.hero-slider .owl-item.active .hero-item p {\r\n  transition: all 0.5s ease 0.6s;\r\n}\r\n\r\n.hero-slider .owl-item.active .hero-item .site-btn {\r\n  transition: all 0.5s ease 0.8s;\r\n}\r\n\r\n.hero-slider .owl-item.active .hero-item .offer-card {\r\n  opacity: 1;\r\n  -webkit-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  transition: all 0.5s ease 1s;\r\n}\r\n\r\n/* ----------------\r\n  Intro section\r\n---------------------*/\r\n\r\n.intro-section {\r\n  background: #0c062e;\r\n  padding: 115px 0;\r\n}\r\n\r\n.text-box .top-meta {\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.text-box .top-meta a {\r\n  color: #b01ba5;\r\n}\r\n\r\n.text-box h3 {\r\n  margin-bottom: 40px;\r\n  max-width: 370px;\r\n}\r\n\r\n.text-box p {\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n  color: #68647d;\r\n  margin-bottom: 35px;\r\n}\r\n\r\n.text-box .read-more {\r\n  font-size: 15px;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  color: #fff;\r\n}\r\n\r\n.text-box .read-more img {\r\n  margin-left: 13px;\r\n}\r\n\r\n/* ----------------\r\n Blog Section\r\n---------------------*/\r\n\r\n.blog-section {\r\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\r\n  background: #501755;\r\n  /* Old browsers */\r\n  /* FF3.6-15 */\r\n  /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(45deg, #501755 0%, #2d1854 100%);\r\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\r\n  /* IE6-9 fallback on horizontal gradient */\r\n}\r\n\r\n.blog-section .section-title {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.blog-filter {\r\n  list-style: none;\r\n  display: block;\r\n}\r\n\r\n.blog-filter li {\r\n  display: inline-block;\r\n}\r\n\r\n.blog-filter li a {\r\n  display: block;\r\n  color: #fff;\r\n  padding: 16px 36px;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  background: #6f2b95;\r\n  line-height: 1.1;\r\n  margin-right: 7px;\r\n  transition: all 0.3s;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.blog-filter li a:hover {\r\n  background: #b01ba5;\r\n}\r\n\r\n.blog-item {\r\n  margin-top: 86px;\r\n}\r\n\r\n.blog-item .blog-thumb {\r\n  width: 362px;\r\n  float: left;\r\n  margin-right: 30px;\r\n}\r\n\r\n.blog-item .text-box {\r\n  overflow: hidden;\r\n}\r\n\r\n.blog-item .text-box p {\r\n  margin-bottom: 42px;\r\n}\r\n\r\n.widget-item {\r\n  margin-bottom: 85px;\r\n}\r\n\r\n.widget-item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.widget-item .widget-title {\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  padding-left: 38px;\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.trending-widget .tw-item {\r\n  margin-bottom: 38px;\r\n}\r\n\r\n.trending-widget .tw-item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.trending-widget .tw-thumb {\r\n  float: left;\r\n  margin-right: 17px;\r\n  overflow: hidden;\r\n}\r\n\r\n.trending-widget .tw-text .tw-meta {\r\n  color: #68647d;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.trending-widget .tw-text .tw-meta a {\r\n  color: #b01ba5;\r\n}\r\n\r\n.trending-widget .tw-text h5 {\r\n  font-size: 18px;\r\n  color: #fff;\r\n  line-height: 1.5;\r\n}\r\n\r\n.categories-widget {\r\n  background: #34164b;\r\n  padding: 55px 0 25px;\r\n}\r\n\r\n.categories-widget ul {\r\n  list-style: none;\r\n  padding: 0 38px;\r\n}\r\n\r\n.categories-widget ul li {\r\n  display: block;\r\n}\r\n\r\n.categories-widget ul li a {\r\n  display: inline-block;\r\n  position: relative;\r\n  font-size: 16px;\r\n  color: #68647d;\r\n  font-weight: 500;\r\n  margin-bottom: 15px;\r\n  padding-right: 19px;\r\n  transition: all 0.2s;\r\n  background-image: url('double-arrow.png');\r\n  background-repeat: no-repeat;\r\n  background-position: right -120% center;\r\n  background-size: 11px;\r\n}\r\n\r\n.categories-widget ul li a:hover {\r\n  color: #b01ba5;\r\n  background-position: right center;\r\n}\r\n\r\n.search-widget {\r\n  position: relative;\r\n}\r\n\r\n.search-widget input {\r\n  width: 100%;\r\n  height: 40px;\r\n  border: none;\r\n  border-bottom: 2px solid #72628b;\r\n  background: none;\r\n  padding-right: 60px;\r\n  color: #fff;\r\n}\r\n\r\n.search-widget button {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  color: #b01ba5;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  font-style: italic;\r\n  cursor: pointer;\r\n  background: none;\r\n  border: none;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.latest-comments .lc-item {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.latest-comments .lc-item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.latest-comments .lc-item .lc-avatar {\r\n  width: 64px;\r\n  height: 64px;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin-right: 12px;\r\n}\r\n\r\n.latest-comments .lc-item .tw-text {\r\n  padding-top: 10px;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  font-weight: 500;\r\n}\r\n\r\n.latest-comments .lc-item .tw-text a {\r\n  color: #b01ba5;\r\n}\r\n\r\n.latest-comments .lc-item .tw-text span {\r\n  color: #68647d;\r\n}\r\n\r\n/* --------------------\r\n  Intro video section\r\n-----------------------*/\r\n\r\n.intro-video-section {\r\n  height: 757px;\r\n  position: relative;\r\n}\r\n\r\n.video-play-btn {\r\n  position: absolute;\r\n  left: calc(50% - 61px);\r\n  top: calc(50% - 61px);\r\n  width: 122px;\r\n  height: 122px;\r\n  text-align: center;\r\n  padding-top: 35px;\r\n  border-radius: 50%;\r\n  background: rgba(255, 255, 255, 0.16);\r\n}\r\n\r\n.video-text {\r\n  margin-bottom: 80px;\r\n  padding: 27px 0;\r\n  padding-left: 25px;\r\n  position: relative;\r\n}\r\n\r\n.video-text h2 {\r\n  font-size: 48px;\r\n  text-transform: uppercase;\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  color: #fff;\r\n  margin-bottom: 1px;\r\n}\r\n\r\n.video-text p {\r\n  font-size: 18px;\r\n  color: #a3a1b3;\r\n  font-weight: 500;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.video-text:after {\r\n  position: absolute;\r\n  content: '';\r\n  width: 9px;\r\n  height: 100%;\r\n  left: -22px;\r\n  top: 0;\r\n  border-left: 3px solid #de46d6;\r\n  background: #fff;\r\n  box-shadow: 0 0 9px 3px rgba(226, 30, 228, 0.5);\r\n}\r\n\r\n/* ----------------\r\n  Featured section\r\n---------------------*/\r\n\r\n.featured-section {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.featured-bg {\r\n  width: calc(50% - 156px);\r\n  float: left;\r\n  height: 100%;\r\n  left: 0;\r\n  right: 0;\r\n  position: absolute;\r\n}\r\n\r\n.featured-box {\r\n  float: right;\r\n  width: calc(50% + 156px);\r\n  background: #fff;\r\n  padding: 100px 50px 130px 79px;\r\n}\r\n\r\n.featured-box .text-box {\r\n  max-width: 810px;\r\n}\r\n\r\n.featured-box .text-box .top-meta {\r\n  color: #68647d;\r\n}\r\n\r\n.featured-box .text-box h3 {\r\n  font-size: 60px;\r\n  max-width: 100%;\r\n}\r\n\r\n.featured-box .text-box p {\r\n  font-size: 16px;\r\n}\r\n\r\n.featured-box .text-box .read-more {\r\n  color: #251e2f;\r\n}\r\n\r\n.gradient-bg,\r\n.newsletter-section {\r\n  background: #3e0f3d;\r\n  /* Old browsers */\r\n  /* FF3.6-15 */\r\n  /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to right, #3e0f3d 0%, #1c0f3b 100%);\r\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3e0f3d', endColorstr='#1c0f3b', GradientType=1);\r\n  /* IE6-9 */\r\n}\r\n\r\n/* --------------------\r\n  Newsletter section\r\n----------------------*/\r\n\r\n.newsletter-section {\r\n  padding: 108px 0 95px;\r\n  text-align: center;\r\n}\r\n\r\n.newsletter-section h2 {\r\n  font-size: 48px;\r\n  color: #fff;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  text-transform: uppercase;\r\n  margin-bottom: 73px;\r\n}\r\n\r\n.newsletter-form {\r\n  padding-left: 56px;\r\n}\r\n\r\n.newsletter-form input {\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  color: #fff;\r\n  width: 787px;\r\n  border: none;\r\n  border-bottom: 2px solid #9b91a6;\r\n  background: none;\r\n  height: 63px;\r\n  margin-right: 26px;\r\n}\r\n\r\n/* ----------------\r\n  Footer section\r\n---------------------*/\r\n\r\n.footer-section {\r\n  text-align: center;\r\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#330d38+0,190d36+100 */\r\n  background: #330d38;\r\n  /* Old browsers */\r\n  /* FF3.6-15 */\r\n  /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to right, #330d38 0%, #190d36 100%);\r\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#330d38', endColorstr='#190d36', GradientType=1);\r\n  /* IE6-9 */\r\n}\r\n\r\n.footer-section .container {\r\n  position: relative;\r\n  padding: 0 15px 25px;\r\n}\r\n\r\n.footer-left-pic {\r\n  position: absolute;\r\n  left: -13px;\r\n  bottom: 19px;\r\n}\r\n\r\n.footer-right-pic {\r\n  position: absolute;\r\n  right: 50px;\r\n  bottom: 19px;\r\n}\r\n\r\n.footer-menu {\r\n  padding-top: 62px;\r\n}\r\n\r\n.footer-menu li:last-child a {\r\n  margin-right: 0;\r\n}\r\n\r\n.footer-social {\r\n  padding-top: 20px;\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.footer-social a:first-child {\r\n  margin-left: 0;\r\n}\r\n\r\n.copyright {\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  color: #9190a5;\r\n  opacity: 0.2;\r\n}\r\n\r\n.copyright a {\r\n  color: #9190a5;\r\n}\r\n\r\n.copyright a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n/* ----------------\r\n  Other Pages\r\n=====================\r\n---------------------*/\r\n\r\n.page-top-section {\r\n  height: 355px;\r\n  padding-top: 210px;\r\n}\r\n\r\n.page-info {\r\n  max-width: 1496px;\r\n  margin: 0 auto;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  padding-left: 60px;\r\n}\r\n\r\n.page-info h2 {\r\n  color: #fff;\r\n  font-size: 48px;\r\n}\r\n\r\n.site-breadcrumb a,\r\n.site-breadcrumb span {\r\n  font-style: italic;\r\n  color: #fff;\r\n  margin: 0 10px;\r\n  font-weight: 700;\r\n}\r\n\r\n.site-breadcrumb a:first-child {\r\n  margin-left: 0;\r\n}\r\n\r\n.site-breadcrumb span {\r\n  color: #c313b7;\r\n}\r\n\r\n/* --------------\r\n  Games Page\r\n-----------------*/\r\n\r\n.games-section {\r\n  padding: 108px 0;\r\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\r\n  background: #501755;\r\n  /* Old browsers */\r\n  /* FF3.6-15 */\r\n  /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(45deg, #501755 0%, #2d1854 100%);\r\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\r\n  /* IE6-9 fallback on horizontal gradient */\r\n}\r\n\r\n.game-filter {\r\n  list-style: none;\r\n  margin-bottom: 82px;\r\n}\r\n\r\n.game-filter li {\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 34px;\r\n  background: #503c6e;\r\n  border-radius: 17px;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.game-filter li:hover {\r\n  background: #c313b7;\r\n}\r\n\r\n.game-filter li a {\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n  color: #fff;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  padding-top: 7px;\r\n}\r\n\r\n.game-item {\r\n  margin-bottom: 80px;\r\n}\r\n\r\n.game-item h5 {\r\n  font-size: 20px;\r\n  color: #fff;\r\n  padding-top: 30px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.game-item .read-more {\r\n  font-size: 15px;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  color: #b01ba5;\r\n}\r\n\r\n.game-item .read-more img {\r\n  margin-left: 13px;\r\n}\r\n\r\n.site-pagination {\r\n  display: -ms-flex;\r\n  display: flex;\r\n}\r\n\r\n.site-pagination a {\r\n  width: 38px;\r\n  height: 44px;\r\n  border-radius: 50%;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  border: 2px solid transparent;\r\n  color: #fff;\r\n  display: -ms-inline-flex;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.site-pagination a.active {\r\n  width: 44px;\r\n  margin: 0 10px;\r\n  color: #b01ba5;\r\n  border: 2px solid #b01ba5;\r\n}\r\n\r\n.site-pagination a.active:first-child {\r\n  margin-left: 0;\r\n}\r\n\r\n.game-page-sideber .widget-item {\r\n  margin-bottom: 55px;\r\n}\r\n\r\n/* ------------------\r\n  Game single Page\r\n---------------------*/\r\n\r\n.games-single-page,\r\n.review-section,\r\n.blog-page,\r\n.contact-page {\r\n  padding: 104px 0;\r\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#501755+0,2d1854+100 */\r\n  background: #501755;\r\n  /* Old browsers */\r\n  /* FF3.6-15 */\r\n  /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(45deg, #501755 0%, #2d1854 100%);\r\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#501755', endColorstr='#2d1854', GradientType=1);\r\n  /* IE6-9 fallback on horizontal gradient */\r\n}\r\n\r\n.game-single-preview {\r\n  margin-bottom: 108px;\r\n}\r\n\r\n.game-single-content .gs-meta {\r\n  font-size: 18px;\r\n  color: #68647d;\r\n  font-weight: 500;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.game-single-content .gs-meta a {\r\n  color: #b01ba5;\r\n}\r\n\r\n.game-single-content .gs-title {\r\n  font-size: 60px;\r\n  color: #fff;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.game-single-content h4 {\r\n  color: #b01ba5;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.game-single-content p {\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  color: #68647d;\r\n  line-height: 1.8;\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.rating-widget {\r\n  background: #34164b;\r\n  padding: 55px 0 30px;\r\n}\r\n\r\n.rating-widget ul {\r\n  list-style: none;\r\n  padding: 0 38px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.rating-widget ul li {\r\n  display: block;\r\n  font-size: 16px;\r\n  color: #b01ba5;\r\n  font-weight: 500;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.rating-widget ul li span {\r\n  float: right;\r\n  color: #68647d;\r\n}\r\n\r\n.rating-widget h5 {\r\n  text-align: right;\r\n  font-size: 36px;\r\n  color: #fff;\r\n  font-weight: 900;\r\n  padding-right: 38px;\r\n}\r\n\r\n.rating-widget h5 i {\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  font-style: italic;\r\n  color: #65607b;\r\n  text-transform: uppercase;\r\n  margin-right: 18px;\r\n}\r\n\r\n.rating-widget h5 span {\r\n  color: #b01ba5;\r\n}\r\n\r\n.testimonials-widget {\r\n  background: #34164b;\r\n  padding: 55px 0 50px;\r\n}\r\n\r\n.testimonials-widget .testim-text {\r\n  padding: 0 30px;\r\n}\r\n\r\n.testimonials-widget .testim-text p {\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  color: #68647d;\r\n  line-height: 1.8;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.testimonials-widget .testim-text h6 {\r\n  color: #68647d;\r\n  padding-left: 15px;\r\n}\r\n\r\n.testimonials-widget .testim-text h6 span {\r\n  color: #b01ba5;\r\n}\r\n\r\n.game-author-section {\r\n  background: #3a1854;\r\n  padding: 51px 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.game-author-pic {\r\n  width: 117px;\r\n  height: 117px;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin-right: 55px;\r\n}\r\n\r\n.game-author-info {\r\n  overflow: hidden;\r\n  padding-top: 10px;\r\n}\r\n\r\n.game-author-info h4 {\r\n  color: #fff;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.game-author-info h4 span {\r\n  color: #b01ba5;\r\n}\r\n\r\n.game-author-info p {\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  color: #68647d;\r\n  line-height: 1.8;\r\n  margin-bottom: 0;\r\n}\r\n\r\n/* ----------------\r\n  Review section\r\n---------------------*/\r\n\r\n.review-item {\r\n  margin-bottom: 87px;\r\n}\r\n\r\n.review-content {\r\n  position: relative;\r\n}\r\n\r\n.review-content h3 {\r\n  max-width: 100%;\r\n  margin-bottom: 35px;\r\n}\r\n\r\n.review-content p {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.review-content .rating {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n\r\n.review-content .rating h5 {\r\n  text-align: right;\r\n  font-size: 36px;\r\n  color: #fff;\r\n  font-weight: 900;\r\n  padding-right: 38px;\r\n}\r\n\r\n.review-content .rating h5 i {\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  font-style: italic;\r\n  color: #65607b;\r\n  text-transform: uppercase;\r\n  margin-right: 18px;\r\n}\r\n\r\n.review-content .rating h5 span {\r\n  color: #c313b7;\r\n}\r\n\r\n/* ------------------\r\n\tBlog Page\r\n---------------------*/\r\n\r\n.blog-page .blog-filter {\r\n  margin-bottom: 77px;\r\n}\r\n\r\n.big-blog-item {\r\n  margin-bottom: 65px;\r\n}\r\n\r\n.big-blog-item .blog-thumbnail {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.big-blog-item .blog-content .top-meta {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.big-blog-item .blog-content h3 {\r\n  max-width: 100%;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.big-blog-item .blog-content p {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* ----------------\r\n  Contact page\r\n---------------------*/\r\n\r\n.map iframe {\r\n  width: 100%;\r\n  height: 600px;\r\n  margin-bottom: 104px;\r\n}\r\n\r\n.contact-form input,\r\n.contact-form textarea {\r\n  width: 100%;\r\n  border: none;\r\n  background-color: transparent;\r\n  border-bottom: 2px solid rgba(255, 255, 255, 0.54);\r\n  padding-bottom: 20px;\r\n  margin-bottom: 30px;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  font-style: italic;\r\n  color: #fff;\r\n  line-height: 1;\r\n}\r\n\r\n.contact-form textarea {\r\n  line-height: 1.4;\r\n  height: 156px;\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.contact-form .site-btn img {\r\n  left: 5px;\r\n}\r\n\r\n.contact-text h3 {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.contact-text p {\r\n  line-height: 1.9;\r\n  color: #68647d;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.cont-info {\r\n  overflow: hidden;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.cont-info .ci-icon {\r\n  float: left;\r\n  width: 32px;\r\n  margin-right: 26px;\r\n}\r\n\r\n.cont-info .ci-text {\r\n  overflow: hidden;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n}\r\n\r\n/* ----------------\r\n  Responsive\r\n---------------------*/\r\n\r\n@media (min-width: 1200px) {\r\n  .container {\r\n    max-width: 1175px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1530px) {\r\n  .hero-slider .owl-dots {\r\n    width: 1170px;\r\n    left: calc(50% - 585px);\r\n  }\r\n}\r\n\r\n/* Medium screen : 992px. */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .blog-item .blog-thumb {\r\n    width: 250px;\r\n  }\r\n  .hero-item p {\r\n    font-size: 22px;\r\n  }\r\n  .hero-slider .owl-nav .owl-next {\r\n    right: 30px;\r\n  }\r\n  .hero-slider .owl-dots {\r\n    width: 930px;\r\n    left: calc(50% - 465px);\r\n  }\r\n  .newsletter-form {\r\n    padding-left: 0;\r\n  }\r\n  .newsletter-form input {\r\n    width: 100%;\r\n    margin-right: 0;\r\n    margin-bottom: 40px;\r\n  }\r\n  .game-filter li {\r\n    width: 31px;\r\n    height: 31px;\r\n  }\r\n  .game-filter li a {\r\n    padding-top: 5px;\r\n  }\r\n}\r\n\r\n/* Tablet :768px. */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .header-bar-warp {\r\n    padding: 39px 15px 0;\r\n  }\r\n  .main-menu li a {\r\n    margin-right: 10px;\r\n  }\r\n  .hero-item h2 {\r\n    font-size: 110px;\r\n  }\r\n  .hero-item p {\r\n    font-size: 16px;\r\n    padding: 0 30px;\r\n  }\r\n  .hero-slider .owl-nav .owl-next {\r\n    right: 0;\r\n  }\r\n  .hero-slider .owl-dots {\r\n    width: 690px;\r\n    left: calc(50% - 345px);\r\n  }\r\n  .blog-item .blog-thumb {\r\n    float: none;\r\n    margin-right: 0;\r\n    width: 100%;\r\n    margin-bottom: 30px;\r\n  }\r\n  .featured-bg {\r\n    display: none;\r\n  }\r\n  .featured-box {\r\n    float: none;\r\n    width: 100%;\r\n  }\r\n  .newsletter-form input {\r\n    width: 100%;\r\n    margin-right: 0;\r\n    margin-bottom: 40px;\r\n  }\r\n  .footer-right-pic {\r\n    right: 15px;\r\n  }\r\n  .footer-left-pic {\r\n    left: -44px;\r\n  }\r\n  .game-filter {\r\n    text-align: center;\r\n  }\r\n  .game-filter li {\r\n    margin-bottom: 5px;\r\n  }\r\n  .game-single-content .gs-title {\r\n    font-size: 40px;\r\n  }\r\n  .review-pic img {\r\n    min-width: 100%;\r\n    margin-bottom: 30px;\r\n  }\r\n  .contact-text {\r\n    margin-bottom: 50px;\r\n  }\r\n}\r\n\r\n/* Large Mobile :480px. */\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .header-bar-warp {\r\n    padding: 25px 20px 10px;\r\n  }\r\n  .main-menu.primary-menu {\r\n    display: none;\r\n  }\r\n  .slicknav_menu {\r\n    display: block;\r\n    background: #081624;\r\n  }\r\n  .slicknav_btn {\r\n    margin-right: 10px;\r\n    background: #3a3a3a;\r\n  }\r\n  .slicknav_nav a:hover,\r\n  .slicknav_nav .slicknav_row:hover {\r\n    background: #25394c;\r\n    color: #fff;\r\n  }\r\n  .hero-item h2 {\r\n    font-size: 70px;\r\n  }\r\n  .hero-item p {\r\n    font-size: 18px;\r\n  }\r\n  .footer-right-pic,\r\n  .footer-left-pic {\r\n    display: none;\r\n  }\r\n  .hero-slider .owl-nav .owl-next {\r\n    top: auto;\r\n    bottom: 33px;\r\n    right: 15px;\r\n    z-index: 99;\r\n  }\r\n  .hero-slider .owl-dots {\r\n    width: 100%;\r\n    left: 0;\r\n    padding-left: 15px;\r\n  }\r\n  .intro-text-box {\r\n    margin-bottom: 40px;\r\n  }\r\n  .blog-item .blog-thumb {\r\n    float: none;\r\n    margin-right: 0;\r\n    width: 100%;\r\n    margin-bottom: 30px;\r\n  }\r\n  .sidebar {\r\n    padding-top: 60px;\r\n  }\r\n  .featured-bg {\r\n    display: none;\r\n  }\r\n  .featured-box {\r\n    float: none;\r\n    width: 100%;\r\n  }\r\n  .featured-box .text-box h3 {\r\n    font-size: 45px;\r\n  }\r\n  .newsletter-form {\r\n    padding-left: 0;\r\n  }\r\n  .newsletter-form input {\r\n    width: 100%;\r\n    margin-right: 0;\r\n    margin-bottom: 40px;\r\n  }\r\n  .video-text:after {\r\n    left: 0;\r\n  }\r\n  .page-top-section {\r\n    height: 400px;\r\n    padding-top: 250px;\r\n  }\r\n  .game-filter {\r\n    text-align: center;\r\n  }\r\n  .game-filter li {\r\n    margin-bottom: 5px;\r\n  }\r\n  .game-single-content .gs-title {\r\n    font-size: 40px;\r\n  }\r\n  .review-pic img {\r\n    min-width: 100%;\r\n    margin-bottom: 30px;\r\n  }\r\n  .contact-text {\r\n    margin-bottom: 50px;\r\n  }\r\n  .review-content .rating {\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n  }\r\n  .review-content .rating h5 {\r\n    text-align: left;\r\n    padding-right: 0;\r\n  }\r\n}\r\n\r\n/* Small Mobile :320px. */\r\n\r\n@media only screen and (max-width: 479px) {\r\n  .hero-item h2 {\r\n    font-size: 55px;\r\n    margin-bottom: 20px;\r\n  }\r\n  .hero-item p {\r\n    font-size: 15px;\r\n  }\r\n  .video-text h2 {\r\n    font-size: 30px;\r\n  }\r\n  .video-play-btn {\r\n    top: calc(30% - 61px);\r\n  }\r\n  .featured-box {\r\n    padding: 100px 15px;\r\n  }\r\n  .featured-box .text-box h3,\r\n  .newsletter-section h2 {\r\n    font-size: 35px;\r\n  }\r\n  .main-menu li a {\r\n    margin-right: 20px;\r\n  }\r\n  .game-author-pic {\r\n    float: none;\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250ZW50L3N0eWxlcy9zdHlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3NDQUtzQzs7QUFFdEMsMkNBQTJDOztBQUMzQzsyQ0FDMkM7O0FBRTNDOztFQUVFLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsbUNBQW1DO0VBQ25DLDJCQUEyQjtBQUM3Qjs7QUFFQTs7Ozs7O0VBTUUsU0FBUztFQUNULGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQVFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTs7d0JBRXdCOztBQUV4QjtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7Ozs7Ozs7OztFQVVFLFdBQVc7QUFDYjs7QUFFQTs7d0JBRXdCOztBQUV4QixZQUFZOztBQUVa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QUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBOztJQUVFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9jb250ZW50L3N0eWxlcy9zdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgRW5kR2FtIC0gR2FtaW5nIE1hZ2F6aW5lIFRlbXBsYXRlXHJcbiAgVmVyc2lvbjogMS4wXHJcbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiBUZW1wbGF0ZSBkZWZhdWx0IENTU1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBmb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzExMTExMTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5oNiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICM1ODU4NTg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsXHJcbnNlbGVjdDpmb2N1cyxcclxuYnV0dG9uOmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlcixcclxuYTpmb2N1cyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbnVsLFxyXG5vbCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEhlbHBlciBDU1NcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnNlY3Rpb24tdGl0bGUgaDIge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uc2V0LWJnIHtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxufVxyXG5cclxuLnNwYWQge1xyXG4gIHBhZGRpbmctdG9wOiAxMDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTA1cHg7XHJcbn1cclxuXHJcbi50ZXh0LXdoaXRlIGgxLFxyXG4udGV4dC13aGl0ZSBoMixcclxuLnRleHQtd2hpdGUgaDMsXHJcbi50ZXh0LXdoaXRlIGg0LFxyXG4udGV4dC13aGl0ZSBoNSxcclxuLnRleHQtd2hpdGUgaDYsXHJcbi50ZXh0LXdoaXRlIHAsXHJcbi50ZXh0LXdoaXRlIHNwYW4sXHJcbi50ZXh0LXdoaXRlIGxpLFxyXG4udGV4dC13aGl0ZSBhIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBDb21tb20gZWxlbWVudHNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLyogYnV0dG9ucyAqL1xyXG5cclxuLnNpdGUtYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBtaW4td2lkdGg6IDE4NnB4O1xyXG4gIHBhZGRpbmc6IDI0cHggMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICMwODE2MjQ7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5zaXRlLWJ0biBpbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxM3B4O1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaXRlLWJ0bjphZnRlcixcclxuLnNpdGUtYnRuOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiA5cHg7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNiMDFiYTU7XHJcbiAgei1pbmRleDogLTI7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOXB4IDNweCByZ2JhKDIyNiwgMzAsIDIyOCwgMC4yNCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDlweCAzcHggcmdiYSgyMjYsIDMwLCAyMjgsIDAuMjQpO1xyXG59XHJcblxyXG4uc2l0ZS1idG46YmVmb3JlIHtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uc2l0ZS1idG46aG92ZXIge1xyXG4gIGNvbG9yOiAjMDgxNjI0O1xyXG59XHJcblxyXG4vKiBQcmVsb2RlciAqL1xyXG5cclxuI3ByZWxvZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTk5OTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICBtYXJnaW4tbGVmdDogLTEzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcclxuICBhbmltYXRpb246IGxvYWRlciAwLjhzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGVyIDAuOHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRlciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2Y0NDMzNjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjNjczYWI3O1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZjQ0MzM2O1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRlciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmNDQzMzY7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjNjczYWI3O1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmNDQzMzY7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEhlYWRlciBzZWN0aW9uXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uaGVhZGVyLXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHggMDtcclxufVxyXG5cclxuLmhlYWRlci13YXJwIHtcclxuICBtYXgtd2lkdGg6IDE0OTZweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhlYWRlci1zb2NpYWwgcCxcclxuLmZvb3Rlci1zb2NpYWwgcCxcclxuLmdlbWUtc29jaWFsLXNoYXJlIHAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogIzkxOTBhNTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxufVxyXG5cclxuLmhlYWRlci1zb2NpYWwgYSxcclxuLmZvb3Rlci1zb2NpYWwgYSxcclxuLmdlbWUtc29jaWFsLXNoYXJlIGEge1xyXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmhlYWRlci1zb2NpYWwgYTpob3ZlcixcclxuLmZvb3Rlci1zb2NpYWwgYTpob3ZlcixcclxuLmdlbWUtc29jaWFsLXNoYXJlIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNiMDFiYTU7XHJcbn1cclxuXHJcbi5oZWFkZXItYmFyLXdhcnAge1xyXG4gIC8qIGJhY2tncm91bmQ6ICMwODE2MjQ7XHJcbiAgICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzMwZDM4IDAlLCAjMTkwZDM2IDEwMCUpO1xyXG4gIHBhZGRpbmc6IDM5cHggNDBweCAwO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDlweCAzcHggcmdiYSgyMjYsIDMwLCAyMjgsIDAuMjQpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA5cHggM3B4IHJnYmEoMjI2LCAzMCwgMjI4LCAwLjI0KTtcclxufVxyXG5cclxuLnNpdGUtbG9nbyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi51c2VyLXBhbmVsIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxufVxyXG5cclxuLnVzZXItcGFuZWwgYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi51c2VyLXBhbmVsIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjYjAxYmE1O1xyXG59XHJcblxyXG4ubWFpbi1tZW51IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG59XHJcblxyXG4ubWFpbi1tZW51IGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFpbi1tZW51IGxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLm1haW4tbWVudSBsaSBhOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMTAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1nL2ljb25zL2Fycm93LWRvd24ucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGkgYSBpIHtcclxuICBjb2xvcjogIzkyOGQ5MjtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4ubWFpbi1tZW51IGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjYjAxYmE1O1xyXG59XHJcblxyXG4ubWFpbi1tZW51IGxpIGE6aG92ZXI6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1nL2ljb25zL2Fycm93LWRvd24tY29sb3IucG5nJyk7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGkgYTpob3ZlciBpIHtcclxuICBjb2xvcjogI2IwMWJhNTtcclxufVxyXG5cclxuLm1haW4tbWVudSBsaTpob3ZlciAuc3ViLW1lbnUge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4ubWFpbi1tZW51IGxpOmhvdmVyID4gYSB7XHJcbiAgY29sb3I6ICNiMDFiYTU7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGk6aG92ZXIgPiBhOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltZy9pY29ucy9hcnJvdy1kb3duLWNvbG9yLnBuZycpO1xyXG59XHJcblxyXG4ubWFpbi1tZW51IGxpIC5zdWItbWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB6LWluZGV4OiA5OTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBib3gtc2hhZG93OiAycHggN3B4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4ubWFpbi1tZW51IGxpIC5zdWItbWVudSBsaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5tYWluLW1lbnUgbGkgLnN1Yi1tZW51IGxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBwYWRkaW5nOiA4cHggMzBweDtcclxufVxyXG5cclxuLm1haW4tbWVudSBsaSAuc3ViLW1lbnUgbGkgYTphZnRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1haW4tbWVudSBsaSAuc3ViLW1lbnUgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNiMDFiYTU7XHJcbn1cclxuXHJcbi5zbGlja25hdl9tZW51IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEhlcm8gc2VjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmhlcm8tc2xpZGVyIC5vd2wtZG90cyB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNzQwcHgpO1xyXG4gIGJvdHRvbTogMzhweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE0OTZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5oZXJvLXNsaWRlciAub3dsLWRvdHMgLm93bC1kb3Qge1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcclxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlcm8tc2xpZGVyIC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUge1xyXG4gIGNvbG9yOiAjYjAxYmE1O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiMDFiYTU7XHJcbn1cclxuXHJcbi5oZXJvLXNsaWRlciAub3dsLW5hdiB7XHJcbiAgbWFyZ2luLXRvcDogLTI0cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5oZXJvLXNsaWRlciAub3dsLW5hdiAub3dsLW5leHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5oZXJvLWl0ZW0ge1xyXG4gIGhlaWdodDogOTIxcHg7XHJcbiAgcGFkZGluZy10b3A6IDEyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjAxYmE1O1xyXG59XHJcblxyXG4uaGVyby1pdGVtIGgyIHtcclxuICBmb250LXNpemU6IDE2MHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmhlcm8taXRlbSBwIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG9wYWNpdHk6IDAuMzk7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA4MHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5oZXJvLWl0ZW0gLnNpdGUtYnRuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5oZXJvLXNsaWRlciAub3dsLWl0ZW0uYWN0aXZlIC5oZXJvLWl0ZW0gaDIsXHJcbi5oZXJvLXNsaWRlciAub3dsLWl0ZW0uYWN0aXZlIC5oZXJvLWl0ZW0gcCxcclxuLmhlcm8tc2xpZGVyIC5vd2wtaXRlbS5hY3RpdmUgLmhlcm8taXRlbSAuc2l0ZS1idG4ge1xyXG4gIHRvcDogMDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaGVyby1zbGlkZXIgLm93bC1pdGVtLmFjdGl2ZSAuaGVyby1pdGVtIGgyIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC40cztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuNHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjRzO1xyXG59XHJcblxyXG4uaGVyby1zbGlkZXIgLm93bC1pdGVtLmFjdGl2ZSAuaGVyby1pdGVtIHAge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjZzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC42cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuNnM7XHJcbn1cclxuXHJcbi5oZXJvLXNsaWRlciAub3dsLWl0ZW0uYWN0aXZlIC5oZXJvLWl0ZW0gLnNpdGUtYnRuIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC44cztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMC44cztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDAuOHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwLjhzO1xyXG59XHJcblxyXG4uaGVyby1zbGlkZXIgLm93bC1pdGVtLmFjdGl2ZSAuaGVyby1pdGVtIC5vZmZlci1jYXJkIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAxcztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMXM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAxcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDFzO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tXHJcbiAgSW50cm8gc2VjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmludHJvLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICMwYzA2MmU7XHJcbiAgcGFkZGluZzogMTE1cHggMDtcclxufVxyXG5cclxuLnRleHQtYm94IC50b3AtbWV0YSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnRleHQtYm94IC50b3AtbWV0YSBhIHtcclxuICBjb2xvcjogI2IwMWJhNTtcclxufVxyXG5cclxuLnRleHQtYm94IGgzIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1heC13aWR0aDogMzcwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWJveCBwIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzY4NjQ3ZDtcclxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcblxyXG4udGV4dC1ib3ggLnJlYWQtbW9yZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50ZXh0LWJveCAucmVhZC1tb3JlIGltZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS1cclxuIEJsb2cgU2VjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJsb2ctc2VjdGlvbiB7XHJcbiAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzUwMTc1NSswLDJkMTg1NCsxMDAgKi9cclxuICBiYWNrZ3JvdW5kOiAjNTAxNzU1O1xyXG4gIC8qIE9sZCBicm93c2VycyAqL1xyXG4gIC8qIEZGMy42LTE1ICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XHJcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xyXG4gIC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNTAxNzU1JywgZW5kQ29sb3JzdHI9JyMyZDE4NTQnLCBHcmFkaWVudFR5cGU9MSk7XHJcbiAgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xyXG59XHJcblxyXG4uYmxvZy1zZWN0aW9uIC5zZWN0aW9uLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uYmxvZy1maWx0ZXIge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ibG9nLWZpbHRlciBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYmxvZy1maWx0ZXIgbGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTZweCAzNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJhY2tncm91bmQ6ICM2ZjJiOTU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5ibG9nLWZpbHRlciBsaSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYjAxYmE1O1xyXG59XHJcblxyXG4uYmxvZy1pdGVtIHtcclxuICBtYXJnaW4tdG9wOiA4NnB4O1xyXG59XHJcblxyXG4uYmxvZy1pdGVtIC5ibG9nLXRodW1iIHtcclxuICB3aWR0aDogMzYycHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uYmxvZy1pdGVtIC50ZXh0LWJveCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJsb2ctaXRlbSAudGV4dC1ib3ggcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDJweDtcclxufVxyXG5cclxuLndpZGdldC1pdGVtIHtcclxuICBtYXJnaW4tYm90dG9tOiA4NXB4O1xyXG59XHJcblxyXG4ud2lkZ2V0LWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLndpZGdldC1pdGVtIC53aWRnZXQtdGl0bGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgcGFkZGluZy1sZWZ0OiAzOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbn1cclxuXHJcbi50cmVuZGluZy13aWRnZXQgLnR3LWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDM4cHg7XHJcbn1cclxuXHJcbi50cmVuZGluZy13aWRnZXQgLnR3LWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRyZW5kaW5nLXdpZGdldCAudHctdGh1bWIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMTdweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udHJlbmRpbmctd2lkZ2V0IC50dy10ZXh0IC50dy1tZXRhIHtcclxuICBjb2xvcjogIzY4NjQ3ZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbi50cmVuZGluZy13aWRnZXQgLnR3LXRleHQgLnR3LW1ldGEgYSB7XHJcbiAgY29sb3I6ICNiMDFiYTU7XHJcbn1cclxuXHJcbi50cmVuZGluZy13aWRnZXQgLnR3LXRleHQgaDUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcy13aWRnZXQge1xyXG4gIGJhY2tncm91bmQ6ICMzNDE2NGI7XHJcbiAgcGFkZGluZzogNTVweCAwIDI1cHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXdpZGdldCB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwIDM4cHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXdpZGdldCB1bCBsaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXdpZGdldCB1bCBsaSBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzY4NjQ3ZDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTlweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1nL2ljb25zL2RvdWJsZS1hcnJvdy5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IC0xMjAlIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLXdpZGdldCB1bCBsaSBhOmhvdmVyIHtcclxuICBjb2xvcjogI2IwMWJhNTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtd2lkZ2V0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtd2lkZ2V0IGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNzI2MjhiO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgcGFkZGluZy1yaWdodDogNjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNlYXJjaC13aWRnZXQgYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGNvbG9yOiAjYjAxYmE1O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmxhdGVzdC1jb21tZW50cyAubGMtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmxhdGVzdC1jb21tZW50cyAubGMtaXRlbTpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubGF0ZXN0LWNvbW1lbnRzIC5sYy1pdGVtIC5sYy1hdmF0YXIge1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4ubGF0ZXN0LWNvbW1lbnRzIC5sYy1pdGVtIC50dy10ZXh0IHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmxhdGVzdC1jb21tZW50cyAubGMtaXRlbSAudHctdGV4dCBhIHtcclxuICBjb2xvcjogI2IwMWJhNTtcclxufVxyXG5cclxuLmxhdGVzdC1jb21tZW50cyAubGMtaXRlbSAudHctdGV4dCBzcGFuIHtcclxuICBjb2xvcjogIzY4NjQ3ZDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBJbnRybyB2aWRlbyBzZWN0aW9uXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5pbnRyby12aWRlby1zZWN0aW9uIHtcclxuICBoZWlnaHQ6IDc1N3B4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnZpZGVvLXBsYXktYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA2MXB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gNjFweCk7XHJcbiAgd2lkdGg6IDEyMnB4O1xyXG4gIGhlaWdodDogMTIycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpO1xyXG59XHJcblxyXG4udmlkZW8tdGV4dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICBwYWRkaW5nOiAyN3B4IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnZpZGVvLXRleHQgaDIge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxufVxyXG5cclxuLnZpZGVvLXRleHQgcCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjYTNhMWIzO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnZpZGVvLXRleHQ6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogOXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAtMjJweDtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZGU0NmQ2O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOXB4IDNweCByZ2JhKDIyNiwgMzAsIDIyOCwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgOXB4IDNweCByZ2JhKDIyNiwgMzAsIDIyOCwgMC41KTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEZlYXR1cmVkIHNlY3Rpb25cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5mZWF0dXJlZC1zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmZlYXR1cmVkLWJnIHtcclxuICB3aWR0aDogY2FsYyg1MCUgLSAxNTZweCk7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uZmVhdHVyZWQtYm94IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IGNhbGMoNTAlICsgMTU2cHgpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMTAwcHggNTBweCAxMzBweCA3OXB4O1xyXG59XHJcblxyXG4uZmVhdHVyZWQtYm94IC50ZXh0LWJveCB7XHJcbiAgbWF4LXdpZHRoOiA4MTBweDtcclxufVxyXG5cclxuLmZlYXR1cmVkLWJveCAudGV4dC1ib3ggLnRvcC1tZXRhIHtcclxuICBjb2xvcjogIzY4NjQ3ZDtcclxufVxyXG5cclxuLmZlYXR1cmVkLWJveCAudGV4dC1ib3ggaDMge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1ib3ggLnRleHQtYm94IHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmZlYXR1cmVkLWJveCAudGV4dC1ib3ggLnJlYWQtbW9yZSB7XHJcbiAgY29sb3I6ICMyNTFlMmY7XHJcbn1cclxuXHJcbi5ncmFkaWVudC1iZyxcclxuLm5ld3NsZXR0ZXItc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogIzNlMGYzZDtcclxuICAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAvKiBGRjMuNi0xNSAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMzZTBmM2QgMCUsICMxYzBmM2IgMTAwJSk7XHJcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KFxyXG4gICAgbGluZWFyLFxyXG4gICAgbGVmdCB0b3AsXHJcbiAgICByaWdodCB0b3AsXHJcbiAgICBmcm9tKCMzZTBmM2QpLFxyXG4gICAgdG8oIzFjMGYzYilcclxuICApO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjM2UwZjNkIDAlLCAjMWMwZjNiIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNlMGYzZCAwJSwgIzFjMGYzYiAxMDAlKTtcclxuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzNlMGYzZCcsIGVuZENvbG9yc3RyPScjMWMwZjNiJywgR3JhZGllbnRUeXBlPTEpO1xyXG4gIC8qIElFNi05ICovXHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgTmV3c2xldHRlciBzZWN0aW9uXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLm5ld3NsZXR0ZXItc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMTA4cHggMCA5NXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5ld3NsZXR0ZXItc2VjdGlvbiBoMiB7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzNweDtcclxufVxyXG5cclxuLm5ld3NsZXR0ZXItZm9ybSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1NnB4O1xyXG59XHJcblxyXG4ubmV3c2xldHRlci1mb3JtIGlucHV0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDc4N3B4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzliOTFhNjtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGhlaWdodDogNjNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS1cclxuICBGb290ZXIgc2VjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmZvb3Rlci1zZWN0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzMzMGQzOCswLDE5MGQzNisxMDAgKi9cclxuICBiYWNrZ3JvdW5kOiAjMzMwZDM4O1xyXG4gIC8qIE9sZCBicm93c2VycyAqL1xyXG4gIC8qIEZGMy42LTE1ICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzMzMGQzOCAwJSwgIzE5MGQzNiAxMDAlKTtcclxuICAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXHJcbiAgICBsaW5lYXIsXHJcbiAgICBsZWZ0IHRvcCxcclxuICAgIHJpZ2h0IHRvcCxcclxuICAgIGZyb20oIzMzMGQzOCksXHJcbiAgICB0bygjMTkwZDM2KVxyXG4gICk7XHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICMzMzBkMzggMCUsICMxOTBkMzYgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzMwZDM4IDAlLCAjMTkwZDM2IDEwMCUpO1xyXG4gIC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMzMwZDM4JywgZW5kQ29sb3JzdHI9JyMxOTBkMzYnLCBHcmFkaWVudFR5cGU9MSk7XHJcbiAgLyogSUU2LTkgKi9cclxufVxyXG5cclxuLmZvb3Rlci1zZWN0aW9uIC5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwIDE1cHggMjVweDtcclxufVxyXG5cclxuLmZvb3Rlci1sZWZ0LXBpYyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xM3B4O1xyXG4gIGJvdHRvbTogMTlweDtcclxufVxyXG5cclxuLmZvb3Rlci1yaWdodC1waWMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNTBweDtcclxuICBib3R0b206IDE5cHg7XHJcbn1cclxuXHJcbi5mb290ZXItbWVudSB7XHJcbiAgcGFkZGluZy10b3A6IDYycHg7XHJcbn1cclxuXHJcbi5mb290ZXItbWVudSBsaTpsYXN0LWNoaWxkIGEge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmZvb3Rlci1zb2NpYWwge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLXNvY2lhbCBhOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLmNvcHlyaWdodCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM5MTkwYTU7XHJcbiAgb3BhY2l0eTogMC4yO1xyXG59XHJcblxyXG4uY29weXJpZ2h0IGEge1xyXG4gIGNvbG9yOiAjOTE5MGE1O1xyXG59XHJcblxyXG4uY29weXJpZ2h0IGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tXHJcbiAgT3RoZXIgUGFnZXNcclxuPT09PT09PT09PT09PT09PT09PT09XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ucGFnZS10b3Atc2VjdGlvbiB7XHJcbiAgaGVpZ2h0OiAzNTVweDtcclxuICBwYWRkaW5nLXRvcDogMjEwcHg7XHJcbn1cclxuXHJcbi5wYWdlLWluZm8ge1xyXG4gIG1heC13aWR0aDogMTQ5NnB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbi5wYWdlLWluZm8gaDIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxufVxyXG5cclxuLnNpdGUtYnJlYWRjcnVtYiBhLFxyXG4uc2l0ZS1icmVhZGNydW1iIHNwYW4ge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDAgMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc2l0ZS1icmVhZGNydW1iIGE6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4uc2l0ZS1icmVhZGNydW1iIHNwYW4ge1xyXG4gIGNvbG9yOiAjYzMxM2I3O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLVxyXG4gIEdhbWVzIFBhZ2VcclxuLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmdhbWVzLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDEwOHB4IDA7XHJcbiAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzUwMTc1NSswLDJkMTg1NCsxMDAgKi9cclxuICBiYWNrZ3JvdW5kOiAjNTAxNzU1O1xyXG4gIC8qIE9sZCBicm93c2VycyAqL1xyXG4gIC8qIEZGMy42LTE1ICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XHJcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICM1MDE3NTUgMCUsICMyZDE4NTQgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xyXG4gIC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNTAxNzU1JywgZW5kQ29sb3JzdHI9JyMyZDE4NTQnLCBHcmFkaWVudFR5cGU9MSk7XHJcbiAgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xyXG59XHJcblxyXG4uZ2FtZS1maWx0ZXIge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogODJweDtcclxufVxyXG5cclxuLmdhbWUtZmlsdGVyIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIGJhY2tncm91bmQ6ICM1MDNjNmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4uZ2FtZS1maWx0ZXIgbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjMzEzYjc7XHJcbn1cclxuXHJcbi5nYW1lLWZpbHRlciBsaSBhIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuXHJcbi5nYW1lLWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi5nYW1lLWl0ZW0gaDUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZ2FtZS1pdGVtIC5yZWFkLW1vcmUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiAjYjAxYmE1O1xyXG59XHJcblxyXG4uZ2FtZS1pdGVtIC5yZWFkLW1vcmUgaW1nIHtcclxuICBtYXJnaW4tbGVmdDogMTNweDtcclxufVxyXG5cclxuLnNpdGUtcGFnaW5hdGlvbiB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNpdGUtcGFnaW5hdGlvbiBhIHtcclxuICB3aWR0aDogMzhweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuLnNpdGUtcGFnaW5hdGlvbiBhLmFjdGl2ZSB7XHJcbiAgd2lkdGg6IDQ0cHg7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgY29sb3I6ICNiMDFiYTU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2IwMWJhNTtcclxufVxyXG5cclxuLnNpdGUtcGFnaW5hdGlvbiBhLmFjdGl2ZTpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5nYW1lLXBhZ2Utc2lkZWJlciAud2lkZ2V0LWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDU1cHg7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEdhbWUgc2luZ2xlIFBhZ2VcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5nYW1lcy1zaW5nbGUtcGFnZSxcclxuLnJldmlldy1zZWN0aW9uLFxyXG4uYmxvZy1wYWdlLFxyXG4uY29udGFjdC1wYWdlIHtcclxuICBwYWRkaW5nOiAxMDRweCAwO1xyXG4gIC8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyM1MDE3NTUrMCwyZDE4NTQrMTAwICovXHJcbiAgYmFja2dyb3VuZDogIzUwMTc1NTtcclxuICAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAvKiBGRjMuNi0xNSAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xyXG4gIC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTAxNzU1IDAlLCAjMmQxODU0IDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzUwMTc1NSAwJSwgIzJkMTg1NCAxMDAlKTtcclxuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzUwMTc1NScsIGVuZENvbG9yc3RyPScjMmQxODU0JywgR3JhZGllbnRUeXBlPTEpO1xyXG4gIC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cclxufVxyXG5cclxuLmdhbWUtc2luZ2xlLXByZXZpZXcge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwOHB4O1xyXG59XHJcblxyXG4uZ2FtZS1zaW5nbGUtY29udGVudCAuZ3MtbWV0YSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjNjg2NDdkO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmdhbWUtc2luZ2xlLWNvbnRlbnQgLmdzLW1ldGEgYSB7XHJcbiAgY29sb3I6ICNiMDFiYTU7XHJcbn1cclxuXHJcbi5nYW1lLXNpbmdsZS1jb250ZW50IC5ncy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5nYW1lLXNpbmdsZS1jb250ZW50IGg0IHtcclxuICBjb2xvcjogI2IwMWJhNTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZ2FtZS1zaW5nbGUtY29udGVudCBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzY4NjQ3ZDtcclxuICBsaW5lLWhlaWdodDogMS44O1xyXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbn1cclxuXHJcbi5yYXRpbmctd2lkZ2V0IHtcclxuICBiYWNrZ3JvdW5kOiAjMzQxNjRiO1xyXG4gIHBhZGRpbmc6IDU1cHggMCAzMHB4O1xyXG59XHJcblxyXG4ucmF0aW5nLXdpZGdldCB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwIDM4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnJhdGluZy13aWRnZXQgdWwgbGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2IwMWJhNTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5yYXRpbmctd2lkZ2V0IHVsIGxpIHNwYW4ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogIzY4NjQ3ZDtcclxufVxyXG5cclxuLnJhdGluZy13aWRnZXQgaDUge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDM4cHg7XHJcbn1cclxuXHJcbi5yYXRpbmctd2lkZ2V0IGg1IGkge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogIzY1NjA3YjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1yaWdodDogMThweDtcclxufVxyXG5cclxuLnJhdGluZy13aWRnZXQgaDUgc3BhbiB7XHJcbiAgY29sb3I6ICNiMDFiYTU7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbHMtd2lkZ2V0IHtcclxuICBiYWNrZ3JvdW5kOiAjMzQxNjRiO1xyXG4gIHBhZGRpbmc6IDU1cHggMCA1MHB4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWxzLXdpZGdldCAudGVzdGltLXRleHQge1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscy13aWRnZXQgLnRlc3RpbS10ZXh0IHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNjg2NDdkO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFscy13aWRnZXQgLnRlc3RpbS10ZXh0IGg2IHtcclxuICBjb2xvcjogIzY4NjQ3ZDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbHMtd2lkZ2V0IC50ZXN0aW0tdGV4dCBoNiBzcGFuIHtcclxuICBjb2xvcjogI2IwMWJhNTtcclxufVxyXG5cclxuLmdhbWUtYXV0aG9yLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICMzYTE4NTQ7XHJcbiAgcGFkZGluZzogNTFweCAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5nYW1lLWF1dGhvci1waWMge1xyXG4gIHdpZHRoOiAxMTdweDtcclxuICBoZWlnaHQ6IDExN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDU1cHg7XHJcbn1cclxuXHJcbi5nYW1lLWF1dGhvci1pbmZvIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZ2FtZS1hdXRob3ItaW5mbyBoNCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmdhbWUtYXV0aG9yLWluZm8gaDQgc3BhbiB7XHJcbiAgY29sb3I6ICNiMDFiYTU7XHJcbn1cclxuXHJcbi5nYW1lLWF1dGhvci1pbmZvIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNjg2NDdkO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFJldmlldyBzZWN0aW9uXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ucmV2aWV3LWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDg3cHg7XHJcbn1cclxuXHJcbi5yZXZpZXctY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucmV2aWV3LWNvbnRlbnQgaDMge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcblxyXG4ucmV2aWV3LWNvbnRlbnQgcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnJldmlldy1jb250ZW50IC5yYXRpbmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5yZXZpZXctY29udGVudCAucmF0aW5nIGg1IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzOHB4O1xyXG59XHJcblxyXG4ucmV2aWV3LWNvbnRlbnQgLnJhdGluZyBoNSBpIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6ICM2NTYwN2I7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5yZXZpZXctY29udGVudCAucmF0aW5nIGg1IHNwYW4ge1xyXG4gIGNvbG9yOiAjYzMxM2I3O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRCbG9nIFBhZ2VcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5ibG9nLXBhZ2UgLmJsb2ctZmlsdGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA3N3B4O1xyXG59XHJcblxyXG4uYmlnLWJsb2ctaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjVweDtcclxufVxyXG5cclxuLmJpZy1ibG9nLWl0ZW0gLmJsb2ctdGh1bWJuYWlsIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uYmlnLWJsb2ctaXRlbSAuYmxvZy1jb250ZW50IC50b3AtbWV0YSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmJpZy1ibG9nLWl0ZW0gLmJsb2ctY29udGVudCBoMyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5iaWctYmxvZy1pdGVtIC5ibG9nLWNvbnRlbnQgcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLVxyXG4gIENvbnRhY3QgcGFnZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLm1hcCBpZnJhbWUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTA0cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gaW5wdXQsXHJcbi5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gLnNpdGUtYnRuIGltZyB7XHJcbiAgbGVmdDogNXB4O1xyXG59XHJcblxyXG4uY29udGFjdC10ZXh0IGgzIHtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uY29udGFjdC10ZXh0IHAge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjk7XHJcbiAgY29sb3I6ICM2ODY0N2Q7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmNvbnQtaW5mbyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29udC1pbmZvIC5jaS1pY29uIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMzJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbi5jb250LWluZm8gLmNpLXRleHQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS1cclxuICBSZXNwb25zaXZlXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDExNzVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNTMwcHgpIHtcclxuICAuaGVyby1zbGlkZXIgLm93bC1kb3RzIHtcclxuICAgIHdpZHRoOiAxMTcwcHg7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDU4NXB4KTtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBzY3JlZW4gOiA5OTJweC4gKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAuYmxvZy1pdGVtIC5ibG9nLXRodW1iIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcbiAgLmhlcm8taXRlbSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbiAgLmhlcm8tc2xpZGVyIC5vd2wtbmF2IC5vd2wtbmV4dCB7XHJcbiAgICByaWdodDogMzBweDtcclxuICB9XHJcbiAgLmhlcm8tc2xpZGVyIC5vd2wtZG90cyB7XHJcbiAgICB3aWR0aDogOTMwcHg7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDQ2NXB4KTtcclxuICB9XHJcbiAgLm5ld3NsZXR0ZXItZm9ybSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5uZXdzbGV0dGVyLWZvcm0gaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxuICAuZ2FtZS1maWx0ZXIgbGkge1xyXG4gICAgd2lkdGg6IDMxcHg7XHJcbiAgICBoZWlnaHQ6IDMxcHg7XHJcbiAgfVxyXG4gIC5nYW1lLWZpbHRlciBsaSBhIHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBUYWJsZXQgOjc2OHB4LiAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmhlYWRlci1iYXItd2FycCB7XHJcbiAgICBwYWRkaW5nOiAzOXB4IDE1cHggMDtcclxuICB9XHJcbiAgLm1haW4tbWVudSBsaSBhIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLmhlcm8taXRlbSBoMiB7XHJcbiAgICBmb250LXNpemU6IDExMHB4O1xyXG4gIH1cclxuICAuaGVyby1pdGVtIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gIH1cclxuICAuaGVyby1zbGlkZXIgLm93bC1uYXYgLm93bC1uZXh0IHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICAuaGVyby1zbGlkZXIgLm93bC1kb3RzIHtcclxuICAgIHdpZHRoOiA2OTBweDtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMzQ1cHgpO1xyXG4gIH1cclxuICAuYmxvZy1pdGVtIC5ibG9nLXRodW1iIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICAuZmVhdHVyZWQtYmcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmZlYXR1cmVkLWJveCB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubmV3c2xldHRlci1mb3JtIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcbiAgLmZvb3Rlci1yaWdodC1waWMge1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIC5mb290ZXItbGVmdC1waWMge1xyXG4gICAgbGVmdDogLTQ0cHg7XHJcbiAgfVxyXG4gIC5nYW1lLWZpbHRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5nYW1lLWZpbHRlciBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5nYW1lLXNpbmdsZS1jb250ZW50IC5ncy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG4gIC5yZXZpZXctcGljIGltZyB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICAuY29udGFjdC10ZXh0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZSBNb2JpbGUgOjQ4MHB4LiAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5oZWFkZXItYmFyLXdhcnAge1xyXG4gICAgcGFkZGluZzogMjVweCAyMHB4IDEwcHg7XHJcbiAgfVxyXG4gIC5tYWluLW1lbnUucHJpbWFyeS1tZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5zbGlja25hdl9tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogIzA4MTYyNDtcclxuICB9XHJcbiAgLnNsaWNrbmF2X2J0biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xyXG4gIH1cclxuICAuc2xpY2tuYXZfbmF2IGE6aG92ZXIsXHJcbiAgLnNsaWNrbmF2X25hdiAuc2xpY2tuYXZfcm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyNTM5NGM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmhlcm8taXRlbSBoMiB7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgfVxyXG4gIC5oZXJvLWl0ZW0gcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5mb290ZXItcmlnaHQtcGljLFxyXG4gIC5mb290ZXItbGVmdC1waWMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmhlcm8tc2xpZGVyIC5vd2wtbmF2IC5vd2wtbmV4dCB7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBib3R0b206IDMzcHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuICAuaGVyby1zbGlkZXIgLm93bC1kb3RzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICB9XHJcbiAgLmludHJvLXRleHQtYm94IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG4gIC5ibG9nLWl0ZW0gLmJsb2ctdGh1bWIge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIHtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIH1cclxuICAuZmVhdHVyZWQtYmcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmZlYXR1cmVkLWJveCB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZmVhdHVyZWQtYm94IC50ZXh0LWJveCBoMyB7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgfVxyXG4gIC5uZXdzbGV0dGVyLWZvcm0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxuICAubmV3c2xldHRlci1mb3JtIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcbiAgLnZpZGVvLXRleHQ6YWZ0ZXIge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgLnBhZ2UtdG9wLXNlY3Rpb24ge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNTBweDtcclxuICB9XHJcbiAgLmdhbWUtZmlsdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmdhbWUtZmlsdGVyIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLmdhbWUtc2luZ2xlLWNvbnRlbnQgLmdzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcbiAgLnJldmlldy1waWMgaW1nIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LXRleHQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLnJldmlldy1jb250ZW50IC5yYXRpbmcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLnJldmlldy1jb250ZW50IC5yYXRpbmcgaDUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTbWFsbCBNb2JpbGUgOjMyMHB4LiAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xyXG4gIC5oZXJvLWl0ZW0gaDIge1xyXG4gICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLmhlcm8taXRlbSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLnZpZGVvLXRleHQgaDIge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAudmlkZW8tcGxheS1idG4ge1xyXG4gICAgdG9wOiBjYWxjKDMwJSAtIDYxcHgpO1xyXG4gIH1cclxuICAuZmVhdHVyZWQtYm94IHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDE1cHg7XHJcbiAgfVxyXG4gIC5mZWF0dXJlZC1ib3ggLnRleHQtYm94IGgzLFxyXG4gIC5uZXdzbGV0dGVyLXNlY3Rpb24gaDIge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuICAubWFpbi1tZW51IGxpIGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuZ2FtZS1hdXRob3ItcGljIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\github-project\raceway-boarding\src\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map