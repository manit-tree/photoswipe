(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode("/*! PhotoSwipe main CSS by Dmytro Semenov | photoswipe.com */.pswp{--pswp-bg:#000;--pswp-placeholder-bg:#222;--pswp-root-z-index:100000;--pswp-preloader-color:#4f4f4f66;--pswp-preloader-color-secondary:#ffffffe6;--pswp-icon-color:#fff;--pswp-icon-color-secondary:#4f4f4f;--pswp-icon-stroke-color:#4f4f4f;--pswp-icon-stroke-width:2px;--pswp-error-text-color:var(--pswp-icon-color);z-index:var(--pswp-root-z-index);touch-action:none;opacity:.003;contain:layout style size;-webkit-tap-highlight-color:#0000;outline:0;width:100%;height:100%;display:none;position:fixed;top:0;left:0}.pswp:focus{outline:0}.pswp *{box-sizing:border-box}.pswp img{max-width:none}.pswp--open{display:block}.pswp,.pswp__bg{will-change:opacity;transform:translateZ(0)}.pswp__bg{opacity:.005;background:var(--pswp-bg)}.pswp,.pswp__scroll-wrap{overflow:hidden}.pswp__scroll-wrap,.pswp__bg,.pswp__container,.pswp__item,.pswp__content,.pswp__img,.pswp__zoom-wrap{width:100%;height:100%;position:absolute;top:0;left:0}.pswp__container{transition:transform .25s ease-in-out}.pswp__img,.pswp__zoom-wrap{width:auto;height:auto}.pswp--click-to-zoom.pswp--zoom-allowed .pswp__img{cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in}.pswp--click-to-zoom.pswp--zoomed-in .pswp__img{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.pswp--click-to-zoom.pswp--zoomed-in .pswp__img:active{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.pswp--no-mouse-drag.pswp--zoomed-in .pswp__img,.pswp--no-mouse-drag.pswp--zoomed-in .pswp__img:active,.pswp__img{cursor:-webkit-zoom-out;cursor:-moz-zoom-out;cursor:zoom-out}.pswp__container,.pswp__img,.pswp__button,.pswp__counter{-webkit-user-select:none;user-select:none}.pswp__item{z-index:1;overflow:hidden}.pswp__hidden{display:none!important}.pswp__content{pointer-events:none}.pswp__content>*{pointer-events:auto}.pswp__error-msg-container{display:grid}.pswp__error-msg{color:var(--pswp-error-text-color);margin:auto;font-size:1em;line-height:1}.pswp .pswp__hide-on-close{opacity:.005;will-change:opacity;transition:opacity var(--pswp-transition-duration)cubic-bezier(.4,0,.22,1);z-index:10;pointer-events:none}.pswp--ui-visible .pswp__hide-on-close{opacity:1;pointer-events:auto}.pswp__button{cursor:pointer;box-shadow:none;opacity:.85;-webkit-appearance:none;-webkit-touch-callout:none;background:0 0;border:0;width:50px;height:60px;margin:0;padding:0;display:block;position:relative;overflow:hidden}.pswp__button:hover,.pswp__button:active,.pswp__button:focus{box-shadow:none;opacity:1;background:0 0;border:0;padding:0;transition:none}.pswp__button:disabled{opacity:.3;cursor:auto}.pswp__icn{fill:var(--pswp-icon-color);color:var(--pswp-icon-color-secondary);pointer-events:none;width:32px;height:32px;position:absolute;top:14px;left:9px;overflow:hidden}.pswp__icn-shadow{stroke:var(--pswp-icon-stroke-color);stroke-width:var(--pswp-icon-stroke-width);fill:none}.pswp__icn:focus{outline:0}div.pswp__img--placeholder,.pswp__img--with-bg{background:var(--pswp-placeholder-bg)}.pswp__top-bar{z-index:10;flex-direction:row;justify-content:flex-end;width:100%;height:60px;display:flex;position:absolute;top:0;left:0;pointer-events:none!important}.pswp__top-bar>*{pointer-events:auto;will-change:opacity}.pswp__button--close{margin-right:6px}.pswp__button--arrow{width:75px;height:100px;margin-top:-50px;position:absolute;top:50%}.pswp__button--arrow:disabled{cursor:default;display:none}.pswp__button--arrow .pswp__icn{background:0 0;border-radius:0;width:60px;height:60px;margin-top:-30px;top:50%}.pswp--one-slide .pswp__button--arrow{display:none}.pswp--touch .pswp__button--arrow{visibility:hidden}.pswp--has_mouse .pswp__button--arrow{visibility:visible}.pswp__button--arrow--prev{left:0;right:auto}.pswp__button--arrow--next{right:0}.pswp__button--arrow--next .pswp__icn{left:auto;right:14px;transform:scaleX(-1)}.pswp__button--zoom{display:none}.pswp--zoom-allowed .pswp__button--zoom{display:block}.pswp--zoomed-in .pswp__zoom-icn-bar-v{display:none}.pswp__preloader{width:50px;height:60px;margin-right:auto;position:relative;overflow:hidden}.pswp__preloader .pswp__icn{opacity:0;transition:opacity .2s linear;animation:.6s linear infinite pswp-clockwise}.pswp__preloader--active .pswp__icn{opacity:.85}@keyframes pswp-clockwise{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.pswp__counter{margin-top:15px;color:var(--pswp-icon-color);text-shadow:1px 1px 3px var(--pswp-icon-color-secondary);opacity:.85;height:30px;margin-inline-start:20px;font-size:14px;line-height:30px}.pswp--one-slide .pswp__counter{display:none}")),document.head.appendChild(o)}}catch(p){console.error("vite-plugin-css-injected-by-js",p)}})();
/*!
  * PhotoSwipe Lightbox 5.4.4 - https://photoswipe.com
  * (c) 2024 Dmytro Semenov
  */
