import { _ as _defineProperty, a as _inherits, b as _createSuper, c as _classCallCheck, e as _assertThisInitialized, f as _createClass, g as emojiList, h as convertShortNameToUnicode, j as _extends, k as addEmoji } from './chunk-0888a62c.esm.js';
import React, { Component } from 'react';
import 'immutable';
import 'lodash-es/keys';
import 'draft-js';
import 'clsx';
import emojione from 'emojione';
import PropTypes from 'prop-types';
import '@loadable/component';
import 'emojione/emoji.json';
import 'react-icons/lib/fa/smile-o';
import 'react-icons/lib/fa/paw';
import 'react-icons/lib/fa/cutlery';
import 'react-icons/lib/fa/futbol-o';
import 'react-icons/lib/fa/plane';
import 'react-icons/lib/fa/bell';
import 'react-icons/lib/fa/heart';
import 'react-icons/lib/fa/flag';
import 'find-with-regex';
import { Scrollbars } from 'react-custom-scrollbars';
import toStyle from 'to-style';

var Entry = /*#__PURE__*/function (_Component) {
  _inherits(Entry, _Component);

  var _super = _createSuper(Entry);

  function Entry() {
    var _this;

    _classCallCheck(this, Entry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocused: false
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      if (_this.mouseDown) {
        _this.mouseDown = false;

        _this.props.onEmojiSelect(_this.props.emoji);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function () {
      _this.mouseDown = true;

      _this.props.onEmojiMouseDown(_assertThisInitialized(_this), _this.props.toneSet);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function () {
      if (!_this.props.checkMouseDown()) {
        _this.setState({
          isFocused: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      if (!_this.props.checkMouseDown()) {
        _this.setState({
          isFocused: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "deselect", function () {
      _this.setState({
        isFocused: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "mouseDown", _this.props.mouseDown);

    return _this;
  }

  _createClass(Entry, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          cacheBustParam = _this$props.cacheBustParam,
          imagePath = _this$props.imagePath,
          imageType = _this$props.imageType,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          emoji = _this$props.emoji,
          useNativeArt = _this$props.useNativeArt;
      var isFocused = this.state.isFocused;
      var emojiDisplay = null;

      if (useNativeArt === true) {
        var unicode = emojiList.list[emoji][0];
        emojiDisplay = convertShortNameToUnicode(unicode);
      } else {
        // short name to image url code steal from emojione source code
        var shortNameForImage = emojione.emojioneList[emoji].unicode[emojione.emojioneList[emoji].unicode.length - 1];
        var fullImagePath = "".concat(imagePath).concat(shortNameForImage, ".").concat(imageType).concat(cacheBustParam);
        emojiDisplay = /*#__PURE__*/React.createElement("img", {
          src: fullImagePath,
          className: theme.emojiSelectPopoverEntryIcon,
          draggable: false,
          role: "presentation"
        });
      }

      return /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: isFocused ? theme.emojiSelectPopoverEntryFocused : theme.emojiSelectPopoverEntry,
        onMouseDown: this.onMouseDown,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onMouseUp: this.onMouseUp,
        ref: function ref(element) {
          _this2.button = element;
        }
      }, emojiDisplay);
    }
  }]);

  return Entry;
}(Component);

_defineProperty(Entry, "propTypes", {
  cacheBustParam: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  emoji: PropTypes.string.isRequired,
  mouseDown: PropTypes.bool,
  checkMouseDown: PropTypes.func.isRequired,
  onEmojiSelect: PropTypes.func.isRequired,
  onEmojiMouseDown: PropTypes.func,
  useNativeArt: PropTypes.bool
});

_defineProperty(Entry, "defaultProps", {
  mouseDown: false
});

var Group = /*#__PURE__*/function (_Component) {
  _inherits(Group, _Component);

  var _super = _createSuper(Group);

  function Group() {
    var _this;

    _classCallCheck(this, Group);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasRenderedEmoji: false
    });

    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function (nextProps) {
      if (_this.state.hasRenderedEmoji) {
        return false;
      }

      return nextProps.isActive;
    });

    _defineProperty(_assertThisInitialized(_this), "renderCategory", function (category) {
      var _this$props = _this.props,
          cacheBustParam = _this$props.cacheBustParam,
          imagePath = _this$props.imagePath,
          imageType = _this$props.imageType,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          emojis = _this$props.emojis,
          checkMouseDown = _this$props.checkMouseDown,
          onEmojiSelect = _this$props.onEmojiSelect,
          onEmojiMouseDown = _this$props.onEmojiMouseDown,
          useNativeArt = _this$props.useNativeArt,
          isActive = _this$props.isActive;
      var categoryEmojis = emojis[category];
      return Object.keys(categoryEmojis).map(function (key) {
        return /*#__PURE__*/React.createElement("li", {
          key: categoryEmojis[key][0],
          className: theme.emojiSelectPopoverGroupItem
        }, isActive && /*#__PURE__*/React.createElement(Entry, {
          emoji: categoryEmojis[key][0],
          theme: theme,
          imagePath: imagePath,
          imageType: imageType,
          cacheBustParam: cacheBustParam,
          toneSet: categoryEmojis[key].length > 1 ? categoryEmojis[key] : null,
          checkMouseDown: checkMouseDown,
          onEmojiSelect: onEmojiSelect,
          onEmojiMouseDown: onEmojiMouseDown,
          useNativeArt: useNativeArt
        }));
      });
    });

    return _this;
  }

  _createClass(Group, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.isActive) {
        this.setState({
          hasRenderedEmoji: true
        }); // eslint-disable-line
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _this$props2$theme = _this$props2.theme,
          theme = _this$props2$theme === void 0 ? {} : _this$props2$theme,
          group = _this$props2.group;
      return /*#__PURE__*/React.createElement("section", {
        className: theme.emojiSelectPopoverGroup,
        ref: function ref(element) {
          _this2.container = element;
        }
      }, /*#__PURE__*/React.createElement("h3", {
        className: theme.emojiSelectPopoverGroupTitle
      }, group.title), /*#__PURE__*/React.createElement("ul", {
        className: theme.emojiSelectPopoverGroupList,
        ref: function ref(element) {
          _this2.list = element;
        }
      }, group.categories.map(function (category) {
        return _this2.renderCategory(category);
      })));
    }
  }]);

  return Group;
}(Component);

_defineProperty(Group, "propTypes", {
  cacheBustParam: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  group: PropTypes.object.isRequired,
  emojis: PropTypes.object.isRequired,
  checkMouseDown: PropTypes.func.isRequired,
  onEmojiSelect: PropTypes.func.isRequired,
  onEmojiMouseDown: PropTypes.func.isRequired,
  useNativeArt: PropTypes.bool,
  isActive: PropTypes.bool
});

var Groups = /*#__PURE__*/function (_Component) {
  _inherits(Groups, _Component);

  var _super = _createSuper(Groups);

  function Groups() {
    var _this;

    _classCallCheck(this, Groups);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeGroup: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function (values) {
      var _this$props = _this.props,
          groups = _this$props.groups,
          onGroupScroll = _this$props.onGroupScroll;
      var activeGroup = 0;
      groups.forEach(function (group, index) {
        if (values.scrollTop >= group.top) {
          activeGroup = index;

          _this.setState({
            activeGroup: activeGroup
          });
        }
      });
      onGroupScroll(activeGroup);
    });

    _defineProperty(_assertThisInitialized(_this), "onWheel", function (e) {
      // Disable page scroll, but enable groups scroll
      var _this$scrollbars$getV = _this.scrollbars.getValues(),
          clientHeight = _this$scrollbars$getV.clientHeight,
          scrollHeight = _this$scrollbars$getV.scrollHeight,
          scrollTop = _this$scrollbars$getV.scrollTop;

      if (e.deltaY > 0) {
        if (scrollTop < scrollHeight - clientHeight - e.deltaY) {
          e.stopPropagation();
        } else {
          _this.scrollbars.scrollToBottom();
        }
      } else {
        if (scrollTop > -e.deltaY) {
          // eslint-disable-line no-lonely-if
          e.stopPropagation();
        } else {
          _this.scrollbars.scrollTop();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollToGroup", function (groupIndex) {
      var groups = _this.props.groups;

      _this.scrollbars.scrollTop(groups[groupIndex].topList);
    });

    _defineProperty(_assertThisInitialized(_this), "calculateBounds", function () {
      var _this$scrollbars$getV2 = _this.scrollbars.getValues(),
          scrollHeight = _this$scrollbars$getV2.scrollHeight,
          scrollTop = _this$scrollbars$getV2.scrollTop;

      if (scrollHeight) {
        var groups = _this.props.groups;
        var containerTop = _this.container.getBoundingClientRect().top - scrollTop;
        groups.forEach(function (group) {
          var groupTop = group.instance.container.getBoundingClientRect().top;
          var listTop = group.instance.list.getBoundingClientRect().top;
          group.top = groupTop - containerTop; // eslint-disable-line no-param-reassign

          group.topList = listTop - containerTop; // eslint-disable-line no-param-reassign
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isRenderedGroupActive", function (index) {
      var activeGroup = _this.state.activeGroup;
      var isOpen = _this.props.isOpen;
      return activeGroup === index || isOpen && activeGroup + 1 === index; // we also preload next group when popup is open
    });

    return _this;
  }

  _createClass(Groups, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.calculateBounds();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.calculateBounds();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          cacheBustParam = _this$props2.cacheBustParam,
          imagePath = _this$props2.imagePath,
          imageType = _this$props2.imageType,
          _this$props2$theme = _this$props2.theme,
          theme = _this$props2$theme === void 0 ? {} : _this$props2$theme,
          _this$props2$groups = _this$props2.groups,
          groups = _this$props2$groups === void 0 ? [] : _this$props2$groups,
          emojis = _this$props2.emojis,
          checkMouseDown = _this$props2.checkMouseDown,
          onEmojiSelect = _this$props2.onEmojiSelect,
          onEmojiMouseDown = _this$props2.onEmojiMouseDown,
          useNativeArt = _this$props2.useNativeArt;
      return /*#__PURE__*/React.createElement("div", {
        className: theme.emojiSelectPopoverGroups,
        onWheel: this.onWheel,
        ref: function ref(element) {
          _this2.container = element;
        }
      }, /*#__PURE__*/React.createElement(Scrollbars, {
        onScrollFrame: this.onScroll,
        renderTrackVertical: function renderTrackVertical() {
          return /*#__PURE__*/React.createElement("div", {
            className: theme.emojiSelectPopoverScrollbar
          });
        },
        renderThumbVertical: function renderThumbVertical(props) {
          return /*#__PURE__*/React.createElement("div", _extends({}, props, {
            className: theme.emojiSelectPopoverScrollbarThumb
          }));
        },
        ref: function ref(element) {
          _this2.scrollbars = element;
        }
      }, groups.map(function (group, index) {
        return /*#__PURE__*/React.createElement(Group, {
          key: "group#".concat(index, "[").concat(group.categories.join(','), "]") // eslint-disable-line react/no-array-index-key
          ,
          theme: theme,
          group: group,
          emojis: emojis,
          imagePath: imagePath,
          imageType: imageType,
          cacheBustParam: cacheBustParam,
          checkMouseDown: checkMouseDown,
          onEmojiSelect: onEmojiSelect,
          onEmojiMouseDown: onEmojiMouseDown,
          ref: function ref(element) {
            group.instance = element; // eslint-disable-line no-param-reassign
          },
          useNativeArt: useNativeArt,
          isActive: _this2.isRenderedGroupActive(index)
        });
      })));
    }
  }]);

  return Groups;
}(Component);

_defineProperty(Groups, "propTypes", {
  cacheBustParam: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  emojis: PropTypes.object.isRequired,
  checkMouseDown: PropTypes.func.isRequired,
  onEmojiSelect: PropTypes.func.isRequired,
  onEmojiMouseDown: PropTypes.func.isRequired,
  onGroupScroll: PropTypes.func.isRequired,
  useNativeArt: PropTypes.bool,
  isOpen: PropTypes.bool
});

var Entry$1 = /*#__PURE__*/function (_Component) {
  _inherits(Entry, _Component);

  var _super = _createSuper(Entry);

  function Entry() {
    var _this;

    _classCallCheck(this, Entry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function () {
      _this.mouseDown = true;
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      if (_this.mouseDown) {
        _this.mouseDown = false;

        _this.props.onGroupSelect(_this.props.groupIndex);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mouseDown", false);

    return _this;
  }

  _createClass(Entry, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          icon = _this$props.icon,
          isActive = _this$props.isActive;
      return /*#__PURE__*/React.createElement("button", {
        className: isActive ? theme.emojiSelectPopoverNavEntryActive : theme.emojiSelectPopoverNavEntry,
        onMouseDown: this.onMouseDown,
        type: "button",
        onMouseUp: this.onMouseUp
      }, icon);
    }
  }]);

  return Entry;
}(Component);

_defineProperty(Entry$1, "propTypes", {
  theme: PropTypes.object.isRequired,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  groupIndex: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  onGroupSelect: PropTypes.func.isRequired
});

_defineProperty(Entry$1, "defaultProps", {
  isActive: false
});

var Nav = function Nav(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      groups = _ref.groups,
      activeGroup = _ref.activeGroup,
      onGroupSelect = _ref.onGroupSelect;
  return /*#__PURE__*/React.createElement("ul", {
    className: theme.emojiSelectPopoverNav
  }, groups.map(function (group, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: "nav-group#".concat(index, "[").concat(group.categories.join(','), "]") // eslint-disable-line react/no-array-index-key
      ,
      className: theme.emojiSelectPopoverNavItem
    }, /*#__PURE__*/React.createElement(Entry$1, {
      theme: theme,
      groupIndex: index,
      isActive: index === activeGroup,
      icon: group.icon,
      onGroupSelect: onGroupSelect
    }));
  }));
};

