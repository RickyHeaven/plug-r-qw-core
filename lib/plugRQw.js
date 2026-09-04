var ya = Object.defineProperty;
var va = (t, o, n) => o in t ? ya(t, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[o] = n;
var pt = (t, o, n) => va(t, typeof o != "symbol" ? o + "" : o, n);
import { getCurrentInstance as Mt, defineComponent as ce, resolveComponent as te, createElementBlock as N, openBlock as T, normalizeStyle as re, normalizeClass as we, createBlock as le, createCommentVNode as ue, renderSlot as Ne, ref as E, computed as j, withDirectives as fe, unref as m, createElementVNode as P, createVNode as Q, toDisplayString as q, withCtx as ne, createTextVNode as ke, vShow as ve, resolveDirective as $t, onMounted as Ge, nextTick as $e, onUpdated as ga, onUnmounted as Ft, h as Ae, isRef as Fe, Fragment as ge, renderList as Ce, onBeforeMount as Kl, watch as Se, mergeModels as ba, useModel as ka, onBeforeUnmount as rl, Teleport as wa, withModifiers as jt, mergeProps as ct, shallowRef as gt, triggerRef as _a, createSlots as dt, toRef as Va, toValue as Et } from "vue";
import Sa from "deepmerge";
import { debounce as Dt, cloneDeep as pe, isPlainObject as ut, isObject as Ca, isFunction as Ta, isEmpty as De, isNumber as Tt, last as Lt, isEqual as bt, isString as zl, first as qt, find as Xt, indexOf as bl, findIndex as xt, remove as Ba } from "lodash-es";
import Vt from "sweetalert";
import { Tooltip as La, Modal as lt, Button as Gt, TableColumnConfig as xa, Radio as Oa, Input as Ia, Message as kl, Icon as Aa } from "view-ui-plus";
import { useRouter as Nt, useRoute as ul } from "vue-router";
import Pa from "popper.js";
import Jt from "axios";
import Ht from "@amap/amap-jsapi-loader";
import Ra from "ar-cascader";
import { Toolbar as Ma, Editor as $a } from "@wangeditor/editor-for-vue";
import mt from "moment";
import { Boot as Fa } from "@wangeditor/editor";
import Da from "vue-json-viewer";
const Ul = {
  r: {
    locale: "zh-CN",
    testMsg: "测试国际化",
    confirm: "确定",
    save: "保存",
    cancel: "取消",
    clear: "清空",
    info: {
      title: "提示",
      text: "确定执行该操作？"
    },
    http: {
      403: "登录状态失效,请重新登录！",
      409: "该账号已在其他地方登录,点击确定退出。"
    },
    pSelect: "请选择",
    pInput: "请输入",
    selectDate: "选择日期",
    selectTime: "选择时间",
    search: "搜索",
    level: {
      1: "一级",
      2: "二级",
      3: "三级"
    },
    unknown: "未知",
    title: "标题",
    required: "该项为必填",
    back: "返回",
    button: "按钮",
    check: "查询",
    adSearch: "高级查询",
    all: "全选",
    tabSetting: " 列表显示设置",
    delete: "删除",
    fView: "全屏预览",
    download: "点击下载",
    file: "文件",
    selectFile: "选择文件",
    notImg: "文件不是图片，不可预览",
    wrongFileType: "文件类型不被允许",
    supportType: "支持类型：",
    none: "无",
    fileIsBig: "文件过大",
    supportSize: "支持最大：",
    uploadError: "上传出错",
    uploadFail: "上传失败",
    uploadLength: "最多可上传{0}个文件",
    closePreview: "关闭预览",
    fullImg: "该文件不支持图片形式预览",
    preview: "预览",
    searchFor: "当前搜索：",
    noMore: "没有更多数据了",
    optionLabel: "选项",
    getDataError: "拉取数据出错",
    add: "添加",
    remove: "移除",
    addAll: "全部添加",
    removeAll: "全部移除",
    added: "已添加",
    notAdded: "未添加",
    success: "成功",
    failed: "失败",
    error: "出错",
    pageNotFound: "页面没找到",
    notFoundMsg: "您访问的页面不存在，点击下面按钮返回上一个页面。",
    hideMenu: "隐藏菜单",
    showMenu: "显示菜单",
    print: "打印",
    close: "关闭",
    help: "帮助",
    printGuide: {
      1: "鼠标停留在表头列右边框，出现拖动图标，按下鼠标拖动可设置列宽。",
      2: "点击“列表显示设置”，可选择需要打印的列，选择完需点击“确定”按钮。",
      3: "页面有A4灰色参考线，将打印内容右边缘调至参考线区间，打印机默认设置时可将表格内容铺满A4纸，表格越宽字体将越小。",
      4: "将此页面地址复制到浏览器地址栏，打开的页面将不可用。",
      5: "未到此线内容将无法铺满纸张",
      6: "超过此线打印内容将不完整",
      7: "A4 纵向参考线",
      8: "A4 横向参考线",
      9: "复制的页面无法使用该打印功能。",
      10: "鼠标停留在打印内容顶部矩形条右边框，出现拖动图标，按下鼠标拖动可设置打印内容宽度。"
    },
    page: "条/页",
    total: "共",
    items: "条",
    notSave: "您未保存，是否保存？",
    last: "上一张",
    next: "下一张"
  }
}, Na = /(%|){([0-9a-zA-Z_]+)}/g;
function Ka() {
  function t(n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }
  function o(n, ...e) {
    let l;
    return e.length === 1 && typeof e[0] == "object" && (l = e[0]), (!l || !l.hasOwnProperty) && (l = {}), n === void 0 ? "" : n.replace(Na, (i, r, f, s) => {
      let y;
      return n[s - 1] === "{" && n[s + i.length] === "}" ? f : (y = t(l, f) ? l[f] : null, y ?? "");
    });
  }
  return o;
}
const za = Ka();
let Ot = Ul;
const Ua = {
  zh: Ul
};
let wl, _l = {}, Ke, Wt = !1, Ea = function(t, o) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, o);
  if (Ke && Ke.global)
    return Ke.global.t(t, o);
  if (Ke && Ke.locale) {
    if (!_l[Ke.locale] || wl != Ke.locale) {
      _l[Ke.locale] = !0;
      let n = Ke.getLocaleMessage(Ke.locale) || {}, e = Sa(Ua[Ke.locale], n, { clone: !0 });
      Ot = e, Ke.setLocaleMessage(Ke.locale, e), wl = Ke.locale;
    }
    return Ke.hlang(t, o);
  }
};
const Qe = function(t, o) {
  if (Wt)
    return "";
  let n = Ea.apply(this, [t, o]);
  if (n != null)
    return n;
  const e = t.split(".");
  let l = Ot;
  for (let i = 0, r = e.length; i < r; i++) {
    const f = e[i];
    if (n = l[f], i === r - 1) {
      Wt = !0;
      try {
        return za(n, o);
      } finally {
        Wt = !1;
      }
    }
    if (!n)
      return "";
    l = n;
  }
  return "";
}, Ga = function(t) {
  Ot = t || Ot;
}, Ha = function(t) {
  Ke = t;
}, It = {
  use: Ga,
  t: Qe,
  i18n: Ha
};
function x(t, o) {
  var e, l, i;
  const n = (i = (l = (e = Mt()) == null ? void 0 : e.appContext) == null ? void 0 : l.config) == null ? void 0 : i.globalProperties;
  return Qe.apply(n, [t, o]);
}
const El = /* @__PURE__ */ ce({
  __name: "HeaderBt",
  props: {
    icon: {},
    withIcon: { type: Boolean, default: !1 },
    iconSize: { default: 18 },
    color: { default: "inherit" },
    borderColor: { default: "#fff" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const n = t, e = o;
    function l() {
      n.disabled || e("click");
    }
    return (i, r) => {
      const f = te("Icon");
      return T(), N("div", {
        class: we({ headerBtCTM: !0, withIconCTM: n.icon || n.withIcon, disabled: n.disabled }),
        style: re({ color: n.color, borderLeftColor: n.borderColor }),
        onClick: l
      }, [
        n.icon ? (T(), le(f, {
          key: 0,
          size: n.iconSize,
          type: n.icon
        }, null, 8, ["size", "type"])) : ue("", !0),
        Ne(i.$slots, "default")
      ], 6);
    };
  }
});
function Le() {
  var n, e;
  const t = (n = Mt()) == null ? void 0 : n.appContext;
  return ((e = t == null ? void 0 : t.config) == null ? void 0 : e.globalProperties) || {};
}
const Wa = { class: "headerTxtAM" }, ja = { class: "contentAM" }, qa = /* @__PURE__ */ ce({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.fontSizeBase;
    } },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(t, { expose: o, emit: n }) {
    const e = t, l = n;
    let i = E(!1);
    const r = j(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), f = j(() => ({ zIndex: e.zIndex }));
    function s() {
      i.value = !0, l("on-open");
    }
    function y(p) {
      i.value = !1, l("on-close", p === !0);
    }
    return o({
      open: s,
      close: y
    }), (p, c) => fe((T(), N("div", {
      class: "fullScreenPopBoxAM",
      style: re(m(f))
    }, [
      P("div", {
        class: "headerAM",
        style: re({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: m(r) })
      }, [
        P("span", Wa, q(p.title || m(x)("r.title")), 1),
        Q(El, {
          icon: "md-return-left",
          onClick: y
        }, {
          default: ne(() => [
            ke(q(m(x)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      P("div", ja, [
        Ne(p.$slots, "default")
      ])
    ], 4)), [
      [ve, m(i)]
    ]);
  }
}), Xa = { class: "msg" }, Ja = /* @__PURE__ */ ce({
  __name: "Hello",
  setup(t) {
    let o = E("Greetings from Ricky.");
    return (n, e) => (T(), N("span", Xa, q(m(o)), 1));
  }
}), Yt = /* @__PURE__ */ ce({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => Le().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const n = t, e = o, l = j(() => {
      var r;
      return Math.floor(n.size / 17 * ((r = Le()) == null ? void 0 : r.fontSizeBase)) + "px";
    });
    function i(r) {
      n.disabled || e("click", r);
    }
    return (r, f) => {
      const s = te("Icon"), y = $t("has");
      return fe((T(), N("div", {
        class: we(["tabTopBtnsT", { disabled: n.disabled }]),
        onClick: i,
        style: re({ "font-size": m(l) })
      }, [
        Q(s, {
          type: n.icon,
          size: n.size
        }, null, 8, ["type", "size"]),
        ke(" " + q(n.name || m(x)("r.button")), 1)
      ], 6)), [
        [y, r.has]
      ]);
    };
  }
}), Ya = { class: "c404K" }, Qa = { class: "ct404" }, Za = { class: "p404" }, en = /* @__PURE__ */ ce({
  __name: "Page404",
  setup(t) {
    const n = Mt().appContext.config.globalProperties.$router;
    function e() {
      n.go(-1);
    }
    return (l, i) => {
      const r = te("Button");
      return T(), N("div", Ya, [
        i[0] || (i[0] = P("div", { class: "t404" }, "404", -1)),
        P("div", Qa, "UH OH! " + q(m(x)("r.pageNotFound")), 1),
        P("div", Za, q(m(x)("r.notFoundMsg")), 1),
        Q(r, {
          class: "bt404",
          onClick: e
        }, {
          default: ne(() => [
            ke(q(m(x)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function ze(t, o, n, e = !0) {
  const l = (...i) => Qe.apply(this, i);
  return new Promise((i, r) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let f = l("r.confirm"), s = l("r.cancel"), y = !1, p = "swalConfirmBt", c = "swalCancelBt";
      const u = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let v = "";
      t.text && u.test(Y(t.text)) ? v = "content" : t.text && Y(t.text) === "String" && (v = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (s = t.buttons.cancel.text) && (y = !0), t.buttons.cancel.className && (c = t.buttons.cancel.className), t.buttons.confirm.text && (f = t.buttons.confirm.text), t.buttons.confirm.className && (p = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (s = t.buttons[0], y = !0), t.buttons[1] && (f = t.buttons[1]))), Vt({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [v]: t.text,
        buttons: {
          confirm: {
            text: f,
            value: !0,
            visible: !0,
            className: p
          },
          cancel: {
            text: s,
            value: null,
            visible: y,
            className: c
          }
        },
        closeOnClickOutside: t.closeOnClickOutside ?? !0
      }).then((b) => {
        b && typeof t.onOk == "function" && t.onOk(), i(b);
      }).catch((b) => {
        r(b);
      });
    } else if (typeof t == "string") {
      let f = "";
      if (o)
        switch (typeof o) {
          case "string":
            f = "text";
            break;
          case "object":
            f = "content";
            break;
        }
      Vt({
        title: t,
        [f]: o || "",
        icon: n || "",
        className: "swalBoxX",
        closeOnClickOutside: e,
        buttons: {
          confirm: {
            text: l("r.confirm"),
            value: !0,
            visible: !0,
            className: "swalConfirmBt",
            closeModal: !0
          }
        }
      }).then((s) => {
        i(s);
      }).catch((s) => {
        r(s);
      });
    } else if (typeof t == "boolean")
      !t && Vt.close && Vt.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
const tn = { class: "tableTooltip" }, ln = /* @__PURE__ */ ce({
  __name: "TableTooltip",
  props: {
    content: { type: [String, Number, Boolean, null] }
  },
  setup(t) {
    const o = t, n = E(), e = E(), l = E(!0);
    let i = null;
    const r = E(200);
    function f() {
      const s = l.value ? n.value : e.value;
      if (!s)
        return;
      let y = document.createRange();
      y.setStart(s, 0), y.setEnd(s, s.childNodes.length);
      const p = y.getBoundingClientRect().width;
      r.value = s.offsetWidth * 2, l.value = p < s.offsetWidth, y = null;
    }
    return Ge(() => {
      f(), i = Dt(() => {
        $e(function() {
          f();
        });
      }, 200), window.addEventListener("resize", i);
    }), ga(f), Ft(() => {
      i == null || i.cancel(), window.removeEventListener("resize", i);
    }), (s, y) => (T(), N("div", tn, [
      m(l) ? (T(), N("span", {
        key: 0,
        ref_key: "spanRef",
        ref: n,
        class: "contentText"
      }, q(o.content), 513)) : (T(), le(m(La), {
        key: 1,
        content: typeof o.content == "boolean" ? String(o.content) : o.content ?? "",
        "max-width": m(r),
        transfer: ""
      }, {
        default: ne(() => [
          P("span", {
            ref_key: "contentRef",
            ref: e,
            class: "contentText"
          }, q(o.content), 513)
        ]),
        _: 1
      }, 8, ["content", "max-width"]))
    ]));
  }
});
let st = 0, tt = null;
function Qt() {
  if (!tt) {
    tt = document.createElement("div"), tt.setAttribute("class", "spinModal"), tt.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
    const t = document.getElementsByTagName("body")[0];
    t ? t.append(tt) : document.readyState === "loading" && document.addEventListener("DOMContentLoaded", () => {
      var o;
      (o = document.getElementsByTagName("body")[0]) == null || o.append(tt);
    });
  }
  return tt;
}
typeof document < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
  Qt();
}) : Qt());
function Vl(t) {
  const o = tt || Qt();
  t ? o.classList.add("show") : o.classList.remove("show");
}
function At(t) {
  let o = st;
  t ? st++ : st > 0 && st--, o !== st && (st === 0 ? Vl(!1) : o === 0 && Vl(!0));
}
const Zt = typeof window < "u";
function Je(t, o, n) {
  Fe(t[o]) ? t[o].value = n : t[o] = n;
}
function Y(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function an(t) {
  return { style: { display: dl(t) ? "unset" : "none" } };
}
function Gl(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function Hl(t) {
  const o = pe(t);
  let n = Y(o);
  if (n === "Object") {
    for (let e in o)
      if (o.hasOwnProperty(e)) {
        let l = Y(o[e]);
        l === "String" ? o[e] = o[e].trim() : (l === "Object" || l === "Array") && Pt(o[e]);
      }
  } else if (n === "Array")
    for (let e = 0, l = o.length; e < l; e++) {
      let i = Y(o[e]);
      i === "String" ? o[e] = o[e].trim() : (i === "Array" || i === "Object") && Pt(o[e]);
    }
  return o;
}
function Pt(t) {
  let o = Y(t);
  if (o === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = Y(t[n]);
        e === "String" ? t[n] = t[n].trim() : (e === "Object" || e === "Array") && Pt(t[n]);
      }
  } else if (o === "Array")
    for (let n = 0, e = t.length; n < e; n++) {
      let l = Y(t[n]);
      l === "String" ? t[n] = t[n].trim() : (l === "Array" || l === "Object") && Pt(t[n]);
    }
}
function el(t, o = []) {
  if (Y(t) === "Array")
    return t.forEach((n, e) => {
      switch (Y(n)) {
        case "Array":
        case "Object":
          el(n);
          break;
        default:
          t[e] = null;
      }
    }), t;
  if (Y(t) === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = !0;
        for (let l of o)
          if (l === n) {
            e = !1;
            break;
          }
        if (e)
          switch (Y(t[n])) {
            case "Array":
            case "Object":
              el(t[n]);
              break;
            default:
              t[n] = null;
          }
      }
    return t;
  } else
    return t;
}
const nn = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function on(t) {
  let o = new FormData();
  for (let n in t)
    t.hasOwnProperty(n) && t[n] !== null && o.append(n, t[n]);
  return o;
}
function Bt(t, o, n = !1) {
  if (!t || !o)
    return !1;
  let e, l = "notFoundC", i = function(r, f) {
    if (Array.isArray(r)) {
      if (Y(f) === "Function" && f(r))
        return l = r, [];
      for (let s of r) {
        if (l !== "notFoundC")
          break;
        if (Y(f) === "Function" && f(s) || s === f)
          return l = s, [r.indexOf(s)];
        if (Y(s) === "Array" || Y(s) === "Object") {
          let y = i(s, f);
          if (y !== void 0)
            return [r.indexOf(s), ...y];
        }
      }
    } else if (Y(r) === "Object") {
      if (Y(f) === "Function" && f(r))
        return l = r, [];
      for (let s in r) {
        if (l !== "notFoundC")
          break;
        if (r.hasOwnProperty(s)) {
          if (Y(f) === "Function" && f(s) || r[s] === f)
            return l = r[s], [s];
          if (Y(r[s]) === "Object" || Y(r[s]) === "Array") {
            let y = i(r[s], f);
            if (y !== void 0)
              return [s, ...y];
          }
        }
      }
    }
  };
  return e = i(t, o), n ? e || !1 : l === "notFoundC" ? !1 : l;
}
function sn(t, o) {
  for (let n = 0, e = o.length; n < e; n++)
    if (t === o[n])
      return !0;
  return !1;
}
function rn(t, o = 2) {
  let n = new RegExp(`(^-?\\d+\\.\\d{${o}})(\\d+$)`), e = t && String(t) || "";
  return n.test(e) ? Number(e.replace(n, "$1")) : t;
}
let je = null;
function Wl(t, o = {}, n = "get") {
  let e = document.getElementsByTagName("body")[0];
  if (!e) {
    console.error("document.body 不存在，无法执行文件下载");
    return;
  }
  je || (je = document.createElement("form"), je.setAttribute("style", "display:none"), je.setAttribute("target", ""), e.appendChild(je)), je.innerHTML = "", je.setAttribute("method", n);
  let l = t;
  if (window != null && window.g) {
    let i = Object.keys(window.g).filter((r) => {
      var f;
      return ((f = r == null ? void 0 : r.indexOf) == null ? void 0 : f.call(r, "URL")) > -1;
    }).map((r) => {
      var f;
      return (f = r.replace) == null ? void 0 : f.call(r, "URL", "");
    });
    for (let r of i) {
      let f = new RegExp("^/" + r + "(?=/.*$)", "i");
      if (f.test(t) && window.g[r + "URL"]) {
        l = window.g[r + "URL"] + t.replace(f, "");
        break;
      }
    }
  }
  if (je.setAttribute("action", l), ut(o)) {
    for (let i in o)
      if (o.hasOwnProperty(i) && (o[i] || o[i] === 0 || o[i] === !1 || o[i] === "")) {
        let r = document.createElement("input");
        r.setAttribute("type", "hidden"), r.setAttribute("name", i), r.setAttribute("value", o[i]), je.appendChild(r);
      }
    je.submit();
  } else
    console.error("请求数据格式有误，无法下载文件");
}
async function un(t, o = {}, n = "get", e = !1, l) {
  if (o.hasOwnProperty("columns") && (o.columns === "" || o.columns === null || o.columns === void 0)) {
    ze.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  e ? await jl(t, o, n, l) : Wl(t, o, n);
}
async function jl(t, o = {}, n = "get", e) {
  At(!0);
  try {
    let l = t;
    if (window != null && window.g) {
      let c = Object.keys(window.g).filter((u) => (u == null ? void 0 : u.indexOf("URL")) > -1).map((u) => u == null ? void 0 : u.replace("URL", ""));
      for (let u of c) {
        let v = new RegExp("^/" + u + "(?=/.*$)", "i");
        if (v.test(t) && window.g[u + "URL"]) {
          l = window.g[u + "URL"] + t.replace(v, "");
          break;
        }
      }
    }
    const i = {
      method: n.toUpperCase(),
      credentials: "include"
    };
    if (n.toLowerCase() === "get" && Object.keys(o).length > 0) {
      const c = new URLSearchParams();
      for (let u in o)
        o.hasOwnProperty(u) && (o[u] || o[u] === 0 || o[u] === !1 || o[u] === "") && c.append(u, o[u]);
      l += (l.includes("?") ? "&" : "?") + c.toString();
    }
    ["post", "put"].includes(n.toLowerCase()) && (i.headers = {
      "Content-Type": "application/json"
    }, i.body = JSON.stringify(o));
    const r = await fetch(l, i);
    if (!r.ok)
      throw new Error("下载失败");
    let f = e || "download";
    if (!e) {
      let c = r.headers.get("Content-Disposition");
      if (c) {
        c = decodeURIComponent(c);
        const u = c.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        u && u[1] && (f = u[1].replace(/['"]/g, ""));
      } else {
        const u = l.split("?")[0], v = u.substring(u.lastIndexOf("/") + 1);
        v && v.includes(".") && (f = decodeURIComponent(v));
      }
    }
    const s = await r.blob(), y = window.URL.createObjectURL(s), p = document.createElement("a");
    p.href = y, p.download = f, document.body.appendChild(p), p.click(), document.body.removeChild(p), window.URL.revokeObjectURL(y);
  } catch (l) {
    console.error("下载出错:", l);
  } finally {
    At(!1);
  }
}
function dn(t, o, n = !1) {
  let e;
  if (t && Y(o) === "Array") {
    let l = localStorage.getItem(t);
    if (l) {
      let i = JSON.parse(decodeURI(l));
      e = o.filter((r) => {
        var f;
        return (r == null ? void 0 : r.key) && ((f = i == null ? void 0 : i.indexOf) == null ? void 0 : f.call(i, r.title)) !== -1;
      }).map((r) => r.key);
    } else
      e = o.map((i) => i == null ? void 0 : i.key);
  } else
    e = [];
  return n || (e = String(e)), e;
}
function Re(t) {
  return t != null && t !== "";
}
function cn(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function ql(t, o = !1, n = "") {
  return function(e, l) {
    var r, f;
    let i;
    if (Array.isArray(t)) {
      let s = [];
      for (let y of t)
        Re((r = l.row) == null ? void 0 : r[y]) && s.push(l.row[y]);
      i = s.join(n);
    } else typeof t == "function" ? i = t(l) : i = (f = l.row) == null ? void 0 : f[t];
    return Ae(ln, { content: o ? i === "" ? "--" : i ?? "--" : i });
  };
}
function fn(t) {
  if (ut(t)) {
    for (let o in t)
      if (t.hasOwnProperty(o) && Re(t[o]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let o of t)
      if (Re(o))
        return !1;
    return !0;
  }
  return !Re(t);
}
function pn(t) {
  return Y(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : Y(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function rt({
  group: t,
  condition: o,
  key: n,
  val: e,
  childKey: l = "children"
}) {
  if (Y(t) !== "Array" || Y(o) !== "Function" || Y(n) !== "String" || Y(l) !== "String")
    return !1;
  t.forEach((i) => {
    o(i) && (Y(e) === "Function" ? i[n] = e(i[n]) : i[n] = e), Y(i[l]) === "Array" && i[l].length > 0 && rt({
      group: i[l],
      condition: o,
      key: n,
      val: e,
      childKey: l
    });
  });
}
function dl(t) {
  let o = sessionStorage.getItem("btnPermissions");
  return o && o.trim() !== "" ? o.split(",").indexOf(t) > -1 : !1;
}
function mn(t) {
  return cl(t);
}
function cl(t) {
  return typeof t == "number" && Number.isNaN(t);
}
function hn(t, o = !1, n = !1) {
  if (Y(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), l = "";
  for (let i in e)
    if (e.hasOwnProperty(i)) {
      let r = e[i];
      r === void 0 || r === "" || Y(r) === "String" && r.trim() === "" || r === null || cl(r) ? n ? o ? l += i + "=&" : e[i] = "" : delete e[i] : o && (l += i + "=" + r + "&");
    }
  return o ? l.length > 0 ? l.substring(0, l.length - 1) : "" : e;
}
function tl(t) {
  let o = {};
  if (Array.isArray(t)) {
    o = [];
    for (let n of t)
      Array.isArray(n) || ut(n) ? o.push(tl(n)) : Re(n) && o.push(n);
  } else if (ut(t))
    for (let n in t)
      t.hasOwnProperty(n) && (Array.isArray(t[n]) || ut(t[n]) ? o[n] = tl(t[n]) : Re(t[n]) && (o[n] = t[n]));
  return o;
}
function yn(t) {
  const o = window.open();
  if (o) {
    o.document.write(t);
    let n = setTimeout(() => {
      o.print(), window.clearTimeout(n), n = null;
    }, 10);
  }
}
function fl(t) {
  let o = [], n = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && o.push(t);
  for (; n.nextSibling && (n = n.nextSibling); )
    n.nodeType === 1 && o.push(n);
  return o;
}
function vn(t, o) {
  if (!t)
    return "";
  const n = [];
  if (Array.isArray(o) && typeof o[0] == "string")
    n.push(Sl(o));
  else
    for (let e of o)
      n.push(Sl(e));
  return fe(t, n);
}
function Sl(t) {
  const [o, ...n] = t;
  return [$t(o), ...n];
}
const gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: el,
  dataFilterOrToUrl: hn,
  decimalDigitsLimit: rn,
  directivesComponent: vn,
  downloadFileByFormSubmit: Wl,
  downloadFileWithSpin: jl,
  fileExport: un,
  findCollection: Bt,
  formDataHeadConfig: nn,
  getColumnsKeys: dn,
  has: an,
  hasPermission: dl,
  htmlPrint: yn,
  isClient: Zt,
  isEmptyValue: fn,
  isNaN: mn,
  isNumberNaN: cl,
  isNumberValue: cn,
  isValidValue: Re,
  myTypeof: Y,
  oneOf: sn,
  removeEmptyValue: tl,
  setValByOption: rt,
  setValue: Je,
  siblingElems: fl,
  stringLength: pn,
  toFormData: on,
  toLine: Gl,
  tooltipManual: ql,
  trimObj: Hl
}, Symbol.toStringTag, { value: "Module" })), bn = { class: "groupBoxRP" }, kn = ["onClick"], wn = /* @__PURE__ */ ce({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const o = Nt(), n = t;
    function e(i) {
      return (i == null ? void 0 : i.path) === n.pathName ? "active" : "";
    }
    function l(i, r) {
      var p, c, u, v, b, g, S, k;
      (p = i == null ? void 0 : i.preventDefault) == null || p.call(i);
      let f = i == null ? void 0 : i.target;
      if (r && !r.children && !f.classList.contains("active")) {
        o.push(r.path);
        return;
      }
      let s = f.parentNode, y = fl(s);
      for (let V of y) {
        (u = (c = V == null ? void 0 : V.classList) == null ? void 0 : c.remove) == null || u.call(c, "open");
        const B = (v = V == null ? void 0 : V.querySelectorAll) == null ? void 0 : v.call(V, ".open");
        if (B && Array.isArray(B))
          for (let I of B)
            (g = (b = I == null ? void 0 : I.classList) == null ? void 0 : b.remove) == null || g.call(b, "open");
      }
      (k = (S = s == null ? void 0 : s.classList) == null ? void 0 : S.toggle) == null || k.call(S, "open");
    }
    return (i, r) => {
      const f = te("Icon"), s = te("sideMenuGroup", !0);
      return T(), N("ul", bn, [
        (T(!0), N(ge, null, Ce(n.data, (y, p) => (T(), N(ge, {
          key: (y == null ? void 0 : y.path) + p
        }, [
          y ? (T(), N("li", {
            key: 0,
            class: we({ dropItemRP: y.children })
          }, [
            P("div", {
              class: we(["menuTxtR", e(y)]),
              onClick: (c) => l(c, y),
              style: re({ paddingLeft: y.level * 20 + "px" })
            }, [
              y != null && y.icon ? (T(), le(f, {
                key: 0,
                class: "menuIcoL",
                custom: "iconfont " + y.icon
              }, null, 8, ["custom"])) : ue("", !0),
              P("span", null, q((y == null ? void 0 : y.name) || "-- no name --"), 1)
            ], 14, kn),
            y.children ? (T(), le(s, {
              key: 0,
              data: y.children,
              "path-name": n.pathName
            }, null, 8, ["data", "path-name"])) : ue("", !0)
          ], 2)) : ue("", !0)
        ], 64))), 128))
      ]);
    };
  }
});
let kt = [], wt = [], Cl = !1;
const _n = function(t) {
  if (Cl) {
    console.warn("定时器模块已经初始化过，请勿重复调用 init");
    return;
  }
  t && typeof t.beforeEach == "function" ? (t.beforeEach(() => {
    kt.forEach((o) => {
      window.clearTimeout(o);
    }), wt.forEach((o) => {
      window.clearInterval(o);
    }), kt.length = 0, wt.length = 0;
  }), Cl = !0) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Me = function(t, o) {
  if (typeof t != "function")
    throw new TypeError("第一个参数必须是函数");
  if (typeof o != "number" || o < 0)
    throw new TypeError("第二个参数必须是非负数");
  let n = window.setTimeout(t, o);
  return kt.push(n), n;
}, Vn = function(t, o) {
  if (typeof t != "function")
    throw new TypeError("第一个参数必须是函数");
  if (typeof o != "number" || o <= 0)
    throw new TypeError("第二个参数必须是正数");
  let n = window.setInterval(t, o);
  return wt.push(n), n;
}, Sn = function(t) {
  window.clearTimeout(t);
  const o = kt.indexOf(t);
  o > -1 && kt.splice(o, 1);
}, Cn = function(t) {
  window.clearInterval(t);
  const o = wt.indexOf(t);
  o > -1 && wt.splice(o, 1);
}, Tn = { class: "menuListR" }, Bn = /* @__PURE__ */ ce({
  __name: "SideMenu",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: o }) {
    const n = t, e = o, l = ul(), i = E(!0), r = E(), f = E(), s = j(() => i.value ? x("r.hideMenu") : x("r.showMenu")), y = j(() => i.value ? "ios-arrow-back" : "ios-arrow-forward");
    Kl(() => {
      let u = localStorage.getItem("menuDisplayR") || "";
      u !== "" ? i.value = JSON.parse(u) : (i.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), Se(
      () => l.path,
      (u) => {
        r.value = u, $e(() => {
          Me(c, 10);
        });
      },
      { immediate: !0 }
    );
    function p() {
      i.value = !i.value, localStorage.setItem("menuDisplayR", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function c() {
      var v, b, g, S, k;
      let u = f.value.querySelectorAll(".dropItemRP");
      for (let V of u)
        (v = V == null ? void 0 : V.querySelector) != null && v.call(V, ".active") && !((g = (b = V.classList) == null ? void 0 : b.contains) != null && g.call(b, "open")) && ((k = (S = V.classList) == null ? void 0 : S.add) == null || k.call(S, "open"));
    }
    return (u, v) => {
      const b = te("Icon");
      return T(), N("div", {
        ref_key: "menuRef",
        ref: f,
        class: we(["menuBoxRP", "cannotSelect", { light: u.light }])
      }, [
        fe(P("div", Tn, [
          Q(wn, {
            data: n.data,
            pathName: m(r)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, m(i)]
        ]),
        Q(b, {
          type: m(y),
          size: 25,
          class: we([{ showIco: !m(i) }, "menuShowHideIco"]),
          title: m(s),
          onClick: p,
          color: m(i) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 2);
    };
  }
}), Ln = { class: "groupBoxRX" }, xn = ["onMouseenter"], On = ["onClick"], In = /* @__PURE__ */ ce({
  __name: "SideMenuProGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const o = Nt(), n = t, e = E("");
    function l(s) {
      let y = "menuTxtR ";
      return (s == null ? void 0 : s.path) === n.pathName && (y += "active "), y;
    }
    function i(s, y) {
      var c;
      (c = s == null ? void 0 : s.preventDefault) == null || c.call(s);
      let p = s == null ? void 0 : s.target;
      y && !y.children && !p.classList.contains("active") && o.push(y.path);
    }
    function r(s, y) {
      var p;
      (p = s == null ? void 0 : s.preventDefault) == null || p.call(s), e.value = y == null ? void 0 : y.path;
    }
    function f(s) {
      var y;
      (y = s == null ? void 0 : s.preventDefault) == null || y.call(s), e.value = "";
    }
    return (s, y) => {
      const p = te("Icon"), c = te("SideMenuProGroup", !0);
      return T(), N("ul", Ln, [
        (T(!0), N(ge, null, Ce(n.data, (u, v) => {
          var b;
          return T(), N("li", {
            key: (u == null ? void 0 : u.path) + v,
            class: we({ dropItemRX: u == null ? void 0 : u.children }),
            onMouseenter: (g) => r(g, u),
            onMouseleave: y[0] || (y[0] = (g) => f(g))
          }, [
            P("div", {
              class: we(l(u)),
              onClick: (g) => i(g, u),
              style: re({ paddingLeft: u.level * 20 + "px" })
            }, [
              ke(q((u == null ? void 0 : u.name) || "-- no name --") + " ", 1),
              fe(Q(p, {
                class: "dropIcoRX",
                type: "ios-arrow-forward",
                size: 16
              }, null, 512), [
                [ve, u.children && u.children.length > 0]
              ])
            ], 14, On),
            ((b = u == null ? void 0 : u.children) == null ? void 0 : b.length) > 0 ? fe((T(), le(c, {
              key: 0,
              class: "rightChildRX",
              data: u == null ? void 0 : u.children,
              "path-name": s.pathName
            }, null, 8, ["data", "path-name"])), [
              [ve, m(e) === (u == null ? void 0 : u.path)]
            ]) : ue("", !0)
          ], 42, xn);
        }), 128))
      ]);
    };
  }
}), An = { class: "groupBoxRX" }, Pn = ["onClick"], Xl = /* @__PURE__ */ ce({
  __name: "SideMenuTwoLevel",
  props: {
    data: { default: () => [] },
    pathName: { default: "" },
    fromIcoMenu: { type: Boolean }
  },
  setup(t) {
    const o = Nt(), n = t;
    function e(i) {
      let r = "menuTxtR ";
      return (i == null ? void 0 : i.path) === n.pathName && (r += "active "), r;
    }
    function l(i, r) {
      var c, u, v, b, g, S, k, V, B, I, K, R, M, h;
      (c = i == null ? void 0 : i.preventDefault) == null || c.call(i);
      let f = i == null ? void 0 : i.target;
      if (r && !r.children && !f.classList.contains("active")) {
        o.push(r.path);
        return;
      }
      const s = (u = f == null ? void 0 : f.querySelector) == null ? void 0 : u.call(f, ".dropIcoRX"), y = f.parentNode, p = fl(y);
      for (let L of p) {
        (b = (v = L == null ? void 0 : L.classList) == null ? void 0 : v.remove) == null || b.call(v, "open");
        const _ = (g = L == null ? void 0 : L.querySelector) == null ? void 0 : g.call(L, ".dropIcoRX");
        (k = (S = _ == null ? void 0 : _.classList) == null ? void 0 : S.remove) == null || k.call(S, "open");
        const Z = (V = L == null ? void 0 : L.querySelectorAll) == null ? void 0 : V.call(L, ".open");
        for (let $ of Z)
          (I = (B = $ == null ? void 0 : $.classList) == null ? void 0 : B.remove) == null || I.call(B, "open");
      }
      (R = (K = y == null ? void 0 : y.classList) == null ? void 0 : K.toggle) == null || R.call(K, "open"), (h = (M = s == null ? void 0 : s.classList) == null ? void 0 : M.toggle) == null || h.call(M, "open");
    }
    return (i, r) => {
      const f = te("Icon");
      return T(), N("ul", An, [
        (T(!0), N(ge, null, Ce(n.data, (s, y) => (T(), N("li", {
          key: (s == null ? void 0 : s.path) + y,
          class: we({ dropItemRX: s == null ? void 0 : s.children, open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu })
        }, [
          P("div", {
            class: we(e(s)),
            onClick: (p) => l(p, s),
            style: re({ paddingLeft: s.level * 20 + "px" })
          }, [
            Q(f, {
              class: "menuIcoL",
              custom: "iconfont " + (s.icon || "icon-r-menu-default")
            }, null, 8, ["custom"]),
            P("span", null, q((s == null ? void 0 : s.name) || "-- no name --"), 1),
            fe(Q(f, {
              class: we(["dropIcoRX", { open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu }]),
              type: "ios-arrow-forward"
            }, null, 8, ["class"]), [
              [ve, s.children && s.children.length > 0]
            ])
          ], 14, Pn),
          s.children ? (T(), le(In, {
            key: 0,
            data: s.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : ue("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Rn = { class: "groupBoxRX" }, Mn = ["onMouseenter"], $n = ["onClick"], Fn = /* @__PURE__ */ ce({
  __name: "SideIcoMenu",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const o = Nt(), n = t, e = E("");
    function l(s) {
      let y = "menuTxtR ";
      return (s == null ? void 0 : s.path) === n.pathName && (y += "active "), y;
    }
    function i(s, y) {
      var c;
      (c = s == null ? void 0 : s.preventDefault) == null || c.call(s);
      let p = s == null ? void 0 : s.target;
      y && !y.children && !p.classList.contains("active") && o.push(y.path);
    }
    function r(s, y) {
      var p;
      (p = s == null ? void 0 : s.preventDefault) == null || p.call(s), e.value = y == null ? void 0 : y.path;
    }
    function f(s) {
      var y;
      (y = s == null ? void 0 : s.preventDefault) == null || y.call(s), e.value = "";
    }
    return (s, y) => {
      const p = te("Icon");
      return T(), N("ul", Rn, [
        (T(!0), N(ge, null, Ce(n.data, (c, u) => (T(), N("li", {
          key: (c == null ? void 0 : c.path) + u,
          class: we({ dropItemRX: c.children }),
          onMouseenter: (v) => r(v, c),
          onMouseleave: y[0] || (y[0] = (v) => f(v))
        }, [
          P("div", {
            class: we(l(c)),
            onClick: (v) => i(v, c)
          }, [
            Q(p, {
              class: "menuIcoM",
              custom: "iconfont " + (c.icon || "icon-r-menu-default"),
              size: "20"
            }, null, 8, ["custom"])
          ], 10, $n),
          fe(Q(Xl, {
            class: "rightTwoMenu",
            data: [c],
            pathName: n.pathName,
            fromIcoMenu: ""
          }, null, 8, ["data", "pathName"]), [
            [ve, m(e) === (c == null ? void 0 : c.path)]
          ])
        ], 42, Mn))), 128))
      ]);
    };
  }
}), Dn = { class: "menuListR" }, Nn = /* @__PURE__ */ ce({
  __name: "SideMenuPro",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: o }) {
    const n = t, e = o, l = ul(), i = E(!0), r = E(), f = E(), s = j(() => i.value ? x("r.hideMenu") : x("r.showMenu")), y = j(() => i.value ? "iconfont icon-r-menu-hide" : "iconfont icon-r-menu-open");
    Kl(() => {
      let u = localStorage.getItem("menuDisplayRPro") || "";
      u !== "" ? i.value = JSON.parse(u) : (i.value = !0, localStorage.setItem("menuDisplayRPro", JSON.stringify(!0)));
    }), Se(
      () => l.path,
      (u) => {
        r.value = u, $e(() => {
          Me(c, 10);
        });
      },
      { immediate: !0 }
    );
    function p() {
      i.value = !i.value, localStorage.setItem("menuDisplayRPro", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function c() {
      var v, b, g, S, k, V, B, I, K, R, M, h, L, _, Z, $, A, H, U, w, F, D, X, ee, se, me, he, Oe, Ie, ae, xe, Pe, Ze, We, G, z, ye, be, _e;
      let u = f.value.querySelectorAll(".dropItemRX");
      for (let W of u) {
        const Ve = (b = (v = W == null ? void 0 : W.childNodes[0]) == null ? void 0 : v.querySelector) == null ? void 0 : b.call(v, ".dropIcoRX");
        (g = W == null ? void 0 : W.querySelector) != null && g.call(W, ".active") ? (V = (k = (S = W == null ? void 0 : W.childNodes[1]) == null ? void 0 : S.classList) == null ? void 0 : k.contains) != null && V.call(k, "rightChildRX") ? (K = (I = (B = W == null ? void 0 : W.childNodes[0]) == null ? void 0 : B.classList) == null ? void 0 : I.contains) != null && K.call(I, "activeR") || (M = W == null ? void 0 : (R = W.childNodes[0].classList).add) == null || M.call(R, "activeR") : ((L = (h = W == null ? void 0 : W.classList) == null ? void 0 : h.contains) != null && L.call(h, "open") || (Z = (_ = W.classList).add) == null || Z.call(_, "open"), Ve && !((A = ($ = Ve == null ? void 0 : Ve.classList) == null ? void 0 : $.contains) != null && A.call($, "open")) && ((U = (H = Ve.classList).add) == null || U.call(H, "open"))) : (D = (F = (w = W == null ? void 0 : W.childNodes[1]) == null ? void 0 : w.classList) == null ? void 0 : F.contains) != null && D.call(F, "rightChildRX") ? (se = (ee = (X = W == null ? void 0 : W.childNodes[0]) == null ? void 0 : X.classList) == null ? void 0 : ee.contains) != null && se.call(ee, "activeR") && ((he = W == null ? void 0 : (me = W.childNodes[0].classList).remove) == null || he.call(me, "activeR")) : ((Ie = (Oe = W == null ? void 0 : W.classList) == null ? void 0 : Oe.contains) != null && Ie.call(Oe, "open") && !((xe = (ae = W == null ? void 0 : W.classList) == null ? void 0 : ae.contains) != null && xe.call(ae, "fromIcoMenu")) && ((Ze = (Pe = W.classList).remove) == null || Ze.call(Pe, "open")), (G = (We = Ve == null ? void 0 : Ve.classList) == null ? void 0 : We.contains) != null && G.call(We, "open") && !((ye = (z = Ve == null ? void 0 : Ve.classList) == null ? void 0 : z.contains) != null && ye.call(z, "fromIcoMenu")) && ((_e = (be = Ve.classList).remove) == null || _e.call(be, "open")));
      }
    }
    return (u, v) => {
      const b = te("Icon");
      return T(), N("div", {
        ref_key: "menuProRef",
        ref: f,
        class: we(["menuBoxRPro", "cannotSelect", { light: u.light }])
      }, [
        fe(P("div", Dn, [
          Q(Xl, {
            data: n.data,
            pathName: m(r)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, m(i)]
        ]),
        fe(Q(Fn, {
          class: "icoMenuR",
          data: u.data,
          pathName: m(r)
        }, null, 8, ["data", "pathName"]), [
          [ve, !m(i)]
        ]),
        Q(b, {
          custom: m(y),
          size: 14,
          class: we([{ showIco: !m(i) }, "menuShowHideIco"]),
          title: m(s),
          onClick: p
        }, null, 8, ["custom", "class", "title"])
      ], 2);
    };
  }
}), Kn = ["title"], Jl = /* @__PURE__ */ ce({
  __name: "TableIconBtn",
  props: {
    icon: { default: "md-radio-button-on" },
    title: {},
    has: { default: "" },
    disabled: { type: Boolean, default: !1 },
    size: { default: 24 }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const n = o, e = t;
    function l(i) {
      e.disabled || n("click", i);
    }
    return (i, r) => {
      const f = te("Icon"), s = $t("has");
      return fe((T(), N("div", {
        class: we(["tableBtnsG", { disabled: e.disabled }]),
        onClick: l,
        title: e.title || m(x)("r.button")
      }, [
        Q(f, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Kn)), [
        [s, e.has]
      ]);
    };
  }
}), zn = { class: "contentX" }, Un = { class: "arrowA" }, ll = /* @__PURE__ */ ce({
  __name: "ShowHidePanel",
  props: /* @__PURE__ */ ba({
    bg: {}
  }, {
    modelValue: { type: Boolean, default: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const o = ka(t, "modelValue"), n = t, e = j(() => o ? "background:" + n.bg || "transparent" : "");
    return (l, i) => {
      const r = te("Icon");
      return T(), N("div", {
        style: re(m(e))
      }, [
        fe(P("div", zn, [
          Ne(l.$slots, "default")
        ], 512), [
          [ve, o.value]
        ]),
        P("div", Un, [
          P("div", {
            class: "btA",
            onClick: i[0] || (i[0] = (f) => o.value = !o.value)
          }, [
            Q(r, {
              type: o.value ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), En = { class: "contentZ" }, Gn = /* @__PURE__ */ ce({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const n = t, e = o, l = j({
      get() {
        return n.modelValue;
      },
      set(r) {
        e("update:modelValue", r);
      }
    }), i = j(() => l.value ? "background:" + n.bg : "");
    return (r, f) => (T(), N("div", {
      style: re(m(i))
    }, [
      fe(P("div", En, [
        Ne(r.$slots, "default")
      ], 512), [
        [ve, m(l)]
      ])
    ], 4));
  }
}), Hn = /* @__PURE__ */ ce({
  __name: "TableSearch",
  props: {
    modelValue: {},
    open: { type: Boolean, default: !1 },
    placeholder: {},
    showBtn: { type: Boolean, default: !0 },
    fixed: { type: Boolean, default: !1 },
    width: { default: "210px" },
    right: { default: "0" },
    top: { default: "0" },
    btnColor: { default: "inherit" }
  },
  emits: ["update:modelValue", "on-toggle", "on-search"],
  setup(t, { emit: o }) {
    const n = o, e = t;
    let l = !1;
    const i = j({
      get() {
        return e.modelValue;
      },
      set(y) {
        n("update:modelValue", y);
      }
    }), r = j({
      get() {
        return e.open;
      },
      set(y) {
        n("on-toggle", y);
      }
    }), f = j(() => r.value ? "ios-arrow-up" : "ios-arrow-down");
    function s() {
      l || (l = !0, n("on-search", i.value), Me(() => {
        l = !1;
      }, 2e3));
    }
    return (y, p) => {
      const c = te("Input"), u = te("icon");
      return T(), N("div", {
        class: "tableSearchV",
        style: re({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Ne(y.$slots, "default", {}, () => [
          Q(c, {
            modelValue: m(i),
            "onUpdate:modelValue": p[0] || (p[0] = (v) => Fe(i) ? i.value = v : null),
            style: re({ width: e.width }),
            search: "",
            onOnSearch: s,
            class: "searchInputC",
            placeholder: e.placeholder || m(x)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        fe(P("span", {
          class: "sbt",
          onClick: p[1] || (p[1] = (v) => r.value = !m(r)),
          style: re({ color: e.btnColor })
        }, [
          Q(u, {
            type: m(f),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ke(q(m(x)("r.adSearch")), 1)
        ], 4), [
          [ve, e.showBtn]
        ])
      ], 4);
    };
  }
}), Yl = {
  beforeMount(t, o) {
    t.__vueClickOutsideBinding__ = o;
    function n(e) {
      var l, i;
      if (t.contains(e.target))
        return !1;
      (i = (l = t.__vueClickOutsideBinding__) == null ? void 0 : l.value) == null || i.call(l, e);
    }
    t.__vueClickOutside__ = n, Zt && document.addEventListener("click", n);
  },
  updated(t, o) {
    t.__vueClickOutsideBinding__ = o;
  },
  unmounted(t) {
    Zt && document.removeEventListener("click", t.__vueClickOutside__), delete t.__vueClickOutside__, delete t.__vueClickOutsideBinding__;
  }
};
function Ql(t, o, n, e, l = !1) {
  const i = (...r) => Qe.apply(this, r);
  ze.call(this, {
    title: t === null ? i("r.info.title") : t,
    text: o === null ? i("r.info.text") : o,
    icon: n === null ? "warning" : n,
    onOk: e,
    buttons: [i("r.cancel")],
    closeOnClickOutside: l
  });
}
const Wn = { class: "tabSetF" }, jn = { class: "cannotSelect" }, qn = { class: "topCheck" }, Zl = /* @__PURE__ */ ce({
  __name: "TableSetting",
  props: {
    modelValue: { default: () => [] },
    sKey: {},
    width: { default: "240px" },
    bg: { default: () => Le().tableSettingBg },
    placement: { default: "bottom-end" },
    defaultCheck: { type: Boolean, default: !1 },
    storage: { default: "localStorage" },
    transfer: { type: Boolean, default: () => Le().tableSettingTransfer },
    eventsEnabled: { type: Boolean, default: () => Le().tableSettingEventsEnabled }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    var h, L, _, Z, $;
    const n = o, e = t, l = E(), i = E(), r = E(!0), f = E(!1), s = E(!1), y = E([]), p = j(() => {
      var H;
      let A = x("r.unknown");
      return ((H = e.modelValue) == null ? void 0 : H.length) > y.value.length && (y.value = pe(e.modelValue)), y.value.map((U) => {
        let w = { label: (U == null ? void 0 : U.title) || A };
        return U != null && U.disableShowSetting && (w.disabled = !0), w;
      });
    }), c = j(() => p.value.filter((A) => A == null ? void 0 : A.disabled)), u = j({
      get() {
        var A, H;
        return (H = (A = e.modelValue) == null ? void 0 : A.map) == null ? void 0 : H.call(A, (U) => (U == null ? void 0 : U.title) || x("r.unknown"));
      },
      set(A) {
        let H = y.value.filter((U) => {
          for (let w of A)
            if (w === (U == null ? void 0 : U.title))
              return !0;
          return !1;
        });
        n("update:modelValue", H);
      }
    }), v = ($ = (Z = (_ = (L = (h = Mt()) == null ? void 0 : h.appContext) == null ? void 0 : L.config) == null ? void 0 : _.globalProperties) == null ? void 0 : Z.$i18n) == null ? void 0 : $.locale;
    let b = null;
    Ge(() => {
      let A = x("r.unknown"), H = R();
      H ? u.value = JSON.parse(decodeURI(H)) : e.defaultCheck && (u.value = e.modelValue.filter((U) => U == null ? void 0 : U.showSettingCheck).map((U) => (U == null ? void 0 : U.title) || A)), $e(function() {
        !l.value || !i.value || (b = new Pa(l.value, i.value, {
          placement: e.placement,
          eventsEnabled: e.eventsEnabled,
          modifiers: {
            computeStyle: {
              gpuAcceleration: !1
            },
            preventOverflow: {
              boundariesElement: "window"
            }
          },
          onUpdate: (U) => {
            var w;
            if (U != null && U.popper && ((w = U.instance) != null && w.popper)) {
              const F = g(U), { needChange: D } = F;
              if (D) {
                const { height: X } = F, ee = U.instance.popper;
                ee.style && (ee.style.height = `${X}px`);
              }
            }
          }
        }));
      }), Me(() => {
        var U;
        s.value = !0, (U = b == null ? void 0 : b.update) == null || U.call(b), $e(function() {
          s.value = !1;
        });
      }, 0);
    }), rl(function() {
      var A;
      (A = b == null ? void 0 : b.destroy) == null || A.call(b);
    });
    function g(A) {
      var D, X;
      const { height: H } = A.popper, U = A.instance.popper, w = window.innerHeight;
      let F = 0;
      if ((D = U.childNodes) != null && D.length)
        for (let ee = 0; ee < U.childNodes.length; ee++)
          F += (X = U.childNodes[ee]) == null ? void 0 : X.offsetHeight;
      return w < H - 10 || H < F ? {
        needChange: !0,
        height: w - 10 < F ? w - 10 : F
      } : { needChange: !1 };
    }
    function S(A) {
      A.length === p.value.length ? (r.value = !1, f.value = !0) : A.length > c.value.length ? (r.value = !0, f.value = !1) : (r.value = !1, f.value = !1);
    }
    Se(() => u.value, S, {
      immediate: !0,
      deep: !0
    });
    function k() {
      s.value && (M() && Ql(x("r.notSave"), "", "warning", B), s.value = !1);
    }
    function V() {
      s.value ? k() : (s.value = !0, $e(function() {
        var A;
        (A = b == null ? void 0 : b.update) == null || A.call(b);
      }));
    }
    function B() {
      v ? window[e.storage].setItem(e.sKey + "_" + v, encodeURI(JSON.stringify(u.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(u.value))), k();
    }
    function I(A) {
      var H, U;
      if (s.value) {
        if (e.transfer) {
          const w = i.value;
          if (w === (A == null ? void 0 : A.target) || (H = w == null ? void 0 : w.contains) != null && H.call(w, A == null ? void 0 : A.target))
            return;
        }
        (U = A == null ? void 0 : A.preventDefault) == null || U.call(A), k();
      }
    }
    function K() {
      r.value ? f.value = !1 : f.value = !f.value, r.value = !1, f.value ? u.value = p.value.map((A) => A == null ? void 0 : A.label) : u.value = c.value.map((A) => A == null ? void 0 : A.label);
    }
    function R() {
      let A;
      return v ? A = window[e.storage].getItem(e.sKey + "_" + v) : A = window[e.storage].getItem(e.sKey), A;
    }
    function M() {
      var H;
      let A = R();
      if (A) {
        if (A = JSON.parse(decodeURI(A)), (A == null ? void 0 : A.length) !== ((H = u.value) == null ? void 0 : H.length))
          return !0;
        for (let U of A)
          if (u.value.indexOf(U) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (A, H) => {
      const U = te("Icon"), w = te("Checkbox"), F = te("CheckboxGroup");
      return fe((T(), N("div", Wn, [
        P("div", {
          ref_key: "buttonRef",
          ref: l,
          class: "tabSetBt",
          onClick: V
        }, [
          Q(U, {
            type: "md-settings",
            size: "17"
          }),
          P("span", jn, q(m(x)("r.tabSetting")), 1)
        ], 512),
        (T(), le(wa, {
          to: "body",
          disabled: !e.transfer
        }, [
          fe(P("div", {
            ref_key: "popperRef",
            ref: i,
            class: "tabSetCard",
            style: re({ width: e.width, backgroundColor: e.bg })
          }, [
            P("div", qn, [
              Q(w, {
                indeterminate: m(r),
                modelValue: m(f),
                "onUpdate:modelValue": H[0] || (H[0] = (D) => Fe(f) ? f.value = D : null),
                onClick: jt(K, ["prevent"])
              }, {
                default: ne(() => [
                  ke(q(m(x)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              P("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: B
              }, [
                H[2] || (H[2] = P("span", { class: "iconfont icon-r-save" }, null, -1)),
                P("span", null, q(m(x)("r.save")), 1)
              ])
            ]),
            Q(F, {
              modelValue: m(u),
              "onUpdate:modelValue": H[1] || (H[1] = (D) => Fe(u) ? u.value = D : null)
            }, {
              default: ne(() => [
                (T(!0), N(ge, null, Ce(m(p), (D, X) => (T(), le(w, {
                  class: "setItem",
                  label: D && D.label,
                  key: "tabSet_" + e.sKey + X,
                  disabled: D && D.disabled
                }, null, 8, ["label", "disabled"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ], 4), [
            [ve, m(s)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [m(Yl), I]
      ]);
    };
  }
});
function Xn(t) {
  return t.replace(/_(\w)/g, function(o, n) {
    return n.toUpperCase();
  });
}
function us(t) {
  let o = document.createElement("div");
  return o.textContent !== void 0 ? o.textContent = t : o.innerText = t, o.innerHTML;
}
function ds(t) {
  let o = document.createElement("div");
  return o.innerHTML = t, o.innerText || o.textContent;
}
function Tl(t) {
  return new Promise((o) => {
    let n = new FileReader();
    n.readAsDataURL(t), n.onloadend = () => {
      o(n.result);
    };
  });
}
function ea(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function ht(t) {
  return Y(t) === "String" && t.indexOf("image") > -1;
}
function Bl(t) {
  const o = ea(t);
  let n = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(o) > -1 ? n = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(o) > -1 ? n = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(o) > -1 ? n = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(o) > -1 ? n = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(o) > -1 ? n = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(o) > -1 && (n = "ios-videocam"), n;
}
function Jn(t, o) {
  let n = document.createElement("a");
  n.href = o, n.download = t, Yn(n);
}
function Yn(t) {
  let o = document.createEvent("MouseEvents");
  o.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(o);
}
function al({
  group: t,
  condition: o,
  pathKey: n,
  childKey: e = "children",
  path: l = []
}) {
  if (t && Ca(t)) {
    if (Ta(o)) {
      if (ut(t)) {
        let i = t, r = pe(l);
        if (o(i))
          return n && i[n] && r.push(i[n]), r;
        if (i[e] && !De(i[e])) {
          n && i[n] && r.push(i[n]);
          let f = al({
            group: i[e],
            condition: o,
            pathKey: n,
            childKey: e,
            path: r
          });
          if (!De(f))
            return f;
        }
      } else if (Array.isArray(t))
        for (let i of t) {
          let r = pe(l);
          if (o(i))
            return n && i[n] ? r.push(i[n]) : r.push(String(t.indexOf(i))), r;
          if (i[e] && i[e].length > 0) {
            n && i[n] ? r.push(i[n]) : r.push(String(t.indexOf(i)));
            let f = al({
              group: i[e],
              condition: o,
              pathKey: n,
              childKey: e,
              path: r
            });
            if (!De(f))
              return f;
          }
        }
    } else if (Array.isArray(t))
      for (let i of t) {
        let r = pe(l);
        if (i === o)
          return r.push(String(t.indexOf(i))), r;
      }
  }
  return [];
}
function Qn(t, o = 12) {
  if (Y(t) === "String" && t.length > 0) {
    let n = document.createElement("span");
    n.style.fontSize = o + "px", n.style.fontFamily = "inherit", n.innerHTML = t, n.style.opacity = "0", n.style.position = "fixed", n.style.top = "3000px", document.body.append(n);
    const e = n.clientWidth;
    return document.body.removeChild(n), e;
  }
  return 0;
}
function cs(t) {
  return t === "" ? null : t;
}
function fs(t) {
  var o;
  t = t || window.Event, t != null && t.stopPropagation ? (o = t.stopPropagation) == null || o.call(t) : t && (t.cancelBubble = !0);
}
const He = /* @__PURE__ */ new Map();
let Zn = 0;
function nl({
  height: t,
  width: o = 416,
  title: n,
  content: e,
  onOk: l,
  onCancel: i,
  onClose: r,
  okText: f,
  cancelText: s,
  noWarnIcon: y,
  footerAlign: p,
  cancelBt: c = !0
}) {
  const u = (...V) => Qe.apply(this, V);
  let b = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", g = Y(e) === "String";
  const S = typeof e == "function", k = "msgbox_" + ++Zn;
  He.set(k, !1), lt.warning({
    width: o,
    footerHide: !0,
    render: () => Ae(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: b
        }
      },
      [
        Ae(
          "div",
          {
            class: "containerN"
          },
          [
            Ae(
              "div",
              {
                class: "titleN"
              },
              [
                Ae("span", n || u("r.info.title")),
                Ae(
                  Gt,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      He.get(k) || (lt.remove(), He.delete(k), r && Y(r) === "Function" && r());
                    }
                  },
                  () => Ae("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            Ae(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: g ? "center" : "left"
                }
              },
              [
                Ae("i", {
                  class: g && !y ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Ae("div", { class: "msgBoxConO" }, S ? [e(Ae)] : e || u("r.info.text"))
              ]
            ),
            Ae(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: p || "center"
                }
              },
              [
                Ae(
                  Gt,
                  {
                    class: "okBtN",
                    onClick(V) {
                      var B, I, K, R, M, h, L, _, Z;
                      if (l && typeof l == "function") {
                        const $ = l();
                        if ($ && Y($) === "Promise") {
                          He.set(k, !0);
                          const A = (V == null ? void 0 : V.currentTarget) || (V == null ? void 0 : V.target);
                          if (A) {
                            (I = (B = A.classList) == null ? void 0 : B.add) == null || I.call(B, "ivu-btn-loading"), (R = (K = A.nextSibling) == null ? void 0 : K.setAttribute) == null || R.call(K, "disabled", "disabled");
                            const H = (L = (h = (M = A.parentElement) == null ? void 0 : M.parentElement) == null ? void 0 : h.querySelector) == null ? void 0 : L.call(h, ".titleN .closeN");
                            (Z = (_ = H == null ? void 0 : H.classList) == null ? void 0 : _.add) == null || Z.call(_, "disabled");
                          }
                          Promise.resolve($).then(() => {
                            He.set(k, !1), lt.remove(), He.delete(k);
                          }).catch(() => {
                            He.set(k, !1), lt.remove(), He.delete(k);
                          });
                        } else
                          lt.remove(), He.delete(k);
                      }
                    }
                  },
                  () => [
                    Ae("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Ae("span", f || u("r.confirm"))
                  ]
                ),
                Ae(
                  Gt,
                  {
                    class: ["cancelBtN", !c && "hide"],
                    onClick() {
                      He.get(k) || (lt.remove(), He.delete(k), Y(i) === "Function" && i && i());
                    }
                  },
                  () => s || u("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
const eo = window.location.origin;
let Rt = null;
const Ll = (...t) => Qe.apply(Rt, t);
let Ee = Jt.create({
  baseURL: eo,
  withCredentials: !0
  // 允许携带cookie
});
function to() {
  console.info(
    "store为空，请在安装插件时传入store实例，vuex：app.use(plugRQw,{store})，Pinia：app.use(plugRQw,{useStore})"
  );
}
Ee.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function xl() {
  var t, o;
  if (Ee.store)
    if (typeof Ee.store == "function") {
      const n = Ee.store();
      n.logout && n.logout();
    } else
      (o = (t = Ee.store) == null ? void 0 : t.dispatch) == null || o.call(t, "logout");
  else
    to();
}
Ee.interceptors.response.use(
  (t) => {
    var o, n;
    return Rt && (((o = t == null ? void 0 : t.data) == null ? void 0 : o.code) === 403 || ((n = t == null ? void 0 : t.data) == null ? void 0 : n.code) === 409) && nl({
      content: Ll("r.http." + t.data.code),
      onOk: xl
    }), t;
  },
  (t) => {
    var o, n;
    return Rt && (((o = t == null ? void 0 : t.response) == null ? void 0 : o.status) === 403 || ((n = t == null ? void 0 : t.response) == null ? void 0 : n.status) === 409) && nl({
      content: Ll("r.http." + t.response.status),
      onOk: xl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function et(t, o, n, e) {
  if (e != null && e.spin && At(!1), t) {
    let l = t.data;
    if (l !== void 0) {
      Array.isArray(n) || (n = []);
      for (let i of n) {
        if (typeof l != "object") {
          console.error("请求返回结果不是对象，不可获取成员变量");
          break;
        }
        if (l = l[i], l === void 0) {
          console.error("从请求返回结果获取成员出错，找不到该字段：", i);
          break;
        }
      }
      return l;
    }
    return o && console.warn(o), !1;
  }
  return o && console.warn(o), !1;
}
function lo(t, o, n, e, l, i, r) {
  return new Promise((f, s) => {
    switch (t) {
      case "get":
        Ee.get(o, { params: n }).then((p) => {
          let c = et(p, e, l, i);
          c ? f(c) : s(p);
        }).catch((p) => {
          et({}, e, l, i), s(p);
        });
        break;
      case "delete":
        let y = r ? "params" : "data";
        Ee.delete(o, { [y]: n }).then((p) => {
          let c = et(p, e, l, i);
          c ? f(c) : s(p);
        }).catch((p) => {
          et({}, e, l, i), s(p);
        });
        break;
      case "post":
        Ee.post(o, n, i).then((p) => {
          let c = et(p, e, l, i);
          c ? f(c) : s(p);
        }).catch((p) => {
          et({}, e, l, i), s(p);
        });
        break;
      case "put":
        Ee.put(o, n, i).then((p) => {
          let c = et(p, e, l, i);
          c ? f(c) : s(p);
        }).catch((p) => {
          et({}, e, l, i), s(p);
        });
        break;
    }
  });
}
function St(t, o, n = {}, e, l, i, r) {
  return new Promise((f, s) => {
    var y;
    if (o) {
      i && i.spin && At(!0);
      let p = o;
      if (window != null && window.g) {
        const v = window.g;
        let b = Object.keys(v).filter((g) => {
          var S;
          return ((S = g == null ? void 0 : g.indexOf) == null ? void 0 : S.call(g, "URL")) > -1;
        }).map((g) => {
          var S;
          return (S = g.replace) == null ? void 0 : S.call(g, "URL", "");
        });
        for (let g of b) {
          let S = new RegExp("^/" + g + "(?=/.*$)", "i");
          if (S.test(o) && v[g + "URL"]) {
            p = v[g + "URL"] + o.replace(S, "");
            break;
          }
        }
      }
      let c;
      if (((y = i == null ? void 0 : i.headers) == null ? void 0 : y["Content-Type"]) === "multipart/form-data")
        c = n;
      else if (Array.isArray(n) ? c = [] : c = {}, n && !De(n))
        if (Array.isArray(n)) {
          c = [];
          for (let v of n)
            (v || v === 0 || v === !1 || v === "" && i && !i.noEmptyStr) && c.push(v);
        } else {
          c = {};
          for (let v in n)
            n.hasOwnProperty(v) && (n[v] || n[v] === 0 || n[v] === !1 || n[v] === "" && i && !i.noEmptyStr) && (c[v] = n[v]);
        }
      let u = t.toLowerCase();
      lo(u, p, c, e, l, i, r).then((v) => {
        f(v);
      }).catch((v) => {
        s(v);
      });
    } else
      console.error("没有请求地址:url"), s("没有请求地址:url");
  });
}
const qe = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(t, o) {
    Ee.store = t, Rt = o.config.globalProperties;
  },
  post(t, o, n, e, l) {
    return new Promise((i, r) => {
      St("post", t, o, n, e, l).then((f) => {
        i(f);
      }).catch((f) => {
        r(f);
      });
    });
  },
  put(t, o, n, e, l) {
    return new Promise((i, r) => {
      St("put", t, o, n, e, l).then((f) => {
        i(f);
      }).catch((f) => {
        r(f);
      });
    });
  },
  get(t, o, n, e, l) {
    return new Promise((i, r) => {
      St("get", t, o, n, e, l).then((f) => {
        i(f);
      }).catch((f) => {
        r(f);
      });
    });
  },
  delete(t, o, n, e, l, i = !0) {
    return new Promise((r, f) => {
      St("delete", t, o, n, e, l, i).then((s) => {
        r(s);
      }).catch((s) => {
        f(s);
      });
    });
  },
  all: Jt.all,
  spread: Jt.spread,
  config: Ee
}, ao = {
  key: 0,
  class: "pageTotal"
}, no = {
  key: 1,
  class: "pageProSize"
}, ta = /* @__PURE__ */ ce({
  __name: "PagePro",
  props: {
    modelValue: { default: 1 },
    total: { default: 0 },
    pageSize: { default: 10 },
    size: { default: "default" },
    pageSizeOpts: { default: () => {
      var t;
      return ((t = Le()) == null ? void 0 : t.pageSizes) || [10, 20, 50, 100];
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.pageShowSizer;
    } },
    transfer: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change", "on-page-size-change"],
  setup(t, { emit: o }) {
    var u;
    const n = o, e = E(), l = t, i = ((u = Le == null ? void 0 : Le()) == null ? void 0 : u.fontSizeBase) || 14, r = E(16), f = j({
      get() {
        return l.modelValue;
      },
      set(v) {
        n("update:modelValue", v), n("on-change", v);
      }
    }), s = j({
      get() {
        return l.pageSize;
      },
      set(v) {
        n("on-page-size-change", v), f.value !== 1 && (f.value = 1);
      }
    }), y = j(() => {
      const v = Qn(String(l.total || 0), i) + r.value + 2;
      return v < 32 ? 32 : v;
    });
    Se(
      y,
      (v) => {
        $e(function() {
          c(v);
        });
      },
      { immediate: !0 }
    );
    function p() {
      var k, V, B;
      const v = (B = (V = (k = e.value) == null ? void 0 : k.$el) == null ? void 0 : V.querySelector) == null ? void 0 : B.call(V, "input");
      if (!v)
        return 16;
      const b = window.getComputedStyle(v), g = b == null ? void 0 : b.paddingLeft, S = b == null ? void 0 : b.paddingRight;
      return !g || !S ? 16 : Number(g.replace("px", "")) + Number(S.replace("px", ""));
    }
    function c(v) {
      var g, S, k;
      const b = (k = (S = (g = e.value) == null ? void 0 : g.$el) == null ? void 0 : S.querySelector) == null ? void 0 : k.call(S, "input");
      b != null && b.style && (b.style.width = `${v}px`);
    }
    return Ge(() => {
      r.value = p();
    }), (v, b) => {
      const g = te("Page"), S = te("Option"), k = te("Select");
      return T(), N("div", {
        class: we(["pagePro", { pageProDefault: l.size === "default" }])
      }, [
        l.showTotal ? (T(), N("span", ao, q(m(x)("r.total") + " ") + q(l.total) + q(" " + m(x)("r.items")), 1)) : ue("", !0),
        Q(g, {
          ref_key: "pageRef",
          ref: e,
          modelValue: m(f),
          "onUpdate:modelValue": b[0] || (b[0] = (V) => Fe(f) ? f.value = V : null),
          "page-size": m(s),
          total: l.total,
          size: l.size,
          "page-size-opts": l.pageSizeOpts,
          disabled: l.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        l.showSizer ? (T(), N("div", no, [
          Q(k, {
            modelValue: m(s),
            "onUpdate:modelValue": b[1] || (b[1] = (V) => Fe(s) ? s.value = V : null),
            size: l.size,
            transfer: l.transfer,
            disabled: l.disabled
          }, {
            default: ne(() => [
              (T(!0), N(ge, null, Ce(l.pageSizeOpts, (V) => (T(), le(S, {
                value: V,
                key: V
              }, {
                default: ne(() => [
                  ke(q(V) + " " + q(m(x)("r.page")), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size", "transfer", "disabled"])
        ])) : ue("", !0)
      ], 2);
    };
  }
}), oo = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, io = { class: "topBtn" }, so = { class: "tableContainer growFlexItem" }, ro = { class: "fullHeight relativeBox" }, uo = { class: "pageContainer" }, ol = /* @__PURE__ */ ce({
  __name: "BtTablePage",
  props: {
    url: { default: "" },
    method: { default: "get" },
    searchData: { default: () => ({}) },
    columns: { default: () => [] },
    dataHandler: {},
    selection: { type: Boolean, default: !1 },
    radio: { type: Boolean, default: !1 },
    selectionFixed: { type: [String, Boolean], default: !1 },
    rowClickSelect: { type: Boolean, default: !0 },
    data: { default: () => [] },
    sortable: { default: "" },
    initData: { type: Boolean, default: !0 },
    highlightRow: { type: Boolean, default: !1 },
    rowClickNum: { default: -1 },
    tableEmptyTdHandle: { type: Boolean, default: !1 },
    noBorderTable: { type: Boolean, default: !1 },
    orderDefault: { default: "desc" },
    orderKey: { default: "id" },
    orderKeyFormat: { default: "underline" },
    getDataLoading: { type: Boolean, default: !1 },
    showTopRow: { type: Boolean, default: !1 },
    lightHead: { type: Boolean, default: !1 },
    noPage: { type: Boolean, default: !1 },
    usePagePro: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.pageShowSizer;
    } },
    pageSize: { default: 10 },
    pageComponentSize: { default: "default" },
    noElevator: { type: Boolean, default: !1 }
  },
  emits: ["on-selection-change", "on-data-change"],
  setup(t, { expose: o, emit: n }) {
    var We;
    const e = n;
    ({ ...xa });
    const l = t, i = ((We = Le()) == null ? void 0 : We.pageSizes) || [10, 20, 50, 100], r = E(l.data), f = E(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || l.pageSize
    ), s = E(1), y = E(0);
    let p = [], c, u, v = E(l.orderKey), b = E(l.orderDefault);
    const g = E(300), S = j(() => {
      for (let G of l.columns)
        if (G != null && G.fixed)
          return !0;
      return !1;
    }), k = j(() => l.selectionFixed || S.value), V = j(() => {
      let G = {
        ...l.searchData,
        current: s.value,
        size: f.value
      };
      return l.sortable === "custom" && (l.orderKeyFormat === "underline" ? G[b.value] = Gl(v.value) : l.orderKeyFormat === "camelcase" && (G[b.value] = Xn(v.value))), G;
    }), B = j(() => {
      let G = l.columns.filter((z) => z && z.type !== "selection");
      if (l.selection || l.radio) {
        let z;
        l.radio ? z = {
          title: " ",
          width: 65,
          render: (ye, be) => Ae(Oa, {
            modelValue: be.row.btChecked
          })
        } : z = {
          type: "selection",
          width: 60
        }, l.selectionFixed && (z.fixed = l.selectionFixed), G.unshift(z);
      }
      return G.forEach((z) => {
        var ye;
        z && (l.sortable === "custom" ? z.key && z.sortable !== !0 && z.sortable !== !1 && (z.sortable = "custom") : z.sortable = !1, z.align || (z.align = ((ye = Le()) == null ? void 0 : ye.btTablePageAlign) || "center"));
      }), G.forEach((z) => {
        z != null && z.key && z.render === void 0 && (z.tooltip ? z.render = ql(z.key, l.tableEmptyTdHandle) : z.render = (ye, be) => {
          let _e = "";
          return z != null && z.key && (_e = be.row[z.key]), l.tableEmptyTdHandle ? Ae("span", _e === "" ? "--" : _e ?? "--") : Ae("span", _e);
        });
      }), G;
    }), I = j({
      get() {
        return r.value.map((G, z) => Object.assign({}, G, {
          btKey: "bt-" + z,
          btChecked: !!G.btChecked
        }));
      },
      set(G) {
        r.value = G;
      }
    }), K = j(() => p.map((G) => G == null ? void 0 : G.id)), R = j(() => p.map((G) => G == null ? void 0 : G.btKey)), M = E(), h = E();
    Se(() => l.searchData, L, { deep: !0 }), Se(
      () => l.orderDefault,
      (G) => {
        b.value = G;
      }
    ), Se(
      () => l.orderKey,
      (G) => {
        v.value = G;
      }
    );
    function L() {
      s.value = 1, Ie();
    }
    function _() {
      l.initData && Ie();
    }
    function Z(G) {
      r.value.unshift(pe(G)), Me(() => {
        var z, ye;
        (ye = (z = M.value) == null ? void 0 : z.clickCurrentRow) == null || ye.call(z, 0);
      }, 100);
    }
    function $(G, z, ye) {
      let be = null;
      if (typeof z == "number" ? be = z : z && (be = u), be !== null) {
        let _e = r.value[be];
        for (let W in G)
          G.hasOwnProperty(W) && (_e[W] = G[W]);
        ye && Me(() => {
          var W, Ve;
          (Ve = (W = M.value) == null ? void 0 : W.clickCurrentRow) == null || Ve.call(W, be);
        }, 10);
      }
    }
    function A(G) {
      r.value.splice(G, 1), Me(() => {
        var z, ye;
        (ye = (z = M.value) == null ? void 0 : z.clickCurrentRow) == null || ye.call(z, 0);
      }, 100);
    }
    function H(G, z) {
      var ye, be;
      G.btChecked && l.radio || (l.selection || l.radio) && l.rowClickSelect && ((be = (ye = M.value) == null ? void 0 : ye.toggleSelect) == null || be.call(ye, z));
    }
    function U(G, z) {
      c = z.btKey, u = Number(z.btKey.split("-")[1]), l.radio && (r.value[u].btChecked = !0);
    }
    function w(G) {
      if (l.radio)
        for (let z of I.value)
          z != null && z.btKey && z.btKey !== c && (r.value[Number(z.btKey.split("-")[1])].btChecked = !1);
      p = G, e("on-selection-change", G);
    }
    function F() {
      return pe(p);
    }
    function D() {
      Ie();
    }
    function X(G) {
      f.value = G, localStorage.setItem("btPageSize", String(G)), s.value === 1 && Ie();
    }
    function ee({ key: G, order: z }) {
      z === "normal" ? (v.value = l.orderKey, b.value = l.orderDefault) : (v.value = G, b.value = z), s.value = 1, Oe();
    }
    function se(G) {
      var ye, be, _e, W, Ve, nt, ot, ft;
      const z = G;
      if (typeof z == "number")
        me(), u = z, c = (be = (ye = I.value) == null ? void 0 : ye[z]) == null ? void 0 : be.btKey, (W = (_e = M.value) == null ? void 0 : _e.clickCurrentRow) == null || W.call(_e, z);
      else if (Array.isArray(z)) {
        if (l.radio || !l.selection)
          return;
        me();
        for (let Xe of z)
          (nt = (Ve = M.value) == null ? void 0 : Ve.clickCurrentRow) == null || nt.call(Ve, Xe);
      } else if (typeof z == "function")
        for (let Xe = 0; Xe < I.value.length; Xe++) {
          const _t = I.value[Xe];
          z(_t) && ((ft = (ot = M.value) == null ? void 0 : ot.clickCurrentRow) == null || ft.call(ot, Xe));
        }
    }
    function me() {
      var G, z;
      if (l.radio) {
        if (R.value.length > 0 && I.value.length > 0) {
          let ye = R.value[0].split("-")[1];
          I.value[ye].btChecked = !1;
        }
      } else
        (z = (G = M.value) == null ? void 0 : G.selectAll) == null || z.call(G, !1);
      p.length > 0 && (p = [], e("on-selection-change", [])), c = null, u = null;
    }
    function he() {
      r.value = [], me(), s.value = 1, y.value = 0;
    }
    function Oe(G, z, ye) {
      return new Promise((be) => {
        G && (b.value = G), z && (v.value = z), l.url ? qe[l.method](l.url, V.value, "", [], { spin: l.getDataLoading }).then((_e) => {
          var Ve, nt;
          let W;
          ye || me(), typeof l.dataHandler == "function" ? W = l.dataHandler(_e) : W = _e, W.data ? (W.data.records || W.data.records === null ? r.value = W.data.records || [] : W.data.page ? (W.data.page.records || W.data.page.records === null) && (r.value = W.data.page.records || []) : W.data.data ? (W.data.data.records || W.data.data.records === null) && (r.value = W.data.data.records || []) : r.value = W.data, y.value = ((Ve = W.data.page) == null ? void 0 : Ve.total) || ((nt = W.data.data) == null ? void 0 : nt.total) || W.data.total || W.total || 0, y.value === 0 && s.value > 1 && r.value && r.value.length === 0 ? s.value = 1 : s.value > 1 && y.value <= (s.value - 1) * f.value && (s.value--, $e(function() {
            Oe(G, z);
          })), e("on-data-change", W), be(W)) : (console.warn("请求返回数据有误，无法使用"), he(), e("on-data-change", W));
        }).catch((_e) => {
          me(), he(), e("on-data-change", _e);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Ie(G, z, ye) {
      l.radio && (G || l.rowClickNum !== -1) ? Oe(z, ye, G).then(() => {
        r.value.length > 0 && Me(() => {
          var be, _e, W, Ve;
          G ? (_e = (be = M.value) == null ? void 0 : be.clickCurrentRow) == null || _e.call(be, u || 0) : (Ve = (W = M.value) == null ? void 0 : W.clickCurrentRow) == null || Ve.call(W, l.rowClickNum);
        }, 10);
      }) : Oe();
    }
    function ae() {
      g.value < 50 ? Me(ae, 100) : Me(xe, 10);
    }
    function xe() {
      var G;
      g.value = ((G = h.value) == null ? void 0 : G.clientHeight) || 0;
    }
    function Pe() {
      var G, z;
      xe(), (z = (G = M.value) == null ? void 0 : G.handleResize) == null || z.call(G);
    }
    const Ze = Dt(Pe, 300);
    return Ge(() => {
      _(), k.value && (ae(), window.addEventListener("resize", Ze));
    }), rl(() => {
      Ze.cancel(), k.value && window.removeEventListener("resize", Ze);
    }), o({
      dataS: I,
      selectedIds: K,
      addRow: Z,
      setRowData: $,
      deleteRow: A,
      getSelected: F,
      selectRow: se,
      clearSelect: me,
      clearTableData: he,
      getTableData: Oe,
      getDataAndClickRow: Ie
    }), (G, z) => {
      const ye = te("Table"), be = te("Page");
      return T(), N("div", oo, [
        fe(P("div", io, [
          Ne(G.$slots, "tableSetting"),
          Ne(G.$slots, "topMsg"),
          Ne(G.$slots, "topBtnGroup")
        ], 512), [
          [ve, l.showTopRow]
        ]),
        P("div", so, [
          P("div", ro, [
            P("div", {
              ref_key: "tableContainerLOI",
              ref: h,
              class: "fullFlowContent"
            }, [
              Q(ye, ct({
                ref_key: "tableRef",
                ref: M
              }, G.$attrs, {
                height: m(k) && m(g) || null,
                class: { noBorderTable: l.noBorderTable, fullHeightTable: !m(k), lightHeadO: l.lightHead },
                columns: m(B),
                data: m(I),
                "highlight-row": l.radio || l.highlightRow,
                onOnSelect: U,
                onOnSelectionChange: w,
                onOnSortChange: ee,
                onOnRowClick: H
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        fe(P("div", uo, [
          l.usePagePro ? (T(), le(ta, {
            key: 0,
            modelValue: m(s),
            "onUpdate:modelValue": z[0] || (z[0] = (_e) => Fe(s) ? s.value = _e : null),
            total: m(y),
            showTotal: l.showTotal,
            pageSize: m(f),
            showSizer: l.showSizer,
            pageSizeOpts: m(i),
            size: l.pageComponentSize,
            onOnChange: D,
            onOnPageSizeChange: X
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (T(), le(be, {
            key: 1,
            modelValue: m(s),
            "onUpdate:modelValue": z[1] || (z[1] = (_e) => Fe(s) ? s.value = _e : null),
            total: m(y),
            pageSize: m(f),
            pageSizeOpts: m(i),
            showSizer: l.showSizer,
            showTotal: l.showTotal,
            size: l.pageComponentSize,
            showElevator: !l.noElevator,
            onOnChange: D,
            onOnPageSizeChange: X
          }, null, 8, ["modelValue", "total", "pageSize", "pageSizeOpts", "showSizer", "showTotal", "size", "showElevator"]))
        ], 512), [
          [ve, !l.noPage]
        ])
      ], 512);
    };
  }
}), la = /* @__PURE__ */ ce({
  __name: "SelectInput",
  props: {
    modelValue: { default: () => ({
      key: null,
      val: null
    }) },
    labelWidth: { default: 160 },
    labelTextAlign: { default: "right" },
    itemWidth: { default: 200 },
    selectOption: { default: () => [] },
    placeholder: {},
    clearable: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(t, { emit: o }) {
    const n = o, e = t, l = j({
      get() {
        var p;
        return (p = e.modelValue) == null ? void 0 : p.key;
      },
      set(p) {
        let c = {
          key: p,
          val: null
        };
        l.value && l.value !== p && (c.beforeKey = l.value), n("update:modelValue", c), n("on-change", c);
      }
    }), i = j({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(p) {
        n("update:modelValue", {
          key: l.value,
          val: p
        });
      }
    }), r = j(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), f = j(() => ({
      width: typeof e.itemWidth == "number" ? e.itemWidth + "px" : e.itemWidth
    }));
    function s(p) {
      p != null && p.target && p.target.value !== void 0 && y({
        key: l.value,
        val: p.target.value
      });
    }
    const y = Dt((p) => {
      n("on-change", p);
    }, 500);
    return Ft(() => {
      y.cancel();
    }), (p, c) => {
      const u = te("Option"), v = te("Select"), b = te("Input");
      return T(), N("div", null, [
        Q(v, {
          modelValue: m(l),
          "onUpdate:modelValue": c[0] || (c[0] = (g) => Fe(l) ? l.value = g : null),
          style: re(m(r)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: ne(() => [
            (T(!0), N(ge, null, Ce(e.selectOption, (g, S) => (T(), le(u, {
              value: g == null ? void 0 : g.val,
              label: g == null ? void 0 : g.label,
              key: "selectInputOp" + (g == null ? void 0 : g.value) + S,
              style: re({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        Q(b, {
          modelValue: m(i),
          "onUpdate:modelValue": c[1] || (c[1] = (g) => Fe(i) ? i.value = g : null),
          placeholder: e.placeholder || m(x)("r.pInput"),
          style: re(m(f)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: s
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
let il = { securityJsCode: "", key: "" };
function co({ securityJsCode: t, key: o }) {
  il.securityJsCode = t, il.key = o;
}
function Ol(t) {
  return il[t];
}
const fo = { class: "searchInputWrap" }, po = { class: "addressListWrap" }, mo = { class: "addressList" }, ho = ["onClick"], yo = { class: "addressName" }, vo = {
  key: 0,
  class: "addressDetail"
}, aa = /* @__PURE__ */ ce({
  __name: "InputMap",
  props: {
    modelValue: { default: () => ({}) },
    width: { default: "100%" },
    height: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    showMap: { type: Boolean, default: !0 },
    inputInMap: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(t, { emit: o }) {
    const n = o, e = t, l = E(""), i = E([]), r = j({
      get() {
        let _;
        return e.modelValue ? e.modelValue.name ? _ = pe(e.modelValue) : _ = {
          ...e.modelValue,
          name: null
        } : _ = {
          name: null
        }, _;
      },
      set(_) {
        n("update:modelValue", pe(_));
      }
    }), f = j(() => Tt(e.width) ? e.width + "px" : e.width), s = j(() => Tt(e.height) ? e.height + "px" : e.height ? e.height : Tt(e.width) ? e.width * 0.66 + "px" : "200px"), y = j(() => ({
      width: f.value,
      position: "relative"
    })), p = j(() => e.inputInMap ? {
      width: f.value,
      height: s.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    } : {
      width: f.value,
      height: s.value,
      marginTop: "6px"
    });
    Se(
      () => e.modelValue,
      (_) => {
        if (_ != null && _.name && (l.value = _.name), e.showMap && _ && _.lng && _.lat) {
          if (!V || !B)
            return;
          h({
            lng: _.lng,
            lat: _.lat,
            name: _.name
          });
        }
      }
    );
    const c = "mapId" + Math.floor(Math.random() * 1e9), u = E(null), v = E(null);
    let b;
    function g() {
      v.value && v.value.clientHeight < 10 || !v.value ? Me(g, 300) : Me(K, 100);
    }
    function S() {
      var _;
      (_ = e.modelValue) != null && _.name && (l.value = e.modelValue.name);
    }
    let k, V, B, I;
    function K() {
      Ht.load({
        key: Ol("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((_) => {
        k = _, V = new k.Map(c).on("complete", () => {
          var Z, $;
          B = new k.Geocoder(), (Z = e.modelValue) != null && Z.lng && (($ = e.modelValue) != null && $.lat) && h({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
        });
      });
    }
    function R() {
      if (l.value.trim()) {
        if (e.showMap && !V) {
          console.warn("地图未就绪，请稍后重试");
          return;
        }
        Ht.load({
          key: Ol("key"),
          version: "2.0",
          plugins: ["AMap.AutoComplete"]
        }).then((_) => {
          I || (I = new _.Autocomplete({
            city: "全国",
            type: ""
          })), I.search(l.value, (Z, $) => {
            Z === "complete" && $.info === "OK" ? i.value = $.tips.slice(0, 10).filter((A) => {
              var H, U;
              return A.name && (A.address || ((H = A.location) == null ? void 0 : H.lng) && ((U = A.location) == null ? void 0 : U.lat));
            }).map((A) => {
              var H, U;
              return {
                name: A.name,
                address: A.address,
                lng: (H = A.location) == null ? void 0 : H.lng,
                lat: (U = A.location) == null ? void 0 : U.lat
              };
            }) : (i.value = [], console.warn("地址搜索失败", $));
          });
        });
      }
    }
    function M(_) {
      l.value = _.name, i.value = [], typeof _.lng == "number" && typeof _.lat == "number" ? (e.showMap && h({
        name: _.name,
        lng: _.lng,
        lat: _.lat
      }), r.value = {
        name: _.name,
        lng: _.lng,
        lat: _.lat
      }, n("on-change", {
        name: _.name,
        lng: _.lng,
        lat: _.lat
      })) : _.name && (e.showMap ? B == null || B.getLocation(_.name, (Z, $) => {
        var A;
        if (Z === "complete" && $.info === "OK" && ((A = $.geocodes) == null ? void 0 : A.length) > 0) {
          const H = $.geocodes[0].location;
          h({
            name: _.name,
            lng: H.lng,
            lat: H.lat
          }), r.value = {
            name: _.name,
            lng: H.lng,
            lat: H.lat
          }, n("on-change", {
            name: _.name,
            lng: H.lng,
            lat: H.lat
          });
        } else
          console.warn("地址地理编码失败", $);
      }) : (r.value = {
        name: _.name
      }, n("on-change", {
        name: _.name
      })));
    }
    function h({ lng: _, lat: Z, name: $ }) {
      if (typeof _ != "number" || typeof Z != "number") {
        console.warn("无效的坐标数据:", { lng: _, lat: Z });
        return;
      }
      if (!V) {
        console.warn("地图实例不存在");
        return;
      }
      V == null || V.clearMap();
      let A = new k.LngLat(_, Z);
      V == null || V.setCenter(A);
      let H = new k.Marker({
        map: V,
        position: A,
        draggable: !0
      });
      L(_, Z), H.on("dragend", () => {
        let U = H.getPosition();
        r.value = {
          name: $ || null,
          lng: U.lng,
          lat: U.lat
        }, L(U.lng, U.lat);
      }), H.on("click", (U) => {
        var w, F;
        b && b.open(V, (F = (w = U == null ? void 0 : U.target) == null ? void 0 : w.getPosition) == null ? void 0 : F.call(w));
      }), V == null || V.setFitView();
    }
    function L(_, Z) {
      const $ = e.inputInMap ? "mapInfoWindowIKJ" : "mapInfoWindowMA";
      B == null || B.getAddress([_, Z], (A, H) => {
        A === "complete" && H.info === "OK" && H.regeocode && H.regeocode.formattedAddress ? b = new k.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="' + $ + '">' + H.regeocode.formattedAddress + "</div>",
          offset: new k.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (b = null, console.warn("地图获取位置信息失败", H));
      });
    }
    return Ge(() => {
      S(), g();
    }), Ft(() => {
      var _;
      V && (V.destroy(), (_ = Ht) == null || _.reset(), V = null, B = null, I = null, b = null);
    }), (_, Z) => (T(), N("div", {
      style: re(m(y)),
      class: we(e.inputInMap ? "containerIKJ" : "containerMapAddress")
    }, [
      P("div", fo, [
        Q(m(Ia), {
          ref_key: "mapInputRef",
          ref: u,
          modelValue: m(l),
          "onUpdate:modelValue": Z[0] || (Z[0] = ($) => Fe(l) ? l.value = $ : null),
          class: we(e.inputInMap && e.showMap ? { mapInputIKJ: !0 } : "searchInput"),
          placeholder: e.placeholder || m(x)("r.search"),
          disabled: e.disabled,
          search: "",
          "enter-button": "",
          onOnEnter: R,
          onOnSearch: R
        }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
        fe(P("div", po, [
          P("div", mo, [
            (T(!0), N(ge, null, Ce(m(i), ($, A) => (T(), N("div", {
              key: A,
              class: "addressItem",
              onClick: (H) => M($)
            }, [
              P("span", yo, q($.name), 1),
              typeof $.address == "string" ? (T(), N("span", vo, q($.address), 1)) : ue("", !0)
            ], 8, ho))), 128))
          ])
        ], 512), [
          [ve, m(i).length > 0]
        ])
      ]),
      fe(P("div", {
        style: re(m(p)),
        ref_key: "mapRef",
        ref: v,
        id: c
      }, null, 4), [
        [ve, e.showMap]
      ])
    ], 6));
  }
});
var Dl;
const na = /* @__PURE__ */ ce({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (Dl = window == null ? void 0 : window.g) != null && Dl.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
    optionVal: { default: "id" },
    optionLabel: { default: "name" },
    optionFilter: {},
    separator: { default: "/" },
    onlyLastVal: { type: Boolean, default: !0 },
    onlyLastLabel: { type: Boolean, default: !0 },
    filterable: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-label-change"],
  setup(t, { emit: o }) {
    const n = o, e = t, l = E([]), i = j({
      get() {
        let p = e.modelValue;
        return Array.isArray(p) ? pe(p) : Tt(p) ? al({
          group: l.value,
          condition: (c) => (c == null ? void 0 : c.value) === p,
          pathKey: "value"
        }) : zl(p) ? p.split(e.separator) : [];
      },
      set(p) {
        if (e.onlyLastVal)
          De(p) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", Lt(p));
        else {
          if (bt(e.modelValue, p))
            return;
          n("update:modelValue", pe(p));
        }
      }
    });
    function r() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      qe.get(e.url).then((p) => {
        var u;
        let c = null;
        (u = p == null ? void 0 : p.data) != null && u.records ? c = p.data.records : p != null && p.data ? c = p.data : p && (c = p), c ? (typeof e.optionFilter == "function" && Y(e.optionFilter) === "Function" && (c = e.optionFilter(c)), l.value = f(c)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function f(p) {
      let c = [];
      for (let u of p) {
        let v = {
          value: u[e.optionVal],
          label: u[e.optionLabel]
        };
        u != null && u.children && !De(u.children) && (v.children = f(u.children)), c.push(v);
      }
      return c;
    }
    function s(p) {
      return e.onlyLastLabel ? Lt(p) : p.join(e.separator);
    }
    function y(p, c) {
      let u = "";
      De(c) || (u = c.map((v) => v == null ? void 0 : v.label).join(e.separator)), n("on-label-change", u);
    }
    return Ge(r), (p, c) => {
      const u = te("Cascader");
      return T(), le(u, {
        data: m(l),
        modelValue: m(i),
        "onUpdate:modelValue": c[0] || (c[0] = (v) => Fe(i) ? i.value = v : null),
        onOnChange: y,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": s,
        placeholder: e.placeholder || m(x)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), oa = /* @__PURE__ */ ce({
  __name: "AlCascaderMC",
  props: {
    modelValue: {},
    level: { default: 2 },
    disabled: { type: Boolean, default: !1 },
    transfer: { type: Boolean, default: !0 },
    filterable: { type: Boolean, default: !0 },
    separator: { default: "/" },
    placeholder: {}
  },
  emits: ["update:modelValue", "on-name-change"],
  setup(t, { emit: o }) {
    const n = o, e = t, l = j({
      get() {
        if (e.modelValue && (typeof e.modelValue == "string" || typeof e.modelValue == "number")) {
          let i = String(e.modelValue).trim();
          if (/^\d+$/.test(i)) {
            let f = i.substring(0, 2) + "0000000000", s = i.substring(0, 4) + "00000000";
            return [f, s, i];
          }
          return i.indexOf(e.separator) !== -1 ? i.split(e.separator) : [i];
        } else return Array.isArray(e.modelValue) ? pe(e.modelValue) : [];
      },
      set(i) {
        if (De(i))
          n("update:modelValue", null), n("on-name-change", null);
        else {
          let r = Lt(i), f = "", s = "";
          if (r && (f = r.code), f && f.length < 12) {
            let y = [...f];
            for (; y.length < 12; )
              y.push(0);
            f = y.join("");
          }
          if (Array.isArray(i) && (s = i.map((y) => y == null ? void 0 : y.name).join(e.separator)), f) {
            if (f === e.modelValue)
              return;
            n("update:modelValue", f);
          }
          s && n("on-name-change", s);
        }
      }
    });
    return (i, r) => (T(), le(m(Ra), ct(i.$attrs, {
      class: "alCascaderMC",
      modelValue: m(l),
      "onUpdate:modelValue": r[0] || (r[0] = (f) => Fe(l) ? l.value = f : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || m(x)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let Ye = 0, yt = [];
function ia(t, o, n, e) {
  var l, i, r;
  e && (e.innerHTML = ((l = t[o]) == null ? void 0 : l.name) ?? "", (i = t[o]) != null && i.name ? e.classList.contains("hide") && e.classList.remove("hide") : e.classList.contains("hide") || e.classList.add("hide")), n && (n.src = ((r = t[o]) == null ? void 0 : r.src) ?? t[o], Ye = o);
}
function Il(t, o, n, e) {
  if (t) {
    let l;
    Ye - 1 < 0 ? l = o.length - 1 : l = Ye - 1, ia(o, l, n, e);
  }
}
function Al(t, o, n, e) {
  if (t) {
    let l;
    Ye + 1 > o.length - 1 ? l = 0 : l = Ye + 1, ia(o, l, n, e);
  }
}
function vt(t, o = 0) {
  var k, V, B, I, K, R, M;
  const n = (...h) => Qe.apply(this, h), e = n("r.closePreview"), l = n("r.fullImg"), i = n("r.last"), r = n("r.next");
  let f, s, y;
  Ye = o;
  const p = Array.isArray(t);
  p ? (s = ((k = t[Ye]) == null ? void 0 : k.src) ?? t[Ye], y = (V = t[Ye]) == null ? void 0 : V.name) : s = t, p && t.length > 1 ? f = `${i} ： ←, ↑, A, W | ${r} ： →, ↓, D, S | ${e} ： Esc` : f = `${e} ： Esc`;
  let c = qt(document.getElementsByTagName("body")), u = document.createElement("div");
  u.setAttribute("class", "fullScreenImgByDom"), u.innerHTML = `<div class='previewInner'><div class='pageFBt left${p && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${i}' ></i></div><img alt='${l}' ><div class='pageFBt right${p && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${r}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${f}</p><p class='pName ${y ? "" : "hide"}'>${y}</p>`;
  const v = u.querySelector("img");
  v && s && (v.src = s);
  function b() {
    let h = qt(document.getElementsByTagName("body"));
    h && u.parentNode && h.removeChild(u), document.removeEventListener("keyup", S);
    const L = yt.findIndex((_) => _.child === u);
    L > -1 && yt.splice(L, 1);
  }
  (I = (B = u.querySelector(".ivu-icon-md-close")) == null ? void 0 : B.addEventListener) == null || I.call(B, "click", b);
  const g = u.querySelector(".pName");
  (K = u.querySelector(".pageFBt.left")) == null || K.addEventListener("click", function() {
    Il(p, t, v, g);
  }), (R = u.querySelector(".pageFBt.right")) == null || R.addEventListener("click", function() {
    Al(p, t, v, g);
  });
  function S(h) {
    const L = yt[yt.length - 1];
    (L == null ? void 0 : L.child) === u && (h.keyCode === 37 || h.keyCode === 38 || h.keyCode === 87 || h.keyCode === 65 ? Il(p, t, v, g) : h.keyCode === 39 || h.keyCode === 40 || h.keyCode === 83 || h.keyCode === 68 ? Al(p, t, v, g) : h.keyCode === 27 && b());
  }
  yt.push({ child: u, keyupHandler: S }), document.addEventListener("keyup", S), (M = c == null ? void 0 : c.appendChild) == null || M.call(c, u), u.focus({ preventScroll: !0 });
}
const go = {
  key: 0,
  class: "previewBoxM"
}, bo = { class: "imgLoading" }, ko = ["src", "alt"], wo = { class: "deleteModal" }, _o = {
  key: 1,
  class: "previewBoxM"
}, Vo = {
  key: 0,
  class: "previewImg"
}, So = ["src", "alt"], Co = { class: "deleteModal" }, To = {
  key: 2,
  class: "customFileListM"
}, Bo = {
  key: 0,
  class: "customFileListItem"
}, Lo = ["onClick", "title"], xo = { class: "btBoxJ" }, Oo = {
  key: 3,
  class: "customFileListM"
}, Io = {
  key: 0,
  class: "customFileListItem"
}, Ao = { class: "listLoading" }, Po = ["onClick", "title"], Ro = { class: "btBoxJ" };
var Nl;
const sa = /* @__PURE__ */ ce({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (Nl = window == null ? void 0 : window.g) != null && Nl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
    data: { default: () => ({
      appId: 0,
      moduleId: 0,
      typeId: 0
    }) },
    manualUpload: { type: Boolean, default: !1 },
    maxSize: { default: 0 },
    length: { default: 0 },
    showUploadList: { type: Boolean, default: !0 },
    withCredentials: { type: Boolean, default: !0 },
    multiple: { type: Boolean, default: !1 },
    format: { default: () => [] },
    showImg: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(t, { emit: o }) {
    const n = o, e = t, l = gt([]), i = gt([]), r = gt([]);
    let f = {};
    const s = E(0), y = j(() => !e.manualUpload && e.showImg && v.value ? "img" : e.manualUpload && e.showImg && v.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !v.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !v.value) ? "list" : ""), p = j(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), c = j({
      //文件集合
      get() {
        return e.manualUpload ? u.value : u.value.map((w) => ({ id: w }));
      },
      set(w) {
        e.manualUpload ? u.value = w || [] : u.value = (w == null ? void 0 : w.map((F) => F == null ? void 0 : F.id)) || [];
      }
    }), u = j({
      //文件ID集合
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((w) => w !== "--") : Y(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(w) {
        if (e.length === 1) {
          let F = qt(w);
          n("update:modelValue", F ?? null), n("on-change", F ?? null);
        } else
          n("update:modelValue", pe(w)), n("on-change", pe(w));
      }
    }), v = j(() => {
      let w;
      if (e.manualUpload ? w = c.value : w = i.value, !w)
        return !1;
      for (let F of w) {
        let D;
        if (e.manualUpload ? D = F == null ? void 0 : F.type : D = F == null ? void 0 : F.mimeType, !D || D && !(ht(D) || D === "loading"))
          return !1;
      }
      return !0;
    }), b = j(() => i.value.filter((w) => ht(w == null ? void 0 : w.mimeType))), g = j(() => b.value.map((w) => ({
      src: e.url + "/" + (w == null ? void 0 : w.id) + "/download?preview=true",
      name: w == null ? void 0 : w.name
    }))), S = j(() => c.value.filter((w) => ht(w == null ? void 0 : w.type)));
    Se(S, async (w) => {
      r.value = await V(w);
    }), Se(
      () => c.value,
      async (w) => {
        if (y.value === "localImg")
          w != null && w.length ? l.value = await V(w) : l.value = [];
        else if (w != null && w.length && y.value !== "localList") {
          let F = pe(w);
          const D = pe(i.value);
          for (let X of F)
            if ((X == null ? void 0 : X.name) === void 0)
              if (X.id) {
                const ee = Xt(D, (se) => (se == null ? void 0 : se.id) === X.id);
                ee ? (X.name = ee.name, X.mimeType = ee.mimeType) : f.hasOwnProperty(X.id) ? (X.name = f[X.id].name, X.mimeType = f[X.id].mimeType) : (X.mimeType = "loading", qe.get(e.url + "/" + X.id).then((se) => {
                  var me, he, Oe, Ie, ae, xe;
                  X.name = ((Oe = (he = (me = se == null ? void 0 : se.data) == null ? void 0 : me.returnValue) == null ? void 0 : he[0]) == null ? void 0 : Oe.name) || x("r.file") + bl(w, X), X.mimeType = ((xe = (ae = (Ie = se == null ? void 0 : se.data) == null ? void 0 : Ie.returnValue) == null ? void 0 : ae[0]) == null ? void 0 : xe.mimeType) || "unknown", _a(i);
                }).catch(() => {
                  X.name = x("r.file") + bl(F, X);
                }));
              } else
                X.name = x("r.unknown");
          i.value = F;
        } else
          i.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function k(w) {
      return (w == null ? void 0 : w.name) || (w == null ? void 0 : w.split) && Lt(w.split("/")) || w;
    }
    async function V(w) {
      let F = [];
      for (let D of w) {
        let X = await Tl(D);
        F.push(X);
      }
      return F;
    }
    function B(w) {
      if (!e.disabled) {
        let F = c.value;
        F == null || F.splice(w, 1), c.value = F, s.value && s.value--;
      }
    }
    function I(w) {
      w != null && w.id && window.open(e.url + "/" + w.id + "/download");
    }
    function K(w) {
      return e.manualUpload ? (w == null ? void 0 : w.type) && ht(w.type) : (w == null ? void 0 : w.id) && w.mimeType && ht(w.mimeType);
    }
    async function R(w) {
      if (e.manualUpload) {
        let F, D;
        if (typeof w == "number" ? (F = w, D = l.value) : w && (F = xt(S.value, (X) => X.size === w.size && X.lastModified === w.lastModified), D = r.value), !D)
          return;
        vt(
          D.map((X, ee) => {
            var se;
            return {
              src: X,
              name: (se = S.value[ee]) == null ? void 0 : se.name
            };
          }),
          F
        );
      } else if (w != null && w.id) {
        const F = xt(b.value, (D) => D.id === w.id);
        vt(g.value, F);
      }
    }
    function M(w) {
      Y(w) === "String" && w.indexOf("http") > -1 ? window.open(w) : Y(w) === "File" && Tl(w).then((F) => {
        Jn(w.name, F);
      });
    }
    function h(w) {
      var F, D;
      if (e.length && s.value >= e.length)
        return ze(x("r.info.title"), x("r.uploadLength", [e.length]), "warning"), !1;
      if (s.value++, e.manualUpload) {
        if (w) {
          let X = ea(w.name);
          if ((F = e.format) != null && F.length && e.format.indexOf(X) < 0)
            return ze(
              x("r.wrongFileType"),
              x("r.supportType") + (((D = e.format) == null ? void 0 : D.length) && String(e.format) || x("r.none")),
              "warning"
            ), s.value--, !1;
          if (e.maxSize && w.size > e.maxSize * 1024)
            return ze(x("r.fileIsBig"), x("r.supportSize") + e.maxSize + "kb", "warning"), s.value--, !1;
          let ee = c.value;
          ee == null || ee.push(w), c.value = ee;
        }
        return !1;
      } else
        return !0;
    }
    function L(w) {
      s.value--, console.warn(w), ze(x("r.uploadError"), "", "error");
    }
    function _(w, F, D) {
      var X, ee, se, me, he, Oe;
      if ((w == null ? void 0 : w.code) === 0) {
        let Ie = c.value;
        F.id = (ee = (X = w.data) == null ? void 0 : X[0]) == null ? void 0 : ee.id, F.name = (me = (se = w.data) == null ? void 0 : se[0]) == null ? void 0 : me.name, F.mimeType = (Oe = (he = w.data) == null ? void 0 : he[0]) == null ? void 0 : Oe.mimeType, f[F.id] = { name: F.name, mimeType: F.mimeType }, Ie == null || Ie.push(F), c.value = Ie;
      } else
        s.value--, ze(x("r.uploadFail"), (w == null ? void 0 : w.message) || "", "error");
    }
    function Z() {
      s.value--, ze(x("r.fileIsBig"), x("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function $() {
      var w;
      s.value--, ze(
        x("r.wrongFileType"),
        x("r.supportType") + (((w = e.format) == null ? void 0 : w.length) && String(e.format) || x("r.none")),
        "warning"
      );
    }
    function A(w) {
      let F = w == null ? void 0 : w.id, D = w == null ? void 0 : w.mimeType;
      F && (Y(D) === "String" && D.indexOf("image") > -1 ? vt(e.url + "/" + F + "/download?preview=true") : window.open(e.url + "/" + F + "/download?preview=true"));
    }
    function H(w) {
      var D, X, ee;
      let F = (ee = (X = (D = w == null ? void 0 : w.response) == null ? void 0 : D.data) == null ? void 0 : X[0]) == null ? void 0 : ee.id;
      U(null, F);
    }
    function U(w, F) {
      if (!(!F && F !== 0) && !e.disabled && u.value.indexOf(F) !== -1) {
        const D = pe(u.value);
        let X = c.value;
        X == null || X.splice(D.indexOf(F), 1), c.value = X, s.value && s.value--;
      }
    }
    return (w, F) => {
      var se, me, he, Oe, Ie;
      const D = te("Button"), X = te("Upload"), ee = te("Icon");
      return T(), N("div", null, [
        Q(X, {
          name: "files",
          action: m(p),
          "before-upload": h,
          "on-error": L,
          "on-success": _,
          "on-exceeded-size": Z,
          "on-preview": A,
          "on-remove": H,
          "on-format-error": $,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && ((se = m(c)) == null ? void 0 : se.length) >= e.length || !!e.disabled
        }, {
          default: ne(() => {
            var ae;
            return [
              Q(D, {
                icon: "md-cloud-upload",
                disabled: e.length > 0 && ((ae = m(c)) == null ? void 0 : ae.length) >= e.length || !!e.disabled
              }, {
                default: ne(() => [
                  ke(q(m(x)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        m(y) === "img" && ((me = m(i)) == null ? void 0 : me.length) > 0 ? (T(), N("div", go, [
          (T(!0), N(ge, null, Ce(m(i), (ae, xe) => (T(), N(ge, {
            key: ae == null ? void 0 : ae.id
          }, [
            !e.manualUpload && (ae == null ? void 0 : ae.id) !== null ? (T(), N("div", {
              key: 0,
              class: we(["previewImg", { previewLoading: ae.mimeType === "loading" }])
            }, [
              fe(P("div", bo, F[0] || (F[0] = [
                P("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ve, ae.mimeType === "loading"]
              ]),
              fe(P("img", {
                src: w.url + "/" + ae.id + "/download?preview=true",
                alt: ae.name
              }, null, 8, ko), [
                [ve, ae.mimeType !== "loading"]
              ]),
              fe(P("div", wo, [
                Q(ee, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: m(x)("r.fView"),
                  onClick: (Pe) => m(vt)(m(g), xe)
                }, null, 8, ["title", "onClick"]),
                Q(ee, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Pe) => U(Pe, ae.id),
                  title: m(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ve, ae.mimeType !== "loading"]
              ])
            ], 2)) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(y) === "localImg" && ((he = m(l)) == null ? void 0 : he.length) > 0 ? (T(), N("div", _o, [
          (T(!0), N(ge, null, Ce(m(l), (ae, xe) => (T(), N(ge, {
            key: "manualImg" + xe
          }, [
            e.manualUpload && ae !== null ? (T(), N("div", Vo, [
              P("img", {
                src: ae,
                alt: "manualImg" + xe
              }, null, 8, So),
              P("div", Co, [
                Q(ee, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (Pe) => R(xe),
                  title: m(x)("r.fView")
                }, null, 8, ["onClick", "title"]),
                Q(ee, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Pe) => B(xe),
                  title: m(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(y) === "localList" && ((Oe = m(c)) == null ? void 0 : Oe.length) > 0 ? (T(), N("div", To, [
          (T(!0), N(ge, null, Ce(m(c), (ae, xe) => (T(), N(ge, {
            key: "manualItem" + xe
          }, [
            e.manualUpload && ae !== null ? (T(), N("p", Bo, [
              ae.name ? (T(), le(ee, {
                key: 0,
                class: "fileTypeIco",
                type: m(Bl)(ae.name),
                size: "20"
              }, null, 8, ["type"])) : ue("", !0),
              P("span", {
                class: we(["upNameT", { previewName: K(ae) }]),
                onClick: (Pe) => M(ae),
                title: m(x)("r.download")
              }, q(k(ae)), 11, Lo),
              P("span", xo, [
                K(ae) ? (T(), le(ee, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => R(ae),
                  title: m(x)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                Q(ee, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => B(xe),
                  title: m(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(y) === "list" && ((Ie = m(i)) == null ? void 0 : Ie.length) > 0 ? (T(), N("div", Oo, [
          (T(!0), N(ge, null, Ce(m(i), (ae, xe) => (T(), N(ge, {
            key: "defaultItem" + xe
          }, [
            !e.manualUpload && ae ? (T(), N("div", Io, [
              fe(P("div", Ao, F[1] || (F[1] = [
                P("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ve, ae.mimeType === "loading"]
              ]),
              fe(Q(ee, {
                type: m(Bl)(ae.name),
                class: "fileTypeIco",
                size: "20"
              }, null, 8, ["type"]), [
                [ve, ae.mimeType !== "loading"]
              ]),
              fe(P("span", {
                class: "upNameT",
                onClick: (Pe) => I(ae),
                title: m(x)("r.download")
              }, q(ae.name || m(x)("r.file") + (xe + 1)), 9, Po), [
                [ve, ae.mimeType !== "loading"]
              ]),
              fe(P("span", Ro, [
                K(ae) ? (T(), le(ee, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => R(ae),
                  title: m(x)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                Q(ee, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => B(xe),
                  title: m(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ve, ae.mimeType !== "loading"]
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0)
      ]);
    };
  }
}), ra = /* @__PURE__ */ ce({
  __name: "MonthRange",
  props: {
    modelValue: { default: () => ["", ""] },
    placement: { default: "bottom-start" },
    placeholder: {},
    options1: {},
    options2: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(t, { emit: o }) {
    const n = o, e = t, l = E(!1), i = E(!1), r = E(!1), f = j({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(S) {
        n("update:modelValue", [S, s.value]), n("on-change", [S, s.value]);
      }
    }), s = j({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(S) {
        n("update:modelValue", [f.value, S]), n("on-change", [f.value, S]);
      }
    }), y = j(
      () => (f.value || "") + ((f.value || s.value) && " - " || "") + (s.value || "")
    ), p = E();
    Ge(() => {
      p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        r.value = !0;
      }), p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        r.value = !1;
      }), p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (S) => {
        var k;
        !e.disabled && (f.value || s.value) && ((k = S == null ? void 0 : S.stopPropagation) == null || k.call(S), b());
      });
    });
    function c() {
      e.disabled || (l.value = !0);
    }
    function u(S) {
      f.value = S, l.value = !1, i.value = !0;
    }
    function v(S) {
      s.value = S, i.value = !1;
    }
    function b() {
      n("update:modelValue", [null, null]), n("on-change", [null, null]);
    }
    function g() {
      l.value = !1, i.value = !1, f.value && s.value === null && (f.value = null);
    }
    return (S, k) => {
      const V = te("DatePicker"), B = te("Icon"), I = te("Input");
      return T(), N("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: p
      }, [
        Q(V, {
          open: m(i),
          modelValue: m(s),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: v,
          onOnClickoutside: g
        }, {
          default: ne(() => k[1] || (k[1] = [
            P("div", { class: "bRoot" }, null, -1)
          ])),
          _: 1,
          __: [1]
        }, 8, ["open", "modelValue", "placement", "options"]),
        Q(V, {
          open: m(l),
          modelValue: m(f),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: u,
          onOnClickoutside: g
        }, {
          default: ne(() => [
            P("div", { onClick: c }, [
              Q(I, {
                class: "aRoot",
                modelValue: m(y),
                "onUpdate:modelValue": k[0] || (k[0] = (K) => Fe(y) ? y.value = K : null),
                readonly: "",
                placeholder: e.placeholder || m(x)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: ne(() => [
                  Q(B, {
                    type: m(r) && (m(f) || m(s)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
                  }, null, 8, ["type"])
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"])
      ], 512);
    };
  }
}), ua = /* @__PURE__ */ ce({
  __name: "Date",
  props: {
    modelValue: {},
    type: { default: "date" },
    options: { default: () => ({}) },
    placement: { default: "bottom-end" },
    placeholder: {},
    clearable: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const n = o, e = t, l = E(), i = "date-c-r-" + Math.floor(Math.random() * 1e7 + 1e7), r = E({}), f = j({
      get() {
        return e.modelValue;
      },
      set(p) {
        n("update:modelValue", p);
      }
    }), s = j(() => {
      if (Y(e.options) === "Object") {
        const { disabledDate: p, ...c } = e.options;
        return c;
      }
      return {};
    });
    function y(p) {
      var u, v;
      const c = p.target;
      ((v = (u = c.classList) == null ? void 0 : u.contains) != null && v.call(u, "ivu-date-picker-cells-cell") || c.tagName === "EM") && Me(() => {
        var g, S;
        const b = (S = (g = l == null ? void 0 : l.value) == null ? void 0 : g.$refs.pickerPanel) == null ? void 0 : S.rangeState;
        if (b) {
          const k = b.from, V = b.selecting;
          r.value = {
            ...s.value,
            disabledDate: (B) => {
              var I;
              return typeof ((I = e.options) == null ? void 0 : I.disabledDate) == "function" ? e.options.disabledDate(B, k, V) : !1;
            }
          };
        }
      }, 1);
    }
    return Se(
      () => e.options,
      (p) => {
        r.value = p;
      },
      { immediate: !0 }
    ), Ge(() => {
      var c;
      const p = document.getElementsByClassName(i)[0];
      (c = p == null ? void 0 : p.addEventListener) == null || c.call(p, "click", y, !0);
    }), (p, c) => {
      const u = te("DatePicker");
      return T(), le(u, {
        ref_key: "dateC",
        ref: l,
        modelValue: m(f),
        "onUpdate:modelValue": c[0] || (c[0] = (v) => Fe(f) ? f.value = v : null),
        type: p.type,
        options: m(r),
        placement: p.placement,
        placeholder: p.placeholder,
        clearable: p.clearable,
        disabled: p.disabled,
        editable: !1,
        transferClassName: i,
        transfer: ""
      }, null, 8, ["modelValue", "type", "options", "placement", "placeholder", "clearable", "disabled"]);
    };
  }
}), Mo = { class: "editor-pro-root" }, da = /* @__PURE__ */ ce({
  __name: "EditorPro",
  props: {
    modelValue: { default: "<p></p>" },
    toolbarConfig: { default: () => ({}) },
    editorConfig: { default: () => ({}) },
    mode: { default: "default" },
    height: { default: 300 },
    imgUploadUrl: {},
    videoUploadUrl: {},
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(t, { emit: o }) {
    const n = o, e = t, l = gt(), i = j({
      get() {
        return e.modelValue;
      },
      set(p) {
        n("update:modelValue", p), n("on-change", p);
      }
    }), r = j(
      () => Object.assign(
        {
          placeholder: e.placeholder || x("r.pInput"),
          insertKeys: {
            index: 31,
            keys: ["previewX"]
          }
        },
        e.toolbarConfig
      )
    ), f = j(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(p, c) {
                let u = new FormData();
                u.append("files", p);
                const v = p.name, b = e.imgUploadUrl ?? "/node-serve/file";
                qe.post(b, u, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((g) => {
                  if (g && g.data)
                    if (Array.isArray(g.data))
                      for (let S of g.data) {
                        const k = b + "/" + (S == null ? void 0 : S.id) + "/download";
                        c(k, v, k);
                      }
                    else {
                      const S = b + "/" + g.data.id + "/download";
                      c(S, v, S);
                    }
                }).catch(() => {
                  ze(x("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(p, c) {
                let u = new FormData();
                u.append("files", p);
                const v = e.videoUploadUrl ?? "/node-serve/file";
                qe.post(v, u, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((b) => {
                  if (b && b.data)
                    if (Array.isArray(b.data))
                      for (let g of b.data) {
                        const S = v + "/" + (g == null ? void 0 : g.id) + "/download";
                        c(S);
                      }
                    else {
                      const g = v + "/" + b.data.id + "/download";
                      c(g);
                    }
                }).catch(() => {
                  ze(x("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), s = j(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function y(p) {
      l.value = p;
    }
    return Se(
      () => e.disabled,
      (p) => {
        p ? l.value.disable() : l.value.enable();
      }
    ), rl(() => {
      l.value && l.value.destroy();
    }), (p, c) => (T(), N("div", Mo, [
      fe(Q(m(Ma), {
        class: "editor-pro-toolbar",
        editor: m(l),
        defaultConfig: m(r),
        mode: p.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ve, !p.disabled]
      ]),
      Q(m($a), {
        class: "editor-pro-editor",
        modelValue: m(i),
        "onUpdate:modelValue": c[0] || (c[0] = (u) => Fe(i) ? i.value = u : null),
        defaultConfig: m(f),
        mode: p.mode,
        onOnCreated: y,
        style: re(m(s))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), $o = {
  key: 19,
  class: "formInfoTxtXN"
}, Fo = {
  key: 20,
  class: "formTitleTxtXN"
}, Do = {
  key: 21,
  style: { display: "inline-block", width: "4px" }
}, Pl = /* @__PURE__ */ ce({
  __name: "ItemR",
  props: {
    item: {},
    itemStyle: {},
    valGroup: {},
    tempKeys: {},
    inline: { type: Boolean },
    disabled: { type: Boolean },
    labelWidth: {},
    itemWidth: {},
    mgrUrl: {},
    uploadUrl: {}
  },
  emits: [
    "item-change",
    "re-validate",
    "select-input-change",
    "al-name-change",
    "async-label-change"
  ],
  setup(t, { emit: o }) {
    const n = o, e = t, l = j(() => {
      var c;
      if (e.inline)
        return e.itemWidth;
      {
        const u = (c = e.itemStyle) == null ? void 0 : c.width;
        if (u) {
          if (u.indexOf("%") > -1) {
            const v = Number(u.replace("%", ""));
            return window.isNaN(v) ? `calc(100% - ${e.labelWidth}px)` : `calc((100% - ${e.labelWidth}px)*${v / 100})`;
          } else if (u.indexOf("px") > -1)
            return u;
          return `calc(100% - ${e.labelWidth}px)`;
        }
        return `calc(100% - ${e.labelWidth}px)`;
      }
    });
    function i(c) {
      return {
        withInfo: !!c.info,
        withTitle: !!c.title,
        inlineFormItemXN: e.inline,
        noLabel: c.type === "selectInput",
        [c.class]: c.class,
        slotInput: c.slotPosition
      };
    }
    function r(c, u) {
      n("item-change", {
        e: c,
        root: u
      });
    }
    function f(c, u) {
      n("re-validate", {
        e: c,
        root: u
      });
    }
    function s(c) {
      n("select-input-change", c);
    }
    function y(c, u) {
      n("al-name-change", {
        name: c,
        root: u
      });
    }
    function p(c, u) {
      n("async-label-change", {
        label: c,
        root: u
      });
    }
    return (c, u) => {
      const v = te("InputNumber"), b = te("Input"), g = te("Option"), S = te("Select"), k = te("Radio"), V = te("Icon"), B = te("RadioGroup"), I = te("Checkbox"), K = te("CheckboxGroup"), R = te("TimePicker"), M = te("FormItem");
      return e.item ? (T(), le(M, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: we(["relativeBox", i(e.item)])
      }, {
        default: ne(() => [
          e.item.type === "txt" ? (T(), N("div", {
            key: 0,
            style: re([e.itemStyle, { display: "inline-block" }]),
            class: we({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, q(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (T(), le(v, {
            key: 1,
            style: re(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[0] || (u[0] = (h) => e.tempKeys[e.item.tempKey] = h),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || m(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: u[1] || (u[1] = (h) => r(h, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (T(), le(b, {
            key: 2,
            style: re(c.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[2] || (u[2] = (h) => e.tempKeys[e.item.tempKey] = h),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || m(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[3] || (u[3] = (h) => r(h, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, dt({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: ne(() => [
                Ne(c.$slots, e.item.slotName, {
                  valGroup: e.valGroup
                })
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: ne(() => [
                P("span", null, q(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: ne(() => [
                P("span", null, q(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (T(), le(S, {
            key: 3,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[4] || (u[4] = (h) => c.tempKeys[e.item.tempKey] = h),
            style: re(c.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || m(x)("r.pSelect"),
            onOnChange: u[5] || (u[5] = (h) => f(h, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: ne(() => [
              (T(!0), N(ge, null, Ce(e.item.options, (h, L) => (T(), le(g, {
                value: h.val,
                label: h.label || h.val,
                key: "option-" + e.item.key + L,
                disabled: !!h.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (T(), le(la, {
            key: 4,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[6] || (u[6] = (h) => c.tempKeys[e.item.tempKey] = h),
            "label-width": c.labelWidth,
            "item-width": m(l),
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || m(x)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: s
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (T(), le(oa, {
            key: 5,
            style: re(c.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[7] || (u[7] = (h) => e.valGroup[e.item.key] = h),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || m(x)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: u[8] || (u[8] = (h) => y(h, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (T(), le(na, {
            key: 6,
            style: re(c.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[9] || (u[9] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || c.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || m(x)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: u[10] || (u[10] = (h) => p(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (T(), le(k, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[11] || (u[11] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: u[12] || (u[12] = (h) => r(h, e.item))
          }, {
            default: ne(() => [
              ke(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (T(), le(B, {
            key: 8,
            style: re(c.itemStyle),
            onOnChange: u[13] || (u[13] = (h) => f(h, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[14] || (u[14] = (h) => c.tempKeys[e.item.tempKey] = h)
          }, {
            default: ne(() => [
              (T(!0), N(ge, null, Ce(e.item.options, (h) => (T(), le(k, {
                key: "radioItem" + h.val,
                label: h.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: ne(() => [
                  h.icon && !e.item.buttonType ? (T(), le(V, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : ue("", !0),
                  P("span", null, q(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (T(), le(I, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[15] || (u[15] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled,
            onOnChange: u[16] || (u[16] = (h) => r(h, e.item))
          }, {
            default: ne(() => [
              ke(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (T(), le(K, {
            key: 10,
            style: re(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[17] || (u[17] = (h) => c.tempKeys[e.item.tempKey] = h),
            onOnChange: u[18] || (u[18] = (h) => f(h, e.item))
          }, {
            default: ne(() => [
              (T(!0), N(ge, null, Ce(e.item.options, (h) => (T(), le(I, {
                key: "checkItem" + h.val,
                label: h.val,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: ne(() => [
                  h.icon ? (T(), le(V, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : ue("", !0),
                  P("span", null, q(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (T(), le(b, {
            key: 11,
            type: "textarea",
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[19] || (u[19] = (h) => c.tempKeys[e.item.tempKey] = h),
            autosize: e.item.autosize || { minRows: 2 },
            style: re(c.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || m(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[20] || (u[20] = (h) => r(h, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (T(), le(sa, {
            key: 12,
            style: re(c.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[21] || (u[21] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || c.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            multiple: !!e.item.multiple,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: u[22] || (u[22] = (h) => f(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "multiple", "disabled", "with-credentials"])) : e.item.type === "date" ? (T(), le(ua, {
            key: 13,
            style: re(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[23] || (u[23] = (h) => c.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placeholder: e.item.placeholder || m(x)("r.selectDate"),
            options: e.item.dateOptions || {},
            "time-picker-options": c.item.timePickerOptions || {},
            clearable: e.item.clearable !== !1,
            onOnChange: u[24] || (u[24] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "time-picker-options", "clearable"])) : e.item.type === "time" ? (T(), le(R, {
            key: 14,
            style: re(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[25] || (u[25] = (h) => c.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(x)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: u[26] || (u[26] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (T(), le(ra, {
            key: 15,
            style: re(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[27] || (u[27] = (h) => c.tempKeys[e.item.tempKey] = h),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(x)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: u[28] || (u[28] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (T(), le(da, {
            key: 16,
            class: "inlineBlock",
            style: re(c.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[29] || (u[29] = (h) => e.valGroup[e.item.key] = h),
            placeholder: e.item.placeholder || m(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: u[30] || (u[30] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (T(), le(aa, {
            key: 17,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[31] || (u[31] = (h) => c.tempKeys[e.item.tempKey] = h),
            style: re(c.itemStyle),
            placeholder: e.item.placeholder || m(x)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            "input-in-map": e.item.inputInMap !== !1,
            onOnChange: u[32] || (u[32] = (h) => r(h, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height", "input-in-map"])) : e.item.type === "custom" ? (T(), N("div", {
            key: 18,
            class: "inlineBlock",
            style: re(c.itemStyle)
          }, [
            Ne(c.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ue("", !0),
          e.item.info ? (T(), N("div", $o, q(e.item.info), 1)) : ue("", !0),
          e.item.title ? (T(), N("div", Fo, q(e.item.title), 1)) : ue("", !0),
          e.inline ? ue("", !0) : (T(), N("span", Do))
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : ue("", !0);
    };
  }
}), No = { class: "inlineBlock" }, Kt = /* @__PURE__ */ ce({
  __name: "FormR",
  props: {
    formData: { default: () => [] },
    formRules: { default: () => ({}) },
    showMessage: { type: Boolean, default: !0 },
    labelWidth: { default: 160 },
    contentWidth: { default: "70%" },
    itemWidth: { default: 200 },
    inline: { type: Boolean, default: !1 },
    showLongOkBt: { type: Boolean, default: !1 },
    longOkBtTxt: {},
    showInlineOkBt: { type: Boolean, default: !1 },
    inlineOkBtTxt: {},
    showInlineClearBt: { type: Boolean, default: !1 },
    inlineClearBtTxt: {},
    disabled: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 },
    trim: { type: Boolean, default: !0 },
    teamClass: { default: "formTeamBox" }
  },
  emits: ["on-item-change", "on-options-request-back", "on-reset", "on-re-render", "on-submit"],
  setup(t, { expose: o, emit: n }) {
    var yl, vl;
    const e = n, l = t, i = E(null), r = E({}), f = E([]), s = E({});
    let y = [];
    const p = ((yl = window == null ? void 0 : window.g) == null ? void 0 : yl.mgrURL) ?? "";
    let c = E([]), u = [];
    const v = E(!1), b = E(Math.random() * 1e8 + 1e3), g = (vl = window == null ? void 0 : window.g) != null && vl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let S = !1;
    const k = j(() => Array.isArray(l.formData.length ? l.formData[0] : !1)), V = j(
      () => l.inline ? {
        width: l.itemWidth + l.labelWidth + "px"
      } : {}
    ), B = j(
      () => l.inline ? {
        width: "100%"
      } : { width: l.contentWidth }
    ), I = j(() => {
      let d = pe(l.formRules);
      for (let a in d)
        if (d.hasOwnProperty(a))
          if (Array.isArray(d[a]))
            for (let O of d[a])
              O && O && !(O.message || O.validator) && (O.message = x("r.required"));
          else Y(d[a]) === "Object" && (d[a].message || d[a].validator || (d[a].message = x("r.required")));
      return d;
    }), K = j(() => {
      let d = [];
      if (k.value)
        for (let a of f.value)
          h(a, d);
      else
        h(f.value, d);
      return d.concat(c.value, u);
    }), R = j(() => {
      let d = [];
      if (k.value)
        for (let a of f.value)
          L(a, d);
      else
        L(f.value, d);
      return d;
    });
    function M(d) {
      return d.filter((a) => a == null ? void 0 : a.slotName);
    }
    function h(d, a) {
      for (let O of d)
        if ((O == null ? void 0 : O.showing) === !0 && O.key && O.type !== "selectInput" && (a.push(O.key), O.key2 && a.push(O.key2), O.collectLabel)) {
          if (!Array.isArray(O.collectLabel) && O.collectLabel.key)
            a.push(O.collectLabel.key);
          else if (Array.isArray(O.collectLabel))
            for (let C of O.collectLabel)
              C.key && a.push(C.key);
        }
    }
    function L(d, a) {
      for (let O of d)
        (O == null ? void 0 : O.showing) === !0 && O.key && O.type !== "selectInput" && a.push(O.key);
    }
    function _() {
      return new Promise((d) => {
        A(), $().then(() => {
          e("on-reset"), d(!0);
        });
      });
    }
    function Z() {
      return new Promise((d) => {
        for (let a of y)
          a();
        y = [], s.value = {}, ae(), me(), $().then(() => {
          e("on-re-render"), d(!0);
        });
      });
    }
    function $() {
      return new Promise((d) => {
        b.value = Math.floor(Math.random() * 1e8 + 1e3), $e(function() {
          d(!0);
        });
      });
    }
    function A() {
      let d = w();
      for (let a in r.value)
        if (r.value.hasOwnProperty(a))
          if (Re(d[a]))
            r.value[a] = d[a];
          else if (Array.isArray(r.value[a]))
            r.value[a] = [];
          else if (Y(r.value[a]) === "Boolean")
            r.value[a] = !1;
          else {
            const O = Bt(l.formData, (C) => (C == null ? void 0 : C.key) === a);
            O && (O.type === "editor" || O.type === "editorPro") ? r.value[a] = "" : r.value[a] = null;
          }
      H(d);
    }
    function H(d) {
      for (let a in s.value)
        s.value.hasOwnProperty(a) && (Re(d[a]) ? s.value[a] = d[a] : Array.isArray(s.value[a]) ? s.value[a] = [] : Y(s.value[a]) === "Object" && s.value[a].hasOwnProperty("key") && s.value[a].hasOwnProperty("val") ? s.value[a].val = null : s.value[a] = null);
    }
    function U(d) {
      let a = w();
      Re(a[d]) ? s.value[d] = a[d] : Array.isArray(s.value[d]) ? s.value[d] = [] : s.value[d] = null;
    }
    function w() {
      let d = {};
      if (k.value)
        for (let a of f.value)
          F(a, d);
      else
        F(f.value, d);
      return d;
    }
    function F(d, a) {
      for (let O of d)
        O.tempKey && Re(O.defaultVal) && se(O, a), O.key && Re(O.defaultVal) && (a[O.key] = O.defaultVal), O.key2 && Re(O.defaultVal2) && (a[O.key2] = O.defaultVal2);
    }
    function D(d) {
      if (d.show) {
        if (Y(d.show) === "Object")
          return ee(d, X(d.show));
        if (Array.isArray(d.show))
          if (d.showOr) {
            for (let a of d.show)
              if (X(a) === !0)
                return ee(d, !0);
            return ee(d, !1);
          } else {
            for (let a of d.show)
              if (X(a) === !1)
                return ee(d, !1);
            return ee(d, !0);
          }
        else if (typeof d.show == "function")
          return ee(d, d.show(r.value));
      } else d.showing || (d.showing = !0);
      return !0;
    }
    function X(d) {
      if (d.reg && typeof d.reg.test == "function")
        return d.reg.test(r.value[d.key]);
      if (Array.isArray(d.val)) {
        for (let a of d.val) {
          if ((r.value[d.key] || r.value[d.key] === 0 || r.value[d.key] === !1) && a === ".")
            return !0;
          if (r.value[d.key] === a)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function ee(d, a) {
      return !(d != null && d.showing) && a && (d != null && d.key) ? (d.showing = a, d.defaultVal !== void 0 && (d.tempKey ? (s.value[d.tempKey] === null || s.value[d.tempKey] === void 0 || (Y(s.value[d.tempKey]) === "Object" || Array.isArray(s.value[d.tempKey])) && De(s.value[d.tempKey])) && se(d, s.value) : (r.value[d.key] === null || r.value[d.key] === void 0) && (r.value[d.key] = d.defaultVal), d.key2 && d.deafultVal2 !== void 0 && (r.value[d.key2] === null || r.value[d.key2] === void 0) && d.type !== "inputMap" && (r.value[d.key2] = d.defaultVal2)), d.tempKey && Pe(s.value[d.tempKey], d)) : d.showing = a, a;
    }
    function se(d, a) {
      if (d != null && d.type)
        switch (d.type) {
          case "selectInput":
            a[d.tempKey] = {
              key: d.key,
              val: d.defaultVal
            };
            break;
          case "inputMap":
            d.key3 ? a[d.tempKey] = {
              lng: d.defaultVal || 0,
              lat: d.defaultVal2 || 0,
              name: d.defaultVal3 || ""
            } : a[d.tempKey] = {
              lng: d.defaultVal || 0,
              lat: d.defaultVal2 || 0
            };
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            a[d.tempKey] = d.defaultVal;
            break;
          case "radioGroup":
          case "select":
          case "checkboxGroup":
            d.booleanVal ? a[d.tempKey] = d.defaultVal ? 1 : 0 : a[d.tempKey] = d.defaultVal;
            break;
          case "date":
          case "time":
          case "monthRange":
            d.dateType === "date" || d.dateType === "datetime" || d.dateType === "time" || d.dateType === "year" || d.dateType === "month" ? a[d.tempKey] = d.defaultVal : (d.dateType === "daterange" || d.dateType === "datetimerange" || d.dateType === "timerange" || d.type === "monthRange") && (a[d.tempKey] = d.defaultVal && d.defaultVal2 && [d.defaultVal, d.defaultVal2] || []);
            break;
        }
    }
    function me() {
      let d = pe(l.formData);
      if (k.value)
        for (let a of d)
          he(a);
      else
        he(d);
      f.value = d;
    }
    function he(d) {
      for (let a of d)
        if (a != null && a.type)
          switch (a.type) {
            case "selectInput":
              const O = "selectInput" + Math.floor(Math.random() * 1e8);
              a.tempKey = O, s.value[O] = E({
                key: a.key || null,
                val: a.defaultVal || null
              }), y.push(
                Se(
                  () => s.value[O],
                  (J) => {
                    Pe(J, a);
                  },
                  { immediate: !0, flush: "sync" }
                )
              );
              break;
            case "inputMap":
              const C = "inputMap" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = C, a.key3 ? s.value[C] = a.defaultVal !== void 0 && a.defaultVal2 !== void 0 ? {
                lng: a.defaultVal,
                lat: a.defaultVal2,
                name: a.defaultVal3 || ""
              } : {
                lng: null,
                lat: null,
                name: null
              } : s.value[C] = a.defaultVal !== void 0 && a.defaultVal2 !== void 0 ? {
                lng: a.defaultVal,
                lat: a.defaultVal2
              } : {
                lng: null,
                lat: null
              }, y.push(
                Se(
                  () => s.value[C],
                  (J) => {
                    Pe(J, a);
                  },
                  { immediate: !0, flush: "sync" }
                )
              ));
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              const oe = "inputT" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = oe, s.value[oe] = a.defaultVal !== void 0 ? a.defaultVal : null, y.push(
                Se(
                  () => s.value[oe],
                  (J) => {
                    Pe(J, a);
                  },
                  { immediate: !0, flush: "sync" }
                )
              ));
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              if (a.options || (a.options = []), (a.type === "checkboxGroup" || a.type === "radioGroup") && (a.options = E(pe(a.options))), a.asyncOption)
                if (a.changeOption)
                  if (Array.isArray(a.changeOption)) {
                    let J = !0;
                    for (let ie of a.changeOption)
                      if (!ie.valKey || !ie.key) {
                        J = !1;
                        break;
                      }
                    J ? y.push(
                      Se(
                        () => {
                          let ie = "";
                          if (Array.isArray(a.changeOption))
                            for (let Be of a.changeOption) {
                              let Ue = r.value[Be.valKey];
                              if (Ue && !Array.isArray(Ue) || Array.isArray(Ue) && Ue.length || Ue === 0 || Ue === !1)
                                ie += "&" + Be.key + "=" + Ue;
                              else if (!Be.notRequired)
                                return !1;
                            }
                          return ie;
                        },
                        (ie) => {
                          let Be = pe(s.value[a.tempKey]);
                          if (s.value[a.tempKey] = null, ie && a.optionUrl) {
                            let Ue = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                            Oe((Ue + ie).replace(/\?&/, "?"), a, Be);
                          } else
                            a.localOption ? Je(a, "options", [...a.localOption]) : Je(a, "options", []), Re(Be) && Ie(Be, a);
                        },
                        {
                          immediate: !0
                        }
                      )
                    ) : a.localOption ? Je(a, "options", [...a.localOption]) : Je(a, "options", []);
                  } else typeof a.changeOption == "object" ? a.changeOption.valKey && a.changeOption.key && y.push(
                    Se(
                      () => typeof a.changeOption == "object" && !Array.isArray(a.changeOption) ? r.value[a.changeOption.valKey] : !1,
                      (J) => {
                        let ie = pe(s.value[a.tempKey]);
                        if (s.value[a.tempKey] = null, (J && !Array.isArray(J) || Array.isArray(J) && J.length || J === 0 || J === !1) && a.optionUrl && typeof a.changeOption == "object" && !Array.isArray(a.changeOption)) {
                          let Be = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                          Oe((Be + "&" + a.changeOption.key + "=" + J).replace(/\?&/, "?"), a, ie);
                        } else
                          a.localOption ? Je(a, "options", [...a.localOption]) : Je(a, "options", []), Re(ie) && Ie(ie, a);
                      },
                      { immediate: !0 }
                    )
                  ) : Y(a.changeOption) === "Boolean" && y.push(
                    Se(
                      () => {
                        const J = Bt(l.formData, (ie) => (ie == null ? void 0 : ie.key) === a.key);
                        return J.optionUrl = Va(J.optionUrl), J.optionUrl.value;
                      },
                      (J) => {
                        let ie = pe(s.value[a.tempKey]);
                        s.value[a.tempKey] = null, J ? Oe(J, a, ie) : (a.localOption ? Je(a, "options", [...a.localOption]) : Je(a, "options", []), Re(ie) && Ie(ie, a));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
                else a.optionUrl && Oe(a.optionUrl, a);
              else Y(a.borrowOption) === "String" && $e(function() {
                a.options = Bt(f.value, (J) => (J == null ? void 0 : J.key) === a.borrowOption).options;
              });
              const de = "opEle" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = de, a.type === "select" && a.multiple || a.type === "checkboxGroup" ? s.value[de] = a.defaultVal !== void 0 ? a.defaultVal : [] : a.booleanVal ? s.value[de] = a.defaultVal !== void 0 ? a.defaultVal ? 1 : 0 : null : s.value[de] = a.defaultVal !== void 0 ? a.defaultVal : null, y.push(
                Se(
                  () => s.value[de],
                  (J) => {
                    Pe(J, a);
                  },
                  {
                    immediate: !0,
                    flush: "sync"
                  }
                )
              ));
              break;
            case "date":
            case "time":
            case "monthRange":
              const Te = "date" + Math.floor(Math.random() * 1e8);
              a.tempKey = Te, a.dateType === "date" || a.dateType === "datetime" || a.dateType === "time" || a.dateType === "year" || a.dateType === "month" ? s.value[Te] = a.defaultVal || null : (a.dateType === "daterange" || a.dateType === "datetimerange" || a.dateType === "timerange" || a.type === "monthRange") && (s.value[Te] = a.defaultVal && a.defaultVal2 && [a.defaultVal, a.defaultVal2] || []), y.push(
                Se(
                  () => s.value[Te],
                  (J) => {
                    Pe(J, a);
                  },
                  { flush: "sync" }
                )
              );
              break;
          }
    }
    function Oe(d, a, O) {
      qe.get(d).then((C) => {
        var Te;
        let oe;
        if (Fe(a.options) ? oe = a.options.value : oe = a.options, !oe)
          return;
        let de = ((Te = C == null ? void 0 : C.data) == null ? void 0 : Te.records) || (C == null ? void 0 : C.data) || C || [];
        Array.isArray(de) ? (a.optionFilter && Y(a.optionFilter) === "Function" && (de = a.optionFilter(de)), a.optionLabel && a.optionVal ? (oe.length = 0, oe.push(
          ...de.map((J) => {
            let ie;
            if (Array.isArray(a.optionLabel)) {
              let Be = "";
              a.optionLabel.forEach((Ue, gl) => {
                let Ut = String(J[Ue]);
                gl === 1 ? Be += "（" + Ut : gl > 1 ? Be += "、" + Ut : Be += Ut;
              }), ie = {
                label: Be + "）",
                val: a.optionVal && J[a.optionVal]
              };
            } else
              ie = {
                label: a.optionLabel && J[a.optionLabel],
                val: a.optionVal && J[a.optionVal]
              };
            if (a.collectLabel)
              if (Array.isArray(a.collectLabel))
                for (let Be of a.collectLabel)
                  Be.valKey && Be.valKey !== "label" && (ie[Be.valKey] = J[Be.valKey]);
              else
                a.collectLabel.valKey && a.collectLabel.valKey !== "label" && (ie[a.collectLabel.valKey] = J[a.collectLabel.valKey]);
            if (ie.val !== null && ie.val !== void 0)
              return ie;
          })
        )) : (oe.length = 0, oe.push(...de))) : oe.length = 0, a.localOption && oe.unshift(...a.localOption), Re(O) && Ie(O, a), a.disableOptionByOthers && (Y(a.disableOptionByOthers) === "String" ? y.push(
          Se(
            () => r.value[a.disableOptionByOthers],
            (J) => {
              if (U(a.tempKey), !!oe) {
                for (let ie of oe)
                  ie.disabled && (ie.disabled = !1);
                if (J || J === 0 || J === !1)
                  for (let ie of oe)
                    ie.val === J && (ie.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(a.disableOptionByOthers) && y.push(
          Se(
            () => a.disableOptionByOthers.filter((J) => J).map((J) => r.value[J]),
            (J) => {
              if (U(a.tempKey), !!oe) {
                for (let ie of oe)
                  ie.disabled && (ie.disabled = !1);
                if (J) {
                  for (let ie of oe)
                    for (let Be = 0; Be < J.length; Be++)
                      if (ie.val === J[Be]) {
                        ie.disabled = !0, J.splice(Be, 1);
                        break;
                      }
                }
              }
            },
            {
              immediate: !0
            }
          )
        )), e(
          "on-options-request-back",
          JSON.parse(
            JSON.stringify({
              e: a,
              valGroup: r.value
            })
          )
        );
      }).catch(() => {
        console.warn("拉取选项出错");
      });
    }
    function Ie(d, a) {
      Array.isArray(Et(a.options)) && xt(Et(a.options), { val: d }) !== -1 && (s.value[a.tempKey] = d);
    }
    function ae() {
      if (r.value = {}, k.value)
        for (let d of l.formData)
          xe(d);
      else
        xe(l.formData);
    }
    function xe(d) {
      for (let a of d)
        a != null && a.key && (a.type === "checkboxGroup" || a.type === "select" && a.multiple ? r.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : [] : a.type === "editor" || a.type === "editorPro" ? r.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : "" : (r.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : null, a.key2 && (r.value[a.key2] = a.defaultVal2 !== void 0 && a.show === void 0 ? a.defaultVal2 : null)));
    }
    function Pe(d, a) {
      if (a != null && a.showing)
        switch (a.type) {
          case "selectInput":
            d && (d.beforeKey && delete r.value[d.beforeKey], r.value[d.key] = d.val);
            break;
          case "inputMap":
            if (!a.key || !a.key2)
              return;
            d ? (r.value[a.key] = d.lng, r.value[a.key2] = d.lat, a.key3 && (r.value[a.key3] = d.name)) : (r.value[a.key] = null, r.value[a.key2] = null, a.key3 && (r.value[a.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!a.key)
              return;
            if (d || d === 0) {
              let oe = /^-?\d+(.\d+)?$/;
              a.numberVal && oe.test(d) ? r.value[a.key] = Number(d) : r.value[a.key] = d;
            } else
              r.value[a.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!a.key)
              return;
            if (a.booleanVal && !a.multiple ? r.value[a.key] = d === void 0 || d === "" || d === null ? null : !!d : a.multiple || a.type === "checkboxGroup" ? r.value[a.key] = Object.assign([], d) : r.value[a.key] = d, a.collectLabel) {
              const oe = Ze(a, d);
              if (Array.isArray(a.collectLabel)) {
                for (let de of a.collectLabel)
                  if (de != null && de.key && de.valKey) {
                    const Te = We(de.key);
                    let J = null;
                    Array.isArray(oe) ? (J = oe.map((ie) => ie[de.valKey]), r.value[de.key] = J, Te && (s.value[Te.tempKey] = J)) : (oe && Re(oe[de.valKey]) && (J = oe[de.valKey]), r.value[de.key] = J, Te && (Te.booleanVal && typeof J == "boolean" ? s.value[Te.tempKey] = J ? 1 : 0 : s.value[Te.tempKey] = J));
                  }
              } else if (typeof a.collectLabel == "object" && a.collectLabel.key && a.collectLabel.valKey) {
                const de = We(a.collectLabel.key);
                let Te = null;
                Array.isArray(oe) ? (Te = oe.map(
                  (J) => a.collectLabel && !Array.isArray(a.collectLabel) && J[a.collectLabel.valKey]
                ), r.value[a.collectLabel.key] = Te, de && (s.value[de.tempKey] = Te)) : (oe && Re(oe[a.collectLabel.valKey]) && (Te = oe[a.collectLabel.valKey]), r.value[a.collectLabel.key] = Te, de && (de.booleanVal && typeof Te == "boolean" ? s.value[de.tempKey] = Te ? 1 : 0 : s.value[de.tempKey] = Te));
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!a.key)
              return;
            let O = a.dateType;
            const C = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "YYYY-MM"
            };
            if (O === "date" || O === "datetime" || O === "time" || O === "year" || O === "month")
              d ? (O === "time" ? r.value[a.key] = d : r.value[a.key] = mt(d).format(typeof a.format == "string" ? a.format : C[O]), O === "date" && a.addTime && (r.value[a.key] += " 00:00:00")) : r.value[a.key] = null;
            else if (a.type === "monthRange" || O === "daterange" || O === "datetimerange" || O === "timerange") {
              if (!a.key2)
                return;
              d && d[0] && d[1] ? (O === "timerange" ? (r.value[a.key] = d[0], r.value[a.key2] = d[1]) : a.type === "monthRange" ? (r.value[a.key] = typeof a.format == "string" && mt(d[0]).format(a.format) || d[0], r.value[a.key2] = typeof a.format == "string" && a.format && mt(d[1]).format(a.format) || d[1]) : (r.value[a.key] = mt(d[0]).format(a.format || O && C[O]), r.value[a.key2] = mt(d[1]).format(a.format || O && C[O])), O === "daterange" && a.addTime && (r.value[a.key] += " 00:00:00", r.value[a.key2] += " 23:59:59")) : (r.value[a.key] = null, r.value[a.key2] = null);
            }
            break;
        }
    }
    function Ze(d, a) {
      const O = Et(d == null ? void 0 : d.options);
      if (O)
        if (d != null && d.multiple || (d == null ? void 0 : d.type) === "checkboxGroup") {
          if (a) {
            let C = [];
            for (let oe of O)
              a.indexOf(oe == null ? void 0 : oe.val) !== -1 && C.push(oe);
            return C;
          }
          return !1;
        } else {
          if (a || a === 0 || a === !1) {
            for (let C of O)
              if ((C == null ? void 0 : C.val) === a)
                return C;
          }
          return !1;
        }
    }
    function We(d) {
      if (k.value) {
        for (let a of f.value) {
          const O = G(a, d);
          if (O)
            return O;
        }
        return !1;
      }
      return G(f.value, d);
    }
    function G(d, a) {
      for (let O of d)
        if (O.key === a)
          return O;
      return !1;
    }
    function z(d, a) {
      let O = {};
      for (let C in r.value)
        r.value.hasOwnProperty(C) && d[C] !== void 0 && (O[C] = d[C], delete d[C]);
      _e(O, a);
      for (let C in d)
        d.hasOwnProperty(C) && (u.indexOf(C) < 0 && u.push(C), r.value[C] = d[C]);
    }
    function ye(d) {
      let a = pe(d);
      if (k.value) {
        let O = [];
        for (let C of l.formData)
          O.push(...be(C, a));
        return O;
      }
      return be(l.formData, a);
    }
    function be(d, a) {
      return d.filter((O) => {
        for (let C of Object.keys(a))
          if ((O == null ? void 0 : O.key) === C && R.value.indexOf(C) > -1 && !(a[C] === null || (Array.isArray(a[C]) || Y(a[C]) === "Object") && De(a[C])))
            return delete a[C], !0;
        return !1;
      }).map((O) => O == null ? void 0 : O.key);
    }
    function _e(d, a = !1) {
      let O = pe(d);
      W(d, a);
      for (let C in r.value)
        if (r.value.hasOwnProperty(C) && d[C] !== void 0 && d[C] !== "--") {
          if (Array.isArray(d[C]))
            d[C] = d[C].filter((oe) => oe !== "--");
          else if (Y(d[C]) === "Object")
            for (let oe in d[C])
              d[C].hasOwnProperty(oe) && d[C][oe] === "--" && (d[C][oe] = null);
          r.value[C] = d[C];
        } else a || (r.value[C] = Array.isArray(r.value[C]) ? [] : null);
      $e(function() {
        ma(ye(O));
      });
    }
    function W(d, a = !1) {
      if (k.value)
        for (let O of f.value)
          Ve(O, d, a);
      else
        Ve(f.value, d, a);
    }
    function Ve(d, a, O = !1) {
      for (let C of d)
        if (C != null && C.key && (O && (a[C.key] !== void 0 || C.key2 && a[C.key2] !== void 0) || !O) && C.tempKey)
          switch (C.type) {
            case "inputMap":
              if (!C.key2)
                continue;
              Y(a[C.key]) === "Number" && Y(a[C.key2] === "Number") ? C.key3 ? s.value[C.tempKey] = {
                lng: a[C.key],
                lat: a[C.key2],
                name: a[C.key3]
              } : s.value[C.tempKey] = {
                lng: a[C.key],
                lat: a[C.key2]
              } : C.key3 ? s.value[C.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : s.value[C.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              a[C.key] && a[C.key] !== "--" || a[C.key] === 0 ? s.value[C.tempKey] = a[C.key] : s.value[C.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              a[C.key] && a[C.key] !== "--" || a[C.key] === 0 || a[C.key] === !1 ? C.multiple || C.type === "checkboxGroup" ? s.value[C.tempKey] = [...a[C.key]] : C.booleanVal ? s.value[C.tempKey] = a[C.key] ? 1 : 0 : s.value[C.tempKey] = a[C.key] : C.multiple || C.type === "checkboxGroup" ? s.value[C.tempKey] = [] : s.value[C.tempKey] = null;
              break;
            case "date":
            case "time":
              if (C.dateType === "date" || C.dateType === "datetime" || C.dateType === "year" || C.dateType === "month" || C.dateType === "time")
                s.value[C.tempKey] = a[C.key] && a[C.key] !== "--" ? a[C.key] : null;
              else if (C.dateType === "daterange" || C.dateType === "datetimerange" || C.dateType === "timerange") {
                if (!C.key2)
                  continue;
                s.value[C.tempKey] = a[C.key] && a[C.key] !== "--" && a[C.key2] && a[C.key2] !== "--" && [a[C.key], a[C.key2]] || [];
              }
              break;
          }
    }
    function nt(d) {
      if (Array.isArray(d))
        for (let a of d)
          ot(a);
      else Y(d) === "Object" && ot(d);
    }
    function ot(d) {
      const { index: a, indexB: O, key: C, val: oe } = d;
      if (typeof a == "number")
        if (Array.isArray(f.value[a])) {
          if (typeof O == "number")
            if (C && d.hasOwnProperty("val"))
              f.value[a][O][C] = oe;
            else
              for (let de of Object.keys(d))
                de !== "index" && C !== "indexB" && (f.value[a][O][de] = d[de]);
        } else if (C && d.hasOwnProperty("val"))
          f.value[a][C] = oe;
        else
          for (let de of Object.keys(d))
            de !== "index" && (f.value[a][de] = d[de]);
    }
    function ft({ label: d, root: a }) {
      a.key2 && (r.value[a.key2] = d), it({
        e: d,
        root: a
      });
    }
    function Xe(d) {
      d.beforeKey && Ba(c.value, (a) => a === d.beforeKey), d.key && (c.value.indexOf(d.key) === -1 && c.value.push(d.key), it({
        e: null,
        root: d
      }));
    }
    function _t({ name: d, root: a }) {
      a.key2 && (r.value[a.key2] = d), it({
        e: d,
        root: a
      });
    }
    function ml({ e: d, root: a }) {
      it({
        e: d,
        root: a
      }), $e(function() {
        var O, C;
        (C = (O = i.value) == null ? void 0 : O.validateField) == null || C.call(O, a.key);
      });
    }
    function it({ e: d, root: a }) {
      Me(() => {
        var C;
        let O = {
          event: d
        };
        if (a.key && (O[a.key] = r.value[a.key]), a.key2 && (O[a.key2] = r.value[a.key2]), Array.isArray(a.collectLabel))
          for (let oe of a.collectLabel)
            O[oe.key] = r.value[oe.key];
        else (C = a.collectLabel) != null && C.key && (O[a.collectLabel.key] = r.value[a.collectLabel.key]);
        e("on-item-change", O);
      }, 300);
    }
    function hl() {
      let d = {};
      for (let a of K.value)
        d[a] = r.value[a];
      return l.trim && (d = Hl(d)), d;
    }
    function fa() {
      var d, a;
      (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d);
    }
    function pa(d) {
      Me(() => {
        var a, O;
        (O = (a = i.value) == null ? void 0 : a.validateField) == null || O.call(a, d, () => {
        });
      }, 10);
    }
    function ma(d) {
      Me(() => {
        var a, O;
        if (Array.isArray(d))
          for (let C of d)
            (O = (a = i.value) == null ? void 0 : a.validateField) == null || O.call(a, C, () => {
            });
      }, 10);
    }
    function ha(d) {
      d !== void 0 && (v.value = !!d);
    }
    function zt() {
      var d, a;
      l.disabled || (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d, (O) => {
        S || (S = !0, O && (v.value = !0, e("on-submit", hl())), Me(() => {
          S = !1;
        }, 2e3));
      });
    }
    return Ge(() => {
      ae(), me();
    }), o({
      resetForm: _,
      refreshFormDom: $,
      reRenderForm: Z,
      setItemToValGroup: z,
      updateValGroup: _e,
      updateFormDataT: nt,
      validate: fa,
      reValidate: pa,
      changeLoading: ha,
      getValGroup: hl,
      submit: zt
    }), (d, a) => {
      const O = te("FormItem"), C = te("Button"), oe = te("Form");
      return T(), le(oe, {
        ref_key: "formGroupXRef",
        ref: i,
        model: m(r),
        rules: m(I),
        "label-width": l.labelWidth,
        inline: l.inline,
        "show-message": l.showMessage,
        class: "formXN",
        key: m(b)
      }, {
        default: ne(() => [
          Q(O, { style: { display: "none" } }, {
            default: ne(() => a[0] || (a[0] = [
              P("input", { type: "text" }, null, -1)
            ])),
            _: 1,
            __: [0]
          }),
          m(k) ? (T(!0), N(ge, { key: 0 }, Ce(m(f), (de, Te) => (T(), N("div", {
            class: we([d.teamClass, "formTeamBox" + Te]),
            key: "formTeamBox" + Te
          }, [
            (T(!0), N(ge, null, Ce(de, (J, ie) => (T(), N(ge, {
              key: "formItem" + ie
            }, [
              D(J) ? (T(), le(Pl, {
                key: 0,
                item: J,
                style: re(m(V)),
                "item-style": m(B),
                "val-group": m(r),
                "temp-keys": m(s),
                inline: l.inline,
                disabled: l.disabled,
                "label-width": l.labelWidth,
                "item-width": l.itemWidth,
                "mgr-url": m(p),
                "upload-url": m(g),
                onItemChange: it,
                onReValidate: ml,
                onClearTempKeyItem: U,
                onSelectInputChange: Xe,
                onAlNameChange: _t,
                onAsyncLabelChange: ft
              }, dt({ _: 2 }, [
                Ce(M(de), (Be) => ({
                  name: Be.slotName,
                  fn: ne((Ue) => [
                    Ne(d.$slots, Be.slotName, {
                      valGroup: Ue.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ue("", !0)
            ], 64))), 128))
          ], 2))), 128)) : ue("", !0),
          (T(!0), N(ge, null, Ce(m(f), (de, Te) => (T(), N(ge, {
            key: "formItem" + Te
          }, [
            !m(k) && D(de) ? (T(), le(Pl, {
              key: 0,
              item: de,
              style: re(m(V)),
              "item-style": m(B),
              "val-group": m(r),
              "temp-keys": m(s),
              inline: l.inline,
              disabled: l.disabled,
              "label-width": l.labelWidth,
              "item-width": l.itemWidth,
              "mgr-url": m(p),
              "upload-url": m(g),
              onItemChange: it,
              onReValidate: ml,
              onClearTempKeyItem: U,
              onSelectInputChange: Xe,
              onAlNameChange: _t,
              onAsyncLabelChange: ft
            }, dt({ _: 2 }, [
              Ce(M(d.formData), (J) => ({
                name: J.slotName,
                fn: ne((ie) => [
                  Ne(d.$slots, J.slotName, {
                    valGroup: ie.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ue("", !0)
          ], 64))), 128)),
          l.showLongOkBt ? (T(), le(O, { key: 1 }, {
            default: ne(() => [
              Q(C, {
                onClick: zt,
                style: re(m(B)),
                type: "primary",
                loading: l.btnLoading && m(v),
                disabled: l.disabled
              }, {
                default: ne(() => [
                  ke(q(l.longOkBtTxt || m(x)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ue("", !0),
          P("div", No, [
            l.showInlineOkBt ? (T(), le(C, {
              key: 0,
              type: "primary",
              class: we({ inlineFormBtXN: l.inline, okBtnXN: !0 }),
              onClick: zt,
              loading: l.btnLoading && m(v),
              disabled: l.disabled
            }, {
              default: ne(() => [
                ke(q(l.inlineOkBtTxt || m(x)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : ue("", !0),
            l.showInlineClearBt ? (T(), le(C, {
              key: 1,
              onClick: _,
              class: we({ inlineFormBtXN: l.inline }),
              type: "dashed"
            }, {
              default: ne(() => [
                ke(q(l.inlineClearBtTxt || m(x)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : ue("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), Ko = /* @__PURE__ */ ce({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    width: { default: () => Le().formGroupWidth },
    labelWidth: { default: () => Le().formGroupLabelWidth },
    contentWidth: { default: "70%" },
    itemWidth: { default: 200 },
    showOkBt: { type: Boolean, default: !0 },
    showCancelBt: { type: Boolean, default: !0 },
    okBtTxt: {},
    cancelBtTxt: {},
    btnLoading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["on-cancel"],
  setup(t, { expose: o, emit: n }) {
    const e = n, l = t, i = E({ width: l.width }), r = E(!1), f = E(), s = j(() => {
      var R, M;
      if (Array.isArray(l.formData))
        if (Array.isArray(l.formData[0])) {
          let h = [];
          for (let L of l.formData)
            L && (h = h.concat(
              L.filter((_) => (_ == null ? void 0 : _.type) === "custom" || (_ == null ? void 0 : _.type) === "input" && _.slotName && _.slotPosition)
            ));
          return h;
        } else
          return (M = (R = l.formData) == null ? void 0 : R.filter) == null ? void 0 : M.call(
            R,
            (h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition
          );
      return [];
    });
    function y() {
      return new Promise((R) => {
        var M, h;
        (h = (M = f.value).resetForm) == null || h.call(M).then((L) => {
          R(L);
        });
      });
    }
    function p() {
      return new Promise((R) => {
        var M, h;
        (h = (M = f.value).refreshFormDom) == null || h.call(M).then((L) => {
          R(L);
        });
      });
    }
    function c() {
      return new Promise((R) => {
        var M, h;
        (h = (M = f.value).reRenderForm) == null || h.call(M).then((L) => {
          R(L);
        });
      });
    }
    function u(R, M) {
      var h, L;
      (L = (h = f.value).setItemToValGroup) == null || L.call(h, R, M);
    }
    function v(R, M) {
      var h, L;
      (L = (h = f.value).updateValGroup) == null || L.call(h, R, M);
    }
    function b(R) {
      var M, h;
      (h = (M = f.value).updateFormDataT) == null || h.call(M, R);
    }
    function g() {
      var R, M;
      (M = (R = f.value).validate) == null || M.call(R);
    }
    function S(R) {
      var M, h;
      (h = (M = f.value).reValidate) == null || h.call(M, R);
    }
    function k(R) {
      var M, h;
      R !== void 0 && (r.value = !!R, (h = (M = f.value).changeLoading) == null || h.call(M, r.value));
    }
    function V() {
      var R, M;
      return (M = (R = f.value).getValGroup) == null ? void 0 : M.call(R);
    }
    function B() {
      r.value = !0;
    }
    function I() {
      var R, M;
      (M = (R = f.value).submit) == null || M.call(R);
    }
    function K() {
      e("on-cancel"), Me(() => {
        var R, M;
        r.value = !1, (M = (R = f.value).changeLoading) == null || M.call(R, !1);
      }, 1e3);
    }
    return o({
      resetForm: y,
      refreshFormDom: p,
      reRenderForm: c,
      setItemToValGroup: u,
      updateValGroup: v,
      updateFormDataT: b,
      validate: g,
      reValidate: S,
      changeLoading: k,
      getValGroup: V,
      submit: I,
      close: K
    }), (R, M) => {
      const h = te("Button");
      return T(), N("div", {
        style: re(m(i)),
        class: "formGroupBoxVM"
      }, [
        Q(Kt, ct({
          ref_key: "formRRef",
          ref: f
        }, R.$attrs, {
          "form-data": l.formData,
          "label-width": l.labelWidth,
          "content-width": l.contentWidth,
          "item-width": l.itemWidth,
          btnLoading: l.btnLoading,
          disabled: l.disabled,
          onOnSubmit: B
        }), dt({ _: 2 }, [
          Ce(m(s), (L) => ({
            name: L.slotName,
            fn: ne(({ valGroup: _ }) => [
              Ne(R.$slots, L.slotName, { valGroup: _ })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading", "disabled"]),
        fe(P("div", {
          class: "formFooterVM",
          style: re({ marginLeft: l.labelWidth + "px" })
        }, [
          P("div", {
            style: re({ width: l.contentWidth }),
            class: "btnBoxKAL"
          }, [
            l.showOkBt ? (T(), le(h, {
              key: 0,
              onClick: I,
              class: "form-save-btn",
              loading: l.btnLoading && m(r),
              disabled: l.disabled
            }, {
              default: ne(() => [
                ke(q(l.okBtTxt || m(x)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])) : ue("", !0),
            l.showCancelBt ? (T(), le(h, {
              key: 1,
              onClick: K,
              class: "form-cancel-btn"
            }, {
              default: ne(() => [
                ke(q(l.cancelBtTxt || m(x)("r.cancel")), 1)
              ]),
              _: 1
            })) : ue("", !0)
          ], 4)
        ], 4), [
          [ve, l.showOkBt || l.showCancelBt]
        ])
      ], 4);
    };
  }
}), sl = /* @__PURE__ */ ce({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => Le().searchFormLabelWidth },
    itemWidth: { default: () => Le().searchFormItemWidth },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(t, { expose: o, emit: n }) {
    const e = n, l = t, i = E(), r = j(() => {
      var B, I;
      if (Array.isArray(l.formData[0])) {
        let K = [];
        for (let R of l.formData)
          R && (K = K.concat(
            R.filter((M) => (M == null ? void 0 : M.type) === "custom" || (M == null ? void 0 : M.type) === "input" && M.slotName && M.slotPosition)
          ));
        return K;
      }
      return (I = (B = l.formData) == null ? void 0 : B.filter) == null ? void 0 : I.call(
        B,
        (K) => (K == null ? void 0 : K.type) === "custom" || (K == null ? void 0 : K.type) === "input" && K.slotName && K.slotPosition
      );
    });
    function f() {
      return new Promise((B) => {
        var I, K;
        (K = (I = i.value).resetForm) == null || K.call(I).then(() => {
          B();
        });
      });
    }
    function s() {
      return new Promise((B) => {
        var I, K;
        (K = (I = i.value).refreshFormDom) == null || K.call(I).then(() => {
          B();
        });
      });
    }
    function y() {
      return new Promise((B) => {
        var I, K;
        (K = (I = i.value).reRenderForm) == null || K.call(I).then(() => {
          B();
        });
      });
    }
    function p(B, I) {
      var K, R;
      (R = (K = i.value).setItemToValGroup) == null || R.call(K, B, I);
    }
    function c(B, I) {
      var K, R;
      (R = (K = i.value).updateValGroup) == null || R.call(K, B, I);
    }
    function u(B) {
      var I, K;
      (K = (I = i.value).updateFormDataT) == null || K.call(I, B);
    }
    function v() {
      var B, I;
      (I = (B = i.value).validate) == null || I.call(B);
    }
    function b(B) {
      var I, K;
      (K = (I = i.value).reValidate) == null || K.call(I, B);
    }
    function g(B) {
      var I, K;
      (K = (I = i.value).changeLoading) == null || K.call(I, B === void 0 ? !1 : B);
    }
    function S() {
      var B, I;
      return (I = (B = i.value).getValGroup) == null ? void 0 : I.call(B);
    }
    function k(B) {
      e("on-search", B);
    }
    function V() {
      var B, I;
      (I = (B = i.value).submit) == null || I.call(B);
    }
    return Ge(() => {
      const B = i.value.$el;
      B != null && B.parentNode && B.parentNode.addEventListener("keyup", (I) => {
        (I == null ? void 0 : I.keyCode) === 13 && V();
      });
    }), o({
      resetForm: f,
      refreshFormDom: s,
      reRenderForm: y,
      setItemToValGroup: p,
      updateValGroup: c,
      updateFormDataT: u,
      validate: v,
      reValidate: b,
      changeLoading: g,
      getValGroup: S,
      submit: V
    }), (B, I) => (T(), le(Kt, ct({
      ref_key: "formRRef",
      ref: i
    }, B.$attrs, {
      "form-data": l.formData,
      "label-width": l.labelWidth,
      "item-width": l.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": l.showInlineOkBt,
      "inline-ok-bt-txt": m(x)("r.check"),
      "show-inline-clear-bt": l.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: k
    }), dt({ _: 2 }, [
      Ce(m(r), (K) => ({
        name: K.slotName,
        fn: ne(({ valGroup: R }) => [
          Ne(B.$slots, K.slotName, { valGroup: R })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), zo = /* @__PURE__ */ ce({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: () => Le().formModalWidth },
    labelWidth: { default: () => Le().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(t, { expose: o, emit: n }) {
    const e = n, l = t, i = E(), r = E(!1), f = E(!1), s = j(() => {
      var h, L;
      if (Array.isArray(l.formData[0])) {
        let _ = [];
        for (let Z of l.formData)
          Z && (_ = _.concat(
            Z.filter(($) => ($ == null ? void 0 : $.type) === "custom" || ($ == null ? void 0 : $.type) === "input" && $.slotName && $.slotPosition)
          ));
        return _;
      }
      return (L = (h = l.formData) == null ? void 0 : h.filter) == null ? void 0 : L.call(
        h,
        (_) => (_ == null ? void 0 : _.type) === "custom" || (_ == null ? void 0 : _.type) === "input" && _.slotName && _.slotPosition
      );
    });
    function y() {
      return new Promise((h) => {
        var L, _;
        (_ = (L = i.value).resetForm) == null || _.call(L).then(() => {
          h();
        });
      });
    }
    function p() {
      return new Promise((h) => {
        var L, _;
        (_ = (L = i.value).refreshFormDom) == null || _.call(L).then(() => {
          h();
        });
      });
    }
    function c() {
      return new Promise((h) => {
        var L, _;
        (_ = (L = i.value).reRenderForm) == null || _.call(L).then(() => {
          h();
        });
      });
    }
    function u(h, L) {
      var _, Z;
      (Z = (_ = i.value).setItemToValGroup) == null || Z.call(_, h, L);
    }
    function v(h, L) {
      var _, Z;
      (Z = (_ = i.value).updateValGroup) == null || Z.call(_, h, L);
    }
    function b(h) {
      var L, _;
      (_ = (L = i.value).updateFormDataT) == null || _.call(L, h);
    }
    function g() {
      var h, L;
      (L = (h = i.value).validate) == null || L.call(h);
    }
    function S(h) {
      var L, _;
      (_ = (L = i.value).reValidate) == null || _.call(L, h);
    }
    function k(h) {
      var L, _;
      h !== void 0 && (f.value = !!h, (_ = (L = i.value).changeLoading) == null || _.call(L, f.value));
    }
    function V() {
      var h, L;
      return (L = (h = i.value).getValGroup) == null ? void 0 : L.call(h);
    }
    function B() {
      f.value = !0;
    }
    function I() {
      var h, L;
      l.hideCancelBt ? R() : (L = (h = i.value).submit) == null || L.call(h);
    }
    function K() {
      r.value = !0;
    }
    function R() {
      r.value = !1, Me(() => {
        var h, L;
        f.value = !1, (L = (h = i.value).changeLoading) == null || L.call(h, !1);
      }, 1e3);
    }
    function M(h) {
      e(h ? "on-open" : "on-close");
    }
    return o({
      resetForm: y,
      refreshFormDom: p,
      reRenderForm: c,
      setItemToValGroup: u,
      updateValGroup: v,
      updateFormDataT: b,
      validate: g,
      reValidate: S,
      changeLoading: k,
      getValGroup: V,
      submit: I,
      open: K,
      close: R
    }), (h, L) => {
      const _ = te("Button"), Z = te("Modal");
      return T(), le(Z, {
        class: we(["formModal", { hideFooter: l.hideFooter }]),
        title: l.title || m(x)("r.title"),
        modelValue: m(r),
        "onUpdate:modelValue": L[0] || (L[0] = ($) => Fe(r) ? r.value = $ : null),
        "mask-closable": !1,
        "footer-hide": l.hideFooter,
        width: l.width,
        onOnVisibleChange: M
      }, {
        footer: ne(() => [
          Q(_, {
            onClick: I,
            class: "modal-save-btn",
            loading: l.btnLoading && m(f),
            disabled: l.disabled
          }, {
            default: ne(() => [
              ke(q(l.okBtTxt || m(x)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled"]),
          l.hideCancelBt ? ue("", !0) : (T(), le(_, {
            key: 0,
            onClick: R,
            class: "modal-cancel-btn"
          }, {
            default: ne(() => [
              ke(q(l.cancelBtTxt || m(x)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: ne(() => [
          Q(Kt, ct({
            ref_key: "formRRef",
            ref: i
          }, h.$attrs, {
            "form-data": l.formData,
            "label-width": l.labelWidth,
            btnLoading: l.btnLoading,
            disabled: l.disabled,
            onOnSubmit: B
          }), dt({ _: 2 }, [
            Ce(m(s), ($) => ({
              name: $.slotName,
              fn: ne(({ valGroup: A }) => [
                Ne(h.$slots, $.slotName, { valGroup: A })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading", "disabled"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), Uo = /* @__PURE__ */ ce({
  __name: "CheckboxTree",
  props: {
    modelValue: { default: () => [] },
    data: { default: () => [] },
    expandAll: { type: Boolean, default: !1 },
    label: { default: "name" },
    collectVal: { default: "id" },
    leaf: { type: Boolean, default: !0 },
    inlineLeaf: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(t, { emit: o }) {
    const n = o, e = t, l = E(!0), i = E([]), r = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let f = [];
    const s = j(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), y = j(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    Se(
      () => e.data,
      (g) => {
        l.value = !1;
        let S = [];
        p(g, S), i.value = S, $e(function() {
          l.value = !0, e.inlineLeaf && $e(v);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), Se(
      () => y.value,
      (g) => {
        let S, k = "s";
        if (Array.isArray(e.collectVal) ? (S = e.collectVal[0] || "", k = "a") : S = e.collectVal, !S || JSON.stringify(g) === JSON.stringify(f)) {
          f = [];
          return;
        }
        rt({
          group: i.value,
          condition: (V) => (V == null ? void 0 : V.checked) === !0,
          key: "checked",
          val: !1
        }), rt(k === "a" ? {
          group: i.value,
          condition: (V) => xt(g, [S, V == null ? void 0 : V[S]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: i.value,
          condition: (V) => g.indexOf(V == null ? void 0 : V[S]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), Se(
      () => e.disabled,
      (g) => {
        rt({
          group: i.value,
          condition: (S) => S && S.disableCheckbox !== g,
          key: "disableCheckbox",
          val: g
        }), e.inlineLeaf && $e(v);
      },
      { immediate: !0 }
    );
    function p(g, S = []) {
      for (let k of g) {
        let V = !1;
        s.value.length > 1 ? V = Xt(y.value, (I) => I[s.value[0]] === k[s.value[0]]) !== void 0 : V = s.value[0] ? y.value.indexOf(k[s.value[0]]) !== -1 : !1;
        let B = {
          name: k == null ? void 0 : k[e.label],
          expand: !!(e.expandAll || k != null && k.expand),
          checked: V,
          disableCheckbox: e.disabled
        };
        for (let I of s.value)
          B[I] = k[I];
        S.push(B), k != null && k.children && k.children.length > 0 && (B.children = [], c(k.children, B.children));
      }
    }
    function c(g, S = []) {
      for (let k of g) {
        let V = !1;
        s.value.length > 1 ? V = Xt(y.value, (I) => I[s.value[0]] === k[s.value[0]]) !== void 0 : V = s.value[0] ? y.value.indexOf(k[s.value[0]]) !== -1 : !1;
        let B = {
          name: k == null ? void 0 : k[e.label],
          expand: !!(e.expandAll || k != null && k.expand),
          checked: V,
          disableCheckbox: e.disabled
        };
        for (let I of s.value)
          B[I] = k[I];
        S.push(B), k != null && k.children && k.children.length > 0 && (B.children = [], p(k.children, B.children));
      }
    }
    function u(g, {
      data: S
    }) {
      let k = "", V = !0;
      if (S.children && S.children.length > 0) {
        for (let B of S.children)
          if (B.children !== void 0) {
            V = !1;
            break;
          }
        V && e.inlineLeaf && (k = "inlineChildXA");
      }
      return g(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: k
        },
        [
          g(
            "span",
            {
              style: {
                fontWeight: S.children ? "bold" : "normal"
              }
            },
            S.name
          )
        ]
      );
    }
    function v(g) {
      if (g) {
        g.expand && $e(v);
        return;
      }
      let S = document.querySelectorAll("#" + r + " .inlineChildXA");
      if (S.length > 0)
        for (let k of S) {
          let V = k == null ? void 0 : k.parentElement, B = V == null ? void 0 : V.nextElementSibling;
          if (!B)
            return;
          if (B.tagName !== "BR") {
            let I = V == null ? void 0 : V.parentElement, K = document.createElement("br");
            I == null || I.insertBefore(K, B);
            const R = K.nextElementSibling;
            if (R) {
              const M = R.children;
              if (M)
                for (let h of M)
                  (h == null ? void 0 : h.className.indexOf("inlineTreeNodeF")) === -1 && h.setAttribute("class", h.className + " inlineTreeNodeF");
            }
          }
        }
    }
    function b(g) {
      let S = [];
      if (e.leaf) {
        for (let k of g)
          if (!k.children)
            if (Array.isArray(e.collectVal)) {
              let V = {};
              for (let B of e.collectVal)
                V[B] = k[B];
              S.push(V);
            } else
              S.push(k[e.collectVal]);
      } else
        for (let k of g)
          if (Array.isArray(e.collectVal)) {
            let V = {};
            for (let B of e.collectVal)
              V[B] = k[B];
            S.push(V);
          } else
            S.push(k[e.collectVal]);
      f = S, n("update:modelValue", S), n("on-change", pe(S));
    }
    return (g, S) => {
      const k = te("Tree");
      return m(l) ? (T(), le(k, {
        key: 0,
        id: r,
        class: "checkboxTreeGA",
        data: m(i),
        render: u,
        onOnCheckChange: b,
        onOnToggleExpand: v,
        "show-checkbox": ""
      }, null, 8, ["data"])) : ue("", !0);
    };
  }
}), Eo = { class: "transferBoxRL" }, Go = { class: "leftBoxLLL" }, Ho = { class: "fullHeight flexColumnBox" }, Wo = { class: "notGrow" }, jo = { class: "titleLLL" }, qo = { class: "growFlexItem" }, Xo = { class: "middleBoxLLL" }, Jo = { class: "rightBoxLLL" }, Yo = { class: "fullHeight flexColumnBox" }, Qo = { class: "notGrow" }, Zo = { class: "titleLLL" }, ei = { class: "growFlexItem" }, ti = /* @__PURE__ */ ce({
  __name: "TransferBox",
  props: {
    titleLeft: {},
    titleRight: {},
    formDataLeft: { default: () => [] },
    formDataRight: { default: () => [] },
    formRulesLeft: { default: () => ({}) },
    formRulesRight: { default: () => ({}) },
    constSearchDataLeft: { default: () => ({}) },
    constSearchDataRight: { default: () => ({}) },
    leftTableColumns: { default: () => [] },
    rightTableColumns: { default: () => [] },
    leftTableUrl: {},
    rightTableUrl: {},
    addUrl: {},
    deleteUrl: {},
    addAllUrl: {},
    deleteAllUrl: {},
    addParamsHandle: { type: Function, default: (t) => t.map((o) => o == null ? void 0 : o.id) },
    deleteParamsHandle: { type: Function, default: (t) => t.map((o) => o == null ? void 0 : o.id) },
    addAllParamsHandle: { type: Function, default: (t) => t },
    deleteAllParamsHandle: { type: Function, default: (t) => t },
    addMethod: { default: "post" },
    addAllMethod: { default: "post" },
    deleteMethod: { default: "delete" },
    deleteAllMethod: { default: "delete" },
    searchFormLabelWith: {},
    usePagePro: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.pageShowSizer;
    } },
    leftSearchDataFilter: {},
    rightSearchDataFilter: {}
  },
  emits: ["transferred", "on-data-change-l", "on-data-change-r"],
  setup(t, { expose: o, emit: n }) {
    const e = n, l = t;
    let i = E({}), r = E({}), f = E([]), s = E([]), y = E(0), p = E(0);
    const c = j(() => ({ ...l.constSearchDataLeft, ...i.value })), u = j(() => ({ ...l.constSearchDataRight, ...r.value })), v = j(() => y.value < 1), b = j(() => f.value.length < 1), g = j(() => s.value.length < 1), S = j(() => p.value < 1), k = E(), V = E(), B = E(), I = E();
    function K() {
      k.value.resetForm(), V.value.resetForm(), De(i.value) || (i.value = {}), De(r.value) || (r.value = {}), B.value.clearSelect(), I.value.clearSelect();
    }
    function R() {
      B.value.search(), I.value.search();
    }
    function M(D) {
      f.value = D;
    }
    function h(D) {
      s.value = D;
    }
    function L(D) {
      var X, ee, se, me, he;
      y.value = ((ee = (X = D == null ? void 0 : D.data) == null ? void 0 : X.page) == null ? void 0 : ee.total) || ((me = (se = D == null ? void 0 : D.data) == null ? void 0 : se.data) == null ? void 0 : me.total) || ((he = D == null ? void 0 : D.data) == null ? void 0 : he.total) || (D == null ? void 0 : D.total) || 0, e("on-data-change-l", D);
    }
    function _(D) {
      var X, ee, se, me, he;
      p.value = ((ee = (X = D == null ? void 0 : D.data) == null ? void 0 : X.page) == null ? void 0 : ee.total) || ((me = (se = D == null ? void 0 : D.data) == null ? void 0 : se.data) == null ? void 0 : me.total) || ((he = D == null ? void 0 : D.data) == null ? void 0 : he.total) || (D == null ? void 0 : D.total) || 0, e("on-data-change-r", D);
    }
    function Z(D) {
      typeof l.leftSearchDataFilter == "function" ? i.value = l.leftSearchDataFilter(D) : i.value = D;
    }
    function $(D) {
      typeof l.rightSearchDataFilter == "function" ? r.value = l.rightSearchDataFilter(D) : r.value = D;
    }
    function A() {
      l.addUrl && F("add");
    }
    function H() {
      l.deleteUrl && F("delete");
    }
    function U() {
      l.addAllUrl && l.addUrl && F("addAll");
    }
    function w() {
      l.deleteAllUrl && F("deleteAll");
    }
    function F(D) {
      let X, ee, se = {}, me = "";
      switch (D) {
        case "add":
          X = l.addMethod, ee = l.addUrl, se = l.addParamsHandle(s.value), me = x("r.add");
          break;
        case "delete":
          X = l.deleteMethod, ee = l.deleteUrl, se = l.deleteParamsHandle(f.value), me = x("r.remove");
          break;
        case "addAll":
          X = l.addAllMethod, ee = l.addAllUrl, se = l.addAllParamsHandle(u.value), me = x("r.addAll");
          break;
        case "deleteAll":
          X = l.deleteAllMethod, ee = l.deleteAllUrl, se = l.deleteAllParamsHandle(c.value), me = x("r.removeAll");
          break;
      }
      ee && X && qe[X](ee, se, null, [], { spin: !0 }, !1).then((he) => {
        (he == null ? void 0 : he.code) === 0 ? (ze(me + x("r.success"), (he == null ? void 0 : he.message) || "", "success"), B.value && B.value.getTableData(), I.value && I.value.getTableData(), e("transferred")) : ze(me + x("r.failed"), (he == null ? void 0 : he.message) || "", "error");
      }).catch(() => {
        ze(me + x("r.error"), "", "error");
      });
    }
    return o({
      reset: K,
      search: R
    }), (D, X) => {
      const ee = te("Icon"), se = te("Button");
      return T(), N("div", Eo, [
        P("div", Go, [
          P("div", Ho, [
            P("div", Wo, [
              P("div", jo, q(l.titleLeft || m(x)("r.added")), 1),
              Q(ll, null, {
                default: ne(() => [
                  Q(sl, {
                    ref_key: "leftFormRef",
                    ref: k,
                    "form-data": l.formDataLeft,
                    "form-rules": l.formRulesLeft,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: Z
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            P("div", qo, [
              Q(ol, {
                ref_key: "lTabRef",
                ref: B,
                columns: l.leftTableColumns,
                url: l.leftTableUrl,
                "search-data": m(c),
                onOnSelectionChange: M,
                onOnDataChange: L,
                "init-data": !!(m(De)(l.constSearchDataLeft) && l.leftTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: l.usePagePro,
                showTotal: l.showTotal,
                showSizer: l.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ]),
        P("div", Xo, [
          Q(se, {
            class: "middleBtLLL",
            type: "default",
            onClick: w,
            disabled: m(v)
          }, {
            default: ne(() => [
              ke(q(m(x)("r.removeAll")) + " ", 1),
              Q(ee, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Q(se, {
            class: "middleBtLLL",
            type: "default",
            onClick: H,
            disabled: m(b)
          }, {
            default: ne(() => [
              ke(q(m(x)("r.remove")) + " ", 1),
              Q(ee, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Q(se, {
            class: "middleBtLLL",
            type: "primary",
            onClick: A,
            disabled: m(g)
          }, {
            default: ne(() => [
              Q(ee, { type: "ios-arrow-back" }),
              ke(" " + q(m(x)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          Q(se, {
            class: "middleBtLLL",
            type: "primary",
            onClick: U,
            disabled: m(S)
          }, {
            default: ne(() => [
              Q(ee, { type: "ios-arrow-back" }),
              ke(" " + q(m(x)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        P("div", Jo, [
          P("div", Yo, [
            P("div", Qo, [
              P("div", Zo, q(l.titleRight || m(x)("r.notAdded")), 1),
              Q(ll, null, {
                default: ne(() => [
                  Q(sl, {
                    ref_key: "rightFormRef",
                    ref: V,
                    "form-data": l.formDataRight,
                    "form-rules": l.formRulesRight,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: $
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            P("div", ei, [
              Q(ol, {
                ref_key: "rTabRef",
                ref: I,
                columns: l.rightTableColumns,
                url: l.rightTableUrl,
                "search-data": m(u),
                onOnSelectionChange: h,
                onOnDataChange: _,
                "init-data": !!(m(De)(l.constSearchDataRight) && l.rightTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: l.usePagePro,
                showTotal: l.showTotal,
                showSizer: l.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ])
      ]);
    };
  }
}), li = { class: "boxLPA" }, ai = { class: "headerJ" }, ni = { class: "firstT borderBoxAS" }, oi = { class: "secondT borderBoxAS" }, ii = { class: "firstCol borderBoxAS" }, si = { class: "secondCol borderBoxAS" }, ri = /* @__PURE__ */ ce({
  __name: "CheckboxGroupTwoClass",
  props: {
    modelValue: { default: () => [] },
    data: { default: () => [] },
    firstTitle: {},
    secondTitle: {},
    label: { default: "name" },
    collectVal: { default: "id" },
    leaf: { type: Boolean, default: !0 },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "on-change"],
  setup(t, { emit: o }) {
    const n = t, e = o, l = E([]), i = j(() => {
      var c;
      let y = pe(n.data), p = pe(l.value);
      for (let u of y) {
        let v = 0;
        if (u != null && u.children && !De(u.children))
          for (let b of u.children) {
            for (let g = 0, S = p == null ? void 0 : p.length; g < S; g++)
              if (Array.isArray(n.collectVal)) {
                let k = !0;
                for (let V of n.collectVal)
                  if (((c = p[g]) == null ? void 0 : c[V]) !== (b == null ? void 0 : b[V])) {
                    k = !1;
                    break;
                  }
                if (k) {
                  b.checked = !0, v++, p.splice(g, 1);
                  break;
                }
              } else if (p[g] === b[n.collectVal]) {
                b.checked = !0, v++, p.splice(g, 1);
                break;
              }
            !b.checked && (b.checked = !1);
          }
        v === 0 ? (u.checked = !1, u.indeterminate = !1) : u.children && v === u.children.length ? (u.checked = !0, u.indeterminate = !1) : (u.checked = !1, u.indeterminate = !0);
      }
      return y;
    });
    Se(
      () => n.modelValue,
      (y, p) => {
        bt(l.value, y) || bt(y, p) || (l.value = y);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function r(y, p) {
      if (y.children)
        for (let c of y.children)
          c.checked = p;
      f();
    }
    function f() {
      s(i.value, !0);
    }
    function s(y, p) {
      let c = [];
      for (let u of y) {
        if (!p && !n.leaf && u.checked && u.indeterminate === !1)
          if (Array.isArray(n.collectVal)) {
            let v = {};
            for (let b of n.collectVal)
              v[b] = u[b];
            c.push(v);
          } else Y(n.collectVal) === "String" && c.push(u[n.collectVal]);
        if (u.children) {
          for (let v of u.children)
            if (v.checked)
              if (Array.isArray(n.collectVal)) {
                let b = {};
                for (let g of n.collectVal)
                  b[g] = v[g];
                c.push(b);
              } else Y(n.collectVal) === "String" && c.push(v[n.collectVal]);
        }
      }
      p ? (l.value = c, n.leaf ? (e("update:modelValue", c), e("on-change", pe(c))) : $e(function() {
        s(i.value);
      })) : (e("update:modelValue", c), e("on-change", pe(c)));
    }
    return (y, p) => {
      const c = te("Checkbox");
      return T(), N("div", li, [
        P("div", ai, [
          P("div", ni, q(y.firstTitle || m(x)("r.level.1")), 1),
          P("div", oi, q(y.secondTitle || m(x)("r.level.2")), 1)
        ]),
        (T(!0), N(ge, null, Ce(m(i), (u, v) => (T(), N("div", {
          class: "bodyJ",
          key: "checkboxJ" + v
        }, [
          P("div", ii, [
            Q(c, {
              modelValue: u.checked,
              "onUpdate:modelValue": (b) => u.checked = b,
              indeterminate: u.indeterminate,
              onOnChange: (b) => r(u, b),
              disabled: y.disabled
            }, {
              default: ne(() => [
                ke(q(u[y.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          P("div", si, [
            (T(!0), N(ge, null, Ce(u.children, (b, g) => (T(), N("div", {
              class: "secItem",
              key: "secItem" + g
            }, [
              Q(c, {
                modelValue: b.checked,
                "onUpdate:modelValue": (S) => b.checked = S,
                onOnChange: f,
                disabled: y.disabled
              }, {
                default: ne(() => [
                  ke(q(b[y.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), ui = { class: "boxLPB" }, di = { class: "headerF" }, ci = { class: "firstT borderBoxKa" }, fi = { class: "secondT borderBoxKa" }, pi = { class: "thirdT borderBoxKa" }, mi = { class: "firstCol borderBoxKa" }, hi = { class: "rightBoxAL" }, yi = { class: "secondCol borderBoxKa" }, vi = { class: "thirdCol borderBoxKa" }, gi = /* @__PURE__ */ ce({
  __name: "CheckboxGroupThreeClass",
  props: {
    modelValue: { default: () => [] },
    data: { default: () => [] },
    firstTitle: {},
    secondTitle: {},
    thirdTitle: {},
    label: { default: "name" },
    collectVal: { default: "id" },
    leaf: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(t, { emit: o }) {
    const n = o, e = t, l = E([]), i = j(() => {
      let p = pe(e.data), c = pe(l.value);
      for (let u of p) {
        let v = 0, b = 0;
        if (u != null && u.children && !De(u.children))
          for (let g of u.children) {
            let S = 0;
            if (g.children && !De(g.children))
              for (let k of g.children) {
                for (let V = 0, B = c.length; V < B; V++)
                  if (Array.isArray(e.collectVal)) {
                    let I = !0;
                    for (let K of e.collectVal)
                      if (c[V][K] !== k[K]) {
                        I = !1;
                        break;
                      }
                    if (I) {
                      k.checked = !0, S++, c.splice(V, 1);
                      break;
                    }
                  } else if (c[V] === k[e.collectVal]) {
                    k.checked = !0, S++, c.splice(V, 1);
                    break;
                  }
                !k.checked && (k.checked = !1);
              }
            S === 0 ? (g.checked = !1, g.indeterminate = !1) : g.children && S === g.children.length ? (g.checked = !0, g.indeterminate = !1, v++) : (g.checked = !1, g.indeterminate = !0, b++);
          }
        v === 0 && b === 0 ? (u.checked = !1, u.indeterminate = !1) : u.children && v === u.children.length ? (u.checked = !0, u.indeterminate = !1) : (u.checked = !1, u.indeterminate = !0);
      }
      return p;
    });
    Se(
      () => e.modelValue,
      (p, c) => {
        bt(l.value, p) || bt(p, c) || (l.value = p);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function r(p, c) {
      if (p.children) {
        for (let u of p.children)
          if (u.checked = c, u.children)
            for (let v of u.children)
              v.checked = c;
      }
      s();
    }
    function f(p, c) {
      if (p.children)
        for (let u of p.children)
          u.checked = c;
      s();
    }
    function s() {
      y(i.value, !0);
    }
    function y(p, c) {
      let u = [];
      for (let v of p) {
        if (!c && !e.leaf && (v != null && v.checked) && v.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let b = {};
            for (let g of e.collectVal)
              b[g] = v[g];
            u.push(b);
          } else Y(e.collectVal) === "String" && u.push(v[e.collectVal]);
        if (v != null && v.children)
          for (let b of v.children) {
            if (!c && !e.leaf && b.checked && b.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let g = {};
                for (let S of e.collectVal)
                  g[S] = b[S];
                u.push(g);
              } else Y(e.collectVal) === "String" && u.push(b[e.collectVal]);
            if (b.children) {
              for (let g of b.children)
                if (g.checked)
                  if (Array.isArray(e.collectVal)) {
                    let S = {};
                    for (let k of e.collectVal)
                      S[k] = g[k];
                    u.push(S);
                  } else Y(e.collectVal) === "String" && u.push(g[e.collectVal]);
            }
          }
      }
      c ? (l.value = u, e.leaf ? (n("update:modelValue", u), n("on-change", pe(u))) : $e(function() {
        y(i.value);
      })) : (n("update:modelValue", u), n("on-change", pe(u)));
    }
    return (p, c) => {
      const u = te("Checkbox");
      return T(), N("div", ui, [
        P("div", di, [
          P("div", ci, q(p.firstTitle || m(x)("r.level.1")), 1),
          P("div", fi, q(p.secondTitle || m(x)("r.level.2")), 1),
          P("div", pi, q(p.thirdTitle || m(x)("r.level.3")), 1)
        ]),
        (T(!0), N(ge, null, Ce(m(i), (v, b) => (T(), N("div", {
          class: "bodyF",
          key: "checkboxJ" + b
        }, [
          P("div", mi, [
            Q(u, {
              modelValue: v.checked,
              "onUpdate:modelValue": (g) => v.checked = g,
              indeterminate: v.indeterminate,
              onOnChange: (g) => r(v, g),
              disabled: p.disabled
            }, {
              default: ne(() => [
                ke(q(v[p.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          P("div", hi, [
            (T(!0), N(ge, null, Ce(v.children, (g, S) => (T(), N("div", {
              class: "rightBoxInner",
              key: "secItem" + S
            }, [
              P("div", yi, [
                Q(u, {
                  modelValue: g.checked,
                  "onUpdate:modelValue": (k) => g.checked = k,
                  indeterminate: g.indeterminate,
                  onOnChange: (k) => f(g, k),
                  disabled: p.disabled
                }, {
                  default: ne(() => [
                    ke(q(g[p.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              P("div", vi, [
                (T(!0), N(ge, null, Ce(g.children, (k, V) => (T(), N("div", {
                  class: "thirdItem",
                  key: "thirdItem" + V
                }, [
                  Q(u, {
                    modelValue: k.checked,
                    "onUpdate:modelValue": (B) => k.checked = B,
                    onOnChange: s,
                    disabled: p.disabled
                  }, {
                    default: ne(() => [
                      ke(q(k[p.label]), 1)
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                ]))), 128))
              ])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), bi = {
  class: "fl",
  style: { "font-weight": "bold" }
}, ki = { class: "btsF" }, wi = { key: 0 }, _i = {
  key: 1,
  class: "growFlexItem relativeBox"
}, Vi = { class: "fullFlowContent" }, Si = /* @__PURE__ */ ce({
  __name: "WellCard",
  props: {
    title: {},
    fitToContent: { type: Boolean, default: !1 },
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = t, n = j(() => {
      let l = {
        width: o.fitToContent ? "fit-content" : e(o.width),
        height: o.fitToContent ? "fit-content" : e(o.height)
      };
      return o.inline && (l.display = "inline-block"), l;
    });
    function e(l) {
      const i = /^\d+$/;
      return typeof l == "number" || typeof l == "string" && i.test(l) ? l + "px" : l;
    }
    return (l, i) => (T(), N("div", {
      style: re(m(n))
    }, [
      P("div", {
        class: we(["wellCardR", { flexColumnBox: !o.fitToContent }])
      }, [
        P("div", {
          class: we(["panelHeader", { notGrow: !o.fitToContent }])
        }, [
          P("div", bi, q(o.title || m(x)("r.title")), 1),
          P("div", ki, [
            Ne(l.$slots, "bts")
          ])
        ], 2),
        o.fitToContent ? (T(), N("div", wi, [
          Ne(l.$slots, "default")
        ])) : (T(), N("div", _i, [
          P("div", Vi, [
            Ne(l.$slots, "default")
          ])
        ]))
      ], 2)
    ], 4));
  }
}), Ci = /* @__PURE__ */ ce({
  __name: "SelectScrollMore",
  props: {
    modelValue: {},
    url: {},
    searchData: { default: () => ({ size: 10 }) },
    getOptions: { type: Boolean, default: !0 },
    optionFilter: {},
    optionsLabelKey: { default: "name" },
    optionsValKey: { default: "id" },
    searchKey: { default: "name" },
    searchWordsRequired: { type: Boolean, default: !1 },
    collectLabel: { type: Boolean, default: !1 },
    placeholder: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change", "update-option-finish"],
  setup(t, { emit: o }) {
    const n = o, e = t;
    let l = E(1), i = 1;
    const r = E(""), f = gt([]);
    let s = {}, y = !0, p = !1;
    const c = "scm" + Math.random(), u = j(() => r.value ? x("r.searchFor") + r.value : e.placeholder || x("r.pInput")), v = j({
      get() {
        return e.modelValue ?? "";
      },
      set(R) {
        if (n("update:modelValue", R ?? ""), e.collectLabel && R !== void 0) {
          let M = {};
          for (let h of f.value)
            if (h[e.optionsValKey] === R) {
              M = JSON.parse(JSON.stringify(h));
              break;
            }
          n("on-change", M);
        }
      }
    }), b = j(() => e.searchKey ? {
      ...e.searchData,
      current: l.value,
      [e.searchKey]: r.value
    } : {
      ...e.searchData,
      current: l.value
    });
    Se(
      () => e.getOptions,
      (R) => {
        R ? y && K() : k();
      },
      { immediate: !0 }
    ), Se(
      () => e.url,
      (R) => {
        R && (p = !0);
      }
    );
    const g = E();
    function S() {
      g.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", B);
    }
    function k() {
      y || (v.value = "", y = !0, r.value = "", f.value = [], l.value = 1, i = 1, s = {}, p = !1);
    }
    function V(R) {
      for (let M of f.value)
        if ((M == null ? void 0 : M.label) === R)
          return !0;
      return !1;
    }
    const B = Dt(function(R) {
      var h;
      const M = (h = R == null ? void 0 : R.target) == null ? void 0 : h.value;
      V(M) || (Re(M) ? (p ? k() : (De(s) && (s.current = l.value, s.pages = i, s.options = pe(f.value)), Re(v.value) && (v.value = "")), r.value = String(M), f.value = [], l.value = 1, y = !0, K()) : p ? (k(), K()) : (v.value = "", r.value = "", s.current ? (l.value = s.current, i = s.pages, f.value = pe(s.options), s = {}) : K()));
    }, 600);
    Ft(() => {
      B.cancel();
    });
    function I() {
      p && k(), l.value < i ? (++l.value, $e(function() {
        K();
      })) : kl.warning({
        background: !0,
        content: x("r.noMore")
      });
    }
    function K() {
      return new Promise((R, M) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Re(r.value)) {
            R(!1);
            return;
          }
          qe.get(e.url, b.value).then((h) => {
            var Z;
            y = !1;
            let L = [];
            (Z = h == null ? void 0 : h.data) != null && Z.records ? (L = h.data.records, i = h.data.pages) : h != null && h.data && Y(h.data) === "Array" ? (L = h.data, i = h.pages) : h != null && h.data && Y(h.data) === "Object" && (L = [h.data], i = 1), typeof e.optionFilter == "function" && Y(e.optionFilter) === "Function" && (L = e.optionFilter(L)), De(L) || (L = L.map(($, A) => {
              let H = x("r.optionLabel") + A;
              if (Array.isArray(e.optionsLabelKey)) {
                let U = [];
                for (let w = 1, F = e.optionsLabelKey.length; w < F; w++)
                  U.push($[e.optionsLabelKey[w]]);
                H = `${$[e.optionsLabelKey[0]]}(${String(U)})`;
              } else zl(e.optionsLabelKey) && (H = $[e.optionsLabelKey]);
              if (e.collectLabel) {
                let U = pe($);
                return delete U.value, delete U.label, {
                  value: $[e.optionsValKey],
                  label: H,
                  ...U
                };
              }
              return {
                value: $[e.optionsValKey],
                label: H
              };
            })), f.value.push(...L);
            let _ = {};
            f.value = f.value.filter(($) => _[$ == null ? void 0 : $.value] ? !1 : (_[$ == null ? void 0 : $.value] = !0, !0)), $e(function() {
              n("update-option-finish");
            }), R(!0);
          }).catch(() => {
            kl.error(x("r.getDataError")), M(x("r.getDataError"));
          });
        } else
          R(!1);
      });
    }
    return Ge(S), (R, M) => {
      const h = te("Option"), L = te("Select"), _ = $t("loadmore");
      return fe((T(), le(L, ct({
        modelValue: m(v),
        "onUpdate:modelValue": M[0] || (M[0] = (Z) => Fe(v) ? v.value = Z : null),
        ref_key: "selectScrollSourceRef",
        ref: g,
        "transfer-class-name": c
      }, R.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: m(u),
        disabled: R.disabled
      }), {
        default: ne(() => [
          (T(!0), N(ge, null, Ce(m(f), (Z, $) => (T(), le(h, {
            key: "op" + $,
            value: Z == null ? void 0 : Z.value,
            label: Z == null ? void 0 : Z.label,
            disabled: Z == null ? void 0 : Z.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [_, I, c]
      ]);
    };
  }
}), Rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: oa,
  AsyncCascader: na,
  BtTablePage: ol,
  CheckboxGroupThreeClass: gi,
  CheckboxGroupTwoClass: ri,
  CheckboxTree: Uo,
  Date: ua,
  EditorPro: da,
  FormGroup: Ko,
  FormModal: zo,
  FormR: Kt,
  FullPop: qa,
  HeaderBt: El,
  Hello: Ja,
  IconTxtBtn: Yt,
  InputMap: aa,
  MonthRange: ra,
  Page404: en,
  PagePro: ta,
  SearchForm: sl,
  SelectInput: la,
  SelectScrollMore: Ci,
  ShowHidePanel: ll,
  ShowHidePanelB: Gn,
  SideMenu: Bn,
  SideMenuPro: Nn,
  TableIconBtn: Jl,
  TableSearch: Hn,
  TableSetting: Zl,
  TransferBox: ti,
  UploadGroup: sa,
  WellCard: Si
}, Symbol.toStringTag, { value: "Module" })), Ti = { class: "a4Line aL notPrint" }, Bi = { class: "a4Line aR notPrint" }, Li = { class: "a4Line bL notPrint" }, xi = { class: "a4Line bR notPrint" }, Oi = { class: "topsL notPrint" }, Ii = { class: "topsLTitle" }, Ai = { class: "topsLBtn" }, Pi = { class: "topsLHelp" }, Ri = { key: 0 }, Mi = { key: 1 }, $i = { key: 2 }, Fi = ["innerHTML"], Di = /* @__PURE__ */ ce({
  __name: "PrintModal",
  setup(t) {
    const o = ul(), n = E(), e = E(!1), l = E(!1), i = E(!1), r = E(100), f = E(), s = E(715), y = E(!1), p = E(), c = "tablePrint_" + Date.now().toString(), u = E(""), v = E([]), b = E([]), g = E(!1), S = j(() => ({
      width: s.value + "px"
    })), k = () => {
      p.value && window.sessionStorage.removeItem("print_" + p.value), window.sessionStorage.removeItem(c), window.close();
    }, V = () => {
      y.value && (y.value = !1);
    }, B = () => {
      g.value = !0;
    }, I = (L) => {
      g.value && (s.value = (L == null ? void 0 : L.layerX) - 20);
    }, K = () => {
      g.value && (g.value = !1);
    }, R = () => {
      y.value = !1;
      let L = window.setTimeout(() => {
        window.clearTimeout(L), window.print();
      }, 100);
    }, M = (L) => {
      if (typeof f.value == "function")
        return f.value(L);
    }, h = () => {
      var L, _, Z, $, A, H, U;
      if (p.value = (L = o == null ? void 0 : o.params) == null ? void 0 : L.isFrom, p.value) {
        let w = window.sessionStorage.getItem("print_" + p.value);
        if (w) {
          const F = JSON.parse(w);
          if (!F) {
            e.value = !0;
            return;
          }
          if (v.value = F.columns, b.value = F.data, n.value = F.title, u.value = ((_ = F.config) == null ? void 0 : _.customClass) || "", l.value = ((Z = F.config) == null ? void 0 : Z.domPrint) || !1, i.value = (($ = F.config) == null ? void 0 : $.autoPrint) || !1, r.value = ((A = F.config) == null ? void 0 : A.autoPrintTimeout) || 100, s.value = ((H = F.config) == null ? void 0 : H.width) || 715, document.title = (n.value || x("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString(), (U = F.funcArr) != null && U.length) {
            for (let D of F.funcArr)
              if (D.name === "spanMethod") {
                f.value = new Function("return " + D.func)();
                break;
              }
          }
        } else
          e.value = !0;
      }
    };
    return Ge(() => {
      if (i.value) {
        let L = window.setTimeout(() => {
          window.clearTimeout(L), R();
        }, r.value);
      }
      document.addEventListener("click", V), document.addEventListener("mousemove", I), document.addEventListener("mouseup", K);
    }), h(), (L, _) => {
      const Z = te("Table");
      return T(), N("div", {
        class: we(["tablePrintModal", [m(u)]])
      }, [
        fe(P("div", { class: "msgL notPrint" }, q(m(x)("r.printGuide.9")), 513), [
          [ve, m(e)]
        ]),
        fe(P("div", Ti, [
          P("p", null, q(m(x)("r.printGuide.7")), 1),
          _[2] || (_[2] = ke()),
          P("p", null, q(m(x)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        fe(P("div", Bi, [
          P("p", null, q(m(x)("r.printGuide.7")), 1),
          _[3] || (_[3] = ke()),
          P("p", null, q(m(x)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        fe(P("div", Li, [
          P("p", null, q(m(x)("r.printGuide.8")), 1),
          _[4] || (_[4] = ke()),
          P("p", null, q(m(x)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        fe(P("div", xi, [
          P("p", null, q(m(x)("r.printGuide.8")), 1),
          _[5] || (_[5] = ke()),
          P("p", null, q(m(x)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        fe(P("div", Oi, [
          P("div", Ii, q(m(n) || m(x)("r.print")), 1),
          P("div", Ai, [
            Q(Yt, {
              icon: "md-help-circle",
              name: m(x)("r.help"),
              onClick: _[0] || (_[0] = jt(($) => y.value = !m(y), ["stop"]))
            }, null, 8, ["name"]),
            Q(Yt, {
              icon: "md-print",
              name: m(x)("r.preview"),
              onClick: R
            }, null, 8, ["name"]),
            m(l) ? ue("", !0) : (T(), le(Zl, {
              key: 0,
              modelValue: m(v),
              "onUpdate:modelValue": _[1] || (_[1] = ($) => Fe(v) ? v.value = $ : null),
              "s-key": c,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            Q(Jl, {
              icon: "md-close",
              onClick: k,
              title: m(x)("r.close")
            }, null, 8, ["title"])
          ]),
          fe(P("div", Pi, [
            m(l) ? ue("", !0) : (T(), N("p", Ri, [
              _[6] || (_[6] = P("span", null, "1. ", -1)),
              P("span", null, q(m(x)("r.printGuide.1")), 1)
            ])),
            m(l) ? ue("", !0) : (T(), N("p", Mi, [
              _[7] || (_[7] = P("span", null, "2. ", -1)),
              P("span", null, q(m(x)("r.printGuide.2")), 1)
            ])),
            m(l) ? (T(), N("p", $i, [
              _[8] || (_[8] = P("span", null, "1. ", -1)),
              P("span", null, q(m(x)("r.printGuide.10")), 1)
            ])) : ue("", !0),
            P("p", null, [
              P("span", null, q(m(l) ? "2. " : "3. "), 1),
              P("span", null, q(m(x)("r.printGuide.3")), 1)
            ]),
            P("p", null, [
              P("span", null, q(m(l) ? "3. " : "4. "), 1),
              P("span", null, q(m(x)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ve, m(y)]
          ])
        ], 512), [
          [ve, !m(e)]
        ]),
        m(l) ? (T(), N("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: re(m(S))
        }, [
          P("div", {
            class: "settingLine",
            onMousedown: jt(B, ["stop"])
          }, null, 32)
        ], 4)) : ue("", !0),
        m(l) ? (T(), N("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: m(b),
          style: re(m(S))
        }, null, 12, Fi)) : ue("", !0),
        m(l) ? ue("", !0) : fe((T(), le(Z, {
          key: 2,
          class: "tablePW",
          columns: m(v),
          data: m(b),
          "span-method": M,
          border: ""
        }, null, 8, ["columns", "data"])), [
          [ve, !m(e)]
        ])
      ], 2);
    };
  }
});
let at = null, Ct = null;
function Ml() {
  document.documentElement.style.setProperty("overflow", "auto"), Ct || (Ct = document.createElement("style"), Ct.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(Ct));
}
function Ni(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: Di
  })), at = t, location.pathname.indexOf("tablePrint") > -1 ? (at.push(location.pathname), Ml()) : location.hash.indexOf("tablePrint") > -1 && (at.push(location.hash.replace(/^#/, "")), Ml());
}
function ca(t) {
  return Y(t) === "Object" && (t.hasOwnProperty("width") || (t.width = t.minWidth || 100), t.hasOwnProperty("minWidth") && delete t.minWidth, t.sortable = !1, delete t.__id, t.resizable = !0, t.children && Y(t.children) === "Array" && (t.children = t.children.map(ca))), t;
}
function Ki(t, o, n, e) {
  var p, c, u;
  if (!at)
    return;
  let l;
  if (!(e != null && e.domPrint)) {
    let v = pe(
      t.filter((b) => (b == null ? void 0 : b.key) || (b == null ? void 0 : b.children))
    );
    v[0].type === "selection" && v.shift(), v.length ? l = v.map(ca) : l = [];
  }
  const i = [];
  e && Object.entries(e).forEach(([v, b]) => {
    typeof b == "function" && (i.push({
      name: v,
      func: b.toString().replaceAll(/[\r\n\t]/g, "").replaceAll(/\s{2,}/g, " ")
    }), delete e[v]);
  });
  let r = (c = (p = at == null ? void 0 : at.currentRoute) == null ? void 0 : p.value) == null ? void 0 : c.fullPath;
  r && (r = (u = r.replace) == null ? void 0 : u.call(r, /\//g, "_"));
  let f = {
    data: o,
    title: n,
    config: e,
    funcArr: i
  };
  e != null && e.domPrint || (f.columns = l), window.sessionStorage.setItem("print_" + r, JSON.stringify(f));
  const s = at.resolve({
    name: "tablePrint",
    params: { isFrom: r }
  });
  window.open(s == null ? void 0 : s.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const pl = {
  print: Ki,
  init: Ni
};
function zi(t = "", o = "", n = {}) {
  n.domPrint = !0, n.width || (n.width = 715), pl.print([], t, o, n);
}
function Ui(t) {
  var i, r;
  const o = (...f) => Qe.apply(this, f), n = o("r.closePreview"), e = o("r.fullImg");
  let l = "previewImg" + Math.floor(Math.random() * 1e7);
  (r = (i = lt) == null ? void 0 : i.info) == null || r.call(i, {
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (f) => Ae(
      "div",
      {
        class: "previewModal",
        id: l
      },
      [
        Ae(
          "div",
          {
            class: "previewModalInner"
          },
          [
            Ae("img", {
              src: t,
              alt: e
            }),
            Ae(Aa, {
              type: "md-close",
              title: n,
              class: "previewModalDelete",
              onClick() {
                var s, y;
                (y = (s = lt) == null ? void 0 : s.remove) == null || y.call(s);
              }
            })
          ]
        )
      ]
    )
  }), Me(() => {
    var u, v, b, g;
    const f = document.getElementById(l);
    if (!f) return;
    let s = f.parentElement, y = 0, p = null;
    for (; s && y < 4; ) {
      if ((v = (u = s.classList) == null ? void 0 : u.contains) != null && v.call(u, "ivu-modal-content")) {
        p = s;
        break;
      }
      s = s.parentElement, y++;
    }
    p || (p = ((b = f.closest) == null ? void 0 : b.call(f, ".ivu-modal-content")) || null);
    const c = (g = f.parentElement) == null ? void 0 : g.nextSibling;
    p && (p.style.height = "0", p.style.padding = "0"), c && (c.style.display = "none");
  }, 10);
}
const Ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: qe,
  $swal: ze,
  $swalConfirm: Ql,
  clearInterval: Cn,
  clearTimeout: Sn,
  domPrint: zi,
  fullScreenImgByDom: vt,
  fullScreenImgPreview: Ui,
  messageBox: nl,
  setInterval: Vn,
  setTimeout: Me,
  tablePrint: pl
}, Symbol.toStringTag, { value: "Module" }));
(() => {
  if (window.wangeditorMenuInit)
    return;
  class t {
    constructor() {
      pt(this, "title");
      pt(this, "iconSvg");
      pt(this, "tag");
      pt(this, "alwaysEnable");
      this.title = Qe("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
    }
    getValue() {
      return "";
    }
    isActive() {
      return !1;
    }
    isDisabled() {
      return !1;
    }
    exec(e) {
      var s, y, p, c, u, v, b, g, S;
      const l = document.getElementById("editor-preview");
      let i = localStorage.getItem("editorPreviewW") || 300, r = localStorage.getItem("editorPreviewH") || 500;
      const f = (s = e == null ? void 0 : e.getHtml) == null ? void 0 : s.call(e);
      if (l) {
        let k = (v = (u = (c = (p = (y = l.children) == null ? void 0 : y[0]) == null ? void 0 : p.children) == null ? void 0 : c[1]) == null ? void 0 : u.children) == null ? void 0 : v[0], V = (S = (g = (b = l.children) == null ? void 0 : b[0]) == null ? void 0 : g.children) == null ? void 0 : S[1];
        k && (k.innerHTML = f, k.style.width = i + "px"), V && (V.style.height = r + "px"), l.style.display = "block";
      } else {
        const k = document.body, V = document.createElement("div");
        V.setAttribute("id", "editor-preview"), V.setAttribute("class", "editor-preview-mask"), V.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${i}' min='200'><span>高</span><input type='number' value='${r}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let B = V.children[0].children[1], I = V.children[0].children[1].children[0], K = V.children[0].children[0].children[0].children[1];
        const R = 40, M = 70, h = ($) => {
          var U;
          if (($ == null ? void 0 : $.type) === "keyup") {
            let w = !1;
            if ($.key && (w = $.key !== "Enter"), w)
              return;
          }
          let A = (U = $ == null ? void 0 : $.target) == null ? void 0 : U.value;
          if (A = Number(A), I.style && I.style.width === A + "px")
            return;
          const H = k.clientWidth;
          A < 250 ? (A = 250, $.target.value = 250) : A > H - R && (A = H - R, $.target.value = H - R), I.style.width = A + "px", localStorage.setItem("editorPreviewW", A);
        };
        K.addEventListener("blur", h), K.addEventListener("keyup", h);
        let L = V.children[0].children[0].children[0].children[3];
        const _ = ($) => {
          var U;
          if (($ == null ? void 0 : $.type) === "keyup") {
            let w = !1;
            if ($.key && (w = $.key !== "Enter"), w)
              return;
          }
          let A = (U = $ == null ? void 0 : $.target) == null ? void 0 : U.value;
          if (A = Number(A), B.style && B.style.height === A + "px")
            return;
          const H = k.clientHeight;
          A < 300 ? (A = 300, $.target.value = 300) : A > H - M && (A = H - M, $.target.value = H - M), B.style.height = A + "px", localStorage.setItem("editorPreviewH", A);
        };
        L.addEventListener("blur", _), L.addEventListener("keyup", _), V.children[0].children[0].children[1].addEventListener("click", () => {
          V.style.display = "none";
        }), I.innerHTML = f, I.style.width = i + "px", B.style.height = r + "px", k.append(V);
      }
    }
  }
  const o = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  Fa.registerMenu(o), window.wangeditorMenuInit = !0;
})();
const Gi = {
  mounted(t, o) {
    o.value && !dl(o.value) && (t.style.display = "none");
  }
}, Hi = {
  mounted(t, o) {
    var l;
    let n = null;
    if (o.arg && (n = (l = document.getElementsByClassName(o.arg)) == null ? void 0 : l[0]), !n)
      return;
    const e = function() {
      n.scrollTop > 0 && n.scrollHeight - n.scrollTop <= n.clientHeight && o.value && typeof o.value == "function" && o.value();
    };
    n.addEventListener("scroll", e), t.__loadmoreScrollHandler__ = e, t.__loadmoreSelectDom__ = n;
  },
  unmounted(t) {
    t.__loadmoreSelectDom__ && t.__loadmoreScrollHandler__ && t.__loadmoreSelectDom__.removeEventListener("scroll", t.__loadmoreScrollHandler__), delete t.__loadmoreScrollHandler__, delete t.__loadmoreSelectDom__;
  }
}, ps = It.use, ms = It.i18n, $l = {
  ...Ei,
  ...gn
}, Wi = {
  install(t) {
    t.component("JsonViewer", Da);
  }
};
let Fl = !1;
const ji = function(t, o = {}) {
  if (Fl) {
    console.warn("plug-r-qw 已经安装过，请勿重复调用 install");
    return;
  }
  Fl = !0, qe.init(o.useStore || o.store, t), Wi.install(t), o.locale && It.use(o.locale), o.i18n && It.i18n(o.i18n), o.router && (_n(o.router), pl.init(o.router)), o.amap && co(o.amap), o.notRegistryGlobal || (Object.keys(Rl).forEach((n) => {
    t.component(n) || t.component(n, Rl[n]);
  }), Object.keys($l).forEach((n) => {
    t.config.globalProperties[n] = $l[n];
  })), t.directive("has") || t.directive("has", Gi), t.directive("loadmore") || t.directive("loadmore", Hi), t.directive("clickOutside") || t.directive("clickOutside", Yl), t.config.globalProperties.fontSizeBase = 14, t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.btTablePageAlign = "center", t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !0, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, hs = { install: ji };
export {
  qe as $fetch,
  ze as $swal,
  Ql as $swalConfirm,
  oa as AlCascaderMC,
  na as AsyncCascader,
  ol as BtTablePage,
  gi as CheckboxGroupThreeClass,
  ri as CheckboxGroupTwoClass,
  Uo as CheckboxTree,
  ua as Date,
  da as EditorPro,
  Ko as FormGroup,
  zo as FormModal,
  Kt as FormR,
  qa as FullPop,
  El as HeaderBt,
  Ja as Hello,
  Yt as IconTxtBtn,
  aa as InputMap,
  ra as MonthRange,
  en as Page404,
  ta as PagePro,
  sl as SearchForm,
  la as SelectInput,
  Ci as SelectScrollMore,
  ll as ShowHidePanel,
  Gn as ShowHidePanelB,
  Bn as SideMenu,
  Nn as SideMenuPro,
  Jl as TableIconBtn,
  Hn as TableSearch,
  Zl as TableSetting,
  ti as TransferBox,
  sa as UploadGroup,
  Si as WellCard,
  Cn as clearInterval,
  el as clearObj,
  Sn as clearTimeout,
  hn as dataFilterOrToUrl,
  rn as decimalDigitsLimit,
  hs as default,
  vn as directivesComponent,
  zi as domPrint,
  Wl as downloadFileByFormSubmit,
  Jn as downloadFileReaderFile,
  jl as downloadFileWithSpin,
  cs as emptyInput,
  Yn as fakeALinkClick,
  un as fileExport,
  Bt as findCollection,
  al as findPath,
  nn as formDataHeadConfig,
  vt as fullScreenImgByDom,
  Ui as fullScreenImgPreview,
  dn as getColumnsKeys,
  Tl as getFileSrc,
  ea as getFileTypeByName,
  Bl as getFileTypeIconByName,
  Qn as getStringWidth,
  an as has,
  dl as hasPermission,
  ds as htmlDecode,
  us as htmlEncode,
  yn as htmlPrint,
  ms as i18n,
  ji as install,
  Zt as isClient,
  fn as isEmptyValue,
  ht as isImgByFile,
  mn as isNaN,
  cl as isNumberNaN,
  cn as isNumberValue,
  Re as isValidValue,
  ps as locale,
  nl as messageBox,
  Y as myTypeof,
  sn as oneOf,
  tl as removeEmptyValue,
  Vn as setInterval,
  Me as setTimeout,
  rt as setValByOption,
  Je as setValue,
  fl as siblingElems,
  fs as stopBubbling,
  pn as stringLength,
  pl as tablePrint,
  on as toFormData,
  Xn as toHump,
  Gl as toLine,
  ql as tooltipManual,
  Hl as trimObj
};
//# sourceMappingURL=plugRQw.js.map
