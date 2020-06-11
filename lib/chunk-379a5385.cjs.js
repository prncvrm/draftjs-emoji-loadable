'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var immutable = require('immutable');
var keys = _interopDefault(require('lodash/keys'));
var draftJs = require('draft-js');
var clsx = _interopDefault(require('clsx'));
var emojione = _interopDefault(require('emojione'));
var PropTypes = _interopDefault(require('prop-types'));
var loadable = _interopDefault(require('@loadable/component'));
var strategy = _interopDefault(require('emojione/emoji.json'));
var FaSmileO = _interopDefault(require('react-icons/lib/fa/smile-o'));
var FaPaw = _interopDefault(require('react-icons/lib/fa/paw'));
var FaCutlery = _interopDefault(require('react-icons/lib/fa/cutlery'));
var FaFutbolO = _interopDefault(require('react-icons/lib/fa/futbol-o'));
var FaPlane = _interopDefault(require('react-icons/lib/fa/plane'));
var FaBell = _interopDefault(require('react-icons/lib/fa/bell'));
var FaHeart = _interopDefault(require('react-icons/lib/fa/heart'));
var FaFlag = _interopDefault(require('react-icons/lib/fa/flag'));
var findWithRegex = _interopDefault(require('find-with-regex'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Emoji = function Emoji(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      cacheBustParam = _ref.cacheBustParam,
      imagePath = _ref.imagePath,
      imageType = _ref.imageType,
      className = _ref.className,
      decoratedText = _ref.decoratedText,
      useNativeArt = _ref.useNativeArt,
      props = _objectWithoutProperties(_ref, ["theme", "cacheBustParam", "imagePath", "imageType", "className", "decoratedText", "useNativeArt"]);

  var shortName = emojione.toShort(decoratedText);
  var emojiDisplay = null;

  if (useNativeArt === true) {
    emojiDisplay = /*#__PURE__*/React__default.createElement("span", {
      title: emojione.toShort(decoratedText)
    }, props.children);
  } else {
    // short name to image url code steal from emojione source code
    var shortNameForImage = emojione.emojioneList[shortName].unicode[emojione.emojioneList[shortName].unicode.length - 1];
    var backgroundImage = "url(".concat(imagePath).concat(shortNameForImage, ".").concat(imageType).concat(cacheBustParam, ")");
    var combinedClassName = clsx(theme.emoji, className);
    emojiDisplay = /*#__PURE__*/React__default.createElement("span", {
      className: combinedClassName,
      title: emojione.toShort(decoratedText),
      style: {
        backgroundImage: backgroundImage
      }
    }, props.children);
  }

  return emojiDisplay;
};

var newEmojiListWithOutPriorityList = function newEmojiListWithOutPriorityList(priorityList) {
  var list = {};

  for (var key in emojione.emojioneList) {
    // eslint-disable-line no-restricted-syntax
    if (priorityList.hasOwnProperty(key)) {
      // eslint-disable-line no-prototype-builtins
      continue; // eslint-disable-line no-continue
    }

    list[key] = emojione.emojioneList[key].unicode;
  }

  return _objectSpread2(_objectSpread2({}, priorityList), list);
};

var emojiList = {};

emojiList.setPriorityList = function (newPriorityList) {
  // re-generate emojiList when set PriorityList
  emojiList.list = newEmojiListWithOutPriorityList(newPriorityList);
}; // init emojiList


var priorityList = {
  ':thumbsup:': ['1f44d'],
  ':smile:': ['1f604'],
  ':heart:': ['2764-fe0f', '2764'],
  ':ok_hand:': ['1f44c'],
  ':joy:': ['1f602'],
  ':tada:': ['1f389'],
  ':see_no_evil:': ['1f648'],
  ':raised_hands:': ['1f64c'],
  ':100:': ['1f4af']
};
emojiList.setPriorityList(priorityList);

/* eslint-disable */
// Original can be found here: https://github.com/Ranks/emojione
var convertShortNameToUnicode = function convertShortNameToUnicode(unicode) {
  if (unicode.indexOf('-') > -1) {
    var parts = [];
    var s = unicode.split('-');

    for (var i = 0; i < s.length; i++) {
      var part = parseInt(s[i], 16);

      if (part >= 0x10000 && part <= 0x10ffff) {
        var hi = Math.floor((part - 0x10000) / 0x400) + 0xd800;
        var lo = (part - 0x10000) % 0x400 + 0xdc00;
        part = String.fromCharCode(hi) + String.fromCharCode(lo);
      } else {
        part = String.fromCharCode(part);
      }

      parts.push(part);
    }

    return parts.join('');
  } else {
    var s = parseInt(unicode, 16);

    if (s >= 0x10000 && s <= 0x10ffff) {
      var hi = Math.floor((s - 0x10000) / 0x400) + 0xd800;
      var lo = (s - 0x10000) % 0x400 + 0xdc00;
      return String.fromCharCode(hi) + String.fromCharCode(lo);
    } else {
      return String.fromCharCode(s);
    }
  }
};

var Entry = /*#__PURE__*/function (_Component) {
  _inherits(Entry, _Component);

  var _super = _createSuper(Entry);

  function Entry(props) {
    var _this;

    _classCallCheck(this, Entry);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      if (_this.mouseDown) {
        _this.mouseDown = false;

        _this.props.onEmojiSelect(_this.props.emoji);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
      // Note: important to avoid a content edit change
      event.preventDefault();
      _this.mouseDown = true;
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function () {
      _this.props.onEmojiFocus(_this.props.index);
    });

    _this.mouseDown = false;
    return _this;
  }

  _createClass(Entry, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.mouseDown = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          imagePath = _this$props.imagePath,
          imageType = _this$props.imageType,
          cacheBustParam = _this$props.cacheBustParam,
          useNativeArt = _this$props.useNativeArt,
          isFocused = _this$props.isFocused,
          id = _this$props.id;
      var className = isFocused ? theme.emojiSuggestionsEntryFocused : theme.emojiSuggestionsEntry;
      var emojiDisplay = null;

      if (useNativeArt === true) {
        var unicode = emojiList.list[this.props.emoji][0];
        emojiDisplay = convertShortNameToUnicode(unicode);
      } else {
        // short name to image url code steal from emojione source code
        var shortNameForImage = emojione.emojioneList[this.props.emoji].unicode[emojione.emojioneList[this.props.emoji].unicode.length - 1];
        var fullImagePath = "".concat(imagePath).concat(shortNameForImage, ".").concat(imageType).concat(cacheBustParam);
        emojiDisplay = /*#__PURE__*/React__default.createElement("img", {
          src: fullImagePath,
          className: theme.emojiSuggestionsEntryIcon,
          role: "presentation"
        });
      }

      return /*#__PURE__*/React__default.createElement("div", {
        className: className,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseEnter: this.onMouseEnter,
        role: "option",
        id: id,
        "aria-selected": isFocused ? 'true' : null
      }, emojiDisplay, /*#__PURE__*/React__default.createElement("span", {
        className: theme.emojiSuggestionsEntryText
      }, this.props.emoji));
    }
  }]);

  return Entry;
}(React.Component);