Nav.propTypes = {
  theme: PropTypes.object.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeGroup: PropTypes.number.isRequired,
  onGroupSelect: PropTypes.func.isRequired
};

var ToneSelect = /*#__PURE__*/function (_Component) {
  _inherits(ToneSelect, _Component);

  var _super = _createSuper(ToneSelect);

  function ToneSelect() {
    var _this;

    _classCallCheck(this, ToneSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "setCorrectPosition", function (areaBounds, entryBounds) {
      var width = _this.tones.offsetWidth;
      var height = _this.tones.offsetHeight;
      var style = {
        marginLeft: 0,
        left: entryBounds.left + entryBounds.width / 2 - width / 2,
        // eslint-disable-line no-mixed-operators
        bottom: entryBounds.bottom + entryBounds.height
      };

      if (style.left < areaBounds.left) {
        delete style.marginLeft;
        style.left = areaBounds.left;
      } else if (style.left > areaBounds.left + areaBounds.width - width) {
        // eslint-disable-line no-mixed-operators
        delete style.marginLeft;
        delete style.left;
        style.right = areaBounds.right;
      }

      if (style.bottom > areaBounds.bottom + areaBounds.height - height) {
        // eslint-disable-line no-mixed-operators
        delete style.bottom;
        style.top = entryBounds.top + entryBounds.height;
      }

      style = toStyle.object(style);
      Object.keys(style).forEach(function (property) {
        _this.tones.style[property] = style[property];
      });
    });

    return _this;
  }

  _createClass(ToneSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$bounds = this.props.bounds,
          areaBounds = _this$props$bounds.areaBounds,
          entryBounds = _this$props$bounds.entryBounds;
      this.setCorrectPosition(areaBounds, entryBounds);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          cacheBustParam = _this$props.cacheBustParam,
          imagePath = _this$props.imagePath,
          imageType = _this$props.imageType,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          _this$props$toneSet = _this$props.toneSet,
          toneSet = _this$props$toneSet === void 0 ? [] : _this$props$toneSet,
          onEmojiSelect = _this$props.onEmojiSelect;
      return /*#__PURE__*/React.createElement("div", {
        className: theme.emojiSelectPopoverToneSelect
      }, /*#__PURE__*/React.createElement("ul", {
        className: theme.emojiSelectPopoverToneSelectList,
        ref: function ref(element) {
          _this2.tones = element;
        }
      }, toneSet.map(function (emoji) {
        return /*#__PURE__*/React.createElement("li", {
          key: "tone-select(".concat(emoji, ")"),
          className: theme.emojiSelectPopoverToneSelectItem
        }, /*#__PURE__*/React.createElement(Entry, {
          emoji: emoji,
          theme: theme,
          imagePath: imagePath,
          imageType: imageType,
          cacheBustParam: cacheBustParam,
          checkMouseDown: function checkMouseDown() {
            return false;
          },
          onEmojiSelect: onEmojiSelect,
          mouseDown: true
        }));
      })));
    }
  }]);

  return ToneSelect;
}(Component);

