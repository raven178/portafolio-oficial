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
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ "./src/app/components/pages/contact/contact.component.ts");
/* harmony import */ var _components_pages_resumen_resumen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/resumen/resumen.component */ "./src/app/components/pages/resumen/resumen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//componentes



var routes = [
    { path: 'home', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'contacto', component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'resumen', component: _components_pages_resumen_resumen_component__WEBPACK_IMPORTED_MODULE_4__["ResumenComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { 'useHash': true })],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navba-component></navba-component>\n<section class=\"ae-container-fluid rk-main\">\n\t<router-outlet></router-outlet>\n</section>\n<app-footer></app-footer>\n\n\n"

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
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ "./src/app/components/pages/contact/contact.component.ts");
/* harmony import */ var _components_pages_resumen_resumen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/resumen/resumen.component */ "./src/app/components/pages/resumen/resumen.component.ts");
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
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _components_pages_resumen_resumen_component__WEBPACK_IMPORTED_MODULE_8__["ResumenComponent"]
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

/***/ "./src/app/components/pages/contact/contact.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pages/contact/contact.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section py-5\">\n        <div class=\"container\">\n            <div class=\"row\">\n\t\t        <div class=\"contact-intro col-lg-8 mx-lg-auto mb-5 text-center\" >\n\t\t\t        \n\t\t\t        <img class=\"profile-large d-inline-block mx-auto rounded-circle mb-3\" src=\"assets/images/profile.jpg\" alt=\"Perfil\" >\n\t\t\t        \n\t\t\t        <div class=\"speech-bubble bg-white p-4 p-lg-5 shadow-sm\">\n\t\t\t\t        <p class=\"text-left mb-3\">Actualmente estoy tomando trabajos independientes. Si estás interesado en contratarme para su proyecto, utilice el siguiente formulario para ponerse en contacto. ¿Quieres saber cómo trabajo y qué puedo ofrecer? Revisa mi <a [routerLink]=\"['/proyectos']\">portafolio de proyectos</a> y/o mi <a [routerLink]=\"['/resumen']\">resumen .</a></p>\n\t\t\t\t        <h6 class=\"font-weight-bold text-center mb-3\"> También me puedes encontrar en las siguientes redes sociales.</h6>\n\t\t\t\t        \n\t\t\t\t        <ul class=\"social-list-color list-inline mb-0\">\n\t\t\t\t            \n\t\t\t                <li class=\"list-inline-item mb-3\"><a target=\"_blank\" class=\"linkedin\" [href]=\"'https://www.linkedin.com/in/jos%C3%A9-manuel-p%C3%A9rez-42446b127/'\"><i class=\"fab fa-linkedin-in fa-fw\"></i></a></li>\n\n\t\t\t                <li class=\"list-inline-item mb-3\"><a target=\"_blank\" class=\"github\" [href]=\"'https://github.com/raven178/'\"><i class=\"fab fa-github-alt fa-fw\"></i></a></li>\n\n\t\t\t                <li class=\"list-inline-item mb-3\"><a target=\"_blank\" class=\"stack-overflow\" [href]=\"'https://es.stackoverflow.com/users/43380/manueel-perezz'\"><i class=\"fab fa-stack-overflow fa-fw\"></i></a></li>\n\t\t\t                \n\t\t\t                <li class=\"list-inline-item mb-3\"><a target=\"_blank\" class=\"facebook\" [href]=\"'https://www.facebook.com/raven1789'\"><i class=\"fab fa-facebook-f fa-fw\"></i></a></li>\n\t\t\t                \n\t\t\t                <li class=\"list-inline-item\"><a target=\"_blank\" class=\"instagram\" [href]=\"'https://www.instagram.com/manueelperezz/?hl=es-la'\"><i class=\"fab fa-instagram fa-fw\"></i></a></li>\n\t\t\t            </ul><!--//social-list-->\n\t\t\t        </div>\n\t\t\t        \n\t\t        </div><!--//contact-intro-->\n\t\t        <form id=\"contact-form\" class=\"contact-form col-lg-8 mx-lg-auto\" method=\"post\" action=\"#\">\n\t\t\t        <h3 class=\"text-center mb-3\">Contáctame</h3>\n\t\t\t        <p class=\"text-center\">Ingresa tus datos y muy pronto me pondré en contacto contigo.</p>\n\t\t\t        <div class=\"form-row\">                                                           \n\t\t                <div class=\"form-group col-md-6\">\n\t\t                    <label class=\"sr-only\" for=\"cname\">Nombre</label>\n\t\t                    <input type=\"text\" class=\"form-control\" id=\"cname\" name=\"name\" placeholder=\"Nombre \" minlength=\"2\" required=\"\" aria-required=\"true\">\n\t\t                </div>                    \n\t\t                <div class=\"form-group col-md-6\">\n\t\t                    <label class=\"sr-only\" for=\"cemail\">Correo electrónico</label>\n\t\t                    <input type=\"email\" class=\"form-control\" id=\"cemail\" name=\"email\" placeholder=\"Correo electrónico\" required=\"\" aria-required=\"true\">\n\t\t                </div>\n\t\t                <div class=\"form-group col-12\">\n\t\t                    <label class=\"sr-only\" for=\"cmessage\">Comentarios</label>\n\t\t                    <textarea class=\"form-control\" id=\"cmessage\" name=\"message\" placeholder=\"Ingrese su mensaje\" rows=\"10\" required=\"\" aria-required=\"true\"></textarea>\n\t\t                </div>\n\t\t                 <div class=\"form-group col-12\">\n\t\t                    <button type=\"submit\" class=\"btn btn-block btn-primary py-2\">Envíar</button>\n\t\t                </div>                           \n\t\t            </div><!--//form-row-->\n\t\t        </form>\n\t\t        \n            </div><!--//row-->\n        </div><!--//container-->\n    </section><!--//section-->"

/***/ }),

