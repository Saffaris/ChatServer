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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _globalchat_globalchat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalchat/globalchat.component */ "./src/app/globalchat/globalchat.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'chat', component: _globalchat_globalchat_component__WEBPACK_IMPORTED_MODULE_2__["GlobalchatComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
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

module.exports = "<router-outlet></router-outlet>\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _globalchat_globalchat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./globalchat/globalchat.component */ "./src/app/globalchat/globalchat.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _chat_display_chat_display_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat-display/chat-display.component */ "./src/app/chat-display/chat-display.component.ts");
/* harmony import */ var _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat-form/chat-form.component */ "./src/app/chat-form/chat-form.component.ts");
/* harmony import */ var _mood_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mood.service */ "./src/app/mood.service.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/userlist/userlist.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _globalchat_globalchat_component__WEBPACK_IMPORTED_MODULE_7__["GlobalchatComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"],
                _chat_display_chat_display_component__WEBPACK_IMPORTED_MODULE_10__["ChatDisplayComponent"],
                _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_11__["ChatFormComponent"],
                _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_13__["UserlistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"], _mood_service__WEBPACK_IMPORTED_MODULE_12__["MoodService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-display/chat-display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/chat-display/chat-display.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#msg{\r\n    list-style-type: none;\r\n}\r\n\r\n#msg li {\r\n    border-bottom: solid;\r\n    border-bottom-width: 1px;\r\n    border-bottom-color: lightgrey;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    padding-bottom: 5px;\r\n    padding-top: 5px;\r\n}\r\n\r\n#head{\r\n    font-size: 12px;\r\n    color: grey;\r\n}\r\n\r\n#timestamp{\r\n    margin-right: 5px;\r\n    float: left;\r\n}\r\n\r\n#name {\r\n    float: left;\r\n}\r\n\r\n#mood {\r\n    float:right;\r\n}\r\n\r\n#message {\r\n    font-family: \"Verdana\", Times, serif;\r\n    color: black;\r\n    font-size: 18px;\r\n    clear: both;\r\n}"

/***/ }),

/***/ "./src/app/chat-display/chat-display.component.html":
/*!**********************************************************!*\
  !*** ./src/app/chat-display/chat-display.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"messageContainer\">\n  <ul id=\"msg\">\n    <li *ngFor=\"let msg of messages\">\n      <div id=\"head\">\n        <div id=\"timestamp\"><strong>{{msg.timestamp}}</strong></div>\n        <div id=\"name\"><strong>{{msg.user}}</strong></div>\n        <div id=\"mood\">{{msg.mood}}</div>\n      </div>\n      <div id=\"message\">{{msg.msg}}</div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/chat-display/chat-display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chat-display/chat-display.component.ts ***!
  \********************************************************/
/*! exports provided: ChatDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDisplayComponent", function() { return ChatDisplayComponent; });
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

var ChatDisplayComponent = /** @class */ (function () {
    function ChatDisplayComponent() {
    }
    ChatDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ChatDisplayComponent.prototype, "messages", void 0);
    ChatDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-display',
            template: __webpack_require__(/*! ./chat-display.component.html */ "./src/app/chat-display/chat-display.component.html"),
            styles: [__webpack_require__(/*! ./chat-display.component.css */ "./src/app/chat-display/chat-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatDisplayComponent);
    return ChatDisplayComponent;
}());



/***/ }),

/***/ "./src/app/chat-form/chat-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#filebutton{\r\n    width: 7%;\r\n}\r\n\r\n#submit{\r\n    width: 7%;\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n}\r\n\r\ninput{\r\n    width: 84%;\r\n    float: left;\r\n}\r\n\r\n#container{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-left: 4px;\r\n}\r\n\r\n#file{\r\n    width: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <form (ngSubmit)=\"onSubmit()\" #chatForm=\"ngForm\">\n     <input [(ngModel)]=\"messageText\" class=\"form-control\" type=\"text\" id=\"input\" name=\"msg\" placeholder=\"Enter Message\" required>\n     <button type=\"submit\" id=\"submit\" class=\"btn btn-primary\">💬</button>\n     <label id=\"filebutton\" for=\"file\" class=\"btn btn-primary\">📁</label>\n     <input type=\"file\" name=\"file\" id=\"file\" (change)=\"onChange($event)\"/>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.ts ***!
  \**************************************************/