function I(o, t, e) {
  const i = document.createElement(t);
  return o && (i.className = o), e && e.appendChild(i), i;
}
function J(o, t, e) {
  let i = `translate3d(${o}px,0px,0)`;
  return e !== void 0 && (i += ` scale3d(${e},${e},1)`), i;
}
function z(o, t, e) {
  o.style.width = typeof t == "number" ? `${t}px` : t, o.style.height = typeof e == "number" ? `${e}px` : e;
}
const _ = {
  IDLE: "idle",
  LOADING: "loading",
  LOADED: "loaded",
  ERROR: "error"
};
function tt(o) {
  return "button" in o && o.button === 1 || o.ctrlKey || o.metaKey || o.altKey || o.shiftKey;
}
function C(o, t, e = document) {
  let i = [];
  if (o instanceof Element)
    i = [o];
  else if (o instanceof NodeList || Array.isArray(o))
    i = Array.from(o);
  else {
    const s = typeof o == "string" ? o : t;
    s && (i = Array.from(e.querySelectorAll(s)));
  }
  return i;
}
function et(o) {
  return typeof o == "function" && o.prototype && o.prototype.goTo;
}
function D() {
  return !!(navigator.vendor && navigator.vendor.match(/apple/i));
}
let it = class {
  /**
   * @param {T} type
   * @param {PhotoSwipeEventsMap[T]} [details]
   */
  constructor(t, e) {
    this.type = t, this.defaultPrevented = !1, e && Object.assign(this, e);
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
}, st = class {
  constructor() {
    this._listeners = {}, this._filters = {}, this.pswp = void 0, this.options = void 0;
  }
  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   * @param {number} priority
   */
  addFilter(t, e, i = 100) {
    var s, n, r;
    this._filters[t] || (this._filters[t] = []), (s = this._filters[t]) === null || s === void 0 || s.push({
      fn: e,
      priority: i
    }), (n = this._filters[t]) === null || n === void 0 || n.sort((a, h) => a.priority - h.priority), (r = this.pswp) === null || r === void 0 || r.addFilter(t, e, i);
  }
  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   */
  removeFilter(t, e) {
    this._filters[t] && (this._filters[t] = this._filters[t].filter((i) => i.fn !== e)), this.pswp && this.pswp.removeFilter(t, e);
  }
  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
   * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
   */
  applyFilters(t, ...e) {
    var i;
    return (i = this._filters[t]) === null || i === void 0 || i.forEach((s) => {
      e[0] = s.fn.apply(this, e);
    }), e[0];
  }
  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */
  on(t, e) {
    var i, s;
    this._listeners[t] || (this._listeners[t] = []), (i = this._listeners[t]) === null || i === void 0 || i.push(e), (s = this.pswp) === null || s === void 0 || s.on(t, e);
  }
  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */
  off(t, e) {
    var i;
    this._listeners[t] && (this._listeners[t] = this._listeners[t].filter((s) => e !== s)), (i = this.pswp) === null || i === void 0 || i.off(t, e);
  }
  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {PhotoSwipeEventsMap[T]} [details]
   * @returns {AugmentedEvent<T>}
   */
  dispatch(t, e) {
    var i;
    if (this.pswp)
      return this.pswp.dispatch(t, e);
    const s = (
      /** @type {AugmentedEvent<T>} */
      new it(t, e)
    );
    return (i = this._listeners[t]) === null || i === void 0 || i.forEach((n) => {
      n.call(this, s);
    }), s;
  }
}, nt = class {
  /**
   * @param {string | false} imageSrc
   * @param {HTMLElement} container
   */
  constructor(t, e) {
    if (this.element = I("pswp__img pswp__img--placeholder", t ? "img" : "div", e), t) {
      const i = (
        /** @type {HTMLImageElement} */
        this.element
      );
      i.decoding = "async", i.alt = "", i.src = t, i.setAttribute("role", "presentation");
    }
    this.element.setAttribute("aria-hidden", "true");
  }
  /**
   * @param {number} width
   * @param {number} height
   */
  setDisplayedSize(t, e) {
    this.element && (this.element.tagName === "IMG" ? (z(this.element, 250, "auto"), this.element.style.transformOrigin = "0 0", this.element.style.transform = J(0, 0, t / 250)) : z(this.element, t, e));
  }
  destroy() {
    var t;
    (t = this.element) !== null && t !== void 0 && t.parentNode && this.element.remove(), this.element = null;
  }
}, ot = class {
  /**
   * @param {SlideData} itemData Slide data
   * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
   * @param {number} index
   */
  constructor(t, e, i) {
    this.instance = e, this.data = t, this.index = i, this.element = void 0, this.placeholder = void 0, this.slide = void 0, this.displayedImageWidth = 0, this.displayedImageHeight = 0, this.width = Number(this.data.w) || Number(this.data.width) || 0, this.height = Number(this.data.h) || Number(this.data.height) || 0, this.isAttached = !1, this.hasSlide = !1, this.isDecoding = !1, this.state = _.IDLE, this.data.type ? this.type = this.data.type : this.data.src ? this.type = "image" : this.type = "html", this.instance.dispatch("contentInit", {
      content: this
    });
  }
  removePlaceholder() {
    this.placeholder && !this.keepPlaceholder() && setTimeout(() => {
      this.placeholder && (this.placeholder.destroy(), this.placeholder = void 0);
    }, 1e3);
  }
  /**
   * Preload content
   *
   * @param {boolean} isLazy
   * @param {boolean} [reload]
   */
  load(t, e) {
    if (this.slide && this.usePlaceholder())
      if (this.placeholder) {
        const i = this.placeholder.element;
        i && !i.parentElement && this.slide.container.prepend(i);
      } else {
        const i = this.instance.applyFilters(
          "placeholderSrc",
          // use  image-based placeholder only for the first slide,
          // as rendering (even small stretched thumbnail) is an expensive operation
          this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : !1,
          this
        );
        this.placeholder = new nt(i, this.slide.container);
      }
    this.element && !e || this.instance.dispatch("contentLoad", {
      content: this,
      isLazy: t
    }).defaultPrevented || (this.isImageContent() ? (this.element = I("pswp__img", "img"), this.displayedImageWidth && this.loadImage(t)) : (this.element = I("pswp__content", "div"), this.element.innerHTML = this.data.html || ""), e && this.slide && this.slide.updateContentSize(!0));
  }
  /**
   * Preload image
   *
   * @param {boolean} isLazy
   */
  loadImage(t) {
    var e, i;
    if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
      content: this,
      isLazy: t
    }).defaultPrevented)
      return;
    const s = (
      /** @type HTMLImageElement */
      this.element
    );
    this.updateSrcsetSizes(), this.data.srcset && (s.srcset = this.data.srcset), s.src = (e = this.data.src) !== null && e !== void 0 ? e : "", s.alt = (i = this.data.alt) !== null && i !== void 0 ? i : "", this.state = _.LOADING, s.complete ? this.onLoaded() : (s.onload = () => {
      this.onLoaded();
    }, s.onerror = () => {
      this.onError();
    });
  }
  /**
   * Assign slide to content
   *
   * @param {Slide} slide
   */
  setSlide(t) {
    this.slide = t, this.hasSlide = !0, this.instance = t.pswp;
  }
  /**
   * Content load success handler
   */
  onLoaded() {
    this.state = _.LOADED, this.slide && this.element && (this.instance.dispatch("loadComplete", {
      slide: this.slide,
      content: this
    }), this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode && (this.append(), this.slide.updateContentSize(!0)), (this.state === _.LOADED || this.state === _.ERROR) && this.removePlaceholder());
  }
  /**
   * Content load error handler
   */
  onError() {
    this.state = _.ERROR, this.slide && (this.displayError(), this.instance.dispatch("loadComplete", {
      slide: this.slide,
      isError: !0,
      content: this
    }), this.instance.dispatch("loadError", {
      slide: this.slide,
      content: this
    }));
  }
  /**
   * @returns {Boolean} If the content is currently loading
   */
  isLoading() {
    return this.instance.applyFilters("isContentLoading", this.state === _.LOADING, this);
  }
  /**
   * @returns {Boolean} If the content is in error state
   */
  isError() {
    return this.state === _.ERROR;
  }
  /**
   * @returns {boolean} If the content is image
   */
  isImageContent() {
    return this.type === "image";
  }
  /**
   * Update content size
   *
   * @param {Number} width
   * @param {Number} height
   */
  setDisplayedSize(t, e) {
    if (this.element && (this.placeholder && this.placeholder.setDisplayedSize(t, e), !this.instance.dispatch("contentResize", {
      content: this,
      width: t,
      height: e
    }).defaultPrevented && (z(this.element, t, e), this.isImageContent() && !this.isError()))) {
      const i = !this.displayedImageWidth && t;
      this.displayedImageWidth = t, this.displayedImageHeight = e, i ? this.loadImage(!1) : this.updateSrcsetSizes(), this.slide && this.instance.dispatch("imageSizeChange", {
        slide: this.slide,
        width: t,
        height: e,
        content: this
      });
    }
  }
  /**
   * @returns {boolean} If the content can be zoomed
   */
  isZoomable() {
    return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== _.ERROR, this);
  }
  /**
   * Update image srcset sizes attribute based on width and height
   */
  updateSrcsetSizes() {
    if (!this.isImageContent() || !this.element || !this.data.srcset)
      return;
    const t = (
      /** @type HTMLImageElement */
      this.element
    ), e = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
    (!t.dataset.largestUsedSize || e > parseInt(t.dataset.largestUsedSize, 10)) && (t.sizes = e + "px", t.dataset.largestUsedSize = String(e));
  }
  /**
   * @returns {boolean} If content should use a placeholder (from msrc by default)
   */
  usePlaceholder() {
    return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
  }
  /**
   * Preload content with lazy-loading param
   */
  lazyLoad() {
    this.instance.dispatch("contentLazyLoad", {
      content: this
    }).defaultPrevented || this.load(!0);
  }
  /**
   * @returns {boolean} If placeholder should be kept after content is loaded
   */
  keepPlaceholder() {
    return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
  }
  /**
   * Destroy the content
   */
  destroy() {
    this.hasSlide = !1, this.slide = void 0, !this.instance.dispatch("contentDestroy", {
      content: this
    }).defaultPrevented && (this.remove(), this.placeholder && (this.placeholder.destroy(), this.placeholder = void 0), this.isImageContent() && this.element && (this.element.onload = null, this.element.onerror = null, this.element = void 0));
  }
  /**
   * Display error message
   */
  displayError() {
    if (this.slide) {
      var t, e;
      let i = I("pswp__error-msg", "div");
      i.innerText = (t = (e = this.instance.options) === null || e === void 0 ? void 0 : e.errorMsg) !== null && t !== void 0 ? t : "", i = /** @type {HTMLDivElement} */
      this.instance.applyFilters("contentErrorElement", i, this), this.element = I("pswp__content pswp__error-msg-container", "div"), this.element.appendChild(i), this.slide.container.innerText = "", this.slide.container.appendChild(this.element), this.slide.updateContentSize(!0), this.removePlaceholder();
    }
  }
  /**
   * Append the content
   */
  append() {
    if (this.isAttached || !this.element)
      return;
    if (this.isAttached = !0, this.state === _.ERROR) {
      this.displayError();
      return;
    }
    if (this.instance.dispatch("contentAppend", {
      content: this
    }).defaultPrevented)
      return;
    const t = "decode" in this.element;
    this.isImageContent() ? t && this.slide && (!this.slide.isActive || D()) ? (this.isDecoding = !0, this.element.decode().catch(() => {
    }).finally(() => {
      this.isDecoding = !1, this.appendImage();
    })) : this.appendImage() : this.slide && !this.element.parentNode && this.slide.container.appendChild(this.element);
  }
  /**
   * Activate the slide,
   * active slide is generally the current one,
   * meaning the user can see it.
   */
  activate() {
    this.instance.dispatch("contentActivate", {
      content: this
    }).defaultPrevented || !this.slide || (this.isImageContent() && this.isDecoding && !D() ? this.appendImage() : this.isError() && this.load(!1, !0), this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "false"));
  }
  /**
   * Deactivate the content
   */
  deactivate() {
    this.instance.dispatch("contentDeactivate", {
      content: this
    }), this.slide && this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "true");
  }
  /**
   * Remove the content from DOM
   */
  remove() {
    this.isAttached = !1, !this.instance.dispatch("contentRemove", {
      content: this
    }).defaultPrevented && (this.element && this.element.parentNode && this.element.remove(), this.placeholder && this.placeholder.element && this.placeholder.element.remove());
  }
  /**
   * Append the image content to slide container
   */
  appendImage() {
    this.isAttached && (this.instance.dispatch("contentAppendImage", {
      content: this
    }).defaultPrevented || (this.slide && this.element && !this.element.parentNode && this.slide.container.appendChild(this.element), (this.state === _.LOADED || this.state === _.ERROR) && this.removePlaceholder()));
  }
};
function rt(o, t) {
  if (o.getViewportSizeFn) {
    const e = o.getViewportSizeFn(o, t);
    if (e)
      return e;
  }
  return {
    x: document.documentElement.clientWidth,
    // TODO: height on mobile is very incosistent due to toolbar
    // find a way to improve this
    //
    // document.documentElement.clientHeight - doesn't seem to work well
    y: window.innerHeight
  };
}
function E(o, t, e, i, s) {
  let n = 0;
  if (t.paddingFn)
    n = t.paddingFn(e, i, s)[o];
  else if (t.padding)
    n = t.padding[o];
  else {
    const r = "padding" + o[0].toUpperCase() + o.slice(1);
    t[r] && (n = t[r]);
  }
  return Number(n) || 0;
}
function at(o, t, e, i) {
  return {
    x: t.x - E("left", o, t, e, i) - E("right", o, t, e, i),
    y: t.y - E("top", o, t, e, i) - E("bottom", o, t, e, i)
  };
}
const Z = 4e3;
let ht = class {
  /**
   * @param {PhotoSwipeOptions} options PhotoSwipe options
   * @param {SlideData} itemData Slide data
   * @param {number} index Slide index
   * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
   */
  constructor(t, e, i, s) {
    this.pswp = s, this.options = t, this.itemData = e, this.index = i, this.panAreaSize = null, this.elementSize = null, this.fit = 1, this.fill = 1, this.vFill = 1, this.initial = 1, this.secondary = 1, this.max = 1, this.min = 1;
  }
  /**
   * Calculate initial, secondary and maximum zoom level for the specified slide.
   *
   * It should be called when either image or viewport size changes.
   *
   * @param {number} maxWidth
   * @param {number} maxHeight
   * @param {Point} panAreaSize
   */
  update(t, e, i) {
    const s = {
      x: t,
      y: e
    };
    this.elementSize = s, this.panAreaSize = i;
    const n = i.x / s.x, r = i.y / s.y;
    this.fit = Math.min(1, n < r ? n : r), this.fill = Math.min(1, n > r ? n : r), this.vFill = Math.min(1, r), this.initial = this._getInitial(), this.secondary = this._getSecondary(), this.max = Math.max(this.initial, this.secondary, this._getMax()), this.min = Math.min(this.fit, this.initial, this.secondary), this.pswp && this.pswp.dispatch("zoomLevelsUpdate", {
      zoomLevels: this,
      slideData: this.itemData
    });
  }
  /**
   * Parses user-defined zoom option.
   *
   * @private
   * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
   * @returns { number | undefined }
   */
  _parseZoomLevelOption(t) {
    const e = (
      /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */
      t + "ZoomLevel"
    ), i = this.options[e];
    if (i)
      return typeof i == "function" ? i(this) : i === "fill" ? this.fill : i === "fit" ? this.fit : Number(i);
  }
  /**
   * Get zoom level to which image will be zoomed after double-tap gesture,
   * or when user clicks on zoom icon,
   * or mouse-click on image itself.
   * If you return 1 image will be zoomed to its original size.
   *
   * @private
   * @return {number}
   */
  _getSecondary() {
    let t = this._parseZoomLevelOption("secondary");
    return t || (t = Math.min(1, this.fit * 3), this.elementSize && t * this.elementSize.x > Z && (t = Z / this.elementSize.x), t);
  }
  /**
   * Get initial image zoom level.
   *
   * @private
   * @return {number}
   */
  _getInitial() {
    return this._parseZoomLevelOption("initial") || this.fit;
  }
  /**
   * Maximum zoom level when user zooms
   * via zoom/pinch gesture,
   * via cmd/ctrl-wheel or via trackpad.
   *
   * @private
   * @return {number}
   */
  _getMax() {
    return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
  }
};
function H(o, t, e) {
  const i = t.createContentFromData(o, e);
  let s;
  const {
    options: n
  } = t;
  if (n) {
    s = new ht(n, o, -1);
    let r;
    t.pswp ? r = t.pswp.viewportSize : r = rt(n, t);
    const a = at(n, r, o, e);
    s.update(i.width, i.height, a);
  }
  return i.lazyLoad(), s && i.setDisplayedSize(Math.ceil(i.width * s.initial), Math.ceil(i.height * s.initial)), i;
}
function lt(o, t) {
  const e = t.getItemData(o);
  if (!t.dispatch("lazyLoadSlide", {
    index: o,
    itemData: e
  }).defaultPrevented)
    return H(e, t, o);
}
let dt = class extends st {
  /**
   * Get total number of slides
   *
   * @returns {number}
   */
  getNumItems() {
    var t;
    let e = 0;
    const i = (t = this.options) === null || t === void 0 ? void 0 : t.dataSource;
    i && "length" in i ? e = i.length : i && "gallery" in i && (i.items || (i.items = this._getGalleryDOMElements(i.gallery)), i.items && (e = i.items.length));
    const s = this.dispatch("numItems", {
      dataSource: i,
      numItems: e
    });
    return this.applyFilters("numItems", s.numItems, i);
  }
  /**
   * @param {SlideData} slideData
   * @param {number} index
   * @returns {Content}
   */
  createContentFromData(t, e) {
    return new ot(t, this, e);
  }
  /**
   * Get item data by index.
   *
   * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
   * For example, it may contain properties like
   * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
   *
   * @param {number} index
   * @returns {SlideData}
   */
  getItemData(t) {
    var e;
    const i = (e = this.options) === null || e === void 0 ? void 0 : e.dataSource;
    let s = {};
    Array.isArray(i) ? s = i[t] : i && "gallery" in i && (i.items || (i.items = this._getGalleryDOMElements(i.gallery)), s = i.items[t]);
    let n = s;
    n instanceof Element && (n = this._domElementToItemData(n));
    const r = this.dispatch("itemData", {
      itemData: n || {},
      index: t
    });
    return this.applyFilters("itemData", r.itemData, t);
  }
  /**
   * Get array of gallery DOM elements,
   * based on childSelector and gallery element.
   *
   * @param {HTMLElement} galleryElement
   * @returns {HTMLElement[]}
   */
  _getGalleryDOMElements(t) {
    var e, i;
    return (e = this.options) !== null && e !== void 0 && e.children || (i = this.options) !== null && i !== void 0 && i.childSelector ? C(this.options.children, this.options.childSelector, t) || [] : [t];
  }
  /**
   * Converts DOM element to item data object.
   *
   * @param {HTMLElement} element DOM element
   * @returns {SlideData}
   */
  _domElementToItemData(t) {
    const e = {
      element: t
    }, i = (
      /** @type {HTMLAnchorElement} */
      t.tagName === "A" ? t : t.querySelector("a")
    );
    if (i) {
      e.src = i.dataset.pswpSrc || i.href, i.dataset.pswpSrcset && (e.srcset = i.dataset.pswpSrcset), e.width = i.dataset.pswpWidth ? parseInt(i.dataset.pswpWidth, 10) : 0, e.height = i.dataset.pswpHeight ? parseInt(i.dataset.pswpHeight, 10) : 0, e.w = e.width, e.h = e.height, i.dataset.pswpType && (e.type = i.dataset.pswpType);
      const n = t.querySelector("img");
      if (n) {
        var s;
        e.msrc = n.currentSrc || n.src, e.alt = (s = n.getAttribute("alt")) !== null && s !== void 0 ? s : "";
      }
      (i.dataset.pswpCropped || i.dataset.cropped) && (e.thumbCropped = !0);
    }
    return this.applyFilters("domItemData", e, t, i);
  }
  /**
   * Lazy-load by slide data
   *
   * @param {SlideData} itemData Data about the slide
   * @param {number} index
   * @returns {Content} Image that is being decoded or false.
   */
  lazyLoadData(t, e) {
    return H(t, this, e);
  }
};
class ct extends dt {
  /**
   * @param {PhotoSwipeOptions} [options]
   */
  constructor(t) {
    super(), this.options = t || {}, this._uid = 0, this.shouldOpen = !1, this._preloadedContent = void 0, this.onThumbnailsClick = this.onThumbnailsClick.bind(this);
  }
  /**
   * Initialize lightbox, should be called only once.
   * It's not included in the main constructor, so you may bind events before it.
   */
  init() {
    C(this.options.gallery, this.options.gallerySelector).forEach((t) => {
      t.addEventListener("click", this.onThumbnailsClick, !1);
    });
  }
  /**
   * @param {MouseEvent} e
   */
  onThumbnailsClick(t) {
    if (this.disabled) {
      t.preventDefault(), t.stopPropagation();
      return;
    }
    if (tt(t) || window.pswp)
      return;
    let e = {
      x: t.clientX,
      y: t.clientY
    };
    !e.x && !e.y && (e = null);
    let i = this.getClickedIndex(t);
    i = this.applyFilters("clickedIndex", i, t, this);
    const s = {
      gallery: (
        /** @type {HTMLElement} */
        t.currentTarget
      )
    };
    i >= 0 && (t.preventDefault(), this.loadAndOpen(i, s, e));
  }
  /**
   * Get index of gallery item that was clicked.
   *
   * @param {MouseEvent} e click event
   * @returns {number}
   */
  getClickedIndex(t) {
    if (this.options.getClickedIndexFn)
      return this.options.getClickedIndexFn.call(this, t);
    const e = (
      /** @type {HTMLElement} */
      t.target
    ), s = C(
      this.options.children,
      this.options.childSelector,
      /** @type {HTMLElement} */
      t.currentTarget
    ).findIndex((n) => n === e || n.contains(e));
    return s !== -1 ? s : this.options.children || this.options.childSelector ? -1 : 0;
  }
  /**
   * Load and open PhotoSwipe
   *
   * @param {number} index
   * @param {DataSource} [dataSource]
   * @param {Point | null} [initialPoint]
   * @returns {boolean}
   */
  loadAndOpen(t, e, i) {
    if (window.pswp || !this.options)
      return !1;
    if (!e && this.options.gallery && this.options.children) {
      const s = C(this.options.gallery);
      s[0] && (e = {
        gallery: s[0]
      });
    }
    return this.options.index = t, this.options.initialPointerPos = i, this.shouldOpen = !0, this.preload(t, e), !0;
  }
  /**
   * Load the main module and the slide content by index
   *
   * @param {number} index
   * @param {DataSource} [dataSource]
   */
  preload(t, e) {
    const {
      options: i
    } = this;
    e && (i.dataSource = e);
    const s = [], n = typeof i.pswpModule;
    if (et(i.pswpModule))
      s.push(Promise.resolve(
        /** @type {Type<PhotoSwipe>} */
        i.pswpModule
      ));
    else {
      if (n === "string")
        throw new Error("pswpModule as string is no longer supported");
      if (n === "function")
        s.push(
          /** @type {() => Promise<Type<PhotoSwipe>>} */
          i.pswpModule()
        );
      else
        throw new Error("pswpModule is not valid");
    }
    typeof i.openPromise == "function" && s.push(i.openPromise()), i.preloadFirstSlide !== !1 && t >= 0 && (this._preloadedContent = lt(t, this));
    const r = ++this._uid;
    Promise.all(s).then((a) => {
      if (this.shouldOpen) {
        const h = a[0];
        this._openPhotoswipe(h, r);
      }
    });
  }
  /**
   * @private
   * @param {Type<PhotoSwipe> | { default: Type<PhotoSwipe> }} module
   * @param {number} uid
   */
  _openPhotoswipe(t, e) {
    if (e !== this._uid && this.shouldOpen || (this.shouldOpen = !1, window.pswp))
      return;
    const i = typeof t == "object" ? new t.default(this.options) : new t(this.options);
    this.pswp = i, window.pswp = i, Object.keys(this._listeners).forEach((s) => {
      var n;
      (n = this._listeners[s]) === null || n === void 0 || n.forEach((r) => {
        i.on(
          s,
          /** @type {EventCallback<typeof name>} */
          r
        );
      });
    }), Object.keys(this._filters).forEach((s) => {
      var n;
      (n = this._filters[s]) === null || n === void 0 || n.forEach((r) => {
        i.addFilter(s, r.fn, r.priority);
      });
    }), this._preloadedContent && (i.contentLoader.addToCache(this._preloadedContent), this._preloadedContent = void 0), i.on("destroy", () => {
      this.pswp = void 0, delete window.pswp;
    }), i.init();
  }
  /**
   * Unbinds all events, closes PhotoSwipe if it's open.
   */
  destroy() {
    var t;
    (t = this.pswp) === null || t === void 0 || t.destroy(), this.shouldOpen = !1, this._listeners = {}, C(this.options.gallery, this.options.gallerySelector).forEach((e) => {
      e.removeEventListener("click", this.onThumbnailsClick, !1);
    });
  }
}
/*!
  * PhotoSwipe 5.4.4 - https://photoswipe.com
  * (c) 2024 Dmytro Semenov
  */