/***/ "./src/app/components/pages/contact/contact.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/home/home.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\n   border-radius: 50%!important;\n   border: 5px solid #fff !important;\n}\n\n.skills-block-inner:hover {\n    box-shadow: 1px 3px 12px 5px #dbdbdb !important;\n}\n\n.skills-block-inner {\ntransition: all 0.5s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLDRCQUE0QjtHQUM1QixpQ0FBaUM7QUFDcEM7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7O0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW1hZ2Uge1xuICAgYm9yZGVyLXJhZGl1czogNTAlIWltcG9ydGFudDtcbiAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcbn1cblxuLnNraWxscy1ibG9jay1pbm5lcjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMXB4IDNweCAxMnB4IDVweCAjZGJkYmRiICFpbXBvcnRhbnQ7XG59XG4uc2tpbGxzLWJsb2NrLWlubmVyIHtcbnRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-intro theme-bg-primary text-white py-5\">\n\t<div class=\"container\">\n\t\t<div class=\"profile-teaser media flex-column flex-md-row\">\n\t\t\t<img class=\"profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto\" src=\"assets/images/profile.jpg\" alt=\"\">\n\t\t\t<div class=\"media-body text-center text-md-left\">\n\t\t\t\t<div class=\"lead\">Hola, mi nombre es </div>\n\t\t\t\t<h2 class=\"mt-0 display-4 font-weight-bold\">José Manuel Pérez</h2>\n\t\t\t\t<div class=\"bio mb-3\">Soy un desarrollador full-stack especializado en desarrollo frontend y backend para aplicaciones web escalables desde básicas hasta complejas.\n\n\t\t\t\t\t¿Quieres saber cómo puedo ayudarte en tu proyecto? Mira mis  <a class=\"link-on-bg\" href=\"projects.html\"> proyectos </a> y/o <a class=\"link-on-bg\" href=\"resume.html\">resumen.</a>\n\t\t\t\t</div><!--//bio-->\n\t\t\t\t<a class=\"theme-btn-on-bg btn font-weight-bold theme-btn-cta\" [routerLink]=\"['/contacto']\">CONTACTO</a>\n\n\t\t\t</div><!--//media-body-->\n\t\t</div><!--//profile-teaser-->\n\n\t</div><!--//container-->\n</div><!--//header-intro-->\n\n<section class=\"skills-section section py-5\">\n\t<div class=\"container\">\n\t\t<h3 class=\"section-title font-weight-bold text-center mb-3\">Resumen de habilidades</h3>\n\t\t<div class=\"section-intro mx-auto text-center mb-5 text-secondary\">Tengo más de 5 años de experiencia en la creación de aplicaciones web para clientes de todo el mundo. A continuación, se incluye un resumen rápido de mis principales habilidades técnicas y herramientas que uso. ¿Quieres saber más sobre mi experiencia? <a [routerLink]=\"['/resumen']\">Consulta mi resumen</a>.</div>\n\n\t\t<div class=\"skills-blocks mx-auto pt-5\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0\">\n\t\t\t\t\t<div class=\"skills-block-inner bg-white shadow-sm py-4 px-5 position-relative\">\n\t\t\t\t\t\t<h4 class=\"skills-cat text-center mb-3 mt-5\">Frontend</h4>\n\t\t\t\t\t\t<div class=\"skills-icon-holder position-absolute d-inline-block rounded-circle text-center\">\n\t\t\t\t\t\t\t<img class=\"skills-icon\" src=\"assets/images/frontend-icon.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"skills-list list-unstyled text-secondary\">\n\t\t\t\t\t\t\t<li class=\"mb-2\"><i class=\"fas fa-check mr-2 text-primary\"></i>Vue js / Angular / Ionic </li>\n\t\t\t\t\t\t\t<li class=\"mb-2\"><i class=\"fas fa-check mr-2 text-primary\"></i>Javascript / Typescript / Jquery</li>\n\t\t\t\t\t\t\t<li class=\"mb-2\"><i class=\"fas fa-check mr-2 text-primary\"></i>Bootstrap / Materialize</li>\n\t\t\t\t\t\t\t<li class=\"mb-2\"><i class=\"fas fa-check mr-2 text-primary\"></i>HTML / CSS </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div><!--//skills-block-inner-->\n\t\t\t\t</div><!--//skills-block-->\n\n\t\t\t\t<div class=\"skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0\">\n\t\t\t\t\t<div class=\"skills-block-inner bg-white shadow-sm py-4 px-5 position-relative\">\n\t\t\t\t\t\t<h4 class=\"skills-cat text-center mb-3 mt-5\">Backend</h4>\n\t\t\t\t\t\t<div class=\"skills-icon-holder position-absolute d-inline-block rounded-circle text-center\">\n\t\t\t\t\t\t\t<img class=\"skills-icon\" src=\"assets/images/backend-icon.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"skills-list list-unstyled text-secondary\">\n\t\t\t\t\t\t\t<li class=\"mb-2\"><i class=\"fas fa-check mr-2 text-primary\"></i>NodeJs / Express</li>\n\t\t\t\t\t\t\t<li class=\"mb-2\"><i class=\"fas fa-check mr-2 text-primary\"></i>PHP / Laravel / Slim</li>\n\t\t\t\t\t\t\t<li class=\"mb-2\"><i class=\"fas fa-check mr-2 text-primary\"></i> MySQL / Oracle / SQL Server</li>\n\t\t\t\t\t\t\t<li class=\"mb-2\"><i class=\"fas fa-check mr-2 text-primary\"></i>FireBase, MongoDB</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div><!--//skills-block-inner-->\n\t\t\t\t</div><!--//skills-block-->\n\n\t\t\t\t<div class=\"skills-block col-12 col-lg-4\">\n\t\t\t\t\t<div class=\"skills-block-inner bg-white shadow-sm py-4 px-5 position-relative\">\n\t\t\t\t\t\t<h4 class=\"skills-cat text-center mb-3 mt-5\">Otras</h4>\n\t\t\t\t\t\t<div class=\"skills-icon-holder position-absolute d-inline-block rounded-circle text-center\">\n\t\t\t\t\t\t\t<img class=\"skills-icon\" src=\"assets/images/other-skills-icon.svg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"skills-list list-unstyled text-secondary\">\n\t\t\t\t\t\t\t<li class=\"mb-2\"><i class=\"fas fa-check mr-2 text-primary\"></i> Apis Rest</li>\n\t\t\t\t\t\t\t<li class=\"mb-2\"><i class=\"fas fa-check mr-2 text-primary\"></i>Web Services (SOAP)</li>\n\t\t\t\t\t\t\t<li class=\"mb-2\"><i class=\"fas fa-check mr-2 text-primary\"></i>Apps móviles con Flutter</li>\n\n\t\t\t\t\t\t\t<li class=\"mb-2\"><i class=\"fas fa-check mr-2 text-primary\"></i> Git y Github</li>\n\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div><!--//skills-block-inner-->\n\t\t\t\t</div><!--//skills-block-->\n\n\t\t\t</div><!--//row-->\n\t\t</div>\n\t</div><!--//container-->\n</section><!--//skills-section-->\n\n<section class=\"section-featured-projects py-5\">\n\t<div class=\"container\">\n\t\t<h3 class=\"section-title font-weight-bold text-center mb-5\">Proyectos Destacados</h3>\n\n\t\t<div class=\"project-cards row mb-5\">\n\t\t\t<div class=\"col-12 col-lg-4\">\n\t\t\t\t<div class=\"card rounded-0 border-0 shadow-sm mb-5 mb-lg-0\">\n\t\t\t\t\t<div class=\"card-img-container position-relative\">\n\t\t\t\t\t\t<img class=\"card-img-top rounded-0 h-90\" src=\"assets/images/projects/project-1-thumb.jpg\" alt=\"S&P México\" >\n\t\t\t\t\t\t<div class=\"card-img-overlay overlay-logo text-center\">\n\t\t\t\t\t\t\t<div class=\"project-logo\"><img class=\"img-fluid w-50\" src=\"assets/images/logos/logo_S&P.png\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"card-img-overlay overlay-content text-left p-lg-4\" [href]=\"['https://solerpalau.mx/webQA/']\" target=\"_blank\">\n\t\t\t\t\t\t\t<h5 class=\"card-title font-weight-bold\">Página Oficial</h5>\n\t\t\t\t\t\t\t<!-- <p>Visitala  dado clic aquí </p> -->\n\t\t\t\t\t\t\t<!-- <p class=\"card-text\">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p> -->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body pb-0\">\n\t\t\t\t\t\t<h4 class=\"card-title text-truncate text-center mb-0\">\n\t\t\t\t\t\t\t<!-- <a href=\"project.html\"> </a> -->\n\t\t\t\t\t\t\tSoler & Palau México\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card-footer border-0 text-center bg-white pb-4\">\n\t\t\t\t\t\t<ul class=\"list-inline mb-0 mx-auto\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"badge badge-secondary badge-pill\">PHP</span></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"badge badge-secondary badge-pill\" >jQuery</span></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"badge badge-secondary badge-pill\">Oracle</span></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"badge badge-secondary badge-pill\">HTML / CSS</span></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div><!--//card-->\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-lg-4\">\n\t\t\t\t<div class=\"card rounded-0 border-0 shadow-sm mb-5 mb-lg-0\">\n\t\t\t\t\t<div class=\"card-img-container position-relative\">\n\t\t\t\t\t\t<img class=\"card-img-top rounded-0\" src=\"assets/images/projects/project-2-thumb.jpg\" alt=\"\">\n\t\t\t\t\t\t<div class=\"card-img-overlay overlay-logo text-center\">\n\t\t\t\t\t\t\t<div class=\"project-logo\"><img class=\"img-fluid w-50\" src=\"assets/images/logos/logo_ferrari.png\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"card-img-overlay overlay-content text-left p-lg-4\" \n\t\t\t\t\t\t[href]=\"['https://www.ferrariventilatori.mx/']\" \n\t\t\t\t\t\ttarget=\"_blank\">\n\t\t\t\t\t\t\t<h5 class=\"card-title font-weight-bold\">Página Oficial</h5>\n\t\t\t\t\t\t\t<!-- <p class=\"card-text\">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p> -->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body pb-0\">\n\t\t\t\t\t\t<h4 class=\"card-title text-truncate text-center mb-0\">\n\t\t\t\t\t\t\t<!-- <a href=\"project.html\"> </a> -->\n\t\t\t\t\t\t\tFerrari Ventilatori México\n\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card-footer border-0 text-center bg-white pb-4\">\n\t\t\t\t\t\t<ul class=\"list-inline mb-0 mx-auto\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"badge badge-secondary badge-pill\" >PHP</span></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"badge badge-secondary badge-pill\">jQuery</span></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"badge badge-secondary badge-pill\">MySQL</span></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"badge badge-secondary badge-pill\">HTML / CSS</span></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div><!--//card-->\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-lg-4\">\n\t\t\t\t<div class=\"card rounded-0 border-0 shadow-sm mb-5 mb-lg-0\">\n\t\t\t\t\t<div class=\"card-img-container position-relative\">\n\t\t\t\t\t\t<img class=\"card-img-top rounded-0\" src=\"assets/images/projects/project-3-thumb.jpg\" alt=\"\">\n\t\t\t\t\t\t<div class=\"card-img-overlay overlay-logo text-center\">\n\t\t\t\t\t\t\t<div class=\"project-logo\"><img class=\"img-fluid w-50\" src=\"assets/images/logos/logo_rake.png\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"card-img-overlay overlay-content text-left p-lg-4\" \n\t\t\t\t\t\t[href]=\"['https://rake.mx/webQA/']\"\n\t\t\t\t\t\ttarget=\"_blank\">\n\t\t\t\t\t\t\t<h5 class=\"card-title font-weight-bold\">Página Oficial</h5>\n\t\t\t\t\t\t\t<!-- <p class=\"card-text\">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p> -->\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body pb-0\">\n\t\t\t\t\t\t<h4 class=\"card-title text-truncate text-center mb-0\">\n\t\t\t\t\t\t\t<!-- <a href=\"project.html\"> </a> -->\n\t\t\t\t\t\t\tAgro Insumos Rake\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card-footer border-0 text-center bg-white pb-4\">\n\t\t\t\t\t\t<ul class=\"list-inline mb-0 mx-auto\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"badge badge-secondary badge-pill\">Vue js</span></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"badge badge-secondary badge-pill\" >FireBase</span></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"badge badge-secondary badge-pill\">HTML5 / CSS</span></li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"badge badge-secondary badge-pill\">Bootstrap</span></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div><!--//card-->\n\t\t\t</div>\n\n\t\t</div><!--//row-->\n\t\t<div class=\"text-center\">\n\t\t\t<!-- <a class=\"btn btn-primary\" >Ver todos los proyectos</a> -->\n\t\t</div>\n\t</div><!--///container-->\n\n</section>"