/*! exports provided: ChatFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatFormComponent", function() { return ChatFormComponent; });
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

var ChatFormComponent = /** @class */ (function () {
    function ChatFormComponent() {
        this.sendEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.messageText = "";
    }
    ChatFormComponent.prototype.ngOnInit = function () {
    };
    ChatFormComponent.prototype.onSubmit = function () {
        this.sendEvent.emit(this.messageText);
        this.messageText = "";
    };
    ChatFormComponent.prototype.onChange = function (event) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChatFormComponent.prototype, "sendEvent", void 0);
    ChatFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-form',
            template: __webpack_require__(/*! ./chat-form.component.html */ "./src/app/chat-form/chat-form.component.html"),
            styles: [__webpack_require__(/*! ./chat-form.component.css */ "./src/app/chat-form/chat-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatFormComponent);
    return ChatFormComponent;
}());



/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var ChatService = /** @class */ (function () {
    function ChatService() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__();
    }
    /**
     * adds user to chat
     * @param info (chat,user)
     */
    ChatService.prototype.join = function (info) {
        this.socket.emit('join', info);
    };
    /**
     * emits message in specific chatroom
     * @param chatroom
     * @param message
     */
    ChatService.prototype.sendMessage = function (chatroom, message) {
        this.socket.emit('message', { chat: chatroom, msg: message });
    };
    /**
     * requests list of all user from server
     */
    ChatService.prototype.getList = function () {
        this.socket.emit('list');
    };
    /**
     * emits message to one specific user
     * @param user1
     * @param message1
     */
    ChatService.prototype.whisper = function (user1, message1) {
        this.socket.emit('whisper', { user: user1, msg: message1 });
    };
    ChatService.prototype.sendFile = function (chatroom, message) {
    };
    /**
     * lets everybody know that you left
     */
    ChatService.prototype.logout = function () {
        this.socket.emit('leave');
    };
    /**
     * recives the messages
     */
    ChatService.prototype.getMessages = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on('message', function (message) {
                observer.next(message);
            });
        });
    };
    return ChatService;
}());



/***/ }),

/***/ "./src/app/classes/message.ts":
/*!************************************!*\
  !*** ./src/app/classes/message.ts ***!
  \************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(user, timestamp, msg) {
        this.user = user;
        this.timestamp = timestamp;
        this.msg = msg;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/globalchat/globalchat.component.css":
/*!*****************************************************!*\
  !*** ./src/app/globalchat/globalchat.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clear {\r\n  clear: both;\r\n}\r\n\r\n#component {\r\n  height: 100%;\r\n}\r\n\r\n/* Header Styling */\r\n\r\n#info {\r\n  margin-top: 20px;\r\n  margin-left: 20px;\r\n  margin-right: 10px;\r\n}\r\n\r\n#title {\r\n  float: left;\r\n}\r\n\r\n#userinfo {\r\n  color: grey;\r\n  border: solid;\r\n  border-width: 2px;\r\n  padding: 10px;\r\n  float: right;\r\n  border-radius: 5px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n#userinfo:hover {\r\n  background-color: lightblue;\r\n  cursor: pointer;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n}\r\n\r\nh2{\r\n  margin: 0;\r\n  font-size: 20px;\r\n  padding-right: 10px;\r\n  display: table-cell;\r\n}\r\n\r\nh3{\r\n  padding-left: 10px;\r\n  border-left: solid;\r\n  border-color: grey;\r\n  border-width: 2px;\r\n  margin: 0;\r\n  font-size: 19px;\r\n  display: table-cell;\r\n}\r\n\r\n/* Form Styling */\r\n\r\n#userInputContainer {\r\n  width: 100%;\r\n  margin-left: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n#fileButton {\r\n  float:left;\r\n  width: 3.25%;\r\n  cursor: pointer;\r\n}\r\n\r\n#fileImage{\r\n  pointer-events: none;\r\n}\r\n\r\nh6{\r\n  float:left;\r\n  width: 5%;\r\n}\r\n\r\n#file {\r\n  width: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n\r\nform {\r\n  float: left;\r\n  width: 100%;\r\n}\r\n\r\nform button {\r\n  float: left;\r\n  width: 10%;\r\n}\r\n\r\nform input{\r\n  float: left;\r\n  width: 80%;\r\n}\r\n\r\n#chat{\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  width: 70%;\r\n  height: 80%;\r\n  border: solid;\r\n  border-width: 1px;\r\n  border-radius: 5px;\r\n  border-color: grey;\r\n}\r\n\r\n#chatform{\r\n  height: 10%;\r\n  width: 100%;\r\n}\r\n\r\n#messages{\r\n  height: 90%;\r\n  overflow: auto;\r\n  /*align-items: flex-start;*/\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  min-height: 0px;\r\n}\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  width: 15px;\r\n  \r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  background: rgba(0,0,0,0);\r\n \r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: rgb(78, 156, 182, 0.2);\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n \r\n  border:solid;\r\n  border-width: 2px;\r\n  border-color: lightblue;\r\n} "

