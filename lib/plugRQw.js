var pa = Object.defineProperty;
var ma = (t, o, n) => o in t ? pa(t, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[o] = n;
var ft = (t, o, n) => ma(t, typeof o != "symbol" ? o + "" : o, n);
import { getCurrentInstance as At, defineComponent as ce, resolveComponent as te, createElementBlock as N, openBlock as T, normalizeStyle as re, normalizeClass as we, createBlock as le, createCommentVNode as ue, renderSlot as Ne, ref as E, computed as j, withDirectives as fe, unref as m, createElementVNode as P, createVNode as Q, toDisplayString as q, withCtx as ne, createTextVNode as ke, vShow as ve, resolveDirective as Pt, onMounted as Ge, nextTick as $e, onUpdated as ha, onUnmounted as $l, h as Ae, isRef as Fe, Fragment as ge, renderList as Ce, onBeforeMount as Fl, watch as Se, mergeModels as ya, useModel as va, onBeforeUnmount as ol, Teleport as ga, withModifiers as Gt, mergeProps as dt, shallowRef as yt, triggerRef as ba, createSlots as ut, toRef as ka, toValue as Nt } from "vue";
import wa from "deepmerge";
import { debounce as Rt, cloneDeep as pe, isPlainObject as rt, isObject as _a, isFunction as Va, isEmpty as De, isNumber as Vt, last as Ct, isEqual as vt, isString as Dl, first as Ht, find as Wt, indexOf as yl, findIndex as Tt, remove as Sa } from "lodash-es";
import wt from "sweetalert";
import { Tooltip as Ca, Modal as et, Button as Kt, TableColumnConfig as Ta, Radio as Ba, Input as La, Message as vl, Icon as xa } from "view-ui-plus";
import { useRouter as Mt, useRoute as il } from "vue-router";
import Oa from "popper.js";
import jt from "axios";
import zt from "@amap/amap-jsapi-loader";
import Ia from "ar-cascader";
import { Toolbar as Aa, Editor as Pa } from "@wangeditor/editor-for-vue";
import pt from "moment";
import { Boot as Ra } from "@wangeditor/editor";
import Ma from "vue-json-viewer";
const Nl = {
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
}, $a = /(%|){([0-9a-zA-Z_]+)}/g;
function Fa() {
  function t(n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }
  function o(n, ...e) {
    let l;
    return e.length === 1 && typeof e[0] == "object" && (l = e[0]), (!l || !l.hasOwnProperty) && (l = {}), n === void 0 ? "" : n.replace($a, (s, u, c, i) => {
      let y;
      return n[i - 1] === "{" && n[i + s.length] === "}" ? c : (y = t(l, c) ? l[c] : null, y ?? "");
    });
  }
  return o;
}
const Da = Fa();
let Bt = Nl;
const Na = {
  zh: Nl
};
let gl, bl = {}, Ke, Ut = !1, Ka = function(t, o) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, o);
  if (Ke && Ke.global)
    return Ke.global.t(t, o);
  if (Ke && Ke.locale) {
    if (!bl[Ke.locale] || gl != Ke.locale) {
      bl[Ke.locale] = !0;
      let n = Ke.getLocaleMessage(Ke.locale) || {}, e = wa(Na[Ke.locale], n, { clone: !0 });
      Bt = e, Ke.setLocaleMessage(Ke.locale, e), gl = Ke.locale;
    }
    return Ke.hlang(t, o);
  }
};
const Ye = function(t, o) {
  if (Ut)
    return "";
  let n = Ka.apply(this, [t, o]);
  if (n != null)
    return n;
  const e = t.split(".");
  let l = Bt;
  for (let s = 0, u = e.length; s < u; s++) {
    const c = e[s];
    if (n = l[c], s === u - 1) {
      Ut = !0;
      try {
        return Da(n, o);
      } finally {
        Ut = !1;
      }
    }
    if (!n)
      return "";
    l = n;
  }
  return "";
}, za = function(t) {
  Bt = t || Bt;
}, Ua = function(t) {
  Ke = t;
}, Lt = {
  use: za,
  t: Ye,
  i18n: Ua
};
function L(t, o) {
  var e, l, s;
  const n = (s = (l = (e = At()) == null ? void 0 : e.appContext) == null ? void 0 : l.config) == null ? void 0 : s.globalProperties;
  return Ye.apply(n, [t, o]);
}
const Kl = /* @__PURE__ */ ce({
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
    return (s, u) => {
      const c = te("Icon");
      return T(), N("div", {
        class: we({ headerBtCTM: !0, withIconCTM: n.icon || n.withIcon, disabled: n.disabled }),
        style: re({ color: n.color, borderLeftColor: n.borderColor }),
        onClick: l
      }, [
        n.icon ? (T(), le(c, {
          key: 0,
          size: n.iconSize,
          type: n.icon
        }, null, 8, ["size", "type"])) : ue("", !0),
        Ne(s.$slots, "default")
      ], 6);
    };
  }
});
function Le() {
  var n, e;
  const t = (n = At()) == null ? void 0 : n.appContext;
  return ((e = t == null ? void 0 : t.config) == null ? void 0 : e.globalProperties) || {};
}
const Ea = { class: "headerTxtAM" }, Ga = { class: "contentAM" }, Ha = /* @__PURE__ */ ce({
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
    let s = E(!1);
    const u = j(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), c = j(() => ({ zIndex: e.zIndex }));
    function i() {
      s.value = !0, l("on-open");
    }
    function y(p) {
      s.value = !1, l("on-close", p === !0);
    }
    return o({
      open: i,
      close: y
    }), (p, f) => fe((T(), N("div", {
      class: "fullScreenPopBoxAM",
      style: re(m(c))
    }, [
      P("div", {
        class: "headerAM",
        style: re({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: m(u) })
      }, [
        P("span", Ea, q(p.title || m(L)("r.title")), 1),
        Q(Kl, {
          icon: "md-return-left",
          onClick: y
        }, {
          default: ne(() => [
            ke(q(m(L)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      P("div", Ga, [
        Ne(p.$slots, "default")
      ])
    ], 4)), [
      [ve, m(s)]
    ]);
  }
}), Wa = { class: "msg" }, ja = /* @__PURE__ */ ce({
  __name: "Hello",
  setup(t) {
    let o = E("Greetings from Ricky.");
    return (n, e) => (T(), N("span", Wa, q(m(o)), 1));
  }
}), qt = /* @__PURE__ */ ce({
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
      var u;
      return Math.floor(n.size / 17 * ((u = Le()) == null ? void 0 : u.fontSizeBase)) + "px";
    });
    function s(u) {
      n.disabled || e("click", u);
    }
    return (u, c) => {
      const i = te("Icon"), y = Pt("has");
      return fe((T(), N("div", {
        class: we(["tabTopBtnsT", { disabled: n.disabled }]),
        onClick: s,
        style: re({ "font-size": m(l) })
      }, [
        Q(i, {
          type: n.icon,
          size: n.size
        }, null, 8, ["type", "size"]),
        ke(" " + q(n.name || m(L)("r.button")), 1)
      ], 6)), [
        [y, u.has]
      ]);
    };
  }
}), qa = { class: "c404K" }, Xa = { class: "ct404" }, Ja = { class: "p404" }, Ya = /* @__PURE__ */ ce({
  __name: "Page404",
  setup(t) {
    const n = At().appContext.config.globalProperties.$router;
    function e() {
      n.go(-1);
    }
    return (l, s) => {
      const u = te("Button");
      return T(), N("div", qa, [
        s[0] || (s[0] = P("div", { class: "t404" }, "404", -1)),
        P("div", Xa, "UH OH! " + q(m(L)("r.pageNotFound")), 1),
        P("div", Ja, q(m(L)("r.notFoundMsg")), 1),
        Q(u, {
          class: "bt404",
          onClick: e
        }, {
          default: ne(() => [
            ke(q(m(L)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function ze(t, o, n, e = !0) {
  const l = (...s) => Ye.apply(this, s);
  return new Promise((s, u) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let c = l("r.confirm"), i = l("r.cancel"), y = !1, p = "swalConfirmBt", f = "swalCancelBt";
      const r = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let v = "";
      t.text && r.test(Y(t.text)) ? v = "content" : t.text && Y(t.text) === "String" && (v = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (i = t.buttons.cancel.text) && (y = !0), t.buttons.cancel.className && (f = t.buttons.cancel.className), t.buttons.confirm.text && (c = t.buttons.confirm.text), t.buttons.confirm.className && (p = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (i = t.buttons[0], y = !0), t.buttons[1] && (c = t.buttons[1]))), wt({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [v]: t.text,
        buttons: {
          confirm: {
            text: c,
            value: !0,
            visible: !0,
            className: p
          },
          cancel: {
            text: i,
            value: null,
            visible: y,
            className: f
          }
        },
        closeOnClickOutside: t.closeOnClickOutside ?? !0
      }).then((b) => {
        b && typeof t.onOk == "function" && t.onOk(), s(b);
      }).catch((b) => {
        u(b);
      });
    } else if (typeof t == "string") {
      let c = "";
      if (o)
        switch (typeof o) {
          case "string":
            c = "text";
            break;
          case "object":
            c = "content";
            break;
        }
      wt({
        title: t,
        [c]: o || "",
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
      }).then((i) => {
        s(i);
      }).catch((i) => {
        u(i);
      });
    } else if (typeof t == "boolean")
      !t && wt.close && wt.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
const Qa = { class: "tableTooltip" }, Za = /* @__PURE__ */ ce({
  __name: "TableTooltip",
  props: {
    content: { type: [String, Number, Boolean, null] }
  },
  setup(t) {
    const o = t, n = E(), e = E(), l = E(!0);
    let s = null;
    const u = E(200);
    function c() {
      const i = l.value ? n.value : e.value;
      if (!i)
        return;
      let y = document.createRange();
      y.setStart(i, 0), y.setEnd(i, i.childNodes.length);
      const p = y.getBoundingClientRect().width;
      u.value = i.offsetWidth * 2, l.value = p < i.offsetWidth, y = null;
    }
    return Ge(() => {
      c(), s = Rt(() => {
        $e(function() {
          c();
        });
      }, 200), window.addEventListener("resize", s);
    }), ha(c), $l(() => {
      window.removeEventListener("resize", s);
    }), (i, y) => (T(), N("div", Qa, [
      m(l) ? (T(), N("span", {
        key: 0,
        ref_key: "spanRef",
        ref: n,
        class: "contentText"
      }, q(o.content), 513)) : (T(), le(m(Ca), {
        key: 1,
        content: typeof o.content == "boolean" ? String(o.content) : o.content ?? "",
        "max-width": m(u),
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
let it = 0, Ze = null;
function Xt() {
  if (!Ze) {
    Ze = document.createElement("div"), Ze.setAttribute("class", "spinModal"), Ze.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
    const t = document.getElementsByTagName("body")[0];
    t ? t.append(Ze) : document.readyState === "loading" && document.addEventListener("DOMContentLoaded", () => {
      var o;
      (o = document.getElementsByTagName("body")[0]) == null || o.append(Ze);
    });
  }
  return Ze;
}
typeof document < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
  Xt();
}) : Xt());
function kl(t) {
  const o = Ze || Xt();
  t ? o.classList.add("show") : o.classList.remove("show");
}
function xt(t) {
  let o = it;
  t ? it++ : it > 0 && it--, o !== it && (it === 0 ? kl(!1) : o === 0 && kl(!0));
}
const Jt = typeof window < "u";
function Xe(t, o, n) {
  Fe(t[o]) ? t[o].value = n : t[o] = n;
}
function Y(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function en(t) {
  return { style: { display: sl(t) ? "unset" : "none" } };
}
function zl(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function Ul(t) {
  const o = pe(t);
  let n = Y(o);
  if (n === "Object") {
    for (let e in o)
      if (o.hasOwnProperty(e)) {
        let l = Y(o[e]);
        l === "String" ? o[e] = o[e].trim() : (l === "Object" || l === "Array") && Ot(o[e]);
      }
  } else if (n === "Array")
    for (let e = 0, l = o.length; e < l; e++) {
      let s = Y(o[e]);
      s === "String" ? o[e] = o[e].trim() : (s === "Array" || s === "Object") && Ot(o[e]);
    }
  return o;
}
function Ot(t) {
  let o = Y(t);
  if (o === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = Y(t[n]);
        e === "String" ? t[n] = t[n].trim() : (e === "Object" || e === "Array") && Ot(t[n]);
      }
  } else if (o === "Array")
    for (let n = 0, e = t.length; n < e; n++) {
      let l = Y(t[n]);
      l === "String" ? t[n] = t[n].trim() : (l === "Array" || l === "Object") && Ot(t[n]);
    }
}
function Yt(t, o = []) {
  if (Y(t) === "Array")
    return t.forEach((n, e) => {
      switch (Y(n)) {
        case "Array":
        case "Object":
          Yt(n);
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
              Yt(t[n]);
              break;
            default:
              t[n] = null;
          }
      }
    return t;
  } else
    return t;
}
const tn = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function ln(t) {
  let o = new FormData();
  for (let n in t)
    t.hasOwnProperty(n) && t[n] !== null && o.append(n, t[n]);
  return o;
}
function St(t, o, n = !1) {
  if (!t || !o)
    return !1;
  let e, l = "notFoundC", s = function(u, c) {
    if (Array.isArray(u)) {
      if (Y(c) === "Function" && c(u))
        return l = u, [];
      for (let i of u) {
        if (l !== "notFoundC")
          break;
        if (Y(c) === "Function" && c(i) || i === c)
          return l = i, [u.indexOf(i)];
        if (Y(i) === "Array" || Y(i) === "Object") {
          let y = s(i, c);
          if (y !== void 0)
            return [u.indexOf(i), ...y];
        }
      }
    } else if (Y(u) === "Object") {
      if (Y(c) === "Function" && c(u))
        return l = u, [];
      for (let i in u) {
        if (l !== "notFoundC")
          break;
        if (u.hasOwnProperty(i)) {
          if (Y(c) === "Function" && c(i) || u[i] === c)
            return l = u[i], [i];
          if (Y(u[i]) === "Object" || Y(u[i]) === "Array") {
            let y = s(u[i], c);
            if (y !== void 0)
              return [i, ...y];
          }
        }
      }
    }
  };
  return e = s(t, o), n ? e || !1 : l === "notFoundC" ? !1 : l;
}
function an(t, o) {
  for (let n = 0, e = o.length; n < e; n++)
    if (t === o[n])
      return !0;
  return !1;
}
function nn(t, o = 2) {
  let n = new RegExp(`(^-?\\d+\\.\\d{${o}})(\\d+$)`), e = t && String(t) || "";
  return n.test(e) ? Number(e.replace(n, "$1")) : t;
}
function El(t, o = {}, n = "get") {
  let e = document.createElement("form"), l = document.getElementsByTagName("body")[0];
  if (!l) {
    console.error("document.body 不存在，无法执行文件下载");
    return;
  }
  l.appendChild(e), e.setAttribute("style", "display:none"), e.setAttribute("target", ""), e.setAttribute("method", n);
  let s = t;
  if (window != null && window.g) {
    let u = Object.keys(window.g).filter((c) => {
      var i;
      return ((i = c == null ? void 0 : c.indexOf) == null ? void 0 : i.call(c, "URL")) > -1;
    }).map((c) => {
      var i;
      return (i = c.replace) == null ? void 0 : i.call(c, "URL", "");
    });
    for (let c of u) {
      let i = new RegExp("^/" + c + "(?=/.*$)", "i");
      if (i.test(t) && window.g[c + "URL"]) {
        s = window.g[c + "URL"] + t.replace(i, "");
        break;
      }
    }
  }
  if (e.setAttribute("action", s), rt(o)) {
    for (let c in o)
      if (o.hasOwnProperty(c) && (o[c] || o[c] === 0 || o[c] === !1 || o[c] === "")) {
        let i = document.createElement("input");
        i.setAttribute("type", "hidden"), i.setAttribute("name", c), i.setAttribute("value", o[c]), e.appendChild(i);
      }
    e.submit();
    let u = setTimeout(() => {
      l.removeChild(e), clearTimeout(u), u = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
async function on(t, o = {}, n = "get", e = !1, l) {
  if (o.hasOwnProperty("columns") && (o.columns === "" || o.columns === null || o.columns === void 0)) {
    ze.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  e ? await Gl(t, o, n, l) : El(t, o, n);
}
async function Gl(t, o = {}, n = "get", e) {
  xt(!0);
  try {
    let l = t;
    if (window != null && window.g) {
      let f = Object.keys(window.g).filter((r) => (r == null ? void 0 : r.indexOf("URL")) > -1).map((r) => r == null ? void 0 : r.replace("URL", ""));
      for (let r of f) {
        let v = new RegExp("^/" + r + "(?=/.*$)", "i");
        if (v.test(t) && window.g[r + "URL"]) {
          l = window.g[r + "URL"] + t.replace(v, "");
          break;
        }
      }
    }
    const s = {
      method: n.toUpperCase(),
      credentials: "include"
    };
    if (n.toLowerCase() === "get" && Object.keys(o).length > 0) {
      const f = new URLSearchParams();
      for (let r in o)
        o.hasOwnProperty(r) && (o[r] || o[r] === 0 || o[r] === !1 || o[r] === "") && f.append(r, o[r]);
      l += (l.includes("?") ? "&" : "?") + f.toString();
    }
    ["post", "put"].includes(n.toLowerCase()) && (s.headers = {
      "Content-Type": "application/json"
    }, s.body = JSON.stringify(o));
    const u = await fetch(l, s);
    if (!u.ok)
      throw new Error("下载失败");
    let c = e || "download";
    if (!e) {
      let f = u.headers.get("Content-Disposition");
      if (f) {
        f = decodeURIComponent(f);
        const r = f.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        r && r[1] && (c = r[1].replace(/['"]/g, ""));
      } else {
        const r = l.split("?")[0], v = r.substring(r.lastIndexOf("/") + 1);
        v && v.includes(".") && (c = decodeURIComponent(v));
      }
    }
    const i = await u.blob(), y = window.URL.createObjectURL(i), p = document.createElement("a");
    p.href = y, p.download = c, document.body.appendChild(p), p.click(), document.body.removeChild(p), window.URL.revokeObjectURL(y);
  } catch (l) {
    console.error("下载出错:", l);
  } finally {
    xt(!1);
  }
}
function sn(t, o, n = !1) {
  let e;
  if (t && Y(o) === "Array") {
    let l = localStorage.getItem(t);
    if (l) {
      let s = JSON.parse(decodeURI(l));
      e = o.filter((u) => {
        var c;
        return (u == null ? void 0 : u.key) && ((c = s == null ? void 0 : s.indexOf) == null ? void 0 : c.call(s, u.title)) !== -1;
      }).map((u) => u.key);
    } else
      e = o.map((s) => s == null ? void 0 : s.key);
  } else
    e = [];
  return n || (e = String(e)), e;
}
function Re(t) {
  return t != null && t !== "";
}
function rn(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function Hl(t, o = !1, n = "") {
  return function(e, l) {
    var u, c;
    let s;
    if (Array.isArray(t)) {
      let i = [];
      for (let y of t)
        Re((u = l.row) == null ? void 0 : u[y]) && i.push(l.row[y]);
      s = i.join(n);
    } else typeof t == "function" ? s = t(l) : s = (c = l.row) == null ? void 0 : c[t];
    return Ae(Za, { content: o ? s === "" ? "--" : s ?? "--" : s });
  };
}
function un(t) {
  if (rt(t)) {
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
function dn(t) {
  return Y(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : Y(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function st({
  group: t,
  condition: o,
  key: n,
  val: e,
  childKey: l = "children"
}) {
  if (Y(t) !== "Array" || Y(o) !== "Function" || Y(n) !== "String" || Y(l) !== "String")
    return !1;
  t.forEach((s) => {
    o(s) && (Y(e) === "Function" ? s[n] = e(s[n]) : s[n] = e), Y(s[l]) === "Array" && s[l].length > 0 && st({
      group: s[l],
      condition: o,
      key: n,
      val: e,
      childKey: l
    });
  });
}
function sl(t) {
  let o = sessionStorage.getItem("btnPermissions");
  return o && o.trim() !== "" ? o.split(",").indexOf(t) > -1 : !1;
}
function cn(t) {
  return rl(t);
}
function rl(t) {
  return typeof t == "number" && Number.isNaN(t);
}
function fn(t, o = !1, n = !1) {
  if (Y(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), l = "";
  for (let s in e)
    if (e.hasOwnProperty(s)) {
      let u = e[s];
      u === void 0 || u === "" || Y(u) === "String" && u.trim() === "" || u === null || rl(u) ? n ? o ? l += s + "=&" : e[s] = "" : delete e[s] : o && (l += s + "=" + u + "&");
    }
  return o ? l.length > 0 ? l.substring(0, l.length - 1) : "" : e;
}
function Qt(t) {
  let o = {};
  if (Array.isArray(t)) {
    o = [];
    for (let n of t)
      Array.isArray(n) || rt(n) ? o.push(Qt(n)) : Re(n) && o.push(n);
  } else if (rt(t))
    for (let n in t)
      t.hasOwnProperty(n) && (Array.isArray(t[n]) || rt(t[n]) ? o[n] = Qt(t[n]) : Re(t[n]) && (o[n] = t[n]));
  return o;
}
function pn(t) {
  const o = window.open();
  if (o) {
    o.document.write(t);
    let n = setTimeout(() => {
      o.print(), window.clearTimeout(n), n = null;
    }, 10);
  }
}
function ul(t) {
  let o = [], n = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && o.push(t);
  for (; n.nextSibling && (n = n.nextSibling); )
    n.nodeType === 1 && o.push(n);
  return o;
}
function mn(t, o) {
  if (!t)
    return "";
  const n = [];
  if (Array.isArray(o) && typeof o[0] == "string")
    n.push(wl(o));
  else
    for (let e of o)
      n.push(wl(e));
  return fe(t, n);
}
function wl(t) {
  const [o, ...n] = t;
  return [Pt(o), ...n];
}
const hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Yt,
  dataFilterOrToUrl: fn,
  decimalDigitsLimit: nn,
  directivesComponent: mn,
  downloadFileByFormSubmit: El,
  downloadFileWithSpin: Gl,
  fileExport: on,
  findCollection: St,
  formDataHeadConfig: tn,
  getColumnsKeys: sn,
  has: en,
  hasPermission: sl,
  htmlPrint: pn,
  isClient: Jt,
  isEmptyValue: un,
  isNaN: cn,
  isNumberNaN: rl,
  isNumberValue: rn,
  isValidValue: Re,
  myTypeof: Y,
  oneOf: an,
  removeEmptyValue: Qt,
  setValByOption: st,
  setValue: Xe,
  siblingElems: ul,
  stringLength: dn,
  toFormData: ln,
  toLine: zl,
  tooltipManual: Hl,
  trimObj: Ul
}, Symbol.toStringTag, { value: "Module" })), yn = { class: "groupBoxRP" }, vn = ["onClick"], gn = /* @__PURE__ */ ce({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const o = Mt(), n = t;
    function e(s) {
      return (s == null ? void 0 : s.path) === n.pathName ? "active" : "";
    }
    function l(s, u) {
      var p, f, r, v, b, g, S, k;
      (p = s == null ? void 0 : s.preventDefault) == null || p.call(s);
      let c = s == null ? void 0 : s.target;
      if (u && !u.children && !c.classList.contains("active")) {
        o.push(u.path);
        return;
      }
      let i = c.parentNode, y = ul(i);
      for (let V of y) {
        (r = (f = V == null ? void 0 : V.classList) == null ? void 0 : f.remove) == null || r.call(f, "open");
        const B = (v = V == null ? void 0 : V.querySelectorAll) == null ? void 0 : v.call(V, ".open");
        if (B && Array.isArray(B))
          for (let I of B)
            (g = (b = I == null ? void 0 : I.classList) == null ? void 0 : b.remove) == null || g.call(b, "open");
      }
      (k = (S = i == null ? void 0 : i.classList) == null ? void 0 : S.toggle) == null || k.call(S, "open");
    }
    return (s, u) => {
      const c = te("Icon"), i = te("sideMenuGroup", !0);
      return T(), N("ul", yn, [
        (T(!0), N(ge, null, Ce(n.data, (y, p) => (T(), N(ge, {
          key: (y == null ? void 0 : y.path) + p
        }, [
          y ? (T(), N("li", {
            key: 0,
            class: we({ dropItemRP: y.children })
          }, [
            P("div", {
              class: we(["menuTxtR", e(y)]),
              onClick: (f) => l(f, y),
              style: re({ paddingLeft: y.level * 20 + "px" })
            }, [
              y != null && y.icon ? (T(), le(c, {
                key: 0,
                class: "menuIcoL",
                custom: "iconfont " + y.icon
              }, null, 8, ["custom"])) : ue("", !0),
              P("span", null, q((y == null ? void 0 : y.name) || "-- no name --"), 1)
            ], 14, vn),
            y.children ? (T(), le(i, {
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
let gt = [], bt = [], _l = !1;
const bn = function(t) {
  if (_l) {
    console.warn("定时器模块已经初始化过，请勿重复调用 init");
    return;
  }
  t && typeof t.beforeEach == "function" ? (t.beforeEach(() => {
    gt.forEach((o) => {
      window.clearTimeout(o);
    }), bt.forEach((o) => {
      window.clearInterval(o);
    }), gt.length = 0, bt.length = 0;
  }), _l = !0) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Me = function(t, o) {
  if (typeof t != "function")
    throw new TypeError("第一个参数必须是函数");
  if (typeof o != "number" || o < 0)
    throw new TypeError("第二个参数必须是非负数");
  let n = window.setTimeout(t, o);
  return gt.push(n), n;
}, kn = function(t, o) {
  if (typeof t != "function")
    throw new TypeError("第一个参数必须是函数");
  if (typeof o != "number" || o <= 0)
    throw new TypeError("第二个参数必须是正数");
  let n = window.setInterval(t, o);
  return bt.push(n), n;
}, wn = function(t) {
  window.clearTimeout(t);
  const o = gt.indexOf(t);
  o > -1 && gt.splice(o, 1);
}, _n = function(t) {
  window.clearInterval(t);
  const o = bt.indexOf(t);
  o > -1 && bt.splice(o, 1);
}, Vn = { class: "menuListR" }, Sn = /* @__PURE__ */ ce({
  __name: "SideMenu",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: o }) {
    const n = t, e = o, l = il(), s = E(!0), u = E(), c = E(), i = j(() => s.value ? L("r.hideMenu") : L("r.showMenu")), y = j(() => s.value ? "ios-arrow-back" : "ios-arrow-forward");
    Fl(() => {
      let r = localStorage.getItem("menuDisplayR") || "";
      r !== "" ? s.value = JSON.parse(r) : (s.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), Se(
      () => l.path,
      (r) => {
        u.value = r, $e(() => {
          Me(f, 10);
        });
      },
      { immediate: !0 }
    );
    function p() {
      s.value = !s.value, localStorage.setItem("menuDisplayR", JSON.stringify(s.value)), e("on-change", s.value);
    }
    function f() {
      var v, b, g, S, k;
      let r = c.value.querySelectorAll(".dropItemRP");
      for (let V of r)
        (v = V == null ? void 0 : V.querySelector) != null && v.call(V, ".active") && !((g = (b = V.classList) == null ? void 0 : b.contains) != null && g.call(b, "open")) && ((k = (S = V.classList) == null ? void 0 : S.add) == null || k.call(S, "open"));
    }
    return (r, v) => {
      const b = te("Icon");
      return T(), N("div", {
        ref_key: "menuRef",
        ref: c,
        class: we(["menuBoxRP", "cannotSelect", { light: r.light }])
      }, [
        fe(P("div", Vn, [
          Q(gn, {
            data: n.data,
            pathName: m(u)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, m(s)]
        ]),
        Q(b, {
          type: m(y),
          size: 25,
          class: we([{ showIco: !m(s) }, "menuShowHideIco"]),
          title: m(i),
          onClick: p,
          color: m(s) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 2);
    };
  }
}), Cn = { class: "groupBoxRX" }, Tn = ["onMouseenter"], Bn = ["onClick"], Ln = /* @__PURE__ */ ce({
  __name: "SideMenuProGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const o = Mt(), n = t, e = E("");
    function l(i) {
      let y = "menuTxtR ";
      return (i == null ? void 0 : i.path) === n.pathName && (y += "active "), y;
    }
    function s(i, y) {
      var f;
      (f = i == null ? void 0 : i.preventDefault) == null || f.call(i);
      let p = i == null ? void 0 : i.target;
      y && !y.children && !p.classList.contains("active") && o.push(y.path);
    }
    function u(i, y) {
      var p;
      (p = i == null ? void 0 : i.preventDefault) == null || p.call(i), e.value = y == null ? void 0 : y.path;
    }
    function c(i) {
      var y;
      (y = i == null ? void 0 : i.preventDefault) == null || y.call(i), e.value = "";
    }
    return (i, y) => {
      const p = te("Icon"), f = te("SideMenuProGroup", !0);
      return T(), N("ul", Cn, [
        (T(!0), N(ge, null, Ce(n.data, (r, v) => {
          var b;
          return T(), N("li", {
            key: (r == null ? void 0 : r.path) + v,
            class: we({ dropItemRX: r == null ? void 0 : r.children }),
            onMouseenter: (g) => u(g, r),
            onMouseleave: y[0] || (y[0] = (g) => c(g))
          }, [
            P("div", {
              class: we(l(r)),
              onClick: (g) => s(g, r),
              style: re({ paddingLeft: r.level * 20 + "px" })
            }, [
              ke(q((r == null ? void 0 : r.name) || "-- no name --") + " ", 1),
              fe(Q(p, {
                class: "dropIcoRX",
                type: "ios-arrow-forward",
                size: 16
              }, null, 512), [
                [ve, r.children && r.children.length > 0]
              ])
            ], 14, Bn),
            ((b = r == null ? void 0 : r.children) == null ? void 0 : b.length) > 0 ? fe((T(), le(f, {
              key: 0,
              class: "rightChildRX",
              data: r == null ? void 0 : r.children,
              "path-name": i.pathName
            }, null, 8, ["data", "path-name"])), [
              [ve, m(e) === (r == null ? void 0 : r.path)]
            ]) : ue("", !0)
          ], 42, Tn);
        }), 128))
      ]);
    };
  }
}), xn = { class: "groupBoxRX" }, On = ["onClick"], Wl = /* @__PURE__ */ ce({
  __name: "SideMenuTwoLevel",
  props: {
    data: { default: () => [] },
    pathName: { default: "" },
    fromIcoMenu: { type: Boolean }
  },
  setup(t) {
    const o = Mt(), n = t;
    function e(s) {
      let u = "menuTxtR ";
      return (s == null ? void 0 : s.path) === n.pathName && (u += "active "), u;
    }
    function l(s, u) {
      var f, r, v, b, g, S, k, V, B, I, K, R, M, h;
      (f = s == null ? void 0 : s.preventDefault) == null || f.call(s);
      let c = s == null ? void 0 : s.target;
      if (u && !u.children && !c.classList.contains("active")) {
        o.push(u.path);
        return;
      }
      const i = (r = c == null ? void 0 : c.querySelector) == null ? void 0 : r.call(c, ".dropIcoRX"), y = c.parentNode, p = ul(y);
      for (let x of p) {
        (b = (v = x == null ? void 0 : x.classList) == null ? void 0 : v.remove) == null || b.call(v, "open");
        const _ = (g = x == null ? void 0 : x.querySelector) == null ? void 0 : g.call(x, ".dropIcoRX");
        (k = (S = _ == null ? void 0 : _.classList) == null ? void 0 : S.remove) == null || k.call(S, "open");
        const Z = (V = x == null ? void 0 : x.querySelectorAll) == null ? void 0 : V.call(x, ".open");
        for (let $ of Z)
          (I = (B = $ == null ? void 0 : $.classList) == null ? void 0 : B.remove) == null || I.call(B, "open");
      }
      (R = (K = y == null ? void 0 : y.classList) == null ? void 0 : K.toggle) == null || R.call(K, "open"), (h = (M = i == null ? void 0 : i.classList) == null ? void 0 : M.toggle) == null || h.call(M, "open");
    }
    return (s, u) => {
      const c = te("Icon");
      return T(), N("ul", xn, [
        (T(!0), N(ge, null, Ce(n.data, (i, y) => (T(), N("li", {
          key: (i == null ? void 0 : i.path) + y,
          class: we({ dropItemRX: i == null ? void 0 : i.children, open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu })
        }, [
          P("div", {
            class: we(e(i)),
            onClick: (p) => l(p, i),
            style: re({ paddingLeft: i.level * 20 + "px" })
          }, [
            Q(c, {
              class: "menuIcoL",
              custom: "iconfont " + (i.icon || "icon-r-menu-default")
            }, null, 8, ["custom"]),
            P("span", null, q((i == null ? void 0 : i.name) || "-- no name --"), 1),
            fe(Q(c, {
              class: we(["dropIcoRX", { open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu }]),
              type: "ios-arrow-forward"
            }, null, 8, ["class"]), [
              [ve, i.children && i.children.length > 0]
            ])
          ], 14, On),
          i.children ? (T(), le(Ln, {
            key: 0,
            data: i.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : ue("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), In = { class: "groupBoxRX" }, An = ["onMouseenter"], Pn = ["onClick"], Rn = /* @__PURE__ */ ce({
  __name: "SideIcoMenu",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const o = Mt(), n = t, e = E("");
    function l(i) {
      let y = "menuTxtR ";
      return (i == null ? void 0 : i.path) === n.pathName && (y += "active "), y;
    }
    function s(i, y) {
      var f;
      (f = i == null ? void 0 : i.preventDefault) == null || f.call(i);
      let p = i == null ? void 0 : i.target;
      y && !y.children && !p.classList.contains("active") && o.push(y.path);
    }
    function u(i, y) {
      var p;
      (p = i == null ? void 0 : i.preventDefault) == null || p.call(i), e.value = y == null ? void 0 : y.path;
    }
    function c(i) {
      var y;
      (y = i == null ? void 0 : i.preventDefault) == null || y.call(i), e.value = "";
    }
    return (i, y) => {
      const p = te("Icon");
      return T(), N("ul", In, [
        (T(!0), N(ge, null, Ce(n.data, (f, r) => (T(), N("li", {
          key: (f == null ? void 0 : f.path) + r,
          class: we({ dropItemRX: f.children }),
          onMouseenter: (v) => u(v, f),
          onMouseleave: y[0] || (y[0] = (v) => c(v))
        }, [
          P("div", {
            class: we(l(f)),
            onClick: (v) => s(v, f)
          }, [
            Q(p, {
              class: "menuIcoM",
              custom: "iconfont " + (f.icon || "icon-r-menu-default"),
              size: "20"
            }, null, 8, ["custom"])
          ], 10, Pn),
          fe(Q(Wl, {
            class: "rightTwoMenu",
            data: [f],
            pathName: n.pathName,
            fromIcoMenu: ""
          }, null, 8, ["data", "pathName"]), [
            [ve, m(e) === (f == null ? void 0 : f.path)]
          ])
        ], 42, An))), 128))
      ]);
    };
  }
}), Mn = { class: "menuListR" }, $n = /* @__PURE__ */ ce({
  __name: "SideMenuPro",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: o }) {
    const n = t, e = o, l = il(), s = E(!0), u = E(), c = E(), i = j(() => s.value ? L("r.hideMenu") : L("r.showMenu")), y = j(() => s.value ? "iconfont icon-r-menu-hide" : "iconfont icon-r-menu-open");
    Fl(() => {
      let r = localStorage.getItem("menuDisplayRPro") || "";
      r !== "" ? s.value = JSON.parse(r) : (s.value = !0, localStorage.setItem("menuDisplayRPro", JSON.stringify(!0)));
    }), Se(
      () => l.path,
      (r) => {
        u.value = r, $e(() => {
          Me(f, 10);
        });
      },
      { immediate: !0 }
    );
    function p() {
      s.value = !s.value, localStorage.setItem("menuDisplayRPro", JSON.stringify(s.value)), e("on-change", s.value);
    }
    function f() {
      var v, b, g, S, k, V, B, I, K, R, M, h, x, _, Z, $, A, H, U, w, F, D, X, ee, se, me, he, Oe, Ie, ae, xe, Pe, lt, We, G, z, ye, be, _e;
      let r = c.value.querySelectorAll(".dropItemRX");
      for (let W of r) {
        const Ve = (b = (v = W == null ? void 0 : W.childNodes[0]) == null ? void 0 : v.querySelector) == null ? void 0 : b.call(v, ".dropIcoRX");
        (g = W == null ? void 0 : W.querySelector) != null && g.call(W, ".active") ? (V = (k = (S = W == null ? void 0 : W.childNodes[1]) == null ? void 0 : S.classList) == null ? void 0 : k.contains) != null && V.call(k, "rightChildRX") ? (K = (I = (B = W == null ? void 0 : W.childNodes[0]) == null ? void 0 : B.classList) == null ? void 0 : I.contains) != null && K.call(I, "activeR") || (M = W == null ? void 0 : (R = W.childNodes[0].classList).add) == null || M.call(R, "activeR") : ((x = (h = W == null ? void 0 : W.classList) == null ? void 0 : h.contains) != null && x.call(h, "open") || (Z = (_ = W.classList).add) == null || Z.call(_, "open"), Ve && !((A = ($ = Ve == null ? void 0 : Ve.classList) == null ? void 0 : $.contains) != null && A.call($, "open")) && ((U = (H = Ve.classList).add) == null || U.call(H, "open"))) : (D = (F = (w = W == null ? void 0 : W.childNodes[1]) == null ? void 0 : w.classList) == null ? void 0 : F.contains) != null && D.call(F, "rightChildRX") ? (se = (ee = (X = W == null ? void 0 : W.childNodes[0]) == null ? void 0 : X.classList) == null ? void 0 : ee.contains) != null && se.call(ee, "activeR") && ((he = W == null ? void 0 : (me = W.childNodes[0].classList).remove) == null || he.call(me, "activeR")) : ((Ie = (Oe = W == null ? void 0 : W.classList) == null ? void 0 : Oe.contains) != null && Ie.call(Oe, "open") && !((xe = (ae = W == null ? void 0 : W.classList) == null ? void 0 : ae.contains) != null && xe.call(ae, "fromIcoMenu")) && ((lt = (Pe = W.classList).remove) == null || lt.call(Pe, "open")), (G = (We = Ve == null ? void 0 : Ve.classList) == null ? void 0 : We.contains) != null && G.call(We, "open") && !((ye = (z = Ve == null ? void 0 : Ve.classList) == null ? void 0 : z.contains) != null && ye.call(z, "fromIcoMenu")) && ((_e = (be = Ve.classList).remove) == null || _e.call(be, "open")));
      }
    }
    return (r, v) => {
      const b = te("Icon");
      return T(), N("div", {
        ref_key: "menuProRef",
        ref: c,
        class: we(["menuBoxRPro", "cannotSelect", { light: r.light }])
      }, [
        fe(P("div", Mn, [
          Q(Wl, {
            data: n.data,
            pathName: m(u)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, m(s)]
        ]),
        fe(Q(Rn, {
          class: "icoMenuR",
          data: r.data,
          pathName: m(u)
        }, null, 8, ["data", "pathName"]), [
          [ve, !m(s)]
        ]),
        Q(b, {
          custom: m(y),
          size: 14,
          class: we([{ showIco: !m(s) }, "menuShowHideIco"]),
          title: m(i),
          onClick: p
        }, null, 8, ["custom", "class", "title"])
      ], 2);
    };
  }
}), Fn = ["title"], jl = /* @__PURE__ */ ce({
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
    function l(s) {
      e.disabled || n("click", s);
    }
    return (s, u) => {
      const c = te("Icon"), i = Pt("has");
      return fe((T(), N("div", {
        class: we(["tableBtnsG", { disabled: e.disabled }]),
        onClick: l,
        title: e.title || m(L)("r.button")
      }, [
        Q(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Fn)), [
        [i, e.has]
      ]);
    };
  }
}), Dn = { class: "contentX" }, Nn = { class: "arrowA" }, Zt = /* @__PURE__ */ ce({
  __name: "ShowHidePanel",
  props: /* @__PURE__ */ ya({
    bg: {}
  }, {
    modelValue: { type: Boolean, default: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const o = va(t, "modelValue"), n = t, e = j(() => o ? "background:" + n.bg || "transparent" : "");
    return (l, s) => {
      const u = te("Icon");
      return T(), N("div", {
        style: re(m(e))
      }, [
        fe(P("div", Dn, [
          Ne(l.$slots, "default")
        ], 512), [
          [ve, o.value]
        ]),
        P("div", Nn, [
          P("div", {
            class: "btA",
            onClick: s[0] || (s[0] = (c) => o.value = !o.value)
          }, [
            Q(u, {
              type: o.value ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Kn = { class: "contentZ" }, zn = /* @__PURE__ */ ce({
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
      set(u) {
        e("update:modelValue", u);
      }
    }), s = j(() => l.value ? "background:" + n.bg : "");
    return (u, c) => (T(), N("div", {
      style: re(m(s))
    }, [
      fe(P("div", Kn, [
        Ne(u.$slots, "default")
      ], 512), [
        [ve, m(l)]
      ])
    ], 4));
  }
}), Un = /* @__PURE__ */ ce({
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
    const s = j({
      get() {
        return e.modelValue;
      },
      set(y) {
        n("update:modelValue", y);
      }
    }), u = j({
      get() {
        return e.open;
      },
      set(y) {
        n("on-toggle", y);
      }
    }), c = j(() => u.value ? "ios-arrow-up" : "ios-arrow-down");
    function i() {
      l || (l = !0, n("on-search", s.value), Me(() => {
        l = !1;
      }, 2e3));
    }
    return (y, p) => {
      const f = te("Input"), r = te("icon");
      return T(), N("div", {
        class: "tableSearchV",
        style: re({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Ne(y.$slots, "default", {}, () => [
          Q(f, {
            modelValue: m(s),
            "onUpdate:modelValue": p[0] || (p[0] = (v) => Fe(s) ? s.value = v : null),
            style: re({ width: e.width }),
            search: "",
            onOnSearch: i,
            class: "searchInputC",
            placeholder: e.placeholder || m(L)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        fe(P("span", {
          class: "sbt",
          onClick: p[1] || (p[1] = (v) => u.value = !m(u)),
          style: re({ color: e.btnColor })
        }, [
          Q(r, {
            type: m(c),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ke(q(m(L)("r.adSearch")), 1)
        ], 4), [
          [ve, e.showBtn]
        ])
      ], 4);
    };
  }
}), ql = {
  beforeMount(t, o) {
    t.__vueClickOutsideBinding__ = o;
    function n(e) {
      var l, s;
      if (t.contains(e.target))
        return !1;
      (s = (l = t.__vueClickOutsideBinding__) == null ? void 0 : l.value) == null || s.call(l, e);
    }
    t.__vueClickOutside__ = n, Jt && document.addEventListener("click", n);
  },
  updated(t, o) {
    t.__vueClickOutsideBinding__ = o;
  },
  unmounted(t) {
    Jt && document.removeEventListener("click", t.__vueClickOutside__), delete t.__vueClickOutside__, delete t.__vueClickOutsideBinding__;
  }
};
function Xl(t, o, n, e, l = !1) {
  const s = (...u) => Ye.apply(this, u);
  ze.call(this, {
    title: t || s("r.info.title"),
    text: o || s("r.info.text"),
    icon: n || "warning",
    onOk: e,
    buttons: [s("r.cancel")],
    closeOnClickOutside: l
  });
}
const En = { class: "tabSetF" }, Gn = { class: "cannotSelect" }, Hn = { class: "topCheck" }, Jl = /* @__PURE__ */ ce({
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
    var h, x, _, Z, $;
    const n = o, e = t, l = E(), s = E(), u = E(!0), c = E(!1), i = E(!1), y = E([]), p = j(() => {
      var H;
      let A = L("r.unknown");
      return ((H = e.modelValue) == null ? void 0 : H.length) > y.value.length && (y.value = pe(e.modelValue)), y.value.map((U) => {
        let w = { label: (U == null ? void 0 : U.title) || A };
        return U != null && U.disableShowSetting && (w.disabled = !0), w;
      });
    }), f = j(() => p.value.filter((A) => A == null ? void 0 : A.disabled)), r = j({
      get() {
        var A, H;
        return (H = (A = e.modelValue) == null ? void 0 : A.map) == null ? void 0 : H.call(A, (U) => (U == null ? void 0 : U.title) || L("r.unknown"));
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
    }), v = ($ = (Z = (_ = (x = (h = At()) == null ? void 0 : h.appContext) == null ? void 0 : x.config) == null ? void 0 : _.globalProperties) == null ? void 0 : Z.$i18n) == null ? void 0 : $.locale;
    let b = null;
    Ge(() => {
      let A = L("r.unknown"), H = R();
      H ? r.value = JSON.parse(decodeURI(H)) : e.defaultCheck && (r.value = e.modelValue.filter((U) => U == null ? void 0 : U.showSettingCheck).map((U) => (U == null ? void 0 : U.title) || A)), $e(function() {
        !l.value || !s.value || (b = new Oa(l.value, s.value, {
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
        i.value = !0, (U = b == null ? void 0 : b.update) == null || U.call(b), $e(function() {
          i.value = !1;
        });
      }, 0);
    }), ol(function() {
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
      A.length === p.value.length ? (u.value = !1, c.value = !0) : A.length > f.value.length ? (u.value = !0, c.value = !1) : (u.value = !1, c.value = !1);
    }
    Se(() => r.value, S, {
      immediate: !0,
      deep: !0
    });
    function k() {
      i.value && (M() && Xl(L("r.notSave"), "", "warning", B), i.value = !1);
    }
    function V() {
      i.value ? k() : (i.value = !0, $e(function() {
        var A;
        (A = b == null ? void 0 : b.update) == null || A.call(b);
      }));
    }
    function B() {
      v ? window[e.storage].setItem(e.sKey + "_" + v, encodeURI(JSON.stringify(r.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(r.value))), k();
    }
    function I(A) {
      var H, U;
      if (i.value) {
        if (e.transfer) {
          const w = s.value;
          if (w === (A == null ? void 0 : A.target) || (H = w == null ? void 0 : w.contains) != null && H.call(w, A == null ? void 0 : A.target))
            return;
        }
        (U = A == null ? void 0 : A.preventDefault) == null || U.call(A), k();
      }
    }
    function K() {
      u.value ? c.value = !1 : c.value = !c.value, u.value = !1, c.value ? r.value = p.value.map((A) => A == null ? void 0 : A.label) : r.value = f.value.map((A) => A == null ? void 0 : A.label);
    }
    function R() {
      let A;
      return v ? A = window[e.storage].getItem(e.sKey + "_" + v) : A = window[e.storage].getItem(e.sKey), A;
    }
    function M() {
      var H;
      let A = R();
      if (A) {
        if (A = JSON.parse(decodeURI(A)), (A == null ? void 0 : A.length) !== ((H = r.value) == null ? void 0 : H.length))
          return !0;
        for (let U of A)
          if (r.value.indexOf(U) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (A, H) => {
      const U = te("Icon"), w = te("Checkbox"), F = te("CheckboxGroup");
      return fe((T(), N("div", En, [
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
          P("span", Gn, q(m(L)("r.tabSetting")), 1)
        ], 512),
        (T(), le(ga, {
          to: "body",
          disabled: !e.transfer
        }, [
          fe(P("div", {
            ref_key: "popperRef",
            ref: s,
            class: "tabSetCard",
            style: re({ width: e.width, backgroundColor: e.bg })
          }, [
            P("div", Hn, [
              Q(w, {
                indeterminate: m(u),
                modelValue: m(c),
                "onUpdate:modelValue": H[0] || (H[0] = (D) => Fe(c) ? c.value = D : null),
                onClick: Gt(K, ["prevent"])
              }, {
                default: ne(() => [
                  ke(q(m(L)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              P("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: B
              }, [
                H[2] || (H[2] = P("span", { class: "iconfont icon-r-save" }, null, -1)),
                P("span", null, q(m(L)("r.save")), 1)
              ])
            ]),
            Q(F, {
              modelValue: m(r),
              "onUpdate:modelValue": H[1] || (H[1] = (D) => Fe(r) ? r.value = D : null)
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
            [ve, m(i)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [m(ql), I]
      ]);
    };
  }
});
function Wn(t) {
  return t.replace(/_(\w)/g, function(o, n) {
    return n.toUpperCase();
  });
}
function is(t) {
  let o = document.createElement("div");
  return o.textContent !== void 0 ? o.textContent = t : o.innerText = t, o.innerHTML;
}
function ss(t) {
  let o = document.createElement("div");
  return o.innerHTML = t, o.innerText || o.textContent;
}
function Vl(t) {
  return new Promise((o) => {
    let n = new FileReader();
    n.readAsDataURL(t), n.onloadend = () => {
      o(n.result);
    };
  });
}
function Yl(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function mt(t) {
  return Y(t) === "String" && t.indexOf("image") > -1;
}
function Sl(t) {
  const o = Yl(t);
  let n = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(o) > -1 ? n = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(o) > -1 ? n = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(o) > -1 ? n = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(o) > -1 ? n = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(o) > -1 ? n = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(o) > -1 && (n = "ios-videocam"), n;
}
function jn(t, o) {
  let n = document.createElement("a");
  n.href = o, n.download = t, qn(n);
}
function qn(t) {
  let o = document.createEvent("MouseEvents");
  o.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(o);
}
function el({
  group: t,
  condition: o,
  pathKey: n,
  childKey: e = "children",
  path: l = []
}) {
  if (t && _a(t)) {
    if (Va(o)) {
      if (rt(t)) {
        let s = t, u = pe(l);
        if (o(s))
          return n && s[n] && u.push(s[n]), u;
        if (s[e] && !De(s[e])) {
          n && s[n] && u.push(s[n]);
          let c = el({
            group: s[e],
            condition: o,
            pathKey: n,
            childKey: e,
            path: u
          });
          if (!De(c))
            return c;
        }
      } else if (Array.isArray(t))
        for (let s of t) {
          let u = pe(l);
          if (o(s))
            return n && s[n] ? u.push(s[n]) : u.push(String(t.indexOf(s))), u;
          if (s[e] && s[e].length > 0) {
            n && s[n] ? u.push(s[n]) : u.push(String(t.indexOf(s)));
            let c = el({
              group: s[e],
              condition: o,
              pathKey: n,
              childKey: e,
              path: u
            });
            if (!De(c))
              return c;
          }
        }
    } else if (Array.isArray(t))
      for (let s of t) {
        let u = pe(l);
        if (s === o)
          return u.push(String(t.indexOf(s))), u;
      }
  }
  return [];
}
function Xn(t, o = 12) {
  if (Y(t) === "String" && t.length > 0) {
    let n = document.createElement("span");
    n.style.fontSize = o + "px", n.style.fontFamily = "inherit", n.innerHTML = t, n.style.opacity = "0", n.style.position = "fixed", n.style.top = "3000px", document.body.append(n);
    const e = n.clientWidth;
    return document.body.removeChild(n), e;
  }
  return 0;
}
function rs(t) {
  return t === "" ? null : t;
}
function us(t) {
  var o;
  t = t || window.Event, t != null && t.stopPropagation ? (o = t.stopPropagation) == null || o.call(t) : t && (t.cancelBubble = !0);
}
const He = /* @__PURE__ */ new Map();
let Jn = 0;
function tl({
  height: t,
  width: o = 416,
  title: n,
  content: e,
  onOk: l,
  onCancel: s,
  onClose: u,
  okText: c,
  cancelText: i,
  noWarnIcon: y,
  footerAlign: p,
  cancelBt: f = !0
}) {
  const r = (...V) => Ye.apply(this, V);
  let b = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", g = Y(e) === "String";
  const S = typeof e == "function", k = "msgbox_" + ++Jn;
  He.set(k, !1), et.warning({
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
                Ae("span", n || r("r.info.title")),
                Ae(
                  Kt,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      He.get(k) || (et.remove(), He.delete(k), u && Y(u) === "Function" && u());
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
                Ae("div", { class: "msgBoxConO" }, S ? [e(Ae)] : e || r("r.info.text"))
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
                  Kt,
                  {
                    class: "okBtN",
                    onClick(V) {
                      var B, I, K, R, M, h, x, _, Z;
                      if (l && typeof l == "function") {
                        const $ = l();
                        if ($ && Y($) === "Promise") {
                          He.set(k, !0);
                          const A = (V == null ? void 0 : V.currentTarget) || (V == null ? void 0 : V.target);
                          if (A) {
                            (I = (B = A.classList) == null ? void 0 : B.add) == null || I.call(B, "ivu-btn-loading"), (R = (K = A.nextSibling) == null ? void 0 : K.setAttribute) == null || R.call(K, "disabled", "disabled");
                            const H = (x = (h = (M = A.parentElement) == null ? void 0 : M.parentElement) == null ? void 0 : h.querySelector) == null ? void 0 : x.call(h, ".titleN .closeN");
                            (Z = (_ = H == null ? void 0 : H.classList) == null ? void 0 : _.add) == null || Z.call(_, "disabled");
                          }
                          Promise.resolve($).then(() => {
                            He.set(k, !1), et.remove(), He.delete(k);
                          }).catch(() => {
                            He.set(k, !1), et.remove(), He.delete(k);
                          });
                        } else
                          et.remove(), He.delete(k);
                      }
                    }
                  },
                  () => [
                    Ae("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Ae("span", c || r("r.confirm"))
                  ]
                ),
                Ae(
                  Kt,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onClick() {
                      He.get(k) || (et.remove(), He.delete(k), Y(s) === "Function" && s && s());
                    }
                  },
                  () => i || r("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
const Yn = window.location.origin;
let It = null;
const Cl = (...t) => Ye.apply(It, t);
let Ee = jt.create({
  baseURL: Yn,
  withCredentials: !0
  // 允许携带cookie
});
function Qn() {
  console.info(
    "store为空，请在安装插件时传入store实例，vuex：app.use(plugRQw,{store})，Pinia：app.use(plugRQw,{useStore})"
  );
}
Ee.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function Tl() {
  var t, o;
  if (Ee.store)
    if (typeof Ee.store == "function") {
      const n = Ee.store();
      n.logout && n.logout();
    } else
      (o = (t = Ee.store) == null ? void 0 : t.dispatch) == null || o.call(t, "logout");
  else
    Qn();
}
Ee.interceptors.response.use(
  (t) => {
    var o, n;
    return It && (((o = t == null ? void 0 : t.data) == null ? void 0 : o.code) === 403 || ((n = t == null ? void 0 : t.data) == null ? void 0 : n.code) === 409) && tl({
      content: Cl("r.http." + t.data.code),
      onOk: Tl
    }), t;
  },
  (t) => {
    var o, n;
    return It && (((o = t == null ? void 0 : t.response) == null ? void 0 : o.status) === 403 || ((n = t == null ? void 0 : t.response) == null ? void 0 : n.status) === 409) && tl({
      content: Cl("r.http." + t.response.status),
      onOk: Tl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function Qe(t, o, n, e) {
  if (e != null && e.spin && xt(!1), t) {
    let l = t.data;
    if (l !== void 0) {
      Array.isArray(n) || (n = []);
      for (let s of n) {
        if (typeof l != "object") {
          console.error("请求返回结果不是对象，不可获取成员变量");
          break;
        }
        if (l = l[s], l === void 0) {
          console.error("从请求返回结果获取成员出错，找不到该字段：", s);
          break;
        }
      }
      return l;
    }
    return o && console.warn(o), !1;
  }
  return o && console.warn(o), !1;
}
function Zn(t, o, n, e, l, s, u) {
  return new Promise((c, i) => {
    switch (t) {
      case "get":
        Ee.get(o, { params: n }).then((p) => {
          let f = Qe(p, e, l, s);
          f ? c(f) : i(p);
        }).catch((p) => {
          Qe({}, e, l, s), i(p);
        });
        break;
      case "delete":
        let y = u ? "params" : "data";
        Ee.delete(o, { [y]: n }).then((p) => {
          let f = Qe(p, e, l, s);
          f ? c(f) : i(p);
        }).catch((p) => {
          Qe({}, e, l, s), i(p);
        });
        break;
      case "post":
        Ee.post(o, n, s).then((p) => {
          let f = Qe(p, e, l, s);
          f ? c(f) : i(p);
        }).catch((p) => {
          Qe({}, e, l, s), i(p);
        });
        break;
      case "put":
        Ee.put(o, n, s).then((p) => {
          let f = Qe(p, e, l, s);
          f ? c(f) : i(p);
        }).catch((p) => {
          Qe({}, e, l, s), i(p);
        });
        break;
    }
  });
}
function _t(t, o, n = {}, e, l, s, u) {
  return new Promise((c, i) => {
    var y;
    if (o) {
      s && s.spin && xt(!0);
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
      let f;
      if (((y = s == null ? void 0 : s.headers) == null ? void 0 : y["Content-Type"]) === "multipart/form-data")
        f = n;
      else if (Array.isArray(n) ? f = [] : f = {}, n && !De(n))
        if (Array.isArray(n)) {
          f = [];
          for (let v of n)
            (v || v === 0 || v === !1 || v === "" && s && !s.noEmptyStr) && f.push(v);
        } else {
          f = {};
          for (let v in n)
            n.hasOwnProperty(v) && (n[v] || n[v] === 0 || n[v] === !1 || n[v] === "" && s && !s.noEmptyStr) && (f[v] = n[v]);
        }
      let r = t.toLowerCase();
      Zn(r, p, f, e, l, s, u).then((v) => {
        c(v);
      }).catch((v) => {
        i(v);
      });
    } else
      console.error("没有请求地址:url"), i("没有请求地址:url");
  });
}
const je = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(t, o) {
    Ee.store = t, It = o.config.globalProperties;
  },
  post(t, o, n, e, l) {
    return new Promise((s, u) => {
      _t("post", t, o, n, e, l).then((c) => {
        s(c);
      }).catch((c) => {
        u(c);
      });
    });
  },
  put(t, o, n, e, l) {
    return new Promise((s, u) => {
      _t("put", t, o, n, e, l).then((c) => {
        s(c);
      }).catch((c) => {
        u(c);
      });
    });
  },
  get(t, o, n, e, l) {
    return new Promise((s, u) => {
      _t("get", t, o, n, e, l).then((c) => {
        s(c);
      }).catch((c) => {
        u(c);
      });
    });
  },
  delete(t, o, n, e, l, s = !0) {
    return new Promise((u, c) => {
      _t("delete", t, o, n, e, l, s).then((i) => {
        u(i);
      }).catch((i) => {
        c(i);
      });
    });
  },
  all: jt.all,
  spread: jt.spread,
  config: Ee
}, eo = {
  key: 0,
  class: "pageTotal"
}, to = {
  key: 1,
  class: "pageProSize"
}, Ql = /* @__PURE__ */ ce({
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
    var r;
    const n = o, e = E(), l = t, s = ((r = Le == null ? void 0 : Le()) == null ? void 0 : r.fontSizeBase) || 14, u = E(16), c = j({
      get() {
        return l.modelValue;
      },
      set(v) {
        n("update:modelValue", v), n("on-change", v);
      }
    }), i = j({
      get() {
        return l.pageSize;
      },
      set(v) {
        n("on-page-size-change", v), c.value !== 1 && (c.value = 1);
      }
    }), y = j(() => {
      const v = Xn(String(l.total || 0), s) + u.value + 2;
      return v < 32 ? 32 : v;
    });
    Se(
      y,
      (v) => {
        $e(function() {
          f(v);
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
    function f(v) {
      var g, S, k;
      const b = (k = (S = (g = e.value) == null ? void 0 : g.$el) == null ? void 0 : S.querySelector) == null ? void 0 : k.call(S, "input");
      b != null && b.style && (b.style.width = `${v}px`);
    }
    return Ge(() => {
      u.value = p();
    }), (v, b) => {
      const g = te("Page"), S = te("Option"), k = te("Select");
      return T(), N("div", {
        class: we(["pagePro", { pageProDefault: l.size === "default" }])
      }, [
        l.showTotal ? (T(), N("span", eo, q(m(L)("r.total") + " ") + q(l.total) + q(" " + m(L)("r.items")), 1)) : ue("", !0),
        Q(g, {
          ref_key: "pageRef",
          ref: e,
          modelValue: m(c),
          "onUpdate:modelValue": b[0] || (b[0] = (V) => Fe(c) ? c.value = V : null),
          "page-size": m(i),
          total: l.total,
          size: l.size,
          "page-size-opts": l.pageSizeOpts,
          disabled: l.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        l.showSizer ? (T(), N("div", to, [
          Q(k, {
            modelValue: m(i),
            "onUpdate:modelValue": b[1] || (b[1] = (V) => Fe(i) ? i.value = V : null),
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
                  ke(q(V) + " " + q(m(L)("r.page")), 1)
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
}), lo = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, ao = { class: "topBtn" }, no = { class: "tableContainer growFlexItem" }, oo = { class: "fullHeight relativeBox" }, io = { class: "pageContainer" }, ll = /* @__PURE__ */ ce({
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
    ({ ...Ta });
    const l = t, s = ((We = Le()) == null ? void 0 : We.pageSizes) || [10, 20, 50, 100], u = E(l.data), c = E(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || l.pageSize
    ), i = E(1), y = E(0);
    let p = [], f, r, v = E(l.orderKey), b = E(l.orderDefault);
    const g = E(300), S = j(() => {
      for (let G of l.columns)
        if (G != null && G.fixed)
          return !0;
      return !1;
    }), k = j(() => l.selectionFixed || S.value), V = j(() => {
      let G = {
        ...l.searchData,
        current: i.value,
        size: c.value
      };
      return l.sortable === "custom" && (l.orderKeyFormat === "underline" ? G[b.value] = zl(v.value) : l.orderKeyFormat === "camelcase" && (G[b.value] = Wn(v.value))), G;
    }), B = j(() => {
      let G = l.columns.filter((z) => z && z.type !== "selection");
      if (l.selection || l.radio) {
        let z;
        l.radio ? z = {
          title: " ",
          width: 65,
          render: (ye, be) => Ae(Ba, {
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
        z != null && z.key && z.render === void 0 && (z.tooltip ? z.render = Hl(z.key, l.tableEmptyTdHandle) : z.render = (ye, be) => {
          let _e = "";
          return z != null && z.key && (_e = be.row[z.key]), l.tableEmptyTdHandle ? Ae("span", _e === "" ? "--" : _e ?? "--") : Ae("span", _e);
        });
      }), G;
    }), I = j({
      get() {
        return u.value.map((G, z) => Object.assign({}, G, {
          btKey: "bt-" + z,
          btChecked: !!G.btChecked
        }));
      },
      set(G) {
        u.value = G;
      }
    }), K = j(() => p.map((G) => G == null ? void 0 : G.id)), R = j(() => p.map((G) => G == null ? void 0 : G.btKey)), M = E(), h = E();
    Se(() => l.searchData, x, { deep: !0 }), Se(
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
    function x() {
      i.value = 1, Ie();
    }
    function _() {
      l.initData && Ie();
    }
    function Z(G) {
      u.value.unshift(pe(G)), Me(() => {
        var z, ye;
        (ye = (z = M.value) == null ? void 0 : z.clickCurrentRow) == null || ye.call(z, 0);
      }, 100);
    }
    function $(G, z, ye) {
      let be = null;
      if (typeof z == "number" ? be = z : z && (be = r), be !== null) {
        let _e = u.value[be];
        for (let W in G)
          G.hasOwnProperty(W) && (_e[W] = G[W]);
        ye && Me(() => {
          var W, Ve;
          (Ve = (W = M.value) == null ? void 0 : W.clickCurrentRow) == null || Ve.call(W, be);
        }, 10);
      }
    }
    function A(G) {
      u.value.splice(G, 1), Me(() => {
        var z, ye;
        (ye = (z = M.value) == null ? void 0 : z.clickCurrentRow) == null || ye.call(z, 0);
      }, 100);
    }
    function H(G, z) {
      var ye, be;
      G.btChecked && l.radio || (l.selection || l.radio) && l.rowClickSelect && ((be = (ye = M.value) == null ? void 0 : ye.toggleSelect) == null || be.call(ye, z));
    }
    function U(G, z) {
      f = z.btKey, r = Number(z.btKey.split("-")[1]), l.radio && (u.value[r].btChecked = !0);
    }
    function w(G) {
      if (l.radio)
        for (let z of I.value)
          z != null && z.btKey && z.btKey !== f && (u.value[Number(z.btKey.split("-")[1])].btChecked = !1);
      p = G, e("on-selection-change", G);
    }
    function F() {
      return pe(p);
    }
    function D() {
      Ie();
    }
    function X(G) {
      c.value = G, localStorage.setItem("btPageSize", String(G)), i.value === 1 && Ie();
    }
    function ee({ key: G, order: z }) {
      z === "normal" ? (v.value = l.orderKey, b.value = l.orderDefault) : (v.value = G, b.value = z), i.value = 1, Oe();
    }
    function se(G) {
      var ye, be, _e, W, Ve, at, nt, ct;
      const z = G;
      if (typeof z == "number")
        me(), r = z, f = (be = (ye = I.value) == null ? void 0 : ye[z]) == null ? void 0 : be.btKey, (W = (_e = M.value) == null ? void 0 : _e.clickCurrentRow) == null || W.call(_e, z);
      else if (Array.isArray(z)) {
        if (l.radio || !l.selection)
          return;
        me();
        for (let qe of z)
          (at = (Ve = M.value) == null ? void 0 : Ve.clickCurrentRow) == null || at.call(Ve, qe);
      } else if (typeof z == "function")
        for (let qe = 0; qe < I.value.length; qe++) {
          const kt = I.value[qe];
          z(kt) && ((ct = (nt = M.value) == null ? void 0 : nt.clickCurrentRow) == null || ct.call(nt, qe));
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
      p.length > 0 && (p = [], e("on-selection-change", [])), f = null, r = null;
    }
    function he() {
      u.value = [], me(), i.value = 1, y.value = 0;
    }
    function Oe(G, z, ye) {
      return new Promise((be) => {
        G && (b.value = G), z && (v.value = z), l.url ? je[l.method](l.url, V.value, "", [], { spin: l.getDataLoading }).then((_e) => {
          var Ve, at;
          let W;
          ye || me(), typeof l.dataHandler == "function" ? W = l.dataHandler(_e) : W = _e, W.data ? (W.data.records || W.data.records === null ? u.value = W.data.records || [] : W.data.page ? (W.data.page.records || W.data.page.records === null) && (u.value = W.data.page.records || []) : W.data.data ? (W.data.data.records || W.data.data.records === null) && (u.value = W.data.data.records || []) : u.value = W.data, y.value = ((Ve = W.data.page) == null ? void 0 : Ve.total) || ((at = W.data.data) == null ? void 0 : at.total) || W.data.total || W.total || 0, y.value === 0 && i.value > 1 && u.value && u.value.length === 0 ? i.value = 1 : i.value > 1 && y.value <= (i.value - 1) * c.value && (i.value--, $e(function() {
            Oe(G, z);
          })), e("on-data-change", W), be(W)) : (console.warn("请求返回数据有误，无法使用"), he(), e("on-data-change", W));
        }).catch((_e) => {
          me(), he(), e("on-data-change", _e);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Ie(G, z, ye) {
      l.radio && (G || l.rowClickNum !== -1) ? Oe(z, ye, G).then(() => {
        u.value.length > 0 && Me(() => {
          var be, _e, W, Ve;
          G ? (_e = (be = M.value) == null ? void 0 : be.clickCurrentRow) == null || _e.call(be, r || 0) : (Ve = (W = M.value) == null ? void 0 : W.clickCurrentRow) == null || Ve.call(W, l.rowClickNum);
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
    const lt = Rt(Pe, 300);
    return Ge(() => {
      _(), k.value && (ae(), window.addEventListener("resize", lt));
    }), ol(() => {
      k.value && window.removeEventListener("resize", lt);
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
      return T(), N("div", lo, [
        fe(P("div", ao, [
          Ne(G.$slots, "tableSetting"),
          Ne(G.$slots, "topMsg"),
          Ne(G.$slots, "topBtnGroup")
        ], 512), [
          [ve, l.showTopRow]
        ]),
        P("div", no, [
          P("div", oo, [
            P("div", {
              ref_key: "tableContainerLOI",
              ref: h,
              class: "fullFlowContent"
            }, [
              Q(ye, dt({
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
        fe(P("div", io, [
          l.usePagePro ? (T(), le(Ql, {
            key: 0,
            modelValue: m(i),
            "onUpdate:modelValue": z[0] || (z[0] = (_e) => Fe(i) ? i.value = _e : null),
            total: m(y),
            showTotal: l.showTotal,
            pageSize: m(c),
            showSizer: l.showSizer,
            pageSizeOpts: m(s),
            size: l.pageComponentSize,
            onOnChange: D,
            onOnPageSizeChange: X
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (T(), le(be, {
            key: 1,
            modelValue: m(i),
            "onUpdate:modelValue": z[1] || (z[1] = (_e) => Fe(i) ? i.value = _e : null),
            total: m(y),
            pageSize: m(c),
            pageSizeOpts: m(s),
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
}), Zl = /* @__PURE__ */ ce({
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
        let f = {
          key: p,
          val: null
        };
        l.value && l.value !== p && (f.beforeKey = l.value), n("update:modelValue", f), n("on-change", f);
      }
    }), s = j({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(p) {
        n("update:modelValue", {
          key: l.value,
          val: p
        });
      }
    }), u = j(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), c = j(() => ({
      width: typeof e.itemWidth == "number" ? e.itemWidth + "px" : e.itemWidth
    }));
    function i(p) {
      p != null && p.target && p.target.value !== void 0 && y({
        key: l.value,
        val: p.target.value
      });
    }
    const y = Rt((p) => {
      n("on-change", p);
    }, 500);
    return (p, f) => {
      const r = te("Option"), v = te("Select"), b = te("Input");
      return T(), N("div", null, [
        Q(v, {
          modelValue: m(l),
          "onUpdate:modelValue": f[0] || (f[0] = (g) => Fe(l) ? l.value = g : null),
          style: re(m(u)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: ne(() => [
            (T(!0), N(ge, null, Ce(e.selectOption, (g, S) => (T(), le(r, {
              value: g == null ? void 0 : g.val,
              label: g == null ? void 0 : g.label,
              key: "selectInputOp" + (g == null ? void 0 : g.value) + S,
              style: re({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        Q(b, {
          modelValue: m(s),
          "onUpdate:modelValue": f[1] || (f[1] = (g) => Fe(s) ? s.value = g : null),
          placeholder: e.placeholder || m(L)("r.pInput"),
          style: re(m(c)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: i
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
let al = { securityJsCode: "", key: "" };
function so({ securityJsCode: t, key: o }) {
  al.securityJsCode = t, al.key = o;
}
function Bl(t) {
  return al[t];
}
const ro = { class: "searchInputWrap" }, uo = { class: "addressListWrap" }, co = { class: "addressList" }, fo = ["onClick"], po = { class: "addressName" }, mo = {
  key: 0,
  class: "addressDetail"
}, ea = /* @__PURE__ */ ce({
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
    const n = o, e = t, l = E(""), s = E([]), u = j({
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
    }), c = j(() => Vt(e.width) ? e.width + "px" : e.width), i = j(() => Vt(e.height) ? e.height + "px" : e.height ? e.height : Vt(e.width) ? e.width * 0.66 + "px" : "200px"), y = j(() => ({
      width: c.value,
      position: "relative"
    })), p = j(() => e.inputInMap ? {
      width: c.value,
      height: i.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    } : {
      width: c.value,
      height: i.value,
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
    const f = "mapId" + Math.floor(Math.random() * 1e9), r = E(null), v = E(null);
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
      zt.load({
        key: Bl("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((_) => {
        k = _, V = new k.Map(f).on("complete", () => {
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
        zt.load({
          key: Bl("key"),
          version: "2.0",
          plugins: ["AMap.AutoComplete"]
        }).then((_) => {
          I || (I = new _.Autocomplete({
            city: "全国",
            type: ""
          })), I.search(l.value, (Z, $) => {
            Z === "complete" && $.info === "OK" ? s.value = $.tips.slice(0, 10).filter((A) => {
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
            }) : (s.value = [], console.warn("地址搜索失败", $));
          });
        });
      }
    }
    function M(_) {
      l.value = _.name, s.value = [], typeof _.lng == "number" && typeof _.lat == "number" ? (e.showMap && h({
        name: _.name,
        lng: _.lng,
        lat: _.lat
      }), u.value = {
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
          }), u.value = {
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
      }) : (u.value = {
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
      x(_, Z), H.on("dragend", () => {
        let U = H.getPosition();
        u.value = {
          name: $ || null,
          lng: U.lng,
          lat: U.lat
        }, x(U.lng, U.lat);
      }), H.on("click", (U) => {
        var w, F;
        b && b.open(V, (F = (w = U == null ? void 0 : U.target) == null ? void 0 : w.getPosition) == null ? void 0 : F.call(w));
      }), V == null || V.setFitView();
    }
    function x(_, Z) {
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
    }), $l(() => {
      var _;
      V && (V.destroy(), (_ = zt) == null || _.reset(), V = null, B = null, I = null, b = null);
    }), (_, Z) => (T(), N("div", {
      style: re(m(y)),
      class: we(e.inputInMap ? "containerIKJ" : "containerMapAddress")
    }, [
      P("div", ro, [
        Q(m(La), {
          ref_key: "mapInputRef",
          ref: r,
          modelValue: m(l),
          "onUpdate:modelValue": Z[0] || (Z[0] = ($) => Fe(l) ? l.value = $ : null),
          class: we(e.inputInMap && e.showMap ? { mapInputIKJ: !0 } : "searchInput"),
          placeholder: e.placeholder || m(L)("r.search"),
          disabled: e.disabled,
          search: "",
          "enter-button": "",
          onOnEnter: R,
          onOnSearch: R
        }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
        fe(P("div", uo, [
          P("div", co, [
            (T(!0), N(ge, null, Ce(m(s), ($, A) => (T(), N("div", {
              key: A,
              class: "addressItem",
              onClick: (H) => M($)
            }, [
              P("span", po, q($.name), 1),
              typeof $.address == "string" ? (T(), N("span", mo, q($.address), 1)) : ue("", !0)
            ], 8, fo))), 128))
          ])
        ], 512), [
          [ve, m(s).length > 0]
        ])
      ]),
      fe(P("div", {
        style: re(m(p)),
        ref_key: "mapRef",
        ref: v,
        id: f
      }, null, 4), [
        [ve, e.showMap]
      ])
    ], 6));
  }
});
var Rl;
const ta = /* @__PURE__ */ ce({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (Rl = window == null ? void 0 : window.g) != null && Rl.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const n = o, e = t, l = E([]), s = j({
      get() {
        let p = e.modelValue;
        return Array.isArray(p) ? pe(p) : Vt(p) ? el({
          group: l.value,
          condition: (f) => (f == null ? void 0 : f.value) === p,
          pathKey: "value"
        }) : Dl(p) ? p.split(e.separator) : [];
      },
      set(p) {
        if (e.onlyLastVal)
          De(p) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", Ct(p));
        else {
          if (vt(e.modelValue, p))
            return;
          n("update:modelValue", pe(p));
        }
      }
    });
    function u() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      je.get(e.url).then((p) => {
        var r;
        let f = null;
        (r = p == null ? void 0 : p.data) != null && r.records ? f = p.data.records : p != null && p.data ? f = p.data : p && (f = p), f ? (typeof e.optionFilter == "function" && Y(e.optionFilter) === "Function" && (f = e.optionFilter(f)), l.value = c(f)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function c(p) {
      let f = [];
      for (let r of p) {
        let v = {
          value: r[e.optionVal],
          label: r[e.optionLabel]
        };
        r != null && r.children && !De(r.children) && (v.children = c(r.children)), f.push(v);
      }
      return f;
    }
    function i(p) {
      return e.onlyLastLabel ? Ct(p) : p.join(e.separator);
    }
    function y(p, f) {
      let r = "";
      De(f) || (r = f.map((v) => v == null ? void 0 : v.label).join(e.separator)), n("on-label-change", r);
    }
    return Ge(u), (p, f) => {
      const r = te("Cascader");
      return T(), le(r, {
        data: m(l),
        modelValue: m(s),
        "onUpdate:modelValue": f[0] || (f[0] = (v) => Fe(s) ? s.value = v : null),
        onOnChange: y,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": i,
        placeholder: e.placeholder || m(L)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), la = /* @__PURE__ */ ce({
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
          let s = String(e.modelValue).trim();
          if (/^\d+$/.test(s)) {
            let c = s.substring(0, 2) + "0000000000", i = s.substring(0, 4) + "00000000";
            return [c, i, s];
          }
          return s.indexOf(e.separator) !== -1 ? s.split(e.separator) : [s];
        } else return Array.isArray(e.modelValue) ? pe(e.modelValue) : [];
      },
      set(s) {
        if (De(s))
          n("update:modelValue", null), n("on-name-change", null);
        else {
          let u = Ct(s), c = "", i = "";
          if (u && (c = u.code), c && c.length < 12) {
            let y = [...c];
            for (; y.length < 12; )
              y.push(0);
            c = y.join("");
          }
          if (Array.isArray(s) && (i = s.map((y) => y == null ? void 0 : y.name).join(e.separator)), c) {
            if (c === e.modelValue)
              return;
            n("update:modelValue", c);
          }
          i && n("on-name-change", i);
        }
      }
    });
    return (s, u) => (T(), le(m(Ia), dt(s.$attrs, {
      class: "alCascaderMC",
      modelValue: m(l),
      "onUpdate:modelValue": u[0] || (u[0] = (c) => Fe(l) ? l.value = c : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || m(L)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let Je = 0, Et = [];
function aa(t, o, n, e) {
  var l, s, u;
  e && (e.innerHTML = ((l = t[o]) == null ? void 0 : l.name) ?? "", (s = t[o]) != null && s.name ? e.classList.contains("hide") && e.classList.remove("hide") : e.classList.contains("hide") || e.classList.add("hide")), n && (n.src = ((u = t[o]) == null ? void 0 : u.src) ?? t[o], Je = o);
}
function Ll(t, o, n, e) {
  if (t) {
    let l;
    Je - 1 < 0 ? l = o.length - 1 : l = Je - 1, aa(o, l, n, e);
  }
}
function xl(t, o, n, e) {
  if (t) {
    let l;
    Je + 1 > o.length - 1 ? l = 0 : l = Je + 1, aa(o, l, n, e);
  }
}
function ht(t, o = 0) {
  var k, V, B, I, K, R, M;
  const n = (...h) => Ye.apply(this, h), e = n("r.closePreview"), l = n("r.fullImg"), s = n("r.last"), u = n("r.next");
  let c, i, y;
  Je = o;
  const p = Array.isArray(t);
  p ? (i = ((k = t[Je]) == null ? void 0 : k.src) ?? t[Je], y = (V = t[Je]) == null ? void 0 : V.name) : i = t, p && t.length > 1 ? c = `${s} ： ←, ↑, A, W | ${u} ： →, ↓, D, S | ${e} ： Esc` : c = `${e} ： Esc`;
  let f = Ht(document.getElementsByTagName("body")), r = document.createElement("div");
  r.setAttribute("class", "fullScreenImgByDom"), r.innerHTML = `<div class='previewInner'><div class='pageFBt left${p && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${s}' ></i></div><img alt='${l}' ><div class='pageFBt right${p && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${u}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${c}</p><p class='pName ${y ? "" : "hide"}'>${y}</p>`;
  const v = r.querySelector("img");
  v && i && (v.src = i);
  function b() {
    let h = Ht(document.getElementsByTagName("body"));
    h && r.parentNode && h.removeChild(r), document.removeEventListener("keyup", S);
    const x = Et.findIndex((_) => _.child === r);
    x > -1 && Et.splice(x, 1);
  }
  (I = (B = r.querySelector(".ivu-icon-md-close")) == null ? void 0 : B.addEventListener) == null || I.call(B, "click", b);
  const g = r.querySelector(".pName");
  (K = r.querySelector(".pageFBt.left")) == null || K.addEventListener("click", function() {
    Ll(p, t, v, g);
  }), (R = r.querySelector(".pageFBt.right")) == null || R.addEventListener("click", function() {
    xl(p, t, v, g);
  });
  function S(h) {
    h.keyCode === 37 || h.keyCode === 38 || h.keyCode === 87 || h.keyCode === 65 ? Ll(p, t, v, g) : h.keyCode === 39 || h.keyCode === 40 || h.keyCode === 83 || h.keyCode === 68 ? xl(p, t, v, g) : h.keyCode === 27 && b();
  }
  Et.push({ child: r, keyupHandler: S }), document.addEventListener("keyup", S), (M = f == null ? void 0 : f.appendChild) == null || M.call(f, r), r.focus({ preventScroll: !0 });
}
const ho = {
  key: 0,
  class: "previewBoxM"
}, yo = { class: "imgLoading" }, vo = ["src", "alt"], go = { class: "deleteModal" }, bo = {
  key: 1,
  class: "previewBoxM"
}, ko = {
  key: 0,
  class: "previewImg"
}, wo = ["src", "alt"], _o = { class: "deleteModal" }, Vo = {
  key: 2,
  class: "customFileListM"
}, So = {
  key: 0,
  class: "customFileListItem"
}, Co = ["onClick", "title"], To = { class: "btBoxJ" }, Bo = {
  key: 3,
  class: "customFileListM"
}, Lo = {
  key: 0,
  class: "customFileListItem"
}, xo = { class: "listLoading" }, Oo = ["onClick", "title"], Io = { class: "btBoxJ" };
var Ml;
const na = /* @__PURE__ */ ce({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (Ml = window == null ? void 0 : window.g) != null && Ml.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const n = o, e = t, l = yt([]), s = yt([]), u = yt([]);
    let c = {};
    const i = E(0), y = j(() => !e.manualUpload && e.showImg && v.value ? "img" : e.manualUpload && e.showImg && v.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !v.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !v.value) ? "list" : ""), p = j(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), f = j({
      //文件集合
      get() {
        return e.manualUpload ? r.value : r.value.map((w) => ({ id: w }));
      },
      set(w) {
        e.manualUpload ? r.value = w || [] : r.value = (w == null ? void 0 : w.map((F) => F == null ? void 0 : F.id)) || [];
      }
    }), r = j({
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
          let F = Ht(w);
          n("update:modelValue", F ?? null), n("on-change", F ?? null);
        } else
          n("update:modelValue", pe(w)), n("on-change", pe(w));
      }
    }), v = j(() => {
      let w;
      if (e.manualUpload ? w = f.value : w = s.value, !w)
        return !1;
      for (let F of w) {
        let D;
        if (e.manualUpload ? D = F == null ? void 0 : F.type : D = F == null ? void 0 : F.mimeType, !D || D && !(mt(D) || D === "loading"))
          return !1;
      }
      return !0;
    }), b = j(() => s.value.filter((w) => mt(w == null ? void 0 : w.mimeType))), g = j(() => b.value.map((w) => ({
      src: e.url + "/" + (w == null ? void 0 : w.id) + "/download?preview=true",
      name: w == null ? void 0 : w.name
    }))), S = j(() => f.value.filter((w) => mt(w == null ? void 0 : w.type)));
    Se(S, async (w) => {
      u.value = await V(w);
    }), Se(
      () => f.value,
      async (w) => {
        if (y.value === "localImg")
          w != null && w.length ? l.value = await V(w) : l.value = [];
        else if (w != null && w.length && y.value !== "localList") {
          let F = pe(w);
          const D = pe(s.value);
          for (let X of F)
            if ((X == null ? void 0 : X.name) === void 0)
              if (X.id) {
                const ee = Wt(D, (se) => (se == null ? void 0 : se.id) === X.id);
                ee ? (X.name = ee.name, X.mimeType = ee.mimeType) : c.hasOwnProperty(X.id) ? (X.name = c[X.id].name, X.mimeType = c[X.id].mimeType) : (X.mimeType = "loading", je.get(e.url + "/" + X.id).then((se) => {
                  var me, he, Oe, Ie, ae, xe;
                  X.name = ((Oe = (he = (me = se == null ? void 0 : se.data) == null ? void 0 : me.returnValue) == null ? void 0 : he[0]) == null ? void 0 : Oe.name) || L("r.file") + yl(w, X), X.mimeType = ((xe = (ae = (Ie = se == null ? void 0 : se.data) == null ? void 0 : Ie.returnValue) == null ? void 0 : ae[0]) == null ? void 0 : xe.mimeType) || "unknown", ba(s);
                }).catch(() => {
                  X.name = L("r.file") + yl(F, X);
                }));
              } else
                X.name = L("r.unknown");
          s.value = F;
        } else
          s.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function k(w) {
      return (w == null ? void 0 : w.name) || (w == null ? void 0 : w.split) && Ct(w.split("/")) || w;
    }
    async function V(w) {
      let F = [];
      for (let D of w) {
        let X = await Vl(D);
        F.push(X);
      }
      return F;
    }
    function B(w) {
      if (!e.disabled) {
        let F = f.value;
        F == null || F.splice(w, 1), f.value = F, i.value && i.value--;
      }
    }
    function I(w) {
      w != null && w.id && window.open(e.url + "/" + w.id + "/download");
    }
    function K(w) {
      return e.manualUpload ? (w == null ? void 0 : w.type) && mt(w.type) : (w == null ? void 0 : w.id) && w.mimeType && mt(w.mimeType);
    }
    async function R(w) {
      if (e.manualUpload) {
        let F, D;
        if (typeof w == "number" ? (F = w, D = l.value) : w && (F = Tt(S.value, (X) => X.size === w.size && X.lastModified === w.lastModified), D = u.value), !D)
          return;
        ht(
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
        const F = Tt(b.value, (D) => D.id === w.id);
        ht(g.value, F);
      }
    }
    function M(w) {
      Y(w) === "String" && w.indexOf("http") > -1 ? window.open(w) : Y(w) === "File" && Vl(w).then((F) => {
        jn(w.name, F);
      });
    }
    function h(w) {
      var F, D;
      if (e.length && i.value >= e.length)
        return ze(L("r.info.title"), L("r.uploadLength", [e.length]), "warning"), !1;
      if (i.value++, e.manualUpload) {
        if (w) {
          let X = Yl(w.name);
          if ((F = e.format) != null && F.length && e.format.indexOf(X) < 0)
            return ze(
              L("r.wrongFileType"),
              L("r.supportType") + (((D = e.format) == null ? void 0 : D.length) && String(e.format) || L("r.none")),
              "warning"
            ), i.value--, !1;
          if (e.maxSize && w.size > e.maxSize * 1024)
            return ze(L("r.fileIsBig"), L("r.supportSize") + e.maxSize + "kb", "warning"), i.value--, !1;
          let ee = f.value;
          ee == null || ee.push(w), f.value = ee;
        }
        return !1;
      } else
        return !0;
    }
    function x(w) {
      i.value--, console.warn(w), ze(L("r.uploadError"), "", "error");
    }
    function _(w, F, D) {
      var X, ee, se, me, he, Oe;
      if ((w == null ? void 0 : w.code) === 0) {
        let Ie = f.value;
        F.id = (ee = (X = w.data) == null ? void 0 : X[0]) == null ? void 0 : ee.id, F.name = (me = (se = w.data) == null ? void 0 : se[0]) == null ? void 0 : me.name, F.mimeType = (Oe = (he = w.data) == null ? void 0 : he[0]) == null ? void 0 : Oe.mimeType, c[F.id] = { name: F.name, mimeType: F.mimeType }, Ie == null || Ie.push(F), f.value = Ie;
      } else
        i.value--, ze(L("r.uploadFail"), (w == null ? void 0 : w.message) || "", "error");
    }
    function Z() {
      i.value--, ze(L("r.fileIsBig"), L("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function $() {
      var w;
      i.value--, ze(
        L("r.wrongFileType"),
        L("r.supportType") + (((w = e.format) == null ? void 0 : w.length) && String(e.format) || L("r.none")),
        "warning"
      );
    }
    function A(w) {
      let F = w == null ? void 0 : w.id, D = w == null ? void 0 : w.mimeType;
      F && (Y(D) === "String" && D.indexOf("image") > -1 ? ht(e.url + "/" + F + "/download?preview=true") : window.open(e.url + "/" + F + "/download?preview=true"));
    }
    function H(w) {
      var D, X, ee;
      let F = (ee = (X = (D = w == null ? void 0 : w.response) == null ? void 0 : D.data) == null ? void 0 : X[0]) == null ? void 0 : ee.id;
      U(null, F);
    }
    function U(w, F) {
      if (!(!F && F !== 0) && !e.disabled && r.value.indexOf(F) !== -1) {
        const D = pe(r.value);
        let X = f.value;
        X == null || X.splice(D.indexOf(F), 1), f.value = X, i.value && i.value--;
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
          "on-error": x,
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
          disabled: e.length > 0 && ((se = m(f)) == null ? void 0 : se.length) >= e.length || !!e.disabled
        }, {
          default: ne(() => {
            var ae;
            return [
              Q(D, {
                icon: "md-cloud-upload",
                disabled: e.length > 0 && ((ae = m(f)) == null ? void 0 : ae.length) >= e.length || !!e.disabled
              }, {
                default: ne(() => [
                  ke(q(m(L)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        m(y) === "img" && ((me = m(s)) == null ? void 0 : me.length) > 0 ? (T(), N("div", ho, [
          (T(!0), N(ge, null, Ce(m(s), (ae, xe) => (T(), N(ge, {
            key: ae == null ? void 0 : ae.id
          }, [
            !e.manualUpload && (ae == null ? void 0 : ae.id) !== null ? (T(), N("div", {
              key: 0,
              class: we(["previewImg", { previewLoading: ae.mimeType === "loading" }])
            }, [
              fe(P("div", yo, F[0] || (F[0] = [
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
              }, null, 8, vo), [
                [ve, ae.mimeType !== "loading"]
              ]),
              fe(P("div", go, [
                Q(ee, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: m(L)("r.fView"),
                  onClick: (Pe) => m(ht)(m(g), xe)
                }, null, 8, ["title", "onClick"]),
                Q(ee, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Pe) => U(Pe, ae.id),
                  title: m(L)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ve, ae.mimeType !== "loading"]
              ])
            ], 2)) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(y) === "localImg" && ((he = m(l)) == null ? void 0 : he.length) > 0 ? (T(), N("div", bo, [
          (T(!0), N(ge, null, Ce(m(l), (ae, xe) => (T(), N(ge, {
            key: "manualImg" + xe
          }, [
            e.manualUpload && ae !== null ? (T(), N("div", ko, [
              P("img", {
                src: ae,
                alt: "manualImg" + xe
              }, null, 8, wo),
              P("div", _o, [
                Q(ee, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (Pe) => R(xe),
                  title: m(L)("r.fView")
                }, null, 8, ["onClick", "title"]),
                Q(ee, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Pe) => B(xe),
                  title: m(L)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(y) === "localList" && ((Oe = m(f)) == null ? void 0 : Oe.length) > 0 ? (T(), N("div", Vo, [
          (T(!0), N(ge, null, Ce(m(f), (ae, xe) => (T(), N(ge, {
            key: "manualItem" + xe
          }, [
            e.manualUpload && ae !== null ? (T(), N("p", So, [
              ae.name ? (T(), le(ee, {
                key: 0,
                class: "fileTypeIco",
                type: m(Sl)(ae.name),
                size: "20"
              }, null, 8, ["type"])) : ue("", !0),
              P("span", {
                class: we(["upNameT", { previewName: K(ae) }]),
                onClick: (Pe) => M(ae),
                title: m(L)("r.download")
              }, q(k(ae)), 11, Co),
              P("span", To, [
                K(ae) ? (T(), le(ee, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => R(ae),
                  title: m(L)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                Q(ee, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => B(xe),
                  title: m(L)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(y) === "list" && ((Ie = m(s)) == null ? void 0 : Ie.length) > 0 ? (T(), N("div", Bo, [
          (T(!0), N(ge, null, Ce(m(s), (ae, xe) => (T(), N(ge, {
            key: "defaultItem" + xe
          }, [
            !e.manualUpload && ae ? (T(), N("div", Lo, [
              fe(P("div", xo, F[1] || (F[1] = [
                P("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ve, ae.mimeType === "loading"]
              ]),
              fe(Q(ee, {
                type: m(Sl)(ae.name),
                class: "fileTypeIco",
                size: "20"
              }, null, 8, ["type"]), [
                [ve, ae.mimeType !== "loading"]
              ]),
              fe(P("span", {
                class: "upNameT",
                onClick: (Pe) => I(ae),
                title: m(L)("r.download")
              }, q(ae.name || m(L)("r.file") + (xe + 1)), 9, Oo), [
                [ve, ae.mimeType !== "loading"]
              ]),
              fe(P("span", Io, [
                K(ae) ? (T(), le(ee, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => R(ae),
                  title: m(L)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                Q(ee, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => B(xe),
                  title: m(L)("r.delete")
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
}), oa = /* @__PURE__ */ ce({
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
    const n = o, e = t, l = E(!1), s = E(!1), u = E(!1), c = j({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(S) {
        n("update:modelValue", [S, i.value]), n("on-change", [S, i.value]);
      }
    }), i = j({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(S) {
        n("update:modelValue", [c.value, S]), n("on-change", [c.value, S]);
      }
    }), y = j(
      () => (c.value || "") + ((c.value || i.value) && " - " || "") + (i.value || "")
    ), p = E();
    Ge(() => {
      p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        u.value = !0;
      }), p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        u.value = !1;
      }), p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (S) => {
        var k;
        !e.disabled && (c.value || i.value) && ((k = S == null ? void 0 : S.stopPropagation) == null || k.call(S), b());
      });
    });
    function f() {
      e.disabled || (l.value = !0);
    }
    function r(S) {
      c.value = S, l.value = !1, s.value = !0;
    }
    function v(S) {
      i.value = S, s.value = !1;
    }
    function b() {
      n("update:modelValue", [null, null]), n("on-change", [null, null]);
    }
    function g() {
      l.value = !1, s.value = !1, c.value && i.value === null && (c.value = null);
    }
    return (S, k) => {
      const V = te("DatePicker"), B = te("Icon"), I = te("Input");
      return T(), N("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: p
      }, [
        Q(V, {
          open: m(s),
          modelValue: m(i),
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
          modelValue: m(c),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: r,
          onOnClickoutside: g
        }, {
          default: ne(() => [
            P("div", { onClick: f }, [
              Q(I, {
                class: "aRoot",
                modelValue: m(y),
                "onUpdate:modelValue": k[0] || (k[0] = (K) => Fe(y) ? y.value = K : null),
                readonly: "",
                placeholder: e.placeholder || m(L)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: ne(() => [
                  Q(B, {
                    type: m(u) && (m(c) || m(i)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), ia = /* @__PURE__ */ ce({
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
    const n = o, e = t, l = E(), s = "date-c-r-" + Math.floor(Math.random() * 1e7 + 1e7), u = E({}), c = j({
      get() {
        return e.modelValue;
      },
      set(p) {
        n("update:modelValue", p);
      }
    }), i = j(() => {
      if (Y(e.options) === "Object") {
        const { disabledDate: p, ...f } = e.options;
        return f;
      }
      return {};
    });
    function y(p) {
      var r, v;
      const f = p.target;
      ((v = (r = f.classList) == null ? void 0 : r.contains) != null && v.call(r, "ivu-date-picker-cells-cell") || f.tagName === "EM") && Me(() => {
        var g, S;
        const b = (S = (g = l == null ? void 0 : l.value) == null ? void 0 : g.$refs.pickerPanel) == null ? void 0 : S.rangeState;
        if (b) {
          const k = b.from, V = b.selecting;
          u.value = {
            ...i.value,
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
        u.value = p;
      },
      { immediate: !0 }
    ), Ge(() => {
      var f;
      const p = document.getElementsByClassName(s)[0];
      (f = p == null ? void 0 : p.addEventListener) == null || f.call(p, "click", y, !0);
    }), (p, f) => {
      const r = te("DatePicker");
      return T(), le(r, {
        ref_key: "dateC",
        ref: l,
        modelValue: m(c),
        "onUpdate:modelValue": f[0] || (f[0] = (v) => Fe(c) ? c.value = v : null),
        type: p.type,
        options: m(u),
        placement: p.placement,
        placeholder: p.placeholder,
        clearable: p.clearable,
        disabled: p.disabled,
        editable: !1,
        transferClassName: s,
        transfer: ""
      }, null, 8, ["modelValue", "type", "options", "placement", "placeholder", "clearable", "disabled"]);
    };
  }
}), Ao = { class: "editor-pro-root" }, sa = /* @__PURE__ */ ce({
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
    const n = o, e = t, l = yt(), s = j({
      get() {
        return e.modelValue;
      },
      set(p) {
        n("update:modelValue", p), n("on-change", p);
      }
    }), u = j(
      () => Object.assign(
        {
          placeholder: e.placeholder || L("r.pInput"),
          insertKeys: {
            index: 31,
            keys: ["previewX"]
          }
        },
        e.toolbarConfig
      )
    ), c = j(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(p, f) {
                let r = new FormData();
                r.append("files", p);
                const v = p.name, b = e.imgUploadUrl ?? "/node-serve/file";
                je.post(b, r, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((g) => {
                  if (g && g.data)
                    if (Array.isArray(g.data))
                      for (let S of g.data) {
                        const k = b + "/" + (S == null ? void 0 : S.id) + "/download";
                        f(k, v, k);
                      }
                    else {
                      const S = b + "/" + g.data.id + "/download";
                      f(S, v, S);
                    }
                }).catch(() => {
                  ze(L("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(p, f) {
                let r = new FormData();
                r.append("files", p);
                const v = e.videoUploadUrl ?? "/node-serve/file";
                je.post(v, r, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((b) => {
                  if (b && b.data)
                    if (Array.isArray(b.data))
                      for (let g of b.data) {
                        const S = v + "/" + (g == null ? void 0 : g.id) + "/download";
                        f(S);
                      }
                    else {
                      const g = v + "/" + b.data.id + "/download";
                      f(g);
                    }
                }).catch(() => {
                  ze(L("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), i = j(() => ({
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
    ), ol(() => {
      l.value && l.value.destroy();
    }), (p, f) => (T(), N("div", Ao, [
      fe(Q(m(Aa), {
        class: "editor-pro-toolbar",
        editor: m(l),
        defaultConfig: m(u),
        mode: p.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ve, !p.disabled]
      ]),
      Q(m(Pa), {
        class: "editor-pro-editor",
        modelValue: m(s),
        "onUpdate:modelValue": f[0] || (f[0] = (r) => Fe(s) ? s.value = r : null),
        defaultConfig: m(c),
        mode: p.mode,
        onOnCreated: y,
        style: re(m(i))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Po = {
  key: 19,
  class: "formInfoTxtXN"
}, Ro = {
  key: 20,
  class: "formTitleTxtXN"
}, Mo = {
  key: 21,
  style: { display: "inline-block", width: "4px" }
}, Ol = /* @__PURE__ */ ce({
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
      var f;
      if (e.inline)
        return e.itemWidth;
      {
        const r = (f = e.itemStyle) == null ? void 0 : f.width;
        if (r) {
          if (r.indexOf("%") > -1) {
            const v = Number(r.replace("%", ""));
            return window.isNaN(v) ? `calc(100% - ${e.labelWidth}px)` : `calc((100% - ${e.labelWidth}px)*${v / 100})`;
          } else if (r.indexOf("px") > -1)
            return r;
          return `calc(100% - ${e.labelWidth}px)`;
        }
        return `calc(100% - ${e.labelWidth}px)`;
      }
    });
    function s(f) {
      return {
        withInfo: !!f.info,
        withTitle: !!f.title,
        inlineFormItemXN: e.inline,
        noLabel: f.type === "selectInput",
        [f.class]: f.class,
        slotInput: f.slotPosition
      };
    }
    function u(f, r) {
      n("item-change", {
        e: f,
        root: r
      });
    }
    function c(f, r) {
      n("re-validate", {
        e: f,
        root: r
      });
    }
    function i(f) {
      n("select-input-change", f);
    }
    function y(f, r) {
      n("al-name-change", {
        name: f,
        root: r
      });
    }
    function p(f, r) {
      n("async-label-change", {
        label: f,
        root: r
      });
    }
    return (f, r) => {
      const v = te("InputNumber"), b = te("Input"), g = te("Option"), S = te("Select"), k = te("Radio"), V = te("Icon"), B = te("RadioGroup"), I = te("Checkbox"), K = te("CheckboxGroup"), R = te("TimePicker"), M = te("FormItem");
      return e.item ? (T(), le(M, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: we(["relativeBox", s(e.item)])
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
            "onUpdate:modelValue": r[0] || (r[0] = (h) => e.tempKeys[e.item.tempKey] = h),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || m(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: r[1] || (r[1] = (h) => u(h, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (T(), le(b, {
            key: 2,
            style: re(f.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[2] || (r[2] = (h) => e.tempKeys[e.item.tempKey] = h),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || m(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: r[3] || (r[3] = (h) => u(h, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, ut({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: ne(() => [
                Ne(f.$slots, e.item.slotName, {
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
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[4] || (r[4] = (h) => f.tempKeys[e.item.tempKey] = h),
            style: re(f.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || m(L)("r.pSelect"),
            onOnChange: r[5] || (r[5] = (h) => u(h, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: ne(() => [
              (T(!0), N(ge, null, Ce(e.item.options, (h, x) => (T(), le(g, {
                value: h.val,
                label: h.label || h.val,
                key: "option-" + e.item.key + x,
                disabled: !!h.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (T(), le(Zl, {
            key: 4,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[6] || (r[6] = (h) => f.tempKeys[e.item.tempKey] = h),
            "label-width": f.labelWidth,
            "item-width": m(l),
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || m(L)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: i
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (T(), le(la, {
            key: 5,
            style: re(f.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[7] || (r[7] = (h) => e.valGroup[e.item.key] = h),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || m(L)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: r[8] || (r[8] = (h) => y(h, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (T(), le(ta, {
            key: 6,
            style: re(f.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[9] || (r[9] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || f.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || m(L)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: r[10] || (r[10] = (h) => p(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (T(), le(k, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[11] || (r[11] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: r[12] || (r[12] = (h) => u(h, e.item))
          }, {
            default: ne(() => [
              ke(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (T(), le(B, {
            key: 8,
            style: re(f.itemStyle),
            onOnChange: r[13] || (r[13] = (h) => c(h, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[14] || (r[14] = (h) => f.tempKeys[e.item.tempKey] = h)
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
            "onUpdate:modelValue": r[15] || (r[15] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled,
            onOnChange: r[16] || (r[16] = (h) => u(h, e.item))
          }, {
            default: ne(() => [
              ke(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (T(), le(K, {
            key: 10,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[17] || (r[17] = (h) => f.tempKeys[e.item.tempKey] = h),
            onOnChange: r[18] || (r[18] = (h) => c(h, e.item))
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
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[19] || (r[19] = (h) => f.tempKeys[e.item.tempKey] = h),
            autosize: e.item.autosize || { minRows: 2 },
            style: re(f.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || m(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: r[20] || (r[20] = (h) => u(h, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (T(), le(na, {
            key: 12,
            style: re(f.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[21] || (r[21] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || f.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: r[22] || (r[22] = (h) => c(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (T(), le(ia, {
            key: 13,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[23] || (r[23] = (h) => f.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placeholder: e.item.placeholder || m(L)("r.selectDate"),
            options: e.item.dateOptions || {},
            "time-picker-options": f.item.timePickerOptions || {},
            clearable: e.item.clearable !== !1,
            onOnChange: r[24] || (r[24] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "time-picker-options", "clearable"])) : e.item.type === "time" ? (T(), le(R, {
            key: 14,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[25] || (r[25] = (h) => f.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(L)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: r[26] || (r[26] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (T(), le(oa, {
            key: 15,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[27] || (r[27] = (h) => f.tempKeys[e.item.tempKey] = h),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(L)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: r[28] || (r[28] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (T(), le(sa, {
            key: 16,
            class: "inlineBlock",
            style: re(f.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[29] || (r[29] = (h) => e.valGroup[e.item.key] = h),
            placeholder: e.item.placeholder || m(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: r[30] || (r[30] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (T(), le(ea, {
            key: 17,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[31] || (r[31] = (h) => f.tempKeys[e.item.tempKey] = h),
            style: re(f.itemStyle),
            placeholder: e.item.placeholder || m(L)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            "input-in-map": e.item.inputInMap !== !1,
            onOnChange: r[32] || (r[32] = (h) => u(h, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height", "input-in-map"])) : e.item.type === "custom" ? (T(), N("div", {
            key: 18,
            class: "inlineBlock",
            style: re(f.itemStyle)
          }, [
            Ne(f.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ue("", !0),
          e.item.info ? (T(), N("div", Po, q(e.item.info), 1)) : ue("", !0),
          e.item.title ? (T(), N("div", Ro, q(e.item.title), 1)) : ue("", !0),
          e.inline ? ue("", !0) : (T(), N("span", Mo))
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : ue("", !0);
    };
  }
}), $o = { class: "inlineBlock" }, $t = /* @__PURE__ */ ce({
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
    var pl, ml;
    const e = n, l = t, s = E(null), u = E({}), c = E([]), i = E({});
    let y = [];
    const p = ((pl = window == null ? void 0 : window.g) == null ? void 0 : pl.mgrURL) ?? "";
    let f = E([]), r = [];
    const v = E(!1), b = E(Math.random() * 1e8 + 1e3), g = (ml = window == null ? void 0 : window.g) != null && ml.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
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
              O && O && !(O.message || O.validator) && (O.message = L("r.required"));
          else Y(d[a]) === "Object" && (d[a].message || d[a].validator || (d[a].message = L("r.required")));
      return d;
    }), K = j(() => {
      let d = [];
      if (k.value)
        for (let a of c.value)
          h(a, d);
      else
        h(c.value, d);
      return d.concat(f.value, r);
    }), R = j(() => {
      let d = [];
      if (k.value)
        for (let a of c.value)
          x(a, d);
      else
        x(c.value, d);
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
    function x(d, a) {
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
        y = [], i.value = {}, ae(), me(), $().then(() => {
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
      for (let a in u.value)
        if (u.value.hasOwnProperty(a))
          if (Re(d[a]))
            u.value[a] = d[a];
          else if (Array.isArray(u.value[a]))
            u.value[a] = [];
          else if (Y(u.value[a]) === "Boolean")
            u.value[a] = !1;
          else {
            const O = St(l.formData, (C) => (C == null ? void 0 : C.key) === a);
            O && (O.type === "editor" || O.type === "editorPro") ? u.value[a] = "" : u.value[a] = null;
          }
      H(d);
    }
    function H(d) {
      for (let a in i.value)
        i.value.hasOwnProperty(a) && (Re(d[a]) ? i.value[a] = d[a] : Array.isArray(i.value[a]) ? i.value[a] = [] : Y(i.value[a]) === "Object" && i.value[a].hasOwnProperty("key") && i.value[a].hasOwnProperty("val") ? i.value[a].val = null : i.value[a] = null);
    }
    function U(d) {
      let a = w();
      Re(a[d]) ? i.value[d] = a[d] : Array.isArray(i.value[d]) ? i.value[d] = [] : i.value[d] = null;
    }
    function w() {
      let d = {};
      if (k.value)
        for (let a of c.value)
          F(a, d);
      else
        F(c.value, d);
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
          return ee(d, d.show(u.value));
      } else d.showing || (d.showing = !0);
      return !0;
    }
    function X(d) {
      if (d.reg && typeof d.reg.test == "function")
        return d.reg.test(u.value[d.key]);
      if (Array.isArray(d.val)) {
        for (let a of d.val) {
          if ((u.value[d.key] || u.value[d.key] === 0 || u.value[d.key] === !1) && a === ".")
            return !0;
          if (u.value[d.key] === a)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function ee(d, a) {
      return !(d != null && d.showing) && a && (d != null && d.key) ? (d.showing = a, d.defaultVal !== void 0 && (d.tempKey ? (i.value[d.tempKey] === null || i.value[d.tempKey] === void 0 || (Y(i.value[d.tempKey]) === "Object" || Array.isArray(i.value[d.tempKey])) && De(i.value[d.tempKey])) && se(d, i.value) : (u.value[d.key] === null || u.value[d.key] === void 0) && (u.value[d.key] = d.defaultVal), d.key2 && d.deafultVal2 !== void 0 && (u.value[d.key2] === null || u.value[d.key2] === void 0) && d.type !== "inputMap" && (u.value[d.key2] = d.defaultVal2)), d.tempKey && Pe(i.value[d.tempKey], d)) : d.showing = a, a;
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
      c.value = d;
    }
    function he(d) {
      for (let a of d)
        if (a != null && a.type)
          switch (a.type) {
            case "selectInput":
              const O = "selectInput" + Math.floor(Math.random() * 1e8);
              a.tempKey = O, i.value[O] = E({
                key: a.key || null,
                val: a.defaultVal || null
              }), y.push(
                Se(
                  () => i.value[O],
                  (J) => {
                    Pe(J, a);
                  },
                  { immediate: !0 }
                )
              );
              break;
            case "inputMap":
              const C = "inputMap" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = C, a.key3 ? i.value[C] = a.defaultVal !== void 0 && a.defaultVal2 !== void 0 ? {
                lng: a.defaultVal,
                lat: a.defaultVal2,
                name: a.defaultVal3 || ""
              } : {
                lng: null,
                lat: null,
                name: null
              } : i.value[C] = a.defaultVal !== void 0 && a.defaultVal2 !== void 0 ? {
                lng: a.defaultVal,
                lat: a.defaultVal2
              } : {
                lng: null,
                lat: null
              }, y.push(
                Se(
                  () => i.value[C],
                  (J) => {
                    Pe(J, a);
                  },
                  { immediate: !0 }
                )
              ));
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              const oe = "inputT" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = oe, i.value[oe] = a.defaultVal !== void 0 ? a.defaultVal : null, y.push(
                Se(
                  () => i.value[oe],
                  (J) => {
                    Pe(J, a);
                  },
                  { immediate: !0 }
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
                              let Ue = u.value[Be.valKey];
                              if (Ue && !Array.isArray(Ue) || Array.isArray(Ue) && Ue.length || Ue === 0 || Ue === !1)
                                ie += "&" + Be.key + "=" + Ue;
                              else if (!Be.notRequired)
                                return !1;
                            }
                          return ie;
                        },
                        (ie) => {
                          let Be = pe(i.value[a.tempKey]);
                          if (i.value[a.tempKey] = null, ie && a.optionUrl) {
                            let Ue = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                            Oe((Ue + ie).replace(/\?&/, "?"), a, Be);
                          } else
                            a.localOption ? Xe(a, "options", [...a.localOption]) : Xe(a, "options", []), Re(Be) && Ie(Be, a);
                        },
                        {
                          immediate: !0
                        }
                      )
                    ) : a.localOption ? Xe(a, "options", [...a.localOption]) : Xe(a, "options", []);
                  } else typeof a.changeOption == "object" ? a.changeOption.valKey && a.changeOption.key && y.push(
                    Se(
                      () => typeof a.changeOption == "object" && !Array.isArray(a.changeOption) ? u.value[a.changeOption.valKey] : !1,
                      (J) => {
                        let ie = pe(i.value[a.tempKey]);
                        if (i.value[a.tempKey] = null, (J && !Array.isArray(J) || Array.isArray(J) && J.length || J === 0 || J === !1) && a.optionUrl && typeof a.changeOption == "object" && !Array.isArray(a.changeOption)) {
                          let Be = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                          Oe((Be + "&" + a.changeOption.key + "=" + J).replace(/\?&/, "?"), a, ie);
                        } else
                          a.localOption ? Xe(a, "options", [...a.localOption]) : Xe(a, "options", []), Re(ie) && Ie(ie, a);
                      },
                      { immediate: !0 }
                    )
                  ) : Y(a.changeOption) === "Boolean" && y.push(
                    Se(
                      () => {
                        const J = St(l.formData, (ie) => (ie == null ? void 0 : ie.key) === a.key);
                        return J.optionUrl = ka(J.optionUrl), J.optionUrl.value;
                      },
                      (J) => {
                        let ie = pe(i.value[a.tempKey]);
                        i.value[a.tempKey] = null, J ? Oe(J, a, ie) : (a.localOption ? Xe(a, "options", [...a.localOption]) : Xe(a, "options", []), Re(ie) && Ie(ie, a));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
                else a.optionUrl && Oe(a.optionUrl, a);
              else Y(a.borrowOption) === "String" && $e(function() {
                a.options = St(c.value, (J) => (J == null ? void 0 : J.key) === a.borrowOption).options;
              });
              const de = "opEle" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = de, a.type === "select" && a.multiple || a.type === "checkboxGroup" ? i.value[de] = a.defaultVal !== void 0 ? a.defaultVal : [] : a.booleanVal ? i.value[de] = a.defaultVal !== void 0 ? a.defaultVal ? 1 : 0 : null : i.value[de] = a.defaultVal !== void 0 ? a.defaultVal : null, y.push(
                Se(
                  () => i.value[de],
                  (J) => {
                    Pe(J, a);
                  },
                  {
                    immediate: !0
                  }
                )
              ));
              break;
            case "date":
            case "time":
            case "monthRange":
              const Te = "date" + Math.floor(Math.random() * 1e8);
              a.tempKey = Te, a.dateType === "date" || a.dateType === "datetime" || a.dateType === "time" || a.dateType === "year" || a.dateType === "month" ? i.value[Te] = a.defaultVal || null : (a.dateType === "daterange" || a.dateType === "datetimerange" || a.dateType === "timerange" || a.type === "monthRange") && (i.value[Te] = a.defaultVal && a.defaultVal2 && [a.defaultVal, a.defaultVal2] || []), y.push(
                Se(
                  () => i.value[Te],
                  (J) => {
                    Pe(J, a);
                  }
                )
              );
              break;
          }
    }
    function Oe(d, a, O) {
      je.get(d).then((C) => {
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
              a.optionLabel.forEach((Ue, hl) => {
                let Dt = String(J[Ue]);
                hl === 1 ? Be += "（" + Dt : hl > 1 ? Be += "、" + Dt : Be += Dt;
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
            () => u.value[a.disableOptionByOthers],
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
            () => a.disableOptionByOthers.filter((J) => J).map((J) => u.value[J]),
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
              valGroup: u.value
            })
          )
        );
      }).catch(() => {
        console.warn("拉取选项出错");
      });
    }
    function Ie(d, a) {
      Array.isArray(Nt(a.options)) && Tt(Nt(a.options), { val: d }) !== -1 && (i.value[a.tempKey] = d);
    }
    function ae() {
      if (u.value = {}, k.value)
        for (let d of l.formData)
          xe(d);
      else
        xe(l.formData);
    }
    function xe(d) {
      for (let a of d)
        a != null && a.key && (a.type === "checkboxGroup" || a.type === "select" && a.multiple ? u.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : [] : a.type === "editor" || a.type === "editorPro" ? u.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : "" : (u.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : null, a.key2 && (u.value[a.key2] = a.defaultVal2 !== void 0 && a.show === void 0 ? a.defaultVal2 : null)));
    }
    function Pe(d, a) {
      if (a != null && a.showing)
        switch (a.type) {
          case "selectInput":
            d && (d.beforeKey && delete u.value[d.beforeKey], u.value[d.key] = d.val);
            break;
          case "inputMap":
            if (!a.key || !a.key2)
              return;
            d ? (u.value[a.key] = d.lng, u.value[a.key2] = d.lat, a.key3 && (u.value[a.key3] = d.name)) : (u.value[a.key] = null, u.value[a.key2] = null, a.key3 && (u.value[a.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!a.key)
              return;
            if (d || d === 0) {
              let oe = /^-?\d+(.\d+)?$/;
              a.numberVal && oe.test(d) ? u.value[a.key] = Number(d) : u.value[a.key] = d;
            } else
              u.value[a.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!a.key)
              return;
            if (a.booleanVal && !a.multiple ? u.value[a.key] = d === void 0 || d === "" || d === null ? null : !!d : a.multiple || a.type === "checkboxGroup" ? u.value[a.key] = Object.assign([], d) : u.value[a.key] = d, a.collectLabel) {
              const oe = lt(a, d);
              if (Array.isArray(a.collectLabel)) {
                for (let de of a.collectLabel)
                  if (de != null && de.key && de.valKey) {
                    const Te = We(de.key);
                    let J = null;
                    Array.isArray(oe) ? (J = oe.map((ie) => ie[de.valKey]), u.value[de.key] = J, Te && (i.value[Te.tempKey] = J)) : (oe && Re(oe[de.valKey]) && (J = oe[de.valKey]), u.value[de.key] = J, Te && (Te.booleanVal && typeof J == "boolean" ? i.value[Te.tempKey] = J ? 1 : 0 : i.value[Te.tempKey] = J));
                  }
              } else if (typeof a.collectLabel == "object" && a.collectLabel.key && a.collectLabel.valKey) {
                const de = We(a.collectLabel.key);
                let Te = null;
                Array.isArray(oe) ? (Te = oe.map(
                  (J) => a.collectLabel && !Array.isArray(a.collectLabel) && J[a.collectLabel.valKey]
                ), u.value[a.collectLabel.key] = Te, de && (i.value[de.tempKey] = Te)) : (oe && Re(oe[a.collectLabel.valKey]) && (Te = oe[a.collectLabel.valKey]), u.value[a.collectLabel.key] = Te, de && (de.booleanVal && typeof Te == "boolean" ? i.value[de.tempKey] = Te ? 1 : 0 : i.value[de.tempKey] = Te));
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
              d ? (O === "time" ? u.value[a.key] = d : u.value[a.key] = pt(d).format(typeof a.format == "string" ? a.format : C[O]), O === "date" && a.addTime && (u.value[a.key] += " 00:00:00")) : u.value[a.key] = null;
            else if (a.type === "monthRange" || O === "daterange" || O === "datetimerange" || O === "timerange") {
              if (!a.key2)
                return;
              d && d[0] && d[1] ? (O === "timerange" ? (u.value[a.key] = d[0], u.value[a.key2] = d[1]) : a.type === "monthRange" ? (u.value[a.key] = typeof a.format == "string" && pt(d[0]).format(a.format) || d[0], u.value[a.key2] = typeof a.format == "string" && a.format && pt(d[1]).format(a.format) || d[1]) : (u.value[a.key] = pt(d[0]).format(a.format || O && C[O]), u.value[a.key2] = pt(d[1]).format(a.format || O && C[O])), O === "daterange" && a.addTime && (u.value[a.key] += " 00:00:00", u.value[a.key2] += " 23:59:59")) : (u.value[a.key] = null, u.value[a.key2] = null);
            }
            break;
        }
    }
    function lt(d, a) {
      const O = Nt(d == null ? void 0 : d.options);
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
        for (let a of c.value) {
          const O = G(a, d);
          if (O)
            return O;
        }
        return !1;
      }
      return G(c.value, d);
    }
    function G(d, a) {
      for (let O of d)
        if (O.key === a)
          return O;
      return !1;
    }
    function z(d, a) {
      let O = {};
      for (let C in u.value)
        u.value.hasOwnProperty(C) && d[C] !== void 0 && (O[C] = d[C], delete d[C]);
      _e(O, a);
      for (let C in d)
        d.hasOwnProperty(C) && (r.indexOf(C) < 0 && r.push(C), u.value[C] = d[C]);
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
      for (let C in u.value)
        if (u.value.hasOwnProperty(C) && d[C] !== void 0 && d[C] !== "--") {
          if (Array.isArray(d[C]))
            d[C] = d[C].filter((oe) => oe !== "--");
          else if (Y(d[C]) === "Object")
            for (let oe in d[C])
              d[C].hasOwnProperty(oe) && d[C][oe] === "--" && (d[C][oe] = null);
          u.value[C] = d[C];
        } else a || (u.value[C] = Array.isArray(u.value[C]) ? [] : null);
      $e(function() {
        ca(ye(O));
      });
    }
    function W(d, a = !1) {
      if (k.value)
        for (let O of c.value)
          Ve(O, d, a);
      else
        Ve(c.value, d, a);
    }
    function Ve(d, a, O = !1) {
      for (let C of d)
        if (C != null && C.key && (O && (a[C.key] !== void 0 || C.key2 && a[C.key2] !== void 0) || !O) && C.tempKey)
          switch (C.type) {
            case "inputMap":
              if (!C.key2)
                continue;
              Y(a[C.key]) === "Number" && Y(a[C.key2] === "Number") ? C.key3 ? i.value[C.tempKey] = {
                lng: a[C.key],
                lat: a[C.key2],
                name: a[C.key3]
              } : i.value[C.tempKey] = {
                lng: a[C.key],
                lat: a[C.key2]
              } : C.key3 ? i.value[C.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : i.value[C.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              a[C.key] && a[C.key] !== "--" || a[C.key] === 0 ? i.value[C.tempKey] = a[C.key] : i.value[C.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              a[C.key] && a[C.key] !== "--" || a[C.key] === 0 || a[C.key] === !1 ? C.multiple || C.type === "checkboxGroup" ? i.value[C.tempKey] = [...a[C.key]] : C.booleanVal ? i.value[C.tempKey] = a[C.key] ? 1 : 0 : i.value[C.tempKey] = a[C.key] : C.multiple || C.type === "checkboxGroup" ? i.value[C.tempKey] = [] : i.value[C.tempKey] = null;
              break;
            case "date":
            case "time":
              if (C.dateType === "date" || C.dateType === "datetime" || C.dateType === "year" || C.dateType === "month" || C.dateType === "time")
                i.value[C.tempKey] = a[C.key] && a[C.key] !== "--" ? a[C.key] : null;
              else if (C.dateType === "daterange" || C.dateType === "datetimerange" || C.dateType === "timerange") {
                if (!C.key2)
                  continue;
                i.value[C.tempKey] = a[C.key] && a[C.key] !== "--" && a[C.key2] && a[C.key2] !== "--" && [a[C.key], a[C.key2]] || [];
              }
              break;
          }
    }
    function at(d) {
      if (Array.isArray(d))
        for (let a of d)
          nt(a);
      else Y(d) === "Object" && nt(d);
    }
    function nt(d) {
      const { index: a, indexB: O, key: C, val: oe } = d;
      if (typeof a == "number")
        if (Array.isArray(c.value[a])) {
          if (typeof O == "number")
            if (C && d.hasOwnProperty("val"))
              c.value[a][O][C] = oe;
            else
              for (let de of Object.keys(d))
                de !== "index" && C !== "indexB" && (c.value[a][O][de] = d[de]);
        } else if (C && d.hasOwnProperty("val"))
          c.value[a][C] = oe;
        else
          for (let de of Object.keys(d))
            de !== "index" && (c.value[a][de] = d[de]);
    }
    function ct({ label: d, root: a }) {
      a.key2 && (u.value[a.key2] = d), ot({
        e: d,
        root: a
      });
    }
    function qe(d) {
      d.beforeKey && Sa(f.value, (a) => a === d.beforeKey), d.key && (f.value.indexOf(d.key) === -1 && f.value.push(d.key), ot({
        e: null,
        root: d
      }));
    }
    function kt({ name: d, root: a }) {
      a.key2 && (u.value[a.key2] = d), ot({
        e: d,
        root: a
      });
    }
    function cl({ e: d, root: a }) {
      ot({
        e: d,
        root: a
      }), $e(function() {
        var O, C;
        (C = (O = s.value) == null ? void 0 : O.validateField) == null || C.call(O, a.key);
      });
    }
    function ot({ e: d, root: a }) {
      Me(() => {
        var C;
        let O = {
          event: d
        };
        if (a.key && (O[a.key] = u.value[a.key]), a.key2 && (O[a.key2] = u.value[a.key2]), Array.isArray(a.collectLabel))
          for (let oe of a.collectLabel)
            O[oe.key] = u.value[oe.key];
        else (C = a.collectLabel) != null && C.key && (O[a.collectLabel.key] = u.value[a.collectLabel.key]);
        e("on-item-change", O);
      }, 300);
    }
    function fl() {
      let d = {};
      for (let a of K.value)
        d[a] = u.value[a];
      return l.trim && (d = Ul(d)), d;
    }
    function ua() {
      var d, a;
      (a = (d = s.value) == null ? void 0 : d.validate) == null || a.call(d);
    }
    function da(d) {
      Me(() => {
        var a, O;
        (O = (a = s.value) == null ? void 0 : a.validateField) == null || O.call(a, d, () => {
        });
      }, 10);
    }
    function ca(d) {
      Me(() => {
        var a, O;
        if (Array.isArray(d))
          for (let C of d)
            (O = (a = s.value) == null ? void 0 : a.validateField) == null || O.call(a, C, () => {
            });
      }, 10);
    }
    function fa(d) {
      d !== void 0 && (v.value = !!d);
    }
    function Ft() {
      var d, a;
      l.disabled || (a = (d = s.value) == null ? void 0 : d.validate) == null || a.call(d, (O) => {
        S || (S = !0, O && (v.value = !0, e("on-submit", fl())), Me(() => {
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
      updateFormDataT: at,
      validate: ua,
      reValidate: da,
      changeLoading: fa,
      getValGroup: fl,
      submit: Ft
    }), (d, a) => {
      const O = te("FormItem"), C = te("Button"), oe = te("Form");
      return T(), le(oe, {
        ref_key: "formGroupXRef",
        ref: s,
        model: m(u),
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
          m(k) ? (T(!0), N(ge, { key: 0 }, Ce(m(c), (de, Te) => (T(), N("div", {
            class: we([d.teamClass, "formTeamBox" + Te]),
            key: "formTeamBox" + Te
          }, [
            (T(!0), N(ge, null, Ce(de, (J, ie) => (T(), N(ge, {
              key: "formItem" + ie
            }, [
              D(J) ? (T(), le(Ol, {
                key: 0,
                item: J,
                style: re(m(V)),
                "item-style": m(B),
                "val-group": m(u),
                "temp-keys": m(i),
                inline: l.inline,
                disabled: l.disabled,
                "label-width": l.labelWidth,
                "item-width": l.itemWidth,
                "mgr-url": m(p),
                "upload-url": m(g),
                onItemChange: ot,
                onReValidate: cl,
                onClearTempKeyItem: U,
                onSelectInputChange: qe,
                onAlNameChange: kt,
                onAsyncLabelChange: ct
              }, ut({ _: 2 }, [
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
          (T(!0), N(ge, null, Ce(m(c), (de, Te) => (T(), N(ge, {
            key: "formItem" + Te
          }, [
            !m(k) && D(de) ? (T(), le(Ol, {
              key: 0,
              item: de,
              style: re(m(V)),
              "item-style": m(B),
              "val-group": m(u),
              "temp-keys": m(i),
              inline: l.inline,
              disabled: l.disabled,
              "label-width": l.labelWidth,
              "item-width": l.itemWidth,
              "mgr-url": m(p),
              "upload-url": m(g),
              onItemChange: ot,
              onReValidate: cl,
              onClearTempKeyItem: U,
              onSelectInputChange: qe,
              onAlNameChange: kt,
              onAsyncLabelChange: ct
            }, ut({ _: 2 }, [
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
                onClick: Ft,
                style: re(m(B)),
                type: "primary",
                loading: l.btnLoading && m(v),
                disabled: l.disabled
              }, {
                default: ne(() => [
                  ke(q(l.longOkBtTxt || m(L)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ue("", !0),
          P("div", $o, [
            l.showInlineOkBt ? (T(), le(C, {
              key: 0,
              type: "primary",
              class: we({ inlineFormBtXN: l.inline, okBtnXN: !0 }),
              onClick: Ft,
              loading: l.btnLoading && m(v),
              disabled: l.disabled
            }, {
              default: ne(() => [
                ke(q(l.inlineOkBtTxt || m(L)("r.confirm")), 1)
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
                ke(q(l.inlineClearBtTxt || m(L)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : ue("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), Fo = /* @__PURE__ */ ce({
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
    const e = n, l = t, s = E({ width: l.width }), u = E(!1), c = E(), i = j(() => {
      var R, M;
      if (Array.isArray(l.formData))
        if (Array.isArray(l.formData[0])) {
          let h = [];
          for (let x of l.formData)
            x && (h = h.concat(
              x.filter((_) => (_ == null ? void 0 : _.type) === "custom" || (_ == null ? void 0 : _.type) === "input" && _.slotName && _.slotPosition)
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
        (h = (M = c.value).resetForm) == null || h.call(M).then((x) => {
          R(x);
        });
      });
    }
    function p() {
      return new Promise((R) => {
        var M, h;
        (h = (M = c.value).refreshFormDom) == null || h.call(M).then((x) => {
          R(x);
        });
      });
    }
    function f() {
      return new Promise((R) => {
        var M, h;
        (h = (M = c.value).reRenderForm) == null || h.call(M).then((x) => {
          R(x);
        });
      });
    }
    function r(R, M) {
      var h, x;
      (x = (h = c.value).setItemToValGroup) == null || x.call(h, R, M);
    }
    function v(R, M) {
      var h, x;
      (x = (h = c.value).updateValGroup) == null || x.call(h, R, M);
    }
    function b(R) {
      var M, h;
      (h = (M = c.value).updateFormDataT) == null || h.call(M, R);
    }
    function g() {
      var R, M;
      (M = (R = c.value).validate) == null || M.call(R);
    }
    function S(R) {
      var M, h;
      (h = (M = c.value).reValidate) == null || h.call(M, R);
    }
    function k(R) {
      var M, h;
      R !== void 0 && (u.value = !!R, (h = (M = c.value).changeLoading) == null || h.call(M, u.value));
    }
    function V() {
      var R, M;
      return (M = (R = c.value).getValGroup) == null ? void 0 : M.call(R);
    }
    function B() {
      u.value = !0;
    }
    function I() {
      var R, M;
      (M = (R = c.value).submit) == null || M.call(R);
    }
    function K() {
      e("on-cancel"), Me(() => {
        var R, M;
        u.value = !1, (M = (R = c.value).changeLoading) == null || M.call(R, !1);
      }, 1e3);
    }
    return o({
      resetForm: y,
      refreshFormDom: p,
      reRenderForm: f,
      setItemToValGroup: r,
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
        style: re(m(s)),
        class: "formGroupBoxVM"
      }, [
        Q($t, dt({
          ref_key: "formRRef",
          ref: c
        }, R.$attrs, {
          "form-data": l.formData,
          "label-width": l.labelWidth,
          "content-width": l.contentWidth,
          "item-width": l.itemWidth,
          btnLoading: l.btnLoading,
          disabled: l.disabled,
          onOnSubmit: B
        }), ut({ _: 2 }, [
          Ce(m(i), (x) => ({
            name: x.slotName,
            fn: ne(({ valGroup: _ }) => [
              Ne(R.$slots, x.slotName, { valGroup: _ })
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
              loading: l.btnLoading && m(u),
              disabled: l.disabled
            }, {
              default: ne(() => [
                ke(q(l.okBtTxt || m(L)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])) : ue("", !0),
            l.showCancelBt ? (T(), le(h, {
              key: 1,
              onClick: K,
              class: "form-cancel-btn"
            }, {
              default: ne(() => [
                ke(q(l.cancelBtTxt || m(L)("r.cancel")), 1)
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
}), nl = /* @__PURE__ */ ce({
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
    const e = n, l = t, s = E(), u = j(() => {
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
    function c() {
      return new Promise((B) => {
        var I, K;
        (K = (I = s.value).resetForm) == null || K.call(I).then(() => {
          B();
        });
      });
    }
    function i() {
      return new Promise((B) => {
        var I, K;
        (K = (I = s.value).refreshFormDom) == null || K.call(I).then(() => {
          B();
        });
      });
    }
    function y() {
      return new Promise((B) => {
        var I, K;
        (K = (I = s.value).reRenderForm) == null || K.call(I).then(() => {
          B();
        });
      });
    }
    function p(B, I) {
      var K, R;
      (R = (K = s.value).setItemToValGroup) == null || R.call(K, B, I);
    }
    function f(B, I) {
      var K, R;
      (R = (K = s.value).updateValGroup) == null || R.call(K, B, I);
    }
    function r(B) {
      var I, K;
      (K = (I = s.value).updateFormDataT) == null || K.call(I, B);
    }
    function v() {
      var B, I;
      (I = (B = s.value).validate) == null || I.call(B);
    }
    function b(B) {
      var I, K;
      (K = (I = s.value).reValidate) == null || K.call(I, B);
    }
    function g(B) {
      var I, K;
      (K = (I = s.value).changeLoading) == null || K.call(I, B === void 0 ? !1 : B);
    }
    function S() {
      var B, I;
      return (I = (B = s.value).getValGroup) == null ? void 0 : I.call(B);
    }
    function k(B) {
      e("on-search", B);
    }
    function V() {
      var B, I;
      (I = (B = s.value).submit) == null || I.call(B);
    }
    return Ge(() => {
      const B = s.value.$el;
      B != null && B.parentNode && B.parentNode.addEventListener("keyup", (I) => {
        (I == null ? void 0 : I.keyCode) === 13 && V();
      });
    }), o({
      resetForm: c,
      refreshFormDom: i,
      reRenderForm: y,
      setItemToValGroup: p,
      updateValGroup: f,
      updateFormDataT: r,
      validate: v,
      reValidate: b,
      changeLoading: g,
      getValGroup: S,
      submit: V
    }), (B, I) => (T(), le($t, dt({
      ref_key: "formRRef",
      ref: s
    }, B.$attrs, {
      "form-data": l.formData,
      "label-width": l.labelWidth,
      "item-width": l.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": l.showInlineOkBt,
      "inline-ok-bt-txt": m(L)("r.check"),
      "show-inline-clear-bt": l.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: k
    }), ut({ _: 2 }, [
      Ce(m(u), (K) => ({
        name: K.slotName,
        fn: ne(({ valGroup: R }) => [
          Ne(B.$slots, K.slotName, { valGroup: R })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), Do = /* @__PURE__ */ ce({
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
    const e = n, l = t, s = E(), u = E(!1), c = E(!1), i = j(() => {
      var h, x;
      if (Array.isArray(l.formData[0])) {
        let _ = [];
        for (let Z of l.formData)
          Z && (_ = _.concat(
            Z.filter(($) => ($ == null ? void 0 : $.type) === "custom" || ($ == null ? void 0 : $.type) === "input" && $.slotName && $.slotPosition)
          ));
        return _;
      }
      return (x = (h = l.formData) == null ? void 0 : h.filter) == null ? void 0 : x.call(
        h,
        (_) => (_ == null ? void 0 : _.type) === "custom" || (_ == null ? void 0 : _.type) === "input" && _.slotName && _.slotPosition
      );
    });
    function y() {
      return new Promise((h) => {
        var x, _;
        (_ = (x = s.value).resetForm) == null || _.call(x).then(() => {
          h();
        });
      });
    }
    function p() {
      return new Promise((h) => {
        var x, _;
        (_ = (x = s.value).refreshFormDom) == null || _.call(x).then(() => {
          h();
        });
      });
    }
    function f() {
      return new Promise((h) => {
        var x, _;
        (_ = (x = s.value).reRenderForm) == null || _.call(x).then(() => {
          h();
        });
      });
    }
    function r(h, x) {
      var _, Z;
      (Z = (_ = s.value).setItemToValGroup) == null || Z.call(_, h, x);
    }
    function v(h, x) {
      var _, Z;
      (Z = (_ = s.value).updateValGroup) == null || Z.call(_, h, x);
    }
    function b(h) {
      var x, _;
      (_ = (x = s.value).updateFormDataT) == null || _.call(x, h);
    }
    function g() {
      var h, x;
      (x = (h = s.value).validate) == null || x.call(h);
    }
    function S(h) {
      var x, _;
      (_ = (x = s.value).reValidate) == null || _.call(x, h);
    }
    function k(h) {
      var x, _;
      h !== void 0 && (c.value = !!h, (_ = (x = s.value).changeLoading) == null || _.call(x, c.value));
    }
    function V() {
      var h, x;
      return (x = (h = s.value).getValGroup) == null ? void 0 : x.call(h);
    }
    function B() {
      c.value = !0;
    }
    function I() {
      var h, x;
      l.hideCancelBt ? R() : (x = (h = s.value).submit) == null || x.call(h);
    }
    function K() {
      u.value = !0;
    }
    function R() {
      u.value = !1, Me(() => {
        var h, x;
        c.value = !1, (x = (h = s.value).changeLoading) == null || x.call(h, !1);
      }, 1e3);
    }
    function M(h) {
      e(h ? "on-open" : "on-close");
    }
    return o({
      resetForm: y,
      refreshFormDom: p,
      reRenderForm: f,
      setItemToValGroup: r,
      updateValGroup: v,
      updateFormDataT: b,
      validate: g,
      reValidate: S,
      changeLoading: k,
      getValGroup: V,
      submit: I,
      open: K,
      close: R
    }), (h, x) => {
      const _ = te("Button"), Z = te("Modal");
      return T(), le(Z, {
        class: we(["formModal", { hideFooter: l.hideFooter }]),
        title: l.title || m(L)("r.title"),
        modelValue: m(u),
        "onUpdate:modelValue": x[0] || (x[0] = ($) => Fe(u) ? u.value = $ : null),
        "mask-closable": !1,
        "footer-hide": l.hideFooter,
        width: l.width,
        onOnVisibleChange: M
      }, {
        footer: ne(() => [
          Q(_, {
            onClick: I,
            class: "modal-save-btn",
            loading: l.btnLoading && m(c),
            disabled: l.disabled
          }, {
            default: ne(() => [
              ke(q(l.okBtTxt || m(L)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled"]),
          l.hideCancelBt ? ue("", !0) : (T(), le(_, {
            key: 0,
            onClick: R,
            class: "modal-cancel-btn"
          }, {
            default: ne(() => [
              ke(q(l.cancelBtTxt || m(L)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: ne(() => [
          Q($t, dt({
            ref_key: "formRRef",
            ref: s
          }, h.$attrs, {
            "form-data": l.formData,
            "label-width": l.labelWidth,
            btnLoading: l.btnLoading,
            disabled: l.disabled,
            onOnSubmit: B
          }), ut({ _: 2 }, [
            Ce(m(i), ($) => ({
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
}), No = /* @__PURE__ */ ce({
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
    const n = o, e = t, l = E(!0), s = E([]), u = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let c = [];
    const i = j(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), y = j(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    Se(
      () => e.data,
      (g) => {
        l.value = !1;
        let S = [];
        p(g, S), s.value = S, $e(function() {
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
        if (Array.isArray(e.collectVal) ? (S = e.collectVal[0] || "", k = "a") : S = e.collectVal, !S || JSON.stringify(g) === JSON.stringify(c)) {
          c = [];
          return;
        }
        st({
          group: s.value,
          condition: (V) => (V == null ? void 0 : V.checked) === !0,
          key: "checked",
          val: !1
        }), st(k === "a" ? {
          group: s.value,
          condition: (V) => Tt(g, [S, V == null ? void 0 : V[S]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: s.value,
          condition: (V) => g.indexOf(V == null ? void 0 : V[S]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), Se(
      () => e.disabled,
      (g) => {
        st({
          group: s.value,
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
        i.value.length > 1 ? V = Wt(y.value, (I) => I[i.value[0]] === k[i.value[0]]) !== void 0 : V = i.value[0] ? y.value.indexOf(k[i.value[0]]) !== -1 : !1;
        let B = {
          name: k == null ? void 0 : k[e.label],
          expand: !!(e.expandAll || k != null && k.expand),
          checked: V,
          disableCheckbox: e.disabled
        };
        for (let I of i.value)
          B[I] = k[I];
        S.push(B), k != null && k.children && k.children.length > 0 && (B.children = [], f(k.children, B.children));
      }
    }
    function f(g, S = []) {
      for (let k of g) {
        let V = !1;
        i.value.length > 1 ? V = Wt(y.value, (I) => I[i.value[0]] === k[i.value[0]]) !== void 0 : V = i.value[0] ? y.value.indexOf(k[i.value[0]]) !== -1 : !1;
        let B = {
          name: k == null ? void 0 : k[e.label],
          expand: !!(e.expandAll || k != null && k.expand),
          checked: V,
          disableCheckbox: e.disabled
        };
        for (let I of i.value)
          B[I] = k[I];
        S.push(B), k != null && k.children && k.children.length > 0 && (B.children = [], p(k.children, B.children));
      }
    }
    function r(g, {
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
      let S = document.querySelectorAll("#" + u + " .inlineChildXA");
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
      c = S, n("update:modelValue", S), n("on-change", pe(S));
    }
    return (g, S) => {
      const k = te("Tree");
      return m(l) ? (T(), le(k, {
        key: 0,
        id: u,
        class: "checkboxTreeGA",
        data: m(s),
        render: r,
        onOnCheckChange: b,
        onOnToggleExpand: v,
        "show-checkbox": ""
      }, null, 8, ["data"])) : ue("", !0);
    };
  }
}), Ko = { class: "transferBoxRL" }, zo = { class: "leftBoxLLL" }, Uo = { class: "fullHeight flexColumnBox" }, Eo = { class: "notGrow" }, Go = { class: "titleLLL" }, Ho = { class: "growFlexItem" }, Wo = { class: "middleBoxLLL" }, jo = { class: "rightBoxLLL" }, qo = { class: "fullHeight flexColumnBox" }, Xo = { class: "notGrow" }, Jo = { class: "titleLLL" }, Yo = { class: "growFlexItem" }, Qo = /* @__PURE__ */ ce({
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
    let s = E({}), u = E({}), c = E([]), i = E([]), y = E(0), p = E(0);
    const f = j(() => ({ ...l.constSearchDataLeft, ...s.value })), r = j(() => ({ ...l.constSearchDataRight, ...u.value })), v = j(() => y.value < 1), b = j(() => c.value.length < 1), g = j(() => i.value.length < 1), S = j(() => p.value < 1), k = E(), V = E(), B = E(), I = E();
    function K() {
      k.value.resetForm(), V.value.resetForm(), De(s.value) || (s.value = {}), De(u.value) || (u.value = {}), B.value.clearSelect(), I.value.clearSelect();
    }
    function R() {
      B.value.search(), I.value.search();
    }
    function M(D) {
      c.value = D;
    }
    function h(D) {
      i.value = D;
    }
    function x(D) {
      var X, ee, se, me, he;
      y.value = ((ee = (X = D == null ? void 0 : D.data) == null ? void 0 : X.page) == null ? void 0 : ee.total) || ((me = (se = D == null ? void 0 : D.data) == null ? void 0 : se.data) == null ? void 0 : me.total) || ((he = D == null ? void 0 : D.data) == null ? void 0 : he.total) || (D == null ? void 0 : D.total) || 0, e("on-data-change-l", D);
    }
    function _(D) {
      var X, ee, se, me, he;
      p.value = ((ee = (X = D == null ? void 0 : D.data) == null ? void 0 : X.page) == null ? void 0 : ee.total) || ((me = (se = D == null ? void 0 : D.data) == null ? void 0 : se.data) == null ? void 0 : me.total) || ((he = D == null ? void 0 : D.data) == null ? void 0 : he.total) || (D == null ? void 0 : D.total) || 0, e("on-data-change-r", D);
    }
    function Z(D) {
      typeof l.leftSearchDataFilter == "function" ? s.value = l.leftSearchDataFilter(D) : s.value = D;
    }
    function $(D) {
      typeof l.rightSearchDataFilter == "function" ? u.value = l.rightSearchDataFilter(D) : u.value = D;
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
          X = l.addMethod, ee = l.addUrl, se = l.addParamsHandle(i.value), me = L("r.add");
          break;
        case "delete":
          X = l.deleteMethod, ee = l.deleteUrl, se = l.deleteParamsHandle(c.value), me = L("r.remove");
          break;
        case "addAll":
          X = l.addAllMethod, ee = l.addAllUrl, se = l.addAllParamsHandle(r.value), me = L("r.addAll");
          break;
        case "deleteAll":
          X = l.deleteAllMethod, ee = l.deleteAllUrl, se = l.deleteAllParamsHandle(f.value), me = L("r.removeAll");
          break;
      }
      ee && X && je[X](ee, se, null, [], { spin: !0 }, !1).then((he) => {
        (he == null ? void 0 : he.code) === 0 ? (ze(me + L("r.success"), (he == null ? void 0 : he.message) || "", "success"), B.value && B.value.getTableData(), I.value && I.value.getTableData(), e("transferred")) : ze(me + L("r.failed"), (he == null ? void 0 : he.message) || "", "error");
      }).catch(() => {
        ze(me + L("r.error"), "", "error");
      });
    }
    return o({
      reset: K,
      search: R
    }), (D, X) => {
      const ee = te("Icon"), se = te("Button");
      return T(), N("div", Ko, [
        P("div", zo, [
          P("div", Uo, [
            P("div", Eo, [
              P("div", Go, q(l.titleLeft || m(L)("r.added")), 1),
              Q(Zt, null, {
                default: ne(() => [
                  Q(nl, {
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
            P("div", Ho, [
              Q(ll, {
                ref_key: "lTabRef",
                ref: B,
                columns: l.leftTableColumns,
                url: l.leftTableUrl,
                "search-data": m(f),
                onOnSelectionChange: M,
                onOnDataChange: x,
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
        P("div", Wo, [
          Q(se, {
            class: "middleBtLLL",
            type: "default",
            onClick: w,
            disabled: m(v)
          }, {
            default: ne(() => [
              ke(q(m(L)("r.removeAll")) + " ", 1),
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
              ke(q(m(L)("r.remove")) + " ", 1),
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
              ke(" " + q(m(L)("r.add")), 1)
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
              ke(" " + q(m(L)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        P("div", jo, [
          P("div", qo, [
            P("div", Xo, [
              P("div", Jo, q(l.titleRight || m(L)("r.notAdded")), 1),
              Q(Zt, null, {
                default: ne(() => [
                  Q(nl, {
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
            P("div", Yo, [
              Q(ll, {
                ref_key: "rTabRef",
                ref: I,
                columns: l.rightTableColumns,
                url: l.rightTableUrl,
                "search-data": m(r),
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
}), Zo = { class: "boxLPA" }, ei = { class: "headerJ" }, ti = { class: "firstT borderBoxAS" }, li = { class: "secondT borderBoxAS" }, ai = { class: "firstCol borderBoxAS" }, ni = { class: "secondCol borderBoxAS" }, oi = /* @__PURE__ */ ce({
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
    const n = t, e = o, l = E([]), s = j(() => {
      var f;
      let y = pe(n.data), p = pe(l.value);
      for (let r of y) {
        let v = 0;
        if (r != null && r.children && !De(r.children))
          for (let b of r.children) {
            for (let g = 0, S = p == null ? void 0 : p.length; g < S; g++)
              if (Array.isArray(n.collectVal)) {
                let k = !0;
                for (let V of n.collectVal)
                  if (((f = p[g]) == null ? void 0 : f[V]) !== (b == null ? void 0 : b[V])) {
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
        v === 0 ? (r.checked = !1, r.indeterminate = !1) : r.children && v === r.children.length ? (r.checked = !0, r.indeterminate = !1) : (r.checked = !1, r.indeterminate = !0);
      }
      return y;
    });
    Se(
      () => n.modelValue,
      (y, p) => {
        vt(l.value, y) || vt(y, p) || (l.value = y);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function u(y, p) {
      if (y.children)
        for (let f of y.children)
          f.checked = p;
      c();
    }
    function c() {
      i(s.value, !0);
    }
    function i(y, p) {
      let f = [];
      for (let r of y) {
        if (!p && !n.leaf && r.checked && r.indeterminate === !1)
          if (Array.isArray(n.collectVal)) {
            let v = {};
            for (let b of n.collectVal)
              v[b] = r[b];
            f.push(v);
          } else Y(n.collectVal) === "String" && f.push(r[n.collectVal]);
        if (r.children) {
          for (let v of r.children)
            if (v.checked)
              if (Array.isArray(n.collectVal)) {
                let b = {};
                for (let g of n.collectVal)
                  b[g] = v[g];
                f.push(b);
              } else Y(n.collectVal) === "String" && f.push(v[n.collectVal]);
        }
      }
      p ? (l.value = f, n.leaf ? (e("update:modelValue", f), e("on-change", pe(f))) : $e(function() {
        i(s.value);
      })) : (e("update:modelValue", f), e("on-change", pe(f)));
    }
    return (y, p) => {
      const f = te("Checkbox");
      return T(), N("div", Zo, [
        P("div", ei, [
          P("div", ti, q(y.firstTitle || m(L)("r.level.1")), 1),
          P("div", li, q(y.secondTitle || m(L)("r.level.2")), 1)
        ]),
        (T(!0), N(ge, null, Ce(m(s), (r, v) => (T(), N("div", {
          class: "bodyJ",
          key: "checkboxJ" + v
        }, [
          P("div", ai, [
            Q(f, {
              modelValue: r.checked,
              "onUpdate:modelValue": (b) => r.checked = b,
              indeterminate: r.indeterminate,
              onOnChange: (b) => u(r, b),
              disabled: y.disabled
            }, {
              default: ne(() => [
                ke(q(r[y.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          P("div", ni, [
            (T(!0), N(ge, null, Ce(r.children, (b, g) => (T(), N("div", {
              class: "secItem",
              key: "secItem" + g
            }, [
              Q(f, {
                modelValue: b.checked,
                "onUpdate:modelValue": (S) => b.checked = S,
                onOnChange: c,
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
}), ii = { class: "boxLPB" }, si = { class: "headerF" }, ri = { class: "firstT borderBoxKa" }, ui = { class: "secondT borderBoxKa" }, di = { class: "thirdT borderBoxKa" }, ci = { class: "firstCol borderBoxKa" }, fi = { class: "rightBoxAL" }, pi = { class: "secondCol borderBoxKa" }, mi = { class: "thirdCol borderBoxKa" }, hi = /* @__PURE__ */ ce({
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
    const n = o, e = t, l = E([]), s = j(() => {
      let p = pe(e.data), f = pe(l.value);
      for (let r of p) {
        let v = 0, b = 0;
        if (r != null && r.children && !De(r.children))
          for (let g of r.children) {
            let S = 0;
            if (g.children && !De(g.children))
              for (let k of g.children) {
                for (let V = 0, B = f.length; V < B; V++)
                  if (Array.isArray(e.collectVal)) {
                    let I = !0;
                    for (let K of e.collectVal)
                      if (f[V][K] !== k[K]) {
                        I = !1;
                        break;
                      }
                    if (I) {
                      k.checked = !0, S++, f.splice(V, 1);
                      break;
                    }
                  } else if (f[V] === k[e.collectVal]) {
                    k.checked = !0, S++, f.splice(V, 1);
                    break;
                  }
                !k.checked && (k.checked = !1);
              }
            S === 0 ? (g.checked = !1, g.indeterminate = !1) : g.children && S === g.children.length ? (g.checked = !0, g.indeterminate = !1, v++) : (g.checked = !1, g.indeterminate = !0, b++);
          }
        v === 0 && b === 0 ? (r.checked = !1, r.indeterminate = !1) : r.children && v === r.children.length ? (r.checked = !0, r.indeterminate = !1) : (r.checked = !1, r.indeterminate = !0);
      }
      return p;
    });
    Se(
      () => e.modelValue,
      (p, f) => {
        vt(l.value, p) || vt(p, f) || (l.value = p);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function u(p, f) {
      if (p.children) {
        for (let r of p.children)
          if (r.checked = f, r.children)
            for (let v of r.children)
              v.checked = f;
      }
      i();
    }
    function c(p, f) {
      if (p.children)
        for (let r of p.children)
          r.checked = f;
      i();
    }
    function i() {
      y(s.value, !0);
    }
    function y(p, f) {
      let r = [];
      for (let v of p) {
        if (!f && !e.leaf && (v != null && v.checked) && v.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let b = {};
            for (let g of e.collectVal)
              b[g] = v[g];
            r.push(b);
          } else Y(e.collectVal) === "String" && r.push(v[e.collectVal]);
        if (v != null && v.children)
          for (let b of v.children) {
            if (!f && !e.leaf && b.checked && b.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let g = {};
                for (let S of e.collectVal)
                  g[S] = b[S];
                r.push(g);
              } else Y(e.collectVal) === "String" && r.push(b[e.collectVal]);
            if (b.children) {
              for (let g of b.children)
                if (g.checked)
                  if (Array.isArray(e.collectVal)) {
                    let S = {};
                    for (let k of e.collectVal)
                      S[k] = g[k];
                    r.push(S);
                  } else Y(e.collectVal) === "String" && r.push(g[e.collectVal]);
            }
          }
      }
      f ? (l.value = r, e.leaf ? (n("update:modelValue", r), n("on-change", pe(r))) : $e(function() {
        y(s.value);
      })) : (n("update:modelValue", r), n("on-change", pe(r)));
    }
    return (p, f) => {
      const r = te("Checkbox");
      return T(), N("div", ii, [
        P("div", si, [
          P("div", ri, q(p.firstTitle || m(L)("r.level.1")), 1),
          P("div", ui, q(p.secondTitle || m(L)("r.level.2")), 1),
          P("div", di, q(p.thirdTitle || m(L)("r.level.3")), 1)
        ]),
        (T(!0), N(ge, null, Ce(m(s), (v, b) => (T(), N("div", {
          class: "bodyF",
          key: "checkboxJ" + b
        }, [
          P("div", ci, [
            Q(r, {
              modelValue: v.checked,
              "onUpdate:modelValue": (g) => v.checked = g,
              indeterminate: v.indeterminate,
              onOnChange: (g) => u(v, g),
              disabled: p.disabled
            }, {
              default: ne(() => [
                ke(q(v[p.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          P("div", fi, [
            (T(!0), N(ge, null, Ce(v.children, (g, S) => (T(), N("div", {
              class: "rightBoxInner",
              key: "secItem" + S
            }, [
              P("div", pi, [
                Q(r, {
                  modelValue: g.checked,
                  "onUpdate:modelValue": (k) => g.checked = k,
                  indeterminate: g.indeterminate,
                  onOnChange: (k) => c(g, k),
                  disabled: p.disabled
                }, {
                  default: ne(() => [
                    ke(q(g[p.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              P("div", mi, [
                (T(!0), N(ge, null, Ce(g.children, (k, V) => (T(), N("div", {
                  class: "thirdItem",
                  key: "thirdItem" + V
                }, [
                  Q(r, {
                    modelValue: k.checked,
                    "onUpdate:modelValue": (B) => k.checked = B,
                    onOnChange: i,
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
}), yi = {
  class: "fl",
  style: { "font-weight": "bold" }
}, vi = { class: "btsF" }, gi = { key: 0 }, bi = {
  key: 1,
  class: "growFlexItem relativeBox"
}, ki = { class: "fullFlowContent" }, wi = /* @__PURE__ */ ce({
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
      const s = /^\d+$/;
      return typeof l == "number" || typeof l == "string" && s.test(l) ? l + "px" : l;
    }
    return (l, s) => (T(), N("div", {
      style: re(m(n))
    }, [
      P("div", {
        class: we(["wellCardR", { flexColumnBox: !o.fitToContent }])
      }, [
        P("div", {
          class: we(["panelHeader", { notGrow: !o.fitToContent }])
        }, [
          P("div", yi, q(o.title || m(L)("r.title")), 1),
          P("div", vi, [
            Ne(l.$slots, "bts")
          ])
        ], 2),
        o.fitToContent ? (T(), N("div", gi, [
          Ne(l.$slots, "default")
        ])) : (T(), N("div", bi, [
          P("div", ki, [
            Ne(l.$slots, "default")
          ])
        ]))
      ], 2)
    ], 4));
  }
}), _i = /* @__PURE__ */ ce({
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
    let l = E(1), s = 1;
    const u = E(""), c = yt([]);
    let i = {}, y = !0, p = !1;
    const f = "scm" + Math.random(), r = j(() => u.value ? L("r.searchFor") + u.value : e.placeholder || L("r.pInput")), v = j({
      get() {
        return e.modelValue ?? "";
      },
      set(R) {
        if (n("update:modelValue", R ?? ""), e.collectLabel && R !== void 0) {
          let M = {};
          for (let h of c.value)
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
      [e.searchKey]: u.value
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
      y || (v.value = "", y = !0, u.value = "", c.value = [], l.value = 1, s = 1, i = {}, p = !1);
    }
    function V(R) {
      for (let M of c.value)
        if ((M == null ? void 0 : M.label) === R)
          return !0;
      return !1;
    }
    const B = Rt(function(R) {
      var h;
      const M = (h = R == null ? void 0 : R.target) == null ? void 0 : h.value;
      V(M) || (Re(M) ? (p ? k() : (De(i) && (i.current = l.value, i.pages = s, i.options = pe(c.value)), Re(v.value) && (v.value = "")), u.value = String(M), c.value = [], l.value = 1, y = !0, K()) : p ? (k(), K()) : (v.value = "", u.value = "", i.current ? (l.value = i.current, s = i.pages, c.value = pe(i.options), i = {}) : K()));
    }, 600);
    function I() {
      p && k(), l.value < s ? (++l.value, $e(function() {
        K();
      })) : vl.warning({
        background: !0,
        content: L("r.noMore")
      });
    }
    function K() {
      return new Promise((R, M) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Re(u.value)) {
            R(!1);
            return;
          }
          je.get(e.url, b.value).then((h) => {
            var Z;
            y = !1;
            let x = [];
            (Z = h == null ? void 0 : h.data) != null && Z.records ? (x = h.data.records, s = h.data.pages) : h != null && h.data && Y(h.data) === "Array" ? (x = h.data, s = h.pages) : h != null && h.data && Y(h.data) === "Object" && (x = [h.data], s = 1), typeof e.optionFilter == "function" && Y(e.optionFilter) === "Function" && (x = e.optionFilter(x)), De(x) || (x = x.map(($, A) => {
              let H = L("r.optionLabel") + A;
              if (Array.isArray(e.optionsLabelKey)) {
                let U = [];
                for (let w = 1, F = e.optionsLabelKey.length; w < F; w++)
                  U.push($[e.optionsLabelKey[w]]);
                H = `${$[e.optionsLabelKey[0]]}(${String(U)})`;
              } else Dl(e.optionsLabelKey) && (H = $[e.optionsLabelKey]);
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
            })), c.value.push(...x);
            let _ = {};
            c.value = c.value.filter(($) => _[$ == null ? void 0 : $.value] ? !1 : (_[$ == null ? void 0 : $.value] = !0, !0)), $e(function() {
              n("update-option-finish");
            }), R(!0);
          }).catch(() => {
            vl.error(L("r.getDataError")), M(L("r.getDataError"));
          });
        } else
          R(!1);
      });
    }
    return Ge(S), (R, M) => {
      const h = te("Option"), x = te("Select"), _ = Pt("loadmore");
      return fe((T(), le(x, dt({
        modelValue: m(v),
        "onUpdate:modelValue": M[0] || (M[0] = (Z) => Fe(v) ? v.value = Z : null),
        ref_key: "selectScrollSourceRef",
        ref: g,
        "transfer-class-name": f
      }, R.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: m(r),
        disabled: R.disabled
      }), {
        default: ne(() => [
          (T(!0), N(ge, null, Ce(m(c), (Z, $) => (T(), le(h, {
            key: "op" + $,
            value: Z == null ? void 0 : Z.value,
            label: Z == null ? void 0 : Z.label,
            disabled: Z == null ? void 0 : Z.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [_, I, f]
      ]);
    };
  }
}), Il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: la,
  AsyncCascader: ta,
  BtTablePage: ll,
  CheckboxGroupThreeClass: hi,
  CheckboxGroupTwoClass: oi,
  CheckboxTree: No,
  Date: ia,
  EditorPro: sa,
  FormGroup: Fo,
  FormModal: Do,
  FormR: $t,
  FullPop: Ha,
  HeaderBt: Kl,
  Hello: ja,
  IconTxtBtn: qt,
  InputMap: ea,
  MonthRange: oa,
  Page404: Ya,
  PagePro: Ql,
  SearchForm: nl,
  SelectInput: Zl,
  SelectScrollMore: _i,
  ShowHidePanel: Zt,
  ShowHidePanelB: zn,
  SideMenu: Sn,
  SideMenuPro: $n,
  TableIconBtn: jl,
  TableSearch: Un,
  TableSetting: Jl,
  TransferBox: Qo,
  UploadGroup: na,
  WellCard: wi
}, Symbol.toStringTag, { value: "Module" })), Vi = { class: "a4Line aL notPrint" }, Si = { class: "a4Line aR notPrint" }, Ci = { class: "a4Line bL notPrint" }, Ti = { class: "a4Line bR notPrint" }, Bi = { class: "topsL notPrint" }, Li = { class: "topsLTitle" }, xi = { class: "topsLBtn" }, Oi = { class: "topsLHelp" }, Ii = { key: 0 }, Ai = { key: 1 }, Pi = { key: 2 }, Ri = ["innerHTML"], Mi = /* @__PURE__ */ ce({
  __name: "PrintModal",
  setup(t) {
    const o = il(), n = E(), e = E(!1), l = E(!1), s = E(!1), u = E(100), c = E(), i = E(715), y = E(!1), p = E(), f = "tablePrint_" + Date.now().toString(), r = E(""), v = E([]), b = E([]), g = E(!1), S = j(() => ({
      width: i.value + "px"
    })), k = () => {
      p.value && window.sessionStorage.removeItem("print_" + p.value), window.sessionStorage.removeItem(f), window.close();
    }, V = () => {
      y.value && (y.value = !1);
    }, B = () => {
      g.value = !0;
    }, I = (x) => {
      g.value && (i.value = (x == null ? void 0 : x.layerX) - 20);
    }, K = () => {
      g.value && (g.value = !1);
    }, R = () => {
      y.value = !1;
      let x = window.setTimeout(() => {
        window.clearTimeout(x), window.print();
      }, 100);
    }, M = (x) => {
      if (typeof c.value == "function")
        return c.value(x);
    }, h = () => {
      var x, _, Z, $, A, H, U;
      if (p.value = (x = o == null ? void 0 : o.params) == null ? void 0 : x.isFrom, p.value) {
        let w = window.sessionStorage.getItem("print_" + p.value);
        if (w) {
          const F = JSON.parse(w);
          if (!F) {
            e.value = !0;
            return;
          }
          if (v.value = F.columns, b.value = F.data, n.value = F.title, r.value = ((_ = F.config) == null ? void 0 : _.customClass) || "", l.value = ((Z = F.config) == null ? void 0 : Z.domPrint) || !1, s.value = (($ = F.config) == null ? void 0 : $.autoPrint) || !1, u.value = ((A = F.config) == null ? void 0 : A.autoPrintTimeout) || 100, i.value = ((H = F.config) == null ? void 0 : H.width) || 715, document.title = (n.value || L("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString(), (U = F.funcArr) != null && U.length) {
            for (let D of F.funcArr)
              if (D.name === "spanMethod") {
                c.value = new Function("return " + D.func)();
                break;
              }
          }
        } else
          e.value = !0;
      }
    };
    return Ge(() => {
      if (s.value) {
        let x = window.setTimeout(() => {
          window.clearTimeout(x), R();
        }, u.value);
      }
      document.addEventListener("click", V), document.addEventListener("mousemove", I), document.addEventListener("mouseup", K);
    }), h(), (x, _) => {
      const Z = te("Table");
      return T(), N("div", {
        class: we(["tablePrintModal", [m(r)]])
      }, [
        fe(P("div", { class: "msgL notPrint" }, q(m(L)("r.printGuide.9")), 513), [
          [ve, m(e)]
        ]),
        fe(P("div", Vi, [
          P("p", null, q(m(L)("r.printGuide.7")), 1),
          _[2] || (_[2] = ke()),
          P("p", null, q(m(L)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        fe(P("div", Si, [
          P("p", null, q(m(L)("r.printGuide.7")), 1),
          _[3] || (_[3] = ke()),
          P("p", null, q(m(L)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        fe(P("div", Ci, [
          P("p", null, q(m(L)("r.printGuide.8")), 1),
          _[4] || (_[4] = ke()),
          P("p", null, q(m(L)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        fe(P("div", Ti, [
          P("p", null, q(m(L)("r.printGuide.8")), 1),
          _[5] || (_[5] = ke()),
          P("p", null, q(m(L)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        fe(P("div", Bi, [
          P("div", Li, q(m(n) || m(L)("r.print")), 1),
          P("div", xi, [
            Q(qt, {
              icon: "md-help-circle",
              name: m(L)("r.help"),
              onClick: _[0] || (_[0] = Gt(($) => y.value = !m(y), ["stop"]))
            }, null, 8, ["name"]),
            Q(qt, {
              icon: "md-print",
              name: m(L)("r.preview"),
              onClick: R
            }, null, 8, ["name"]),
            m(l) ? ue("", !0) : (T(), le(Jl, {
              key: 0,
              modelValue: m(v),
              "onUpdate:modelValue": _[1] || (_[1] = ($) => Fe(v) ? v.value = $ : null),
              "s-key": f,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            Q(jl, {
              icon: "md-close",
              onClick: k,
              title: m(L)("r.close")
            }, null, 8, ["title"])
          ]),
          fe(P("div", Oi, [
            m(l) ? ue("", !0) : (T(), N("p", Ii, [
              _[6] || (_[6] = P("span", null, "1. ", -1)),
              P("span", null, q(m(L)("r.printGuide.1")), 1)
            ])),
            m(l) ? ue("", !0) : (T(), N("p", Ai, [
              _[7] || (_[7] = P("span", null, "2. ", -1)),
              P("span", null, q(m(L)("r.printGuide.2")), 1)
            ])),
            m(l) ? (T(), N("p", Pi, [
              _[8] || (_[8] = P("span", null, "1. ", -1)),
              P("span", null, q(m(L)("r.printGuide.10")), 1)
            ])) : ue("", !0),
            P("p", null, [
              P("span", null, q(m(l) ? "2. " : "3. "), 1),
              P("span", null, q(m(L)("r.printGuide.3")), 1)
            ]),
            P("p", null, [
              P("span", null, q(m(l) ? "3. " : "4. "), 1),
              P("span", null, q(m(L)("r.printGuide.4")), 1)
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
            onMousedown: Gt(B, ["stop"])
          }, null, 32)
        ], 4)) : ue("", !0),
        m(l) ? (T(), N("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: m(b),
          style: re(m(S))
        }, null, 12, Ri)) : ue("", !0),
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
let tt = null;
function Al() {
  document.documentElement.style.setProperty("overflow", "auto");
  const o = document.createElement("style");
  o.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(o);
}
function $i(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: Mi
  })), tt = t, location.pathname.indexOf("tablePrint") > -1 ? (tt.push(location.pathname), Al()) : location.hash.indexOf("tablePrint") > -1 && (tt.push(location.hash.replace(/^#/, "")), Al());
}
function ra(t) {
  return Y(t) === "Object" && (t.hasOwnProperty("width") || (t.width = t.minWidth || 100), t.hasOwnProperty("minWidth") && delete t.minWidth, t.sortable = !1, delete t.__id, t.resizable = !0, t.children && Y(t.children) === "Array" && (t.children = t.children.map(ra))), t;
}
function Fi(t, o, n, e) {
  var p, f, r;
  if (!tt)
    return;
  let l;
  if (!(e != null && e.domPrint)) {
    let v = pe(
      t.filter((b) => (b == null ? void 0 : b.key) || (b == null ? void 0 : b.children))
    );
    v[0].type === "selection" && v.shift(), v.length ? l = v.map(ra) : l = [];
  }
  const s = [];
  e && Object.entries(e).forEach(([v, b]) => {
    typeof b == "function" && (s.push({
      name: v,
      func: b.toString().replaceAll(/[\r\n\t]/g, "").replaceAll(/\s{2,}/g, " ")
    }), delete e[v]);
  });
  let u = (f = (p = tt == null ? void 0 : tt.currentRoute) == null ? void 0 : p.value) == null ? void 0 : f.fullPath;
  u && (u = (r = u.replace) == null ? void 0 : r.call(u, /\//g, "_"));
  let c = {
    data: o,
    title: n,
    config: e,
    funcArr: s
  };
  e != null && e.domPrint || (c.columns = l), window.sessionStorage.setItem("print_" + u, JSON.stringify(c));
  const i = tt.resolve({
    name: "tablePrint",
    params: { isFrom: u }
  });
  window.open(i == null ? void 0 : i.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const dl = {
  print: Fi,
  init: $i
};
function Di(t = "", o = "", n = {}) {
  n.domPrint = !0, n.width || (n.width = 715), dl.print([], t, o, n);
}
function Ni(t) {
  var s, u;
  const o = (...c) => Ye.apply(this, c), n = o("r.closePreview"), e = o("r.fullImg");
  let l = "previewImg" + Math.floor(Math.random() * 1e7);
  (u = (s = et) == null ? void 0 : s.info) == null || u.call(s, {
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (c) => Ae(
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
            Ae(xa, {
              type: "md-close",
              title: n,
              class: "previewModalDelete",
              onClick() {
                var i, y;
                (y = (i = et) == null ? void 0 : i.remove) == null || y.call(i);
              }
            })
          ]
        )
      ]
    )
  }), Me(() => {
    var r, v, b, g;
    const c = document.getElementById(l);
    if (!c) return;
    let i = c.parentElement, y = 0, p = null;
    for (; i && y < 4; ) {
      if ((v = (r = i.classList) == null ? void 0 : r.contains) != null && v.call(r, "ivu-modal-content")) {
        p = i;
        break;
      }
      i = i.parentElement, y++;
    }
    p || (p = ((b = c.closest) == null ? void 0 : b.call(c, ".ivu-modal-content")) || null);
    const f = (g = c.parentElement) == null ? void 0 : g.nextSibling;
    p && (p.style.height = "0", p.style.padding = "0"), f && (f.style.display = "none");
  }, 10);
}
const Ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: je,
  $swal: ze,
  $swalConfirm: Xl,
  clearInterval: _n,
  clearTimeout: wn,
  domPrint: Di,
  fullScreenImgByDom: ht,
  fullScreenImgPreview: Ni,
  messageBox: tl,
  setInterval: kn,
  setTimeout: Me,
  tablePrint: dl
}, Symbol.toStringTag, { value: "Module" }));
(() => {
  if (window.wangeditorMenuInit)
    return;
  class t {
    constructor() {
      ft(this, "title");
      ft(this, "iconSvg");
      ft(this, "tag");
      ft(this, "alwaysEnable");
      this.title = Ye("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
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
      var i, y, p, f, r, v, b, g, S;
      const l = document.getElementById("editor-preview");
      let s = localStorage.getItem("editorPreviewW") || 300, u = localStorage.getItem("editorPreviewH") || 500;
      const c = (i = e == null ? void 0 : e.getHtml) == null ? void 0 : i.call(e);
      if (l) {
        let k = (v = (r = (f = (p = (y = l.children) == null ? void 0 : y[0]) == null ? void 0 : p.children) == null ? void 0 : f[1]) == null ? void 0 : r.children) == null ? void 0 : v[0], V = (S = (g = (b = l.children) == null ? void 0 : b[0]) == null ? void 0 : g.children) == null ? void 0 : S[1];
        k && (k.innerHTML = c, k.style.width = s + "px"), V && (V.style.height = u + "px"), l.style.display = "block";
      } else {
        const k = document.body, V = document.createElement("div");
        V.setAttribute("id", "editor-preview"), V.setAttribute("class", "editor-preview-mask"), V.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${s}' min='200'><span>高</span><input type='number' value='${u}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
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
        let x = V.children[0].children[0].children[0].children[3];
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
        x.addEventListener("blur", _), x.addEventListener("keyup", _), V.children[0].children[0].children[1].addEventListener("click", () => {
          V.style.display = "none";
        }), I.innerHTML = c, I.style.width = s + "px", B.style.height = u + "px", k.append(V);
      }
    }
  }
  const o = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  Ra.registerMenu(o), window.wangeditorMenuInit = !0;
})();
const zi = {
  mounted(t, o) {
    o.value && !sl(o.value) && (t.style.display = "none");
  }
}, Ui = {
  mounted(t, o) {
    var l;
    let n = t;
    if (o.arg && (n = (l = t.getElementsByClassName(o.arg)) == null ? void 0 : l[0]), !n)
      return;
    const e = function() {
      n.scrollTop > 0 && n.scrollHeight - n.scrollTop <= n.clientHeight && o.value && typeof o.value == "function" && o.value();
    };
    n.addEventListener("scroll", e), t.__loadmoreScrollHandler__ = e, t.__loadmoreSelectDom__ = n;
  },
  unmounted(t) {
    t.__loadmoreSelectDom__ && t.__loadmoreScrollHandler__ && t.__loadmoreSelectDom__.removeEventListener("scroll", t.__loadmoreScrollHandler__), delete t.__loadmoreScrollHandler__, delete t.__loadmoreSelectDom__;
  }
}, ds = Lt.use, cs = Lt.i18n, Pl = {
  ...Ki,
  ...hn
}, Ei = {
  install(t) {
    t.component("JsonViewer", Ma);
  }
}, Gi = function(t, o = {}) {
  je.init(o.useStore || o.store, t), Ei.install(t), o.locale && Lt.use(o.locale), o.i18n && Lt.i18n(o.i18n), o.router && (bn(o.router), dl.init(o.router)), o.amap && so(o.amap), o.notRegistryGlobal || (Object.keys(Il).forEach((n) => {
    t.component(n) || t.component(n, Il[n]);
  }), Object.keys(Pl).forEach((n) => {
    t.config.globalProperties[n] = Pl[n];
  })), t.directive("has") || t.directive("has", zi), t.directive("loadmore") || t.directive("loadmore", Ui), t.directive("clickOutside") || t.directive("clickOutside", ql), t.config.globalProperties.fontSizeBase = 14, t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.btTablePageAlign = "center", t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !0, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, fs = { install: Gi };
export {
  je as $fetch,
  ze as $swal,
  Xl as $swalConfirm,
  la as AlCascaderMC,
  ta as AsyncCascader,
  ll as BtTablePage,
  hi as CheckboxGroupThreeClass,
  oi as CheckboxGroupTwoClass,
  No as CheckboxTree,
  ia as Date,
  sa as EditorPro,
  Fo as FormGroup,
  Do as FormModal,
  $t as FormR,
  Ha as FullPop,
  Kl as HeaderBt,
  ja as Hello,
  qt as IconTxtBtn,
  ea as InputMap,
  oa as MonthRange,
  Ya as Page404,
  Ql as PagePro,
  nl as SearchForm,
  Zl as SelectInput,
  _i as SelectScrollMore,
  Zt as ShowHidePanel,
  zn as ShowHidePanelB,
  Sn as SideMenu,
  $n as SideMenuPro,
  jl as TableIconBtn,
  Un as TableSearch,
  Jl as TableSetting,
  Qo as TransferBox,
  na as UploadGroup,
  wi as WellCard,
  _n as clearInterval,
  Yt as clearObj,
  wn as clearTimeout,
  fn as dataFilterOrToUrl,
  nn as decimalDigitsLimit,
  fs as default,
  mn as directivesComponent,
  Di as domPrint,
  El as downloadFileByFormSubmit,
  jn as downloadFileReaderFile,
  Gl as downloadFileWithSpin,
  rs as emptyInput,
  qn as fakeALinkClick,
  on as fileExport,
  St as findCollection,
  el as findPath,
  tn as formDataHeadConfig,
  ht as fullScreenImgByDom,
  Ni as fullScreenImgPreview,
  sn as getColumnsKeys,
  Vl as getFileSrc,
  Yl as getFileTypeByName,
  Sl as getFileTypeIconByName,
  Xn as getStringWidth,
  en as has,
  sl as hasPermission,
  ss as htmlDecode,
  is as htmlEncode,
  pn as htmlPrint,
  cs as i18n,
  Gi as install,
  Jt as isClient,
  un as isEmptyValue,
  mt as isImgByFile,
  cn as isNaN,
  rl as isNumberNaN,
  rn as isNumberValue,
  Re as isValidValue,
  ds as locale,
  tl as messageBox,
  Y as myTypeof,
  an as oneOf,
  Qt as removeEmptyValue,
  kn as setInterval,
  Me as setTimeout,
  st as setValByOption,
  Xe as setValue,
  ul as siblingElems,
  us as stopBubbling,
  dn as stringLength,
  dl as tablePrint,
  ln as toFormData,
  Wn as toHump,
  zl as toLine,
  Hl as tooltipManual,
  Ul as trimObj
};
//# sourceMappingURL=plugRQw.js.map