/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
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
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-component',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/resumen/resumen.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/pages/resumen/resumen.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcmVzdW1lbi9yZXN1bWVuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pages/resumen/resumen.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/resumen/resumen.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-intro header-intro-resume theme-bg-primary text-white py-5\">\n    <div class=\"container position-relative\">\n        <h2 class=\"page-heading mb-3\">Resumen</h2>\n        <a class=\"btn theme-btn-on-bg download-resume position-absolute font-weight-bold mx-auto\"\n            href=\"assets/pdf/resumen-manuel.pdf\" target=\"_blank\"><i class=\"fas fa-download mr-2\"></i>Descargar versión\n            PDF</a>\n    </div>\n    <!--//container-->\n</div>\n\n<article class=\"resume-wrapper text-center position-relative\">\n    <div class=\"resume-wrapper-inner mx-auto text-left bg-white shadow-lg\">\n        <header class=\"resume-header pt-4 pt-md-0\">\n            <div class=\"media flex-column flex-md-row\">\n                <img class=\"mr-3 img-fluid picture mx-auto\" src=\"assets/images/profile.jpg\" alt=\"\">\n                <div class=\"media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0\">\n                    <div class=\"primary-info\">\n                        <h1 class=\"name mt-0 mb-1 text-white text-uppercase text-uppercase\">José Manuel Pérez</h1>\n                        <div class=\"title mb-3\">Full Stack Developer</div>\n                        <ul class=\"list-unstyled\">\n                            <li class=\"mb-2\"><a href=\"#\"><i class=\"far fa-envelope fa-fw mr-2\"\n                                        data-fa-transform=\"grow-3\"></i>manuelperez9a@gmail.com</a></li>\n                            <li><a href=\"#\"><i class=\"fas fa-mobile-alt fa-fw mr-2\"\n                                        data-fa-transform=\"grow-6\"></i>777-104-05-30</a></li>\n                        </ul>\n                    </div>\n                    <!--//primary-info-->\n                    <div class=\"secondary-info ml-md-auto mt-2\">\n                        <ul class=\"resume-social list-unstyled\">\n                            <li class=\"mb-3\"><a [href]=\"'https://linkedin.com/in/manuelperezgg'\" target=\"_blank\"><span\n                                        class=\"fa-container text-center mr-2\"><i\n                                            class=\"fab fa-linkedin-in fa-fw\"></i></span>linkedin.com/in/manuelperezgg</a>\n                            </li>\n                            <li class=\"mb-3\"><a [href]=\"'https://github.com/manuelperezg'\" target=\"_blank\"><span\n                                        class=\"fa-container text-center mr-2\"><i\n                                            class=\"fab fa-github-alt fa-fw\"></i></span>github.com/manuelperezg</a></li>\n\n                            <li>\n                                <a [href]=\"'https://manuelperezg.com/'\" target=\"_blank\">\n                                    <span class=\"fa-container text-center mr-2\"><i\n                                            class=\"fas fa-globe\"></i></span>https://manuelperezg.com/</a></li>\n                        </ul>\n                    </div>\n                    <!--//secondary-info-->\n\n                </div>\n                <!--//media-body-->\n            </div>\n            <!--//media-->\n        </header>\n        <div class=\"resume-body p-5\">\n            <section class=\"resume-section summary-section mb-5\">\n                <h2 class=\"resume-section-title text-uppercase font-weight-bold pb-3 mb-3\">RESUMEN</h2>\n                <div class=\"resume-section-content\">\n                    <p class=\"mb-0\">\n                        Desarrollador Full-Stack con más de 5 años de experiencia en el desarrollo de proyectos a\n                        medida.\n                        Con gran capacidad de liderar equipos de trabajo para cumplir objetivos específicos.\n                        Usted obtendrá la experiencia combinada de un líder centrados en solucionar problemas\n                        tecnológicos utilizando las tecnologías más recientes y así generar una experiencia de usuario\n                        limpia y eficiente.\n                    </p>\n                </div>\n            </section>\n            <!--//summary-section-->\n            <div class=\"row\">\n                <div class=\"col-lg-9\">\n                    <section class=\"resume-section experience-section mb-5\">\n                        <h2 class=\"resume-section-title text-uppercase font-weight-bold pb-3 mb-3\">Experiencia</h2>\n                        <div class=\"resume-section-content\">\n                            <div class=\"resume-timeline position-relative\">\n                            \t<!--//resume-timeline-item-->\n                            \t<article class=\"resume-timeline-item position-relative pb-5\">\n\n                                    <div class=\"resume-timeline-item-header mb-2\">\n                                        <div class=\"d-flex flex-column flex-md-row\">\n                                            <h3 class=\"resume-position-title font-weight-bold mb-1\">Desarrollador\n                                                Principal</h3>\n                                            <div class=\"resume-company-name ml-auto\"> VivaAerobús - Plataforma de monitoreo de errores </div>\n                                        </div>\n                                        <!--//row-->\n                                        <div class=\"resume-position-time\">2020 - Actual</div>\n                                    </div>\n                                    <!--//resume-timeline-item-header-->\n                                    <div class=\"resume-timeline-item-desc\">\n                                        <p> La plataforma se encarga de monitorear ciertos servicios en los que que a través de un dashboard se pueden apreciar cuales errores han sido generados y el detalles de estos errores, la plataforma es flexible en cuanto al aumento de servicios a monitorear.</p>\n                                        <p> Cuenta con diferentes alertas en los cuales se pueden definir servicios críticos donde el fallo de éstos puede ser un gran problema, por estos casos, se implemento un sistema de notificaciones, donde se alerta a los administradores de éstos eventos críticos. </p>\n\n                                        <h4 class=\"resume-timeline-item-desc-heading font-weight-bold\">Tecnologías\n                                            usadas:</h4>\n                                        <ul class=\"list-inline\">\n                                            <li class=\"list-inline-item\"><span\n                                                    class=\"badge badge-secondary badge-pill\">HTML5 / CSS /\n                                                    Bootstrap</span></li>\n                                            <li class=\"list-inline-item\"><span\n                                                    class=\"badge badge-secondary badge-pill\">Peticiones\n                                                    Asíncronas</span></li>\n                                            <li class=\"list-inline-item\"><span\n                                                    class=\"badge badge-secondary badge-pill\">Vue JS</span></li>\n                                            <li class=\"list-inline-item\"><span\n                                                    class=\"badge badge-secondary badge-pill\">Express</span></li>\n                                            <li class=\"list-inline-item\"><span\n                                                    class=\"badge badge-secondary badge-pill\">NodeJS</span></li>\n                                            <li class=\"list-inline-item\"><span\n                                                    class=\"badge badge-secondary badge-pill\">MongoDB</span></li>\n                                        </ul>\n                                    </div>\n                                    <!--//resume-timeline-item-desc-->\n\n                                </article>\n\n                            \t<!--//resume-timeline-item-->\n                                <article class=\"resume-timeline-item position-relative pb-5\">\n\n                                    <div class=\"resume-timeline-item-header mb-2\">\n                                        <div class=\"d-flex flex-column flex-md-row\">\n                                            <h3 class=\"resume-position-title font-weight-bold mb-1\">Desarrollador\n                                                Principal</h3>\n                                            <div class=\"resume-company-name ml-auto\">S&P México - QUIOSCO</div>\n                                        </div>\n                                        <!--//row-->\n                                        <div class=\"resume-position-time\">Junio 2019 - Diciembre</div>\n                                    </div>\n                                    <!--//resume-timeline-item-header-->\n                                    <div class=\"resume-timeline-item-desc\">\n                                       \n                                        <p>Desarrollo de aplicación web. La principal funcionalidad de este sistema web es el manejo de archivos y roles de usuario a través de 4 secciones principales: estantes, secciones, categorías y archivos. En esta aplicación se manejan diferentes roles de usuarios y permisos de creación, lectura, escritura y actualización de datos. </p>\n                                        <h4 class=\"resume-timeline-item-desc-heading font-weight-bold\">Importante</h4>\n                                        <p>Alguna de las principales funcionalidades de esta aplicación es el manejo confidencial de archivos.</p>\n                                        <ul>\n                                        \t<li>Los archivos publicados no pueden visualizarse fuera de la aplicación.</li>\n                                        \t<li>Los archivos no pueden ser editados una vez realizada la carga.</li>\n                                        \t<li>Los archivos se guardan en el servidor con una configuración de encriptación.</li>\n                                        \t<li>Se realiza un rastreo completo sobre cualquier manipulación, descarga y/o visualización.</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n                                        <h4 class=\"resume-timeline-item-desc-heading font-weight-bold\">Tecnologías\n                                            usadas:</h4>\n                                        <ul class=\"list-inline\">\n                                        \t<li class=\"list-inline-item\">\n                                        \t\t<span class=\"badge badge-secondary badge-pill\">\n                                        \t\t\tHTML5 / CSS /Bootstrap\n                                        \t\t</span>\n                                        \t</li>\n                                        \t<li class=\"list-inline-item\">\n                                        \t\t<span class=\"badge badge-secondary badge-pill\">\n                                        \t\t\tVue JS\n                                        \t\t</span>\n                                        \t</li>\n                                        \t<li class=\"list-inline-item\">\n                                        \t\t<span class=\"badge badge-secondary badge-pill\">\n                                        \t\t\tWebpack\n                                        \t\t</span>\n                                        \t</li>\n                                        \t<li class=\"list-inline-item\">\n                                        \t\t<span class=\"badge badge-secondary badge-pill\">\n                                        \t\t\tPHP / Slim\n                                        \t\t</span>\n                                        \t</li>\n                                        \t<li class=\"list-inline-item\">\n                                        \t\t<span class=\"badge badge-secondary badge-pill\">\n                                        \t\t\tAuth JWT\n                                        \t\t</span>\n                                        \t</li>\n\n                                        </ul>\n                                    </div>\n                                    <!--//resume-timeline-item-desc-->\n\n                                </article>\n                                <!--//resume-timeline-item-->\n\n                                <article class=\"resume-timeline-item position-relative pb-5\">\n\n                                    <div class=\"resume-timeline-item-header mb-2\">\n                                        <div class=\"d-flex flex-column flex-md-row\">\n                                            <h3 class=\"resume-position-title font-weight-bold mb-1\">Desarrollador\n                                                Principal</h3>\n                                            <div class=\"resume-company-name ml-auto\">Soler & Palau México</div>\n                                        </div>\n                                        <!--//row-->\n                                        <div class=\"resume-position-time\"> Enero 2019 - Junio 2019</div>\n                                    </div>\n                                    <!--//resume-timeline-item-header-->\n                                    <div class=\"resume-timeline-item-desc\">\n                                        <p>\n                                       Desarrollo de sitio web oficial de corporativo S&P México. Ajustándose a los requerimientos del cliente se desarrolló el sitio a medida, el proyecto incluye diversas secciones, así como los productos con los que cuenta disponibles, por otro lado también implementa técnicas como Responsive Design y Optimización en buscadores.\n                                    </p>\n                                        <h4 class=\"resume-timeline-item-desc-heading font-weight-bold\">Importante</h4>\n                                       <p>\n                                       \tEl sitio web cuenta con una sección de contacto que se comunica con un WebService que registra las demandas de contacto en tiempo real y genera los respectivos emails de aviso.\n                                       </p>\n                                        <h4 class=\"resume-timeline-item-desc-heading font-weight-bold\">Tecnología usada:\n                                        </h4>\n                                        <ul class=\"list-inline\">\n                                            <li class=\"list-inline-item\"><span\n                                                    class=\"badge badge-secondary badge-pill\">HTML 5 / CSS</span></li>\n                                            <li class=\"list-inline-item\"><span\n                                                    class=\"badge badge-secondary badge-pill\">JQuery</span></li>\n                                            <li class=\"list-inline-item\"><span\n                                                    class=\"badge badge-secondary badge-pill\">PHP</span></li>\n                                            <li class=\"list-inline-item\"><span\n                                                    class=\"badge badge-secondary badge-pill\">MySQL / Oracle</span></li>\n                                        </ul>\n                                    </div>\n                                    <!--//resume-timeline-item-desc-->\n\n                                </article>\n                                <!--//resume-timeline-item-->\n\n                            </div>\n                            <!--//resume-timeline-->\n                        </div>\n                    </section>\n                    <!--//experience-section-->\n                </div>\n                <div class=\"col-lg-3\">\n                    <section class=\"resume-section skills-section mb-5\">\n                        <h2 class=\"resume-section-title text-uppercase font-weight-bold pb-3 mb-3\">Habilidades</h2>\n                        <div class=\"resume-section-content\">\n                            <div class=\"resume-skill-item\">\n                                <h4 class=\"resume-skills-cat font-weight-bold\">Frontend</h4>\n                                <ul class=\"list-unstyled mb-4\">\n                                    <li class=\"mb-2\">\n                                        <div class=\"resume-skill-name\">VueJS/Angular</div>\n                                        <div class=\"progress resume-progress\">\n                                            <div class=\"progress-bar theme-progress-bar-dark\" role=\"progressbar\"\n                                                style=\"width: 85%\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                                aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <div class=\"resume-skill-name\">JavaScript</div>\n                                        <div class=\"progress resume-progress\">\n                                            <div class=\"progress-bar theme-progress-bar-dark\" role=\"progressbar\"\n                                                style=\"width: 80%\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                                aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </li>\n\n                                    <li class=\"mb-2\">\n                                        <div class=\"resume-skill-name\">jQuery</div>\n                                        <div class=\"progress resume-progress\">\n                                            <div class=\"progress-bar theme-progress-bar-dark\" role=\"progressbar\"\n                                                style=\"width: 70%\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                                aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <div class=\"resume-skill-name\">HTML5 / CSS4</div>\n                                        <div class=\"progress resume-progress\">\n                                            <div class=\"progress-bar theme-progress-bar-dark\" role=\"progressbar\"\n                                                style=\"width: 96%\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                                aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </li>\n                                </ul>\n                            </div>\n                            <!--//resume-skill-item-->\n\n                            <div class=\"resume-skill-item\">\n                                <h4 class=\"resume-skills-cat font-weight-bold\">Backend</h4>\n                                <ul class=\"list-unstyled\">\n                                    <li class=\"mb-2\">\n                                        <div class=\"resume-skill-name\">NodeJS/Express</div>\n                                        <div class=\"progress resume-progress\">\n                                            <div class=\"progress-bar theme-progress-bar-dark\" role=\"progressbar\"\n                                                style=\"width: 90%\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                                aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <div class=\"resume-skill-name\">PHP/Laravel</div>\n                                        <div class=\"progress resume-progress\">\n                                            <div class=\"progress-bar theme-progress-bar-dark\" role=\"progressbar\"\n                                                style=\"width: 80%\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                                aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <div class=\"resume-skill-name\">Oracle/MySQL</div>\n                                        <div class=\"progress resume-progress\">\n                                            <div class=\"progress-bar theme-progress-bar-dark\" role=\"progressbar\"\n                                                style=\"width: 70%\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                                aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <div class=\"resume-skill-name\">MongoDB/FireBase</div>\n                                        <div class=\"progress resume-progress\">\n                                            <div class=\"progress-bar theme-progress-bar-dark\" role=\"progressbar\"\n                                                style=\"width: 60%\" aria-valuenow=\"25\" aria-valuemin=\"0\"\n                                                aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </li>\n                                </ul>\n                            </div>\n                            <!--//resume-skill-item-->\n\n                            <div class=\"resume-skill-item\">\n                                <h4 class=\"resume-skills-cat font-weight-bold\">Otras</h4>\n                                <ul class=\"list-inline\">\n                                    <li class=\"list-inline-item\"><span class=\"badge badge-light\">WebService</span></li>\n                                    <li class=\"list-inline-item\"><span class=\"badge badge-light\">PWA</span></li>\n                                    <li class=\"list-inline-item\"><span class=\"badge badge-light\">Git & Github</span>\n                                    </li>\n                                    <li class=\"list-inline-item\"><span class=\"badge badge-light\">Pruebas\n                                            Unitarias</span></li>\n                                    <li class=\"list-inline-item\"><span class=\"badge badge-light\">WordPress</span></li>\n                                    <li class=\"list-inline-item\"><span class=\"badge badge-light\">Bootstrap</span></li>\n                                    <li class=\"list-inline-item\"><span class=\"badge badge-light\">Materialize</span></li>\n                                    <li class=\"list-inline-item\"><span class=\"badge badge-light\">SQL</span></li>\n                                </ul>\n                            </div>\n                            <!--//resume-skill-item-->\n                        </div>\n                        <!--resume-section-content-->\n                    </section>\n                    <!--//skills-section-->\n                    <section class=\"resume-section education-section mb-5\">\n                        <h2 class=\"resume-section-title text-uppercase font-weight-bold pb-3 mb-3\">Educación</h2>\n                        <div class=\"resume-section-content\">\n                            <ul class=\"list-unstyled\">\n                                <li class=\"mb-2\">\n                                    <div class=\"resume-degree font-weight-bold\">Ingeniería en Mecatrónica</div>\n                                    <div class=\"resume-degree-org\">Universidad Tecnológica Emiliano Zapata</div>\n                                    <div class=\"resume-degree-time\">2015 - 2019</div>\n                                </li>\n                                <li>\n                                    <div class=\"resume-degree font-weight-bold\">Bachillerato Tecnológico en Programación\n                                    </div>\n                                    <div class=\"resume-degree-time\">2012 - 2015 </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </section>\n                    <!--//education-section-->\n                    <section class=\"resume-section reference-section mb-5\">\n                        <h2 class=\"resume-section-title text-uppercase font-weight-bold pb-3 mb-3\">Cursos</h2>\n                        <div class=\"resume-section-content\">\n                            <ul class=\"list-unstyled resume-awards-list\">\n                                <li class=\"mb-0 pl-4 position-relative\">\n                                    <i class=\"resume-award-icon fas fa-trophy position-absolute\"\n                                        data-fa-transform=\"shrink-2\"></i>\n                                    <div class=\"resume-award-name\">Aplicaciones Angular</div>\n                                </li>\n                                <li class=\"mb-0 pl-4 position-relative\">\n                                    <i class=\"resume-award-icon fas fa-trophy position-absolute\"\n                                        data-fa-transform=\"shrink-2\"></i>\n                                    <div class=\"resume-award-name\">Aplicaciones Web con Vue js</div>\n                                </li>\n                                <li class=\"mb-0 pl-4 position-relative\">\n                                    <i class=\"resume-award-icon fas fa-trophy position-absolute\"\n                                        data-fa-transform=\"shrink-2\"></i>\n                                    <div class=\"resume-award-name\"> Desarrollo APIS REST</div>\n                                </li>\n                                <li class=\"mb-0 pl-4 position-relative\">\n                                    <i class=\"resume-award-icon fas fa-trophy position-absolute\"\n                                        data-fa-transform=\"shrink-2\"></i>\n                                    <div class=\"resume-award-name\"> Desarrollo de Apps Móviles con Flutter</div>\n                                </li>\n                            </ul>\n                        </div>\n                    </section>\n                    <!--//interests-section-->\n                    <section class=\"resume-section language-section mb-5\">\n                        <h2 class=\"resume-section-title text-uppercase font-weight-bold pb-3 mb-3\">Lenguaje</h2>\n                        <div class=\"resume-section-content\">\n                            <ul class=\"list-unstyled resume-lang-list\">\n                                <li class=\"mb-2\"><span class=\"resume-lang-name font-weight-bold\">Español </span> <small\n                                        class=\"text-muted font-weight-normal\"> (Nativo)</small></li>\n                                <li class=\"mb-2 align-middle\"><span class=\"resume-lang-name font-weight-bold\">Inglés\n                                    </span> <small class=\"text-muted font-weight-normal\"> (Competitivo)</small></li>\n                            </ul>\n                        </div>\n                    </section>\n                    <!--//language-section-->\n\n                    <!-- <section class=\"resume-section interests-section mb-5\">\n\t\t\t\t\t\t\t<h2 class=\"resume-section-title text-uppercase font-weight-bold pb-3 mb-3\">Intereses</h2>\n\t\t\t\t\t\t\t<div class=\"resume-section-content\">\n\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t<li class=\"mb-1\">Jugar Futbol</li>\n\t\t\t\t\t\t\t\t\t<li class=\"mb-1\">Nadar</li>\n\t\t\t\t\t\t\t\t\t<li class=\"mb-1\">Cocinar</li>\n\t\t\t\t\t\t\t\t\t<li class=\"mb-1\">Ver Series</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</section> -->\n                    <!--//interests-section-->\n\n                </div>\n            </div>\n            <!--//row-->\n        </div>\n        <!--//resume-body-->\n\n\n    </div>\n</article>"