/***/ }),

/***/ "./src/app/globalchat/globalchat.component.html":
/*!******************************************************!*\
  !*** ./src/app/globalchat/globalchat.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"component\">\n  <div id=\"info\">\n    <div id=\"title\">\n      <h1>HappyChat</h1>\n    </div>\n    <div title=\"Logout\" id=\"userinfo\" (click)=\"backToLogin()\">\n      <h2>{{username}}</h2><h3>Chat: {{chat}}</h3>\n    </div>\n  </div>\n  <div class=\"clear\"></div>\n\n  <div id=\"chat\">\n    <div id=\"messages\">\n      <app-chat-display [messages]=\"displayMessages\"></app-chat-display>\n    </div>\n    <div id=\"chatform\">\n      <app-chat-form (sendEvent)=\"sendMessage($event)\"></app-chat-form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/globalchat/globalchat.component.ts":
/*!****************************************************!*\
  !*** ./src/app/globalchat/globalchat.component.ts ***!
  \****************************************************/
/*! exports provided: GlobalchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalchatComponent", function() { return GlobalchatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _classes_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/message */ "./src/app/classes/message.ts");
/* harmony import */ var _mood_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mood.service */ "./src/app/mood.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GlobalchatComponent = /** @class */ (function () {
    function GlobalchatComponent(router) {
        this.router = router;
        this.displayMessages = [];
        this.username = localStorage.getItem('username');
        this.chat = 'global';
        this.chatservice = new _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]();
        this.moodservice = new _mood_service__WEBPACK_IMPORTED_MODULE_4__["MoodService"]();
    }
    /**
     * checks valid session and joins user to global chat
     * subscribes to chat service to get updates on messages
     */
    GlobalchatComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.username == null || this.username == undefined) {
            this.backToLogin();
        }
        this.chatservice.join({ user: this.username, chat: this.chat });
        this.chatservice.getMessages().subscribe(function (message) {
            var m = new _classes_message__WEBPACK_IMPORTED_MODULE_3__["Message"](message.user, message.timestamp, message.msg);
            _this.moodservice.getMood(message.msg, m);
            _this.displayMessages.push(m);
        });
    };
    GlobalchatComponent.prototype.sendMessage = function ($event) {
        var input = $event;
        if (input == "\\list") {
            this.chatservice.getList();
        }
        else if (input.split(' ')[0] == "\\whisper") {
            var data = input.split(' ');
            if (data.length >= 3) {
                var user = data[1];
                var msg = "";
                for (var index = 2; index < data.length; index++) {
                    msg += data[index] + " ";
                }
                this.chatservice.whisper(user, msg);
            }
        }
        else {
            this.chatservice.sendMessage(this.chat, input);
        }
    };
    /**
     * Handles file inputs TODO
     */
    GlobalchatComponent.prototype.onChange = function (event) {
        var filename = event.target.value.split('\\')[event.target.value.split('\\').length - 1];
    };
    /**
     * routes user to login
     */
    GlobalchatComponent.prototype.backToLogin = function () {
        this.router.navigate(['']);
    };
    GlobalchatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-globalchat',
            template: __webpack_require__(/*! ./globalchat.component.html */ "./src/app/globalchat/globalchat.component.html"),
            styles: [__webpack_require__(/*! ./globalchat.component.css */ "./src/app/globalchat/globalchat.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GlobalchatComponent);
    return GlobalchatComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loginContainer {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 20px;\r\n    padding-bottom: 10px;\r\n    width: 20%;\r\n    border: solid;\r\n    border-color: #D3D3D3;\r\n    border-width: 1px;\r\n    border-radius: 5px;\r\n}\r\n\r\nbutton{\r\n    margin-top:5px;\r\n    margin-bottom: 5px;\r\n    width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loginContainer\">\n  <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Username</label>\n      <input [(ngModel)]=\"username\" class=\"form-control\" type=\"text\" name=\"user\" placeholder=\"Enter Username\">\n      <button class=\"btn btn-success\" type=\"submit\">Login</button>\n      <strong>{{inputWarning}}</strong>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router) {
        this.router = router;
        this.regex = '^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$';
        this.invalidInput = "Only number, letters, and - or _";
        this.inputWarning = "";
        this.username = "";
    }
    LoginFormComponent.prototype.ngOnInit = function () { };
    LoginFormComponent.prototype.onSubmit = function () {
        if (this.valid(this.username)) {
            this.redirect();
        }
        else {
            this.inputWarning = this.invalidInput;
        }
    };
    LoginFormComponent.prototype.valid = function (name) {
        var regex = new RegExp(this.regex);
        return regex.test(name) && this.username.length <= 13 && this.username.length >= 4;
    };
    LoginFormComponent.prototype.redirect = function () {
        localStorage.setItem('username', this.username);
        this.router.navigate(['/chat']);
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loginContainer {\r\n    margin-top: 10%;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loginContainer\">\n    <app-login-form></app-login-form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.buttonName = 'Submit';
        this.inputWarning = "";
    }
    LoginComponent.prototype.ngOnInit = function () { };
    /**
     * handles username submission
     */
    LoginComponent.prototype.onSubmit = function () {
        if (this.username == "" || this.username.length < 4 || this.username.length > 12 || this.username.split(' ').length > 1) {
            this.inputWarning = "Invalid Username (No spaces, min character: 4, max character 21)";
        }
        else {
            localStorage.setItem('username', this.username);
            this.username = "";
            this.router.navigate(['/chat']);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mood.service.ts":
/*!*********************************!*\
  !*** ./src/app/mood.service.ts ***!
  \*********************************/
/*! exports provided: MoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodService", function() { return MoodService; });
var MoodService = /** @class */ (function () {
    function MoodService() {
    }
    MoodService.prototype.getMood = function (input, messageObject) {
        fetch("/tone", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'mode': 'cors'
            },
            body: JSON.stringify({
                texts: [input, ""]
            })
        })
            .then(function (response) {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
            .then(function (response) {
            //console.log("response:" +  JSON.stringify(response));
            if (response.mood) {
                messageObject.mood = response.mood;
            }
        });
    };
    return MoodService;
}());



/***/ }),

/***/ "./src/app/userlist/userlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/userlist/userlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userlist/userlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/userlist/userlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  \n</div>"

/***/ }),

/***/ "./src/app/userlist/userlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/userlist/userlist.component.ts ***!
  \************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
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

var UserlistComponent = /** @class */ (function () {
    function UserlistComponent() {
    }
    UserlistComponent.prototype.ngOnInit = function () {
    };
    UserlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! ./userlist.component.html */ "./src/app/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.css */ "./src/app/userlist/userlist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserlistComponent);
    return UserlistComponent;
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

module.exports = __webpack_require__(/*! C:\Users\CarrioN\Documents\Uni\6_Cloud Computing\Chat\chatclient\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map