(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "projects", component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"] },
    { path: "about", component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n<app-navbar></app-navbar>\n</header>\n<main>\n<router-outlet></router-outlet>\n</main>\n<footer class=\"blue-grey darken-4\">\n    <app-footer></app-footer>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_about_work_work_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/work/work.component */ "./src/app/components/about/work/work.component.ts");
/* harmony import */ var _components_about_partners_partners_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about/partners/partners.component */ "./src/app/components/about/partners/partners.component.ts");
/* harmony import */ var _components_about_studies_studies_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about/studies/studies.component */ "./src/app/components/about/studies/studies.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_about_work_work_component__WEBPACK_IMPORTED_MODULE_9__["WorkComponent"],
                _components_about_partners_partners_component__WEBPACK_IMPORTED_MODULE_10__["PartnersComponent"],
                _components_about_studies_studies_component__WEBPACK_IMPORTED_MODULE_11__["StudiesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider\" id=\"about-carousel\">\n  <ul class=\"slides\">\n    <li>\n      <img src=\"./assets/img/about/studies.jpeg\">\n      <!-- random image -->\n      <div class=\"caption center-align\">\n        <h3>Studies</h3>\n        <h5 class=\"light grey-text text-lighten-3\">All my academic information.</h5>\n        <a class=\"btn waves-effect white black-text pulse\" (click)=\"openSection('studies')\">\n          <i class=\"mdi mdi-book-open-page-variant\"></i>\n          Let's see\n        </a>\n      </div>\n    </li>\n    <li>\n      <img src=\"./assets/img/about/work2.jpeg\">\n      <!-- random image -->\n      <div class=\"caption right-align\">\n        <h3>What I can do!</h3>\n        <h5 class=\"light grey-text text-lighten-3\">These are all the tools and type of projects we can do.</h5>\n        <a class=\"btn waves-effect white black-text pulse\" (click)=\"openSection('work')\">\n          <i class=\"mdi mdi-information-variant\"></i>\n          More information\n        </a>\n      </div>\n    </li>\n    <li>\n      <img src=\"./assets/img/about/partners2.jpeg\">\n      <!-- random image -->\n      <div class=\"caption center-align\">\n        <h3>Partners</h3>\n        <h5 class=\"light grey-text text-lighten-3\">These are the people I work with.</h5>\n        <a class=\"btn waves-effect white black-text pulse\" (click)=\"openSection('partners')\">\n          <i class=\"mdi mdi-account-group\"></i>\n          I want to know them\n        </a>\n      </div>\n    </li>\n\n  </ul>\n</div>\n\n<div id=\"work-section\" class=\"scale-transition scale-out hide\">\n  <app-work></app-work>\n</div>\n\n<div id=\"partners-section\" class=\"scale-transition scale-out hide\">\n  <app-partners></app-partners>\n</div>\n\n<div id=\"studies-section\" class=\"scale-transition scale-out hide\">\n  <app-studies></app-studies>\n</div>\n\n\n<div class=\"container\">\n  <div id=\"backButton\" class=\"hide\">\n    <div class=\"fixed-action-btn\">\n      <a class=\"btn-floating btn-large waves-effect waves-light red right pulse\" (click)=\"hideSection()\">\n        <i class=\"mdi mdi-backup-restore\"></i>\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        var sliderOptions = new Object();
        var sliderElems = document.querySelectorAll('.slider');
        var sliderInstances = M.Slider.init(sliderElems, sliderOptions);
        var tooltipOptions = new Object();
        var tooltipElems = document.querySelectorAll('.tooltipped');
        var tooltipInstances = M.Tooltip.init(tooltipElems, tooltipOptions);
        var carouselOpt = {
            indicators: true,
            fullWidth: true,
            numVisible: 1,
            dist: 0
        };
        var carouselElems = document.querySelectorAll('.carousel');
        var carouselInstances = M.Carousel.init(carouselElems, carouselOpt);
        var collapsibleOpt = {};
        var collapsibleOptElems = document.querySelectorAll('.collapsible');
        var collapsibleInstances = M.Collapsible.init(collapsibleOptElems, collapsibleOpt);
    };
    AboutComponent.prototype.openSection = function (cardDescription) {
        document.getElementById('about-carousel').classList.add('scale-out');
        setTimeout(function () {
            document.getElementById('about-carousel').classList.add('hide');
        }, 200);
        if (cardDescription == 'work') {
            setTimeout(function () {
                document.getElementById('work-section').classList.remove('hide');
            }, 100);
            setTimeout(function () {
                document.getElementById('work-section').classList.remove('scale-out');
                document.getElementById('work-section').classList.remove('scale-in');
            }, 200);
        }
        else if (cardDescription == 'partners') {
            setTimeout(function () {
                document.getElementById('partners-section').classList.remove('hide');
            }, 100);
            setTimeout(function () {
                document.getElementById('partners-section').classList.remove('scale-out');
                document.getElementById('partners-section').classList.add('scale-in');
            }, 200);
        }
        else if (cardDescription == 'studies') {
            setTimeout(function () {
                document.getElementById('studies-section').classList.remove('hide');
            }, 100);
            setTimeout(function () {
                document.getElementById('studies-section').classList.remove('scale-out');
                document.getElementById('studies-section').classList.add('scale-in');
            }, 200);
        }
        setTimeout(function () {
            document.getElementById('backButton').classList.remove('hide');
            document.getElementById('backButton').classList.add('scale-in');
        }, 100);
    };
    AboutComponent.prototype.hideSection = function () {
        // Botton de retornar
        document.getElementById('backButton').classList.add('scale-out');
        setTimeout(function () {
            document.getElementById('backButton').classList.add('hide');
        }, 100);
        // Solo seccion de work
        document.getElementById('work-section').classList.add('scale-out');
        setTimeout(function () {
            document.getElementById('work-section').classList.add('hide');
        }, 100);
        // Solo seccion de partners
        document.getElementById('partners-section').classList.add('scale-out');
        setTimeout(function () {
            document.getElementById('partners-section').classList.add('hide');
        }, 100);
        // Solo seccion de studies
        document.getElementById('studies-section').classList.add('scale-out');
        setTimeout(function () {
            document.getElementById('studies-section').classList.add('hide');
        }, 100);
        // Todo el carousel
        document.getElementById('about-carousel').classList.remove('hide');
        setTimeout(function () {
            document.getElementById('about-carousel').classList.add('scale-in');
        }, 200);
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/about/partners/partners.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/about/partners/partners.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/partners/partners.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/about/partners/partners.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    \n    \n    <div class=\"col s12 m6\">\n      <div class=\"card\">\n        <div class=\"card-image\">\n          <img src=\"assets/img/about/partners/d-apps.jpg\">\n          <span class=\"card-title\">Blockchain team</span>\n        </div>\n        <div class=\"card-content\">\n          <p>These are the guys that have been with me working and studying about decentralized apps or d-apps based on blockchains like ethereum.</p>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"col s12 m6\">\n        <div class=\"card\">\n          <div class=\"card-image\">\n              <img src=\"assets/img/about/partners/evoluciones medicas.jpg\">\n            <span class=\"card-title\">Evoluciones medicas</span>\n          </div>\n          <div class=\"card-content\">\n            <p>My friend Cristian and I started a new project on the Health Field, we're still working on it, but it's going to get launched pretty soon. </p>\n          </div>\n        </div>\n      </div>\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/partners/partners.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/about/partners/partners.component.ts ***!
  \*****************************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnersComponent = /** @class */ (function () {
    function PartnersComponent() {
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    PartnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partners',
            template: __webpack_require__(/*! ./partners.component.html */ "./src/app/components/about/partners/partners.component.html"),
            styles: [__webpack_require__(/*! ./partners.component.css */ "./src/app/components/about/partners/partners.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnersComponent);
    return PartnersComponent;
}());



/***/ }),

/***/ "./src/app/components/about/studies/studies.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/about/studies/studies.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/studies/studies.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/about/studies/studies.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s12\">\n\n      <ul class=\"collapsible blue-grey-text darken-4-text white\">\n        <li>\n          <div class=\"collapsible-header valign-wrapper\">\n            <i class=\"mdi mdi-translate\"></i>Languages</div>\n          <div class=\"collapsible-body\">\n            <strong> <b> English </b> </strong><br>\n            <span>\n              When I was really young I felt the need to learn English, I did so and in 1 month I was able to have a conversation about\n              general things with the people, but my accent still sounded very latino like.\n              <br>\n              <br> When I finished High School I studied at an institute of languages called American School Way, and reached\n              the B2 in less then 8 months.\n              <br>\n              <br> All of a sudden I turned 18 and went to the army, since it's mandatory in my country. I was so good at my\n              job, that one day they sent me to work at an international mission in Egypt in the peninsula of Sinai, in the\n              beginning I worked with the australian army, which ware in charge of the perimetral security,\n              3 months later they talked about me to the unit of trnasportation of the united states, they requested to the\n              colombian army my help and I changed my duties, I made very good friends, also in other units, and that's how\n              I improved my english and now I'm a C1.\n            </span>\n            <br>\n            <br>\n            <br>\n            <strong> <b> German </b> </strong><br>\n            <span>\n              When I was about 22, I found a free course during the night at the place where I was studyign Telecommunications, I said....\n              Why no?!?!? it's free!! and I studied I little bit. I've got an A1 certificate on German.\n            </span>\n          </div>\n        </li>\n\n\n\n\n        <li>\n          <div class=\"collapsible-header valign-wrapper\">\n            <i class=\"mdi mdi-web\"></i>Associate's Degree</div>\n          <div class=\"collapsible-body\">\n            <strong>\n              Telecommunications\n            </strong>\n            <br>\n            <span>\n              I've always liked the technology field, that's why I decided to study telecomunications when I was really young, I learned a lot about, servers, routers, switches,\n              cabling, networks and many other things.\n            </span>\n          </div>\n        </li>\n        <li>\n          <div class=\"collapsible-header valign-wrapper\">\n            <i class=\"mdi mdi-book-minus\"></i>Bachelor's Degree</div>\n          <div class=\"collapsible-body\">\n            <strong>\n              Computer Science\n            </strong>\n            <br>\n            <span>\n              After finishing the associate's degree, I decided it was time to do the professional carrear, So I studied (Ingeniería de\n              sistemas) which is like Systems engineer, and that's where I met the programming world. I started learging C++,\n              then Java and then web technologies, HTML5, CSS3, and JavaScript.\n              <br> I did an extra PHP course while doing the bachelors, and just as a personal project I built and launched my\n              first personal website.\n            </span>\n          </div>\n        </li>\n        <li>\n          <div class=\"collapsible-header valign-wrapper\">\n            <i class=\"mdi mdi-certificate\"></i>Grauation Course</div>\n          <div class=\"collapsible-body\">\n            <strong>\n              SCRUM, Cloud Computing, Big Data\n            </strong>\n            <br>\n            <span>\n              When I was studying the bachelor, to be able to graduate, I had to study some extra courses, these courses were SCRUM, Cloud\n              Computing and Big Data\n              <br> For Cloud Computing, we had a training on AWS, Google Engine and AZURE\n              <br> For Big Data, we had an intro to MongoDB, Haddop and NoSQL databases.\n              <br> And At last but not least SCRUM, which is something I've been using for several things now, not just software\n              development, and I think is a great tool to accomplish stuff.\n            </span>\n          </div>\n        </li>\n        <li>\n          <div class=\"collapsible-header valign-wrapper\">\n            <i class=\"mdi mdi-visualstudio\"></i>Development Course</div>\n          <div class=\"collapsible-body\">\n            <strong>\n              .NET, C#, ASP for development and MS SQL Server for database\n            </strong>\n            <br>\n            <span>\n              I got a job at a company called SCI Sur américa. In this company I started studying all the technologies of the .NET framework.\n            </span>\n          </div>\n        </li>\n        <li>\n          <div class=\"collapsible-header valign-wrapper\">\n            <i class=\"mdi mdi-angular\"></i>Development Course</div>\n          <div class=\"collapsible-body\">\n            <strong>\n              Angular\n            </strong>\n            <br>\n            <span>\n              I've always liked the front-end work, and I started studying Angular just to be a more competitive web developer.\n            </span>\n            <br>\n            <br>\n          </div>\n        </li>\n\n        <li>\n          <div class=\"collapsible-header valign-wrapper\">\n            <i class=\"mdi mdi-link-variant\"></i>Blockchain</div>\n          <div class=\"collapsible-body\">\n            <br>\n            <span>\n              Having conversations with my friends we started talking about the blockchain, and right now we're studying everything related\n              to it, solidity, Web3.js, Ethereum, how to deploy nodes on AWS and much, much more.\n              <br><br>\n              Also, we started a partnership with a very criptocurrencies enthusiast, who is also very skilled in marketing, and has got a couple of huge projects for us.\n            </span>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/studies/studies.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/about/studies/studies.component.ts ***!
  \***************************************************************/
/*! exports provided: StudiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudiesComponent", function() { return StudiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudiesComponent = /** @class */ (function () {
    function StudiesComponent() {
    }
    StudiesComponent.prototype.ngOnInit = function () {
    };
    StudiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-studies',
            template: __webpack_require__(/*! ./studies.component.html */ "./src/app/components/about/studies/studies.component.html"),
            styles: [__webpack_require__(/*! ./studies.component.css */ "./src/app/components/about/studies/studies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudiesComponent);
    return StudiesComponent;
}());



/***/ }),

/***/ "./src/app/components/about/work/work.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/about/work/work.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/work/work.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/about/work/work.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col s12 m6 l4\">\n      <div class=\"card hoverable\">\n        <div class=\"card-image\">\n          <img src=\"assets/img/about/work/angular.jpg\">\n          <!-- <a class=\"btn-floating halfway-fab waves-effect waves-light red\">\n            <i class=\"mdi mdi-plus\"></i>\n          </a> -->\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title\">Angular S.P.A.</span>\n          <p> SPA (Single page applications) are the fastest type of applications right now, thanks to the structure this ones\n            offer. Angular itself is a framework that help us build PWAs (Progresive web apps) which are a type of applications\n            that behave better than andriod native applications.</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col s12 m6 l4\">\n      <div class=\"card hoverable\">\n        <div class=\"card-image\">\n          <img src=\"assets/img/about/work/RWD.jpg\">\n          <!-- <a class=\"btn-floating halfway-fab waves-effect waves-light red\">\n            <i class=\"mdi mdi-plus\"></i>\n          </a> -->\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title\">Responsive Web Design</span>\n          <p>I build applications always thinking on the responsiveness and the best experience to the user.</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col s12 m6 l4\">\n      <div class=\"card hoverable\">\n        <div class=\"card-image\">\n          <img src=\"assets/img/about/work/blockchain.jpg\">\n          <!-- <a class=\"btn-floating halfway-fab waves-effect waves-light red\">\n            <i class=\"mdi mdi-plus\"></i>\n          </a> -->\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title\">Decentralized Apps</span>\n          <p>Ever heard of the new decentralized aplications? Bitcoin, ethereum and super secure data bases? I can build those.</p>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"col s12 m6 l4\">\n      <div class=\"card hoverable\">\n        <div class=\"card-image\">\n          <img src=\"assets/img/about/work/MobileFirst.jpg\">\n          <!-- <a class=\"btn-floating halfway-fab waves-effect waves-light red\">\n            <i class=\"mdi mdi-plus\"></i>\n          </a> -->\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title\">Mobile First</span>\n          <p>It's very important to think on the mobile users first when building applications, taking into account that most\n            of our users will be coming from a mobile phone.</p>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"col s12 m6 l4\">\n      <div class=\"card hoverable\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img src=\"assets/img/about/work/WebApps.jpg\">\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title activator grey-text text-darken-4\">\n            Web Apps\n            <i class=\"mdi mdi-dots-vertical right\"></i>\n          </span>\n          <p>I have a lot of experience building web applications, using C#, PHP, SQL Server, MySQL, and front end technologies,\n            like HTML5, CSS3, JavaScript and Angular and front-end frameworks .</p>\n        </div>\n        <div class=\"card-reveal\">\n          <span class=\"card-title grey-text text-darken-4\">The technologies are\n            <i class=\"mdi mdi-close right\"></i>\n          </span>\n          <p class=\"center\">Back-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"PHP\">\n              <img src=\"assets/img/tecnologias/back/phpMin.jpg\" alt=\"PHP\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Laravel\">\n              <img src=\"assets/img/tecnologias/back/LaravelMin.jpg\" alt=\"Laravel\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"C#\">\n              <img src=\"assets/img/tecnologias/back/c-sharpMin.jpg\" alt=\"c-sharp\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            </div>\n            <p class=\"center\">Database</p>\n            <hr>\n            <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"MySQL\">\n              <img src=\"assets/img/tecnologias/back/MySQLMin.jpg\" alt=\"MySQL\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"SQL\">\n              <img src=\"assets/img/tecnologias/back/sqlMin.jpg\" alt=\"SQL\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n          <p class=\"center\">Front-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"HTML5\">\n              <img src=\"assets/img/tecnologias/front/html5Min.jpg\" alt=\"HTML5\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"CSS3\">\n              <img src=\"assets/img/tecnologias/front/css3Min.jpg\" alt=\"CSS3\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"JavaScript\">\n              <img src=\"assets/img/tecnologias/front/jsMin.jpg\" alt=\"JavaScript\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"jQuery\">\n              <img src=\"assets/img/tecnologias/front/jQueryMin.jpg\" alt=\"jQuery\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n          <p class=\"center\">Responsive web apps</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Bootstrap\">\n              <img src=\"assets/img/tecnologias/front/BSMin.jpg\" alt=\"Bootstrap\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Materialize\">\n              <img src=\"assets/img/tecnologias/front/materializeMin.jpg\" alt=\"Materialize\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n          <p class=\"center\">Progresive web apps</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Angular\">\n              <img src=\"assets/img/tecnologias/front/AngularMin.jpg\" alt=\"Angular\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/work/work.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/about/work/work.component.ts ***!
  \*********************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/components/about/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/components/about/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col l6 s12\">\n      <h5 class=\"white-text\">Want to contact me? </h5>\n      <p class=\"grey-text text-lighten-4\"> You can do so through my social networks, I speak English and Spanish fluently, so, don't hold back.</p>\n    </div>\n    <div class=\"col l4 offset-l2 s12\">\n      <h5 class=\"white-text\">Social Networks</h5>\n      <ul class=\"d-flex-between\">\n        <li><a class=\"grey-text text-lighten-3 tooltipped\" data-position=\"top\" data-tooltip=\"Facebook\" target=\"_blanck\" href=\"https://www.facebook.com/luis.sandoval.457\"> <i class=\"mdi mdi-facebook fiftyPx\"></i> </a></li>\n        <li><a class=\"grey-text text-lighten-3 tooltipped\" data-position=\"top\" data-tooltip=\"linkedin\" target=\"_blanck\" href=\"https://www.linkedin.com/in/luis-g-sandoval/\"> <i class=\"mdi mdi-linkedin fiftyPx\"></i></a></li>\n        <li><a class=\"grey-text text-lighten-3 tooltipped\" data-position=\"top\" data-tooltip=\"github\" target=\"_blanck\" href=\"https://github.com/LuisGSandoval\"> <i class=\"mdi mdi-github-circle fiftyPx\"></i></a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"footer-copyright\">\n  <div class=\"container center\">\n  <span class=\"grey-text text-lighten-4\">LuisGSandoval © {{ currentTime }} All Rights Reserved</span>\n  <!-- <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.currentTime = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider\">\n  <ul class=\"slides\">\n    <li>\n      <img src=\"./assets/img/tecnologias/blockchain/cover-blockchain.jpeg\">\n      <div class=\"caption left-align\">\n        <h3>Blockchain developer</h3>\n        <h5 class=\"light grey-text text-lighten-3\">At your service.</h5>\n      </div>\n    </li>\n\n    <li>\n      <img src=\"./assets/img/tecnologias/blockchain/cover-blockchain2.jpeg\">\n      <div class=\"caption center-align\">\n        <h3>Let's build a dapp</h3>\n        <h5 class=\"light grey-text text-lighten-3\">decentralized app according to your needs.</h5>\n      </div>\n    </li>\n\n    <li>\n      <img src=\"./assets/img/tecnologias/blockchain/spa-pwa.jpeg\">\n      <div class=\"caption left-align\">\n        <h3 class=\"black-text\">SPA & PWA </h3>\n        <h5 class=\"light black-text\">Progressive web apps. <br> Single page applicatios.</h5>\n      </div>\n    </li>\n  </ul>\n</div>\n\n\n\n\n<div class=\"container\">\n    <div class=\"row\">\n      <div *ngIf=\"tecnologiesBlockchain\">\n        <div *ngFor=\"let bchain of tecnologiesBlockchain\">\n          <div class=\"col s3 m2 offset-m1 center\">\n  \n            <img src=\"./assets/img/tecnologias/blockchain/{{bchain.img}}\" alt=\"{{bchain.name}}\" class=\"z-depth-2 bor-ra-10 mt-2 hoverable\">\n            <br>\n            <span>{{bchain.name}}</span>\n  \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n<div class=\"section white\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s12 center\">\n        <img src=\"assets/img/LuisGSandoval.jpeg\" class=\"bor-ra-10 z-depth-2\" width=\"150\" height=\"150\">\n      </div>\n      <div class=\"col s12\">\n        <h2 class=\"header\">Hi! How's it going?</h2>\n      </div>\n      <div class=\"col s12\">\n        <p class=\"grey-text text-darken-3 lighten-3\">\n          My name is Luis Sandoval and I am happy to be a software developer.\n          <br>\n          <br> I've solved several real life problems with software using awesome technologies that are available\n          nowadays.\n          <br> The past year, I worked with big companies, helping them build great applications and this year, I want\n          to\n          <strong> help you </strong> creating yours.\n        </p>\n      </div>\n\n\n\n      <div *ngIf=\"technologiesBack\">\n        <div *ngFor=\"let backTech of technologiesBack\">\n          <div class=\"col s4 m2 center\">\n\n            <img src=\"./assets/img/tecnologias/back/{{backTech.img}}\" alt=\"{{backTech.name}}\" class=\"z-depth-2 bor-ra-10 mt-2 hoverable\">\n            <br>\n            <span>{{backTech.name}}</span>\n\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"technologiesFront\">\n        <div *ngFor=\"let frontTech of technologiesFront\">\n          <div class=\"col s4 m2 center\">\n            <img src=\"./assets/img/tecnologias/front/{{frontTech.img}}\" alt=\"{{frontTech.name}}\" class=\"z-depth-2 bor-ra-10 mt-2 hoverable\">\n            <br>\n            <span>{{frontTech.name}}</span>\n          </div>\n        </div>\n      </div>\n\n\n\n\n    </div>\n  </div>\n</div>\n\n\n<div class=\"parallax-container\">\n  <div class=\"parallax\" id=\"parallaxOne\">\n    <img src=\"assets/img/homeOne.jpeg\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.technologiesBack = [
            {
                img: "netCoreMin.png",
                name: "DotNet core"
            },
            {
                img: "c-sharpMin.jpg",
                name: "C-Sharp C#"
            },
            {
                img: "LaravelMin.jpg",
                name: "Laravel"
            },
            {
                img: "phpMin.jpg",
                name: "PHP"
            },
            {
                img: "MySQLMin.jpg",
                name: "MySQL"
            },
            {
                img: "sqlMin.jpg",
                name: "SQL Server"
            }
        ];
        this.technologiesFront = [
            {
                img: "AngularMin.jpg",
                name: "Angular"
            },
            {
                img: "reactJsMin.png",
                name: "React.js"
            },
            {
                img: "BSMin.jpg",
                name: "Bootstrap"
            },
            {
                img: "materializeMin.jpg",
                name: "materialize"
            },
            {
                img: "jsMin.jpg",
                name: "Javascript"
            },
            {
                img: "css3Min.jpg",
                name: "CSS"
            },
            {
                img: "html5Min.jpg",
                name: "HTML"
            }
        ];
        this.tecnologiesBlockchain = [
            {
                img: 'ethereum.jpg',
                name: 'ethereum'
            },
            {
                img: 'solidity.jpg',
                name: 'solidity'
            },
            {
                img: 'web3.jpg',
                name: 'web3'
            },
            {
                img: 'metamask.jpg',
                name: 'metamask'
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var sliderOptions = {};
        var sliderElems = document.querySelectorAll('.slider');
        var sliderInstances = M.Slider.init(sliderElems, sliderOptions);
        var parallaxOptions = new Object();
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems, parallaxOptions);
        var tooltipOptions = new Object();
        var toolElems = document.querySelectorAll('.tooltipped');
        var toolInstances = M.Tooltip.init(toolElems, tooltipOptions);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n\n  <nav class=\" blue-grey darken-3\">\n    <div class=\"nav-wrapper\">\n      <a href=\"#!\" class=\"brand-logo ml-1 light\">\n        <img src=\"assets\\img\\logotype.png\" class=\"hide-on-small-only\" width=\"30\" height=\"30\"> LuisGSandoval\n      </a>\n      <a href=\"#\" data-target=\"mobile-demo\" class=\"sidenav-trigger\">\n        <i class=\"mdi mdi-menu\"></i>\n      </a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li>\n          <a routerLink=\"/\">Home</a>\n        </li>\n        <li>\n          <a routerLink=\"/projects\">Projects</a>\n        </li>\n        <li>\n          <a routerLink=\"/about\">About</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<ul class=\"sidenav\" id=\"mobile-demo\">\n\n  <li>\n    <div class=\"user-view\">\n      <div class=\"background\">\n        <img src=\"assets/img/sidenav.jpeg\">\n      </div>\n      <a href=\"#user\">\n        <img class=\"circle\" src=\"assets/img/LuisGSandoval2.png\">\n      </a>\n      <a href=\"#name\">\n        <span class=\"white-text name\">Luis Sandoval</span>\n      </a>\n      <a href=\"#email\">\n        <span class=\"white-text email\">software.solutions.457@outlook.com</span>\n      </a>\n      <a href=\"#tel\">\n        <span class=\"white-text email\">+573118216617</span>\n      </a>\n    </div>\n  </li>\n\n\n  <li class=\"sidenav-close\">\n    <a class=\"waves-effect\" routerLink=\"/\">Home</a>\n  </li>\n  <li class=\"sidenav-close\">\n    <a class=\"waves-effect\" routerLink=\"/projects\">Projects</a>\n  </li>\n  <li class=\"sidenav-close\">\n    <a class=\"waves-effect\" routerLink=\"/about\">About</a>\n  </li>\n\n  <li>\n    <div class=\"divider\"></div>\n  </li>\n  <li>\n    <a class=\"subheader\">Contact me</a>\n  </li>\n  <li class=\"\">\n    <a href=\"mailto:software.solutions.457@gmail.com\" class=\"waves-effect waves-light btn-small blue\">\n      <i class=\"mdi mdi-email left white-text\"></i>Email me\n    </a>\n    <a href=\"tel:+573118216617\" class=\"waves-effect waves-light btn-small green\">\n      <i class=\"mdi mdi-phone white-text left\"></i>Call me\n    </a>\n  </li>\n  <li>\n    <div class=\"divider\"></div>\n  </li>\n  <li>\n    <a class=\"subheader\">Social networks</a>\n  </li>\n  <li>\n    <a class=\"grey-text text-lighten-3\" target=\"_blanck\" href=\"https://www.facebook.com/luis.sandoval.457\">\n      <i class=\"mdi mdi-facebook thirdtyPx\"></i> <span class=\"black-text\"> Facebook </span>\n    </a>\n  </li>\n  <li>\n    <a class=\"grey-text text-lighten-3\" target=\"_blanck\" href=\"https://www.linkedin.com/in/luis-g-sandoval/\">\n      <i class=\"mdi mdi-linkedin thirdtyPx\"></i> <span class=\"black-text\"> LinkedIn </span>\n    </a>\n  </li>\n  <li>\n    <a class=\"grey-text text-lighten-3\"  target=\"_blanck\" href=\"https://github.com/LuisGSandoval\">\n      <i class=\"mdi mdi-github-circle thirdtyPx\"></i> <span class=\"black-text\"> GitHub </span>\n    </a>\n  </li>\n\n</ul>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navOptions = new Object();
        var sideNavElems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(sideNavElems, navOptions);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/projects/projects.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h2 class=\"raleway\">Experience</h2>\n  <hr>\n  <div class=\"row\">\n\n    <!-- SwiftCOUNT -->\n    <div class=\"col s12 m6\">\n      <div class=\"card hoverable\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img src=\"assets/img/proyectos/experiencia/experiencia1Min.jpg\">\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title activator grey-text text-darken-4\">\n            BAS Technologies\n            <i class=\"mdi mdi-dots-vertical right\"></i>\n          </span>\n          <!-- <p>\n                    <a href=\"#\">This is a link</a>\n                  </p> -->\n        </div>\n        <div class=\"card-reveal\">\n          <span class=\"card-title grey-text text-darken-4\">Technologies Used\n            <i class=\"mdi mdi-close right\"></i>\n          </span>\n          <p>Back-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"PHP\">\n              <img src=\"assets/img/tecnologias/back/phpMin.jpg\" alt=\"PHP\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Laravel\">\n              <img src=\"assets/img/tecnologias/back/LaravelMin.jpg\" alt=\"Laravel\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"MySQL\">\n              <img src=\"assets/img/tecnologias/back/MySQLMin.jpg\" alt=\"MySQL\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n          <p>Front-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"HTML5\">\n              <img src=\"assets/img/tecnologias/front/html5Min.jpg\" alt=\"HTML5\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"CSS3\">\n              <img src=\"assets/img/tecnologias/front/css3Min.jpg\" alt=\"CSS3\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"JavaScript\">\n              <img src=\"assets/img/tecnologias/front/jsMin.jpg\" alt=\"JavaScript\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"jQuery\">\n              <img src=\"assets/img/tecnologias/front/jQueryMin.jpg\" alt=\"jQuery\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Bootstrap\">\n              <img src=\"assets/img/tecnologias/front/BSMin.jpg\" alt=\"Bootstrap\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- SCI Sur América -->\n    <div class=\"col s12 m6\">\n      <div class=\"card hoverable\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img src=\"assets/img/proyectos/experiencia/experiencia2Min.png\">\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title activator grey-text text-darken-4\">\n            SCI Sur América\n            <i class=\"mdi mdi-dots-vertical right\"></i>\n          </span>\n          <!-- <p>\n                  <a href=\"#\">This is a link</a>\n                </p> -->\n        </div>\n        <div class=\"card-reveal\">\n          <span class=\"card-title grey-text text-darken-4\">Technologies Used\n            <i class=\"mdi mdi-close right\"></i>\n          </span>\n          <p>Back-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"C#\">\n              <img src=\"assets/img/tecnologias/back/c-sharpMin.jpg\" alt=\"C#\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"MS SQL Server\">\n              <img src=\"assets/img/tecnologias/back/sqlMin.jpg\" alt=\"MS SQL Server\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n          <p>Front-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"HTML5\">\n              <img src=\"assets/img/tecnologias/front/html5Min.jpg\" alt=\"HTML5\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"CSS3\">\n              <img src=\"assets/img/tecnologias/front/css3Min.jpg\" alt=\"CSS3\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"JavaScript\">\n              <img src=\"assets/img/tecnologias/front/jsMin.jpg\" alt=\"JavaScript\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Materilizecss\">\n              <img src=\"assets/img/tecnologias/front/materializeMin.jpg\" alt=\"Materilizecss\" width=\"50\" height=\"50\"\n                class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n\n\n\n  <h2 class=\"raleway\">Projects</h2>\n  <hr>\n  <div class=\"row\">\n    <!-- Evolucionesmedicas.com -->\n    <div class=\"col s12 m6\">\n      <div class=\"card hoverable\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img src=\"assets/img/proyectos/proyectos/proyecto2Min.jpg\">\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title activator grey-text text-darken-4\">\n            Evoluciones medicas\n            <i class=\"mdi mdi-dots-vertical right\"></i>\n          </span>\n          <!-- <p>\n              <a href=\"#\">This is a link</a>\n            </p> -->\n        </div>\n        <div class=\"card-reveal\">\n          <span class=\"card-title grey-text text-darken-4\">Technologies Used\n            <i class=\"mdi mdi-close right\"></i>\n          </span>\n          <p>Back-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Firebase\">\n              <img src=\"assets/img/tecnologias/back/firebaseMin.jpg\" alt=\"Firebase\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n          <p>Front-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"HTML5\">\n              <img src=\"assets/img/tecnologias/front/html5Min.jpg\" alt=\"HTML5\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"CSS3\">\n              <img src=\"assets/img/tecnologias/front/css3Min.jpg\" alt=\"CSS3\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"JavaScript\">\n              <img src=\"assets/img/tecnologias/front/jsMin.jpg\" alt=\"JavaScript\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Materializecss\">\n              <img src=\"assets/img/tecnologias/front/materializeMin.jpg\" alt=\"\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Angular\">\n              <img src=\"assets/img/tecnologias/front/AngularMin.jpg\" alt=\"\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n       <!-- LuisGSandoval ver 4 -->\n       <div class=\"col s12 m6\">\n        <div class=\"card hoverable\">\n          <div class=\"card-image waves-effect waves-block waves-light\">\n            <img src=\"assets/img/proyectos/practicas/lgsv4Min.jpg\">\n          </div>\n          <div class=\"card-content\">\n            <span class=\"card-title activator grey-text text-darken-4\">\n              LuisGSandoval ver 4\n              <i class=\"mdi mdi-dots-vertical right\"></i>\n            </span>\n            <!-- <p>\n                  <a href=\"#\">This is a link</a>\n                </p> -->\n          </div>\n          <div class=\"card-reveal\">\n            <span class=\"card-title grey-text text-darken-4\">Technologies Used\n              <i class=\"mdi mdi-close right\"></i>\n            </span>\n            <p>Back-end</p>\n            <hr>\n            <div class=\"d-flex-around\">\n              <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"PHP\">\n                <img src=\"assets/img/tecnologias/back/phpMin.jpg\" alt=\"PHP\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n              </a>\n              <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Laravel\">\n                <img src=\"assets/img/tecnologias/back/LaravelMin.jpg\" alt=\"Laravel\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n              </a>\n            </div>\n            <p>Front-end</p>\n            <hr>\n            <div class=\"d-flex-around\">\n              <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"HTML5\">\n                <img src=\"assets/img/tecnologias/front/html5Min.jpg\" alt=\"HTML5\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n              </a>\n              <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"CSS3\">\n                <img src=\"assets/img/tecnologias/front/css3Min.jpg\" alt=\"CSS3\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n              </a>\n              <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"JavaScript\">\n                <img src=\"assets/img/tecnologias/front/jsMin.jpg\" alt=\"JavaScript\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n              </a>\n              <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"jQuery\">\n                <img src=\"assets/img/tecnologias/front/jQueryMin.jpg\" alt=\"jQuery\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n              </a>\n              <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Materilizecss\">\n                <img src=\"assets/img/tecnologias/front/BSMin.jpg\" alt=\"Materilizecss\" width=\"50\" height=\"50\"\n                  class=\"hoverable bor-ra-7\">\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n    <!-- Graduatio project -->\n    <div class=\"col s12 m6\">\n      <div class=\"card hoverable\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img class=\"activator\" src=\"assets/img/proyectos/proyectos/proyecto1Min.png\">\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title activator grey-text text-darken-4\">Graduation Project\n            <i class=\"mdi mdi-dots-vertical right\"></i>\n          </span>\n          <!-- <p>\n            <a href=\"#\">This is a link</a>\n          </p> -->\n        </div>\n        <div class=\"card-reveal\">\n          <span class=\"card-title grey-text text-darken-4\">Technologies Used\n            <i class=\"mdi mdi-close right\"></i>\n          </span>\n          <p>Back-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Firebase\">\n              <img src=\"assets/img/tecnologias/back/firebaseMin.jpg\" alt=\"Firebase\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n          <p>Front-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"HTML5\">\n              <img src=\"assets/img/tecnologias/front/html5Min.jpg\" alt=\"HTML5\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"CSS3\">\n              <img src=\"assets/img/tecnologias/front/css3Min.jpg\" alt=\"CSS3\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"JavaScript\">\n              <img src=\"assets/img/tecnologias/front/jsMin.jpg\" alt=\"JavaScript\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"jQuery\">\n              <img src=\"assets/img/tecnologias/front/jQueryMin.jpg\" alt=\"jQuery\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Bootstrap\">\n              <img src=\"assets/img/tecnologias/front/BSMin.jpg\" alt=\"Bootstrap\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n \n  </div>\n\n\n\n\n  <h2 class=\"raleway\">Practices</h2>\n  <hr>\n  <div class=\"row\">\n\n\n    <!-- Practice Bootstrap 4 and Google Maps API -->\n    <div class=\"col s12 m6\">\n      <div class=\"card hoverable\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img src=\"assets/img/proyectos/practicas/practicaBootstrpGMAPSMin.png\">\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title activator grey-text text-darken-4\">\n            Bootstrap 4 and Google Maps API\n            <i class=\"mdi mdi-dots-vertical right\"></i>\n          </span>\n          <!-- <p>\n            <a href=\"#\">This is a link</a>\n          </p> -->\n        </div>\n        <div class=\"card-reveal\">\n          <span class=\"card-title grey-text text-darken-4\">Technologies Used\n            <i class=\"mdi mdi-close right\"></i>\n          </span>\n          <p>Back-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Google Maps API\">\n              <img src=\"assets/img/tecnologias/back/GoogleMapsMin.jpg\" alt=\"Google Maps API\" width=\"50\" height=\"50\"\n                class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n          <p>Front-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"HTML5\">\n              <img src=\"assets/img/tecnologias/front/html5Min.jpg\" alt=\"HTML5\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"CSS3\">\n              <img src=\"assets/img/tecnologias/front/css3Min.jpg\" alt=\"CSS3\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"JavaScript\">\n              <img src=\"assets/img/tecnologias/front/jsMin.jpg\" alt=\"JavaScript\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Bootstrap 4\">\n              <img src=\"assets/img/tecnologias/front/BSMin.jpg\" alt=\"Bootstrap\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <!-- LuisGSandoval ver 3 -->\n    <div class=\"col s12 m6\">\n      <div class=\"card hoverable\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img src=\"assets/img/proyectos/practicas/lgsv3Min.png\">\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title activator grey-text text-darken-4\">\n            LuisGSandoval ver 3\n            <i class=\"mdi mdi-dots-vertical right\"></i>\n          </span>\n          <!-- <p>\n            <a href=\"#\">This is a link</a>\n          </p> -->\n        </div>\n        <div class=\"card-reveal\">\n          <span class=\"card-title grey-text text-darken-4\">Technologies Used\n            <i class=\"mdi mdi-close right\"></i>\n          </span>\n          <p>Back-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"PHP\">\n              <img src=\"assets/img/tecnologias/back/phpMin.jpg\" alt=\"PHP\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n          <p>Front-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"HTML5\">\n              <img src=\"assets/img/tecnologias/front/html5Min.jpg\" alt=\"HTML5\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"CSS3\">\n              <img src=\"assets/img/tecnologias/front/css3Min.jpg\" alt=\"CSS3\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"JavaScript\">\n              <img src=\"assets/img/tecnologias/front/jsMin.jpg\" alt=\"JavaScript\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"jQuery\">\n              <img src=\"assets/img/tecnologias/front/jQueryMin.jpg\" alt=\"jQuery\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"Materilizecss\">\n              <img src=\"assets/img/tecnologias/front/materializeMin.jpg\" alt=\"Materilizecss\" width=\"50\" height=\"50\"\n                class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- LuisGSandoval ver 2 -->\n    <div class=\"col s12 m6\">\n      <div class=\"card hoverable\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img src=\"assets/img/proyectos/practicas/lgsv2Min.png\">\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title activator grey-text text-darken-4\">\n            LuisGSandoval ver 2\n            <i class=\"mdi mdi-dots-vertical right\"></i>\n          </span>\n          <!-- <p>\n            <a href=\"#\">This is a link</a>\n          </p> -->\n        </div>\n        <div class=\"card-reveal\">\n          <span class=\"card-title grey-text text-darken-4\">Technologies Used\n            <i class=\"mdi mdi-close right\"></i>\n          </span>\n          <p>Back-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"PHP\">\n              <img src=\"assets/img/tecnologias/back/phpMin.jpg\" alt=\"PHP\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n          <p>Front-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"HTML5\">\n              <img src=\"assets/img/tecnologias/front/html5Min.jpg\" alt=\"HTML5\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"CSS3\">\n              <img src=\"assets/img/tecnologias/front/css3Min.jpg\" alt=\"CSS3\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- primer website en HTML y CSS -->\n    <div class=\"col s12 m6\">\n      <div class=\"card hoverable\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img src=\"assets/img/proyectos/practicas/practicaHTMLCSSMin.png\">\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title activator grey-text text-darken-4\">\n            First Website\n            <i class=\"mdi mdi-dots-vertical right\"></i>\n          </span>\n          <!-- <p>\n            <a href=\"#\">This is a link</a>\n          </p> -->\n        </div>\n        <div class=\"card-reveal\">\n          <span class=\"card-title grey-text text-darken-4\">Technologies Used\n            <i class=\"mdi mdi-close right\"></i>\n          </span>\n          <p>Front-end</p>\n          <hr>\n          <div class=\"d-flex-around\">\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"HTML5\">\n              <img src=\"assets/img/tecnologias/front/html5Min.jpg\" alt=\"HTML5\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n            <a class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"CSS3\">\n              <img src=\"assets/img/tecnologias/front/css3Min.jpg\" alt=\"CSS3\" width=\"50\" height=\"50\" class=\"hoverable bor-ra-7\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var tooltipOptions = new Object();
        var tooltipElems = document.querySelectorAll('.tooltipped');
        var instances = M.Tooltip.init(tooltipElems, tooltipOptions);
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/luis/LUIS_Software/Real Projects/personal web site/luisgsandoval.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map