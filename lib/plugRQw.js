var ya = Object.defineProperty;
var va = (t, o, n) => o in t ? ya(t, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[o] = n;
var mt = (t, o, n) => va(t, typeof o != "symbol" ? o + "" : o, n);
import { getCurrentInstance as $t, defineComponent as pe, resolveComponent as te, createElementBlock as E, openBlock as T, normalizeStyle as ce, normalizeClass as _e, createBlock as le, createCommentVNode as fe, renderSlot as Ke, ref as K, computed as W, withDirectives as me, unref as p, createElementVNode as M, createVNode as Q, toDisplayString as q, withCtx as se, createTextVNode as we, vShow as ge, resolveDirective as Ft, onMounted as We, nextTick as $e, onUpdated as ga, onUnmounted as ot, h as Oe, isRef as Fe, Fragment as be, renderList as Ve, onBeforeMount as El, watch as Ce, mergeModels as ba, useModel as ka, onBeforeUnmount as ul, Teleport as wa, withModifiers as qt, mergeProps as ft, shallowRef as bt, triggerRef as _a, createSlots as ct, toRef as Ca, toValue as Gt } from "vue";
import Va from "deepmerge";
import { debounce as Dt, cloneDeep as he, isPlainObject as st, isObject as Sa, isFunction as Ta, isEmpty as Ee, isNumber as Bt, last as xt, isEqual as kt, isString as Kl, first as Xt, find as Jt, indexOf as bl, findIndex as Ot, remove as Ba } from "lodash-es";
import Vt from "sweetalert";
import { Tooltip as La, Modal as at, Button as Ht, TableColumnConfig as xa, Radio as Oa, Input as Ia, Message as kl, Icon as Aa } from "view-ui-plus";
import { useRouter as Nt, useRoute as dl } from "vue-router";
import Pa from "popper.js";
import Yt from "axios";
import Wt from "@amap/amap-jsapi-loader";
import Ma from "ar-cascader";
import { Toolbar as Ra, Editor as $a } from "@wangeditor/editor-for-vue";
import ht from "moment";
import { Boot as Fa } from "@wangeditor/editor";
import Da from "vue-json-viewer";
const zl = {
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
function Ea() {
  function t(n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }
  function o(n, ...e) {
    let l;
    return e.length === 1 && typeof e[0] == "object" && (l = e[0]), (!l || !l.hasOwnProperty) && (l = {}), n === void 0 ? "" : n.replace(Na, (r, i, c, s) => {
      let v;
      return n[s - 1] === "{" && n[s + r.length] === "}" ? c : (v = t(l, c) ? l[c] : null, v ?? "");
    });
  }
  return o;
}
const Ka = Ea();
let It = zl;
const za = {
  zh: zl
};
let wl, _l = {}, ze, jt = !1, Ua = function(t, o) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, o);
  if (ze && ze.global)
    return ze.global.t(t, o);
  if (ze && ze.locale) {
    if (!_l[ze.locale] || wl != ze.locale) {
      _l[ze.locale] = !0;
      let n = ze.getLocaleMessage(ze.locale) || {}, e = Va(za[ze.locale], n, { clone: !0 });
      It = e, ze.setLocaleMessage(ze.locale, e), wl = ze.locale;
    }
    return ze.hlang(t, o);
  }
};
const et = function(t, o) {
  if (jt)
    return "";
  let n = Ua.apply(this, [t, o]);
  if (n != null)
    return n;
  const e = t.split(".");
  let l = It;
  for (let r = 0, i = e.length; r < i; r++) {
    const c = e[r];
    if (n = l[c], r === i - 1) {
      jt = !0;
      try {
        return Ka(n, o);
      } finally {
        jt = !1;
      }
    }
    if (!n)
      return "";
    l = n;
  }
  return "";
}, Ga = function(t) {
  It = t || It;
}, Ha = function(t) {
  ze = t;
}, At = {
  use: Ga,
  t: et,
  i18n: Ha
};
function A(t, o) {
  var e, l, r;
  const n = (r = (l = (e = $t()) == null ? void 0 : e.appContext) == null ? void 0 : l.config) == null ? void 0 : r.globalProperties;
  return et.apply(n, [t, o]);
}
const Ul = /* @__PURE__ */ pe({
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
    return (r, i) => {
      const c = te("Icon");
      return T(), E("div", {
        class: _e({ headerBtCTM: !0, withIconCTM: n.icon || n.withIcon, disabled: n.disabled }),
        style: ce({ color: n.color, borderLeftColor: n.borderColor }),
        onClick: l
      }, [
        n.icon ? (T(), le(c, {
          key: 0,
          size: n.iconSize,
          type: n.icon
        }, null, 8, ["size", "type"])) : fe("", !0),
        Ke(r.$slots, "default")
      ], 6);
    };
  }
});
function Le() {
  var n, e;
  const t = (n = $t()) == null ? void 0 : n.appContext;
  return ((e = t == null ? void 0 : t.config) == null ? void 0 : e.globalProperties) || {};
}
const Wa = { class: "headerTxtAM" }, ja = { class: "contentAM" }, qa = /* @__PURE__ */ pe({
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
    let r = K(!1);
    const i = W(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), c = W(() => ({ zIndex: e.zIndex }));
    function s() {
      r.value = !0, l("on-open");
    }
    function v(m) {
      r.value = !1, l("on-close", m === !0);
    }
    return o({
      open: s,
      close: v
    }), (m, f) => me((T(), E("div", {
      class: "fullScreenPopBoxAM",
      style: ce(p(c))
    }, [
      M("div", {
        class: "headerAM",
        style: ce({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: p(i) })
      }, [
        M("span", Wa, q(m.title || p(A)("r.title")), 1),
        Q(Ul, {
          icon: "md-return-left",
          onClick: v
        }, {
          default: se(() => [
            we(q(p(A)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      M("div", ja, [
        Ke(m.$slots, "default")
      ])
    ], 4)), [
      [ge, p(r)]
    ]);
  }
}), Xa = { class: "msg" }, Ja = /* @__PURE__ */ pe({
  __name: "Hello",
  setup(t) {
    let o = K("Greetings from Ricky.");
    return (n, e) => (T(), E("span", Xa, q(p(o)), 1));
  }
}), Qt = /* @__PURE__ */ pe({
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
    const n = t, e = o, l = W(() => {
      var i;
      return Math.floor(n.size / 17 * ((i = Le()) == null ? void 0 : i.fontSizeBase)) + "px";
    });
    function r(i) {
      n.disabled || e("click", i);
    }
    return (i, c) => {
      const s = te("Icon"), v = Ft("has");
      return me((T(), E("div", {
        class: _e(["tabTopBtnsT", { disabled: n.disabled }]),
        onClick: r,
        style: ce({ "font-size": p(l) })
      }, [
        Q(s, {
          type: n.icon,
          size: n.size
        }, null, 8, ["type", "size"]),
        we(" " + q(n.name || p(A)("r.button")), 1)
      ], 6)), [
        [v, i.has]
      ]);
    };
  }
}), Ya = { class: "c404K" }, Qa = { class: "ct404" }, Za = { class: "p404" }, en = /* @__PURE__ */ pe({
  __name: "Page404",
  setup(t) {
    const n = $t().appContext.config.globalProperties.$router;
    function e() {
      n.go(-1);
    }
    return (l, r) => {
      const i = te("Button");
      return T(), E("div", Ya, [
        r[0] || (r[0] = M("div", { class: "t404" }, "404", -1)),
        M("div", Qa, "UH OH! " + q(p(A)("r.pageNotFound")), 1),
        M("div", Za, q(p(A)("r.notFoundMsg")), 1),
        Q(i, {
          class: "bt404",
          onClick: e
        }, {
          default: se(() => [
            we(q(p(A)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Ue(t, o, n, e = !0) {
  const l = (...r) => et.apply(this, r);
  return new Promise((r, i) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let c = l("r.confirm"), s = l("r.cancel"), v = !1, m = "swalConfirmBt", f = "swalCancelBt";
      const u = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let h = "";
      t.text && u.test(Y(t.text)) ? h = "content" : t.text && Y(t.text) === "String" && (h = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (s = t.buttons.cancel.text) && (v = !0), t.buttons.cancel.className && (f = t.buttons.cancel.className), t.buttons.confirm.text && (c = t.buttons.confirm.text), t.buttons.confirm.className && (m = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (s = t.buttons[0], v = !0), t.buttons[1] && (c = t.buttons[1]))), Vt({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [h]: t.text,
        buttons: {
          confirm: {
            text: c,
            value: !0,
            visible: !0,
            className: m
          },
          cancel: {
            text: s,
            value: null,
            visible: v,
            className: f
          }
        },
        closeOnClickOutside: t.closeOnClickOutside ?? !0
      }).then((g) => {
        g && typeof t.onOk == "function" && t.onOk(), r(g);
      }).catch((g) => {
        i(g);
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
      Vt({
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
      }).then((s) => {
        r(s);
      }).catch((s) => {
        i(s);
      });
    } else if (typeof t == "boolean")
      !t && Vt.close && Vt.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
const tn = { class: "tableTooltip" }, ln = /* @__PURE__ */ pe({
  __name: "TableTooltip",
  props: {
    content: { type: [String, Number, Boolean, null] }
  },
  setup(t) {
    const o = t, n = K(), e = K(), l = K(!0);
    let r = null;
    const i = K(200);
    function c() {
      const s = l.value ? n.value : e.value;
      if (!s)
        return;
      let v = document.createRange();
      v.setStart(s, 0), v.setEnd(s, s.childNodes.length);
      const m = v.getBoundingClientRect().width;
      i.value = s.offsetWidth * 2, l.value = m < s.offsetWidth, v = null;
    }
    return We(() => {
      c(), r = Dt(() => {
        $e(function() {
          c();
        });
      }, 200), window.addEventListener("resize", r);
    }), ga(c), ot(() => {
      r == null || r.cancel(), window.removeEventListener("resize", r);
    }), (s, v) => (T(), E("div", tn, [
      p(l) ? (T(), E("span", {
        key: 0,
        ref_key: "spanRef",
        ref: n,
        class: "contentText"
      }, q(o.content), 513)) : (T(), le(p(La), {
        key: 1,
        content: typeof o.content == "boolean" ? String(o.content) : o.content ?? "",
        "max-width": p(i),
        transfer: ""
      }, {
        default: se(() => [
          M("span", {
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
let ut = 0, lt = null;
function Zt() {
  if (!lt) {
    lt = document.createElement("div"), lt.setAttribute("class", "spinModal"), lt.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
    const t = document.getElementsByTagName("body")[0];
    t ? t.append(lt) : document.readyState === "loading" && document.addEventListener("DOMContentLoaded", () => {
      var o;
      (o = document.getElementsByTagName("body")[0]) == null || o.append(lt);
    });
  }
  return lt;
}
typeof document < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
  Zt();
}) : Zt());
function Cl(t) {
  const o = lt || Zt();
  t ? o.classList.add("show") : o.classList.remove("show");
}
function Pt(t) {
  let o = ut;
  t ? ut++ : ut > 0 && ut--, o !== ut && (ut === 0 ? Cl(!1) : o === 0 && Cl(!0));
}
const el = typeof window < "u";
function Qe(t, o, n) {
  Fe(t[o]) ? t[o].value = n : t[o] = n;
}
function Y(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function an(t) {
  return { style: { display: cl(t) ? "unset" : "none" } };
}
function Gl(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function Hl(t) {
  const o = he(t);
  let n = Y(o);
  if (n === "Object") {
    for (let e in o)
      if (o.hasOwnProperty(e)) {
        let l = Y(o[e]);
        l === "String" ? o[e] = o[e].trim() : (l === "Object" || l === "Array") && Mt(o[e]);
      }
  } else if (n === "Array")
    for (let e = 0, l = o.length; e < l; e++) {
      let r = Y(o[e]);
      r === "String" ? o[e] = o[e].trim() : (r === "Array" || r === "Object") && Mt(o[e]);
    }
  return o;
}
function Mt(t) {
  let o = Y(t);
  if (o === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = Y(t[n]);
        e === "String" ? t[n] = t[n].trim() : (e === "Object" || e === "Array") && Mt(t[n]);
      }
  } else if (o === "Array")
    for (let n = 0, e = t.length; n < e; n++) {
      let l = Y(t[n]);
      l === "String" ? t[n] = t[n].trim() : (l === "Array" || l === "Object") && Mt(t[n]);
    }
}
function tl(t, o = []) {
  if (Y(t) === "Array")
    return t.forEach((n, e) => {
      switch (Y(n)) {
        case "Array":
        case "Object":
          tl(n);
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
              tl(t[n]);
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
function Lt(t, o, n = !1) {
  if (!t || !o)
    return !1;
  let e, l = "notFoundC", r = function(i, c) {
    if (Array.isArray(i)) {
      if (Y(c) === "Function" && c(i))
        return l = i, [];
      for (let s of i) {
        if (l !== "notFoundC")
          break;
        if (Y(c) === "Function" && c(s) || s === c)
          return l = s, [i.indexOf(s)];
        if (Y(s) === "Array" || Y(s) === "Object") {
          let v = r(s, c);
          if (v !== void 0)
            return [i.indexOf(s), ...v];
        }
      }
    } else if (Y(i) === "Object") {
      if (Y(c) === "Function" && c(i))
        return l = i, [];
      for (let s in i) {
        if (l !== "notFoundC")
          break;
        if (i.hasOwnProperty(s)) {
          if (Y(c) === "Function" && c(s) || i[s] === c)
            return l = i[s], [s];
          if (Y(i[s]) === "Object" || Y(i[s]) === "Array") {
            let v = r(i[s], c);
            if (v !== void 0)
              return [s, ...v];
          }
        }
      }
    }
  };
  return e = r(t, o), n ? e || !1 : l === "notFoundC" ? !1 : l;
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
let qe = null;
function Wl(t, o = {}, n = "get") {
  let e = document.getElementsByTagName("body")[0];
  if (!e) {
    console.error("document.body 不存在，无法执行文件下载");
    return;
  }
  qe || (qe = document.createElement("form"), qe.setAttribute("style", "display:none"), qe.setAttribute("target", ""), e.appendChild(qe)), qe.innerHTML = "", qe.setAttribute("method", n);
  let l = t;
  if (window != null && window.g) {
    let r = Object.keys(window.g).filter((i) => {
      var c;
      return ((c = i == null ? void 0 : i.indexOf) == null ? void 0 : c.call(i, "URL")) > -1;
    }).map((i) => {
      var c;
      return (c = i.replace) == null ? void 0 : c.call(i, "URL", "");
    });
    for (let i of r) {
      let c = new RegExp("^/" + i + "(?=/.*$)", "i");
      if (c.test(t) && window.g[i + "URL"]) {
        l = window.g[i + "URL"] + t.replace(c, "");
        break;
      }
    }
  }
  if (qe.setAttribute("action", l), st(o)) {
    for (let r in o)
      if (o.hasOwnProperty(r) && (o[r] || o[r] === 0 || o[r] === !1 || o[r] === "")) {
        let i = document.createElement("input");
        i.setAttribute("type", "hidden"), i.setAttribute("name", r), i.setAttribute("value", o[r]), qe.appendChild(i);
      }
    qe.submit();
  } else
    console.error("请求数据格式有误，无法下载文件");
}
async function un(t, o = {}, n = "get", e = !1, l) {
  if (o.hasOwnProperty("columns") && (o.columns === "" || o.columns === null || o.columns === void 0)) {
    Ue.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  e ? await jl(t, o, n, l) : Wl(t, o, n);
}
async function jl(t, o = {}, n = "get", e) {
  Pt(!0);
  try {
    let l = t;
    if (window != null && window.g) {
      let f = Object.keys(window.g).filter((u) => (u == null ? void 0 : u.indexOf("URL")) > -1).map((u) => u == null ? void 0 : u.replace("URL", ""));
      for (let u of f) {
        let h = new RegExp("^/" + u + "(?=/.*$)", "i");
        if (h.test(t) && window.g[u + "URL"]) {
          l = window.g[u + "URL"] + t.replace(h, "");
          break;
        }
      }
    }
    const r = {
      method: n.toUpperCase(),
      credentials: "include"
    };
    if (n.toLowerCase() === "get" && Object.keys(o).length > 0) {
      const f = new URLSearchParams();
      for (let u in o)
        o.hasOwnProperty(u) && (o[u] || o[u] === 0 || o[u] === !1 || o[u] === "") && f.append(u, o[u]);
      l += (l.includes("?") ? "&" : "?") + f.toString();
    }
    ["post", "put"].includes(n.toLowerCase()) && (r.headers = {
      "Content-Type": "application/json"
    }, r.body = JSON.stringify(o));
    const i = await fetch(l, r);
    if (!i.ok)
      throw new Error("下载失败");
    let c = e || "download";
    if (!e) {
      let f = i.headers.get("Content-Disposition");
      if (f) {
        f = decodeURIComponent(f);
        const u = f.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        u && u[1] && (c = u[1].replace(/['"]/g, ""));
      } else {
        const u = l.split("?")[0], h = u.substring(u.lastIndexOf("/") + 1);
        h && h.includes(".") && (c = decodeURIComponent(h));
      }
    }
    const s = await i.blob(), v = window.URL.createObjectURL(s), m = document.createElement("a");
    m.href = v, m.download = c, document.body.appendChild(m), m.click(), document.body.removeChild(m), window.URL.revokeObjectURL(v);
  } catch (l) {
    console.error("下载出错:", l);
  } finally {
    Pt(!1);
  }
}
function dn(t, o, n = !1) {
  let e;
  if (t && Y(o) === "Array") {
    let l = localStorage.getItem(t);
    if (l) {
      let r = JSON.parse(decodeURI(l));
      e = o.filter((i) => {
        var c;
        return (i == null ? void 0 : i.key) && ((c = r == null ? void 0 : r.indexOf) == null ? void 0 : c.call(r, i.title)) !== -1;
      }).map((i) => i.key);
    } else
      e = o.map((r) => r == null ? void 0 : r.key);
  } else
    e = [];
  return n || (e = String(e)), e;
}
function Pe(t) {
  return t != null && t !== "";
}
function cn(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function ql(t, o = !1, n = "") {
  return function(e, l) {
    var i, c;
    let r;
    if (Array.isArray(t)) {
      let s = [];
      for (let v of t)
        Pe((i = l.row) == null ? void 0 : i[v]) && s.push(l.row[v]);
      r = s.join(n);
    } else typeof t == "function" ? r = t(l) : r = (c = l.row) == null ? void 0 : c[t];
    return Oe(ln, { content: o ? r === "" ? "--" : r ?? "--" : r });
  };
}
function fn(t) {
  if (st(t)) {
    for (let o in t)
      if (t.hasOwnProperty(o) && Pe(t[o]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let o of t)
      if (Pe(o))
        return !1;
    return !0;
  }
  return !Pe(t);
}
function pn(t) {
  return Y(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : Y(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function dt({
  group: t,
  condition: o,
  key: n,
  val: e,
  childKey: l = "children"
}) {
  if (Y(t) !== "Array" || Y(o) !== "Function" || Y(n) !== "String" || Y(l) !== "String")
    return !1;
  t.forEach((r) => {
    o(r) && (Y(e) === "Function" ? r[n] = e(r[n]) : r[n] = e), Y(r[l]) === "Array" && r[l].length > 0 && dt({
      group: r[l],
      condition: o,
      key: n,
      val: e,
      childKey: l
    });
  });
}
function cl(t) {
  let o = sessionStorage.getItem("btnPermissions");
  return o && o.trim() !== "" ? o.split(",").indexOf(t) > -1 : !1;
}
function mn(t) {
  return fl(t);
}
function fl(t) {
  return typeof t == "number" && Number.isNaN(t);
}
function hn(t, o = !1, n = !1) {
  if (Y(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), l = "";
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let i = e[r];
      i === void 0 || i === "" || Y(i) === "String" && i.trim() === "" || i === null || fl(i) ? n ? o ? l += r + "=&" : e[r] = "" : delete e[r] : o && (l += r + "=" + i + "&");
    }
  return o ? l.length > 0 ? l.substring(0, l.length - 1) : "" : e;
}
function ll(t) {
  let o = {};
  if (Array.isArray(t)) {
    o = [];
    for (let n of t)
      Array.isArray(n) || st(n) ? o.push(ll(n)) : Pe(n) && o.push(n);
  } else if (st(t))
    for (let n in t)
      t.hasOwnProperty(n) && (Array.isArray(t[n]) || st(t[n]) ? o[n] = ll(t[n]) : Pe(t[n]) && (o[n] = t[n]));
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
function pl(t) {
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
    n.push(Vl(o));
  else
    for (let e of o)
      n.push(Vl(e));
  return me(t, n);
}
function Vl(t) {
  const [o, ...n] = t;
  return [Ft(o), ...n];
}
const gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: tl,
  dataFilterOrToUrl: hn,
  decimalDigitsLimit: rn,
  directivesComponent: vn,
  downloadFileByFormSubmit: Wl,
  downloadFileWithSpin: jl,
  fileExport: un,
  findCollection: Lt,
  formDataHeadConfig: nn,
  getColumnsKeys: dn,
  has: an,
  hasPermission: cl,
  htmlPrint: yn,
  isClient: el,
  isEmptyValue: fn,
  isNaN: mn,
  isNumberNaN: fl,
  isNumberValue: cn,
  isValidValue: Pe,
  myTypeof: Y,
  oneOf: sn,
  removeEmptyValue: ll,
  setValByOption: dt,
  setValue: Qe,
  siblingElems: pl,
  stringLength: pn,
  toFormData: on,
  toLine: Gl,
  tooltipManual: ql,
  trimObj: Hl
}, Symbol.toStringTag, { value: "Module" })), bn = { class: "groupBoxRP" }, kn = ["onClick"], wn = /* @__PURE__ */ pe({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const o = Nt(), n = t;
    function e(r) {
      return (r == null ? void 0 : r.path) === n.pathName ? "active" : "";
    }
    function l(r, i) {
      var m, f, u, h, g, k, L, _;
      (m = r == null ? void 0 : r.preventDefault) == null || m.call(r);
      let c = r == null ? void 0 : r.target;
      if (i && !i.children && !c.classList.contains("active")) {
        o.push(i.path);
        return;
      }
      let s = c.parentNode, v = pl(s);
      for (let V of v) {
        (u = (f = V == null ? void 0 : V.classList) == null ? void 0 : f.remove) == null || u.call(f, "open");
        const D = (h = V == null ? void 0 : V.querySelectorAll) == null ? void 0 : h.call(V, ".open");
        if (D && Array.isArray(D))
          for (let S of D)
            (k = (g = S == null ? void 0 : S.classList) == null ? void 0 : g.remove) == null || k.call(g, "open");
      }
      (_ = (L = s == null ? void 0 : s.classList) == null ? void 0 : L.toggle) == null || _.call(L, "open");
    }
    return (r, i) => {
      const c = te("Icon"), s = te("sideMenuGroup", !0);
      return T(), E("ul", bn, [
        (T(!0), E(be, null, Ve(n.data, (v, m) => (T(), E(be, {
          key: (v == null ? void 0 : v.path) + m
        }, [
          v ? (T(), E("li", {
            key: 0,
            class: _e({ dropItemRP: v.children })
          }, [
            M("div", {
              class: _e(["menuTxtR", e(v)]),
              onClick: (f) => l(f, v),
              style: ce({ paddingLeft: v.level * 20 + "px" })
            }, [
              v != null && v.icon ? (T(), le(c, {
                key: 0,
                class: "menuIcoL",
                custom: "iconfont " + v.icon
              }, null, 8, ["custom"])) : fe("", !0),
              M("span", null, q((v == null ? void 0 : v.name) || "-- no name --"), 1)
            ], 14, kn),
            v.children ? (T(), le(s, {
              key: 0,
              data: v.children,
              "path-name": n.pathName
            }, null, 8, ["data", "path-name"])) : fe("", !0)
          ], 2)) : fe("", !0)
        ], 64))), 128))
      ]);
    };
  }
});
let wt = [], _t = [], Sl = !1;
const _n = function(t) {
  if (Sl) {
    console.warn("定时器模块已经初始化过，请勿重复调用 init");
    return;
  }
  t && typeof t.beforeEach == "function" ? (t.beforeEach(() => {
    wt.forEach((o) => {
      window.clearTimeout(o);
    }), _t.forEach((o) => {
      window.clearInterval(o);
    }), wt.length = 0, _t.length = 0;
  }), Sl = !0) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Re = function(t, o) {
  if (typeof t != "function")
    throw new TypeError("第一个参数必须是函数");
  if (typeof o != "number" || o < 0)
    throw new TypeError("第二个参数必须是非负数");
  let n = window.setTimeout(t, o);
  return wt.push(n), n;
}, Cn = function(t, o) {
  if (typeof t != "function")
    throw new TypeError("第一个参数必须是函数");
  if (typeof o != "number" || o <= 0)
    throw new TypeError("第二个参数必须是正数");
  let n = window.setInterval(t, o);
  return _t.push(n), n;
}, Vn = function(t) {
  window.clearTimeout(t);
  const o = wt.indexOf(t);
  o > -1 && wt.splice(o, 1);
}, Sn = function(t) {
  window.clearInterval(t);
  const o = _t.indexOf(t);
  o > -1 && _t.splice(o, 1);
}, Tn = { class: "menuListR" }, Bn = /* @__PURE__ */ pe({
  __name: "SideMenu",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { expose: o, emit: n }) {
    const e = t, l = n, r = dl(), i = K(!0), c = K(), s = K(), v = W(() => i.value ? A("r.hideMenu") : A("r.showMenu")), m = W(() => i.value ? "ios-arrow-back" : "ios-arrow-forward");
    El(() => {
      let h = localStorage.getItem("menuDisplayR") || "";
      h !== "" ? i.value = JSON.parse(h) : (i.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), Ce(
      () => r.path,
      (h) => {
        c.value = h, $e(() => {
          Re(u, 10);
        });
      },
      { immediate: !0 }
    );
    function f(h) {
      typeof h == "boolean" ? i.value = h : i.value = !i.value, localStorage.setItem("menuDisplayR", JSON.stringify(i.value)), l("on-change", i.value);
    }
    function u() {
      var g, k, L, _, V;
      let h = s.value.querySelectorAll(".dropItemRP");
      for (let D of h)
        (g = D == null ? void 0 : D.querySelector) != null && g.call(D, ".active") && !((L = (k = D.classList) == null ? void 0 : k.contains) != null && L.call(k, "open")) && ((V = (_ = D.classList) == null ? void 0 : _.add) == null || V.call(_, "open"));
    }
    return o({ showHideMenu: f }), (h, g) => {
      const k = te("Icon");
      return T(), E("div", {
        ref_key: "menuRef",
        ref: s,
        class: _e(["menuBoxRP", "cannotSelect", { light: h.light }])
      }, [
        me(M("div", Tn, [
          Q(wn, {
            data: e.data,
            pathName: p(c)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ge, p(i)]
        ]),
        Q(k, {
          type: p(m),
          size: 25,
          class: _e([{ showIco: !p(i) }, "menuShowHideIco"]),
          title: p(v),
          onClick: f,
          color: p(i) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 2);
    };
  }
}), Ln = { class: "groupBoxRX" }, xn = ["onMouseenter"], On = ["onClick"], In = /* @__PURE__ */ pe({
  __name: "SideMenuProGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const o = Nt(), n = t, e = K("");
    function l(s) {
      let v = "menuTxtR ";
      return (s == null ? void 0 : s.path) === n.pathName && (v += "active "), v;
    }
    function r(s, v) {
      var f;
      (f = s == null ? void 0 : s.preventDefault) == null || f.call(s);
      let m = s == null ? void 0 : s.target;
      v && !v.children && !m.classList.contains("active") && o.push(v.path);
    }
    function i(s, v) {
      var m;
      (m = s == null ? void 0 : s.preventDefault) == null || m.call(s), e.value = v == null ? void 0 : v.path;
    }
    function c(s) {
      var v;
      (v = s == null ? void 0 : s.preventDefault) == null || v.call(s), e.value = "";
    }
    return (s, v) => {
      const m = te("Icon"), f = te("SideMenuProGroup", !0);
      return T(), E("ul", Ln, [
        (T(!0), E(be, null, Ve(n.data, (u, h) => {
          var g;
          return T(), E("li", {
            key: (u == null ? void 0 : u.path) + h,
            class: _e({ dropItemRX: u == null ? void 0 : u.children }),
            onMouseenter: (k) => i(k, u),
            onMouseleave: v[0] || (v[0] = (k) => c(k))
          }, [
            M("div", {
              class: _e(l(u)),
              onClick: (k) => r(k, u),
              style: ce({ paddingLeft: u.level * 20 + "px" })
            }, [
              we(q((u == null ? void 0 : u.name) || "-- no name --") + " ", 1),
              me(Q(m, {
                class: "dropIcoRX",
                type: "ios-arrow-forward",
                size: 16
              }, null, 512), [
                [ge, u.children && u.children.length > 0]
              ])
            ], 14, On),
            ((g = u == null ? void 0 : u.children) == null ? void 0 : g.length) > 0 ? me((T(), le(f, {
              key: 0,
              class: "rightChildRX",
              data: u == null ? void 0 : u.children,
              "path-name": s.pathName
            }, null, 8, ["data", "path-name"])), [
              [ge, p(e) === (u == null ? void 0 : u.path)]
            ]) : fe("", !0)
          ], 42, xn);
        }), 128))
      ]);
    };
  }
}), An = { class: "groupBoxRX" }, Pn = ["onClick"], Xl = /* @__PURE__ */ pe({
  __name: "SideMenuTwoLevel",
  props: {
    data: { default: () => [] },
    pathName: { default: "" },
    fromIcoMenu: { type: Boolean }
  },
  setup(t) {
    const o = Nt(), n = t;
    function e(r) {
      let i = "menuTxtR ";
      return (r == null ? void 0 : r.path) === n.pathName && (i += "active "), i;
    }
    function l(r, i) {
      var f, u, h, g, k, L, _, V, D, S, R, x, $, y;
      (f = r == null ? void 0 : r.preventDefault) == null || f.call(r);
      let c = r == null ? void 0 : r.target;
      if (i && !i.children && !c.classList.contains("active")) {
        o.push(i.path);
        return;
      }
      const s = (u = c == null ? void 0 : c.querySelector) == null ? void 0 : u.call(c, ".dropIcoRX"), v = c.parentNode, m = pl(v);
      for (let I of m) {
        (g = (h = I == null ? void 0 : I.classList) == null ? void 0 : h.remove) == null || g.call(h, "open");
        const O = (k = I == null ? void 0 : I.querySelector) == null ? void 0 : k.call(I, ".dropIcoRX");
        (_ = (L = O == null ? void 0 : O.classList) == null ? void 0 : L.remove) == null || _.call(L, "open");
        const ee = (V = I == null ? void 0 : I.querySelectorAll) == null ? void 0 : V.call(I, ".open");
        for (let N of ee)
          (S = (D = N == null ? void 0 : N.classList) == null ? void 0 : D.remove) == null || S.call(D, "open");
      }
      (x = (R = v == null ? void 0 : v.classList) == null ? void 0 : R.toggle) == null || x.call(R, "open"), (y = ($ = s == null ? void 0 : s.classList) == null ? void 0 : $.toggle) == null || y.call($, "open");
    }
    return (r, i) => {
      const c = te("Icon");
      return T(), E("ul", An, [
        (T(!0), E(be, null, Ve(n.data, (s, v) => (T(), E("li", {
          key: (s == null ? void 0 : s.path) + v,
          class: _e({ dropItemRX: s == null ? void 0 : s.children, open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu })
        }, [
          M("div", {
            class: _e(e(s)),
            onClick: (m) => l(m, s),
            style: ce({ paddingLeft: s.level * 20 + "px" })
          }, [
            Q(c, {
              class: "menuIcoL",
              custom: "iconfont " + (s.icon || "icon-r-menu-default")
            }, null, 8, ["custom"]),
            M("span", null, q((s == null ? void 0 : s.name) || "-- no name --"), 1),
            me(Q(c, {
              class: _e(["dropIcoRX", { open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu }]),
              type: "ios-arrow-forward"
            }, null, 8, ["class"]), [
              [ge, s.children && s.children.length > 0]
            ])
          ], 14, Pn),
          s.children ? (T(), le(In, {
            key: 0,
            data: s.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : fe("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Mn = { class: "groupBoxRX" }, Rn = ["onMouseenter"], $n = ["onClick"], Fn = /* @__PURE__ */ pe({
  __name: "SideIcoMenu",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const o = Nt(), n = t, e = K("");
    function l(s) {
      let v = "menuTxtR ";
      return (s == null ? void 0 : s.path) === n.pathName && (v += "active "), v;
    }
    function r(s, v) {
      var f;
      (f = s == null ? void 0 : s.preventDefault) == null || f.call(s);
      let m = s == null ? void 0 : s.target;
      v && !v.children && !m.classList.contains("active") && o.push(v.path);
    }
    function i(s, v) {
      var m;
      (m = s == null ? void 0 : s.preventDefault) == null || m.call(s), e.value = v == null ? void 0 : v.path;
    }
    function c(s) {
      var v;
      (v = s == null ? void 0 : s.preventDefault) == null || v.call(s), e.value = "";
    }
    return (s, v) => {
      const m = te("Icon");
      return T(), E("ul", Mn, [
        (T(!0), E(be, null, Ve(n.data, (f, u) => (T(), E("li", {
          key: (f == null ? void 0 : f.path) + u,
          class: _e({ dropItemRX: f.children }),
          onMouseenter: (h) => i(h, f),
          onMouseleave: v[0] || (v[0] = (h) => c(h))
        }, [
          M("div", {
            class: _e(l(f)),
            onClick: (h) => r(h, f)
          }, [
            Q(m, {
              class: "menuIcoM",
              custom: "iconfont " + (f.icon || "icon-r-menu-default"),
              size: "20"
            }, null, 8, ["custom"])
          ], 10, $n),
          me(Q(Xl, {
            class: "rightTwoMenu",
            data: [f],
            pathName: n.pathName,
            fromIcoMenu: ""
          }, null, 8, ["data", "pathName"]), [
            [ge, p(e) === (f == null ? void 0 : f.path)]
          ])
        ], 42, Rn))), 128))
      ]);
    };
  }
}), Dn = { class: "menuListR" }, Nn = /* @__PURE__ */ pe({
  __name: "SideMenuPro",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { expose: o, emit: n }) {
    const e = t, l = n, r = dl(), i = K(!0), c = K(), s = K(), v = W(() => i.value ? A("r.hideMenu") : A("r.showMenu")), m = W(() => i.value ? "iconfont icon-r-menu-hide" : "iconfont icon-r-menu-open");
    El(() => {
      let h = localStorage.getItem("menuDisplayRPro") || "";
      h !== "" ? i.value = JSON.parse(h) : (i.value = !0, localStorage.setItem("menuDisplayRPro", JSON.stringify(!0)));
    }), Ce(
      () => r.path,
      (h) => {
        c.value = h, $e(() => {
          Re(u, 10);
        });
      },
      { immediate: !0 }
    );
    function f(h) {
      typeof h == "boolean" ? i.value = h : i.value = !i.value, localStorage.setItem("menuDisplayRPro", JSON.stringify(i.value)), l("on-change", i.value);
    }
    function u() {
      var g, k, L, _, V, D, S, R, x, $, y, I, O, ee, N, w, X, F, H, b, B, J, U, ae, ue, ve, Ie, xe, De, oe, Se, Ne, Je, G, z, ye, ke, Te, de;
      let h = s.value.querySelectorAll(".dropItemRX");
      for (let ie of h) {
        const Me = (k = (g = ie == null ? void 0 : ie.childNodes[0]) == null ? void 0 : g.querySelector) == null ? void 0 : k.call(g, ".dropIcoRX");
        (L = ie == null ? void 0 : ie.querySelector) != null && L.call(ie, ".active") ? (D = (V = (_ = ie == null ? void 0 : ie.childNodes[1]) == null ? void 0 : _.classList) == null ? void 0 : V.contains) != null && D.call(V, "rightChildRX") ? (x = (R = (S = ie == null ? void 0 : ie.childNodes[0]) == null ? void 0 : S.classList) == null ? void 0 : R.contains) != null && x.call(R, "activeR") || (y = ie == null ? void 0 : ($ = ie.childNodes[0].classList).add) == null || y.call($, "activeR") : ((O = (I = ie == null ? void 0 : ie.classList) == null ? void 0 : I.contains) != null && O.call(I, "open") || (N = (ee = ie.classList).add) == null || N.call(ee, "open"), Me && !((X = (w = Me == null ? void 0 : Me.classList) == null ? void 0 : w.contains) != null && X.call(w, "open")) && ((H = (F = Me.classList).add) == null || H.call(F, "open"))) : (J = (B = (b = ie == null ? void 0 : ie.childNodes[1]) == null ? void 0 : b.classList) == null ? void 0 : B.contains) != null && J.call(B, "rightChildRX") ? (ue = (ae = (U = ie == null ? void 0 : ie.childNodes[0]) == null ? void 0 : U.classList) == null ? void 0 : ae.contains) != null && ue.call(ae, "activeR") && ((Ie = ie == null ? void 0 : (ve = ie.childNodes[0].classList).remove) == null || Ie.call(ve, "activeR")) : ((De = (xe = ie == null ? void 0 : ie.classList) == null ? void 0 : xe.contains) != null && De.call(xe, "open") && !((Se = (oe = ie == null ? void 0 : ie.classList) == null ? void 0 : oe.contains) != null && Se.call(oe, "fromIcoMenu")) && ((Je = (Ne = ie.classList).remove) == null || Je.call(Ne, "open")), (z = (G = Me == null ? void 0 : Me.classList) == null ? void 0 : G.contains) != null && z.call(G, "open") && !((ke = (ye = Me == null ? void 0 : Me.classList) == null ? void 0 : ye.contains) != null && ke.call(ye, "fromIcoMenu")) && ((de = (Te = Me.classList).remove) == null || de.call(Te, "open")));
      }
    }
    return o({ showHideMenu: f }), (h, g) => {
      const k = te("Icon");
      return T(), E("div", {
        ref_key: "menuProRef",
        ref: s,
        class: _e(["menuBoxRPro", "cannotSelect", { light: h.light }])
      }, [
        me(M("div", Dn, [
          Q(Xl, {
            data: e.data,
            pathName: p(c)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ge, p(i)]
        ]),
        me(Q(Fn, {
          class: "icoMenuR",
          data: h.data,
          pathName: p(c)
        }, null, 8, ["data", "pathName"]), [
          [ge, !p(i)]
        ]),
        Q(k, {
          custom: p(m),
          size: 14,
          class: _e([{ showIco: !p(i) }, "menuShowHideIco"]),
          title: p(v),
          onClick: f
        }, null, 8, ["custom", "class", "title"])
      ], 2);
    };
  }
}), En = ["title"], Jl = /* @__PURE__ */ pe({
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
    function l(r) {
      e.disabled || n("click", r);
    }
    return (r, i) => {
      const c = te("Icon"), s = Ft("has");
      return me((T(), E("div", {
        class: _e(["tableBtnsG", { disabled: e.disabled }]),
        onClick: l,
        title: e.title || p(A)("r.button")
      }, [
        Q(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, En)), [
        [s, e.has]
      ]);
    };
  }
}), Kn = { class: "contentX" }, zn = { class: "arrowA" }, al = /* @__PURE__ */ pe({
  __name: "ShowHidePanel",
  props: /* @__PURE__ */ ba({
    bg: {}
  }, {
    modelValue: { type: Boolean, default: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const o = ka(t, "modelValue"), n = t, e = W(() => o ? "background:" + n.bg || "transparent" : "");
    return (l, r) => {
      const i = te("Icon");
      return T(), E("div", {
        style: ce(p(e))
      }, [
        me(M("div", Kn, [
          Ke(l.$slots, "default")
        ], 512), [
          [ge, o.value]
        ]),
        M("div", zn, [
          M("div", {
            class: "btA",
            onClick: r[0] || (r[0] = (c) => o.value = !o.value)
          }, [
            Q(i, {
              type: o.value ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Un = { class: "contentZ" }, Gn = /* @__PURE__ */ pe({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    const n = t, e = o, l = W({
      get() {
        return n.modelValue;
      },
      set(i) {
        e("update:modelValue", i);
      }
    }), r = W(() => l.value ? "background:" + n.bg : "");
    return (i, c) => (T(), E("div", {
      style: ce(p(r))
    }, [
      me(M("div", Un, [
        Ke(i.$slots, "default")
      ], 512), [
        [ge, p(l)]
      ])
    ], 4));
  }
});
function Et() {
  const t = K(!1);
  function o() {
    t.value = !0;
  }
  function n() {
    t.value = !1;
  }
  function e(r) {
    t.value || r();
  }
  function l(r) {
    t.value || r();
  }
  return {
    isComposing: t,
    onCompositionStart: o,
    onCompositionEnd: n,
    handleChange: e,
    handleSearch: l
  };
}
const Hn = /* @__PURE__ */ pe({
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
    const { onCompositionStart: r, onCompositionEnd: i, handleSearch: c } = Et(), s = W({
      get() {
        return e.modelValue;
      },
      set(u) {
        n("update:modelValue", u);
      }
    }), v = W({
      get() {
        return e.open;
      },
      set(u) {
        n("on-toggle", u);
      }
    }), m = W(() => v.value ? "ios-arrow-up" : "ios-arrow-down");
    function f() {
      c(() => {
        l || (l = !0, n("on-search", s.value), Re(() => {
          l = !1;
        }, 2e3));
      });
    }
    return (u, h) => {
      const g = te("Input"), k = te("icon");
      return T(), E("div", {
        class: "tableSearchV",
        style: ce({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Ke(u.$slots, "default", {}, () => [
          Q(g, {
            modelValue: p(s),
            "onUpdate:modelValue": h[0] || (h[0] = (L) => Fe(s) ? s.value = L : null),
            style: ce({ width: e.width }),
            search: "",
            onCompositionstart: p(r),
            onCompositionend: p(i),
            onOnSearch: f,
            class: "searchInputC",
            placeholder: e.placeholder || p(A)("r.pInput")
          }, null, 8, ["modelValue", "style", "onCompositionstart", "onCompositionend", "placeholder"])
        ]),
        me(M("span", {
          class: "sbt",
          onClick: h[1] || (h[1] = (L) => v.value = !p(v)),
          style: ce({ color: e.btnColor })
        }, [
          Q(k, {
            type: p(m),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          we(q(p(A)("r.adSearch")), 1)
        ], 4), [
          [ge, e.showBtn]
        ])
      ], 4);
    };
  }
}), Yl = {
  beforeMount(t, o) {
    t.__vueClickOutsideBinding__ = o;
    function n(e) {
      var l, r;
      if (t.contains(e.target))
        return !1;
      (r = (l = t.__vueClickOutsideBinding__) == null ? void 0 : l.value) == null || r.call(l, e);
    }
    t.__vueClickOutside__ = n, el && document.addEventListener("click", n);
  },
  updated(t, o) {
    t.__vueClickOutsideBinding__ = o;
  },
  unmounted(t) {
    el && document.removeEventListener("click", t.__vueClickOutside__), delete t.__vueClickOutside__, delete t.__vueClickOutsideBinding__;
  }
};
function Ql(t, o, n, e, l = !1) {
  const r = (...i) => et.apply(this, i);
  Ue.call(this, {
    title: t === null ? r("r.info.title") : t,
    text: o === null ? r("r.info.text") : o,
    icon: n === null ? "warning" : n,
    onOk: e,
    buttons: [r("r.cancel")],
    closeOnClickOutside: l
  });
}
const Wn = { class: "tabSetF" }, jn = { class: "cannotSelect" }, qn = { class: "topCheck" }, Zl = /* @__PURE__ */ pe({
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
    var y, I, O, ee, N;
    const n = o, e = t, l = K(), r = K(), i = K(!0), c = K(!1), s = K(!1), v = K([]), m = W(() => {
      var X;
      let w = A("r.unknown");
      return ((X = e.modelValue) == null ? void 0 : X.length) > v.value.length && (v.value = he(e.modelValue)), v.value.map((F) => {
        let H = { label: (F == null ? void 0 : F.title) || w };
        return F != null && F.disableShowSetting && (H.disabled = !0), H;
      });
    }), f = W(() => m.value.filter((w) => w == null ? void 0 : w.disabled)), u = W({
      get() {
        var w, X;
        return (X = (w = e.modelValue) == null ? void 0 : w.map) == null ? void 0 : X.call(w, (F) => (F == null ? void 0 : F.title) || A("r.unknown"));
      },
      set(w) {
        let X = v.value.filter((F) => {
          for (let H of w)
            if (H === (F == null ? void 0 : F.title))
              return !0;
          return !1;
        });
        n("update:modelValue", X);
      }
    }), h = (N = (ee = (O = (I = (y = $t()) == null ? void 0 : y.appContext) == null ? void 0 : I.config) == null ? void 0 : O.globalProperties) == null ? void 0 : ee.$i18n) == null ? void 0 : N.locale;
    let g = null;
    We(() => {
      let w = A("r.unknown"), X = x();
      X ? u.value = JSON.parse(decodeURI(X)) : e.defaultCheck && (u.value = e.modelValue.filter((F) => F == null ? void 0 : F.showSettingCheck).map((F) => (F == null ? void 0 : F.title) || w)), $e(function() {
        !l.value || !r.value || (g = new Pa(l.value, r.value, {
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
          onUpdate: (F) => {
            var H;
            if (F != null && F.popper && ((H = F.instance) != null && H.popper)) {
              const b = k(F), { needChange: B } = b;
              if (B) {
                const { height: J } = b, U = F.instance.popper;
                U.style && (U.style.height = `${J}px`);
              }
            }
          }
        }));
      }), Re(() => {
        var F;
        s.value = !0, (F = g == null ? void 0 : g.update) == null || F.call(g), $e(function() {
          s.value = !1;
        });
      }, 0);
    }), ul(function() {
      var w;
      (w = g == null ? void 0 : g.destroy) == null || w.call(g);
    });
    function k(w) {
      var B, J;
      const { height: X } = w.popper, F = w.instance.popper, H = window.innerHeight;
      let b = 0;
      if ((B = F.childNodes) != null && B.length)
        for (let U = 0; U < F.childNodes.length; U++)
          b += (J = F.childNodes[U]) == null ? void 0 : J.offsetHeight;
      return H < X - 10 || X < b ? {
        needChange: !0,
        height: H - 10 < b ? H - 10 : b
      } : { needChange: !1 };
    }
    function L(w) {
      w.length === m.value.length ? (i.value = !1, c.value = !0) : w.length > f.value.length ? (i.value = !0, c.value = !1) : (i.value = !1, c.value = !1);
    }
    Ce(() => u.value, L, {
      immediate: !0,
      deep: !0
    });
    function _() {
      s.value && ($() && Ql(A("r.notSave"), "", "warning", D), s.value = !1);
    }
    function V() {
      s.value ? _() : (s.value = !0, $e(function() {
        var w;
        (w = g == null ? void 0 : g.update) == null || w.call(g);
      }));
    }
    function D() {
      h ? window[e.storage].setItem(e.sKey + "_" + h, encodeURI(JSON.stringify(u.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(u.value))), _();
    }
    function S(w) {
      var X, F;
      if (s.value) {
        if (e.transfer) {
          const H = r.value;
          if (H === (w == null ? void 0 : w.target) || (X = H == null ? void 0 : H.contains) != null && X.call(H, w == null ? void 0 : w.target))
            return;
        }
        (F = w == null ? void 0 : w.preventDefault) == null || F.call(w), _();
      }
    }
    function R() {
      i.value ? c.value = !1 : c.value = !c.value, i.value = !1, c.value ? u.value = m.value.map((w) => w == null ? void 0 : w.label) : u.value = f.value.map((w) => w == null ? void 0 : w.label);
    }
    function x() {
      let w;
      return h ? w = window[e.storage].getItem(e.sKey + "_" + h) : w = window[e.storage].getItem(e.sKey), w;
    }
    function $() {
      var X;
      let w = x();
      if (w) {
        if (w = JSON.parse(decodeURI(w)), (w == null ? void 0 : w.length) !== ((X = u.value) == null ? void 0 : X.length))
          return !0;
        for (let F of w)
          if (u.value.indexOf(F) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (w, X) => {
      const F = te("Icon"), H = te("Checkbox"), b = te("CheckboxGroup");
      return me((T(), E("div", Wn, [
        M("div", {
          ref_key: "buttonRef",
          ref: l,
          class: "tabSetBt",
          onClick: V
        }, [
          Q(F, {
            type: "md-settings",
            size: "17"
          }),
          M("span", jn, q(p(A)("r.tabSetting")), 1)
        ], 512),
        (T(), le(wa, {
          to: "body",
          disabled: !e.transfer
        }, [
          me(M("div", {
            ref_key: "popperRef",
            ref: r,
            class: "tabSetCard",
            style: ce({ width: e.width, backgroundColor: e.bg })
          }, [
            M("div", qn, [
              Q(H, {
                indeterminate: p(i),
                modelValue: p(c),
                "onUpdate:modelValue": X[0] || (X[0] = (B) => Fe(c) ? c.value = B : null),
                onClick: qt(R, ["prevent"])
              }, {
                default: se(() => [
                  we(q(p(A)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              M("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: D
              }, [
                X[2] || (X[2] = M("span", { class: "iconfont icon-r-save" }, null, -1)),
                M("span", null, q(p(A)("r.save")), 1)
              ])
            ]),
            Q(b, {
              modelValue: p(u),
              "onUpdate:modelValue": X[1] || (X[1] = (B) => Fe(u) ? u.value = B : null)
            }, {
              default: se(() => [
                (T(!0), E(be, null, Ve(p(m), (B, J) => (T(), le(H, {
                  class: "setItem",
                  label: B && B.label,
                  key: "tabSet_" + e.sKey + J,
                  disabled: B && B.disabled
                }, null, 8, ["label", "disabled"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ], 4), [
            [ge, p(s)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [p(Yl), S]
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
function yt(t) {
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
function nl({
  group: t,
  condition: o,
  pathKey: n,
  childKey: e = "children",
  path: l = []
}) {
  if (t && Sa(t)) {
    if (Ta(o)) {
      if (st(t)) {
        let r = t, i = he(l);
        if (o(r))
          return n && r[n] && i.push(r[n]), i;
        if (r[e] && !Ee(r[e])) {
          n && r[n] && i.push(r[n]);
          let c = nl({
            group: r[e],
            condition: o,
            pathKey: n,
            childKey: e,
            path: i
          });
          if (!Ee(c))
            return c;
        }
      } else if (Array.isArray(t))
        for (let r of t) {
          let i = he(l);
          if (o(r))
            return n && r[n] ? i.push(r[n]) : i.push(String(t.indexOf(r))), i;
          if (r[e] && r[e].length > 0) {
            n && r[n] ? i.push(r[n]) : i.push(String(t.indexOf(r)));
            let c = nl({
              group: r[e],
              condition: o,
              pathKey: n,
              childKey: e,
              path: i
            });
            if (!Ee(c))
              return c;
          }
        }
    } else if (Array.isArray(t))
      for (let r of t) {
        let i = he(l);
        if (r === o)
          return i.push(String(t.indexOf(r))), i;
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
const je = /* @__PURE__ */ new Map();
let Zn = 0;
function ol({
  height: t,
  width: o = 416,
  title: n,
  content: e,
  onOk: l,
  onCancel: r,
  onClose: i,
  okText: c,
  cancelText: s,
  noWarnIcon: v,
  footerAlign: m,
  cancelBt: f = !0
}) {
  const u = (...V) => et.apply(this, V);
  let g = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", k = Y(e) === "String";
  const L = typeof e == "function", _ = "msgbox_" + ++Zn;
  je.set(_, !1), at.warning({
    width: o,
    footerHide: !0,
    render: () => Oe(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: g
        }
      },
      [
        Oe(
          "div",
          {
            class: "containerN"
          },
          [
            Oe(
              "div",
              {
                class: "titleN"
              },
              [
                Oe("span", n || u("r.info.title")),
                Oe(
                  Ht,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      je.get(_) || (at.remove(), je.delete(_), i && Y(i) === "Function" && i());
                    }
                  },
                  () => Oe("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            Oe(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: k ? "center" : "left"
                }
              },
              [
                Oe("i", {
                  class: k && !v ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Oe("div", { class: "msgBoxConO" }, L ? [e(Oe)] : e || u("r.info.text"))
              ]
            ),
            Oe(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: m || "center"
                }
              },
              [
                Oe(
                  Ht,
                  {
                    class: "okBtN",
                    onClick(V) {
                      var D, S, R, x, $, y, I, O, ee;
                      if (l && typeof l == "function") {
                        const N = l();
                        if (N && Y(N) === "Promise") {
                          je.set(_, !0);
                          const w = (V == null ? void 0 : V.currentTarget) || (V == null ? void 0 : V.target);
                          if (w) {
                            (S = (D = w.classList) == null ? void 0 : D.add) == null || S.call(D, "ivu-btn-loading"), (x = (R = w.nextSibling) == null ? void 0 : R.setAttribute) == null || x.call(R, "disabled", "disabled");
                            const X = (I = (y = ($ = w.parentElement) == null ? void 0 : $.parentElement) == null ? void 0 : y.querySelector) == null ? void 0 : I.call(y, ".titleN .closeN");
                            (ee = (O = X == null ? void 0 : X.classList) == null ? void 0 : O.add) == null || ee.call(O, "disabled");
                          }
                          Promise.resolve(N).then(() => {
                            je.set(_, !1), at.remove(), je.delete(_);
                          }).catch(() => {
                            je.set(_, !1), at.remove(), je.delete(_);
                          });
                        } else
                          at.remove(), je.delete(_);
                      }
                    }
                  },
                  () => [
                    Oe("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Oe("span", c || u("r.confirm"))
                  ]
                ),
                Oe(
                  Ht,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onClick() {
                      je.get(_) || (at.remove(), je.delete(_), Y(r) === "Function" && r && r());
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
const Ll = (...t) => et.apply(Rt, t);
let He = Yt.create({
  baseURL: eo,
  withCredentials: !0
  // 允许携带cookie
});
function to() {
  console.info(
    "store为空，请在安装插件时传入store实例，vuex：app.use(plugRQw,{store})，Pinia：app.use(plugRQw,{useStore})"
  );
}
He.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function xl() {
  var t, o;
  if (He.store)
    if (typeof He.store == "function") {
      const n = He.store();
      n.logout && n.logout();
    } else
      (o = (t = He.store) == null ? void 0 : t.dispatch) == null || o.call(t, "logout");
  else
    to();
}
He.interceptors.response.use(
  (t) => {
    var o, n;
    return Rt && (((o = t == null ? void 0 : t.data) == null ? void 0 : o.code) === 403 || ((n = t == null ? void 0 : t.data) == null ? void 0 : n.code) === 409) && ol({
      content: Ll("r.http." + t.data.code),
      onOk: xl
    }), t;
  },
  (t) => {
    var o, n;
    return Rt && (((o = t == null ? void 0 : t.response) == null ? void 0 : o.status) === 403 || ((n = t == null ? void 0 : t.response) == null ? void 0 : n.status) === 409) && ol({
      content: Ll("r.http." + t.response.status),
      onOk: xl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function tt(t, o, n, e) {
  if (e != null && e.spin && Pt(!1), t) {
    let l = t.data;
    if (l !== void 0) {
      Array.isArray(n) || (n = []);
      for (let r of n) {
        if (typeof l != "object") {
          console.error("请求返回结果不是对象，不可获取成员变量");
          break;
        }
        if (l = l[r], l === void 0) {
          console.error("从请求返回结果获取成员出错，找不到该字段：", r);
          break;
        }
      }
      return l;
    }
    return o && console.warn(o), !1;
  }
  return o && console.warn(o), !1;
}
function lo(t, o, n, e, l, r, i) {
  return new Promise((c, s) => {
    switch (t) {
      case "get":
        He.get(o, { params: n }).then((m) => {
          let f = tt(m, e, l, r);
          f ? c(f) : s(m);
        }).catch((m) => {
          tt({}, e, l, r), s(m);
        });
        break;
      case "delete":
        let v = i ? "params" : "data";
        He.delete(o, { [v]: n }).then((m) => {
          let f = tt(m, e, l, r);
          f ? c(f) : s(m);
        }).catch((m) => {
          tt({}, e, l, r), s(m);
        });
        break;
      case "post":
        He.post(o, n, r).then((m) => {
          let f = tt(m, e, l, r);
          f ? c(f) : s(m);
        }).catch((m) => {
          tt({}, e, l, r), s(m);
        });
        break;
      case "put":
        He.put(o, n, r).then((m) => {
          let f = tt(m, e, l, r);
          f ? c(f) : s(m);
        }).catch((m) => {
          tt({}, e, l, r), s(m);
        });
        break;
    }
  });
}
function St(t, o, n = {}, e, l, r, i) {
  return new Promise((c, s) => {
    var v;
    if (o) {
      r && r.spin && Pt(!0);
      let m = o;
      if (window != null && window.g) {
        const h = window.g;
        let g = Object.keys(h).filter((k) => {
          var L;
          return ((L = k == null ? void 0 : k.indexOf) == null ? void 0 : L.call(k, "URL")) > -1;
        }).map((k) => {
          var L;
          return (L = k.replace) == null ? void 0 : L.call(k, "URL", "");
        });
        for (let k of g) {
          let L = new RegExp("^/" + k + "(?=/.*$)", "i");
          if (L.test(o) && h[k + "URL"]) {
            m = h[k + "URL"] + o.replace(L, "");
            break;
          }
        }
      }
      let f;
      if (((v = r == null ? void 0 : r.headers) == null ? void 0 : v["Content-Type"]) === "multipart/form-data")
        f = n;
      else if (Array.isArray(n) ? f = [] : f = {}, n && !Ee(n))
        if (Array.isArray(n)) {
          f = [];
          for (let h of n)
            (h || h === 0 || h === !1 || h === "" && r && !r.noEmptyStr || h === null && (r != null && r.keepNull)) && f.push(h);
        } else {
          f = {};
          for (let h in n)
            n.hasOwnProperty(h) && (n[h] || n[h] === 0 || n[h] === !1 || n[h] === "" && r && !r.noEmptyStr || n[h] === null && (r != null && r.keepNull)) && (f[h] = n[h]);
        }
      let u = t.toLowerCase();
      lo(u, m, f, e, l, r, i).then((h) => {
        c(h);
      }).catch((h) => {
        s(h);
      });
    } else
      console.error("没有请求地址:url"), s("没有请求地址:url");
  });
}
const Xe = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(t, o) {
    He.store = t, Rt = o.config.globalProperties;
  },
  post(t, o, n, e, l) {
    return new Promise((r, i) => {
      St("post", t, o, n, e, l).then((c) => {
        r(c);
      }).catch((c) => {
        i(c);
      });
    });
  },
  put(t, o, n, e, l) {
    return new Promise((r, i) => {
      St("put", t, o, n, e, l).then((c) => {
        r(c);
      }).catch((c) => {
        i(c);
      });
    });
  },
  get(t, o, n, e, l) {
    return new Promise((r, i) => {
      St("get", t, o, n, e, l).then((c) => {
        r(c);
      }).catch((c) => {
        i(c);
      });
    });
  },
  delete(t, o, n, e, l, r = !0) {
    return new Promise((i, c) => {
      St("delete", t, o, n, e, l, r).then((s) => {
        i(s);
      }).catch((s) => {
        c(s);
      });
    });
  },
  all: Yt.all,
  spread: Yt.spread,
  config: He
}, ao = {
  key: 0,
  class: "pageTotal"
}, no = {
  key: 1,
  class: "pageProSize"
}, ta = /* @__PURE__ */ pe({
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
    const n = o, e = K(), l = t, r = ((u = Le == null ? void 0 : Le()) == null ? void 0 : u.fontSizeBase) || 14, i = K(16), c = W({
      get() {
        return l.modelValue;
      },
      set(h) {
        n("update:modelValue", h), n("on-change", h);
      }
    }), s = W({
      get() {
        return l.pageSize;
      },
      set(h) {
        n("on-page-size-change", h), c.value !== 1 && (c.value = 1);
      }
    }), v = W(() => {
      const h = Qn(String(l.total || 0), r) + i.value + 2;
      return h < 32 ? 32 : h;
    });
    Ce(
      v,
      (h) => {
        $e(function() {
          f(h);
        });
      },
      { immediate: !0 }
    );
    function m() {
      var _, V, D;
      const h = (D = (V = (_ = e.value) == null ? void 0 : _.$el) == null ? void 0 : V.querySelector) == null ? void 0 : D.call(V, "input");
      if (!h)
        return 16;
      const g = window.getComputedStyle(h), k = g == null ? void 0 : g.paddingLeft, L = g == null ? void 0 : g.paddingRight;
      return !k || !L ? 16 : Number(k.replace("px", "")) + Number(L.replace("px", ""));
    }
    function f(h) {
      var k, L, _;
      const g = (_ = (L = (k = e.value) == null ? void 0 : k.$el) == null ? void 0 : L.querySelector) == null ? void 0 : _.call(L, "input");
      g != null && g.style && (g.style.width = `${h}px`);
    }
    return We(() => {
      i.value = m();
    }), (h, g) => {
      const k = te("Page"), L = te("Option"), _ = te("Select");
      return T(), E("div", {
        class: _e(["pagePro", { pageProDefault: l.size === "default" }])
      }, [
        l.showTotal ? (T(), E("span", ao, q(p(A)("r.total") + " ") + q(l.total) + q(" " + p(A)("r.items")), 1)) : fe("", !0),
        Q(k, {
          ref_key: "pageRef",
          ref: e,
          modelValue: p(c),
          "onUpdate:modelValue": g[0] || (g[0] = (V) => Fe(c) ? c.value = V : null),
          "page-size": p(s),
          total: l.total,
          size: l.size,
          "page-size-opts": l.pageSizeOpts,
          disabled: l.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        l.showSizer ? (T(), E("div", no, [
          Q(_, {
            modelValue: p(s),
            "onUpdate:modelValue": g[1] || (g[1] = (V) => Fe(s) ? s.value = V : null),
            size: l.size,
            transfer: l.transfer,
            disabled: l.disabled
          }, {
            default: se(() => [
              (T(!0), E(be, null, Ve(l.pageSizeOpts, (V) => (T(), le(L, {
                value: V,
                key: V
              }, {
                default: se(() => [
                  we(q(V) + " " + q(p(A)("r.page")), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size", "transfer", "disabled"])
        ])) : fe("", !0)
      ], 2);
    };
  }
}), oo = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, io = { class: "topBtn" }, so = { class: "tableContainer growFlexItem" }, ro = { class: "fullHeight relativeBox" }, uo = { class: "pageContainer" }, il = /* @__PURE__ */ pe({
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
    var Je;
    const e = n;
    ({ ...xa });
    const l = t, r = ((Je = Le()) == null ? void 0 : Je.pageSizes) || [10, 20, 50, 100], i = K(l.data), c = K(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || l.pageSize
    ), s = K(1), v = K(0);
    let m = [], f, u, h = K(l.orderKey), g = K(l.orderDefault);
    const k = K(300), L = W(() => {
      for (let G of l.columns)
        if (G != null && G.fixed)
          return !0;
      return !1;
    }), _ = W(() => l.selectionFixed || L.value), V = W(() => {
      let G = {
        ...l.searchData,
        current: s.value,
        size: c.value
      };
      return l.sortable === "custom" && (l.orderKeyFormat === "underline" ? G[g.value] = Gl(h.value) : l.orderKeyFormat === "camelcase" && (G[g.value] = Xn(h.value))), G;
    }), D = W(() => {
      let G = l.columns.filter((z) => z && z.type !== "selection");
      if (l.selection || l.radio) {
        let z;
        l.radio ? z = {
          title: " ",
          width: 65,
          render: (ye, ke) => Oe(Oa, {
            modelValue: ke.row.btChecked
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
        z != null && z.key && z.render === void 0 && (z.tooltip ? z.render = ql(z.key, l.tableEmptyTdHandle) : z.render = (ye, ke) => {
          let Te = "";
          return z != null && z.key && (Te = ke.row[z.key]), l.tableEmptyTdHandle ? Oe("span", Te === "" ? "--" : Te ?? "--") : Oe("span", Te);
        });
      }), G;
    }), S = W({
      get() {
        return i.value.map((G, z) => Object.assign({}, G, {
          btKey: "bt-" + z,
          btChecked: !!G.btChecked
        }));
      },
      set(G) {
        i.value = G;
      }
    }), R = W(() => m.map((G) => G == null ? void 0 : G.id)), x = W(() => m.map((G) => G == null ? void 0 : G.btKey)), $ = K(), y = K();
    Ce(() => l.searchData, I, { deep: !0 }), Ce(
      () => l.orderDefault,
      (G) => {
        g.value = G;
      }
    ), Ce(
      () => l.orderKey,
      (G) => {
        h.value = G;
      }
    );
    function I() {
      s.value = 1, xe();
    }
    function O() {
      l.initData && xe();
    }
    function ee(G) {
      i.value.unshift(he(G)), Re(() => {
        var z, ye;
        (ye = (z = $.value) == null ? void 0 : z.clickCurrentRow) == null || ye.call(z, 0);
      }, 100);
    }
    function N(G, z, ye) {
      let ke = null;
      if (typeof z == "number" ? ke = z : z && (ke = u), ke !== null) {
        let Te = i.value[ke];
        for (let de in G)
          G.hasOwnProperty(de) && (Te[de] = G[de]);
        ye && Re(() => {
          var de, ie;
          (ie = (de = $.value) == null ? void 0 : de.clickCurrentRow) == null || ie.call(de, ke);
        }, 10);
      }
    }
    function w(G) {
      i.value.splice(G, 1), Re(() => {
        var z, ye;
        (ye = (z = $.value) == null ? void 0 : z.clickCurrentRow) == null || ye.call(z, 0);
      }, 100);
    }
    function X(G, z) {
      var ye, ke;
      G.btChecked && l.radio || (l.selection || l.radio) && l.rowClickSelect && ((ke = (ye = $.value) == null ? void 0 : ye.toggleSelect) == null || ke.call(ye, z));
    }
    function F(G, z) {
      f = z.btKey, u = Number(z.btKey.split("-")[1]), l.radio && (i.value[u].btChecked = !0);
    }
    function H(G) {
      if (l.radio)
        for (let z of S.value)
          z != null && z.btKey && z.btKey !== f && (i.value[Number(z.btKey.split("-")[1])].btChecked = !1);
      m = G, e("on-selection-change", G);
    }
    function b() {
      return he(m);
    }
    function B() {
      xe();
    }
    function J(G) {
      c.value = G, localStorage.setItem("btPageSize", String(G)), s.value === 1 && xe();
    }
    function U({ key: G, order: z }) {
      z === "normal" ? (h.value = l.orderKey, g.value = l.orderDefault) : (h.value = G, g.value = z), s.value = 1, Ie();
    }
    function ae(G) {
      var ye, ke, Te, de, ie, Me, it, pt;
      const z = G;
      if (typeof z == "number")
        ue(), u = z, f = (ke = (ye = S.value) == null ? void 0 : ye[z]) == null ? void 0 : ke.btKey, (de = (Te = $.value) == null ? void 0 : Te.clickCurrentRow) == null || de.call(Te, z);
      else if (Array.isArray(z)) {
        if (l.radio || !l.selection)
          return;
        ue();
        for (let Ye of z)
          (Me = (ie = $.value) == null ? void 0 : ie.clickCurrentRow) == null || Me.call(ie, Ye);
      } else if (typeof z == "function")
        for (let Ye = 0; Ye < S.value.length; Ye++) {
          const Ct = S.value[Ye];
          z(Ct) && ((pt = (it = $.value) == null ? void 0 : it.clickCurrentRow) == null || pt.call(it, Ye));
        }
    }
    function ue() {
      var G, z;
      if (l.radio) {
        if (x.value.length > 0 && S.value.length > 0) {
          let ye = x.value[0].split("-")[1];
          S.value[ye].btChecked = !1;
        }
      } else
        (z = (G = $.value) == null ? void 0 : G.selectAll) == null || z.call(G, !1);
      m.length > 0 && (m = [], e("on-selection-change", [])), f = null, u = null;
    }
    function ve() {
      i.value = [], ue(), s.value = 1, v.value = 0;
    }
    function Ie(G, z, ye) {
      return new Promise((ke) => {
        G && (g.value = G), z && (h.value = z), l.url ? Xe[l.method](l.url, V.value, "", [], { spin: l.getDataLoading }).then((Te) => {
          var ie, Me;
          let de;
          ye || ue(), typeof l.dataHandler == "function" ? de = l.dataHandler(Te) : de = Te, de.data ? (de.data.records || de.data.records === null ? i.value = de.data.records || [] : de.data.page ? (de.data.page.records || de.data.page.records === null) && (i.value = de.data.page.records || []) : de.data.data ? (de.data.data.records || de.data.data.records === null) && (i.value = de.data.data.records || []) : i.value = de.data, v.value = ((ie = de.data.page) == null ? void 0 : ie.total) || ((Me = de.data.data) == null ? void 0 : Me.total) || de.data.total || de.total || 0, v.value === 0 && s.value > 1 && i.value && i.value.length === 0 ? s.value = 1 : s.value > 1 && v.value <= (s.value - 1) * c.value && (s.value--, $e(function() {
            Ie(G, z);
          })), e("on-data-change", de), ke(de)) : (console.warn("请求返回数据有误，无法使用"), ve(), e("on-data-change", de));
        }).catch((Te) => {
          ue(), ve(), e("on-data-change", Te);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function xe(G, z, ye) {
      l.radio && (G || l.rowClickNum !== -1) ? Ie(z, ye, G).then(() => {
        i.value.length > 0 && Re(() => {
          var ke, Te, de, ie;
          G ? (Te = (ke = $.value) == null ? void 0 : ke.clickCurrentRow) == null || Te.call(ke, u || 0) : (ie = (de = $.value) == null ? void 0 : de.clickCurrentRow) == null || ie.call(de, l.rowClickNum);
        }, 10);
      }) : Ie();
    }
    function De() {
      k.value < 50 ? Re(De, 100) : Re(oe, 10);
    }
    function oe() {
      var G;
      k.value = ((G = y.value) == null ? void 0 : G.clientHeight) || 0;
    }
    function Se() {
      var G, z;
      oe(), (z = (G = $.value) == null ? void 0 : G.handleResize) == null || z.call(G);
    }
    const Ne = Dt(Se, 300);
    return We(() => {
      O(), _.value && (De(), window.addEventListener("resize", Ne));
    }), ul(() => {
      Ne.cancel(), _.value && window.removeEventListener("resize", Ne);
    }), o({
      dataS: S,
      selectedIds: R,
      addRow: ee,
      setRowData: N,
      deleteRow: w,
      getSelected: b,
      selectRow: ae,
      clearSelect: ue,
      clearTableData: ve,
      getTableData: Ie,
      getDataAndClickRow: xe
    }), (G, z) => {
      const ye = te("Table"), ke = te("Page");
      return T(), E("div", oo, [
        me(M("div", io, [
          Ke(G.$slots, "tableSetting"),
          Ke(G.$slots, "topMsg"),
          Ke(G.$slots, "topBtnGroup")
        ], 512), [
          [ge, l.showTopRow]
        ]),
        M("div", so, [
          M("div", ro, [
            M("div", {
              ref_key: "tableContainerLOI",
              ref: y,
              class: "fullFlowContent"
            }, [
              Q(ye, ft({
                ref_key: "tableRef",
                ref: $
              }, G.$attrs, {
                height: p(_) && p(k) || null,
                class: { noBorderTable: l.noBorderTable, fullHeightTable: !p(_), lightHeadO: l.lightHead },
                columns: p(D),
                data: p(S),
                "highlight-row": l.radio || l.highlightRow,
                onOnSelect: F,
                onOnSelectionChange: H,
                onOnSortChange: U,
                onOnRowClick: X
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        me(M("div", uo, [
          l.usePagePro ? (T(), le(ta, {
            key: 0,
            modelValue: p(s),
            "onUpdate:modelValue": z[0] || (z[0] = (Te) => Fe(s) ? s.value = Te : null),
            total: p(v),
            showTotal: l.showTotal,
            pageSize: p(c),
            showSizer: l.showSizer,
            pageSizeOpts: p(r),
            size: l.pageComponentSize,
            onOnChange: B,
            onOnPageSizeChange: J
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (T(), le(ke, {
            key: 1,
            modelValue: p(s),
            "onUpdate:modelValue": z[1] || (z[1] = (Te) => Fe(s) ? s.value = Te : null),
            total: p(v),
            pageSize: p(c),
            pageSizeOpts: p(r),
            showSizer: l.showSizer,
            showTotal: l.showTotal,
            size: l.pageComponentSize,
            showElevator: !l.noElevator,
            onOnChange: B,
            onOnPageSizeChange: J
          }, null, 8, ["modelValue", "total", "pageSize", "pageSizeOpts", "showSizer", "showTotal", "size", "showElevator"]))
        ], 512), [
          [ge, !l.noPage]
        ])
      ], 512);
    };
  }
}), la = /* @__PURE__ */ pe({
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
    const n = o, e = t, { onCompositionStart: l, onCompositionEnd: r, handleChange: i } = Et(), c = W({
      get() {
        var h;
        return (h = e.modelValue) == null ? void 0 : h.key;
      },
      set(h) {
        let g = {
          key: h,
          val: null
        };
        c.value && c.value !== h && (g.beforeKey = c.value), n("update:modelValue", g), n("on-change", g);
      }
    }), s = W({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(h) {
        n("update:modelValue", {
          key: c.value,
          val: h
        });
      }
    }), v = W(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), m = W(() => ({
      width: typeof e.itemWidth == "number" ? e.itemWidth + "px" : e.itemWidth
    }));
    function f(h) {
      i(() => {
        h != null && h.target && h.target.value !== void 0 && u({
          key: c.value,
          val: h.target.value
        });
      });
    }
    const u = Dt((h) => {
      n("on-change", h);
    }, 500);
    return ot(() => {
      u.cancel();
    }), (h, g) => {
      const k = te("Option"), L = te("Select"), _ = te("Input");
      return T(), E("div", null, [
        Q(L, {
          modelValue: p(c),
          "onUpdate:modelValue": g[0] || (g[0] = (V) => Fe(c) ? c.value = V : null),
          style: ce(p(v)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: se(() => [
            (T(!0), E(be, null, Ve(e.selectOption, (V, D) => (T(), le(k, {
              value: V == null ? void 0 : V.val,
              label: V == null ? void 0 : V.label,
              key: "selectInputOp" + (V == null ? void 0 : V.value) + D,
              style: ce({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        Q(_, {
          modelValue: p(s),
          "onUpdate:modelValue": g[1] || (g[1] = (V) => Fe(s) ? s.value = V : null),
          placeholder: e.placeholder || p(A)("r.pInput"),
          style: ce(p(m)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onCompositionstart: p(l),
          onCompositionend: p(r),
          onOnChange: f
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled", "onCompositionstart", "onCompositionend"])
      ]);
    };
  }
});
let sl = { securityJsCode: "", key: "" };
function co({ securityJsCode: t, key: o }) {
  sl.securityJsCode = t, sl.key = o;
}
function Ol(t) {
  return sl[t];
}
const fo = { class: "searchInputWrap" }, po = { class: "addressListWrap" }, mo = { class: "addressList" }, ho = ["onClick"], yo = { class: "addressName" }, vo = {
  key: 0,
  class: "addressDetail"
}, aa = /* @__PURE__ */ pe({
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
    const n = o, e = t, l = K(""), r = K([]), i = W({
      get() {
        let w;
        return e.modelValue ? e.modelValue.name ? w = he(e.modelValue) : w = {
          ...e.modelValue,
          name: null
        } : w = {
          name: null
        }, w;
      },
      set(w) {
        n("update:modelValue", he(w));
      }
    }), c = W(() => Bt(e.width) ? e.width + "px" : e.width), s = W(() => Bt(e.height) ? e.height + "px" : e.height ? e.height : Bt(e.width) ? e.width * 0.66 + "px" : "200px"), v = W(() => ({
      width: c.value,
      position: "relative"
    })), m = W(() => e.inputInMap ? {
      width: c.value,
      height: s.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    } : {
      width: c.value,
      height: s.value,
      marginTop: "6px"
    });
    Ce(
      () => e.modelValue,
      (w) => {
        if (w != null && w.name && (l.value = w.name), e.showMap && w && w.lng && w.lat) {
          if (!R || !x)
            return;
          ee({
            lng: w.lng,
            lat: w.lat,
            name: w.name
          });
        }
      }
    );
    const f = "mapId" + Math.floor(Math.random() * 1e9), u = K(null), h = K(null);
    let g;
    const { onCompositionStart: k, onCompositionEnd: L, handleSearch: _ } = Et();
    function V() {
      h.value && h.value.clientHeight < 10 || !h.value ? Re(V, 300) : Re(y, 100);
    }
    function D() {
      var w;
      (w = e.modelValue) != null && w.name && (l.value = e.modelValue.name);
    }
    let S, R, x, $;
    function y() {
      Wt.load({
        key: Ol("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((w) => {
        S = w, R = new S.Map(f).on("complete", () => {
          var X, F;
          x = new S.Geocoder(), (X = e.modelValue) != null && X.lng && ((F = e.modelValue) != null && F.lat) && ee({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
        });
      });
    }
    function I() {
      _(() => {
        if (l.value.trim()) {
          if (e.showMap && !R) {
            console.warn("地图未就绪，请稍后重试");
            return;
          }
          Wt.load({
            key: Ol("key"),
            version: "2.0",
            plugins: ["AMap.AutoComplete"]
          }).then((w) => {
            $ || ($ = new w.Autocomplete({
              city: "全国",
              type: ""
            })), $.search(l.value, (X, F) => {
              X === "complete" && F.info === "OK" ? r.value = F.tips.slice(0, 10).filter(
                (H) => {
                  var b, B;
                  return H.name && (H.address || ((b = H.location) == null ? void 0 : b.lng) && ((B = H.location) == null ? void 0 : B.lat));
                }
              ).map((H) => {
                var b, B;
                return {
                  name: H.name,
                  address: H.address,
                  lng: (b = H.location) == null ? void 0 : b.lng,
                  lat: (B = H.location) == null ? void 0 : B.lat
                };
              }) : (r.value = [], console.warn("地址搜索失败", F));
            });
          });
        }
      });
    }
    function O(w) {
      l.value = w.name, r.value = [], typeof w.lng == "number" && typeof w.lat == "number" ? (e.showMap && ee({
        name: w.name,
        lng: w.lng,
        lat: w.lat
      }), i.value = {
        name: w.name,
        lng: w.lng,
        lat: w.lat
      }, n("on-change", {
        name: w.name,
        lng: w.lng,
        lat: w.lat
      })) : w.name && (e.showMap ? x == null || x.getLocation(w.name, (X, F) => {
        var H;
        if (X === "complete" && F.info === "OK" && ((H = F.geocodes) == null ? void 0 : H.length) > 0) {
          const b = F.geocodes[0].location;
          ee({
            name: w.name,
            lng: b.lng,
            lat: b.lat
          }), i.value = {
            name: w.name,
            lng: b.lng,
            lat: b.lat
          }, n("on-change", {
            name: w.name,
            lng: b.lng,
            lat: b.lat
          });
        } else
          console.warn("地址地理编码失败", F);
      }) : (i.value = {
        name: w.name
      }, n("on-change", {
        name: w.name
      })));
    }
    function ee({ lng: w, lat: X, name: F }) {
      if (typeof w != "number" || typeof X != "number") {
        console.warn("无效的坐标数据:", { lng: w, lat: X });
        return;
      }
      if (!R) {
        console.warn("地图实例不存在");
        return;
      }
      R == null || R.clearMap();
      let H = new S.LngLat(w, X);
      R == null || R.setCenter(H);
      let b = new S.Marker({
        map: R,
        position: H,
        draggable: !0
      });
      N(w, X), b.on("dragend", () => {
        let B = b.getPosition();
        i.value = {
          name: F || null,
          lng: B.lng,
          lat: B.lat
        }, N(B.lng, B.lat);
      }), b.on("click", (B) => {
        var J, U;
        g && g.open(R, (U = (J = B == null ? void 0 : B.target) == null ? void 0 : J.getPosition) == null ? void 0 : U.call(J));
      }), R == null || R.setFitView();
    }
    function N(w, X) {
      const F = e.inputInMap ? "mapInfoWindowIKJ" : "mapInfoWindowMA";
      x == null || x.getAddress([w, X], (H, b) => {
        H === "complete" && b.info === "OK" && b.regeocode && b.regeocode.formattedAddress ? g = new S.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="' + F + '">' + b.regeocode.formattedAddress + "</div>",
          offset: new S.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (g = null, console.warn("地图获取位置信息失败", b));
      });
    }
    return We(() => {
      D(), V();
    }), ot(() => {
      var w;
      R && (R.destroy(), (w = Wt) == null || w.reset(), R = null, x = null, $ = null, g = null);
    }), (w, X) => (T(), E("div", {
      style: ce(p(v)),
      class: _e(e.inputInMap ? "containerIKJ" : "containerMapAddress")
    }, [
      M("div", fo, [
        Q(p(Ia), {
          ref_key: "mapInputRef",
          ref: u,
          modelValue: p(l),
          "onUpdate:modelValue": X[0] || (X[0] = (F) => Fe(l) ? l.value = F : null),
          class: _e(e.inputInMap && e.showMap ? { mapInputIKJ: !0 } : "searchInput"),
          placeholder: e.placeholder || p(A)("r.search"),
          disabled: e.disabled,
          search: "",
          "enter-button": "",
          onCompositionstart: p(k),
          onCompositionend: p(L),
          onOnEnter: I,
          onOnSearch: I
        }, null, 8, ["modelValue", "class", "placeholder", "disabled", "onCompositionstart", "onCompositionend"]),
        me(M("div", po, [
          M("div", mo, [
            (T(!0), E(be, null, Ve(p(r), (F, H) => (T(), E("div", {
              key: H,
              class: "addressItem",
              onClick: (b) => O(F)
            }, [
              M("span", yo, q(F.name), 1),
              typeof F.address == "string" ? (T(), E("span", vo, q(F.address), 1)) : fe("", !0)
            ], 8, ho))), 128))
          ])
        ], 512), [
          [ge, p(r).length > 0]
        ])
      ]),
      me(M("div", {
        style: ce(p(m)),
        ref_key: "mapRef",
        ref: h,
        id: f
      }, null, 4), [
        [ge, e.showMap]
      ])
    ], 6));
  }
});
var Dl;
const na = /* @__PURE__ */ pe({
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
    const n = o, e = t, l = K([]), r = W({
      get() {
        let m = e.modelValue;
        return Array.isArray(m) ? he(m) : Bt(m) ? nl({
          group: l.value,
          condition: (f) => (f == null ? void 0 : f.value) === m,
          pathKey: "value"
        }) : Kl(m) ? m.split(e.separator) : [];
      },
      set(m) {
        if (e.onlyLastVal)
          Ee(m) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", xt(m));
        else {
          if (kt(e.modelValue, m))
            return;
          n("update:modelValue", he(m));
        }
      }
    });
    function i() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      Xe.get(e.url).then((m) => {
        var u;
        let f = null;
        (u = m == null ? void 0 : m.data) != null && u.records ? f = m.data.records : m != null && m.data ? f = m.data : m && (f = m), f ? (typeof e.optionFilter == "function" && Y(e.optionFilter) === "Function" && (f = e.optionFilter(f)), l.value = c(f)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function c(m) {
      let f = [];
      for (let u of m) {
        let h = {
          value: u[e.optionVal],
          label: u[e.optionLabel]
        };
        u != null && u.children && !Ee(u.children) && (h.children = c(u.children)), f.push(h);
      }
      return f;
    }
    function s(m) {
      return e.onlyLastLabel ? xt(m) : m.join(e.separator);
    }
    function v(m, f) {
      let u = "";
      Ee(f) || (u = f.map((h) => h == null ? void 0 : h.label).join(e.separator)), n("on-label-change", u);
    }
    return We(i), (m, f) => {
      const u = te("Cascader");
      return T(), le(u, {
        data: p(l),
        modelValue: p(r),
        "onUpdate:modelValue": f[0] || (f[0] = (h) => Fe(r) ? r.value = h : null),
        onOnChange: v,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": s,
        placeholder: e.placeholder || p(A)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), oa = /* @__PURE__ */ pe({
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
    const n = o, e = t, l = W({
      get() {
        if (e.modelValue && (typeof e.modelValue == "string" || typeof e.modelValue == "number")) {
          let r = String(e.modelValue).trim();
          if (/^\d+$/.test(r)) {
            let c = r.substring(0, 2) + "0000000000", s = r.substring(0, 4) + "00000000";
            return [c, s, r];
          }
          return r.indexOf(e.separator) !== -1 ? r.split(e.separator) : [r];
        } else return Array.isArray(e.modelValue) ? he(e.modelValue) : [];
      },
      set(r) {
        if (Ee(r))
          n("update:modelValue", null), n("on-name-change", null);
        else {
          let i = xt(r), c = "", s = "";
          if (i && (c = i.code), c && c.length < 12) {
            let v = [...c];
            for (; v.length < 12; )
              v.push(0);
            c = v.join("");
          }
          if (Array.isArray(r) && (s = r.map((v) => v == null ? void 0 : v.name).join(e.separator)), c) {
            if (c === e.modelValue)
              return;
            n("update:modelValue", c);
          }
          s && n("on-name-change", s);
        }
      }
    });
    return (r, i) => (T(), le(p(Ma), ft(r.$attrs, {
      class: "alCascaderMC",
      modelValue: p(l),
      "onUpdate:modelValue": i[0] || (i[0] = (c) => Fe(l) ? l.value = c : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || p(A)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let Ze = 0, vt = [];
function ia(t, o, n, e) {
  var l, r, i;
  e && (e.innerHTML = ((l = t[o]) == null ? void 0 : l.name) ?? "", (r = t[o]) != null && r.name ? e.classList.contains("hide") && e.classList.remove("hide") : e.classList.contains("hide") || e.classList.add("hide")), n && (n.src = ((i = t[o]) == null ? void 0 : i.src) ?? t[o], Ze = o);
}
function Il(t, o, n, e) {
  if (t) {
    let l;
    Ze - 1 < 0 ? l = o.length - 1 : l = Ze - 1, ia(o, l, n, e);
  }
}
function Al(t, o, n, e) {
  if (t) {
    let l;
    Ze + 1 > o.length - 1 ? l = 0 : l = Ze + 1, ia(o, l, n, e);
  }
}
function gt(t, o = 0) {
  var _, V, D, S, R, x, $;
  const n = (...y) => et.apply(this, y), e = n("r.closePreview"), l = n("r.fullImg"), r = n("r.last"), i = n("r.next");
  let c, s, v;
  Ze = o;
  const m = Array.isArray(t);
  m ? (s = ((_ = t[Ze]) == null ? void 0 : _.src) ?? t[Ze], v = (V = t[Ze]) == null ? void 0 : V.name) : s = t, m && t.length > 1 ? c = `${r} ： ←, ↑, A, W | ${i} ： →, ↓, D, S | ${e} ： Esc` : c = `${e} ： Esc`;
  let f = Xt(document.getElementsByTagName("body")), u = document.createElement("div");
  u.setAttribute("class", "fullScreenImgByDom"), u.innerHTML = `<div class='previewInner'><div class='pageFBt left${m && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${r}' ></i></div><img alt='${l}' ><div class='pageFBt right${m && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${i}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${c}</p><p class='pName ${v ? "" : "hide"}'>${v}</p>`;
  const h = u.querySelector("img");
  h && s && (h.src = s);
  function g() {
    let y = Xt(document.getElementsByTagName("body"));
    y && u.parentNode && y.removeChild(u), document.removeEventListener("keyup", L);
    const I = vt.findIndex((O) => O.child === u);
    I > -1 && vt.splice(I, 1);
  }
  (S = (D = u.querySelector(".ivu-icon-md-close")) == null ? void 0 : D.addEventListener) == null || S.call(D, "click", g);
  const k = u.querySelector(".pName");
  (R = u.querySelector(".pageFBt.left")) == null || R.addEventListener("click", function() {
    Il(m, t, h, k);
  }), (x = u.querySelector(".pageFBt.right")) == null || x.addEventListener("click", function() {
    Al(m, t, h, k);
  });
  function L(y) {
    const I = vt[vt.length - 1];
    (I == null ? void 0 : I.child) === u && (y.keyCode === 37 || y.keyCode === 38 || y.keyCode === 87 || y.keyCode === 65 ? Il(m, t, h, k) : y.keyCode === 39 || y.keyCode === 40 || y.keyCode === 83 || y.keyCode === 68 ? Al(m, t, h, k) : y.keyCode === 27 && g());
  }
  vt.push({ child: u, keyupHandler: L }), document.addEventListener("keyup", L), ($ = f == null ? void 0 : f.appendChild) == null || $.call(f, u), u.focus({ preventScroll: !0 });
}
const go = {
  key: 0,
  class: "previewBoxM"
}, bo = { class: "imgLoading" }, ko = ["src", "alt"], wo = { class: "deleteModal" }, _o = {
  key: 1,
  class: "previewBoxM"
}, Co = {
  key: 0,
  class: "previewImg"
}, Vo = ["src", "alt"], So = { class: "deleteModal" }, To = {
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
}, Ao = { class: "listLoading" }, Po = ["onClick", "title"], Mo = { class: "btBoxJ" };
var Nl;
const sa = /* @__PURE__ */ pe({
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
    const n = o, e = t, l = bt([]), r = bt([]), i = bt([]);
    let c = {};
    const s = K(0), v = K(!1), m = W(() => !e.manualUpload && e.showImg && g.value ? "img" : e.manualUpload && e.showImg && g.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !g.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !g.value) ? "list" : ""), f = W(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), u = W({
      //文件集合
      get() {
        return e.manualUpload ? h.value : h.value.map((b) => ({ id: b }));
      },
      set(b) {
        e.manualUpload ? h.value = b || [] : h.value = (b == null ? void 0 : b.map((B) => B == null ? void 0 : B.id)) || [];
      }
    }), h = W({
      //文件ID集合
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((b) => b !== "--") : Y(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(b) {
        if (e.length === 1) {
          let B = Xt(b);
          n("update:modelValue", B ?? null), n("on-change", B ?? null);
        } else
          n("update:modelValue", he(b)), n("on-change", he(b));
      }
    }), g = W(() => {
      let b;
      if (e.manualUpload ? b = u.value : b = r.value, !b)
        return !1;
      for (let B of b) {
        let J;
        if (e.manualUpload ? J = B == null ? void 0 : B.type : J = B == null ? void 0 : B.mimeType, !J || J && !(yt(J) || J === "loading"))
          return !1;
      }
      return !0;
    }), k = W(() => r.value.filter((b) => yt(b == null ? void 0 : b.mimeType))), L = W(() => k.value.map((b) => ({
      src: e.url + "/" + (b == null ? void 0 : b.id) + "/download?preview=true",
      name: b == null ? void 0 : b.name
    }))), _ = W(() => u.value.filter((b) => yt(b == null ? void 0 : b.type)));
    Ce(_, async (b) => {
      i.value = await D(b);
    }), Ce(
      () => u.value,
      async (b) => {
        if (!v.value && s.value !== b.length && (s.value = b.length), v.value = !1, m.value === "localImg")
          b != null && b.length ? l.value = await D(b) : l.value = [];
        else if (b != null && b.length && m.value !== "localList") {
          let B = he(b);
          const J = he(r.value);
          for (let U of B)
            if ((U == null ? void 0 : U.name) === void 0)
              if (U.id) {
                const ae = Jt(J, (ue) => (ue == null ? void 0 : ue.id) === U.id);
                ae ? (U.name = ae.name, U.mimeType = ae.mimeType) : c.hasOwnProperty(U.id) ? (U.name = c[U.id].name, U.mimeType = c[U.id].mimeType) : (U.mimeType = "loading", Xe.get(e.url + "/" + U.id).then((ue) => {
                  var ve, Ie, xe, De, oe, Se;
                  U.name = ((xe = (Ie = (ve = ue == null ? void 0 : ue.data) == null ? void 0 : ve.returnValue) == null ? void 0 : Ie[0]) == null ? void 0 : xe.name) || A("r.file") + bl(b, U), U.mimeType = ((Se = (oe = (De = ue == null ? void 0 : ue.data) == null ? void 0 : De.returnValue) == null ? void 0 : oe[0]) == null ? void 0 : Se.mimeType) || "unknown", _a(r);
                }).catch(() => {
                  U.name = A("r.file") + bl(B, U);
                }));
              } else
                U.name = A("r.unknown");
          r.value = B;
        } else
          r.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function V(b) {
      return (b == null ? void 0 : b.name) || (b == null ? void 0 : b.split) && xt(b.split("/")) || b;
    }
    async function D(b) {
      let B = [];
      for (let J of b) {
        let U = await Tl(J);
        B.push(U);
      }
      return B;
    }
    function S(b) {
      if (!e.disabled) {
        let B = u.value;
        B == null || B.splice(b, 1), u.value = B;
      }
    }
    function R(b) {
      b != null && b.id && window.open(e.url + "/" + b.id + "/download");
    }
    function x(b) {
      return e.manualUpload ? (b == null ? void 0 : b.type) && yt(b.type) : (b == null ? void 0 : b.id) && b.mimeType && yt(b.mimeType);
    }
    async function $(b) {
      if (e.manualUpload) {
        let B, J;
        if (typeof b == "number" ? (B = b, J = l.value) : b && (B = Ot(_.value, (U) => U.size === b.size && U.lastModified === b.lastModified), J = i.value), !J)
          return;
        gt(
          J.map((U, ae) => {
            var ue;
            return {
              src: U,
              name: (ue = _.value[ae]) == null ? void 0 : ue.name
            };
          }),
          B
        );
      } else if (b != null && b.id) {
        const B = Ot(k.value, (J) => J.id === b.id);
        gt(L.value, B);
      }
    }
    function y(b) {
      Y(b) === "String" && b.indexOf("http") > -1 ? window.open(b) : Y(b) === "File" && Tl(b).then((B) => {
        Jn(b.name, B);
      });
    }
    function I(b) {
      var B, J;
      if (e.length && s.value >= e.length)
        return Ue(A("r.info.title"), A("r.uploadLength", [e.length]), "warning"), !1;
      if (v.value = !0, s.value++, e.manualUpload) {
        if (b) {
          let U = ea(b.name);
          if ((B = e.format) != null && B.length && e.format.indexOf(U) < 0)
            return Ue(
              A("r.wrongFileType"),
              A("r.supportType") + (((J = e.format) == null ? void 0 : J.length) && String(e.format) || A("r.none")),
              "warning"
            ), s.value--, !1;
          if (e.maxSize && b.size > e.maxSize * 1024)
            return Ue(A("r.fileIsBig"), A("r.supportSize") + e.maxSize + "kb", "warning"), s.value--, !1;
          let ae = u.value;
          ae == null || ae.push(b), u.value = ae;
        }
        return !1;
      } else
        return !0;
    }
    function O(b) {
      s.value--, console.warn(b), Ue(A("r.uploadError"), "", "error");
    }
    function ee(b, B, J) {
      var U, ae, ue, ve, Ie, xe;
      if ((b == null ? void 0 : b.code) === 0) {
        v.value = !0;
        let De = u.value;
        B.id = (ae = (U = b.data) == null ? void 0 : U[0]) == null ? void 0 : ae.id, B.name = (ve = (ue = b.data) == null ? void 0 : ue[0]) == null ? void 0 : ve.name, B.mimeType = (xe = (Ie = b.data) == null ? void 0 : Ie[0]) == null ? void 0 : xe.mimeType, c[B.id] = { name: B.name, mimeType: B.mimeType }, De == null || De.push(B), u.value = De;
      } else
        s.value--, Ue(A("r.uploadFail"), (b == null ? void 0 : b.message) || "", "error");
    }
    function N() {
      s.value--, Ue(A("r.fileIsBig"), A("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function w() {
      var b;
      s.value--, Ue(
        A("r.wrongFileType"),
        A("r.supportType") + (((b = e.format) == null ? void 0 : b.length) && String(e.format) || A("r.none")),
        "warning"
      );
    }
    function X(b) {
      let B = b == null ? void 0 : b.id, J = b == null ? void 0 : b.mimeType;
      B && (Y(J) === "String" && J.indexOf("image") > -1 ? gt(e.url + "/" + B + "/download?preview=true") : window.open(e.url + "/" + B + "/download?preview=true"));
    }
    function F(b) {
      var J, U, ae;
      let B = (ae = (U = (J = b == null ? void 0 : b.response) == null ? void 0 : J.data) == null ? void 0 : U[0]) == null ? void 0 : ae.id;
      H(null, B);
    }
    function H(b, B) {
      if (!(!B && B !== 0) && !e.disabled && h.value.indexOf(B) !== -1) {
        const J = he(h.value);
        let U = u.value;
        U == null || U.splice(J.indexOf(B), 1), u.value = U;
      }
    }
    return (b, B) => {
      var ue, ve, Ie, xe, De;
      const J = te("Button"), U = te("Upload"), ae = te("Icon");
      return T(), E("div", null, [
        Q(U, {
          name: "files",
          action: p(f),
          "before-upload": I,
          "on-error": O,
          "on-success": ee,
          "on-exceeded-size": N,
          "on-preview": X,
          "on-remove": F,
          "on-format-error": w,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && ((ue = p(u)) == null ? void 0 : ue.length) >= e.length || !!e.disabled
        }, {
          default: se(() => {
            var oe;
            return [
              Q(J, {
                icon: "md-cloud-upload",
                disabled: e.length > 0 && ((oe = p(u)) == null ? void 0 : oe.length) >= e.length || !!e.disabled
              }, {
                default: se(() => [
                  we(q(p(A)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        p(m) === "img" && ((ve = p(r)) == null ? void 0 : ve.length) > 0 ? (T(), E("div", go, [
          (T(!0), E(be, null, Ve(p(r), (oe, Se) => (T(), E(be, {
            key: oe == null ? void 0 : oe.id
          }, [
            !e.manualUpload && (oe == null ? void 0 : oe.id) !== null ? (T(), E("div", {
              key: 0,
              class: _e(["previewImg", { previewLoading: oe.mimeType === "loading" }])
            }, [
              me(M("div", bo, B[0] || (B[0] = [
                M("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ge, oe.mimeType === "loading"]
              ]),
              me(M("img", {
                src: b.url + "/" + oe.id + "/download?preview=true",
                alt: oe.name
              }, null, 8, ko), [
                [ge, oe.mimeType !== "loading"]
              ]),
              me(M("div", wo, [
                Q(ae, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: p(A)("r.fView"),
                  onClick: (Ne) => p(gt)(p(L), Se)
                }, null, 8, ["title", "onClick"]),
                Q(ae, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Ne) => H(Ne, oe.id),
                  title: p(A)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ge, oe.mimeType !== "loading"]
              ])
            ], 2)) : fe("", !0)
          ], 64))), 128))
        ])) : fe("", !0),
        p(m) === "localImg" && ((Ie = p(l)) == null ? void 0 : Ie.length) > 0 ? (T(), E("div", _o, [
          (T(!0), E(be, null, Ve(p(l), (oe, Se) => (T(), E(be, {
            key: "manualImg" + Se
          }, [
            e.manualUpload && oe !== null ? (T(), E("div", Co, [
              M("img", {
                src: oe,
                alt: "manualImg" + Se
              }, null, 8, Vo),
              M("div", So, [
                Q(ae, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (Ne) => $(Se),
                  title: p(A)("r.fView")
                }, null, 8, ["onClick", "title"]),
                Q(ae, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Ne) => S(Se),
                  title: p(A)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : fe("", !0)
          ], 64))), 128))
        ])) : fe("", !0),
        p(m) === "localList" && ((xe = p(u)) == null ? void 0 : xe.length) > 0 ? (T(), E("div", To, [
          (T(!0), E(be, null, Ve(p(u), (oe, Se) => (T(), E(be, {
            key: "manualItem" + Se
          }, [
            e.manualUpload && oe !== null ? (T(), E("p", Bo, [
              oe.name ? (T(), le(ae, {
                key: 0,
                class: "fileTypeIco",
                type: p(Bl)(oe.name),
                size: "20"
              }, null, 8, ["type"])) : fe("", !0),
              M("span", {
                class: _e(["upNameT", { previewName: x(oe) }]),
                onClick: (Ne) => y(oe),
                title: p(A)("r.download")
              }, q(V(oe)), 11, Lo),
              M("span", xo, [
                x(oe) ? (T(), le(ae, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Ne) => $(oe),
                  title: p(A)("r.fView")
                }, null, 8, ["onClick", "title"])) : fe("", !0),
                Q(ae, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (Ne) => S(Se),
                  title: p(A)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : fe("", !0)
          ], 64))), 128))
        ])) : fe("", !0),
        p(m) === "list" && ((De = p(r)) == null ? void 0 : De.length) > 0 ? (T(), E("div", Oo, [
          (T(!0), E(be, null, Ve(p(r), (oe, Se) => (T(), E(be, {
            key: "defaultItem" + Se
          }, [
            !e.manualUpload && oe ? (T(), E("div", Io, [
              me(M("div", Ao, B[1] || (B[1] = [
                M("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ge, oe.mimeType === "loading"]
              ]),
              me(Q(ae, {
                type: p(Bl)(oe.name),
                class: "fileTypeIco",
                size: "20"
              }, null, 8, ["type"]), [
                [ge, oe.mimeType !== "loading"]
              ]),
              me(M("span", {
                class: "upNameT",
                onClick: (Ne) => R(oe),
                title: p(A)("r.download")
              }, q(oe.name || p(A)("r.file") + (Se + 1)), 9, Po), [
                [ge, oe.mimeType !== "loading"]
              ]),
              me(M("span", Mo, [
                x(oe) ? (T(), le(ae, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Ne) => $(oe),
                  title: p(A)("r.fView")
                }, null, 8, ["onClick", "title"])) : fe("", !0),
                Q(ae, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (Ne) => S(Se),
                  title: p(A)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ge, oe.mimeType !== "loading"]
              ])
            ])) : fe("", !0)
          ], 64))), 128))
        ])) : fe("", !0)
      ]);
    };
  }
}), ra = /* @__PURE__ */ pe({
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
    const n = o, e = t, l = K(!1), r = K(!1), i = K(!1), c = W({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(S) {
        n("update:modelValue", [S, s.value]), n("on-change", [S, s.value]);
      }
    }), s = W({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(S) {
        n("update:modelValue", [c.value, S]), n("on-change", [c.value, S]);
      }
    }), v = W(
      () => (c.value || "") + ((c.value || s.value) && " - " || "") + (s.value || "")
    ), m = K(), f = K(null), u = () => {
      i.value = !0;
    }, h = () => {
      i.value = !1;
    }, g = (S) => {
      var R;
      !e.disabled && (c.value || s.value) && ((R = S == null ? void 0 : S.stopPropagation) == null || R.call(S), V());
    };
    We(() => {
      f.value = m.value.querySelector(".aRoot .ivu-input-suffix"), f.value && (f.value.addEventListener("mouseover", u), f.value.addEventListener("mouseout", h), f.value.addEventListener("click", g));
    }), ot(() => {
      f.value && (f.value.removeEventListener("mouseover", u), f.value.removeEventListener("mouseout", h), f.value.removeEventListener("click", g));
    });
    function k() {
      e.disabled || (l.value = !0);
    }
    function L(S) {
      c.value = S, l.value = !1, r.value = !0;
    }
    function _(S) {
      s.value = S, r.value = !1;
    }
    function V() {
      n("update:modelValue", [null, null]), n("on-change", [null, null]);
    }
    function D() {
      l.value = !1, r.value = !1, c.value && s.value === null && (c.value = null);
    }
    return (S, R) => {
      const x = te("DatePicker"), $ = te("Icon"), y = te("Input");
      return T(), E("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: m
      }, [
        Q(x, {
          open: p(r),
          modelValue: p(s),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: _,
          onOnClickoutside: D
        }, {
          default: se(() => R[1] || (R[1] = [
            M("div", { class: "bRoot" }, null, -1)
          ])),
          _: 1,
          __: [1]
        }, 8, ["open", "modelValue", "placement", "options"]),
        Q(x, {
          open: p(l),
          modelValue: p(c),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: L,
          onOnClickoutside: D
        }, {
          default: se(() => [
            M("div", { onClick: k }, [
              Q(y, {
                class: "aRoot",
                modelValue: p(v),
                "onUpdate:modelValue": R[0] || (R[0] = (I) => Fe(v) ? v.value = I : null),
                readonly: "",
                placeholder: e.placeholder || p(A)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: se(() => [
                  Q($, {
                    type: p(i) && (p(c) || p(s)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), ua = /* @__PURE__ */ pe({
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
    const n = o, e = t, l = K(), r = "date-c-r-" + Math.floor(Math.random() * 1e7 + 1e7), i = K({}), c = W({
      get() {
        return e.modelValue;
      },
      set(m) {
        n("update:modelValue", m);
      }
    }), s = W(() => {
      if (Y(e.options) === "Object") {
        const { disabledDate: m, ...f } = e.options;
        return f;
      }
      return {};
    });
    function v(m) {
      var u, h;
      const f = m.target;
      ((h = (u = f.classList) == null ? void 0 : u.contains) != null && h.call(u, "ivu-date-picker-cells-cell") || f.tagName === "EM") && Re(() => {
        var k, L;
        const g = (L = (k = l == null ? void 0 : l.value) == null ? void 0 : k.$refs.pickerPanel) == null ? void 0 : L.rangeState;
        if (g) {
          const _ = g.from, V = g.selecting;
          i.value = {
            ...s.value,
            disabledDate: (D) => {
              var S;
              return typeof ((S = e.options) == null ? void 0 : S.disabledDate) == "function" ? e.options.disabledDate(D, _, V) : !1;
            }
          };
        }
      }, 1);
    }
    return Ce(
      () => e.options,
      (m) => {
        i.value = m;
      },
      { immediate: !0 }
    ), We(() => {
      var f;
      const m = document.getElementsByClassName(r)[0];
      (f = m == null ? void 0 : m.addEventListener) == null || f.call(m, "click", v, !0);
    }), ot(() => {
      var f;
      const m = document.getElementsByClassName(r)[0];
      (f = m == null ? void 0 : m.removeEventListener) == null || f.call(m, "click", v, !0);
    }), (m, f) => {
      const u = te("DatePicker");
      return T(), le(u, {
        ref_key: "dateC",
        ref: l,
        modelValue: p(c),
        "onUpdate:modelValue": f[0] || (f[0] = (h) => Fe(c) ? c.value = h : null),
        type: m.type,
        options: p(i),
        placement: m.placement,
        placeholder: m.placeholder,
        clearable: m.clearable,
        disabled: m.disabled,
        editable: !1,
        transferClassName: r,
        transfer: ""
      }, null, 8, ["modelValue", "type", "options", "placement", "placeholder", "clearable", "disabled"]);
    };
  }
}), Ro = { class: "editor-pro-root" }, da = /* @__PURE__ */ pe({
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
    const n = o, e = t, l = bt(), r = W({
      get() {
        return e.modelValue;
      },
      set(m) {
        n("update:modelValue", m), n("on-change", m);
      }
    }), i = W(
      () => Object.assign(
        {
          placeholder: e.placeholder || A("r.pInput"),
          insertKeys: {
            index: 31,
            keys: ["previewX"]
          }
        },
        e.toolbarConfig
      )
    ), c = W(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(m, f) {
                let u = new FormData();
                u.append("files", m);
                const h = m.name, g = e.imgUploadUrl ?? "/node-serve/file";
                Xe.post(g, u, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((k) => {
                  if (k && k.data)
                    if (Array.isArray(k.data))
                      for (let L of k.data) {
                        const _ = g + "/" + (L == null ? void 0 : L.id) + "/download";
                        f(_, h, _);
                      }
                    else {
                      const L = g + "/" + k.data.id + "/download";
                      f(L, h, L);
                    }
                }).catch(() => {
                  Ue(A("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(m, f) {
                let u = new FormData();
                u.append("files", m);
                const h = e.videoUploadUrl ?? "/node-serve/file";
                Xe.post(h, u, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((g) => {
                  if (g && g.data)
                    if (Array.isArray(g.data))
                      for (let k of g.data) {
                        const L = h + "/" + (k == null ? void 0 : k.id) + "/download";
                        f(L);
                      }
                    else {
                      const k = h + "/" + g.data.id + "/download";
                      f(k);
                    }
                }).catch(() => {
                  Ue(A("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), s = W(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function v(m) {
      l.value = m;
    }
    return Ce(
      () => e.disabled,
      (m) => {
        m ? l.value.disable() : l.value.enable();
      }
    ), ul(() => {
      l.value && l.value.destroy();
    }), (m, f) => (T(), E("div", Ro, [
      me(Q(p(Ra), {
        class: "editor-pro-toolbar",
        editor: p(l),
        defaultConfig: p(i),
        mode: m.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ge, !m.disabled]
      ]),
      Q(p($a), {
        class: "editor-pro-editor",
        modelValue: p(r),
        "onUpdate:modelValue": f[0] || (f[0] = (u) => Fe(r) ? r.value = u : null),
        defaultConfig: p(c),
        mode: m.mode,
        onOnCreated: v,
        style: ce(p(s))
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
}, Pl = /* @__PURE__ */ pe({
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
    const n = o, e = t, l = W(() => {
      var f;
      if (e.inline)
        return e.itemWidth;
      {
        const u = (f = e.itemStyle) == null ? void 0 : f.width;
        if (u) {
          if (u.indexOf("%") > -1) {
            const h = Number(u.replace("%", ""));
            return window.isNaN(h) ? `calc(100% - ${e.labelWidth}px)` : `calc((100% - ${e.labelWidth}px)*${h / 100})`;
          } else if (u.indexOf("px") > -1)
            return u;
          return `calc(100% - ${e.labelWidth}px)`;
        }
        return `calc(100% - ${e.labelWidth}px)`;
      }
    });
    function r(f) {
      return {
        withInfo: !!f.info,
        withTitle: !!f.title,
        inlineFormItemXN: e.inline,
        noLabel: f.type === "selectInput",
        [f.class]: f.class,
        slotInput: f.slotPosition
      };
    }
    function i(f, u) {
      n("item-change", {
        e: f,
        root: u
      });
    }
    function c(f, u) {
      n("re-validate", {
        e: f,
        root: u
      });
    }
    function s(f) {
      n("select-input-change", f);
    }
    function v(f, u) {
      n("al-name-change", {
        name: f,
        root: u
      });
    }
    function m(f, u) {
      n("async-label-change", {
        label: f,
        root: u
      });
    }
    return (f, u) => {
      const h = te("InputNumber"), g = te("Input"), k = te("Option"), L = te("Select"), _ = te("Radio"), V = te("Icon"), D = te("RadioGroup"), S = te("Checkbox"), R = te("CheckboxGroup"), x = te("TimePicker"), $ = te("FormItem");
      return e.item ? (T(), le($, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: _e(["relativeBox", r(e.item)])
      }, {
        default: se(() => [
          e.item.type === "txt" ? (T(), E("div", {
            key: 0,
            style: ce([e.itemStyle, { display: "inline-block" }]),
            class: _e({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, q(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (T(), le(h, {
            key: 1,
            style: ce(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[0] || (u[0] = (y) => e.tempKeys[e.item.tempKey] = y),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || p(A)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: u[1] || (u[1] = (y) => i(y, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (T(), le(g, {
            key: 2,
            style: ce(f.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[2] || (u[2] = (y) => e.tempKeys[e.item.tempKey] = y),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || p(A)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[3] || (u[3] = (y) => i(y, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, ct({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: se(() => [
                Ke(f.$slots, e.item.slotName, {
                  valGroup: e.valGroup
                })
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: se(() => [
                M("span", null, q(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: se(() => [
                M("span", null, q(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (T(), le(L, {
            key: 3,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[4] || (u[4] = (y) => f.tempKeys[e.item.tempKey] = y),
            style: ce(f.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || p(A)("r.pSelect"),
            onOnChange: u[5] || (u[5] = (y) => c(y, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: se(() => [
              (T(!0), E(be, null, Ve(e.item.options, (y, I) => (T(), le(k, {
                value: y.val,
                label: y.label || y.val,
                key: "option-" + e.item.key + I,
                disabled: !!y.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (T(), le(la, {
            key: 4,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[6] || (u[6] = (y) => f.tempKeys[e.item.tempKey] = y),
            "label-width": f.labelWidth,
            "item-width": p(l),
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || p(A)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: s
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (T(), le(oa, {
            key: 5,
            style: ce(f.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[7] || (u[7] = (y) => e.valGroup[e.item.key] = y),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || p(A)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: u[8] || (u[8] = (y) => v(y, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (T(), le(na, {
            key: 6,
            style: ce(f.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[9] || (u[9] = (y) => e.valGroup[e.item.key] = y),
            url: e.item.url || f.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || p(A)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: u[10] || (u[10] = (y) => m(y, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (T(), le(_, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[11] || (u[11] = (y) => e.valGroup[e.item.key] = y),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: u[12] || (u[12] = (y) => i(y, e.item))
          }, {
            default: se(() => [
              we(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (T(), le(D, {
            key: 8,
            style: ce(f.itemStyle),
            onOnChange: u[13] || (u[13] = (y) => c(y, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[14] || (u[14] = (y) => f.tempKeys[e.item.tempKey] = y)
          }, {
            default: se(() => [
              (T(!0), E(be, null, Ve(e.item.options, (y) => (T(), le(_, {
                key: "radioItem" + y.val,
                label: y.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || y.disabled
              }, {
                default: se(() => [
                  y.icon && !e.item.buttonType ? (T(), le(V, {
                    key: 0,
                    type: y.icon
                  }, null, 8, ["type"])) : fe("", !0),
                  M("span", null, q(y.label || y.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (T(), le(S, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[15] || (u[15] = (y) => e.valGroup[e.item.key] = y),
            disabled: !!e.item.disabled,
            onOnChange: u[16] || (u[16] = (y) => i(y, e.item))
          }, {
            default: se(() => [
              we(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (T(), le(R, {
            key: 10,
            style: ce(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[17] || (u[17] = (y) => f.tempKeys[e.item.tempKey] = y),
            onOnChange: u[18] || (u[18] = (y) => c(y, e.item))
          }, {
            default: se(() => [
              (T(!0), E(be, null, Ve(e.item.options, (y) => (T(), le(S, {
                key: "checkItem" + y.val,
                label: y.val,
                disabled: !!e.item.disabled || e.disabled || y.disabled
              }, {
                default: se(() => [
                  y.icon ? (T(), le(V, {
                    key: 0,
                    type: y.icon
                  }, null, 8, ["type"])) : fe("", !0),
                  M("span", null, q(y.label || y.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (T(), le(g, {
            key: 11,
            type: "textarea",
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[19] || (u[19] = (y) => f.tempKeys[e.item.tempKey] = y),
            autosize: e.item.autosize || { minRows: 2 },
            style: ce(f.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || p(A)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[20] || (u[20] = (y) => i(y, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (T(), le(sa, {
            key: 12,
            style: ce(f.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[21] || (u[21] = (y) => e.valGroup[e.item.key] = y),
            url: e.item.url || f.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            multiple: !!e.item.multiple,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: u[22] || (u[22] = (y) => c(y, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "multiple", "disabled", "with-credentials"])) : e.item.type === "date" ? (T(), le(ua, {
            key: 13,
            style: ce(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[23] || (u[23] = (y) => f.tempKeys[e.item.tempKey] = y),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placeholder: e.item.placeholder || p(A)("r.selectDate"),
            options: e.item.dateOptions || {},
            "time-picker-options": f.item.timePickerOptions || {},
            clearable: e.item.clearable !== !1,
            onOnChange: u[24] || (u[24] = (y) => i(y, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "time-picker-options", "clearable"])) : e.item.type === "time" ? (T(), le(x, {
            key: 14,
            style: ce(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[25] || (u[25] = (y) => f.tempKeys[e.item.tempKey] = y),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(A)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: u[26] || (u[26] = (y) => i(y, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (T(), le(ra, {
            key: 15,
            style: ce(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[27] || (u[27] = (y) => f.tempKeys[e.item.tempKey] = y),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(A)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: u[28] || (u[28] = (y) => i(y, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (T(), le(da, {
            key: 16,
            class: "inlineBlock",
            style: ce(f.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[29] || (u[29] = (y) => e.valGroup[e.item.key] = y),
            placeholder: e.item.placeholder || p(A)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: u[30] || (u[30] = (y) => i(y, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (T(), le(aa, {
            key: 17,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[31] || (u[31] = (y) => f.tempKeys[e.item.tempKey] = y),
            style: ce(f.itemStyle),
            placeholder: e.item.placeholder || p(A)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            "input-in-map": e.item.inputInMap !== !1,
            onOnChange: u[32] || (u[32] = (y) => i(y, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height", "input-in-map"])) : e.item.type === "custom" ? (T(), E("div", {
            key: 18,
            class: "inlineBlock",
            style: ce(f.itemStyle)
          }, [
            Ke(f.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : fe("", !0),
          e.item.info ? (T(), E("div", $o, q(e.item.info), 1)) : fe("", !0),
          e.item.title ? (T(), E("div", Fo, q(e.item.title), 1)) : fe("", !0),
          e.inline ? fe("", !0) : (T(), E("span", Do))
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : fe("", !0);
    };
  }
}), No = { class: "inlineBlock" }, Kt = /* @__PURE__ */ pe({
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
    const e = n, l = t, r = K(null), i = K({}), c = K([]), s = K(
      {}
    );
    let v = [];
    const m = ((yl = window == null ? void 0 : window.g) == null ? void 0 : yl.mgrURL) ?? "";
    let f = K([]), u = [];
    const h = K(!1), g = K(Math.random() * 1e8 + 1e3), k = (vl = window == null ? void 0 : window.g) != null && vl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let L = !1;
    const _ = W(() => Array.isArray(l.formData.length ? l.formData[0] : !1)), V = W(
      () => l.inline ? {
        width: l.itemWidth + l.labelWidth + "px"
      } : {}
    ), D = W(
      () => l.inline ? {
        width: "100%"
      } : { width: l.contentWidth }
    ), S = W(() => {
      let d = he(l.formRules);
      for (let a in d)
        if (d.hasOwnProperty(a))
          if (Array.isArray(d[a]))
            for (let P of d[a])
              P && P && !(P.message || P.validator) && (P.message = A("r.required"));
          else Y(d[a]) === "Object" && (d[a].message || d[a].validator || (d[a].message = A("r.required")));
      return d;
    }), R = W(() => {
      let d = [];
      if (_.value)
        for (let a of c.value)
          y(a, d);
      else
        y(c.value, d);
      return d.concat(f.value, u);
    }), x = W(() => {
      let d = [];
      if (_.value)
        for (let a of c.value)
          I(a, d);
      else
        I(c.value, d);
      return d;
    });
    function $(d) {
      return d.filter((a) => a == null ? void 0 : a.slotName);
    }
    function y(d, a) {
      for (let P of d)
        if ((P == null ? void 0 : P.showing) === !0 && P.key && P.type !== "selectInput" && (a.push(P.key), P.key2 && a.push(P.key2), P.collectLabel)) {
          if (!Array.isArray(P.collectLabel) && P.collectLabel.key)
            a.push(P.collectLabel.key);
          else if (Array.isArray(P.collectLabel))
            for (let C of P.collectLabel)
              C.key && a.push(C.key);
        }
    }
    function I(d, a) {
      for (let P of d)
        (P == null ? void 0 : P.showing) === !0 && P.key && P.type !== "selectInput" && a.push(P.key);
    }
    function O() {
      return new Promise((d) => {
        w(), N().then(() => {
          e("on-reset"), d(!0);
        });
      });
    }
    function ee() {
      return new Promise((d) => {
        for (let a of v)
          a();
        v = [], s.value = {}, De(), ue(), N().then(() => {
          e("on-re-render"), d(!0);
        });
      });
    }
    function N() {
      return new Promise((d) => {
        g.value = Math.floor(Math.random() * 1e8 + 1e3), $e(function() {
          d(!0);
        });
      });
    }
    function w() {
      let d = H();
      for (let a in i.value)
        if (i.value.hasOwnProperty(a))
          if (Pe(d[a]))
            i.value[a] = d[a];
          else if (Array.isArray(i.value[a]))
            i.value[a] = [];
          else if (Y(i.value[a]) === "Boolean")
            i.value[a] = !1;
          else {
            const P = Lt(l.formData, (C) => (C == null ? void 0 : C.key) === a);
            P && (P.type === "editor" || P.type === "editorPro") ? i.value[a] = "" : i.value[a] = null;
          }
      X(d);
    }
    function X(d) {
      for (let a in s.value)
        s.value.hasOwnProperty(a) && (Pe(d[a]) ? s.value[a] = d[a] : Array.isArray(s.value[a]) ? s.value[a] = [] : Y(s.value[a]) === "Object" && s.value[a].hasOwnProperty("key") && s.value[a].hasOwnProperty("val") ? s.value[a].val = null : s.value[a] = null);
    }
    function F(d) {
      let a = H();
      Pe(a[d]) ? s.value[d] = a[d] : Array.isArray(s.value[d]) ? s.value[d] = [] : s.value[d] = null;
    }
    function H() {
      let d = {};
      if (_.value)
        for (let a of c.value)
          b(a, d);
      else
        b(c.value, d);
      return d;
    }
    function b(d, a) {
      for (let P of d)
        P.tempKey && Pe(P.defaultVal) && ae(P, a), P.key && Pe(P.defaultVal) && (a[P.key] = P.defaultVal), P.key2 && Pe(P.defaultVal2) && (a[P.key2] = P.defaultVal2);
    }
    function B(d) {
      if (d.show) {
        if (Y(d.show) === "Object")
          return U(d, J(d.show));
        if (Array.isArray(d.show))
          if (d.showOr) {
            for (let a of d.show)
              if (J(a) === !0)
                return U(d, !0);
            return U(d, !1);
          } else {
            for (let a of d.show)
              if (J(a) === !1)
                return U(d, !1);
            return U(d, !0);
          }
        else if (typeof d.show == "function")
          return U(d, d.show(i.value));
      } else d.showing || (d.showing = !0);
      return !0;
    }
    function J(d) {
      if (d.reg && typeof d.reg.test == "function")
        return d.reg.test(i.value[d.key]);
      if (Array.isArray(d.val)) {
        for (let a of d.val) {
          if ((i.value[d.key] || i.value[d.key] === 0 || i.value[d.key] === !1) && a === ".")
            return !0;
          if (i.value[d.key] === a)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function U(d, a) {
      return !(d != null && d.showing) && a && (d != null && d.key) ? (d.showing = a, d.defaultVal !== void 0 && (d.tempKey ? (s.value[d.tempKey] === null || s.value[d.tempKey] === void 0 || (Y(s.value[d.tempKey]) === "Object" || Array.isArray(s.value[d.tempKey])) && Ee(s.value[d.tempKey])) && ae(d, s.value) : (i.value[d.key] === null || i.value[d.key] === void 0) && (i.value[d.key] = d.defaultVal), d.key2 && d.deafultVal2 !== void 0 && (i.value[d.key2] === null || i.value[d.key2] === void 0) && d.type !== "inputMap" && (i.value[d.key2] = d.defaultVal2)), d.tempKey && Se(s.value[d.tempKey], d)) : d.showing = a, a;
    }
    function ae(d, a) {
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
    function ue() {
      let d = he(l.formData);
      if (_.value)
        for (let a of d)
          ve(a);
      else
        ve(d);
      c.value = d;
    }
    function ve(d) {
      for (let a of d)
        if (a != null && a.type)
          switch (a.type) {
            case "selectInput":
              const P = "selectInput" + Math.floor(Math.random() * 1e8);
              a.tempKey = P, s.value[P] = K({
                key: a.key || null,
                val: a.defaultVal || null
              }), v.push(
                Ce(
                  () => s.value[P],
                  (j) => {
                    Se(j, a);
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
              }, v.push(
                Ce(
                  () => s.value[C],
                  (j) => {
                    Se(j, a);
                  },
                  { immediate: !0, flush: "sync" }
                )
              ));
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              const re = "inputT" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = re, s.value[re] = a.defaultVal !== void 0 ? a.defaultVal : null, v.push(
                Ce(
                  () => s.value[re],
                  (j) => {
                    Se(j, a);
                  },
                  { immediate: !0, flush: "sync" }
                )
              ));
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              if (a.options || (a.options = []), (a.type === "checkboxGroup" || a.type === "radioGroup") && (a.options = K(he(a.options))), a.asyncOption)
                if (a.changeOption)
                  if (Array.isArray(a.changeOption)) {
                    let j = !0;
                    for (let Z of a.changeOption)
                      if (!Z.valKey || !Z.key) {
                        j = !1;
                        break;
                      }
                    j ? v.push(
                      Ce(
                        () => {
                          let Z = "";
                          if (Array.isArray(a.changeOption))
                            for (let Be of a.changeOption) {
                              let Ge = i.value[Be.valKey];
                              if (Ge && !Array.isArray(Ge) || Array.isArray(Ge) && Ge.length || Ge === 0 || Ge === !1)
                                Z += "&" + Be.key + "=" + Ge;
                              else if (!Be.notRequired)
                                return !1;
                            }
                          return Z;
                        },
                        (Z) => {
                          let Be = he(s.value[a.tempKey]);
                          if (s.value[a.tempKey] = null, Z && a.optionUrl) {
                            let Ge = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                            Ie((Ge + Z).replace(/\?&/, "?"), a, Be);
                          } else
                            a.localOption ? Qe(a, "options", [...a.localOption]) : Qe(a, "options", []), Pe(Be) && xe(Be, a);
                        },
                        {
                          immediate: !0
                        }
                      )
                    ) : a.localOption ? Qe(a, "options", [...a.localOption]) : Qe(a, "options", []);
                  } else typeof a.changeOption == "object" ? a.changeOption.valKey && a.changeOption.key && v.push(
                    Ce(
                      () => typeof a.changeOption == "object" && !Array.isArray(a.changeOption) ? i.value[a.changeOption.valKey] : !1,
                      (j) => {
                        let Z = he(s.value[a.tempKey]);
                        if (s.value[a.tempKey] = null, (j && !Array.isArray(j) || Array.isArray(j) && j.length || j === 0 || j === !1) && a.optionUrl && typeof a.changeOption == "object" && !Array.isArray(a.changeOption)) {
                          let Be = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                          Ie((Be + "&" + a.changeOption.key + "=" + j).replace(/\?&/, "?"), a, Z);
                        } else
                          a.localOption ? Qe(a, "options", [...a.localOption]) : Qe(a, "options", []), Pe(Z) && xe(Z, a);
                      },
                      { immediate: !0 }
                    )
                  ) : Y(a.changeOption) === "Boolean" && v.push(
                    Ce(
                      () => {
                        const j = Lt(l.formData, (Z) => (Z == null ? void 0 : Z.key) === a.key);
                        return j.optionUrl = Ca(j.optionUrl), j.optionUrl.value;
                      },
                      (j) => {
                        let Z = he(s.value[a.tempKey]);
                        s.value[a.tempKey] = null, j ? Ie(j, a, Z) : (a.localOption ? Qe(a, "options", [...a.localOption]) : Qe(a, "options", []), Pe(Z) && xe(Z, a));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
                else a.optionUrl && Ie(a.optionUrl, a);
              else Y(a.borrowOption) === "String" && $e(function() {
                a.options = Lt(c.value, (j) => (j == null ? void 0 : j.key) === a.borrowOption).options;
              });
              const ne = "opEle" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = ne, a.type === "select" && a.multiple || a.type === "checkboxGroup" ? s.value[ne] = a.defaultVal !== void 0 ? a.defaultVal : [] : a.booleanVal ? s.value[ne] = a.defaultVal !== void 0 ? a.defaultVal ? 1 : 0 : null : s.value[ne] = a.defaultVal !== void 0 ? a.defaultVal : null, v.push(
                Ce(
                  () => s.value[ne],
                  (j) => {
                    Se(j, a);
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
              const Ae = "date" + Math.floor(Math.random() * 1e8);
              a.tempKey = Ae, a.dateType === "date" || a.dateType === "datetime" || a.dateType === "time" || a.dateType === "year" || a.dateType === "month" ? s.value[Ae] = a.defaultVal || null : (a.dateType === "daterange" || a.dateType === "datetimerange" || a.dateType === "timerange" || a.type === "monthRange") && (s.value[Ae] = a.defaultVal && a.defaultVal2 && [a.defaultVal, a.defaultVal2] || []), v.push(
                Ce(
                  () => s.value[Ae],
                  (j) => {
                    Se(j, a);
                  },
                  { flush: "sync" }
                )
              );
              break;
          }
    }
    function Ie(d, a, P) {
      Xe.get(d).then((C) => {
        var Ae;
        let re;
        if (Fe(a.options) ? re = a.options.value : re = a.options, !re)
          return;
        let ne = ((Ae = C == null ? void 0 : C.data) == null ? void 0 : Ae.records) || (C == null ? void 0 : C.data) || C || [];
        Array.isArray(ne) ? (a.optionFilter && Y(a.optionFilter) === "Function" && (ne = a.optionFilter(ne)), a.optionLabel && a.optionVal ? (re.length = 0, re.push(
          ...ne.map((j) => {
            let Z;
            if (Array.isArray(a.optionLabel)) {
              let Be = "";
              a.optionLabel.forEach((Ge, gl) => {
                let Ut = String(j[Ge]);
                gl === 1 ? Be += "（" + Ut : gl > 1 ? Be += "、" + Ut : Be += Ut;
              }), Z = {
                label: Be + "）",
                val: a.optionVal && j[a.optionVal]
              };
            } else
              Z = {
                label: a.optionLabel && j[a.optionLabel],
                val: a.optionVal && j[a.optionVal]
              };
            if (a.collectLabel)
              if (Array.isArray(a.collectLabel))
                for (let Be of a.collectLabel)
                  Be.valKey && Be.valKey !== "label" && (Z[Be.valKey] = j[Be.valKey]);
              else
                a.collectLabel.valKey && a.collectLabel.valKey !== "label" && (Z[a.collectLabel.valKey] = j[a.collectLabel.valKey]);
            if (Z.val !== null && Z.val !== void 0)
              return Z;
          })
        )) : (re.length = 0, re.push(...ne))) : re.length = 0, a.localOption && re.unshift(...a.localOption), Pe(P) && xe(P, a), a.disableOptionByOthers && (Y(a.disableOptionByOthers) === "String" ? v.push(
          Ce(
            () => i.value[a.disableOptionByOthers],
            (j) => {
              if (F(a.tempKey), !!re) {
                for (let Z of re)
                  Z.disabled && (Z.disabled = !1);
                if (j || j === 0 || j === !1)
                  for (let Z of re)
                    Z.val === j && (Z.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(a.disableOptionByOthers) && v.push(
          Ce(
            () => a.disableOptionByOthers.filter((j) => j).map((j) => i.value[j]),
            (j) => {
              if (F(a.tempKey), !!re) {
                for (let Z of re)
                  Z.disabled && (Z.disabled = !1);
                if (j) {
                  for (let Z of re)
                    for (let Be = 0; Be < j.length; Be++)
                      if (Z.val === j[Be]) {
                        Z.disabled = !0, j.splice(Be, 1);
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
              valGroup: i.value
            })
          )
        );
      }).catch(() => {
        console.warn("拉取选项出错");
      });
    }
    function xe(d, a) {
      Array.isArray(Gt(a.options)) && Ot(Gt(a.options), { val: d }) !== -1 && (s.value[a.tempKey] = d);
    }
    function De() {
      if (i.value = {}, _.value)
        for (let d of l.formData)
          oe(d);
      else
        oe(l.formData);
    }
    function oe(d) {
      for (let a of d)
        a != null && a.key && (a.type === "checkboxGroup" || a.type === "select" && a.multiple ? i.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : [] : a.type === "editor" || a.type === "editorPro" ? i.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : "" : (i.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : null, a.key2 && (i.value[a.key2] = a.defaultVal2 !== void 0 && a.show === void 0 ? a.defaultVal2 : null)));
    }
    function Se(d, a) {
      if (a != null && a.showing)
        switch (a.type) {
          case "selectInput":
            d && (d.beforeKey && delete i.value[d.beforeKey], i.value[d.key] = d.val);
            break;
          case "inputMap":
            if (!a.key || !a.key2)
              return;
            d ? (i.value[a.key] = d.lng, i.value[a.key2] = d.lat, a.key3 && (i.value[a.key3] = d.name)) : (i.value[a.key] = null, i.value[a.key2] = null, a.key3 && (i.value[a.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!a.key)
              return;
            if (d || d === 0) {
              let re = /^-?\d+(.\d+)?$/;
              a.numberVal && re.test(d) ? i.value[a.key] = Number(d) : i.value[a.key] = d;
            } else
              i.value[a.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!a.key)
              return;
            if (a.booleanVal && !a.multiple ? i.value[a.key] = d === void 0 || d === "" || d === null ? null : !!d : a.multiple || a.type === "checkboxGroup" ? i.value[a.key] = Object.assign([], d) : i.value[a.key] = d, a.collectLabel) {
              const re = Ne(a, d);
              if (Array.isArray(a.collectLabel)) {
                for (let ne of a.collectLabel)
                  if (ne != null && ne.key && ne.valKey) {
                    const Ae = Je(ne.key);
                    let j = null;
                    if (Array.isArray(re)) {
                      if (j = re.map((Z) => Z[ne.valKey]), i.value[ne.key] = j, Ae)
                        for (const Z of Ae)
                          s.value[Z.tempKey] = j;
                    } else if (re && Pe(re[ne.valKey]) && (j = re[ne.valKey]), i.value[ne.key] = j, Ae)
                      for (const Z of Ae)
                        Z.booleanVal && typeof j == "boolean" ? s.value[Z.tempKey] = j ? 1 : 0 : s.value[Z.tempKey] = j;
                  }
              } else if (st(a.collectLabel)) {
                const ne = a.collectLabel;
                if (ne.key && ne.valKey) {
                  const Ae = Je(ne.key);
                  let j = null;
                  if (Array.isArray(re)) {
                    if (j = re.map((Z) => Z[ne.valKey]), i.value[ne.key] = j, Ae)
                      for (const Z of Ae)
                        s.value[Z.tempKey] = j;
                  } else if (re && Pe(re[ne.valKey]) && (j = re[ne.valKey]), i.value[ne.key] = j, Ae)
                    for (const Z of Ae)
                      Z.booleanVal && typeof j == "boolean" ? s.value[Z.tempKey] = j ? 1 : 0 : s.value[Z.tempKey] = j;
                }
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!a.key)
              return;
            let P = a.dateType;
            const C = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "YYYY-MM"
            };
            if (P === "date" || P === "datetime" || P === "time" || P === "year" || P === "month")
              d ? (P === "time" ? i.value[a.key] = d : i.value[a.key] = ht(d).format(typeof a.format == "string" ? a.format : C[P]), P === "date" && a.addTime && (i.value[a.key] += " 00:00:00")) : i.value[a.key] = null;
            else if (a.type === "monthRange" || P === "daterange" || P === "datetimerange" || P === "timerange") {
              if (!a.key2)
                return;
              d && d[0] && d[1] ? (P === "timerange" ? (i.value[a.key] = d[0], i.value[a.key2] = d[1]) : a.type === "monthRange" ? (i.value[a.key] = typeof a.format == "string" && ht(d[0]).format(a.format) || d[0], i.value[a.key2] = typeof a.format == "string" && a.format && ht(d[1]).format(a.format) || d[1]) : (i.value[a.key] = ht(d[0]).format(a.format || P && C[P]), i.value[a.key2] = ht(d[1]).format(a.format || P && C[P])), P === "daterange" && a.addTime && (i.value[a.key] += " 00:00:00", i.value[a.key2] += " 23:59:59")) : (i.value[a.key] = null, i.value[a.key2] = null);
            }
            break;
        }
    }
    function Ne(d, a) {
      const P = Gt(d == null ? void 0 : d.options);
      if (P)
        if (d != null && d.multiple || (d == null ? void 0 : d.type) === "checkboxGroup") {
          if (a) {
            let C = [];
            for (let re of P)
              a.indexOf(re == null ? void 0 : re.val) !== -1 && C.push(re);
            return C;
          }
          return !1;
        } else {
          if (a || a === 0 || a === !1) {
            for (let C of P)
              if ((C == null ? void 0 : C.val) === a)
                return C;
          }
          return !1;
        }
    }
    function Je(d, a = null) {
      const P = [];
      if (_.value)
        for (let C of c.value)
          for (let re of C)
            re.key === d && typeof re.tempKey == "string" && P.push(re);
      else
        for (let C of c.value)
          C.key === d && typeof C.tempKey == "string" && P.push(C);
      if (P.length === 0)
        return !1;
      if (a && typeof a == "function") {
        const C = P.filter((re) => a(re));
        return C.length > 0 ? C : !1;
      }
      return P;
    }
    function G(d, a) {
      let P = {};
      for (let C in i.value)
        i.value.hasOwnProperty(C) && d[C] !== void 0 && (P[C] = d[C], delete d[C]);
      ke(P, a);
      for (let C in d)
        d.hasOwnProperty(C) && (u.indexOf(C) < 0 && u.push(C), i.value[C] = d[C]);
    }
    function z(d) {
      let a = he(d);
      if (_.value) {
        let P = [];
        for (let C of l.formData)
          P.push(...ye(C, a));
        return P;
      }
      return ye(l.formData, a);
    }
    function ye(d, a) {
      return d.filter((P) => {
        for (let C of Object.keys(a))
          if ((P == null ? void 0 : P.key) === C && x.value.indexOf(C) > -1 && !(a[C] === null || (Array.isArray(a[C]) || Y(a[C]) === "Object") && Ee(a[C])))
            return delete a[C], !0;
        return !1;
      }).map((P) => P == null ? void 0 : P.key);
    }
    function ke(d, a = !1) {
      let P = he(d);
      Te(d, a);
      for (let C in i.value)
        if (i.value.hasOwnProperty(C) && d[C] !== void 0 && d[C] !== "--") {
          if (Array.isArray(d[C]))
            d[C] = d[C].filter((ne) => ne !== "--");
          else if (Y(d[C]) === "Object")
            for (let ne in d[C])
              d[C].hasOwnProperty(ne) && d[C][ne] === "--" && (d[C][ne] = null);
          Je(C, (ne) => !!(ne.booleanVal && !ne.multiple)) ? i.value[C] = !!d[C] : i.value[C] = d[C];
        } else a || (i.value[C] = Array.isArray(i.value[C]) ? [] : null);
      $e(function() {
        ma(z(P));
      });
    }
    function Te(d, a = !1) {
      if (_.value)
        for (let P of c.value)
          de(P, d, a);
      else
        de(c.value, d, a);
    }
    function de(d, a, P = !1) {
      for (let C of d)
        if (C != null && C.key && (P && (a[C.key] !== void 0 || C.key2 && a[C.key2] !== void 0) || !P) && C.tempKey)
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
    function ie(d) {
      if (Array.isArray(d))
        for (let a of d)
          Me(a);
      else Y(d) === "Object" && Me(d);
    }
    function Me(d) {
      const { index: a, indexB: P, key: C, val: re } = d;
      if (typeof a == "number")
        if (Array.isArray(c.value[a])) {
          if (typeof P == "number")
            if (C && d.hasOwnProperty("val"))
              c.value[a][P][C] = re;
            else
              for (let ne of Object.keys(d))
                ne !== "index" && C !== "indexB" && (c.value[a][P][ne] = d[ne]);
        } else if (C && d.hasOwnProperty("val"))
          c.value[a][C] = re;
        else
          for (let ne of Object.keys(d))
            ne !== "index" && (c.value[a][ne] = d[ne]);
    }
    function it({ label: d, root: a }) {
      a.key2 && (i.value[a.key2] = d), rt({
        e: d,
        root: a
      });
    }
    function pt(d) {
      d.beforeKey && Ba(f.value, (a) => a === d.beforeKey), d.key && (f.value.indexOf(d.key) === -1 && f.value.push(d.key), rt({
        e: null,
        root: d
      }));
    }
    function Ye({ name: d, root: a }) {
      a.key2 && (i.value[a.key2] = d), rt({
        e: d,
        root: a
      });
    }
    function Ct({ e: d, root: a }) {
      rt({
        e: d,
        root: a
      }), $e(function() {
        var P, C;
        (C = (P = r.value) == null ? void 0 : P.validateField) == null || C.call(P, a.key);
      });
    }
    function rt({ e: d, root: a }) {
      Re(() => {
        var C;
        let P = {
          event: d
        };
        if (a.key && (P[a.key] = i.value[a.key]), a.key2 && (P[a.key2] = i.value[a.key2]), Array.isArray(a.collectLabel))
          for (let re of a.collectLabel)
            P[re.key] = i.value[re.key];
        else (C = a.collectLabel) != null && C.key && (P[a.collectLabel.key] = i.value[a.collectLabel.key]);
        e("on-item-change", P);
      }, 300);
    }
    function hl() {
      let d = {};
      for (let a of R.value)
        d[a] = i.value[a];
      return l.trim && (d = Hl(d)), d;
    }
    function fa() {
      var d, a;
      (a = (d = r.value) == null ? void 0 : d.validate) == null || a.call(d);
    }
    function pa(d) {
      Re(() => {
        var a, P;
        (P = (a = r.value) == null ? void 0 : a.validateField) == null || P.call(a, d, () => {
        });
      }, 10);
    }
    function ma(d) {
      Re(() => {
        var a, P;
        if (Array.isArray(d))
          for (let C of d)
            (P = (a = r.value) == null ? void 0 : a.validateField) == null || P.call(a, C, () => {
            });
      }, 10);
    }
    function ha(d) {
      d !== void 0 && (h.value = !!d);
    }
    function zt() {
      var d, a;
      l.disabled || (a = (d = r.value) == null ? void 0 : d.validate) == null || a.call(d, (P) => {
        L || (L = !0, P && (h.value = !0, e("on-submit", hl())), Re(() => {
          L = !1;
        }, 2e3));
      });
    }
    return We(() => {
      De(), ue();
    }), o({
      resetForm: O,
      refreshFormDom: N,
      reRenderForm: ee,
      setItemToValGroup: G,
      updateValGroup: ke,
      updateFormDataT: ie,
      validate: fa,
      reValidate: pa,
      changeLoading: ha,
      getValGroup: hl,
      submit: zt
    }), (d, a) => {
      const P = te("FormItem"), C = te("Button"), re = te("Form");
      return T(), le(re, {
        ref_key: "formGroupXRef",
        ref: r,
        model: p(i),
        rules: p(S),
        "label-width": l.labelWidth,
        inline: l.inline,
        "show-message": l.showMessage,
        class: "formXN",
        key: p(g)
      }, {
        default: se(() => [
          Q(P, { style: { display: "none" } }, {
            default: se(() => a[0] || (a[0] = [
              M("input", { type: "text" }, null, -1)
            ])),
            _: 1,
            __: [0]
          }),
          p(_) ? (T(!0), E(be, { key: 0 }, Ve(p(c), (ne, Ae) => (T(), E("div", {
            class: _e([d.teamClass, "formTeamBox" + Ae]),
            key: "formTeamBox" + Ae
          }, [
            (T(!0), E(be, null, Ve(ne, (j, Z) => (T(), E(be, {
              key: "formItem" + Z
            }, [
              B(j) ? (T(), le(Pl, {
                key: 0,
                item: j,
                style: ce(p(V)),
                "item-style": p(D),
                "val-group": p(i),
                "temp-keys": p(s),
                inline: l.inline,
                disabled: l.disabled,
                "label-width": l.labelWidth,
                "item-width": l.itemWidth,
                "mgr-url": p(m),
                "upload-url": p(k),
                onItemChange: rt,
                onReValidate: Ct,
                onClearTempKeyItem: F,
                onSelectInputChange: pt,
                onAlNameChange: Ye,
                onAsyncLabelChange: it
              }, ct({ _: 2 }, [
                Ve($(ne), (Be) => ({
                  name: Be.slotName,
                  fn: se((Ge) => [
                    Ke(d.$slots, Be.slotName, {
                      valGroup: Ge.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : fe("", !0)
            ], 64))), 128))
          ], 2))), 128)) : fe("", !0),
          (T(!0), E(be, null, Ve(p(c), (ne, Ae) => (T(), E(be, {
            key: "formItem" + Ae
          }, [
            !p(_) && B(ne) ? (T(), le(Pl, {
              key: 0,
              item: ne,
              style: ce(p(V)),
              "item-style": p(D),
              "val-group": p(i),
              "temp-keys": p(s),
              inline: l.inline,
              disabled: l.disabled,
              "label-width": l.labelWidth,
              "item-width": l.itemWidth,
              "mgr-url": p(m),
              "upload-url": p(k),
              onItemChange: rt,
              onReValidate: Ct,
              onClearTempKeyItem: F,
              onSelectInputChange: pt,
              onAlNameChange: Ye,
              onAsyncLabelChange: it
            }, ct({ _: 2 }, [
              Ve($(d.formData), (j) => ({
                name: j.slotName,
                fn: se((Z) => [
                  Ke(d.$slots, j.slotName, {
                    valGroup: Z.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : fe("", !0)
          ], 64))), 128)),
          l.showLongOkBt ? (T(), le(P, { key: 1 }, {
            default: se(() => [
              Q(C, {
                onClick: zt,
                style: ce(p(D)),
                type: "primary",
                loading: l.btnLoading && p(h),
                disabled: l.disabled
              }, {
                default: se(() => [
                  we(q(l.longOkBtTxt || p(A)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : fe("", !0),
          M("div", No, [
            l.showInlineOkBt ? (T(), le(C, {
              key: 0,
              type: "primary",
              class: _e({ inlineFormBtXN: l.inline, okBtnXN: !0 }),
              onClick: zt,
              loading: l.btnLoading && p(h),
              disabled: l.disabled
            }, {
              default: se(() => [
                we(q(l.inlineOkBtTxt || p(A)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : fe("", !0),
            l.showInlineClearBt ? (T(), le(C, {
              key: 1,
              onClick: O,
              class: _e({ inlineFormBtXN: l.inline }),
              type: "dashed"
            }, {
              default: se(() => [
                we(q(l.inlineClearBtTxt || p(A)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : fe("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), Eo = /* @__PURE__ */ pe({
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
    const e = n, l = t, r = K({ width: l.width }), i = K(!1), c = K(), s = W(() => {
      var x, $;
      if (Array.isArray(l.formData))
        if (Array.isArray(l.formData[0])) {
          let y = [];
          for (let I of l.formData)
            I && (y = y.concat(
              I.filter((O) => (O == null ? void 0 : O.type) === "custom" || (O == null ? void 0 : O.type) === "input" && O.slotName && O.slotPosition)
            ));
          return y;
        } else
          return ($ = (x = l.formData) == null ? void 0 : x.filter) == null ? void 0 : $.call(
            x,
            (y) => (y == null ? void 0 : y.type) === "custom" || (y == null ? void 0 : y.type) === "input" && y.slotName && y.slotPosition
          );
      return [];
    });
    function v() {
      return new Promise((x) => {
        var $, y;
        (y = ($ = c.value).resetForm) == null || y.call($).then((I) => {
          x(I);
        });
      });
    }
    function m() {
      return new Promise((x) => {
        var $, y;
        (y = ($ = c.value).refreshFormDom) == null || y.call($).then((I) => {
          x(I);
        });
      });
    }
    function f() {
      return new Promise((x) => {
        var $, y;
        (y = ($ = c.value).reRenderForm) == null || y.call($).then((I) => {
          x(I);
        });
      });
    }
    function u(x, $) {
      var y, I;
      (I = (y = c.value).setItemToValGroup) == null || I.call(y, x, $);
    }
    function h(x, $) {
      var y, I;
      (I = (y = c.value).updateValGroup) == null || I.call(y, x, $);
    }
    function g(x) {
      var $, y;
      (y = ($ = c.value).updateFormDataT) == null || y.call($, x);
    }
    function k() {
      var x, $;
      ($ = (x = c.value).validate) == null || $.call(x);
    }
    function L(x) {
      var $, y;
      (y = ($ = c.value).reValidate) == null || y.call($, x);
    }
    function _(x) {
      var $, y;
      x !== void 0 && (i.value = !!x, (y = ($ = c.value).changeLoading) == null || y.call($, i.value));
    }
    function V() {
      var x, $;
      return ($ = (x = c.value).getValGroup) == null ? void 0 : $.call(x);
    }
    function D() {
      i.value = !0;
    }
    function S() {
      var x, $;
      ($ = (x = c.value).submit) == null || $.call(x);
    }
    function R() {
      e("on-cancel"), Re(() => {
        var x, $;
        i.value = !1, ($ = (x = c.value).changeLoading) == null || $.call(x, !1);
      }, 1e3);
    }
    return o({
      resetForm: v,
      refreshFormDom: m,
      reRenderForm: f,
      setItemToValGroup: u,
      updateValGroup: h,
      updateFormDataT: g,
      validate: k,
      reValidate: L,
      changeLoading: _,
      getValGroup: V,
      submit: S,
      close: R
    }), (x, $) => {
      const y = te("Button");
      return T(), E("div", {
        style: ce(p(r)),
        class: "formGroupBoxVM"
      }, [
        Q(Kt, ft({
          ref_key: "formRRef",
          ref: c
        }, x.$attrs, {
          "form-data": l.formData,
          "label-width": l.labelWidth,
          "content-width": l.contentWidth,
          "item-width": l.itemWidth,
          btnLoading: l.btnLoading,
          disabled: l.disabled,
          onOnSubmit: D
        }), ct({ _: 2 }, [
          Ve(p(s), (I) => ({
            name: I.slotName,
            fn: se(({ valGroup: O }) => [
              Ke(x.$slots, I.slotName, { valGroup: O })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading", "disabled"]),
        me(M("div", {
          class: "formFooterVM",
          style: ce({ marginLeft: l.labelWidth + "px" })
        }, [
          M("div", {
            style: ce({ width: l.contentWidth }),
            class: "btnBoxKAL"
          }, [
            l.showOkBt ? (T(), le(y, {
              key: 0,
              onClick: S,
              class: "form-save-btn",
              loading: l.btnLoading && p(i),
              disabled: l.disabled
            }, {
              default: se(() => [
                we(q(l.okBtTxt || p(A)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])) : fe("", !0),
            l.showCancelBt ? (T(), le(y, {
              key: 1,
              onClick: R,
              class: "form-cancel-btn"
            }, {
              default: se(() => [
                we(q(l.cancelBtTxt || p(A)("r.cancel")), 1)
              ]),
              _: 1
            })) : fe("", !0)
          ], 4)
        ], 4), [
          [ge, l.showOkBt || l.showCancelBt]
        ])
      ], 4);
    };
  }
}), rl = /* @__PURE__ */ pe({
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
    const e = n, l = t, r = K(), i = (S) => {
      (S == null ? void 0 : S.keyCode) === 13 && D();
    }, c = W(() => {
      var S, R;
      if (Array.isArray(l.formData[0])) {
        let x = [];
        for (let $ of l.formData)
          $ && (x = x.concat(
            $.filter((y) => (y == null ? void 0 : y.type) === "custom" || (y == null ? void 0 : y.type) === "input" && y.slotName && y.slotPosition)
          ));
        return x;
      }
      return (R = (S = l.formData) == null ? void 0 : S.filter) == null ? void 0 : R.call(
        S,
        (x) => (x == null ? void 0 : x.type) === "custom" || (x == null ? void 0 : x.type) === "input" && x.slotName && x.slotPosition
      );
    });
    function s() {
      return new Promise((S) => {
        var R, x;
        (x = (R = r.value).resetForm) == null || x.call(R).then(() => {
          S();
        });
      });
    }
    function v() {
      return new Promise((S) => {
        var R, x;
        (x = (R = r.value).refreshFormDom) == null || x.call(R).then(() => {
          S();
        });
      });
    }
    function m() {
      return new Promise((S) => {
        var R, x;
        (x = (R = r.value).reRenderForm) == null || x.call(R).then(() => {
          S();
        });
      });
    }
    function f(S, R) {
      var x, $;
      ($ = (x = r.value).setItemToValGroup) == null || $.call(x, S, R);
    }
    function u(S, R) {
      var x, $;
      ($ = (x = r.value).updateValGroup) == null || $.call(x, S, R);
    }
    function h(S) {
      var R, x;
      (x = (R = r.value).updateFormDataT) == null || x.call(R, S);
    }
    function g() {
      var S, R;
      (R = (S = r.value).validate) == null || R.call(S);
    }
    function k(S) {
      var R, x;
      (x = (R = r.value).reValidate) == null || x.call(R, S);
    }
    function L(S) {
      var R, x;
      (x = (R = r.value).changeLoading) == null || x.call(R, S === void 0 ? !1 : S);
    }
    function _() {
      var S, R;
      return (R = (S = r.value).getValGroup) == null ? void 0 : R.call(S);
    }
    function V(S) {
      e("on-search", S);
    }
    function D() {
      var S, R;
      (R = (S = r.value).submit) == null || R.call(S);
    }
    return We(() => {
      const S = r.value.$el;
      S != null && S.parentNode && S.parentNode.addEventListener("keyup", i);
    }), ot(() => {
      var R;
      const S = (R = r.value) == null ? void 0 : R.$el;
      S != null && S.parentNode && S.parentNode.removeEventListener("keyup", i);
    }), o({
      resetForm: s,
      refreshFormDom: v,
      reRenderForm: m,
      setItemToValGroup: f,
      updateValGroup: u,
      updateFormDataT: h,
      validate: g,
      reValidate: k,
      changeLoading: L,
      getValGroup: _,
      submit: D
    }), (S, R) => (T(), le(Kt, ft({
      ref_key: "formRRef",
      ref: r
    }, S.$attrs, {
      "form-data": l.formData,
      "label-width": l.labelWidth,
      "item-width": l.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": l.showInlineOkBt,
      "inline-ok-bt-txt": p(A)("r.check"),
      "show-inline-clear-bt": l.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: V
    }), ct({ _: 2 }, [
      Ve(p(c), (x) => ({
        name: x.slotName,
        fn: se(({ valGroup: $ }) => [
          Ke(S.$slots, x.slotName, { valGroup: $ })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), Ko = /* @__PURE__ */ pe({
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
    const e = n, l = t, r = K(), i = K(!1), c = K(!1), s = W(() => {
      var y, I;
      if (Array.isArray(l.formData[0])) {
        let O = [];
        for (let ee of l.formData)
          ee && (O = O.concat(
            ee.filter((N) => (N == null ? void 0 : N.type) === "custom" || (N == null ? void 0 : N.type) === "input" && N.slotName && N.slotPosition)
          ));
        return O;
      }
      return (I = (y = l.formData) == null ? void 0 : y.filter) == null ? void 0 : I.call(
        y,
        (O) => (O == null ? void 0 : O.type) === "custom" || (O == null ? void 0 : O.type) === "input" && O.slotName && O.slotPosition
      );
    });
    function v() {
      return new Promise((y) => {
        var I, O;
        (O = (I = r.value).resetForm) == null || O.call(I).then(() => {
          y();
        });
      });
    }
    function m() {
      return new Promise((y) => {
        var I, O;
        (O = (I = r.value).refreshFormDom) == null || O.call(I).then(() => {
          y();
        });
      });
    }
    function f() {
      return new Promise((y) => {
        var I, O;
        (O = (I = r.value).reRenderForm) == null || O.call(I).then(() => {
          y();
        });
      });
    }
    function u(y, I) {
      var O, ee;
      (ee = (O = r.value).setItemToValGroup) == null || ee.call(O, y, I);
    }
    function h(y, I) {
      var O, ee;
      (ee = (O = r.value).updateValGroup) == null || ee.call(O, y, I);
    }
    function g(y) {
      var I, O;
      (O = (I = r.value).updateFormDataT) == null || O.call(I, y);
    }
    function k() {
      var y, I;
      (I = (y = r.value).validate) == null || I.call(y);
    }
    function L(y) {
      var I, O;
      (O = (I = r.value).reValidate) == null || O.call(I, y);
    }
    function _(y) {
      var I, O;
      y !== void 0 && (c.value = !!y, (O = (I = r.value).changeLoading) == null || O.call(I, c.value));
    }
    function V() {
      var y, I;
      return (I = (y = r.value).getValGroup) == null ? void 0 : I.call(y);
    }
    function D() {
      c.value = !0;
    }
    function S() {
      var y, I;
      l.hideCancelBt ? x() : (I = (y = r.value).submit) == null || I.call(y);
    }
    function R() {
      i.value = !0;
    }
    function x() {
      i.value = !1, Re(() => {
        var y, I;
        c.value = !1, (I = (y = r.value).changeLoading) == null || I.call(y, !1);
      }, 1e3);
    }
    function $(y) {
      e(y ? "on-open" : "on-close");
    }
    return o({
      resetForm: v,
      refreshFormDom: m,
      reRenderForm: f,
      setItemToValGroup: u,
      updateValGroup: h,
      updateFormDataT: g,
      validate: k,
      reValidate: L,
      changeLoading: _,
      getValGroup: V,
      submit: S,
      open: R,
      close: x
    }), (y, I) => {
      const O = te("Button"), ee = te("Modal");
      return T(), le(ee, {
        class: _e(["formModal", { hideFooter: l.hideFooter }]),
        title: l.title || p(A)("r.title"),
        modelValue: p(i),
        "onUpdate:modelValue": I[0] || (I[0] = (N) => Fe(i) ? i.value = N : null),
        "mask-closable": !1,
        "footer-hide": l.hideFooter,
        width: l.width,
        onOnVisibleChange: $
      }, {
        footer: se(() => [
          Q(O, {
            onClick: S,
            class: "modal-save-btn",
            loading: l.btnLoading && p(c),
            disabled: l.disabled
          }, {
            default: se(() => [
              we(q(l.okBtTxt || p(A)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled"]),
          l.hideCancelBt ? fe("", !0) : (T(), le(O, {
            key: 0,
            onClick: x,
            class: "modal-cancel-btn"
          }, {
            default: se(() => [
              we(q(l.cancelBtTxt || p(A)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: se(() => [
          Q(Kt, ft({
            ref_key: "formRRef",
            ref: r
          }, y.$attrs, {
            "form-data": l.formData,
            "label-width": l.labelWidth,
            btnLoading: l.btnLoading,
            disabled: l.disabled,
            onOnSubmit: D
          }), ct({ _: 2 }, [
            Ve(p(s), (N) => ({
              name: N.slotName,
              fn: se(({ valGroup: w }) => [
                Ke(y.$slots, N.slotName, { valGroup: w })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading", "disabled"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), zo = /* @__PURE__ */ pe({
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
    const n = o, e = t, l = K(!0), r = K([]), i = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let c = [];
    const s = W(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), v = W(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    Ce(
      () => e.data,
      (k) => {
        l.value = !1;
        let L = [];
        m(k, L), r.value = L, $e(function() {
          l.value = !0, e.inlineLeaf && $e(h);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), Ce(
      () => v.value,
      (k) => {
        let L, _ = "s";
        if (Array.isArray(e.collectVal) ? (L = e.collectVal[0] || "", _ = "a") : L = e.collectVal, !L || JSON.stringify(k) === JSON.stringify(c)) {
          c = [];
          return;
        }
        dt({
          group: r.value,
          condition: (V) => (V == null ? void 0 : V.checked) === !0,
          key: "checked",
          val: !1
        }), dt(_ === "a" ? {
          group: r.value,
          condition: (V) => Ot(k, [L, V == null ? void 0 : V[L]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: r.value,
          condition: (V) => k.indexOf(V == null ? void 0 : V[L]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), Ce(
      () => e.disabled,
      (k) => {
        dt({
          group: r.value,
          condition: (L) => L && L.disableCheckbox !== k,
          key: "disableCheckbox",
          val: k
        }), e.inlineLeaf && $e(h);
      },
      { immediate: !0 }
    );
    function m(k, L = []) {
      for (let _ of k) {
        let V = !1;
        s.value.length > 1 ? V = Jt(v.value, (S) => S[s.value[0]] === _[s.value[0]]) !== void 0 : V = s.value[0] ? v.value.indexOf(_[s.value[0]]) !== -1 : !1;
        let D = {
          name: _ == null ? void 0 : _[e.label],
          expand: !!(e.expandAll || _ != null && _.expand),
          checked: V,
          disableCheckbox: e.disabled
        };
        for (let S of s.value)
          D[S] = _[S];
        L.push(D), _ != null && _.children && _.children.length > 0 && (D.children = [], f(_.children, D.children));
      }
    }
    function f(k, L = []) {
      for (let _ of k) {
        let V = !1;
        s.value.length > 1 ? V = Jt(v.value, (S) => S[s.value[0]] === _[s.value[0]]) !== void 0 : V = s.value[0] ? v.value.indexOf(_[s.value[0]]) !== -1 : !1;
        let D = {
          name: _ == null ? void 0 : _[e.label],
          expand: !!(e.expandAll || _ != null && _.expand),
          checked: V,
          disableCheckbox: e.disabled
        };
        for (let S of s.value)
          D[S] = _[S];
        L.push(D), _ != null && _.children && _.children.length > 0 && (D.children = [], m(_.children, D.children));
      }
    }
    function u(k, {
      data: L
    }) {
      let _ = "", V = !0;
      if (L.children && L.children.length > 0) {
        for (let D of L.children)
          if (D.children !== void 0) {
            V = !1;
            break;
          }
        V && e.inlineLeaf && (_ = "inlineChildXA");
      }
      return k(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: _
        },
        [
          k(
            "span",
            {
              style: {
                fontWeight: L.children ? "bold" : "normal"
              }
            },
            L.name
          )
        ]
      );
    }
    function h(k) {
      if (k) {
        k.expand && $e(h);
        return;
      }
      let L = document.querySelectorAll("#" + i + " .inlineChildXA");
      if (L.length > 0)
        for (let _ of L) {
          let V = _ == null ? void 0 : _.parentElement, D = V == null ? void 0 : V.nextElementSibling;
          if (!D)
            return;
          if (D.tagName !== "BR") {
            let S = V == null ? void 0 : V.parentElement, R = document.createElement("br");
            S == null || S.insertBefore(R, D);
            const x = R.nextElementSibling;
            if (x) {
              const $ = x.children;
              if ($)
                for (let y of $)
                  (y == null ? void 0 : y.className.indexOf("inlineTreeNodeF")) === -1 && y.setAttribute("class", y.className + " inlineTreeNodeF");
            }
          }
        }
    }
    function g(k) {
      let L = [];
      if (e.leaf) {
        for (let _ of k)
          if (!_.children)
            if (Array.isArray(e.collectVal)) {
              let V = {};
              for (let D of e.collectVal)
                V[D] = _[D];
              L.push(V);
            } else
              L.push(_[e.collectVal]);
      } else
        for (let _ of k)
          if (Array.isArray(e.collectVal)) {
            let V = {};
            for (let D of e.collectVal)
              V[D] = _[D];
            L.push(V);
          } else
            L.push(_[e.collectVal]);
      c = L, n("update:modelValue", L), n("on-change", he(L));
    }
    return (k, L) => {
      const _ = te("Tree");
      return p(l) ? (T(), le(_, {
        key: 0,
        id: i,
        class: "checkboxTreeGA",
        data: p(r),
        render: u,
        onOnCheckChange: g,
        onOnToggleExpand: h,
        "show-checkbox": ""
      }, null, 8, ["data"])) : fe("", !0);
    };
  }
}), Uo = { class: "transferBoxRL" }, Go = { class: "leftBoxLLL" }, Ho = { class: "fullHeight flexColumnBox" }, Wo = { class: "notGrow" }, jo = { class: "titleLLL" }, qo = { class: "growFlexItem" }, Xo = { class: "middleBoxLLL" }, Jo = { class: "rightBoxLLL" }, Yo = { class: "fullHeight flexColumnBox" }, Qo = { class: "notGrow" }, Zo = { class: "titleLLL" }, ei = { class: "growFlexItem" }, ti = /* @__PURE__ */ pe({
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
    let r = K({}), i = K({}), c = K([]), s = K([]), v = K(0), m = K(0);
    const f = W(() => ({ ...l.constSearchDataLeft, ...r.value })), u = W(() => ({ ...l.constSearchDataRight, ...i.value })), h = W(() => v.value < 1), g = W(() => c.value.length < 1), k = W(() => s.value.length < 1), L = W(() => m.value < 1), _ = K(), V = K(), D = K(), S = K();
    function R() {
      _.value.resetForm(), V.value.resetForm(), Ee(r.value) || (r.value = {}), Ee(i.value) || (i.value = {}), D.value.clearSelect(), S.value.clearSelect();
    }
    function x() {
      D.value.search(), S.value.search();
    }
    function $(B) {
      c.value = B;
    }
    function y(B) {
      s.value = B;
    }
    function I(B) {
      var J, U, ae, ue, ve;
      v.value = ((U = (J = B == null ? void 0 : B.data) == null ? void 0 : J.page) == null ? void 0 : U.total) || ((ue = (ae = B == null ? void 0 : B.data) == null ? void 0 : ae.data) == null ? void 0 : ue.total) || ((ve = B == null ? void 0 : B.data) == null ? void 0 : ve.total) || (B == null ? void 0 : B.total) || 0, e("on-data-change-l", B);
    }
    function O(B) {
      var J, U, ae, ue, ve;
      m.value = ((U = (J = B == null ? void 0 : B.data) == null ? void 0 : J.page) == null ? void 0 : U.total) || ((ue = (ae = B == null ? void 0 : B.data) == null ? void 0 : ae.data) == null ? void 0 : ue.total) || ((ve = B == null ? void 0 : B.data) == null ? void 0 : ve.total) || (B == null ? void 0 : B.total) || 0, e("on-data-change-r", B);
    }
    function ee(B) {
      typeof l.leftSearchDataFilter == "function" ? r.value = l.leftSearchDataFilter(B) : r.value = B;
    }
    function N(B) {
      typeof l.rightSearchDataFilter == "function" ? i.value = l.rightSearchDataFilter(B) : i.value = B;
    }
    function w() {
      l.addUrl && b("add");
    }
    function X() {
      l.deleteUrl && b("delete");
    }
    function F() {
      l.addAllUrl && l.addUrl && b("addAll");
    }
    function H() {
      l.deleteAllUrl && b("deleteAll");
    }
    function b(B) {
      let J, U, ae = {}, ue = "";
      switch (B) {
        case "add":
          J = l.addMethod, U = l.addUrl, ae = l.addParamsHandle(s.value), ue = A("r.add");
          break;
        case "delete":
          J = l.deleteMethod, U = l.deleteUrl, ae = l.deleteParamsHandle(c.value), ue = A("r.remove");
          break;
        case "addAll":
          J = l.addAllMethod, U = l.addAllUrl, ae = l.addAllParamsHandle(u.value), ue = A("r.addAll");
          break;
        case "deleteAll":
          J = l.deleteAllMethod, U = l.deleteAllUrl, ae = l.deleteAllParamsHandle(f.value), ue = A("r.removeAll");
          break;
      }
      U && J && Xe[J](U, ae, null, [], { spin: !0 }, !1).then((ve) => {
        (ve == null ? void 0 : ve.code) === 0 ? (Ue(ue + A("r.success"), (ve == null ? void 0 : ve.message) || "", "success"), D.value && D.value.getTableData(), S.value && S.value.getTableData(), e("transferred")) : Ue(ue + A("r.failed"), (ve == null ? void 0 : ve.message) || "", "error");
      }).catch(() => {
        Ue(ue + A("r.error"), "", "error");
      });
    }
    return o({
      reset: R,
      search: x
    }), (B, J) => {
      const U = te("Icon"), ae = te("Button");
      return T(), E("div", Uo, [
        M("div", Go, [
          M("div", Ho, [
            M("div", Wo, [
              M("div", jo, q(l.titleLeft || p(A)("r.added")), 1),
              Q(al, null, {
                default: se(() => [
                  Q(rl, {
                    ref_key: "leftFormRef",
                    ref: _,
                    "form-data": l.formDataLeft,
                    "form-rules": l.formRulesLeft,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: ee
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            M("div", qo, [
              Q(il, {
                ref_key: "lTabRef",
                ref: D,
                columns: l.leftTableColumns,
                url: l.leftTableUrl,
                "search-data": p(f),
                onOnSelectionChange: $,
                onOnDataChange: I,
                "init-data": !!(p(Ee)(l.constSearchDataLeft) && l.leftTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: l.usePagePro,
                showTotal: l.showTotal,
                showSizer: l.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ]),
        M("div", Xo, [
          Q(ae, {
            class: "middleBtLLL",
            type: "default",
            onClick: H,
            disabled: p(h)
          }, {
            default: se(() => [
              we(q(p(A)("r.removeAll")) + " ", 1),
              Q(U, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Q(ae, {
            class: "middleBtLLL",
            type: "default",
            onClick: X,
            disabled: p(g)
          }, {
            default: se(() => [
              we(q(p(A)("r.remove")) + " ", 1),
              Q(U, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Q(ae, {
            class: "middleBtLLL",
            type: "primary",
            onClick: w,
            disabled: p(k)
          }, {
            default: se(() => [
              Q(U, { type: "ios-arrow-back" }),
              we(" " + q(p(A)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          Q(ae, {
            class: "middleBtLLL",
            type: "primary",
            onClick: F,
            disabled: p(L)
          }, {
            default: se(() => [
              Q(U, { type: "ios-arrow-back" }),
              we(" " + q(p(A)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        M("div", Jo, [
          M("div", Yo, [
            M("div", Qo, [
              M("div", Zo, q(l.titleRight || p(A)("r.notAdded")), 1),
              Q(al, null, {
                default: se(() => [
                  Q(rl, {
                    ref_key: "rightFormRef",
                    ref: V,
                    "form-data": l.formDataRight,
                    "form-rules": l.formRulesRight,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: N
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            M("div", ei, [
              Q(il, {
                ref_key: "rTabRef",
                ref: S,
                columns: l.rightTableColumns,
                url: l.rightTableUrl,
                "search-data": p(u),
                onOnSelectionChange: y,
                onOnDataChange: O,
                "init-data": !!(p(Ee)(l.constSearchDataRight) && l.rightTableUrl),
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
}), li = { class: "boxLPA" }, ai = { class: "headerJ" }, ni = { class: "firstT borderBoxAS" }, oi = { class: "secondT borderBoxAS" }, ii = { class: "firstCol borderBoxAS" }, si = { class: "secondCol borderBoxAS" }, ri = /* @__PURE__ */ pe({
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
    const n = t, e = o, l = K([]), r = W(() => {
      var f;
      let v = he(n.data), m = he(l.value);
      for (let u of v) {
        let h = 0;
        if (u != null && u.children && !Ee(u.children))
          for (let g of u.children) {
            for (let k = 0, L = m == null ? void 0 : m.length; k < L; k++)
              if (Array.isArray(n.collectVal)) {
                let _ = !0;
                for (let V of n.collectVal)
                  if (((f = m[k]) == null ? void 0 : f[V]) !== (g == null ? void 0 : g[V])) {
                    _ = !1;
                    break;
                  }
                if (_) {
                  g.checked = !0, h++, m.splice(k, 1);
                  break;
                }
              } else if (m[k] === g[n.collectVal]) {
                g.checked = !0, h++, m.splice(k, 1);
                break;
              }
            !g.checked && (g.checked = !1);
          }
        h === 0 ? (u.checked = !1, u.indeterminate = !1) : u.children && h === u.children.length ? (u.checked = !0, u.indeterminate = !1) : (u.checked = !1, u.indeterminate = !0);
      }
      return v;
    });
    Ce(
      () => n.modelValue,
      (v, m) => {
        kt(l.value, v) || kt(v, m) || (l.value = v);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function i(v, m) {
      if (v.children)
        for (let f of v.children)
          f.checked = m;
      c();
    }
    function c() {
      s(r.value, !0);
    }
    function s(v, m) {
      let f = [];
      for (let u of v) {
        if (!m && !n.leaf && u.checked && u.indeterminate === !1)
          if (Array.isArray(n.collectVal)) {
            let h = {};
            for (let g of n.collectVal)
              h[g] = u[g];
            f.push(h);
          } else Y(n.collectVal) === "String" && f.push(u[n.collectVal]);
        if (u.children) {
          for (let h of u.children)
            if (h.checked)
              if (Array.isArray(n.collectVal)) {
                let g = {};
                for (let k of n.collectVal)
                  g[k] = h[k];
                f.push(g);
              } else Y(n.collectVal) === "String" && f.push(h[n.collectVal]);
        }
      }
      m ? (l.value = f, n.leaf ? (e("update:modelValue", f), e("on-change", he(f))) : $e(function() {
        s(r.value);
      })) : (e("update:modelValue", f), e("on-change", he(f)));
    }
    return (v, m) => {
      const f = te("Checkbox");
      return T(), E("div", li, [
        M("div", ai, [
          M("div", ni, q(v.firstTitle || p(A)("r.level.1")), 1),
          M("div", oi, q(v.secondTitle || p(A)("r.level.2")), 1)
        ]),
        (T(!0), E(be, null, Ve(p(r), (u, h) => (T(), E("div", {
          class: "bodyJ",
          key: "checkboxJ" + h
        }, [
          M("div", ii, [
            Q(f, {
              modelValue: u.checked,
              "onUpdate:modelValue": (g) => u.checked = g,
              indeterminate: u.indeterminate,
              onOnChange: (g) => i(u, g),
              disabled: v.disabled
            }, {
              default: se(() => [
                we(q(u[v.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          M("div", si, [
            (T(!0), E(be, null, Ve(u.children, (g, k) => (T(), E("div", {
              class: "secItem",
              key: "secItem" + k
            }, [
              Q(f, {
                modelValue: g.checked,
                "onUpdate:modelValue": (L) => g.checked = L,
                onOnChange: c,
                disabled: v.disabled
              }, {
                default: se(() => [
                  we(q(g[v.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), ui = { class: "boxLPB" }, di = { class: "headerF" }, ci = { class: "firstT borderBoxKa" }, fi = { class: "secondT borderBoxKa" }, pi = { class: "thirdT borderBoxKa" }, mi = { class: "firstCol borderBoxKa" }, hi = { class: "rightBoxAL" }, yi = { class: "secondCol borderBoxKa" }, vi = { class: "thirdCol borderBoxKa" }, gi = /* @__PURE__ */ pe({
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
    const n = o, e = t, l = K([]), r = W(() => {
      let m = he(e.data), f = he(l.value);
      for (let u of m) {
        let h = 0, g = 0;
        if (u != null && u.children && !Ee(u.children))
          for (let k of u.children) {
            let L = 0;
            if (k.children && !Ee(k.children))
              for (let _ of k.children) {
                for (let V = 0, D = f.length; V < D; V++)
                  if (Array.isArray(e.collectVal)) {
                    let S = !0;
                    for (let R of e.collectVal)
                      if (f[V][R] !== _[R]) {
                        S = !1;
                        break;
                      }
                    if (S) {
                      _.checked = !0, L++, f.splice(V, 1);
                      break;
                    }
                  } else if (f[V] === _[e.collectVal]) {
                    _.checked = !0, L++, f.splice(V, 1);
                    break;
                  }
                !_.checked && (_.checked = !1);
              }
            L === 0 ? (k.checked = !1, k.indeterminate = !1) : k.children && L === k.children.length ? (k.checked = !0, k.indeterminate = !1, h++) : (k.checked = !1, k.indeterminate = !0, g++);
          }
        h === 0 && g === 0 ? (u.checked = !1, u.indeterminate = !1) : u.children && h === u.children.length ? (u.checked = !0, u.indeterminate = !1) : (u.checked = !1, u.indeterminate = !0);
      }
      return m;
    });
    Ce(
      () => e.modelValue,
      (m, f) => {
        kt(l.value, m) || kt(m, f) || (l.value = m);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function i(m, f) {
      if (m.children) {
        for (let u of m.children)
          if (u.checked = f, u.children)
            for (let h of u.children)
              h.checked = f;
      }
      s();
    }
    function c(m, f) {
      if (m.children)
        for (let u of m.children)
          u.checked = f;
      s();
    }
    function s() {
      v(r.value, !0);
    }
    function v(m, f) {
      let u = [];
      for (let h of m) {
        if (!f && !e.leaf && (h != null && h.checked) && h.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let g = {};
            for (let k of e.collectVal)
              g[k] = h[k];
            u.push(g);
          } else Y(e.collectVal) === "String" && u.push(h[e.collectVal]);
        if (h != null && h.children)
          for (let g of h.children) {
            if (!f && !e.leaf && g.checked && g.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let k = {};
                for (let L of e.collectVal)
                  k[L] = g[L];
                u.push(k);
              } else Y(e.collectVal) === "String" && u.push(g[e.collectVal]);
            if (g.children) {
              for (let k of g.children)
                if (k.checked)
                  if (Array.isArray(e.collectVal)) {
                    let L = {};
                    for (let _ of e.collectVal)
                      L[_] = k[_];
                    u.push(L);
                  } else Y(e.collectVal) === "String" && u.push(k[e.collectVal]);
            }
          }
      }
      f ? (l.value = u, e.leaf ? (n("update:modelValue", u), n("on-change", he(u))) : $e(function() {
        v(r.value);
      })) : (n("update:modelValue", u), n("on-change", he(u)));
    }
    return (m, f) => {
      const u = te("Checkbox");
      return T(), E("div", ui, [
        M("div", di, [
          M("div", ci, q(m.firstTitle || p(A)("r.level.1")), 1),
          M("div", fi, q(m.secondTitle || p(A)("r.level.2")), 1),
          M("div", pi, q(m.thirdTitle || p(A)("r.level.3")), 1)
        ]),
        (T(!0), E(be, null, Ve(p(r), (h, g) => (T(), E("div", {
          class: "bodyF",
          key: "checkboxJ" + g
        }, [
          M("div", mi, [
            Q(u, {
              modelValue: h.checked,
              "onUpdate:modelValue": (k) => h.checked = k,
              indeterminate: h.indeterminate,
              onOnChange: (k) => i(h, k),
              disabled: m.disabled
            }, {
              default: se(() => [
                we(q(h[m.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          M("div", hi, [
            (T(!0), E(be, null, Ve(h.children, (k, L) => (T(), E("div", {
              class: "rightBoxInner",
              key: "secItem" + L
            }, [
              M("div", yi, [
                Q(u, {
                  modelValue: k.checked,
                  "onUpdate:modelValue": (_) => k.checked = _,
                  indeterminate: k.indeterminate,
                  onOnChange: (_) => c(k, _),
                  disabled: m.disabled
                }, {
                  default: se(() => [
                    we(q(k[m.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              M("div", vi, [
                (T(!0), E(be, null, Ve(k.children, (_, V) => (T(), E("div", {
                  class: "thirdItem",
                  key: "thirdItem" + V
                }, [
                  Q(u, {
                    modelValue: _.checked,
                    "onUpdate:modelValue": (D) => _.checked = D,
                    onOnChange: s,
                    disabled: m.disabled
                  }, {
                    default: se(() => [
                      we(q(_[m.label]), 1)
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
}, Ci = { class: "fullFlowContent" }, Vi = /* @__PURE__ */ pe({
  __name: "WellCard",
  props: {
    title: {},
    fitToContent: { type: Boolean, default: !1 },
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = t, n = W(() => {
      let l = {
        width: o.fitToContent ? "fit-content" : e(o.width),
        height: o.fitToContent ? "fit-content" : e(o.height)
      };
      return o.inline && (l.display = "inline-block"), l;
    });
    function e(l) {
      const r = /^\d+$/;
      return typeof l == "number" || typeof l == "string" && r.test(l) ? l + "px" : l;
    }
    return (l, r) => (T(), E("div", {
      style: ce(p(n))
    }, [
      M("div", {
        class: _e(["wellCardR", { flexColumnBox: !o.fitToContent }])
      }, [
        M("div", {
          class: _e(["panelHeader", { notGrow: !o.fitToContent }])
        }, [
          M("div", bi, q(o.title || p(A)("r.title")), 1),
          M("div", ki, [
            Ke(l.$slots, "bts")
          ])
        ], 2),
        o.fitToContent ? (T(), E("div", wi, [
          Ke(l.$slots, "default")
        ])) : (T(), E("div", _i, [
          M("div", Ci, [
            Ke(l.$slots, "default")
          ])
        ]))
      ], 2)
    ], 4));
  }
}), Si = /* @__PURE__ */ pe({
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
    let l = K(1), r = 1;
    const i = K(""), c = bt([]);
    let s = {}, v = !0, m = !1;
    const f = "scm" + Math.random(), { onCompositionStart: u, onCompositionEnd: h, handleChange: g } = Et(), k = W(() => i.value ? A("r.searchFor") + i.value : e.placeholder || A("r.pInput")), L = W({
      get() {
        return e.modelValue ?? "";
      },
      set(O) {
        if (n("update:modelValue", O ?? ""), e.collectLabel && O !== void 0) {
          let ee = {};
          for (let N of c.value)
            if (N[e.optionsValKey] === O) {
              ee = JSON.parse(JSON.stringify(N));
              break;
            }
          n("on-change", ee);
        }
      }
    }), _ = W(() => e.searchKey ? {
      ...e.searchData,
      current: l.value,
      [e.searchKey]: i.value
    } : {
      ...e.searchData,
      current: l.value
    });
    Ce(
      () => e.getOptions,
      (O) => {
        O ? v && I() : R();
      },
      { immediate: !0 }
    ), Ce(
      () => e.url,
      (O) => {
        O && (m = !0);
      }
    );
    const V = K();
    function D() {
      const O = V.value.$el.querySelector('.ivu-select-input[type="text"]');
      O.addEventListener("compositionstart", u), O.addEventListener("compositionend", h), O.addEventListener("keyup", $);
    }
    function S() {
      var ee, N;
      const O = (N = (ee = V.value) == null ? void 0 : ee.$el) == null ? void 0 : N.querySelector('.ivu-select-input[type="text"]');
      O && (O.removeEventListener("compositionstart", u), O.removeEventListener("compositionend", h), O.removeEventListener("keyup", $));
    }
    function R() {
      v || (L.value = "", v = !0, i.value = "", c.value = [], l.value = 1, r = 1, s = {}, m = !1);
    }
    function x(O) {
      for (let ee of c.value)
        if ((ee == null ? void 0 : ee.label) === O)
          return !0;
      return !1;
    }
    const $ = Dt(function(O) {
      g(() => {
        var N;
        const ee = (N = O == null ? void 0 : O.target) == null ? void 0 : N.value;
        x(ee) || (Pe(ee) ? (m ? R() : (Ee(s) && (s.current = l.value, s.pages = r, s.options = he(c.value)), Pe(L.value) && (L.value = "")), i.value = String(ee), c.value = [], l.value = 1, v = !0, I()) : m ? (R(), I()) : (L.value = "", i.value = "", s.current ? (l.value = s.current, r = s.pages, c.value = he(s.options), s = {}) : I()));
      });
    }, 600);
    ot(() => {
      $.cancel(), S();
    });
    function y() {
      m && R(), l.value < r ? (++l.value, $e(function() {
        I();
      })) : kl.warning({
        background: !0,
        content: A("r.noMore")
      });
    }
    function I() {
      return new Promise((O, ee) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Pe(i.value)) {
            O(!1);
            return;
          }
          Xe.get(e.url, _.value).then((N) => {
            var F;
            v = !1;
            let w = [];
            (F = N == null ? void 0 : N.data) != null && F.records ? (w = N.data.records, r = N.data.pages) : N != null && N.data && Y(N.data) === "Array" ? (w = N.data, r = N.pages) : N != null && N.data && Y(N.data) === "Object" && (w = [N.data], r = 1), typeof e.optionFilter == "function" && Y(e.optionFilter) === "Function" && (w = e.optionFilter(w)), Ee(w) || (w = w.map((H, b) => {
              let B = A("r.optionLabel") + b;
              if (Array.isArray(e.optionsLabelKey)) {
                let J = [];
                for (let U = 1, ae = e.optionsLabelKey.length; U < ae; U++)
                  J.push(H[e.optionsLabelKey[U]]);
                B = `${H[e.optionsLabelKey[0]]}(${String(J)})`;
              } else Kl(e.optionsLabelKey) && (B = H[e.optionsLabelKey]);
              if (e.collectLabel) {
                let J = he(H);
                return delete J.value, delete J.label, {
                  value: H[e.optionsValKey],
                  label: B,
                  ...J
                };
              }
              return {
                value: H[e.optionsValKey],
                label: B
              };
            })), c.value.push(...w);
            let X = {};
            c.value = c.value.filter((H) => X[H == null ? void 0 : H.value] ? !1 : (X[H == null ? void 0 : H.value] = !0, !0)), $e(function() {
              n("update-option-finish");
            }), O(!0);
          }).catch(() => {
            kl.error(A("r.getDataError")), ee(A("r.getDataError"));
          });
        } else
          O(!1);
      });
    }
    return We(D), (O, ee) => {
      const N = te("Option"), w = te("Select"), X = Ft("loadmore");
      return me((T(), le(w, ft({
        modelValue: p(L),
        "onUpdate:modelValue": ee[0] || (ee[0] = (F) => Fe(L) ? L.value = F : null),
        ref_key: "selectScrollSourceRef",
        ref: V,
        "transfer-class-name": f
      }, O.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: p(k),
        disabled: O.disabled
      }), {
        default: se(() => [
          (T(!0), E(be, null, Ve(p(c), (F, H) => (T(), le(N, {
            key: "op" + H,
            value: F == null ? void 0 : F.value,
            label: F == null ? void 0 : F.label,
            disabled: F == null ? void 0 : F.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [X, y, f]
      ]);
    };
  }
}), Ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: oa,
  AsyncCascader: na,
  BtTablePage: il,
  CheckboxGroupThreeClass: gi,
  CheckboxGroupTwoClass: ri,
  CheckboxTree: zo,
  Date: ua,
  EditorPro: da,
  FormGroup: Eo,
  FormModal: Ko,
  FormR: Kt,
  FullPop: qa,
  HeaderBt: Ul,
  Hello: Ja,
  IconTxtBtn: Qt,
  InputMap: aa,
  MonthRange: ra,
  Page404: en,
  PagePro: ta,
  SearchForm: rl,
  SelectInput: la,
  SelectScrollMore: Si,
  ShowHidePanel: al,
  ShowHidePanelB: Gn,
  SideMenu: Bn,
  SideMenuPro: Nn,
  TableIconBtn: Jl,
  TableSearch: Hn,
  TableSetting: Zl,
  TransferBox: ti,
  UploadGroup: sa,
  WellCard: Vi
}, Symbol.toStringTag, { value: "Module" })), Ti = { class: "a4Line aL notPrint" }, Bi = { class: "a4Line aR notPrint" }, Li = { class: "a4Line bL notPrint" }, xi = { class: "a4Line bR notPrint" }, Oi = { class: "topsL notPrint" }, Ii = { class: "topsLTitle" }, Ai = { class: "topsLBtn" }, Pi = { class: "topsLHelp" }, Mi = { key: 0 }, Ri = { key: 1 }, $i = { key: 2 }, Fi = ["innerHTML"], Di = /* @__PURE__ */ pe({
  __name: "PrintModal",
  setup(t) {
    const o = dl(), n = K(), e = K(!1), l = K(!1), r = K(!1), i = K(100), c = K(), s = K(715), v = K(!1), m = K(), f = "tablePrint_" + Date.now().toString(), u = K(""), h = K([]), g = K([]), k = K(!1), L = W(() => ({
      width: s.value + "px"
    })), _ = () => {
      m.value && window.sessionStorage.removeItem("print_" + m.value), window.sessionStorage.removeItem(f), window.close();
    }, V = () => {
      v.value && (v.value = !1);
    }, D = () => {
      k.value = !0;
    }, S = (I) => {
      k.value && (s.value = (I == null ? void 0 : I.layerX) - 20);
    }, R = () => {
      k.value && (k.value = !1);
    }, x = () => {
      v.value = !1;
      let I = window.setTimeout(() => {
        window.clearTimeout(I), window.print();
      }, 100);
    }, $ = (I) => {
      if (typeof c.value == "function")
        return c.value(I);
    }, y = () => {
      var I, O, ee, N, w, X, F;
      if (m.value = (I = o == null ? void 0 : o.params) == null ? void 0 : I.isFrom, m.value) {
        let H = window.sessionStorage.getItem("print_" + m.value);
        if (H) {
          const b = JSON.parse(H);
          if (!b) {
            e.value = !0;
            return;
          }
          if (h.value = b.columns, g.value = b.data, n.value = b.title, u.value = ((O = b.config) == null ? void 0 : O.customClass) || "", l.value = ((ee = b.config) == null ? void 0 : ee.domPrint) || !1, r.value = ((N = b.config) == null ? void 0 : N.autoPrint) || !1, i.value = ((w = b.config) == null ? void 0 : w.autoPrintTimeout) || 100, s.value = ((X = b.config) == null ? void 0 : X.width) || 715, document.title = (n.value || A("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString(), (F = b.funcArr) != null && F.length) {
            for (let B of b.funcArr)
              if (B.name === "spanMethod") {
                c.value = new Function("return " + B.func)();
                break;
              }
          }
        } else
          e.value = !0;
      }
    };
    return We(() => {
      if (r.value) {
        let I = window.setTimeout(() => {
          window.clearTimeout(I), x();
        }, i.value);
      }
      document.addEventListener("click", V), document.addEventListener("mousemove", S), document.addEventListener("mouseup", R);
    }), ot(() => {
      document.removeEventListener("click", V), document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", R);
    }), y(), (I, O) => {
      const ee = te("Table");
      return T(), E("div", {
        class: _e(["tablePrintModal", [p(u)]])
      }, [
        me(M("div", { class: "msgL notPrint" }, q(p(A)("r.printGuide.9")), 513), [
          [ge, p(e)]
        ]),
        me(M("div", Ti, [
          M("p", null, q(p(A)("r.printGuide.7")), 1),
          O[2] || (O[2] = we()),
          M("p", null, q(p(A)("r.printGuide.5")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        me(M("div", Bi, [
          M("p", null, q(p(A)("r.printGuide.7")), 1),
          O[3] || (O[3] = we()),
          M("p", null, q(p(A)("r.printGuide.6")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        me(M("div", Li, [
          M("p", null, q(p(A)("r.printGuide.8")), 1),
          O[4] || (O[4] = we()),
          M("p", null, q(p(A)("r.printGuide.5")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        me(M("div", xi, [
          M("p", null, q(p(A)("r.printGuide.8")), 1),
          O[5] || (O[5] = we()),
          M("p", null, q(p(A)("r.printGuide.6")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        me(M("div", Oi, [
          M("div", Ii, q(p(n) || p(A)("r.print")), 1),
          M("div", Ai, [
            Q(Qt, {
              icon: "md-help-circle",
              name: p(A)("r.help"),
              onClick: O[0] || (O[0] = qt((N) => v.value = !p(v), ["stop"]))
            }, null, 8, ["name"]),
            Q(Qt, {
              icon: "md-print",
              name: p(A)("r.preview"),
              onClick: x
            }, null, 8, ["name"]),
            p(l) ? fe("", !0) : (T(), le(Zl, {
              key: 0,
              modelValue: p(h),
              "onUpdate:modelValue": O[1] || (O[1] = (N) => Fe(h) ? h.value = N : null),
              "s-key": f,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            Q(Jl, {
              icon: "md-close",
              onClick: _,
              title: p(A)("r.close")
            }, null, 8, ["title"])
          ]),
          me(M("div", Pi, [
            p(l) ? fe("", !0) : (T(), E("p", Mi, [
              O[6] || (O[6] = M("span", null, "1. ", -1)),
              M("span", null, q(p(A)("r.printGuide.1")), 1)
            ])),
            p(l) ? fe("", !0) : (T(), E("p", Ri, [
              O[7] || (O[7] = M("span", null, "2. ", -1)),
              M("span", null, q(p(A)("r.printGuide.2")), 1)
            ])),
            p(l) ? (T(), E("p", $i, [
              O[8] || (O[8] = M("span", null, "1. ", -1)),
              M("span", null, q(p(A)("r.printGuide.10")), 1)
            ])) : fe("", !0),
            M("p", null, [
              M("span", null, q(p(l) ? "2. " : "3. "), 1),
              M("span", null, q(p(A)("r.printGuide.3")), 1)
            ]),
            M("p", null, [
              M("span", null, q(p(l) ? "3. " : "4. "), 1),
              M("span", null, q(p(A)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ge, p(v)]
          ])
        ], 512), [
          [ge, !p(e)]
        ]),
        p(l) ? (T(), E("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: ce(p(L))
        }, [
          M("div", {
            class: "settingLine",
            onMousedown: qt(D, ["stop"])
          }, null, 32)
        ], 4)) : fe("", !0),
        p(l) ? (T(), E("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: p(g),
          style: ce(p(L))
        }, null, 12, Fi)) : fe("", !0),
        p(l) ? fe("", !0) : me((T(), le(ee, {
          key: 2,
          class: "tablePW",
          columns: p(h),
          data: p(g),
          "span-method": $,
          border: ""
        }, null, 8, ["columns", "data"])), [
          [ge, !p(e)]
        ])
      ], 2);
    };
  }
});
let nt = null, Tt = null;
function Rl() {
  document.documentElement.style.setProperty("overflow", "auto"), Tt || (Tt = document.createElement("style"), Tt.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(Tt));
}
function Ni(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: Di
  })), nt = t, location.pathname.indexOf("tablePrint") > -1 ? (nt.push(location.pathname), Rl()) : location.hash.indexOf("tablePrint") > -1 && (nt.push(location.hash.replace(/^#/, "")), Rl());
}
function ca(t) {
  return Y(t) === "Object" && (t.hasOwnProperty("width") || (t.width = t.minWidth || 100), t.hasOwnProperty("minWidth") && delete t.minWidth, t.sortable = !1, delete t.__id, t.resizable = !0, t.children && Y(t.children) === "Array" && (t.children = t.children.map(ca))), t;
}
function Ei(t, o, n, e) {
  var m, f, u;
  if (!nt)
    return;
  let l;
  if (!(e != null && e.domPrint)) {
    let h = he(
      t.filter((g) => (g == null ? void 0 : g.key) || (g == null ? void 0 : g.children))
    );
    h[0].type === "selection" && h.shift(), h.length ? l = h.map(ca) : l = [];
  }
  const r = [];
  e && Object.entries(e).forEach(([h, g]) => {
    typeof g == "function" && (r.push({
      name: h,
      func: g.toString().replaceAll(/[\r\n\t]/g, "").replaceAll(/\s{2,}/g, " ")
    }), delete e[h]);
  });
  let i = (f = (m = nt == null ? void 0 : nt.currentRoute) == null ? void 0 : m.value) == null ? void 0 : f.fullPath;
  i && (i = (u = i.replace) == null ? void 0 : u.call(i, /\//g, "_"));
  let c = {
    data: o,
    title: n,
    config: e,
    funcArr: r
  };
  e != null && e.domPrint || (c.columns = l), window.sessionStorage.setItem("print_" + i, JSON.stringify(c));
  const s = nt.resolve({
    name: "tablePrint",
    params: { isFrom: i }
  });
  window.open(s == null ? void 0 : s.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const ml = {
  print: Ei,
  init: Ni
};
function Ki(t = "", o = "", n = {}) {
  n.domPrint = !0, n.width || (n.width = 715), ml.print([], t, o, n);
}
function zi(t) {
  var r, i;
  const o = (...c) => et.apply(this, c), n = o("r.closePreview"), e = o("r.fullImg");
  let l = "previewImg" + Math.floor(Math.random() * 1e7);
  (i = (r = at) == null ? void 0 : r.info) == null || i.call(r, {
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (c) => Oe(
      "div",
      {
        class: "previewModal",
        id: l
      },
      [
        Oe(
          "div",
          {
            class: "previewModalInner"
          },
          [
            Oe("img", {
              src: t,
              alt: e
            }),
            Oe(Aa, {
              type: "md-close",
              title: n,
              class: "previewModalDelete",
              onClick() {
                var s, v;
                (v = (s = at) == null ? void 0 : s.remove) == null || v.call(s);
              }
            })
          ]
        )
      ]
    )
  }), Re(() => {
    var u, h, g, k;
    const c = document.getElementById(l);
    if (!c) return;
    let s = c.parentElement, v = 0, m = null;
    for (; s && v < 4; ) {
      if ((h = (u = s.classList) == null ? void 0 : u.contains) != null && h.call(u, "ivu-modal-content")) {
        m = s;
        break;
      }
      s = s.parentElement, v++;
    }
    m || (m = ((g = c.closest) == null ? void 0 : g.call(c, ".ivu-modal-content")) || null);
    const f = (k = c.parentElement) == null ? void 0 : k.nextSibling;
    m && (m.style.height = "0", m.style.padding = "0"), f && (f.style.display = "none");
  }, 10);
}
const Ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: Xe,
  $swal: Ue,
  $swalConfirm: Ql,
  clearInterval: Sn,
  clearTimeout: Vn,
  domPrint: Ki,
  fullScreenImgByDom: gt,
  fullScreenImgPreview: zi,
  messageBox: ol,
  setInterval: Cn,
  setTimeout: Re,
  tablePrint: ml
}, Symbol.toStringTag, { value: "Module" }));
(() => {
  if (window.wangeditorMenuInit)
    return;
  class t {
    constructor() {
      mt(this, "title");
      mt(this, "iconSvg");
      mt(this, "tag");
      mt(this, "alwaysEnable");
      this.title = et("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
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
      var s, v, m, f, u, h, g, k, L;
      const l = document.getElementById("editor-preview");
      let r = localStorage.getItem("editorPreviewW") || 300, i = localStorage.getItem("editorPreviewH") || 500;
      const c = (s = e == null ? void 0 : e.getHtml) == null ? void 0 : s.call(e);
      if (l) {
        let _ = (h = (u = (f = (m = (v = l.children) == null ? void 0 : v[0]) == null ? void 0 : m.children) == null ? void 0 : f[1]) == null ? void 0 : u.children) == null ? void 0 : h[0], V = (L = (k = (g = l.children) == null ? void 0 : g[0]) == null ? void 0 : k.children) == null ? void 0 : L[1];
        _ && (_.innerHTML = c, _.style.width = r + "px"), V && (V.style.height = i + "px"), l.style.display = "block";
      } else {
        const _ = document.body, V = document.createElement("div");
        V.setAttribute("id", "editor-preview"), V.setAttribute("class", "editor-preview-mask"), V.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${r}' min='200'><span>高</span><input type='number' value='${i}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let D = V.children[0].children[1], S = V.children[0].children[1].children[0], R = V.children[0].children[0].children[0].children[1];
        const x = 40, $ = 70, y = (N) => {
          var F;
          if ((N == null ? void 0 : N.type) === "keyup") {
            let H = !1;
            if (N.key && (H = N.key !== "Enter"), H)
              return;
          }
          let w = (F = N == null ? void 0 : N.target) == null ? void 0 : F.value;
          if (w = Number(w), S.style && S.style.width === w + "px")
            return;
          const X = _.clientWidth;
          w < 250 ? (w = 250, N.target.value = 250) : w > X - x && (w = X - x, N.target.value = X - x), S.style.width = w + "px", localStorage.setItem("editorPreviewW", w);
        };
        R.addEventListener("blur", y), R.addEventListener("keyup", y);
        let I = V.children[0].children[0].children[0].children[3];
        const O = (N) => {
          var F;
          if ((N == null ? void 0 : N.type) === "keyup") {
            let H = !1;
            if (N.key && (H = N.key !== "Enter"), H)
              return;
          }
          let w = (F = N == null ? void 0 : N.target) == null ? void 0 : F.value;
          if (w = Number(w), D.style && D.style.height === w + "px")
            return;
          const X = _.clientHeight;
          w < 300 ? (w = 300, N.target.value = 300) : w > X - $ && (w = X - $, N.target.value = X - $), D.style.height = w + "px", localStorage.setItem("editorPreviewH", w);
        };
        I.addEventListener("blur", O), I.addEventListener("keyup", O), V.children[0].children[0].children[1].addEventListener("click", () => {
          V.style.display = "none";
        }), S.innerHTML = c, S.style.width = r + "px", D.style.height = i + "px", _.append(V);
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
    o.value && !cl(o.value) && (t.style.display = "none");
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
}, ps = At.use, ms = At.i18n, $l = {
  ...Ui,
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
  Fl = !0, Xe.init(o.useStore || o.store, t), Wi.install(t), o.locale && At.use(o.locale), o.i18n && At.i18n(o.i18n), o.router && (_n(o.router), ml.init(o.router)), o.amap && co(o.amap), o.notRegistryGlobal || (Object.keys(Ml).forEach((n) => {
    t.component(n) || t.component(n, Ml[n]);
  }), Object.keys($l).forEach((n) => {
    t.config.globalProperties[n] = $l[n];
  })), t.directive("has") || t.directive("has", Gi), t.directive("loadmore") || t.directive("loadmore", Hi), t.directive("clickOutside") || t.directive("clickOutside", Yl), t.config.globalProperties.fontSizeBase = 14, t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.btTablePageAlign = "center", t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !0, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, hs = { install: ji };
export {
  Xe as $fetch,
  Ue as $swal,
  Ql as $swalConfirm,
  oa as AlCascaderMC,
  na as AsyncCascader,
  il as BtTablePage,
  gi as CheckboxGroupThreeClass,
  ri as CheckboxGroupTwoClass,
  zo as CheckboxTree,
  ua as Date,
  da as EditorPro,
  Eo as FormGroup,
  Ko as FormModal,
  Kt as FormR,
  qa as FullPop,
  Ul as HeaderBt,
  Ja as Hello,
  Qt as IconTxtBtn,
  aa as InputMap,
  ra as MonthRange,
  en as Page404,
  ta as PagePro,
  rl as SearchForm,
  la as SelectInput,
  Si as SelectScrollMore,
  al as ShowHidePanel,
  Gn as ShowHidePanelB,
  Bn as SideMenu,
  Nn as SideMenuPro,
  Jl as TableIconBtn,
  Hn as TableSearch,
  Zl as TableSetting,
  ti as TransferBox,
  sa as UploadGroup,
  Vi as WellCard,
  Sn as clearInterval,
  tl as clearObj,
  Vn as clearTimeout,
  hn as dataFilterOrToUrl,
  rn as decimalDigitsLimit,
  hs as default,
  vn as directivesComponent,
  Ki as domPrint,
  Wl as downloadFileByFormSubmit,
  Jn as downloadFileReaderFile,
  jl as downloadFileWithSpin,
  cs as emptyInput,
  Yn as fakeALinkClick,
  un as fileExport,
  Lt as findCollection,
  nl as findPath,
  nn as formDataHeadConfig,
  gt as fullScreenImgByDom,
  zi as fullScreenImgPreview,
  dn as getColumnsKeys,
  Tl as getFileSrc,
  ea as getFileTypeByName,
  Bl as getFileTypeIconByName,
  Qn as getStringWidth,
  an as has,
  cl as hasPermission,
  ds as htmlDecode,
  us as htmlEncode,
  yn as htmlPrint,
  ms as i18n,
  ji as install,
  el as isClient,
  fn as isEmptyValue,
  yt as isImgByFile,
  mn as isNaN,
  fl as isNumberNaN,
  cn as isNumberValue,
  Pe as isValidValue,
  ps as locale,
  ol as messageBox,
  Y as myTypeof,
  sn as oneOf,
  ll as removeEmptyValue,
  Cn as setInterval,
  Re as setTimeout,
  dt as setValByOption,
  Qe as setValue,
  pl as siblingElems,
  fs as stopBubbling,
  pn as stringLength,
  ml as tablePrint,
  on as toFormData,
  Xn as toHump,
  Gl as toLine,
  ql as tooltipManual,
  Hl as trimObj,
  Et as useComposition
};
//# sourceMappingURL=plugRQw.js.map