function f(o, t, e) {
  const i = document.createElement(t);
  return o && (i.className = o), e && e.appendChild(i), i;
}
function p(o, t) {
  return o.x = t.x, o.y = t.y, t.id !== void 0 && (o.id = t.id), o;
}
function V(o) {
  o.x = Math.round(o.x), o.y = Math.round(o.y);
}
function T(o, t) {
  const e = Math.abs(o.x - t.x), i = Math.abs(o.y - t.y);
  return Math.sqrt(e * e + i * i);
}
function x(o, t) {
  return o.x === t.x && o.y === t.y;
}
function A(o, t, e) {
  return Math.min(Math.max(o, t), e);
}
function L(o, t, e) {
  let i = `translate3d(${o}px,${t || 0}px,0)`;
  return e !== void 0 && (i += ` scale3d(${e},${e},1)`), i;
}
function w(o, t, e, i) {
  o.style.transform = L(t, e, i);
}
const pt = "cubic-bezier(.4,0,.22,1)";
function U(o, t, e, i) {
  o.style.transition = t ? `${t} ${e}ms ${i || pt}` : "none";
}
function O(o, t, e) {
  o.style.width = typeof t == "number" ? `${t}px` : t, o.style.height = typeof e == "number" ? `${e}px` : e;
}
function ut(o) {
  U(o);
}
function mt(o) {
  return "decode" in o ? o.decode().catch(() => {
  }) : o.complete ? Promise.resolve(o) : new Promise((t, e) => {
    o.onload = () => t(o), o.onerror = e;
  });
}
const v = {
  IDLE: "idle",
  LOADING: "loading",
  LOADED: "loaded",
  ERROR: "error"
};
function ft(o) {
  return "button" in o && o.button === 1 || o.ctrlKey || o.metaKey || o.altKey || o.shiftKey;
}
function _t(o, t, e = document) {
  let i = [];
  if (o instanceof Element)
    i = [o];
  else if (o instanceof NodeList || Array.isArray(o))
    i = Array.from(o);
  else {
    const s = typeof o == "string" ? o : t;
    s && (i = Array.from(e.querySelectorAll(s)));
  }
  return i;
}
function M() {
  return !!(navigator.vendor && navigator.vendor.match(/apple/i));
}
let G = !1;
try {
  window.addEventListener("test", null, Object.defineProperty({}, "passive", {
    get: () => {
      G = !0;
    }
  }));
} catch {
}
class vt {
  constructor() {
    this._pool = [];
  }
  /**
   * Adds event listeners
   *
   * @param {PoolItem['target']} target
   * @param {PoolItem['type']} type Can be multiple, separated by space.
   * @param {PoolItem['listener']} listener
   * @param {PoolItem['passive']} [passive]
   */
  add(t, e, i, s) {
    this._toggleListener(t, e, i, s);
  }
  /**
   * Removes event listeners
   *
   * @param {PoolItem['target']} target
   * @param {PoolItem['type']} type
   * @param {PoolItem['listener']} listener
   * @param {PoolItem['passive']} [passive]
   */
  remove(t, e, i, s) {
    this._toggleListener(t, e, i, s, !0);
  }
  /**
   * Removes all bound events
   */
  removeAll() {
    this._pool.forEach((t) => {
      this._toggleListener(t.target, t.type, t.listener, t.passive, !0, !0);
    }), this._pool = [];
  }
  /**
   * Adds or removes event
   *
   * @private
   * @param {PoolItem['target']} target
   * @param {PoolItem['type']} type
   * @param {PoolItem['listener']} listener
   * @param {PoolItem['passive']} [passive]
   * @param {boolean} [unbind] Whether the event should be added or removed
   * @param {boolean} [skipPool] Whether events pool should be skipped
   */
  _toggleListener(t, e, i, s, n, r) {
    if (!t)
      return;
    const a = n ? "removeEventListener" : "addEventListener";
    e.split(" ").forEach((l) => {
      if (l) {
        r || (n ? this._pool = this._pool.filter((c) => c.type !== l || c.listener !== i || c.target !== t) : this._pool.push({
          target: t,
          type: l,
          listener: i,
          passive: s
        }));
        const d = G ? {
          passive: s || !1
        } : !1;
        t[a](l, i, d);
      }
    });
  }
}
function q(o, t) {
  if (o.getViewportSizeFn) {
    const e = o.getViewportSizeFn(o, t);
    if (e)
      return e;
  }
  return {
    x: document.documentElement.clientWidth,
    // TODO: height on mobile is very incosistent due to toolbar
    // find a way to improve this
    //
    // document.documentElement.clientHeight - doesn't seem to work well
    y: window.innerHeight
  };
}
function b(o, t, e, i, s) {
  let n = 0;
  if (t.paddingFn)
    n = t.paddingFn(e, i, s)[o];
  else if (t.padding)
    n = t.padding[o];
  else {
    const r = "padding" + o[0].toUpperCase() + o.slice(1);
    t[r] && (n = t[r]);
  }
  return Number(n) || 0;
}
function K(o, t, e, i) {
  return {
    x: t.x - b("left", o, t, e, i) - b("right", o, t, e, i),
    y: t.y - b("top", o, t, e, i) - b("bottom", o, t, e, i)
  };
}
class gt {
  /**
   * @param {Slide} slide
   */
  constructor(t) {
    this.slide = t, this.currZoomLevel = 1, this.center = /** @type {Point} */
    {
      x: 0,
      y: 0
    }, this.max = /** @type {Point} */
    {
      x: 0,
      y: 0
    }, this.min = /** @type {Point} */
    {
      x: 0,
      y: 0
    };
  }
  /**
   * _getItemBounds
   *
   * @param {number} currZoomLevel
   */
  update(t) {
    this.currZoomLevel = t, this.slide.width ? (this._updateAxis("x"), this._updateAxis("y"), this.slide.pswp.dispatch("calcBounds", {
      slide: this.slide
    })) : this.reset();
  }
  /**
   * _calculateItemBoundsForAxis
   *
   * @param {Axis} axis
   */
  _updateAxis(t) {
    const {
      pswp: e
    } = this.slide, i = this.slide[t === "x" ? "width" : "height"] * this.currZoomLevel, n = b(t === "x" ? "left" : "top", e.options, e.viewportSize, this.slide.data, this.slide.index), r = this.slide.panAreaSize[t];
    this.center[t] = Math.round((r - i) / 2) + n, this.max[t] = i > r ? Math.round(r - i) + n : this.center[t], this.min[t] = i > r ? n : this.center[t];
  }
  // _getZeroBounds
  reset() {
    this.center.x = 0, this.center.y = 0, this.max.x = 0, this.max.y = 0, this.min.x = 0, this.min.y = 0;
  }
  /**
   * Correct pan position if it's beyond the bounds
   *
   * @param {Axis} axis x or y
   * @param {number} panOffset
   * @returns {number}
   */
  correctPan(t, e) {
    return A(e, this.max[t], this.min[t]);
  }
}
const F = 4e3;
class X {
  /**
   * @param {PhotoSwipeOptions} options PhotoSwipe options
   * @param {SlideData} itemData Slide data
   * @param {number} index Slide index
   * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
   */
  constructor(t, e, i, s) {
    this.pswp = s, this.options = t, this.itemData = e, this.index = i, this.panAreaSize = null, this.elementSize = null, this.fit = 1, this.fill = 1, this.vFill = 1, this.initial = 1, this.secondary = 1, this.max = 1, this.min = 1;
  }
  /**
   * Calculate initial, secondary and maximum zoom level for the specified slide.
   *
   * It should be called when either image or viewport size changes.
   *
   * @param {number} maxWidth
   * @param {number} maxHeight
   * @param {Point} panAreaSize
   */
  update(t, e, i) {
    const s = {
      x: t,
      y: e
    };
    this.elementSize = s, this.panAreaSize = i;
    const n = i.x / s.x, r = i.y / s.y;
    this.fit = Math.min(1, n < r ? n : r), this.fill = Math.min(1, n > r ? n : r), this.vFill = Math.min(1, r), this.initial = this._getInitial(), this.secondary = this._getSecondary(), this.max = Math.max(this.initial, this.secondary, this._getMax()), this.min = Math.min(this.fit, this.initial, this.secondary), this.pswp && this.pswp.dispatch("zoomLevelsUpdate", {
      zoomLevels: this,
      slideData: this.itemData
    });
  }
  /**
   * Parses user-defined zoom option.
   *
   * @private
   * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
   * @returns { number | undefined }
   */
  _parseZoomLevelOption(t) {
    const e = (
      /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */
      t + "ZoomLevel"
    ), i = this.options[e];
    if (i)
      return typeof i == "function" ? i(this) : i === "fill" ? this.fill : i === "fit" ? this.fit : Number(i);
  }
  /**
   * Get zoom level to which image will be zoomed after double-tap gesture,
   * or when user clicks on zoom icon,
   * or mouse-click on image itself.
   * If you return 1 image will be zoomed to its original size.
   *
   * @private
   * @return {number}
   */
  _getSecondary() {
    let t = this._parseZoomLevelOption("secondary");
    return t || (t = Math.min(1, this.fit * 3), this.elementSize && t * this.elementSize.x > F && (t = F / this.elementSize.x), t);
  }
  /**
   * Get initial image zoom level.
   *
   * @private
   * @return {number}
   */
  _getInitial() {
    return this._parseZoomLevelOption("initial") || this.fit;
  }
  /**
   * Maximum zoom level when user zooms
   * via zoom/pinch gesture,
   * via cmd/ctrl-wheel or via trackpad.
   *
   * @private
   * @return {number}
   */
  _getMax() {
    return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
  }
}
class yt {
  /**
   * @param {SlideData} data
   * @param {number} index
   * @param {PhotoSwipe} pswp
   */
  constructor(t, e, i) {
    this.data = t, this.index = e, this.pswp = i, this.isActive = e === i.currIndex, this.currentResolution = 0, this.panAreaSize = {
      x: 0,
      y: 0
    }, this.pan = {
      x: 0,
      y: 0
    }, this.isFirstSlide = this.isActive && !i.opener.isOpen, this.zoomLevels = new X(i.options, t, e, i), this.pswp.dispatch("gettingData", {
      slide: this,
      data: this.data,
      index: e
    }), this.content = this.pswp.contentLoader.getContentBySlide(this), this.container = f("pswp__zoom-wrap", "div"), this.holderElement = null, this.currZoomLevel = 1, this.width = this.content.width, this.height = this.content.height, this.heavyAppended = !1, this.bounds = new gt(this), this.prevDisplayedWidth = -1, this.prevDisplayedHeight = -1, this.pswp.dispatch("slideInit", {
      slide: this
    });
  }
  /**
   * If this slide is active/current/visible
   *
   * @param {boolean} isActive
   */
  setIsActive(t) {
    t && !this.isActive ? this.activate() : !t && this.isActive && this.deactivate();
  }
  /**
   * Appends slide content to DOM
   *
   * @param {HTMLElement} holderElement
   */
  append(t) {
    this.holderElement = t, this.container.style.transformOrigin = "0 0", this.data && (this.calculateSize(), this.load(), this.updateContentSize(), this.appendHeavy(), this.holderElement.appendChild(this.container), this.zoomAndPanToInitial(), this.pswp.dispatch("firstZoomPan", {
      slide: this
    }), this.applyCurrentZoomPan(), this.pswp.dispatch("afterSetContent", {
      slide: this
    }), this.isActive && this.activate());
  }
  load() {
    this.content.load(!1), this.pswp.dispatch("slideLoad", {
      slide: this
    });
  }
  /**
   * Append "heavy" DOM elements
   *
   * This may depend on a type of slide,
   * but generally these are large images.
   */
  appendHeavy() {
    const {
      pswp: t
    } = this;
    this.heavyAppended || !t.opener.isOpen || t.mainScroll.isShifted() || !this.isActive && !!0 || this.pswp.dispatch("appendHeavy", {
      slide: this
    }).defaultPrevented || (this.heavyAppended = !0, this.content.append(), this.pswp.dispatch("appendHeavyContent", {
      slide: this
    }));
  }
  /**
   * Triggered when this slide is active (selected).
   *
   * If it's part of opening/closing transition -
   * activate() will trigger after the transition is ended.
   */
  activate() {
    this.isActive = !0, this.appendHeavy(), this.content.activate(), this.pswp.dispatch("slideActivate", {
      slide: this
    });
  }
  /**
   * Triggered when this slide becomes inactive.
   *
   * Slide can become inactive only after it was active.
   */
  deactivate() {
    this.isActive = !1, this.content.deactivate(), this.currZoomLevel !== this.zoomLevels.initial && this.calculateSize(), this.currentResolution = 0, this.zoomAndPanToInitial(), this.applyCurrentZoomPan(), this.updateContentSize(), this.pswp.dispatch("slideDeactivate", {
      slide: this
    });
  }
  /**
   * The slide should destroy itself, it will never be used again.
   * (unbind all events and destroy internal components)
   */
  destroy() {
    this.content.hasSlide = !1, this.content.remove(), this.container.remove(), this.pswp.dispatch("slideDestroy", {
      slide: this
    });
  }
  resize() {
    this.currZoomLevel === this.zoomLevels.initial || !this.isActive ? (this.calculateSize(), this.currentResolution = 0, this.zoomAndPanToInitial(), this.applyCurrentZoomPan(), this.updateContentSize()) : (this.calculateSize(), this.bounds.update(this.currZoomLevel), this.panTo(this.pan.x, this.pan.y));
  }
  /**
   * Apply size to current slide content,
   * based on the current resolution and scale.
   *
   * @param {boolean} [force] if size should be updated even if dimensions weren't changed
   */
  updateContentSize(t) {
    const e = this.currentResolution || this.zoomLevels.initial;
    if (!e)
      return;
    const i = Math.round(this.width * e) || this.pswp.viewportSize.x, s = Math.round(this.height * e) || this.pswp.viewportSize.y;
    !this.sizeChanged(i, s) && !t || this.content.setDisplayedSize(i, s);
  }
  /**
   * @param {number} width
   * @param {number} height
   */
  sizeChanged(t, e) {
    return t !== this.prevDisplayedWidth || e !== this.prevDisplayedHeight ? (this.prevDisplayedWidth = t, this.prevDisplayedHeight = e, !0) : !1;
  }
  /** @returns {HTMLImageElement | HTMLDivElement | null | undefined} */
  getPlaceholderElement() {
    var t;
    return (t = this.content.placeholder) === null || t === void 0 ? void 0 : t.element;
  }
  /**
   * Zoom current slide image to...
   *
   * @param {number} destZoomLevel Destination zoom level.
   * @param {Point} [centerPoint]
   * Transform origin center point, or false if viewport center should be used.
   * @param {number | false} [transitionDuration] Transition duration, may be set to 0.
   * @param {boolean} [ignoreBounds] Minimum and maximum zoom levels will be ignored.
   */
  zoomTo(t, e, i, s) {
    const {
      pswp: n
    } = this;
    if (!this.isZoomable() || n.mainScroll.isShifted())
      return;
    n.dispatch("beforeZoomTo", {
      destZoomLevel: t,
      centerPoint: e,
      transitionDuration: i
    }), n.animations.stopAllPan();
    const r = this.currZoomLevel;
    s || (t = A(t, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(t), this.pan.x = this.calculateZoomToPanOffset("x", e, r), this.pan.y = this.calculateZoomToPanOffset("y", e, r), V(this.pan);
    const a = () => {
      this._setResolution(t), this.applyCurrentZoomPan();
    };
    i ? n.animations.startTransition({
      isPan: !0,
      name: "zoomTo",
      target: this.container,
      transform: this.getCurrentTransform(),
      onComplete: a,
      duration: i,
      easing: n.options.easing
    }) : a();
  }
  /**
   * @param {Point} [centerPoint]
   */
  toggleZoom(t) {
    this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, t, this.pswp.options.zoomAnimationDuration);
  }
  /**
   * Updates zoom level property and recalculates new pan bounds,
   * unlike zoomTo it does not apply transform (use applyCurrentZoomPan)
   *
   * @param {number} currZoomLevel
   */
  setZoomLevel(t) {
    this.currZoomLevel = t, this.bounds.update(this.currZoomLevel);
  }
  /**
   * Get pan position after zoom at a given `point`.
   *
   * Always call setZoomLevel(newZoomLevel) beforehand to recalculate
   * pan bounds according to the new zoom level.
   *
   * @param {'x' | 'y'} axis
   * @param {Point} [point]
   * point based on which zoom is performed, usually refers to the current mouse position,
   * if false - viewport center will be used.
   * @param {number} [prevZoomLevel] Zoom level before new zoom was applied.
   * @returns {number}
   */
  calculateZoomToPanOffset(t, e, i) {
    if (this.bounds.max[t] - this.bounds.min[t] === 0)
      return this.bounds.center[t];
    e || (e = this.pswp.getViewportCenterPoint()), i || (i = this.zoomLevels.initial);
    const n = this.currZoomLevel / i;
    return this.bounds.correctPan(t, (this.pan[t] - e[t]) * n + e[t]);
  }
  /**
   * Apply pan and keep it within bounds.
   *
   * @param {number} panX
   * @param {number} panY
   */
  panTo(t, e) {
    this.pan.x = this.bounds.correctPan("x", t), this.pan.y = this.bounds.correctPan("y", e), this.applyCurrentZoomPan();
  }
  /**
   * If the slide in the current state can be panned by the user
   * @returns {boolean}
   */
  isPannable() {
    return !!this.width && this.currZoomLevel > this.zoomLevels.fit;
  }
  /**
   * If the slide can be zoomed
   * @returns {boolean}
   */
  isZoomable() {
    return !!this.width && this.content.isZoomable();
  }
  /**
   * Apply transform and scale based on
   * the current pan position (this.pan) and zoom level (this.currZoomLevel)
   */
  applyCurrentZoomPan() {
    this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel), this === this.pswp.currSlide && this.pswp.dispatch("zoomPanUpdate", {
      slide: this
    });
  }
  zoomAndPanToInitial() {
    this.currZoomLevel = this.zoomLevels.initial, this.bounds.update(this.currZoomLevel), p(this.pan, this.bounds.center), this.pswp.dispatch("initialZoomPan", {
      slide: this
    });
  }
  /**
   * Set translate and scale based on current resolution
   *
   * @param {number} x
   * @param {number} y
   * @param {number} zoom
   * @private
   */
  _applyZoomTransform(t, e, i) {
    i /= this.currentResolution || this.zoomLevels.initial, w(this.container, t, e, i);
  }
  calculateSize() {
    const {
      pswp: t
    } = this;
    p(this.panAreaSize, K(t.options, t.viewportSize, this.data, this.index)), this.zoomLevels.update(this.width, this.height, this.panAreaSize), t.dispatch("calcSlideSize", {
      slide: this
    });
  }
  /** @returns {string} */
  getCurrentTransform() {
    const t = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
    return L(this.pan.x, this.pan.y, t);
  }
  /**
   * Set resolution and re-render the image.
   *
   * For example, if the real image size is 2000x1500,
   * and resolution is 0.5 - it will be rendered as 1000x750.
   *
   * Image with zoom level 2 and resolution 0.5 is
   * the same as image with zoom level 1 and resolution 1.
   *
   * Used to optimize animations and make
   * sure that browser renders image in the highest quality.
   * Also used by responsive images to load the correct one.
   *
   * @param {number} newResolution
   */
  _setResolution(t) {
    t !== this.currentResolution && (this.currentResolution = t, this.updateContentSize(), this.pswp.dispatch("resolutionChanged"));
  }
}
const wt = 0.35, St = 0.6, R = 0.4, N = 0.5;
function Pt(o, t) {
  return o * t / (1 - t);
}
class It {
  /**
   * @param {Gestures} gestures
   */
  constructor(t) {
    this.gestures = t, this.pswp = t.pswp, this.startPan = {
      x: 0,
      y: 0
    };
  }
  start() {
    this.pswp.currSlide && p(this.startPan, this.pswp.currSlide.pan), this.pswp.animations.stopAll();
  }
  change() {
    const {
      p1: t,
      prevP1: e,
      dragAxis: i
    } = this.gestures, {
      currSlide: s
    } = this.pswp;
    if (i === "y" && this.pswp.options.closeOnVerticalDrag && s && s.currZoomLevel <= s.zoomLevels.fit && !this.gestures.isMultitouch) {
      const n = s.pan.y + (t.y - e.y);
      if (!this.pswp.dispatch("verticalDrag", {
        panY: n
      }).defaultPrevented) {
        this._setPanWithFriction("y", n, St);
        const r = 1 - Math.abs(this._getVerticalDragRatio(s.pan.y));
        this.pswp.applyBgOpacity(r), s.applyCurrentZoomPan();
      }
    } else
      this._panOrMoveMainScroll("x") || (this._panOrMoveMainScroll("y"), s && (V(s.pan), s.applyCurrentZoomPan()));
  }
  end() {
    const {
      velocity: t
    } = this.gestures, {
      mainScroll: e,
      currSlide: i
    } = this.pswp;
    let s = 0;
    if (this.pswp.animations.stopAll(), e.isShifted()) {
      const r = (e.x - e.getCurrSlideX()) / this.pswp.viewportSize.x;
      t.x < -N && r < 0 || t.x < 0.1 && r < -0.5 ? (s = 1, t.x = Math.min(t.x, 0)) : (t.x > N && r > 0 || t.x > -0.1 && r > 0.5) && (s = -1, t.x = Math.max(t.x, 0)), e.moveIndexBy(s, !0, t.x);
    }
    i && i.currZoomLevel > i.zoomLevels.max || this.gestures.isMultitouch ? this.gestures.zoomLevels.correctZoomPan(!0) : (this._finishPanGestureForAxis("x"), this._finishPanGestureForAxis("y"));
  }
  /**
   * @private
   * @param {'x' | 'y'} axis
   */
  _finishPanGestureForAxis(t) {
    const {
      velocity: e
    } = this.gestures, {
      currSlide: i
    } = this.pswp;
    if (!i)
      return;
    const {
      pan: s,
      bounds: n
    } = i, r = s[t], a = this.pswp.bgOpacity < 1 && t === "y", l = r + Pt(e[t], 0.995);
    if (a) {
      const y = this._getVerticalDragRatio(r), S = this._getVerticalDragRatio(l);
      if (y < 0 && S < -R || y > 0 && S > R) {
        this.pswp.close();
        return;
      }
    }
    const d = n.correctPan(t, l);
    if (r === d)
      return;
    const c = d === l ? 1 : 0.82, u = this.pswp.bgOpacity, m = d - r;
    this.pswp.animations.startSpring({
      name: "panGesture" + t,
      isPan: !0,
      start: r,
      end: d,
      velocity: e[t],
      dampingRatio: c,
      onUpdate: (y) => {
        if (a && this.pswp.bgOpacity < 1) {
          const S = 1 - (d - y) / m;
          this.pswp.applyBgOpacity(A(u + (1 - u) * S, 0, 1));
        }
        s[t] = Math.floor(y), i.applyCurrentZoomPan();
      }
    });
  }
  /**
   * Update position of the main scroll,
   * or/and update pan position of the current slide.
   *
   * Should return true if it changes (or can change) main scroll.
   *
   * @private
   * @param {'x' | 'y'} axis
   * @returns {boolean}
   */
  _panOrMoveMainScroll(t) {
    const {
      p1: e,
      dragAxis: i,
      prevP1: s,
      isMultitouch: n
    } = this.gestures, {
      currSlide: r,
      mainScroll: a
    } = this.pswp, h = e[t] - s[t], l = a.x + h;
    if (!h || !r)
      return !1;
    if (t === "x" && !r.isPannable() && !n)
      return a.moveTo(l, !0), !0;
    const {
      bounds: d
    } = r, c = r.pan[t] + h;
    if (this.pswp.options.allowPanToNext && i === "x" && t === "x" && !n) {
      const u = a.getCurrSlideX(), m = a.x - u, y = h > 0, S = !y;
      if (c > d.min[t] && y) {
        if (d.min[t] <= this.startPan[t])
          return a.moveTo(l, !0), !0;
        this._setPanWithFriction(t, c);
      } else if (c < d.max[t] && S) {
        if (this.startPan[t] <= d.max[t])
          return a.moveTo(l, !0), !0;
        this._setPanWithFriction(t, c);
      } else if (m !== 0) {
        if (m > 0)
          return a.moveTo(Math.max(l, u), !0), !0;
        if (m < 0)
          return a.moveTo(Math.min(l, u), !0), !0;
      } else
        this._setPanWithFriction(t, c);
    } else
      t === "y" ? !a.isShifted() && d.min.y !== d.max.y && this._setPanWithFriction(t, c) : this._setPanWithFriction(t, c);
    return !1;
  }
  // If we move above - the ratio is negative
  // If we move below the ratio is positive
  /**
   * Relation between pan Y position and third of viewport height.
   *
   * When we are at initial position (center bounds) - the ratio is 0,
   * if position is shifted upwards - the ratio is negative,
   * if position is shifted downwards - the ratio is positive.
   *
   * @private
   * @param {number} panY The current pan Y position.
   * @returns {number}
   */
  _getVerticalDragRatio(t) {
    var e, i;
    return (t - ((e = (i = this.pswp.currSlide) === null || i === void 0 ? void 0 : i.bounds.center.y) !== null && e !== void 0 ? e : 0)) / (this.pswp.viewportSize.y / 3);
  }
  /**
   * Set pan position of the current slide.
   * Apply friction if the position is beyond the pan bounds,
   * or if custom friction is defined.
   *
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} potentialPan
   * @param {number} [customFriction] (0.1 - 1)
   */
  _setPanWithFriction(t, e, i) {
    const {
      currSlide: s
    } = this.pswp;
    if (!s)
      return;
    const {
      pan: n,
      bounds: r
    } = s;
    if (r.correctPan(t, e) !== e || i) {
      const h = Math.round(e - n[t]);
      n[t] += h * (i || wt);
    } else
      n[t] = e;
  }
}
const Ct = 0.05, bt = 0.15;
function B(o, t, e) {
  return o.x = (t.x + e.x) / 2, o.y = (t.y + e.y) / 2, o;
}
class xt {
  /**
   * @param {Gestures} gestures
   */
  constructor(t) {
    this.gestures = t, this._startPan = {
      x: 0,
      y: 0
    }, this._startZoomPoint = {
      x: 0,
      y: 0
    }, this._zoomPoint = {
      x: 0,
      y: 0
    }, this._wasOverFitZoomLevel = !1, this._startZoomLevel = 1;
  }
  start() {
    const {
      currSlide: t
    } = this.gestures.pswp;
    t && (this._startZoomLevel = t.currZoomLevel, p(this._startPan, t.pan)), this.gestures.pswp.animations.stopAllPan(), this._wasOverFitZoomLevel = !1;
  }
  change() {
    const {
      p1: t,
      startP1: e,
      p2: i,
      startP2: s,
      pswp: n
    } = this.gestures, {
      currSlide: r
    } = n;
    if (!r)
      return;
    const a = r.zoomLevels.min, h = r.zoomLevels.max;
    if (!r.isZoomable() || n.mainScroll.isShifted())
      return;
    B(this._startZoomPoint, e, s), B(this._zoomPoint, t, i);
    let l = 1 / T(e, s) * T(t, i) * this._startZoomLevel;
    if (l > r.zoomLevels.initial + r.zoomLevels.initial / 15 && (this._wasOverFitZoomLevel = !0), l < a)
      if (n.options.pinchToClose && !this._wasOverFitZoomLevel && this._startZoomLevel <= r.zoomLevels.initial) {
        const d = 1 - (a - l) / (a / 1.2);
        n.dispatch("pinchClose", {
          bgOpacity: d
        }).defaultPrevented || n.applyBgOpacity(d);
      } else
        l = a - (a - l) * bt;
    else l > h && (l = h + (l - h) * Ct);
    r.pan.x = this._calculatePanForZoomLevel("x", l), r.pan.y = this._calculatePanForZoomLevel("y", l), r.setZoomLevel(l), r.applyCurrentZoomPan();
  }
  end() {
    const {
      pswp: t
    } = this.gestures, {
      currSlide: e
    } = t;
    (!e || e.currZoomLevel < e.zoomLevels.initial) && !this._wasOverFitZoomLevel && t.options.pinchToClose ? t.close() : this.correctZoomPan();
  }
  /**
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} currZoomLevel
   * @returns {number}
   */
  _calculatePanForZoomLevel(t, e) {
    const i = e / this._startZoomLevel;
    return this._zoomPoint[t] - (this._startZoomPoint[t] - this._startPan[t]) * i;
  }
  /**
   * Correct currZoomLevel and pan if they are
   * beyond minimum or maximum values.
   * With animation.
   *
   * @param {boolean} [ignoreGesture]
   * Wether gesture coordinates should be ignored when calculating destination pan position.
   */
  correctZoomPan(t) {
    const {
      pswp: e
    } = this.gestures, {
      currSlide: i
    } = e;
    if (!(i != null && i.isZoomable()))
      return;
    this._zoomPoint.x === 0 && (t = !0);
    const s = i.currZoomLevel;
    let n, r = !0;
    s < i.zoomLevels.initial ? n = i.zoomLevels.initial : s > i.zoomLevels.max ? n = i.zoomLevels.max : (r = !1, n = s);
    const a = e.bgOpacity, h = e.bgOpacity < 1, l = p({
      x: 0,
      y: 0
    }, i.pan);
    let d = p({
      x: 0,
      y: 0
    }, l);
    t && (this._zoomPoint.x = 0, this._zoomPoint.y = 0, this._startZoomPoint.x = 0, this._startZoomPoint.y = 0, this._startZoomLevel = s, p(this._startPan, l)), r && (d = {
      x: this._calculatePanForZoomLevel("x", n),
      y: this._calculatePanForZoomLevel("y", n)
    }), i.setZoomLevel(n), d = {
      x: i.bounds.correctPan("x", d.x),
      y: i.bounds.correctPan("y", d.y)
    }, i.setZoomLevel(s);
    const c = !x(d, l);
    if (!c && !r && !h) {
      i._setResolution(n), i.applyCurrentZoomPan();
      return;
    }
    e.animations.stopAllPan(), e.animations.startSpring({
      isPan: !0,
      start: 0,
      end: 1e3,
      velocity: 0,
      dampingRatio: 1,
      naturalFrequency: 40,
      onUpdate: (u) => {
        if (u /= 1e3, c || r) {
          if (c && (i.pan.x = l.x + (d.x - l.x) * u, i.pan.y = l.y + (d.y - l.y) * u), r) {
            const m = s + (n - s) * u;
            i.setZoomLevel(m);
          }
          i.applyCurrentZoomPan();
        }
        h && e.bgOpacity < 1 && e.applyBgOpacity(A(a + (1 - a) * u, 0, 1));
      },
      onComplete: () => {
        i._setResolution(n), i.applyCurrentZoomPan();
      }
    });
  }
}
function $(o) {
  return !!/** @type {HTMLElement} */
  o.target.closest(".pswp__container");
}
class Lt {
  /**
   * @param {Gestures} gestures
   */
  constructor(t) {
    this.gestures = t;
  }
  /**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */
  click(t, e) {
    const i = (
      /** @type {HTMLElement} */
      e.target.classList
    ), s = i.contains("pswp__img"), n = i.contains("pswp__item") || i.contains("pswp__zoom-wrap");
    s ? this._doClickOrTapAction("imageClick", t, e) : n && this._doClickOrTapAction("bgClick", t, e);
  }
  /**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */
  tap(t, e) {
    $(e) && this._doClickOrTapAction("tap", t, e);
  }
  /**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */
  doubleTap(t, e) {
    $(e) && this._doClickOrTapAction("doubleTap", t, e);
  }
  /**
   * @private
   * @param {Actions} actionName
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */
  _doClickOrTapAction(t, e, i) {
    var s;
    const {
      pswp: n
    } = this.gestures, {
      currSlide: r
    } = n, a = (
      /** @type {AddPostfix<Actions, 'Action'>} */
      t + "Action"
    ), h = n.options[a];
    if (!n.dispatch(a, {
      point: e,
      originalEvent: i
    }).defaultPrevented) {
      if (typeof h == "function") {
        h.call(n, e, i);
        return;
      }
      switch (h) {
        case "close":
        case "next":
          n[h]();
          break;
        case "zoom":
          r == null || r.toggleZoom(e);
          break;
        case "zoom-or-close":
          r != null && r.isZoomable() && r.zoomLevels.secondary !== r.zoomLevels.initial ? r.toggleZoom(e) : n.options.clickToCloseNonZoomable && n.close();
          break;
        case "toggle-controls":
          (s = this.gestures.pswp.element) === null || s === void 0 || s.classList.toggle("pswp--ui-visible");
          break;
      }
    }
  }
}
const At = 10, Et = 300, zt = 25;
class Tt {
  /**
   * @param {PhotoSwipe} pswp
   */
  constructor(t) {
    this.pswp = t, this.dragAxis = null, this.p1 = {
      x: 0,
      y: 0
    }, this.p2 = {
      x: 0,
      y: 0
    }, this.prevP1 = {
      x: 0,
      y: 0
    }, this.prevP2 = {
      x: 0,
      y: 0
    }, this.startP1 = {
      x: 0,
      y: 0
    }, this.startP2 = {
      x: 0,
      y: 0
    }, this.velocity = {
      x: 0,
      y: 0
    }, this._lastStartP1 = {
      x: 0,
      y: 0
    }, this._intervalP1 = {
      x: 0,
      y: 0
    }, this._numActivePoints = 0, this._ongoingPointers = [], this._touchEventEnabled = "ontouchstart" in window, this._pointerEventEnabled = !!window.PointerEvent, this.supportsTouch = this._touchEventEnabled || this._pointerEventEnabled && navigator.maxTouchPoints > 1, this._numActivePoints = 0, this._intervalTime = 0, this._velocityCalculated = !1, this.isMultitouch = !1, this.isDragging = !1, this.isZooming = !1, this.raf = null, this._tapTimer = null, this.supportsTouch || (t.options.allowPanToNext = !1), this.drag = new It(this), this.zoomLevels = new xt(this), this.tapHandler = new Lt(this), t.on("bindEvents", () => {
      t.events.add(
        t.scrollWrap,
        "click",
        /** @type EventListener */
        this._onClick.bind(this)
      ), this._pointerEventEnabled ? this._bindEvents("pointer", "down", "up", "cancel") : this._touchEventEnabled ? (this._bindEvents("touch", "start", "end", "cancel"), t.scrollWrap && (t.scrollWrap.ontouchmove = () => {
      }, t.scrollWrap.ontouchend = () => {
      })) : this._bindEvents("mouse", "down", "up");
    });
  }
  /**
   * @private
   * @param {'mouse' | 'touch' | 'pointer'} pref
   * @param {'down' | 'start'} down
   * @param {'up' | 'end'} up
   * @param {'cancel'} [cancel]
   */
  _bindEvents(t, e, i, s) {
    const {
      pswp: n
    } = this, {
      events: r
    } = n, a = s ? t + s : "";
    r.add(
      n.scrollWrap,
      t + e,
      /** @type EventListener */
      this.onPointerDown.bind(this)
    ), r.add(
      window,
      t + "move",
      /** @type EventListener */
      this.onPointerMove.bind(this)
    ), r.add(
      window,
      t + i,
      /** @type EventListener */
      this.onPointerUp.bind(this)
    ), a && r.add(
      n.scrollWrap,
      a,
      /** @type EventListener */
      this.onPointerUp.bind(this)
    );
  }
  /**
   * @param {PointerEvent} e
   */
  onPointerDown(t) {
    const e = t.type === "mousedown" || t.pointerType === "mouse";
    if (e && t.button > 0)
      return;
    const {
      pswp: i
    } = this;
    if (!i.opener.isOpen) {
      t.preventDefault();
      return;
    }
    i.dispatch("pointerDown", {
      originalEvent: t
    }).defaultPrevented || (e && (i.mouseDetected(), this._preventPointerEventBehaviour(t, "down")), i.animations.stopAll(), this._updatePoints(t, "down"), this._numActivePoints === 1 && (this.dragAxis = null, p(this.startP1, this.p1)), this._numActivePoints > 1 ? (this._clearTapTimer(), this.isMultitouch = !0) : this.isMultitouch = !1);
  }
  /**
   * @param {PointerEvent} e
   */
  onPointerMove(t) {
    this._preventPointerEventBehaviour(t, "move"), this._numActivePoints && (this._updatePoints(t, "move"), !this.pswp.dispatch("pointerMove", {
      originalEvent: t
    }).defaultPrevented && (this._numActivePoints === 1 && !this.isDragging ? (this.dragAxis || this._calculateDragDirection(), this.dragAxis && !this.isDragging && (this.isZooming && (this.isZooming = !1, this.zoomLevels.end()), this.isDragging = !0, this._clearTapTimer(), this._updateStartPoints(), this._intervalTime = Date.now(), this._velocityCalculated = !1, p(this._intervalP1, this.p1), this.velocity.x = 0, this.velocity.y = 0, this.drag.start(), this._rafStopLoop(), this._rafRenderLoop())) : this._numActivePoints > 1 && !this.isZooming && (this._finishDrag(), this.isZooming = !0, this._updateStartPoints(), this.zoomLevels.start(), this._rafStopLoop(), this._rafRenderLoop())));
  }
  /**
   * @private
   */
  _finishDrag() {
    this.isDragging && (this.isDragging = !1, this._velocityCalculated || this._updateVelocity(!0), this.drag.end(), this.dragAxis = null);
  }
  /**
   * @param {PointerEvent} e
   */
  onPointerUp(t) {
    this._numActivePoints && (this._updatePoints(t, "up"), !this.pswp.dispatch("pointerUp", {
      originalEvent: t
    }).defaultPrevented && (this._numActivePoints === 0 && (this._rafStopLoop(), this.isDragging ? this._finishDrag() : !this.isZooming && !this.isMultitouch && this._finishTap(t)), this._numActivePoints < 2 && this.isZooming && (this.isZooming = !1, this.zoomLevels.end(), this._numActivePoints === 1 && (this.dragAxis = null, this._updateStartPoints()))));
  }
  /**
   * @private
   */
  _rafRenderLoop() {
    (this.isDragging || this.isZooming) && (this._updateVelocity(), this.isDragging ? x(this.p1, this.prevP1) || this.drag.change() : (!x(this.p1, this.prevP1) || !x(this.p2, this.prevP2)) && this.zoomLevels.change(), this._updatePrevPoints(), this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this)));
  }
  /**
   * Update velocity at 50ms interval
   *
   * @private
   * @param {boolean} [force]
   */
  _updateVelocity(t) {
    const e = Date.now(), i = e - this._intervalTime;
    i < 50 && !t || (this.velocity.x = this._getVelocity("x", i), this.velocity.y = this._getVelocity("y", i), this._intervalTime = e, p(this._intervalP1, this.p1), this._velocityCalculated = !0);
  }
  /**
   * @private
   * @param {PointerEvent} e
   */
  _finishTap(t) {
    const {
      mainScroll: e
    } = this.pswp;
    if (e.isShifted()) {
      e.moveIndexBy(0, !0);
      return;
    }
    if (t.type.indexOf("cancel") > 0)
      return;
    if (t.type === "mouseup" || t.pointerType === "mouse") {
      this.tapHandler.click(this.startP1, t);
      return;
    }
    const i = this.pswp.options.doubleTapAction ? Et : 0;
    this._tapTimer ? (this._clearTapTimer(), T(this._lastStartP1, this.startP1) < zt && this.tapHandler.doubleTap(this.startP1, t)) : (p(this._lastStartP1, this.startP1), this._tapTimer = setTimeout(() => {
      this.tapHandler.tap(this.startP1, t), this._clearTapTimer();
    }, i));
  }
  /**
   * @private
   */
  _clearTapTimer() {
    this._tapTimer && (clearTimeout(this._tapTimer), this._tapTimer = null);
  }
  /**
   * Get velocity for axis
   *
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} duration
   * @returns {number}
   */
  _getVelocity(t, e) {
    const i = this.p1[t] - this._intervalP1[t];
    return Math.abs(i) > 1 && e > 5 ? i / e : 0;
  }
  /**
   * @private
   */
  _rafStopLoop() {
    this.raf && (cancelAnimationFrame(this.raf), this.raf = null);
  }
  /**
   * @private
   * @param {PointerEvent} e
   * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
   */
  _preventPointerEventBehaviour(t, e) {
    this.pswp.applyFilters("preventPointerEvent", !0, t, e) && t.preventDefault();
  }
  /**
   * Parses and normalizes points from the touch, mouse or pointer event.
   * Updates p1 and p2.
   *
   * @private
   * @param {PointerEvent | TouchEvent} e
   * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
   */
  _updatePoints(t, e) {
    if (this._pointerEventEnabled) {
      const i = (
        /** @type {PointerEvent} */
        t
      ), s = this._ongoingPointers.findIndex((n) => n.id === i.pointerId);
      e === "up" && s > -1 ? this._ongoingPointers.splice(s, 1) : e === "down" && s === -1 ? this._ongoingPointers.push(this._convertEventPosToPoint(i, {
        x: 0,
        y: 0
      })) : s > -1 && this._convertEventPosToPoint(i, this._ongoingPointers[s]), this._numActivePoints = this._ongoingPointers.length, this._numActivePoints > 0 && p(this.p1, this._ongoingPointers[0]), this._numActivePoints > 1 && p(this.p2, this._ongoingPointers[1]);
    } else {
      const i = (
        /** @type {TouchEvent} */
        t
      );
      this._numActivePoints = 0, i.type.indexOf("touch") > -1 ? i.touches && i.touches.length > 0 && (this._convertEventPosToPoint(i.touches[0], this.p1), this._numActivePoints++, i.touches.length > 1 && (this._convertEventPosToPoint(i.touches[1], this.p2), this._numActivePoints++)) : (this._convertEventPosToPoint(
        /** @type {PointerEvent} */
        t,
        this.p1
      ), e === "up" ? this._numActivePoints = 0 : this._numActivePoints++);
    }
  }
  /** update points that were used during previous rAF tick
   * @private
   */
  _updatePrevPoints() {
    p(this.prevP1, this.p1), p(this.prevP2, this.p2);
  }
  /** update points at the start of gesture
   * @private
   */
  _updateStartPoints() {
    p(this.startP1, this.p1), p(this.startP2, this.p2), this._updatePrevPoints();
  }
  /** @private */
  _calculateDragDirection() {
    if (this.pswp.mainScroll.isShifted())
      this.dragAxis = "x";
    else {
      const t = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
      if (t !== 0) {
        const e = t > 0 ? "x" : "y";
        Math.abs(this.p1[e] - this.startP1[e]) >= At && (this.dragAxis = e);
      }
    }
  }
  /**
   * Converts touch, pointer or mouse event
   * to PhotoSwipe point.
   *
   * @private
   * @param {Touch | PointerEvent} e
   * @param {Point} p
   * @returns {Point}
   */
  _convertEventPosToPoint(t, e) {
    return e.x = t.pageX - this.pswp.offset.x, e.y = t.pageY - this.pswp.offset.y, "pointerId" in t ? e.id = t.pointerId : t.identifier !== void 0 && (e.id = t.identifier), e;
  }
  /**
   * @private
   * @param {PointerEvent} e
   */
  _onClick(t) {
    this.pswp.mainScroll.isShifted() && (t.preventDefault(), t.stopPropagation());
  }
}
const Ot = 0.35;
class Dt {
  /**
   * @param {PhotoSwipe} pswp
   */
  constructor(t) {
    this.pswp = t, this.x = 0, this.slideWidth = 0, this._currPositionIndex = 0, this._prevPositionIndex = 0, this._containerShiftIndex = -1, this.itemHolders = [];
  }
  /**
   * Position the scroller and slide containers
   * according to viewport size.
   *
   * @param {boolean} [resizeSlides] Whether slides content should resized
   */
  resize(t) {
    const {
      pswp: e
    } = this, i = Math.round(e.viewportSize.x + e.viewportSize.x * e.options.spacing), s = i !== this.slideWidth;
    s && (this.slideWidth = i, this.moveTo(this.getCurrSlideX())), this.itemHolders.forEach((n, r) => {
      s && w(n.el, (r + this._containerShiftIndex) * this.slideWidth), t && n.slide && n.slide.resize();
    });
  }
  /**
   * Reset X position of the main scroller to zero
   */
  resetPosition() {
    this._currPositionIndex = 0, this._prevPositionIndex = 0, this.slideWidth = 0, this._containerShiftIndex = -1;
  }
  /**
   * Create and append array of three items
   * that hold data about slides in DOM
   */
  appendHolders() {
    this.itemHolders = [];
    for (let t = 0; t < 3; t++) {
      const e = f("pswp__item", "div", this.pswp.container);
      e.setAttribute("role", "group"), e.setAttribute("aria-roledescription", "slide"), e.setAttribute("aria-hidden", "true"), e.style.display = t === 1 ? "block" : "none", this.itemHolders.push({
        el: e
        //index: -1
      });
    }
  }
  /**
   * Whether the main scroll can be horizontally swiped to the next or previous slide.
   * @returns {boolean}
   */
  canBeSwiped() {
    return this.pswp.getNumItems() > 1;
  }
  /**
   * Move main scroll by X amount of slides.
   * For example:
   *   `-1` will move to the previous slide,
   *    `0` will reset the scroll position of the current slide,
   *    `3` will move three slides forward
   *
   * If loop option is enabled - index will be automatically looped too,
   * (for example `-1` will move to the last slide of the gallery).
   *
   * @param {number} diff
   * @param {boolean} [animate]
   * @param {number} [velocityX]
   * @returns {boolean} whether index was changed or not
   */
  moveIndexBy(t, e, i) {
    const {
      pswp: s
    } = this;
    let n = s.potentialIndex + t;
    const r = s.getNumItems();
    if (s.canLoop()) {
      n = s.getLoopedIndex(n);
      const h = (t + r) % r;
      h <= r / 2 ? t = h : t = h - r;
    } else
      n < 0 ? n = 0 : n >= r && (n = r - 1), t = n - s.potentialIndex;
    s.potentialIndex = n, this._currPositionIndex -= t, s.animations.stopMainScroll();
    const a = this.getCurrSlideX();
    if (!e)
      this.moveTo(a), this.updateCurrItem();
    else {
      s.animations.startSpring({
        isMainScroll: !0,
        start: this.x,
        end: a,
        velocity: i || 0,
        naturalFrequency: 30,
        dampingRatio: 1,
        //0.7,
        onUpdate: (l) => {
          this.moveTo(l);
        },
        onComplete: () => {
          this.updateCurrItem(), s.appendHeavy();
        }
      });
      let h = s.potentialIndex - s.currIndex;
      if (s.canLoop()) {
        const l = (h + r) % r;
        l <= r / 2 ? h = l : h = l - r;
      }
      Math.abs(h) > 1 && this.updateCurrItem();
    }
    return !!t;
  }
  /**
   * X position of the main scroll for the current slide
   * (ignores position during dragging)
   * @returns {number}
   */
  getCurrSlideX() {
    return this.slideWidth * this._currPositionIndex;
  }
  /**
   * Whether scroll position is shifted.
   * For example, it will return true if the scroll is being dragged or animated.
   * @returns {boolean}
   */
  isShifted() {
    return this.x !== this.getCurrSlideX();
  }
  /**
   * Update slides X positions and set their content
   */
  updateCurrItem() {
    var t;
    const {
      pswp: e
    } = this, i = this._prevPositionIndex - this._currPositionIndex;
    if (!i)
      return;
    this._prevPositionIndex = this._currPositionIndex, e.currIndex = e.potentialIndex;
    let s = Math.abs(i), n;
    s >= 3 && (this._containerShiftIndex += i + (i > 0 ? -3 : 3), s = 3, this.itemHolders.forEach((r) => {
      var a;
      (a = r.slide) === null || a === void 0 || a.destroy(), r.slide = void 0;
    }));
    for (let r = 0; r < s; r++)
      i > 0 ? (n = this.itemHolders.shift(), n && (this.itemHolders[2] = n, this._containerShiftIndex++, w(n.el, (this._containerShiftIndex + 2) * this.slideWidth), e.setContent(n, e.currIndex - s + r + 2))) : (n = this.itemHolders.pop(), n && (this.itemHolders.unshift(n), this._containerShiftIndex--, w(n.el, this._containerShiftIndex * this.slideWidth), e.setContent(n, e.currIndex + s - r - 2)));
    Math.abs(this._containerShiftIndex) > 50 && !this.isShifted() && (this.resetPosition(), this.resize()), e.animations.stopAllPan(), this.itemHolders.forEach((r, a) => {
      r.slide && r.slide.setIsActive(a === 1);
    }), e.currSlide = (t = this.itemHolders[1]) === null || t === void 0 ? void 0 : t.slide, e.contentLoader.updateLazy(i), e.currSlide && e.currSlide.applyCurrentZoomPan(), e.dispatch("change");
  }
  /**
   * Move the X position of the main scroll container
   *
   * @param {number} x
   * @param {boolean} [dragging]
   */
  moveTo(t, e) {
    if (!this.pswp.canLoop() && e) {
      let i = (this.slideWidth * this._currPositionIndex - t) / this.slideWidth;
      i += this.pswp.currIndex;
      const s = Math.round(t - this.x);
      (i < 0 && s > 0 || i >= this.pswp.getNumItems() - 1 && s < 0) && (t = this.x + s * Ot);
    }
    this.x = t, this.pswp.container && w(this.pswp.container, t), this.pswp.dispatch("moveMainScroll", {
      x: t,
      dragging: e ?? !1
    });
  }
}
const k = {
  Escape: 27,
  z: 90,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
  Tab: 9,
  Space: 32,
  Enter: 13
}, g = (o, t) => o == " " ? t ? o : k.Space : t ? o : k[o];
class Zt {
  /**
   * @param {PhotoSwipe} pswp
   */
  constructor(t) {
    this.pswp = t, this._wasFocused = !1, t.on("bindEvents", () => {
      t.options.trapFocus && (t.options.initialPointerPos || this._focusRoot(), t.events.add(
        document,
        "focusin",
        /** @type EventListener */
        this._onFocusIn.bind(this)
      )), t.events.add(
        document,
        "keydown",
        /** @type EventListener */
        this._onKeyDown.bind(this)
      );
    });
    const e = (
      /** @type {HTMLElement} */
      document.activeElement
    );
    t.on("destroy", () => {
      t.options.returnFocus && e && this._wasFocused && e.focus();
    });
  }
  /** @private */
  _focusRoot() {
    !this._wasFocused && this.pswp.element && (this.pswp.element.focus(), this._wasFocused = !0);
  }
  /**
   * @private
   * @param {KeyboardEvent} e
   */
  _onKeyDown(t) {
    const {
      pswp: e
    } = this;
    if (e.dispatch("keydown", {
      originalEvent: t
    }).defaultPrevented || ft(t))
      return;
    let i, s, n = !1;
    const r = "key" in t;
    switch (r ? t.key : t.keyCode) {
      case g("Escape", r):
        e.options.escKey && (i = "close");
        break;
      case g("z", r):
        i = "toggleZoom";
        break;
      case g("ArrowLeft", r):
        s = "x";
        break;
      case g("ArrowUp", r):
        s = "y";
        break;
      case g("ArrowRight", r):
        s = "x", n = !0;
        break;
      case g(" ", r):
        s = "x", n = !0;
        break;
      case g("Enter", r):
        s = "x", n = !0;
        break;
      case g("ArrowDown", r):
        n = !0, s = "y";
        break;
      case g("Tab", r):
        this._focusRoot();
        break;
    }
    if (s) {
      t.preventDefault();
      const {
        currSlide: a
      } = e;
      e.options.arrowKeys && s === "x" && e.getNumItems() > 1 ? i = n ? "next" : "prev" : a && a.currZoomLevel > a.zoomLevels.fit && (a.pan[s] += n ? -80 : 80, a.panTo(a.pan.x, a.pan.y));
    }
    i && (t.preventDefault(), e[i]());
  }
  /**
   * Trap focus inside photoswipe
   *
   * @private
   * @param {FocusEvent} e
   */
  _onFocusIn(t) {
    const {
      template: e
    } = this.pswp;
    e && document !== t.target && e !== t.target && !e.contains(
      /** @type {Node} */
      t.target
    ) && e.focus();
  }
}
const Mt = "cubic-bezier(.4,0,.22,1)";
class Ft {
  /**
   * onComplete can be unpredictable, be careful about current state
   *
   * @param {CssAnimationProps} props
   */
  constructor(t) {
    var e;
    this.props = t;
    const {
      target: i,
      onComplete: s,
      transform: n,
      onFinish: r = () => {
      },
      duration: a = 333,
      easing: h = Mt
    } = t;
    this.onFinish = r;
    const l = n ? "transform" : "opacity", d = (e = t[l]) !== null && e !== void 0 ? e : "";
    this._target = i, this._onComplete = s, this._finished = !1, this._onTransitionEnd = this._onTransitionEnd.bind(this), this._helperTimeout = setTimeout(() => {
      U(i, l, a, h), this._helperTimeout = setTimeout(() => {
        i.addEventListener("transitionend", this._onTransitionEnd, !1), i.addEventListener("transitioncancel", this._onTransitionEnd, !1), this._helperTimeout = setTimeout(() => {
          this._finalizeAnimation();
        }, a + 500), i.style[l] = d;
      }, 30);
    }, 0);
  }
  /**
   * @private
   * @param {TransitionEvent} e
   */
  _onTransitionEnd(t) {
    t.target === this._target && this._finalizeAnimation();
  }
  /**
   * @private
   */
  _finalizeAnimation() {
    this._finished || (this._finished = !0, this.onFinish(), this._onComplete && this._onComplete());
  }
  // Destroy is called automatically onFinish
  destroy() {
    this._helperTimeout && clearTimeout(this._helperTimeout), ut(this._target), this._target.removeEventListener("transitionend", this._onTransitionEnd, !1), this._target.removeEventListener("transitioncancel", this._onTransitionEnd, !1), this._finished || this._finalizeAnimation();
  }
}
const Rt = 12, Nt = 0.75;
class Bt {
  /**
   * @param {number} initialVelocity Initial velocity, px per ms.
   *
   * @param {number} [dampingRatio]
   * Determines how bouncy animation will be.
   * From 0 to 1, 0 - always overshoot, 1 - do not overshoot.
   * "overshoot" refers to part of animation that
   * goes beyond the final value.
   *
   * @param {number} [naturalFrequency]
   * Determines how fast animation will slow down.
   * The higher value - the stiffer the transition will be,
   * and the faster it will slow down.
   * Recommended value from 10 to 50
   */
  constructor(t, e, i) {
    this.velocity = t * 1e3, this._dampingRatio = e || Nt, this._naturalFrequency = i || Rt, this._dampedFrequency = this._naturalFrequency, this._dampingRatio < 1 && (this._dampedFrequency *= Math.sqrt(1 - this._dampingRatio * this._dampingRatio));
  }
  /**
   * @param {number} deltaPosition Difference between current and end position of the animation
   * @param {number} deltaTime Frame duration in milliseconds
   *
   * @returns {number} Displacement, relative to the end position.
   */
  easeFrame(t, e) {
    let i = 0, s;
    e /= 1e3;
    const n = Math.E ** (-this._dampingRatio * this._naturalFrequency * e);
    if (this._dampingRatio === 1)
      s = this.velocity + this._naturalFrequency * t, i = (t + s * e) * n, this.velocity = i * -this._naturalFrequency + s * n;
    else if (this._dampingRatio < 1) {
      s = 1 / this._dampedFrequency * (this._dampingRatio * this._naturalFrequency * t + this.velocity);
      const r = Math.cos(this._dampedFrequency * e), a = Math.sin(this._dampedFrequency * e);
      i = n * (t * r + s * a), this.velocity = i * -this._naturalFrequency * this._dampingRatio + n * (-this._dampedFrequency * t * a + this._dampedFrequency * s * r);
    }
    return i;
  }
}
class $t {
  /**
   * @param {SpringAnimationProps} props
   */
  constructor(t) {
    this.props = t, this._raf = 0;
    const {
      start: e,
      end: i,
      velocity: s,
      onUpdate: n,
      onComplete: r,
      onFinish: a = () => {
      },
      dampingRatio: h,
      naturalFrequency: l
    } = t;
    this.onFinish = a;
    const d = new Bt(s, h, l);
    let c = Date.now(), u = e - i;
    const m = () => {
      this._raf && (u = d.easeFrame(u, Date.now() - c), Math.abs(u) < 1 && Math.abs(d.velocity) < 50 ? (n(i), r && r(), this.onFinish()) : (c = Date.now(), n(u + i), this._raf = requestAnimationFrame(m)));
    };
    this._raf = requestAnimationFrame(m);
  }
  // Destroy is called automatically onFinish
  destroy() {
    this._raf >= 0 && cancelAnimationFrame(this._raf), this._raf = 0;
  }
}
class kt {
  constructor() {
    this.activeAnimations = [];
  }
  /**
   * @param {SpringAnimationProps} props
   */
  startSpring(t) {
    this._start(t, !0);
  }
  /**
   * @param {CssAnimationProps} props
   */
  startTransition(t) {
    this._start(t);
  }
  /**
   * @private
   * @param {AnimationProps} props
   * @param {boolean} [isSpring]
   * @returns {Animation}
   */
  _start(t, e) {
    const i = e ? new $t(
      /** @type SpringAnimationProps */
      t
    ) : new Ft(
      /** @type CssAnimationProps */
      t
    );
    return this.activeAnimations.push(i), i.onFinish = () => this.stop(i), i;
  }
  /**
   * @param {Animation} animation
   */
  stop(t) {
    t.destroy();
    const e = this.activeAnimations.indexOf(t);
    e > -1 && this.activeAnimations.splice(e, 1);
  }
  stopAll() {
    this.activeAnimations.forEach((t) => {
      t.destroy();
    }), this.activeAnimations = [];
  }
  /**
   * Stop all pan or zoom transitions
   */
  stopAllPan() {
    this.activeAnimations = this.activeAnimations.filter((t) => t.props.isPan ? (t.destroy(), !1) : !0);
  }
  stopMainScroll() {
    this.activeAnimations = this.activeAnimations.filter((t) => t.props.isMainScroll ? (t.destroy(), !1) : !0);
  }
  /**
   * Returns true if main scroll transition is running
   */
  // isMainScrollRunning() {
  //   return this.activeAnimations.some((animation) => {
  //     return animation.props.isMainScroll;
  //   });
  // }
  /**
   * Returns true if any pan or zoom transition is running
   */
  isPanRunning() {
    return this.activeAnimations.some((t) => t.props.isPan);
  }
}
class Wt {
  /**
   * @param {PhotoSwipe} pswp
   */
  constructor(t) {
    this.pswp = t, t.events.add(
      t.element,
      "wheel",
      /** @type EventListener */
      this._onWheel.bind(this)
    );
  }
  /**
   * @private
   * @param {WheelEvent} e
   */
  _onWheel(t) {
    t.preventDefault();
    const {
      currSlide: e
    } = this.pswp;
    let {
      deltaX: i,
      deltaY: s
    } = t;
    if (e && !this.pswp.dispatch("wheel", {
      originalEvent: t
    }).defaultPrevented)
      if (t.ctrlKey || this.pswp.options.wheelToZoom) {
        if (e.isZoomable()) {
          let n = -s;
          t.deltaMode === 1 ? n *= 0.05 : n *= t.deltaMode ? 1 : 2e-3, n = 2 ** n;
          const r = e.currZoomLevel * n;
          e.zoomTo(r, {
            x: t.clientX,
            y: t.clientY
          });
        }
      } else
        e.isPannable() && (t.deltaMode === 1 && (i *= 18, s *= 18), e.panTo(e.pan.x - i, e.pan.y - s));
  }
}
function Ht(o) {
  if (typeof o == "string")
    return o;
  if (!o || !o.isCustomSVG)
    return "";
  const t = o;
  let e = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
  return e = e.split("%d").join(
    /** @type {string} */
    t.size || 32
  ), t.outlineID && (e += '<use class="pswp__icn-shadow" xlink:href="#' + t.outlineID + '"/>'), e += t.inner, e += "</svg>", e;
}
class Vt {
  /**
   * @param {PhotoSwipe} pswp
   * @param {UIElementData} data
   */
  constructor(t, e) {
    var i;
    const s = e.name || e.className;
    let n = e.html;
    if (t.options[s] === !1)
      return;
    typeof t.options[s + "SVG"] == "string" && (n = t.options[s + "SVG"]), t.dispatch("uiElementCreate", {
      data: e
    });
    let r = "";
    e.isButton ? (r += "pswp__button ", r += e.className || `pswp__button--${e.name}`) : r += e.className || `pswp__${e.name}`;
    let a = e.isButton ? e.tagName || "button" : e.tagName || "div";
    a = /** @type {keyof HTMLElementTagNameMap} */
    a.toLowerCase();
    const h = f(r, a);
    if (e.isButton) {
      a === "button" && (h.type = "button");
      let {
        title: c
      } = e;
      const {
        ariaLabel: u
      } = e;
      typeof t.options[s + "Title"] == "string" && (c = t.options[s + "Title"]), c && (h.title = c);
      const m = u || c;
      m && h.setAttribute("aria-label", m);
    }
    h.innerHTML = Ht(n), e.onInit && e.onInit(h, t), e.onClick && (h.onclick = (c) => {
      typeof e.onClick == "string" ? t[e.onClick]() : typeof e.onClick == "function" && e.onClick(c, h, t);
    });
    const l = e.appendTo || "bar";
    let d = t.element;
    l === "bar" ? (t.topBar || (t.topBar = f("pswp__top-bar pswp__hide-on-close", "div", t.scrollWrap)), d = t.topBar) : (h.classList.add("pswp__hide-on-close"), l === "wrapper" && (d = t.scrollWrap)), (i = d) === null || i === void 0 || i.appendChild(t.applyFilters("uiElement", h, e));
  }
}
function Y(o, t, e) {
  o.classList.add("pswp__button--arrow"), o.setAttribute("aria-controls", "pswp__items"), t.on("change", () => {
    t.options.loop || (e ? o.disabled = !(t.currIndex < t.getNumItems() - 1) : o.disabled = !(t.currIndex > 0));
  });
}
const Ut = {
  name: "arrowPrev",
  className: "pswp__button--arrow--prev",
  title: "Previous",
  order: 10,
  isButton: !0,
  appendTo: "wrapper",
  html: {
    isCustomSVG: !0,
    size: 60,
    inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
    outlineID: "pswp__icn-arrow"
  },
  onClick: "prev",
  onInit: Y
}, Gt = {
  name: "arrowNext",
  className: "pswp__button--arrow--next",
  title: "Next",
  order: 11,
  isButton: !0,
  appendTo: "wrapper",
  html: {
    isCustomSVG: !0,
    size: 60,
    inner: '<use xlink:href="#pswp__icn-arrow"/>',
    outlineID: "pswp__icn-arrow"
  },
  onClick: "next",
  onInit: (o, t) => {
    Y(o, t, !0);
  }
}, qt = {
  name: "close",
  title: "Close",
  order: 20,
  isButton: !0,
  html: {
    isCustomSVG: !0,
    inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
    outlineID: "pswp__icn-close"
  },
  onClick: "close"
}, Kt = {
  name: "zoom",
  title: "Zoom",
  order: 10,
  isButton: !0,
  html: {
    isCustomSVG: !0,
    // eslint-disable-next-line max-len
    inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/><path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/><path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
    outlineID: "pswp__icn-zoom"
  },
  onClick: "toggleZoom"
}, Xt = {
  name: "preloader",
  appendTo: "bar",
  order: 7,
  html: {
    isCustomSVG: !0,
    // eslint-disable-next-line max-len
    inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
    outlineID: "pswp__icn-loading"
  },
  onInit: (o, t) => {
    let e, i = null;
    const s = (a, h) => {
      o.classList.toggle("pswp__preloader--" + a, h);
    }, n = (a) => {
      e !== a && (e = a, s("active", a));
    }, r = () => {
      var a;
      if (!((a = t.currSlide) !== null && a !== void 0 && a.content.isLoading())) {
        n(!1), i && (clearTimeout(i), i = null);
        return;
      }
      i || (i = setTimeout(() => {
        var h;
        n(!!(!((h = t.currSlide) === null || h === void 0) && h.content.isLoading())), i = null;
      }, t.options.preloaderDelay));
    };
    t.on("change", r), t.on("loadComplete", (a) => {
      t.currSlide === a.slide && r();
    }), t.ui && (t.ui.updatePreloaderVisibility = r);
  }
}, Yt = {
  name: "counter",
  order: 5,
  onInit: (o, t) => {
    t.on("change", () => {
      o.innerText = t.currIndex + 1 + t.options.indexIndicatorSep + t.getNumItems();
    });
  }
};
function W(o, t) {
  o.classList.toggle("pswp--zoomed-in", t);
}
class jt {
  /**
   * @param {PhotoSwipe} pswp
   */
  constructor(t) {
    this.pswp = t, this.isRegistered = !1, this.uiElementsData = [], this.items = [], this.updatePreloaderVisibility = () => {
    }, this._lastUpdatedZoomLevel = void 0;
  }
  init() {
    const {
      pswp: t
    } = this;
    this.isRegistered = !1, this.uiElementsData = [qt, Ut, Gt, Kt, Xt, Yt], t.dispatch("uiRegister"), this.uiElementsData.sort((e, i) => (e.order || 0) - (i.order || 0)), this.items = [], this.isRegistered = !0, this.uiElementsData.forEach((e) => {
      this.registerElement(e);
    }), t.on("change", () => {
      var e;
      (e = t.element) === null || e === void 0 || e.classList.toggle("pswp--one-slide", t.getNumItems() === 1);
    }), t.on("zoomPanUpdate", () => this._onZoomPanUpdate());
  }
  /**
   * @param {UIElementData} elementData
   */
  registerElement(t) {
    this.isRegistered ? this.items.push(new Vt(this.pswp, t)) : this.uiElementsData.push(t);
  }
  /**
   * Fired each time zoom or pan position is changed.
   * Update classes that control visibility of zoom button and cursor icon.
   *
   * @private
   */
  _onZoomPanUpdate() {
    const {
      template: t,
      currSlide: e,
      options: i
    } = this.pswp;
    if (this.pswp.opener.isClosing || !t || !e)
      return;
    let {
      currZoomLevel: s
    } = e;
    if (this.pswp.opener.isOpen || (s = e.zoomLevels.initial), s === this._lastUpdatedZoomLevel)
      return;
    this._lastUpdatedZoomLevel = s;
    const n = e.zoomLevels.initial - e.zoomLevels.secondary;
    if (Math.abs(n) < 0.01 || !e.isZoomable()) {
      W(t, !1), t.classList.remove("pswp--zoom-allowed");
      return;
    }
    t.classList.add("pswp--zoom-allowed");
    const r = s === e.zoomLevels.initial ? e.zoomLevels.secondary : e.zoomLevels.initial;
    W(t, r <= s), (i.imageClickAction === "zoom" || i.imageClickAction === "zoom-or-close") && t.classList.add("pswp--click-to-zoom");
  }
}
function Qt(o) {
  const t = o.getBoundingClientRect();
  return {
    x: t.left,
    y: t.top,
    w: t.width
  };
}
function Jt(o, t, e) {
  const i = o.getBoundingClientRect(), s = i.width / t, n = i.height / e, r = s > n ? s : n, a = (i.width - t * r) / 2, h = (i.height - e * r) / 2, l = {
    x: i.left + a,
    y: i.top + h,
    w: t * r
  };
  return l.innerRect = {
    w: i.width,
    h: i.height,
    x: a,
    y: h
  }, l;
}
function te(o, t, e) {
  const i = e.dispatch("thumbBounds", {
    index: o,
    itemData: t,
    instance: e
  });
  if (i.thumbBounds)
    return i.thumbBounds;
  const {
    element: s
  } = t;
  let n, r;
  if (s && e.options.thumbSelector !== !1) {
    const a = e.options.thumbSelector || "img";
    r = s.matches(a) ? s : (
      /** @type {HTMLElement | null} */
      s.querySelector(a)
    );
  }
  return r = e.applyFilters("thumbEl", r, t, o), r && (t.thumbCropped ? n = Jt(r, t.width || t.w || 0, t.height || t.h || 0) : n = Qt(r)), e.applyFilters("thumbBounds", n, t, o);
}
class ee {
  /**
   * @param {T} type
   * @param {PhotoSwipeEventsMap[T]} [details]
   */
  constructor(t, e) {
    this.type = t, this.defaultPrevented = !1, e && Object.assign(this, e);
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
}
class ie {
  constructor() {
    this._listeners = {}, this._filters = {}, this.pswp = void 0, this.options = void 0;
  }
  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   * @param {number} priority
   */
  addFilter(t, e, i = 100) {
    var s, n, r;
    this._filters[t] || (this._filters[t] = []), (s = this._filters[t]) === null || s === void 0 || s.push({
      fn: e,
      priority: i
    }), (n = this._filters[t]) === null || n === void 0 || n.sort((a, h) => a.priority - h.priority), (r = this.pswp) === null || r === void 0 || r.addFilter(t, e, i);
  }
  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   */
  removeFilter(t, e) {
    this._filters[t] && (this._filters[t] = this._filters[t].filter((i) => i.fn !== e)), this.pswp && this.pswp.removeFilter(t, e);
  }
  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
   * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
   */
  applyFilters(t, ...e) {
    var i;
    return (i = this._filters[t]) === null || i === void 0 || i.forEach((s) => {
      e[0] = s.fn.apply(this, e);
    }), e[0];
  }
  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */
  on(t, e) {
    var i, s;
    this._listeners[t] || (this._listeners[t] = []), (i = this._listeners[t]) === null || i === void 0 || i.push(e), (s = this.pswp) === null || s === void 0 || s.on(t, e);
  }
  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */
  off(t, e) {
    var i;
    this._listeners[t] && (this._listeners[t] = this._listeners[t].filter((s) => e !== s)), (i = this.pswp) === null || i === void 0 || i.off(t, e);
  }
  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {PhotoSwipeEventsMap[T]} [details]
   * @returns {AugmentedEvent<T>}
   */
  dispatch(t, e) {
    var i;
    if (this.pswp)
      return this.pswp.dispatch(t, e);
    const s = (
      /** @type {AugmentedEvent<T>} */
      new ee(t, e)
    );
    return (i = this._listeners[t]) === null || i === void 0 || i.forEach((n) => {
      n.call(this, s);
    }), s;
  }
}
class se {
  /**
   * @param {string | false} imageSrc
   * @param {HTMLElement} container
   */
  constructor(t, e) {
    if (this.element = f("pswp__img pswp__img--placeholder", t ? "img" : "div", e), t) {
      const i = (
        /** @type {HTMLImageElement} */
        this.element
      );
      i.decoding = "async", i.alt = "", i.src = t, i.setAttribute("role", "presentation");
    }
    this.element.setAttribute("aria-hidden", "true");
  }
  /**
   * @param {number} width
   * @param {number} height
   */
  setDisplayedSize(t, e) {
    this.element && (this.element.tagName === "IMG" ? (O(this.element, 250, "auto"), this.element.style.transformOrigin = "0 0", this.element.style.transform = L(0, 0, t / 250)) : O(this.element, t, e));
  }
  destroy() {
    var t;
    (t = this.element) !== null && t !== void 0 && t.parentNode && this.element.remove(), this.element = null;
  }
}
class ne {
  /**
   * @param {SlideData} itemData Slide data
   * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
   * @param {number} index
   */
  constructor(t, e, i) {
    this.instance = e, this.data = t, this.index = i, this.element = void 0, this.placeholder = void 0, this.slide = void 0, this.displayedImageWidth = 0, this.displayedImageHeight = 0, this.width = Number(this.data.w) || Number(this.data.width) || 0, this.height = Number(this.data.h) || Number(this.data.height) || 0, this.isAttached = !1, this.hasSlide = !1, this.isDecoding = !1, this.state = v.IDLE, this.data.type ? this.type = this.data.type : this.data.src ? this.type = "image" : this.type = "html", this.instance.dispatch("contentInit", {
      content: this
    });
  }
  removePlaceholder() {
    this.placeholder && !this.keepPlaceholder() && setTimeout(() => {
      this.placeholder && (this.placeholder.destroy(), this.placeholder = void 0);
    }, 1e3);
  }
  /**
   * Preload content
   *
   * @param {boolean} isLazy
   * @param {boolean} [reload]
   */
  load(t, e) {
    if (this.slide && this.usePlaceholder())
      if (this.placeholder) {
        const i = this.placeholder.element;
        i && !i.parentElement && this.slide.container.prepend(i);
      } else {
        const i = this.instance.applyFilters(
          "placeholderSrc",
          // use  image-based placeholder only for the first slide,
          // as rendering (even small stretched thumbnail) is an expensive operation
          this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : !1,
          this
        );
        this.placeholder = new se(i, this.slide.container);
      }
    this.element && !e || this.instance.dispatch("contentLoad", {
      content: this,
      isLazy: t
    }).defaultPrevented || (this.isImageContent() ? (this.element = f("pswp__img", "img"), this.displayedImageWidth && this.loadImage(t)) : (this.element = f("pswp__content", "div"), this.element.innerHTML = this.data.html || ""), e && this.slide && this.slide.updateContentSize(!0));
  }
  /**
   * Preload image
   *
   * @param {boolean} isLazy
   */
  loadImage(t) {
    var e, i;
    if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
      content: this,
      isLazy: t
    }).defaultPrevented)
      return;
    const s = (
      /** @type HTMLImageElement */
      this.element
    );
    this.updateSrcsetSizes(), this.data.srcset && (s.srcset = this.data.srcset), s.src = (e = this.data.src) !== null && e !== void 0 ? e : "", s.alt = (i = this.data.alt) !== null && i !== void 0 ? i : "", this.state = v.LOADING, s.complete ? this.onLoaded() : (s.onload = () => {
      this.onLoaded();
    }, s.onerror = () => {
      this.onError();
    });
  }
  /**
   * Assign slide to content
   *
   * @param {Slide} slide
   */
  setSlide(t) {
    this.slide = t, this.hasSlide = !0, this.instance = t.pswp;
  }
  /**
   * Content load success handler
   */
  onLoaded() {
    this.state = v.LOADED, this.slide && this.element && (this.instance.dispatch("loadComplete", {
      slide: this.slide,
      content: this
    }), this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode && (this.append(), this.slide.updateContentSize(!0)), (this.state === v.LOADED || this.state === v.ERROR) && this.removePlaceholder());
  }
  /**
   * Content load error handler
   */
  onError() {
    this.state = v.ERROR, this.slide && (this.displayError(), this.instance.dispatch("loadComplete", {
      slide: this.slide,
      isError: !0,
      content: this
    }), this.instance.dispatch("loadError", {
      slide: this.slide,
      content: this
    }));
  }
  /**
   * @returns {Boolean} If the content is currently loading
   */
  isLoading() {
    return this.instance.applyFilters("isContentLoading", this.state === v.LOADING, this);
  }
  /**
   * @returns {Boolean} If the content is in error state
   */
  isError() {
    return this.state === v.ERROR;
  }
  /**
   * @returns {boolean} If the content is image
   */
  isImageContent() {
    return this.type === "image";
  }
  /**
   * Update content size
   *
   * @param {Number} width
   * @param {Number} height
   */
  setDisplayedSize(t, e) {
    if (this.element && (this.placeholder && this.placeholder.setDisplayedSize(t, e), !this.instance.dispatch("contentResize", {
      content: this,
      width: t,
      height: e
    }).defaultPrevented && (O(this.element, t, e), this.isImageContent() && !this.isError()))) {
      const i = !this.displayedImageWidth && t;
      this.displayedImageWidth = t, this.displayedImageHeight = e, i ? this.loadImage(!1) : this.updateSrcsetSizes(), this.slide && this.instance.dispatch("imageSizeChange", {
        slide: this.slide,
        width: t,
        height: e,
        content: this
      });
    }
  }
  /**
   * @returns {boolean} If the content can be zoomed
   */
  isZoomable() {
    return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== v.ERROR, this);
  }
  /**
   * Update image srcset sizes attribute based on width and height
   */
  updateSrcsetSizes() {
    if (!this.isImageContent() || !this.element || !this.data.srcset)
      return;
    const t = (
      /** @type HTMLImageElement */
      this.element
    ), e = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
    (!t.dataset.largestUsedSize || e > parseInt(t.dataset.largestUsedSize, 10)) && (t.sizes = e + "px", t.dataset.largestUsedSize = String(e));
  }
  /**
   * @returns {boolean} If content should use a placeholder (from msrc by default)
   */
  usePlaceholder() {
    return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
  }
  /**
   * Preload content with lazy-loading param
   */
  lazyLoad() {
    this.instance.dispatch("contentLazyLoad", {
      content: this
    }).defaultPrevented || this.load(!0);
  }
  /**
   * @returns {boolean} If placeholder should be kept after content is loaded
   */
  keepPlaceholder() {
    return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
  }
  /**
   * Destroy the content
   */
  destroy() {
    this.hasSlide = !1, this.slide = void 0, !this.instance.dispatch("contentDestroy", {
      content: this
    }).defaultPrevented && (this.remove(), this.placeholder && (this.placeholder.destroy(), this.placeholder = void 0), this.isImageContent() && this.element && (this.element.onload = null, this.element.onerror = null, this.element = void 0));
  }
  /**
   * Display error message
   */
  displayError() {
    if (this.slide) {
      var t, e;
      let i = f("pswp__error-msg", "div");
      i.innerText = (t = (e = this.instance.options) === null || e === void 0 ? void 0 : e.errorMsg) !== null && t !== void 0 ? t : "", i = /** @type {HTMLDivElement} */
      this.instance.applyFilters("contentErrorElement", i, this), this.element = f("pswp__content pswp__error-msg-container", "div"), this.element.appendChild(i), this.slide.container.innerText = "", this.slide.container.appendChild(this.element), this.slide.updateContentSize(!0), this.removePlaceholder();
    }
  }
  /**
   * Append the content
   */
  append() {
    if (this.isAttached || !this.element)
      return;
    if (this.isAttached = !0, this.state === v.ERROR) {
      this.displayError();
      return;
    }
    if (this.instance.dispatch("contentAppend", {
      content: this
    }).defaultPrevented)
      return;
    const t = "decode" in this.element;
    this.isImageContent() ? t && this.slide && (!this.slide.isActive || M()) ? (this.isDecoding = !0, this.element.decode().catch(() => {
    }).finally(() => {
      this.isDecoding = !1, this.appendImage();
    })) : this.appendImage() : this.slide && !this.element.parentNode && this.slide.container.appendChild(this.element);
  }
  /**
   * Activate the slide,
   * active slide is generally the current one,
   * meaning the user can see it.
   */
  activate() {
    this.instance.dispatch("contentActivate", {
      content: this
    }).defaultPrevented || !this.slide || (this.isImageContent() && this.isDecoding && !M() ? this.appendImage() : this.isError() && this.load(!1, !0), this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "false"));
  }
  /**
   * Deactivate the content
   */
  deactivate() {
    this.instance.dispatch("contentDeactivate", {
      content: this
    }), this.slide && this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "true");
  }
  /**
   * Remove the content from DOM
   */
  remove() {
    this.isAttached = !1, !this.instance.dispatch("contentRemove", {
      content: this
    }).defaultPrevented && (this.element && this.element.parentNode && this.element.remove(), this.placeholder && this.placeholder.element && this.placeholder.element.remove());
  }
  /**
   * Append the image content to slide container
   */
  appendImage() {
    this.isAttached && (this.instance.dispatch("contentAppendImage", {
      content: this
    }).defaultPrevented || (this.slide && this.element && !this.element.parentNode && this.slide.container.appendChild(this.element), (this.state === v.LOADED || this.state === v.ERROR) && this.removePlaceholder()));
  }
}
const oe = 5;
function j(o, t, e) {
  const i = t.createContentFromData(o, e);
  let s;
  const {
    options: n
  } = t;
  if (n) {
    s = new X(n, o, -1);
    let r;
    t.pswp ? r = t.pswp.viewportSize : r = q(n, t);
    const a = K(n, r, o, e);
    s.update(i.width, i.height, a);
  }
  return i.lazyLoad(), s && i.setDisplayedSize(Math.ceil(i.width * s.initial), Math.ceil(i.height * s.initial)), i;
}
function re(o, t) {
  const e = t.getItemData(o);
  if (!t.dispatch("lazyLoadSlide", {
    index: o,
    itemData: e
  }).defaultPrevented)
    return j(e, t, o);
}
class ae {
  /**
   * @param {PhotoSwipe} pswp
   */
  constructor(t) {
    this.pswp = t, this.limit = Math.max(t.options.preload[0] + t.options.preload[1] + 1, oe), this._cachedItems = [];
  }
  /**
   * Lazy load nearby slides based on `preload` option.
   *
   * @param {number} [diff] Difference between slide indexes that was changed recently, or 0.
   */
  updateLazy(t) {
    const {
      pswp: e
    } = this;
    if (e.dispatch("lazyLoad").defaultPrevented)
      return;
    const {
      preload: i
    } = e.options, s = t === void 0 ? !0 : t >= 0;
    let n;
    for (n = 0; n <= i[1]; n++)
      this.loadSlideByIndex(e.currIndex + (s ? n : -n));
    for (n = 1; n <= i[0]; n++)
      this.loadSlideByIndex(e.currIndex + (s ? -n : n));
  }
  /**
   * @param {number} initialIndex
   */
  loadSlideByIndex(t) {
    const e = this.pswp.getLoopedIndex(t);
    let i = this.getContentByIndex(e);
    i || (i = re(e, this.pswp), i && this.addToCache(i));
  }
  /**
   * @param {Slide} slide
   * @returns {Content}
   */
  getContentBySlide(t) {
    let e = this.getContentByIndex(t.index);
    return e || (e = this.pswp.createContentFromData(t.data, t.index), this.addToCache(e)), e.setSlide(t), e;
  }
  /**
   * @param {Content} content
   */
  addToCache(t) {
    if (this.removeByIndex(t.index), this._cachedItems.push(t), this._cachedItems.length > this.limit) {
      const e = this._cachedItems.findIndex((i) => !i.isAttached && !i.hasSlide);
      e !== -1 && this._cachedItems.splice(e, 1)[0].destroy();
    }
  }
  /**
   * Removes an image from cache, does not destroy() it, just removes.
   *
   * @param {number} index
   */
  removeByIndex(t) {
    const e = this._cachedItems.findIndex((i) => i.index === t);
    e !== -1 && this._cachedItems.splice(e, 1);
  }
  /**
   * @param {number} index
   * @returns {Content | undefined}
   */
  getContentByIndex(t) {
    return this._cachedItems.find((e) => e.index === t);
  }
  destroy() {
    this._cachedItems.forEach((t) => t.destroy()), this._cachedItems = [];
  }
}
class he extends ie {
  /**
   * Get total number of slides
   *
   * @returns {number}
   */
  getNumItems() {
    var t;
    let e = 0;
    const i = (t = this.options) === null || t === void 0 ? void 0 : t.dataSource;
    i && "length" in i ? e = i.length : i && "gallery" in i && (i.items || (i.items = this._getGalleryDOMElements(i.gallery)), i.items && (e = i.items.length));
    const s = this.dispatch("numItems", {
      dataSource: i,
      numItems: e
    });
    return this.applyFilters("numItems", s.numItems, i);
  }
  /**
   * @param {SlideData} slideData
   * @param {number} index
   * @returns {Content}
   */
  createContentFromData(t, e) {
    return new ne(t, this, e);
  }
  /**
   * Get item data by index.
   *
   * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
   * For example, it may contain properties like
   * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
   *
   * @param {number} index
   * @returns {SlideData}
   */
  getItemData(t) {
    var e;
    const i = (e = this.options) === null || e === void 0 ? void 0 : e.dataSource;
    let s = {};
    Array.isArray(i) ? s = i[t] : i && "gallery" in i && (i.items || (i.items = this._getGalleryDOMElements(i.gallery)), s = i.items[t]);
    let n = s;
    n instanceof Element && (n = this._domElementToItemData(n));
    const r = this.dispatch("itemData", {
      itemData: n || {},
      index: t
    });
    return this.applyFilters("itemData", r.itemData, t);
  }
  /**
   * Get array of gallery DOM elements,
   * based on childSelector and gallery element.
   *
   * @param {HTMLElement} galleryElement
   * @returns {HTMLElement[]}
   */
  _getGalleryDOMElements(t) {
    var e, i;
    return (e = this.options) !== null && e !== void 0 && e.children || (i = this.options) !== null && i !== void 0 && i.childSelector ? _t(this.options.children, this.options.childSelector, t) || [] : [t];
  }
  /**
   * Converts DOM element to item data object.
   *
   * @param {HTMLElement} element DOM element
   * @returns {SlideData}
   */
  _domElementToItemData(t) {
    const e = {
      element: t
    }, i = (
      /** @type {HTMLAnchorElement} */
      t.tagName === "A" ? t : t.querySelector("a")
    );
    if (i) {
      e.src = i.dataset.pswpSrc || i.href, i.dataset.pswpSrcset && (e.srcset = i.dataset.pswpSrcset), e.width = i.dataset.pswpWidth ? parseInt(i.dataset.pswpWidth, 10) : 0, e.height = i.dataset.pswpHeight ? parseInt(i.dataset.pswpHeight, 10) : 0, e.w = e.width, e.h = e.height, i.dataset.pswpType && (e.type = i.dataset.pswpType);
      const n = t.querySelector("img");
      if (n) {
        var s;
        e.msrc = n.currentSrc || n.src, e.alt = (s = n.getAttribute("alt")) !== null && s !== void 0 ? s : "";
      }
      (i.dataset.pswpCropped || i.dataset.cropped) && (e.thumbCropped = !0);
    }
    return this.applyFilters("domItemData", e, t, i);
  }
  /**
   * Lazy-load by slide data
   *
   * @param {SlideData} itemData Data about the slide
   * @param {number} index
   * @returns {Content} Image that is being decoded or false.
   */
  lazyLoadData(t, e) {
    return j(t, this, e);
  }
}
const P = 3e-3;
class le {
  /**
   * @param {PhotoSwipe} pswp
   */
  constructor(t) {
    this.pswp = t, this.isClosed = !0, this.isOpen = !1, this.isClosing = !1, this.isOpening = !1, this._duration = void 0, this._useAnimation = !1, this._croppedZoom = !1, this._animateRootOpacity = !1, this._animateBgOpacity = !1, this._placeholder = void 0, this._opacityElement = void 0, this._cropContainer1 = void 0, this._cropContainer2 = void 0, this._thumbBounds = void 0, this._prepareOpen = this._prepareOpen.bind(this), t.on("firstZoomPan", this._prepareOpen);
  }
  open() {
    this._prepareOpen(), this._start();
  }
  close() {
    if (this.isClosed || this.isClosing || this.isOpening)
      return;
    const t = this.pswp.currSlide;
    this.isOpen = !1, this.isOpening = !1, this.isClosing = !0, this._duration = this.pswp.options.hideAnimationDuration, t && t.currZoomLevel * t.width >= this.pswp.options.maxWidthToAnimate && (this._duration = 0), this._applyStartProps(), setTimeout(() => {
      this._start();
    }, this._croppedZoom ? 30 : 0);
  }
  /** @private */
  _prepareOpen() {
    if (this.pswp.off("firstZoomPan", this._prepareOpen), !this.isOpening) {
      const t = this.pswp.currSlide;
      this.isOpening = !0, this.isClosing = !1, this._duration = this.pswp.options.showAnimationDuration, t && t.zoomLevels.initial * t.width >= this.pswp.options.maxWidthToAnimate && (this._duration = 0), this._applyStartProps();
    }
  }
  /** @private */
  _applyStartProps() {
    const {
      pswp: t
    } = this, e = this.pswp.currSlide, {
      options: i
    } = t;
    if (i.showHideAnimationType === "fade" ? (i.showHideOpacity = !0, this._thumbBounds = void 0) : i.showHideAnimationType === "none" ? (i.showHideOpacity = !1, this._duration = 0, this._thumbBounds = void 0) : this.isOpening && t._initialThumbBounds ? this._thumbBounds = t._initialThumbBounds : this._thumbBounds = this.pswp.getThumbBounds(), this._placeholder = e == null ? void 0 : e.getPlaceholderElement(), t.animations.stopAll(), this._useAnimation = !!(this._duration && this._duration > 50), this._animateZoom = !!this._thumbBounds && (e == null ? void 0 : e.content.usePlaceholder()) && (!this.isClosing || !t.mainScroll.isShifted()), !this._animateZoom)
      this._animateRootOpacity = !0, this.isOpening && e && (e.zoomAndPanToInitial(), e.applyCurrentZoomPan());
    else {
      var s;
      this._animateRootOpacity = (s = i.showHideOpacity) !== null && s !== void 0 ? s : !1;
    }
    if (this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > P, this._opacityElement = this._animateRootOpacity ? t.element : t.bg, !this._useAnimation) {
      this._duration = 0, this._animateZoom = !1, this._animateBgOpacity = !1, this._animateRootOpacity = !0, this.isOpening && (t.element && (t.element.style.opacity = String(P)), t.applyBgOpacity(1));
      return;
    }
    if (this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect) {
      var n;
      this._croppedZoom = !0, this._cropContainer1 = this.pswp.container, this._cropContainer2 = (n = this.pswp.currSlide) === null || n === void 0 ? void 0 : n.holderElement, t.container && (t.container.style.overflow = "hidden", t.container.style.width = t.viewportSize.x + "px");
    } else
      this._croppedZoom = !1;
    this.isOpening ? (this._animateRootOpacity ? (t.element && (t.element.style.opacity = String(P)), t.applyBgOpacity(1)) : (this._animateBgOpacity && t.bg && (t.bg.style.opacity = String(P)), t.element && (t.element.style.opacity = "1")), this._animateZoom && (this._setClosedStateZoomPan(), this._placeholder && (this._placeholder.style.willChange = "transform", this._placeholder.style.opacity = String(P)))) : this.isClosing && (t.mainScroll.itemHolders[0] && (t.mainScroll.itemHolders[0].el.style.display = "none"), t.mainScroll.itemHolders[2] && (t.mainScroll.itemHolders[2].el.style.display = "none"), this._croppedZoom && t.mainScroll.x !== 0 && (t.mainScroll.resetPosition(), t.mainScroll.resize()));
  }
  /** @private */
  _start() {
    this.isOpening && this._useAnimation && this._placeholder && this._placeholder.tagName === "IMG" ? new Promise((t) => {
      let e = !1, i = !0;
      mt(
        /** @type {HTMLImageElement} */
        this._placeholder
      ).finally(() => {
        e = !0, i || t(!0);
      }), setTimeout(() => {
        i = !1, e && t(!0);
      }, 50), setTimeout(t, 250);
    }).finally(() => this._initiate()) : this._initiate();
  }
  /** @private */
  _initiate() {
    var t, e;
    (t = this.pswp.element) === null || t === void 0 || t.style.setProperty("--pswp-transition-duration", this._duration + "ms"), this.pswp.dispatch(this.isOpening ? "openingAnimationStart" : "closingAnimationStart"), this.pswp.dispatch(
      /** @type {'initialZoomIn' | 'initialZoomOut'} */
      "initialZoom" + (this.isOpening ? "In" : "Out")
    ), (e = this.pswp.element) === null || e === void 0 || e.classList.toggle("pswp--ui-visible", this.isOpening), this.isOpening ? (this._placeholder && (this._placeholder.style.opacity = "1"), this._animateToOpenState()) : this.isClosing && this._animateToClosedState(), this._useAnimation || this._onAnimationComplete();
  }
  /** @private */
  _onAnimationComplete() {
    const {
      pswp: t
    } = this;
    if (this.isOpen = this.isOpening, this.isClosed = this.isClosing, this.isOpening = !1, this.isClosing = !1, t.dispatch(this.isOpen ? "openingAnimationEnd" : "closingAnimationEnd"), t.dispatch(
      /** @type {'initialZoomInEnd' | 'initialZoomOutEnd'} */
      "initialZoom" + (this.isOpen ? "InEnd" : "OutEnd")
    ), this.isClosed)
      t.destroy();
    else if (this.isOpen) {
      var e;
      this._animateZoom && t.container && (t.container.style.overflow = "visible", t.container.style.width = "100%"), (e = t.currSlide) === null || e === void 0 || e.applyCurrentZoomPan();
    }
  }
  /** @private */
  _animateToOpenState() {
    const {
      pswp: t
    } = this;
    this._animateZoom && (this._croppedZoom && this._cropContainer1 && this._cropContainer2 && (this._animateTo(this._cropContainer1, "transform", "translate3d(0,0,0)"), this._animateTo(this._cropContainer2, "transform", "none")), t.currSlide && (t.currSlide.zoomAndPanToInitial(), this._animateTo(t.currSlide.container, "transform", t.currSlide.getCurrentTransform()))), this._animateBgOpacity && t.bg && this._animateTo(t.bg, "opacity", String(t.options.bgOpacity)), this._animateRootOpacity && t.element && this._animateTo(t.element, "opacity", "1");
  }
  /** @private */
  _animateToClosedState() {
    const {
      pswp: t
    } = this;
    this._animateZoom && this._setClosedStateZoomPan(!0), this._animateBgOpacity && t.bgOpacity > 0.01 && t.bg && this._animateTo(t.bg, "opacity", "0"), this._animateRootOpacity && t.element && this._animateTo(t.element, "opacity", "0");
  }
  /**
   * @private
   * @param {boolean} [animate]
   */
  _setClosedStateZoomPan(t) {
    if (!this._thumbBounds) return;
    const {
      pswp: e
    } = this, {
      innerRect: i
    } = this._thumbBounds, {
      currSlide: s,
      viewportSize: n
    } = e;
    if (this._croppedZoom && i && this._cropContainer1 && this._cropContainer2) {
      const r = -n.x + (this._thumbBounds.x - i.x) + i.w, a = -n.y + (this._thumbBounds.y - i.y) + i.h, h = n.x - i.w, l = n.y - i.h;
      t ? (this._animateTo(this._cropContainer1, "transform", L(r, a)), this._animateTo(this._cropContainer2, "transform", L(h, l))) : (w(this._cropContainer1, r, a), w(this._cropContainer2, h, l));
    }
    s && (p(s.pan, i || this._thumbBounds), s.currZoomLevel = this._thumbBounds.w / s.width, t ? this._animateTo(s.container, "transform", s.getCurrentTransform()) : s.applyCurrentZoomPan());
  }
  /**
   * @private
   * @param {HTMLElement} target
   * @param {'transform' | 'opacity'} prop
   * @param {string} propValue
   */
  _animateTo(t, e, i) {
    if (!this._duration) {
      t.style[e] = i;
      return;
    }
    const {
      animations: s
    } = this.pswp, n = {
      duration: this._duration,
      easing: this.pswp.options.easing,
      onComplete: () => {
        s.activeAnimations.length || this._onAnimationComplete();
      },
      target: t
    };
    n[e] = i, s.startTransition(n);
  }
}
const de = {
  allowPanToNext: !0,
  spacing: 0.1,
  loop: !0,
  pinchToClose: !0,
  closeOnVerticalDrag: !0,
  hideAnimationDuration: 333,
  showAnimationDuration: 333,
  zoomAnimationDuration: 333,
  escKey: !0,
  arrowKeys: !0,
  trapFocus: !0,
  returnFocus: !0,
  maxWidthToAnimate: 4e3,
  clickToCloseNonZoomable: !0,
  imageClickAction: "zoom-or-close",
  bgClickAction: "close",
  tapAction: "toggle-controls",
  doubleTapAction: "zoom",
  indexIndicatorSep: " / ",
  preloaderDelay: 2e3,
  bgOpacity: 0.8,
  index: 0,
  errorMsg: "The image cannot be loaded",
  preload: [1, 2],
  easing: "cubic-bezier(.4,0,.22,1)"
};
class ce extends he {
  /**
   * @param {PhotoSwipeOptions} [options]
   */
  constructor(t) {
    super(), this.options = this._prepareOptions(t || {}), this.offset = {
      x: 0,
      y: 0
    }, this._prevViewportSize = {
      x: 0,
      y: 0
    }, this.viewportSize = {
      x: 0,
      y: 0
    }, this.bgOpacity = 1, this.currIndex = 0, this.potentialIndex = 0, this.isOpen = !1, this.isDestroying = !1, this.hasMouse = !1, this._initialItemData = {}, this._initialThumbBounds = void 0, this.topBar = void 0, this.element = void 0, this.template = void 0, this.container = void 0, this.scrollWrap = void 0, this.currSlide = void 0, this.events = new vt(), this.animations = new kt(), this.mainScroll = new Dt(this), this.gestures = new Tt(this), this.opener = new le(this), this.keyboard = new Zt(this), this.contentLoader = new ae(this);
  }
  /** @returns {boolean} */
  init() {
    if (this.isOpen || this.isDestroying)
      return !1;
    this.isOpen = !0, this.dispatch("init"), this.dispatch("beforeOpen"), this._createMainStructure();
    let t = "pswp--open";
    return this.gestures.supportsTouch && (t += " pswp--touch"), this.options.mainClass && (t += " " + this.options.mainClass), this.element && (this.element.className += " " + t), this.currIndex = this.options.index || 0, this.potentialIndex = this.currIndex, this.dispatch("firstUpdate"), this.scrollWheel = new Wt(this), (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) && (this.currIndex = 0), this.gestures.supportsTouch || this.mouseDetected(), this.updateSize(), this.offset.y = window.pageYOffset, this._initialItemData = this.getItemData(this.currIndex), this.dispatch("gettingData", {
      index: this.currIndex,
      data: this._initialItemData,
      slide: void 0
    }), this._initialThumbBounds = this.getThumbBounds(), this.dispatch("initialLayout"), this.on("openingAnimationEnd", () => {
      const {
        itemHolders: e
      } = this.mainScroll;
      e[0] && (e[0].el.style.display = "block", this.setContent(e[0], this.currIndex - 1)), e[2] && (e[2].el.style.display = "block", this.setContent(e[2], this.currIndex + 1)), this.appendHeavy(), this.contentLoader.updateLazy(), this.events.add(window, "resize", this._handlePageResize.bind(this)), this.events.add(window, "scroll", this._updatePageScrollOffset.bind(this)), this.dispatch("bindEvents");
    }), this.mainScroll.itemHolders[1] && this.setContent(this.mainScroll.itemHolders[1], this.currIndex), this.dispatch("change"), this.opener.open(), this.dispatch("afterInit"), !0;
  }
  /**
   * Get looped slide index
   * (for example, -1 will return the last slide)
   *
   * @param {number} index
   * @returns {number}
   */
  getLoopedIndex(t) {
    const e = this.getNumItems();
    return this.options.loop && (t > e - 1 && (t -= e), t < 0 && (t += e)), A(t, 0, e - 1);
  }
  appendHeavy() {
    this.mainScroll.itemHolders.forEach((t) => {
      var e;
      (e = t.slide) === null || e === void 0 || e.appendHeavy();
    });
  }
  /**
   * Change the slide
   * @param {number} index New index
   */
  goTo(t) {
    this.mainScroll.moveIndexBy(this.getLoopedIndex(t) - this.potentialIndex);
  }
  /**
   * Go to the next slide.
   */
  next() {
    this.goTo(this.potentialIndex + 1);
  }
  /**
   * Go to the previous slide.
   */
  prev() {
    this.goTo(this.potentialIndex - 1);
  }
  /**
   * @see slide/slide.js zoomTo
   *
   * @param {Parameters<Slide['zoomTo']>} args
   */
  zoomTo(...t) {
    var e;
    (e = this.currSlide) === null || e === void 0 || e.zoomTo(...t);
  }
  /**
   * @see slide/slide.js toggleZoom
   */
  toggleZoom() {
    var t;
    (t = this.currSlide) === null || t === void 0 || t.toggleZoom();
  }
  /**
   * Close the gallery.
   * After closing transition ends - destroy it
   */
  close() {
    !this.opener.isOpen || this.isDestroying || (this.isDestroying = !0, this.dispatch("close"), this.events.removeAll(), this.opener.close());
  }
  /**
   * Destroys the gallery:
   * - instantly closes the gallery
   * - unbinds events,
   * - cleans intervals and timeouts
   * - removes elements from DOM
   */
  destroy() {
    var t;
    if (!this.isDestroying) {
      this.options.showHideAnimationType = "none", this.close();
      return;
    }
    this.dispatch("destroy"), this._listeners = {}, this.scrollWrap && (this.scrollWrap.ontouchmove = null, this.scrollWrap.ontouchend = null), (t = this.element) === null || t === void 0 || t.remove(), this.mainScroll.itemHolders.forEach((e) => {
      var i;
      (i = e.slide) === null || i === void 0 || i.destroy();
    }), this.contentLoader.destroy(), this.events.removeAll();
  }
  /**
   * Refresh/reload content of a slide by its index
   *
   * @param {number} slideIndex
   */
  refreshSlideContent(t) {
    this.contentLoader.removeByIndex(t), this.mainScroll.itemHolders.forEach((e, i) => {
      var s, n;
      let r = ((s = (n = this.currSlide) === null || n === void 0 ? void 0 : n.index) !== null && s !== void 0 ? s : 0) - 1 + i;
      if (this.canLoop() && (r = this.getLoopedIndex(r)), r === t && (this.setContent(e, t, !0), i === 1)) {
        var a;
        this.currSlide = e.slide, (a = e.slide) === null || a === void 0 || a.setIsActive(!0);
      }
    }), this.dispatch("change");
  }
  /**
   * Set slide content
   *
   * @param {ItemHolder} holder mainScroll.itemHolders array item
   * @param {number} index Slide index
   * @param {boolean} [force] If content should be set even if index wasn't changed
   */
  setContent(t, e, i) {
    if (this.canLoop() && (e = this.getLoopedIndex(e)), t.slide) {
      if (t.slide.index === e && !i)
        return;
      t.slide.destroy(), t.slide = void 0;
    }
    if (!this.canLoop() && (e < 0 || e >= this.getNumItems()))
      return;
    const s = this.getItemData(e);
    t.slide = new yt(s, e, this), e === this.currIndex && (this.currSlide = t.slide), t.slide.append(t.el);
  }
  /** @returns {Point} */
  getViewportCenterPoint() {
    return {
      x: this.viewportSize.x / 2,
      y: this.viewportSize.y / 2
    };
  }
  /**
   * Update size of all elements.
   * Executed on init and on page resize.
   *
   * @param {boolean} [force] Update size even if size of viewport was not changed.
   */
  updateSize(t) {
    if (this.isDestroying)
      return;
    const e = q(this.options, this);
    !t && x(e, this._prevViewportSize) || (p(this._prevViewportSize, e), this.dispatch("beforeResize"), p(this.viewportSize, this._prevViewportSize), this._updatePageScrollOffset(), this.dispatch("viewportSize"), this.mainScroll.resize(this.opener.isOpen), !this.hasMouse && window.matchMedia("(any-hover: hover)").matches && this.mouseDetected(), this.dispatch("resize"));
  }
  /**
   * @param {number} opacity
   */
  applyBgOpacity(t) {
    this.bgOpacity = Math.max(t, 0), this.bg && (this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity));
  }
  /**
   * Whether mouse is detected
   */
  mouseDetected() {
    if (!this.hasMouse) {
      var t;
      this.hasMouse = !0, (t = this.element) === null || t === void 0 || t.classList.add("pswp--has_mouse");
    }
  }
  /**
   * Page resize event handler
   *
   * @private
   */
  _handlePageResize() {
    this.updateSize(), /iPhone|iPad|iPod/i.test(window.navigator.userAgent) && setTimeout(() => {
      this.updateSize();
    }, 500);
  }
  /**
   * Page scroll offset is used
   * to get correct coordinates
   * relative to PhotoSwipe viewport.
   *
   * @private
   */
  _updatePageScrollOffset() {
    this.setScrollOffset(0, window.pageYOffset);
  }
  /**
   * @param {number} x
   * @param {number} y
   */
  setScrollOffset(t, e) {
    this.offset.x = t, this.offset.y = e, this.dispatch("updateScrollOffset");
  }
  /**
   * Create main HTML structure of PhotoSwipe,
   * and add it to DOM
   *
   * @private
   */
  _createMainStructure() {
    this.element = f("pswp", "div"), this.element.setAttribute("tabindex", "-1"), this.element.setAttribute("role", "dialog"), this.template = this.element, this.bg = f("pswp__bg", "div", this.element), this.scrollWrap = f("pswp__scroll-wrap", "section", this.element), this.container = f("pswp__container", "div", this.scrollWrap), this.scrollWrap.setAttribute("aria-roledescription", "carousel"), this.container.setAttribute("aria-live", "off"), this.container.setAttribute("id", "pswp__items"), this.mainScroll.appendHolders(), this.ui = new jt(this), this.ui.init(), (this.options.appendToEl || document.body).appendChild(this.element);
  }
  /**
   * Get position and dimensions of small thumbnail
   *   {x:,y:,w:}
   *
   * Height is optional (calculated based on the large image)
   *
   * @returns {Bounds | undefined}
   */
  getThumbBounds() {
    return te(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this);
  }
  /**
   * If the PhotoSwipe can have continuous loop
   * @returns Boolean
   */
  canLoop() {
    return this.options.loop && this.getNumItems() > 2;
  }
  /**
   * @private
   * @param {PhotoSwipeOptions} options
   * @returns {PreparedPhotoSwipeOptions}
   */
  _prepareOptions(t) {
    return window.matchMedia("(prefers-reduced-motion), (update: slow)").matches && (t.showHideAnimationType = "none", t.zoomAnimationDuration = 0), {
      ...de,
      ...t
    };
  }
}
function ge(o, t) {
  t.pswpModule = () => ce, t.gallery = o;
  const e = new ct(t);
  return e.init(), e;
}
export {
  ge as photoswipe
};
