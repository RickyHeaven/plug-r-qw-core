var na = Object.defineProperty;
var oa = (t, s, o) => s in t ? na(t, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[s] = o;
var st = (t, s, o) => oa(t, typeof s != "symbol" ? s + "" : s, o);
import { getCurrentInstance as St, defineComponent as me, resolveComponent as J, openBlock as T, createElementBlock as U, normalizeClass as Ve, normalizeStyle as re, createBlock as Z, createCommentVNode as pe, renderSlot as Fe, ref as E, computed as G, withDirectives as de, unref as m, createElementVNode as P, toDisplayString as H, createVNode as W, withCtx as ne, createTextVNode as _e, vShow as ve, resolveDirective as jt, onMounted as Ue, nextTick as Pe, onUpdated as ia, onUnmounted as Tl, isRef as Me, h as Oe, Fragment as we, renderList as Te, onBeforeMount as Bl, watch as Ce, mergeModels as sa, useModel as ra, onBeforeUnmount as xl, Teleport as ua, withModifiers as It, mergeProps as it, shallowRef as ft, triggerRef as da, createSlots as ot, toRef as ca, toValue as Lt } from "vue";
import fa from "deepmerge";
import { debounce as qt, isPlainObject as nt, cloneDeep as he, isObject as pa, isFunction as ma, isEmpty as Re, isNumber as vt, isString as Ll, last as gt, isEqual as pt, first as At, find as Pt, indexOf as rl, findIndex as bt, remove as ha } from "lodash-es";
import ht from "sweetalert";
import { Tooltip as ya, Modal as Qe, Button as Ot, TableColumnConfig as va, Radio as ga, Input as ba, Message as ul, Icon as ka } from "view-ui-plus";
import { useRouter as Ct, useRoute as Xt } from "vue-router";
import wa from "popper.js";
import Rt from "axios";
import dl from "@amap/amap-jsapi-loader";
import _a from "ar-cascader";
import { Toolbar as Va, Editor as Sa } from "@wangeditor/editor-for-vue";
import rt from "moment";
import { Boot as Ca } from "@wangeditor/editor";
import Ta from "vue-json-viewer";
const Ol = {
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
}, Ba = /(%|){([0-9a-zA-Z_]+)}/g;
function xa() {
  function t(o, e) {
    return Object.prototype.hasOwnProperty.call(o, e);
  }
  function s(o, ...e) {
    let n;
    return e.length === 1 && typeof e[0] == "object" && (n = e[0]), (!n || !n.hasOwnProperty) && (n = {}), o === void 0 ? "" : o.replace(Ba, (a, r, d, i) => {
      let h;
      return o[i - 1] === "{" && o[i + a.length] === "}" ? d : (h = t(n, d) ? n[d] : null, h ?? "");
    });
  }
  return s;
}
const La = xa();
let kt = Ol;
const Oa = {
  zh: Ol
};
let cl, fl = {}, De, Ia = function(t, s) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, s);
  if (De && De.global)
    return De.global.t(t, s);
  if (De && De.locale) {
    if (!fl[De.locale] || cl != De.locale) {
      fl[De.locale] = !0;
      let o = De.getLocaleMessage(De.locale) || {}, e = fa(Oa[De.locale], o, { clone: !0 });
      kt = e, De.setLocaleMessage(De.locale, e), cl = De.locale;
    }
    return De.hlang(t, s);
  }
};
const Xe = function(t, s) {
  let o = Ia.apply(this, [t, s]);
  if (o != null)
    return o;
  const e = t.split(".");
  let n = kt;
  for (let a = 0, r = e.length; a < r; a++) {
    const d = e[a];
    if (o = n[d], a === r - 1)
      return La(o, s);
    if (!o)
      return "";
    n = o;
  }
  return "";
}, Aa = function(t) {
  kt = t || kt;
}, Pa = function(t) {
  De = t;
}, wt = {
  use: Aa,
  t: Xe,
  i18n: Pa
};
function O(t, s) {
  var e, n, a;
  const o = (a = (n = (e = St()) == null ? void 0 : e.appContext) == null ? void 0 : n.config) == null ? void 0 : a.globalProperties;
  return Xe.apply(o, [t, s]);
}
const Il = /* @__PURE__ */ me({
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
  setup(t, { emit: s }) {
    const o = t, e = s;
    function n() {
      o.disabled || e("click");
    }
    return (a, r) => {
      const d = J("Icon");
      return T(), U("div", {
        class: Ve({ headerBtCTM: !0, withIconCTM: o.icon || o.withIcon, disabled: o.disabled }),
        style: re({ color: o.color, borderLeftColor: o.borderColor }),
        onClick: n
      }, [
        o.icon ? (T(), Z(d, {
          key: 0,
          size: o.iconSize,
          type: o.icon
        }, null, 8, ["size", "type"])) : pe("", !0),
        Fe(a.$slots, "default")
      ], 6);
    };
  }
});
function xe() {
  const { appContext: t } = St();
  return t.config.globalProperties;
}
const Ra = { class: "headerTxtAM" }, $a = { class: "contentAM" }, Fa = /* @__PURE__ */ me({
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
  setup(t, { expose: s, emit: o }) {
    const e = t, n = o;
    let a = E(!1);
    const r = G(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), d = G(() => ({ zIndex: e.zIndex }));
    function i() {
      a.value = !0, n("on-open");
    }
    function h(p) {
      a.value = !1, n("on-close", p === !0);
    }
    return s({
      open: i,
      close: h
    }), (p, f) => de((T(), U("div", {
      class: "fullScreenPopBoxAM",
      style: re(m(d))
    }, [
      P("div", {
        class: "headerAM",
        style: re({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: m(r) })
      }, [
        P("span", Ra, H(p.title || m(O)("r.title")), 1),
        W(Il, {
          icon: "md-return-left",
          onClick: h
        }, {
          default: ne(() => [
            _e(H(m(O)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      P("div", $a, [
        Fe(p.$slots, "default")
      ])
    ], 4)), [
      [ve, m(a)]
    ]);
  }
}), Ma = { class: "msg" }, Na = /* @__PURE__ */ me({
  __name: "Hello",
  setup(t) {
    let s = E("Greetings from Ricky.");
    return (o, e) => (T(), U("span", Ma, H(m(s)), 1));
  }
}), $t = /* @__PURE__ */ me({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => xe().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: s }) {
    const o = t, e = s, n = G(() => {
      var r;
      return Math.floor(o.size / 17 * ((r = xe()) == null ? void 0 : r.fontSizeBase)) + "px";
    });
    function a(r) {
      o.disabled || e("click", r);
    }
    return (r, d) => {
      const i = J("Icon"), h = jt("has");
      return de((T(), U("div", {
        class: Ve(["tabTopBtnsT", { disabled: o.disabled }]),
        onClick: a,
        style: re({ "font-size": m(n) })
      }, [
        W(i, {
          type: o.icon,
          size: o.size
        }, null, 8, ["type", "size"]),
        _e(" " + H(o.name || m(O)("r.button")), 1)
      ], 6)), [
        [h, r.has]
      ]);
    };
  }
}), Da = { class: "c404K" }, Ka = /* @__PURE__ */ P("div", { class: "t404" }, "404", -1), za = { class: "ct404" }, Ua = { class: "p404" }, Ea = /* @__PURE__ */ me({
  __name: "Page404",
  setup(t) {
    const o = St().appContext.config.globalProperties.$router;
    function e() {
      o.go(-1);
    }
    return (n, a) => {
      const r = J("Button");
      return T(), U("div", Da, [
        Ka,
        P("div", za, "UH OH! " + H(m(O)("r.pageNotFound")), 1),
        P("div", Ua, H(m(O)("r.notFoundMsg")), 1),
        W(r, {
          class: "bt404",
          onClick: e
        }, {
          default: ne(() => [
            _e(H(m(O)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Ke(t, s, o, e = !0) {
  const n = (...a) => Xe.apply(this, a);
  return new Promise((a, r) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let d = n("r.confirm"), i = n("r.cancel"), h = !1, p = "swalConfirmBt", f = "swalCancelBt";
      const u = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let g = "";
      t.text && u.test(q(t.text)) ? g = "content" : t.text && q(t.text) === "String" && (g = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (i = t.buttons.cancel.text) && (h = !0), t.buttons.cancel.className && (f = t.buttons.cancel.className), t.buttons.confirm.text && (d = t.buttons.confirm.text), t.buttons.confirm.className && (p = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (i = t.buttons[0], h = !0), t.buttons[1] && (d = t.buttons[1]))), ht({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [g]: t.text,
        buttons: {
          confirm: {
            text: d,
            value: !0,
            visible: !0,
            className: p
          },
          cancel: {
            text: i,
            value: null,
            visible: h,
            className: f
          }
        },
        closeOnClickOutside: t.closeOnClickOutside ?? !0
      }).then((k) => {
        k && typeof t.onOk == "function" && t.onOk(), a(k);
      }).catch((k) => {
        r(k);
      });
    } else if (typeof t == "string") {
      let d = "";
      if (s)
        switch (typeof s) {
          case "string":
            d = "text";
            break;
          case "object":
            d = "content";
            break;
        }
      ht({
        title: t,
        [d]: s || "",
        icon: o || "",
        className: "swalBoxX",
        closeOnClickOutside: e,
        buttons: {
          confirm: {
            text: n("r.confirm"),
            value: !0,
            visible: !0,
            className: "swalConfirmBt",
            closeModal: !0
          }
        }
      }).then((i) => {
        a(i);
      }).catch((i) => {
        r(i);
      });
    } else if (typeof t == "boolean")
      !t && ht.close && ht.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
const Ga = { class: "tableTooltip" }, Ha = /* @__PURE__ */ me({
  __name: "TableTooltip",
  props: {
    content: { type: [String, Number, Boolean, null] }
  },
  setup(t) {
    const s = t, o = E(), e = E(), n = E(!0);
    let a = null;
    const r = E(200);
    function d() {
      const i = n.value ? o.value : e.value;
      if (!i)
        return;
      let h = document.createRange();
      h.setStart(i, 0), h.setEnd(i, i.childNodes.length);
      const p = h.getBoundingClientRect().width;
      r.value = i.offsetWidth * 2, n.value = p < i.offsetWidth, h = null;
    }
    return Ue(() => {
      d(), a = qt(() => {
        Pe(function() {
          d();
        });
      }, 200), window.addEventListener("resize", a);
    }), ia(d), Tl(() => {
      window.removeEventListener("resize", a);
    }), (i, h) => (T(), U("div", Ga, [
      m(n) ? (T(), U("span", {
        key: 0,
        ref_key: "spanRef",
        ref: o,
        class: "contentText"
      }, H(s.content), 513)) : (T(), Z(m(ya), {
        key: 1,
        content: typeof s.content == "boolean" ? String(s.content) : s.content ?? "",
        "max-width": m(r),
        transfer: ""
      }, {
        default: ne(() => [
          P("span", {
            ref_key: "contentRef",
            ref: e,
            class: "contentText"
          }, H(s.content), 513)
        ]),
        _: 1
      }, 8, ["content", "max-width"]))
    ]));
  }
}), Ft = typeof window < "u";
function je(t, s) {
  Me(t) ? t.value = s : t = s;
}
function q(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function Wa(t) {
  return { style: { display: Jt(t) ? "unset" : "none" } };
}
function Al(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function _t(t) {
  let s = q(t);
  if (s === "Object") {
    for (let o in t)
      if (t.hasOwnProperty(o)) {
        let e = q(t[o]);
        e === "String" ? t[o] = t[o].trim() : (e === "Object" || e === "Array") && _t(t[o]);
      }
  } else if (s === "Array")
    for (let o = 0, e = t.length; o < e; o++) {
      let n = q(t[o]);
      n === "String" ? t[o] = t[o].trim() : (n === "Array" || n === "Object") && _t(t[o]);
    }
  return t;
}
function Mt(t, s = []) {
  if (q(t) === "Array")
    return t.forEach((o, e) => {
      switch (q(o)) {
        case "Array":
        case "Object":
          Mt(o);
          break;
        default:
          t[e] = null;
      }
    }), t;
  if (q(t) === "Object") {
    for (let o in t)
      if (t.hasOwnProperty(o)) {
        let e = !0;
        for (let n of s)
          if (n === o) {
            e = !1;
            break;
          }
        if (e)
          switch (q(t[o])) {
            case "Array":
            case "Object":
              Mt(t[o]);
              break;
            default:
              t[o] = null;
          }
      }
    return t;
  } else
    return t;
}
const ja = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function qa(t) {
  let s = new FormData();
  for (let o in t)
    t.hasOwnProperty(o) && t[o] !== null && s.append(o, t[o]);
  return s;
}
function lt(t, s, o = !1) {
  if (!t || !s)
    return !1;
  let e, n = "notFoundC", a = function(r, d) {
    if (Array.isArray(r)) {
      if (q(d) === "Function" && d(r))
        return n = r, [];
      for (let i of r) {
        if (n !== "notFoundC")
          break;
        if (q(d) === "Function" && d(i) || i === d)
          return n = i, [r.indexOf(i)];
        if (q(i) === "Array" || q(i) === "Object") {
          let h = a(i, d);
          if (h !== void 0)
            return [r.indexOf(i), ...h];
        }
      }
    } else if (q(r) === "Object") {
      if (q(d) === "Function" && d(r))
        return n = r, [];
      for (let i in r) {
        if (n !== "notFoundC")
          break;
        if (r.hasOwnProperty(i)) {
          if (q(d) === "Function" && d(i) || r[i] === d)
            return n = r[i], [i];
          if (q(r[i]) === "Object" || q(r[i]) === "Array") {
            let h = a(r[i], d);
            if (h !== void 0)
              return [i, ...h];
          }
        }
      }
    }
  };
  return e = a(t, s), o ? e || !1 : n === "notFoundC" ? !1 : n;
}
function Xa(t, s) {
  for (let o = 0, e = s.length; o < e; o++)
    if (t === s[o])
      return !0;
  return !1;
}
function Ja(t, s = 2) {
  let o = new RegExp(`(^-?\\d+\\.\\d{${s}})(\\d+$)`), e = t && String(t) || "";
  return o.test(e) ? Number(e.replace(o, "$1")) : t;
}
function Pl(t, s = {}, o = "get") {
  let e = document.createElement("form"), n = document.getElementsByTagName("body")[0];
  n.appendChild(e), e.setAttribute("style", "display:none"), e.setAttribute("target", ""), e.setAttribute("method", o);
  let a = t;
  if (window && window.hasOwnProperty("g")) {
    let r = Object.keys(window.g).filter((d) => {
      var i;
      return ((i = d == null ? void 0 : d.indexOf) == null ? void 0 : i.call(d, "URL")) > -1;
    }).map((d) => {
      var i;
      return (i = d.replace) == null ? void 0 : i.call(d, "URL", "");
    });
    for (let d of r) {
      let i = new RegExp("^/" + d + "(?=/.*$)", "i");
      if (i.test(t) && window.g[d + "URL"]) {
        a = window.g[d + "URL"] + t.replace(i, "");
        break;
      }
    }
  }
  if (e.setAttribute("action", a), nt(s)) {
    for (let d in s)
      if (s.hasOwnProperty(d) && (s[d] || s[d] === 0 || s[d] === !1 || s[d] === "")) {
        let i = document.createElement("input");
        i.setAttribute("type", "hidden"), i.setAttribute("name", d), i.setAttribute("value", s[d]), e.appendChild(i);
      }
    e.submit();
    let r = setTimeout(() => {
      n.removeChild(e), clearTimeout(r), r = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function Ya(t, s = {}, o = "get") {
  if (s.hasOwnProperty("columns") && (s.columns === "" || s.columns === null || s.columns === void 0)) {
    Ke.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  Pl(t, s, o);
}
function Qa(t, s, o = !1) {
  let e;
  if (t && q(s) === "Array") {
    let n = localStorage.getItem(t);
    if (n) {
      let a = JSON.parse(decodeURI(n));
      e = s.filter((r) => {
        var d;
        return (r == null ? void 0 : r.key) && ((d = a == null ? void 0 : a.indexOf) == null ? void 0 : d.call(a, r.title)) !== -1;
      }).map((r) => r.key);
    } else
      e = s.map((a) => a == null ? void 0 : a.key);
  } else
    e = [];
  return o || (e = String(e)), e;
}
function Ie(t) {
  return t != null && t !== "";
}
function Za(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function Rl(t, s = !1, o = "") {
  return function(e, n) {
    var r, d;
    let a;
    if (Array.isArray(t)) {
      let i = [];
      for (let h of t)
        Ie((r = n.row) == null ? void 0 : r[h]) && i.push(n.row[h]);
      a = i.join(o);
    } else typeof t == "function" ? a = t(n) : a = (d = n.row) == null ? void 0 : d[t];
    return Oe(Ha, { content: s ? a === "" ? "--" : a ?? "--" : a });
  };
}
function en(t) {
  if (nt(t)) {
    for (let s in t)
      if (t.hasOwnProperty(s) && Ie(t[s]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let s of t)
      if (Ie(s))
        return !1;
    return !0;
  }
  return !Ie(t);
}
function tn(t) {
  return q(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : q(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function at({
  group: t,
  condition: s,
  key: o,
  val: e,
  childKey: n = "children"
}) {
  if (q(t) !== "Array" || q(s) !== "Function" || q(o) !== "String" || q(n) !== "String")
    return !1;
  t.forEach((a) => {
    s(a) && (q(e) === "Function" ? a[o] = e(a[o]) : a[o] = e), q(a[n]) === "Array" && a[n].length > 0 && at({
      group: a[n],
      condition: s,
      key: o,
      val: e,
      childKey: n
    });
  });
}
function Jt(t) {
  let s = sessionStorage.getItem("btnPermissions");
  return s ? s.split(",").indexOf(t) > -1 : !1;
}
function $l(t) {
  return q(t) === "Number" && String(t) === "NaN";
}
function ln(t, s = !1, o = !1) {
  if (q(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), n = "";
  for (let a in e)
    if (e.hasOwnProperty(a)) {
      let r = e[a];
      r === void 0 || r === "" || q(r) === "String" && r.trim() === "" || r === null || $l(r) ? o ? s ? n += a + "=&" : e[a] = "" : delete e[a] : s && (n += a + "=" + r + "&");
    }
  return s ? n.length > 0 ? n.substring(0, n.length - 1) : "" : e;
}
function Nt(t) {
  let s = {};
  if (Array.isArray(t)) {
    s = [];
    for (let o of t)
      Array.isArray(o) || nt(o) ? s.push(Nt(o)) : Ie(o) && s.push(o);
  } else if (nt(t))
    for (let o in t)
      t.hasOwnProperty(o) && (Array.isArray(t[o]) || nt(t[o]) ? s[o] = Nt(t[o]) : Ie(t[o]) && (s[o] = t[o]));
  return s;
}
function an(t) {
  const s = window.open();
  if (s) {
    s.document.write(t);
    let o = setTimeout(() => {
      s.print(), window.clearTimeout(o), o = null;
    }, 10);
  }
}
function Yt(t) {
  let s = [], o = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && s.push(t);
  for (; o.nextSibling && (o = o.nextSibling); )
    o.nodeType === 1 && s.push(o);
  return s;
}
const nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Mt,
  dataFilterOrToUrl: ln,
  decimalDigitsLimit: Ja,
  downloadFileByFormSubmit: Pl,
  fileExport: Ya,
  findCollection: lt,
  formDataHeadConfig: ja,
  getColumnsKeys: Qa,
  has: Wa,
  hasPermission: Jt,
  htmlPrint: an,
  isClient: Ft,
  isEmptyValue: en,
  isNaN: $l,
  isNumberValue: Za,
  isValidValue: Ie,
  myTypeof: q,
  oneOf: Xa,
  removeEmptyValue: Nt,
  setValByOption: at,
  setValue: je,
  siblingElems: Yt,
  stringLength: tn,
  toFormData: qa,
  toLine: Al,
  tooltipManual: Rl,
  trimObj: _t
}, Symbol.toStringTag, { value: "Module" })), on = { class: "groupBoxRP" }, sn = ["onClick"], rn = /* @__PURE__ */ me({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const s = Ct(), o = t;
    function e(a) {
      return (a == null ? void 0 : a.path) === o.pathName ? "active" : "";
    }
    function n(a, r) {
      var p, f, u, g, k, v, V, w;
      (p = a == null ? void 0 : a.preventDefault) == null || p.call(a);
      let d = a == null ? void 0 : a.target;
      if (r && !r.children && !d.classList.contains("active")) {
        s.push(r.path);
        return;
      }
      let i = d.parentNode, h = Yt(i);
      for (let B of h) {
        (u = (f = B == null ? void 0 : B.classList) == null ? void 0 : f.remove) == null || u.call(f, "open");
        const x = (g = B == null ? void 0 : B.querySelectorAll) == null ? void 0 : g.call(B, ".open");
        if (x && Array.isArray(x))
          for (let C of x)
            (v = (k = C == null ? void 0 : C.classList) == null ? void 0 : k.remove) == null || v.call(k, "open");
      }
      (w = (V = i == null ? void 0 : i.classList) == null ? void 0 : V.toggle) == null || w.call(V, "open");
    }
    return (a, r) => {
      const d = J("Icon"), i = J("sideMenuGroup", !0);
      return T(), U("ul", on, [
        (T(!0), U(we, null, Te(o.data, (h, p) => (T(), U(we, {
          key: (h == null ? void 0 : h.path) + p
        }, [
          h ? (T(), U("li", {
            key: 0,
            class: Ve({ dropItemRP: h.children })
          }, [
            P("div", {
              class: Ve(["menuTxtR", e(h)]),
              onClick: (f) => n(f, h),
              style: re({ paddingLeft: h.level * 20 + "px" })
            }, [
              h != null && h.icon ? (T(), Z(d, {
                key: 0,
                class: "menuIcoL",
                custom: "iconfont " + h.icon
              }, null, 8, ["custom"])) : pe("", !0),
              P("span", null, H((h == null ? void 0 : h.name) || "-- no name --"), 1)
            ], 14, sn),
            h.children ? (T(), Z(i, {
              key: 0,
              data: h.children,
              "path-name": o.pathName
            }, null, 8, ["data", "path-name"])) : pe("", !0)
          ], 2)) : pe("", !0)
        ], 64))), 128))
      ]);
    };
  }
});
let Dt = [], Kt = [];
const un = function(t) {
  t && t.beforeEach ? t.beforeEach(() => {
    Dt.map((s) => {
      window.clearTimeout(s);
    }), Kt.map((s) => {
      window.clearInterval(s);
    }), Dt.length = 0, Kt.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, $e = function(t, s) {
  let o = window.setTimeout(t, s);
  return Dt.push(o), o;
}, dn = function(t, s) {
  let o = window.setInterval(t, s);
  return Kt.push(o), o;
}, cn = { class: "menuListR" }, fn = /* @__PURE__ */ me({
  __name: "SideMenu",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: s }) {
    const o = t, e = s, n = Xt(), a = E(!0), r = E(), d = E(), i = G(() => a.value ? O("r.hideMenu") : O("r.showMenu")), h = G(() => a.value ? "ios-arrow-back" : "ios-arrow-forward");
    Bl(() => {
      let u = localStorage.getItem("menuDisplayR") || "";
      u !== "" ? a.value = JSON.parse(u) : (a.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), Ce(
      () => n.path,
      (u) => {
        r.value = u, Pe(() => {
          $e(f, 10);
        });
      },
      { immediate: !0 }
    );
    function p() {
      a.value = !a.value, localStorage.setItem("menuDisplayR", JSON.stringify(a.value)), e("on-change", a.value);
    }
    function f() {
      var g, k, v, V, w;
      let u = d.value.querySelectorAll(".dropItemRP");
      for (let B of u)
        (g = B == null ? void 0 : B.querySelector) != null && g.call(B, ".active") && !((v = (k = B.classList) == null ? void 0 : k.contains) != null && v.call(k, "open")) && ((w = (V = B.classList) == null ? void 0 : V.add) == null || w.call(V, "open"));
    }
    return (u, g) => {
      const k = J("Icon");
      return T(), U("div", {
        ref_key: "menuRef",
        ref: d,
        class: Ve(["menuBoxRP", "cannotSelect", { light: u.light }])
      }, [
        de(P("div", cn, [
          W(rn, {
            data: o.data,
            pathName: m(r)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, m(a)]
        ]),
        W(k, {
          type: m(h),
          size: 25,
          class: Ve([{ showIco: !m(a) }, "menuShowHideIco"]),
          title: m(i),
          onClick: p,
          color: m(a) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 2);
    };
  }
}), pn = { class: "groupBoxRX" }, mn = ["onMouseenter"], hn = ["onClick"], yn = /* @__PURE__ */ me({
  __name: "SideMenuProGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const s = Ct(), o = t, e = E("");
    function n(i) {
      let h = "menuTxtR ";
      return (i == null ? void 0 : i.path) === o.pathName && (h += "active "), h;
    }
    function a(i, h) {
      var f;
      (f = i == null ? void 0 : i.preventDefault) == null || f.call(i);
      let p = i == null ? void 0 : i.target;
      h && !h.children && !p.classList.contains("active") && s.push(h.path);
    }
    function r(i, h) {
      var p;
      (p = i == null ? void 0 : i.preventDefault) == null || p.call(i), e.value = h == null ? void 0 : h.path;
    }
    function d(i) {
      var h;
      (h = i == null ? void 0 : i.preventDefault) == null || h.call(i), e.value = "";
    }
    return (i, h) => {
      const p = J("Icon"), f = J("SideMenuProGroup", !0);
      return T(), U("ul", pn, [
        (T(!0), U(we, null, Te(o.data, (u, g) => {
          var k;
          return T(), U("li", {
            key: (u == null ? void 0 : u.path) + g,
            class: Ve({ dropItemRX: u == null ? void 0 : u.children }),
            onMouseenter: (v) => r(v, u),
            onMouseleave: h[0] || (h[0] = (v) => d(v))
          }, [
            P("div", {
              class: Ve(n(u)),
              onClick: (v) => a(v, u),
              style: re({ paddingLeft: u.level * 20 + "px" })
            }, [
              _e(H((u == null ? void 0 : u.name) || "-- no name --") + " ", 1),
              de(W(p, {
                class: "dropIcoRX",
                type: "ios-arrow-forward",
                size: 16
              }, null, 512), [
                [ve, u.children && u.children.length > 0]
              ])
            ], 14, hn),
            ((k = u == null ? void 0 : u.children) == null ? void 0 : k.length) > 0 ? de((T(), Z(f, {
              key: 0,
              class: "rightChildRX",
              data: u == null ? void 0 : u.children,
              "path-name": i.pathName
            }, null, 8, ["data", "path-name"])), [
              [ve, m(e) === (u == null ? void 0 : u.path)]
            ]) : pe("", !0)
          ], 42, mn);
        }), 128))
      ]);
    };
  }
}), vn = { class: "groupBoxRX" }, gn = ["onClick"], Fl = /* @__PURE__ */ me({
  __name: "SideMenuTwoLevel",
  props: {
    data: { default: () => [] },
    pathName: { default: "" },
    fromIcoMenu: { type: Boolean }
  },
  setup(t) {
    const s = Ct(), o = t;
    function e(a) {
      let r = "menuTxtR ";
      return (a == null ? void 0 : a.path) === o.pathName && (r += "active "), r;
    }
    function n(a, r) {
      var f, u, g, k, v, V, w, B, x, C, F, I, L, _;
      (f = a == null ? void 0 : a.preventDefault) == null || f.call(a);
      let d = a == null ? void 0 : a.target;
      if (r && !r.children && !d.classList.contains("active")) {
        s.push(r.path);
        return;
      }
      const i = (u = d == null ? void 0 : d.querySelector) == null ? void 0 : u.call(d, ".dropIcoRX"), h = d.parentNode, p = Yt(h);
      for (let y of p) {
        (k = (g = y == null ? void 0 : y.classList) == null ? void 0 : g.remove) == null || k.call(g, "open");
        const R = (v = y == null ? void 0 : y.querySelector) == null ? void 0 : v.call(y, ".dropIcoRX");
        (w = (V = R == null ? void 0 : R.classList) == null ? void 0 : V.remove) == null || w.call(V, "open");
        const ee = (B = y == null ? void 0 : y.querySelectorAll) == null ? void 0 : B.call(y, ".open");
        for (let M of ee)
          (C = (x = M == null ? void 0 : M.classList) == null ? void 0 : x.remove) == null || C.call(x, "open");
      }
      (I = (F = h == null ? void 0 : h.classList) == null ? void 0 : F.toggle) == null || I.call(F, "open"), (_ = (L = i == null ? void 0 : i.classList) == null ? void 0 : L.toggle) == null || _.call(L, "open");
    }
    return (a, r) => {
      const d = J("Icon");
      return T(), U("ul", vn, [
        (T(!0), U(we, null, Te(o.data, (i, h) => (T(), U("li", {
          key: (i == null ? void 0 : i.path) + h,
          class: Ve({ dropItemRX: i == null ? void 0 : i.children, open: o.fromIcoMenu, fromIcoMenu: o.fromIcoMenu })
        }, [
          P("div", {
            class: Ve(e(i)),
            onClick: (p) => n(p, i),
            style: re({ paddingLeft: i.level * 20 + "px" })
          }, [
            W(d, {
              class: "menuIcoL",
              custom: "iconfont " + (i.icon || "icon-r-menu-default")
            }, null, 8, ["custom"]),
            P("span", null, H((i == null ? void 0 : i.name) || "-- no name --"), 1),
            de(W(d, {
              class: Ve(["dropIcoRX", { open: o.fromIcoMenu, fromIcoMenu: o.fromIcoMenu }]),
              type: "ios-arrow-forward"
            }, null, 8, ["class"]), [
              [ve, i.children && i.children.length > 0]
            ])
          ], 14, gn),
          i.children ? (T(), Z(yn, {
            key: 0,
            data: i.children,
            "path-name": o.pathName
          }, null, 8, ["data", "path-name"])) : pe("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), bn = { class: "groupBoxRX" }, kn = ["onMouseenter"], wn = ["onClick"], _n = /* @__PURE__ */ me({
  __name: "SideIcoMenu",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const s = Ct(), o = t, e = E("");
    function n(i) {
      let h = "menuTxtR ";
      return (i == null ? void 0 : i.path) === o.pathName && (h += "active "), h;
    }
    function a(i, h) {
      var f;
      (f = i == null ? void 0 : i.preventDefault) == null || f.call(i);
      let p = i == null ? void 0 : i.target;
      h && !h.children && !p.classList.contains("active") && s.push(h.path);
    }
    function r(i, h) {
      var p;
      (p = i == null ? void 0 : i.preventDefault) == null || p.call(i), e.value = h == null ? void 0 : h.path;
    }
    function d(i) {
      var h;
      (h = i == null ? void 0 : i.preventDefault) == null || h.call(i), e.value = "";
    }
    return (i, h) => {
      const p = J("Icon");
      return T(), U("ul", bn, [
        (T(!0), U(we, null, Te(o.data, (f, u) => (T(), U("li", {
          key: (f == null ? void 0 : f.path) + u,
          class: Ve({ dropItemRX: f.children }),
          onMouseenter: (g) => r(g, f),
          onMouseleave: h[0] || (h[0] = (g) => d(g))
        }, [
          P("div", {
            class: Ve(n(f)),
            onClick: (g) => a(g, f)
          }, [
            W(p, {
              class: "menuIcoM",
              custom: "iconfont " + (f.icon || "icon-r-menu-default"),
              size: "20"
            }, null, 8, ["custom"])
          ], 10, wn),
          de(W(Fl, {
            class: "rightTwoMenu",
            data: [f],
            pathName: o.pathName,
            fromIcoMenu: ""
          }, null, 8, ["data", "pathName"]), [
            [ve, m(e) === (f == null ? void 0 : f.path)]
          ])
        ], 42, kn))), 128))
      ]);
    };
  }
}), Vn = { class: "menuListR" }, Sn = /* @__PURE__ */ me({
  __name: "SideMenuPro",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: s }) {
    const o = t, e = s, n = Xt(), a = E(!0), r = E(), d = E(), i = G(() => a.value ? O("r.hideMenu") : O("r.showMenu")), h = G(() => a.value ? "iconfont icon-r-menu-hide" : "iconfont icon-r-menu-open");
    Bl(() => {
      let u = localStorage.getItem("menuDisplayRPro") || "";
      u !== "" ? a.value = JSON.parse(u) : (a.value = !0, localStorage.setItem("menuDisplayRPro", JSON.stringify(!0)));
    }), Ce(
      () => n.path,
      (u) => {
        r.value = u, Pe(() => {
          $e(f, 10);
        });
      },
      { immediate: !0 }
    );
    function p() {
      a.value = !a.value, localStorage.setItem("menuDisplayRPro", JSON.stringify(a.value)), e("on-change", a.value);
    }
    function f() {
      var g, k, v, V, w, B, x, C, F, I, L, _, y, R, ee, M, N, te, b, D, X, $, Q, Y, ce, be, ye, Be, ae, z, K, fe, Se, ke, se, Ae, Ee, Ge, Je;
      let u = d.value.querySelectorAll(".dropItemRX");
      for (let ie of u) {
        const Ne = (k = (g = ie == null ? void 0 : ie.childNodes[0]) == null ? void 0 : g.querySelector) == null ? void 0 : k.call(g, ".dropIcoRX");
        (v = ie == null ? void 0 : ie.querySelector) != null && v.call(ie, ".active") ? (B = (w = (V = ie == null ? void 0 : ie.childNodes[1]) == null ? void 0 : V.classList) == null ? void 0 : w.contains) != null && B.call(w, "rightChildRX") ? (F = (C = (x = ie == null ? void 0 : ie.childNodes[0]) == null ? void 0 : x.classList) == null ? void 0 : C.contains) != null && F.call(C, "activeR") || (L = ie == null ? void 0 : (I = ie.childNodes[0].classList).add) == null || L.call(I, "activeR") : ((y = (_ = ie == null ? void 0 : ie.classList) == null ? void 0 : _.contains) != null && y.call(_, "open") || (ee = (R = ie.classList).add) == null || ee.call(R, "open"), Ne && !((N = (M = Ne == null ? void 0 : Ne.classList) == null ? void 0 : M.contains) != null && N.call(M, "open")) && ((b = (te = Ne.classList).add) == null || b.call(te, "open"))) : ($ = (X = (D = ie == null ? void 0 : ie.childNodes[1]) == null ? void 0 : D.classList) == null ? void 0 : X.contains) != null && $.call(X, "rightChildRX") ? (ce = (Y = (Q = ie == null ? void 0 : ie.childNodes[0]) == null ? void 0 : Q.classList) == null ? void 0 : Y.contains) != null && ce.call(Y, "activeR") && ((ye = ie == null ? void 0 : (be = ie.childNodes[0].classList).remove) == null || ye.call(be, "activeR")) : ((ae = (Be = ie == null ? void 0 : ie.classList) == null ? void 0 : Be.contains) != null && ae.call(Be, "open") && !((K = (z = ie == null ? void 0 : ie.classList) == null ? void 0 : z.contains) != null && K.call(z, "fromIcoMenu")) && ((Se = (fe = ie.classList).remove) == null || Se.call(fe, "open")), (se = (ke = Ne == null ? void 0 : Ne.classList) == null ? void 0 : ke.contains) != null && se.call(ke, "open") && !((Ee = (Ae = Ne == null ? void 0 : Ne.classList) == null ? void 0 : Ae.contains) != null && Ee.call(Ae, "fromIcoMenu")) && ((Je = (Ge = Ne.classList).remove) == null || Je.call(Ge, "open")));
      }
    }
    return (u, g) => {
      const k = J("Icon");
      return T(), U("div", {
        ref_key: "menuProRef",
        ref: d,
        class: Ve(["menuBoxRPro", "cannotSelect", { light: u.light }])
      }, [
        de(P("div", Vn, [
          W(Fl, {
            data: o.data,
            pathName: m(r)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, m(a)]
        ]),
        de(W(_n, {
          class: "icoMenuR",
          data: u.data,
          pathName: m(r)
        }, null, 8, ["data", "pathName"]), [
          [ve, !m(a)]
        ]),
        W(k, {
          custom: m(h),
          size: 14,
          class: Ve([{ showIco: !m(a) }, "menuShowHideIco"]),
          title: m(i),
          onClick: p
        }, null, 8, ["custom", "class", "title"])
      ], 2);
    };
  }
}), Cn = ["title"], Ml = /* @__PURE__ */ me({
  __name: "TableIconBtn",
  props: {
    icon: { default: "md-radio-button-on" },
    title: {},
    has: { default: "" },
    disabled: { type: Boolean, default: !1 },
    size: { default: 24 }
  },
  emits: ["click"],
  setup(t, { emit: s }) {
    const o = s, e = t;
    function n(a) {
      e.disabled || o("click", a);
    }
    return (a, r) => {
      const d = J("Icon"), i = jt("has");
      return de((T(), U("div", {
        class: Ve(["tableBtnsG", { disabled: e.disabled }]),
        onClick: n,
        title: e.title || m(O)("r.button")
      }, [
        W(d, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Cn)), [
        [i, e.has]
      ]);
    };
  }
}), Tn = { class: "contentX" }, Bn = { class: "arrowA" }, zt = /* @__PURE__ */ me({
  __name: "ShowHidePanel",
  props: /* @__PURE__ */ sa({
    bg: {}
  }, {
    modelValue: { type: Boolean, default: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const s = ra(t, "modelValue"), o = t, e = G(() => s ? "background:" + o.bg || "transparent" : "");
    return (n, a) => {
      const r = J("Icon");
      return T(), U("div", {
        style: re(m(e))
      }, [
        de(P("div", Tn, [
          Fe(n.$slots, "default")
        ], 512), [
          [ve, s.value]
        ]),
        P("div", Bn, [
          P("div", {
            class: "btA",
            onClick: a[0] || (a[0] = (d) => s.value = !s.value)
          }, [
            W(r, {
              type: s.value ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), xn = { class: "contentZ" }, Ln = /* @__PURE__ */ me({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: s }) {
    const o = t, e = s, n = G({
      get() {
        return o.modelValue;
      },
      set(r) {
        e("update:modelValue", r);
      }
    }), a = G(() => n.value ? "background:" + o.bg : "");
    return (r, d) => (T(), U("div", {
      style: re(m(a))
    }, [
      de(P("div", xn, [
        Fe(r.$slots, "default")
      ], 512), [
        [ve, m(n)]
      ])
    ], 4));
  }
}), On = /* @__PURE__ */ me({
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
  setup(t, { emit: s }) {
    const o = s, e = t;
    let n = !1;
    const a = G({
      get() {
        return e.modelValue;
      },
      set(h) {
        o("update:modelValue", h);
      }
    }), r = G({
      get() {
        return e.open;
      },
      set(h) {
        o("on-toggle", h);
      }
    }), d = G(() => r.value ? "ios-arrow-up" : "ios-arrow-down");
    function i() {
      n || (n = !0, o("on-search", a.value), $e(() => {
        n = !1;
      }, 2e3));
    }
    return (h, p) => {
      const f = J("Input"), u = J("icon");
      return T(), U("div", {
        class: "tableSearchV",
        style: re({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Fe(h.$slots, "default", {}, () => [
          W(f, {
            modelValue: m(a),
            "onUpdate:modelValue": p[0] || (p[0] = (g) => Me(a) ? a.value = g : null),
            style: re({ width: e.width }),
            search: "",
            onOnSearch: i,
            class: "searchInputC",
            placeholder: e.placeholder || m(O)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        de(P("span", {
          class: "sbt",
          onClick: p[1] || (p[1] = (g) => r.value = !m(r)),
          style: re({ color: e.btnColor })
        }, [
          W(u, {
            type: m(d),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          _e(H(m(O)("r.adSearch")), 1)
        ], 4), [
          [ve, e.showBtn]
        ])
      ], 4);
    };
  }
}), Nl = {
  beforeMount(t, s) {
    function o(e) {
      var n;
      if (t.contains(e.target))
        return !1;
      (n = s == null ? void 0 : s.value) == null || n.call(s, e);
    }
    t.__vueClickOutside__ = o, Ft && document.addEventListener("click", o);
  },
  unmounted(t) {
    Ft && document.removeEventListener("click", t.__vueClickOutside__), delete t.__vueClickOutside__;
  }
};
function Dl(t, s, o, e, n = !1) {
  const a = (...r) => Xe.apply(this, r);
  Ke.call(this, {
    title: t || a("r.info.title"),
    text: s || a("r.info.text"),
    icon: o || "warning",
    onOk: e,
    buttons: [a("r.cancel")],
    closeOnClickOutside: n
  });
}
const In = { class: "tabSetF" }, An = { class: "cannotSelect" }, Pn = { class: "topCheck" }, Rn = /* @__PURE__ */ P("span", { class: "iconfont icon-r-save" }, null, -1), Kl = /* @__PURE__ */ me({
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
  setup(t, { emit: s }) {
    var _, y, R, ee, M;
    const o = s, e = t, n = E(), a = E(), r = E(!0), d = E(!1), i = E(!1), h = E([]), p = G(() => {
      var te;
      let N = O("r.unknown");
      return ((te = e.modelValue) == null ? void 0 : te.length) > h.value.length && (h.value = he(e.modelValue)), h.value.map((b) => {
        let D = { label: (b == null ? void 0 : b.title) || N };
        return b != null && b.disableShowSetting && (D.disabled = !0), D;
      });
    }), f = G(() => p.value.filter((N) => N == null ? void 0 : N.disabled)), u = G({
      get() {
        var N, te;
        return (te = (N = e.modelValue) == null ? void 0 : N.map) == null ? void 0 : te.call(N, (b) => (b == null ? void 0 : b.title) || O("r.unknown"));
      },
      set(N) {
        let te = h.value.filter((b) => {
          for (let D of N)
            if (D === (b == null ? void 0 : b.title))
              return !0;
          return !1;
        });
        o("update:modelValue", te);
      }
    }), g = (M = (ee = (R = (y = (_ = St()) == null ? void 0 : _.appContext) == null ? void 0 : y.config) == null ? void 0 : R.globalProperties) == null ? void 0 : ee.$i18n) == null ? void 0 : M.locale;
    let k = null;
    Ue(() => {
      let N = O("r.unknown"), te = I();
      te ? u.value = JSON.parse(decodeURI(te)) : e.defaultCheck && (u.value = e.modelValue.filter((b) => b == null ? void 0 : b.showSettingCheck).map((b) => (b == null ? void 0 : b.title) || N)), Pe(function() {
        !n.value || !a.value || (k = new wa(n.value, a.value, {
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
          onUpdate: (b) => {
            var D;
            if (b != null && b.popper && ((D = b.instance) != null && D.popper)) {
              const X = v(b), { needChange: $ } = X;
              if ($) {
                const { height: Q } = X, Y = b.instance.popper;
                Y.style && (Y.style.height = `${Q}px`);
              }
            }
          }
        }));
      }), $e(() => {
        var b;
        i.value = !0, (b = k == null ? void 0 : k.update) == null || b.call(k), Pe(function() {
          i.value = !1;
        });
      }, 0);
    }), xl(function() {
      var N;
      (N = k == null ? void 0 : k.destroy) == null || N.call(k);
    });
    function v(N) {
      var $, Q;
      const { height: te } = N.popper, b = N.instance.popper, D = window.innerHeight;
      let X = 0;
      if (($ = b.childNodes) != null && $.length)
        for (let Y = 0; Y < b.childNodes.length; Y++)
          X += (Q = b.childNodes[Y]) == null ? void 0 : Q.offsetHeight;
      return D < te - 10 || te < X ? {
        needChange: !0,
        height: D - 10 < X ? D - 10 : X
      } : { needChange: !1 };
    }
    function V(N) {
      N.length === p.value.length ? (r.value = !1, d.value = !0) : N.length > f.value.length ? (r.value = !0, d.value = !1) : (r.value = !1, d.value = !1);
    }
    Ce(() => u.value, V, {
      immediate: !0,
      deep: !0
    });
    function w() {
      i.value && (L() && Dl(O("r.notSave"), "", "warning", x), i.value = !1);
    }
    function B() {
      i.value ? w() : (i.value = !0, Pe(function() {
        var N;
        (N = k == null ? void 0 : k.update) == null || N.call(k);
      }));
    }
    function x() {
      g ? window[e.storage].setItem(e.sKey + "_" + g, encodeURI(JSON.stringify(u.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(u.value))), w();
    }
    function C(N) {
      var te, b;
      if (i.value) {
        if (e.transfer) {
          const D = a.value;
          if (D === (N == null ? void 0 : N.target) || (te = D == null ? void 0 : D.contains) != null && te.call(D, N == null ? void 0 : N.target))
            return;
        }
        (b = N == null ? void 0 : N.preventDefault) == null || b.call(N), w();
      }
    }
    function F() {
      r.value ? d.value = !1 : d.value = !d.value, r.value = !1, d.value ? u.value = p.value.map((N) => N == null ? void 0 : N.label) : u.value = f.value.map((N) => N == null ? void 0 : N.label);
    }
    function I() {
      let N;
      return g ? N = window[e.storage].getItem(e.sKey + "_" + g) : N = window[e.storage].getItem(e.sKey), N;
    }
    function L() {
      var te;
      let N = I();
      if (N) {
        if (N = JSON.parse(decodeURI(N)), (N == null ? void 0 : N.length) !== ((te = u.value) == null ? void 0 : te.length))
          return !0;
        for (let b of N)
          if (u.value.indexOf(b) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (N, te) => {
      const b = J("Icon"), D = J("Checkbox"), X = J("CheckboxGroup");
      return de((T(), U("div", In, [
        P("div", {
          ref_key: "buttonRef",
          ref: n,
          class: "tabSetBt",
          onClick: B
        }, [
          W(b, {
            type: "md-settings",
            size: "17"
          }),
          P("span", An, H(m(O)("r.tabSetting")), 1)
        ], 512),
        (T(), Z(ua, {
          to: "body",
          disabled: !e.transfer
        }, [
          de(P("div", {
            ref_key: "popperRef",
            ref: a,
            class: "tabSetCard",
            style: re({ width: e.width, backgroundColor: e.bg })
          }, [
            P("div", Pn, [
              W(D, {
                indeterminate: m(r),
                modelValue: m(d),
                "onUpdate:modelValue": te[0] || (te[0] = ($) => Me(d) ? d.value = $ : null),
                onClick: It(F, ["prevent"])
              }, {
                default: ne(() => [
                  _e(H(m(O)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              P("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: x
              }, [
                Rn,
                P("span", null, H(m(O)("r.save")), 1)
              ])
            ]),
            W(X, {
              modelValue: m(u),
              "onUpdate:modelValue": te[1] || (te[1] = ($) => Me(u) ? u.value = $ : null)
            }, {
              default: ne(() => [
                (T(!0), U(we, null, Te(m(p), ($, Q) => (T(), Z(D, {
                  class: "setItem",
                  label: $ && $.label,
                  key: "tabSet_" + e.sKey + Q,
                  disabled: $ && $.disabled
                }, null, 8, ["label", "disabled"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ], 4), [
            [ve, m(i)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [m(Nl), C]
      ]);
    };
  }
});
function $n(t) {
  return t.replace(/_(\w)/g, function(s, o) {
    return o.toUpperCase();
  });
}
function Ji(t) {
  let s = document.createElement("div");
  return s.textContent !== void 0 ? s.textContent = t : s.innerText = t, s.innerHTML;
}
function Yi(t) {
  let s = document.createElement("div");
  return s.innerHTML = t, s.innerText || s.textContent;
}
function pl(t) {
  return new Promise((s) => {
    let o = new FileReader();
    o.readAsDataURL(t), o.onloadend = () => {
      s(o.result);
    };
  });
}
function zl(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function ut(t) {
  return q(t) === "String" && t.indexOf("image") > -1;
}
function ml(t) {
  const s = zl(t);
  let o = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(s) > -1 ? o = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(s) > -1 ? o = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(s) > -1 ? o = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(s) > -1 ? o = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(s) > -1 ? o = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(s) > -1 && (o = "ios-videocam"), o;
}
function Fn(t, s) {
  let o = document.createElement("a");
  o.href = s, o.download = t, Mn(o);
}
function Mn(t) {
  let s = document.createEvent("MouseEvents");
  s.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(s);
}
function Ut({
  group: t,
  condition: s,
  pathKey: o,
  childKey: e = "children",
  path: n = []
}) {
  if (t && pa(t)) {
    if (ma(s)) {
      if (nt(t)) {
        let a = t, r = he(n);
        if (s(a))
          return o && a[o] && r.push(a[o]), r;
        if (a[e] && !Re(a[e])) {
          o && a[o] && r.push(a[o]);
          let d = Ut({
            group: a[e],
            condition: s,
            pathKey: o,
            childKey: e,
            path: r
          });
          if (!Re(d))
            return d;
        }
      } else if (Array.isArray(t))
        for (let a of t) {
          let r = he(n);
          if (s(a))
            return o && a[o] ? r.push(a[o]) : r.push(String(t.indexOf(a))), r;
          if (a[e] && a[e].length > 0) {
            o && a[o] ? r.push(a[o]) : r.push(String(t.indexOf(a)));
            let d = Ut({
              group: a[e],
              condition: s,
              pathKey: o,
              childKey: e,
              path: r
            });
            if (!Re(d))
              return d;
          }
        }
    } else if (Array.isArray(t))
      for (let a of t) {
        let r = he(n);
        if (a === s)
          return r.push(String(t.indexOf(a))), r;
      }
  }
  return [];
}
function Nn(t, s = 12) {
  if (q(t) === "String" && t.length > 0) {
    let o = document.createElement("span");
    o.style.fontSize = s + "px", o.style.fontFamily = "inherit", o.innerHTML = t, o.style.opacity = "0", o.style.position = "fixed", o.style.top = "3000px", document.body.append(o);
    const e = o.clientWidth;
    return document.body.removeChild(o), e;
  }
  return 0;
}
function Qi(t) {
  return t === "" ? null : t;
}
function Zi(t) {
  var s;
  t = t || window.Event, t != null && t.stopPropagation ? (s = t.stopPropagation) == null || s.call(t) : t && (t.cancelBubble = !0);
}
let dt = !1;
function Et({
  height: t,
  width: s = 416,
  title: o,
  content: e,
  onOk: n,
  onCancel: a,
  onClose: r,
  okText: d,
  cancelText: i,
  noWarnIcon: h,
  footerAlign: p,
  cancelBt: f = !0
}) {
  const u = (...w) => Xe.apply(this, w);
  let k = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", v = q(e) === "String";
  const V = typeof e == "function";
  Qe.warning({
    width: s,
    footerHide: !0,
    render: () => Oe(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: k
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
                Oe("span", o || u("r.info.title")),
                Oe(
                  Ot,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      dt || (Qe.remove(), r && q(r) === "Function" && r());
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
                  textAlign: v ? "center" : "left"
                }
              },
              [
                Oe("i", {
                  class: v && !h ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Oe("div", { class: "msgBoxConO" }, V ? [e(Oe)] : e || u("r.info.text"))
              ]
            ),
            Oe(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: p || "center"
                }
              },
              [
                Oe(
                  Ot,
                  {
                    class: "okBtN",
                    onClick(w) {
                      var B, x, C, F, I, L, _, y, R;
                      if (n && typeof n == "function") {
                        const ee = n();
                        if (ee && q(ee) === "Promise") {
                          dt = !0;
                          const M = (w == null ? void 0 : w.currentTarget) || (w == null ? void 0 : w.target);
                          M && ((x = (B = M.classList) == null ? void 0 : B.add) == null || x.call(B, "ivu-btn-loading"), (F = (C = M.nextSibling) == null ? void 0 : C.setAttribute) == null || F.call(C, "disabled", "disabled"), (R = (y = ((_ = (L = (I = M.parentElement) == null ? void 0 : I.parentElement) == null ? void 0 : L.querySelector) == null ? void 0 : _.call(L, ".titleN .closeN")).classList) == null ? void 0 : y.add) == null || R.call(y, "disabled")), Promise.resolve(ee).then(() => {
                            dt = !1, Qe.remove();
                          }).catch(() => {
                            dt = !1, Qe.remove();
                          });
                        } else
                          Qe.remove();
                      }
                    }
                  },
                  () => [
                    Oe("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Oe("span", d || u("r.confirm"))
                  ]
                ),
                Oe(
                  Ot,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onClick() {
                      dt || (Qe.remove(), q(a) === "Function" && a && a());
                    }
                  },
                  () => i || u("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
let tt = 0, mt = document.createElement("div");
mt.setAttribute("class", "spinModal");
mt.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(mt);
};
function hl(t) {
  t ? mt.classList.add("show") : mt.classList.remove("show");
}
function Ul(t) {
  let s = tt;
  t ? tt++ : tt > 0 && tt--, s !== tt && (tt === 0 ? hl(!1) : s === 0 && hl(!0));
}
const Dn = window.location.origin;
let Vt = null;
const yl = (...t) => Xe.apply(Vt, t);
let ze = Rt.create({
  baseURL: Dn,
  withCredentials: !0
  // 允许携带cookie
});
function Kn() {
  console.info(
    "store为空，请在安装插件时传入store实例，vuex：app.use(plugRQw,{store})，Pinia：app.use(plugRQw,{useStore})"
  );
}
ze.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function vl() {
  var t, s;
  if (ze.store)
    if (typeof ze.store == "function") {
      const o = ze.store();
      o.logout && o.logout();
    } else
      (s = (t = ze.store) == null ? void 0 : t.dispatch) == null || s.call(t, "logout");
  else
    Kn();
}
ze.interceptors.response.use(
  (t) => {
    var s, o;
    return Vt && (((s = t == null ? void 0 : t.data) == null ? void 0 : s.code) === 403 || ((o = t == null ? void 0 : t.data) == null ? void 0 : o.code) === 409) && Et({
      content: yl("r.http." + t.data.code),
      onOk: vl
    }), t;
  },
  (t) => {
    var s, o;
    return Vt && (((s = t == null ? void 0 : t.response) == null ? void 0 : s.status) === 403 || ((o = t == null ? void 0 : t.response) == null ? void 0 : o.status) === 409) && Et({
      content: yl("r.http." + t.response.status),
      onOk: vl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function Ye(t, s, o, e) {
  e && e.spin && Ul(!1);
  let n = !0, a = t && t.data;
  if (a) {
    o = o || [];
    for (let r of o)
      a = a[r], n = n && a;
    return n ? a : (s && console.warn(s), !1);
  }
  return s && console.warn(s), !1;
}
function zn(t, s, o, e, n, a, r) {
  return new Promise((d, i) => {
    switch (t) {
      case "get":
        ze.get(s, { params: o }).then((p) => {
          let f = Ye(p, e, n, a);
          f ? d(f) : i(p);
        }).catch((p) => {
          Ye({}, e, n, a), i(p);
        });
        break;
      case "delete":
        let h = r ? "params" : "data";
        ze.delete(s, { [h]: o }).then((p) => {
          let f = Ye(p, e, n, a);
          f ? d(f) : i(p);
        }).catch((p) => {
          Ye({}, e, n, a), i(p);
        });
        break;
      case "post":
        ze.post(s, o, a).then((p) => {
          let f = Ye(p, e, n, a);
          f ? d(f) : i(p);
        }).catch((p) => {
          Ye({}, e, n, a), i(p);
        });
        break;
      case "put":
        ze.put(s, o, a).then((p) => {
          let f = Ye(p, e, n, a);
          f ? d(f) : i(p);
        }).catch((p) => {
          Ye({}, e, n, a), i(p);
        });
        break;
    }
  });
}
function yt(t, s, o = {}, e, n, a, r) {
  return new Promise((d, i) => {
    var h;
    if (s) {
      a && a.spin && Ul(!0);
      let p = s;
      if (window && window.hasOwnProperty("g")) {
        const g = window.g;
        let k = Object.keys(g).filter((v) => {
          var V;
          return ((V = v == null ? void 0 : v.indexOf) == null ? void 0 : V.call(v, "URL")) > -1;
        }).map((v) => {
          var V;
          return (V = v.replace) == null ? void 0 : V.call(v, "URL", "");
        });
        for (let v of k) {
          let V = new RegExp("^/" + v + "(?=/.*$)", "i");
          if (V.test(s) && g[v + "URL"]) {
            p = g[v + "URL"] + s.replace(V, "");
            break;
          }
        }
      }
      let f;
      if (((h = a == null ? void 0 : a.headers) == null ? void 0 : h["Content-Type"]) === "multipart/form-data")
        f = o;
      else if (o && !Re(o))
        if (Array.isArray(o)) {
          f = [];
          for (let g of o)
            (g || g === 0 || g === !1 || g === "" && a && !a.noEmptyStr) && f.push(g);
        } else {
          f = {};
          for (let g in o)
            o.hasOwnProperty(g) && (o[g] || o[g] === 0 || o[g] === !1 || o[g] === "" && a && !a.noEmptyStr) && (f[g] = o[g]);
        }
      let u = t.toLowerCase();
      zn(u, p, f, e, n, a, r).then((g) => {
        d(g);
      }).catch((g) => {
        i(g);
      });
    } else
      console.error("没有请求地址:url"), i("没有请求地址:url");
  });
}
const We = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(t, s) {
    ze.store = t, Vt = s.config.globalProperties;
  },
  post(t, s, o, e, n) {
    return new Promise((a, r) => {
      yt("post", t, s, o, e, n).then((d) => {
        a(d);
      }).catch((d) => {
        r(d);
      });
    });
  },
  put(t, s, o, e, n) {
    return new Promise((a, r) => {
      yt("put", t, s, o, e, n).then((d) => {
        a(d);
      }).catch((d) => {
        r(d);
      });
    });
  },
  get(t, s, o, e, n) {
    return new Promise((a, r) => {
      yt("get", t, s, o, e, n).then((d) => {
        a(d);
      }).catch((d) => {
        r(d);
      });
    });
  },
  delete(t, s, o, e, n, a = !0) {
    return new Promise((r, d) => {
      yt("delete", t, s, o, e, n, a).then((i) => {
        r(i);
      }).catch((i) => {
        d(i);
      });
    });
  },
  all: Rt.all,
  spread: Rt.spread,
  config: ze
}, Un = {
  key: 0,
  class: "pageTotal"
}, En = {
  key: 1,
  class: "pageProSize"
}, El = /* @__PURE__ */ me({
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
  setup(t, { emit: s }) {
    var u;
    const o = s, e = E(), n = t, a = ((u = xe == null ? void 0 : xe()) == null ? void 0 : u.fontSizeBase) || 14, r = E(16), d = G({
      get() {
        return n.modelValue;
      },
      set(g) {
        o("update:modelValue", g), o("on-change", g);
      }
    }), i = G({
      get() {
        return n.pageSize;
      },
      set(g) {
        o("on-page-size-change", g), d.value !== 1 && (d.value = 1);
      }
    }), h = G(() => {
      const g = Nn(String(n.total || 0), a) + r.value + 2;
      return g < 32 ? 32 : g;
    });
    Ce(
      h,
      (g) => {
        Pe(function() {
          f(g);
        });
      },
      { immediate: !0 }
    );
    function p() {
      var w, B, x;
      const g = (x = (B = (w = e.value) == null ? void 0 : w.$el) == null ? void 0 : B.querySelector) == null ? void 0 : x.call(B, "input");
      if (!g)
        return 16;
      const k = window.getComputedStyle(g), v = k == null ? void 0 : k.paddingLeft, V = k == null ? void 0 : k.paddingRight;
      return !v || !V ? 16 : Number(v.replace("px", "")) + Number(V.replace("px", ""));
    }
    function f(g) {
      var v, V, w;
      const k = (w = (V = (v = e.value) == null ? void 0 : v.$el) == null ? void 0 : V.querySelector) == null ? void 0 : w.call(V, "input");
      k != null && k.style && (k.style.width = `${g}px`);
    }
    return Ue(() => {
      r.value = p();
    }), (g, k) => {
      const v = J("Page"), V = J("Option"), w = J("Select");
      return T(), U("div", {
        class: Ve(["pagePro", { pageProDefault: n.size === "default" }])
      }, [
        n.showTotal ? (T(), U("span", Un, H(m(O)("r.total") + " ") + H(n.total) + H(" " + m(O)("r.items")), 1)) : pe("", !0),
        W(v, {
          ref_key: "pageRef",
          ref: e,
          modelValue: m(d),
          "onUpdate:modelValue": k[0] || (k[0] = (B) => Me(d) ? d.value = B : null),
          "page-size": m(i),
          total: n.total,
          size: n.size,
          "page-size-opts": n.pageSizeOpts,
          disabled: n.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        n.showSizer ? (T(), U("div", En, [
          W(w, {
            modelValue: m(i),
            "onUpdate:modelValue": k[1] || (k[1] = (B) => Me(i) ? i.value = B : null),
            size: n.size,
            transfer: n.transfer,
            disabled: n.disabled
          }, {
            default: ne(() => [
              (T(!0), U(we, null, Te(n.pageSizeOpts, (B) => (T(), Z(V, {
                value: B,
                key: B
              }, {
                default: ne(() => [
                  _e(H(B) + " " + H(m(O)("r.page")), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size", "transfer", "disabled"])
        ])) : pe("", !0)
      ], 2);
    };
  }
}), Gn = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, Hn = { class: "topBtn" }, Wn = { class: "tableContainer growFlexItem" }, jn = { class: "fullHeight relativeBox" }, qn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, Xn = { class: "pageContainer" }, Jn = 300, Gt = /* @__PURE__ */ me({
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
  setup(t, { expose: s, emit: o }) {
    var ae;
    const e = o;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...va });
    const a = t, r = ((ae = xe()) == null ? void 0 : ae.pageSizes) || [10, 20, 50, 100], d = E(a.data), i = E(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || a.pageSize
    ), h = E(1), p = E(0);
    let f = [], u, g, k = a.orderKey, v = a.orderDefault;
    const V = G(() => {
      for (let z of a.columns)
        if (z != null && z.fixed)
          return !0;
      return !1;
    }), w = G(() => a.selectionFixed || V.value), B = G(() => {
      let z = {
        ...a.searchData,
        current: h.value,
        size: i.value
      };
      return a.sortable === "custom" && (a.orderKeyFormat === "underline" ? z[v] = Al(k) : a.orderKeyFormat === "camelcase" && (z[v] = $n(k))), z;
    }), x = G(() => {
      let z = a.columns.filter((K) => K && K.type !== "selection");
      if (a.selection || a.radio) {
        let K;
        a.radio ? K = {
          title: " ",
          width: 65,
          render: (fe, Se) => Oe(ga, {
            modelValue: Se.row.btChecked
          })
        } : K = {
          type: "selection",
          width: 60
        }, a.selectionFixed && (K.fixed = a.selectionFixed), z.unshift(K);
      }
      return z.forEach((K) => {
        var fe;
        K && (a.sortable === "custom" ? K.key && K.sortable !== !0 && K.sortable !== !1 && (K.sortable = "custom") : K.sortable = !1, K.align || (K.align = ((fe = xe()) == null ? void 0 : fe.btTablePageAlign) || "center"));
      }), z.forEach((K) => {
        K != null && K.key && K.render === void 0 && (K.tooltip ? K.render = Rl(K.key, a.tableEmptyTdHandle) : K.render = (fe, Se) => {
          let ke = "";
          return K != null && K.key && (ke = Se.row[K.key]), a.tableEmptyTdHandle ? Oe("span", ke === "" ? "--" : ke ?? "--") : Oe("span", ke);
        });
      }), z;
    }), C = G({
      get() {
        return d.value.map((z, K) => ({
          btKey: "bt-" + K,
          btChecked: !1,
          ...z
        }));
      },
      set(z) {
        d.value = z;
      }
    }), F = G(() => f.map((z) => z == null ? void 0 : z.id)), I = G(() => f.map((z) => z == null ? void 0 : z.btKey)), L = E();
    Ce(() => a.searchData, _, { deep: !0 }), Ce(
      () => a.orderDefault,
      (z) => {
        v = z;
      }
    ), Ce(
      () => a.orderKey,
      (z) => {
        k = z;
      }
    );
    function _() {
      h.value = 1, Be();
    }
    function y() {
      a.initData && Be();
    }
    function R(z) {
      d.value.unshift(he(z)), $e(() => {
        var K, fe;
        (fe = (K = L.value) == null ? void 0 : K.clickCurrentRow) == null || fe.call(K, 0);
      }, 100);
    }
    function ee(z, K, fe) {
      let Se = null;
      if (K ? Se = g : typeof K == "number" && (Se = K), Se !== null) {
        let ke = d.value[Se];
        for (let se in z)
          z.hasOwnProperty(se) && (ke[se] = z[se]);
        fe && $e(() => {
          var se, Ae;
          (Ae = (se = L.value) == null ? void 0 : se.clickCurrentRow) == null || Ae.call(se, Se);
        }, 10);
      }
    }
    function M(z) {
      d.value.splice(z, 1), $e(() => {
        var K, fe;
        (fe = (K = L.value) == null ? void 0 : K.clickCurrentRow) == null || fe.call(K, 0);
      }, 100);
    }
    function N(z, K) {
      var fe, Se;
      z.btChecked && a.radio || (a.selection || a.radio) && a.rowClickSelect && ((Se = (fe = L.value) == null ? void 0 : fe.toggleSelect) == null || Se.call(fe, K));
    }
    function te(z, K) {
      u = K.btKey, g = Number(K.btKey.split("-")[1]), a.radio && (d.value[g].btChecked = !0);
    }
    function b(z) {
      if (a.radio)
        for (let K of C.value)
          K != null && K.btKey && K.btKey !== u && (d.value[Number(K.btKey.split("-")[1])].btChecked = !1);
      f = z, e("on-selection-change", z);
    }
    function D() {
      return he(f);
    }
    function X() {
      Be();
    }
    function $(z) {
      i.value = z, localStorage.setItem("btPageSize", String(z)), h.value === 1 && Be();
    }
    function Q({ key: z, order: K }) {
      v === "normal" ? (k = a.orderKey, v = a.orderDefault) : (k = z, v = K), h.value = 1, ye();
    }
    function Y(z) {
      var fe, Se, ke, se, Ae, Ee, Ge, Je;
      const K = z;
      if (typeof K == "number")
        ce(), g = K, u = (Se = (fe = C.value) == null ? void 0 : fe[K]) == null ? void 0 : Se.btKey, (se = (ke = L.value) == null ? void 0 : ke.clickCurrentRow) == null || se.call(ke, K);
      else if (Array.isArray(K)) {
        if (a.radio || !a.selection)
          return;
        ce();
        for (let ie of K)
          (Ee = (Ae = L.value) == null ? void 0 : Ae.clickCurrentRow) == null || Ee.call(Ae, ie);
      } else if (typeof K == "function")
        for (let ie = 0; ie < C.value.length; ie++) {
          const Ne = C.value[ie];
          K(Ne) && ((Je = (Ge = L.value) == null ? void 0 : Ge.clickCurrentRow) == null || Je.call(Ge, ie));
        }
    }
    function ce() {
      var z, K;
      if (a.radio) {
        if (I.value.length > 0 && C.value.length > 0) {
          let fe = I.value[0].split("-")[1];
          C.value[fe].btChecked = !1;
        }
      } else
        (K = (z = L.value) == null ? void 0 : z.selectAll) == null || K.call(z, !1);
      f.length > 0 && (f = [], e("on-selection-change", [])), u = null, g = null;
    }
    function be() {
      d.value = [], ce(), h.value = 1, p.value = 0;
    }
    function ye(z, K, fe) {
      return new Promise((Se) => {
        z && (v = z), K && (k = K), a.url ? We[a.method](a.url, B.value, "", [], { spin: a.getDataLoading }).then((ke) => {
          var Ae, Ee;
          let se;
          fe || ce(), typeof a.dataHandler == "function" ? se = a.dataHandler(ke) : se = ke, se.data ? (se.data.records || se.data.records === null ? d.value = se.data.records || [] : se.data.page ? (se.data.page.records || se.data.page.records === null) && (d.value = se.data.page.records || []) : se.data.data ? (se.data.data.records || se.data.data.records === null) && (d.value = se.data.data.records || []) : d.value = se.data, p.value = ((Ae = se.data.page) == null ? void 0 : Ae.total) || ((Ee = se.data.data) == null ? void 0 : Ee.total) || se.data.total || se.total || 0, p.value === 0 && h.value > 1 && d.value && d.value.length === 0 ? h.value = 1 : h.value > 1 && p.value <= (h.value - 1) * i.value && (h.value--, Pe(function() {
            ye(z, K);
          })), e("on-data-change", se), Se(se)) : (console.warn("请求返回数据有误，无法使用"), be(), e("on-data-change", se));
        }).catch((ke) => {
          ce(), be(), e("on-data-change", ke);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Be(z, K, fe) {
      a.radio && (z || a.rowClickNum !== -1) ? ye(K, fe, z).then(() => {
        d.value.length > 0 && $e(() => {
          var Se, ke, se, Ae;
          z ? (ke = (Se = L.value) == null ? void 0 : Se.clickCurrentRow) == null || ke.call(Se, g || 0) : (Ae = (se = L.value) == null ? void 0 : se.clickCurrentRow) == null || Ae.call(se, a.rowClickNum);
        }, 10);
      }) : ye();
    }
    return Ue(y), s({
      dataS: C,
      selectedIds: F,
      addRow: R,
      setRowData: ee,
      deleteRow: M,
      getSelected: D,
      selectRow: Y,
      clearSelect: ce,
      clearTableData: be,
      getTableData: ye,
      getDataAndClickRow: Be
    }), (z, K) => {
      const fe = J("Table"), Se = J("Page");
      return T(), U("div", Gn, [
        de(P("div", Hn, [
          Fe(z.$slots, "tableSetting"),
          Fe(z.$slots, "topMsg"),
          Fe(z.$slots, "topBtnGroup")
        ], 512), [
          [ve, a.showTopRow]
        ]),
        P("div", Wn, [
          P("div", jn, [
            P("div", qn, [
              W(fe, it({
                ref_key: "tableRef",
                ref: L
              }, z.$attrs, {
                height: m(w) && Jn || null,
                class: { noBorderTable: a.noBorderTable, fullHeightTable: !m(w), lightHeadO: a.lightHead },
                columns: m(x),
                data: m(C),
                "highlight-row": a.radio || a.highlightRow,
                onOnSelect: te,
                onOnSelectionChange: b,
                onOnSortChange: Q,
                onOnRowClick: N
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        de(P("div", Xn, [
          a.usePagePro ? (T(), Z(El, {
            key: 0,
            modelValue: m(h),
            "onUpdate:modelValue": K[0] || (K[0] = (ke) => Me(h) ? h.value = ke : null),
            total: m(p),
            showTotal: a.showTotal,
            pageSize: m(i),
            showSizer: a.showSizer,
            pageSizeOpts: m(r),
            size: a.pageComponentSize,
            onOnChange: X,
            onOnPageSizeChange: $
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (T(), Z(Se, {
            key: 1,
            modelValue: m(h),
            "onUpdate:modelValue": K[1] || (K[1] = (ke) => Me(h) ? h.value = ke : null),
            total: m(p),
            pageSize: m(i),
            pageSizeOpts: m(r),
            showSizer: a.showSizer,
            showTotal: a.showTotal,
            size: a.pageComponentSize,
            showElevator: !a.noElevator,
            onOnChange: X,
            onOnPageSizeChange: $
          }, null, 8, ["modelValue", "total", "pageSize", "pageSizeOpts", "showSizer", "showTotal", "size", "showElevator"]))
        ], 512), [
          [ve, !a.noPage]
        ])
      ], 512);
    };
  }
}), Gl = /* @__PURE__ */ me({
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
  setup(t, { emit: s }) {
    const o = s, e = t, n = G({
      get() {
        var p;
        return (p = e.modelValue) == null ? void 0 : p.key;
      },
      set(p) {
        let f = {
          key: p,
          val: null
        };
        n.value && n.value !== p && (f.beforeKey = n.value), o("update:modelValue", f), o("on-change", f);
      }
    }), a = G({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(p) {
        o("update:modelValue", {
          key: n.value,
          val: p
        });
      }
    }), r = G(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), d = G(() => ({
      width: typeof e.itemWidth == "number" ? e.itemWidth + "px" : e.itemWidth
    }));
    function i(p) {
      p != null && p.target && p.target.value !== void 0 && h({
        key: n.value,
        val: p.target.value
      });
    }
    const h = qt((p) => {
      o("on-change", p);
    }, 500);
    return (p, f) => {
      const u = J("Option"), g = J("Select"), k = J("Input");
      return T(), U("div", null, [
        W(g, {
          modelValue: m(n),
          "onUpdate:modelValue": f[0] || (f[0] = (v) => Me(n) ? n.value = v : null),
          style: re(m(r)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: ne(() => [
            (T(!0), U(we, null, Te(e.selectOption, (v, V) => (T(), Z(u, {
              value: v == null ? void 0 : v.val,
              label: v == null ? void 0 : v.label,
              key: "selectInputOp" + (v == null ? void 0 : v.value) + V,
              style: re({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        W(k, {
          modelValue: m(a),
          "onUpdate:modelValue": f[1] || (f[1] = (v) => Me(a) ? a.value = v : null),
          placeholder: e.placeholder || m(O)("r.pInput"),
          style: re(m(d)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: i
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
let Ht = { securityJsCode: "", key: "" };
function Yn({ securityJsCode: t, key: s }) {
  Ht.securityJsCode = t, Ht.key = s;
}
function Qn(t) {
  return Ht[t];
}
const Hl = /* @__PURE__ */ me({
  __name: "InputMap",
  props: {
    modelValue: { default: () => ({}) },
    width: { default: "100%" },
    height: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    showMap: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(t, { emit: s }) {
    const o = s, e = t, n = G({
      get() {
        let C;
        return e.modelValue ? e.modelValue.name ? C = he(e.modelValue) : C = {
          ...e.modelValue,
          name: null
        } : C = {
          name: null
        }, C;
      },
      set(C) {
        o("update:modelValue", he(C));
      }
    }), a = G(() => vt(e.width) ? e.width + "px" : e.width), r = G(() => vt(e.height) ? e.height + "px" : e.height ? e.height : vt(e.width) ? e.width * 0.66 + "px" : "200px"), d = G(() => ({
      width: a.value,
      position: "relative"
    })), i = G(() => ({
      width: a.value,
      height: r.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    Ce(
      () => e.modelValue,
      (C) => {
        if (C && C.lng && C.lat) {
          if (!v || !V)
            return;
          B({
            lng: C.lng,
            lat: C.lat,
            name: C.name
          });
        }
      }
    );
    const h = "mapId" + Math.floor(Math.random() * 1e9), p = E(null), f = E(null);
    let u;
    function g() {
      f.value && f.value.clientHeight < 10 || !f.value ? $e(g, 300) : $e(w, 100);
    }
    let k, v, V;
    function w() {
      dl.load({
        key: Qn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((C) => {
        k = C, v = new k.Map(h).on("complete", () => {
          var I, L, _, y;
          V = new k.Geocoder(), (I = e.modelValue) != null && I.lng && ((L = e.modelValue) != null && L.lat) && B({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const F = (y = (_ = p.value) == null ? void 0 : _.$el) == null ? void 0 : y.children;
          F && F.length > 1 && new k.AutoComplete({
            input: F[1]
          }).on("select", (R) => {
            var ee, M, N;
            (ee = R == null ? void 0 : R.poi) != null && ee.name && ((M = R.poi.location) != null && M.lng && ((N = R.poi.location) != null && N.lat) ? (B({
              name: R.poi.name,
              lng: R.poi.location.lng,
              lat: R.poi.location.lat
            }), n.value = {
              name: R.poi.name,
              lng: R.poi.location.lng,
              lat: R.poi.location.lat
            }) : v == null || v.setCity(R.poi.name, () => {
              let te = v.getCenter();
              B({
                name: R.poi.name,
                lng: te.lng,
                lat: te.lat
              }), n.value = {
                name: R.poi.name,
                lng: te.lng,
                lat: te.lat
              };
            })), o("on-change", n.value);
          }), v == null || v.on("hotspotclick", (R) => {
            B({
              name: R.name,
              lng: R.lnglat.lng,
              lat: R.lnglat.lat
            }), n.value = {
              name: R.name,
              lng: R.lnglat.lng,
              lat: R.lnglat.lat
            };
          });
        });
      });
    }
    function B({ lng: C, lat: F, name: I }) {
      v == null || v.clearMap();
      let L = new k.LngLat(C, F), _ = new k.Marker({
        map: v,
        position: L,
        draggable: !0
      });
      v == null || v.add(_), x(C, F), _.on("dragend", () => {
        let y = _.getPosition();
        n.value = {
          name: I || null,
          lng: y.lng,
          lat: y.lat
        }, x(C, F);
      }), _.on("click", (y) => {
        var R, ee;
        u && u.open(v, (ee = (R = y == null ? void 0 : y.target) == null ? void 0 : R.getPosition) == null ? void 0 : ee.call(R));
      }), v == null || v.setFitView();
    }
    function x(C, F) {
      V == null || V.getAddress([C, F], (I, L) => {
        I === "complete" && L.info === "OK" && L.regeocode && L.regeocode.formattedAddress ? u = new k.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + L.regeocode.formattedAddress + "</div>",
          offset: new k.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (u = null, console.warn("地图获取位置信息失败", L));
      });
    }
    return Ue(g), Tl(() => {
      var C;
      v && (v.destroy(), (C = dl) == null || C.reset(), v = null, V = null, u = null);
    }), (C, F) => (T(), U("div", {
      style: re(m(d)),
      class: "containerIKJ"
    }, [
      W(m(ba), {
        ref_key: "mapInputRef",
        ref: p,
        modelValue: m(n).name,
        "onUpdate:modelValue": F[0] || (F[0] = (I) => m(n).name = I),
        class: Ve({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || m(O)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      P("div", {
        style: re(m(i)),
        ref_key: "mapRef",
        ref: f,
        id: h
      }, null, 4)
    ], 4));
  }
});
var Sl;
const Wl = /* @__PURE__ */ me({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (Sl = window == null ? void 0 : window.g) != null && Sl.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
  setup(t, { emit: s }) {
    const o = s, e = t, n = E([]), a = G({
      get() {
        let p = e.modelValue;
        return Array.isArray(p) ? he(p) : vt(p) ? Ut({
          group: n.value,
          condition: (f) => (f == null ? void 0 : f.value) === p,
          pathKey: "value"
        }) : Ll(p) ? p.split(e.separator) : [];
      },
      set(p) {
        if (e.onlyLastVal)
          Re(p) ? (o("update:modelValue", null), o("on-label-change", null)) : o("update:modelValue", gt(p));
        else {
          if (pt(e.modelValue, p))
            return;
          o("update:modelValue", he(p));
        }
      }
    });
    function r() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      We.get(e.url).then((p) => {
        var u;
        let f = null;
        (u = p == null ? void 0 : p.data) != null && u.records ? f = p.data.records : p != null && p.data ? f = p.data : p && (f = p), f ? (typeof e.optionFilter == "function" && q(e.optionFilter) === "Function" && (f = e.optionFilter(f)), n.value = d(f)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function d(p) {
      let f = [];
      for (let u of p) {
        let g = {
          value: u[e.optionVal],
          label: u[e.optionLabel]
        };
        u != null && u.children && !Re(u.children) && (g.children = d(u.children)), f.push(g);
      }
      return f;
    }
    function i(p) {
      return e.onlyLastLabel ? gt(p) : p.join(e.separator);
    }
    function h(p, f) {
      let u = "";
      Re(f) || (u = f.map((g) => g == null ? void 0 : g.label).join(e.separator)), o("on-label-change", u);
    }
    return Ue(r), (p, f) => {
      const u = J("Cascader");
      return T(), Z(u, {
        data: m(n),
        modelValue: m(a),
        "onUpdate:modelValue": f[0] || (f[0] = (g) => Me(a) ? a.value = g : null),
        onOnChange: h,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": i,
        placeholder: e.placeholder || m(O)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), jl = /* @__PURE__ */ me({
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
  setup(t, { emit: s }) {
    const o = s, e = t, n = G({
      get() {
        if (e.modelValue && (typeof e.modelValue == "string" || typeof e.modelValue == "number")) {
          let a = String(e.modelValue).trim();
          if (/^\d+$/.test(a)) {
            let d = a.substring(0, 2) + "0000000000", i = a.substring(0, 4) + "00000000";
            return [d, i, a];
          }
          return a.indexOf(e.separator) !== -1 ? a.split(e.separator) : [a];
        } else return Array.isArray(e.modelValue) ? he(e.modelValue) : [];
      },
      set(a) {
        if (Re(a))
          o("update:modelValue", null), o("on-name-change", null);
        else {
          let r = gt(a), d = "", i = "";
          if (r && (d = r.code), d && d.length < 12) {
            let h = [...d];
            for (; h.length < 12; )
              h.push(0);
            d = h.join("");
          }
          if (Array.isArray(a) && (i = a.map((h) => h == null ? void 0 : h.name).join(e.separator)), d) {
            if (d === e.modelValue)
              return;
            o("update:modelValue", d);
          }
          i && o("on-name-change", i);
        }
      }
    });
    return (a, r) => (T(), Z(m(_a), it(a.$attrs, {
      class: "alCascaderMC",
      modelValue: m(n),
      "onUpdate:modelValue": r[0] || (r[0] = (d) => Me(n) ? n.value = d : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || m(O)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let qe = 0;
function ql(t, s, o, e) {
  var n, a, r;
  e && (e.innerHTML = ((n = t[s]) == null ? void 0 : n.name) ?? "", (a = t[s]) != null && a.name ? e.classList.contains("hide") && e.classList.remove("hide") : e.classList.contains("hide") || e.classList.add("hide")), o && (o.src = ((r = t[s]) == null ? void 0 : r.src) ?? t[s], qe = s);
}
function gl(t, s, o, e) {
  if (t) {
    let n;
    qe - 1 < 0 ? n = s.length - 1 : n = qe - 1, ql(s, n, o, e);
  }
}
function bl(t, s, o, e) {
  if (t) {
    let n;
    qe + 1 > s.length - 1 ? n = 0 : n = qe + 1, ql(s, n, o, e);
  }
}
function ct(t, s = 0) {
  var w, B, x, C, F, I, L;
  const o = (..._) => Xe.apply(this, _), e = o("r.closePreview"), n = o("r.fullImg"), a = o("r.last"), r = o("r.next");
  let d, i, h;
  qe = s;
  const p = Array.isArray(t);
  p ? (i = ((w = t[qe]) == null ? void 0 : w.src) ?? t[qe], h = (B = t[qe]) == null ? void 0 : B.name) : i = t, p && t.length > 1 ? d = `${a} ： ←, ↑, A, W | ${r} ： →, ↓, D, S | ${e} ： Esc` : d = `${e} ： Esc`;
  let f = At(document.getElementsByTagName("body")), u = document.createElement("div");
  u.setAttribute("class", "fullScreenImgByDom"), u.innerHTML = `<div class='previewInner'><div class='pageFBt left${p && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${a}' ></i></div><img src='${i}' alt='${n}' ><div class='pageFBt right${p && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${r}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${d}</p><p class='pName ${h ? "" : "hide"}'>${h}</p>`;
  function g() {
    let _ = At(document.getElementsByTagName("body"));
    _ && _.removeChild(u), document.removeEventListener("keyup", V);
  }
  (C = (x = u.querySelector(".ivu-icon-md-close")) == null ? void 0 : x.addEventListener) == null || C.call(x, "click", g);
  const k = u.querySelector("img"), v = u.querySelector(".pName");
  (F = u.querySelector(".pageFBt.left")) == null || F.addEventListener("click", function() {
    gl(p, t, k, v);
  }), (I = u.querySelector(".pageFBt.right")) == null || I.addEventListener("click", function() {
    bl(p, t, k, v);
  });
  function V(_) {
    _.keyCode === 37 || _.keyCode === 38 || _.keyCode === 87 || _.keyCode === 65 ? gl(p, t, k, v) : _.keyCode === 39 || _.keyCode === 40 || _.keyCode === 83 || _.keyCode === 68 ? bl(p, t, k, v) : _.keyCode === 27 && g();
  }
  document.addEventListener("keyup", V), (L = f == null ? void 0 : f.appendChild) == null || L.call(f, u), u.focus({ preventScroll: !0 });
}
const Zn = { class: "previewBoxM" }, eo = { class: "imgLoading" }, to = /* @__PURE__ */ P("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), lo = [
  to
], ao = ["src", "alt"], no = { class: "deleteModal" }, oo = { class: "previewBoxM" }, io = {
  key: 0,
  class: "previewImg"
}, so = ["src", "alt"], ro = { class: "deleteModal" }, uo = { class: "customFileListM" }, co = {
  key: 0,
  class: "customFileListItem"
}, fo = ["onClick", "title"], po = { class: "btBoxJ" }, mo = { class: "customFileListM" }, ho = {
  key: 0,
  class: "customFileListItem"
}, yo = { class: "listLoading" }, vo = /* @__PURE__ */ P("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), go = [
  vo
], bo = ["onClick", "title"], ko = { class: "btBoxJ" };
var Cl;
const Xl = /* @__PURE__ */ me({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (Cl = window == null ? void 0 : window.g) != null && Cl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
  setup(t, { emit: s }) {
    const o = s, e = t, n = ft([]), a = ft([]), r = ft([]);
    let d = {};
    const i = G(() => !e.manualUpload && e.showImg && u.value ? "img" : e.manualUpload && e.showImg && u.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "list" : ""), h = G(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), p = G({
      //文件集合
      get() {
        return e.manualUpload ? f.value : f.value.map((b) => ({ id: b }));
      },
      set(b) {
        e.manualUpload ? f.value = b || [] : f.value = (b == null ? void 0 : b.map((D) => D == null ? void 0 : D.id)) || [];
      }
    }), f = G({
      //文件ID集合
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((b) => b !== "--") : q(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(b) {
        if (e.length === 1) {
          let D = At(b);
          o("update:modelValue", D ?? null), o("on-change", D ?? null);
        } else
          o("update:modelValue", he(b)), o("on-change", he(b));
      }
    }), u = G(() => {
      let b;
      if (e.manualUpload ? b = p.value : b = a.value, !b)
        return !1;
      for (let D of b) {
        let X;
        if (e.manualUpload ? X = D == null ? void 0 : D.type : X = D == null ? void 0 : D.mimeType, !X || X && !(ut(X) || X === "loading"))
          return !1;
      }
      return !0;
    }), g = G(() => a.value.filter((b) => ut(b == null ? void 0 : b.mimeType))), k = G(() => g.value.map((b) => ({
      src: e.url + "/" + (b == null ? void 0 : b.id) + "/download?preview=true",
      name: b == null ? void 0 : b.name
    }))), v = G(() => p.value.filter((b) => ut(b == null ? void 0 : b.type)));
    Ce(v, async (b) => {
      r.value = await w(b);
    }), Ce(
      () => p.value,
      async (b) => {
        if (i.value === "localImg")
          b != null && b.length ? n.value = await w(b) : n.value = [];
        else if (b != null && b.length && i.value !== "localList") {
          let D = he(b);
          const X = he(a.value);
          for (let $ of D)
            if (($ == null ? void 0 : $.name) === void 0)
              if ($.id) {
                const Q = Pt(X, (Y) => (Y == null ? void 0 : Y.id) === $.id);
                Q ? ($.name = Q.name, $.mimeType = Q.mimeType) : d.hasOwnProperty($.id) ? ($.name = d[$.id].name, $.mimeType = d[$.id].mimeType) : ($.mimeType = "loading", We.get(e.url + "/" + $.id).then((Y) => {
                  var ce, be, ye, Be, ae, z;
                  $.name = ((ye = (be = (ce = Y == null ? void 0 : Y.data) == null ? void 0 : ce.returnValue) == null ? void 0 : be[0]) == null ? void 0 : ye.name) || O("r.file") + rl(b, $), $.mimeType = ((z = (ae = (Be = Y == null ? void 0 : Y.data) == null ? void 0 : Be.returnValue) == null ? void 0 : ae[0]) == null ? void 0 : z.mimeType) || "unknown", da(a);
                }).catch(() => {
                  $.name = O("r.file") + rl(D, $);
                }));
              } else
                $.name = O("r.unknown");
          a.value = D;
        } else
          a.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function V(b) {
      return (b == null ? void 0 : b.name) || (b == null ? void 0 : b.split) && gt(b.split("/")) || b;
    }
    async function w(b) {
      let D = [];
      for (let X of b) {
        let $ = await pl(X);
        D.push($);
      }
      return D;
    }
    function B(b) {
      if (!e.disabled) {
        let D = p.value;
        D == null || D.splice(b, 1), p.value = D;
      }
    }
    function x(b) {
      b != null && b.id && window.open(e.url + "/" + b.id + "/download");
    }
    function C(b) {
      return e.manualUpload ? (b == null ? void 0 : b.type) && ut(b.type) : (b == null ? void 0 : b.id) && b.mimeType && ut(b.mimeType);
    }
    async function F(b) {
      if (e.manualUpload) {
        let D, X;
        if (typeof b == "number" ? (D = b, X = n.value) : b && (D = bt(v.value, ($) => $.size === b.size && $.lastModified === b.lastModified), X = r.value), !X)
          return;
        ct(
          X.map(($, Q) => {
            var Y;
            return {
              src: $,
              name: (Y = v.value[Q]) == null ? void 0 : Y.name
            };
          }),
          D
        );
      } else if (b != null && b.id) {
        const D = bt(g.value, (X) => X.id === b.id);
        ct(k.value, D);
      }
    }
    function I(b) {
      q(b) === "String" && b.indexOf("http") > -1 ? window.open(b) : q(b) === "File" && pl(b).then((D) => {
        Fn(b.name, D);
      });
    }
    function L(b) {
      var D, X;
      if (e.manualUpload) {
        if (b) {
          let $ = zl(b.name);
          if ((D = e.format) != null && D.length && e.format.indexOf($) < 0)
            return Ke(
              O("r.wrongFileType"),
              O("r.supportType") + (((X = e.format) == null ? void 0 : X.length) && String(e.format) || O("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && b.size > e.maxSize * 1024)
            return Ke(O("r.fileIsBig"), O("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let Q = p.value;
          Q == null || Q.push(b), p.value = Q;
        }
        return !1;
      } else
        return !0;
    }
    function _(b) {
      console.warn(b), Ke(O("r.uploadError"), "", "error");
    }
    function y(b, D, X) {
      var $, Q, Y, ce, be, ye;
      if ((b == null ? void 0 : b.code) === 0) {
        let Be = p.value;
        D.id = (Q = ($ = b.data) == null ? void 0 : $[0]) == null ? void 0 : Q.id, D.name = (ce = (Y = b.data) == null ? void 0 : Y[0]) == null ? void 0 : ce.name, D.mimeType = (ye = (be = b.data) == null ? void 0 : be[0]) == null ? void 0 : ye.mimeType, d[D.id] = { name: D.name, mimeType: D.mimeType }, Be == null || Be.push(D), p.value = Be;
      } else
        Ke(O("r.uploadFail"), (b == null ? void 0 : b.message) || "", "error");
    }
    function R() {
      Ke(O("r.fileIsBig"), O("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function ee() {
      var b;
      Ke(
        O("r.wrongFileType"),
        O("r.supportType") + (((b = e.format) == null ? void 0 : b.length) && String(e.format) || O("r.none")),
        "warning"
      );
    }
    function M(b) {
      let D = b == null ? void 0 : b.id, X = b == null ? void 0 : b.mimeType;
      D && (q(X) === "String" && X.indexOf("image") > -1 ? ct(e.url + "/" + D + "/download?preview=true") : window.open(e.url + "/" + D + "/download?preview=true"));
    }
    function N(b) {
      var X, $, Q;
      let D = (Q = ($ = (X = b == null ? void 0 : b.response) == null ? void 0 : X.data) == null ? void 0 : $[0]) == null ? void 0 : Q.id;
      te(null, D);
    }
    function te(b, D) {
      if (!(!D && D !== 0) && !e.disabled && f.value.indexOf(D) !== -1) {
        const X = he(f.value);
        let $ = p.value;
        $ == null || $.splice(X.indexOf(D), 1), p.value = $;
      }
    }
    return (b, D) => {
      var Y, ce, be, ye, Be;
      const X = J("Button"), $ = J("Upload"), Q = J("Icon");
      return T(), U("div", null, [
        W($, {
          name: "files",
          action: m(h),
          "before-upload": L,
          "on-error": _,
          "on-success": y,
          "on-exceeded-size": R,
          "on-preview": M,
          "on-remove": N,
          "on-format-error": ee,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && ((Y = m(p)) == null ? void 0 : Y.length) >= e.length || !!e.disabled
        }, {
          default: ne(() => {
            var ae;
            return [
              W(X, {
                icon: "md-cloud-upload",
                class: Ve({
                  disabledR: e.length > 0 && ((ae = m(p)) == null ? void 0 : ae.length) >= e.length || !!e.disabled
                })
              }, {
                default: ne(() => [
                  _e(H(m(O)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        de(P("div", Zn, [
          (T(!0), U(we, null, Te(m(a), (ae, z) => (T(), U(we, {
            key: ae == null ? void 0 : ae.id
          }, [
            !e.manualUpload && (ae == null ? void 0 : ae.id) !== null ? (T(), U("div", {
              key: 0,
              class: Ve(["previewImg", { previewLoading: ae.mimeType === "loading" }])
            }, [
              de(P("div", eo, lo, 512), [
                [ve, ae.mimeType === "loading"]
              ]),
              de(P("img", {
                src: b.url + "/" + ae.id + "/download?preview=true",
                alt: ae.name
              }, null, 8, ao), [
                [ve, ae.mimeType !== "loading"]
              ]),
              de(P("div", no, [
                W(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: m(O)("r.fView"),
                  onClick: (K) => m(ct)(m(k), z)
                }, null, 8, ["title", "onClick"]),
                W(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (K) => te(K, ae.id),
                  title: m(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ve, ae.mimeType !== "loading"]
              ])
            ], 2)) : pe("", !0)
          ], 64))), 128))
        ], 512), [
          [ve, m(i) === "img" && ((ce = m(a)) == null ? void 0 : ce.length) > 0]
        ]),
        de(P("div", oo, [
          (T(!0), U(we, null, Te(m(n), (ae, z) => (T(), U(we, {
            key: "manualImg" + z
          }, [
            e.manualUpload && ae !== null ? (T(), U("div", io, [
              P("img", {
                src: ae,
                alt: "manualImg" + z
              }, null, 8, so),
              P("div", ro, [
                W(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (K) => F(z),
                  title: m(O)("r.fView")
                }, null, 8, ["onClick", "title"]),
                W(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (K) => B(z),
                  title: m(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : pe("", !0)
          ], 64))), 128))
        ], 512), [
          [ve, m(i) === "localImg" && ((be = m(n)) == null ? void 0 : be.length) > 0]
        ]),
        de(P("div", uo, [
          (T(!0), U(we, null, Te(m(p), (ae, z) => (T(), U(we, {
            key: "manualItem" + z
          }, [
            e.manualUpload && ae !== null ? (T(), U("p", co, [
              ae.name ? (T(), Z(Q, {
                key: 0,
                class: "fileTypeIco",
                type: m(ml)(ae.name),
                size: "20"
              }, null, 8, ["type"])) : pe("", !0),
              P("span", {
                class: Ve(["upNameT", { previewName: C(ae) }]),
                onClick: (K) => I(ae),
                title: m(O)("r.download")
              }, H(V(ae)), 11, fo),
              P("span", po, [
                C(ae) ? (T(), Z(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (K) => F(ae),
                  title: m(O)("r.fView")
                }, null, 8, ["onClick", "title"])) : pe("", !0),
                W(Q, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (K) => B(z),
                  title: m(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : pe("", !0)
          ], 64))), 128))
        ], 512), [
          [ve, m(i) === "localList" && ((ye = m(p)) == null ? void 0 : ye.length) > 0]
        ]),
        de(P("div", mo, [
          (T(!0), U(we, null, Te(m(a), (ae, z) => (T(), U(we, {
            key: "defaultItem" + z
          }, [
            !e.manualUpload && ae ? (T(), U("div", ho, [
              de(P("div", yo, go, 512), [
                [ve, ae.mimeType === "loading"]
              ]),
              de(W(Q, {
                type: m(ml)(ae.name),
                class: "fileTypeIco",
                size: "20"
              }, null, 8, ["type"]), [
                [ve, ae.mimeType !== "loading"]
              ]),
              de(P("span", {
                class: "upNameT",
                onClick: (K) => x(ae),
                title: m(O)("r.download")
              }, H(ae.name || m(O)("r.file") + (z + 1)), 9, bo), [
                [ve, ae.mimeType !== "loading"]
              ]),
              de(P("span", ko, [
                C(ae) ? (T(), Z(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (K) => F(ae),
                  title: m(O)("r.fView")
                }, null, 8, ["onClick", "title"])) : pe("", !0),
                W(Q, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (K) => B(z),
                  title: m(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ve, ae.mimeType !== "loading"]
              ])
            ])) : pe("", !0)
          ], 64))), 128))
        ], 512), [
          [ve, m(i) === "list" && ((Be = m(a)) == null ? void 0 : Be.length) > 0]
        ])
      ]);
    };
  }
}), wo = /* @__PURE__ */ P("div", { class: "bRoot" }, null, -1), Jl = /* @__PURE__ */ me({
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
  setup(t, { emit: s }) {
    const o = s, e = t, n = E(!1), a = E(!1), r = E(!1), d = G({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(V) {
        o("update:modelValue", [V, i.value]), o("on-change", [V, i.value]);
      }
    }), i = G({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(V) {
        o("update:modelValue", [d.value, V]), o("on-change", [d.value, V]);
      }
    }), h = G(
      () => (d.value || "") + ((d.value || i.value) && " - " || "") + (i.value || "")
    ), p = E();
    Ue(() => {
      p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        r.value = !0;
      }), p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        r.value = !1;
      }), p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (V) => {
        var w;
        !e.disabled && (d.value || i.value) && ((w = V == null ? void 0 : V.stopPropagation) == null || w.call(V), k());
      });
    });
    function f() {
      e.disabled || (n.value = !0);
    }
    function u(V) {
      d.value = V, n.value = !1, a.value = !0;
    }
    function g(V) {
      i.value = V, a.value = !1;
    }
    function k() {
      o("update:modelValue", [null, null]), o("on-change", [null, null]);
    }
    function v() {
      n.value = !1, a.value = !1, d.value && i.value === null && (d.value = null);
    }
    return (V, w) => {
      const B = J("DatePicker"), x = J("Icon"), C = J("Input");
      return T(), U("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: p
      }, [
        W(B, {
          open: m(a),
          modelValue: m(i),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: g,
          onOnClickoutside: v
        }, {
          default: ne(() => [
            wo
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        W(B, {
          open: m(n),
          modelValue: m(d),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: u,
          onOnClickoutside: v
        }, {
          default: ne(() => [
            P("div", { onClick: f }, [
              W(C, {
                class: "aRoot",
                modelValue: m(h),
                "onUpdate:modelValue": w[0] || (w[0] = (F) => Me(h) ? h.value = F : null),
                readonly: "",
                placeholder: e.placeholder || m(O)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: ne(() => [
                  W(x, {
                    type: m(r) && (m(d) || m(i)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), _o = { class: "editor-pro-root" }, Yl = /* @__PURE__ */ me({
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
  setup(t, { emit: s }) {
    const o = s, e = t, n = ft(), a = G({
      get() {
        return e.modelValue;
      },
      set(p) {
        o("update:modelValue", p), o("on-change", p);
      }
    }), r = G(
      () => Object.assign(
        {
          placeholder: e.placeholder || O("r.pInput"),
          insertKeys: {
            index: 31,
            keys: ["previewX"]
          }
        },
        e.toolbarConfig
      )
    ), d = G(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(p, f) {
                let u = new FormData();
                u.append("files", p);
                const g = p.name, k = e.imgUploadUrl ?? "/node-serve/file";
                We.post(k, u, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((v) => {
                  if (v && v.data)
                    if (Array.isArray(v.data))
                      for (let V of v.data) {
                        const w = k + "/" + (V == null ? void 0 : V.id) + "/download";
                        f(w, g, w);
                      }
                    else {
                      const V = k + "/" + v.data.id + "/download";
                      f(V, g, V);
                    }
                }).catch(() => {
                  Ke(O("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(p, f) {
                let u = new FormData();
                u.append("files", p);
                const g = e.videoUploadUrl ?? "/node-serve/file";
                We.post(g, u, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((k) => {
                  if (k && k.data)
                    if (Array.isArray(k.data))
                      for (let v of k.data) {
                        const V = g + "/" + (v == null ? void 0 : v.id) + "/download";
                        f(V);
                      }
                    else {
                      const v = g + "/" + k.data.id + "/download";
                      f(v);
                    }
                }).catch(() => {
                  Ke(O("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), i = G(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function h(p) {
      n.value = p;
    }
    return Ce(
      () => e.disabled,
      (p) => {
        p ? n.value.disable() : n.value.enable();
      }
    ), xl(() => {
      n.value && n.value.destroy();
    }), (p, f) => (T(), U("div", _o, [
      de(W(m(Va), {
        class: "editor-pro-toolbar",
        editor: m(n),
        defaultConfig: m(r),
        mode: p.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ve, !p.disabled]
      ]),
      W(m(Sa), {
        class: "editor-pro-editor",
        modelValue: m(a),
        "onUpdate:modelValue": f[0] || (f[0] = (u) => Me(a) ? a.value = u : null),
        defaultConfig: m(d),
        mode: p.mode,
        onOnCreated: h,
        style: re(m(i))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Vo = {
  key: 19,
  class: "formInfoTxtXN"
}, So = {
  key: 20,
  class: "formTitleTxtXN"
}, kl = /* @__PURE__ */ me({
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
  setup(t, { emit: s }) {
    const o = s, e = t, n = G(() => {
      var f;
      if (e.inline)
        return e.itemWidth;
      {
        const u = (f = e.itemStyle) == null ? void 0 : f.width;
        if (u) {
          if (u.indexOf("%") > -1) {
            const g = Number(u.replace("%", ""));
            return window.isNaN(g) ? `calc(100% - ${e.labelWidth}px)` : `calc((100% - ${e.labelWidth}px)*${g / 100})`;
          } else if (u.indexOf("px") > -1)
            return u;
          return `calc(100% - ${e.labelWidth}px)`;
        }
        return `calc(100% - ${e.labelWidth}px)`;
      }
    });
    function a(f) {
      return {
        withInfo: !!f.info,
        withTitle: !!f.title,
        inlineFormItemXN: e.inline,
        noLabel: f.type === "selectInput",
        [f.class]: f.class,
        slotInput: f.slotPosition
      };
    }
    function r(f, u) {
      o("item-change", {
        e: f,
        root: u
      });
    }
    function d(f, u) {
      o("re-validate", {
        e: f,
        root: u
      });
    }
    function i(f) {
      o("select-input-change", f);
    }
    function h(f, u) {
      o("al-name-change", {
        name: f,
        root: u
      });
    }
    function p(f, u) {
      o("async-label-change", {
        label: f,
        root: u
      });
    }
    return (f, u) => {
      const g = J("InputNumber"), k = J("Input"), v = J("Option"), V = J("Select"), w = J("Radio"), B = J("Icon"), x = J("RadioGroup"), C = J("Checkbox"), F = J("CheckboxGroup"), I = J("DatePicker"), L = J("TimePicker"), _ = J("FormItem");
      return e.item ? (T(), Z(_, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: Ve(["relativeBox", a(e.item)])
      }, {
        default: ne(() => [
          e.item.type === "txt" ? (T(), U("div", {
            key: 0,
            style: re([e.itemStyle, { display: "inline-block" }]),
            class: Ve({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, H(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (T(), Z(g, {
            key: 1,
            style: re(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[0] || (u[0] = (y) => e.tempKeys[e.item.tempKey] = y),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: u[1] || (u[1] = (y) => r(y, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (T(), Z(k, {
            key: 2,
            style: re(f.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[2] || (u[2] = (y) => e.tempKeys[e.item.tempKey] = y),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[3] || (u[3] = (y) => r(y, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, ot({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: ne(() => [
                Fe(f.$slots, e.item.slotName, {
                  valGroup: e.valGroup
                })
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: ne(() => [
                P("span", null, H(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: ne(() => [
                P("span", null, H(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (T(), Z(V, {
            key: 3,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[4] || (u[4] = (y) => f.tempKeys[e.item.tempKey] = y),
            style: re(f.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || m(O)("r.pSelect"),
            onOnChange: u[5] || (u[5] = (y) => r(y, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: ne(() => [
              (T(!0), U(we, null, Te(e.item.options, (y, R) => (T(), Z(v, {
                value: y.val,
                label: y.label || y.val,
                key: "option-" + e.item.key + R,
                disabled: !!y.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (T(), Z(Gl, {
            key: 4,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[6] || (u[6] = (y) => f.tempKeys[e.item.tempKey] = y),
            "label-width": f.labelWidth,
            "item-width": m(n),
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: i
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (T(), Z(jl, {
            key: 5,
            style: re(f.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[7] || (u[7] = (y) => e.valGroup[e.item.key] = y),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || m(O)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: u[8] || (u[8] = (y) => h(y, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (T(), Z(Wl, {
            key: 6,
            style: re(f.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[9] || (u[9] = (y) => e.valGroup[e.item.key] = y),
            url: e.item.url || f.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || m(O)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: u[10] || (u[10] = (y) => p(y, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (T(), Z(w, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[11] || (u[11] = (y) => e.valGroup[e.item.key] = y),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: u[12] || (u[12] = (y) => r(y, e.item))
          }, {
            default: ne(() => [
              _e(H(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (T(), Z(x, {
            key: 8,
            style: re(f.itemStyle),
            onOnChange: u[13] || (u[13] = (y) => d(y, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[14] || (u[14] = (y) => f.tempKeys[e.item.tempKey] = y)
          }, {
            default: ne(() => [
              (T(!0), U(we, null, Te(e.item.options, (y) => (T(), Z(w, {
                key: "radioItem" + y.val,
                label: y.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || y.disabled
              }, {
                default: ne(() => [
                  y.icon && !e.item.buttonType ? (T(), Z(B, {
                    key: 0,
                    type: y.icon
                  }, null, 8, ["type"])) : pe("", !0),
                  P("span", null, H(y.label || y.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (T(), Z(C, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[15] || (u[15] = (y) => e.valGroup[e.item.key] = y),
            disabled: !!e.item.disabled,
            onOnChange: u[16] || (u[16] = (y) => r(y, e.item))
          }, {
            default: ne(() => [
              _e(H(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (T(), Z(F, {
            key: 10,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[17] || (u[17] = (y) => f.tempKeys[e.item.tempKey] = y),
            onOnChange: u[18] || (u[18] = (y) => d(y, e.item))
          }, {
            default: ne(() => [
              (T(!0), U(we, null, Te(e.item.options, (y) => (T(), Z(C, {
                key: "checkItem" + y.val,
                label: y.val,
                disabled: !!e.item.disabled || e.disabled || y.disabled
              }, {
                default: ne(() => [
                  y.icon ? (T(), Z(B, {
                    key: 0,
                    type: y.icon
                  }, null, 8, ["type"])) : pe("", !0),
                  P("span", null, H(y.label || y.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (T(), Z(k, {
            key: 11,
            type: "textarea",
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[19] || (u[19] = (y) => f.tempKeys[e.item.tempKey] = y),
            autosize: e.item.autosize || { minRows: 2 },
            style: re(f.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[20] || (u[20] = (y) => r(y, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (T(), Z(Xl, {
            key: 12,
            style: re(f.itemStyle),
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
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: u[22] || (u[22] = (y) => d(y, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (T(), Z(I, {
            key: 13,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[23] || (u[23] = (y) => f.tempKeys[e.item.tempKey] = y),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(O)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: u[24] || (u[24] = (y) => r(y, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (T(), Z(L, {
            key: 14,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[25] || (u[25] = (y) => f.tempKeys[e.item.tempKey] = y),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(O)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: u[26] || (u[26] = (y) => r(y, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (T(), Z(Jl, {
            key: 15,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[27] || (u[27] = (y) => f.tempKeys[e.item.tempKey] = y),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(O)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: u[28] || (u[28] = (y) => r(y, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (T(), Z(Yl, {
            key: 16,
            class: "inlineBlock",
            style: re(f.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[29] || (u[29] = (y) => e.valGroup[e.item.key] = y),
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: u[30] || (u[30] = (y) => r(y, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (T(), Z(Hl, {
            key: 17,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[31] || (u[31] = (y) => f.tempKeys[e.item.tempKey] = y),
            style: re(f.itemStyle),
            placeholder: e.item.placeholder || m(O)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: u[32] || (u[32] = (y) => r(y, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (T(), U("div", {
            key: 18,
            class: "inlineBlock",
            style: re(f.itemStyle)
          }, [
            Fe(f.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : pe("", !0),
          e.item.info ? (T(), U("div", Vo, H(e.item.info), 1)) : pe("", !0),
          e.item.title ? (T(), U("div", So, H(e.item.title), 1)) : pe("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : pe("", !0);
    };
  }
}), Co = /* @__PURE__ */ P("input", { type: "text" }, null, -1), To = { class: "inlineBlock" }, Tt = /* @__PURE__ */ me({
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
  emits: ["on-item-change", "on-reset", "on-re-render", "on-submit"],
  setup(t, { expose: s, emit: o }) {
    var ol, il;
    const e = o, n = t, a = E(null), r = E({}), d = E([]), i = E({});
    let h = [];
    const p = ((ol = window == null ? void 0 : window.g) == null ? void 0 : ol.mgrURL) ?? "";
    let f = [], u = [];
    const g = E(!1), k = E(Math.random() * 1e8 + 1e3), v = (il = window == null ? void 0 : window.g) != null && il.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let V = !1;
    const w = G(() => Array.isArray(n.formData.length ? n.formData[0] : !1)), B = G(
      () => n.inline ? {
        width: n.itemWidth + n.labelWidth + "px"
      } : {}
    ), x = G(
      () => n.inline ? {
        width: "100%"
      } : { width: n.contentWidth }
    ), C = G(() => {
      let c = he(n.formRules);
      for (let l in c)
        if (c.hasOwnProperty(l))
          if (Array.isArray(c[l]))
            for (let A of c[l])
              A && A && !(A.message || A.validator) && (A.message = O("r.required"));
          else q(c[l]) === "Object" && (c[l].message || c[l].validator || (c[l].message = O("r.required")));
      return c;
    }), F = G(() => {
      let c = [];
      if (w.value)
        for (let l of d.value)
          _(l, c);
      else
        _(d.value, c);
      return c.concat(f, u);
    }), I = G(() => {
      let c = [];
      if (w.value)
        for (let l of d.value)
          y(l, c);
      else
        y(d.value, c);
      return c;
    });
    function L(c) {
      return c.filter((l) => l == null ? void 0 : l.slotName);
    }
    function _(c, l) {
      for (let A of c)
        if (A.showing === !0 && A.key && A.type !== "selectInput" && (l.push(A.key), A.key2 && l.push(A.key2), A.collectLabel)) {
          if (!Array.isArray(A.collectLabel) && A.collectLabel.key)
            l.push(A.collectLabel.key);
          else if (Array.isArray(A.collectLabel))
            for (let S of A.collectLabel)
              S.key && l.push(S.key);
        }
    }
    function y(c, l) {
      for (let A of c)
        A.showing === !0 && A.key && A.type !== "selectInput" && l.push(A.key);
    }
    function R() {
      return new Promise((c) => {
        N(), M().then(() => {
          e("on-reset"), c(!0);
        });
      });
    }
    function ee() {
      return new Promise((c) => {
        for (let l of h)
          l();
        h = [], i.value = {}, z(), be(), M().then(() => {
          e("on-re-render"), c(!0);
        });
      });
    }
    function M() {
      return new Promise((c) => {
        k.value = Math.floor(Math.random() * 1e8 + 1e3), Pe(function() {
          c(!0);
        });
      });
    }
    function N() {
      let c = D();
      for (let l in r.value)
        if (r.value.hasOwnProperty(l))
          if (Ie(c[l]))
            r.value[l] = c[l];
          else if (Array.isArray(r.value[l]))
            r.value[l] = [];
          else if (q(r.value[l]) === "Boolean")
            r.value[l] = !1;
          else {
            const A = lt(n.formData, (S) => (S == null ? void 0 : S.key) === l);
            A && (A.type === "editor" || A.type === "editorPro") ? r.value[l] = "" : r.value[l] = null;
          }
      te(c);
    }
    function te(c) {
      for (let l in i.value)
        i.value.hasOwnProperty(l) && (Ie(c[l]) ? i.value[l] = c[l] : Array.isArray(i.value[l]) ? i.value[l] = [] : q(i.value[l]) === "Object" && i.value[l].hasOwnProperty("key") && i.value[l].hasOwnProperty("val") ? i.value[l].val = null : i.value[l] = null);
    }
    function b(c) {
      let l = D();
      Ie(l[c]) ? i.value[c] = l[c] : Array.isArray(i.value[c]) ? i.value[c] = [] : i.value[c] = null;
    }
    function D() {
      let c = {};
      if (w.value)
        for (let l of d.value)
          X(l, c);
      else
        X(d.value, c);
      return c;
    }
    function X(c, l) {
      for (let A of c)
        A.tempKey && Ie(A.defaultVal) && ce(A, l), A.key && Ie(A.defaultVal) && (l[A.key] = A.defaultVal), A.key2 && Ie(A.defaultVal2) && (l[A.key2] = A.defaultVal2);
    }
    function $(c) {
      if (c.show) {
        if (q(c.show) === "Object")
          return Y(c, Q(c.show));
        if (Array.isArray(c.show))
          if (c.showOr) {
            for (let l of c.show)
              if (Q(l) === !0)
                return Y(c, !0);
            return Y(c, !1);
          } else {
            for (let l of c.show)
              if (Q(l) === !1)
                return Y(c, !1);
            return Y(c, !0);
          }
        else if (typeof c.show == "function")
          return Y(c, c.show(r.value));
      } else c.showing || (c.showing = !0);
      return !0;
    }
    function Q(c) {
      if (c.reg && typeof c.reg.test == "function")
        return c.reg.test(r.value[c.key]);
      if (Array.isArray(c.val)) {
        for (let l of c.val) {
          if ((r.value[c.key] || r.value[c.key] === 0 || r.value[c.key] === !1) && l === ".")
            return !0;
          if (r.value[c.key] === l)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function Y(c, l) {
      return !c.showing && l && c.key ? (c.showing = l, c.defaultVal !== void 0 && (c.tempKey ? (i.value[c.tempKey] === null || i.value[c.tempKey] === void 0 || (q(i.value[c.tempKey]) === "Object" || Array.isArray(i.value[c.tempKey])) && Re(i.value[c.tempKey])) && ce(c, i.value) : (r.value[c.key] === null || r.value[c.key] === void 0) && (r.value[c.key] = c.defaultVal), c.key2 && c.deafultVal2 !== void 0 && (r.value[c.key2] === null || r.value[c.key2] === void 0) && c.type !== "inputMap" && (r.value[c.key2] = c.defaultVal2)), c.tempKey && fe(i.value[c.tempKey], c)) : c.showing = l, l;
    }
    function ce(c, l) {
      switch (c.type) {
        case "selectInput":
          l[c.tempKey] = {
            key: c.key,
            val: c.defaultVal
          };
          break;
        case "inputMap":
          c.key3 ? l[c.tempKey] = {
            lng: c.defaultVal || 0,
            lat: c.defaultVal2 || 0,
            name: c.defaultVal3 || ""
          } : l[c.tempKey] = {
            lng: c.defaultVal || 0,
            lat: c.defaultVal2 || 0
          };
          break;
        case "input":
        case "inputNumber":
        case "textarea":
          l[c.tempKey] = c.defaultVal;
          break;
        case "radioGroup":
        case "select":
        case "checkboxGroup":
          c.booleanVal ? l[c.tempKey] = c.defaultVal ? 1 : 0 : l[c.tempKey] = c.defaultVal;
          break;
        case "date":
        case "time":
        case "monthRange":
          c.dateType === "date" || c.dateType === "datetime" || c.dateType === "time" || c.dateType === "year" || c.dateType === "month" ? l[c.tempKey] = c.defaultVal : (c.dateType === "daterange" || c.dateType === "datetimerange" || c.dateType === "timerange" || c.type === "monthRange") && (l[c.tempKey] = c.defaultVal && c.defaultVal2 && [c.defaultVal, c.defaultVal2] || []);
          break;
      }
    }
    function be() {
      let c = he(n.formData);
      if (w.value)
        for (let l of c)
          ye(l);
      else
        ye(c);
      d.value = c;
    }
    function ye(c) {
      for (let l of c)
        switch (l.type) {
          case "selectInput":
            const A = "selectInput" + Math.floor(Math.random() * 1e8);
            l.tempKey = A, i.value[A] = E({
              key: l.key || null,
              val: l.defaultVal || null
            }), h.push(
              Ce(
                () => i.value[A],
                (j) => {
                  fe(j, l);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const S = "inputMap" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = S, l.key3 ? i.value[S] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2,
              name: l.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : i.value[S] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2
            } : {
              lng: null,
              lat: null
            }, h.push(
              Ce(
                () => i.value[S],
                (j) => {
                  fe(j, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const oe = "inputT" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = oe, i.value[oe] = l.defaultVal !== void 0 ? l.defaultVal : null, h.push(
              Ce(
                () => i.value[oe],
                (j) => {
                  fe(j, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (l.options || (l.options = []), (l.type === "checkboxGroup" || l.type === "radioGroup") && (l.options = E(he(l.options))), l.asyncOption)
              if (l.changeOption)
                if (Array.isArray(l.changeOption)) {
                  let j = !0;
                  for (let le of l.changeOption)
                    if (!le.valKey || !le.key) {
                      j = !1;
                      break;
                    }
                  j ? h.push(
                    Ce(
                      () => {
                        let le = "";
                        if (Array.isArray(l.changeOption))
                          for (let ge of l.changeOption) {
                            let He = r.value[ge.valKey];
                            if (He || He === 0 || He === !1)
                              le += "&" + ge.key + "=" + He;
                            else if (!ge.notRequired)
                              return !1;
                          }
                        return le;
                      },
                      (le) => {
                        let ge = he(i.value[l.tempKey]);
                        if (i.value[l.tempKey] = null, le && l.optionUrl) {
                          let He = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Be((He + le).replace(/\?&/, "?"), l, ge);
                        } else
                          l.localOption ? je(l.options, [...l.localOption]) : je(l.options, []), Ie(ge) && ae(ge, l);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : l.localOption ? je(l.options, [...l.localOption]) : je(l.options, []);
                } else typeof l.changeOption == "object" ? l.changeOption.valKey && l.changeOption.key && h.push(
                  Ce(
                    () => typeof l.changeOption == "object" && !Array.isArray(l.changeOption) ? r.value[l.changeOption.valKey] : !1,
                    (j) => {
                      let le = he(i.value[l.tempKey]);
                      if (i.value[l.tempKey] = null, (j || j === 0 || j === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                        let ge = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                        Be((ge + "&" + l.changeOption.key + "=" + j).replace(/\?&/, "?"), l, le);
                      } else
                        l.localOption ? je(l.options, [...l.localOption]) : je(l.options, []), Ie(le) && ae(le, l);
                    },
                    { immediate: !0 }
                  )
                ) : q(l.changeOption) === "Boolean" && h.push(
                  Ce(
                    () => {
                      const j = lt(n.formData, (le) => (le == null ? void 0 : le.key) === l.key);
                      return j.optionUrl = ca(j.optionUrl), j.optionUrl.value;
                    },
                    (j) => {
                      let le = he(i.value[l.tempKey]);
                      i.value[l.tempKey] = null, j ? Be(j, l, le) : (l.localOption ? je(l.options, [...l.localOption]) : je(l.options, []), Ie(le) && ae(le, l));
                    },
                    {
                      immediate: !0
                    }
                  )
                );
              else l.optionUrl && Be(l.optionUrl, l);
            else q(l.borrowOption) === "String" && Pe(function() {
              l.options = lt(d.value, (j) => (j == null ? void 0 : j.key) === l.borrowOption).options;
            });
            const ue = "opEle" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = ue, l.type === "select" && l.multiple || l.type === "checkboxGroup" ? i.value[ue] = l.defaultVal !== void 0 ? l.defaultVal : [] : l.booleanVal ? i.value[ue] = l.defaultVal !== void 0 ? l.defaultVal ? 1 : 0 : null : i.value[ue] = l.defaultVal !== void 0 ? l.defaultVal : null, h.push(
              Ce(
                () => i.value[ue],
                (j) => {
                  fe(j, l);
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
            const Le = "date" + Math.floor(Math.random() * 1e8);
            l.tempKey = Le, l.dateType === "date" || l.dateType === "datetime" || l.dateType === "time" || l.dateType === "year" || l.dateType === "month" ? i.value[Le] = l.defaultVal || null : (l.dateType === "daterange" || l.dateType === "datetimerange" || l.dateType === "timerange" || l.type === "monthRange") && (i.value[Le] = l.defaultVal && l.defaultVal2 && [l.defaultVal, l.defaultVal2] || []), h.push(
              Ce(
                () => i.value[Le],
                (j) => {
                  fe(j, l);
                }
              )
            );
            break;
        }
    }
    function Be(c, l, A) {
      We.get(c).then((S) => {
        var Le;
        let oe;
        if (Me(l.options) ? oe = l.options.value : oe = l.options, !oe)
          return;
        let ue = ((Le = S == null ? void 0 : S.data) == null ? void 0 : Le.records) || (S == null ? void 0 : S.data) || S || [];
        Array.isArray(ue) ? (l.optionFilter && q(l.optionFilter) === "Function" && (ue = l.optionFilter(ue)), l.optionLabel && l.optionVal ? (oe.length = 0, oe.push(
          ...ue.map((j) => {
            let le;
            if (Array.isArray(l.optionLabel)) {
              let ge = "";
              l.optionLabel.forEach((He, sl) => {
                let xt = String(j[He]);
                sl === 1 ? ge += "（" + xt : sl > 1 ? ge += "、" + xt : ge += xt;
              }), le = {
                label: ge + "）",
                val: l.optionVal && j[l.optionVal]
              };
            } else
              le = {
                label: l.optionLabel && j[l.optionLabel],
                val: l.optionVal && j[l.optionVal]
              };
            if (l.collectLabel)
              if (Array.isArray(l.collectLabel))
                for (let ge of l.collectLabel)
                  ge.valKey && ge.valKey !== "label" && (le[ge.valKey] = j[ge.valKey]);
              else
                l.collectLabel.valKey && l.collectLabel.valKey !== "label" && (le[l.collectLabel.valKey] = j[l.collectLabel.valKey]);
            if (le.val !== null && le.val !== void 0)
              return le;
          })
        )) : (oe.length = 0, oe.push(...ue))) : oe.length = 0, l.localOption && oe.unshift(...l.localOption), Ie(A) && ae(A, l), l.disableOptionByOthers && (q(l.disableOptionByOthers) === "String" ? h.push(
          Ce(
            () => r.value[l.disableOptionByOthers],
            (j) => {
              if (b(l.tempKey), !!oe) {
                for (let le of oe)
                  le.disabled && (le.disabled = !1);
                if (j || j === 0 || j === !1)
                  for (let le of oe)
                    le.val === j && (le.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(l.disableOptionByOthers) && h.push(
          Ce(
            () => l.disableOptionByOthers.filter((j) => j).map((j) => r.value[j]),
            (j) => {
              if (b(l.tempKey), !!oe) {
                for (let le of oe)
                  le.disabled && (le.disabled = !1);
                if (j) {
                  for (let le of oe)
                    for (let ge = 0; ge < j.length; ge++)
                      if (le.val === j[ge]) {
                        le.disabled = !0, j.splice(ge, 1);
                        break;
                      }
                }
              }
            },
            {
              immediate: !0
            }
          )
        ));
      }).catch(() => {
        console.warn("拉取选项出错");
      });
    }
    function ae(c, l) {
      Array.isArray(Lt(l.options)) && bt(Lt(l.options), { val: c }) !== -1 && (i.value[l.tempKey] = c);
    }
    function z() {
      if (r.value = {}, w.value)
        for (let c of n.formData)
          K(c);
      else
        K(n.formData);
    }
    function K(c) {
      for (let l of c)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? r.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? r.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (r.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (r.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function fe(c, l) {
      if (l.showing)
        switch (l.type) {
          case "selectInput":
            c && (c.beforeKey && delete r.value[c.beforeKey], r.value[c.key] = c.val);
            break;
          case "inputMap":
            if (!l.key || !l.key2)
              return;
            c ? (r.value[l.key] = c.lng, r.value[l.key2] = c.lat, l.key3 && (r.value[l.key3] = c.name)) : (r.value[l.key] = null, r.value[l.key2] = null, l.key3 && (r.value[l.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!l.key)
              return;
            if (c || c === 0) {
              let oe = /^-?\d+(.\d+)?$/;
              l.numberVal && oe.test(c) ? r.value[l.key] = Number(c) : r.value[l.key] = c;
            } else
              r.value[l.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!l.key)
              return;
            if (l.booleanVal && !l.multiple ? r.value[l.key] = c === void 0 || c === "" || c === null ? null : !!c : l.multiple || l.type === "checkboxGroup" ? r.value[l.key] = Object.assign([], c) : r.value[l.key] = c, l.collectLabel) {
              const oe = Se(l, c);
              if (Array.isArray(l.collectLabel)) {
                for (let ue of l.collectLabel)
                  if (ue != null && ue.key && ue.valKey) {
                    const Le = ke(ue.key);
                    let j = null;
                    Array.isArray(oe) ? (j = oe.map((ge) => ge[ue.valKey]), r.value[ue.key] = j, Le && (i.value[Le] = j)) : (oe && Ie(oe[ue.valKey]) && (j = oe[ue.valKey]), r.value[ue.key] = j, Le && (i.value[Le] = j));
                    let le = lt(d.value, (ge) => (ge == null ? void 0 : ge.key) === ue.key);
                    le && le.tempKey && (i.value[le.tempKey] = r.value[ue.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const ue = ke(l.collectLabel.key);
                let Le = null;
                Array.isArray(oe) ? (Le = oe.map(
                  (le) => l.collectLabel && !Array.isArray(l.collectLabel) && le[l.collectLabel.valKey]
                ), r.value[l.collectLabel.key] = Le, ue && (i.value[ue] = Le)) : (oe && Ie(oe[l.collectLabel.valKey]) && (Le = oe[l.collectLabel.valKey]), r.value[l.collectLabel.key] = Le, ue && (i.value[ue] = Le));
                let j = lt(
                  d.value,
                  (le) => l.collectLabel && !Array.isArray(l.collectLabel) && (le == null ? void 0 : le.key) === l.collectLabel.key || !1
                );
                j && j.tempKey && (i.value[j.tempKey] = r.value[l.collectLabel.key]);
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!l.key)
              return;
            let A = l.dateType;
            const S = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "YYYY-MM"
            };
            if (A === "date" || A === "datetime" || A === "time" || A === "year" || A === "month")
              c ? (A === "time" ? r.value[l.key] = c : r.value[l.key] = rt(c).format(typeof l.format == "string" ? l.format : S[A]), A === "date" && l.addTime && (r.value[l.key] += " 00:00:00")) : r.value[l.key] = null;
            else if (l.type === "monthRange" || A === "daterange" || A === "datetimerange" || A === "timerange") {
              if (!l.key2)
                return;
              c && c[0] && c[1] ? (A === "timerange" ? (r.value[l.key] = c[0], r.value[l.key2] = c[1]) : l.type === "monthRange" ? (r.value[l.key] = typeof l.format == "string" && rt(c[0]).format(l.format) || c[0], r.value[l.key2] = typeof l.format == "string" && l.format && rt(c[1]).format(l.format) || c[1]) : (r.value[l.key] = rt(c[0]).format(l.format || A && S[A]), r.value[l.key2] = rt(c[1]).format(l.format || A && S[A])), A === "daterange" && l.addTime && (r.value[l.key] += " 00:00:00", r.value[l.key2] += " 23:59:59")) : (r.value[l.key] = null, r.value[l.key2] = null);
            }
            break;
        }
    }
    function Se(c, l) {
      const A = Lt(c.options);
      if (A)
        if (c != null && c.multiple || c.type === "checkboxGroup") {
          if (l) {
            let S = [];
            for (let oe of A)
              l.indexOf(oe == null ? void 0 : oe.val) !== -1 && S.push(oe);
            return S;
          }
          return !1;
        } else {
          if (l || l === 0 || l === !1) {
            for (let S of A)
              if ((S == null ? void 0 : S.val) === l)
                return S;
          }
          return !1;
        }
    }
    function ke(c) {
      if (w.value) {
        for (let l of d.value) {
          const A = se(l, c);
          if (A)
            return A;
        }
        return !1;
      }
      return se(d.value, c);
    }
    function se(c, l) {
      for (let A of c)
        if (A.key === l)
          return A.tempKey;
      return !1;
    }
    function Ae(c, l) {
      let A = {};
      for (let S in r.value)
        r.value.hasOwnProperty(S) && c[S] !== void 0 && (A[S] = c[S], delete c[S]);
      Je(A, l);
      for (let S in c)
        c.hasOwnProperty(S) && (u.indexOf(S) < 0 && u.push(S), r.value[S] = c[S]);
    }
    function Ee(c) {
      let l = he(c);
      if (w.value) {
        let A = [];
        for (let S of n.formData)
          A.push(...Ge(S, l));
        return A;
      }
      return Ge(n.formData, l);
    }
    function Ge(c, l) {
      return c.filter((A) => {
        for (let S of Object.keys(l))
          if ((A == null ? void 0 : A.key) === S && I.value.indexOf(S) > -1 && !(l[S] === null || (Array.isArray(l[S]) || q(l[S]) === "Object") && Re(l[S])))
            return delete l[S], !0;
        return !1;
      }).map((A) => A == null ? void 0 : A.key);
    }
    function Je(c, l = !1) {
      let A = he(c);
      ie(c, l);
      for (let S in r.value)
        if (r.value.hasOwnProperty(S) && c[S] !== void 0 && c[S] !== "--") {
          if (Array.isArray(c[S]))
            c[S] = c[S].filter((oe) => oe !== "--");
          else if (q(c[S]) === "Object")
            for (let oe in c[S])
              c[S].hasOwnProperty(oe) && c[S][oe] === "--" && (c[S][oe] = null);
          r.value[S] = c[S];
        } else l || (r.value[S] = Array.isArray(r.value[S]) ? [] : null);
      Pe(function() {
        la(Ee(A));
      });
    }
    function ie(c, l = !1) {
      if (w.value)
        for (let A of d.value)
          Ne(A, c, l);
      else
        Ne(d.value, c, l);
    }
    function Ne(c, l, A = !1) {
      for (let S of c)
        if (S.key && (A && (l[S.key] !== void 0 || S.key2 && l[S.key2] !== void 0) || !A) && S.tempKey)
          switch (S.type) {
            case "inputMap":
              if (!S.key2)
                continue;
              q(l[S.key]) === "Number" && q(l[S.key2] === "Number") ? S.key3 ? i.value[S.tempKey] = {
                lng: l[S.key],
                lat: l[S.key2],
                name: l[S.key3]
              } : i.value[S.tempKey] = {
                lng: l[S.key],
                lat: l[S.key2]
              } : S.key3 ? i.value[S.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : i.value[S.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              l[S.key] && l[S.key] !== "--" || l[S.key] === 0 ? i.value[S.tempKey] = l[S.key] : i.value[S.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              l[S.key] && l[S.key] !== "--" || l[S.key] === 0 || l[S.key] === !1 ? S.multiple || S.type === "checkboxGroup" ? i.value[S.tempKey] = [...l[S.key]] : S.booleanVal ? i.value[S.tempKey] = l[S.key] ? 1 : 0 : i.value[S.tempKey] = l[S.key] : S.multiple || S.type === "checkboxGroup" ? i.value[S.tempKey] = [] : i.value[S.tempKey] = null;
              break;
            case "date":
            case "time":
              if (S.dateType === "date" || S.dateType === "datetime" || S.dateType === "year" || S.dateType === "month" || S.dateType === "time")
                i.value[S.tempKey] = l[S.key] && l[S.key] !== "--" ? l[S.key] : null;
              else if (S.dateType === "daterange" || S.dateType === "datetimerange" || S.dateType === "timerange") {
                if (!S.key2)
                  continue;
                i.value[S.tempKey] = l[S.key] && l[S.key] !== "--" && l[S.key2] && l[S.key2] !== "--" && [l[S.key], l[S.key2]] || [];
              }
              break;
          }
    }
    function Zl(c) {
      if (Array.isArray(c))
        for (let l of c)
          Zt(l);
      else q(c) === "Object" && Zt(c);
    }
    function Zt(c) {
      const { index: l, indexB: A, key: S, val: oe } = c;
      if (typeof l == "number")
        if (Array.isArray(d.value[l])) {
          if (typeof A == "number")
            if (S && c.hasOwnProperty("val"))
              d.value[l][A][S] = oe;
            else
              for (let ue of Object.keys(c))
                ue !== "index" && S !== "indexB" && (d.value[l][A][ue] = c[ue]);
        } else if (S && c.hasOwnProperty("val"))
          d.value[l][S] = oe;
        else
          for (let ue of Object.keys(c))
            ue !== "index" && (d.value[l][ue] = c[ue]);
    }
    function el({ label: c, root: l }) {
      l.key2 && (r.value[l.key2] = c), et({
        e: c,
        root: l
      });
    }
    function tl(c) {
      c.beforeKey && ha(f, (l) => l === c.beforeKey), c.key && (f.indexOf(c.key) === -1 && f.push(c.key), et({
        e: null,
        root: c
      }));
    }
    function ll({ name: c, root: l }) {
      l.key2 && (r.value[l.key2] = c), et({
        e: c,
        root: l
      });
    }
    function al({ e: c, root: l }) {
      et({
        e: c,
        root: l
      }), Pe(function() {
        var A, S;
        (S = (A = a.value) == null ? void 0 : A.validateField) == null || S.call(A, l.key);
      });
    }
    function et({ e: c, root: l }) {
      $e(() => {
        let A = {
          event: c
        };
        if (l.key && (A[l.key] = r.value[l.key]), l.key2 && (A[l.key2] = r.value[l.key2]), Array.isArray(l.collectLabel))
          for (let S of l.collectLabel)
            A[S.key] = r.value[S.key];
        else l.collectLabel && l.collectLabel.key && (A[l.collectLabel.key] = r.value[l.collectLabel.key]);
        e("on-item-change", A);
      }, 300);
    }
    function nl() {
      let c = {};
      for (let l of F.value)
        c[l] = r.value[l];
      return n.trim && (c = _t(c)), c;
    }
    function ea() {
      var c, l;
      (l = (c = a.value) == null ? void 0 : c.validate) == null || l.call(c);
    }
    function ta(c) {
      $e(() => {
        var l, A;
        (A = (l = a.value) == null ? void 0 : l.validateField) == null || A.call(l, c, () => {
        });
      }, 10);
    }
    function la(c) {
      $e(() => {
        var l, A;
        if (Array.isArray(c))
          for (let S of c)
            (A = (l = a.value) == null ? void 0 : l.validateField) == null || A.call(l, S, () => {
            });
      }, 10);
    }
    function aa(c) {
      c !== void 0 && (g.value = !!c);
    }
    function Bt() {
      var c, l;
      n.disabled || (l = (c = a.value) == null ? void 0 : c.validate) == null || l.call(c, (A) => {
        V || (V = !0, A && (g.value = !0, e("on-submit", nl())), $e(() => {
          V = !1;
        }, 2e3));
      });
    }
    return Ue(() => {
      z(), be();
    }), s({
      resetForm: R,
      refreshFormDom: M,
      reRenderForm: ee,
      setItemToValGroup: Ae,
      updateValGroup: Je,
      updateFormDataT: Zl,
      validate: ea,
      reValidate: ta,
      changeLoading: aa,
      getValGroup: nl,
      submit: Bt
    }), (c, l) => {
      const A = J("FormItem"), S = J("Button"), oe = J("Form");
      return T(), Z(oe, {
        ref_key: "formGroupXRef",
        ref: a,
        model: m(r),
        rules: m(C),
        "label-width": n.labelWidth,
        inline: n.inline,
        "show-message": n.showMessage,
        class: "formXN",
        key: m(k)
      }, {
        default: ne(() => [
          W(A, { style: { display: "none" } }, {
            default: ne(() => [
              Co
            ]),
            _: 1
          }),
          m(w) ? (T(!0), U(we, { key: 0 }, Te(m(d), (ue, Le) => (T(), U("div", {
            class: Ve([c.teamClass, "formTeamBox" + Le]),
            key: "formTeamBox" + Le
          }, [
            (T(!0), U(we, null, Te(ue, (j, le) => (T(), U(we, {
              key: "formItem" + le
            }, [
              $(j) ? (T(), Z(kl, {
                key: 0,
                item: j,
                style: re(m(B)),
                "item-style": m(x),
                "val-group": m(r),
                "temp-keys": m(i),
                inline: n.inline,
                disabled: n.disabled,
                "label-width": n.labelWidth,
                "item-width": n.itemWidth,
                "mgr-url": m(p),
                "upload-url": m(v),
                onItemChange: et,
                onReValidate: al,
                onClearTempKeyItem: b,
                onSelectInputChange: tl,
                onAlNameChange: ll,
                onAsyncLabelChange: el
              }, ot({ _: 2 }, [
                Te(L(ue), (ge) => ({
                  name: ge.slotName,
                  fn: ne((He) => [
                    Fe(c.$slots, ge.slotName, {
                      valGroup: He.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : pe("", !0)
            ], 64))), 128))
          ], 2))), 128)) : pe("", !0),
          (T(!0), U(we, null, Te(m(d), (ue, Le) => (T(), U(we, {
            key: "formItem" + Le
          }, [
            !m(w) && $(ue) ? (T(), Z(kl, {
              key: 0,
              item: ue,
              style: re(m(B)),
              "item-style": m(x),
              "val-group": m(r),
              "temp-keys": m(i),
              inline: n.inline,
              disabled: n.disabled,
              "label-width": n.labelWidth,
              "item-width": n.itemWidth,
              "mgr-url": m(p),
              "upload-url": m(v),
              onItemChange: et,
              onReValidate: al,
              onClearTempKeyItem: b,
              onSelectInputChange: tl,
              onAlNameChange: ll,
              onAsyncLabelChange: el
            }, ot({ _: 2 }, [
              Te(L(c.formData), (j) => ({
                name: j.slotName,
                fn: ne((le) => [
                  Fe(c.$slots, j.slotName, {
                    valGroup: le.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : pe("", !0)
          ], 64))), 128)),
          n.showLongOkBt ? (T(), Z(A, { key: 1 }, {
            default: ne(() => [
              W(S, {
                onClick: Bt,
                style: re(m(x)),
                type: "primary",
                loading: n.btnLoading && m(g),
                disabled: n.disabled
              }, {
                default: ne(() => [
                  _e(H(n.longOkBtTxt || m(O)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : pe("", !0),
          P("div", To, [
            n.showInlineOkBt ? (T(), Z(S, {
              key: 0,
              type: "primary",
              class: Ve({ inlineFormBtXN: n.inline, okBtnXN: !0 }),
              onClick: Bt,
              loading: n.btnLoading && m(g),
              disabled: n.disabled
            }, {
              default: ne(() => [
                _e(H(n.inlineOkBtTxt || m(O)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : pe("", !0),
            n.showInlineClearBt ? (T(), Z(S, {
              key: 1,
              onClick: R,
              class: Ve({ inlineFormBtXN: n.inline }),
              type: "dashed"
            }, {
              default: ne(() => [
                _e(H(n.inlineClearBtTxt || m(O)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : pe("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), Bo = /* @__PURE__ */ me({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    with: { default: () => xe().formGroupWidth },
    labelWidth: { default: () => xe().formGroupLabelWidth },
    contentWidth: { default: "70%" },
    itemWidth: { default: 200 },
    showOkBt: { type: Boolean, default: !0 },
    showCancelBt: { type: Boolean, default: !0 },
    okBtTxt: {},
    cancelBtTxt: {},
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-cancel"],
  setup(t, { expose: s, emit: o }) {
    const e = o, n = t, a = E({ width: n.with }), r = E(!1), d = E(), i = G(() => {
      var I, L;
      if (Array.isArray(n.formData))
        if (Array.isArray(n.formData[0])) {
          let _ = [];
          for (let y of n.formData)
            y && (_ = _.concat(
              y.filter((R) => (R == null ? void 0 : R.type) === "custom" || (R == null ? void 0 : R.type) === "input" && R.slotName && R.slotPosition)
            ));
          return _;
        } else
          return (L = (I = n.formData) == null ? void 0 : I.filter) == null ? void 0 : L.call(
            I,
            (_) => (_ == null ? void 0 : _.type) === "custom" || (_ == null ? void 0 : _.type) === "input" && _.slotName && _.slotPosition
          );
      return [];
    });
    function h() {
      return new Promise((I) => {
        var L, _;
        (_ = (L = d.value).resetForm) == null || _.call(L).then((y) => {
          I(y);
        });
      });
    }
    function p() {
      return new Promise((I) => {
        var L, _;
        (_ = (L = d.value).refreshFormDom) == null || _.call(L).then((y) => {
          I(y);
        });
      });
    }
    function f() {
      return new Promise((I) => {
        var L, _;
        (_ = (L = d.value).reRenderForm) == null || _.call(L).then((y) => {
          I(y);
        });
      });
    }
    function u(I, L) {
      var _, y;
      (y = (_ = d.value).setItemToValGroup) == null || y.call(_, I, L);
    }
    function g(I, L) {
      var _, y;
      (y = (_ = d.value).updateValGroup) == null || y.call(_, I, L);
    }
    function k(I) {
      var L, _;
      (_ = (L = d.value).updateFormDataT) == null || _.call(L, I);
    }
    function v() {
      var I, L;
      (L = (I = d.value).validate) == null || L.call(I);
    }
    function V(I) {
      var L, _;
      (_ = (L = d.value).reValidate) == null || _.call(L, I);
    }
    function w(I) {
      var L, _;
      I !== void 0 && (r.value = !!I, (_ = (L = d.value).changeLoading) == null || _.call(L, r.value));
    }
    function B() {
      var I, L;
      return (L = (I = d.value).getValGroup) == null ? void 0 : L.call(I);
    }
    function x() {
      r.value = !0;
    }
    function C() {
      var I, L;
      (L = (I = d.value).submit) == null || L.call(I);
    }
    function F() {
      e("on-cancel"), $e(() => {
        var I, L;
        r.value = !1, (L = (I = d.value).changeLoading) == null || L.call(I, !1);
      }, 1e3);
    }
    return s({
      resetForm: h,
      refreshFormDom: p,
      reRenderForm: f,
      setItemToValGroup: u,
      updateValGroup: g,
      updateFormDataT: k,
      validate: v,
      reValidate: V,
      changeLoading: w,
      getValGroup: B,
      submit: C,
      close: F
    }), (I, L) => {
      const _ = J("Button");
      return T(), U("div", {
        style: re(m(a)),
        class: "formGroupBoxVM"
      }, [
        W(Tt, it({
          ref_key: "formRRef",
          ref: d
        }, I.$attrs, {
          "form-data": n.formData,
          "label-width": n.labelWidth,
          "content-width": n.contentWidth,
          "item-width": n.itemWidth,
          btnLoading: n.btnLoading,
          onOnSubmit: x
        }), ot({ _: 2 }, [
          Te(m(i), (y) => ({
            name: y.slotName,
            fn: ne(({ valGroup: R }) => [
              Fe(I.$slots, y.slotName, { valGroup: R })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        de(P("div", {
          class: "formFooterVM",
          style: re({ marginLeft: n.labelWidth + "px" })
        }, [
          P("div", {
            style: re({ width: n.contentWidth }),
            class: "btnBoxKAL"
          }, [
            n.showOkBt ? (T(), Z(_, {
              key: 0,
              onClick: C,
              class: "form-save-btn",
              loading: n.btnLoading && m(r)
            }, {
              default: ne(() => [
                _e(H(n.okBtTxt || m(O)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : pe("", !0),
            n.showCancelBt ? (T(), Z(_, {
              key: 1,
              onClick: F,
              class: "form-cancel-btn"
            }, {
              default: ne(() => [
                _e(H(n.cancelBtTxt || m(O)("r.cancel")), 1)
              ]),
              _: 1
            })) : pe("", !0)
          ], 4)
        ], 4), [
          [ve, n.showOkBt || n.showCancelBt]
        ])
      ], 4);
    };
  }
}), Wt = /* @__PURE__ */ me({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => xe().searchFormLabelWidth },
    itemWidth: { default: () => xe().searchFormItemWidth },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(t, { expose: s, emit: o }) {
    const e = o, n = t, a = E(), r = G(() => {
      var x, C;
      if (Array.isArray(n.formData[0])) {
        let F = [];
        for (let I of n.formData)
          I && (F = F.concat(
            I.filter((L) => (L == null ? void 0 : L.type) === "custom" || (L == null ? void 0 : L.type) === "input" && L.slotName && L.slotPosition)
          ));
        return F;
      }
      return (C = (x = n.formData) == null ? void 0 : x.filter) == null ? void 0 : C.call(
        x,
        (F) => (F == null ? void 0 : F.type) === "custom" || (F == null ? void 0 : F.type) === "input" && F.slotName && F.slotPosition
      );
    });
    function d() {
      return new Promise((x) => {
        var C, F;
        (F = (C = a.value).resetForm) == null || F.call(C).then(() => {
          x();
        });
      });
    }
    function i() {
      return new Promise((x) => {
        var C, F;
        (F = (C = a.value).refreshFormDom) == null || F.call(C).then(() => {
          x();
        });
      });
    }
    function h() {
      return new Promise((x) => {
        var C, F;
        (F = (C = a.value).reRenderForm) == null || F.call(C).then(() => {
          x();
        });
      });
    }
    function p(x, C) {
      var F, I;
      (I = (F = a.value).setItemToValGroup) == null || I.call(F, x, C);
    }
    function f(x, C) {
      var F, I;
      (I = (F = a.value).updateValGroup) == null || I.call(F, x, C);
    }
    function u(x) {
      var C, F;
      (F = (C = a.value).updateFormDataT) == null || F.call(C, x);
    }
    function g() {
      var x, C;
      (C = (x = a.value).validate) == null || C.call(x);
    }
    function k(x) {
      var C, F;
      (F = (C = a.value).reValidate) == null || F.call(C, x);
    }
    function v(x) {
      var C, F;
      (F = (C = a.value).changeLoading) == null || F.call(C, x === void 0 ? !1 : x);
    }
    function V() {
      var x, C;
      return (C = (x = a.value).getValGroup) == null ? void 0 : C.call(x);
    }
    function w(x) {
      e("on-search", x);
    }
    function B() {
      var x, C;
      (C = (x = a.value).submit) == null || C.call(x);
    }
    return Ue(() => {
      const x = a.value.$el;
      x != null && x.parentNode && x.parentNode.addEventListener("keyup", (C) => {
        (C == null ? void 0 : C.keyCode) === 13 && B();
      });
    }), s({
      resetForm: d,
      refreshFormDom: i,
      reRenderForm: h,
      setItemToValGroup: p,
      updateValGroup: f,
      updateFormDataT: u,
      validate: g,
      reValidate: k,
      changeLoading: v,
      getValGroup: V,
      submit: B
    }), (x, C) => (T(), Z(Tt, it({
      ref_key: "formRRef",
      ref: a
    }, x.$attrs, {
      "form-data": n.formData,
      "label-width": n.labelWidth,
      "item-width": n.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": n.showInlineOkBt,
      "inline-ok-bt-txt": m(O)("r.check"),
      "show-inline-clear-bt": n.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: w
    }), ot({ _: 2 }, [
      Te(m(r), (F) => ({
        name: F.slotName,
        fn: ne(({ valGroup: I }) => [
          Fe(x.$slots, F.slotName, { valGroup: I })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), xo = /* @__PURE__ */ me({
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
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(t, { expose: s, emit: o }) {
    const e = o, n = t, a = E(), r = E(!1), d = E(!1), i = G(() => {
      var _, y;
      if (Array.isArray(n.formData[0])) {
        let R = [];
        for (let ee of n.formData)
          ee && (R = R.concat(
            ee.filter((M) => (M == null ? void 0 : M.type) === "custom" || (M == null ? void 0 : M.type) === "input" && M.slotName && M.slotPosition)
          ));
        return R;
      }
      return (y = (_ = n.formData) == null ? void 0 : _.filter) == null ? void 0 : y.call(
        _,
        (R) => (R == null ? void 0 : R.type) === "custom" || (R == null ? void 0 : R.type) === "input" && R.slotName && R.slotPosition
      );
    });
    function h() {
      return new Promise((_) => {
        var y, R;
        (R = (y = a.value).resetForm) == null || R.call(y).then(() => {
          _();
        });
      });
    }
    function p() {
      return new Promise((_) => {
        var y, R;
        (R = (y = a.value).refreshFormDom) == null || R.call(y).then(() => {
          _();
        });
      });
    }
    function f() {
      return new Promise((_) => {
        var y, R;
        (R = (y = a.value).reRenderForm) == null || R.call(y).then(() => {
          _();
        });
      });
    }
    function u(_, y) {
      var R, ee;
      (ee = (R = a.value).setItemToValGroup) == null || ee.call(R, _, y);
    }
    function g(_, y) {
      var R, ee;
      (ee = (R = a.value).updateValGroup) == null || ee.call(R, _, y);
    }
    function k(_) {
      var y, R;
      (R = (y = a.value).updateFormDataT) == null || R.call(y, _);
    }
    function v() {
      var _, y;
      (y = (_ = a.value).validate) == null || y.call(_);
    }
    function V(_) {
      var y, R;
      (R = (y = a.value).reValidate) == null || R.call(y, _);
    }
    function w(_) {
      var y, R;
      _ !== void 0 && (d.value = !!_, (R = (y = a.value).changeLoading) == null || R.call(y, d.value));
    }
    function B() {
      var _, y;
      return (y = (_ = a.value).getValGroup) == null ? void 0 : y.call(_);
    }
    function x() {
      d.value = !0;
    }
    function C() {
      var _, y;
      n.hideCancelBt ? I() : (y = (_ = a.value).submit) == null || y.call(_);
    }
    function F() {
      r.value = !0;
    }
    function I() {
      r.value = !1, $e(() => {
        var _, y;
        d.value = !1, (y = (_ = a.value).changeLoading) == null || y.call(_, !1);
      }, 1e3);
    }
    function L(_) {
      e(_ ? "on-open" : "on-close");
    }
    return s({
      resetForm: h,
      refreshFormDom: p,
      reRenderForm: f,
      setItemToValGroup: u,
      updateValGroup: g,
      updateFormDataT: k,
      validate: v,
      reValidate: V,
      changeLoading: w,
      getValGroup: B,
      submit: C,
      open: F,
      close: I
    }), (_, y) => {
      const R = J("Button"), ee = J("Modal");
      return T(), Z(ee, {
        class: Ve(["formModal", { hideFooter: n.hideFooter }]),
        title: n.title || m(O)("r.title"),
        modelValue: m(r),
        "onUpdate:modelValue": y[0] || (y[0] = (M) => Me(r) ? r.value = M : null),
        "mask-closable": !1,
        "footer-hide": n.hideFooter,
        width: n.width,
        onOnVisibleChange: L
      }, {
        footer: ne(() => [
          W(R, {
            onClick: C,
            class: "modal-save-btn",
            loading: n.btnLoading && m(d)
          }, {
            default: ne(() => [
              _e(H(n.okBtTxt || m(O)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          n.hideCancelBt ? pe("", !0) : (T(), Z(R, {
            key: 0,
            onClick: I,
            class: "modal-cancel-btn"
          }, {
            default: ne(() => [
              _e(H(n.cancelBtTxt || m(O)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: ne(() => [
          W(Tt, it({
            ref_key: "formRRef",
            ref: a
          }, _.$attrs, {
            "form-data": n.formData,
            "label-width": n.labelWidth,
            btnLoading: n.btnLoading,
            onOnSubmit: x
          }), ot({ _: 2 }, [
            Te(m(i), (M) => ({
              name: M.slotName,
              fn: ne(({ valGroup: N }) => [
                Fe(_.$slots, M.slotName, { valGroup: N })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), Lo = /* @__PURE__ */ me({
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
  setup(t, { emit: s }) {
    const o = s, e = t, n = E(!0), a = E([]), r = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let d = [];
    const i = G(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), h = G(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    Ce(
      () => e.data,
      (v) => {
        n.value = !1;
        let V = [];
        p(v, V), a.value = V, Pe(function() {
          n.value = !0, e.inlineLeaf && Pe(g);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), Ce(
      () => h.value,
      (v) => {
        let V, w = "s";
        if (Array.isArray(e.collectVal) ? (V = e.collectVal[0] || "", w = "a") : V = e.collectVal, !V || JSON.stringify(v) === JSON.stringify(d)) {
          d = [];
          return;
        }
        at({
          group: a.value,
          condition: (B) => (B == null ? void 0 : B.checked) === !0,
          key: "checked",
          val: !1
        }), at(w === "a" ? {
          group: a.value,
          condition: (B) => bt(v, [V, B == null ? void 0 : B[V]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: a.value,
          condition: (B) => v.indexOf(B == null ? void 0 : B[V]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), Ce(
      () => e.disabled,
      (v) => {
        at({
          group: a.value,
          condition: (V) => V && V.disableCheckbox !== v,
          key: "disableCheckbox",
          val: v
        }), e.inlineLeaf && Pe(g);
      },
      { immediate: !0 }
    );
    function p(v, V = []) {
      for (let w of v) {
        let B = !1;
        i.value.length > 1 ? B = Pt(h.value, (C) => C[i.value[0]] === w[i.value[0]]) !== void 0 : B = i.value[0] ? h.value.indexOf(w[i.value[0]]) !== -1 : !1;
        let x = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: B,
          disableCheckbox: e.disabled
        };
        for (let C of i.value)
          x[C] = w[C];
        V.push(x), w != null && w.children && w.children.length > 0 && (x.children = [], f(w.children, x.children));
      }
    }
    function f(v, V = []) {
      for (let w of v) {
        let B = !1;
        i.value.length > 1 ? B = Pt(h.value, (C) => C[i.value[0]] === w[i.value[0]]) !== void 0 : B = i.value[0] ? h.value.indexOf(w[i.value[0]]) !== -1 : !1;
        let x = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: B,
          disableCheckbox: e.disabled
        };
        for (let C of i.value)
          x[C] = w[C];
        V.push(x), w != null && w.children && w.children.length > 0 && (x.children = [], p(w.children, x.children));
      }
    }
    function u(v, {
      data: V
    }) {
      let w = "", B = !0;
      if (V.children && V.children.length > 0) {
        for (let x of V.children)
          if (x.children !== void 0) {
            B = !1;
            break;
          }
        B && e.inlineLeaf && (w = "inlineChildXA");
      }
      return v(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: w
        },
        [
          v(
            "span",
            {
              style: {
                fontWeight: V.children ? "bold" : "normal"
              }
            },
            V.name
          )
        ]
      );
    }
    function g(v) {
      if (v) {
        v.expand && Pe(g);
        return;
      }
      let V = document.querySelectorAll("#" + r + " .inlineChildXA");
      if (V.length > 0)
        for (let w of V) {
          let B = w == null ? void 0 : w.parentElement, x = B == null ? void 0 : B.nextElementSibling;
          if (!x)
            return;
          if (x.tagName !== "BR") {
            let C = B == null ? void 0 : B.parentElement, F = document.createElement("br");
            C == null || C.insertBefore(F, x), x = F.nextElementSibling, (x == null ? void 0 : x.className.indexOf("inlineTreeNodeF")) === -1 && x.setAttribute("class", x.className + " inlineTreeNodeF");
          }
          for (; x != null && x.nextElementSibling; )
            x = x.nextElementSibling, x.className.indexOf("inlineTreeNodeF") === -1 && x.setAttribute("class", x.className + " inlineTreeNodeF");
        }
    }
    function k(v) {
      let V = [];
      if (e.leaf) {
        for (let w of v)
          if (!w.children)
            if (Array.isArray(e.collectVal)) {
              let B = {};
              for (let x of e.collectVal)
                B[x] = w[x];
              V.push(B);
            } else
              V.push(w[e.collectVal]);
      } else
        for (let w of v)
          if (Array.isArray(e.collectVal)) {
            let B = {};
            for (let x of e.collectVal)
              B[x] = w[x];
            V.push(B);
          } else
            V.push(w[e.collectVal]);
      d = V, o("update:modelValue", V), o("on-change", he(V));
    }
    return (v, V) => {
      const w = J("Tree");
      return m(n) ? (T(), Z(w, {
        key: 0,
        id: r,
        class: "checkboxTreeGA",
        data: m(a),
        render: u,
        onOnCheckChange: k,
        onOnToggleExpand: g,
        "show-checkbox": ""
      }, null, 8, ["data"])) : pe("", !0);
    };
  }
}), Oo = { class: "transferBoxRL" }, Io = { class: "leftBoxLLL" }, Ao = { class: "fullHeight flexColumnBox" }, Po = { class: "notGrow" }, Ro = { class: "titleLLL" }, $o = { class: "growFlexItem" }, Fo = { class: "middleBoxLLL" }, Mo = { class: "rightBoxLLL" }, No = { class: "fullHeight flexColumnBox" }, Do = { class: "notGrow" }, Ko = { class: "titleLLL" }, zo = { class: "growFlexItem" }, Uo = /* @__PURE__ */ me({
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
    addParamsHandle: { type: Function, default: (t) => t.map((s) => s == null ? void 0 : s.id) },
    deleteParamsHandle: { type: Function, default: (t) => t.map((s) => s == null ? void 0 : s.id) },
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
  setup(t, { expose: s, emit: o }) {
    const e = o, n = t;
    let a = E({}), r = E({}), d = E([]), i = E([]), h = E(0), p = E(0);
    const f = G(() => ({ ...n.constSearchDataLeft, ...a.value })), u = G(() => ({ ...n.constSearchDataRight, ...r.value })), g = G(() => h.value < 1), k = G(() => d.value.length < 1), v = G(() => i.value.length < 1), V = G(() => p.value < 1), w = E(), B = E(), x = E(), C = E();
    function F() {
      w.value.resetForm(), B.value.resetForm(), Re(a.value) || (a.value = {}), Re(r.value) || (r.value = {}), x.value.clearSelect(), C.value.clearSelect();
    }
    function I() {
      x.value.search(), C.value.search();
    }
    function L($) {
      d.value = $;
    }
    function _($) {
      i.value = $;
    }
    function y($) {
      var Q, Y, ce, be, ye;
      h.value = ((Y = (Q = $ == null ? void 0 : $.data) == null ? void 0 : Q.page) == null ? void 0 : Y.total) || ((be = (ce = $ == null ? void 0 : $.data) == null ? void 0 : ce.data) == null ? void 0 : be.total) || ((ye = $ == null ? void 0 : $.data) == null ? void 0 : ye.total) || ($ == null ? void 0 : $.total) || 0, e("on-data-change-l", $);
    }
    function R($) {
      var Q, Y, ce, be, ye;
      p.value = ((Y = (Q = $ == null ? void 0 : $.data) == null ? void 0 : Q.page) == null ? void 0 : Y.total) || ((be = (ce = $ == null ? void 0 : $.data) == null ? void 0 : ce.data) == null ? void 0 : be.total) || ((ye = $ == null ? void 0 : $.data) == null ? void 0 : ye.total) || ($ == null ? void 0 : $.total) || 0, e("on-data-change-r", $);
    }
    function ee($) {
      typeof n.leftSearchDataFilter == "function" ? a.value = n.leftSearchDataFilter($) : a.value = $;
    }
    function M($) {
      typeof n.rightSearchDataFilter == "function" ? r.value = n.rightSearchDataFilter($) : r.value = $;
    }
    function N() {
      n.addUrl && X("add");
    }
    function te() {
      n.deleteUrl && X("delete");
    }
    function b() {
      n.addAllUrl && n.addUrl && X("addAll");
    }
    function D() {
      n.deleteAllUrl && X("deleteAll");
    }
    function X($) {
      let Q, Y, ce = {}, be = "";
      switch ($) {
        case "add":
          Q = n.addMethod, Y = n.addUrl, ce = n.addParamsHandle(i.value), be = O("r.add");
          break;
        case "delete":
          Q = n.deleteMethod, Y = n.deleteUrl, ce = n.deleteParamsHandle(d.value), be = O("r.remove");
          break;
        case "addAll":
          Q = n.addAllMethod, Y = n.addAllUrl, ce = n.addAllParamsHandle(u.value), be = O("r.addAll");
          break;
        case "deleteAll":
          Q = n.deleteAllMethod, Y = n.deleteAllUrl, ce = n.deleteAllParamsHandle(f.value), be = O("r.removeAll");
          break;
      }
      Y && Q && We[Q](Y, ce, null, [], { spin: !0 }, !1).then((ye) => {
        (ye == null ? void 0 : ye.code) === 0 ? (Ke(be + O("r.success"), (ye == null ? void 0 : ye.message) || "", "success"), x.value && x.value.getTableData(), C.value && C.value.getTableData(), e("transferred")) : Ke(be + O("r.failed"), (ye == null ? void 0 : ye.message) || "", "error");
      }).catch(() => {
        Ke(be + O("r.error"), "", "error");
      });
    }
    return s({
      reset: F,
      search: I
    }), ($, Q) => {
      const Y = J("Icon"), ce = J("Button");
      return T(), U("div", Oo, [
        P("div", Io, [
          P("div", Ao, [
            P("div", Po, [
              P("div", Ro, H(n.titleLeft || m(O)("r.added")), 1),
              W(zt, null, {
                default: ne(() => [
                  W(Wt, {
                    ref_key: "leftFormRef",
                    ref: w,
                    "form-data": n.formDataLeft,
                    "form-rules": n.formRulesLeft,
                    "label-width": n.searchFormLabelWith,
                    onOnSearch: ee
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            P("div", $o, [
              W(Gt, {
                ref_key: "lTabRef",
                ref: x,
                columns: n.leftTableColumns,
                url: n.leftTableUrl,
                "search-data": m(f),
                onOnSelectionChange: L,
                onOnDataChange: y,
                "init-data": !!(m(Re)(n.constSearchDataLeft) && n.leftTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: n.usePagePro,
                showTotal: n.showTotal,
                showSizer: n.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ]),
        P("div", Fo, [
          W(ce, {
            class: "middleBtLLL",
            type: "default",
            onClick: D,
            disabled: m(g)
          }, {
            default: ne(() => [
              _e(H(m(O)("r.removeAll")) + " ", 1),
              W(Y, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          W(ce, {
            class: "middleBtLLL",
            type: "default",
            onClick: te,
            disabled: m(k)
          }, {
            default: ne(() => [
              _e(H(m(O)("r.remove")) + " ", 1),
              W(Y, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          W(ce, {
            class: "middleBtLLL",
            type: "primary",
            onClick: N,
            disabled: m(v)
          }, {
            default: ne(() => [
              W(Y, { type: "ios-arrow-back" }),
              _e(" " + H(m(O)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          W(ce, {
            class: "middleBtLLL",
            type: "primary",
            onClick: b,
            disabled: m(V)
          }, {
            default: ne(() => [
              W(Y, { type: "ios-arrow-back" }),
              _e(" " + H(m(O)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        P("div", Mo, [
          P("div", No, [
            P("div", Do, [
              P("div", Ko, H(n.titleRight || m(O)("r.notAdded")), 1),
              W(zt, null, {
                default: ne(() => [
                  W(Wt, {
                    ref_key: "rightFormRef",
                    ref: B,
                    "form-data": n.formDataRight,
                    "form-rules": n.formRulesRight,
                    "label-width": n.searchFormLabelWith,
                    onOnSearch: M
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            P("div", zo, [
              W(Gt, {
                ref_key: "rTabRef",
                ref: C,
                columns: n.rightTableColumns,
                url: n.rightTableUrl,
                "search-data": m(u),
                onOnSelectionChange: _,
                onOnDataChange: R,
                "init-data": !!(m(Re)(n.constSearchDataRight) && n.rightTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: n.usePagePro,
                showTotal: n.showTotal,
                showSizer: n.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ])
      ]);
    };
  }
}), Eo = { class: "boxLPA" }, Go = { class: "headerJ" }, Ho = { class: "firstT borderBoxAS" }, Wo = { class: "secondT borderBoxAS" }, jo = { class: "firstCol borderBoxAS" }, qo = { class: "secondCol borderBoxAS" }, Xo = /* @__PURE__ */ me({
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
  setup(t, { emit: s }) {
    const o = t, e = s, n = E([]), a = G(() => {
      var f;
      let h = he(o.data), p = he(n.value);
      for (let u of h) {
        let g = 0;
        if (u != null && u.children && !Re(u.children))
          for (let k of u.children) {
            for (let v = 0, V = p == null ? void 0 : p.length; v < V; v++)
              if (Array.isArray(o.collectVal)) {
                let w = !0;
                for (let B of o.collectVal)
                  if (((f = p[v]) == null ? void 0 : f[B]) !== (k == null ? void 0 : k[B])) {
                    w = !1;
                    break;
                  }
                if (w) {
                  k.checked = !0, g++, p.splice(v, 1);
                  break;
                }
              } else if (p[v] === k[o.collectVal]) {
                k.checked = !0, g++, p.splice(v, 1);
                break;
              }
            !k.checked && (k.checked = !1);
          }
        g === 0 ? (u.checked = !1, u.indeterminate = !1) : u.children && g === u.children.length ? (u.checked = !0, u.indeterminate = !1) : (u.checked = !1, u.indeterminate = !0);
      }
      return h;
    });
    Ce(
      () => o.modelValue,
      (h, p) => {
        pt(n.value, h) || pt(h, p) || (n.value = h);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function r(h, p) {
      if (h.children)
        for (let f of h.children)
          f.checked = p;
      d();
    }
    function d() {
      i(a.value, !0);
    }
    function i(h, p) {
      let f = [];
      for (let u of h) {
        if (!p && !o.leaf && u.checked && u.indeterminate === !1)
          if (Array.isArray(o.collectVal)) {
            let g = {};
            for (let k of o.collectVal)
              g[k] = u[k];
            f.push(g);
          } else q(o.collectVal) === "String" && f.push(u[o.collectVal]);
        if (u.children) {
          for (let g of u.children)
            if (g.checked)
              if (Array.isArray(o.collectVal)) {
                let k = {};
                for (let v of o.collectVal)
                  k[v] = g[v];
                f.push(k);
              } else q(o.collectVal) === "String" && f.push(g[o.collectVal]);
        }
      }
      p ? (n.value = f, o.leaf ? (e("update:modelValue", f), e("on-change", he(f))) : Pe(function() {
        i(a.value);
      })) : (e("update:modelValue", f), e("on-change", he(f)));
    }
    return (h, p) => {
      const f = J("Checkbox");
      return T(), U("div", Eo, [
        P("div", Go, [
          P("div", Ho, H(h.firstTitle || m(O)("r.level.1")), 1),
          P("div", Wo, H(h.secondTitle || m(O)("r.level.2")), 1)
        ]),
        (T(!0), U(we, null, Te(m(a), (u, g) => (T(), U("div", {
          class: "bodyJ",
          key: "checkboxJ" + g
        }, [
          P("div", jo, [
            W(f, {
              modelValue: u.checked,
              "onUpdate:modelValue": (k) => u.checked = k,
              indeterminate: u.indeterminate,
              onOnChange: (k) => r(u, k),
              disabled: h.disabled
            }, {
              default: ne(() => [
                _e(H(u[h.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          P("div", qo, [
            (T(!0), U(we, null, Te(u.children, (k, v) => (T(), U("div", {
              class: "secItem",
              key: "secItem" + v
            }, [
              W(f, {
                modelValue: k.checked,
                "onUpdate:modelValue": (V) => k.checked = V,
                onOnChange: d,
                disabled: h.disabled
              }, {
                default: ne(() => [
                  _e(H(k[h.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), Jo = { class: "boxLPB" }, Yo = { class: "headerF" }, Qo = { class: "firstT borderBoxKa" }, Zo = { class: "secondT borderBoxKa" }, ei = { class: "thirdT borderBoxKa" }, ti = { class: "firstCol borderBoxKa" }, li = { class: "rightBoxAL" }, ai = { class: "secondCol borderBoxKa" }, ni = { class: "thirdCol borderBoxKa" }, oi = /* @__PURE__ */ me({
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
  setup(t, { emit: s }) {
    const o = s, e = t, n = E([]), a = G(() => {
      let p = he(e.data), f = he(n.value);
      for (let u of p) {
        let g = 0, k = 0;
        if (u != null && u.children && !Re(u.children))
          for (let v of u.children) {
            let V = 0;
            if (v.children && !Re(v.children))
              for (let w of v.children) {
                for (let B = 0, x = f.length; B < x; B++)
                  if (Array.isArray(e.collectVal)) {
                    let C = !0;
                    for (let F of e.collectVal)
                      if (f[B][F] !== w[F]) {
                        C = !1;
                        break;
                      }
                    if (C) {
                      w.checked = !0, V++, f.splice(B, 1);
                      break;
                    }
                  } else if (f[B] === w[e.collectVal]) {
                    w.checked = !0, V++, f.splice(B, 1);
                    break;
                  }
                !w.checked && (w.checked = !1);
              }
            V === 0 ? (v.checked = !1, v.indeterminate = !1) : v.children && V === v.children.length ? (v.checked = !0, v.indeterminate = !1, g++) : (v.checked = !1, v.indeterminate = !0, k++);
          }
        g === 0 && k === 0 ? (u.checked = !1, u.indeterminate = !1) : u.children && g === u.children.length ? (u.checked = !0, u.indeterminate = !1) : (u.checked = !1, u.indeterminate = !0);
      }
      return p;
    });
    Ce(
      () => e.modelValue,
      (p, f) => {
        pt(n.value, p) || pt(p, f) || (n.value = p);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function r(p, f) {
      if (p.children) {
        for (let u of p.children)
          if (u.checked = f, u.children)
            for (let g of u.children)
              g.checked = f;
      }
      i();
    }
    function d(p, f) {
      if (p.children)
        for (let u of p.children)
          u.checked = f;
      i();
    }
    function i() {
      h(a.value, !0);
    }
    function h(p, f) {
      let u = [];
      for (let g of p) {
        if (!f && !e.leaf && (g != null && g.checked) && g.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let k = {};
            for (let v of e.collectVal)
              k[v] = g[v];
            u.push(k);
          } else q(e.collectVal) === "String" && u.push(g[e.collectVal]);
        if (g != null && g.children)
          for (let k of g.children) {
            if (!f && !e.leaf && k.checked && k.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let v = {};
                for (let V of e.collectVal)
                  v[V] = k[V];
                u.push(v);
              } else q(e.collectVal) === "String" && u.push(k[e.collectVal]);
            if (k.children) {
              for (let v of k.children)
                if (v.checked)
                  if (Array.isArray(e.collectVal)) {
                    let V = {};
                    for (let w of e.collectVal)
                      V[w] = v[w];
                    u.push(V);
                  } else q(e.collectVal) === "String" && u.push(v[e.collectVal]);
            }
          }
      }
      f ? (n.value = u, e.leaf ? (o("update:modelValue", u), o("on-change", he(u))) : Pe(function() {
        h(a.value);
      })) : (o("update:modelValue", u), o("on-change", he(u)));
    }
    return (p, f) => {
      const u = J("Checkbox");
      return T(), U("div", Jo, [
        P("div", Yo, [
          P("div", Qo, H(p.firstTitle || m(O)("r.level.1")), 1),
          P("div", Zo, H(p.secondTitle || m(O)("r.level.2")), 1),
          P("div", ei, H(p.thirdTitle || m(O)("r.level.3")), 1)
        ]),
        (T(!0), U(we, null, Te(m(a), (g, k) => (T(), U("div", {
          class: "bodyF",
          key: "checkboxJ" + k
        }, [
          P("div", ti, [
            W(u, {
              modelValue: g.checked,
              "onUpdate:modelValue": (v) => g.checked = v,
              indeterminate: g.indeterminate,
              onOnChange: (v) => r(g, v),
              disabled: p.disabled
            }, {
              default: ne(() => [
                _e(H(g[p.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          P("div", li, [
            (T(!0), U(we, null, Te(g.children, (v, V) => (T(), U("div", {
              class: "rightBoxInner",
              key: "secItem" + V
            }, [
              P("div", ai, [
                W(u, {
                  modelValue: v.checked,
                  "onUpdate:modelValue": (w) => v.checked = w,
                  indeterminate: v.indeterminate,
                  onOnChange: (w) => d(v, w),
                  disabled: p.disabled
                }, {
                  default: ne(() => [
                    _e(H(v[p.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              P("div", ni, [
                (T(!0), U(we, null, Te(v.children, (w, B) => (T(), U("div", {
                  class: "thirdItem",
                  key: "thirdItem" + B
                }, [
                  W(u, {
                    modelValue: w.checked,
                    "onUpdate:modelValue": (x) => w.checked = x,
                    onOnChange: i,
                    disabled: p.disabled
                  }, {
                    default: ne(() => [
                      _e(H(w[p.label]), 1)
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
}), ii = {
  class: "fl",
  style: { "font-weight": "bold" }
}, si = { class: "btsF" }, ri = { key: 0 }, ui = {
  key: 1,
  class: "growFlexItem relativeBox"
}, di = { class: "fullFlowContent" }, ci = /* @__PURE__ */ me({
  __name: "WellCard",
  props: {
    title: {},
    fitToContent: { type: Boolean, default: !1 },
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(t) {
    const s = t, o = G(() => {
      let e = {
        width: s.fitToContent ? "fit-content" : s.width,
        height: s.fitToContent ? "fit-content" : s.height
      };
      s.inline && (e.display = "inline-block");
      for (let n in e)
        e.hasOwnProperty(n) && typeof e[n] == "number" && e[n] > 0 && (e[n] += "px");
      return e;
    });
    return (e, n) => (T(), U("div", {
      style: re(m(o))
    }, [
      P("div", {
        class: Ve(["wellCardR", { flexColumnBox: !s.fitToContent }])
      }, [
        P("div", {
          class: Ve(["panelHeader", { notGrow: !s.fitToContent }])
        }, [
          P("div", ii, H(s.title || m(O)("r.title")), 1),
          P("div", si, [
            Fe(e.$slots, "bts")
          ])
        ], 2),
        s.fitToContent ? (T(), U("div", ri, [
          Fe(e.$slots, "default")
        ])) : (T(), U("div", ui, [
          P("div", di, [
            Fe(e.$slots, "default")
          ])
        ]))
      ], 2)
    ], 4));
  }
}), fi = /* @__PURE__ */ me({
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
  setup(t, { emit: s }) {
    const o = s, e = t;
    let n = E(1), a = 1;
    const r = E(""), d = ft([]);
    let i = {}, h = !0, p = !1;
    const f = "scm" + Math.random(), u = G(() => r.value ? O("r.searchFor") + r.value : e.placeholder || O("r.pInput")), g = G({
      get() {
        return e.modelValue ?? "";
      },
      set(I) {
        if (o("update:modelValue", I ?? ""), e.collectLabel && I !== void 0) {
          let L = {};
          for (let _ of d.value)
            if (_[e.optionsValKey] === I) {
              L = JSON.parse(JSON.stringify(_));
              break;
            }
          o("on-change", L);
        }
      }
    }), k = G(() => e.searchKey ? {
      ...e.searchData,
      current: n.value,
      [e.searchKey]: r.value
    } : {
      ...e.searchData,
      current: n.value
    });
    Ce(
      () => e.getOptions,
      (I) => {
        I ? h && F() : w();
      },
      { immediate: !0 }
    ), Ce(
      () => e.url,
      (I) => {
        I && (p = !0);
      }
    );
    const v = E();
    function V() {
      v.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", x);
    }
    function w() {
      h || (g.value = "", h = !0, r.value = "", d.value = [], n.value = 1, a = 1, i = {}, p = !1);
    }
    function B(I) {
      for (let L of d.value)
        if ((L == null ? void 0 : L.label) === I)
          return !0;
      return !1;
    }
    const x = qt(function(I) {
      var _;
      const L = (_ = I == null ? void 0 : I.target) == null ? void 0 : _.value;
      B(L) || (Ie(L) ? (p ? w() : (Re(i) && (i.current = n.value, i.pages = a, i.options = he(d.value)), Ie(g.value) && (g.value = "")), r.value = String(L), d.value = [], n.value = 1, h = !0, F()) : p ? (w(), F()) : (g.value = "", r.value = "", i.current ? (n.value = i.current, a = i.pages, d.value = he(i.options), i = {}) : F()));
    }, 600);
    function C() {
      p && w(), n.value < a ? (++n.value, Pe(function() {
        F();
      })) : ul.warning({
        background: !0,
        content: O("r.noMore")
      });
    }
    function F() {
      return new Promise((I, L) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Ie(r.value)) {
            I(!1);
            return;
          }
          We.get(e.url, k.value).then((_) => {
            var ee;
            h = !1;
            let y = [];
            (ee = _ == null ? void 0 : _.data) != null && ee.records ? (y = _.data.records, a = _.data.pages) : _ != null && _.data && q(_.data) === "Array" ? (y = _.data, a = _.pages) : _ != null && _.data && q(_.data) === "Object" && (y = [_.data], a = 1), typeof e.optionFilter == "function" && q(e.optionFilter) === "Function" && (y = e.optionFilter(y)), Re(y) || (y = y.map((M, N) => {
              let te = O("r.optionLabel") + N;
              if (Array.isArray(e.optionsLabelKey)) {
                let b = [];
                for (let D = 1, X = e.optionsLabelKey.length; D < X; D++)
                  b.push(M[e.optionsLabelKey[D]]);
                te = `${M[e.optionsLabelKey[0]]}(${String(b)})`;
              } else Ll(e.optionsLabelKey) && (te = M[e.optionsLabelKey]);
              if (e.collectLabel) {
                let b = he(M);
                return delete b.value, delete b.label, {
                  value: M[e.optionsValKey],
                  label: te,
                  ...b
                };
              }
              return {
                value: M[e.optionsValKey],
                label: te
              };
            })), d.value.push(...y);
            let R = {};
            d.value = d.value.filter((M) => R[M == null ? void 0 : M.value] ? !1 : (R[M == null ? void 0 : M.value] = !0, !0)), Pe(function() {
              o("update-option-finish");
            }), I(!0);
          }).catch(() => {
            ul.error(O("r.getDataError")), L(O("r.getDataError"));
          });
        } else
          I(!1);
      });
    }
    return Ue(V), (I, L) => {
      const _ = J("Option"), y = J("Select"), R = jt("loadmore");
      return de((T(), Z(y, it({
        modelValue: m(g),
        "onUpdate:modelValue": L[0] || (L[0] = (ee) => Me(g) ? g.value = ee : null),
        ref_key: "selectScrollSourceRef",
        ref: v,
        "transfer-class-name": f
      }, I.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: m(u),
        disabled: I.disabled
      }), {
        default: ne(() => [
          (T(!0), U(we, null, Te(m(d), (ee, M) => (T(), Z(_, {
            key: "op" + M,
            value: ee == null ? void 0 : ee.value,
            label: ee == null ? void 0 : ee.label,
            disabled: ee == null ? void 0 : ee.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [R, C, f]
      ]);
    };
  }
}), wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: jl,
  AsyncCascader: Wl,
  BtTablePage: Gt,
  CheckboxGroupThreeClass: oi,
  CheckboxGroupTwoClass: Xo,
  CheckboxTree: Lo,
  EditorPro: Yl,
  FormGroup: Bo,
  FormModal: xo,
  FormR: Tt,
  FullPop: Fa,
  HeaderBt: Il,
  Hello: Na,
  IconTxtBtn: $t,
  InputMap: Hl,
  MonthRange: Jl,
  Page404: Ea,
  PagePro: El,
  SearchForm: Wt,
  SelectInput: Gl,
  SelectScrollMore: fi,
  ShowHidePanel: zt,
  ShowHidePanelB: Ln,
  SideMenu: fn,
  SideMenuPro: Sn,
  TableIconBtn: Ml,
  TableSearch: On,
  TableSetting: Kl,
  TransferBox: Uo,
  UploadGroup: Xl,
  WellCard: ci
}, Symbol.toStringTag, { value: "Module" })), pi = { class: "a4Line aL notPrint" }, mi = { class: "a4Line aR notPrint" }, hi = { class: "a4Line bL notPrint" }, yi = { class: "a4Line bR notPrint" }, vi = { class: "topsL notPrint" }, gi = { class: "topsLTitle" }, bi = { class: "topsLBtn" }, ki = { class: "topsLHelp" }, wi = { key: 0 }, _i = /* @__PURE__ */ P("span", null, "1. ", -1), Vi = { key: 1 }, Si = /* @__PURE__ */ P("span", null, "2. ", -1), Ci = { key: 2 }, Ti = /* @__PURE__ */ P("span", null, "1. ", -1), Bi = ["innerHTML"], xi = /* @__PURE__ */ me({
  __name: "PrintModal",
  setup(t) {
    const s = Xt(), o = E(), e = E(!1), n = E(!1), a = E(!1), r = E(715), d = E(!1), i = E(), h = "tablePrint_" + Date.now().toString(), p = E(""), f = E([]), u = E([]), g = E(!1), k = G(() => ({
      width: r.value + "px"
    })), v = () => {
      i.value && window.sessionStorage.removeItem("print_" + i.value), window.sessionStorage.removeItem(h), window.close();
    }, V = () => {
      d.value && (d.value = !1);
    }, w = () => {
      g.value = !0;
    }, B = (I) => {
      g.value && (r.value = (I == null ? void 0 : I.layerX) - 20);
    }, x = () => {
      g.value && (g.value = !1);
    }, C = () => {
      d.value = !1;
      let I = window.setTimeout(() => {
        window.clearTimeout(I), window.print();
      }, 100);
    }, F = () => {
      var I, L, _, y, R;
      if (i.value = (I = s == null ? void 0 : s.params) == null ? void 0 : I.isFrom, i.value) {
        let ee = window.sessionStorage.getItem("print_" + i.value);
        if (ee) {
          const M = JSON.parse(ee);
          if (!M) {
            e.value = !0;
            return;
          }
          f.value = M.columns, u.value = M.data, o.value = M.title, p.value = ((L = M == null ? void 0 : M.config) == null ? void 0 : L.customClass) || "", n.value = ((_ = M == null ? void 0 : M.config) == null ? void 0 : _.domPrint) || !1, a.value = ((y = M == null ? void 0 : M.config) == null ? void 0 : y.autoPrint) || !1, r.value = ((R = M == null ? void 0 : M.config) == null ? void 0 : R.width) || 715, document.title = (o.value || O("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString();
        } else
          e.value = !0;
      }
    };
    return Ue(() => {
      if (a.value) {
        let I = window.setTimeout(() => {
          window.clearTimeout(I), C();
        }, 100);
      }
      document.addEventListener("click", V), document.addEventListener("mousemove", B), document.addEventListener("mouseup", x);
    }), F(), (I, L) => {
      const _ = J("Table");
      return T(), U("div", {
        class: Ve(["tablePrintModal", [m(p)]])
      }, [
        de(P("div", { class: "msgL notPrint" }, H(m(O)("r.printGuide.9")), 513), [
          [ve, m(e)]
        ]),
        de(P("div", pi, [
          P("p", null, H(m(O)("r.printGuide.7")), 1),
          _e(),
          P("p", null, H(m(O)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        de(P("div", mi, [
          P("p", null, H(m(O)("r.printGuide.7")), 1),
          _e(),
          P("p", null, H(m(O)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        de(P("div", hi, [
          P("p", null, H(m(O)("r.printGuide.8")), 1),
          _e(),
          P("p", null, H(m(O)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        de(P("div", yi, [
          P("p", null, H(m(O)("r.printGuide.8")), 1),
          _e(),
          P("p", null, H(m(O)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        de(P("div", vi, [
          P("div", gi, H(m(o) || m(O)("r.print")), 1),
          P("div", bi, [
            W($t, {
              icon: "md-help-circle",
              name: m(O)("r.help"),
              onClick: L[0] || (L[0] = It((y) => d.value = !m(d), ["stop"]))
            }, null, 8, ["name"]),
            W($t, {
              icon: "md-print",
              name: m(O)("r.preview"),
              onClick: C
            }, null, 8, ["name"]),
            m(n) ? pe("", !0) : (T(), Z(Kl, {
              key: 0,
              modelValue: m(f),
              "onUpdate:modelValue": L[1] || (L[1] = (y) => Me(f) ? f.value = y : null),
              "s-key": h,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            W(Ml, {
              icon: "md-close",
              onClick: v,
              title: m(O)("r.close")
            }, null, 8, ["title"])
          ]),
          de(P("div", ki, [
            m(n) ? pe("", !0) : (T(), U("p", wi, [
              _i,
              P("span", null, H(m(O)("r.printGuide.1")), 1)
            ])),
            m(n) ? pe("", !0) : (T(), U("p", Vi, [
              Si,
              P("span", null, H(m(O)("r.printGuide.2")), 1)
            ])),
            m(n) ? (T(), U("p", Ci, [
              Ti,
              P("span", null, H(m(O)("r.printGuide.10")), 1)
            ])) : pe("", !0),
            P("p", null, [
              P("span", null, H(m(n) ? "2. " : "3. "), 1),
              P("span", null, H(m(O)("r.printGuide.3")), 1)
            ]),
            P("p", null, [
              P("span", null, H(m(n) ? "3. " : "4. "), 1),
              P("span", null, H(m(O)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ve, m(d)]
          ])
        ], 512), [
          [ve, !m(e)]
        ]),
        m(n) ? (T(), U("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: re(m(k))
        }, [
          P("div", {
            class: "settingLine",
            onMousedown: It(w, ["stop"])
          }, null, 32)
        ], 4)) : pe("", !0),
        m(n) ? (T(), U("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: m(u),
          style: re(m(k))
        }, null, 12, Bi)) : pe("", !0),
        m(n) ? pe("", !0) : de((T(), Z(_, {
          key: 2,
          class: "tablePW",
          columns: m(f),
          data: m(u),
          border: ""
        }, null, 8, ["columns", "data"])), [
          [ve, !m(e)]
        ])
      ], 2);
    };
  }
});
let Ze = null;
function _l() {
  document.documentElement.style.setProperty("overflow", "auto");
  const s = document.createElement("style");
  s.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(s);
}
function Li(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: xi
  })), Ze = t, location.pathname.indexOf("tablePrint") > -1 ? (Ze.push(location.pathname), _l()) : location.hash.indexOf("tablePrint") > -1 && (Ze.push(location.hash.replace(/^#/, "")), _l());
}
function Ql(t) {
  return q(t) === "Object" && (t.width = t.minWidth || 100, t.sortable = !1, delete t.minWidth, delete t.__id, t.resizable = !0, t.children && q(t.children) === "Array" && (t.children = t.children.map(Ql))), t;
}
function Oi(t, s, o, e) {
  var h, p, f;
  if (!Ze)
    return;
  let n;
  if (!(e != null && e.domPrint)) {
    let u = he(
      t.filter((g) => (g == null ? void 0 : g.key) || (g == null ? void 0 : g.children))
    );
    u[0].type === "selection" && u.shift(), u.length ? n = u.map(Ql) : n = [];
  }
  let a = (p = (h = Ze == null ? void 0 : Ze.currentRoute) == null ? void 0 : h.value) == null ? void 0 : p.fullPath;
  a && (a = (f = a.replace) == null ? void 0 : f.call(a, /\//g, "_"));
  let r = {
    data: s,
    title: o,
    config: e
  };
  e != null && e.domPrint || (r.columns = n), window.sessionStorage.setItem("print_" + a, JSON.stringify(r));
  const d = Ze.resolve({
    name: "tablePrint",
    params: { isFrom: a }
  });
  window.open(d == null ? void 0 : d.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const Qt = {
  print: Oi,
  init: Li
};
function Ii(t = "", s = "", o = {}) {
  o.domPrint = !0, o.width || (o.width = 715), Qt.print([], t, s, o);
}
function Ai(t) {
  var a, r;
  const s = (...d) => Xe.apply(this, d), o = s("r.closePreview"), e = s("r.fullImg");
  let n = "previewImg" + Math.floor(Math.random() * 1e7);
  (r = (a = Qe) == null ? void 0 : a.info) == null || r.call(a, {
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (d) => Oe(
      "div",
      {
        class: "previewModal",
        id: n
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
            Oe(ka, {
              type: "md-close",
              title: o,
              class: "previewModalDelete",
              onClick() {
                var i, h;
                (h = (i = Qe) == null ? void 0 : i.remove) == null || h.call(i);
              }
            })
          ]
        )
      ]
    )
  }), $e(() => {
    var h, p, f, u, g, k;
    const d = (u = (f = (p = (h = document.getElementById(n)) == null ? void 0 : h.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : f.parentElement) == null ? void 0 : u.parentElement, i = (k = (g = document.getElementById(n)) == null ? void 0 : g.parentElement) == null ? void 0 : k.nextSibling;
    d && (d.style.height = "0"), d && (d.style.padding = "0"), i && (i.style.display = "none");
  }, 10);
}
const Pi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: We,
  $swal: Ke,
  $swalConfirm: Dl,
  domPrint: Ii,
  fullScreenImgByDom: ct,
  fullScreenImgPreview: Ai,
  messageBox: Et,
  setInterval: dn,
  setTimeout: $e,
  tablePrint: Qt
}, Symbol.toStringTag, { value: "Module" }));
(() => {
  if (window.wangeditorMenuInit)
    return;
  class t {
    constructor() {
      st(this, "title");
      st(this, "iconSvg");
      st(this, "tag");
      st(this, "alwaysEnable");
      this.title = Xe("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
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
      var i, h, p, f, u, g, k, v, V;
      const n = document.getElementById("editor-preview");
      let a = localStorage.getItem("editorPreviewW") || 300, r = localStorage.getItem("editorPreviewH") || 500;
      const d = (i = e == null ? void 0 : e.getHtml) == null ? void 0 : i.call(e);
      if (n) {
        let w = (g = (u = (f = (p = (h = n.children) == null ? void 0 : h[0]) == null ? void 0 : p.children) == null ? void 0 : f[1]) == null ? void 0 : u.children) == null ? void 0 : g[0], B = (V = (v = (k = n.children) == null ? void 0 : k[0]) == null ? void 0 : v.children) == null ? void 0 : V[1];
        w && (w.innerHTML = d, w.style.width = a + "px"), B && (B.style.height = r + "px"), n.style.display = "block";
      } else {
        const w = document.body, B = document.createElement("div");
        B.setAttribute("id", "editor-preview"), B.setAttribute("class", "editor-preview-mask"), B.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${a}' min='200'><span>高</span><input type='number' value='${r}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let x = B.children[0].children[1], C = B.children[0].children[1].children[0], F = B.children[0].children[0].children[0].children[1];
        const I = 40, L = 70, _ = (M) => {
          var b;
          if ((M == null ? void 0 : M.type) === "keyup") {
            let D = !1;
            if (M.key && (D = M.key !== "Enter"), D)
              return;
          }
          let N = (b = M == null ? void 0 : M.target) == null ? void 0 : b.value;
          if (N = Number(N), C.style && C.style.width === N + "px")
            return;
          const te = w.clientWidth;
          N < 250 ? (N = 250, M.target.value = 250) : N > te - I && (N = te - I, M.target.value = te - I), C.style.width = N + "px", localStorage.setItem("editorPreviewW", N);
        };
        F.addEventListener("blur", _), F.addEventListener("keyup", _);
        let y = B.children[0].children[0].children[0].children[3];
        const R = (M) => {
          var b;
          if ((M == null ? void 0 : M.type) === "keyup") {
            let D = !1;
            if (M.key && (D = M.key !== "Enter"), D)
              return;
          }
          let N = (b = M == null ? void 0 : M.target) == null ? void 0 : b.value;
          if (N = Number(N), x.style && x.style.height === N + "px")
            return;
          const te = w.clientHeight;
          N < 300 ? (N = 300, M.target.value = 300) : N > te - L && (N = te - L, M.target.value = te - L), x.style.height = N + "px", localStorage.setItem("editorPreviewH", N);
        };
        y.addEventListener("blur", R), y.addEventListener("keyup", R), B.children[0].children[0].children[1].addEventListener("click", () => {
          B.style.display = "none";
        }), C.innerHTML = d, C.style.width = a + "px", x.style.height = r + "px", w.append(B);
      }
    }
  }
  const s = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  Ca.registerMenu(s), window.wangeditorMenuInit = !0;
})();
const es = wt.use, ts = wt.i18n, Vl = {
  ...Pi,
  ...nn
}, Ri = function(t, s = {}) {
  We.init(s.useStore || s.store, t), t.use(Ta), s.locale && wt.use(s.locale), s.i18n && wt.i18n(s.i18n), s.router && (un(s.router), Qt.init(s.router)), s.amap && Yn(s.amap), s.notRegistryGlobal || (Object.keys(wl).forEach((o) => {
    t.component(o) || t.component(o, wl[o]);
  }), Object.keys(Vl).forEach((o) => {
    t.config.globalProperties[o] = Vl[o];
  })), t.directive("has") || t.directive("has", (o, e) => {
    e.value && !Jt(e.value) && (o.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", {
    mounted(o, e) {
      var a;
      let n = o;
      e.arg && (n = (a = document.getElementsByClassName(e.arg)) == null ? void 0 : a[0]), n && n.addEventListener("scroll", function() {
        n.scrollTop > 0 && n.scrollHeight - n.scrollTop <= n.clientHeight && e.value();
      });
    }
  }), t.directive("clickOutside") || t.directive("clickOutside", Nl), t.config.globalProperties.fontSizeBase = 14, t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.btTablePageAlign = "center", t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !0, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, ls = { install: Ri };
export {
  We as $fetch,
  Ke as $swal,
  Dl as $swalConfirm,
  jl as AlCascaderMC,
  Wl as AsyncCascader,
  Gt as BtTablePage,
  oi as CheckboxGroupThreeClass,
  Xo as CheckboxGroupTwoClass,
  Lo as CheckboxTree,
  Yl as EditorPro,
  Bo as FormGroup,
  xo as FormModal,
  Tt as FormR,
  Fa as FullPop,
  Il as HeaderBt,
  Na as Hello,
  $t as IconTxtBtn,
  Hl as InputMap,
  Jl as MonthRange,
  Ea as Page404,
  El as PagePro,
  Wt as SearchForm,
  Gl as SelectInput,
  fi as SelectScrollMore,
  zt as ShowHidePanel,
  Ln as ShowHidePanelB,
  fn as SideMenu,
  Sn as SideMenuPro,
  Ml as TableIconBtn,
  On as TableSearch,
  Kl as TableSetting,
  Uo as TransferBox,
  Xl as UploadGroup,
  ci as WellCard,
  Mt as clearObj,
  ln as dataFilterOrToUrl,
  Ja as decimalDigitsLimit,
  ls as default,
  Ii as domPrint,
  Pl as downloadFileByFormSubmit,
  Fn as downloadFileReaderFile,
  Qi as emptyInput,
  Mn as fakeALinkClick,
  Ya as fileExport,
  lt as findCollection,
  Ut as findPath,
  ja as formDataHeadConfig,
  ct as fullScreenImgByDom,
  Ai as fullScreenImgPreview,
  Qa as getColumnsKeys,
  pl as getFileSrc,
  zl as getFileTypeByName,
  ml as getFileTypeIconByName,
  Nn as getStringWidth,
  Wa as has,
  Jt as hasPermission,
  Yi as htmlDecode,
  Ji as htmlEncode,
  an as htmlPrint,
  ts as i18n,
  Ri as install,
  Ft as isClient,
  en as isEmptyValue,
  ut as isImgByFile,
  $l as isNaN,
  Za as isNumberValue,
  Ie as isValidValue,
  es as locale,
  Et as messageBox,
  q as myTypeof,
  Xa as oneOf,
  Nt as removeEmptyValue,
  dn as setInterval,
  $e as setTimeout,
  at as setValByOption,
  je as setValue,
  Yt as siblingElems,
  Zi as stopBubbling,
  tn as stringLength,
  Qt as tablePrint,
  qa as toFormData,
  $n as toHump,
  Al as toLine,
  Rl as tooltipManual,
  _t as trimObj
};
//# sourceMappingURL=plugRQw.js.map
