webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(30);


/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(99));
	__export(__webpack_require__(96));


/***/ },

/***/ 96:
/***/ function(module, exports) {

	(function (Ng2SelectTheme) {
	    Ng2SelectTheme[Ng2SelectTheme["BS3"] = 1] = "BS3";
	    Ng2SelectTheme[Ng2SelectTheme["BS4"] = 2] = "BS4";
	})(exports.Ng2SelectTheme || (exports.Ng2SelectTheme = {}));
	var Ng2SelectTheme = exports.Ng2SelectTheme;
	var Ng2SelectConfig = (function () {
	    function Ng2SelectConfig() {
	    }
	    Object.defineProperty(Ng2SelectConfig, "theme", {
	        get: function () {
	            var w = window;
	            if (w && w.__theme === 'bs4') {
	                return Ng2SelectTheme.BS4;
	            }
	            return (this._theme || Ng2SelectTheme.BS3);
	        },
	        set: function (v) {
	            this._theme = v;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Ng2SelectConfig;
	})();
	exports.Ng2SelectConfig = Ng2SelectConfig;


/***/ },

/***/ 97:
/***/ function(module, exports) {

	var SelectItem = (function () {
	    function SelectItem(source) {
	        var _this = this;
	        if (typeof source === 'string') {
	            this.id = this.text = source;
	        }
	        if (typeof source === 'object') {
	            this.id = source.id || source.text;
	            this.text = source.text;
	            if (source.children && source.text) {
	                this.children = source.children.map(function (c) {
	                    var r = new SelectItem(c);
	                    r.parent = _this;
	                    return r;
	                });
	                this.text = source.text;
	            }
	        }
	    }
	    SelectItem.prototype.fillChildrenHash = function (optionsMap, startIndex) {
	        var i = startIndex;
	        this.children.map(function (child) {
	            optionsMap.set(child.id, i++);
	        });
	        return i;
	    };
	    SelectItem.prototype.hasChildren = function () {
	        return this.children && this.children.length > 0;
	    };
	    SelectItem.prototype.getSimilar = function () {
	        var r = new SelectItem(false);
	        r.id = this.id;
	        r.text = this.text;
	        r.parent = this.parent;
	        return r;
	    };
	    return SelectItem;
	})();
	exports.SelectItem = SelectItem;


/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	var HightlightPipe = (function () {
	    function HightlightPipe() {
	    }
	    HightlightPipe.prototype.transform = function (value, args) {
	        if (args.length < 1) {
	            return value;
	        }
	        var query = args[0];
	        return query ?
	            value.replace(new RegExp(this.escapeRegexp(query), 'gi'), '<strong>$&</strong>') :
	            value;
	    };
	    HightlightPipe.prototype.escapeRegexp = function (queryToEscape) {
	        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	    };
	    HightlightPipe = __decorate([
	        angular2_1.Pipe({
	            name: 'hightlight'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HightlightPipe);
	    return HightlightPipe;
	})();
	exports.HightlightPipe = HightlightPipe;


/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(6);
	var select_item_1 = __webpack_require__(97);
	var select_pipes_1 = __webpack_require__(98);
	var optionsTemplate = "\n    <ul *ng-if=\"optionsOpened && options && options.length > 0 && !itemObjects[0].hasChildren()\"\n        class=\"ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu\">\n      <li class=\"ui-select-choices-group\">\n        <div *ng-for=\"#o of options\"\n             class=\"ui-select-choices-row\"\n             (mouseenter)=\"selectActive(o)\"\n             (click)=\"selectMatch(o, $event)\"\n             [ng-class]=\"{'active': isActive(o)}\">\n          <a href=\"javascript:void(0)\" class=\"ui-select-choices-row-inner\">\n            <div [inner-html]=\"o.text | hightlight:inputValue\"></div>\n          </a>\n        </div>\n      </li>\n    </ul>\n\n    <ul *ng-if=\"optionsOpened && options && options.length > 0 && itemObjects[0].hasChildren()\"\n        class=\"ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu\">\n      <li *ng-for=\"#c of options; #index=index\" class=\"ui-select-choices-group\">\n        <div class=\"divider\" *ng-if=\"index > 0\"></div>\n        <div class=\"ui-select-choices-group-label dropdown-header\">{{c.text}}</div>\n\n        <div *ng-for=\"#o of c.children\"\n             class=\"ui-select-choices-row\"\n             (mouseenter)=\"selectActive(o)\"\n             (click)=\"selectMatch(o, $event)\"\n             [ng-class]=\"{'active': isActive(o)}\">\n          <a href=\"javascript:void(0)\" class=\"ui-select-choices-row-inner\">\n            <div [inner-html]=\"o.text | hightlight:inputValue\"></div>\n          </a>\n        </div>\n      </li>\n    </ul>\n";
	var Select = (function () {
	    function Select(element) {
	        this.element = element;
	        this.multiple = false;
	        this.options = [];
	        this.itemObjects = [];
	        this.active = [];
	        this.data = new angular2_1.EventEmitter();
	        this.selected = new angular2_1.EventEmitter();
	        this.removed = new angular2_1.EventEmitter();
	        this.typed = new angular2_1.EventEmitter();
	        this.allowClear = false;
	        this.placeholder = '';
	        this.initData = [];
	        this._items = [];
	        this.inputMode = false;
	        this.optionsOpened = false;
	        this._disabled = false;
	        this.inputValue = '';
	    }
	    Select.prototype.focusToInput = function (value) {
	        var _this = this;
	        if (value === void 0) { value = ''; }
	        setTimeout(function () {
	            var el = _this.element.nativeElement.querySelector('div.ui-select-container > input');
	            el.focus();
	            el.value = value;
	        }, 0);
	    };
	    Select.prototype.matchClick = function (e) {
	        if (this.disabled === true) {
	            return;
	        }
	        this.inputMode = !this.inputMode;
	        if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
	            this.focusToInput();
	            this.open();
	        }
	    };
	    Select.prototype.mainClick = function (e) {
	        if (this.inputMode === true || this.disabled === true) {
	            return;
	        }
	        if (e.keyCode === 46) {
	            e.preventDefault();
	            this.inputEvent(e);
	            return;
	        }
	        if (e.keyCode === 8) {
	            e.preventDefault();
	            this.inputEvent(e, true);
	            return;
	        }
	        if (e.keyCode === 9 || e.keyCode === 13 ||
	            e.keyCode === 27 || (e.keyCode >= 37 && e.keyCode <= 40)) {
	            e.preventDefault();
	            return;
	        }
	        this.inputMode = true;
	        var value = String
	            .fromCharCode(96 <= e.keyCode && e.keyCode <= 105 ? e.keyCode - 48 : e.keyCode)
	            .toLowerCase();
	        this.focusToInput(value);
	        this.open();
	        e.srcElement.value = value;
	        this.inputEvent(e);
	    };
	    Select.prototype.open = function () {
	        var _this = this;
	        this.options = this.itemObjects
	            .filter(function (option) { return (_this.multiple === false ||
	            _this.multiple === true && !_this.active.find(function (o) { return option.text === o.text; })); });
	        if (this.options.length > 0) {
	            this.behavior.first();
	        }
	        this.optionsOpened = true;
	    };
	    Object.defineProperty(Select.prototype, "items", {
	        get: function () {
	            return this._items;
	        },
	        set: function (value) {
	            this._items = value;
	            this.itemObjects = this._items.map(function (item) { return new select_item_1.SelectItem(item); });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Select.prototype, "disabled", {
	        get: function () {
	            return this._disabled;
	        },
	        set: function (value) {
	            this._disabled = value;
	            if (this.disabled === true) {
	                this.hideOptions();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Select.prototype.onInit = function () {
	        this.behavior = this.itemObjects[0].hasChildren() ?
	            new Select.ChildrenBehavior(this) : new Select.GenericBehavior(this);
	        this.offSideClickHandler = this.getOffSideClickHandler(this);
	        document.addEventListener('click', this.offSideClickHandler);
	        if (this.initData) {
	            this.active = this.initData.map(function (d) { return new select_item_1.SelectItem(d); });
	            this.data.next(this.active);
	        }
	    };
	    Select.prototype.onDestroy = function () {
	        document.removeEventListener('click', this.offSideClickHandler);
	        this.offSideClickHandler = null;
	    };
	    Select.prototype.getOffSideClickHandler = function (context) {
	        return function (e) {
	            if (e.target && e.target.nodeName === 'INPUT'
	                && e.target.className && e.target.className.indexOf('ui-select') >= 0) {
	                return;
	            }
	            if (e.srcElement && e.srcElement.className &&
	                e.srcElement.className.indexOf('ui-select') >= 0) {
	                if (e.target.nodeName !== 'INPUT') {
	                    context.matchClick(null);
	                }
	                return;
	            }
	            context.inputMode = false;
	            context.optionsOpened = false;
	        };
	    };
	    Select.prototype.remove = function (item) {
	        if (this.disabled === true) {
	            return;
	        }
	        if (this.multiple === true && this.active) {
	            var index = this.active.indexOf(item);
	            this.active.splice(index, 1);
	            this.data.next(this.active);
	            this.doEvent('removed', item);
	        }
	        if (this.multiple === false) {
	            this.active = [];
	            this.data.next(this.active);
	            this.doEvent('removed', item);
	        }
	    };
	    Select.prototype.doEvent = function (type, value) {
	        if (this[type] && value) {
	            this[type].next(value);
	        }
	    };
	    Select.prototype.hideOptions = function () {
	        this.inputMode = false;
	        this.optionsOpened = false;
	    };
	    Select.prototype.inputEvent = function (e, isUpMode) {
	        if (isUpMode === void 0) { isUpMode = false; }
	        if (e.keyCode === 9) {
	            return;
	        }
	        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
	            e.keyCode === 40 || e.keyCode === 13)) {
	            e.preventDefault();
	            return;
	        }
	        if (!isUpMode && e.keyCode === 8) {
	            var el = this.element.nativeElement
	                .querySelector('div.ui-select-container > input');
	            if (!el.value || el.value.length <= 0) {
	                if (this.active.length > 0) {
	                    this.remove(this.active[this.active.length - 1]);
	                }
	                e.preventDefault();
	            }
	        }
	        if (!isUpMode && e.keyCode === 27) {
	            this.hideOptions();
	            this.element.nativeElement.children[0].focus();
	            e.preventDefault();
	            return;
	        }
	        if (!isUpMode && e.keyCode === 46) {
	            if (this.active.length > 0) {
	                this.remove(this.active[this.active.length - 1]);
	            }
	            e.preventDefault();
	        }
	        if (!isUpMode && e.keyCode === 37 && this.items.length > 0) {
	            this.behavior.first();
	            e.preventDefault();
	            return;
	        }
	        if (!isUpMode && e.keyCode === 39 && this.items.length > 0) {
	            this.behavior.last();
	            e.preventDefault();
	            return;
	        }
	        if (!isUpMode && e.keyCode === 38) {
	            this.behavior.prev();
	            e.preventDefault();
	            return;
	        }
	        if (!isUpMode && e.keyCode === 40) {
	            this.behavior.next();
	            e.preventDefault();
	            return;
	        }
	        if (!isUpMode && e.keyCode === 13) {
	            this.selectActiveMatch();
	            e.preventDefault();
	            return;
	        }
	        if (e.srcElement) {
	            this.inputValue = e.srcElement.value;
	            this.behavior.filter(new RegExp(this.inputValue, 'ig'));
	            this.doEvent('typed', this.inputValue);
	        }
	    };
	    Select.prototype.selectActiveMatch = function () {
	        this.selectMatch(this.activeOption);
	    };
	    Select.prototype.selectMatch = function (value, e) {
	        if (e === void 0) { e = null; }
	        if (e) {
	            e.stopPropagation();
	            e.preventDefault();
	        }
	        if (this.options.length <= 0) {
	            return;
	        }
	        if (this.multiple === true) {
	            this.active.push(value);
	            this.data.next(this.active);
	        }
	        if (this.multiple === false) {
	            this.active[0] = value;
	            this.data.next(this.active[0]);
	        }
	        this.doEvent('selected', value);
	        this.hideOptions();
	        if (this.multiple === true) {
	            this.focusToInput('');
	        }
	        else {
	            this.element.nativeElement.querySelector('.ui-select-container').focus();
	        }
	    };
	    Select.prototype.selectActive = function (value) {
	        this.activeOption = value;
	    };
	    Select.prototype.isActive = function (value) {
	        return this.activeOption.text === value.text;
	    };
	    Select = __decorate([
	        angular2_1.Component({
	            selector: 'ng2-select',
	            properties: [
	                'allowClear',
	                'placeholder',
	                'initData:data',
	                'items',
	                'disabled',
	                'multiple'],
	            events: ['selected', 'removed', 'typed', 'data']
	        }),
	        angular2_1.View({
	            template: "\n  <div tabindex=\"0\"\n     *ng-if=\"multiple === false\"\n     (keyup)=\"mainClick($event)\"\n     class=\"ui-select-container ui-select-bootstrap dropdown open\">\n    <div [ng-class]=\"{'ui-disabled': disabled}\"></div>\n    <div class=\"ui-select-match\"\n         *ng-if=\"!inputMode\">\n      <span tabindex=\"-1\"\n          class=\"btn btn-default btn-secondary form-control ui-select-toggle\"\n          (^click)=\"matchClick()\"\n          style=\"outline: 0;\">\n        <span *ng-if=\"active.length <= 0\" class=\"ui-select-placeholder text-muted\">{{placeholder}}</span>\n        <span *ng-if=\"active.length > 0\" class=\"ui-select-match-text pull-left\"\n              [ng-class]=\"{'ui-select-allow-clear': allowClear && active.length > 0}\">{{active[0].text}}</span>\n        <i class=\"dropdown-toggle pull-right\"></i>\n        <i class=\"caret pull-right\"></i>\n        <a *ng-if=\"allowClear && active.length>0\" style=\"margin-right: 10px; padding: 0;\"\n          (click)=\"remove(activeOption)\" class=\"btn btn-xs btn-link pull-right\">\n          <i class=\"glyphicon glyphicon-remove\"></i>\n        </a>\n      </span>\n    </div>\n    <input type=\"text\" autocomplete=\"false\" tabindex=\"-1\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           [disabled]=\"disabled\"\n           class=\"form-control ui-select-search\"\n           *ng-if=\"inputMode\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\">\n    " + optionsTemplate + "\n</div>\n\n<div tabindex=\"0\"\n     *ng-if=\"multiple === true\"\n     (keyup)=\"mainClick($event)\"\n     (focus)=\"focusToInput('')\"\n     class=\"ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control open\">\n    <div [ng-class]=\"{'ui-disabled': disabled}\"></div>\n    <span class=\"ui-select-match\">\n        <span *ng-for=\"#a of active\">\n            <span class=\"ui-select-match-item btn btn-default btn-secondary btn-xs\"\n                  tabindex=\"-1\"\n                  type=\"button\"\n                  [ng-class]=\"{'btn-default': true}\">\n               <a class=\"close ui-select-match-close\"\n                  (click)=\"remove(a)\">&nbsp;&times;</a>\n               <span>{{a.text}}</span>\n           </span>\n        </span>\n    </span>\n    <input type=\"text\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           (click)=\"matchClick($event)\"\n           [disabled]=\"disabled\"\n           autocomplete=\"false\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           class=\"ui-select-search input-xs\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\"\n           role=\"combobox\">\n    " + optionsTemplate + "\n</div>\n  ",
	            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
	            pipes: [select_pipes_1.HightlightPipe]
	        }), 
	        __metadata('design:paramtypes', [angular2_1.ElementRef])
	    ], Select);
	    return Select;
	})();
	exports.Select = Select;
	var Select;
	(function (Select) {
	    var Behavior = (function () {
	        function Behavior(actor) {
	            this.actor = actor;
	            this.optionsMap = new Map();
	        }
	        Behavior.prototype.getActiveIndex = function (optionsMap) {
	            if (optionsMap === void 0) { optionsMap = null; }
	            var ai = this.actor.options.indexOf(this.actor.activeOption);
	            if (ai < 0 && optionsMap !== null) {
	                ai = optionsMap.get(this.actor.activeOption.id);
	            }
	            return ai;
	        };
	        Behavior.prototype.fillOptionsMap = function () {
	            var _this = this;
	            this.optionsMap.clear();
	            var startPos = 0;
	            this.actor.itemObjects.map(function (i) {
	                startPos = i.fillChildrenHash(_this.optionsMap, startPos);
	            });
	        };
	        Behavior.prototype.ensureHighlightVisible = function (optionsMap) {
	            if (optionsMap === void 0) { optionsMap = null; }
	            var container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
	            if (!container) {
	                return;
	            }
	            var choices = container.querySelectorAll('.ui-select-choices-row');
	            if (choices.length < 1) {
	                return;
	            }
	            var activeIndex = this.getActiveIndex(optionsMap);
	            if (activeIndex < 0) {
	                return;
	            }
	            var highlighted = choices[activeIndex];
	            if (!highlighted) {
	                return;
	            }
	            var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
	            var height = container.offsetHeight;
	            if (posY > height) {
	                container.scrollTop += posY - height;
	            }
	            else if (posY < highlighted.clientHeight) {
	                container.scrollTop -= highlighted.clientHeight - posY;
	            }
	        };
	        return Behavior;
	    })();
	    Select.Behavior = Behavior;
	    var GenericBehavior = (function (_super) {
	        __extends(GenericBehavior, _super);
	        function GenericBehavior(actor) {
	            _super.call(this, actor);
	            this.actor = actor;
	        }
	        GenericBehavior.prototype.first = function () {
	            this.actor.activeOption = this.actor.options[0];
	            _super.prototype.ensureHighlightVisible.call(this);
	        };
	        GenericBehavior.prototype.last = function () {
	            this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
	            _super.prototype.ensureHighlightVisible.call(this);
	        };
	        GenericBehavior.prototype.prev = function () {
	            var index = this.actor.options.indexOf(this.actor.activeOption);
	            this.actor.activeOption = this.actor
	                .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
	            _super.prototype.ensureHighlightVisible.call(this);
	        };
	        GenericBehavior.prototype.next = function () {
	            var index = this.actor.options.indexOf(this.actor.activeOption);
	            this.actor.activeOption = this.actor
	                .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
	            _super.prototype.ensureHighlightVisible.call(this);
	        };
	        GenericBehavior.prototype.filter = function (query) {
	            var _this = this;
	            var options = this.actor.itemObjects
	                .filter(function (option) { return query.test(option.text) &&
	                (_this.actor.multiple === false ||
	                    (_this.actor.multiple === true &&
	                        _this.actor.active.indexOf(option) < 0)); });
	            this.actor.options = options;
	            if (this.actor.options.length > 0) {
	                this.actor.activeOption = this.actor.options[0];
	                _super.prototype.ensureHighlightVisible.call(this);
	            }
	        };
	        return GenericBehavior;
	    })(Behavior);
	    Select.GenericBehavior = GenericBehavior;
	    var ChildrenBehavior = (function (_super) {
	        __extends(ChildrenBehavior, _super);
	        function ChildrenBehavior(actor) {
	            _super.call(this, actor);
	            this.actor = actor;
	        }
	        ChildrenBehavior.prototype.first = function () {
	            this.actor.activeOption = this.actor.options[0].children[0];
	            this.fillOptionsMap();
	            this.ensureHighlightVisible(this.optionsMap);
	        };
	        ChildrenBehavior.prototype.last = function () {
	            this.actor.activeOption =
	                this.actor
	                    .options[this.actor.options.length - 1]
	                    .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
	            this.fillOptionsMap();
	            this.ensureHighlightVisible(this.optionsMap);
	        };
	        ChildrenBehavior.prototype.prev = function () {
	            var _this = this;
	            var indexParent = this.actor.options
	                .findIndex(function (a) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === a.id; });
	            var index = this.actor.options[indexParent].children
	                .findIndex(function (a) { return _this.actor.activeOption && _this.actor.activeOption.id === a.id; });
	            this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
	            if (!this.actor.activeOption) {
	                if (this.actor.options[indexParent - 1]) {
	                    this.actor.activeOption = this.actor
	                        .options[indexParent - 1]
	                        .children[this.actor.options[indexParent - 1].children.length - 1];
	                }
	            }
	            if (!this.actor.activeOption) {
	                this.last();
	            }
	            this.fillOptionsMap();
	            this.ensureHighlightVisible(this.optionsMap);
	        };
	        ChildrenBehavior.prototype.next = function () {
	            var _this = this;
	            var indexParent = this.actor.options
	                .findIndex(function (a) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === a.id; });
	            var index = this.actor.options[indexParent].children
	                .findIndex(function (a) { return _this.actor.activeOption && _this.actor.activeOption.id === a.id; });
	            this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
	            if (!this.actor.activeOption) {
	                if (this.actor.options[indexParent + 1]) {
	                    this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
	                }
	            }
	            if (!this.actor.activeOption) {
	                this.first();
	            }
	            this.fillOptionsMap();
	            this.ensureHighlightVisible(this.optionsMap);
	        };
	        ChildrenBehavior.prototype.filter = function (query) {
	            var options = [];
	            var optionsMap = new Map();
	            var startPos = 0;
	            for (var _i = 0, _a = this.actor.itemObjects; _i < _a.length; _i++) {
	                var si = _a[_i];
	                var children = si.children.filter(function (option) { return query.test(option.text); });
	                startPos = si.fillChildrenHash(optionsMap, startPos);
	                if (children.length > 0) {
	                    var newSi = si.getSimilar();
	                    newSi.children = children;
	                    options.push(newSi);
	                }
	            }
	            this.actor.options = options;
	            if (this.actor.options.length > 0) {
	                this.actor.activeOption = this.actor.options[0].children[0];
	                _super.prototype.ensureHighlightVisible.call(this, optionsMap);
	            }
	        };
	        return ChildrenBehavior;
	    })(Behavior);
	    Select.ChildrenBehavior = ChildrenBehavior;
	})(Select = exports.Select || (exports.Select = {}));
	exports.select = [Select];


/***/ }

});
//# sourceMappingURL=angular2-select.js.map