_defineProperty(ToneSelect, "propTypes", {
  cacheBustParam: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  bounds: PropTypes.shape({
    areaBounds: PropTypes.shape({
      left: PropTypes.number.isRequired,
      right: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      bottom: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired,
    entryBounds: PropTypes.shape({
      left: PropTypes.number.isRequired,
      right: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      bottom: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  onEmojiSelect: PropTypes.func.isRequired
});

var Popover = /*#__PURE__*/function (_Component) {
  _inherits(Popover, _Component);

  var _super = _createSuper(Popover);

  function Popover() {
    var _this;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeGroup: 0,
      showToneSelect: false
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function () {
      _this.mouseDown = true;
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      _this.mouseDown = false;

      if (_this.activeEmoji) {
        _this.activeEmoji.deselect();

        _this.activeEmoji = null;

        if (_this.state.showToneSelect) {
          _this.closeToneSelect();
        } else if (_this.toneSelectTimer) {
          clearTimeout(_this.toneSelectTimer);
          _this.toneSelectTimer = null;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onWheel", function (e) {
      return e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "onEmojiSelect", function (emoji) {
      var newEditorState = addEmoji(_this.props.store.getEditorState(), emoji);

      _this.props.store.setEditorState(newEditorState);
    });

    _defineProperty(_assertThisInitialized(_this), "onEmojiMouseDown", function (emojiEntry, toneSet) {
      _this.activeEmoji = emojiEntry;

      if (toneSet) {
        _this.openToneSelectWithTimer(toneSet);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onGroupSelect", function (groupIndex) {
      _this.groups.scrollToGroup(groupIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "onGroupScroll", function (groupIndex) {
      if (groupIndex !== _this.state.activeGroup) {
        _this.setState({
          activeGroup: groupIndex
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openToneSelectWithTimer", function (toneSet) {
      _this.toneSelectTimer = setTimeout(function () {
        _this.toneSelectTimer = null;

        _this.openToneSelect(toneSet);
      }, _this.props.toneSelectOpenDelay);
    });

    _defineProperty(_assertThisInitialized(_this), "openToneSelect", function (toneSet) {
      _this.toneSet = toneSet;

      _this.setState({
        showToneSelect: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeToneSelect", function () {
      _this.toneSet = [];

      _this.setState({
        showToneSelect: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkMouseDown", function () {
      return _this.mouseDown;
    });

    _defineProperty(_assertThisInitialized(_this), "mouseDown", false);

    _defineProperty(_assertThisInitialized(_this), "activeEmoji", null);

    _defineProperty(_assertThisInitialized(_this), "toneSet", []);

    _defineProperty(_assertThisInitialized(_this), "toneSelectTimer", null);

    _defineProperty(_assertThisInitialized(_this), "renderToneSelect", function () {
      if (_this.state.showToneSelect) {
        var _this$props = _this.props,
            cacheBustParam = _this$props.cacheBustParam,
            imagePath = _this$props.imagePath,
            imageType = _this$props.imageType,
            _this$props$theme = _this$props.theme,
            theme = _this$props$theme === void 0 ? {} : _this$props$theme;

        var containerBounds = _this.container.getBoundingClientRect();

        var areaBounds = _this.groups.container.getBoundingClientRect();

        var entryBounds = _this.activeEmoji.button.getBoundingClientRect(); // Translate TextRectangle coords to CSS relative coords


        var bounds = {
          areaBounds: {
            left: areaBounds.left - containerBounds.left,
            right: containerBounds.right - areaBounds.right,
            top: areaBounds.top - containerBounds.top,
            bottom: containerBounds.bottom - areaBounds.bottom,
            width: areaBounds.width,
            height: areaBounds.width
          },
          entryBounds: {
            left: entryBounds.left - containerBounds.left,
            right: containerBounds.right - entryBounds.right,
            top: entryBounds.top - containerBounds.top,
            bottom: containerBounds.bottom - entryBounds.bottom,
            width: entryBounds.width,
            height: entryBounds.width
          }
        };
        return /*#__PURE__*/React.createElement(ToneSelect, {
          theme: theme,
          bounds: bounds,
          toneSet: _this.toneSet,
          imagePath: imagePath,
          imageType: imageType,
          cacheBustParam: cacheBustParam,
          onEmojiSelect: _this.onEmojiSelect
        });
      }

      return null;
    });

    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('mouseup', this.onMouseUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('mouseup', this.onMouseUp);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          cacheBustParam = _this$props2.cacheBustParam,
          imagePath = _this$props2.imagePath,
          imageType = _this$props2.imageType,
          _this$props2$theme = _this$props2.theme,
          theme = _this$props2$theme === void 0 ? {} : _this$props2$theme,
          _this$props2$groups = _this$props2.groups,
          groups = _this$props2$groups === void 0 ? [] : _this$props2$groups,
          emojis = _this$props2.emojis,
          _this$props2$isOpen = _this$props2.isOpen,
          isOpen = _this$props2$isOpen === void 0 ? false : _this$props2$isOpen,
          useNativeArt = _this$props2.useNativeArt;
      var className = isOpen ? theme.emojiSelectPopover : theme.emojiSelectPopoverClosed;
      var activeGroup = this.state.activeGroup;
      return /*#__PURE__*/React.createElement("div", {
        className: className,
        onMouseDown: this.onMouseDown,
        onWheel: this.onWheel,
        ref: function ref(element) {
          _this2.container = element;
        }
      }, /*#__PURE__*/React.createElement("h3", {
        className: theme.emojiSelectPopoverTitle
      }, groups[activeGroup].title), /*#__PURE__*/React.createElement(Groups, {
        theme: theme,
        groups: groups,
        emojis: emojis,
        imagePath: imagePath,
        imageType: imageType,
        cacheBustParam: cacheBustParam,
        checkMouseDown: this.checkMouseDown,
        onEmojiSelect: this.onEmojiSelect,
        onEmojiMouseDown: this.onEmojiMouseDown,
        onGroupScroll: this.onGroupScroll,
        ref: function ref(element) {
          _this2.groups = element;
        },
        useNativeArt: useNativeArt,
        isOpen: isOpen
      }), /*#__PURE__*/React.createElement(Nav, {
        theme: theme,
        groups: groups,
        activeGroup: activeGroup,
        onGroupSelect: this.onGroupSelect
      }), this.renderToneSelect());
    }
  }]);

  return Popover;
}(Component);

_defineProperty(Popover, "propTypes", {
  cacheBustParam: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  emojis: PropTypes.object.isRequired,
  toneSelectOpenDelay: PropTypes.number.isRequired,
  isOpen: PropTypes.bool,
  useNativeArt: PropTypes.bool
});

_defineProperty(Popover, "defaultProps", {
  isOpen: false
});

export default Popover;
