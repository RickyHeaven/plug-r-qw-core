var ya = Object.defineProperty;
var va = (t, o, n) => o in t ? ya(t, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[o] = n;
var mt = (t, o, n) => va(t, typeof o != "symbol" ? o + "" : o, n);
import { getCurrentInstance as $t, defineComponent as fe, resolveComponent as te, createElementBlock as K, openBlock as S, normalizeStyle as de, normalizeClass as _e, createBlock as le, createCommentVNode as ce, renderSlot as Ee, ref as z, computed as W, withDirectives as pe, unref as p, createElementVNode as $, createVNode as Q, toDisplayString as q, withCtx as oe, createTextVNode as we, vShow as ge, resolveDirective as Ft, onMounted as He, nextTick as Fe, onUpdated as ga, onUnmounted as ot, h as Oe, isRef as De, Fragment as be, renderList as Ve, onBeforeMount as El, watch as Ce, mergeModels as ba, useModel as ka, onBeforeUnmount as ul, Teleport as wa, withModifiers as qt, mergeProps as ft, shallowRef as bt, triggerRef as _a, createSlots as ct, toRef as Ca, toValue as Gt } from "vue";
import Va from "deepmerge";
import { debounce as Dt, cloneDeep as me, isPlainObject as st, isObject as Sa, isFunction as Ta, isEmpty as Ne, isNumber as Bt, last as xt, isEqual as kt, isString as Kl, first as Xt, find as Jt, indexOf as bl, findIndex as Ot, remove as Ba } from "lodash-es";
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
    return e.length === 1 && typeof e[0] == "object" && (l = e[0]), (!l || !l.hasOwnProperty) && (l = {}), n === void 0 ? "" : n.replace(Na, (r, i, f, s) => {
      let v;
      return n[s - 1] === "{" && n[s + r.length] === "}" ? f : (v = t(l, f) ? l[f] : null, v ?? "");
    });
  }
  return o;
}
const Ka = Ea();
let It = zl;
const za = {
  zh: zl
};
let wl, _l = {}, Ke, jt = !1, Ua = function(t, o) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, o);
  if (Ke && Ke.global)
    return Ke.global.t(t, o);
  if (Ke && Ke.locale) {
    if (!_l[Ke.locale] || wl != Ke.locale) {
      _l[Ke.locale] = !0;
      let n = Ke.getLocaleMessage(Ke.locale) || {}, e = Va(za[Ke.locale], n, { clone: !0 });
      It = e, Ke.setLocaleMessage(Ke.locale, e), wl = Ke.locale;
    }
    return Ke.hlang(t, o);
  }
};
const Ze = function(t, o) {
  if (jt)
    return "";
  let n = Ua.apply(this, [t, o]);
  if (n != null)
    return n;
  const e = t.split(".");
  let l = It;
  for (let r = 0, i = e.length; r < i; r++) {
    const f = e[r];
    if (n = l[f], r === i - 1) {
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
  Ke = t;
}, At = {
  use: Ga,
  t: Ze,
  i18n: Ha
};
function I(t, o) {
  var e, l, r;
  const n = (r = (l = (e = $t()) == null ? void 0 : e.appContext) == null ? void 0 : l.config) == null ? void 0 : r.globalProperties;
  return Ze.apply(n, [t, o]);
}
const Ul = /* @__PURE__ */ fe({
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
      const f = te("Icon");
      return S(), K("div", {
        class: _e({ headerBtCTM: !0, withIconCTM: n.icon || n.withIcon, disabled: n.disabled }),
        style: de({ color: n.color, borderLeftColor: n.borderColor }),
        onClick: l
      }, [
        n.icon ? (S(), le(f, {
          key: 0,
          size: n.iconSize,
          type: n.icon
        }, null, 8, ["size", "type"])) : ce("", !0),
        Ee(r.$slots, "default")
      ], 6);
    };
  }
});
function xe() {
  var n, e;
  const t = (n = $t()) == null ? void 0 : n.appContext;
  return ((e = t == null ? void 0 : t.config) == null ? void 0 : e.globalProperties) || {};
}
const Wa = { class: "headerTxtAM" }, ja = { class: "contentAM" }, qa = /* @__PURE__ */ fe({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: () => {
      var t;
      return (t = xe()) == null ? void 0 : t.fontSizeBase;
    } },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(t, { expose: o, emit: n }) {
    const e = t, l = n;
    let r = z(!1);
    const i = W(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), f = W(() => ({ zIndex: e.zIndex }));
    function s() {
      r.value = !0, l("on-open");
    }
    function v(m) {
      r.value = !1, l("on-close", m === !0);
    }
    return o({
      open: s,
      close: v
    }), (m, c) => pe((S(), K("div", {
      class: "fullScreenPopBoxAM",
      style: de(p(f))
    }, [
      $("div", {
        class: "headerAM",
        style: de({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: p(i) })
      }, [
        $("span", Wa, q(m.title || p(I)("r.title")), 1),
        Q(Ul, {
          icon: "md-return-left",
          onClick: v
        }, {
          default: oe(() => [
            we(q(p(I)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      $("div", ja, [
        Ee(m.$slots, "default")
      ])
    ], 4)), [
      [ge, p(r)]
    ]);
  }
}), Xa = { class: "msg" }, Ja = /* @__PURE__ */ fe({
  __name: "Hello",
  setup(t) {
    let o = z("Greetings from Ricky.");
    return (n, e) => (S(), K("span", Xa, q(p(o)), 1));
  }
}), Qt = /* @__PURE__ */ fe({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => xe().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const n = t, e = o, l = W(() => {
      var i;
      return Math.floor(n.size / 17 * ((i = xe()) == null ? void 0 : i.fontSizeBase)) + "px";
    });
    function r(i) {
      n.disabled || e("click", i);
    }
    return (i, f) => {
      const s = te("Icon"), v = Ft("has");
      return pe((S(), K("div", {
        class: _e(["tabTopBtnsT", { disabled: n.disabled }]),
        onClick: r,
        style: de({ "font-size": p(l) })
      }, [
        Q(s, {
          type: n.icon,
          size: n.size
        }, null, 8, ["type", "size"]),
        we(" " + q(n.name || p(I)("r.button")), 1)
      ], 6)), [
        [v, i.has]
      ]);
    };
  }
}), Ya = { class: "c404K" }, Qa = { class: "ct404" }, Za = { class: "p404" }, en = /* @__PURE__ */ fe({
  __name: "Page404",
  setup(t) {
    const n = $t().appContext.config.globalProperties.$router;
    function e() {
      n.go(-1);
    }
    return (l, r) => {
      const i = te("Button");
      return S(), K("div", Ya, [
        r[0] || (r[0] = $("div", { class: "t404" }, "404", -1)),
        $("div", Qa, "UH OH! " + q(p(I)("r.pageNotFound")), 1),
        $("div", Za, q(p(I)("r.notFoundMsg")), 1),
        Q(i, {
          class: "bt404",
          onClick: e
        }, {
          default: oe(() => [
            we(q(p(I)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function ze(t, o, n, e = !0) {
  const l = (...r) => Ze.apply(this, r);
  return new Promise((r, i) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let f = l("r.confirm"), s = l("r.cancel"), v = !1, m = "swalConfirmBt", c = "swalCancelBt";
      const u = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let h = "";
      t.text && u.test(Y(t.text)) ? h = "content" : t.text && Y(t.text) === "String" && (h = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (s = t.buttons.cancel.text) && (v = !0), t.buttons.cancel.className && (c = t.buttons.cancel.className), t.buttons.confirm.text && (f = t.buttons.confirm.text), t.buttons.confirm.className && (m = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (s = t.buttons[0], v = !0), t.buttons[1] && (f = t.buttons[1]))), Vt({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [h]: t.text,
        buttons: {
          confirm: {
            text: f,
            value: !0,
            visible: !0,
            className: m
          },
          cancel: {
            text: s,
            value: null,
            visible: v,
            className: c
          }
        },
        closeOnClickOutside: t.closeOnClickOutside ?? !0
      }).then((b) => {
        b && typeof t.onOk == "function" && t.onOk(), r(b);
      }).catch((b) => {
        i(b);
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
const tn = { class: "tableTooltip" }, ln = /* @__PURE__ */ fe({
  __name: "TableTooltip",
  props: {
    content: { type: [String, Number, Boolean, null] }
  },
  setup(t) {
    const o = t, n = z(), e = z(), l = z(!0);
    let r = null;
    const i = z(200);
    function f() {
      const s = l.value ? n.value : e.value;
      if (!s)
        return;
      let v = document.createRange();
      v.setStart(s, 0), v.setEnd(s, s.childNodes.length);
      const m = v.getBoundingClientRect().width;
      i.value = s.offsetWidth * 2, l.value = m < s.offsetWidth, v = null;
    }
    return He(() => {
      f(), r = Dt(() => {
        Fe(function() {
          f();
        });
      }, 200), window.addEventListener("resize", r);
    }), ga(f), ot(() => {
      r == null || r.cancel(), window.removeEventListener("resize", r);
    }), (s, v) => (S(), K("div", tn, [
      p(l) ? (S(), K("span", {
        key: 0,
        ref_key: "spanRef",
        ref: n,
        class: "contentText"
      }, q(o.content), 513)) : (S(), le(p(La), {
        key: 1,
        content: typeof o.content == "boolean" ? String(o.content) : o.content ?? "",
        "max-width": p(i),
        transfer: ""
      }, {
        default: oe(() => [
          $("span", {
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
function Ye(t, o, n) {
  De(t[o]) ? t[o].value = n : t[o] = n;
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
  const o = me(t);
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
  let e, l = "notFoundC", r = function(i, f) {
    if (Array.isArray(i)) {
      if (Y(f) === "Function" && f(i))
        return l = i, [];
      for (let s of i) {
        if (l !== "notFoundC")
          break;
        if (Y(f) === "Function" && f(s) || s === f)
          return l = s, [i.indexOf(s)];
        if (Y(s) === "Array" || Y(s) === "Object") {
          let v = r(s, f);
          if (v !== void 0)
            return [i.indexOf(s), ...v];
        }
      }
    } else if (Y(i) === "Object") {
      if (Y(f) === "Function" && f(i))
        return l = i, [];
      for (let s in i) {
        if (l !== "notFoundC")
          break;
        if (i.hasOwnProperty(s)) {
          if (Y(f) === "Function" && f(s) || i[s] === f)
            return l = i[s], [s];
          if (Y(i[s]) === "Object" || Y(i[s]) === "Array") {
            let v = r(i[s], f);
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
    let r = Object.keys(window.g).filter((i) => {
      var f;
      return ((f = i == null ? void 0 : i.indexOf) == null ? void 0 : f.call(i, "URL")) > -1;
    }).map((i) => {
      var f;
      return (f = i.replace) == null ? void 0 : f.call(i, "URL", "");
    });
    for (let i of r) {
      let f = new RegExp("^/" + i + "(?=/.*$)", "i");
      if (f.test(t) && window.g[i + "URL"]) {
        l = window.g[i + "URL"] + t.replace(f, "");
        break;
      }
    }
  }
  if (je.setAttribute("action", l), st(o)) {
    for (let r in o)
      if (o.hasOwnProperty(r) && (o[r] || o[r] === 0 || o[r] === !1 || o[r] === "")) {
        let i = document.createElement("input");
        i.setAttribute("type", "hidden"), i.setAttribute("name", r), i.setAttribute("value", o[r]), je.appendChild(i);
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
  Pt(!0);
  try {
    let l = t;
    if (window != null && window.g) {
      let c = Object.keys(window.g).filter((u) => (u == null ? void 0 : u.indexOf("URL")) > -1).map((u) => u == null ? void 0 : u.replace("URL", ""));
      for (let u of c) {
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
      const c = new URLSearchParams();
      for (let u in o)
        o.hasOwnProperty(u) && (o[u] || o[u] === 0 || o[u] === !1 || o[u] === "") && c.append(u, o[u]);
      l += (l.includes("?") ? "&" : "?") + c.toString();
    }
    ["post", "put"].includes(n.toLowerCase()) && (r.headers = {
      "Content-Type": "application/json"
    }, r.body = JSON.stringify(o));
    const i = await fetch(l, r);
    if (!i.ok)
      throw new Error("下载失败");
    let f = e || "download";
    if (!e) {
      let c = i.headers.get("Content-Disposition");
      if (c) {
        c = decodeURIComponent(c);
        const u = c.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        u && u[1] && (f = u[1].replace(/['"]/g, ""));
      } else {
        const u = l.split("?")[0], h = u.substring(u.lastIndexOf("/") + 1);
        h && h.includes(".") && (f = decodeURIComponent(h));
      }
    }
    const s = await i.blob(), v = window.URL.createObjectURL(s), m = document.createElement("a");
    m.href = v, m.download = f, document.body.appendChild(m), m.click(), document.body.removeChild(m), window.URL.revokeObjectURL(v);
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
        var f;
        return (i == null ? void 0 : i.key) && ((f = r == null ? void 0 : r.indexOf) == null ? void 0 : f.call(r, i.title)) !== -1;
      }).map((i) => i.key);
    } else
      e = o.map((r) => r == null ? void 0 : r.key);
  } else
    e = [];
  return n || (e = String(e)), e;
}
function Me(t) {
  return t != null && t !== "";
}
function cn(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function ql(t, o = !1, n = "") {
  return function(e, l) {
    var i, f;
    let r;
    if (Array.isArray(t)) {
      let s = [];
      for (let v of t)
        Me((i = l.row) == null ? void 0 : i[v]) && s.push(l.row[v]);
      r = s.join(n);
    } else typeof t == "function" ? r = t(l) : r = (f = l.row) == null ? void 0 : f[t];
    return Oe(ln, { content: o ? r === "" ? "--" : r ?? "--" : r });
  };
}
function fn(t) {
  if (st(t)) {
    for (let o in t)
      if (t.hasOwnProperty(o) && Me(t[o]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let o of t)
      if (Me(o))
        return !1;
    return !0;
  }
  return !Me(t);
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
      Array.isArray(n) || st(n) ? o.push(ll(n)) : Me(n) && o.push(n);
  } else if (st(t))
    for (let n in t)
      t.hasOwnProperty(n) && (Array.isArray(t[n]) || st(t[n]) ? o[n] = ll(t[n]) : Me(t[n]) && (o[n] = t[n]));
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
  return pe(t, n);
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
  isValidValue: Me,
  myTypeof: Y,
  oneOf: sn,
  removeEmptyValue: ll,
  setValByOption: dt,
  setValue: Ye,
  siblingElems: pl,
  stringLength: pn,
  toFormData: on,
  toLine: Gl,
  tooltipManual: ql,
  trimObj: Hl
}, Symbol.toStringTag, { value: "Module" })), bn = { class: "groupBoxRP" }, kn = ["onClick"], wn = /* @__PURE__ */ fe({
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
      var m, c, u, h, b, k, B, C;
      (m = r == null ? void 0 : r.preventDefault) == null || m.call(r);
      let f = r == null ? void 0 : r.target;
      if (i && !i.children && !f.classList.contains("active")) {
        o.push(i.path);
        return;
      }
      let s = f.parentNode, v = pl(s);
      for (let V of v) {
        (u = (c = V == null ? void 0 : V.classList) == null ? void 0 : c.remove) == null || u.call(c, "open");
        const N = (h = V == null ? void 0 : V.querySelectorAll) == null ? void 0 : h.call(V, ".open");
        if (N && Array.isArray(N))
          for (let T of N)
            (k = (b = T == null ? void 0 : T.classList) == null ? void 0 : b.remove) == null || k.call(b, "open");
      }
      (C = (B = s == null ? void 0 : s.classList) == null ? void 0 : B.toggle) == null || C.call(B, "open");
    }
    return (r, i) => {
      const f = te("Icon"), s = te("sideMenuGroup", !0);
      return S(), K("ul", bn, [
        (S(!0), K(be, null, Ve(n.data, (v, m) => (S(), K(be, {
          key: (v == null ? void 0 : v.path) + m
        }, [
          v ? (S(), K("li", {
            key: 0,
            class: _e({ dropItemRP: v.children })
          }, [
            $("div", {
              class: _e(["menuTxtR", e(v)]),
              onClick: (c) => l(c, v),
              style: de({ paddingLeft: v.level * 20 + "px" })
            }, [
              v != null && v.icon ? (S(), le(f, {
                key: 0,
                class: "menuIcoL",
                custom: "iconfont " + v.icon
              }, null, 8, ["custom"])) : ce("", !0),
              $("span", null, q((v == null ? void 0 : v.name) || "-- no name --"), 1)
            ], 14, kn),
            v.children ? (S(), le(s, {
              key: 0,
              data: v.children,
              "path-name": n.pathName
            }, null, 8, ["data", "path-name"])) : ce("", !0)
          ], 2)) : ce("", !0)
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
}, $e = function(t, o) {
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
}, Tn = { class: "menuListR" }, Bn = /* @__PURE__ */ fe({
  __name: "SideMenu",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { expose: o, emit: n }) {
    const e = t, l = n, r = dl(), i = z(!0), f = z(), s = z(), v = W(() => i.value ? I("r.hideMenu") : I("r.showMenu")), m = W(() => i.value ? "ios-arrow-back" : "ios-arrow-forward");
    El(() => {
      let h = localStorage.getItem("menuDisplayR") || "";
      h !== "" ? i.value = JSON.parse(h) : (i.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), Ce(
      () => r.path,
      (h) => {
        f.value = h, Fe(() => {
          $e(u, 10);
        });
      },
      { immediate: !0 }
    );
    function c(h) {
      typeof h == "boolean" ? i.value = h : i.value = !i.value, localStorage.setItem("menuDisplayR", JSON.stringify(i.value)), l("on-change", i.value);
    }
    function u() {
      var b, k, B, C, V;
      let h = s.value.querySelectorAll(".dropItemRP");
      for (let N of h)
        (b = N == null ? void 0 : N.querySelector) != null && b.call(N, ".active") && !((B = (k = N.classList) == null ? void 0 : k.contains) != null && B.call(k, "open")) && ((V = (C = N.classList) == null ? void 0 : C.add) == null || V.call(C, "open"));
    }
    return o({ showHideMenu: c }), (h, b) => {
      const k = te("Icon");
      return S(), K("div", {
        ref_key: "menuRef",
        ref: s,
        class: _e(["menuBoxRP", "cannotSelect", { light: h.light }])
      }, [
        pe($("div", Tn, [
          Q(wn, {
            data: e.data,
            pathName: p(f)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ge, p(i)]
        ]),
        Q(k, {
          type: p(m),
          size: 25,
          class: _e([{ showIco: !p(i) }, "menuShowHideIco"]),
          title: p(v),
          onClick: c,
          color: p(i) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 2);
    };
  }
}), Ln = { class: "groupBoxRX" }, xn = ["onMouseenter"], On = ["onClick"], In = /* @__PURE__ */ fe({
  __name: "SideMenuProGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const o = Nt(), n = t, e = z("");
    function l(s) {
      let v = "menuTxtR ";
      return (s == null ? void 0 : s.path) === n.pathName && (v += "active "), v;
    }
    function r(s, v) {
      var c;
      (c = s == null ? void 0 : s.preventDefault) == null || c.call(s);
      let m = s == null ? void 0 : s.target;
      v && !v.children && !m.classList.contains("active") && o.push(v.path);
    }
    function i(s, v) {
      var m;
      (m = s == null ? void 0 : s.preventDefault) == null || m.call(s), e.value = v == null ? void 0 : v.path;
    }
    function f(s) {
      var v;
      (v = s == null ? void 0 : s.preventDefault) == null || v.call(s), e.value = "";
    }
    return (s, v) => {
      const m = te("Icon"), c = te("SideMenuProGroup", !0);
      return S(), K("ul", Ln, [
        (S(!0), K(be, null, Ve(n.data, (u, h) => {
          var b;
          return S(), K("li", {
            key: (u == null ? void 0 : u.path) + h,
            class: _e({ dropItemRX: u == null ? void 0 : u.children }),
            onMouseenter: (k) => i(k, u),
            onMouseleave: v[0] || (v[0] = (k) => f(k))
          }, [
            $("div", {
              class: _e(l(u)),
              onClick: (k) => r(k, u),
              style: de({ paddingLeft: u.level * 20 + "px" })
            }, [
              we(q((u == null ? void 0 : u.name) || "-- no name --") + " ", 1),
              pe(Q(m, {
                class: "dropIcoRX",
                type: "ios-arrow-forward",
                size: 16
              }, null, 512), [
                [ge, u.children && u.children.length > 0]
              ])
            ], 14, On),
            ((b = u == null ? void 0 : u.children) == null ? void 0 : b.length) > 0 ? pe((S(), le(c, {
              key: 0,
              class: "rightChildRX",
              data: u == null ? void 0 : u.children,
              "path-name": s.pathName
            }, null, 8, ["data", "path-name"])), [
              [ge, p(e) === (u == null ? void 0 : u.path)]
            ]) : ce("", !0)
          ], 42, xn);
        }), 128))
      ]);
    };
  }
}), An = { class: "groupBoxRX" }, Pn = ["onClick"], Xl = /* @__PURE__ */ fe({
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
      var c, u, h, b, k, B, C, V, N, T, R, L, F, y;
      (c = r == null ? void 0 : r.preventDefault) == null || c.call(r);
      let f = r == null ? void 0 : r.target;
      if (i && !i.children && !f.classList.contains("active")) {
        o.push(i.path);
        return;
      }
      const s = (u = f == null ? void 0 : f.querySelector) == null ? void 0 : u.call(f, ".dropIcoRX"), v = f.parentNode, m = pl(v);
      for (let O of m) {
        (b = (h = O == null ? void 0 : O.classList) == null ? void 0 : h.remove) == null || b.call(h, "open");
        const x = (k = O == null ? void 0 : O.querySelector) == null ? void 0 : k.call(O, ".dropIcoRX");
        (C = (B = x == null ? void 0 : x.classList) == null ? void 0 : B.remove) == null || C.call(B, "open");
        const ee = (V = O == null ? void 0 : O.querySelectorAll) == null ? void 0 : V.call(O, ".open");
        for (let E of ee)
          (T = (N = E == null ? void 0 : E.classList) == null ? void 0 : N.remove) == null || T.call(N, "open");
      }
      (L = (R = v == null ? void 0 : v.classList) == null ? void 0 : R.toggle) == null || L.call(R, "open"), (y = (F = s == null ? void 0 : s.classList) == null ? void 0 : F.toggle) == null || y.call(F, "open");
    }
    return (r, i) => {
      const f = te("Icon");
      return S(), K("ul", An, [
        (S(!0), K(be, null, Ve(n.data, (s, v) => (S(), K("li", {
          key: (s == null ? void 0 : s.path) + v,
          class: _e({ dropItemRX: s == null ? void 0 : s.children, open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu })
        }, [
          $("div", {
            class: _e(e(s)),
            onClick: (m) => l(m, s),
            style: de({ paddingLeft: s.level * 20 + "px" })
          }, [
            Q(f, {
              class: "menuIcoL",
              custom: "iconfont " + (s.icon || "icon-r-menu-default")
            }, null, 8, ["custom"]),
            $("span", null, q((s == null ? void 0 : s.name) || "-- no name --"), 1),
            pe(Q(f, {
              class: _e(["dropIcoRX", { open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu }]),
              type: "ios-arrow-forward"
            }, null, 8, ["class"]), [
              [ge, s.children && s.children.length > 0]
            ])
          ], 14, Pn),
          s.children ? (S(), le(In, {
            key: 0,
            data: s.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : ce("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Mn = { class: "groupBoxRX" }, Rn = ["onMouseenter"], $n = ["onClick"], Fn = /* @__PURE__ */ fe({
  __name: "SideIcoMenu",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const o = Nt(), n = t, e = z("");
    function l(s) {
      let v = "menuTxtR ";
      return (s == null ? void 0 : s.path) === n.pathName && (v += "active "), v;
    }
    function r(s, v) {
      var c;
      (c = s == null ? void 0 : s.preventDefault) == null || c.call(s);
      let m = s == null ? void 0 : s.target;
      v && !v.children && !m.classList.contains("active") && o.push(v.path);
    }
    function i(s, v) {
      var m;
      (m = s == null ? void 0 : s.preventDefault) == null || m.call(s), e.value = v == null ? void 0 : v.path;
    }
    function f(s) {
      var v;
      (v = s == null ? void 0 : s.preventDefault) == null || v.call(s), e.value = "";
    }
    return (s, v) => {
      const m = te("Icon");
      return S(), K("ul", Mn, [
        (S(!0), K(be, null, Ve(n.data, (c, u) => (S(), K("li", {
          key: (c == null ? void 0 : c.path) + u,
          class: _e({ dropItemRX: c.children }),
          onMouseenter: (h) => i(h, c),
          onMouseleave: v[0] || (v[0] = (h) => f(h))
        }, [
          $("div", {
            class: _e(l(c)),
            onClick: (h) => r(h, c)
          }, [
            Q(m, {
              class: "menuIcoM",
              custom: "iconfont " + (c.icon || "icon-r-menu-default"),
              size: "20"
            }, null, 8, ["custom"])
          ], 10, $n),
          pe(Q(Xl, {
            class: "rightTwoMenu",
            data: [c],
            pathName: n.pathName,
            fromIcoMenu: ""
          }, null, 8, ["data", "pathName"]), [
            [ge, p(e) === (c == null ? void 0 : c.path)]
          ])
        ], 42, Rn))), 128))
      ]);
    };
  }
}), Dn = { class: "menuListR" }, Nn = /* @__PURE__ */ fe({
  __name: "SideMenuPro",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { expose: o, emit: n }) {
    const e = t, l = n, r = dl(), i = z(!0), f = z(), s = z(), v = W(() => i.value ? I("r.hideMenu") : I("r.showMenu")), m = W(() => i.value ? "iconfont icon-r-menu-hide" : "iconfont icon-r-menu-open");
    El(() => {
      let h = localStorage.getItem("menuDisplayRPro") || "";
      h !== "" ? i.value = JSON.parse(h) : (i.value = !0, localStorage.setItem("menuDisplayRPro", JSON.stringify(!0)));
    }), Ce(
      () => r.path,
      (h) => {
        f.value = h, Fe(() => {
          $e(u, 10);
        });
      },
      { immediate: !0 }
    );
    function c(h) {
      typeof h == "boolean" ? i.value = h : i.value = !i.value, localStorage.setItem("menuDisplayRPro", JSON.stringify(i.value)), l("on-change", i.value);
    }
    function u() {
      var b, k, B, C, V, N, T, R, L, F, y, O, x, ee, E, w, X, D, g, P, M, G, J, re, ye, ve, Ie, Le, se, Te, Ae, et, Xe, H, U, he, ke, Se, ue;
      let h = s.value.querySelectorAll(".dropItemRX");
      for (let ne of h) {
        const Re = (k = (b = ne == null ? void 0 : ne.childNodes[0]) == null ? void 0 : b.querySelector) == null ? void 0 : k.call(b, ".dropIcoRX");
        (B = ne == null ? void 0 : ne.querySelector) != null && B.call(ne, ".active") ? (N = (V = (C = ne == null ? void 0 : ne.childNodes[1]) == null ? void 0 : C.classList) == null ? void 0 : V.contains) != null && N.call(V, "rightChildRX") ? (L = (R = (T = ne == null ? void 0 : ne.childNodes[0]) == null ? void 0 : T.classList) == null ? void 0 : R.contains) != null && L.call(R, "activeR") || (y = ne == null ? void 0 : (F = ne.childNodes[0].classList).add) == null || y.call(F, "activeR") : ((x = (O = ne == null ? void 0 : ne.classList) == null ? void 0 : O.contains) != null && x.call(O, "open") || (E = (ee = ne.classList).add) == null || E.call(ee, "open"), Re && !((X = (w = Re == null ? void 0 : Re.classList) == null ? void 0 : w.contains) != null && X.call(w, "open")) && ((g = (D = Re.classList).add) == null || g.call(D, "open"))) : (G = (M = (P = ne == null ? void 0 : ne.childNodes[1]) == null ? void 0 : P.classList) == null ? void 0 : M.contains) != null && G.call(M, "rightChildRX") ? (ye = (re = (J = ne == null ? void 0 : ne.childNodes[0]) == null ? void 0 : J.classList) == null ? void 0 : re.contains) != null && ye.call(re, "activeR") && ((Ie = ne == null ? void 0 : (ve = ne.childNodes[0].classList).remove) == null || Ie.call(ve, "activeR")) : ((se = (Le = ne == null ? void 0 : ne.classList) == null ? void 0 : Le.contains) != null && se.call(Le, "open") && !((Ae = (Te = ne == null ? void 0 : ne.classList) == null ? void 0 : Te.contains) != null && Ae.call(Te, "fromIcoMenu")) && ((Xe = (et = ne.classList).remove) == null || Xe.call(et, "open")), (U = (H = Re == null ? void 0 : Re.classList) == null ? void 0 : H.contains) != null && U.call(H, "open") && !((ke = (he = Re == null ? void 0 : Re.classList) == null ? void 0 : he.contains) != null && ke.call(he, "fromIcoMenu")) && ((ue = (Se = Re.classList).remove) == null || ue.call(Se, "open")));
      }
    }
    return o({ showHideMenu: c }), (h, b) => {
      const k = te("Icon");
      return S(), K("div", {
        ref_key: "menuProRef",
        ref: s,
        class: _e(["menuBoxRPro", "cannotSelect", { light: h.light }])
      }, [
        pe($("div", Dn, [
          Q(Xl, {
            data: e.data,
            pathName: p(f)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ge, p(i)]
        ]),
        pe(Q(Fn, {
          class: "icoMenuR",
          data: h.data,
          pathName: p(f)
        }, null, 8, ["data", "pathName"]), [
          [ge, !p(i)]
        ]),
        Q(k, {
          custom: p(m),
          size: 14,
          class: _e([{ showIco: !p(i) }, "menuShowHideIco"]),
          title: p(v),
          onClick: c
        }, null, 8, ["custom", "class", "title"])
      ], 2);
    };
  }
}), En = ["title"], Jl = /* @__PURE__ */ fe({
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
      const f = te("Icon"), s = Ft("has");
      return pe((S(), K("div", {
        class: _e(["tableBtnsG", { disabled: e.disabled }]),
        onClick: l,
        title: e.title || p(I)("r.button")
      }, [
        Q(f, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, En)), [
        [s, e.has]
      ]);
    };
  }
}), Kn = { class: "contentX" }, zn = { class: "arrowA" }, al = /* @__PURE__ */ fe({
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
      return S(), K("div", {
        style: de(p(e))
      }, [
        pe($("div", Kn, [
          Ee(l.$slots, "default")
        ], 512), [
          [ge, o.value]
        ]),
        $("div", zn, [
          $("div", {
            class: "btA",
            onClick: r[0] || (r[0] = (f) => o.value = !o.value)
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
}), Un = { class: "contentZ" }, Gn = /* @__PURE__ */ fe({
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
    return (i, f) => (S(), K("div", {
      style: de(p(r))
    }, [
      pe($("div", Un, [
        Ee(i.$slots, "default")
      ], 512), [
        [ge, p(l)]
      ])
    ], 4));
  }
});
function Et() {
  const t = z(!1);
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
const Hn = /* @__PURE__ */ fe({
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
    const { onCompositionStart: r, onCompositionEnd: i, handleSearch: f } = Et(), s = W({
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
    function c() {
      f(() => {
        l || (l = !0, n("on-search", s.value), $e(() => {
          l = !1;
        }, 2e3));
      });
    }
    return (u, h) => {
      const b = te("Input"), k = te("icon");
      return S(), K("div", {
        class: "tableSearchV",
        style: de({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Ee(u.$slots, "default", {}, () => [
          Q(b, {
            modelValue: p(s),
            "onUpdate:modelValue": h[0] || (h[0] = (B) => De(s) ? s.value = B : null),
            style: de({ width: e.width }),
            search: "",
            onCompositionstart: p(r),
            onCompositionend: p(i),
            onOnSearch: c,
            class: "searchInputC",
            placeholder: e.placeholder || p(I)("r.pInput")
          }, null, 8, ["modelValue", "style", "onCompositionstart", "onCompositionend", "placeholder"])
        ]),
        pe($("span", {
          class: "sbt",
          onClick: h[1] || (h[1] = (B) => v.value = !p(v)),
          style: de({ color: e.btnColor })
        }, [
          Q(k, {
            type: p(m),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          we(q(p(I)("r.adSearch")), 1)
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
  const r = (...i) => Ze.apply(this, i);
  ze.call(this, {
    title: t === null ? r("r.info.title") : t,
    text: o === null ? r("r.info.text") : o,
    icon: n === null ? "warning" : n,
    onOk: e,
    buttons: [r("r.cancel")],
    closeOnClickOutside: l
  });
}
const Wn = { class: "tabSetF" }, jn = { class: "cannotSelect" }, qn = { class: "topCheck" }, Zl = /* @__PURE__ */ fe({
  __name: "TableSetting",
  props: {
    modelValue: { default: () => [] },
    sKey: {},
    width: { default: "240px" },
    bg: { default: () => xe().tableSettingBg },
    placement: { default: "bottom-end" },
    defaultCheck: { type: Boolean, default: !1 },
    storage: { default: "localStorage" },
    transfer: { type: Boolean, default: () => xe().tableSettingTransfer },
    eventsEnabled: { type: Boolean, default: () => xe().tableSettingEventsEnabled }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: o }) {
    var y, O, x, ee, E;
    const n = o, e = t, l = z(), r = z(), i = z(!0), f = z(!1), s = z(!1), v = z([]), m = W(() => {
      var X;
      let w = I("r.unknown");
      return ((X = e.modelValue) == null ? void 0 : X.length) > v.value.length && (v.value = me(e.modelValue)), v.value.map((D) => {
        let g = { label: (D == null ? void 0 : D.title) || w };
        return D != null && D.disableShowSetting && (g.disabled = !0), g;
      });
    }), c = W(() => m.value.filter((w) => w == null ? void 0 : w.disabled)), u = W({
      get() {
        var w, X;
        return (X = (w = e.modelValue) == null ? void 0 : w.map) == null ? void 0 : X.call(w, (D) => (D == null ? void 0 : D.title) || I("r.unknown"));
      },
      set(w) {
        let X = v.value.filter((D) => {
          for (let g of w)
            if (g === (D == null ? void 0 : D.title))
              return !0;
          return !1;
        });
        n("update:modelValue", X);
      }
    }), h = (E = (ee = (x = (O = (y = $t()) == null ? void 0 : y.appContext) == null ? void 0 : O.config) == null ? void 0 : x.globalProperties) == null ? void 0 : ee.$i18n) == null ? void 0 : E.locale;
    let b = null;
    He(() => {
      let w = I("r.unknown"), X = L();
      X ? u.value = JSON.parse(decodeURI(X)) : e.defaultCheck && (u.value = e.modelValue.filter((D) => D == null ? void 0 : D.showSettingCheck).map((D) => (D == null ? void 0 : D.title) || w)), Fe(function() {
        !l.value || !r.value || (b = new Pa(l.value, r.value, {
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
          onUpdate: (D) => {
            var g;
            if (D != null && D.popper && ((g = D.instance) != null && g.popper)) {
              const P = k(D), { needChange: M } = P;
              if (M) {
                const { height: G } = P, J = D.instance.popper;
                J.style && (J.style.height = `${G}px`);
              }
            }
          }
        }));
      }), $e(() => {
        var D;
        s.value = !0, (D = b == null ? void 0 : b.update) == null || D.call(b), Fe(function() {
          s.value = !1;
        });
      }, 0);
    }), ul(function() {
      var w;
      (w = b == null ? void 0 : b.destroy) == null || w.call(b);
    });
    function k(w) {
      var M, G;
      const { height: X } = w.popper, D = w.instance.popper, g = window.innerHeight;
      let P = 0;
      if ((M = D.childNodes) != null && M.length)
        for (let J = 0; J < D.childNodes.length; J++)
          P += (G = D.childNodes[J]) == null ? void 0 : G.offsetHeight;
      return g < X - 10 || X < P ? {
        needChange: !0,
        height: g - 10 < P ? g - 10 : P
      } : { needChange: !1 };
    }
    function B(w) {
      w.length === m.value.length ? (i.value = !1, f.value = !0) : w.length > c.value.length ? (i.value = !0, f.value = !1) : (i.value = !1, f.value = !1);
    }
    Ce(() => u.value, B, {
      immediate: !0,
      deep: !0
    });
    function C() {
      s.value && (F() && Ql(I("r.notSave"), "", "warning", N), s.value = !1);
    }
    function V() {
      s.value ? C() : (s.value = !0, Fe(function() {
        var w;
        (w = b == null ? void 0 : b.update) == null || w.call(b);
      }));
    }
    function N() {
      h ? window[e.storage].setItem(e.sKey + "_" + h, encodeURI(JSON.stringify(u.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(u.value))), C();
    }
    function T(w) {
      var X, D;
      if (s.value) {
        if (e.transfer) {
          const g = r.value;
          if (g === (w == null ? void 0 : w.target) || (X = g == null ? void 0 : g.contains) != null && X.call(g, w == null ? void 0 : w.target))
            return;
        }
        (D = w == null ? void 0 : w.preventDefault) == null || D.call(w), C();
      }
    }
    function R() {
      i.value ? f.value = !1 : f.value = !f.value, i.value = !1, f.value ? u.value = m.value.map((w) => w == null ? void 0 : w.label) : u.value = c.value.map((w) => w == null ? void 0 : w.label);
    }
    function L() {
      let w;
      return h ? w = window[e.storage].getItem(e.sKey + "_" + h) : w = window[e.storage].getItem(e.sKey), w;
    }
    function F() {
      var X;
      let w = L();
      if (w) {
        if (w = JSON.parse(decodeURI(w)), (w == null ? void 0 : w.length) !== ((X = u.value) == null ? void 0 : X.length))
          return !0;
        for (let D of w)
          if (u.value.indexOf(D) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (w, X) => {
      const D = te("Icon"), g = te("Checkbox"), P = te("CheckboxGroup");
      return pe((S(), K("div", Wn, [
        $("div", {
          ref_key: "buttonRef",
          ref: l,
          class: "tabSetBt",
          onClick: V
        }, [
          Q(D, {
            type: "md-settings",
            size: "17"
          }),
          $("span", jn, q(p(I)("r.tabSetting")), 1)
        ], 512),
        (S(), le(wa, {
          to: "body",
          disabled: !e.transfer
        }, [
          pe($("div", {
            ref_key: "popperRef",
            ref: r,
            class: "tabSetCard",
            style: de({ width: e.width, backgroundColor: e.bg })
          }, [
            $("div", qn, [
              Q(g, {
                indeterminate: p(i),
                modelValue: p(f),
                "onUpdate:modelValue": X[0] || (X[0] = (M) => De(f) ? f.value = M : null),
                onClick: qt(R, ["prevent"])
              }, {
                default: oe(() => [
                  we(q(p(I)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              $("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: N
              }, [
                X[2] || (X[2] = $("span", { class: "iconfont icon-r-save" }, null, -1)),
                $("span", null, q(p(I)("r.save")), 1)
              ])
            ]),
            Q(P, {
              modelValue: p(u),
              "onUpdate:modelValue": X[1] || (X[1] = (M) => De(u) ? u.value = M : null)
            }, {
              default: oe(() => [
                (S(!0), K(be, null, Ve(p(m), (M, G) => (S(), le(g, {
                  class: "setItem",
                  label: M && M.label,
                  key: "tabSet_" + e.sKey + G,
                  disabled: M && M.disabled
                }, null, 8, ["label", "disabled"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ], 4), [
            [ge, p(s)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [p(Yl), T]
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
        let r = t, i = me(l);
        if (o(r))
          return n && r[n] && i.push(r[n]), i;
        if (r[e] && !Ne(r[e])) {
          n && r[n] && i.push(r[n]);
          let f = nl({
            group: r[e],
            condition: o,
            pathKey: n,
            childKey: e,
            path: i
          });
          if (!Ne(f))
            return f;
        }
      } else if (Array.isArray(t))
        for (let r of t) {
          let i = me(l);
          if (o(r))
            return n && r[n] ? i.push(r[n]) : i.push(String(t.indexOf(r))), i;
          if (r[e] && r[e].length > 0) {
            n && r[n] ? i.push(r[n]) : i.push(String(t.indexOf(r)));
            let f = nl({
              group: r[e],
              condition: o,
              pathKey: n,
              childKey: e,
              path: i
            });
            if (!Ne(f))
              return f;
          }
        }
    } else if (Array.isArray(t))
      for (let r of t) {
        let i = me(l);
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
const We = /* @__PURE__ */ new Map();
let Zn = 0;
function ol({
  height: t,
  width: o = 416,
  title: n,
  content: e,
  onOk: l,
  onCancel: r,
  onClose: i,
  okText: f,
  cancelText: s,
  noWarnIcon: v,
  footerAlign: m,
  cancelBt: c = !0
}) {
  const u = (...V) => Ze.apply(this, V);
  let b = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", k = Y(e) === "String";
  const B = typeof e == "function", C = "msgbox_" + ++Zn;
  We.set(C, !1), at.warning({
    width: o,
    footerHide: !0,
    render: () => Oe(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: b
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
                      We.get(C) || (at.remove(), We.delete(C), i && Y(i) === "Function" && i());
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
                Oe("div", { class: "msgBoxConO" }, B ? [e(Oe)] : e || u("r.info.text"))
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
                      var N, T, R, L, F, y, O, x, ee;
                      if (l && typeof l == "function") {
                        const E = l();
                        if (E && Y(E) === "Promise") {
                          We.set(C, !0);
                          const w = (V == null ? void 0 : V.currentTarget) || (V == null ? void 0 : V.target);
                          if (w) {
                            (T = (N = w.classList) == null ? void 0 : N.add) == null || T.call(N, "ivu-btn-loading"), (L = (R = w.nextSibling) == null ? void 0 : R.setAttribute) == null || L.call(R, "disabled", "disabled");
                            const X = (O = (y = (F = w.parentElement) == null ? void 0 : F.parentElement) == null ? void 0 : y.querySelector) == null ? void 0 : O.call(y, ".titleN .closeN");
                            (ee = (x = X == null ? void 0 : X.classList) == null ? void 0 : x.add) == null || ee.call(x, "disabled");
                          }
                          Promise.resolve(E).then(() => {
                            We.set(C, !1), at.remove(), We.delete(C);
                          }).catch(() => {
                            We.set(C, !1), at.remove(), We.delete(C);
                          });
                        } else
                          at.remove(), We.delete(C);
                      }
                    }
                  },
                  () => [
                    Oe("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Oe("span", f || u("r.confirm"))
                  ]
                ),
                Oe(
                  Ht,
                  {
                    class: ["cancelBtN", !c && "hide"],
                    onClick() {
                      We.get(C) || (at.remove(), We.delete(C), Y(r) === "Function" && r && r());
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
const Ll = (...t) => Ze.apply(Rt, t);
let Ge = Yt.create({
  baseURL: eo,
  withCredentials: !0
  // 允许携带cookie
});
function to() {
  console.info(
    "store为空，请在安装插件时传入store实例，vuex：app.use(plugRQw,{store})，Pinia：app.use(plugRQw,{useStore})"
  );
}
Ge.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function xl() {
  var t, o;
  if (Ge.store)
    if (typeof Ge.store == "function") {
      const n = Ge.store();
      n.logout && n.logout();
    } else
      (o = (t = Ge.store) == null ? void 0 : t.dispatch) == null || o.call(t, "logout");
  else
    to();
}
Ge.interceptors.response.use(
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
  return new Promise((f, s) => {
    switch (t) {
      case "get":
        Ge.get(o, { params: n }).then((m) => {
          let c = tt(m, e, l, r);
          c ? f(c) : s(m);
        }).catch((m) => {
          tt({}, e, l, r), s(m);
        });
        break;
      case "delete":
        let v = i ? "params" : "data";
        Ge.delete(o, { [v]: n }).then((m) => {
          let c = tt(m, e, l, r);
          c ? f(c) : s(m);
        }).catch((m) => {
          tt({}, e, l, r), s(m);
        });
        break;
      case "post":
        Ge.post(o, n, r).then((m) => {
          let c = tt(m, e, l, r);
          c ? f(c) : s(m);
        }).catch((m) => {
          tt({}, e, l, r), s(m);
        });
        break;
      case "put":
        Ge.put(o, n, r).then((m) => {
          let c = tt(m, e, l, r);
          c ? f(c) : s(m);
        }).catch((m) => {
          tt({}, e, l, r), s(m);
        });
        break;
    }
  });
}
function St(t, o, n = {}, e, l, r, i) {
  return new Promise((f, s) => {
    var v;
    if (o) {
      r && r.spin && Pt(!0);
      let m = o;
      if (window != null && window.g) {
        const h = window.g;
        let b = Object.keys(h).filter((k) => {
          var B;
          return ((B = k == null ? void 0 : k.indexOf) == null ? void 0 : B.call(k, "URL")) > -1;
        }).map((k) => {
          var B;
          return (B = k.replace) == null ? void 0 : B.call(k, "URL", "");
        });
        for (let k of b) {
          let B = new RegExp("^/" + k + "(?=/.*$)", "i");
          if (B.test(o) && h[k + "URL"]) {
            m = h[k + "URL"] + o.replace(B, "");
            break;
          }
        }
      }
      let c;
      if (((v = r == null ? void 0 : r.headers) == null ? void 0 : v["Content-Type"]) === "multipart/form-data")
        c = n;
      else if (Array.isArray(n) ? c = [] : c = {}, n && !Ne(n))
        if (Array.isArray(n)) {
          c = [];
          for (let h of n)
            (h || h === 0 || h === !1 || h === "" && r && !r.noEmptyStr || h === null && (r != null && r.keepNull)) && c.push(h);
        } else {
          c = {};
          for (let h in n)
            n.hasOwnProperty(h) && (n[h] || n[h] === 0 || n[h] === !1 || n[h] === "" && r && !r.noEmptyStr || n[h] === null && (r != null && r.keepNull)) && (c[h] = n[h]);
        }
      let u = t.toLowerCase();
      lo(u, m, c, e, l, r, i).then((h) => {
        f(h);
      }).catch((h) => {
        s(h);
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
    Ge.store = t, Rt = o.config.globalProperties;
  },
  post(t, o, n, e, l) {
    return new Promise((r, i) => {
      St("post", t, o, n, e, l).then((f) => {
        r(f);
      }).catch((f) => {
        i(f);
      });
    });
  },
  put(t, o, n, e, l) {
    return new Promise((r, i) => {
      St("put", t, o, n, e, l).then((f) => {
        r(f);
      }).catch((f) => {
        i(f);
      });
    });
  },
  get(t, o, n, e, l) {
    return new Promise((r, i) => {
      St("get", t, o, n, e, l).then((f) => {
        r(f);
      }).catch((f) => {
        i(f);
      });
    });
  },
  delete(t, o, n, e, l, r = !0) {
    return new Promise((i, f) => {
      St("delete", t, o, n, e, l, r).then((s) => {
        i(s);
      }).catch((s) => {
        f(s);
      });
    });
  },
  all: Yt.all,
  spread: Yt.spread,
  config: Ge
}, ao = {
  key: 0,
  class: "pageTotal"
}, no = {
  key: 1,
  class: "pageProSize"
}, ta = /* @__PURE__ */ fe({
  __name: "PagePro",
  props: {
    modelValue: { default: 1 },
    total: { default: 0 },
    pageSize: { default: 10 },
    size: { default: "default" },
    pageSizeOpts: { default: () => {
      var t;
      return ((t = xe()) == null ? void 0 : t.pageSizes) || [10, 20, 50, 100];
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = xe()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = xe()) == null ? void 0 : t.pageShowSizer;
    } },
    transfer: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change", "on-page-size-change"],
  setup(t, { emit: o }) {
    var u;
    const n = o, e = z(), l = t, r = ((u = xe == null ? void 0 : xe()) == null ? void 0 : u.fontSizeBase) || 14, i = z(16), f = W({
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
        n("on-page-size-change", h), f.value !== 1 && (f.value = 1);
      }
    }), v = W(() => {
      const h = Qn(String(l.total || 0), r) + i.value + 2;
      return h < 32 ? 32 : h;
    });
    Ce(
      v,
      (h) => {
        Fe(function() {
          c(h);
        });
      },
      { immediate: !0 }
    );
    function m() {
      var C, V, N;
      const h = (N = (V = (C = e.value) == null ? void 0 : C.$el) == null ? void 0 : V.querySelector) == null ? void 0 : N.call(V, "input");
      if (!h)
        return 16;
      const b = window.getComputedStyle(h), k = b == null ? void 0 : b.paddingLeft, B = b == null ? void 0 : b.paddingRight;
      return !k || !B ? 16 : Number(k.replace("px", "")) + Number(B.replace("px", ""));
    }
    function c(h) {
      var k, B, C;
      const b = (C = (B = (k = e.value) == null ? void 0 : k.$el) == null ? void 0 : B.querySelector) == null ? void 0 : C.call(B, "input");
      b != null && b.style && (b.style.width = `${h}px`);
    }
    return He(() => {
      i.value = m();
    }), (h, b) => {
      const k = te("Page"), B = te("Option"), C = te("Select");
      return S(), K("div", {
        class: _e(["pagePro", { pageProDefault: l.size === "default" }])
      }, [
        l.showTotal ? (S(), K("span", ao, q(p(I)("r.total") + " ") + q(l.total) + q(" " + p(I)("r.items")), 1)) : ce("", !0),
        Q(k, {
          ref_key: "pageRef",
          ref: e,
          modelValue: p(f),
          "onUpdate:modelValue": b[0] || (b[0] = (V) => De(f) ? f.value = V : null),
          "page-size": p(s),
          total: l.total,
          size: l.size,
          "page-size-opts": l.pageSizeOpts,
          disabled: l.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        l.showSizer ? (S(), K("div", no, [
          Q(C, {
            modelValue: p(s),
            "onUpdate:modelValue": b[1] || (b[1] = (V) => De(s) ? s.value = V : null),
            size: l.size,
            transfer: l.transfer,
            disabled: l.disabled
          }, {
            default: oe(() => [
              (S(!0), K(be, null, Ve(l.pageSizeOpts, (V) => (S(), le(B, {
                value: V,
                key: V
              }, {
                default: oe(() => [
                  we(q(V) + " " + q(p(I)("r.page")), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size", "transfer", "disabled"])
        ])) : ce("", !0)
      ], 2);
    };
  }
}), oo = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, io = { class: "topBtn" }, so = { class: "tableContainer growFlexItem" }, ro = { class: "fullHeight relativeBox" }, uo = { class: "pageContainer" }, il = /* @__PURE__ */ fe({
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
      return (t = xe()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = xe()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = xe()) == null ? void 0 : t.pageShowSizer;
    } },
    pageSize: { default: 10 },
    pageComponentSize: { default: "default" },
    noElevator: { type: Boolean, default: !1 }
  },
  emits: ["on-selection-change", "on-data-change"],
  setup(t, { expose: o, emit: n }) {
    var Xe;
    const e = n;
    ({ ...xa });
    const l = t, r = ((Xe = xe()) == null ? void 0 : Xe.pageSizes) || [10, 20, 50, 100], i = z(l.data), f = z(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || l.pageSize
    ), s = z(1), v = z(0);
    let m = [], c, u, h = z(l.orderKey), b = z(l.orderDefault);
    const k = z(300), B = W(() => {
      for (let H of l.columns)
        if (H != null && H.fixed)
          return !0;
      return !1;
    }), C = W(() => l.selectionFixed || B.value), V = W(() => {
      let H = {
        ...l.searchData,
        current: s.value,
        size: f.value
      };
      return l.sortable === "custom" && (l.orderKeyFormat === "underline" ? H[b.value] = Gl(h.value) : l.orderKeyFormat === "camelcase" && (H[b.value] = Xn(h.value))), H;
    }), N = W(() => {
      let H = l.columns.filter((U) => U && U.type !== "selection");
      if (l.selection || l.radio) {
        let U;
        l.radio ? U = {
          title: " ",
          width: 65,
          render: (he, ke) => Oe(Oa, {
            modelValue: ke.row.btChecked
          })
        } : U = {
          type: "selection",
          width: 60
        }, l.selectionFixed && (U.fixed = l.selectionFixed), H.unshift(U);
      }
      return H.forEach((U) => {
        var he;
        U && (l.sortable === "custom" ? U.key && U.sortable !== !0 && U.sortable !== !1 && (U.sortable = "custom") : U.sortable = !1, U.align || (U.align = ((he = xe()) == null ? void 0 : he.btTablePageAlign) || "center"));
      }), H.forEach((U) => {
        U != null && U.key && U.render === void 0 && (U.tooltip ? U.render = ql(U.key, l.tableEmptyTdHandle) : U.render = (he, ke) => {
          let Se = "";
          return U != null && U.key && (Se = ke.row[U.key]), l.tableEmptyTdHandle ? Oe("span", Se === "" ? "--" : Se ?? "--") : Oe("span", Se);
        });
      }), H;
    }), T = W({
      get() {
        return i.value.map((H, U) => Object.assign({}, H, {
          btKey: "bt-" + U,
          btChecked: !!H.btChecked
        }));
      },
      set(H) {
        i.value = H;
      }
    }), R = W(() => m.map((H) => H == null ? void 0 : H.id)), L = W(() => m.map((H) => H == null ? void 0 : H.btKey)), F = z(), y = z();
    Ce(() => l.searchData, O, { deep: !0 }), Ce(
      () => l.orderDefault,
      (H) => {
        b.value = H;
      }
    ), Ce(
      () => l.orderKey,
      (H) => {
        h.value = H;
      }
    );
    function O() {
      s.value = 1, Le();
    }
    function x() {
      l.initData && Le();
    }
    function ee(H) {
      i.value.unshift(me(H)), $e(() => {
        var U, he;
        (he = (U = F.value) == null ? void 0 : U.clickCurrentRow) == null || he.call(U, 0);
      }, 100);
    }
    function E(H, U, he) {
      let ke = null;
      if (typeof U == "number" ? ke = U : U && (ke = u), ke !== null) {
        let Se = i.value[ke];
        for (let ue in H)
          H.hasOwnProperty(ue) && (Se[ue] = H[ue]);
        he && $e(() => {
          var ue, ne;
          (ne = (ue = F.value) == null ? void 0 : ue.clickCurrentRow) == null || ne.call(ue, ke);
        }, 10);
      }
    }
    function w(H) {
      i.value.splice(H, 1), $e(() => {
        var U, he;
        (he = (U = F.value) == null ? void 0 : U.clickCurrentRow) == null || he.call(U, 0);
      }, 100);
    }
    function X(H, U) {
      var he, ke;
      H.btChecked && l.radio || (l.selection || l.radio) && l.rowClickSelect && ((ke = (he = F.value) == null ? void 0 : he.toggleSelect) == null || ke.call(he, U));
    }
    function D(H, U) {
      c = U.btKey, u = Number(U.btKey.split("-")[1]), l.radio && (i.value[u].btChecked = !0);
    }
    function g(H) {
      if (l.radio)
        for (let U of T.value)
          U != null && U.btKey && U.btKey !== c && (i.value[Number(U.btKey.split("-")[1])].btChecked = !1);
      m = H, e("on-selection-change", H);
    }
    function P() {
      return me(m);
    }
    function M() {
      Le();
    }
    function G(H) {
      f.value = H, localStorage.setItem("btPageSize", String(H)), s.value === 1 && Le();
    }
    function J({ key: H, order: U }) {
      U === "normal" ? (h.value = l.orderKey, b.value = l.orderDefault) : (h.value = H, b.value = U), s.value = 1, Ie();
    }
    function re(H) {
      var he, ke, Se, ue, ne, Re, it, pt;
      const U = H;
      if (typeof U == "number")
        ye(), u = U, c = (ke = (he = T.value) == null ? void 0 : he[U]) == null ? void 0 : ke.btKey, (ue = (Se = F.value) == null ? void 0 : Se.clickCurrentRow) == null || ue.call(Se, U);
      else if (Array.isArray(U)) {
        if (l.radio || !l.selection)
          return;
        ye();
        for (let Je of U)
          (Re = (ne = F.value) == null ? void 0 : ne.clickCurrentRow) == null || Re.call(ne, Je);
      } else if (typeof U == "function")
        for (let Je = 0; Je < T.value.length; Je++) {
          const Ct = T.value[Je];
          U(Ct) && ((pt = (it = F.value) == null ? void 0 : it.clickCurrentRow) == null || pt.call(it, Je));
        }
    }
    function ye() {
      var H, U;
      if (l.radio) {
        if (L.value.length > 0 && T.value.length > 0) {
          let he = L.value[0].split("-")[1];
          T.value[he].btChecked = !1;
        }
      } else
        (U = (H = F.value) == null ? void 0 : H.selectAll) == null || U.call(H, !1);
      m.length > 0 && (m = [], e("on-selection-change", [])), c = null, u = null;
    }
    function ve() {
      i.value = [], ye(), s.value = 1, v.value = 0;
    }
    function Ie(H, U, he) {
      return new Promise((ke) => {
        H && (b.value = H), U && (h.value = U), l.url ? qe[l.method](l.url, V.value, "", [], { spin: l.getDataLoading }).then((Se) => {
          var ne, Re;
          let ue;
          he || ye(), typeof l.dataHandler == "function" ? ue = l.dataHandler(Se) : ue = Se, ue.data ? (ue.data.records || ue.data.records === null ? i.value = ue.data.records || [] : ue.data.page ? (ue.data.page.records || ue.data.page.records === null) && (i.value = ue.data.page.records || []) : ue.data.data ? (ue.data.data.records || ue.data.data.records === null) && (i.value = ue.data.data.records || []) : i.value = ue.data, v.value = ((ne = ue.data.page) == null ? void 0 : ne.total) || ((Re = ue.data.data) == null ? void 0 : Re.total) || ue.data.total || ue.total || 0, v.value === 0 && s.value > 1 && i.value && i.value.length === 0 ? s.value = 1 : s.value > 1 && v.value <= (s.value - 1) * f.value && (s.value--, Fe(function() {
            Ie(H, U);
          })), e("on-data-change", ue), ke(ue)) : (console.warn("请求返回数据有误，无法使用"), ve(), e("on-data-change", ue));
        }).catch((Se) => {
          ye(), ve(), e("on-data-change", Se);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Le(H, U, he) {
      l.radio && (H || l.rowClickNum !== -1) ? Ie(U, he, H).then(() => {
        i.value.length > 0 && $e(() => {
          var ke, Se, ue, ne;
          H ? (Se = (ke = F.value) == null ? void 0 : ke.clickCurrentRow) == null || Se.call(ke, u || 0) : (ne = (ue = F.value) == null ? void 0 : ue.clickCurrentRow) == null || ne.call(ue, l.rowClickNum);
        }, 10);
      }) : Ie();
    }
    function se() {
      k.value < 50 ? $e(se, 100) : $e(Te, 10);
    }
    function Te() {
      var H;
      k.value = ((H = y.value) == null ? void 0 : H.clientHeight) || 0;
    }
    function Ae() {
      var H, U;
      Te(), (U = (H = F.value) == null ? void 0 : H.handleResize) == null || U.call(H);
    }
    const et = Dt(Ae, 300);
    return He(() => {
      x(), C.value && (se(), window.addEventListener("resize", et));
    }), ul(() => {
      et.cancel(), C.value && window.removeEventListener("resize", et);
    }), o({
      dataS: T,
      selectedIds: R,
      addRow: ee,
      setRowData: E,
      deleteRow: w,
      getSelected: P,
      selectRow: re,
      clearSelect: ye,
      clearTableData: ve,
      getTableData: Ie,
      getDataAndClickRow: Le
    }), (H, U) => {
      const he = te("Table"), ke = te("Page");
      return S(), K("div", oo, [
        pe($("div", io, [
          Ee(H.$slots, "tableSetting"),
          Ee(H.$slots, "topMsg"),
          Ee(H.$slots, "topBtnGroup")
        ], 512), [
          [ge, l.showTopRow]
        ]),
        $("div", so, [
          $("div", ro, [
            $("div", {
              ref_key: "tableContainerLOI",
              ref: y,
              class: "fullFlowContent"
            }, [
              Q(he, ft({
                ref_key: "tableRef",
                ref: F
              }, H.$attrs, {
                height: p(C) && p(k) || null,
                class: { noBorderTable: l.noBorderTable, fullHeightTable: !p(C), lightHeadO: l.lightHead },
                columns: p(N),
                data: p(T),
                "highlight-row": l.radio || l.highlightRow,
                onOnSelect: D,
                onOnSelectionChange: g,
                onOnSortChange: J,
                onOnRowClick: X
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        pe($("div", uo, [
          l.usePagePro ? (S(), le(ta, {
            key: 0,
            modelValue: p(s),
            "onUpdate:modelValue": U[0] || (U[0] = (Se) => De(s) ? s.value = Se : null),
            total: p(v),
            showTotal: l.showTotal,
            pageSize: p(f),
            showSizer: l.showSizer,
            pageSizeOpts: p(r),
            size: l.pageComponentSize,
            onOnChange: M,
            onOnPageSizeChange: G
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (S(), le(ke, {
            key: 1,
            modelValue: p(s),
            "onUpdate:modelValue": U[1] || (U[1] = (Se) => De(s) ? s.value = Se : null),
            total: p(v),
            pageSize: p(f),
            pageSizeOpts: p(r),
            showSizer: l.showSizer,
            showTotal: l.showTotal,
            size: l.pageComponentSize,
            showElevator: !l.noElevator,
            onOnChange: M,
            onOnPageSizeChange: G
          }, null, 8, ["modelValue", "total", "pageSize", "pageSizeOpts", "showSizer", "showTotal", "size", "showElevator"]))
        ], 512), [
          [ge, !l.noPage]
        ])
      ], 512);
    };
  }
}), la = /* @__PURE__ */ fe({
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
    const n = o, e = t, { onCompositionStart: l, onCompositionEnd: r, handleChange: i } = Et(), f = W({
      get() {
        var h;
        return (h = e.modelValue) == null ? void 0 : h.key;
      },
      set(h) {
        let b = {
          key: h,
          val: null
        };
        f.value && f.value !== h && (b.beforeKey = f.value), n("update:modelValue", b), n("on-change", b);
      }
    }), s = W({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(h) {
        n("update:modelValue", {
          key: f.value,
          val: h
        });
      }
    }), v = W(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), m = W(() => ({
      width: typeof e.itemWidth == "number" ? e.itemWidth + "px" : e.itemWidth
    }));
    function c(h) {
      i(() => {
        h != null && h.target && h.target.value !== void 0 && u({
          key: f.value,
          val: h.target.value
        });
      });
    }
    const u = Dt((h) => {
      n("on-change", h);
    }, 500);
    return ot(() => {
      u.cancel();
    }), (h, b) => {
      const k = te("Option"), B = te("Select"), C = te("Input");
      return S(), K("div", null, [
        Q(B, {
          modelValue: p(f),
          "onUpdate:modelValue": b[0] || (b[0] = (V) => De(f) ? f.value = V : null),
          style: de(p(v)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: oe(() => [
            (S(!0), K(be, null, Ve(e.selectOption, (V, N) => (S(), le(k, {
              value: V == null ? void 0 : V.val,
              label: V == null ? void 0 : V.label,
              key: "selectInputOp" + (V == null ? void 0 : V.value) + N,
              style: de({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        Q(C, {
          modelValue: p(s),
          "onUpdate:modelValue": b[1] || (b[1] = (V) => De(s) ? s.value = V : null),
          placeholder: e.placeholder || p(I)("r.pInput"),
          style: de(p(m)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onCompositionstart: p(l),
          onCompositionend: p(r),
          onOnChange: c
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
}, aa = /* @__PURE__ */ fe({
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
    const n = o, e = t, l = z(""), r = z([]), i = W({
      get() {
        let w;
        return e.modelValue ? e.modelValue.name ? w = me(e.modelValue) : w = {
          ...e.modelValue,
          name: null
        } : w = {
          name: null
        }, w;
      },
      set(w) {
        n("update:modelValue", me(w));
      }
    }), f = W(() => Bt(e.width) ? e.width + "px" : e.width), s = W(() => Bt(e.height) ? e.height + "px" : e.height ? e.height : Bt(e.width) ? e.width * 0.66 + "px" : "200px"), v = W(() => ({
      width: f.value,
      position: "relative"
    })), m = W(() => e.inputInMap ? {
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
    Ce(
      () => e.modelValue,
      (w) => {
        if (w != null && w.name && (l.value = w.name), e.showMap && w && w.lng && w.lat) {
          if (!R || !L)
            return;
          ee({
            lng: w.lng,
            lat: w.lat,
            name: w.name
          });
        }
      }
    );
    const c = "mapId" + Math.floor(Math.random() * 1e9), u = z(null), h = z(null);
    let b;
    const { onCompositionStart: k, onCompositionEnd: B, handleSearch: C } = Et();
    function V() {
      h.value && h.value.clientHeight < 10 || !h.value ? $e(V, 300) : $e(y, 100);
    }
    function N() {
      var w;
      (w = e.modelValue) != null && w.name && (l.value = e.modelValue.name);
    }
    let T, R, L, F;
    function y() {
      Wt.load({
        key: Ol("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((w) => {
        T = w, R = new T.Map(c).on("complete", () => {
          var X, D;
          L = new T.Geocoder(), (X = e.modelValue) != null && X.lng && ((D = e.modelValue) != null && D.lat) && ee({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
        });
      });
    }
    function O() {
      C(() => {
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
            F || (F = new w.Autocomplete({
              city: "全国",
              type: ""
            })), F.search(l.value, (X, D) => {
              X === "complete" && D.info === "OK" ? r.value = D.tips.slice(0, 10).filter(
                (g) => {
                  var P, M;
                  return g.name && (g.address || ((P = g.location) == null ? void 0 : P.lng) && ((M = g.location) == null ? void 0 : M.lat));
                }
              ).map((g) => {
                var P, M;
                return {
                  name: g.name,
                  address: g.address,
                  lng: (P = g.location) == null ? void 0 : P.lng,
                  lat: (M = g.location) == null ? void 0 : M.lat
                };
              }) : (r.value = [], console.warn("地址搜索失败", D));
            });
          });
        }
      });
    }
    function x(w) {
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
      })) : w.name && (e.showMap ? L == null || L.getLocation(w.name, (X, D) => {
        var g;
        if (X === "complete" && D.info === "OK" && ((g = D.geocodes) == null ? void 0 : g.length) > 0) {
          const P = D.geocodes[0].location;
          ee({
            name: w.name,
            lng: P.lng,
            lat: P.lat
          }), i.value = {
            name: w.name,
            lng: P.lng,
            lat: P.lat
          }, n("on-change", {
            name: w.name,
            lng: P.lng,
            lat: P.lat
          });
        } else
          console.warn("地址地理编码失败", D);
      }) : (i.value = {
        name: w.name
      }, n("on-change", {
        name: w.name
      })));
    }
    function ee({ lng: w, lat: X, name: D }) {
      if (typeof w != "number" || typeof X != "number") {
        console.warn("无效的坐标数据:", { lng: w, lat: X });
        return;
      }
      if (!R) {
        console.warn("地图实例不存在");
        return;
      }
      R == null || R.clearMap();
      let g = new T.LngLat(w, X);
      R == null || R.setCenter(g);
      let P = new T.Marker({
        map: R,
        position: g,
        draggable: !0
      });
      E(w, X), P.on("dragend", () => {
        let M = P.getPosition();
        i.value = {
          name: D || null,
          lng: M.lng,
          lat: M.lat
        }, E(M.lng, M.lat);
      }), P.on("click", (M) => {
        var G, J;
        b && b.open(R, (J = (G = M == null ? void 0 : M.target) == null ? void 0 : G.getPosition) == null ? void 0 : J.call(G));
      }), R == null || R.setFitView();
    }
    function E(w, X) {
      const D = e.inputInMap ? "mapInfoWindowIKJ" : "mapInfoWindowMA";
      L == null || L.getAddress([w, X], (g, P) => {
        g === "complete" && P.info === "OK" && P.regeocode && P.regeocode.formattedAddress ? b = new T.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="' + D + '">' + P.regeocode.formattedAddress + "</div>",
          offset: new T.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (b = null, console.warn("地图获取位置信息失败", P));
      });
    }
    return He(() => {
      N(), V();
    }), ot(() => {
      var w;
      R && (R.destroy(), (w = Wt) == null || w.reset(), R = null, L = null, F = null, b = null);
    }), (w, X) => (S(), K("div", {
      style: de(p(v)),
      class: _e(e.inputInMap ? "containerIKJ" : "containerMapAddress")
    }, [
      $("div", fo, [
        Q(p(Ia), {
          ref_key: "mapInputRef",
          ref: u,
          modelValue: p(l),
          "onUpdate:modelValue": X[0] || (X[0] = (D) => De(l) ? l.value = D : null),
          class: _e(e.inputInMap && e.showMap ? { mapInputIKJ: !0 } : "searchInput"),
          placeholder: e.placeholder || p(I)("r.search"),
          disabled: e.disabled,
          search: "",
          "enter-button": "",
          onCompositionstart: p(k),
          onCompositionend: p(B),
          onOnEnter: O,
          onOnSearch: O
        }, null, 8, ["modelValue", "class", "placeholder", "disabled", "onCompositionstart", "onCompositionend"]),
        pe($("div", po, [
          $("div", mo, [
            (S(!0), K(be, null, Ve(p(r), (D, g) => (S(), K("div", {
              key: g,
              class: "addressItem",
              onClick: (P) => x(D)
            }, [
              $("span", yo, q(D.name), 1),
              typeof D.address == "string" ? (S(), K("span", vo, q(D.address), 1)) : ce("", !0)
            ], 8, ho))), 128))
          ])
        ], 512), [
          [ge, p(r).length > 0]
        ])
      ]),
      pe($("div", {
        style: de(p(m)),
        ref_key: "mapRef",
        ref: h,
        id: c
      }, null, 4), [
        [ge, e.showMap]
      ])
    ], 6));
  }
});
var Dl;
const na = /* @__PURE__ */ fe({
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
    const n = o, e = t, l = z([]), r = W({
      get() {
        let m = e.modelValue;
        return Array.isArray(m) ? me(m) : Bt(m) ? nl({
          group: l.value,
          condition: (c) => (c == null ? void 0 : c.value) === m,
          pathKey: "value"
        }) : Kl(m) ? m.split(e.separator) : [];
      },
      set(m) {
        if (e.onlyLastVal)
          Ne(m) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", xt(m));
        else {
          if (kt(e.modelValue, m))
            return;
          n("update:modelValue", me(m));
        }
      }
    });
    function i() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      qe.get(e.url).then((m) => {
        var u;
        let c = null;
        (u = m == null ? void 0 : m.data) != null && u.records ? c = m.data.records : m != null && m.data ? c = m.data : m && (c = m), c ? (typeof e.optionFilter == "function" && Y(e.optionFilter) === "Function" && (c = e.optionFilter(c)), l.value = f(c)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function f(m) {
      let c = [];
      for (let u of m) {
        let h = {
          value: u[e.optionVal],
          label: u[e.optionLabel]
        };
        u != null && u.children && !Ne(u.children) && (h.children = f(u.children)), c.push(h);
      }
      return c;
    }
    function s(m) {
      return e.onlyLastLabel ? xt(m) : m.join(e.separator);
    }
    function v(m, c) {
      let u = "";
      Ne(c) || (u = c.map((h) => h == null ? void 0 : h.label).join(e.separator)), n("on-label-change", u);
    }
    return He(i), (m, c) => {
      const u = te("Cascader");
      return S(), le(u, {
        data: p(l),
        modelValue: p(r),
        "onUpdate:modelValue": c[0] || (c[0] = (h) => De(r) ? r.value = h : null),
        onOnChange: v,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": s,
        placeholder: e.placeholder || p(I)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), oa = /* @__PURE__ */ fe({
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
            let f = r.substring(0, 2) + "0000000000", s = r.substring(0, 4) + "00000000";
            return [f, s, r];
          }
          return r.indexOf(e.separator) !== -1 ? r.split(e.separator) : [r];
        } else return Array.isArray(e.modelValue) ? me(e.modelValue) : [];
      },
      set(r) {
        if (Ne(r))
          n("update:modelValue", null), n("on-name-change", null);
        else {
          let i = xt(r), f = "", s = "";
          if (i && (f = i.code), f && f.length < 12) {
            let v = [...f];
            for (; v.length < 12; )
              v.push(0);
            f = v.join("");
          }
          if (Array.isArray(r) && (s = r.map((v) => v == null ? void 0 : v.name).join(e.separator)), f) {
            if (f === e.modelValue)
              return;
            n("update:modelValue", f);
          }
          s && n("on-name-change", s);
        }
      }
    });
    return (r, i) => (S(), le(p(Ma), ft(r.$attrs, {
      class: "alCascaderMC",
      modelValue: p(l),
      "onUpdate:modelValue": i[0] || (i[0] = (f) => De(l) ? l.value = f : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || p(I)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let Qe = 0, vt = [];
function ia(t, o, n, e) {
  var l, r, i;
  e && (e.innerHTML = ((l = t[o]) == null ? void 0 : l.name) ?? "", (r = t[o]) != null && r.name ? e.classList.contains("hide") && e.classList.remove("hide") : e.classList.contains("hide") || e.classList.add("hide")), n && (n.src = ((i = t[o]) == null ? void 0 : i.src) ?? t[o], Qe = o);
}
function Il(t, o, n, e) {
  if (t) {
    let l;
    Qe - 1 < 0 ? l = o.length - 1 : l = Qe - 1, ia(o, l, n, e);
  }
}
function Al(t, o, n, e) {
  if (t) {
    let l;
    Qe + 1 > o.length - 1 ? l = 0 : l = Qe + 1, ia(o, l, n, e);
  }
}
function gt(t, o = 0) {
  var C, V, N, T, R, L, F;
  const n = (...y) => Ze.apply(this, y), e = n("r.closePreview"), l = n("r.fullImg"), r = n("r.last"), i = n("r.next");
  let f, s, v;
  Qe = o;
  const m = Array.isArray(t);
  m ? (s = ((C = t[Qe]) == null ? void 0 : C.src) ?? t[Qe], v = (V = t[Qe]) == null ? void 0 : V.name) : s = t, m && t.length > 1 ? f = `${r} ： ←, ↑, A, W | ${i} ： →, ↓, D, S | ${e} ： Esc` : f = `${e} ： Esc`;
  let c = Xt(document.getElementsByTagName("body")), u = document.createElement("div");
  u.setAttribute("class", "fullScreenImgByDom"), u.innerHTML = `<div class='previewInner'><div class='pageFBt left${m && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${r}' ></i></div><img alt='${l}' ><div class='pageFBt right${m && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${i}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${f}</p><p class='pName ${v ? "" : "hide"}'>${v}</p>`;
  const h = u.querySelector("img");
  h && s && (h.src = s);
  function b() {
    let y = Xt(document.getElementsByTagName("body"));
    y && u.parentNode && y.removeChild(u), document.removeEventListener("keyup", B);
    const O = vt.findIndex((x) => x.child === u);
    O > -1 && vt.splice(O, 1);
  }
  (T = (N = u.querySelector(".ivu-icon-md-close")) == null ? void 0 : N.addEventListener) == null || T.call(N, "click", b);
  const k = u.querySelector(".pName");
  (R = u.querySelector(".pageFBt.left")) == null || R.addEventListener("click", function() {
    Il(m, t, h, k);
  }), (L = u.querySelector(".pageFBt.right")) == null || L.addEventListener("click", function() {
    Al(m, t, h, k);
  });
  function B(y) {
    const O = vt[vt.length - 1];
    (O == null ? void 0 : O.child) === u && (y.keyCode === 37 || y.keyCode === 38 || y.keyCode === 87 || y.keyCode === 65 ? Il(m, t, h, k) : y.keyCode === 39 || y.keyCode === 40 || y.keyCode === 83 || y.keyCode === 68 ? Al(m, t, h, k) : y.keyCode === 27 && b());
  }
  vt.push({ child: u, keyupHandler: B }), document.addEventListener("keyup", B), (F = c == null ? void 0 : c.appendChild) == null || F.call(c, u), u.focus({ preventScroll: !0 });
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
const sa = /* @__PURE__ */ fe({
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
    let f = {};
    const s = z(0), v = W(() => !e.manualUpload && e.showImg && h.value ? "img" : e.manualUpload && e.showImg && h.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !h.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !h.value) ? "list" : ""), m = W(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), c = W({
      //文件集合
      get() {
        return e.manualUpload ? u.value : u.value.map((g) => ({ id: g }));
      },
      set(g) {
        e.manualUpload ? u.value = g || [] : u.value = (g == null ? void 0 : g.map((P) => P == null ? void 0 : P.id)) || [];
      }
    }), u = W({
      //文件ID集合
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((g) => g !== "--") : Y(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(g) {
        if (e.length === 1) {
          let P = Xt(g);
          n("update:modelValue", P ?? null), n("on-change", P ?? null);
        } else
          n("update:modelValue", me(g)), n("on-change", me(g));
      }
    }), h = W(() => {
      let g;
      if (e.manualUpload ? g = c.value : g = r.value, !g)
        return !1;
      for (let P of g) {
        let M;
        if (e.manualUpload ? M = P == null ? void 0 : P.type : M = P == null ? void 0 : P.mimeType, !M || M && !(yt(M) || M === "loading"))
          return !1;
      }
      return !0;
    }), b = W(() => r.value.filter((g) => yt(g == null ? void 0 : g.mimeType))), k = W(() => b.value.map((g) => ({
      src: e.url + "/" + (g == null ? void 0 : g.id) + "/download?preview=true",
      name: g == null ? void 0 : g.name
    }))), B = W(() => c.value.filter((g) => yt(g == null ? void 0 : g.type)));
    Ce(B, async (g) => {
      i.value = await V(g);
    }), Ce(
      () => c.value,
      async (g) => {
        if (v.value === "localImg")
          g != null && g.length ? l.value = await V(g) : l.value = [];
        else if (g != null && g.length && v.value !== "localList") {
          let P = me(g);
          const M = me(r.value);
          for (let G of P)
            if ((G == null ? void 0 : G.name) === void 0)
              if (G.id) {
                const J = Jt(M, (re) => (re == null ? void 0 : re.id) === G.id);
                J ? (G.name = J.name, G.mimeType = J.mimeType) : f.hasOwnProperty(G.id) ? (G.name = f[G.id].name, G.mimeType = f[G.id].mimeType) : (G.mimeType = "loading", qe.get(e.url + "/" + G.id).then((re) => {
                  var ye, ve, Ie, Le, se, Te;
                  G.name = ((Ie = (ve = (ye = re == null ? void 0 : re.data) == null ? void 0 : ye.returnValue) == null ? void 0 : ve[0]) == null ? void 0 : Ie.name) || I("r.file") + bl(g, G), G.mimeType = ((Te = (se = (Le = re == null ? void 0 : re.data) == null ? void 0 : Le.returnValue) == null ? void 0 : se[0]) == null ? void 0 : Te.mimeType) || "unknown", _a(r);
                }).catch(() => {
                  G.name = I("r.file") + bl(P, G);
                }));
              } else
                G.name = I("r.unknown");
          r.value = P;
        } else
          r.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function C(g) {
      return (g == null ? void 0 : g.name) || (g == null ? void 0 : g.split) && xt(g.split("/")) || g;
    }
    async function V(g) {
      let P = [];
      for (let M of g) {
        let G = await Tl(M);
        P.push(G);
      }
      return P;
    }
    function N(g) {
      if (!e.disabled) {
        let P = c.value;
        P == null || P.splice(g, 1), c.value = P, s.value && s.value--;
      }
    }
    function T(g) {
      g != null && g.id && window.open(e.url + "/" + g.id + "/download");
    }
    function R(g) {
      return e.manualUpload ? (g == null ? void 0 : g.type) && yt(g.type) : (g == null ? void 0 : g.id) && g.mimeType && yt(g.mimeType);
    }
    async function L(g) {
      if (e.manualUpload) {
        let P, M;
        if (typeof g == "number" ? (P = g, M = l.value) : g && (P = Ot(B.value, (G) => G.size === g.size && G.lastModified === g.lastModified), M = i.value), !M)
          return;
        gt(
          M.map((G, J) => {
            var re;
            return {
              src: G,
              name: (re = B.value[J]) == null ? void 0 : re.name
            };
          }),
          P
        );
      } else if (g != null && g.id) {
        const P = Ot(b.value, (M) => M.id === g.id);
        gt(k.value, P);
      }
    }
    function F(g) {
      Y(g) === "String" && g.indexOf("http") > -1 ? window.open(g) : Y(g) === "File" && Tl(g).then((P) => {
        Jn(g.name, P);
      });
    }
    function y(g) {
      var P, M;
      if (e.length && s.value >= e.length)
        return ze(I("r.info.title"), I("r.uploadLength", [e.length]), "warning"), !1;
      if (s.value++, e.manualUpload) {
        if (g) {
          let G = ea(g.name);
          if ((P = e.format) != null && P.length && e.format.indexOf(G) < 0)
            return ze(
              I("r.wrongFileType"),
              I("r.supportType") + (((M = e.format) == null ? void 0 : M.length) && String(e.format) || I("r.none")),
              "warning"
            ), s.value--, !1;
          if (e.maxSize && g.size > e.maxSize * 1024)
            return ze(I("r.fileIsBig"), I("r.supportSize") + e.maxSize + "kb", "warning"), s.value--, !1;
          let J = c.value;
          J == null || J.push(g), c.value = J;
        }
        return !1;
      } else
        return !0;
    }
    function O(g) {
      s.value--, console.warn(g), ze(I("r.uploadError"), "", "error");
    }
    function x(g, P, M) {
      var G, J, re, ye, ve, Ie;
      if ((g == null ? void 0 : g.code) === 0) {
        let Le = c.value;
        P.id = (J = (G = g.data) == null ? void 0 : G[0]) == null ? void 0 : J.id, P.name = (ye = (re = g.data) == null ? void 0 : re[0]) == null ? void 0 : ye.name, P.mimeType = (Ie = (ve = g.data) == null ? void 0 : ve[0]) == null ? void 0 : Ie.mimeType, f[P.id] = { name: P.name, mimeType: P.mimeType }, Le == null || Le.push(P), c.value = Le;
      } else
        s.value--, ze(I("r.uploadFail"), (g == null ? void 0 : g.message) || "", "error");
    }
    function ee() {
      s.value--, ze(I("r.fileIsBig"), I("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function E() {
      var g;
      s.value--, ze(
        I("r.wrongFileType"),
        I("r.supportType") + (((g = e.format) == null ? void 0 : g.length) && String(e.format) || I("r.none")),
        "warning"
      );
    }
    function w(g) {
      let P = g == null ? void 0 : g.id, M = g == null ? void 0 : g.mimeType;
      P && (Y(M) === "String" && M.indexOf("image") > -1 ? gt(e.url + "/" + P + "/download?preview=true") : window.open(e.url + "/" + P + "/download?preview=true"));
    }
    function X(g) {
      var M, G, J;
      let P = (J = (G = (M = g == null ? void 0 : g.response) == null ? void 0 : M.data) == null ? void 0 : G[0]) == null ? void 0 : J.id;
      D(null, P);
    }
    function D(g, P) {
      if (!(!P && P !== 0) && !e.disabled && u.value.indexOf(P) !== -1) {
        const M = me(u.value);
        let G = c.value;
        G == null || G.splice(M.indexOf(P), 1), c.value = G, s.value && s.value--;
      }
    }
    return (g, P) => {
      var re, ye, ve, Ie, Le;
      const M = te("Button"), G = te("Upload"), J = te("Icon");
      return S(), K("div", null, [
        Q(G, {
          name: "files",
          action: p(m),
          "before-upload": y,
          "on-error": O,
          "on-success": x,
          "on-exceeded-size": ee,
          "on-preview": w,
          "on-remove": X,
          "on-format-error": E,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && ((re = p(c)) == null ? void 0 : re.length) >= e.length || !!e.disabled
        }, {
          default: oe(() => {
            var se;
            return [
              Q(M, {
                icon: "md-cloud-upload",
                disabled: e.length > 0 && ((se = p(c)) == null ? void 0 : se.length) >= e.length || !!e.disabled
              }, {
                default: oe(() => [
                  we(q(p(I)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        p(v) === "img" && ((ye = p(r)) == null ? void 0 : ye.length) > 0 ? (S(), K("div", go, [
          (S(!0), K(be, null, Ve(p(r), (se, Te) => (S(), K(be, {
            key: se == null ? void 0 : se.id
          }, [
            !e.manualUpload && (se == null ? void 0 : se.id) !== null ? (S(), K("div", {
              key: 0,
              class: _e(["previewImg", { previewLoading: se.mimeType === "loading" }])
            }, [
              pe($("div", bo, P[0] || (P[0] = [
                $("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ge, se.mimeType === "loading"]
              ]),
              pe($("img", {
                src: g.url + "/" + se.id + "/download?preview=true",
                alt: se.name
              }, null, 8, ko), [
                [ge, se.mimeType !== "loading"]
              ]),
              pe($("div", wo, [
                Q(J, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: p(I)("r.fView"),
                  onClick: (Ae) => p(gt)(p(k), Te)
                }, null, 8, ["title", "onClick"]),
                Q(J, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Ae) => D(Ae, se.id),
                  title: p(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ge, se.mimeType !== "loading"]
              ])
            ], 2)) : ce("", !0)
          ], 64))), 128))
        ])) : ce("", !0),
        p(v) === "localImg" && ((ve = p(l)) == null ? void 0 : ve.length) > 0 ? (S(), K("div", _o, [
          (S(!0), K(be, null, Ve(p(l), (se, Te) => (S(), K(be, {
            key: "manualImg" + Te
          }, [
            e.manualUpload && se !== null ? (S(), K("div", Co, [
              $("img", {
                src: se,
                alt: "manualImg" + Te
              }, null, 8, Vo),
              $("div", So, [
                Q(J, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (Ae) => L(Te),
                  title: p(I)("r.fView")
                }, null, 8, ["onClick", "title"]),
                Q(J, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Ae) => N(Te),
                  title: p(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ce("", !0)
          ], 64))), 128))
        ])) : ce("", !0),
        p(v) === "localList" && ((Ie = p(c)) == null ? void 0 : Ie.length) > 0 ? (S(), K("div", To, [
          (S(!0), K(be, null, Ve(p(c), (se, Te) => (S(), K(be, {
            key: "manualItem" + Te
          }, [
            e.manualUpload && se !== null ? (S(), K("p", Bo, [
              se.name ? (S(), le(J, {
                key: 0,
                class: "fileTypeIco",
                type: p(Bl)(se.name),
                size: "20"
              }, null, 8, ["type"])) : ce("", !0),
              $("span", {
                class: _e(["upNameT", { previewName: R(se) }]),
                onClick: (Ae) => F(se),
                title: p(I)("r.download")
              }, q(C(se)), 11, Lo),
              $("span", xo, [
                R(se) ? (S(), le(J, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Ae) => L(se),
                  title: p(I)("r.fView")
                }, null, 8, ["onClick", "title"])) : ce("", !0),
                Q(J, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (Ae) => N(Te),
                  title: p(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ce("", !0)
          ], 64))), 128))
        ])) : ce("", !0),
        p(v) === "list" && ((Le = p(r)) == null ? void 0 : Le.length) > 0 ? (S(), K("div", Oo, [
          (S(!0), K(be, null, Ve(p(r), (se, Te) => (S(), K(be, {
            key: "defaultItem" + Te
          }, [
            !e.manualUpload && se ? (S(), K("div", Io, [
              pe($("div", Ao, P[1] || (P[1] = [
                $("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ge, se.mimeType === "loading"]
              ]),
              pe(Q(J, {
                type: p(Bl)(se.name),
                class: "fileTypeIco",
                size: "20"
              }, null, 8, ["type"]), [
                [ge, se.mimeType !== "loading"]
              ]),
              pe($("span", {
                class: "upNameT",
                onClick: (Ae) => T(se),
                title: p(I)("r.download")
              }, q(se.name || p(I)("r.file") + (Te + 1)), 9, Po), [
                [ge, se.mimeType !== "loading"]
              ]),
              pe($("span", Mo, [
                R(se) ? (S(), le(J, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Ae) => L(se),
                  title: p(I)("r.fView")
                }, null, 8, ["onClick", "title"])) : ce("", !0),
                Q(J, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (Ae) => N(Te),
                  title: p(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ge, se.mimeType !== "loading"]
              ])
            ])) : ce("", !0)
          ], 64))), 128))
        ])) : ce("", !0)
      ]);
    };
  }
}), ra = /* @__PURE__ */ fe({
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
    const n = o, e = t, l = z(!1), r = z(!1), i = z(!1), f = W({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(T) {
        n("update:modelValue", [T, s.value]), n("on-change", [T, s.value]);
      }
    }), s = W({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(T) {
        n("update:modelValue", [f.value, T]), n("on-change", [f.value, T]);
      }
    }), v = W(
      () => (f.value || "") + ((f.value || s.value) && " - " || "") + (s.value || "")
    ), m = z(), c = z(null), u = () => {
      i.value = !0;
    }, h = () => {
      i.value = !1;
    }, b = (T) => {
      var R;
      !e.disabled && (f.value || s.value) && ((R = T == null ? void 0 : T.stopPropagation) == null || R.call(T), V());
    };
    He(() => {
      c.value = m.value.querySelector(".aRoot .ivu-input-suffix"), c.value && (c.value.addEventListener("mouseover", u), c.value.addEventListener("mouseout", h), c.value.addEventListener("click", b));
    }), ot(() => {
      c.value && (c.value.removeEventListener("mouseover", u), c.value.removeEventListener("mouseout", h), c.value.removeEventListener("click", b));
    });
    function k() {
      e.disabled || (l.value = !0);
    }
    function B(T) {
      f.value = T, l.value = !1, r.value = !0;
    }
    function C(T) {
      s.value = T, r.value = !1;
    }
    function V() {
      n("update:modelValue", [null, null]), n("on-change", [null, null]);
    }
    function N() {
      l.value = !1, r.value = !1, f.value && s.value === null && (f.value = null);
    }
    return (T, R) => {
      const L = te("DatePicker"), F = te("Icon"), y = te("Input");
      return S(), K("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: m
      }, [
        Q(L, {
          open: p(r),
          modelValue: p(s),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: C,
          onOnClickoutside: N
        }, {
          default: oe(() => R[1] || (R[1] = [
            $("div", { class: "bRoot" }, null, -1)
          ])),
          _: 1,
          __: [1]
        }, 8, ["open", "modelValue", "placement", "options"]),
        Q(L, {
          open: p(l),
          modelValue: p(f),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: B,
          onOnClickoutside: N
        }, {
          default: oe(() => [
            $("div", { onClick: k }, [
              Q(y, {
                class: "aRoot",
                modelValue: p(v),
                "onUpdate:modelValue": R[0] || (R[0] = (O) => De(v) ? v.value = O : null),
                readonly: "",
                placeholder: e.placeholder || p(I)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: oe(() => [
                  Q(F, {
                    type: p(i) && (p(f) || p(s)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), ua = /* @__PURE__ */ fe({
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
    const n = o, e = t, l = z(), r = "date-c-r-" + Math.floor(Math.random() * 1e7 + 1e7), i = z({}), f = W({
      get() {
        return e.modelValue;
      },
      set(m) {
        n("update:modelValue", m);
      }
    }), s = W(() => {
      if (Y(e.options) === "Object") {
        const { disabledDate: m, ...c } = e.options;
        return c;
      }
      return {};
    });
    function v(m) {
      var u, h;
      const c = m.target;
      ((h = (u = c.classList) == null ? void 0 : u.contains) != null && h.call(u, "ivu-date-picker-cells-cell") || c.tagName === "EM") && $e(() => {
        var k, B;
        const b = (B = (k = l == null ? void 0 : l.value) == null ? void 0 : k.$refs.pickerPanel) == null ? void 0 : B.rangeState;
        if (b) {
          const C = b.from, V = b.selecting;
          i.value = {
            ...s.value,
            disabledDate: (N) => {
              var T;
              return typeof ((T = e.options) == null ? void 0 : T.disabledDate) == "function" ? e.options.disabledDate(N, C, V) : !1;
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
    ), He(() => {
      var c;
      const m = document.getElementsByClassName(r)[0];
      (c = m == null ? void 0 : m.addEventListener) == null || c.call(m, "click", v, !0);
    }), ot(() => {
      var c;
      const m = document.getElementsByClassName(r)[0];
      (c = m == null ? void 0 : m.removeEventListener) == null || c.call(m, "click", v, !0);
    }), (m, c) => {
      const u = te("DatePicker");
      return S(), le(u, {
        ref_key: "dateC",
        ref: l,
        modelValue: p(f),
        "onUpdate:modelValue": c[0] || (c[0] = (h) => De(f) ? f.value = h : null),
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
}), Ro = { class: "editor-pro-root" }, da = /* @__PURE__ */ fe({
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
          placeholder: e.placeholder || I("r.pInput"),
          insertKeys: {
            index: 31,
            keys: ["previewX"]
          }
        },
        e.toolbarConfig
      )
    ), f = W(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(m, c) {
                let u = new FormData();
                u.append("files", m);
                const h = m.name, b = e.imgUploadUrl ?? "/node-serve/file";
                qe.post(b, u, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((k) => {
                  if (k && k.data)
                    if (Array.isArray(k.data))
                      for (let B of k.data) {
                        const C = b + "/" + (B == null ? void 0 : B.id) + "/download";
                        c(C, h, C);
                      }
                    else {
                      const B = b + "/" + k.data.id + "/download";
                      c(B, h, B);
                    }
                }).catch(() => {
                  ze(I("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(m, c) {
                let u = new FormData();
                u.append("files", m);
                const h = e.videoUploadUrl ?? "/node-serve/file";
                qe.post(h, u, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((b) => {
                  if (b && b.data)
                    if (Array.isArray(b.data))
                      for (let k of b.data) {
                        const B = h + "/" + (k == null ? void 0 : k.id) + "/download";
                        c(B);
                      }
                    else {
                      const k = h + "/" + b.data.id + "/download";
                      c(k);
                    }
                }).catch(() => {
                  ze(I("r.uploadFail"), "", "error");
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
    }), (m, c) => (S(), K("div", Ro, [
      pe(Q(p(Ra), {
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
        "onUpdate:modelValue": c[0] || (c[0] = (u) => De(r) ? r.value = u : null),
        defaultConfig: p(f),
        mode: m.mode,
        onOnCreated: v,
        style: de(p(s))
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
}, Pl = /* @__PURE__ */ fe({
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
      var c;
      if (e.inline)
        return e.itemWidth;
      {
        const u = (c = e.itemStyle) == null ? void 0 : c.width;
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
    function r(c) {
      return {
        withInfo: !!c.info,
        withTitle: !!c.title,
        inlineFormItemXN: e.inline,
        noLabel: c.type === "selectInput",
        [c.class]: c.class,
        slotInput: c.slotPosition
      };
    }
    function i(c, u) {
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
    function v(c, u) {
      n("al-name-change", {
        name: c,
        root: u
      });
    }
    function m(c, u) {
      n("async-label-change", {
        label: c,
        root: u
      });
    }
    return (c, u) => {
      const h = te("InputNumber"), b = te("Input"), k = te("Option"), B = te("Select"), C = te("Radio"), V = te("Icon"), N = te("RadioGroup"), T = te("Checkbox"), R = te("CheckboxGroup"), L = te("TimePicker"), F = te("FormItem");
      return e.item ? (S(), le(F, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: _e(["relativeBox", r(e.item)])
      }, {
        default: oe(() => [
          e.item.type === "txt" ? (S(), K("div", {
            key: 0,
            style: de([e.itemStyle, { display: "inline-block" }]),
            class: _e({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, q(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (S(), le(h, {
            key: 1,
            style: de(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[0] || (u[0] = (y) => e.tempKeys[e.item.tempKey] = y),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || p(I)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: u[1] || (u[1] = (y) => i(y, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (S(), le(b, {
            key: 2,
            style: de(c.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[2] || (u[2] = (y) => e.tempKeys[e.item.tempKey] = y),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || p(I)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[3] || (u[3] = (y) => i(y, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, ct({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: oe(() => [
                Ee(c.$slots, e.item.slotName, {
                  valGroup: e.valGroup
                })
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: oe(() => [
                $("span", null, q(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: oe(() => [
                $("span", null, q(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (S(), le(B, {
            key: 3,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[4] || (u[4] = (y) => c.tempKeys[e.item.tempKey] = y),
            style: de(c.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || p(I)("r.pSelect"),
            onOnChange: u[5] || (u[5] = (y) => f(y, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: oe(() => [
              (S(!0), K(be, null, Ve(e.item.options, (y, O) => (S(), le(k, {
                value: y.val,
                label: y.label || y.val,
                key: "option-" + e.item.key + O,
                disabled: !!y.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (S(), le(la, {
            key: 4,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[6] || (u[6] = (y) => c.tempKeys[e.item.tempKey] = y),
            "label-width": c.labelWidth,
            "item-width": p(l),
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || p(I)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: s
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (S(), le(oa, {
            key: 5,
            style: de(c.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[7] || (u[7] = (y) => e.valGroup[e.item.key] = y),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || p(I)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: u[8] || (u[8] = (y) => v(y, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (S(), le(na, {
            key: 6,
            style: de(c.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[9] || (u[9] = (y) => e.valGroup[e.item.key] = y),
            url: e.item.url || c.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || p(I)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: u[10] || (u[10] = (y) => m(y, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (S(), le(C, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[11] || (u[11] = (y) => e.valGroup[e.item.key] = y),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: u[12] || (u[12] = (y) => i(y, e.item))
          }, {
            default: oe(() => [
              we(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (S(), le(N, {
            key: 8,
            style: de(c.itemStyle),
            onOnChange: u[13] || (u[13] = (y) => f(y, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[14] || (u[14] = (y) => c.tempKeys[e.item.tempKey] = y)
          }, {
            default: oe(() => [
              (S(!0), K(be, null, Ve(e.item.options, (y) => (S(), le(C, {
                key: "radioItem" + y.val,
                label: y.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || y.disabled
              }, {
                default: oe(() => [
                  y.icon && !e.item.buttonType ? (S(), le(V, {
                    key: 0,
                    type: y.icon
                  }, null, 8, ["type"])) : ce("", !0),
                  $("span", null, q(y.label || y.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (S(), le(T, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[15] || (u[15] = (y) => e.valGroup[e.item.key] = y),
            disabled: !!e.item.disabled,
            onOnChange: u[16] || (u[16] = (y) => i(y, e.item))
          }, {
            default: oe(() => [
              we(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (S(), le(R, {
            key: 10,
            style: de(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[17] || (u[17] = (y) => c.tempKeys[e.item.tempKey] = y),
            onOnChange: u[18] || (u[18] = (y) => f(y, e.item))
          }, {
            default: oe(() => [
              (S(!0), K(be, null, Ve(e.item.options, (y) => (S(), le(T, {
                key: "checkItem" + y.val,
                label: y.val,
                disabled: !!e.item.disabled || e.disabled || y.disabled
              }, {
                default: oe(() => [
                  y.icon ? (S(), le(V, {
                    key: 0,
                    type: y.icon
                  }, null, 8, ["type"])) : ce("", !0),
                  $("span", null, q(y.label || y.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (S(), le(b, {
            key: 11,
            type: "textarea",
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[19] || (u[19] = (y) => c.tempKeys[e.item.tempKey] = y),
            autosize: e.item.autosize || { minRows: 2 },
            style: de(c.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || p(I)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[20] || (u[20] = (y) => i(y, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (S(), le(sa, {
            key: 12,
            style: de(c.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[21] || (u[21] = (y) => e.valGroup[e.item.key] = y),
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
            onOnFileIdChange: u[22] || (u[22] = (y) => f(y, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "multiple", "disabled", "with-credentials"])) : e.item.type === "date" ? (S(), le(ua, {
            key: 13,
            style: de(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[23] || (u[23] = (y) => c.tempKeys[e.item.tempKey] = y),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placeholder: e.item.placeholder || p(I)("r.selectDate"),
            options: e.item.dateOptions || {},
            "time-picker-options": c.item.timePickerOptions || {},
            clearable: e.item.clearable !== !1,
            onOnChange: u[24] || (u[24] = (y) => i(y, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "time-picker-options", "clearable"])) : e.item.type === "time" ? (S(), le(L, {
            key: 14,
            style: de(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[25] || (u[25] = (y) => c.tempKeys[e.item.tempKey] = y),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(I)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: u[26] || (u[26] = (y) => i(y, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (S(), le(ra, {
            key: 15,
            style: de(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[27] || (u[27] = (y) => c.tempKeys[e.item.tempKey] = y),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(I)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: u[28] || (u[28] = (y) => i(y, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (S(), le(da, {
            key: 16,
            class: "inlineBlock",
            style: de(c.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[29] || (u[29] = (y) => e.valGroup[e.item.key] = y),
            placeholder: e.item.placeholder || p(I)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: u[30] || (u[30] = (y) => i(y, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (S(), le(aa, {
            key: 17,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[31] || (u[31] = (y) => c.tempKeys[e.item.tempKey] = y),
            style: de(c.itemStyle),
            placeholder: e.item.placeholder || p(I)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            "input-in-map": e.item.inputInMap !== !1,
            onOnChange: u[32] || (u[32] = (y) => i(y, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height", "input-in-map"])) : e.item.type === "custom" ? (S(), K("div", {
            key: 18,
            class: "inlineBlock",
            style: de(c.itemStyle)
          }, [
            Ee(c.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ce("", !0),
          e.item.info ? (S(), K("div", $o, q(e.item.info), 1)) : ce("", !0),
          e.item.title ? (S(), K("div", Fo, q(e.item.title), 1)) : ce("", !0),
          e.inline ? ce("", !0) : (S(), K("span", Do))
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : ce("", !0);
    };
  }
}), No = { class: "inlineBlock" }, Kt = /* @__PURE__ */ fe({
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
    const e = n, l = t, r = z(null), i = z({}), f = z([]), s = z({});
    let v = [];
    const m = ((yl = window == null ? void 0 : window.g) == null ? void 0 : yl.mgrURL) ?? "";
    let c = z([]), u = [];
    const h = z(!1), b = z(Math.random() * 1e8 + 1e3), k = (vl = window == null ? void 0 : window.g) != null && vl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let B = !1;
    const C = W(() => Array.isArray(l.formData.length ? l.formData[0] : !1)), V = W(
      () => l.inline ? {
        width: l.itemWidth + l.labelWidth + "px"
      } : {}
    ), N = W(
      () => l.inline ? {
        width: "100%"
      } : { width: l.contentWidth }
    ), T = W(() => {
      let d = me(l.formRules);
      for (let a in d)
        if (d.hasOwnProperty(a))
          if (Array.isArray(d[a]))
            for (let A of d[a])
              A && A && !(A.message || A.validator) && (A.message = I("r.required"));
          else Y(d[a]) === "Object" && (d[a].message || d[a].validator || (d[a].message = I("r.required")));
      return d;
    }), R = W(() => {
      let d = [];
      if (C.value)
        for (let a of f.value)
          y(a, d);
      else
        y(f.value, d);
      return d.concat(c.value, u);
    }), L = W(() => {
      let d = [];
      if (C.value)
        for (let a of f.value)
          O(a, d);
      else
        O(f.value, d);
      return d;
    });
    function F(d) {
      return d.filter((a) => a == null ? void 0 : a.slotName);
    }
    function y(d, a) {
      for (let A of d)
        if ((A == null ? void 0 : A.showing) === !0 && A.key && A.type !== "selectInput" && (a.push(A.key), A.key2 && a.push(A.key2), A.collectLabel)) {
          if (!Array.isArray(A.collectLabel) && A.collectLabel.key)
            a.push(A.collectLabel.key);
          else if (Array.isArray(A.collectLabel))
            for (let _ of A.collectLabel)
              _.key && a.push(_.key);
        }
    }
    function O(d, a) {
      for (let A of d)
        (A == null ? void 0 : A.showing) === !0 && A.key && A.type !== "selectInput" && a.push(A.key);
    }
    function x() {
      return new Promise((d) => {
        w(), E().then(() => {
          e("on-reset"), d(!0);
        });
      });
    }
    function ee() {
      return new Promise((d) => {
        for (let a of v)
          a();
        v = [], s.value = {}, se(), ye(), E().then(() => {
          e("on-re-render"), d(!0);
        });
      });
    }
    function E() {
      return new Promise((d) => {
        b.value = Math.floor(Math.random() * 1e8 + 1e3), Fe(function() {
          d(!0);
        });
      });
    }
    function w() {
      let d = g();
      for (let a in i.value)
        if (i.value.hasOwnProperty(a))
          if (Me(d[a]))
            i.value[a] = d[a];
          else if (Array.isArray(i.value[a]))
            i.value[a] = [];
          else if (Y(i.value[a]) === "Boolean")
            i.value[a] = !1;
          else {
            const A = Lt(l.formData, (_) => (_ == null ? void 0 : _.key) === a);
            A && (A.type === "editor" || A.type === "editorPro") ? i.value[a] = "" : i.value[a] = null;
          }
      X(d);
    }
    function X(d) {
      for (let a in s.value)
        s.value.hasOwnProperty(a) && (Me(d[a]) ? s.value[a] = d[a] : Array.isArray(s.value[a]) ? s.value[a] = [] : Y(s.value[a]) === "Object" && s.value[a].hasOwnProperty("key") && s.value[a].hasOwnProperty("val") ? s.value[a].val = null : s.value[a] = null);
    }
    function D(d) {
      let a = g();
      Me(a[d]) ? s.value[d] = a[d] : Array.isArray(s.value[d]) ? s.value[d] = [] : s.value[d] = null;
    }
    function g() {
      let d = {};
      if (C.value)
        for (let a of f.value)
          P(a, d);
      else
        P(f.value, d);
      return d;
    }
    function P(d, a) {
      for (let A of d)
        A.tempKey && Me(A.defaultVal) && re(A, a), A.key && Me(A.defaultVal) && (a[A.key] = A.defaultVal), A.key2 && Me(A.defaultVal2) && (a[A.key2] = A.defaultVal2);
    }
    function M(d) {
      if (d.show) {
        if (Y(d.show) === "Object")
          return J(d, G(d.show));
        if (Array.isArray(d.show))
          if (d.showOr) {
            for (let a of d.show)
              if (G(a) === !0)
                return J(d, !0);
            return J(d, !1);
          } else {
            for (let a of d.show)
              if (G(a) === !1)
                return J(d, !1);
            return J(d, !0);
          }
        else if (typeof d.show == "function")
          return J(d, d.show(i.value));
      } else d.showing || (d.showing = !0);
      return !0;
    }
    function G(d) {
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
    function J(d, a) {
      return !(d != null && d.showing) && a && (d != null && d.key) ? (d.showing = a, d.defaultVal !== void 0 && (d.tempKey ? (s.value[d.tempKey] === null || s.value[d.tempKey] === void 0 || (Y(s.value[d.tempKey]) === "Object" || Array.isArray(s.value[d.tempKey])) && Ne(s.value[d.tempKey])) && re(d, s.value) : (i.value[d.key] === null || i.value[d.key] === void 0) && (i.value[d.key] = d.defaultVal), d.key2 && d.deafultVal2 !== void 0 && (i.value[d.key2] === null || i.value[d.key2] === void 0) && d.type !== "inputMap" && (i.value[d.key2] = d.defaultVal2)), d.tempKey && Ae(s.value[d.tempKey], d)) : d.showing = a, a;
    }
    function re(d, a) {
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
    function ye() {
      let d = me(l.formData);
      if (C.value)
        for (let a of d)
          ve(a);
      else
        ve(d);
      f.value = d;
    }
    function ve(d) {
      for (let a of d)
        if (a != null && a.type)
          switch (a.type) {
            case "selectInput":
              const A = "selectInput" + Math.floor(Math.random() * 1e8);
              a.tempKey = A, s.value[A] = z({
                key: a.key || null,
                val: a.defaultVal || null
              }), v.push(
                Ce(
                  () => s.value[A],
                  (j) => {
                    Ae(j, a);
                  },
                  { immediate: !0, flush: "sync" }
                )
              );
              break;
            case "inputMap":
              const _ = "inputMap" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = _, a.key3 ? s.value[_] = a.defaultVal !== void 0 && a.defaultVal2 !== void 0 ? {
                lng: a.defaultVal,
                lat: a.defaultVal2,
                name: a.defaultVal3 || ""
              } : {
                lng: null,
                lat: null,
                name: null
              } : s.value[_] = a.defaultVal !== void 0 && a.defaultVal2 !== void 0 ? {
                lng: a.defaultVal,
                lat: a.defaultVal2
              } : {
                lng: null,
                lat: null
              }, v.push(
                Ce(
                  () => s.value[_],
                  (j) => {
                    Ae(j, a);
                  },
                  { immediate: !0, flush: "sync" }
                )
              ));
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              const ie = "inputT" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = ie, s.value[ie] = a.defaultVal !== void 0 ? a.defaultVal : null, v.push(
                Ce(
                  () => s.value[ie],
                  (j) => {
                    Ae(j, a);
                  },
                  { immediate: !0, flush: "sync" }
                )
              ));
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              if (a.options || (a.options = []), (a.type === "checkboxGroup" || a.type === "radioGroup") && (a.options = z(me(a.options))), a.asyncOption)
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
                              let Ue = i.value[Be.valKey];
                              if (Ue && !Array.isArray(Ue) || Array.isArray(Ue) && Ue.length || Ue === 0 || Ue === !1)
                                Z += "&" + Be.key + "=" + Ue;
                              else if (!Be.notRequired)
                                return !1;
                            }
                          return Z;
                        },
                        (Z) => {
                          let Be = me(s.value[a.tempKey]);
                          if (s.value[a.tempKey] = null, Z && a.optionUrl) {
                            let Ue = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                            Ie((Ue + Z).replace(/\?&/, "?"), a, Be);
                          } else
                            a.localOption ? Ye(a, "options", [...a.localOption]) : Ye(a, "options", []), Me(Be) && Le(Be, a);
                        },
                        {
                          immediate: !0
                        }
                      )
                    ) : a.localOption ? Ye(a, "options", [...a.localOption]) : Ye(a, "options", []);
                  } else typeof a.changeOption == "object" ? a.changeOption.valKey && a.changeOption.key && v.push(
                    Ce(
                      () => typeof a.changeOption == "object" && !Array.isArray(a.changeOption) ? i.value[a.changeOption.valKey] : !1,
                      (j) => {
                        let Z = me(s.value[a.tempKey]);
                        if (s.value[a.tempKey] = null, (j && !Array.isArray(j) || Array.isArray(j) && j.length || j === 0 || j === !1) && a.optionUrl && typeof a.changeOption == "object" && !Array.isArray(a.changeOption)) {
                          let Be = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                          Ie((Be + "&" + a.changeOption.key + "=" + j).replace(/\?&/, "?"), a, Z);
                        } else
                          a.localOption ? Ye(a, "options", [...a.localOption]) : Ye(a, "options", []), Me(Z) && Le(Z, a);
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
                        let Z = me(s.value[a.tempKey]);
                        s.value[a.tempKey] = null, j ? Ie(j, a, Z) : (a.localOption ? Ye(a, "options", [...a.localOption]) : Ye(a, "options", []), Me(Z) && Le(Z, a));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
                else a.optionUrl && Ie(a.optionUrl, a);
              else Y(a.borrowOption) === "String" && Fe(function() {
                a.options = Lt(f.value, (j) => (j == null ? void 0 : j.key) === a.borrowOption).options;
              });
              const ae = "opEle" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = ae, a.type === "select" && a.multiple || a.type === "checkboxGroup" ? s.value[ae] = a.defaultVal !== void 0 ? a.defaultVal : [] : a.booleanVal ? s.value[ae] = a.defaultVal !== void 0 ? a.defaultVal ? 1 : 0 : null : s.value[ae] = a.defaultVal !== void 0 ? a.defaultVal : null, v.push(
                Ce(
                  () => s.value[ae],
                  (j) => {
                    Ae(j, a);
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
              const Pe = "date" + Math.floor(Math.random() * 1e8);
              a.tempKey = Pe, a.dateType === "date" || a.dateType === "datetime" || a.dateType === "time" || a.dateType === "year" || a.dateType === "month" ? s.value[Pe] = a.defaultVal || null : (a.dateType === "daterange" || a.dateType === "datetimerange" || a.dateType === "timerange" || a.type === "monthRange") && (s.value[Pe] = a.defaultVal && a.defaultVal2 && [a.defaultVal, a.defaultVal2] || []), v.push(
                Ce(
                  () => s.value[Pe],
                  (j) => {
                    Ae(j, a);
                  },
                  { flush: "sync" }
                )
              );
              break;
          }
    }
    function Ie(d, a, A) {
      qe.get(d).then((_) => {
        var Pe;
        let ie;
        if (De(a.options) ? ie = a.options.value : ie = a.options, !ie)
          return;
        let ae = ((Pe = _ == null ? void 0 : _.data) == null ? void 0 : Pe.records) || (_ == null ? void 0 : _.data) || _ || [];
        Array.isArray(ae) ? (a.optionFilter && Y(a.optionFilter) === "Function" && (ae = a.optionFilter(ae)), a.optionLabel && a.optionVal ? (ie.length = 0, ie.push(
          ...ae.map((j) => {
            let Z;
            if (Array.isArray(a.optionLabel)) {
              let Be = "";
              a.optionLabel.forEach((Ue, gl) => {
                let Ut = String(j[Ue]);
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
        )) : (ie.length = 0, ie.push(...ae))) : ie.length = 0, a.localOption && ie.unshift(...a.localOption), Me(A) && Le(A, a), a.disableOptionByOthers && (Y(a.disableOptionByOthers) === "String" ? v.push(
          Ce(
            () => i.value[a.disableOptionByOthers],
            (j) => {
              if (D(a.tempKey), !!ie) {
                for (let Z of ie)
                  Z.disabled && (Z.disabled = !1);
                if (j || j === 0 || j === !1)
                  for (let Z of ie)
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
              if (D(a.tempKey), !!ie) {
                for (let Z of ie)
                  Z.disabled && (Z.disabled = !1);
                if (j) {
                  for (let Z of ie)
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
    function Le(d, a) {
      Array.isArray(Gt(a.options)) && Ot(Gt(a.options), { val: d }) !== -1 && (s.value[a.tempKey] = d);
    }
    function se() {
      if (i.value = {}, C.value)
        for (let d of l.formData)
          Te(d);
      else
        Te(l.formData);
    }
    function Te(d) {
      for (let a of d)
        a != null && a.key && (a.type === "checkboxGroup" || a.type === "select" && a.multiple ? i.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : [] : a.type === "editor" || a.type === "editorPro" ? i.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : "" : (i.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : null, a.key2 && (i.value[a.key2] = a.defaultVal2 !== void 0 && a.show === void 0 ? a.defaultVal2 : null)));
    }
    function Ae(d, a) {
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
              let ie = /^-?\d+(.\d+)?$/;
              a.numberVal && ie.test(d) ? i.value[a.key] = Number(d) : i.value[a.key] = d;
            } else
              i.value[a.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!a.key)
              return;
            if (a.booleanVal && !a.multiple ? i.value[a.key] = d === void 0 || d === "" || d === null ? null : !!d : a.multiple || a.type === "checkboxGroup" ? i.value[a.key] = Object.assign([], d) : i.value[a.key] = d, a.collectLabel) {
              const ie = et(a, d);
              if (Array.isArray(a.collectLabel)) {
                for (let ae of a.collectLabel)
                  if (ae != null && ae.key && ae.valKey) {
                    const Pe = Xe(ae.key);
                    let j = null;
                    if (Array.isArray(ie)) {
                      if (j = ie.map((Z) => Z[ae.valKey]), i.value[ae.key] = j, Pe)
                        for (const Z of Pe)
                          s.value[Z.tempKey] = j;
                    } else if (ie && Me(ie[ae.valKey]) && (j = ie[ae.valKey]), i.value[ae.key] = j, Pe)
                      for (const Z of Pe)
                        Z.booleanVal && typeof j == "boolean" ? s.value[Z.tempKey] = j ? 1 : 0 : s.value[Z.tempKey] = j;
                  }
              } else if (st(a.collectLabel)) {
                const ae = a.collectLabel;
                if (ae.key && ae.valKey) {
                  const Pe = Xe(ae.key);
                  let j = null;
                  if (Array.isArray(ie)) {
                    if (j = ie.map((Z) => Z[ae.valKey]), i.value[ae.key] = j, Pe)
                      for (const Z of Pe)
                        s.value[Z.tempKey] = j;
                  } else if (ie && Me(ie[ae.valKey]) && (j = ie[ae.valKey]), i.value[ae.key] = j, Pe)
                    for (const Z of Pe)
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
            let A = a.dateType;
            const _ = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "YYYY-MM"
            };
            if (A === "date" || A === "datetime" || A === "time" || A === "year" || A === "month")
              d ? (A === "time" ? i.value[a.key] = d : i.value[a.key] = ht(d).format(typeof a.format == "string" ? a.format : _[A]), A === "date" && a.addTime && (i.value[a.key] += " 00:00:00")) : i.value[a.key] = null;
            else if (a.type === "monthRange" || A === "daterange" || A === "datetimerange" || A === "timerange") {
              if (!a.key2)
                return;
              d && d[0] && d[1] ? (A === "timerange" ? (i.value[a.key] = d[0], i.value[a.key2] = d[1]) : a.type === "monthRange" ? (i.value[a.key] = typeof a.format == "string" && ht(d[0]).format(a.format) || d[0], i.value[a.key2] = typeof a.format == "string" && a.format && ht(d[1]).format(a.format) || d[1]) : (i.value[a.key] = ht(d[0]).format(a.format || A && _[A]), i.value[a.key2] = ht(d[1]).format(a.format || A && _[A])), A === "daterange" && a.addTime && (i.value[a.key] += " 00:00:00", i.value[a.key2] += " 23:59:59")) : (i.value[a.key] = null, i.value[a.key2] = null);
            }
            break;
        }
    }
    function et(d, a) {
      const A = Gt(d == null ? void 0 : d.options);
      if (A)
        if (d != null && d.multiple || (d == null ? void 0 : d.type) === "checkboxGroup") {
          if (a) {
            let _ = [];
            for (let ie of A)
              a.indexOf(ie == null ? void 0 : ie.val) !== -1 && _.push(ie);
            return _;
          }
          return !1;
        } else {
          if (a || a === 0 || a === !1) {
            for (let _ of A)
              if ((_ == null ? void 0 : _.val) === a)
                return _;
          }
          return !1;
        }
    }
    function Xe(d, a = null) {
      const A = [];
      if (C.value)
        for (let _ of f.value)
          for (let ie of _)
            ie.key === d && typeof ie.tempKey == "string" && A.push(ie);
      else
        for (let _ of f.value)
          _.key === d && typeof _.tempKey == "string" && A.push(_);
      if (A.length === 0)
        return !1;
      if (a && typeof a == "function") {
        const _ = A.filter((ie) => a(ie));
        return _.length > 0 ? _ : !1;
      }
      return A;
    }
    function H(d, a) {
      let A = {};
      for (let _ in i.value)
        i.value.hasOwnProperty(_) && d[_] !== void 0 && (A[_] = d[_], delete d[_]);
      ke(A, a);
      for (let _ in d)
        d.hasOwnProperty(_) && (u.indexOf(_) < 0 && u.push(_), i.value[_] = d[_]);
    }
    function U(d) {
      let a = me(d);
      if (C.value) {
        let A = [];
        for (let _ of l.formData)
          A.push(...he(_, a));
        return A;
      }
      return he(l.formData, a);
    }
    function he(d, a) {
      return d.filter((A) => {
        for (let _ of Object.keys(a))
          if ((A == null ? void 0 : A.key) === _ && L.value.indexOf(_) > -1 && !(a[_] === null || (Array.isArray(a[_]) || Y(a[_]) === "Object") && Ne(a[_])))
            return delete a[_], !0;
        return !1;
      }).map((A) => A == null ? void 0 : A.key);
    }
    function ke(d, a = !1) {
      let A = me(d);
      Se(d, a);
      for (let _ in i.value)
        if (i.value.hasOwnProperty(_) && d[_] !== void 0 && d[_] !== "--") {
          if (Array.isArray(d[_]))
            d[_] = d[_].filter((ae) => ae !== "--");
          else if (Y(d[_]) === "Object")
            for (let ae in d[_])
              d[_].hasOwnProperty(ae) && d[_][ae] === "--" && (d[_][ae] = null);
          Xe(_, (ae) => !!(ae.booleanVal && !ae.multiple)) ? i.value[_] = !!d[_] : i.value[_] = d[_];
        } else a || (i.value[_] = Array.isArray(i.value[_]) ? [] : null);
      Fe(function() {
        ma(U(A));
      });
    }
    function Se(d, a = !1) {
      if (C.value)
        for (let A of f.value)
          ue(A, d, a);
      else
        ue(f.value, d, a);
    }
    function ue(d, a, A = !1) {
      for (let _ of d)
        if (_ != null && _.key && (A && (a[_.key] !== void 0 || _.key2 && a[_.key2] !== void 0) || !A) && _.tempKey)
          switch (_.type) {
            case "inputMap":
              if (!_.key2)
                continue;
              Y(a[_.key]) === "Number" && Y(a[_.key2] === "Number") ? _.key3 ? s.value[_.tempKey] = {
                lng: a[_.key],
                lat: a[_.key2],
                name: a[_.key3]
              } : s.value[_.tempKey] = {
                lng: a[_.key],
                lat: a[_.key2]
              } : _.key3 ? s.value[_.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : s.value[_.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              a[_.key] && a[_.key] !== "--" || a[_.key] === 0 ? s.value[_.tempKey] = a[_.key] : s.value[_.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              a[_.key] && a[_.key] !== "--" || a[_.key] === 0 || a[_.key] === !1 ? _.multiple || _.type === "checkboxGroup" ? s.value[_.tempKey] = [...a[_.key]] : _.booleanVal ? s.value[_.tempKey] = a[_.key] ? 1 : 0 : s.value[_.tempKey] = a[_.key] : _.multiple || _.type === "checkboxGroup" ? s.value[_.tempKey] = [] : s.value[_.tempKey] = null;
              break;
            case "date":
            case "time":
              if (_.dateType === "date" || _.dateType === "datetime" || _.dateType === "year" || _.dateType === "month" || _.dateType === "time")
                s.value[_.tempKey] = a[_.key] && a[_.key] !== "--" ? a[_.key] : null;
              else if (_.dateType === "daterange" || _.dateType === "datetimerange" || _.dateType === "timerange") {
                if (!_.key2)
                  continue;
                s.value[_.tempKey] = a[_.key] && a[_.key] !== "--" && a[_.key2] && a[_.key2] !== "--" && [a[_.key], a[_.key2]] || [];
              }
              break;
          }
    }
    function ne(d) {
      if (Array.isArray(d))
        for (let a of d)
          Re(a);
      else Y(d) === "Object" && Re(d);
    }
    function Re(d) {
      const { index: a, indexB: A, key: _, val: ie } = d;
      if (typeof a == "number")
        if (Array.isArray(f.value[a])) {
          if (typeof A == "number")
            if (_ && d.hasOwnProperty("val"))
              f.value[a][A][_] = ie;
            else
              for (let ae of Object.keys(d))
                ae !== "index" && _ !== "indexB" && (f.value[a][A][ae] = d[ae]);
        } else if (_ && d.hasOwnProperty("val"))
          f.value[a][_] = ie;
        else
          for (let ae of Object.keys(d))
            ae !== "index" && (f.value[a][ae] = d[ae]);
    }
    function it({ label: d, root: a }) {
      a.key2 && (i.value[a.key2] = d), rt({
        e: d,
        root: a
      });
    }
    function pt(d) {
      d.beforeKey && Ba(c.value, (a) => a === d.beforeKey), d.key && (c.value.indexOf(d.key) === -1 && c.value.push(d.key), rt({
        e: null,
        root: d
      }));
    }
    function Je({ name: d, root: a }) {
      a.key2 && (i.value[a.key2] = d), rt({
        e: d,
        root: a
      });
    }
    function Ct({ e: d, root: a }) {
      rt({
        e: d,
        root: a
      }), Fe(function() {
        var A, _;
        (_ = (A = r.value) == null ? void 0 : A.validateField) == null || _.call(A, a.key);
      });
    }
    function rt({ e: d, root: a }) {
      $e(() => {
        var _;
        let A = {
          event: d
        };
        if (a.key && (A[a.key] = i.value[a.key]), a.key2 && (A[a.key2] = i.value[a.key2]), Array.isArray(a.collectLabel))
          for (let ie of a.collectLabel)
            A[ie.key] = i.value[ie.key];
        else (_ = a.collectLabel) != null && _.key && (A[a.collectLabel.key] = i.value[a.collectLabel.key]);
        e("on-item-change", A);
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
      $e(() => {
        var a, A;
        (A = (a = r.value) == null ? void 0 : a.validateField) == null || A.call(a, d, () => {
        });
      }, 10);
    }
    function ma(d) {
      $e(() => {
        var a, A;
        if (Array.isArray(d))
          for (let _ of d)
            (A = (a = r.value) == null ? void 0 : a.validateField) == null || A.call(a, _, () => {
            });
      }, 10);
    }
    function ha(d) {
      d !== void 0 && (h.value = !!d);
    }
    function zt() {
      var d, a;
      l.disabled || (a = (d = r.value) == null ? void 0 : d.validate) == null || a.call(d, (A) => {
        B || (B = !0, A && (h.value = !0, e("on-submit", hl())), $e(() => {
          B = !1;
        }, 2e3));
      });
    }
    return He(() => {
      se(), ye();
    }), o({
      resetForm: x,
      refreshFormDom: E,
      reRenderForm: ee,
      setItemToValGroup: H,
      updateValGroup: ke,
      updateFormDataT: ne,
      validate: fa,
      reValidate: pa,
      changeLoading: ha,
      getValGroup: hl,
      submit: zt
    }), (d, a) => {
      const A = te("FormItem"), _ = te("Button"), ie = te("Form");
      return S(), le(ie, {
        ref_key: "formGroupXRef",
        ref: r,
        model: p(i),
        rules: p(T),
        "label-width": l.labelWidth,
        inline: l.inline,
        "show-message": l.showMessage,
        class: "formXN",
        key: p(b)
      }, {
        default: oe(() => [
          Q(A, { style: { display: "none" } }, {
            default: oe(() => a[0] || (a[0] = [
              $("input", { type: "text" }, null, -1)
            ])),
            _: 1,
            __: [0]
          }),
          p(C) ? (S(!0), K(be, { key: 0 }, Ve(p(f), (ae, Pe) => (S(), K("div", {
            class: _e([d.teamClass, "formTeamBox" + Pe]),
            key: "formTeamBox" + Pe
          }, [
            (S(!0), K(be, null, Ve(ae, (j, Z) => (S(), K(be, {
              key: "formItem" + Z
            }, [
              M(j) ? (S(), le(Pl, {
                key: 0,
                item: j,
                style: de(p(V)),
                "item-style": p(N),
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
                onClearTempKeyItem: D,
                onSelectInputChange: pt,
                onAlNameChange: Je,
                onAsyncLabelChange: it
              }, ct({ _: 2 }, [
                Ve(F(ae), (Be) => ({
                  name: Be.slotName,
                  fn: oe((Ue) => [
                    Ee(d.$slots, Be.slotName, {
                      valGroup: Ue.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ce("", !0)
            ], 64))), 128))
          ], 2))), 128)) : ce("", !0),
          (S(!0), K(be, null, Ve(p(f), (ae, Pe) => (S(), K(be, {
            key: "formItem" + Pe
          }, [
            !p(C) && M(ae) ? (S(), le(Pl, {
              key: 0,
              item: ae,
              style: de(p(V)),
              "item-style": p(N),
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
              onClearTempKeyItem: D,
              onSelectInputChange: pt,
              onAlNameChange: Je,
              onAsyncLabelChange: it
            }, ct({ _: 2 }, [
              Ve(F(d.formData), (j) => ({
                name: j.slotName,
                fn: oe((Z) => [
                  Ee(d.$slots, j.slotName, {
                    valGroup: Z.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ce("", !0)
          ], 64))), 128)),
          l.showLongOkBt ? (S(), le(A, { key: 1 }, {
            default: oe(() => [
              Q(_, {
                onClick: zt,
                style: de(p(N)),
                type: "primary",
                loading: l.btnLoading && p(h),
                disabled: l.disabled
              }, {
                default: oe(() => [
                  we(q(l.longOkBtTxt || p(I)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ce("", !0),
          $("div", No, [
            l.showInlineOkBt ? (S(), le(_, {
              key: 0,
              type: "primary",
              class: _e({ inlineFormBtXN: l.inline, okBtnXN: !0 }),
              onClick: zt,
              loading: l.btnLoading && p(h),
              disabled: l.disabled
            }, {
              default: oe(() => [
                we(q(l.inlineOkBtTxt || p(I)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : ce("", !0),
            l.showInlineClearBt ? (S(), le(_, {
              key: 1,
              onClick: x,
              class: _e({ inlineFormBtXN: l.inline }),
              type: "dashed"
            }, {
              default: oe(() => [
                we(q(l.inlineClearBtTxt || p(I)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : ce("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), Eo = /* @__PURE__ */ fe({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    width: { default: () => xe().formGroupWidth },
    labelWidth: { default: () => xe().formGroupLabelWidth },
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
    const e = n, l = t, r = z({ width: l.width }), i = z(!1), f = z(), s = W(() => {
      var L, F;
      if (Array.isArray(l.formData))
        if (Array.isArray(l.formData[0])) {
          let y = [];
          for (let O of l.formData)
            O && (y = y.concat(
              O.filter((x) => (x == null ? void 0 : x.type) === "custom" || (x == null ? void 0 : x.type) === "input" && x.slotName && x.slotPosition)
            ));
          return y;
        } else
          return (F = (L = l.formData) == null ? void 0 : L.filter) == null ? void 0 : F.call(
            L,
            (y) => (y == null ? void 0 : y.type) === "custom" || (y == null ? void 0 : y.type) === "input" && y.slotName && y.slotPosition
          );
      return [];
    });
    function v() {
      return new Promise((L) => {
        var F, y;
        (y = (F = f.value).resetForm) == null || y.call(F).then((O) => {
          L(O);
        });
      });
    }
    function m() {
      return new Promise((L) => {
        var F, y;
        (y = (F = f.value).refreshFormDom) == null || y.call(F).then((O) => {
          L(O);
        });
      });
    }
    function c() {
      return new Promise((L) => {
        var F, y;
        (y = (F = f.value).reRenderForm) == null || y.call(F).then((O) => {
          L(O);
        });
      });
    }
    function u(L, F) {
      var y, O;
      (O = (y = f.value).setItemToValGroup) == null || O.call(y, L, F);
    }
    function h(L, F) {
      var y, O;
      (O = (y = f.value).updateValGroup) == null || O.call(y, L, F);
    }
    function b(L) {
      var F, y;
      (y = (F = f.value).updateFormDataT) == null || y.call(F, L);
    }
    function k() {
      var L, F;
      (F = (L = f.value).validate) == null || F.call(L);
    }
    function B(L) {
      var F, y;
      (y = (F = f.value).reValidate) == null || y.call(F, L);
    }
    function C(L) {
      var F, y;
      L !== void 0 && (i.value = !!L, (y = (F = f.value).changeLoading) == null || y.call(F, i.value));
    }
    function V() {
      var L, F;
      return (F = (L = f.value).getValGroup) == null ? void 0 : F.call(L);
    }
    function N() {
      i.value = !0;
    }
    function T() {
      var L, F;
      (F = (L = f.value).submit) == null || F.call(L);
    }
    function R() {
      e("on-cancel"), $e(() => {
        var L, F;
        i.value = !1, (F = (L = f.value).changeLoading) == null || F.call(L, !1);
      }, 1e3);
    }
    return o({
      resetForm: v,
      refreshFormDom: m,
      reRenderForm: c,
      setItemToValGroup: u,
      updateValGroup: h,
      updateFormDataT: b,
      validate: k,
      reValidate: B,
      changeLoading: C,
      getValGroup: V,
      submit: T,
      close: R
    }), (L, F) => {
      const y = te("Button");
      return S(), K("div", {
        style: de(p(r)),
        class: "formGroupBoxVM"
      }, [
        Q(Kt, ft({
          ref_key: "formRRef",
          ref: f
        }, L.$attrs, {
          "form-data": l.formData,
          "label-width": l.labelWidth,
          "content-width": l.contentWidth,
          "item-width": l.itemWidth,
          btnLoading: l.btnLoading,
          disabled: l.disabled,
          onOnSubmit: N
        }), ct({ _: 2 }, [
          Ve(p(s), (O) => ({
            name: O.slotName,
            fn: oe(({ valGroup: x }) => [
              Ee(L.$slots, O.slotName, { valGroup: x })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading", "disabled"]),
        pe($("div", {
          class: "formFooterVM",
          style: de({ marginLeft: l.labelWidth + "px" })
        }, [
          $("div", {
            style: de({ width: l.contentWidth }),
            class: "btnBoxKAL"
          }, [
            l.showOkBt ? (S(), le(y, {
              key: 0,
              onClick: T,
              class: "form-save-btn",
              loading: l.btnLoading && p(i),
              disabled: l.disabled
            }, {
              default: oe(() => [
                we(q(l.okBtTxt || p(I)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])) : ce("", !0),
            l.showCancelBt ? (S(), le(y, {
              key: 1,
              onClick: R,
              class: "form-cancel-btn"
            }, {
              default: oe(() => [
                we(q(l.cancelBtTxt || p(I)("r.cancel")), 1)
              ]),
              _: 1
            })) : ce("", !0)
          ], 4)
        ], 4), [
          [ge, l.showOkBt || l.showCancelBt]
        ])
      ], 4);
    };
  }
}), rl = /* @__PURE__ */ fe({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => xe().searchFormLabelWidth },
    itemWidth: { default: () => xe().searchFormItemWidth },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(t, { expose: o, emit: n }) {
    const e = n, l = t, r = z(), i = (T) => {
      (T == null ? void 0 : T.keyCode) === 13 && N();
    }, f = W(() => {
      var T, R;
      if (Array.isArray(l.formData[0])) {
        let L = [];
        for (let F of l.formData)
          F && (L = L.concat(
            F.filter((y) => (y == null ? void 0 : y.type) === "custom" || (y == null ? void 0 : y.type) === "input" && y.slotName && y.slotPosition)
          ));
        return L;
      }
      return (R = (T = l.formData) == null ? void 0 : T.filter) == null ? void 0 : R.call(
        T,
        (L) => (L == null ? void 0 : L.type) === "custom" || (L == null ? void 0 : L.type) === "input" && L.slotName && L.slotPosition
      );
    });
    function s() {
      return new Promise((T) => {
        var R, L;
        (L = (R = r.value).resetForm) == null || L.call(R).then(() => {
          T();
        });
      });
    }
    function v() {
      return new Promise((T) => {
        var R, L;
        (L = (R = r.value).refreshFormDom) == null || L.call(R).then(() => {
          T();
        });
      });
    }
    function m() {
      return new Promise((T) => {
        var R, L;
        (L = (R = r.value).reRenderForm) == null || L.call(R).then(() => {
          T();
        });
      });
    }
    function c(T, R) {
      var L, F;
      (F = (L = r.value).setItemToValGroup) == null || F.call(L, T, R);
    }
    function u(T, R) {
      var L, F;
      (F = (L = r.value).updateValGroup) == null || F.call(L, T, R);
    }
    function h(T) {
      var R, L;
      (L = (R = r.value).updateFormDataT) == null || L.call(R, T);
    }
    function b() {
      var T, R;
      (R = (T = r.value).validate) == null || R.call(T);
    }
    function k(T) {
      var R, L;
      (L = (R = r.value).reValidate) == null || L.call(R, T);
    }
    function B(T) {
      var R, L;
      (L = (R = r.value).changeLoading) == null || L.call(R, T === void 0 ? !1 : T);
    }
    function C() {
      var T, R;
      return (R = (T = r.value).getValGroup) == null ? void 0 : R.call(T);
    }
    function V(T) {
      e("on-search", T);
    }
    function N() {
      var T, R;
      (R = (T = r.value).submit) == null || R.call(T);
    }
    return He(() => {
      const T = r.value.$el;
      T != null && T.parentNode && T.parentNode.addEventListener("keyup", i);
    }), ot(() => {
      var R;
      const T = (R = r.value) == null ? void 0 : R.$el;
      T != null && T.parentNode && T.parentNode.removeEventListener("keyup", i);
    }), o({
      resetForm: s,
      refreshFormDom: v,
      reRenderForm: m,
      setItemToValGroup: c,
      updateValGroup: u,
      updateFormDataT: h,
      validate: b,
      reValidate: k,
      changeLoading: B,
      getValGroup: C,
      submit: N
    }), (T, R) => (S(), le(Kt, ft({
      ref_key: "formRRef",
      ref: r
    }, T.$attrs, {
      "form-data": l.formData,
      "label-width": l.labelWidth,
      "item-width": l.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": l.showInlineOkBt,
      "inline-ok-bt-txt": p(I)("r.check"),
      "show-inline-clear-bt": l.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: V
    }), ct({ _: 2 }, [
      Ve(p(f), (L) => ({
        name: L.slotName,
        fn: oe(({ valGroup: F }) => [
          Ee(T.$slots, L.slotName, { valGroup: F })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), Ko = /* @__PURE__ */ fe({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: () => xe().formModalWidth },
    labelWidth: { default: () => xe().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(t, { expose: o, emit: n }) {
    const e = n, l = t, r = z(), i = z(!1), f = z(!1), s = W(() => {
      var y, O;
      if (Array.isArray(l.formData[0])) {
        let x = [];
        for (let ee of l.formData)
          ee && (x = x.concat(
            ee.filter((E) => (E == null ? void 0 : E.type) === "custom" || (E == null ? void 0 : E.type) === "input" && E.slotName && E.slotPosition)
          ));
        return x;
      }
      return (O = (y = l.formData) == null ? void 0 : y.filter) == null ? void 0 : O.call(
        y,
        (x) => (x == null ? void 0 : x.type) === "custom" || (x == null ? void 0 : x.type) === "input" && x.slotName && x.slotPosition
      );
    });
    function v() {
      return new Promise((y) => {
        var O, x;
        (x = (O = r.value).resetForm) == null || x.call(O).then(() => {
          y();
        });
      });
    }
    function m() {
      return new Promise((y) => {
        var O, x;
        (x = (O = r.value).refreshFormDom) == null || x.call(O).then(() => {
          y();
        });
      });
    }
    function c() {
      return new Promise((y) => {
        var O, x;
        (x = (O = r.value).reRenderForm) == null || x.call(O).then(() => {
          y();
        });
      });
    }
    function u(y, O) {
      var x, ee;
      (ee = (x = r.value).setItemToValGroup) == null || ee.call(x, y, O);
    }
    function h(y, O) {
      var x, ee;
      (ee = (x = r.value).updateValGroup) == null || ee.call(x, y, O);
    }
    function b(y) {
      var O, x;
      (x = (O = r.value).updateFormDataT) == null || x.call(O, y);
    }
    function k() {
      var y, O;
      (O = (y = r.value).validate) == null || O.call(y);
    }
    function B(y) {
      var O, x;
      (x = (O = r.value).reValidate) == null || x.call(O, y);
    }
    function C(y) {
      var O, x;
      y !== void 0 && (f.value = !!y, (x = (O = r.value).changeLoading) == null || x.call(O, f.value));
    }
    function V() {
      var y, O;
      return (O = (y = r.value).getValGroup) == null ? void 0 : O.call(y);
    }
    function N() {
      f.value = !0;
    }
    function T() {
      var y, O;
      l.hideCancelBt ? L() : (O = (y = r.value).submit) == null || O.call(y);
    }
    function R() {
      i.value = !0;
    }
    function L() {
      i.value = !1, $e(() => {
        var y, O;
        f.value = !1, (O = (y = r.value).changeLoading) == null || O.call(y, !1);
      }, 1e3);
    }
    function F(y) {
      e(y ? "on-open" : "on-close");
    }
    return o({
      resetForm: v,
      refreshFormDom: m,
      reRenderForm: c,
      setItemToValGroup: u,
      updateValGroup: h,
      updateFormDataT: b,
      validate: k,
      reValidate: B,
      changeLoading: C,
      getValGroup: V,
      submit: T,
      open: R,
      close: L
    }), (y, O) => {
      const x = te("Button"), ee = te("Modal");
      return S(), le(ee, {
        class: _e(["formModal", { hideFooter: l.hideFooter }]),
        title: l.title || p(I)("r.title"),
        modelValue: p(i),
        "onUpdate:modelValue": O[0] || (O[0] = (E) => De(i) ? i.value = E : null),
        "mask-closable": !1,
        "footer-hide": l.hideFooter,
        width: l.width,
        onOnVisibleChange: F
      }, {
        footer: oe(() => [
          Q(x, {
            onClick: T,
            class: "modal-save-btn",
            loading: l.btnLoading && p(f),
            disabled: l.disabled
          }, {
            default: oe(() => [
              we(q(l.okBtTxt || p(I)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled"]),
          l.hideCancelBt ? ce("", !0) : (S(), le(x, {
            key: 0,
            onClick: L,
            class: "modal-cancel-btn"
          }, {
            default: oe(() => [
              we(q(l.cancelBtTxt || p(I)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: oe(() => [
          Q(Kt, ft({
            ref_key: "formRRef",
            ref: r
          }, y.$attrs, {
            "form-data": l.formData,
            "label-width": l.labelWidth,
            btnLoading: l.btnLoading,
            disabled: l.disabled,
            onOnSubmit: N
          }), ct({ _: 2 }, [
            Ve(p(s), (E) => ({
              name: E.slotName,
              fn: oe(({ valGroup: w }) => [
                Ee(y.$slots, E.slotName, { valGroup: w })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading", "disabled"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), zo = /* @__PURE__ */ fe({
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
    const n = o, e = t, l = z(!0), r = z([]), i = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let f = [];
    const s = W(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), v = W(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    Ce(
      () => e.data,
      (k) => {
        l.value = !1;
        let B = [];
        m(k, B), r.value = B, Fe(function() {
          l.value = !0, e.inlineLeaf && Fe(h);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), Ce(
      () => v.value,
      (k) => {
        let B, C = "s";
        if (Array.isArray(e.collectVal) ? (B = e.collectVal[0] || "", C = "a") : B = e.collectVal, !B || JSON.stringify(k) === JSON.stringify(f)) {
          f = [];
          return;
        }
        dt({
          group: r.value,
          condition: (V) => (V == null ? void 0 : V.checked) === !0,
          key: "checked",
          val: !1
        }), dt(C === "a" ? {
          group: r.value,
          condition: (V) => Ot(k, [B, V == null ? void 0 : V[B]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: r.value,
          condition: (V) => k.indexOf(V == null ? void 0 : V[B]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), Ce(
      () => e.disabled,
      (k) => {
        dt({
          group: r.value,
          condition: (B) => B && B.disableCheckbox !== k,
          key: "disableCheckbox",
          val: k
        }), e.inlineLeaf && Fe(h);
      },
      { immediate: !0 }
    );
    function m(k, B = []) {
      for (let C of k) {
        let V = !1;
        s.value.length > 1 ? V = Jt(v.value, (T) => T[s.value[0]] === C[s.value[0]]) !== void 0 : V = s.value[0] ? v.value.indexOf(C[s.value[0]]) !== -1 : !1;
        let N = {
          name: C == null ? void 0 : C[e.label],
          expand: !!(e.expandAll || C != null && C.expand),
          checked: V,
          disableCheckbox: e.disabled
        };
        for (let T of s.value)
          N[T] = C[T];
        B.push(N), C != null && C.children && C.children.length > 0 && (N.children = [], c(C.children, N.children));
      }
    }
    function c(k, B = []) {
      for (let C of k) {
        let V = !1;
        s.value.length > 1 ? V = Jt(v.value, (T) => T[s.value[0]] === C[s.value[0]]) !== void 0 : V = s.value[0] ? v.value.indexOf(C[s.value[0]]) !== -1 : !1;
        let N = {
          name: C == null ? void 0 : C[e.label],
          expand: !!(e.expandAll || C != null && C.expand),
          checked: V,
          disableCheckbox: e.disabled
        };
        for (let T of s.value)
          N[T] = C[T];
        B.push(N), C != null && C.children && C.children.length > 0 && (N.children = [], m(C.children, N.children));
      }
    }
    function u(k, {
      data: B
    }) {
      let C = "", V = !0;
      if (B.children && B.children.length > 0) {
        for (let N of B.children)
          if (N.children !== void 0) {
            V = !1;
            break;
          }
        V && e.inlineLeaf && (C = "inlineChildXA");
      }
      return k(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: C
        },
        [
          k(
            "span",
            {
              style: {
                fontWeight: B.children ? "bold" : "normal"
              }
            },
            B.name
          )
        ]
      );
    }
    function h(k) {
      if (k) {
        k.expand && Fe(h);
        return;
      }
      let B = document.querySelectorAll("#" + i + " .inlineChildXA");
      if (B.length > 0)
        for (let C of B) {
          let V = C == null ? void 0 : C.parentElement, N = V == null ? void 0 : V.nextElementSibling;
          if (!N)
            return;
          if (N.tagName !== "BR") {
            let T = V == null ? void 0 : V.parentElement, R = document.createElement("br");
            T == null || T.insertBefore(R, N);
            const L = R.nextElementSibling;
            if (L) {
              const F = L.children;
              if (F)
                for (let y of F)
                  (y == null ? void 0 : y.className.indexOf("inlineTreeNodeF")) === -1 && y.setAttribute("class", y.className + " inlineTreeNodeF");
            }
          }
        }
    }
    function b(k) {
      let B = [];
      if (e.leaf) {
        for (let C of k)
          if (!C.children)
            if (Array.isArray(e.collectVal)) {
              let V = {};
              for (let N of e.collectVal)
                V[N] = C[N];
              B.push(V);
            } else
              B.push(C[e.collectVal]);
      } else
        for (let C of k)
          if (Array.isArray(e.collectVal)) {
            let V = {};
            for (let N of e.collectVal)
              V[N] = C[N];
            B.push(V);
          } else
            B.push(C[e.collectVal]);
      f = B, n("update:modelValue", B), n("on-change", me(B));
    }
    return (k, B) => {
      const C = te("Tree");
      return p(l) ? (S(), le(C, {
        key: 0,
        id: i,
        class: "checkboxTreeGA",
        data: p(r),
        render: u,
        onOnCheckChange: b,
        onOnToggleExpand: h,
        "show-checkbox": ""
      }, null, 8, ["data"])) : ce("", !0);
    };
  }
}), Uo = { class: "transferBoxRL" }, Go = { class: "leftBoxLLL" }, Ho = { class: "fullHeight flexColumnBox" }, Wo = { class: "notGrow" }, jo = { class: "titleLLL" }, qo = { class: "growFlexItem" }, Xo = { class: "middleBoxLLL" }, Jo = { class: "rightBoxLLL" }, Yo = { class: "fullHeight flexColumnBox" }, Qo = { class: "notGrow" }, Zo = { class: "titleLLL" }, ei = { class: "growFlexItem" }, ti = /* @__PURE__ */ fe({
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
      return (t = xe()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = xe()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = xe()) == null ? void 0 : t.pageShowSizer;
    } },
    leftSearchDataFilter: {},
    rightSearchDataFilter: {}
  },
  emits: ["transferred", "on-data-change-l", "on-data-change-r"],
  setup(t, { expose: o, emit: n }) {
    const e = n, l = t;
    let r = z({}), i = z({}), f = z([]), s = z([]), v = z(0), m = z(0);
    const c = W(() => ({ ...l.constSearchDataLeft, ...r.value })), u = W(() => ({ ...l.constSearchDataRight, ...i.value })), h = W(() => v.value < 1), b = W(() => f.value.length < 1), k = W(() => s.value.length < 1), B = W(() => m.value < 1), C = z(), V = z(), N = z(), T = z();
    function R() {
      C.value.resetForm(), V.value.resetForm(), Ne(r.value) || (r.value = {}), Ne(i.value) || (i.value = {}), N.value.clearSelect(), T.value.clearSelect();
    }
    function L() {
      N.value.search(), T.value.search();
    }
    function F(M) {
      f.value = M;
    }
    function y(M) {
      s.value = M;
    }
    function O(M) {
      var G, J, re, ye, ve;
      v.value = ((J = (G = M == null ? void 0 : M.data) == null ? void 0 : G.page) == null ? void 0 : J.total) || ((ye = (re = M == null ? void 0 : M.data) == null ? void 0 : re.data) == null ? void 0 : ye.total) || ((ve = M == null ? void 0 : M.data) == null ? void 0 : ve.total) || (M == null ? void 0 : M.total) || 0, e("on-data-change-l", M);
    }
    function x(M) {
      var G, J, re, ye, ve;
      m.value = ((J = (G = M == null ? void 0 : M.data) == null ? void 0 : G.page) == null ? void 0 : J.total) || ((ye = (re = M == null ? void 0 : M.data) == null ? void 0 : re.data) == null ? void 0 : ye.total) || ((ve = M == null ? void 0 : M.data) == null ? void 0 : ve.total) || (M == null ? void 0 : M.total) || 0, e("on-data-change-r", M);
    }
    function ee(M) {
      typeof l.leftSearchDataFilter == "function" ? r.value = l.leftSearchDataFilter(M) : r.value = M;
    }
    function E(M) {
      typeof l.rightSearchDataFilter == "function" ? i.value = l.rightSearchDataFilter(M) : i.value = M;
    }
    function w() {
      l.addUrl && P("add");
    }
    function X() {
      l.deleteUrl && P("delete");
    }
    function D() {
      l.addAllUrl && l.addUrl && P("addAll");
    }
    function g() {
      l.deleteAllUrl && P("deleteAll");
    }
    function P(M) {
      let G, J, re = {}, ye = "";
      switch (M) {
        case "add":
          G = l.addMethod, J = l.addUrl, re = l.addParamsHandle(s.value), ye = I("r.add");
          break;
        case "delete":
          G = l.deleteMethod, J = l.deleteUrl, re = l.deleteParamsHandle(f.value), ye = I("r.remove");
          break;
        case "addAll":
          G = l.addAllMethod, J = l.addAllUrl, re = l.addAllParamsHandle(u.value), ye = I("r.addAll");
          break;
        case "deleteAll":
          G = l.deleteAllMethod, J = l.deleteAllUrl, re = l.deleteAllParamsHandle(c.value), ye = I("r.removeAll");
          break;
      }
      J && G && qe[G](J, re, null, [], { spin: !0 }, !1).then((ve) => {
        (ve == null ? void 0 : ve.code) === 0 ? (ze(ye + I("r.success"), (ve == null ? void 0 : ve.message) || "", "success"), N.value && N.value.getTableData(), T.value && T.value.getTableData(), e("transferred")) : ze(ye + I("r.failed"), (ve == null ? void 0 : ve.message) || "", "error");
      }).catch(() => {
        ze(ye + I("r.error"), "", "error");
      });
    }
    return o({
      reset: R,
      search: L
    }), (M, G) => {
      const J = te("Icon"), re = te("Button");
      return S(), K("div", Uo, [
        $("div", Go, [
          $("div", Ho, [
            $("div", Wo, [
              $("div", jo, q(l.titleLeft || p(I)("r.added")), 1),
              Q(al, null, {
                default: oe(() => [
                  Q(rl, {
                    ref_key: "leftFormRef",
                    ref: C,
                    "form-data": l.formDataLeft,
                    "form-rules": l.formRulesLeft,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: ee
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            $("div", qo, [
              Q(il, {
                ref_key: "lTabRef",
                ref: N,
                columns: l.leftTableColumns,
                url: l.leftTableUrl,
                "search-data": p(c),
                onOnSelectionChange: F,
                onOnDataChange: O,
                "init-data": !!(p(Ne)(l.constSearchDataLeft) && l.leftTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: l.usePagePro,
                showTotal: l.showTotal,
                showSizer: l.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ]),
        $("div", Xo, [
          Q(re, {
            class: "middleBtLLL",
            type: "default",
            onClick: g,
            disabled: p(h)
          }, {
            default: oe(() => [
              we(q(p(I)("r.removeAll")) + " ", 1),
              Q(J, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Q(re, {
            class: "middleBtLLL",
            type: "default",
            onClick: X,
            disabled: p(b)
          }, {
            default: oe(() => [
              we(q(p(I)("r.remove")) + " ", 1),
              Q(J, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Q(re, {
            class: "middleBtLLL",
            type: "primary",
            onClick: w,
            disabled: p(k)
          }, {
            default: oe(() => [
              Q(J, { type: "ios-arrow-back" }),
              we(" " + q(p(I)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          Q(re, {
            class: "middleBtLLL",
            type: "primary",
            onClick: D,
            disabled: p(B)
          }, {
            default: oe(() => [
              Q(J, { type: "ios-arrow-back" }),
              we(" " + q(p(I)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        $("div", Jo, [
          $("div", Yo, [
            $("div", Qo, [
              $("div", Zo, q(l.titleRight || p(I)("r.notAdded")), 1),
              Q(al, null, {
                default: oe(() => [
                  Q(rl, {
                    ref_key: "rightFormRef",
                    ref: V,
                    "form-data": l.formDataRight,
                    "form-rules": l.formRulesRight,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: E
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            $("div", ei, [
              Q(il, {
                ref_key: "rTabRef",
                ref: T,
                columns: l.rightTableColumns,
                url: l.rightTableUrl,
                "search-data": p(u),
                onOnSelectionChange: y,
                onOnDataChange: x,
                "init-data": !!(p(Ne)(l.constSearchDataRight) && l.rightTableUrl),
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
}), li = { class: "boxLPA" }, ai = { class: "headerJ" }, ni = { class: "firstT borderBoxAS" }, oi = { class: "secondT borderBoxAS" }, ii = { class: "firstCol borderBoxAS" }, si = { class: "secondCol borderBoxAS" }, ri = /* @__PURE__ */ fe({
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
    const n = t, e = o, l = z([]), r = W(() => {
      var c;
      let v = me(n.data), m = me(l.value);
      for (let u of v) {
        let h = 0;
        if (u != null && u.children && !Ne(u.children))
          for (let b of u.children) {
            for (let k = 0, B = m == null ? void 0 : m.length; k < B; k++)
              if (Array.isArray(n.collectVal)) {
                let C = !0;
                for (let V of n.collectVal)
                  if (((c = m[k]) == null ? void 0 : c[V]) !== (b == null ? void 0 : b[V])) {
                    C = !1;
                    break;
                  }
                if (C) {
                  b.checked = !0, h++, m.splice(k, 1);
                  break;
                }
              } else if (m[k] === b[n.collectVal]) {
                b.checked = !0, h++, m.splice(k, 1);
                break;
              }
            !b.checked && (b.checked = !1);
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
        for (let c of v.children)
          c.checked = m;
      f();
    }
    function f() {
      s(r.value, !0);
    }
    function s(v, m) {
      let c = [];
      for (let u of v) {
        if (!m && !n.leaf && u.checked && u.indeterminate === !1)
          if (Array.isArray(n.collectVal)) {
            let h = {};
            for (let b of n.collectVal)
              h[b] = u[b];
            c.push(h);
          } else Y(n.collectVal) === "String" && c.push(u[n.collectVal]);
        if (u.children) {
          for (let h of u.children)
            if (h.checked)
              if (Array.isArray(n.collectVal)) {
                let b = {};
                for (let k of n.collectVal)
                  b[k] = h[k];
                c.push(b);
              } else Y(n.collectVal) === "String" && c.push(h[n.collectVal]);
        }
      }
      m ? (l.value = c, n.leaf ? (e("update:modelValue", c), e("on-change", me(c))) : Fe(function() {
        s(r.value);
      })) : (e("update:modelValue", c), e("on-change", me(c)));
    }
    return (v, m) => {
      const c = te("Checkbox");
      return S(), K("div", li, [
        $("div", ai, [
          $("div", ni, q(v.firstTitle || p(I)("r.level.1")), 1),
          $("div", oi, q(v.secondTitle || p(I)("r.level.2")), 1)
        ]),
        (S(!0), K(be, null, Ve(p(r), (u, h) => (S(), K("div", {
          class: "bodyJ",
          key: "checkboxJ" + h
        }, [
          $("div", ii, [
            Q(c, {
              modelValue: u.checked,
              "onUpdate:modelValue": (b) => u.checked = b,
              indeterminate: u.indeterminate,
              onOnChange: (b) => i(u, b),
              disabled: v.disabled
            }, {
              default: oe(() => [
                we(q(u[v.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          $("div", si, [
            (S(!0), K(be, null, Ve(u.children, (b, k) => (S(), K("div", {
              class: "secItem",
              key: "secItem" + k
            }, [
              Q(c, {
                modelValue: b.checked,
                "onUpdate:modelValue": (B) => b.checked = B,
                onOnChange: f,
                disabled: v.disabled
              }, {
                default: oe(() => [
                  we(q(b[v.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), ui = { class: "boxLPB" }, di = { class: "headerF" }, ci = { class: "firstT borderBoxKa" }, fi = { class: "secondT borderBoxKa" }, pi = { class: "thirdT borderBoxKa" }, mi = { class: "firstCol borderBoxKa" }, hi = { class: "rightBoxAL" }, yi = { class: "secondCol borderBoxKa" }, vi = { class: "thirdCol borderBoxKa" }, gi = /* @__PURE__ */ fe({
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
    const n = o, e = t, l = z([]), r = W(() => {
      let m = me(e.data), c = me(l.value);
      for (let u of m) {
        let h = 0, b = 0;
        if (u != null && u.children && !Ne(u.children))
          for (let k of u.children) {
            let B = 0;
            if (k.children && !Ne(k.children))
              for (let C of k.children) {
                for (let V = 0, N = c.length; V < N; V++)
                  if (Array.isArray(e.collectVal)) {
                    let T = !0;
                    for (let R of e.collectVal)
                      if (c[V][R] !== C[R]) {
                        T = !1;
                        break;
                      }
                    if (T) {
                      C.checked = !0, B++, c.splice(V, 1);
                      break;
                    }
                  } else if (c[V] === C[e.collectVal]) {
                    C.checked = !0, B++, c.splice(V, 1);
                    break;
                  }
                !C.checked && (C.checked = !1);
              }
            B === 0 ? (k.checked = !1, k.indeterminate = !1) : k.children && B === k.children.length ? (k.checked = !0, k.indeterminate = !1, h++) : (k.checked = !1, k.indeterminate = !0, b++);
          }
        h === 0 && b === 0 ? (u.checked = !1, u.indeterminate = !1) : u.children && h === u.children.length ? (u.checked = !0, u.indeterminate = !1) : (u.checked = !1, u.indeterminate = !0);
      }
      return m;
    });
    Ce(
      () => e.modelValue,
      (m, c) => {
        kt(l.value, m) || kt(m, c) || (l.value = m);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function i(m, c) {
      if (m.children) {
        for (let u of m.children)
          if (u.checked = c, u.children)
            for (let h of u.children)
              h.checked = c;
      }
      s();
    }
    function f(m, c) {
      if (m.children)
        for (let u of m.children)
          u.checked = c;
      s();
    }
    function s() {
      v(r.value, !0);
    }
    function v(m, c) {
      let u = [];
      for (let h of m) {
        if (!c && !e.leaf && (h != null && h.checked) && h.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let b = {};
            for (let k of e.collectVal)
              b[k] = h[k];
            u.push(b);
          } else Y(e.collectVal) === "String" && u.push(h[e.collectVal]);
        if (h != null && h.children)
          for (let b of h.children) {
            if (!c && !e.leaf && b.checked && b.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let k = {};
                for (let B of e.collectVal)
                  k[B] = b[B];
                u.push(k);
              } else Y(e.collectVal) === "String" && u.push(b[e.collectVal]);
            if (b.children) {
              for (let k of b.children)
                if (k.checked)
                  if (Array.isArray(e.collectVal)) {
                    let B = {};
                    for (let C of e.collectVal)
                      B[C] = k[C];
                    u.push(B);
                  } else Y(e.collectVal) === "String" && u.push(k[e.collectVal]);
            }
          }
      }
      c ? (l.value = u, e.leaf ? (n("update:modelValue", u), n("on-change", me(u))) : Fe(function() {
        v(r.value);
      })) : (n("update:modelValue", u), n("on-change", me(u)));
    }
    return (m, c) => {
      const u = te("Checkbox");
      return S(), K("div", ui, [
        $("div", di, [
          $("div", ci, q(m.firstTitle || p(I)("r.level.1")), 1),
          $("div", fi, q(m.secondTitle || p(I)("r.level.2")), 1),
          $("div", pi, q(m.thirdTitle || p(I)("r.level.3")), 1)
        ]),
        (S(!0), K(be, null, Ve(p(r), (h, b) => (S(), K("div", {
          class: "bodyF",
          key: "checkboxJ" + b
        }, [
          $("div", mi, [
            Q(u, {
              modelValue: h.checked,
              "onUpdate:modelValue": (k) => h.checked = k,
              indeterminate: h.indeterminate,
              onOnChange: (k) => i(h, k),
              disabled: m.disabled
            }, {
              default: oe(() => [
                we(q(h[m.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          $("div", hi, [
            (S(!0), K(be, null, Ve(h.children, (k, B) => (S(), K("div", {
              class: "rightBoxInner",
              key: "secItem" + B
            }, [
              $("div", yi, [
                Q(u, {
                  modelValue: k.checked,
                  "onUpdate:modelValue": (C) => k.checked = C,
                  indeterminate: k.indeterminate,
                  onOnChange: (C) => f(k, C),
                  disabled: m.disabled
                }, {
                  default: oe(() => [
                    we(q(k[m.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              $("div", vi, [
                (S(!0), K(be, null, Ve(k.children, (C, V) => (S(), K("div", {
                  class: "thirdItem",
                  key: "thirdItem" + V
                }, [
                  Q(u, {
                    modelValue: C.checked,
                    "onUpdate:modelValue": (N) => C.checked = N,
                    onOnChange: s,
                    disabled: m.disabled
                  }, {
                    default: oe(() => [
                      we(q(C[m.label]), 1)
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
}, Ci = { class: "fullFlowContent" }, Vi = /* @__PURE__ */ fe({
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
    return (l, r) => (S(), K("div", {
      style: de(p(n))
    }, [
      $("div", {
        class: _e(["wellCardR", { flexColumnBox: !o.fitToContent }])
      }, [
        $("div", {
          class: _e(["panelHeader", { notGrow: !o.fitToContent }])
        }, [
          $("div", bi, q(o.title || p(I)("r.title")), 1),
          $("div", ki, [
            Ee(l.$slots, "bts")
          ])
        ], 2),
        o.fitToContent ? (S(), K("div", wi, [
          Ee(l.$slots, "default")
        ])) : (S(), K("div", _i, [
          $("div", Ci, [
            Ee(l.$slots, "default")
          ])
        ]))
      ], 2)
    ], 4));
  }
}), Si = /* @__PURE__ */ fe({
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
    let l = z(1), r = 1;
    const i = z(""), f = bt([]);
    let s = {}, v = !0, m = !1;
    const c = "scm" + Math.random(), { onCompositionStart: u, onCompositionEnd: h, handleChange: b } = Et(), k = W(() => i.value ? I("r.searchFor") + i.value : e.placeholder || I("r.pInput")), B = W({
      get() {
        return e.modelValue ?? "";
      },
      set(x) {
        if (n("update:modelValue", x ?? ""), e.collectLabel && x !== void 0) {
          let ee = {};
          for (let E of f.value)
            if (E[e.optionsValKey] === x) {
              ee = JSON.parse(JSON.stringify(E));
              break;
            }
          n("on-change", ee);
        }
      }
    }), C = W(() => e.searchKey ? {
      ...e.searchData,
      current: l.value,
      [e.searchKey]: i.value
    } : {
      ...e.searchData,
      current: l.value
    });
    Ce(
      () => e.getOptions,
      (x) => {
        x ? v && O() : R();
      },
      { immediate: !0 }
    ), Ce(
      () => e.url,
      (x) => {
        x && (m = !0);
      }
    );
    const V = z();
    function N() {
      const x = V.value.$el.querySelector('.ivu-select-input[type="text"]');
      x.addEventListener("compositionstart", u), x.addEventListener("compositionend", h), x.addEventListener("keyup", F);
    }
    function T() {
      var ee, E;
      const x = (E = (ee = V.value) == null ? void 0 : ee.$el) == null ? void 0 : E.querySelector('.ivu-select-input[type="text"]');
      x && (x.removeEventListener("compositionstart", u), x.removeEventListener("compositionend", h), x.removeEventListener("keyup", F));
    }
    function R() {
      v || (B.value = "", v = !0, i.value = "", f.value = [], l.value = 1, r = 1, s = {}, m = !1);
    }
    function L(x) {
      for (let ee of f.value)
        if ((ee == null ? void 0 : ee.label) === x)
          return !0;
      return !1;
    }
    const F = Dt(function(x) {
      b(() => {
        var E;
        const ee = (E = x == null ? void 0 : x.target) == null ? void 0 : E.value;
        L(ee) || (Me(ee) ? (m ? R() : (Ne(s) && (s.current = l.value, s.pages = r, s.options = me(f.value)), Me(B.value) && (B.value = "")), i.value = String(ee), f.value = [], l.value = 1, v = !0, O()) : m ? (R(), O()) : (B.value = "", i.value = "", s.current ? (l.value = s.current, r = s.pages, f.value = me(s.options), s = {}) : O()));
      });
    }, 600);
    ot(() => {
      F.cancel(), T();
    });
    function y() {
      m && R(), l.value < r ? (++l.value, Fe(function() {
        O();
      })) : kl.warning({
        background: !0,
        content: I("r.noMore")
      });
    }
    function O() {
      return new Promise((x, ee) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Me(i.value)) {
            x(!1);
            return;
          }
          qe.get(e.url, C.value).then((E) => {
            var D;
            v = !1;
            let w = [];
            (D = E == null ? void 0 : E.data) != null && D.records ? (w = E.data.records, r = E.data.pages) : E != null && E.data && Y(E.data) === "Array" ? (w = E.data, r = E.pages) : E != null && E.data && Y(E.data) === "Object" && (w = [E.data], r = 1), typeof e.optionFilter == "function" && Y(e.optionFilter) === "Function" && (w = e.optionFilter(w)), Ne(w) || (w = w.map((g, P) => {
              let M = I("r.optionLabel") + P;
              if (Array.isArray(e.optionsLabelKey)) {
                let G = [];
                for (let J = 1, re = e.optionsLabelKey.length; J < re; J++)
                  G.push(g[e.optionsLabelKey[J]]);
                M = `${g[e.optionsLabelKey[0]]}(${String(G)})`;
              } else Kl(e.optionsLabelKey) && (M = g[e.optionsLabelKey]);
              if (e.collectLabel) {
                let G = me(g);
                return delete G.value, delete G.label, {
                  value: g[e.optionsValKey],
                  label: M,
                  ...G
                };
              }
              return {
                value: g[e.optionsValKey],
                label: M
              };
            })), f.value.push(...w);
            let X = {};
            f.value = f.value.filter((g) => X[g == null ? void 0 : g.value] ? !1 : (X[g == null ? void 0 : g.value] = !0, !0)), Fe(function() {
              n("update-option-finish");
            }), x(!0);
          }).catch(() => {
            kl.error(I("r.getDataError")), ee(I("r.getDataError"));
          });
        } else
          x(!1);
      });
    }
    return He(N), (x, ee) => {
      const E = te("Option"), w = te("Select"), X = Ft("loadmore");
      return pe((S(), le(w, ft({
        modelValue: p(B),
        "onUpdate:modelValue": ee[0] || (ee[0] = (D) => De(B) ? B.value = D : null),
        ref_key: "selectScrollSourceRef",
        ref: V,
        "transfer-class-name": c
      }, x.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: p(k),
        disabled: x.disabled
      }), {
        default: oe(() => [
          (S(!0), K(be, null, Ve(p(f), (D, g) => (S(), le(E, {
            key: "op" + g,
            value: D == null ? void 0 : D.value,
            label: D == null ? void 0 : D.label,
            disabled: D == null ? void 0 : D.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [X, y, c]
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
}, Symbol.toStringTag, { value: "Module" })), Ti = { class: "a4Line aL notPrint" }, Bi = { class: "a4Line aR notPrint" }, Li = { class: "a4Line bL notPrint" }, xi = { class: "a4Line bR notPrint" }, Oi = { class: "topsL notPrint" }, Ii = { class: "topsLTitle" }, Ai = { class: "topsLBtn" }, Pi = { class: "topsLHelp" }, Mi = { key: 0 }, Ri = { key: 1 }, $i = { key: 2 }, Fi = ["innerHTML"], Di = /* @__PURE__ */ fe({
  __name: "PrintModal",
  setup(t) {
    const o = dl(), n = z(), e = z(!1), l = z(!1), r = z(!1), i = z(100), f = z(), s = z(715), v = z(!1), m = z(), c = "tablePrint_" + Date.now().toString(), u = z(""), h = z([]), b = z([]), k = z(!1), B = W(() => ({
      width: s.value + "px"
    })), C = () => {
      m.value && window.sessionStorage.removeItem("print_" + m.value), window.sessionStorage.removeItem(c), window.close();
    }, V = () => {
      v.value && (v.value = !1);
    }, N = () => {
      k.value = !0;
    }, T = (O) => {
      k.value && (s.value = (O == null ? void 0 : O.layerX) - 20);
    }, R = () => {
      k.value && (k.value = !1);
    }, L = () => {
      v.value = !1;
      let O = window.setTimeout(() => {
        window.clearTimeout(O), window.print();
      }, 100);
    }, F = (O) => {
      if (typeof f.value == "function")
        return f.value(O);
    }, y = () => {
      var O, x, ee, E, w, X, D;
      if (m.value = (O = o == null ? void 0 : o.params) == null ? void 0 : O.isFrom, m.value) {
        let g = window.sessionStorage.getItem("print_" + m.value);
        if (g) {
          const P = JSON.parse(g);
          if (!P) {
            e.value = !0;
            return;
          }
          if (h.value = P.columns, b.value = P.data, n.value = P.title, u.value = ((x = P.config) == null ? void 0 : x.customClass) || "", l.value = ((ee = P.config) == null ? void 0 : ee.domPrint) || !1, r.value = ((E = P.config) == null ? void 0 : E.autoPrint) || !1, i.value = ((w = P.config) == null ? void 0 : w.autoPrintTimeout) || 100, s.value = ((X = P.config) == null ? void 0 : X.width) || 715, document.title = (n.value || I("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString(), (D = P.funcArr) != null && D.length) {
            for (let M of P.funcArr)
              if (M.name === "spanMethod") {
                f.value = new Function("return " + M.func)();
                break;
              }
          }
        } else
          e.value = !0;
      }
    };
    return He(() => {
      if (r.value) {
        let O = window.setTimeout(() => {
          window.clearTimeout(O), L();
        }, i.value);
      }
      document.addEventListener("click", V), document.addEventListener("mousemove", T), document.addEventListener("mouseup", R);
    }), ot(() => {
      document.removeEventListener("click", V), document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", R);
    }), y(), (O, x) => {
      const ee = te("Table");
      return S(), K("div", {
        class: _e(["tablePrintModal", [p(u)]])
      }, [
        pe($("div", { class: "msgL notPrint" }, q(p(I)("r.printGuide.9")), 513), [
          [ge, p(e)]
        ]),
        pe($("div", Ti, [
          $("p", null, q(p(I)("r.printGuide.7")), 1),
          x[2] || (x[2] = we()),
          $("p", null, q(p(I)("r.printGuide.5")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        pe($("div", Bi, [
          $("p", null, q(p(I)("r.printGuide.7")), 1),
          x[3] || (x[3] = we()),
          $("p", null, q(p(I)("r.printGuide.6")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        pe($("div", Li, [
          $("p", null, q(p(I)("r.printGuide.8")), 1),
          x[4] || (x[4] = we()),
          $("p", null, q(p(I)("r.printGuide.5")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        pe($("div", xi, [
          $("p", null, q(p(I)("r.printGuide.8")), 1),
          x[5] || (x[5] = we()),
          $("p", null, q(p(I)("r.printGuide.6")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        pe($("div", Oi, [
          $("div", Ii, q(p(n) || p(I)("r.print")), 1),
          $("div", Ai, [
            Q(Qt, {
              icon: "md-help-circle",
              name: p(I)("r.help"),
              onClick: x[0] || (x[0] = qt((E) => v.value = !p(v), ["stop"]))
            }, null, 8, ["name"]),
            Q(Qt, {
              icon: "md-print",
              name: p(I)("r.preview"),
              onClick: L
            }, null, 8, ["name"]),
            p(l) ? ce("", !0) : (S(), le(Zl, {
              key: 0,
              modelValue: p(h),
              "onUpdate:modelValue": x[1] || (x[1] = (E) => De(h) ? h.value = E : null),
              "s-key": c,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            Q(Jl, {
              icon: "md-close",
              onClick: C,
              title: p(I)("r.close")
            }, null, 8, ["title"])
          ]),
          pe($("div", Pi, [
            p(l) ? ce("", !0) : (S(), K("p", Mi, [
              x[6] || (x[6] = $("span", null, "1. ", -1)),
              $("span", null, q(p(I)("r.printGuide.1")), 1)
            ])),
            p(l) ? ce("", !0) : (S(), K("p", Ri, [
              x[7] || (x[7] = $("span", null, "2. ", -1)),
              $("span", null, q(p(I)("r.printGuide.2")), 1)
            ])),
            p(l) ? (S(), K("p", $i, [
              x[8] || (x[8] = $("span", null, "1. ", -1)),
              $("span", null, q(p(I)("r.printGuide.10")), 1)
            ])) : ce("", !0),
            $("p", null, [
              $("span", null, q(p(l) ? "2. " : "3. "), 1),
              $("span", null, q(p(I)("r.printGuide.3")), 1)
            ]),
            $("p", null, [
              $("span", null, q(p(l) ? "3. " : "4. "), 1),
              $("span", null, q(p(I)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ge, p(v)]
          ])
        ], 512), [
          [ge, !p(e)]
        ]),
        p(l) ? (S(), K("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: de(p(B))
        }, [
          $("div", {
            class: "settingLine",
            onMousedown: qt(N, ["stop"])
          }, null, 32)
        ], 4)) : ce("", !0),
        p(l) ? (S(), K("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: p(b),
          style: de(p(B))
        }, null, 12, Fi)) : ce("", !0),
        p(l) ? ce("", !0) : pe((S(), le(ee, {
          key: 2,
          class: "tablePW",
          columns: p(h),
          data: p(b),
          "span-method": F,
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
  var m, c, u;
  if (!nt)
    return;
  let l;
  if (!(e != null && e.domPrint)) {
    let h = me(
      t.filter((b) => (b == null ? void 0 : b.key) || (b == null ? void 0 : b.children))
    );
    h[0].type === "selection" && h.shift(), h.length ? l = h.map(ca) : l = [];
  }
  const r = [];
  e && Object.entries(e).forEach(([h, b]) => {
    typeof b == "function" && (r.push({
      name: h,
      func: b.toString().replaceAll(/[\r\n\t]/g, "").replaceAll(/\s{2,}/g, " ")
    }), delete e[h]);
  });
  let i = (c = (m = nt == null ? void 0 : nt.currentRoute) == null ? void 0 : m.value) == null ? void 0 : c.fullPath;
  i && (i = (u = i.replace) == null ? void 0 : u.call(i, /\//g, "_"));
  let f = {
    data: o,
    title: n,
    config: e,
    funcArr: r
  };
  e != null && e.domPrint || (f.columns = l), window.sessionStorage.setItem("print_" + i, JSON.stringify(f));
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
  const o = (...f) => Ze.apply(this, f), n = o("r.closePreview"), e = o("r.fullImg");
  let l = "previewImg" + Math.floor(Math.random() * 1e7);
  (i = (r = at) == null ? void 0 : r.info) == null || i.call(r, {
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (f) => Oe(
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
  }), $e(() => {
    var u, h, b, k;
    const f = document.getElementById(l);
    if (!f) return;
    let s = f.parentElement, v = 0, m = null;
    for (; s && v < 4; ) {
      if ((h = (u = s.classList) == null ? void 0 : u.contains) != null && h.call(u, "ivu-modal-content")) {
        m = s;
        break;
      }
      s = s.parentElement, v++;
    }
    m || (m = ((b = f.closest) == null ? void 0 : b.call(f, ".ivu-modal-content")) || null);
    const c = (k = f.parentElement) == null ? void 0 : k.nextSibling;
    m && (m.style.height = "0", m.style.padding = "0"), c && (c.style.display = "none");
  }, 10);
}
const Ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: qe,
  $swal: ze,
  $swalConfirm: Ql,
  clearInterval: Sn,
  clearTimeout: Vn,
  domPrint: Ki,
  fullScreenImgByDom: gt,
  fullScreenImgPreview: zi,
  messageBox: ol,
  setInterval: Cn,
  setTimeout: $e,
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
      this.title = Ze("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
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
      var s, v, m, c, u, h, b, k, B;
      const l = document.getElementById("editor-preview");
      let r = localStorage.getItem("editorPreviewW") || 300, i = localStorage.getItem("editorPreviewH") || 500;
      const f = (s = e == null ? void 0 : e.getHtml) == null ? void 0 : s.call(e);
      if (l) {
        let C = (h = (u = (c = (m = (v = l.children) == null ? void 0 : v[0]) == null ? void 0 : m.children) == null ? void 0 : c[1]) == null ? void 0 : u.children) == null ? void 0 : h[0], V = (B = (k = (b = l.children) == null ? void 0 : b[0]) == null ? void 0 : k.children) == null ? void 0 : B[1];
        C && (C.innerHTML = f, C.style.width = r + "px"), V && (V.style.height = i + "px"), l.style.display = "block";
      } else {
        const C = document.body, V = document.createElement("div");
        V.setAttribute("id", "editor-preview"), V.setAttribute("class", "editor-preview-mask"), V.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${r}' min='200'><span>高</span><input type='number' value='${i}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let N = V.children[0].children[1], T = V.children[0].children[1].children[0], R = V.children[0].children[0].children[0].children[1];
        const L = 40, F = 70, y = (E) => {
          var D;
          if ((E == null ? void 0 : E.type) === "keyup") {
            let g = !1;
            if (E.key && (g = E.key !== "Enter"), g)
              return;
          }
          let w = (D = E == null ? void 0 : E.target) == null ? void 0 : D.value;
          if (w = Number(w), T.style && T.style.width === w + "px")
            return;
          const X = C.clientWidth;
          w < 250 ? (w = 250, E.target.value = 250) : w > X - L && (w = X - L, E.target.value = X - L), T.style.width = w + "px", localStorage.setItem("editorPreviewW", w);
        };
        R.addEventListener("blur", y), R.addEventListener("keyup", y);
        let O = V.children[0].children[0].children[0].children[3];
        const x = (E) => {
          var D;
          if ((E == null ? void 0 : E.type) === "keyup") {
            let g = !1;
            if (E.key && (g = E.key !== "Enter"), g)
              return;
          }
          let w = (D = E == null ? void 0 : E.target) == null ? void 0 : D.value;
          if (w = Number(w), N.style && N.style.height === w + "px")
            return;
          const X = C.clientHeight;
          w < 300 ? (w = 300, E.target.value = 300) : w > X - F && (w = X - F, E.target.value = X - F), N.style.height = w + "px", localStorage.setItem("editorPreviewH", w);
        };
        O.addEventListener("blur", x), O.addEventListener("keyup", x), V.children[0].children[0].children[1].addEventListener("click", () => {
          V.style.display = "none";
        }), T.innerHTML = f, T.style.width = r + "px", N.style.height = i + "px", C.append(V);
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
  Fl = !0, qe.init(o.useStore || o.store, t), Wi.install(t), o.locale && At.use(o.locale), o.i18n && At.i18n(o.i18n), o.router && (_n(o.router), ml.init(o.router)), o.amap && co(o.amap), o.notRegistryGlobal || (Object.keys(Ml).forEach((n) => {
    t.component(n) || t.component(n, Ml[n]);
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
  Me as isValidValue,
  ps as locale,
  ol as messageBox,
  Y as myTypeof,
  sn as oneOf,
  ll as removeEmptyValue,
  Cn as setInterval,
  $e as setTimeout,
  dt as setValByOption,
  Ye as setValue,
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