var getWordAt = function getWordAt(string, position) {
  // Perform type conversions.
  var str = String(string); // eslint-disable-next-line no-bitwise

  var pos = Number(position) >>> 0; // Search for the word's beginning and end.

  var left = str.slice(0, pos + 1).search(/\S+$/);
  var right = str.slice(pos).search(/\s/); // The last word in the string is a special case.

  if (right < 0) {
    return {
      word: str.slice(left),
      begin: left,
      end: str.length
    };
  } // Return the word, using the located bounds to extract it from the string.


  return {
    word: str.slice(left, right + pos),
    begin: left,
    end: right + pos
  };
};

var getSearchText = function getSearchText(editorState, selection) {
  var anchorKey = selection.getAnchorKey();
  var anchorOffset = selection.getAnchorOffset() - 1;
  var currentContent = editorState.getCurrentContent();
  var currentBlock = currentContent.getBlockForKey(anchorKey);
  var blockText = currentBlock.getText();
  return getWordAt(blockText, anchorOffset);
};

// or replaced emoji shortname like ":thumbsup:". Behavior determined by `Mode` parameter.

var Mode = {
  INSERT: 'INSERT',
  // insert emoji to current cursor position
  REPLACE: 'REPLACE' // replace emoji shortname

};

var addEmoji = function addEmoji(editorState, emojiShortName) {
  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Mode.INSERT;
  var unicode = emojiList.list[emojiShortName][0];
  var emoji = convertShortNameToUnicode(unicode);
  var contentState = editorState.getCurrentContent();
  var contentStateWithEntity = contentState.createEntity('emoji', 'IMMUTABLE', {
    emojiUnicode: emoji
  });
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  var currentSelectionState = editorState.getSelection();
  var emojiAddedContent;
  var emojiEndPos = 0;
  var blockSize = 0;

  switch (mode) {
    case Mode.INSERT:
      {
        // in case text is selected it is removed and then the emoji is added
        var afterRemovalContentState = draftJs.Modifier.removeRange(contentState, currentSelectionState, 'backward'); // deciding on the position to insert emoji

        var targetSelection = afterRemovalContentState.getSelectionAfter();
        emojiAddedContent = draftJs.Modifier.insertText(afterRemovalContentState, targetSelection, emoji, null, entityKey);
        emojiEndPos = targetSelection.getAnchorOffset();
        var blockKey = targetSelection.getAnchorKey();
        blockSize = contentState.getBlockForKey(blockKey).getLength();
        break;
      }

    case Mode.REPLACE:
      {
        var _getSearchText = getSearchText(editorState, currentSelectionState),
            begin = _getSearchText.begin,
            end = _getSearchText.end; // Get the selection of the :emoji: search text


        var emojiTextSelection = currentSelectionState.merge({
          anchorOffset: begin,
          focusOffset: end
        });
        emojiAddedContent = draftJs.Modifier.replaceText(contentState, emojiTextSelection, emoji, null, entityKey);
        emojiEndPos = end;

        var _blockKey = emojiTextSelection.getAnchorKey();

        blockSize = contentState.getBlockForKey(_blockKey).getLength();
        break;
      }

    default:
      throw new Error('Unidentified value of "mode"');
  } // If the emoji is inserted at the end, a space is appended right after for
  // a smooth writing experience.


  if (emojiEndPos === blockSize) {
    emojiAddedContent = draftJs.Modifier.insertText(emojiAddedContent, emojiAddedContent.getSelectionAfter(), ' ');
  }

  var newEditorState = draftJs.EditorState.push(editorState, emojiAddedContent, 'insert-emoji');
  return draftJs.EditorState.forceSelection(newEditorState, emojiAddedContent.getSelectionAfter());
};