/***/ }),

/***/ "./src/app/components/pages/resumen/resumen.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/resumen/resumen.component.ts ***!
  \***************************************************************/
/*! exports provided: ResumenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenComponent", function() { return ResumenComponent; });
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

var ResumenComponent = /** @class */ (function () {
    function ResumenComponent() {
    }
    ResumenComponent.prototype.ngOnInit = function () {
    };
    ResumenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resumen',
            template: __webpack_require__(/*! ./resumen.component.html */ "./src/app/components/pages/resumen/resumen.component.html"),
            styles: [__webpack_require__(/*! ./resumen.component.css */ "./src/app/components/pages/resumen/resumen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumenComponent);
    return ResumenComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-cta py-5 bg-primary text-white\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"text-center\">\n\t\t\t    <img class=\"profile-small d-inline-block mx-auto rounded-circle mb-2\" src=\"assets/images/profile.jpg\" alt=\"\">\n\t\t    </div>\n\t\t    <h3 class=\"section-title font-weight-bold text-center mb-2\">¿Necesitas ayuda para tu proyecto?</h3>\n\t\t    <div class=\"section-intro mx-auto text-center mb-3\">\n\t\t\t   ¿Está buscando un desarrollador experimentado full-stack para construir su aplicación web ?, simplemente envíeme un correo electrónico a <a class=\"link-on-bg\" href=\"mailto:manuelperez9a@gmail.com?subject=Cotización%20de%20página%20web\">manuelperez9a@gmail.com</a> o utilice <a class=\"link-on-bg\" [routerLink]=\"['/contacto']\">la página de contacto. </a>\n\t\t    </div>\n\t\t    <div class=\"text-center\">\n\t\t        <a class=\"theme-btn-on-bg btn\" [routerLink]=\"['/contacto']\">CONTACTO</a>\n\t\t    </div>\n\t\t</div><!--//container-->\n\t</section>\n    \n    <footer class=\"footer text-light text-center py-2\">\n\t    <small class=\"copyright\"> Manuel Developer &copy; Todos los Derechos Reservados </small>\n    </footer>\n    "

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
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
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"top-bar theme-bg-primary-darken\">\n\t\n\t<div class=\"container-fluid\">\n\t\t\n\t\t<nav class=\"navbar navbar-expand-lg navbar-dark position-relative\">\n\t\t\t\n\t\t\t<ul class=\"social-list list-inline mb-0\">\n\t\t\t\t<li class=\"list-inline-item\"><a class=\"text-white\" [routerLink]=\"['/home']\"><i class=\"fas fa-home fa-fw\"></i></a></li>\t\t\t\t\n\t\t\t\t<li class=\"list-inline-item\"><a class=\"text-white\" [href]=\"'https://www.linkedin.com/in/manuelperezg21'\" target=\"_blank\"><i class=\"fab fa-linkedin-in fa-fw\"></i></a></li>\n\t\t\t\t\n\t\t\t\t<li class=\"list-inline-item\"><a class=\"text-white\" [href]=\"'https://github.com/manuelperezg/'\" target=\"_blank\"><i class=\"fab fa-github-alt fa-fw\"></i></a></li>\n\t\t\t\t\n\t\t\t\t<li class=\"list-inline-item\"><a class=\"text-white\" [href]=\"'https://es.stackoverflow.com/users/43380/manueel-perezz'\"><i class=\"fab fa-stack-overflow fa-fw\"></i></a></li>\n\t\t\t</ul><!--//social-list-->\n\t\t\t\n\t\t\t\n\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t</button>\n\t\t\t\n\t\t\t<div class=\"collapse navbar-collapse text-uppercase\" id=\"navigation\">\n\t\t\t\t<ul class=\"navbar-nav ml-lg-auto\">\n\t\t\t\t\t<li class=\"nav-item mr-lg-3\" routerLinkActive = \"active\">\n\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/home']\">Inicio </a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item mr-lg-3\" routerLinkActive = \"active\">\n\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/resumen']\">Resumen</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item mr-lg-3\" routerLinkActive = \"active\">\n\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/contacto']\">Contacto</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- <li class=\"nav-item mr-lg-3\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"projects.html\">Projects</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item mr-lg-3\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"talks.html\">Talks</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item mr-lg-3\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"blog.html\">Blog</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t -->\n\t\t\t\t\t<!-- <li class=\"nav-item dropdown mr-0\">\n\t\t\t\t\t\t<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navigationLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\tPages\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right text-capitalize shadow-lg\" aria-labelledby=\"navigationLink\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"project.html\">Project Case Study (1 Column)</a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"project-alt.html\">Project Case Study (2 Columns)</a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"blog-post.html\">Blog Post</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li> -->\n\t\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t\t<span id=\"slide-line\" routerlinkActive=\"active\"></span>\n\t\t\t</div>\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t</nav>\n\t\t\n\t</div><!--//container-->\n\t\n</div>\n"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
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
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navba-component',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/josemanuel/Documentos/angular/portafolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map