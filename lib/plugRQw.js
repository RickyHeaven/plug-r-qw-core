var oa = Object.defineProperty;
var ia = (t, s, n) => s in t ? oa(t, s, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[s] = n;
var it = (t, s, n) => ia(t, typeof s != "symbol" ? s + "" : s, n);
import { getCurrentInstance as St, defineComponent as ce, resolveComponent as Y, createElementBlock as U, openBlock as S, normalizeStyle as se, normalizeClass as we, createBlock as Z, createCommentVNode as ue, renderSlot as Me, ref as E, computed as G, withDirectives as he, unref as m, createElementVNode as R, createVNode as j, toDisplayString as H, withCtx as le, createTextVNode as ke, vShow as ge, resolveDirective as jt, onMounted as Ge, nextTick as Ie, onUpdated as sa, onUnmounted as Tl, h as Le, isRef as $e, Fragment as be, renderList as Ce, onBeforeMount as Bl, watch as _e, mergeModels as ra, useModel as ua, onBeforeUnmount as xl, Teleport as da, withModifiers as It, mergeProps as ot, shallowRef as ct, triggerRef as ca, createSlots as nt, toRef as fa, toValue as Lt } from "vue";
import pa from "deepmerge";
import { debounce as qt, isPlainObject as at, cloneDeep as fe, isObject as ma, isFunction as ha, isEmpty as Pe, isNumber as yt, last as gt, isEqual as ft, isString as Ll, first as At, find as Pt, indexOf as rl, findIndex as bt, remove as ya } from "lodash-es";
import mt from "sweetalert";
import { Tooltip as va, Modal as Qe, Button as Ot, TableColumnConfig as ga, Radio as ba, Input as ka, Message as ul, Icon as wa } from "view-ui-plus";
import { useRouter as Ct, useRoute as Xt } from "vue-router";
import _a from "popper.js";
import Rt from "axios";
import dl from "@amap/amap-jsapi-loader";
import Va from "ar-cascader";
import { Toolbar as Sa, Editor as Ca } from "@wangeditor/editor-for-vue";
import st from "moment";
import { Boot as Ta } from "@wangeditor/editor";
import Ba from "vue-json-viewer";
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
}, xa = /(%|){([0-9a-zA-Z_]+)}/g;
function La() {
  function t(n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }
  function s(n, ...e) {
    let l;
    return e.length === 1 && typeof e[0] == "object" && (l = e[0]), (!l || !l.hasOwnProperty) && (l = {}), n === void 0 ? "" : n.replace(xa, (o, r, c, i) => {
      let y;
      return n[i - 1] === "{" && n[i + o.length] === "}" ? c : (y = t(l, c) ? l[c] : null, y ?? "");
    });
  }
  return s;
}
const Oa = La();
let kt = Ol;
const Ia = {
  zh: Ol
};
let cl, fl = {}, Fe, Aa = function(t, s) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, s);
  if (Fe && Fe.global)
    return Fe.global.t(t, s);
  if (Fe && Fe.locale) {
    if (!fl[Fe.locale] || cl != Fe.locale) {
      fl[Fe.locale] = !0;
      let n = Fe.getLocaleMessage(Fe.locale) || {}, e = pa(Ia[Fe.locale], n, { clone: !0 });
      kt = e, Fe.setLocaleMessage(Fe.locale, e), cl = Fe.locale;
    }
    return Fe.hlang(t, s);
  }
};
const Xe = function(t, s) {
  let n = Aa.apply(this, [t, s]);
  if (n != null)
    return n;
  const e = t.split(".");
  let l = kt;
  for (let o = 0, r = e.length; o < r; o++) {
    const c = e[o];
    if (n = l[c], o === r - 1)
      return Oa(n, s);
    if (!n)
      return "";
    l = n;
  }
  return "";
}, Pa = function(t) {
  kt = t || kt;
}, Ra = function(t) {
  Fe = t;
}, wt = {
  use: Pa,
  t: Xe,
  i18n: Ra
};
function I(t, s) {
  var e, l, o;
  const n = (o = (l = (e = St()) == null ? void 0 : e.appContext) == null ? void 0 : l.config) == null ? void 0 : o.globalProperties;
  return Xe.apply(n, [t, s]);
}
const Il = /* @__PURE__ */ ce({
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
    const n = t, e = s;
    function l() {
      n.disabled || e("click");
    }
    return (o, r) => {
      const c = Y("Icon");
      return S(), U("div", {
        class: we({ headerBtCTM: !0, withIconCTM: n.icon || n.withIcon, disabled: n.disabled }),
        style: se({ color: n.color, borderLeftColor: n.borderColor }),
        onClick: l
      }, [
        n.icon ? (S(), Z(c, {
          key: 0,
          size: n.iconSize,
          type: n.icon
        }, null, 8, ["size", "type"])) : ue("", !0),
        Me(o.$slots, "default")
      ], 6);
    };
  }
});
function Be() {
  var n, e;
  const t = (n = St()) == null ? void 0 : n.appContext;
  return ((e = t == null ? void 0 : t.config) == null ? void 0 : e.globalProperties) || {};
}
const $a = { class: "headerTxtAM" }, Ma = { class: "contentAM" }, Fa = /* @__PURE__ */ ce({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: () => {
      var t;
      return (t = Be()) == null ? void 0 : t.fontSizeBase;
    } },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(t, { expose: s, emit: n }) {
    const e = t, l = n;
    let o = E(!1);
    const r = G(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), c = G(() => ({ zIndex: e.zIndex }));
    function i() {
      o.value = !0, l("on-open");
    }
    function y(f) {
      o.value = !1, l("on-close", f === !0);
    }
    return s({
      open: i,
      close: y
    }), (f, p) => he((S(), U("div", {
      class: "fullScreenPopBoxAM",
      style: se(m(c))
    }, [
      R("div", {
        class: "headerAM",
        style: se({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: m(r) })
      }, [
        R("span", $a, H(f.title || m(I)("r.title")), 1),
        j(Il, {
          icon: "md-return-left",
          onClick: y
        }, {
          default: le(() => [
            ke(H(m(I)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      R("div", Ma, [
        Me(f.$slots, "default")
      ])
    ], 4)), [
      [ge, m(o)]
    ]);
  }
}), Na = { class: "msg" }, Da = /* @__PURE__ */ ce({
  __name: "Hello",
  setup(t) {
    let s = E("Greetings from Ricky.");
    return (n, e) => (S(), U("span", Na, H(m(s)), 1));
  }
}), $t = /* @__PURE__ */ ce({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => Be().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: s }) {
    const n = t, e = s, l = G(() => {
      var r;
      return Math.floor(n.size / 17 * ((r = Be()) == null ? void 0 : r.fontSizeBase)) + "px";
    });
    function o(r) {
      n.disabled || e("click", r);
    }
    return (r, c) => {
      const i = Y("Icon"), y = jt("has");
      return he((S(), U("div", {
        class: we(["tabTopBtnsT", { disabled: n.disabled }]),
        onClick: o,
        style: se({ "font-size": m(l) })
      }, [
        j(i, {
          type: n.icon,
          size: n.size
        }, null, 8, ["type", "size"]),
        ke(" " + H(n.name || m(I)("r.button")), 1)
      ], 6)), [
        [y, r.has]
      ]);
    };
  }
}), Ka = { class: "c404K" }, za = { class: "ct404" }, Ua = { class: "p404" }, Ea = /* @__PURE__ */ ce({
  __name: "Page404",
  setup(t) {
    const n = St().appContext.config.globalProperties.$router;
    function e() {
      n.go(-1);
    }
    return (l, o) => {
      const r = Y("Button");
      return S(), U("div", Ka, [
        o[0] || (o[0] = R("div", { class: "t404" }, "404", -1)),
        R("div", za, "UH OH! " + H(m(I)("r.pageNotFound")), 1),
        R("div", Ua, H(m(I)("r.notFoundMsg")), 1),
        j(r, {
          class: "bt404",
          onClick: e
        }, {
          default: le(() => [
            ke(H(m(I)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function De(t, s, n, e = !0) {
  const l = (...o) => Xe.apply(this, o);
  return new Promise((o, r) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let c = l("r.confirm"), i = l("r.cancel"), y = !1, f = "swalConfirmBt", p = "swalCancelBt";
      const u = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let v = "";
      t.text && u.test(q(t.text)) ? v = "content" : t.text && q(t.text) === "String" && (v = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (i = t.buttons.cancel.text) && (y = !0), t.buttons.cancel.className && (p = t.buttons.cancel.className), t.buttons.confirm.text && (c = t.buttons.confirm.text), t.buttons.confirm.className && (f = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (i = t.buttons[0], y = !0), t.buttons[1] && (c = t.buttons[1]))), mt({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [v]: t.text,
        buttons: {
          confirm: {
            text: c,
            value: !0,
            visible: !0,
            className: f
          },
          cancel: {
            text: i,
            value: null,
            visible: y,
            className: p
          }
        },
        closeOnClickOutside: t.closeOnClickOutside ?? !0
      }).then((k) => {
        k && typeof t.onOk == "function" && t.onOk(), o(k);
      }).catch((k) => {
        r(k);
      });
    } else if (typeof t == "string") {
      let c = "";
      if (s)
        switch (typeof s) {
          case "string":
            c = "text";
            break;
          case "object":
            c = "content";
            break;
        }
      mt({
        title: t,
        [c]: s || "",
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
        o(i);
      }).catch((i) => {
        r(i);
      });
    } else if (typeof t == "boolean")
      !t && mt.close && mt.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
const Ga = { class: "tableTooltip" }, Ha = /* @__PURE__ */ ce({
  __name: "TableTooltip",
  props: {
    content: { type: [String, Number, Boolean, null] }
  },
  setup(t) {
    const s = t, n = E(), e = E(), l = E(!0);
    let o = null;
    const r = E(200);
    function c() {
      const i = l.value ? n.value : e.value;
      if (!i)
        return;
      let y = document.createRange();
      y.setStart(i, 0), y.setEnd(i, i.childNodes.length);
      const f = y.getBoundingClientRect().width;
      r.value = i.offsetWidth * 2, l.value = f < i.offsetWidth, y = null;
    }
    return Ge(() => {
      c(), o = qt(() => {
        Ie(function() {
          c();
        });
      }, 200), window.addEventListener("resize", o);
    }), sa(c), Tl(() => {
      window.removeEventListener("resize", o);
    }), (i, y) => (S(), U("div", Ga, [
      m(l) ? (S(), U("span", {
        key: 0,
        ref_key: "spanRef",
        ref: n,
        class: "contentText"
      }, H(s.content), 513)) : (S(), Z(m(va), {
        key: 1,
        content: typeof s.content == "boolean" ? String(s.content) : s.content ?? "",
        "max-width": m(r),
        transfer: ""
      }, {
        default: le(() => [
          R("span", {
            ref_key: "contentRef",
            ref: e,
            class: "contentText"
          }, H(s.content), 513)
        ]),
        _: 1
      }, 8, ["content", "max-width"]))
    ]));
  }
}), Mt = typeof window < "u";
function je(t, s, n) {
  $e(t[s]) ? t[s].value = n : t[s] = n;
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
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = q(t[n]);
        e === "String" ? t[n] = t[n].trim() : (e === "Object" || e === "Array") && _t(t[n]);
      }
  } else if (s === "Array")
    for (let n = 0, e = t.length; n < e; n++) {
      let l = q(t[n]);
      l === "String" ? t[n] = t[n].trim() : (l === "Array" || l === "Object") && _t(t[n]);
    }
  return t;
}
function Ft(t, s = []) {
  if (q(t) === "Array")
    return t.forEach((n, e) => {
      switch (q(n)) {
        case "Array":
        case "Object":
          Ft(n);
          break;
        default:
          t[e] = null;
      }
    }), t;
  if (q(t) === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = !0;
        for (let l of s)
          if (l === n) {
            e = !1;
            break;
          }
        if (e)
          switch (q(t[n])) {
            case "Array":
            case "Object":
              Ft(t[n]);
              break;
            default:
              t[n] = null;
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
  for (let n in t)
    t.hasOwnProperty(n) && t[n] !== null && s.append(n, t[n]);
  return s;
}
function vt(t, s, n = !1) {
  if (!t || !s)
    return !1;
  let e, l = "notFoundC", o = function(r, c) {
    if (Array.isArray(r)) {
      if (q(c) === "Function" && c(r))
        return l = r, [];
      for (let i of r) {
        if (l !== "notFoundC")
          break;
        if (q(c) === "Function" && c(i) || i === c)
          return l = i, [r.indexOf(i)];
        if (q(i) === "Array" || q(i) === "Object") {
          let y = o(i, c);
          if (y !== void 0)
            return [r.indexOf(i), ...y];
        }
      }
    } else if (q(r) === "Object") {
      if (q(c) === "Function" && c(r))
        return l = r, [];
      for (let i in r) {
        if (l !== "notFoundC")
          break;
        if (r.hasOwnProperty(i)) {
          if (q(c) === "Function" && c(i) || r[i] === c)
            return l = r[i], [i];
          if (q(r[i]) === "Object" || q(r[i]) === "Array") {
            let y = o(r[i], c);
            if (y !== void 0)
              return [i, ...y];
          }
        }
      }
    }
  };
  return e = o(t, s), n ? e || !1 : l === "notFoundC" ? !1 : l;
}
function Xa(t, s) {
  for (let n = 0, e = s.length; n < e; n++)
    if (t === s[n])
      return !0;
  return !1;
}
function Ja(t, s = 2) {
  let n = new RegExp(`(^-?\\d+\\.\\d{${s}})(\\d+$)`), e = t && String(t) || "";
  return n.test(e) ? Number(e.replace(n, "$1")) : t;
}
function Pl(t, s = {}, n = "get") {
  let e = document.createElement("form"), l = document.getElementsByTagName("body")[0];
  l.appendChild(e), e.setAttribute("style", "display:none"), e.setAttribute("target", ""), e.setAttribute("method", n);
  let o = t;
  if (window && window.hasOwnProperty("g")) {
    let r = Object.keys(window.g).filter((c) => {
      var i;
      return ((i = c == null ? void 0 : c.indexOf) == null ? void 0 : i.call(c, "URL")) > -1;
    }).map((c) => {
      var i;
      return (i = c.replace) == null ? void 0 : i.call(c, "URL", "");
    });
    for (let c of r) {
      let i = new RegExp("^/" + c + "(?=/.*$)", "i");
      if (i.test(t) && window.g[c + "URL"]) {
        o = window.g[c + "URL"] + t.replace(i, "");
        break;
      }
    }
  }
  if (e.setAttribute("action", o), at(s)) {
    for (let c in s)
      if (s.hasOwnProperty(c) && (s[c] || s[c] === 0 || s[c] === !1 || s[c] === "")) {
        let i = document.createElement("input");
        i.setAttribute("type", "hidden"), i.setAttribute("name", c), i.setAttribute("value", s[c]), e.appendChild(i);
      }
    e.submit();
    let r = setTimeout(() => {
      l.removeChild(e), clearTimeout(r), r = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function Ya(t, s = {}, n = "get") {
  if (s.hasOwnProperty("columns") && (s.columns === "" || s.columns === null || s.columns === void 0)) {
    De.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  Pl(t, s, n);
}
function Qa(t, s, n = !1) {
  let e;
  if (t && q(s) === "Array") {
    let l = localStorage.getItem(t);
    if (l) {
      let o = JSON.parse(decodeURI(l));
      e = s.filter((r) => {
        var c;
        return (r == null ? void 0 : r.key) && ((c = o == null ? void 0 : o.indexOf) == null ? void 0 : c.call(o, r.title)) !== -1;
      }).map((r) => r.key);
    } else
      e = s.map((o) => o == null ? void 0 : o.key);
  } else
    e = [];
  return n || (e = String(e)), e;
}
function Oe(t) {
  return t != null && t !== "";
}
function Za(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function Rl(t, s = !1, n = "") {
  return function(e, l) {
    var r, c;
    let o;
    if (Array.isArray(t)) {
      let i = [];
      for (let y of t)
        Oe((r = l.row) == null ? void 0 : r[y]) && i.push(l.row[y]);
      o = i.join(n);
    } else typeof t == "function" ? o = t(l) : o = (c = l.row) == null ? void 0 : c[t];
    return Le(Ha, { content: s ? o === "" ? "--" : o ?? "--" : o });
  };
}
function en(t) {
  if (at(t)) {
    for (let s in t)
      if (t.hasOwnProperty(s) && Oe(t[s]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let s of t)
      if (Oe(s))
        return !1;
    return !0;
  }
  return !Oe(t);
}
function tn(t) {
  return q(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : q(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function lt({
  group: t,
  condition: s,
  key: n,
  val: e,
  childKey: l = "children"
}) {
  if (q(t) !== "Array" || q(s) !== "Function" || q(n) !== "String" || q(l) !== "String")
    return !1;
  t.forEach((o) => {
    s(o) && (q(e) === "Function" ? o[n] = e(o[n]) : o[n] = e), q(o[l]) === "Array" && o[l].length > 0 && lt({
      group: o[l],
      condition: s,
      key: n,
      val: e,
      childKey: l
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
function ln(t, s = !1, n = !1) {
  if (q(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), l = "";
  for (let o in e)
    if (e.hasOwnProperty(o)) {
      let r = e[o];
      r === void 0 || r === "" || q(r) === "String" && r.trim() === "" || r === null || $l(r) ? n ? s ? l += o + "=&" : e[o] = "" : delete e[o] : s && (l += o + "=" + r + "&");
    }
  return s ? l.length > 0 ? l.substring(0, l.length - 1) : "" : e;
}
function Nt(t) {
  let s = {};
  if (Array.isArray(t)) {
    s = [];
    for (let n of t)
      Array.isArray(n) || at(n) ? s.push(Nt(n)) : Oe(n) && s.push(n);
  } else if (at(t))
    for (let n in t)
      t.hasOwnProperty(n) && (Array.isArray(t[n]) || at(t[n]) ? s[n] = Nt(t[n]) : Oe(t[n]) && (s[n] = t[n]));
  return s;
}
function an(t) {
  const s = window.open();
  if (s) {
    s.document.write(t);
    let n = setTimeout(() => {
      s.print(), window.clearTimeout(n), n = null;
    }, 10);
  }
}
function Yt(t) {
  let s = [], n = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && s.push(t);
  for (; n.nextSibling && (n = n.nextSibling); )
    n.nodeType === 1 && s.push(n);
  return s;
}
const nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Ft,
  dataFilterOrToUrl: ln,
  decimalDigitsLimit: Ja,
  downloadFileByFormSubmit: Pl,
  fileExport: Ya,
  findCollection: vt,
  formDataHeadConfig: ja,
  getColumnsKeys: Qa,
  has: Wa,
  hasPermission: Jt,
  htmlPrint: an,
  isClient: Mt,
  isEmptyValue: en,
  isNaN: $l,
  isNumberValue: Za,
  isValidValue: Oe,
  myTypeof: q,
  oneOf: Xa,
  removeEmptyValue: Nt,
  setValByOption: lt,
  setValue: je,
  siblingElems: Yt,
  stringLength: tn,
  toFormData: qa,
  toLine: Al,
  tooltipManual: Rl,
  trimObj: _t
}, Symbol.toStringTag, { value: "Module" })), on = { class: "groupBoxRP" }, sn = ["onClick"], rn = /* @__PURE__ */ ce({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const s = Ct(), n = t;
    function e(o) {
      return (o == null ? void 0 : o.path) === n.pathName ? "active" : "";
    }
    function l(o, r) {
      var f, p, u, v, k, g, _, w;
      (f = o == null ? void 0 : o.preventDefault) == null || f.call(o);
      let c = o == null ? void 0 : o.target;
      if (r && !r.children && !c.classList.contains("active")) {
        s.push(r.path);
        return;
      }
      let i = c.parentNode, y = Yt(i);
      for (let T of y) {
        (u = (p = T == null ? void 0 : T.classList) == null ? void 0 : p.remove) == null || u.call(p, "open");
        const C = (v = T == null ? void 0 : T.querySelectorAll) == null ? void 0 : v.call(T, ".open");
        if (C && Array.isArray(C))
          for (let B of C)
            (g = (k = B == null ? void 0 : B.classList) == null ? void 0 : k.remove) == null || g.call(k, "open");
      }
      (w = (_ = i == null ? void 0 : i.classList) == null ? void 0 : _.toggle) == null || w.call(_, "open");
    }
    return (o, r) => {
      const c = Y("Icon"), i = Y("sideMenuGroup", !0);
      return S(), U("ul", on, [
        (S(!0), U(be, null, Ce(n.data, (y, f) => (S(), U(be, {
          key: (y == null ? void 0 : y.path) + f
        }, [
          y ? (S(), U("li", {
            key: 0,
            class: we({ dropItemRP: y.children })
          }, [
            R("div", {
              class: we(["menuTxtR", e(y)]),
              onClick: (p) => l(p, y),
              style: se({ paddingLeft: y.level * 20 + "px" })
            }, [
              y != null && y.icon ? (S(), Z(c, {
                key: 0,
                class: "menuIcoL",
                custom: "iconfont " + y.icon
              }, null, 8, ["custom"])) : ue("", !0),
              R("span", null, H((y == null ? void 0 : y.name) || "-- no name --"), 1)
            ], 14, sn),
            y.children ? (S(), Z(i, {
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
}, Re = function(t, s) {
  let n = window.setTimeout(t, s);
  return Dt.push(n), n;
}, dn = function(t, s) {
  let n = window.setInterval(t, s);
  return Kt.push(n), n;
}, cn = { class: "menuListR" }, fn = /* @__PURE__ */ ce({
  __name: "SideMenu",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: s }) {
    const n = t, e = s, l = Xt(), o = E(!0), r = E(), c = E(), i = G(() => o.value ? I("r.hideMenu") : I("r.showMenu")), y = G(() => o.value ? "ios-arrow-back" : "ios-arrow-forward");
    Bl(() => {
      let u = localStorage.getItem("menuDisplayR") || "";
      u !== "" ? o.value = JSON.parse(u) : (o.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), _e(
      () => l.path,
      (u) => {
        r.value = u, Ie(() => {
          Re(p, 10);
        });
      },
      { immediate: !0 }
    );
    function f() {
      o.value = !o.value, localStorage.setItem("menuDisplayR", JSON.stringify(o.value)), e("on-change", o.value);
    }
    function p() {
      var v, k, g, _, w;
      let u = c.value.querySelectorAll(".dropItemRP");
      for (let T of u)
        (v = T == null ? void 0 : T.querySelector) != null && v.call(T, ".active") && !((g = (k = T.classList) == null ? void 0 : k.contains) != null && g.call(k, "open")) && ((w = (_ = T.classList) == null ? void 0 : _.add) == null || w.call(_, "open"));
    }
    return (u, v) => {
      const k = Y("Icon");
      return S(), U("div", {
        ref_key: "menuRef",
        ref: c,
        class: we(["menuBoxRP", "cannotSelect", { light: u.light }])
      }, [
        he(R("div", cn, [
          j(rn, {
            data: n.data,
            pathName: m(r)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ge, m(o)]
        ]),
        j(k, {
          type: m(y),
          size: 25,
          class: we([{ showIco: !m(o) }, "menuShowHideIco"]),
          title: m(i),
          onClick: f,
          color: m(o) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 2);
    };
  }
}), pn = { class: "groupBoxRX" }, mn = ["onMouseenter"], hn = ["onClick"], yn = /* @__PURE__ */ ce({
  __name: "SideMenuProGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const s = Ct(), n = t, e = E("");
    function l(i) {
      let y = "menuTxtR ";
      return (i == null ? void 0 : i.path) === n.pathName && (y += "active "), y;
    }
    function o(i, y) {
      var p;
      (p = i == null ? void 0 : i.preventDefault) == null || p.call(i);
      let f = i == null ? void 0 : i.target;
      y && !y.children && !f.classList.contains("active") && s.push(y.path);
    }
    function r(i, y) {
      var f;
      (f = i == null ? void 0 : i.preventDefault) == null || f.call(i), e.value = y == null ? void 0 : y.path;
    }
    function c(i) {
      var y;
      (y = i == null ? void 0 : i.preventDefault) == null || y.call(i), e.value = "";
    }
    return (i, y) => {
      const f = Y("Icon"), p = Y("SideMenuProGroup", !0);
      return S(), U("ul", pn, [
        (S(!0), U(be, null, Ce(n.data, (u, v) => {
          var k;
          return S(), U("li", {
            key: (u == null ? void 0 : u.path) + v,
            class: we({ dropItemRX: u == null ? void 0 : u.children }),
            onMouseenter: (g) => r(g, u),
            onMouseleave: y[0] || (y[0] = (g) => c(g))
          }, [
            R("div", {
              class: we(l(u)),
              onClick: (g) => o(g, u),
              style: se({ paddingLeft: u.level * 20 + "px" })
            }, [
              ke(H((u == null ? void 0 : u.name) || "-- no name --") + " ", 1),
              he(j(f, {
                class: "dropIcoRX",
                type: "ios-arrow-forward",
                size: 16
              }, null, 512), [
                [ge, u.children && u.children.length > 0]
              ])
            ], 14, hn),
            ((k = u == null ? void 0 : u.children) == null ? void 0 : k.length) > 0 ? he((S(), Z(p, {
              key: 0,
              class: "rightChildRX",
              data: u == null ? void 0 : u.children,
              "path-name": i.pathName
            }, null, 8, ["data", "path-name"])), [
              [ge, m(e) === (u == null ? void 0 : u.path)]
            ]) : ue("", !0)
          ], 42, mn);
        }), 128))
      ]);
    };
  }
}), vn = { class: "groupBoxRX" }, gn = ["onClick"], Ml = /* @__PURE__ */ ce({
  __name: "SideMenuTwoLevel",
  props: {
    data: { default: () => [] },
    pathName: { default: "" },
    fromIcoMenu: { type: Boolean }
  },
  setup(t) {
    const s = Ct(), n = t;
    function e(o) {
      let r = "menuTxtR ";
      return (o == null ? void 0 : o.path) === n.pathName && (r += "active "), r;
    }
    function l(o, r) {
      var p, u, v, k, g, _, w, T, C, B, F, x, L, h;
      (p = o == null ? void 0 : o.preventDefault) == null || p.call(o);
      let c = o == null ? void 0 : o.target;
      if (r && !r.children && !c.classList.contains("active")) {
        s.push(r.path);
        return;
      }
      const i = (u = c == null ? void 0 : c.querySelector) == null ? void 0 : u.call(c, ".dropIcoRX"), y = c.parentNode, f = Yt(y);
      for (let A of f) {
        (k = (v = A == null ? void 0 : A.classList) == null ? void 0 : v.remove) == null || k.call(v, "open");
        const $ = (g = A == null ? void 0 : A.querySelector) == null ? void 0 : g.call(A, ".dropIcoRX");
        (w = (_ = $ == null ? void 0 : $.classList) == null ? void 0 : _.remove) == null || w.call(_, "open");
        const te = (T = A == null ? void 0 : A.querySelectorAll) == null ? void 0 : T.call(A, ".open");
        for (let K of te)
          (B = (C = K == null ? void 0 : K.classList) == null ? void 0 : C.remove) == null || B.call(C, "open");
      }
      (x = (F = y == null ? void 0 : y.classList) == null ? void 0 : F.toggle) == null || x.call(F, "open"), (h = (L = i == null ? void 0 : i.classList) == null ? void 0 : L.toggle) == null || h.call(L, "open");
    }
    return (o, r) => {
      const c = Y("Icon");
      return S(), U("ul", vn, [
        (S(!0), U(be, null, Ce(n.data, (i, y) => (S(), U("li", {
          key: (i == null ? void 0 : i.path) + y,
          class: we({ dropItemRX: i == null ? void 0 : i.children, open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu })
        }, [
          R("div", {
            class: we(e(i)),
            onClick: (f) => l(f, i),
            style: se({ paddingLeft: i.level * 20 + "px" })
          }, [
            j(c, {
              class: "menuIcoL",
              custom: "iconfont " + (i.icon || "icon-r-menu-default")
            }, null, 8, ["custom"]),
            R("span", null, H((i == null ? void 0 : i.name) || "-- no name --"), 1),
            he(j(c, {
              class: we(["dropIcoRX", { open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu }]),
              type: "ios-arrow-forward"
            }, null, 8, ["class"]), [
              [ge, i.children && i.children.length > 0]
            ])
          ], 14, gn),
          i.children ? (S(), Z(yn, {
            key: 0,
            data: i.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : ue("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), bn = { class: "groupBoxRX" }, kn = ["onMouseenter"], wn = ["onClick"], _n = /* @__PURE__ */ ce({
  __name: "SideIcoMenu",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const s = Ct(), n = t, e = E("");
    function l(i) {
      let y = "menuTxtR ";
      return (i == null ? void 0 : i.path) === n.pathName && (y += "active "), y;
    }
    function o(i, y) {
      var p;
      (p = i == null ? void 0 : i.preventDefault) == null || p.call(i);
      let f = i == null ? void 0 : i.target;
      y && !y.children && !f.classList.contains("active") && s.push(y.path);
    }
    function r(i, y) {
      var f;
      (f = i == null ? void 0 : i.preventDefault) == null || f.call(i), e.value = y == null ? void 0 : y.path;
    }
    function c(i) {
      var y;
      (y = i == null ? void 0 : i.preventDefault) == null || y.call(i), e.value = "";
    }
    return (i, y) => {
      const f = Y("Icon");
      return S(), U("ul", bn, [
        (S(!0), U(be, null, Ce(n.data, (p, u) => (S(), U("li", {
          key: (p == null ? void 0 : p.path) + u,
          class: we({ dropItemRX: p.children }),
          onMouseenter: (v) => r(v, p),
          onMouseleave: y[0] || (y[0] = (v) => c(v))
        }, [
          R("div", {
            class: we(l(p)),
            onClick: (v) => o(v, p)
          }, [
            j(f, {
              class: "menuIcoM",
              custom: "iconfont " + (p.icon || "icon-r-menu-default"),
              size: "20"
            }, null, 8, ["custom"])
          ], 10, wn),
          he(j(Ml, {
            class: "rightTwoMenu",
            data: [p],
            pathName: n.pathName,
            fromIcoMenu: ""
          }, null, 8, ["data", "pathName"]), [
            [ge, m(e) === (p == null ? void 0 : p.path)]
          ])
        ], 42, kn))), 128))
      ]);
    };
  }
}), Vn = { class: "menuListR" }, Sn = /* @__PURE__ */ ce({
  __name: "SideMenuPro",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: s }) {
    const n = t, e = s, l = Xt(), o = E(!0), r = E(), c = E(), i = G(() => o.value ? I("r.hideMenu") : I("r.showMenu")), y = G(() => o.value ? "iconfont icon-r-menu-hide" : "iconfont icon-r-menu-open");
    Bl(() => {
      let u = localStorage.getItem("menuDisplayRPro") || "";
      u !== "" ? o.value = JSON.parse(u) : (o.value = !0, localStorage.setItem("menuDisplayRPro", JSON.stringify(!0)));
    }), _e(
      () => l.path,
      (u) => {
        r.value = u, Ie(() => {
          Re(p, 10);
        });
      },
      { immediate: !0 }
    );
    function f() {
      o.value = !o.value, localStorage.setItem("menuDisplayRPro", JSON.stringify(o.value)), e("on-change", o.value);
    }
    function p() {
      var v, k, g, _, w, T, C, B, F, x, L, h, A, $, te, K, z, ee, b, D, J, N, Q, X, me, ye, pe, xe, P, M, ie, ve, Ve, ne, Ae, ze, We, Je, Ue;
      let u = c.value.querySelectorAll(".dropItemRX");
      for (let de of u) {
        const Ne = (k = (v = de == null ? void 0 : de.childNodes[0]) == null ? void 0 : v.querySelector) == null ? void 0 : k.call(v, ".dropIcoRX");
        (g = de == null ? void 0 : de.querySelector) != null && g.call(de, ".active") ? (T = (w = (_ = de == null ? void 0 : de.childNodes[1]) == null ? void 0 : _.classList) == null ? void 0 : w.contains) != null && T.call(w, "rightChildRX") ? (F = (B = (C = de == null ? void 0 : de.childNodes[0]) == null ? void 0 : C.classList) == null ? void 0 : B.contains) != null && F.call(B, "activeR") || (L = de == null ? void 0 : (x = de.childNodes[0].classList).add) == null || L.call(x, "activeR") : ((A = (h = de == null ? void 0 : de.classList) == null ? void 0 : h.contains) != null && A.call(h, "open") || (te = ($ = de.classList).add) == null || te.call($, "open"), Ne && !((z = (K = Ne == null ? void 0 : Ne.classList) == null ? void 0 : K.contains) != null && z.call(K, "open")) && ((b = (ee = Ne.classList).add) == null || b.call(ee, "open"))) : (N = (J = (D = de == null ? void 0 : de.childNodes[1]) == null ? void 0 : D.classList) == null ? void 0 : J.contains) != null && N.call(J, "rightChildRX") ? (me = (X = (Q = de == null ? void 0 : de.childNodes[0]) == null ? void 0 : Q.classList) == null ? void 0 : X.contains) != null && me.call(X, "activeR") && ((pe = de == null ? void 0 : (ye = de.childNodes[0].classList).remove) == null || pe.call(ye, "activeR")) : ((P = (xe = de == null ? void 0 : de.classList) == null ? void 0 : xe.contains) != null && P.call(xe, "open") && !((ie = (M = de == null ? void 0 : de.classList) == null ? void 0 : M.contains) != null && ie.call(M, "fromIcoMenu")) && ((Ve = (ve = de.classList).remove) == null || Ve.call(ve, "open")), (Ae = (ne = Ne == null ? void 0 : Ne.classList) == null ? void 0 : ne.contains) != null && Ae.call(ne, "open") && !((We = (ze = Ne == null ? void 0 : Ne.classList) == null ? void 0 : ze.contains) != null && We.call(ze, "fromIcoMenu")) && ((Ue = (Je = Ne.classList).remove) == null || Ue.call(Je, "open")));
      }
    }
    return (u, v) => {
      const k = Y("Icon");
      return S(), U("div", {
        ref_key: "menuProRef",
        ref: c,
        class: we(["menuBoxRPro", "cannotSelect", { light: u.light }])
      }, [
        he(R("div", Vn, [
          j(Ml, {
            data: n.data,
            pathName: m(r)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ge, m(o)]
        ]),
        he(j(_n, {
          class: "icoMenuR",
          data: u.data,
          pathName: m(r)
        }, null, 8, ["data", "pathName"]), [
          [ge, !m(o)]
        ]),
        j(k, {
          custom: m(y),
          size: 14,
          class: we([{ showIco: !m(o) }, "menuShowHideIco"]),
          title: m(i),
          onClick: f
        }, null, 8, ["custom", "class", "title"])
      ], 2);
    };
  }
}), Cn = ["title"], Fl = /* @__PURE__ */ ce({
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
    const n = s, e = t;
    function l(o) {
      e.disabled || n("click", o);
    }
    return (o, r) => {
      const c = Y("Icon"), i = jt("has");
      return he((S(), U("div", {
        class: we(["tableBtnsG", { disabled: e.disabled }]),
        onClick: l,
        title: e.title || m(I)("r.button")
      }, [
        j(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Cn)), [
        [i, e.has]
      ]);
    };
  }
}), Tn = { class: "contentX" }, Bn = { class: "arrowA" }, zt = /* @__PURE__ */ ce({
  __name: "ShowHidePanel",
  props: /* @__PURE__ */ ra({
    bg: {}
  }, {
    modelValue: { type: Boolean, default: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const s = ua(t, "modelValue"), n = t, e = G(() => s ? "background:" + n.bg || "transparent" : "");
    return (l, o) => {
      const r = Y("Icon");
      return S(), U("div", {
        style: se(m(e))
      }, [
        he(R("div", Tn, [
          Me(l.$slots, "default")
        ], 512), [
          [ge, s.value]
        ]),
        R("div", Bn, [
          R("div", {
            class: "btA",
            onClick: o[0] || (o[0] = (c) => s.value = !s.value)
          }, [
            j(r, {
              type: s.value ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), xn = { class: "contentZ" }, Ln = /* @__PURE__ */ ce({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: s }) {
    const n = t, e = s, l = G({
      get() {
        return n.modelValue;
      },
      set(r) {
        e("update:modelValue", r);
      }
    }), o = G(() => l.value ? "background:" + n.bg : "");
    return (r, c) => (S(), U("div", {
      style: se(m(o))
    }, [
      he(R("div", xn, [
        Me(r.$slots, "default")
      ], 512), [
        [ge, m(l)]
      ])
    ], 4));
  }
}), On = /* @__PURE__ */ ce({
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
    const n = s, e = t;
    let l = !1;
    const o = G({
      get() {
        return e.modelValue;
      },
      set(y) {
        n("update:modelValue", y);
      }
    }), r = G({
      get() {
        return e.open;
      },
      set(y) {
        n("on-toggle", y);
      }
    }), c = G(() => r.value ? "ios-arrow-up" : "ios-arrow-down");
    function i() {
      l || (l = !0, n("on-search", o.value), Re(() => {
        l = !1;
      }, 2e3));
    }
    return (y, f) => {
      const p = Y("Input"), u = Y("icon");
      return S(), U("div", {
        class: "tableSearchV",
        style: se({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Me(y.$slots, "default", {}, () => [
          j(p, {
            modelValue: m(o),
            "onUpdate:modelValue": f[0] || (f[0] = (v) => $e(o) ? o.value = v : null),
            style: se({ width: e.width }),
            search: "",
            onOnSearch: i,
            class: "searchInputC",
            placeholder: e.placeholder || m(I)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        he(R("span", {
          class: "sbt",
          onClick: f[1] || (f[1] = (v) => r.value = !m(r)),
          style: se({ color: e.btnColor })
        }, [
          j(u, {
            type: m(c),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ke(H(m(I)("r.adSearch")), 1)
        ], 4), [
          [ge, e.showBtn]
        ])
      ], 4);
    };
  }
}), Nl = {
  beforeMount(t, s) {
    function n(e) {
      var l;
      if (t.contains(e.target))
        return !1;
      (l = s == null ? void 0 : s.value) == null || l.call(s, e);
    }
    t.__vueClickOutside__ = n, Mt && document.addEventListener("click", n);
  },
  unmounted(t) {
    Mt && document.removeEventListener("click", t.__vueClickOutside__), delete t.__vueClickOutside__;
  }
};
function Dl(t, s, n, e, l = !1) {
  const o = (...r) => Xe.apply(this, r);
  De.call(this, {
    title: t || o("r.info.title"),
    text: s || o("r.info.text"),
    icon: n || "warning",
    onOk: e,
    buttons: [o("r.cancel")],
    closeOnClickOutside: l
  });
}
const In = { class: "tabSetF" }, An = { class: "cannotSelect" }, Pn = { class: "topCheck" }, Kl = /* @__PURE__ */ ce({
  __name: "TableSetting",
  props: {
    modelValue: { default: () => [] },
    sKey: {},
    width: { default: "240px" },
    bg: { default: () => Be().tableSettingBg },
    placement: { default: "bottom-end" },
    defaultCheck: { type: Boolean, default: !1 },
    storage: { default: "localStorage" },
    transfer: { type: Boolean, default: () => Be().tableSettingTransfer },
    eventsEnabled: { type: Boolean, default: () => Be().tableSettingEventsEnabled }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: s }) {
    var h, A, $, te, K;
    const n = s, e = t, l = E(), o = E(), r = E(!0), c = E(!1), i = E(!1), y = E([]), f = G(() => {
      var ee;
      let z = I("r.unknown");
      return ((ee = e.modelValue) == null ? void 0 : ee.length) > y.value.length && (y.value = fe(e.modelValue)), y.value.map((b) => {
        let D = { label: (b == null ? void 0 : b.title) || z };
        return b != null && b.disableShowSetting && (D.disabled = !0), D;
      });
    }), p = G(() => f.value.filter((z) => z == null ? void 0 : z.disabled)), u = G({
      get() {
        var z, ee;
        return (ee = (z = e.modelValue) == null ? void 0 : z.map) == null ? void 0 : ee.call(z, (b) => (b == null ? void 0 : b.title) || I("r.unknown"));
      },
      set(z) {
        let ee = y.value.filter((b) => {
          for (let D of z)
            if (D === (b == null ? void 0 : b.title))
              return !0;
          return !1;
        });
        n("update:modelValue", ee);
      }
    }), v = (K = (te = ($ = (A = (h = St()) == null ? void 0 : h.appContext) == null ? void 0 : A.config) == null ? void 0 : $.globalProperties) == null ? void 0 : te.$i18n) == null ? void 0 : K.locale;
    let k = null;
    Ge(() => {
      let z = I("r.unknown"), ee = x();
      ee ? u.value = JSON.parse(decodeURI(ee)) : e.defaultCheck && (u.value = e.modelValue.filter((b) => b == null ? void 0 : b.showSettingCheck).map((b) => (b == null ? void 0 : b.title) || z)), Ie(function() {
        !l.value || !o.value || (k = new _a(l.value, o.value, {
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
              const J = g(b), { needChange: N } = J;
              if (N) {
                const { height: Q } = J, X = b.instance.popper;
                X.style && (X.style.height = `${Q}px`);
              }
            }
          }
        }));
      }), Re(() => {
        var b;
        i.value = !0, (b = k == null ? void 0 : k.update) == null || b.call(k), Ie(function() {
          i.value = !1;
        });
      }, 0);
    }), xl(function() {
      var z;
      (z = k == null ? void 0 : k.destroy) == null || z.call(k);
    });
    function g(z) {
      var N, Q;
      const { height: ee } = z.popper, b = z.instance.popper, D = window.innerHeight;
      let J = 0;
      if ((N = b.childNodes) != null && N.length)
        for (let X = 0; X < b.childNodes.length; X++)
          J += (Q = b.childNodes[X]) == null ? void 0 : Q.offsetHeight;
      return D < ee - 10 || ee < J ? {
        needChange: !0,
        height: D - 10 < J ? D - 10 : J
      } : { needChange: !1 };
    }
    function _(z) {
      z.length === f.value.length ? (r.value = !1, c.value = !0) : z.length > p.value.length ? (r.value = !0, c.value = !1) : (r.value = !1, c.value = !1);
    }
    _e(() => u.value, _, {
      immediate: !0,
      deep: !0
    });
    function w() {
      i.value && (L() && Dl(I("r.notSave"), "", "warning", C), i.value = !1);
    }
    function T() {
      i.value ? w() : (i.value = !0, Ie(function() {
        var z;
        (z = k == null ? void 0 : k.update) == null || z.call(k);
      }));
    }
    function C() {
      v ? window[e.storage].setItem(e.sKey + "_" + v, encodeURI(JSON.stringify(u.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(u.value))), w();
    }
    function B(z) {
      var ee, b;
      if (i.value) {
        if (e.transfer) {
          const D = o.value;
          if (D === (z == null ? void 0 : z.target) || (ee = D == null ? void 0 : D.contains) != null && ee.call(D, z == null ? void 0 : z.target))
            return;
        }
        (b = z == null ? void 0 : z.preventDefault) == null || b.call(z), w();
      }
    }
    function F() {
      r.value ? c.value = !1 : c.value = !c.value, r.value = !1, c.value ? u.value = f.value.map((z) => z == null ? void 0 : z.label) : u.value = p.value.map((z) => z == null ? void 0 : z.label);
    }
    function x() {
      let z;
      return v ? z = window[e.storage].getItem(e.sKey + "_" + v) : z = window[e.storage].getItem(e.sKey), z;
    }
    function L() {
      var ee;
      let z = x();
      if (z) {
        if (z = JSON.parse(decodeURI(z)), (z == null ? void 0 : z.length) !== ((ee = u.value) == null ? void 0 : ee.length))
          return !0;
        for (let b of z)
          if (u.value.indexOf(b) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (z, ee) => {
      const b = Y("Icon"), D = Y("Checkbox"), J = Y("CheckboxGroup");
      return he((S(), U("div", In, [
        R("div", {
          ref_key: "buttonRef",
          ref: l,
          class: "tabSetBt",
          onClick: T
        }, [
          j(b, {
            type: "md-settings",
            size: "17"
          }),
          R("span", An, H(m(I)("r.tabSetting")), 1)
        ], 512),
        (S(), Z(da, {
          to: "body",
          disabled: !e.transfer
        }, [
          he(R("div", {
            ref_key: "popperRef",
            ref: o,
            class: "tabSetCard",
            style: se({ width: e.width, backgroundColor: e.bg })
          }, [
            R("div", Pn, [
              j(D, {
                indeterminate: m(r),
                modelValue: m(c),
                "onUpdate:modelValue": ee[0] || (ee[0] = (N) => $e(c) ? c.value = N : null),
                onClick: It(F, ["prevent"])
              }, {
                default: le(() => [
                  ke(H(m(I)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              R("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: C
              }, [
                ee[2] || (ee[2] = R("span", { class: "iconfont icon-r-save" }, null, -1)),
                R("span", null, H(m(I)("r.save")), 1)
              ])
            ]),
            j(J, {
              modelValue: m(u),
              "onUpdate:modelValue": ee[1] || (ee[1] = (N) => $e(u) ? u.value = N : null)
            }, {
              default: le(() => [
                (S(!0), U(be, null, Ce(m(f), (N, Q) => (S(), Z(D, {
                  class: "setItem",
                  label: N && N.label,
                  key: "tabSet_" + e.sKey + Q,
                  disabled: N && N.disabled
                }, null, 8, ["label", "disabled"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ], 4), [
            [ge, m(i)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [m(Nl), B]
      ]);
    };
  }
});
function Rn(t) {
  return t.replace(/_(\w)/g, function(s, n) {
    return n.toUpperCase();
  });
}
function zi(t) {
  let s = document.createElement("div");
  return s.textContent !== void 0 ? s.textContent = t : s.innerText = t, s.innerHTML;
}
function Ui(t) {
  let s = document.createElement("div");
  return s.innerHTML = t, s.innerText || s.textContent;
}
function pl(t) {
  return new Promise((s) => {
    let n = new FileReader();
    n.readAsDataURL(t), n.onloadend = () => {
      s(n.result);
    };
  });
}
function zl(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function rt(t) {
  return q(t) === "String" && t.indexOf("image") > -1;
}
function ml(t) {
  const s = zl(t);
  let n = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(s) > -1 ? n = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(s) > -1 ? n = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(s) > -1 ? n = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(s) > -1 ? n = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(s) > -1 ? n = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(s) > -1 && (n = "ios-videocam"), n;
}
function $n(t, s) {
  let n = document.createElement("a");
  n.href = s, n.download = t, Mn(n);
}
function Mn(t) {
  let s = document.createEvent("MouseEvents");
  s.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(s);
}
function Ut({
  group: t,
  condition: s,
  pathKey: n,
  childKey: e = "children",
  path: l = []
}) {
  if (t && ma(t)) {
    if (ha(s)) {
      if (at(t)) {
        let o = t, r = fe(l);
        if (s(o))
          return n && o[n] && r.push(o[n]), r;
        if (o[e] && !Pe(o[e])) {
          n && o[n] && r.push(o[n]);
          let c = Ut({
            group: o[e],
            condition: s,
            pathKey: n,
            childKey: e,
            path: r
          });
          if (!Pe(c))
            return c;
        }
      } else if (Array.isArray(t))
        for (let o of t) {
          let r = fe(l);
          if (s(o))
            return n && o[n] ? r.push(o[n]) : r.push(String(t.indexOf(o))), r;
          if (o[e] && o[e].length > 0) {
            n && o[n] ? r.push(o[n]) : r.push(String(t.indexOf(o)));
            let c = Ut({
              group: o[e],
              condition: s,
              pathKey: n,
              childKey: e,
              path: r
            });
            if (!Pe(c))
              return c;
          }
        }
    } else if (Array.isArray(t))
      for (let o of t) {
        let r = fe(l);
        if (o === s)
          return r.push(String(t.indexOf(o))), r;
      }
  }
  return [];
}
function Fn(t, s = 12) {
  if (q(t) === "String" && t.length > 0) {
    let n = document.createElement("span");
    n.style.fontSize = s + "px", n.style.fontFamily = "inherit", n.innerHTML = t, n.style.opacity = "0", n.style.position = "fixed", n.style.top = "3000px", document.body.append(n);
    const e = n.clientWidth;
    return document.body.removeChild(n), e;
  }
  return 0;
}
function Ei(t) {
  return t === "" ? null : t;
}
function Gi(t) {
  var s;
  t = t || window.Event, t != null && t.stopPropagation ? (s = t.stopPropagation) == null || s.call(t) : t && (t.cancelBubble = !0);
}
let ut = !1;
function Et({
  height: t,
  width: s = 416,
  title: n,
  content: e,
  onOk: l,
  onCancel: o,
  onClose: r,
  okText: c,
  cancelText: i,
  noWarnIcon: y,
  footerAlign: f,
  cancelBt: p = !0
}) {
  const u = (...w) => Xe.apply(this, w);
  let k = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", g = q(e) === "String";
  const _ = typeof e == "function";
  Qe.warning({
    width: s,
    footerHide: !0,
    render: () => Le(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: k
        }
      },
      [
        Le(
          "div",
          {
            class: "containerN"
          },
          [
            Le(
              "div",
              {
                class: "titleN"
              },
              [
                Le("span", n || u("r.info.title")),
                Le(
                  Ot,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      ut || (Qe.remove(), r && q(r) === "Function" && r());
                    }
                  },
                  () => Le("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            Le(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: g ? "center" : "left"
                }
              },
              [
                Le("i", {
                  class: g && !y ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Le("div", { class: "msgBoxConO" }, _ ? [e(Le)] : e || u("r.info.text"))
              ]
            ),
            Le(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: f || "center"
                }
              },
              [
                Le(
                  Ot,
                  {
                    class: "okBtN",
                    onClick(w) {
                      var T, C, B, F, x, L, h, A, $;
                      if (l && typeof l == "function") {
                        const te = l();
                        if (te && q(te) === "Promise") {
                          ut = !0;
                          const K = (w == null ? void 0 : w.currentTarget) || (w == null ? void 0 : w.target);
                          K && ((C = (T = K.classList) == null ? void 0 : T.add) == null || C.call(T, "ivu-btn-loading"), (F = (B = K.nextSibling) == null ? void 0 : B.setAttribute) == null || F.call(B, "disabled", "disabled"), ($ = (A = ((h = (L = (x = K.parentElement) == null ? void 0 : x.parentElement) == null ? void 0 : L.querySelector) == null ? void 0 : h.call(L, ".titleN .closeN")).classList) == null ? void 0 : A.add) == null || $.call(A, "disabled")), Promise.resolve(te).then(() => {
                            ut = !1, Qe.remove();
                          }).catch(() => {
                            ut = !1, Qe.remove();
                          });
                        } else
                          Qe.remove();
                      }
                    }
                  },
                  () => [
                    Le("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Le("span", c || u("r.confirm"))
                  ]
                ),
                Le(
                  Ot,
                  {
                    class: ["cancelBtN", !p && "hide"],
                    onClick() {
                      ut || (Qe.remove(), q(o) === "Function" && o && o());
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
let tt = 0, pt = document.createElement("div");
pt.setAttribute("class", "spinModal");
pt.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(pt);
};
function hl(t) {
  t ? pt.classList.add("show") : pt.classList.remove("show");
}
function Ul(t) {
  let s = tt;
  t ? tt++ : tt > 0 && tt--, s !== tt && (tt === 0 ? hl(!1) : s === 0 && hl(!0));
}
const Nn = window.location.origin;
let Vt = null;
const yl = (...t) => Xe.apply(Vt, t);
let Ee = Rt.create({
  baseURL: Nn,
  withCredentials: !0
  // 允许携带cookie
});
function Dn() {
  console.info(
    "store为空，请在安装插件时传入store实例，vuex：app.use(plugRQw,{store})，Pinia：app.use(plugRQw,{useStore})"
  );
}
Ee.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function vl() {
  var t, s;
  if (Ee.store)
    if (typeof Ee.store == "function") {
      const n = Ee.store();
      n.logout && n.logout();
    } else
      (s = (t = Ee.store) == null ? void 0 : t.dispatch) == null || s.call(t, "logout");
  else
    Dn();
}
Ee.interceptors.response.use(
  (t) => {
    var s, n;
    return Vt && (((s = t == null ? void 0 : t.data) == null ? void 0 : s.code) === 403 || ((n = t == null ? void 0 : t.data) == null ? void 0 : n.code) === 409) && Et({
      content: yl("r.http." + t.data.code),
      onOk: vl
    }), t;
  },
  (t) => {
    var s, n;
    return Vt && (((s = t == null ? void 0 : t.response) == null ? void 0 : s.status) === 403 || ((n = t == null ? void 0 : t.response) == null ? void 0 : n.status) === 409) && Et({
      content: yl("r.http." + t.response.status),
      onOk: vl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function Ye(t, s, n, e) {
  e && e.spin && Ul(!1);
  let l = !0, o = t && t.data;
  if (o) {
    n = n || [];
    for (let r of n)
      o = o[r], l = l && o;
    return l ? o : (s && console.warn(s), !1);
  }
  return s && console.warn(s), !1;
}
function Kn(t, s, n, e, l, o, r) {
  return new Promise((c, i) => {
    switch (t) {
      case "get":
        Ee.get(s, { params: n }).then((f) => {
          let p = Ye(f, e, l, o);
          p ? c(p) : i(f);
        }).catch((f) => {
          Ye({}, e, l, o), i(f);
        });
        break;
      case "delete":
        let y = r ? "params" : "data";
        Ee.delete(s, { [y]: n }).then((f) => {
          let p = Ye(f, e, l, o);
          p ? c(p) : i(f);
        }).catch((f) => {
          Ye({}, e, l, o), i(f);
        });
        break;
      case "post":
        Ee.post(s, n, o).then((f) => {
          let p = Ye(f, e, l, o);
          p ? c(p) : i(f);
        }).catch((f) => {
          Ye({}, e, l, o), i(f);
        });
        break;
      case "put":
        Ee.put(s, n, o).then((f) => {
          let p = Ye(f, e, l, o);
          p ? c(p) : i(f);
        }).catch((f) => {
          Ye({}, e, l, o), i(f);
        });
        break;
    }
  });
}
function ht(t, s, n = {}, e, l, o, r) {
  return new Promise((c, i) => {
    var y;
    if (s) {
      o && o.spin && Ul(!0);
      let f = s;
      if (window && window.hasOwnProperty("g")) {
        const v = window.g;
        let k = Object.keys(v).filter((g) => {
          var _;
          return ((_ = g == null ? void 0 : g.indexOf) == null ? void 0 : _.call(g, "URL")) > -1;
        }).map((g) => {
          var _;
          return (_ = g.replace) == null ? void 0 : _.call(g, "URL", "");
        });
        for (let g of k) {
          let _ = new RegExp("^/" + g + "(?=/.*$)", "i");
          if (_.test(s) && v[g + "URL"]) {
            f = v[g + "URL"] + s.replace(_, "");
            break;
          }
        }
      }
      let p;
      if (((y = o == null ? void 0 : o.headers) == null ? void 0 : y["Content-Type"]) === "multipart/form-data")
        p = n;
      else if (n && !Pe(n))
        if (Array.isArray(n)) {
          p = [];
          for (let v of n)
            (v || v === 0 || v === !1 || v === "" && o && !o.noEmptyStr) && p.push(v);
        } else {
          p = {};
          for (let v in n)
            n.hasOwnProperty(v) && (n[v] || n[v] === 0 || n[v] === !1 || n[v] === "" && o && !o.noEmptyStr) && (p[v] = n[v]);
        }
      let u = t.toLowerCase();
      Kn(u, f, p, e, l, o, r).then((v) => {
        c(v);
      }).catch((v) => {
        i(v);
      });
    } else
      console.error("没有请求地址:url"), i("没有请求地址:url");
  });
}
const He = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(t, s) {
    Ee.store = t, Vt = s.config.globalProperties;
  },
  post(t, s, n, e, l) {
    return new Promise((o, r) => {
      ht("post", t, s, n, e, l).then((c) => {
        o(c);
      }).catch((c) => {
        r(c);
      });
    });
  },
  put(t, s, n, e, l) {
    return new Promise((o, r) => {
      ht("put", t, s, n, e, l).then((c) => {
        o(c);
      }).catch((c) => {
        r(c);
      });
    });
  },
  get(t, s, n, e, l) {
    return new Promise((o, r) => {
      ht("get", t, s, n, e, l).then((c) => {
        o(c);
      }).catch((c) => {
        r(c);
      });
    });
  },
  delete(t, s, n, e, l, o = !0) {
    return new Promise((r, c) => {
      ht("delete", t, s, n, e, l, o).then((i) => {
        r(i);
      }).catch((i) => {
        c(i);
      });
    });
  },
  all: Rt.all,
  spread: Rt.spread,
  config: Ee
}, zn = {
  key: 0,
  class: "pageTotal"
}, Un = {
  key: 1,
  class: "pageProSize"
}, El = /* @__PURE__ */ ce({
  __name: "PagePro",
  props: {
    modelValue: { default: 1 },
    total: { default: 0 },
    pageSize: { default: 10 },
    size: { default: "default" },
    pageSizeOpts: { default: () => {
      var t;
      return ((t = Be()) == null ? void 0 : t.pageSizes) || [10, 20, 50, 100];
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Be()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Be()) == null ? void 0 : t.pageShowSizer;
    } },
    transfer: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change", "on-page-size-change"],
  setup(t, { emit: s }) {
    var u;
    const n = s, e = E(), l = t, o = ((u = Be == null ? void 0 : Be()) == null ? void 0 : u.fontSizeBase) || 14, r = E(16), c = G({
      get() {
        return l.modelValue;
      },
      set(v) {
        n("update:modelValue", v), n("on-change", v);
      }
    }), i = G({
      get() {
        return l.pageSize;
      },
      set(v) {
        n("on-page-size-change", v), c.value !== 1 && (c.value = 1);
      }
    }), y = G(() => {
      const v = Fn(String(l.total || 0), o) + r.value + 2;
      return v < 32 ? 32 : v;
    });
    _e(
      y,
      (v) => {
        Ie(function() {
          p(v);
        });
      },
      { immediate: !0 }
    );
    function f() {
      var w, T, C;
      const v = (C = (T = (w = e.value) == null ? void 0 : w.$el) == null ? void 0 : T.querySelector) == null ? void 0 : C.call(T, "input");
      if (!v)
        return 16;
      const k = window.getComputedStyle(v), g = k == null ? void 0 : k.paddingLeft, _ = k == null ? void 0 : k.paddingRight;
      return !g || !_ ? 16 : Number(g.replace("px", "")) + Number(_.replace("px", ""));
    }
    function p(v) {
      var g, _, w;
      const k = (w = (_ = (g = e.value) == null ? void 0 : g.$el) == null ? void 0 : _.querySelector) == null ? void 0 : w.call(_, "input");
      k != null && k.style && (k.style.width = `${v}px`);
    }
    return Ge(() => {
      r.value = f();
    }), (v, k) => {
      const g = Y("Page"), _ = Y("Option"), w = Y("Select");
      return S(), U("div", {
        class: we(["pagePro", { pageProDefault: l.size === "default" }])
      }, [
        l.showTotal ? (S(), U("span", zn, H(m(I)("r.total") + " ") + H(l.total) + H(" " + m(I)("r.items")), 1)) : ue("", !0),
        j(g, {
          ref_key: "pageRef",
          ref: e,
          modelValue: m(c),
          "onUpdate:modelValue": k[0] || (k[0] = (T) => $e(c) ? c.value = T : null),
          "page-size": m(i),
          total: l.total,
          size: l.size,
          "page-size-opts": l.pageSizeOpts,
          disabled: l.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        l.showSizer ? (S(), U("div", Un, [
          j(w, {
            modelValue: m(i),
            "onUpdate:modelValue": k[1] || (k[1] = (T) => $e(i) ? i.value = T : null),
            size: l.size,
            transfer: l.transfer,
            disabled: l.disabled
          }, {
            default: le(() => [
              (S(!0), U(be, null, Ce(l.pageSizeOpts, (T) => (S(), Z(_, {
                value: T,
                key: T
              }, {
                default: le(() => [
                  ke(H(T) + " " + H(m(I)("r.page")), 1)
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
}), En = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, Gn = { class: "topBtn" }, Hn = { class: "tableContainer growFlexItem" }, Wn = { class: "fullHeight relativeBox" }, jn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, qn = { class: "pageContainer" }, Xn = 300, Gt = /* @__PURE__ */ ce({
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
      return (t = Be()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Be()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Be()) == null ? void 0 : t.pageShowSizer;
    } },
    pageSize: { default: 10 },
    pageComponentSize: { default: "default" },
    noElevator: { type: Boolean, default: !1 }
  },
  emits: ["on-selection-change", "on-data-change"],
  setup(t, { expose: s, emit: n }) {
    var xe;
    const e = n;
    ({ ...ga });
    const l = t, o = ((xe = Be()) == null ? void 0 : xe.pageSizes) || [10, 20, 50, 100], r = E(l.data), c = E(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || l.pageSize
    ), i = E(1), y = E(0);
    let f = [], p, u, v = l.orderKey, k = l.orderDefault;
    const g = G(() => {
      for (let P of l.columns)
        if (P != null && P.fixed)
          return !0;
      return !1;
    }), _ = G(() => l.selectionFixed || g.value), w = G(() => {
      let P = {
        ...l.searchData,
        current: i.value,
        size: c.value
      };
      return l.sortable === "custom" && (l.orderKeyFormat === "underline" ? P[k] = Al(v) : l.orderKeyFormat === "camelcase" && (P[k] = Rn(v))), P;
    }), T = G(() => {
      let P = l.columns.filter((M) => M && M.type !== "selection");
      if (l.selection || l.radio) {
        let M;
        l.radio ? M = {
          title: " ",
          width: 65,
          render: (ie, ve) => Le(ba, {
            modelValue: ve.row.btChecked
          })
        } : M = {
          type: "selection",
          width: 60
        }, l.selectionFixed && (M.fixed = l.selectionFixed), P.unshift(M);
      }
      return P.forEach((M) => {
        var ie;
        M && (l.sortable === "custom" ? M.key && M.sortable !== !0 && M.sortable !== !1 && (M.sortable = "custom") : M.sortable = !1, M.align || (M.align = ((ie = Be()) == null ? void 0 : ie.btTablePageAlign) || "center"));
      }), P.forEach((M) => {
        M != null && M.key && M.render === void 0 && (M.tooltip ? M.render = Rl(M.key, l.tableEmptyTdHandle) : M.render = (ie, ve) => {
          let Ve = "";
          return M != null && M.key && (Ve = ve.row[M.key]), l.tableEmptyTdHandle ? Le("span", Ve === "" ? "--" : Ve ?? "--") : Le("span", Ve);
        });
      }), P;
    }), C = G({
      get() {
        return r.value.map((P, M) => Object.assign({}, P, {
          btKey: "bt-" + M,
          btChecked: !!P.btChecked
        }));
      },
      set(P) {
        r.value = P;
      }
    }), B = G(() => f.map((P) => P == null ? void 0 : P.id)), F = G(() => f.map((P) => P == null ? void 0 : P.btKey)), x = E();
    _e(() => l.searchData, L, { deep: !0 }), _e(
      () => l.orderDefault,
      (P) => {
        k = P;
      }
    ), _e(
      () => l.orderKey,
      (P) => {
        v = P;
      }
    );
    function L() {
      i.value = 1, pe();
    }
    function h() {
      l.initData && pe();
    }
    function A(P) {
      r.value.unshift(fe(P)), Re(() => {
        var M, ie;
        (ie = (M = x.value) == null ? void 0 : M.clickCurrentRow) == null || ie.call(M, 0);
      }, 100);
    }
    function $(P, M, ie) {
      let ve = null;
      if (M ? ve = u : typeof M == "number" && (ve = M), ve !== null) {
        let Ve = r.value[ve];
        for (let ne in P)
          P.hasOwnProperty(ne) && (Ve[ne] = P[ne]);
        ie && Re(() => {
          var ne, Ae;
          (Ae = (ne = x.value) == null ? void 0 : ne.clickCurrentRow) == null || Ae.call(ne, ve);
        }, 10);
      }
    }
    function te(P) {
      r.value.splice(P, 1), Re(() => {
        var M, ie;
        (ie = (M = x.value) == null ? void 0 : M.clickCurrentRow) == null || ie.call(M, 0);
      }, 100);
    }
    function K(P, M) {
      var ie, ve;
      P.btChecked && l.radio || (l.selection || l.radio) && l.rowClickSelect && ((ve = (ie = x.value) == null ? void 0 : ie.toggleSelect) == null || ve.call(ie, M));
    }
    function z(P, M) {
      p = M.btKey, u = Number(M.btKey.split("-")[1]), l.radio && (r.value[u].btChecked = !0);
    }
    function ee(P) {
      if (l.radio)
        for (let M of C.value)
          M != null && M.btKey && M.btKey !== p && (r.value[Number(M.btKey.split("-")[1])].btChecked = !1);
      f = P, e("on-selection-change", P);
    }
    function b() {
      return fe(f);
    }
    function D() {
      pe();
    }
    function J(P) {
      c.value = P, localStorage.setItem("btPageSize", String(P)), i.value === 1 && pe();
    }
    function N({ key: P, order: M }) {
      k === "normal" ? (v = l.orderKey, k = l.orderDefault) : (v = P, k = M), i.value = 1, ye();
    }
    function Q(P) {
      var ie, ve, Ve, ne, Ae, ze, We, Je;
      const M = P;
      if (typeof M == "number")
        X(), u = M, p = (ve = (ie = C.value) == null ? void 0 : ie[M]) == null ? void 0 : ve.btKey, (ne = (Ve = x.value) == null ? void 0 : Ve.clickCurrentRow) == null || ne.call(Ve, M);
      else if (Array.isArray(M)) {
        if (l.radio || !l.selection)
          return;
        X();
        for (let Ue of M)
          (ze = (Ae = x.value) == null ? void 0 : Ae.clickCurrentRow) == null || ze.call(Ae, Ue);
      } else if (typeof M == "function")
        for (let Ue = 0; Ue < C.value.length; Ue++) {
          const de = C.value[Ue];
          M(de) && ((Je = (We = x.value) == null ? void 0 : We.clickCurrentRow) == null || Je.call(We, Ue));
        }
    }
    function X() {
      var P, M;
      if (l.radio) {
        if (F.value.length > 0 && C.value.length > 0) {
          let ie = F.value[0].split("-")[1];
          C.value[ie].btChecked = !1;
        }
      } else
        (M = (P = x.value) == null ? void 0 : P.selectAll) == null || M.call(P, !1);
      f.length > 0 && (f = [], e("on-selection-change", [])), p = null, u = null;
    }
    function me() {
      r.value = [], X(), i.value = 1, y.value = 0;
    }
    function ye(P, M, ie) {
      return new Promise((ve) => {
        P && (k = P), M && (v = M), l.url ? He[l.method](l.url, w.value, "", [], { spin: l.getDataLoading }).then((Ve) => {
          var Ae, ze;
          let ne;
          ie || X(), typeof l.dataHandler == "function" ? ne = l.dataHandler(Ve) : ne = Ve, ne.data ? (ne.data.records || ne.data.records === null ? r.value = ne.data.records || [] : ne.data.page ? (ne.data.page.records || ne.data.page.records === null) && (r.value = ne.data.page.records || []) : ne.data.data ? (ne.data.data.records || ne.data.data.records === null) && (r.value = ne.data.data.records || []) : r.value = ne.data, y.value = ((Ae = ne.data.page) == null ? void 0 : Ae.total) || ((ze = ne.data.data) == null ? void 0 : ze.total) || ne.data.total || ne.total || 0, y.value === 0 && i.value > 1 && r.value && r.value.length === 0 ? i.value = 1 : i.value > 1 && y.value <= (i.value - 1) * c.value && (i.value--, Ie(function() {
            ye(P, M);
          })), e("on-data-change", ne), ve(ne)) : (console.warn("请求返回数据有误，无法使用"), me(), e("on-data-change", ne));
        }).catch((Ve) => {
          X(), me(), e("on-data-change", Ve);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function pe(P, M, ie) {
      l.radio && (P || l.rowClickNum !== -1) ? ye(M, ie, P).then(() => {
        r.value.length > 0 && Re(() => {
          var ve, Ve, ne, Ae;
          P ? (Ve = (ve = x.value) == null ? void 0 : ve.clickCurrentRow) == null || Ve.call(ve, u || 0) : (Ae = (ne = x.value) == null ? void 0 : ne.clickCurrentRow) == null || Ae.call(ne, l.rowClickNum);
        }, 10);
      }) : ye();
    }
    return Ge(h), s({
      dataS: C,
      selectedIds: B,
      addRow: A,
      setRowData: $,
      deleteRow: te,
      getSelected: b,
      selectRow: Q,
      clearSelect: X,
      clearTableData: me,
      getTableData: ye,
      getDataAndClickRow: pe
    }), (P, M) => {
      const ie = Y("Table"), ve = Y("Page");
      return S(), U("div", En, [
        he(R("div", Gn, [
          Me(P.$slots, "tableSetting"),
          Me(P.$slots, "topMsg"),
          Me(P.$slots, "topBtnGroup")
        ], 512), [
          [ge, l.showTopRow]
        ]),
        R("div", Hn, [
          R("div", Wn, [
            R("div", jn, [
              j(ie, ot({
                ref_key: "tableRef",
                ref: x
              }, P.$attrs, {
                height: m(_) && Xn || null,
                class: { noBorderTable: l.noBorderTable, fullHeightTable: !m(_), lightHeadO: l.lightHead },
                columns: m(T),
                data: m(C),
                "highlight-row": l.radio || l.highlightRow,
                onOnSelect: z,
                onOnSelectionChange: ee,
                onOnSortChange: N,
                onOnRowClick: K
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        he(R("div", qn, [
          l.usePagePro ? (S(), Z(El, {
            key: 0,
            modelValue: m(i),
            "onUpdate:modelValue": M[0] || (M[0] = (Ve) => $e(i) ? i.value = Ve : null),
            total: m(y),
            showTotal: l.showTotal,
            pageSize: m(c),
            showSizer: l.showSizer,
            pageSizeOpts: m(o),
            size: l.pageComponentSize,
            onOnChange: D,
            onOnPageSizeChange: J
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (S(), Z(ve, {
            key: 1,
            modelValue: m(i),
            "onUpdate:modelValue": M[1] || (M[1] = (Ve) => $e(i) ? i.value = Ve : null),
            total: m(y),
            pageSize: m(c),
            pageSizeOpts: m(o),
            showSizer: l.showSizer,
            showTotal: l.showTotal,
            size: l.pageComponentSize,
            showElevator: !l.noElevator,
            onOnChange: D,
            onOnPageSizeChange: J
          }, null, 8, ["modelValue", "total", "pageSize", "pageSizeOpts", "showSizer", "showTotal", "size", "showElevator"]))
        ], 512), [
          [ge, !l.noPage]
        ])
      ], 512);
    };
  }
}), Gl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = G({
      get() {
        var f;
        return (f = e.modelValue) == null ? void 0 : f.key;
      },
      set(f) {
        let p = {
          key: f,
          val: null
        };
        l.value && l.value !== f && (p.beforeKey = l.value), n("update:modelValue", p), n("on-change", p);
      }
    }), o = G({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(f) {
        n("update:modelValue", {
          key: l.value,
          val: f
        });
      }
    }), r = G(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), c = G(() => ({
      width: typeof e.itemWidth == "number" ? e.itemWidth + "px" : e.itemWidth
    }));
    function i(f) {
      f != null && f.target && f.target.value !== void 0 && y({
        key: l.value,
        val: f.target.value
      });
    }
    const y = qt((f) => {
      n("on-change", f);
    }, 500);
    return (f, p) => {
      const u = Y("Option"), v = Y("Select"), k = Y("Input");
      return S(), U("div", null, [
        j(v, {
          modelValue: m(l),
          "onUpdate:modelValue": p[0] || (p[0] = (g) => $e(l) ? l.value = g : null),
          style: se(m(r)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: le(() => [
            (S(!0), U(be, null, Ce(e.selectOption, (g, _) => (S(), Z(u, {
              value: g == null ? void 0 : g.val,
              label: g == null ? void 0 : g.label,
              key: "selectInputOp" + (g == null ? void 0 : g.value) + _,
              style: se({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        j(k, {
          modelValue: m(o),
          "onUpdate:modelValue": p[1] || (p[1] = (g) => $e(o) ? o.value = g : null),
          placeholder: e.placeholder || m(I)("r.pInput"),
          style: se(m(c)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: i
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
let Ht = { securityJsCode: "", key: "" };
function Jn({ securityJsCode: t, key: s }) {
  Ht.securityJsCode = t, Ht.key = s;
}
function Yn(t) {
  return Ht[t];
}
const Hl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = G({
      get() {
        let B;
        return e.modelValue ? e.modelValue.name ? B = fe(e.modelValue) : B = {
          ...e.modelValue,
          name: null
        } : B = {
          name: null
        }, B;
      },
      set(B) {
        n("update:modelValue", fe(B));
      }
    }), o = G(() => yt(e.width) ? e.width + "px" : e.width), r = G(() => yt(e.height) ? e.height + "px" : e.height ? e.height : yt(e.width) ? e.width * 0.66 + "px" : "200px"), c = G(() => ({
      width: o.value,
      position: "relative"
    })), i = G(() => ({
      width: o.value,
      height: r.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    _e(
      () => e.modelValue,
      (B) => {
        if (B && B.lng && B.lat) {
          if (!g || !_)
            return;
          T({
            lng: B.lng,
            lat: B.lat,
            name: B.name
          });
        }
      }
    );
    const y = "mapId" + Math.floor(Math.random() * 1e9), f = E(null), p = E(null);
    let u;
    function v() {
      p.value && p.value.clientHeight < 10 || !p.value ? Re(v, 300) : Re(w, 100);
    }
    let k, g, _;
    function w() {
      dl.load({
        key: Yn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((B) => {
        k = B, g = new k.Map(y).on("complete", () => {
          var x, L, h, A;
          _ = new k.Geocoder(), (x = e.modelValue) != null && x.lng && ((L = e.modelValue) != null && L.lat) && T({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const F = (A = (h = f.value) == null ? void 0 : h.$el) == null ? void 0 : A.children;
          F && F.length > 1 && new k.AutoComplete({
            input: F[1]
          }).on("select", ($) => {
            var te, K, z;
            (te = $ == null ? void 0 : $.poi) != null && te.name && ((K = $.poi.location) != null && K.lng && ((z = $.poi.location) != null && z.lat) ? (T({
              name: $.poi.name,
              lng: $.poi.location.lng,
              lat: $.poi.location.lat
            }), l.value = {
              name: $.poi.name,
              lng: $.poi.location.lng,
              lat: $.poi.location.lat
            }) : g == null || g.setCity($.poi.name, () => {
              let ee = g.getCenter();
              T({
                name: $.poi.name,
                lng: ee.lng,
                lat: ee.lat
              }), l.value = {
                name: $.poi.name,
                lng: ee.lng,
                lat: ee.lat
              };
            })), n("on-change", l.value);
          }), g == null || g.on("hotspotclick", ($) => {
            T({
              name: $.name,
              lng: $.lnglat.lng,
              lat: $.lnglat.lat
            }), l.value = {
              name: $.name,
              lng: $.lnglat.lng,
              lat: $.lnglat.lat
            };
          });
        });
      });
    }
    function T({ lng: B, lat: F, name: x }) {
      g == null || g.clearMap();
      let L = new k.LngLat(B, F), h = new k.Marker({
        map: g,
        position: L,
        draggable: !0
      });
      g == null || g.add(h), C(B, F), h.on("dragend", () => {
        let A = h.getPosition();
        l.value = {
          name: x || null,
          lng: A.lng,
          lat: A.lat
        }, C(B, F);
      }), h.on("click", (A) => {
        var $, te;
        u && u.open(g, (te = ($ = A == null ? void 0 : A.target) == null ? void 0 : $.getPosition) == null ? void 0 : te.call($));
      }), g == null || g.setFitView();
    }
    function C(B, F) {
      _ == null || _.getAddress([B, F], (x, L) => {
        x === "complete" && L.info === "OK" && L.regeocode && L.regeocode.formattedAddress ? u = new k.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + L.regeocode.formattedAddress + "</div>",
          offset: new k.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (u = null, console.warn("地图获取位置信息失败", L));
      });
    }
    return Ge(v), Tl(() => {
      var B;
      g && (g.destroy(), (B = dl) == null || B.reset(), g = null, _ = null, u = null);
    }), (B, F) => (S(), U("div", {
      style: se(m(c)),
      class: "containerIKJ"
    }, [
      j(m(ka), {
        ref_key: "mapInputRef",
        ref: f,
        modelValue: m(l).name,
        "onUpdate:modelValue": F[0] || (F[0] = (x) => m(l).name = x),
        class: we({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || m(I)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      R("div", {
        style: se(m(i)),
        ref_key: "mapRef",
        ref: p,
        id: y
      }, null, 4)
    ], 4));
  }
});
var Sl;
const Wl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = E([]), o = G({
      get() {
        let f = e.modelValue;
        return Array.isArray(f) ? fe(f) : yt(f) ? Ut({
          group: l.value,
          condition: (p) => (p == null ? void 0 : p.value) === f,
          pathKey: "value"
        }) : Ll(f) ? f.split(e.separator) : [];
      },
      set(f) {
        if (e.onlyLastVal)
          Pe(f) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", gt(f));
        else {
          if (ft(e.modelValue, f))
            return;
          n("update:modelValue", fe(f));
        }
      }
    });
    function r() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      He.get(e.url).then((f) => {
        var u;
        let p = null;
        (u = f == null ? void 0 : f.data) != null && u.records ? p = f.data.records : f != null && f.data ? p = f.data : f && (p = f), p ? (typeof e.optionFilter == "function" && q(e.optionFilter) === "Function" && (p = e.optionFilter(p)), l.value = c(p)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function c(f) {
      let p = [];
      for (let u of f) {
        let v = {
          value: u[e.optionVal],
          label: u[e.optionLabel]
        };
        u != null && u.children && !Pe(u.children) && (v.children = c(u.children)), p.push(v);
      }
      return p;
    }
    function i(f) {
      return e.onlyLastLabel ? gt(f) : f.join(e.separator);
    }
    function y(f, p) {
      let u = "";
      Pe(p) || (u = p.map((v) => v == null ? void 0 : v.label).join(e.separator)), n("on-label-change", u);
    }
    return Ge(r), (f, p) => {
      const u = Y("Cascader");
      return S(), Z(u, {
        data: m(l),
        modelValue: m(o),
        "onUpdate:modelValue": p[0] || (p[0] = (v) => $e(o) ? o.value = v : null),
        onOnChange: y,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": i,
        placeholder: e.placeholder || m(I)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), jl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = G({
      get() {
        if (e.modelValue && (typeof e.modelValue == "string" || typeof e.modelValue == "number")) {
          let o = String(e.modelValue).trim();
          if (/^\d+$/.test(o)) {
            let c = o.substring(0, 2) + "0000000000", i = o.substring(0, 4) + "00000000";
            return [c, i, o];
          }
          return o.indexOf(e.separator) !== -1 ? o.split(e.separator) : [o];
        } else return Array.isArray(e.modelValue) ? fe(e.modelValue) : [];
      },
      set(o) {
        if (Pe(o))
          n("update:modelValue", null), n("on-name-change", null);
        else {
          let r = gt(o), c = "", i = "";
          if (r && (c = r.code), c && c.length < 12) {
            let y = [...c];
            for (; y.length < 12; )
              y.push(0);
            c = y.join("");
          }
          if (Array.isArray(o) && (i = o.map((y) => y == null ? void 0 : y.name).join(e.separator)), c) {
            if (c === e.modelValue)
              return;
            n("update:modelValue", c);
          }
          i && n("on-name-change", i);
        }
      }
    });
    return (o, r) => (S(), Z(m(Va), ot(o.$attrs, {
      class: "alCascaderMC",
      modelValue: m(l),
      "onUpdate:modelValue": r[0] || (r[0] = (c) => $e(l) ? l.value = c : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || m(I)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let qe = 0;
function ql(t, s, n, e) {
  var l, o, r;
  e && (e.innerHTML = ((l = t[s]) == null ? void 0 : l.name) ?? "", (o = t[s]) != null && o.name ? e.classList.contains("hide") && e.classList.remove("hide") : e.classList.contains("hide") || e.classList.add("hide")), n && (n.src = ((r = t[s]) == null ? void 0 : r.src) ?? t[s], qe = s);
}
function gl(t, s, n, e) {
  if (t) {
    let l;
    qe - 1 < 0 ? l = s.length - 1 : l = qe - 1, ql(s, l, n, e);
  }
}
function bl(t, s, n, e) {
  if (t) {
    let l;
    qe + 1 > s.length - 1 ? l = 0 : l = qe + 1, ql(s, l, n, e);
  }
}
function dt(t, s = 0) {
  var w, T, C, B, F, x, L;
  const n = (...h) => Xe.apply(this, h), e = n("r.closePreview"), l = n("r.fullImg"), o = n("r.last"), r = n("r.next");
  let c, i, y;
  qe = s;
  const f = Array.isArray(t);
  f ? (i = ((w = t[qe]) == null ? void 0 : w.src) ?? t[qe], y = (T = t[qe]) == null ? void 0 : T.name) : i = t, f && t.length > 1 ? c = `${o} ： ←, ↑, A, W | ${r} ： →, ↓, D, S | ${e} ： Esc` : c = `${e} ： Esc`;
  let p = At(document.getElementsByTagName("body")), u = document.createElement("div");
  u.setAttribute("class", "fullScreenImgByDom"), u.innerHTML = `<div class='previewInner'><div class='pageFBt left${f && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${o}' ></i></div><img src='${i}' alt='${l}' ><div class='pageFBt right${f && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${r}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${c}</p><p class='pName ${y ? "" : "hide"}'>${y}</p>`;
  function v() {
    let h = At(document.getElementsByTagName("body"));
    h && h.removeChild(u), document.removeEventListener("keyup", _);
  }
  (B = (C = u.querySelector(".ivu-icon-md-close")) == null ? void 0 : C.addEventListener) == null || B.call(C, "click", v);
  const k = u.querySelector("img"), g = u.querySelector(".pName");
  (F = u.querySelector(".pageFBt.left")) == null || F.addEventListener("click", function() {
    gl(f, t, k, g);
  }), (x = u.querySelector(".pageFBt.right")) == null || x.addEventListener("click", function() {
    bl(f, t, k, g);
  });
  function _(h) {
    h.keyCode === 37 || h.keyCode === 38 || h.keyCode === 87 || h.keyCode === 65 ? gl(f, t, k, g) : h.keyCode === 39 || h.keyCode === 40 || h.keyCode === 83 || h.keyCode === 68 ? bl(f, t, k, g) : h.keyCode === 27 && v();
  }
  document.addEventListener("keyup", _), (L = p == null ? void 0 : p.appendChild) == null || L.call(p, u), u.focus({ preventScroll: !0 });
}
const Qn = {
  key: 0,
  class: "previewBoxM"
}, Zn = { class: "imgLoading" }, eo = ["src", "alt"], to = { class: "deleteModal" }, lo = {
  key: 1,
  class: "previewBoxM"
}, ao = {
  key: 0,
  class: "previewImg"
}, no = ["src", "alt"], oo = { class: "deleteModal" }, io = {
  key: 2,
  class: "customFileListM"
}, so = {
  key: 0,
  class: "customFileListItem"
}, ro = ["onClick", "title"], uo = { class: "btBoxJ" }, co = {
  key: 3,
  class: "customFileListM"
}, fo = {
  key: 0,
  class: "customFileListItem"
}, po = { class: "listLoading" }, mo = ["onClick", "title"], ho = { class: "btBoxJ" };
var Cl;
const Xl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = ct([]), o = ct([]), r = ct([]);
    let c = {};
    const i = G(() => !e.manualUpload && e.showImg && u.value ? "img" : e.manualUpload && e.showImg && u.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "list" : ""), y = G(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), f = G({
      //文件集合
      get() {
        return e.manualUpload ? p.value : p.value.map((b) => ({ id: b }));
      },
      set(b) {
        e.manualUpload ? p.value = b || [] : p.value = (b == null ? void 0 : b.map((D) => D == null ? void 0 : D.id)) || [];
      }
    }), p = G({
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
          n("update:modelValue", D ?? null), n("on-change", D ?? null);
        } else
          n("update:modelValue", fe(b)), n("on-change", fe(b));
      }
    }), u = G(() => {
      let b;
      if (e.manualUpload ? b = f.value : b = o.value, !b)
        return !1;
      for (let D of b) {
        let J;
        if (e.manualUpload ? J = D == null ? void 0 : D.type : J = D == null ? void 0 : D.mimeType, !J || J && !(rt(J) || J === "loading"))
          return !1;
      }
      return !0;
    }), v = G(() => o.value.filter((b) => rt(b == null ? void 0 : b.mimeType))), k = G(() => v.value.map((b) => ({
      src: e.url + "/" + (b == null ? void 0 : b.id) + "/download?preview=true",
      name: b == null ? void 0 : b.name
    }))), g = G(() => f.value.filter((b) => rt(b == null ? void 0 : b.type)));
    _e(g, async (b) => {
      r.value = await w(b);
    }), _e(
      () => f.value,
      async (b) => {
        if (i.value === "localImg")
          b != null && b.length ? l.value = await w(b) : l.value = [];
        else if (b != null && b.length && i.value !== "localList") {
          let D = fe(b);
          const J = fe(o.value);
          for (let N of D)
            if ((N == null ? void 0 : N.name) === void 0)
              if (N.id) {
                const Q = Pt(J, (X) => (X == null ? void 0 : X.id) === N.id);
                Q ? (N.name = Q.name, N.mimeType = Q.mimeType) : c.hasOwnProperty(N.id) ? (N.name = c[N.id].name, N.mimeType = c[N.id].mimeType) : (N.mimeType = "loading", He.get(e.url + "/" + N.id).then((X) => {
                  var me, ye, pe, xe, P, M;
                  N.name = ((pe = (ye = (me = X == null ? void 0 : X.data) == null ? void 0 : me.returnValue) == null ? void 0 : ye[0]) == null ? void 0 : pe.name) || I("r.file") + rl(b, N), N.mimeType = ((M = (P = (xe = X == null ? void 0 : X.data) == null ? void 0 : xe.returnValue) == null ? void 0 : P[0]) == null ? void 0 : M.mimeType) || "unknown", ca(o);
                }).catch(() => {
                  N.name = I("r.file") + rl(D, N);
                }));
              } else
                N.name = I("r.unknown");
          o.value = D;
        } else
          o.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function _(b) {
      return (b == null ? void 0 : b.name) || (b == null ? void 0 : b.split) && gt(b.split("/")) || b;
    }
    async function w(b) {
      let D = [];
      for (let J of b) {
        let N = await pl(J);
        D.push(N);
      }
      return D;
    }
    function T(b) {
      if (!e.disabled) {
        let D = f.value;
        D == null || D.splice(b, 1), f.value = D;
      }
    }
    function C(b) {
      b != null && b.id && window.open(e.url + "/" + b.id + "/download");
    }
    function B(b) {
      return e.manualUpload ? (b == null ? void 0 : b.type) && rt(b.type) : (b == null ? void 0 : b.id) && b.mimeType && rt(b.mimeType);
    }
    async function F(b) {
      if (e.manualUpload) {
        let D, J;
        if (typeof b == "number" ? (D = b, J = l.value) : b && (D = bt(g.value, (N) => N.size === b.size && N.lastModified === b.lastModified), J = r.value), !J)
          return;
        dt(
          J.map((N, Q) => {
            var X;
            return {
              src: N,
              name: (X = g.value[Q]) == null ? void 0 : X.name
            };
          }),
          D
        );
      } else if (b != null && b.id) {
        const D = bt(v.value, (J) => J.id === b.id);
        dt(k.value, D);
      }
    }
    function x(b) {
      q(b) === "String" && b.indexOf("http") > -1 ? window.open(b) : q(b) === "File" && pl(b).then((D) => {
        $n(b.name, D);
      });
    }
    function L(b) {
      var D, J;
      if (e.manualUpload) {
        if (b) {
          let N = zl(b.name);
          if ((D = e.format) != null && D.length && e.format.indexOf(N) < 0)
            return De(
              I("r.wrongFileType"),
              I("r.supportType") + (((J = e.format) == null ? void 0 : J.length) && String(e.format) || I("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && b.size > e.maxSize * 1024)
            return De(I("r.fileIsBig"), I("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let Q = f.value;
          Q == null || Q.push(b), f.value = Q;
        }
        return !1;
      } else
        return !0;
    }
    function h(b) {
      console.warn(b), De(I("r.uploadError"), "", "error");
    }
    function A(b, D, J) {
      var N, Q, X, me, ye, pe;
      if ((b == null ? void 0 : b.code) === 0) {
        let xe = f.value;
        D.id = (Q = (N = b.data) == null ? void 0 : N[0]) == null ? void 0 : Q.id, D.name = (me = (X = b.data) == null ? void 0 : X[0]) == null ? void 0 : me.name, D.mimeType = (pe = (ye = b.data) == null ? void 0 : ye[0]) == null ? void 0 : pe.mimeType, c[D.id] = { name: D.name, mimeType: D.mimeType }, xe == null || xe.push(D), f.value = xe;
      } else
        De(I("r.uploadFail"), (b == null ? void 0 : b.message) || "", "error");
    }
    function $() {
      De(I("r.fileIsBig"), I("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function te() {
      var b;
      De(
        I("r.wrongFileType"),
        I("r.supportType") + (((b = e.format) == null ? void 0 : b.length) && String(e.format) || I("r.none")),
        "warning"
      );
    }
    function K(b) {
      let D = b == null ? void 0 : b.id, J = b == null ? void 0 : b.mimeType;
      D && (q(J) === "String" && J.indexOf("image") > -1 ? dt(e.url + "/" + D + "/download?preview=true") : window.open(e.url + "/" + D + "/download?preview=true"));
    }
    function z(b) {
      var J, N, Q;
      let D = (Q = (N = (J = b == null ? void 0 : b.response) == null ? void 0 : J.data) == null ? void 0 : N[0]) == null ? void 0 : Q.id;
      ee(null, D);
    }
    function ee(b, D) {
      if (!(!D && D !== 0) && !e.disabled && p.value.indexOf(D) !== -1) {
        const J = fe(p.value);
        let N = f.value;
        N == null || N.splice(J.indexOf(D), 1), f.value = N;
      }
    }
    return (b, D) => {
      var X, me, ye, pe, xe;
      const J = Y("Button"), N = Y("Upload"), Q = Y("Icon");
      return S(), U("div", null, [
        j(N, {
          name: "files",
          action: m(y),
          "before-upload": L,
          "on-error": h,
          "on-success": A,
          "on-exceeded-size": $,
          "on-preview": K,
          "on-remove": z,
          "on-format-error": te,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && ((X = m(f)) == null ? void 0 : X.length) >= e.length || !!e.disabled
        }, {
          default: le(() => {
            var P;
            return [
              j(J, {
                icon: "md-cloud-upload",
                class: we({
                  disabledR: e.length > 0 && ((P = m(f)) == null ? void 0 : P.length) >= e.length || !!e.disabled
                })
              }, {
                default: le(() => [
                  ke(H(m(I)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        m(i) === "img" && ((me = m(o)) == null ? void 0 : me.length) > 0 ? (S(), U("div", Qn, [
          (S(!0), U(be, null, Ce(m(o), (P, M) => (S(), U(be, {
            key: P == null ? void 0 : P.id
          }, [
            !e.manualUpload && (P == null ? void 0 : P.id) !== null ? (S(), U("div", {
              key: 0,
              class: we(["previewImg", { previewLoading: P.mimeType === "loading" }])
            }, [
              he(R("div", Zn, D[0] || (D[0] = [
                R("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ge, P.mimeType === "loading"]
              ]),
              he(R("img", {
                src: b.url + "/" + P.id + "/download?preview=true",
                alt: P.name
              }, null, 8, eo), [
                [ge, P.mimeType !== "loading"]
              ]),
              he(R("div", to, [
                j(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: m(I)("r.fView"),
                  onClick: (ie) => m(dt)(m(k), M)
                }, null, 8, ["title", "onClick"]),
                j(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ie) => ee(ie, P.id),
                  title: m(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ge, P.mimeType !== "loading"]
              ])
            ], 2)) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(i) === "localImg" && ((ye = m(l)) == null ? void 0 : ye.length) > 0 ? (S(), U("div", lo, [
          (S(!0), U(be, null, Ce(m(l), (P, M) => (S(), U(be, {
            key: "manualImg" + M
          }, [
            e.manualUpload && P !== null ? (S(), U("div", ao, [
              R("img", {
                src: P,
                alt: "manualImg" + M
              }, null, 8, no),
              R("div", oo, [
                j(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (ie) => F(M),
                  title: m(I)("r.fView")
                }, null, 8, ["onClick", "title"]),
                j(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ie) => T(M),
                  title: m(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(i) === "localList" && ((pe = m(f)) == null ? void 0 : pe.length) > 0 ? (S(), U("div", io, [
          (S(!0), U(be, null, Ce(m(f), (P, M) => (S(), U(be, {
            key: "manualItem" + M
          }, [
            e.manualUpload && P !== null ? (S(), U("p", so, [
              P.name ? (S(), Z(Q, {
                key: 0,
                class: "fileTypeIco",
                type: m(ml)(P.name),
                size: "20"
              }, null, 8, ["type"])) : ue("", !0),
              R("span", {
                class: we(["upNameT", { previewName: B(P) }]),
                onClick: (ie) => x(P),
                title: m(I)("r.download")
              }, H(_(P)), 11, ro),
              R("span", uo, [
                B(P) ? (S(), Z(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (ie) => F(P),
                  title: m(I)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                j(Q, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ie) => T(M),
                  title: m(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(i) === "list" && ((xe = m(o)) == null ? void 0 : xe.length) > 0 ? (S(), U("div", co, [
          (S(!0), U(be, null, Ce(m(o), (P, M) => (S(), U(be, {
            key: "defaultItem" + M
          }, [
            !e.manualUpload && P ? (S(), U("div", fo, [
              he(R("div", po, D[1] || (D[1] = [
                R("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ge, P.mimeType === "loading"]
              ]),
              he(j(Q, {
                type: m(ml)(P.name),
                class: "fileTypeIco",
                size: "20"
              }, null, 8, ["type"]), [
                [ge, P.mimeType !== "loading"]
              ]),
              he(R("span", {
                class: "upNameT",
                onClick: (ie) => C(P),
                title: m(I)("r.download")
              }, H(P.name || m(I)("r.file") + (M + 1)), 9, mo), [
                [ge, P.mimeType !== "loading"]
              ]),
              he(R("span", ho, [
                B(P) ? (S(), Z(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (ie) => F(P),
                  title: m(I)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                j(Q, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ie) => T(M),
                  title: m(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ge, P.mimeType !== "loading"]
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0)
      ]);
    };
  }
}), Jl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = E(!1), o = E(!1), r = E(!1), c = G({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(_) {
        n("update:modelValue", [_, i.value]), n("on-change", [_, i.value]);
      }
    }), i = G({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(_) {
        n("update:modelValue", [c.value, _]), n("on-change", [c.value, _]);
      }
    }), y = G(
      () => (c.value || "") + ((c.value || i.value) && " - " || "") + (i.value || "")
    ), f = E();
    Ge(() => {
      f.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        r.value = !0;
      }), f.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        r.value = !1;
      }), f.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (_) => {
        var w;
        !e.disabled && (c.value || i.value) && ((w = _ == null ? void 0 : _.stopPropagation) == null || w.call(_), k());
      });
    });
    function p() {
      e.disabled || (l.value = !0);
    }
    function u(_) {
      c.value = _, l.value = !1, o.value = !0;
    }
    function v(_) {
      i.value = _, o.value = !1;
    }
    function k() {
      n("update:modelValue", [null, null]), n("on-change", [null, null]);
    }
    function g() {
      l.value = !1, o.value = !1, c.value && i.value === null && (c.value = null);
    }
    return (_, w) => {
      const T = Y("DatePicker"), C = Y("Icon"), B = Y("Input");
      return S(), U("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: f
      }, [
        j(T, {
          open: m(o),
          modelValue: m(i),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: v,
          onOnClickoutside: g
        }, {
          default: le(() => w[1] || (w[1] = [
            R("div", { class: "bRoot" }, null, -1)
          ])),
          _: 1,
          __: [1]
        }, 8, ["open", "modelValue", "placement", "options"]),
        j(T, {
          open: m(l),
          modelValue: m(c),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: u,
          onOnClickoutside: g
        }, {
          default: le(() => [
            R("div", { onClick: p }, [
              j(B, {
                class: "aRoot",
                modelValue: m(y),
                "onUpdate:modelValue": w[0] || (w[0] = (F) => $e(y) ? y.value = F : null),
                readonly: "",
                placeholder: e.placeholder || m(I)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: le(() => [
                  j(C, {
                    type: m(r) && (m(c) || m(i)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), Yl = /* @__PURE__ */ ce({
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
  setup(t, { emit: s }) {
    const n = s, e = t, l = E(), o = "date-c-r-" + Math.floor(Math.random() * 1e7 + 1e7), r = E({}), c = G({
      get() {
        return e.modelValue;
      },
      set(f) {
        n("update:modelValue", f);
      }
    }), i = G(() => {
      if (q(e.options) === "Object") {
        const { disabledDate: f, ...p } = e.options;
        return p;
      }
      return {};
    });
    function y(f) {
      var u, v;
      const p = f.target;
      ((v = (u = p.classList) == null ? void 0 : u.contains) != null && v.call(u, "ivu-date-picker-cells-cell") || p.tagName === "EM") && Re(() => {
        var g, _;
        const k = (_ = (g = l == null ? void 0 : l.value) == null ? void 0 : g.$refs.pickerPanel) == null ? void 0 : _.rangeState;
        if (k) {
          const w = k.from, T = k.selecting;
          r.value = {
            ...i.value,
            disabledDate: (C) => {
              var B;
              return typeof ((B = e.options) == null ? void 0 : B.disabledDate) == "function" ? e.options.disabledDate(C, w, T) : !1;
            }
          };
        }
      }, 1);
    }
    return _e(
      () => e.options,
      (f) => {
        r.value = f;
      },
      { immediate: !0 }
    ), Ge(() => {
      var p;
      const f = document.getElementsByClassName(o)[0];
      (p = f == null ? void 0 : f.addEventListener) == null || p.call(f, "click", y, !0);
    }), (f, p) => {
      const u = Y("DatePicker");
      return S(), Z(u, {
        ref_key: "dateC",
        ref: l,
        modelValue: m(c),
        "onUpdate:modelValue": p[0] || (p[0] = (v) => $e(c) ? c.value = v : null),
        type: f.type,
        options: m(r),
        placement: f.placement,
        placeholder: f.placeholder,
        clearable: f.clearable,
        disabled: f.disabled,
        editable: !1,
        transferClassName: o,
        transfer: ""
      }, null, 8, ["modelValue", "type", "options", "placement", "placeholder", "clearable", "disabled"]);
    };
  }
}), yo = { class: "editor-pro-root" }, Ql = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = ct(), o = G({
      get() {
        return e.modelValue;
      },
      set(f) {
        n("update:modelValue", f), n("on-change", f);
      }
    }), r = G(
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
    ), c = G(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(f, p) {
                let u = new FormData();
                u.append("files", f);
                const v = f.name, k = e.imgUploadUrl ?? "/node-serve/file";
                He.post(k, u, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((g) => {
                  if (g && g.data)
                    if (Array.isArray(g.data))
                      for (let _ of g.data) {
                        const w = k + "/" + (_ == null ? void 0 : _.id) + "/download";
                        p(w, v, w);
                      }
                    else {
                      const _ = k + "/" + g.data.id + "/download";
                      p(_, v, _);
                    }
                }).catch(() => {
                  De(I("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(f, p) {
                let u = new FormData();
                u.append("files", f);
                const v = e.videoUploadUrl ?? "/node-serve/file";
                He.post(v, u, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((k) => {
                  if (k && k.data)
                    if (Array.isArray(k.data))
                      for (let g of k.data) {
                        const _ = v + "/" + (g == null ? void 0 : g.id) + "/download";
                        p(_);
                      }
                    else {
                      const g = v + "/" + k.data.id + "/download";
                      p(g);
                    }
                }).catch(() => {
                  De(I("r.uploadFail"), "", "error");
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
    function y(f) {
      l.value = f;
    }
    return _e(
      () => e.disabled,
      (f) => {
        f ? l.value.disable() : l.value.enable();
      }
    ), xl(() => {
      l.value && l.value.destroy();
    }), (f, p) => (S(), U("div", yo, [
      he(j(m(Sa), {
        class: "editor-pro-toolbar",
        editor: m(l),
        defaultConfig: m(r),
        mode: f.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ge, !f.disabled]
      ]),
      j(m(Ca), {
        class: "editor-pro-editor",
        modelValue: m(o),
        "onUpdate:modelValue": p[0] || (p[0] = (u) => $e(o) ? o.value = u : null),
        defaultConfig: m(c),
        mode: f.mode,
        onOnCreated: y,
        style: se(m(i))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), vo = {
  key: 19,
  class: "formInfoTxtXN"
}, go = {
  key: 20,
  class: "formTitleTxtXN"
}, bo = {
  key: 21,
  style: { display: "inline-block", width: "4px" }
}, kl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = G(() => {
      var p;
      if (e.inline)
        return e.itemWidth;
      {
        const u = (p = e.itemStyle) == null ? void 0 : p.width;
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
    function o(p) {
      return {
        withInfo: !!p.info,
        withTitle: !!p.title,
        inlineFormItemXN: e.inline,
        noLabel: p.type === "selectInput",
        [p.class]: p.class,
        slotInput: p.slotPosition
      };
    }
    function r(p, u) {
      n("item-change", {
        e: p,
        root: u
      });
    }
    function c(p, u) {
      n("re-validate", {
        e: p,
        root: u
      });
    }
    function i(p) {
      n("select-input-change", p);
    }
    function y(p, u) {
      n("al-name-change", {
        name: p,
        root: u
      });
    }
    function f(p, u) {
      n("async-label-change", {
        label: p,
        root: u
      });
    }
    return (p, u) => {
      const v = Y("InputNumber"), k = Y("Input"), g = Y("Option"), _ = Y("Select"), w = Y("Radio"), T = Y("Icon"), C = Y("RadioGroup"), B = Y("Checkbox"), F = Y("CheckboxGroup"), x = Y("TimePicker"), L = Y("FormItem");
      return e.item ? (S(), Z(L, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: we(["relativeBox", o(e.item)])
      }, {
        default: le(() => [
          e.item.type === "txt" ? (S(), U("div", {
            key: 0,
            style: se([e.itemStyle, { display: "inline-block" }]),
            class: we({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, H(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (S(), Z(v, {
            key: 1,
            style: se(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[0] || (u[0] = (h) => e.tempKeys[e.item.tempKey] = h),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || m(I)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: u[1] || (u[1] = (h) => r(h, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (S(), Z(k, {
            key: 2,
            style: se(p.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[2] || (u[2] = (h) => e.tempKeys[e.item.tempKey] = h),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || m(I)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[3] || (u[3] = (h) => r(h, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, nt({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: le(() => [
                Me(p.$slots, e.item.slotName, {
                  valGroup: e.valGroup
                })
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: le(() => [
                R("span", null, H(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: le(() => [
                R("span", null, H(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (S(), Z(_, {
            key: 3,
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[4] || (u[4] = (h) => p.tempKeys[e.item.tempKey] = h),
            style: se(p.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || m(I)("r.pSelect"),
            onOnChange: u[5] || (u[5] = (h) => r(h, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: le(() => [
              (S(!0), U(be, null, Ce(e.item.options, (h, A) => (S(), Z(g, {
                value: h.val,
                label: h.label || h.val,
                key: "option-" + e.item.key + A,
                disabled: !!h.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (S(), Z(Gl, {
            key: 4,
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[6] || (u[6] = (h) => p.tempKeys[e.item.tempKey] = h),
            "label-width": p.labelWidth,
            "item-width": m(l),
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || m(I)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: i
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (S(), Z(jl, {
            key: 5,
            style: se(p.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[7] || (u[7] = (h) => e.valGroup[e.item.key] = h),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || m(I)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: u[8] || (u[8] = (h) => y(h, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (S(), Z(Wl, {
            key: 6,
            style: se(p.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[9] || (u[9] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || p.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || m(I)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: u[10] || (u[10] = (h) => f(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (S(), Z(w, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[11] || (u[11] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: u[12] || (u[12] = (h) => r(h, e.item))
          }, {
            default: le(() => [
              ke(H(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (S(), Z(C, {
            key: 8,
            style: se(p.itemStyle),
            onOnChange: u[13] || (u[13] = (h) => c(h, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[14] || (u[14] = (h) => p.tempKeys[e.item.tempKey] = h)
          }, {
            default: le(() => [
              (S(!0), U(be, null, Ce(e.item.options, (h) => (S(), Z(w, {
                key: "radioItem" + h.val,
                label: h.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: le(() => [
                  h.icon && !e.item.buttonType ? (S(), Z(T, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : ue("", !0),
                  R("span", null, H(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (S(), Z(B, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[15] || (u[15] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled,
            onOnChange: u[16] || (u[16] = (h) => r(h, e.item))
          }, {
            default: le(() => [
              ke(H(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (S(), Z(F, {
            key: 10,
            style: se(p.itemStyle),
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[17] || (u[17] = (h) => p.tempKeys[e.item.tempKey] = h),
            onOnChange: u[18] || (u[18] = (h) => c(h, e.item))
          }, {
            default: le(() => [
              (S(!0), U(be, null, Ce(e.item.options, (h) => (S(), Z(B, {
                key: "checkItem" + h.val,
                label: h.val,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: le(() => [
                  h.icon ? (S(), Z(T, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : ue("", !0),
                  R("span", null, H(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (S(), Z(k, {
            key: 11,
            type: "textarea",
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[19] || (u[19] = (h) => p.tempKeys[e.item.tempKey] = h),
            autosize: e.item.autosize || { minRows: 2 },
            style: se(p.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || m(I)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[20] || (u[20] = (h) => r(h, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (S(), Z(Xl, {
            key: 12,
            style: se(p.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[21] || (u[21] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || p.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: u[22] || (u[22] = (h) => c(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (S(), Z(Yl, {
            key: 13,
            style: se(p.itemStyle),
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[23] || (u[23] = (h) => p.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placeholder: e.item.placeholder || m(I)("r.selectDate"),
            options: e.item.dateOptions || {},
            "time-picker-options": p.item.timePickerOptions || {},
            clearable: e.item.clearable !== !1,
            onOnChange: u[24] || (u[24] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "time-picker-options", "clearable"])) : e.item.type === "time" ? (S(), Z(x, {
            key: 14,
            style: se(p.itemStyle),
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[25] || (u[25] = (h) => p.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(I)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: u[26] || (u[26] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (S(), Z(Jl, {
            key: 15,
            style: se(p.itemStyle),
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[27] || (u[27] = (h) => p.tempKeys[e.item.tempKey] = h),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(I)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: u[28] || (u[28] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (S(), Z(Ql, {
            key: 16,
            class: "inlineBlock",
            style: se(p.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[29] || (u[29] = (h) => e.valGroup[e.item.key] = h),
            placeholder: e.item.placeholder || m(I)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: u[30] || (u[30] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (S(), Z(Hl, {
            key: 17,
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[31] || (u[31] = (h) => p.tempKeys[e.item.tempKey] = h),
            style: se(p.itemStyle),
            placeholder: e.item.placeholder || m(I)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: u[32] || (u[32] = (h) => r(h, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (S(), U("div", {
            key: 18,
            class: "inlineBlock",
            style: se(p.itemStyle)
          }, [
            Me(p.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ue("", !0),
          e.item.info ? (S(), U("div", vo, H(e.item.info), 1)) : ue("", !0),
          e.item.title ? (S(), U("div", go, H(e.item.title), 1)) : ue("", !0),
          e.inline ? ue("", !0) : (S(), U("span", bo))
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : ue("", !0);
    };
  }
}), ko = { class: "inlineBlock" }, Tt = /* @__PURE__ */ ce({
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
  setup(t, { expose: s, emit: n }) {
    var ol, il;
    const e = n, l = t, o = E(null), r = E({}), c = E([]), i = E({});
    let y = [];
    const f = ((ol = window == null ? void 0 : window.g) == null ? void 0 : ol.mgrURL) ?? "";
    let p = [], u = [];
    const v = E(!1), k = E(Math.random() * 1e8 + 1e3), g = (il = window == null ? void 0 : window.g) != null && il.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let _ = !1;
    const w = G(() => Array.isArray(l.formData.length ? l.formData[0] : !1)), T = G(
      () => l.inline ? {
        width: l.itemWidth + l.labelWidth + "px"
      } : {}
    ), C = G(
      () => l.inline ? {
        width: "100%"
      } : { width: l.contentWidth }
    ), B = G(() => {
      let d = fe(l.formRules);
      for (let a in d)
        if (d.hasOwnProperty(a))
          if (Array.isArray(d[a]))
            for (let O of d[a])
              O && O && !(O.message || O.validator) && (O.message = I("r.required"));
          else q(d[a]) === "Object" && (d[a].message || d[a].validator || (d[a].message = I("r.required")));
      return d;
    }), F = G(() => {
      let d = [];
      if (w.value)
        for (let a of c.value)
          h(a, d);
      else
        h(c.value, d);
      return d.concat(p, u);
    }), x = G(() => {
      let d = [];
      if (w.value)
        for (let a of c.value)
          A(a, d);
      else
        A(c.value, d);
      return d;
    });
    function L(d) {
      return d.filter((a) => a == null ? void 0 : a.slotName);
    }
    function h(d, a) {
      for (let O of d)
        if ((O == null ? void 0 : O.showing) === !0 && O.key && O.type !== "selectInput" && (a.push(O.key), O.key2 && a.push(O.key2), O.collectLabel)) {
          if (!Array.isArray(O.collectLabel) && O.collectLabel.key)
            a.push(O.collectLabel.key);
          else if (Array.isArray(O.collectLabel))
            for (let V of O.collectLabel)
              V.key && a.push(V.key);
        }
    }
    function A(d, a) {
      for (let O of d)
        (O == null ? void 0 : O.showing) === !0 && O.key && O.type !== "selectInput" && a.push(O.key);
    }
    function $() {
      return new Promise((d) => {
        z(), K().then(() => {
          e("on-reset"), d(!0);
        });
      });
    }
    function te() {
      return new Promise((d) => {
        for (let a of y)
          a();
        y = [], i.value = {}, M(), ye(), K().then(() => {
          e("on-re-render"), d(!0);
        });
      });
    }
    function K() {
      return new Promise((d) => {
        k.value = Math.floor(Math.random() * 1e8 + 1e3), Ie(function() {
          d(!0);
        });
      });
    }
    function z() {
      let d = D();
      for (let a in r.value)
        if (r.value.hasOwnProperty(a))
          if (Oe(d[a]))
            r.value[a] = d[a];
          else if (Array.isArray(r.value[a]))
            r.value[a] = [];
          else if (q(r.value[a]) === "Boolean")
            r.value[a] = !1;
          else {
            const O = vt(l.formData, (V) => (V == null ? void 0 : V.key) === a);
            O && (O.type === "editor" || O.type === "editorPro") ? r.value[a] = "" : r.value[a] = null;
          }
      ee(d);
    }
    function ee(d) {
      for (let a in i.value)
        i.value.hasOwnProperty(a) && (Oe(d[a]) ? i.value[a] = d[a] : Array.isArray(i.value[a]) ? i.value[a] = [] : q(i.value[a]) === "Object" && i.value[a].hasOwnProperty("key") && i.value[a].hasOwnProperty("val") ? i.value[a].val = null : i.value[a] = null);
    }
    function b(d) {
      let a = D();
      Oe(a[d]) ? i.value[d] = a[d] : Array.isArray(i.value[d]) ? i.value[d] = [] : i.value[d] = null;
    }
    function D() {
      let d = {};
      if (w.value)
        for (let a of c.value)
          J(a, d);
      else
        J(c.value, d);
      return d;
    }
    function J(d, a) {
      for (let O of d)
        O.tempKey && Oe(O.defaultVal) && me(O, a), O.key && Oe(O.defaultVal) && (a[O.key] = O.defaultVal), O.key2 && Oe(O.defaultVal2) && (a[O.key2] = O.defaultVal2);
    }
    function N(d) {
      if (d.show) {
        if (q(d.show) === "Object")
          return X(d, Q(d.show));
        if (Array.isArray(d.show))
          if (d.showOr) {
            for (let a of d.show)
              if (Q(a) === !0)
                return X(d, !0);
            return X(d, !1);
          } else {
            for (let a of d.show)
              if (Q(a) === !1)
                return X(d, !1);
            return X(d, !0);
          }
        else if (typeof d.show == "function")
          return X(d, d.show(r.value));
      } else d.showing || (d.showing = !0);
      return !0;
    }
    function Q(d) {
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
    function X(d, a) {
      return !(d != null && d.showing) && a && (d != null && d.key) ? (d.showing = a, d.defaultVal !== void 0 && (d.tempKey ? (i.value[d.tempKey] === null || i.value[d.tempKey] === void 0 || (q(i.value[d.tempKey]) === "Object" || Array.isArray(i.value[d.tempKey])) && Pe(i.value[d.tempKey])) && me(d, i.value) : (r.value[d.key] === null || r.value[d.key] === void 0) && (r.value[d.key] = d.defaultVal), d.key2 && d.deafultVal2 !== void 0 && (r.value[d.key2] === null || r.value[d.key2] === void 0) && d.type !== "inputMap" && (r.value[d.key2] = d.defaultVal2)), d.tempKey && ve(i.value[d.tempKey], d)) : d.showing = a, a;
    }
    function me(d, a) {
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
      let d = fe(l.formData);
      if (w.value)
        for (let a of d)
          pe(a);
      else
        pe(d);
      c.value = d;
    }
    function pe(d) {
      for (let a of d)
        if (a != null && a.type)
          switch (a.type) {
            case "selectInput":
              const O = "selectInput" + Math.floor(Math.random() * 1e8);
              a.tempKey = O, i.value[O] = E({
                key: a.key || null,
                val: a.defaultVal || null
              }), y.push(
                _e(
                  () => i.value[O],
                  (W) => {
                    ve(W, a);
                  },
                  { immediate: !0 }
                )
              );
              break;
            case "inputMap":
              const V = "inputMap" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = V, a.key3 ? i.value[V] = a.defaultVal !== void 0 && a.defaultVal2 !== void 0 ? {
                lng: a.defaultVal,
                lat: a.defaultVal2,
                name: a.defaultVal3 || ""
              } : {
                lng: null,
                lat: null,
                name: null
              } : i.value[V] = a.defaultVal !== void 0 && a.defaultVal2 !== void 0 ? {
                lng: a.defaultVal,
                lat: a.defaultVal2
              } : {
                lng: null,
                lat: null
              }, y.push(
                _e(
                  () => i.value[V],
                  (W) => {
                    ve(W, a);
                  },
                  { immediate: !0 }
                )
              ));
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              const ae = "inputT" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = ae, i.value[ae] = a.defaultVal !== void 0 ? a.defaultVal : null, y.push(
                _e(
                  () => i.value[ae],
                  (W) => {
                    ve(W, a);
                  },
                  { immediate: !0 }
                )
              ));
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              if (a.options || (a.options = []), (a.type === "checkboxGroup" || a.type === "radioGroup") && (a.options = E(fe(a.options))), a.asyncOption)
                if (a.changeOption)
                  if (Array.isArray(a.changeOption)) {
                    let W = !0;
                    for (let oe of a.changeOption)
                      if (!oe.valKey || !oe.key) {
                        W = !1;
                        break;
                      }
                    W ? y.push(
                      _e(
                        () => {
                          let oe = "";
                          if (Array.isArray(a.changeOption))
                            for (let Te of a.changeOption) {
                              let Ke = r.value[Te.valKey];
                              if (Ke && !Array.isArray(Ke) || Array.isArray(Ke) && Ke.length || Ke === 0 || Ke === !1)
                                oe += "&" + Te.key + "=" + Ke;
                              else if (!Te.notRequired)
                                return !1;
                            }
                          return oe;
                        },
                        (oe) => {
                          let Te = fe(i.value[a.tempKey]);
                          if (i.value[a.tempKey] = null, oe && a.optionUrl) {
                            let Ke = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                            xe((Ke + oe).replace(/\?&/, "?"), a, Te);
                          } else
                            a.localOption ? je(a, "options", [...a.localOption]) : je(a, "options", []), Oe(Te) && P(Te, a);
                        },
                        {
                          immediate: !0
                        }
                      )
                    ) : a.localOption ? je(a, "options", [...a.localOption]) : je(a, "options", []);
                  } else typeof a.changeOption == "object" ? a.changeOption.valKey && a.changeOption.key && y.push(
                    _e(
                      () => typeof a.changeOption == "object" && !Array.isArray(a.changeOption) ? r.value[a.changeOption.valKey] : !1,
                      (W) => {
                        let oe = fe(i.value[a.tempKey]);
                        if (i.value[a.tempKey] = null, (W && !Array.isArray(W) || Array.isArray(W) && W.length || W === 0 || W === !1) && a.optionUrl && typeof a.changeOption == "object" && !Array.isArray(a.changeOption)) {
                          let Te = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                          xe((Te + "&" + a.changeOption.key + "=" + W).replace(/\?&/, "?"), a, oe);
                        } else
                          a.localOption ? je(a, "options", [...a.localOption]) : je(a, "options", []), Oe(oe) && P(oe, a);
                      },
                      { immediate: !0 }
                    )
                  ) : q(a.changeOption) === "Boolean" && y.push(
                    _e(
                      () => {
                        const W = vt(l.formData, (oe) => (oe == null ? void 0 : oe.key) === a.key);
                        return W.optionUrl = fa(W.optionUrl), W.optionUrl.value;
                      },
                      (W) => {
                        let oe = fe(i.value[a.tempKey]);
                        i.value[a.tempKey] = null, W ? xe(W, a, oe) : (a.localOption ? je(a, "options", [...a.localOption]) : je(a, "options", []), Oe(oe) && P(oe, a));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
                else a.optionUrl && xe(a.optionUrl, a);
              else q(a.borrowOption) === "String" && Ie(function() {
                a.options = vt(c.value, (W) => (W == null ? void 0 : W.key) === a.borrowOption).options;
              });
              const re = "opEle" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = re, a.type === "select" && a.multiple || a.type === "checkboxGroup" ? i.value[re] = a.defaultVal !== void 0 ? a.defaultVal : [] : a.booleanVal ? i.value[re] = a.defaultVal !== void 0 ? a.defaultVal ? 1 : 0 : null : i.value[re] = a.defaultVal !== void 0 ? a.defaultVal : null, y.push(
                _e(
                  () => i.value[re],
                  (W) => {
                    ve(W, a);
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
              const Se = "date" + Math.floor(Math.random() * 1e8);
              a.tempKey = Se, a.dateType === "date" || a.dateType === "datetime" || a.dateType === "time" || a.dateType === "year" || a.dateType === "month" ? i.value[Se] = a.defaultVal || null : (a.dateType === "daterange" || a.dateType === "datetimerange" || a.dateType === "timerange" || a.type === "monthRange") && (i.value[Se] = a.defaultVal && a.defaultVal2 && [a.defaultVal, a.defaultVal2] || []), y.push(
                _e(
                  () => i.value[Se],
                  (W) => {
                    ve(W, a);
                  }
                )
              );
              break;
          }
    }
    function xe(d, a, O) {
      He.get(d).then((V) => {
        var Se;
        let ae;
        if ($e(a.options) ? ae = a.options.value : ae = a.options, !ae)
          return;
        let re = ((Se = V == null ? void 0 : V.data) == null ? void 0 : Se.records) || (V == null ? void 0 : V.data) || V || [];
        Array.isArray(re) ? (a.optionFilter && q(a.optionFilter) === "Function" && (re = a.optionFilter(re)), a.optionLabel && a.optionVal ? (ae.length = 0, ae.push(
          ...re.map((W) => {
            let oe;
            if (Array.isArray(a.optionLabel)) {
              let Te = "";
              a.optionLabel.forEach((Ke, sl) => {
                let xt = String(W[Ke]);
                sl === 1 ? Te += "（" + xt : sl > 1 ? Te += "、" + xt : Te += xt;
              }), oe = {
                label: Te + "）",
                val: a.optionVal && W[a.optionVal]
              };
            } else
              oe = {
                label: a.optionLabel && W[a.optionLabel],
                val: a.optionVal && W[a.optionVal]
              };
            if (a.collectLabel)
              if (Array.isArray(a.collectLabel))
                for (let Te of a.collectLabel)
                  Te.valKey && Te.valKey !== "label" && (oe[Te.valKey] = W[Te.valKey]);
              else
                a.collectLabel.valKey && a.collectLabel.valKey !== "label" && (oe[a.collectLabel.valKey] = W[a.collectLabel.valKey]);
            if (oe.val !== null && oe.val !== void 0)
              return oe;
          })
        )) : (ae.length = 0, ae.push(...re))) : ae.length = 0, a.localOption && ae.unshift(...a.localOption), Oe(O) && P(O, a), a.disableOptionByOthers && (q(a.disableOptionByOthers) === "String" ? y.push(
          _e(
            () => r.value[a.disableOptionByOthers],
            (W) => {
              if (b(a.tempKey), !!ae) {
                for (let oe of ae)
                  oe.disabled && (oe.disabled = !1);
                if (W || W === 0 || W === !1)
                  for (let oe of ae)
                    oe.val === W && (oe.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(a.disableOptionByOthers) && y.push(
          _e(
            () => a.disableOptionByOthers.filter((W) => W).map((W) => r.value[W]),
            (W) => {
              if (b(a.tempKey), !!ae) {
                for (let oe of ae)
                  oe.disabled && (oe.disabled = !1);
                if (W) {
                  for (let oe of ae)
                    for (let Te = 0; Te < W.length; Te++)
                      if (oe.val === W[Te]) {
                        oe.disabled = !0, W.splice(Te, 1);
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
    function P(d, a) {
      Array.isArray(Lt(a.options)) && bt(Lt(a.options), { val: d }) !== -1 && (i.value[a.tempKey] = d);
    }
    function M() {
      if (r.value = {}, w.value)
        for (let d of l.formData)
          ie(d);
      else
        ie(l.formData);
    }
    function ie(d) {
      for (let a of d)
        a != null && a.key && (a.type === "checkboxGroup" || a.type === "select" && a.multiple ? r.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : [] : a.type === "editor" || a.type === "editorPro" ? r.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : "" : (r.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : null, a.key2 && (r.value[a.key2] = a.defaultVal2 !== void 0 && a.show === void 0 ? a.defaultVal2 : null)));
    }
    function ve(d, a) {
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
              let ae = /^-?\d+(.\d+)?$/;
              a.numberVal && ae.test(d) ? r.value[a.key] = Number(d) : r.value[a.key] = d;
            } else
              r.value[a.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!a.key)
              return;
            if (a.booleanVal && !a.multiple ? r.value[a.key] = d === void 0 || d === "" || d === null ? null : !!d : a.multiple || a.type === "checkboxGroup" ? r.value[a.key] = Object.assign([], d) : r.value[a.key] = d, a.collectLabel) {
              const ae = Ve(a, d);
              if (Array.isArray(a.collectLabel)) {
                for (let re of a.collectLabel)
                  if (re != null && re.key && re.valKey) {
                    const Se = ne(re.key);
                    let W = null;
                    Array.isArray(ae) ? (W = ae.map((oe) => oe[re.valKey]), r.value[re.key] = W, Se && (i.value[Se.tempKey] = W)) : (ae && Oe(ae[re.valKey]) && (W = ae[re.valKey]), r.value[re.key] = W, Se && (Se.booleanVal && typeof W == "boolean" ? i.value[Se.tempKey] = W ? 1 : 0 : i.value[Se.tempKey] = W));
                  }
              } else if (typeof a.collectLabel == "object" && a.collectLabel.key && a.collectLabel.valKey) {
                const re = ne(a.collectLabel.key);
                let Se = null;
                Array.isArray(ae) ? (Se = ae.map(
                  (W) => a.collectLabel && !Array.isArray(a.collectLabel) && W[a.collectLabel.valKey]
                ), r.value[a.collectLabel.key] = Se, re && (i.value[re.tempKey] = Se)) : (ae && Oe(ae[a.collectLabel.valKey]) && (Se = ae[a.collectLabel.valKey]), r.value[a.collectLabel.key] = Se, re && (re.booleanVal && typeof Se == "boolean" ? i.value[re.tempKey] = Se ? 1 : 0 : i.value[re.tempKey] = Se));
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!a.key)
              return;
            let O = a.dateType;
            const V = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "YYYY-MM"
            };
            if (O === "date" || O === "datetime" || O === "time" || O === "year" || O === "month")
              d ? (O === "time" ? r.value[a.key] = d : r.value[a.key] = st(d).format(typeof a.format == "string" ? a.format : V[O]), O === "date" && a.addTime && (r.value[a.key] += " 00:00:00")) : r.value[a.key] = null;
            else if (a.type === "monthRange" || O === "daterange" || O === "datetimerange" || O === "timerange") {
              if (!a.key2)
                return;
              d && d[0] && d[1] ? (O === "timerange" ? (r.value[a.key] = d[0], r.value[a.key2] = d[1]) : a.type === "monthRange" ? (r.value[a.key] = typeof a.format == "string" && st(d[0]).format(a.format) || d[0], r.value[a.key2] = typeof a.format == "string" && a.format && st(d[1]).format(a.format) || d[1]) : (r.value[a.key] = st(d[0]).format(a.format || O && V[O]), r.value[a.key2] = st(d[1]).format(a.format || O && V[O])), O === "daterange" && a.addTime && (r.value[a.key] += " 00:00:00", r.value[a.key2] += " 23:59:59")) : (r.value[a.key] = null, r.value[a.key2] = null);
            }
            break;
        }
    }
    function Ve(d, a) {
      const O = Lt(d == null ? void 0 : d.options);
      if (O)
        if (d != null && d.multiple || (d == null ? void 0 : d.type) === "checkboxGroup") {
          if (a) {
            let V = [];
            for (let ae of O)
              a.indexOf(ae == null ? void 0 : ae.val) !== -1 && V.push(ae);
            return V;
          }
          return !1;
        } else {
          if (a || a === 0 || a === !1) {
            for (let V of O)
              if ((V == null ? void 0 : V.val) === a)
                return V;
          }
          return !1;
        }
    }
    function ne(d) {
      if (w.value) {
        for (let a of c.value) {
          const O = Ae(a, d);
          if (O)
            return O;
        }
        return !1;
      }
      return Ae(c.value, d);
    }
    function Ae(d, a) {
      for (let O of d)
        if (O.key === a)
          return O;
      return !1;
    }
    function ze(d, a) {
      let O = {};
      for (let V in r.value)
        r.value.hasOwnProperty(V) && d[V] !== void 0 && (O[V] = d[V], delete d[V]);
      Ue(O, a);
      for (let V in d)
        d.hasOwnProperty(V) && (u.indexOf(V) < 0 && u.push(V), r.value[V] = d[V]);
    }
    function We(d) {
      let a = fe(d);
      if (w.value) {
        let O = [];
        for (let V of l.formData)
          O.push(...Je(V, a));
        return O;
      }
      return Je(l.formData, a);
    }
    function Je(d, a) {
      return d.filter((O) => {
        for (let V of Object.keys(a))
          if ((O == null ? void 0 : O.key) === V && x.value.indexOf(V) > -1 && !(a[V] === null || (Array.isArray(a[V]) || q(a[V]) === "Object") && Pe(a[V])))
            return delete a[V], !0;
        return !1;
      }).map((O) => O == null ? void 0 : O.key);
    }
    function Ue(d, a = !1) {
      let O = fe(d);
      de(d, a);
      for (let V in r.value)
        if (r.value.hasOwnProperty(V) && d[V] !== void 0 && d[V] !== "--") {
          if (Array.isArray(d[V]))
            d[V] = d[V].filter((ae) => ae !== "--");
          else if (q(d[V]) === "Object")
            for (let ae in d[V])
              d[V].hasOwnProperty(ae) && d[V][ae] === "--" && (d[V][ae] = null);
          r.value[V] = d[V];
        } else a || (r.value[V] = Array.isArray(r.value[V]) ? [] : null);
      Ie(function() {
        aa(We(O));
      });
    }
    function de(d, a = !1) {
      if (w.value)
        for (let O of c.value)
          Ne(O, d, a);
      else
        Ne(c.value, d, a);
    }
    function Ne(d, a, O = !1) {
      for (let V of d)
        if (V != null && V.key && (O && (a[V.key] !== void 0 || V.key2 && a[V.key2] !== void 0) || !O) && V.tempKey)
          switch (V.type) {
            case "inputMap":
              if (!V.key2)
                continue;
              q(a[V.key]) === "Number" && q(a[V.key2] === "Number") ? V.key3 ? i.value[V.tempKey] = {
                lng: a[V.key],
                lat: a[V.key2],
                name: a[V.key3]
              } : i.value[V.tempKey] = {
                lng: a[V.key],
                lat: a[V.key2]
              } : V.key3 ? i.value[V.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : i.value[V.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              a[V.key] && a[V.key] !== "--" || a[V.key] === 0 ? i.value[V.tempKey] = a[V.key] : i.value[V.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              a[V.key] && a[V.key] !== "--" || a[V.key] === 0 || a[V.key] === !1 ? V.multiple || V.type === "checkboxGroup" ? i.value[V.tempKey] = [...a[V.key]] : V.booleanVal ? i.value[V.tempKey] = a[V.key] ? 1 : 0 : i.value[V.tempKey] = a[V.key] : V.multiple || V.type === "checkboxGroup" ? i.value[V.tempKey] = [] : i.value[V.tempKey] = null;
              break;
            case "date":
            case "time":
              if (V.dateType === "date" || V.dateType === "datetime" || V.dateType === "year" || V.dateType === "month" || V.dateType === "time")
                i.value[V.tempKey] = a[V.key] && a[V.key] !== "--" ? a[V.key] : null;
              else if (V.dateType === "daterange" || V.dateType === "datetimerange" || V.dateType === "timerange") {
                if (!V.key2)
                  continue;
                i.value[V.tempKey] = a[V.key] && a[V.key] !== "--" && a[V.key2] && a[V.key2] !== "--" && [a[V.key], a[V.key2]] || [];
              }
              break;
          }
    }
    function ea(d) {
      if (Array.isArray(d))
        for (let a of d)
          Zt(a);
      else q(d) === "Object" && Zt(d);
    }
    function Zt(d) {
      const { index: a, indexB: O, key: V, val: ae } = d;
      if (typeof a == "number")
        if (Array.isArray(c.value[a])) {
          if (typeof O == "number")
            if (V && d.hasOwnProperty("val"))
              c.value[a][O][V] = ae;
            else
              for (let re of Object.keys(d))
                re !== "index" && V !== "indexB" && (c.value[a][O][re] = d[re]);
        } else if (V && d.hasOwnProperty("val"))
          c.value[a][V] = ae;
        else
          for (let re of Object.keys(d))
            re !== "index" && (c.value[a][re] = d[re]);
    }
    function el({ label: d, root: a }) {
      a.key2 && (r.value[a.key2] = d), et({
        e: d,
        root: a
      });
    }
    function tl(d) {
      d.beforeKey && ya(p, (a) => a === d.beforeKey), d.key && (p.indexOf(d.key) === -1 && p.push(d.key), et({
        e: null,
        root: d
      }));
    }
    function ll({ name: d, root: a }) {
      a.key2 && (r.value[a.key2] = d), et({
        e: d,
        root: a
      });
    }
    function al({ e: d, root: a }) {
      et({
        e: d,
        root: a
      }), Ie(function() {
        var O, V;
        (V = (O = o.value) == null ? void 0 : O.validateField) == null || V.call(O, a.key);
      });
    }
    function et({ e: d, root: a }) {
      Re(() => {
        var V;
        let O = {
          event: d
        };
        if (a.key && (O[a.key] = r.value[a.key]), a.key2 && (O[a.key2] = r.value[a.key2]), Array.isArray(a.collectLabel))
          for (let ae of a.collectLabel)
            O[ae.key] = r.value[ae.key];
        else (V = a.collectLabel) != null && V.key && (O[a.collectLabel.key] = r.value[a.collectLabel.key]);
        e("on-item-change", O);
      }, 300);
    }
    function nl() {
      let d = {};
      for (let a of F.value)
        d[a] = r.value[a];
      return l.trim && (d = _t(d)), d;
    }
    function ta() {
      var d, a;
      (a = (d = o.value) == null ? void 0 : d.validate) == null || a.call(d);
    }
    function la(d) {
      Re(() => {
        var a, O;
        (O = (a = o.value) == null ? void 0 : a.validateField) == null || O.call(a, d, () => {
        });
      }, 10);
    }
    function aa(d) {
      Re(() => {
        var a, O;
        if (Array.isArray(d))
          for (let V of d)
            (O = (a = o.value) == null ? void 0 : a.validateField) == null || O.call(a, V, () => {
            });
      }, 10);
    }
    function na(d) {
      d !== void 0 && (v.value = !!d);
    }
    function Bt() {
      var d, a;
      l.disabled || (a = (d = o.value) == null ? void 0 : d.validate) == null || a.call(d, (O) => {
        _ || (_ = !0, O && (v.value = !0, e("on-submit", nl())), Re(() => {
          _ = !1;
        }, 2e3));
      });
    }
    return Ge(() => {
      M(), ye();
    }), s({
      resetForm: $,
      refreshFormDom: K,
      reRenderForm: te,
      setItemToValGroup: ze,
      updateValGroup: Ue,
      updateFormDataT: ea,
      validate: ta,
      reValidate: la,
      changeLoading: na,
      getValGroup: nl,
      submit: Bt
    }), (d, a) => {
      const O = Y("FormItem"), V = Y("Button"), ae = Y("Form");
      return S(), Z(ae, {
        ref_key: "formGroupXRef",
        ref: o,
        model: m(r),
        rules: m(B),
        "label-width": l.labelWidth,
        inline: l.inline,
        "show-message": l.showMessage,
        class: "formXN",
        key: m(k)
      }, {
        default: le(() => [
          j(O, { style: { display: "none" } }, {
            default: le(() => a[0] || (a[0] = [
              R("input", { type: "text" }, null, -1)
            ])),
            _: 1,
            __: [0]
          }),
          m(w) ? (S(!0), U(be, { key: 0 }, Ce(m(c), (re, Se) => (S(), U("div", {
            class: we([d.teamClass, "formTeamBox" + Se]),
            key: "formTeamBox" + Se
          }, [
            (S(!0), U(be, null, Ce(re, (W, oe) => (S(), U(be, {
              key: "formItem" + oe
            }, [
              N(W) ? (S(), Z(kl, {
                key: 0,
                item: W,
                style: se(m(T)),
                "item-style": m(C),
                "val-group": m(r),
                "temp-keys": m(i),
                inline: l.inline,
                disabled: l.disabled,
                "label-width": l.labelWidth,
                "item-width": l.itemWidth,
                "mgr-url": m(f),
                "upload-url": m(g),
                onItemChange: et,
                onReValidate: al,
                onClearTempKeyItem: b,
                onSelectInputChange: tl,
                onAlNameChange: ll,
                onAsyncLabelChange: el
              }, nt({ _: 2 }, [
                Ce(L(re), (Te) => ({
                  name: Te.slotName,
                  fn: le((Ke) => [
                    Me(d.$slots, Te.slotName, {
                      valGroup: Ke.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ue("", !0)
            ], 64))), 128))
          ], 2))), 128)) : ue("", !0),
          (S(!0), U(be, null, Ce(m(c), (re, Se) => (S(), U(be, {
            key: "formItem" + Se
          }, [
            !m(w) && N(re) ? (S(), Z(kl, {
              key: 0,
              item: re,
              style: se(m(T)),
              "item-style": m(C),
              "val-group": m(r),
              "temp-keys": m(i),
              inline: l.inline,
              disabled: l.disabled,
              "label-width": l.labelWidth,
              "item-width": l.itemWidth,
              "mgr-url": m(f),
              "upload-url": m(g),
              onItemChange: et,
              onReValidate: al,
              onClearTempKeyItem: b,
              onSelectInputChange: tl,
              onAlNameChange: ll,
              onAsyncLabelChange: el
            }, nt({ _: 2 }, [
              Ce(L(d.formData), (W) => ({
                name: W.slotName,
                fn: le((oe) => [
                  Me(d.$slots, W.slotName, {
                    valGroup: oe.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ue("", !0)
          ], 64))), 128)),
          l.showLongOkBt ? (S(), Z(O, { key: 1 }, {
            default: le(() => [
              j(V, {
                onClick: Bt,
                style: se(m(C)),
                type: "primary",
                loading: l.btnLoading && m(v),
                disabled: l.disabled
              }, {
                default: le(() => [
                  ke(H(l.longOkBtTxt || m(I)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ue("", !0),
          R("div", ko, [
            l.showInlineOkBt ? (S(), Z(V, {
              key: 0,
              type: "primary",
              class: we({ inlineFormBtXN: l.inline, okBtnXN: !0 }),
              onClick: Bt,
              loading: l.btnLoading && m(v),
              disabled: l.disabled
            }, {
              default: le(() => [
                ke(H(l.inlineOkBtTxt || m(I)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : ue("", !0),
            l.showInlineClearBt ? (S(), Z(V, {
              key: 1,
              onClick: $,
              class: we({ inlineFormBtXN: l.inline }),
              type: "dashed"
            }, {
              default: le(() => [
                ke(H(l.inlineClearBtTxt || m(I)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : ue("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), wo = /* @__PURE__ */ ce({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    with: { default: () => Be().formGroupWidth },
    labelWidth: { default: () => Be().formGroupLabelWidth },
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
  setup(t, { expose: s, emit: n }) {
    const e = n, l = t, o = E({ width: l.with }), r = E(!1), c = E(), i = G(() => {
      var x, L;
      if (Array.isArray(l.formData))
        if (Array.isArray(l.formData[0])) {
          let h = [];
          for (let A of l.formData)
            A && (h = h.concat(
              A.filter(($) => ($ == null ? void 0 : $.type) === "custom" || ($ == null ? void 0 : $.type) === "input" && $.slotName && $.slotPosition)
            ));
          return h;
        } else
          return (L = (x = l.formData) == null ? void 0 : x.filter) == null ? void 0 : L.call(
            x,
            (h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition
          );
      return [];
    });
    function y() {
      return new Promise((x) => {
        var L, h;
        (h = (L = c.value).resetForm) == null || h.call(L).then((A) => {
          x(A);
        });
      });
    }
    function f() {
      return new Promise((x) => {
        var L, h;
        (h = (L = c.value).refreshFormDom) == null || h.call(L).then((A) => {
          x(A);
        });
      });
    }
    function p() {
      return new Promise((x) => {
        var L, h;
        (h = (L = c.value).reRenderForm) == null || h.call(L).then((A) => {
          x(A);
        });
      });
    }
    function u(x, L) {
      var h, A;
      (A = (h = c.value).setItemToValGroup) == null || A.call(h, x, L);
    }
    function v(x, L) {
      var h, A;
      (A = (h = c.value).updateValGroup) == null || A.call(h, x, L);
    }
    function k(x) {
      var L, h;
      (h = (L = c.value).updateFormDataT) == null || h.call(L, x);
    }
    function g() {
      var x, L;
      (L = (x = c.value).validate) == null || L.call(x);
    }
    function _(x) {
      var L, h;
      (h = (L = c.value).reValidate) == null || h.call(L, x);
    }
    function w(x) {
      var L, h;
      x !== void 0 && (r.value = !!x, (h = (L = c.value).changeLoading) == null || h.call(L, r.value));
    }
    function T() {
      var x, L;
      return (L = (x = c.value).getValGroup) == null ? void 0 : L.call(x);
    }
    function C() {
      r.value = !0;
    }
    function B() {
      var x, L;
      (L = (x = c.value).submit) == null || L.call(x);
    }
    function F() {
      e("on-cancel"), Re(() => {
        var x, L;
        r.value = !1, (L = (x = c.value).changeLoading) == null || L.call(x, !1);
      }, 1e3);
    }
    return s({
      resetForm: y,
      refreshFormDom: f,
      reRenderForm: p,
      setItemToValGroup: u,
      updateValGroup: v,
      updateFormDataT: k,
      validate: g,
      reValidate: _,
      changeLoading: w,
      getValGroup: T,
      submit: B,
      close: F
    }), (x, L) => {
      const h = Y("Button");
      return S(), U("div", {
        style: se(m(o)),
        class: "formGroupBoxVM"
      }, [
        j(Tt, ot({
          ref_key: "formRRef",
          ref: c
        }, x.$attrs, {
          "form-data": l.formData,
          "label-width": l.labelWidth,
          "content-width": l.contentWidth,
          "item-width": l.itemWidth,
          btnLoading: l.btnLoading,
          disabled: l.disabled,
          onOnSubmit: C
        }), nt({ _: 2 }, [
          Ce(m(i), (A) => ({
            name: A.slotName,
            fn: le(({ valGroup: $ }) => [
              Me(x.$slots, A.slotName, { valGroup: $ })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading", "disabled"]),
        he(R("div", {
          class: "formFooterVM",
          style: se({ marginLeft: l.labelWidth + "px" })
        }, [
          R("div", {
            style: se({ width: l.contentWidth }),
            class: "btnBoxKAL"
          }, [
            l.showOkBt ? (S(), Z(h, {
              key: 0,
              onClick: B,
              class: "form-save-btn",
              loading: l.btnLoading && m(r),
              disabled: l.disabled
            }, {
              default: le(() => [
                ke(H(l.okBtTxt || m(I)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])) : ue("", !0),
            l.showCancelBt ? (S(), Z(h, {
              key: 1,
              onClick: F,
              class: "form-cancel-btn"
            }, {
              default: le(() => [
                ke(H(l.cancelBtTxt || m(I)("r.cancel")), 1)
              ]),
              _: 1
            })) : ue("", !0)
          ], 4)
        ], 4), [
          [ge, l.showOkBt || l.showCancelBt]
        ])
      ], 4);
    };
  }
}), Wt = /* @__PURE__ */ ce({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => Be().searchFormLabelWidth },
    itemWidth: { default: () => Be().searchFormItemWidth },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(t, { expose: s, emit: n }) {
    const e = n, l = t, o = E(), r = G(() => {
      var C, B;
      if (Array.isArray(l.formData[0])) {
        let F = [];
        for (let x of l.formData)
          x && (F = F.concat(
            x.filter((L) => (L == null ? void 0 : L.type) === "custom" || (L == null ? void 0 : L.type) === "input" && L.slotName && L.slotPosition)
          ));
        return F;
      }
      return (B = (C = l.formData) == null ? void 0 : C.filter) == null ? void 0 : B.call(
        C,
        (F) => (F == null ? void 0 : F.type) === "custom" || (F == null ? void 0 : F.type) === "input" && F.slotName && F.slotPosition
      );
    });
    function c() {
      return new Promise((C) => {
        var B, F;
        (F = (B = o.value).resetForm) == null || F.call(B).then(() => {
          C();
        });
      });
    }
    function i() {
      return new Promise((C) => {
        var B, F;
        (F = (B = o.value).refreshFormDom) == null || F.call(B).then(() => {
          C();
        });
      });
    }
    function y() {
      return new Promise((C) => {
        var B, F;
        (F = (B = o.value).reRenderForm) == null || F.call(B).then(() => {
          C();
        });
      });
    }
    function f(C, B) {
      var F, x;
      (x = (F = o.value).setItemToValGroup) == null || x.call(F, C, B);
    }
    function p(C, B) {
      var F, x;
      (x = (F = o.value).updateValGroup) == null || x.call(F, C, B);
    }
    function u(C) {
      var B, F;
      (F = (B = o.value).updateFormDataT) == null || F.call(B, C);
    }
    function v() {
      var C, B;
      (B = (C = o.value).validate) == null || B.call(C);
    }
    function k(C) {
      var B, F;
      (F = (B = o.value).reValidate) == null || F.call(B, C);
    }
    function g(C) {
      var B, F;
      (F = (B = o.value).changeLoading) == null || F.call(B, C === void 0 ? !1 : C);
    }
    function _() {
      var C, B;
      return (B = (C = o.value).getValGroup) == null ? void 0 : B.call(C);
    }
    function w(C) {
      e("on-search", C);
    }
    function T() {
      var C, B;
      (B = (C = o.value).submit) == null || B.call(C);
    }
    return Ge(() => {
      const C = o.value.$el;
      C != null && C.parentNode && C.parentNode.addEventListener("keyup", (B) => {
        (B == null ? void 0 : B.keyCode) === 13 && T();
      });
    }), s({
      resetForm: c,
      refreshFormDom: i,
      reRenderForm: y,
      setItemToValGroup: f,
      updateValGroup: p,
      updateFormDataT: u,
      validate: v,
      reValidate: k,
      changeLoading: g,
      getValGroup: _,
      submit: T
    }), (C, B) => (S(), Z(Tt, ot({
      ref_key: "formRRef",
      ref: o
    }, C.$attrs, {
      "form-data": l.formData,
      "label-width": l.labelWidth,
      "item-width": l.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": l.showInlineOkBt,
      "inline-ok-bt-txt": m(I)("r.check"),
      "show-inline-clear-bt": l.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: w
    }), nt({ _: 2 }, [
      Ce(m(r), (F) => ({
        name: F.slotName,
        fn: le(({ valGroup: x }) => [
          Me(C.$slots, F.slotName, { valGroup: x })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), _o = /* @__PURE__ */ ce({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: () => Be().formModalWidth },
    labelWidth: { default: () => Be().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(t, { expose: s, emit: n }) {
    const e = n, l = t, o = E(), r = E(!1), c = E(!1), i = G(() => {
      var h, A;
      if (Array.isArray(l.formData[0])) {
        let $ = [];
        for (let te of l.formData)
          te && ($ = $.concat(
            te.filter((K) => (K == null ? void 0 : K.type) === "custom" || (K == null ? void 0 : K.type) === "input" && K.slotName && K.slotPosition)
          ));
        return $;
      }
      return (A = (h = l.formData) == null ? void 0 : h.filter) == null ? void 0 : A.call(
        h,
        ($) => ($ == null ? void 0 : $.type) === "custom" || ($ == null ? void 0 : $.type) === "input" && $.slotName && $.slotPosition
      );
    });
    function y() {
      return new Promise((h) => {
        var A, $;
        ($ = (A = o.value).resetForm) == null || $.call(A).then(() => {
          h();
        });
      });
    }
    function f() {
      return new Promise((h) => {
        var A, $;
        ($ = (A = o.value).refreshFormDom) == null || $.call(A).then(() => {
          h();
        });
      });
    }
    function p() {
      return new Promise((h) => {
        var A, $;
        ($ = (A = o.value).reRenderForm) == null || $.call(A).then(() => {
          h();
        });
      });
    }
    function u(h, A) {
      var $, te;
      (te = ($ = o.value).setItemToValGroup) == null || te.call($, h, A);
    }
    function v(h, A) {
      var $, te;
      (te = ($ = o.value).updateValGroup) == null || te.call($, h, A);
    }
    function k(h) {
      var A, $;
      ($ = (A = o.value).updateFormDataT) == null || $.call(A, h);
    }
    function g() {
      var h, A;
      (A = (h = o.value).validate) == null || A.call(h);
    }
    function _(h) {
      var A, $;
      ($ = (A = o.value).reValidate) == null || $.call(A, h);
    }
    function w(h) {
      var A, $;
      h !== void 0 && (c.value = !!h, ($ = (A = o.value).changeLoading) == null || $.call(A, c.value));
    }
    function T() {
      var h, A;
      return (A = (h = o.value).getValGroup) == null ? void 0 : A.call(h);
    }
    function C() {
      c.value = !0;
    }
    function B() {
      var h, A;
      l.hideCancelBt ? x() : (A = (h = o.value).submit) == null || A.call(h);
    }
    function F() {
      r.value = !0;
    }
    function x() {
      r.value = !1, Re(() => {
        var h, A;
        c.value = !1, (A = (h = o.value).changeLoading) == null || A.call(h, !1);
      }, 1e3);
    }
    function L(h) {
      e(h ? "on-open" : "on-close");
    }
    return s({
      resetForm: y,
      refreshFormDom: f,
      reRenderForm: p,
      setItemToValGroup: u,
      updateValGroup: v,
      updateFormDataT: k,
      validate: g,
      reValidate: _,
      changeLoading: w,
      getValGroup: T,
      submit: B,
      open: F,
      close: x
    }), (h, A) => {
      const $ = Y("Button"), te = Y("Modal");
      return S(), Z(te, {
        class: we(["formModal", { hideFooter: l.hideFooter }]),
        title: l.title || m(I)("r.title"),
        modelValue: m(r),
        "onUpdate:modelValue": A[0] || (A[0] = (K) => $e(r) ? r.value = K : null),
        "mask-closable": !1,
        "footer-hide": l.hideFooter,
        width: l.width,
        onOnVisibleChange: L
      }, {
        footer: le(() => [
          j($, {
            onClick: B,
            class: "modal-save-btn",
            loading: l.btnLoading && m(c),
            disabled: l.disabled
          }, {
            default: le(() => [
              ke(H(l.okBtTxt || m(I)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled"]),
          l.hideCancelBt ? ue("", !0) : (S(), Z($, {
            key: 0,
            onClick: x,
            class: "modal-cancel-btn"
          }, {
            default: le(() => [
              ke(H(l.cancelBtTxt || m(I)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: le(() => [
          j(Tt, ot({
            ref_key: "formRRef",
            ref: o
          }, h.$attrs, {
            "form-data": l.formData,
            "label-width": l.labelWidth,
            btnLoading: l.btnLoading,
            disabled: l.disabled,
            onOnSubmit: C
          }), nt({ _: 2 }, [
            Ce(m(i), (K) => ({
              name: K.slotName,
              fn: le(({ valGroup: z }) => [
                Me(h.$slots, K.slotName, { valGroup: z })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading", "disabled"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), Vo = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = E(!0), o = E([]), r = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let c = [];
    const i = G(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), y = G(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    _e(
      () => e.data,
      (g) => {
        l.value = !1;
        let _ = [];
        f(g, _), o.value = _, Ie(function() {
          l.value = !0, e.inlineLeaf && Ie(v);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), _e(
      () => y.value,
      (g) => {
        let _, w = "s";
        if (Array.isArray(e.collectVal) ? (_ = e.collectVal[0] || "", w = "a") : _ = e.collectVal, !_ || JSON.stringify(g) === JSON.stringify(c)) {
          c = [];
          return;
        }
        lt({
          group: o.value,
          condition: (T) => (T == null ? void 0 : T.checked) === !0,
          key: "checked",
          val: !1
        }), lt(w === "a" ? {
          group: o.value,
          condition: (T) => bt(g, [_, T == null ? void 0 : T[_]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: o.value,
          condition: (T) => g.indexOf(T == null ? void 0 : T[_]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), _e(
      () => e.disabled,
      (g) => {
        lt({
          group: o.value,
          condition: (_) => _ && _.disableCheckbox !== g,
          key: "disableCheckbox",
          val: g
        }), e.inlineLeaf && Ie(v);
      },
      { immediate: !0 }
    );
    function f(g, _ = []) {
      for (let w of g) {
        let T = !1;
        i.value.length > 1 ? T = Pt(y.value, (B) => B[i.value[0]] === w[i.value[0]]) !== void 0 : T = i.value[0] ? y.value.indexOf(w[i.value[0]]) !== -1 : !1;
        let C = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let B of i.value)
          C[B] = w[B];
        _.push(C), w != null && w.children && w.children.length > 0 && (C.children = [], p(w.children, C.children));
      }
    }
    function p(g, _ = []) {
      for (let w of g) {
        let T = !1;
        i.value.length > 1 ? T = Pt(y.value, (B) => B[i.value[0]] === w[i.value[0]]) !== void 0 : T = i.value[0] ? y.value.indexOf(w[i.value[0]]) !== -1 : !1;
        let C = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let B of i.value)
          C[B] = w[B];
        _.push(C), w != null && w.children && w.children.length > 0 && (C.children = [], f(w.children, C.children));
      }
    }
    function u(g, {
      data: _
    }) {
      let w = "", T = !0;
      if (_.children && _.children.length > 0) {
        for (let C of _.children)
          if (C.children !== void 0) {
            T = !1;
            break;
          }
        T && e.inlineLeaf && (w = "inlineChildXA");
      }
      return g(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: w
        },
        [
          g(
            "span",
            {
              style: {
                fontWeight: _.children ? "bold" : "normal"
              }
            },
            _.name
          )
        ]
      );
    }
    function v(g) {
      if (g) {
        g.expand && Ie(v);
        return;
      }
      let _ = document.querySelectorAll("#" + r + " .inlineChildXA");
      if (_.length > 0)
        for (let w of _) {
          let T = w == null ? void 0 : w.parentElement, C = T == null ? void 0 : T.nextElementSibling;
          if (!C)
            return;
          if (C.tagName !== "BR") {
            let B = T == null ? void 0 : T.parentElement, F = document.createElement("br");
            B == null || B.insertBefore(F, C), C = F.nextElementSibling, (C == null ? void 0 : C.className.indexOf("inlineTreeNodeF")) === -1 && C.setAttribute("class", C.className + " inlineTreeNodeF");
          }
          for (; C != null && C.nextElementSibling; )
            C = C.nextElementSibling, C.className.indexOf("inlineTreeNodeF") === -1 && C.setAttribute("class", C.className + " inlineTreeNodeF");
        }
    }
    function k(g) {
      let _ = [];
      if (e.leaf) {
        for (let w of g)
          if (!w.children)
            if (Array.isArray(e.collectVal)) {
              let T = {};
              for (let C of e.collectVal)
                T[C] = w[C];
              _.push(T);
            } else
              _.push(w[e.collectVal]);
      } else
        for (let w of g)
          if (Array.isArray(e.collectVal)) {
            let T = {};
            for (let C of e.collectVal)
              T[C] = w[C];
            _.push(T);
          } else
            _.push(w[e.collectVal]);
      c = _, n("update:modelValue", _), n("on-change", fe(_));
    }
    return (g, _) => {
      const w = Y("Tree");
      return m(l) ? (S(), Z(w, {
        key: 0,
        id: r,
        class: "checkboxTreeGA",
        data: m(o),
        render: u,
        onOnCheckChange: k,
        onOnToggleExpand: v,
        "show-checkbox": ""
      }, null, 8, ["data"])) : ue("", !0);
    };
  }
}), So = { class: "transferBoxRL" }, Co = { class: "leftBoxLLL" }, To = { class: "fullHeight flexColumnBox" }, Bo = { class: "notGrow" }, xo = { class: "titleLLL" }, Lo = { class: "growFlexItem" }, Oo = { class: "middleBoxLLL" }, Io = { class: "rightBoxLLL" }, Ao = { class: "fullHeight flexColumnBox" }, Po = { class: "notGrow" }, Ro = { class: "titleLLL" }, $o = { class: "growFlexItem" }, Mo = /* @__PURE__ */ ce({
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
      return (t = Be()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Be()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Be()) == null ? void 0 : t.pageShowSizer;
    } },
    leftSearchDataFilter: {},
    rightSearchDataFilter: {}
  },
  emits: ["transferred", "on-data-change-l", "on-data-change-r"],
  setup(t, { expose: s, emit: n }) {
    const e = n, l = t;
    let o = E({}), r = E({}), c = E([]), i = E([]), y = E(0), f = E(0);
    const p = G(() => ({ ...l.constSearchDataLeft, ...o.value })), u = G(() => ({ ...l.constSearchDataRight, ...r.value })), v = G(() => y.value < 1), k = G(() => c.value.length < 1), g = G(() => i.value.length < 1), _ = G(() => f.value < 1), w = E(), T = E(), C = E(), B = E();
    function F() {
      w.value.resetForm(), T.value.resetForm(), Pe(o.value) || (o.value = {}), Pe(r.value) || (r.value = {}), C.value.clearSelect(), B.value.clearSelect();
    }
    function x() {
      C.value.search(), B.value.search();
    }
    function L(N) {
      c.value = N;
    }
    function h(N) {
      i.value = N;
    }
    function A(N) {
      var Q, X, me, ye, pe;
      y.value = ((X = (Q = N == null ? void 0 : N.data) == null ? void 0 : Q.page) == null ? void 0 : X.total) || ((ye = (me = N == null ? void 0 : N.data) == null ? void 0 : me.data) == null ? void 0 : ye.total) || ((pe = N == null ? void 0 : N.data) == null ? void 0 : pe.total) || (N == null ? void 0 : N.total) || 0, e("on-data-change-l", N);
    }
    function $(N) {
      var Q, X, me, ye, pe;
      f.value = ((X = (Q = N == null ? void 0 : N.data) == null ? void 0 : Q.page) == null ? void 0 : X.total) || ((ye = (me = N == null ? void 0 : N.data) == null ? void 0 : me.data) == null ? void 0 : ye.total) || ((pe = N == null ? void 0 : N.data) == null ? void 0 : pe.total) || (N == null ? void 0 : N.total) || 0, e("on-data-change-r", N);
    }
    function te(N) {
      typeof l.leftSearchDataFilter == "function" ? o.value = l.leftSearchDataFilter(N) : o.value = N;
    }
    function K(N) {
      typeof l.rightSearchDataFilter == "function" ? r.value = l.rightSearchDataFilter(N) : r.value = N;
    }
    function z() {
      l.addUrl && J("add");
    }
    function ee() {
      l.deleteUrl && J("delete");
    }
    function b() {
      l.addAllUrl && l.addUrl && J("addAll");
    }
    function D() {
      l.deleteAllUrl && J("deleteAll");
    }
    function J(N) {
      let Q, X, me = {}, ye = "";
      switch (N) {
        case "add":
          Q = l.addMethod, X = l.addUrl, me = l.addParamsHandle(i.value), ye = I("r.add");
          break;
        case "delete":
          Q = l.deleteMethod, X = l.deleteUrl, me = l.deleteParamsHandle(c.value), ye = I("r.remove");
          break;
        case "addAll":
          Q = l.addAllMethod, X = l.addAllUrl, me = l.addAllParamsHandle(u.value), ye = I("r.addAll");
          break;
        case "deleteAll":
          Q = l.deleteAllMethod, X = l.deleteAllUrl, me = l.deleteAllParamsHandle(p.value), ye = I("r.removeAll");
          break;
      }
      X && Q && He[Q](X, me, null, [], { spin: !0 }, !1).then((pe) => {
        (pe == null ? void 0 : pe.code) === 0 ? (De(ye + I("r.success"), (pe == null ? void 0 : pe.message) || "", "success"), C.value && C.value.getTableData(), B.value && B.value.getTableData(), e("transferred")) : De(ye + I("r.failed"), (pe == null ? void 0 : pe.message) || "", "error");
      }).catch(() => {
        De(ye + I("r.error"), "", "error");
      });
    }
    return s({
      reset: F,
      search: x
    }), (N, Q) => {
      const X = Y("Icon"), me = Y("Button");
      return S(), U("div", So, [
        R("div", Co, [
          R("div", To, [
            R("div", Bo, [
              R("div", xo, H(l.titleLeft || m(I)("r.added")), 1),
              j(zt, null, {
                default: le(() => [
                  j(Wt, {
                    ref_key: "leftFormRef",
                    ref: w,
                    "form-data": l.formDataLeft,
                    "form-rules": l.formRulesLeft,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: te
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            R("div", Lo, [
              j(Gt, {
                ref_key: "lTabRef",
                ref: C,
                columns: l.leftTableColumns,
                url: l.leftTableUrl,
                "search-data": m(p),
                onOnSelectionChange: L,
                onOnDataChange: A,
                "init-data": !!(m(Pe)(l.constSearchDataLeft) && l.leftTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: l.usePagePro,
                showTotal: l.showTotal,
                showSizer: l.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ]),
        R("div", Oo, [
          j(me, {
            class: "middleBtLLL",
            type: "default",
            onClick: D,
            disabled: m(v)
          }, {
            default: le(() => [
              ke(H(m(I)("r.removeAll")) + " ", 1),
              j(X, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          j(me, {
            class: "middleBtLLL",
            type: "default",
            onClick: ee,
            disabled: m(k)
          }, {
            default: le(() => [
              ke(H(m(I)("r.remove")) + " ", 1),
              j(X, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          j(me, {
            class: "middleBtLLL",
            type: "primary",
            onClick: z,
            disabled: m(g)
          }, {
            default: le(() => [
              j(X, { type: "ios-arrow-back" }),
              ke(" " + H(m(I)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          j(me, {
            class: "middleBtLLL",
            type: "primary",
            onClick: b,
            disabled: m(_)
          }, {
            default: le(() => [
              j(X, { type: "ios-arrow-back" }),
              ke(" " + H(m(I)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        R("div", Io, [
          R("div", Ao, [
            R("div", Po, [
              R("div", Ro, H(l.titleRight || m(I)("r.notAdded")), 1),
              j(zt, null, {
                default: le(() => [
                  j(Wt, {
                    ref_key: "rightFormRef",
                    ref: T,
                    "form-data": l.formDataRight,
                    "form-rules": l.formRulesRight,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: K
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            R("div", $o, [
              j(Gt, {
                ref_key: "rTabRef",
                ref: B,
                columns: l.rightTableColumns,
                url: l.rightTableUrl,
                "search-data": m(u),
                onOnSelectionChange: h,
                onOnDataChange: $,
                "init-data": !!(m(Pe)(l.constSearchDataRight) && l.rightTableUrl),
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
}), Fo = { class: "boxLPA" }, No = { class: "headerJ" }, Do = { class: "firstT borderBoxAS" }, Ko = { class: "secondT borderBoxAS" }, zo = { class: "firstCol borderBoxAS" }, Uo = { class: "secondCol borderBoxAS" }, Eo = /* @__PURE__ */ ce({
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
    const n = t, e = s, l = E([]), o = G(() => {
      var p;
      let y = fe(n.data), f = fe(l.value);
      for (let u of y) {
        let v = 0;
        if (u != null && u.children && !Pe(u.children))
          for (let k of u.children) {
            for (let g = 0, _ = f == null ? void 0 : f.length; g < _; g++)
              if (Array.isArray(n.collectVal)) {
                let w = !0;
                for (let T of n.collectVal)
                  if (((p = f[g]) == null ? void 0 : p[T]) !== (k == null ? void 0 : k[T])) {
                    w = !1;
                    break;
                  }
                if (w) {
                  k.checked = !0, v++, f.splice(g, 1);
                  break;
                }
              } else if (f[g] === k[n.collectVal]) {
                k.checked = !0, v++, f.splice(g, 1);
                break;
              }
            !k.checked && (k.checked = !1);
          }
        v === 0 ? (u.checked = !1, u.indeterminate = !1) : u.children && v === u.children.length ? (u.checked = !0, u.indeterminate = !1) : (u.checked = !1, u.indeterminate = !0);
      }
      return y;
    });
    _e(
      () => n.modelValue,
      (y, f) => {
        ft(l.value, y) || ft(y, f) || (l.value = y);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function r(y, f) {
      if (y.children)
        for (let p of y.children)
          p.checked = f;
      c();
    }
    function c() {
      i(o.value, !0);
    }
    function i(y, f) {
      let p = [];
      for (let u of y) {
        if (!f && !n.leaf && u.checked && u.indeterminate === !1)
          if (Array.isArray(n.collectVal)) {
            let v = {};
            for (let k of n.collectVal)
              v[k] = u[k];
            p.push(v);
          } else q(n.collectVal) === "String" && p.push(u[n.collectVal]);
        if (u.children) {
          for (let v of u.children)
            if (v.checked)
              if (Array.isArray(n.collectVal)) {
                let k = {};
                for (let g of n.collectVal)
                  k[g] = v[g];
                p.push(k);
              } else q(n.collectVal) === "String" && p.push(v[n.collectVal]);
        }
      }
      f ? (l.value = p, n.leaf ? (e("update:modelValue", p), e("on-change", fe(p))) : Ie(function() {
        i(o.value);
      })) : (e("update:modelValue", p), e("on-change", fe(p)));
    }
    return (y, f) => {
      const p = Y("Checkbox");
      return S(), U("div", Fo, [
        R("div", No, [
          R("div", Do, H(y.firstTitle || m(I)("r.level.1")), 1),
          R("div", Ko, H(y.secondTitle || m(I)("r.level.2")), 1)
        ]),
        (S(!0), U(be, null, Ce(m(o), (u, v) => (S(), U("div", {
          class: "bodyJ",
          key: "checkboxJ" + v
        }, [
          R("div", zo, [
            j(p, {
              modelValue: u.checked,
              "onUpdate:modelValue": (k) => u.checked = k,
              indeterminate: u.indeterminate,
              onOnChange: (k) => r(u, k),
              disabled: y.disabled
            }, {
              default: le(() => [
                ke(H(u[y.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          R("div", Uo, [
            (S(!0), U(be, null, Ce(u.children, (k, g) => (S(), U("div", {
              class: "secItem",
              key: "secItem" + g
            }, [
              j(p, {
                modelValue: k.checked,
                "onUpdate:modelValue": (_) => k.checked = _,
                onOnChange: c,
                disabled: y.disabled
              }, {
                default: le(() => [
                  ke(H(k[y.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), Go = { class: "boxLPB" }, Ho = { class: "headerF" }, Wo = { class: "firstT borderBoxKa" }, jo = { class: "secondT borderBoxKa" }, qo = { class: "thirdT borderBoxKa" }, Xo = { class: "firstCol borderBoxKa" }, Jo = { class: "rightBoxAL" }, Yo = { class: "secondCol borderBoxKa" }, Qo = { class: "thirdCol borderBoxKa" }, Zo = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = E([]), o = G(() => {
      let f = fe(e.data), p = fe(l.value);
      for (let u of f) {
        let v = 0, k = 0;
        if (u != null && u.children && !Pe(u.children))
          for (let g of u.children) {
            let _ = 0;
            if (g.children && !Pe(g.children))
              for (let w of g.children) {
                for (let T = 0, C = p.length; T < C; T++)
                  if (Array.isArray(e.collectVal)) {
                    let B = !0;
                    for (let F of e.collectVal)
                      if (p[T][F] !== w[F]) {
                        B = !1;
                        break;
                      }
                    if (B) {
                      w.checked = !0, _++, p.splice(T, 1);
                      break;
                    }
                  } else if (p[T] === w[e.collectVal]) {
                    w.checked = !0, _++, p.splice(T, 1);
                    break;
                  }
                !w.checked && (w.checked = !1);
              }
            _ === 0 ? (g.checked = !1, g.indeterminate = !1) : g.children && _ === g.children.length ? (g.checked = !0, g.indeterminate = !1, v++) : (g.checked = !1, g.indeterminate = !0, k++);
          }
        v === 0 && k === 0 ? (u.checked = !1, u.indeterminate = !1) : u.children && v === u.children.length ? (u.checked = !0, u.indeterminate = !1) : (u.checked = !1, u.indeterminate = !0);
      }
      return f;
    });
    _e(
      () => e.modelValue,
      (f, p) => {
        ft(l.value, f) || ft(f, p) || (l.value = f);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function r(f, p) {
      if (f.children) {
        for (let u of f.children)
          if (u.checked = p, u.children)
            for (let v of u.children)
              v.checked = p;
      }
      i();
    }
    function c(f, p) {
      if (f.children)
        for (let u of f.children)
          u.checked = p;
      i();
    }
    function i() {
      y(o.value, !0);
    }
    function y(f, p) {
      let u = [];
      for (let v of f) {
        if (!p && !e.leaf && (v != null && v.checked) && v.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let k = {};
            for (let g of e.collectVal)
              k[g] = v[g];
            u.push(k);
          } else q(e.collectVal) === "String" && u.push(v[e.collectVal]);
        if (v != null && v.children)
          for (let k of v.children) {
            if (!p && !e.leaf && k.checked && k.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let g = {};
                for (let _ of e.collectVal)
                  g[_] = k[_];
                u.push(g);
              } else q(e.collectVal) === "String" && u.push(k[e.collectVal]);
            if (k.children) {
              for (let g of k.children)
                if (g.checked)
                  if (Array.isArray(e.collectVal)) {
                    let _ = {};
                    for (let w of e.collectVal)
                      _[w] = g[w];
                    u.push(_);
                  } else q(e.collectVal) === "String" && u.push(g[e.collectVal]);
            }
          }
      }
      p ? (l.value = u, e.leaf ? (n("update:modelValue", u), n("on-change", fe(u))) : Ie(function() {
        y(o.value);
      })) : (n("update:modelValue", u), n("on-change", fe(u)));
    }
    return (f, p) => {
      const u = Y("Checkbox");
      return S(), U("div", Go, [
        R("div", Ho, [
          R("div", Wo, H(f.firstTitle || m(I)("r.level.1")), 1),
          R("div", jo, H(f.secondTitle || m(I)("r.level.2")), 1),
          R("div", qo, H(f.thirdTitle || m(I)("r.level.3")), 1)
        ]),
        (S(!0), U(be, null, Ce(m(o), (v, k) => (S(), U("div", {
          class: "bodyF",
          key: "checkboxJ" + k
        }, [
          R("div", Xo, [
            j(u, {
              modelValue: v.checked,
              "onUpdate:modelValue": (g) => v.checked = g,
              indeterminate: v.indeterminate,
              onOnChange: (g) => r(v, g),
              disabled: f.disabled
            }, {
              default: le(() => [
                ke(H(v[f.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          R("div", Jo, [
            (S(!0), U(be, null, Ce(v.children, (g, _) => (S(), U("div", {
              class: "rightBoxInner",
              key: "secItem" + _
            }, [
              R("div", Yo, [
                j(u, {
                  modelValue: g.checked,
                  "onUpdate:modelValue": (w) => g.checked = w,
                  indeterminate: g.indeterminate,
                  onOnChange: (w) => c(g, w),
                  disabled: f.disabled
                }, {
                  default: le(() => [
                    ke(H(g[f.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              R("div", Qo, [
                (S(!0), U(be, null, Ce(g.children, (w, T) => (S(), U("div", {
                  class: "thirdItem",
                  key: "thirdItem" + T
                }, [
                  j(u, {
                    modelValue: w.checked,
                    "onUpdate:modelValue": (C) => w.checked = C,
                    onOnChange: i,
                    disabled: f.disabled
                  }, {
                    default: le(() => [
                      ke(H(w[f.label]), 1)
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
}), ei = {
  class: "fl",
  style: { "font-weight": "bold" }
}, ti = { class: "btsF" }, li = { key: 0 }, ai = {
  key: 1,
  class: "growFlexItem relativeBox"
}, ni = { class: "fullFlowContent" }, oi = /* @__PURE__ */ ce({
  __name: "WellCard",
  props: {
    title: {},
    fitToContent: { type: Boolean, default: !1 },
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(t) {
    const s = t, n = G(() => {
      let e = {
        width: s.fitToContent ? "fit-content" : s.width + "px",
        height: s.fitToContent ? "fit-content" : s.height + "px"
      };
      return s.inline && (e.display = "inline-block"), e;
    });
    return (e, l) => (S(), U("div", {
      style: se(m(n))
    }, [
      R("div", {
        class: we(["wellCardR", { flexColumnBox: !s.fitToContent }])
      }, [
        R("div", {
          class: we(["panelHeader", { notGrow: !s.fitToContent }])
        }, [
          R("div", ei, H(s.title || m(I)("r.title")), 1),
          R("div", ti, [
            Me(e.$slots, "bts")
          ])
        ], 2),
        s.fitToContent ? (S(), U("div", li, [
          Me(e.$slots, "default")
        ])) : (S(), U("div", ai, [
          R("div", ni, [
            Me(e.$slots, "default")
          ])
        ]))
      ], 2)
    ], 4));
  }
}), ii = /* @__PURE__ */ ce({
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
    const n = s, e = t;
    let l = E(1), o = 1;
    const r = E(""), c = ct([]);
    let i = {}, y = !0, f = !1;
    const p = "scm" + Math.random(), u = G(() => r.value ? I("r.searchFor") + r.value : e.placeholder || I("r.pInput")), v = G({
      get() {
        return e.modelValue ?? "";
      },
      set(x) {
        if (n("update:modelValue", x ?? ""), e.collectLabel && x !== void 0) {
          let L = {};
          for (let h of c.value)
            if (h[e.optionsValKey] === x) {
              L = JSON.parse(JSON.stringify(h));
              break;
            }
          n("on-change", L);
        }
      }
    }), k = G(() => e.searchKey ? {
      ...e.searchData,
      current: l.value,
      [e.searchKey]: r.value
    } : {
      ...e.searchData,
      current: l.value
    });
    _e(
      () => e.getOptions,
      (x) => {
        x ? y && F() : w();
      },
      { immediate: !0 }
    ), _e(
      () => e.url,
      (x) => {
        x && (f = !0);
      }
    );
    const g = E();
    function _() {
      g.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", C);
    }
    function w() {
      y || (v.value = "", y = !0, r.value = "", c.value = [], l.value = 1, o = 1, i = {}, f = !1);
    }
    function T(x) {
      for (let L of c.value)
        if ((L == null ? void 0 : L.label) === x)
          return !0;
      return !1;
    }
    const C = qt(function(x) {
      var h;
      const L = (h = x == null ? void 0 : x.target) == null ? void 0 : h.value;
      T(L) || (Oe(L) ? (f ? w() : (Pe(i) && (i.current = l.value, i.pages = o, i.options = fe(c.value)), Oe(v.value) && (v.value = "")), r.value = String(L), c.value = [], l.value = 1, y = !0, F()) : f ? (w(), F()) : (v.value = "", r.value = "", i.current ? (l.value = i.current, o = i.pages, c.value = fe(i.options), i = {}) : F()));
    }, 600);
    function B() {
      f && w(), l.value < o ? (++l.value, Ie(function() {
        F();
      })) : ul.warning({
        background: !0,
        content: I("r.noMore")
      });
    }
    function F() {
      return new Promise((x, L) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Oe(r.value)) {
            x(!1);
            return;
          }
          He.get(e.url, k.value).then((h) => {
            var te;
            y = !1;
            let A = [];
            (te = h == null ? void 0 : h.data) != null && te.records ? (A = h.data.records, o = h.data.pages) : h != null && h.data && q(h.data) === "Array" ? (A = h.data, o = h.pages) : h != null && h.data && q(h.data) === "Object" && (A = [h.data], o = 1), typeof e.optionFilter == "function" && q(e.optionFilter) === "Function" && (A = e.optionFilter(A)), Pe(A) || (A = A.map((K, z) => {
              let ee = I("r.optionLabel") + z;
              if (Array.isArray(e.optionsLabelKey)) {
                let b = [];
                for (let D = 1, J = e.optionsLabelKey.length; D < J; D++)
                  b.push(K[e.optionsLabelKey[D]]);
                ee = `${K[e.optionsLabelKey[0]]}(${String(b)})`;
              } else Ll(e.optionsLabelKey) && (ee = K[e.optionsLabelKey]);
              if (e.collectLabel) {
                let b = fe(K);
                return delete b.value, delete b.label, {
                  value: K[e.optionsValKey],
                  label: ee,
                  ...b
                };
              }
              return {
                value: K[e.optionsValKey],
                label: ee
              };
            })), c.value.push(...A);
            let $ = {};
            c.value = c.value.filter((K) => $[K == null ? void 0 : K.value] ? !1 : ($[K == null ? void 0 : K.value] = !0, !0)), Ie(function() {
              n("update-option-finish");
            }), x(!0);
          }).catch(() => {
            ul.error(I("r.getDataError")), L(I("r.getDataError"));
          });
        } else
          x(!1);
      });
    }
    return Ge(_), (x, L) => {
      const h = Y("Option"), A = Y("Select"), $ = jt("loadmore");
      return he((S(), Z(A, ot({
        modelValue: m(v),
        "onUpdate:modelValue": L[0] || (L[0] = (te) => $e(v) ? v.value = te : null),
        ref_key: "selectScrollSourceRef",
        ref: g,
        "transfer-class-name": p
      }, x.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: m(u),
        disabled: x.disabled
      }), {
        default: le(() => [
          (S(!0), U(be, null, Ce(m(c), (te, K) => (S(), Z(h, {
            key: "op" + K,
            value: te == null ? void 0 : te.value,
            label: te == null ? void 0 : te.label,
            disabled: te == null ? void 0 : te.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [$, B, p]
      ]);
    };
  }
}), wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: jl,
  AsyncCascader: Wl,
  BtTablePage: Gt,
  CheckboxGroupThreeClass: Zo,
  CheckboxGroupTwoClass: Eo,
  CheckboxTree: Vo,
  Date: Yl,
  EditorPro: Ql,
  FormGroup: wo,
  FormModal: _o,
  FormR: Tt,
  FullPop: Fa,
  HeaderBt: Il,
  Hello: Da,
  IconTxtBtn: $t,
  InputMap: Hl,
  MonthRange: Jl,
  Page404: Ea,
  PagePro: El,
  SearchForm: Wt,
  SelectInput: Gl,
  SelectScrollMore: ii,
  ShowHidePanel: zt,
  ShowHidePanelB: Ln,
  SideMenu: fn,
  SideMenuPro: Sn,
  TableIconBtn: Fl,
  TableSearch: On,
  TableSetting: Kl,
  TransferBox: Mo,
  UploadGroup: Xl,
  WellCard: oi
}, Symbol.toStringTag, { value: "Module" })), si = { class: "a4Line aL notPrint" }, ri = { class: "a4Line aR notPrint" }, ui = { class: "a4Line bL notPrint" }, di = { class: "a4Line bR notPrint" }, ci = { class: "topsL notPrint" }, fi = { class: "topsLTitle" }, pi = { class: "topsLBtn" }, mi = { class: "topsLHelp" }, hi = { key: 0 }, yi = { key: 1 }, vi = { key: 2 }, gi = ["innerHTML"], bi = /* @__PURE__ */ ce({
  __name: "PrintModal",
  setup(t) {
    const s = Xt(), n = E(), e = E(!1), l = E(!1), o = E(!1), r = E(715), c = E(!1), i = E(), y = "tablePrint_" + Date.now().toString(), f = E(""), p = E([]), u = E([]), v = E(!1), k = G(() => ({
      width: r.value + "px"
    })), g = () => {
      i.value && window.sessionStorage.removeItem("print_" + i.value), window.sessionStorage.removeItem(y), window.close();
    }, _ = () => {
      c.value && (c.value = !1);
    }, w = () => {
      v.value = !0;
    }, T = (x) => {
      v.value && (r.value = (x == null ? void 0 : x.layerX) - 20);
    }, C = () => {
      v.value && (v.value = !1);
    }, B = () => {
      c.value = !1;
      let x = window.setTimeout(() => {
        window.clearTimeout(x), window.print();
      }, 100);
    }, F = () => {
      var x, L, h, A, $;
      if (i.value = (x = s == null ? void 0 : s.params) == null ? void 0 : x.isFrom, i.value) {
        let te = window.sessionStorage.getItem("print_" + i.value);
        if (te) {
          const K = JSON.parse(te);
          if (!K) {
            e.value = !0;
            return;
          }
          p.value = K.columns, u.value = K.data, n.value = K.title, f.value = ((L = K == null ? void 0 : K.config) == null ? void 0 : L.customClass) || "", l.value = ((h = K == null ? void 0 : K.config) == null ? void 0 : h.domPrint) || !1, o.value = ((A = K == null ? void 0 : K.config) == null ? void 0 : A.autoPrint) || !1, r.value = (($ = K == null ? void 0 : K.config) == null ? void 0 : $.width) || 715, document.title = (n.value || I("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString();
        } else
          e.value = !0;
      }
    };
    return Ge(() => {
      if (o.value) {
        let x = window.setTimeout(() => {
          window.clearTimeout(x), B();
        }, 100);
      }
      document.addEventListener("click", _), document.addEventListener("mousemove", T), document.addEventListener("mouseup", C);
    }), F(), (x, L) => {
      const h = Y("Table");
      return S(), U("div", {
        class: we(["tablePrintModal", [m(f)]])
      }, [
        he(R("div", { class: "msgL notPrint" }, H(m(I)("r.printGuide.9")), 513), [
          [ge, m(e)]
        ]),
        he(R("div", si, [
          R("p", null, H(m(I)("r.printGuide.7")), 1),
          L[2] || (L[2] = ke()),
          R("p", null, H(m(I)("r.printGuide.5")), 1)
        ], 512), [
          [ge, !m(e)]
        ]),
        he(R("div", ri, [
          R("p", null, H(m(I)("r.printGuide.7")), 1),
          L[3] || (L[3] = ke()),
          R("p", null, H(m(I)("r.printGuide.6")), 1)
        ], 512), [
          [ge, !m(e)]
        ]),
        he(R("div", ui, [
          R("p", null, H(m(I)("r.printGuide.8")), 1),
          L[4] || (L[4] = ke()),
          R("p", null, H(m(I)("r.printGuide.5")), 1)
        ], 512), [
          [ge, !m(e)]
        ]),
        he(R("div", di, [
          R("p", null, H(m(I)("r.printGuide.8")), 1),
          L[5] || (L[5] = ke()),
          R("p", null, H(m(I)("r.printGuide.6")), 1)
        ], 512), [
          [ge, !m(e)]
        ]),
        he(R("div", ci, [
          R("div", fi, H(m(n) || m(I)("r.print")), 1),
          R("div", pi, [
            j($t, {
              icon: "md-help-circle",
              name: m(I)("r.help"),
              onClick: L[0] || (L[0] = It((A) => c.value = !m(c), ["stop"]))
            }, null, 8, ["name"]),
            j($t, {
              icon: "md-print",
              name: m(I)("r.preview"),
              onClick: B
            }, null, 8, ["name"]),
            m(l) ? ue("", !0) : (S(), Z(Kl, {
              key: 0,
              modelValue: m(p),
              "onUpdate:modelValue": L[1] || (L[1] = (A) => $e(p) ? p.value = A : null),
              "s-key": y,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            j(Fl, {
              icon: "md-close",
              onClick: g,
              title: m(I)("r.close")
            }, null, 8, ["title"])
          ]),
          he(R("div", mi, [
            m(l) ? ue("", !0) : (S(), U("p", hi, [
              L[6] || (L[6] = R("span", null, "1. ", -1)),
              R("span", null, H(m(I)("r.printGuide.1")), 1)
            ])),
            m(l) ? ue("", !0) : (S(), U("p", yi, [
              L[7] || (L[7] = R("span", null, "2. ", -1)),
              R("span", null, H(m(I)("r.printGuide.2")), 1)
            ])),
            m(l) ? (S(), U("p", vi, [
              L[8] || (L[8] = R("span", null, "1. ", -1)),
              R("span", null, H(m(I)("r.printGuide.10")), 1)
            ])) : ue("", !0),
            R("p", null, [
              R("span", null, H(m(l) ? "2. " : "3. "), 1),
              R("span", null, H(m(I)("r.printGuide.3")), 1)
            ]),
            R("p", null, [
              R("span", null, H(m(l) ? "3. " : "4. "), 1),
              R("span", null, H(m(I)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ge, m(c)]
          ])
        ], 512), [
          [ge, !m(e)]
        ]),
        m(l) ? (S(), U("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: se(m(k))
        }, [
          R("div", {
            class: "settingLine",
            onMousedown: It(w, ["stop"])
          }, null, 32)
        ], 4)) : ue("", !0),
        m(l) ? (S(), U("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: m(u),
          style: se(m(k))
        }, null, 12, gi)) : ue("", !0),
        m(l) ? ue("", !0) : he((S(), Z(h, {
          key: 2,
          class: "tablePW",
          columns: m(p),
          data: m(u),
          border: ""
        }, null, 8, ["columns", "data"])), [
          [ge, !m(e)]
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
function ki(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: bi
  })), Ze = t, location.pathname.indexOf("tablePrint") > -1 ? (Ze.push(location.pathname), _l()) : location.hash.indexOf("tablePrint") > -1 && (Ze.push(location.hash.replace(/^#/, "")), _l());
}
function Zl(t) {
  return q(t) === "Object" && (t.width = t.minWidth || 100, t.sortable = !1, delete t.minWidth, delete t.__id, t.resizable = !0, t.children && q(t.children) === "Array" && (t.children = t.children.map(Zl))), t;
}
function wi(t, s, n, e) {
  var y, f, p;
  if (!Ze)
    return;
  let l;
  if (!(e != null && e.domPrint)) {
    let u = fe(
      t.filter((v) => (v == null ? void 0 : v.key) || (v == null ? void 0 : v.children))
    );
    u[0].type === "selection" && u.shift(), u.length ? l = u.map(Zl) : l = [];
  }
  let o = (f = (y = Ze == null ? void 0 : Ze.currentRoute) == null ? void 0 : y.value) == null ? void 0 : f.fullPath;
  o && (o = (p = o.replace) == null ? void 0 : p.call(o, /\//g, "_"));
  let r = {
    data: s,
    title: n,
    config: e
  };
  e != null && e.domPrint || (r.columns = l), window.sessionStorage.setItem("print_" + o, JSON.stringify(r));
  const c = Ze.resolve({
    name: "tablePrint",
    params: { isFrom: o }
  });
  window.open(c == null ? void 0 : c.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const Qt = {
  print: wi,
  init: ki
};
function _i(t = "", s = "", n = {}) {
  n.domPrint = !0, n.width || (n.width = 715), Qt.print([], t, s, n);
}
function Vi(t) {
  var o, r;
  const s = (...c) => Xe.apply(this, c), n = s("r.closePreview"), e = s("r.fullImg");
  let l = "previewImg" + Math.floor(Math.random() * 1e7);
  (r = (o = Qe) == null ? void 0 : o.info) == null || r.call(o, {
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (c) => Le(
      "div",
      {
        class: "previewModal",
        id: l
      },
      [
        Le(
          "div",
          {
            class: "previewModalInner"
          },
          [
            Le("img", {
              src: t,
              alt: e
            }),
            Le(wa, {
              type: "md-close",
              title: n,
              class: "previewModalDelete",
              onClick() {
                var i, y;
                (y = (i = Qe) == null ? void 0 : i.remove) == null || y.call(i);
              }
            })
          ]
        )
      ]
    )
  }), Re(() => {
    var y, f, p, u, v, k;
    const c = (u = (p = (f = (y = document.getElementById(l)) == null ? void 0 : y.parentElement) == null ? void 0 : f.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : u.parentElement, i = (k = (v = document.getElementById(l)) == null ? void 0 : v.parentElement) == null ? void 0 : k.nextSibling;
    c && (c.style.height = "0"), c && (c.style.padding = "0"), i && (i.style.display = "none");
  }, 10);
}
const Si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: He,
  $swal: De,
  $swalConfirm: Dl,
  domPrint: _i,
  fullScreenImgByDom: dt,
  fullScreenImgPreview: Vi,
  messageBox: Et,
  setInterval: dn,
  setTimeout: Re,
  tablePrint: Qt
}, Symbol.toStringTag, { value: "Module" }));
(() => {
  if (window.wangeditorMenuInit)
    return;
  class t {
    constructor() {
      it(this, "title");
      it(this, "iconSvg");
      it(this, "tag");
      it(this, "alwaysEnable");
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
      var i, y, f, p, u, v, k, g, _;
      const l = document.getElementById("editor-preview");
      let o = localStorage.getItem("editorPreviewW") || 300, r = localStorage.getItem("editorPreviewH") || 500;
      const c = (i = e == null ? void 0 : e.getHtml) == null ? void 0 : i.call(e);
      if (l) {
        let w = (v = (u = (p = (f = (y = l.children) == null ? void 0 : y[0]) == null ? void 0 : f.children) == null ? void 0 : p[1]) == null ? void 0 : u.children) == null ? void 0 : v[0], T = (_ = (g = (k = l.children) == null ? void 0 : k[0]) == null ? void 0 : g.children) == null ? void 0 : _[1];
        w && (w.innerHTML = c, w.style.width = o + "px"), T && (T.style.height = r + "px"), l.style.display = "block";
      } else {
        const w = document.body, T = document.createElement("div");
        T.setAttribute("id", "editor-preview"), T.setAttribute("class", "editor-preview-mask"), T.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${o}' min='200'><span>高</span><input type='number' value='${r}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let C = T.children[0].children[1], B = T.children[0].children[1].children[0], F = T.children[0].children[0].children[0].children[1];
        const x = 40, L = 70, h = (K) => {
          var b;
          if ((K == null ? void 0 : K.type) === "keyup") {
            let D = !1;
            if (K.key && (D = K.key !== "Enter"), D)
              return;
          }
          let z = (b = K == null ? void 0 : K.target) == null ? void 0 : b.value;
          if (z = Number(z), B.style && B.style.width === z + "px")
            return;
          const ee = w.clientWidth;
          z < 250 ? (z = 250, K.target.value = 250) : z > ee - x && (z = ee - x, K.target.value = ee - x), B.style.width = z + "px", localStorage.setItem("editorPreviewW", z);
        };
        F.addEventListener("blur", h), F.addEventListener("keyup", h);
        let A = T.children[0].children[0].children[0].children[3];
        const $ = (K) => {
          var b;
          if ((K == null ? void 0 : K.type) === "keyup") {
            let D = !1;
            if (K.key && (D = K.key !== "Enter"), D)
              return;
          }
          let z = (b = K == null ? void 0 : K.target) == null ? void 0 : b.value;
          if (z = Number(z), C.style && C.style.height === z + "px")
            return;
          const ee = w.clientHeight;
          z < 300 ? (z = 300, K.target.value = 300) : z > ee - L && (z = ee - L, K.target.value = ee - L), C.style.height = z + "px", localStorage.setItem("editorPreviewH", z);
        };
        A.addEventListener("blur", $), A.addEventListener("keyup", $), T.children[0].children[0].children[1].addEventListener("click", () => {
          T.style.display = "none";
        }), B.innerHTML = c, B.style.width = o + "px", C.style.height = r + "px", w.append(T);
      }
    }
  }
  const s = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  Ta.registerMenu(s), window.wangeditorMenuInit = !0;
})();
const Hi = wt.use, Wi = wt.i18n, Vl = {
  ...Si,
  ...nn
}, Ci = function(t, s = {}) {
  He.init(s.useStore || s.store, t), t.use(Ba), s.locale && wt.use(s.locale), s.i18n && wt.i18n(s.i18n), s.router && (un(s.router), Qt.init(s.router)), s.amap && Jn(s.amap), s.notRegistryGlobal || (Object.keys(wl).forEach((n) => {
    t.component(n) || t.component(n, wl[n]);
  }), Object.keys(Vl).forEach((n) => {
    t.config.globalProperties[n] = Vl[n];
  })), t.directive("has") || t.directive("has", (n, e) => {
    e.value && !Jt(e.value) && (n.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", {
    mounted(n, e) {
      var o;
      let l = n;
      e.arg && (l = (o = document.getElementsByClassName(e.arg)) == null ? void 0 : o[0]), l && l.addEventListener("scroll", function() {
        l.scrollTop > 0 && l.scrollHeight - l.scrollTop <= l.clientHeight && e.value();
      });
    }
  }), t.directive("clickOutside") || t.directive("clickOutside", Nl), t.config.globalProperties.fontSizeBase = 14, t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.btTablePageAlign = "center", t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !0, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, ji = { install: Ci };
export {
  He as $fetch,
  De as $swal,
  Dl as $swalConfirm,
  jl as AlCascaderMC,
  Wl as AsyncCascader,
  Gt as BtTablePage,
  Zo as CheckboxGroupThreeClass,
  Eo as CheckboxGroupTwoClass,
  Vo as CheckboxTree,
  Yl as Date,
  Ql as EditorPro,
  wo as FormGroup,
  _o as FormModal,
  Tt as FormR,
  Fa as FullPop,
  Il as HeaderBt,
  Da as Hello,
  $t as IconTxtBtn,
  Hl as InputMap,
  Jl as MonthRange,
  Ea as Page404,
  El as PagePro,
  Wt as SearchForm,
  Gl as SelectInput,
  ii as SelectScrollMore,
  zt as ShowHidePanel,
  Ln as ShowHidePanelB,
  fn as SideMenu,
  Sn as SideMenuPro,
  Fl as TableIconBtn,
  On as TableSearch,
  Kl as TableSetting,
  Mo as TransferBox,
  Xl as UploadGroup,
  oi as WellCard,
  Ft as clearObj,
  ln as dataFilterOrToUrl,
  Ja as decimalDigitsLimit,
  ji as default,
  _i as domPrint,
  Pl as downloadFileByFormSubmit,
  $n as downloadFileReaderFile,
  Ei as emptyInput,
  Mn as fakeALinkClick,
  Ya as fileExport,
  vt as findCollection,
  Ut as findPath,
  ja as formDataHeadConfig,
  dt as fullScreenImgByDom,
  Vi as fullScreenImgPreview,
  Qa as getColumnsKeys,
  pl as getFileSrc,
  zl as getFileTypeByName,
  ml as getFileTypeIconByName,
  Fn as getStringWidth,
  Wa as has,
  Jt as hasPermission,
  Ui as htmlDecode,
  zi as htmlEncode,
  an as htmlPrint,
  Wi as i18n,
  Ci as install,
  Mt as isClient,
  en as isEmptyValue,
  rt as isImgByFile,
  $l as isNaN,
  Za as isNumberValue,
  Oe as isValidValue,
  Hi as locale,
  Et as messageBox,
  q as myTypeof,
  Xa as oneOf,
  Nt as removeEmptyValue,
  dn as setInterval,
  Re as setTimeout,
  lt as setValByOption,
  je as setValue,
  Yt as siblingElems,
  Gi as stopBubbling,
  tn as stringLength,
  Qt as tablePrint,
  qa as toFormData,
  Rn as toHump,
  Al as toLine,
  Rl as tooltipManual,
  _t as trimObj
};
//# sourceMappingURL=plugRQw.js.map