var decodeOffsetKey = function decodeOffsetKey(offsetKey) {
  var _offsetKey$split = offsetKey.split('-'),
      _offsetKey$split2 = _slicedToArray(_offsetKey$split, 3),
      blockKey = _offsetKey$split2[0],
      decoratorKey = _offsetKey$split2[1],
      leafKey = _offsetKey$split2[2];

  return {
    blockKey: blockKey,
    decoratorKey: parseInt(decoratorKey, 10),
    leafKey: parseInt(leafKey, 10)
  };
};

var EmojiSuggestions = /*#__PURE__*/function (_Component) {
  _inherits(EmojiSuggestions, _Component);

  var _super = _createSuper(EmojiSuggestions);

  function EmojiSuggestions() {
    var _this;

    _classCallCheck(this, EmojiSuggestions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isActive: false,
      focusedOptionIndex: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onEditorStateChange", function (editorState) {
      var searches = _this.props.store.getAllSearches(); // if no search portal is active there is no need to show the popover


      if (searches.size === 0) {
        return editorState;
      }

      var removeList = function removeList() {
        _this.props.store.resetEscapedSearch();

        _this.closeDropdown();

        return editorState;
      }; // get the current selection


      var selection = editorState.getSelection();
      var anchorKey = selection.getAnchorKey();
      var anchorOffset = selection.getAnchorOffset(); // the list should not be visible if a range is selected or the editor has no focus

      if (!selection.isCollapsed() || !selection.getHasFocus()) return removeList(); // identify the start & end positon of each search-text

      var offsetDetails = searches.map(function (offsetKey) {
        return decodeOffsetKey(offsetKey);
      }); // a leave can be empty when it is removed due e.g. using backspace

      var leaves = offsetDetails.filter(function (_ref) {
        var blockKey = _ref.blockKey;
        return blockKey === anchorKey;
      }).map(function (_ref2) {
        var blockKey = _ref2.blockKey,
            decoratorKey = _ref2.decoratorKey,
            leafKey = _ref2.leafKey;
        return editorState.getBlockTree(blockKey).getIn([decoratorKey, 'leaves', leafKey]);
      }); // if all leaves are undefined the popover should be removed

      if (leaves.every(function (leave) {
        return leave === undefined;
      })) {
        return removeList();
      } // Checks that the cursor is after the @ character but still somewhere in
      // the word (search term). Setting it to allow the cursor to be left of
      // the @ causes troubles due selection confusion.


      var plainText = editorState.getCurrentContent().getPlainText();
      var selectionIsInsideWord = leaves.filter(function (leave) {
        return leave !== undefined;
      }).map(function (_ref3) {
        var start = _ref3.start,
            end = _ref3.end;
        return start === 0 && anchorOffset === 1 && plainText.charAt(anchorOffset) !== ':' && /(\s|^):[\w]*/.test(plainText) && anchorOffset <= end || // : is the first character
        anchorOffset > start + 1 && anchorOffset <= end
        /*: is in the text or at the end*/
        ;
      });
      if (selectionIsInsideWord.every(function (isInside) {
        return isInside === false;
      })) return removeList();
      _this.activeOffsetKey = selectionIsInsideWord.filter(function (value) {
        return value === true;
      }).keySeq().first();

      _this.onSearchChange(editorState, selection); // make sure the escaped search is reseted in the cursor since the user
      // already switched to another emoji search


      if (!_this.props.store.isEscaped(_this.activeOffsetKey)) {
        _this.props.store.resetEscapedSearch();
      } // If none of the above triggered to close the window, it's safe to assume
      // the dropdown should be open. This is useful when a user focuses on another
      // input field and then comes back: the dropdown will again.


      if (!_this.state.isActive && !_this.props.store.isEscaped(_this.activeOffsetKey)) {
        _this.openDropdown();
      } // makes sure the focused index is reseted every time a new selection opens
      // or the selection was moved to another emoji search


      if (_this.lastSelectionIsInsideWord === undefined || !selectionIsInsideWord.equals(_this.lastSelectionIsInsideWord)) {
        _this.setState({
          focusedOptionIndex: 0
        });
      }

      _this.lastSelectionIsInsideWord = selectionIsInsideWord;
      return editorState;
    });

    _defineProperty(_assertThisInitialized(_this), "onSearchChange", function (editorState, selection) {
      var _getSearchText = getSearchText(editorState, selection),
          word = _getSearchText.word;

      var searchValue = word.substring(1, word.length);

      if (_this.lastSearchValue !== searchValue && typeof _this.props.onSearchChange === 'function') {
        _this.lastSearchValue = searchValue;

        _this.props.onSearchChange({
          value: searchValue
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDownArrow", function (keyboardEvent) {
      keyboardEvent.preventDefault();
      var newIndex = _this.state.focusedOptionIndex + 1;

      _this.onEmojiFocus(newIndex >= _this.filteredEmojis.size ? 0 : newIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "onTab", function (keyboardEvent) {
      keyboardEvent.preventDefault();

      _this.commitSelection();
    });

    _defineProperty(_assertThisInitialized(_this), "onUpArrow", function (keyboardEvent) {
      keyboardEvent.preventDefault();

      if (_this.filteredEmojis.size > 0) {
        var newIndex = _this.state.focusedOptionIndex - 1;

        _this.onEmojiFocus(Math.max(newIndex, 0));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEscape", function (keyboardEvent) {
      keyboardEvent.preventDefault();

      var activeOffsetKey = _this.lastSelectionIsInsideWord.filter(function (value) {
        return value === true;
      }).keySeq().first();

      _this.props.store.escapeSearch(activeOffsetKey);

      _this.closeDropdown(); // to force a re-render of the outer component to change the aria props


      _this.props.store.setEditorState(_this.props.store.getEditorState());
    });

    _defineProperty(_assertThisInitialized(_this), "onEmojiSelect", function (emoji) {
      _this.closeDropdown();

      var newEditorState = addEmoji(_this.props.store.getEditorState(), emoji, Mode.REPLACE);

      _this.props.store.setEditorState(newEditorState);
    });

    _defineProperty(_assertThisInitialized(_this), "onEmojiFocus", function (index) {
      var descendant = "emoji-option-".concat(_this.key, "-").concat(index);
      _this.props.ariaProps.ariaActiveDescendantID = descendant;

      _this.setState({
        focusedOptionIndex: index
      }); // to force a re-render of the outer component to change the aria props


      _this.props.store.setEditorState(_this.props.store.getEditorState());
    });

    _defineProperty(_assertThisInitialized(_this), "getEmojisForFilter", function () {
      var selection = _this.props.store.getEditorState().getSelection();

      var _getSearchText2 = getSearchText(_this.props.store.getEditorState(), selection),
          word = _getSearchText2.word;

      var emojiValue = word.substring(1, word.length).toLowerCase();

      var filteredValues = _this.props.shortNames.filter(function (emojiShortName) {
        return !emojiValue || emojiShortName.indexOf(emojiValue) > -1;
      });

      var size = filteredValues.size < 9 ? filteredValues.size : 9;
      return filteredValues.setSize(size);
    });

    _defineProperty(_assertThisInitialized(_this), "commitSelection", function () {
      _this.onEmojiSelect(_this.filteredEmojis.get(_this.state.focusedOptionIndex));

      return 'handled';
    });

    _defineProperty(_assertThisInitialized(_this), "openDropdown", function () {
      // This is a really nasty way of attaching & releasing the key related functions.
      // It assumes that the keyFunctions object will not loose its reference and
      // by this we can replace inner parameters spread over different modules.
      // This better be some registering & unregistering logic. PRs are welcome :)
      _this.props.callbacks.handleReturn = _this.commitSelection;

      _this.props.callbacks.keyBindingFn = function (keyboardEvent) {
        // arrow down
        if (keyboardEvent.keyCode === 40) {
          _this.onDownArrow(keyboardEvent);
        } // arrow up


        if (keyboardEvent.keyCode === 38) {
          _this.onUpArrow(keyboardEvent);
        } // escape


        if (keyboardEvent.keyCode === 27) {
          _this.onEscape(keyboardEvent);
        } // tab


        if (keyboardEvent.keyCode === 9) {
          _this.onTab(keyboardEvent);
        }
      };

      var descendant = "emoji-option-".concat(_this.key, "-").concat(_this.state.focusedOptionIndex);
      _this.props.ariaProps.ariaActiveDescendantID = descendant;
      _this.props.ariaProps.ariaOwneeID = "emojis-list-".concat(_this.key);
      _this.props.ariaProps.ariaHasPopup = 'true';
      _this.props.ariaProps.ariaExpanded = true;

      _this.setState({
        isActive: true
      });

      if (_this.props.onOpen) {
        _this.props.onOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeDropdown", function () {
      // make sure none of these callbacks are triggered
      _this.props.callbacks.keyBindingFn = undefined;
      _this.props.callbacks.handleReturn = undefined;
      _this.props.ariaProps.ariaHasPopup = 'false';
      _this.props.ariaProps.ariaExpanded = false;
      _this.props.ariaProps.ariaActiveDescendantID = undefined;
      _this.props.ariaProps.ariaOwneeID = undefined;

      _this.setState({
        isActive: false
      });

      if (_this.props.onClose) {
        _this.props.onClose();
      }
    });

    return _this;
  }

  _createClass(EmojiSuggestions, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.key = draftJs.genKey();
      this.props.callbacks.onChange = this.onEditorStateChange;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.popover) {
        // In case the list shrinks there should be still an option focused.
        // Note: this might run multiple times and deduct 1 until the condition is
        // not fullfilled anymore.
        var size = this.filteredEmojis.size;

        if (size > 0 && this.state.focusedOptionIndex >= size) {
          this.setState({
            focusedOptionIndex: size - 1
          });
        }

        if (size <= 0) {
          this.closeDropdown();
        }

        var decoratorRect = this.props.store.getPortalClientRect(this.activeOffsetKey);
        var newStyles = this.props.positionSuggestions({
          decoratorRect: decoratorRect,
          prevProps: prevProps,
          prevState: prevState,
          props: this.props,
          state: this.state,
          filteredEmojis: this.filteredEmojis,
          popover: this.popover
        });
        Object.keys(newStyles).forEach(function (key) {
          _this2.popover.style[key] = newStyles[key];
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.callbacks.onChange = undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.state.isActive) {
        return null;
      }

      this.filteredEmojis = this.getEmojisForFilter();

      var _this$props = this.props,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          cacheBustParam = _this$props.cacheBustParam,
          imagePath = _this$props.imagePath,
          imageType = _this$props.imageType,
          ariaProps = _this$props.ariaProps,
          callbacks = _this$props.callbacks,
          onClose = _this$props.onClose,
          onOpen = _this$props.onOpen,
          onSearchChange = _this$props.onSearchChange,
          positionSuggestions = _this$props.positionSuggestions,
          shortNames = _this$props.shortNames,
          store = _this$props.store,
          useNativeArt = _this$props.useNativeArt,
          restProps = _objectWithoutProperties(_this$props, ["theme", "cacheBustParam", "imagePath", "imageType", "ariaProps", "callbacks", "onClose", "onOpen", "onSearchChange", "positionSuggestions", "shortNames", "store", "useNativeArt"]);

      return /*#__PURE__*/React__default.createElement("div", _extends({}, restProps, {
        className: theme.emojiSuggestions,
        role: "listbox",
        id: "emojis-list-".concat(this.key),
        ref: function ref(element) {
          _this3.popover = element;
        }
      }), this.filteredEmojis.map(function (emoji, index) {
        return /*#__PURE__*/React__default.createElement(Entry, {
          key: emoji,
          onEmojiSelect: _this3.onEmojiSelect,
          onEmojiFocus: _this3.onEmojiFocus,
          isFocused: _this3.state.focusedOptionIndex === index,
          emoji: emoji,
          index: index,
          id: "emoji-option-".concat(_this3.key, "-").concat(index),
          theme: theme,
          imagePath: imagePath,
          imageType: imageType,
          cacheBustParam: cacheBustParam,
          useNativeArt: useNativeArt
        });
      }).toJS());
    }
  }]);

  return EmojiSuggestions;
}(React.Component);

var EmojiSuggestionsPortal = /*#__PURE__*/function (_Component) {
  _inherits(EmojiSuggestionsPortal, _Component);

  var _super = _createSuper(EmojiSuggestionsPortal);

  function EmojiSuggestionsPortal(props) {
    var _this;

    _classCallCheck(this, EmojiSuggestionsPortal);

    _this = _super.call(this, props);

    _this.searchPortalRef = function (element) {
      _this.searchPortal = element;
    };

    return _this;
  }

  _createClass(EmojiSuggestionsPortal, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.props.store.register(this.props.offsetKey);
      this.updatePortalClientRect(this.props); // trigger a re-render so the EmojiSuggestions becomes active

      this.props.setEditorState(this.props.getEditorState());
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.updatePortalClientRect(nextProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.store.unregister(this.props.offsetKey);
    }
  }, {
    key: "updatePortalClientRect",
    value: function updatePortalClientRect(props) {
      var _this2 = this;

      this.props.store.updatePortalClientRect(props.offsetKey, function () {
        return _this2.searchPortal.getBoundingClientRect();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default.createElement("span", {
        className: this.key,
        ref: this.searchPortalRef
      }, this.props.children);
    }
  }]);

  return EmojiSuggestionsPortal;
}(React.Component);

/* Idea from https://github.com/tommoor/emojione-picker */
function createEmojisFromStrategy(strategy) {
  var emojis = {}; // categorise and nest emoji
  // sort ensures that modifiers appear unmodified keys

  var keys = Object.keys(strategy);
  keys.forEach(function (key) {
    var value = strategy[key]; // skip unknown categories

    if (value.category !== 'modifier') {
      if (!emojis[value.category]) emojis[value.category] = {};
      var match = key.match(/(.*?)_tone(.*?)$/);

      if (match) {
        // this check is to stop the plugin from failing in the case that the
        // emoji strategy miscategorizes tones - which was the case here:
        // https://github.com/Ranks/emojione/pull/330
        var unmodifiedEmojiExists = !!emojis[value.category][match[1]];

        if (unmodifiedEmojiExists) {
          emojis[value.category][match[1]][match[2]] = value.shortname;
        }
      } else {
        emojis[value.category][key] = [value.shortname];
      }
    }
  });
  return emojis;
}

var defaultEmojiGroups = [{
  title: 'People',
  icon: /*#__PURE__*/React__default.createElement(FaSmileO, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['people']
}, {
  title: 'Nature',
  icon: /*#__PURE__*/React__default.createElement(FaPaw, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['nature']
}, {
  title: 'Food & Drink',
  icon: /*#__PURE__*/React__default.createElement(FaCutlery, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['food']
}, {
  title: 'Activity',
  icon: /*#__PURE__*/React__default.createElement(FaFutbolO, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['activity']
}, {
  title: 'Travel & Places',
  icon: /*#__PURE__*/React__default.createElement(FaPlane, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['travel']
}, {
  title: 'Objects',
  icon: /*#__PURE__*/React__default.createElement(FaBell, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['objects']
}, {
  title: 'Symbols',
  icon: /*#__PURE__*/React__default.createElement(FaHeart, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['symbols']
}, {
  title: 'Flags',
  icon: /*#__PURE__*/React__default.createElement(FaFlag, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['flags']
}];

var Popover = loadable(function () {
  return new Promise(function (resolve) { resolve(require('./chunk-220f7ad4.cjs.js')); });
}, {
  fallback: /*#__PURE__*/React__default.createElement(React__default.Fragment, null)
});
var emojis = createEmojisFromStrategy(strategy);

var EmojiSelect = /*#__PURE__*/function (_Component) {
  _inherits(EmojiSelect, _Component);

  var _super = _createSuper(EmojiSelect);

  function EmojiSelect() {
    var _this;

    _classCallCheck(this, EmojiSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "onButtonMouseUp", function () {
      return _this.state.isOpen ? _this.closePopover() : _this.openPopover();
    });

    _defineProperty(_assertThisInitialized(_this), "openPopover", function () {
      if (!_this.state.isOpen) {
        _this.setState({
          isOpen: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closePopover", function () {
      if (_this.state.isOpen) {
        _this.setState({
          isOpen: false
        });
      }
    });

    return _this;
  }

  _createClass(EmojiSelect, [{
    key: "componentDidMount",
    // When the selector is open and users click anywhere on the page,
    // the selector should close
    value: function componentDidMount() {
      document.addEventListener('click', this.closePopover);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.closePopover);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cacheBustParam = _this$props.cacheBustParam,
          imagePath = _this$props.imagePath,
          imageType = _this$props.imageType,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          store = _this$props.store,
          selectGroups = _this$props.selectGroups,
          selectButtonContent = _this$props.selectButtonContent,
          toneSelectOpenDelay = _this$props.toneSelectOpenDelay,
          useNativeArt = _this$props.useNativeArt;
      var buttonClassName = this.state.isOpen ? theme.emojiSelectButtonPressed : theme.emojiSelectButton;
      return /*#__PURE__*/React__default.createElement("div", {
        className: theme.emojiSelect,
        onClick: this.onClick
      }, /*#__PURE__*/React__default.createElement("button", {
        className: buttonClassName,
        onMouseUp: this.onButtonMouseUp,
        type: "button"
      }, selectButtonContent), this.state.isOpen && /*#__PURE__*/React__default.createElement(Popover, {
        cacheBustParam: cacheBustParam,
        imagePath: imagePath,
        imageType: imageType,
        theme: theme,
        store: store,
        groups: selectGroups,
        emojis: emojis,
        toneSelectOpenDelay: toneSelectOpenDelay,
        isOpen: this.state.isOpen,
        useNativeArt: useNativeArt
      }));
    }
  }]);

  return EmojiSelect;
}(React.Component);

_defineProperty(EmojiSelect, "propTypes", {
  cacheBustParam: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  selectGroups: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    categories: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(emojis))).isRequired
  })),
  selectButtonContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  toneSelectOpenDelay: PropTypes.number,
  useNativeArt: PropTypes.bool
});

_defineProperty(EmojiSelect, "defaultProps", {
  selectButtonContent: '☺',
  selectGroups: defaultEmojiGroups,
  toneSelectOpenDelay: 500
});

var unicodeRegex = new RegExp(emojione.unicodeRegexp, 'g');
var emojiStrategy = (function (contentBlock, callback) {
  findWithRegex(unicodeRegex, contentBlock, callback);
});

var EMOJI_REGEX = /(\s|^):[\w]*/g;
var emojiSuggestionsStrategy = (function (contentBlock, callback) {
  findWithRegex(EMOJI_REGEX, contentBlock, callback);
});

var unicodeRegex$1 = new RegExp(emojione.unicodeRegexp, 'g');
/*
 * Attaches Immutable DraftJS Entities to the Emoji text.
 *
 * This is necessary as emojis consist of 2 characters (unicode). By making them
 * immutable the whole Emoji is removed when hitting backspace.
 */

function attachImmutableEntitiesToEmojis(editorState) {
  var contentState = editorState.getCurrentContent();
  var blocks = contentState.getBlockMap();
  var newContentState = contentState;
  blocks.forEach(function (block) {
    var plainText = block.getText();

    var addEntityToEmoji = function addEntityToEmoji(start, end) {
      var existingEntityKey = block.getEntityAt(start);

      if (existingEntityKey) {
        // avoid manipulation in case the emoji already has an entity
        var entity = newContentState.getEntity(existingEntityKey);

        if (entity && entity.get('type') === 'emoji') {
          return;
        }
      }

      var selection = draftJs.SelectionState.createEmpty(block.getKey()).set('anchorOffset', start).set('focusOffset', end);
      var emojiText = plainText.substring(start, end);
      var contentStateWithEntity = newContentState.createEntity('emoji', 'IMMUTABLE', {
        emojiUnicode: emojiText
      });
      var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      newContentState = draftJs.Modifier.replaceText(newContentState, selection, emojiText, null, entityKey);
    };

    findWithRegex(unicodeRegex$1, block, addEntityToEmoji);
  });

  if (!newContentState.equals(contentState)) {
    return draftJs.EditorState.push(editorState, newContentState, 'convert-to-immutable-emojis');
  }

  return editorState;
}

var getRelativeParent = function getRelativeParent(element) {
  if (!element) {
    return null;
  }

  var position = window.getComputedStyle(element).getPropertyValue('position');

  if (position !== 'static') {
    return element;
  }

  return getRelativeParent(element.parentElement);
};

var positionSuggestions = function positionSuggestions(_ref) {
  var decoratorRect = _ref.decoratorRect,
      popover = _ref.popover,
      state = _ref.state,
      filteredEmojis = _ref.filteredEmojis;
  var relativeParent = getRelativeParent(popover.parentElement);
  var relativeRect = {};

  if (relativeParent) {
    relativeRect.scrollLeft = relativeParent.scrollLeft;
    relativeRect.scrollTop = relativeParent.scrollTop;
    var relativeParentRect = relativeParent.getBoundingClientRect();
    relativeRect.left = decoratorRect.left - relativeParentRect.left;
    relativeRect.top = decoratorRect.top - relativeParentRect.top;
  } else {
    relativeRect.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    relativeRect.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    relativeRect.top = decoratorRect.top;
    relativeRect.left = decoratorRect.left;
  }

  var left = relativeRect.left + relativeRect.scrollLeft;
  var top = relativeRect.top + relativeRect.scrollTop;
  var transform;
  var transition;

  if (state.isActive) {
    if (filteredEmojis.size > 0) {
      transform = 'scale(1)';
      transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    } else {
      transform = 'scale(0)';
      transition = 'all 0.35s cubic-bezier(.3,1,.2,1)';
    }
  }

  return {
    left: "".concat(left, "px"),
    top: "".concat(top, "px"),
    transform: transform,
    transformOrigin: '1em 0%',
    transition: transition
  };
};

var emojiSelectPopoverScrollbar = "e64ft5r";
var emojiSelectPopoverGroupTitle = "e9n6nx";
var defaultTheme = {
  emoji: "e1fggw3u",
  emojiSuggestions: "e2ewt1h",
  emojiSuggestionsEntry: "e1zxfgl",
  emojiSuggestionsEntryFocused: "e6egxgl",
  emojiSuggestionsEntryText: "e1w6j4dy",
  emojiSuggestionsEntryIcon: "e1krewxo",
  emojiSelect: "e1nrrdta",
  emojiSelectButton: "e17kcd0n",
  emojiSelectButtonPressed: "e36nyqi",
  emojiSelectPopover: "e198d9dy",
  emojiSelectPopoverClosed: "es0nvcc",
  emojiSelectPopoverTitle: "e1k9naar",
  emojiSelectPopoverGroups: "enb97n",
  emojiSelectPopoverGroup: "e1qp8ror",
  emojiSelectPopoverGroupTitle: emojiSelectPopoverGroupTitle,
  emojiSelectPopoverGroupList: "ey0flbh",
  emojiSelectPopoverGroupItem: "e9qgnei",
  emojiSelectPopoverToneSelect: "eoharm2",
  emojiSelectPopoverToneSelectList: "e1benm9h",
  emojiSelectPopoverToneSelectItem: "e1dmfczo",
  emojiSelectPopoverEntry: "e1m6k3na",
  emojiSelectPopoverEntryFocused: "e4dumvc",
  emojiSelectPopoverEntryIcon: "ev8bizk",
  emojiSelectPopoverNav: "e57j0sd",
  emojiSelectPopoverNavItem: "e8rzdwx",
  emojiSelectPopoverNavEntry: "e1hmlaz4",
  emojiSelectPopoverNavEntryActive: "e1i42b0q",
  emojiSelectPopoverScrollbar: emojiSelectPopoverScrollbar,
  emojiSelectPopoverScrollbarThumb: "ekri6vz"
};

var defaultImagePath = '//cdn.jsdelivr.net/emojione/assets/svg/';
var defaultImageType = 'svg';
var defaultCacheBustParam = '?v=2.2.7'; // TODO activate/deactivate different the conversion or search part

var index = (function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callbacks = {
    keyBindingFn: undefined,
    handleKeyCommand: undefined,
    handleReturn: undefined,
    onChange: undefined
  };
  var ariaProps = {
    ariaHasPopup: 'false',
    ariaExpanded: false,
    ariaOwneeID: undefined,
    ariaActiveDescendantID: undefined
  };
  var searches = immutable.Map();
  var escapedSearch;
  var clientRectFunctions = immutable.Map();
  var store = {
    getEditorState: undefined,
    setEditorState: undefined,
    getPortalClientRect: function getPortalClientRect(offsetKey) {
      return clientRectFunctions.get(offsetKey)();
    },
    getAllSearches: function getAllSearches() {
      return searches;
    },
    isEscaped: function isEscaped(offsetKey) {
      return escapedSearch === offsetKey;
    },
    escapeSearch: function escapeSearch(offsetKey) {
      escapedSearch = offsetKey;
    },
    resetEscapedSearch: function resetEscapedSearch() {
      escapedSearch = undefined;
    },
    register: function register(offsetKey) {
      searches = searches.set(offsetKey, offsetKey);
    },
    updatePortalClientRect: function updatePortalClientRect(offsetKey, func) {
      clientRectFunctions = clientRectFunctions.set(offsetKey, func);
    },
    unregister: function unregister(offsetKey) {
      searches = searches["delete"](offsetKey);
      clientRectFunctions = clientRectFunctions["delete"](offsetKey);
    }
  }; // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.

  var _config$theme = config.theme,
      theme = _config$theme === void 0 ? defaultTheme : _config$theme,
      _config$imagePath = config.imagePath,
      imagePath = _config$imagePath === void 0 ? defaultImagePath : _config$imagePath,
      _config$imageType = config.imageType,
      imageType = _config$imageType === void 0 ? defaultImageType : _config$imageType,
      allowImageCache = config.allowImageCache,
      _config$positionSugge = config.positionSuggestions,
      positionSuggestions$1 = _config$positionSugge === void 0 ? positionSuggestions : _config$positionSugge,
      priorityList = config.priorityList,
      selectGroups = config.selectGroups,
      selectButtonContent = config.selectButtonContent,
      toneSelectOpenDelay = config.toneSelectOpenDelay,
      useNativeArt = config.useNativeArt;
  var cacheBustParam = allowImageCache ? '' : defaultCacheBustParam; // if priorityList is configured in config then set priorityList

  if (priorityList) emojiList.setPriorityList(priorityList);
  var suggestionsProps = {
    ariaProps: ariaProps,
    cacheBustParam: cacheBustParam,
    callbacks: callbacks,
    imagePath: imagePath,
    imageType: imageType,
    theme: theme,
    store: store,
    positionSuggestions: positionSuggestions$1,
    shortNames: immutable.List(keys(emojiList.list)),
    useNativeArt: useNativeArt
  };
  var selectProps = {
    cacheBustParam: cacheBustParam,
    imagePath: imagePath,
    imageType: imageType,
    theme: theme,
    store: store,
    selectGroups: selectGroups,
    selectButtonContent: selectButtonContent,
    toneSelectOpenDelay: toneSelectOpenDelay,
    useNativeArt: useNativeArt
  };

  var DecoratedEmojiSuggestions = function DecoratedEmojiSuggestions(props) {
    return /*#__PURE__*/React__default.createElement(EmojiSuggestions, _extends({}, props, suggestionsProps));
  };

  var DecoratedEmojiSelect = function DecoratedEmojiSelect(props) {
    return /*#__PURE__*/React__default.createElement(EmojiSelect, _extends({}, props, selectProps));
  };

  var DecoratedEmoji = function DecoratedEmoji(props) {
    return /*#__PURE__*/React__default.createElement(Emoji, _extends({}, props, {
      theme: theme,
      imagePath: imagePath,
      imageType: imageType,
      cacheBustParam: cacheBustParam,
      useNativeArt: useNativeArt
    }));
  };

  var DecoratedEmojiSuggestionsPortal = function DecoratedEmojiSuggestionsPortal(props) {
    return /*#__PURE__*/React__default.createElement(EmojiSuggestionsPortal, _extends({}, props, {
      store: store
    }));
  };

  return {
    EmojiSuggestions: DecoratedEmojiSuggestions,
    EmojiSelect: DecoratedEmojiSelect,
    decorators: [{
      strategy: emojiStrategy,
      component: DecoratedEmoji
    }, {
      strategy: emojiSuggestionsStrategy,
      component: DecoratedEmojiSuggestionsPortal
    }],
    getAccessibilityProps: function getAccessibilityProps() {
      return {
        role: 'combobox',
        ariaAutoComplete: 'list',
        ariaHasPopup: ariaProps.ariaHasPopup,
        ariaExpanded: ariaProps.ariaExpanded,
        ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
        ariaOwneeID: ariaProps.ariaOwneeID
      };
    },
    initialize: function initialize(_ref) {
      var getEditorState = _ref.getEditorState,
          setEditorState = _ref.setEditorState;
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
    keyBindingFn: function keyBindingFn(keyboardEvent) {
      return callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent);
    },
    handleReturn: function handleReturn(keyboardEvent) {
      return callbacks.handleReturn && callbacks.handleReturn(keyboardEvent);
    },
    onChange: function onChange(editorState) {
      var newEditorState = attachImmutableEntitiesToEmojis(editorState);

      if (!newEditorState.getCurrentContent().equals(editorState.getCurrentContent())) {
        // Forcing the current selection ensures that it will be at it's right place.
        // This solves the issue where inserting an Emoji on OSX with Apple's Emoji
        // selector led to the right selection the data, but wrong position in
        // the contenteditable.
        newEditorState = draftJs.EditorState.forceSelection(newEditorState, newEditorState.getSelection());
      }

      if (callbacks.onChange) return callbacks.onChange(newEditorState);
      return newEditorState;
    }
  };
});

exports._assertThisInitialized = _assertThisInitialized;
exports._classCallCheck = _classCallCheck;
exports._createClass = _createClass;
exports._createSuper = _createSuper;
exports._defineProperty = _defineProperty;
exports._extends = _extends;
exports._inherits = _inherits;
exports.addEmoji = addEmoji;
exports.convertShortNameToUnicode = convertShortNameToUnicode;
exports.defaultTheme = defaultTheme;
exports.emojiList = emojiList;
exports.index = index;
