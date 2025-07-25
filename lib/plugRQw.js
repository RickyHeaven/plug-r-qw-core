var oa = Object.defineProperty;
var ia = (t, r, n) => r in t ? oa(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[r] = n;
var it = (t, r, n) => ia(t, typeof r != "symbol" ? r + "" : r, n);
import { getCurrentInstance as St, defineComponent as ce, resolveComponent as Q, createElementBlock as z, openBlock as S, normalizeStyle as se, normalizeClass as we, createBlock as te, createCommentVNode as ue, renderSlot as Me, ref as E, computed as G, withDirectives as he, unref as m, createElementVNode as R, createVNode as q, toDisplayString as H, withCtx as le, createTextVNode as ke, vShow as ge, resolveDirective as jt, onMounted as Ge, nextTick as Ae, onUpdated as sa, onUnmounted as Tl, h as Le, isRef as $e, Fragment as be, renderList as Ce, onBeforeMount as Bl, watch as _e, mergeModels as ra, useModel as ua, onBeforeUnmount as xl, Teleport as da, withModifiers as At, mergeProps as ot, shallowRef as ct, triggerRef as ca, createSlots as nt, toRef as fa, toValue as Lt } from "vue";
import pa from "deepmerge";
import { debounce as qt, isPlainObject as at, cloneDeep as fe, isObject as ma, isFunction as ha, isEmpty as Pe, isNumber as yt, last as gt, isEqual as ft, isString as Ll, first as It, find as Pt, indexOf as rl, findIndex as bt, remove as ya } from "lodash-es";
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
  function r(n, ...e) {
    let l;
    return e.length === 1 && typeof e[0] == "object" && (l = e[0]), (!l || !l.hasOwnProperty) && (l = {}), n === void 0 ? "" : n.replace(xa, (i, s, c, o) => {
      let y;
      return n[o - 1] === "{" && n[o + i.length] === "}" ? c : (y = t(l, c) ? l[c] : null, y ?? "");
    });
  }
  return r;
}
const Oa = La();
let kt = Ol;
const Aa = {
  zh: Ol
};
let cl, fl = {}, Fe, Ia = function(t, r) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, r);
  if (Fe && Fe.global)
    return Fe.global.t(t, r);
  if (Fe && Fe.locale) {
    if (!fl[Fe.locale] || cl != Fe.locale) {
      fl[Fe.locale] = !0;
      let n = Fe.getLocaleMessage(Fe.locale) || {}, e = pa(Aa[Fe.locale], n, { clone: !0 });
      kt = e, Fe.setLocaleMessage(Fe.locale, e), cl = Fe.locale;
    }
    return Fe.hlang(t, r);
  }
};
const Xe = function(t, r) {
  let n = Ia.apply(this, [t, r]);
  if (n != null)
    return n;
  const e = t.split(".");
  let l = kt;
  for (let i = 0, s = e.length; i < s; i++) {
    const c = e[i];
    if (n = l[c], i === s - 1)
      return Oa(n, r);
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
function A(t, r) {
  var e, l, i;
  const n = (i = (l = (e = St()) == null ? void 0 : e.appContext) == null ? void 0 : l.config) == null ? void 0 : i.globalProperties;
  return Xe.apply(n, [t, r]);
}
const Al = /* @__PURE__ */ ce({
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
  setup(t, { emit: r }) {
    const n = t, e = r;
    function l() {
      n.disabled || e("click");
    }
    return (i, s) => {
      const c = Q("Icon");
      return S(), z("div", {
        class: we({ headerBtCTM: !0, withIconCTM: n.icon || n.withIcon, disabled: n.disabled }),
        style: se({ color: n.color, borderLeftColor: n.borderColor }),
        onClick: l
      }, [
        n.icon ? (S(), te(c, {
          key: 0,
          size: n.iconSize,
          type: n.icon
        }, null, 8, ["size", "type"])) : ue("", !0),
        Me(i.$slots, "default")
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
  setup(t, { expose: r, emit: n }) {
    const e = t, l = n;
    let i = E(!1);
    const s = G(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), c = G(() => ({ zIndex: e.zIndex }));
    function o() {
      i.value = !0, l("on-open");
    }
    function y(f) {
      i.value = !1, l("on-close", f === !0);
    }
    return r({
      open: o,
      close: y
    }), (f, p) => he((S(), z("div", {
      class: "fullScreenPopBoxAM",
      style: se(m(c))
    }, [
      R("div", {
        class: "headerAM",
        style: se({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: m(s) })
      }, [
        R("span", $a, H(f.title || m(A)("r.title")), 1),
        q(Al, {
          icon: "md-return-left",
          onClick: y
        }, {
          default: le(() => [
            ke(H(m(A)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      R("div", Ma, [
        Me(f.$slots, "default")
      ])
    ], 4)), [
      [ge, m(i)]
    ]);
  }
}), Na = { class: "msg" }, Da = /* @__PURE__ */ ce({
  __name: "Hello",
  setup(t) {
    let r = E("Greetings from Ricky.");
    return (n, e) => (S(), z("span", Na, H(m(r)), 1));
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
  setup(t, { emit: r }) {
    const n = t, e = r, l = G(() => {
      var s;
      return Math.floor(n.size / 17 * ((s = Be()) == null ? void 0 : s.fontSizeBase)) + "px";
    });
    function i(s) {
      n.disabled || e("click", s);
    }
    return (s, c) => {
      const o = Q("Icon"), y = jt("has");
      return he((S(), z("div", {
        class: we(["tabTopBtnsT", { disabled: n.disabled }]),
        onClick: i,
        style: se({ "font-size": m(l) })
      }, [
        q(o, {
          type: n.icon,
          size: n.size
        }, null, 8, ["type", "size"]),
        ke(" " + H(n.name || m(A)("r.button")), 1)
      ], 6)), [
        [y, s.has]
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
    return (l, i) => {
      const s = Q("Button");
      return S(), z("div", Ka, [
        i[0] || (i[0] = R("div", { class: "t404" }, "404", -1)),
        R("div", za, "UH OH! " + H(m(A)("r.pageNotFound")), 1),
        R("div", Ua, H(m(A)("r.notFoundMsg")), 1),
        q(s, {
          class: "bt404",
          onClick: e
        }, {
          default: le(() => [
            ke(H(m(A)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function De(t, r, n, e = !0) {
  const l = (...i) => Xe.apply(this, i);
  return new Promise((i, s) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let c = l("r.confirm"), o = l("r.cancel"), y = !1, f = "swalConfirmBt", p = "swalCancelBt";
      const u = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let v = "";
      t.text && u.test(X(t.text)) ? v = "content" : t.text && X(t.text) === "String" && (v = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (o = t.buttons.cancel.text) && (y = !0), t.buttons.cancel.className && (p = t.buttons.cancel.className), t.buttons.confirm.text && (c = t.buttons.confirm.text), t.buttons.confirm.className && (f = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (o = t.buttons[0], y = !0), t.buttons[1] && (c = t.buttons[1]))), mt({
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
            text: o,
            value: null,
            visible: y,
            className: p
          }
        },
        closeOnClickOutside: t.closeOnClickOutside ?? !0
      }).then((k) => {
        k && typeof t.onOk == "function" && t.onOk(), i(k);
      }).catch((k) => {
        s(k);
      });
    } else if (typeof t == "string") {
      let c = "";
      if (r)
        switch (typeof r) {
          case "string":
            c = "text";
            break;
          case "object":
            c = "content";
            break;
        }
      mt({
        title: t,
        [c]: r || "",
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
      }).then((o) => {
        i(o);
      }).catch((o) => {
        s(o);
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
    const r = t, n = E(), e = E(), l = E(!0);
    let i = null;
    const s = E(200);
    function c() {
      const o = l.value ? n.value : e.value;
      if (!o)
        return;
      let y = document.createRange();
      y.setStart(o, 0), y.setEnd(o, o.childNodes.length);
      const f = y.getBoundingClientRect().width;
      s.value = o.offsetWidth * 2, l.value = f < o.offsetWidth, y = null;
    }
    return Ge(() => {
      c(), i = qt(() => {
        Ae(function() {
          c();
        });
      }, 200), window.addEventListener("resize", i);
    }), sa(c), Tl(() => {
      window.removeEventListener("resize", i);
    }), (o, y) => (S(), z("div", Ga, [
      m(l) ? (S(), z("span", {
        key: 0,
        ref_key: "spanRef",
        ref: n,
        class: "contentText"
      }, H(r.content), 513)) : (S(), te(m(va), {
        key: 1,
        content: typeof r.content == "boolean" ? String(r.content) : r.content ?? "",
        "max-width": m(s),
        transfer: ""
      }, {
        default: le(() => [
          R("span", {
            ref_key: "contentRef",
            ref: e,
            class: "contentText"
          }, H(r.content), 513)
        ]),
        _: 1
      }, 8, ["content", "max-width"]))
    ]));
  }
}), Mt = typeof window < "u";
function je(t, r, n) {
  $e(t[r]) ? t[r].value = n : t[r] = n;
}
function X(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function Wa(t) {
  return { style: { display: Jt(t) ? "unset" : "none" } };
}
function Il(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function _t(t) {
  let r = X(t);
  if (r === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = X(t[n]);
        e === "String" ? t[n] = t[n].trim() : (e === "Object" || e === "Array") && _t(t[n]);
      }
  } else if (r === "Array")
    for (let n = 0, e = t.length; n < e; n++) {
      let l = X(t[n]);
      l === "String" ? t[n] = t[n].trim() : (l === "Array" || l === "Object") && _t(t[n]);
    }
  return t;
}
function Ft(t, r = []) {
  if (X(t) === "Array")
    return t.forEach((n, e) => {
      switch (X(n)) {
        case "Array":
        case "Object":
          Ft(n);
          break;
        default:
          t[e] = null;
      }
    }), t;
  if (X(t) === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = !0;
        for (let l of r)
          if (l === n) {
            e = !1;
            break;
          }
        if (e)
          switch (X(t[n])) {
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
  let r = new FormData();
  for (let n in t)
    t.hasOwnProperty(n) && t[n] !== null && r.append(n, t[n]);
  return r;
}
function vt(t, r, n = !1) {
  if (!t || !r)
    return !1;
  let e, l = "notFoundC", i = function(s, c) {
    if (Array.isArray(s)) {
      if (X(c) === "Function" && c(s))
        return l = s, [];
      for (let o of s) {
        if (l !== "notFoundC")
          break;
        if (X(c) === "Function" && c(o) || o === c)
          return l = o, [s.indexOf(o)];
        if (X(o) === "Array" || X(o) === "Object") {
          let y = i(o, c);
          if (y !== void 0)
            return [s.indexOf(o), ...y];
        }
      }
    } else if (X(s) === "Object") {
      if (X(c) === "Function" && c(s))
        return l = s, [];
      for (let o in s) {
        if (l !== "notFoundC")
          break;
        if (s.hasOwnProperty(o)) {
          if (X(c) === "Function" && c(o) || s[o] === c)
            return l = s[o], [o];
          if (X(s[o]) === "Object" || X(s[o]) === "Array") {
            let y = i(s[o], c);
            if (y !== void 0)
              return [o, ...y];
          }
        }
      }
    }
  };
  return e = i(t, r), n ? e || !1 : l === "notFoundC" ? !1 : l;
}
function Xa(t, r) {
  for (let n = 0, e = r.length; n < e; n++)
    if (t === r[n])
      return !0;
  return !1;
}
function Ja(t, r = 2) {
  let n = new RegExp(`(^-?\\d+\\.\\d{${r}})(\\d+$)`), e = t && String(t) || "";
  return n.test(e) ? Number(e.replace(n, "$1")) : t;
}
function Pl(t, r = {}, n = "get") {
  let e = document.createElement("form"), l = document.getElementsByTagName("body")[0];
  l.appendChild(e), e.setAttribute("style", "display:none"), e.setAttribute("target", ""), e.setAttribute("method", n);
  let i = t;
  if (window && window.hasOwnProperty("g")) {
    let s = Object.keys(window.g).filter((c) => {
      var o;
      return ((o = c == null ? void 0 : c.indexOf) == null ? void 0 : o.call(c, "URL")) > -1;
    }).map((c) => {
      var o;
      return (o = c.replace) == null ? void 0 : o.call(c, "URL", "");
    });
    for (let c of s) {
      let o = new RegExp("^/" + c + "(?=/.*$)", "i");
      if (o.test(t) && window.g[c + "URL"]) {
        i = window.g[c + "URL"] + t.replace(o, "");
        break;
      }
    }
  }
  if (e.setAttribute("action", i), at(r)) {
    for (let c in r)
      if (r.hasOwnProperty(c) && (r[c] || r[c] === 0 || r[c] === !1 || r[c] === "")) {
        let o = document.createElement("input");
        o.setAttribute("type", "hidden"), o.setAttribute("name", c), o.setAttribute("value", r[c]), e.appendChild(o);
      }
    e.submit();
    let s = setTimeout(() => {
      l.removeChild(e), clearTimeout(s), s = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function Ya(t, r = {}, n = "get") {
  if (r.hasOwnProperty("columns") && (r.columns === "" || r.columns === null || r.columns === void 0)) {
    De.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  Pl(t, r, n);
}
function Qa(t, r, n = !1) {
  let e;
  if (t && X(r) === "Array") {
    let l = localStorage.getItem(t);
    if (l) {
      let i = JSON.parse(decodeURI(l));
      e = r.filter((s) => {
        var c;
        return (s == null ? void 0 : s.key) && ((c = i == null ? void 0 : i.indexOf) == null ? void 0 : c.call(i, s.title)) !== -1;
      }).map((s) => s.key);
    } else
      e = r.map((i) => i == null ? void 0 : i.key);
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
function Rl(t, r = !1, n = "") {
  return function(e, l) {
    var s, c;
    let i;
    if (Array.isArray(t)) {
      let o = [];
      for (let y of t)
        Oe((s = l.row) == null ? void 0 : s[y]) && o.push(l.row[y]);
      i = o.join(n);
    } else typeof t == "function" ? i = t(l) : i = (c = l.row) == null ? void 0 : c[t];
    return Le(Ha, { content: r ? i === "" ? "--" : i ?? "--" : i });
  };
}
function en(t) {
  if (at(t)) {
    for (let r in t)
      if (t.hasOwnProperty(r) && Oe(t[r]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let r of t)
      if (Oe(r))
        return !1;
    return !0;
  }
  return !Oe(t);
}
function tn(t) {
  return X(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : X(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function lt({
  group: t,
  condition: r,
  key: n,
  val: e,
  childKey: l = "children"
}) {
  if (X(t) !== "Array" || X(r) !== "Function" || X(n) !== "String" || X(l) !== "String")
    return !1;
  t.forEach((i) => {
    r(i) && (X(e) === "Function" ? i[n] = e(i[n]) : i[n] = e), X(i[l]) === "Array" && i[l].length > 0 && lt({
      group: i[l],
      condition: r,
      key: n,
      val: e,
      childKey: l
    });
  });
}
function Jt(t) {
  let r = sessionStorage.getItem("btnPermissions");
  return r ? r.split(",").indexOf(t) > -1 : !1;
}
function $l(t) {
  return X(t) === "Number" && String(t) === "NaN";
}
function ln(t, r = !1, n = !1) {
  if (X(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), l = "";
  for (let i in e)
    if (e.hasOwnProperty(i)) {
      let s = e[i];
      s === void 0 || s === "" || X(s) === "String" && s.trim() === "" || s === null || $l(s) ? n ? r ? l += i + "=&" : e[i] = "" : delete e[i] : r && (l += i + "=" + s + "&");
    }
  return r ? l.length > 0 ? l.substring(0, l.length - 1) : "" : e;
}
function Nt(t) {
  let r = {};
  if (Array.isArray(t)) {
    r = [];
    for (let n of t)
      Array.isArray(n) || at(n) ? r.push(Nt(n)) : Oe(n) && r.push(n);
  } else if (at(t))
    for (let n in t)
      t.hasOwnProperty(n) && (Array.isArray(t[n]) || at(t[n]) ? r[n] = Nt(t[n]) : Oe(t[n]) && (r[n] = t[n]));
  return r;
}
function an(t) {
  const r = window.open();
  if (r) {
    r.document.write(t);
    let n = setTimeout(() => {
      r.print(), window.clearTimeout(n), n = null;
    }, 10);
  }
}
function Yt(t) {
  let r = [], n = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && r.push(t);
  for (; n.nextSibling && (n = n.nextSibling); )
    n.nodeType === 1 && r.push(n);
  return r;
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
  myTypeof: X,
  oneOf: Xa,
  removeEmptyValue: Nt,
  setValByOption: lt,
  setValue: je,
  siblingElems: Yt,
  stringLength: tn,
  toFormData: qa,
  toLine: Il,
  tooltipManual: Rl,
  trimObj: _t
}, Symbol.toStringTag, { value: "Module" })), on = { class: "groupBoxRP" }, sn = ["onClick"], rn = /* @__PURE__ */ ce({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const r = Ct(), n = t;
    function e(i) {
      return (i == null ? void 0 : i.path) === n.pathName ? "active" : "";
    }
    function l(i, s) {
      var f, p, u, v, k, g, _, w;
      (f = i == null ? void 0 : i.preventDefault) == null || f.call(i);
      let c = i == null ? void 0 : i.target;
      if (s && !s.children && !c.classList.contains("active")) {
        r.push(s.path);
        return;
      }
      let o = c.parentNode, y = Yt(o);
      for (let T of y) {
        (u = (p = T == null ? void 0 : T.classList) == null ? void 0 : p.remove) == null || u.call(p, "open");
        const C = (v = T == null ? void 0 : T.querySelectorAll) == null ? void 0 : v.call(T, ".open");
        if (C && Array.isArray(C))
          for (let B of C)
            (g = (k = B == null ? void 0 : B.classList) == null ? void 0 : k.remove) == null || g.call(k, "open");
      }
      (w = (_ = o == null ? void 0 : o.classList) == null ? void 0 : _.toggle) == null || w.call(_, "open");
    }
    return (i, s) => {
      const c = Q("Icon"), o = Q("sideMenuGroup", !0);
      return S(), z("ul", on, [
        (S(!0), z(be, null, Ce(n.data, (y, f) => (S(), z(be, {
          key: (y == null ? void 0 : y.path) + f
        }, [
          y ? (S(), z("li", {
            key: 0,
            class: we({ dropItemRP: y.children })
          }, [
            R("div", {
              class: we(["menuTxtR", e(y)]),
              onClick: (p) => l(p, y),
              style: se({ paddingLeft: y.level * 20 + "px" })
            }, [
              y != null && y.icon ? (S(), te(c, {
                key: 0,
                class: "menuIcoL",
                custom: "iconfont " + y.icon
              }, null, 8, ["custom"])) : ue("", !0),
              R("span", null, H((y == null ? void 0 : y.name) || "-- no name --"), 1)
            ], 14, sn),
            y.children ? (S(), te(o, {
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
    Dt.map((r) => {
      window.clearTimeout(r);
    }), Kt.map((r) => {
      window.clearInterval(r);
    }), Dt.length = 0, Kt.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Re = function(t, r) {
  let n = window.setTimeout(t, r);
  return Dt.push(n), n;
}, dn = function(t, r) {
  let n = window.setInterval(t, r);
  return Kt.push(n), n;
}, cn = { class: "menuListR" }, fn = /* @__PURE__ */ ce({
  __name: "SideMenu",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: r }) {
    const n = t, e = r, l = Xt(), i = E(!0), s = E(), c = E(), o = G(() => i.value ? A("r.hideMenu") : A("r.showMenu")), y = G(() => i.value ? "ios-arrow-back" : "ios-arrow-forward");
    Bl(() => {
      let u = localStorage.getItem("menuDisplayR") || "";
      u !== "" ? i.value = JSON.parse(u) : (i.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), _e(
      () => l.path,
      (u) => {
        s.value = u, Ae(() => {
          Re(p, 10);
        });
      },
      { immediate: !0 }
    );
    function f() {
      i.value = !i.value, localStorage.setItem("menuDisplayR", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function p() {
      var v, k, g, _, w;
      let u = c.value.querySelectorAll(".dropItemRP");
      for (let T of u)
        (v = T == null ? void 0 : T.querySelector) != null && v.call(T, ".active") && !((g = (k = T.classList) == null ? void 0 : k.contains) != null && g.call(k, "open")) && ((w = (_ = T.classList) == null ? void 0 : _.add) == null || w.call(_, "open"));
    }
    return (u, v) => {
      const k = Q("Icon");
      return S(), z("div", {
        ref_key: "menuRef",
        ref: c,
        class: we(["menuBoxRP", "cannotSelect", { light: u.light }])
      }, [
        he(R("div", cn, [
          q(rn, {
            data: n.data,
            pathName: m(s)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ge, m(i)]
        ]),
        q(k, {
          type: m(y),
          size: 25,
          class: we([{ showIco: !m(i) }, "menuShowHideIco"]),
          title: m(o),
          onClick: f,
          color: m(i) ? "#fff" : "#333"
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
    const r = Ct(), n = t, e = E("");
    function l(o) {
      let y = "menuTxtR ";
      return (o == null ? void 0 : o.path) === n.pathName && (y += "active "), y;
    }
    function i(o, y) {
      var p;
      (p = o == null ? void 0 : o.preventDefault) == null || p.call(o);
      let f = o == null ? void 0 : o.target;
      y && !y.children && !f.classList.contains("active") && r.push(y.path);
    }
    function s(o, y) {
      var f;
      (f = o == null ? void 0 : o.preventDefault) == null || f.call(o), e.value = y == null ? void 0 : y.path;
    }
    function c(o) {
      var y;
      (y = o == null ? void 0 : o.preventDefault) == null || y.call(o), e.value = "";
    }
    return (o, y) => {
      const f = Q("Icon"), p = Q("SideMenuProGroup", !0);
      return S(), z("ul", pn, [
        (S(!0), z(be, null, Ce(n.data, (u, v) => {
          var k;
          return S(), z("li", {
            key: (u == null ? void 0 : u.path) + v,
            class: we({ dropItemRX: u == null ? void 0 : u.children }),
            onMouseenter: (g) => s(g, u),
            onMouseleave: y[0] || (y[0] = (g) => c(g))
          }, [
            R("div", {
              class: we(l(u)),
              onClick: (g) => i(g, u),
              style: se({ paddingLeft: u.level * 20 + "px" })
            }, [
              ke(H((u == null ? void 0 : u.name) || "-- no name --") + " ", 1),
              he(q(f, {
                class: "dropIcoRX",
                type: "ios-arrow-forward",
                size: 16
              }, null, 512), [
                [ge, u.children && u.children.length > 0]
              ])
            ], 14, hn),
            ((k = u == null ? void 0 : u.children) == null ? void 0 : k.length) > 0 ? he((S(), te(p, {
              key: 0,
              class: "rightChildRX",
              data: u == null ? void 0 : u.children,
              "path-name": o.pathName
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
    const r = Ct(), n = t;
    function e(i) {
      let s = "menuTxtR ";
      return (i == null ? void 0 : i.path) === n.pathName && (s += "active "), s;
    }
    function l(i, s) {
      var p, u, v, k, g, _, w, T, C, B, D, I, $, h;
      (p = i == null ? void 0 : i.preventDefault) == null || p.call(i);
      let c = i == null ? void 0 : i.target;
      if (s && !s.children && !c.classList.contains("active")) {
        r.push(s.path);
        return;
      }
      const o = (u = c == null ? void 0 : c.querySelector) == null ? void 0 : u.call(c, ".dropIcoRX"), y = c.parentNode, f = Yt(y);
      for (let x of f) {
        (k = (v = x == null ? void 0 : x.classList) == null ? void 0 : v.remove) == null || k.call(v, "open");
        const L = (g = x == null ? void 0 : x.querySelector) == null ? void 0 : g.call(x, ".dropIcoRX");
        (w = (_ = L == null ? void 0 : L.classList) == null ? void 0 : _.remove) == null || w.call(_, "open");
        const Z = (T = x == null ? void 0 : x.querySelectorAll) == null ? void 0 : T.call(x, ".open");
        for (let U of Z)
          (B = (C = U == null ? void 0 : U.classList) == null ? void 0 : C.remove) == null || B.call(C, "open");
      }
      (I = (D = y == null ? void 0 : y.classList) == null ? void 0 : D.toggle) == null || I.call(D, "open"), (h = ($ = o == null ? void 0 : o.classList) == null ? void 0 : $.toggle) == null || h.call($, "open");
    }
    return (i, s) => {
      const c = Q("Icon");
      return S(), z("ul", vn, [
        (S(!0), z(be, null, Ce(n.data, (o, y) => (S(), z("li", {
          key: (o == null ? void 0 : o.path) + y,
          class: we({ dropItemRX: o == null ? void 0 : o.children, open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu })
        }, [
          R("div", {
            class: we(e(o)),
            onClick: (f) => l(f, o),
            style: se({ paddingLeft: o.level * 20 + "px" })
          }, [
            q(c, {
              class: "menuIcoL",
              custom: "iconfont " + (o.icon || "icon-r-menu-default")
            }, null, 8, ["custom"]),
            R("span", null, H((o == null ? void 0 : o.name) || "-- no name --"), 1),
            he(q(c, {
              class: we(["dropIcoRX", { open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu }]),
              type: "ios-arrow-forward"
            }, null, 8, ["class"]), [
              [ge, o.children && o.children.length > 0]
            ])
          ], 14, gn),
          o.children ? (S(), te(yn, {
            key: 0,
            data: o.children,
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
    const r = Ct(), n = t, e = E("");
    function l(o) {
      let y = "menuTxtR ";
      return (o == null ? void 0 : o.path) === n.pathName && (y += "active "), y;
    }
    function i(o, y) {
      var p;
      (p = o == null ? void 0 : o.preventDefault) == null || p.call(o);
      let f = o == null ? void 0 : o.target;
      y && !y.children && !f.classList.contains("active") && r.push(y.path);
    }
    function s(o, y) {
      var f;
      (f = o == null ? void 0 : o.preventDefault) == null || f.call(o), e.value = y == null ? void 0 : y.path;
    }
    function c(o) {
      var y;
      (y = o == null ? void 0 : o.preventDefault) == null || y.call(o), e.value = "";
    }
    return (o, y) => {
      const f = Q("Icon");
      return S(), z("ul", bn, [
        (S(!0), z(be, null, Ce(n.data, (p, u) => (S(), z("li", {
          key: (p == null ? void 0 : p.path) + u,
          class: we({ dropItemRX: p.children }),
          onMouseenter: (v) => s(v, p),
          onMouseleave: y[0] || (y[0] = (v) => c(v))
        }, [
          R("div", {
            class: we(l(p)),
            onClick: (v) => i(v, p)
          }, [
            q(f, {
              class: "menuIcoM",
              custom: "iconfont " + (p.icon || "icon-r-menu-default"),
              size: "20"
            }, null, 8, ["custom"])
          ], 10, wn),
          he(q(Ml, {
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
  setup(t, { emit: r }) {
    const n = t, e = r, l = Xt(), i = E(!0), s = E(), c = E(), o = G(() => i.value ? A("r.hideMenu") : A("r.showMenu")), y = G(() => i.value ? "iconfont icon-r-menu-hide" : "iconfont icon-r-menu-open");
    Bl(() => {
      let u = localStorage.getItem("menuDisplayRPro") || "";
      u !== "" ? i.value = JSON.parse(u) : (i.value = !0, localStorage.setItem("menuDisplayRPro", JSON.stringify(!0)));
    }), _e(
      () => l.path,
      (u) => {
        s.value = u, Ae(() => {
          Re(p, 10);
        });
      },
      { immediate: !0 }
    );
    function f() {
      i.value = !i.value, localStorage.setItem("menuDisplayRPro", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function p() {
      var v, k, g, _, w, T, C, B, D, I, $, h, x, L, Z, U, K, Y, b, F, W, M, ee, J, me, ye, pe, xe, P, N, ie, ve, Ve, ne, Ie, ze, We, Je, Ue;
      let u = c.value.querySelectorAll(".dropItemRX");
      for (let de of u) {
        const Ne = (k = (v = de == null ? void 0 : de.childNodes[0]) == null ? void 0 : v.querySelector) == null ? void 0 : k.call(v, ".dropIcoRX");
        (g = de == null ? void 0 : de.querySelector) != null && g.call(de, ".active") ? (T = (w = (_ = de == null ? void 0 : de.childNodes[1]) == null ? void 0 : _.classList) == null ? void 0 : w.contains) != null && T.call(w, "rightChildRX") ? (D = (B = (C = de == null ? void 0 : de.childNodes[0]) == null ? void 0 : C.classList) == null ? void 0 : B.contains) != null && D.call(B, "activeR") || ($ = de == null ? void 0 : (I = de.childNodes[0].classList).add) == null || $.call(I, "activeR") : ((x = (h = de == null ? void 0 : de.classList) == null ? void 0 : h.contains) != null && x.call(h, "open") || (Z = (L = de.classList).add) == null || Z.call(L, "open"), Ne && !((K = (U = Ne == null ? void 0 : Ne.classList) == null ? void 0 : U.contains) != null && K.call(U, "open")) && ((b = (Y = Ne.classList).add) == null || b.call(Y, "open"))) : (M = (W = (F = de == null ? void 0 : de.childNodes[1]) == null ? void 0 : F.classList) == null ? void 0 : W.contains) != null && M.call(W, "rightChildRX") ? (me = (J = (ee = de == null ? void 0 : de.childNodes[0]) == null ? void 0 : ee.classList) == null ? void 0 : J.contains) != null && me.call(J, "activeR") && ((pe = de == null ? void 0 : (ye = de.childNodes[0].classList).remove) == null || pe.call(ye, "activeR")) : ((P = (xe = de == null ? void 0 : de.classList) == null ? void 0 : xe.contains) != null && P.call(xe, "open") && !((ie = (N = de == null ? void 0 : de.classList) == null ? void 0 : N.contains) != null && ie.call(N, "fromIcoMenu")) && ((Ve = (ve = de.classList).remove) == null || Ve.call(ve, "open")), (Ie = (ne = Ne == null ? void 0 : Ne.classList) == null ? void 0 : ne.contains) != null && Ie.call(ne, "open") && !((We = (ze = Ne == null ? void 0 : Ne.classList) == null ? void 0 : ze.contains) != null && We.call(ze, "fromIcoMenu")) && ((Ue = (Je = Ne.classList).remove) == null || Ue.call(Je, "open")));
      }
    }
    return (u, v) => {
      const k = Q("Icon");
      return S(), z("div", {
        ref_key: "menuProRef",
        ref: c,
        class: we(["menuBoxRPro", "cannotSelect", { light: u.light }])
      }, [
        he(R("div", Vn, [
          q(Ml, {
            data: n.data,
            pathName: m(s)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ge, m(i)]
        ]),
        he(q(_n, {
          class: "icoMenuR",
          data: u.data,
          pathName: m(s)
        }, null, 8, ["data", "pathName"]), [
          [ge, !m(i)]
        ]),
        q(k, {
          custom: m(y),
          size: 14,
          class: we([{ showIco: !m(i) }, "menuShowHideIco"]),
          title: m(o),
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
  setup(t, { emit: r }) {
    const n = r, e = t;
    function l(i) {
      e.disabled || n("click", i);
    }
    return (i, s) => {
      const c = Q("Icon"), o = jt("has");
      return he((S(), z("div", {
        class: we(["tableBtnsG", { disabled: e.disabled }]),
        onClick: l,
        title: e.title || m(A)("r.button")
      }, [
        q(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Cn)), [
        [o, e.has]
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
    const r = ua(t, "modelValue"), n = t, e = G(() => r ? "background:" + n.bg || "transparent" : "");
    return (l, i) => {
      const s = Q("Icon");
      return S(), z("div", {
        style: se(m(e))
      }, [
        he(R("div", Tn, [
          Me(l.$slots, "default")
        ], 512), [
          [ge, r.value]
        ]),
        R("div", Bn, [
          R("div", {
            class: "btA",
            onClick: i[0] || (i[0] = (c) => r.value = !r.value)
          }, [
            q(s, {
              type: r.value ? "ios-arrow-up" : "ios-arrow-down",
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
  setup(t, { emit: r }) {
    const n = t, e = r, l = G({
      get() {
        return n.modelValue;
      },
      set(s) {
        e("update:modelValue", s);
      }
    }), i = G(() => l.value ? "background:" + n.bg : "");
    return (s, c) => (S(), z("div", {
      style: se(m(i))
    }, [
      he(R("div", xn, [
        Me(s.$slots, "default")
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
  setup(t, { emit: r }) {
    const n = r, e = t;
    let l = !1;
    const i = G({
      get() {
        return e.modelValue;
      },
      set(y) {
        n("update:modelValue", y);
      }
    }), s = G({
      get() {
        return e.open;
      },
      set(y) {
        n("on-toggle", y);
      }
    }), c = G(() => s.value ? "ios-arrow-up" : "ios-arrow-down");
    function o() {
      l || (l = !0, n("on-search", i.value), Re(() => {
        l = !1;
      }, 2e3));
    }
    return (y, f) => {
      const p = Q("Input"), u = Q("icon");
      return S(), z("div", {
        class: "tableSearchV",
        style: se({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Me(y.$slots, "default", {}, () => [
          q(p, {
            modelValue: m(i),
            "onUpdate:modelValue": f[0] || (f[0] = (v) => $e(i) ? i.value = v : null),
            style: se({ width: e.width }),
            search: "",
            onOnSearch: o,
            class: "searchInputC",
            placeholder: e.placeholder || m(A)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        he(R("span", {
          class: "sbt",
          onClick: f[1] || (f[1] = (v) => s.value = !m(s)),
          style: se({ color: e.btnColor })
        }, [
          q(u, {
            type: m(c),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ke(H(m(A)("r.adSearch")), 1)
        ], 4), [
          [ge, e.showBtn]
        ])
      ], 4);
    };
  }
}), Nl = {
  beforeMount(t, r) {
    function n(e) {
      var l;
      if (t.contains(e.target))
        return !1;
      (l = r == null ? void 0 : r.value) == null || l.call(r, e);
    }
    t.__vueClickOutside__ = n, Mt && document.addEventListener("click", n);
  },
  unmounted(t) {
    Mt && document.removeEventListener("click", t.__vueClickOutside__), delete t.__vueClickOutside__;
  }
};
function Dl(t, r, n, e, l = !1) {
  const i = (...s) => Xe.apply(this, s);
  De.call(this, {
    title: t || i("r.info.title"),
    text: r || i("r.info.text"),
    icon: n || "warning",
    onOk: e,
    buttons: [i("r.cancel")],
    closeOnClickOutside: l
  });
}
const An = { class: "tabSetF" }, In = { class: "cannotSelect" }, Pn = { class: "topCheck" }, Kl = /* @__PURE__ */ ce({
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
  setup(t, { emit: r }) {
    var h, x, L, Z, U;
    const n = r, e = t, l = E(), i = E(), s = E(!0), c = E(!1), o = E(!1), y = E([]), f = G(() => {
      var Y;
      let K = A("r.unknown");
      return ((Y = e.modelValue) == null ? void 0 : Y.length) > y.value.length && (y.value = fe(e.modelValue)), y.value.map((b) => {
        let F = { label: (b == null ? void 0 : b.title) || K };
        return b != null && b.disableShowSetting && (F.disabled = !0), F;
      });
    }), p = G(() => f.value.filter((K) => K == null ? void 0 : K.disabled)), u = G({
      get() {
        var K, Y;
        return (Y = (K = e.modelValue) == null ? void 0 : K.map) == null ? void 0 : Y.call(K, (b) => (b == null ? void 0 : b.title) || A("r.unknown"));
      },
      set(K) {
        let Y = y.value.filter((b) => {
          for (let F of K)
            if (F === (b == null ? void 0 : b.title))
              return !0;
          return !1;
        });
        n("update:modelValue", Y);
      }
    }), v = (U = (Z = (L = (x = (h = St()) == null ? void 0 : h.appContext) == null ? void 0 : x.config) == null ? void 0 : L.globalProperties) == null ? void 0 : Z.$i18n) == null ? void 0 : U.locale;
    let k = null;
    Ge(() => {
      let K = A("r.unknown"), Y = I();
      Y ? u.value = JSON.parse(decodeURI(Y)) : e.defaultCheck && (u.value = e.modelValue.filter((b) => b == null ? void 0 : b.showSettingCheck).map((b) => (b == null ? void 0 : b.title) || K)), Ae(function() {
        !l.value || !i.value || (k = new _a(l.value, i.value, {
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
            var F;
            if (b != null && b.popper && ((F = b.instance) != null && F.popper)) {
              const W = g(b), { needChange: M } = W;
              if (M) {
                const { height: ee } = W, J = b.instance.popper;
                J.style && (J.style.height = `${ee}px`);
              }
            }
          }
        }));
      }), Re(() => {
        var b;
        o.value = !0, (b = k == null ? void 0 : k.update) == null || b.call(k), Ae(function() {
          o.value = !1;
        });
      }, 0);
    }), xl(function() {
      var K;
      (K = k == null ? void 0 : k.destroy) == null || K.call(k);
    });
    function g(K) {
      var M, ee;
      const { height: Y } = K.popper, b = K.instance.popper, F = window.innerHeight;
      let W = 0;
      if ((M = b.childNodes) != null && M.length)
        for (let J = 0; J < b.childNodes.length; J++)
          W += (ee = b.childNodes[J]) == null ? void 0 : ee.offsetHeight;
      return F < Y - 10 || Y < W ? {
        needChange: !0,
        height: F - 10 < W ? F - 10 : W
      } : { needChange: !1 };
    }
    function _(K) {
      K.length === f.value.length ? (s.value = !1, c.value = !0) : K.length > p.value.length ? (s.value = !0, c.value = !1) : (s.value = !1, c.value = !1);
    }
    _e(() => u.value, _, {
      immediate: !0,
      deep: !0
    });
    function w() {
      o.value && ($() && Dl(A("r.notSave"), "", "warning", C), o.value = !1);
    }
    function T() {
      o.value ? w() : (o.value = !0, Ae(function() {
        var K;
        (K = k == null ? void 0 : k.update) == null || K.call(k);
      }));
    }
    function C() {
      v ? window[e.storage].setItem(e.sKey + "_" + v, encodeURI(JSON.stringify(u.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(u.value))), w();
    }
    function B(K) {
      var Y, b;
      if (o.value) {
        if (e.transfer) {
          const F = i.value;
          if (F === (K == null ? void 0 : K.target) || (Y = F == null ? void 0 : F.contains) != null && Y.call(F, K == null ? void 0 : K.target))
            return;
        }
        (b = K == null ? void 0 : K.preventDefault) == null || b.call(K), w();
      }
    }
    function D() {
      s.value ? c.value = !1 : c.value = !c.value, s.value = !1, c.value ? u.value = f.value.map((K) => K == null ? void 0 : K.label) : u.value = p.value.map((K) => K == null ? void 0 : K.label);
    }
    function I() {
      let K;
      return v ? K = window[e.storage].getItem(e.sKey + "_" + v) : K = window[e.storage].getItem(e.sKey), K;
    }
    function $() {
      var Y;
      let K = I();
      if (K) {
        if (K = JSON.parse(decodeURI(K)), (K == null ? void 0 : K.length) !== ((Y = u.value) == null ? void 0 : Y.length))
          return !0;
        for (let b of K)
          if (u.value.indexOf(b) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (K, Y) => {
      const b = Q("Icon"), F = Q("Checkbox"), W = Q("CheckboxGroup");
      return he((S(), z("div", An, [
        R("div", {
          ref_key: "buttonRef",
          ref: l,
          class: "tabSetBt",
          onClick: T
        }, [
          q(b, {
            type: "md-settings",
            size: "17"
          }),
          R("span", In, H(m(A)("r.tabSetting")), 1)
        ], 512),
        (S(), te(da, {
          to: "body",
          disabled: !e.transfer
        }, [
          he(R("div", {
            ref_key: "popperRef",
            ref: i,
            class: "tabSetCard",
            style: se({ width: e.width, backgroundColor: e.bg })
          }, [
            R("div", Pn, [
              q(F, {
                indeterminate: m(s),
                modelValue: m(c),
                "onUpdate:modelValue": Y[0] || (Y[0] = (M) => $e(c) ? c.value = M : null),
                onClick: At(D, ["prevent"])
              }, {
                default: le(() => [
                  ke(H(m(A)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              R("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: C
              }, [
                Y[2] || (Y[2] = R("span", { class: "iconfont icon-r-save" }, null, -1)),
                R("span", null, H(m(A)("r.save")), 1)
              ])
            ]),
            q(W, {
              modelValue: m(u),
              "onUpdate:modelValue": Y[1] || (Y[1] = (M) => $e(u) ? u.value = M : null)
            }, {
              default: le(() => [
                (S(!0), z(be, null, Ce(m(f), (M, ee) => (S(), te(F, {
                  class: "setItem",
                  label: M && M.label,
                  key: "tabSet_" + e.sKey + ee,
                  disabled: M && M.disabled
                }, null, 8, ["label", "disabled"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ], 4), [
            [ge, m(o)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [m(Nl), B]
      ]);
    };
  }
});
function Rn(t) {
  return t.replace(/_(\w)/g, function(r, n) {
    return n.toUpperCase();
  });
}
function zi(t) {
  let r = document.createElement("div");
  return r.textContent !== void 0 ? r.textContent = t : r.innerText = t, r.innerHTML;
}
function Ui(t) {
  let r = document.createElement("div");
  return r.innerHTML = t, r.innerText || r.textContent;
}
function pl(t) {
  return new Promise((r) => {
    let n = new FileReader();
    n.readAsDataURL(t), n.onloadend = () => {
      r(n.result);
    };
  });
}
function zl(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function rt(t) {
  return X(t) === "String" && t.indexOf("image") > -1;
}
function ml(t) {
  const r = zl(t);
  let n = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(r) > -1 ? n = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(r) > -1 ? n = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(r) > -1 ? n = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(r) > -1 ? n = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(r) > -1 ? n = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(r) > -1 && (n = "ios-videocam"), n;
}
function $n(t, r) {
  let n = document.createElement("a");
  n.href = r, n.download = t, Mn(n);
}
function Mn(t) {
  let r = document.createEvent("MouseEvents");
  r.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(r);
}
function Ut({
  group: t,
  condition: r,
  pathKey: n,
  childKey: e = "children",
  path: l = []
}) {
  if (t && ma(t)) {
    if (ha(r)) {
      if (at(t)) {
        let i = t, s = fe(l);
        if (r(i))
          return n && i[n] && s.push(i[n]), s;
        if (i[e] && !Pe(i[e])) {
          n && i[n] && s.push(i[n]);
          let c = Ut({
            group: i[e],
            condition: r,
            pathKey: n,
            childKey: e,
            path: s
          });
          if (!Pe(c))
            return c;
        }
      } else if (Array.isArray(t))
        for (let i of t) {
          let s = fe(l);
          if (r(i))
            return n && i[n] ? s.push(i[n]) : s.push(String(t.indexOf(i))), s;
          if (i[e] && i[e].length > 0) {
            n && i[n] ? s.push(i[n]) : s.push(String(t.indexOf(i)));
            let c = Ut({
              group: i[e],
              condition: r,
              pathKey: n,
              childKey: e,
              path: s
            });
            if (!Pe(c))
              return c;
          }
        }
    } else if (Array.isArray(t))
      for (let i of t) {
        let s = fe(l);
        if (i === r)
          return s.push(String(t.indexOf(i))), s;
      }
  }
  return [];
}
function Fn(t, r = 12) {
  if (X(t) === "String" && t.length > 0) {
    let n = document.createElement("span");
    n.style.fontSize = r + "px", n.style.fontFamily = "inherit", n.innerHTML = t, n.style.opacity = "0", n.style.position = "fixed", n.style.top = "3000px", document.body.append(n);
    const e = n.clientWidth;
    return document.body.removeChild(n), e;
  }
  return 0;
}
function Ei(t) {
  return t === "" ? null : t;
}
function Gi(t) {
  var r;
  t = t || window.Event, t != null && t.stopPropagation ? (r = t.stopPropagation) == null || r.call(t) : t && (t.cancelBubble = !0);
}
let ut = !1;
function Et({
  height: t,
  width: r = 416,
  title: n,
  content: e,
  onOk: l,
  onCancel: i,
  onClose: s,
  okText: c,
  cancelText: o,
  noWarnIcon: y,
  footerAlign: f,
  cancelBt: p = !0
}) {
  const u = (...w) => Xe.apply(this, w);
  let k = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", g = X(e) === "String";
  const _ = typeof e == "function";
  Qe.warning({
    width: r,
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
                      ut || (Qe.remove(), s && X(s) === "Function" && s());
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
                      var T, C, B, D, I, $, h, x, L;
                      if (l && typeof l == "function") {
                        const Z = l();
                        if (Z && X(Z) === "Promise") {
                          ut = !0;
                          const U = (w == null ? void 0 : w.currentTarget) || (w == null ? void 0 : w.target);
                          U && ((C = (T = U.classList) == null ? void 0 : T.add) == null || C.call(T, "ivu-btn-loading"), (D = (B = U.nextSibling) == null ? void 0 : B.setAttribute) == null || D.call(B, "disabled", "disabled"), (L = (x = ((h = ($ = (I = U.parentElement) == null ? void 0 : I.parentElement) == null ? void 0 : $.querySelector) == null ? void 0 : h.call($, ".titleN .closeN")).classList) == null ? void 0 : x.add) == null || L.call(x, "disabled")), Promise.resolve(Z).then(() => {
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
                      ut || (Qe.remove(), X(i) === "Function" && i && i());
                    }
                  },
                  () => o || u("r.cancel")
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
  let r = tt;
  t ? tt++ : tt > 0 && tt--, r !== tt && (tt === 0 ? hl(!1) : r === 0 && hl(!0));
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
  var t, r;
  if (Ee.store)
    if (typeof Ee.store == "function") {
      const n = Ee.store();
      n.logout && n.logout();
    } else
      (r = (t = Ee.store) == null ? void 0 : t.dispatch) == null || r.call(t, "logout");
  else
    Dn();
}
Ee.interceptors.response.use(
  (t) => {
    var r, n;
    return Vt && (((r = t == null ? void 0 : t.data) == null ? void 0 : r.code) === 403 || ((n = t == null ? void 0 : t.data) == null ? void 0 : n.code) === 409) && Et({
      content: yl("r.http." + t.data.code),
      onOk: vl
    }), t;
  },
  (t) => {
    var r, n;
    return Vt && (((r = t == null ? void 0 : t.response) == null ? void 0 : r.status) === 403 || ((n = t == null ? void 0 : t.response) == null ? void 0 : n.status) === 409) && Et({
      content: yl("r.http." + t.response.status),
      onOk: vl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function Ye(t, r, n, e) {
  e && e.spin && Ul(!1);
  let l = !0, i = t && t.data;
  if (i) {
    n = n || [];
    for (let s of n)
      i = i[s], l = l && i;
    return l ? i : (r && console.warn(r), !1);
  }
  return r && console.warn(r), !1;
}
function Kn(t, r, n, e, l, i, s) {
  return new Promise((c, o) => {
    switch (t) {
      case "get":
        Ee.get(r, { params: n }).then((f) => {
          let p = Ye(f, e, l, i);
          p ? c(p) : o(f);
        }).catch((f) => {
          Ye({}, e, l, i), o(f);
        });
        break;
      case "delete":
        let y = s ? "params" : "data";
        Ee.delete(r, { [y]: n }).then((f) => {
          let p = Ye(f, e, l, i);
          p ? c(p) : o(f);
        }).catch((f) => {
          Ye({}, e, l, i), o(f);
        });
        break;
      case "post":
        Ee.post(r, n, i).then((f) => {
          let p = Ye(f, e, l, i);
          p ? c(p) : o(f);
        }).catch((f) => {
          Ye({}, e, l, i), o(f);
        });
        break;
      case "put":
        Ee.put(r, n, i).then((f) => {
          let p = Ye(f, e, l, i);
          p ? c(p) : o(f);
        }).catch((f) => {
          Ye({}, e, l, i), o(f);
        });
        break;
    }
  });
}
function ht(t, r, n = {}, e, l, i, s) {
  return new Promise((c, o) => {
    var y;
    if (r) {
      i && i.spin && Ul(!0);
      let f = r;
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
          if (_.test(r) && v[g + "URL"]) {
            f = v[g + "URL"] + r.replace(_, "");
            break;
          }
        }
      }
      let p;
      if (((y = i == null ? void 0 : i.headers) == null ? void 0 : y["Content-Type"]) === "multipart/form-data")
        p = n;
      else if (n && !Pe(n))
        if (Array.isArray(n)) {
          p = [];
          for (let v of n)
            (v || v === 0 || v === !1 || v === "" && i && !i.noEmptyStr) && p.push(v);
        } else {
          p = {};
          for (let v in n)
            n.hasOwnProperty(v) && (n[v] || n[v] === 0 || n[v] === !1 || n[v] === "" && i && !i.noEmptyStr) && (p[v] = n[v]);
        }
      let u = t.toLowerCase();
      Kn(u, f, p, e, l, i, s).then((v) => {
        c(v);
      }).catch((v) => {
        o(v);
      });
    } else
      console.error("没有请求地址:url"), o("没有请求地址:url");
  });
}
const He = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(t, r) {
    Ee.store = t, Vt = r.config.globalProperties;
  },
  post(t, r, n, e, l) {
    return new Promise((i, s) => {
      ht("post", t, r, n, e, l).then((c) => {
        i(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  put(t, r, n, e, l) {
    return new Promise((i, s) => {
      ht("put", t, r, n, e, l).then((c) => {
        i(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  get(t, r, n, e, l) {
    return new Promise((i, s) => {
      ht("get", t, r, n, e, l).then((c) => {
        i(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  delete(t, r, n, e, l, i = !0) {
    return new Promise((s, c) => {
      ht("delete", t, r, n, e, l, i).then((o) => {
        s(o);
      }).catch((o) => {
        c(o);
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
  setup(t, { emit: r }) {
    var u;
    const n = r, e = E(), l = t, i = ((u = Be == null ? void 0 : Be()) == null ? void 0 : u.fontSizeBase) || 14, s = E(16), c = G({
      get() {
        return l.modelValue;
      },
      set(v) {
        n("update:modelValue", v), n("on-change", v);
      }
    }), o = G({
      get() {
        return l.pageSize;
      },
      set(v) {
        n("on-page-size-change", v), c.value !== 1 && (c.value = 1);
      }
    }), y = G(() => {
      const v = Fn(String(l.total || 0), i) + s.value + 2;
      return v < 32 ? 32 : v;
    });
    _e(
      y,
      (v) => {
        Ae(function() {
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
      s.value = f();
    }), (v, k) => {
      const g = Q("Page"), _ = Q("Option"), w = Q("Select");
      return S(), z("div", {
        class: we(["pagePro", { pageProDefault: l.size === "default" }])
      }, [
        l.showTotal ? (S(), z("span", zn, H(m(A)("r.total") + " ") + H(l.total) + H(" " + m(A)("r.items")), 1)) : ue("", !0),
        q(g, {
          ref_key: "pageRef",
          ref: e,
          modelValue: m(c),
          "onUpdate:modelValue": k[0] || (k[0] = (T) => $e(c) ? c.value = T : null),
          "page-size": m(o),
          total: l.total,
          size: l.size,
          "page-size-opts": l.pageSizeOpts,
          disabled: l.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        l.showSizer ? (S(), z("div", Un, [
          q(w, {
            modelValue: m(o),
            "onUpdate:modelValue": k[1] || (k[1] = (T) => $e(o) ? o.value = T : null),
            size: l.size,
            transfer: l.transfer,
            disabled: l.disabled
          }, {
            default: le(() => [
              (S(!0), z(be, null, Ce(l.pageSizeOpts, (T) => (S(), te(_, {
                value: T,
                key: T
              }, {
                default: le(() => [
                  ke(H(T) + " " + H(m(A)("r.page")), 1)
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
  setup(t, { expose: r, emit: n }) {
    var xe;
    const e = n;
    ({ ...ga });
    const l = t, i = ((xe = Be()) == null ? void 0 : xe.pageSizes) || [10, 20, 50, 100], s = E(l.data), c = E(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || l.pageSize
    ), o = E(1), y = E(0);
    let f = [], p, u, v = l.orderKey, k = l.orderDefault;
    const g = G(() => {
      for (let P of l.columns)
        if (P != null && P.fixed)
          return !0;
      return !1;
    }), _ = G(() => l.selectionFixed || g.value), w = G(() => {
      let P = {
        ...l.searchData,
        current: o.value,
        size: c.value
      };
      return l.sortable === "custom" && (l.orderKeyFormat === "underline" ? P[k] = Il(v) : l.orderKeyFormat === "camelcase" && (P[k] = Rn(v))), P;
    }), T = G(() => {
      let P = l.columns.filter((N) => N && N.type !== "selection");
      if (l.selection || l.radio) {
        let N;
        l.radio ? N = {
          title: " ",
          width: 65,
          render: (ie, ve) => Le(ba, {
            modelValue: ve.row.btChecked
          })
        } : N = {
          type: "selection",
          width: 60
        }, l.selectionFixed && (N.fixed = l.selectionFixed), P.unshift(N);
      }
      return P.forEach((N) => {
        var ie;
        N && (l.sortable === "custom" ? N.key && N.sortable !== !0 && N.sortable !== !1 && (N.sortable = "custom") : N.sortable = !1, N.align || (N.align = ((ie = Be()) == null ? void 0 : ie.btTablePageAlign) || "center"));
      }), P.forEach((N) => {
        N != null && N.key && N.render === void 0 && (N.tooltip ? N.render = Rl(N.key, l.tableEmptyTdHandle) : N.render = (ie, ve) => {
          let Ve = "";
          return N != null && N.key && (Ve = ve.row[N.key]), l.tableEmptyTdHandle ? Le("span", Ve === "" ? "--" : Ve ?? "--") : Le("span", Ve);
        });
      }), P;
    }), C = G({
      get() {
        return s.value.map((P, N) => Object.assign({}, P, {
          btKey: "bt-" + N,
          btChecked: !!P.btChecked
        }));
      },
      set(P) {
        s.value = P;
      }
    }), B = G(() => f.map((P) => P == null ? void 0 : P.id)), D = G(() => f.map((P) => P == null ? void 0 : P.btKey)), I = E();
    _e(() => l.searchData, $, { deep: !0 }), _e(
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
    function $() {
      o.value = 1, pe();
    }
    function h() {
      l.initData && pe();
    }
    function x(P) {
      s.value.unshift(fe(P)), Re(() => {
        var N, ie;
        (ie = (N = I.value) == null ? void 0 : N.clickCurrentRow) == null || ie.call(N, 0);
      }, 100);
    }
    function L(P, N, ie) {
      let ve = null;
      if (typeof N == "number" ? ve = N : N && (ve = u), ve !== null) {
        let Ve = s.value[ve];
        for (let ne in P)
          P.hasOwnProperty(ne) && (Ve[ne] = P[ne]);
        ie && Re(() => {
          var ne, Ie;
          (Ie = (ne = I.value) == null ? void 0 : ne.clickCurrentRow) == null || Ie.call(ne, ve);
        }, 10);
      }
    }
    function Z(P) {
      s.value.splice(P, 1), Re(() => {
        var N, ie;
        (ie = (N = I.value) == null ? void 0 : N.clickCurrentRow) == null || ie.call(N, 0);
      }, 100);
    }
    function U(P, N) {
      var ie, ve;
      P.btChecked && l.radio || (l.selection || l.radio) && l.rowClickSelect && ((ve = (ie = I.value) == null ? void 0 : ie.toggleSelect) == null || ve.call(ie, N));
    }
    function K(P, N) {
      p = N.btKey, u = Number(N.btKey.split("-")[1]), l.radio && (s.value[u].btChecked = !0);
    }
    function Y(P) {
      if (l.radio)
        for (let N of C.value)
          N != null && N.btKey && N.btKey !== p && (s.value[Number(N.btKey.split("-")[1])].btChecked = !1);
      f = P, e("on-selection-change", P);
    }
    function b() {
      return fe(f);
    }
    function F() {
      pe();
    }
    function W(P) {
      c.value = P, localStorage.setItem("btPageSize", String(P)), o.value === 1 && pe();
    }
    function M({ key: P, order: N }) {
      k === "normal" ? (v = l.orderKey, k = l.orderDefault) : (v = P, k = N), o.value = 1, ye();
    }
    function ee(P) {
      var ie, ve, Ve, ne, Ie, ze, We, Je;
      const N = P;
      if (typeof N == "number")
        J(), u = N, p = (ve = (ie = C.value) == null ? void 0 : ie[N]) == null ? void 0 : ve.btKey, (ne = (Ve = I.value) == null ? void 0 : Ve.clickCurrentRow) == null || ne.call(Ve, N);
      else if (Array.isArray(N)) {
        if (l.radio || !l.selection)
          return;
        J();
        for (let Ue of N)
          (ze = (Ie = I.value) == null ? void 0 : Ie.clickCurrentRow) == null || ze.call(Ie, Ue);
      } else if (typeof N == "function")
        for (let Ue = 0; Ue < C.value.length; Ue++) {
          const de = C.value[Ue];
          N(de) && ((Je = (We = I.value) == null ? void 0 : We.clickCurrentRow) == null || Je.call(We, Ue));
        }
    }
    function J() {
      var P, N;
      if (l.radio) {
        if (D.value.length > 0 && C.value.length > 0) {
          let ie = D.value[0].split("-")[1];
          C.value[ie].btChecked = !1;
        }
      } else
        (N = (P = I.value) == null ? void 0 : P.selectAll) == null || N.call(P, !1);
      f.length > 0 && (f = [], e("on-selection-change", [])), p = null, u = null;
    }
    function me() {
      s.value = [], J(), o.value = 1, y.value = 0;
    }
    function ye(P, N, ie) {
      return new Promise((ve) => {
        P && (k = P), N && (v = N), l.url ? He[l.method](l.url, w.value, "", [], { spin: l.getDataLoading }).then((Ve) => {
          var Ie, ze;
          let ne;
          ie || J(), typeof l.dataHandler == "function" ? ne = l.dataHandler(Ve) : ne = Ve, ne.data ? (ne.data.records || ne.data.records === null ? s.value = ne.data.records || [] : ne.data.page ? (ne.data.page.records || ne.data.page.records === null) && (s.value = ne.data.page.records || []) : ne.data.data ? (ne.data.data.records || ne.data.data.records === null) && (s.value = ne.data.data.records || []) : s.value = ne.data, y.value = ((Ie = ne.data.page) == null ? void 0 : Ie.total) || ((ze = ne.data.data) == null ? void 0 : ze.total) || ne.data.total || ne.total || 0, y.value === 0 && o.value > 1 && s.value && s.value.length === 0 ? o.value = 1 : o.value > 1 && y.value <= (o.value - 1) * c.value && (o.value--, Ae(function() {
            ye(P, N);
          })), e("on-data-change", ne), ve(ne)) : (console.warn("请求返回数据有误，无法使用"), me(), e("on-data-change", ne));
        }).catch((Ve) => {
          J(), me(), e("on-data-change", Ve);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function pe(P, N, ie) {
      l.radio && (P || l.rowClickNum !== -1) ? ye(N, ie, P).then(() => {
        s.value.length > 0 && Re(() => {
          var ve, Ve, ne, Ie;
          P ? (Ve = (ve = I.value) == null ? void 0 : ve.clickCurrentRow) == null || Ve.call(ve, u || 0) : (Ie = (ne = I.value) == null ? void 0 : ne.clickCurrentRow) == null || Ie.call(ne, l.rowClickNum);
        }, 10);
      }) : ye();
    }
    return Ge(h), r({
      dataS: C,
      selectedIds: B,
      addRow: x,
      setRowData: L,
      deleteRow: Z,
      getSelected: b,
      selectRow: ee,
      clearSelect: J,
      clearTableData: me,
      getTableData: ye,
      getDataAndClickRow: pe
    }), (P, N) => {
      const ie = Q("Table"), ve = Q("Page");
      return S(), z("div", En, [
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
              q(ie, ot({
                ref_key: "tableRef",
                ref: I
              }, P.$attrs, {
                height: m(_) && Xn || null,
                class: { noBorderTable: l.noBorderTable, fullHeightTable: !m(_), lightHeadO: l.lightHead },
                columns: m(T),
                data: m(C),
                "highlight-row": l.radio || l.highlightRow,
                onOnSelect: K,
                onOnSelectionChange: Y,
                onOnSortChange: M,
                onOnRowClick: U
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        he(R("div", qn, [
          l.usePagePro ? (S(), te(El, {
            key: 0,
            modelValue: m(o),
            "onUpdate:modelValue": N[0] || (N[0] = (Ve) => $e(o) ? o.value = Ve : null),
            total: m(y),
            showTotal: l.showTotal,
            pageSize: m(c),
            showSizer: l.showSizer,
            pageSizeOpts: m(i),
            size: l.pageComponentSize,
            onOnChange: F,
            onOnPageSizeChange: W
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (S(), te(ve, {
            key: 1,
            modelValue: m(o),
            "onUpdate:modelValue": N[1] || (N[1] = (Ve) => $e(o) ? o.value = Ve : null),
            total: m(y),
            pageSize: m(c),
            pageSizeOpts: m(i),
            showSizer: l.showSizer,
            showTotal: l.showTotal,
            size: l.pageComponentSize,
            showElevator: !l.noElevator,
            onOnChange: F,
            onOnPageSizeChange: W
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
  setup(t, { emit: r }) {
    const n = r, e = t, l = G({
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
    }), i = G({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(f) {
        n("update:modelValue", {
          key: l.value,
          val: f
        });
      }
    }), s = G(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), c = G(() => ({
      width: typeof e.itemWidth == "number" ? e.itemWidth + "px" : e.itemWidth
    }));
    function o(f) {
      f != null && f.target && f.target.value !== void 0 && y({
        key: l.value,
        val: f.target.value
      });
    }
    const y = qt((f) => {
      n("on-change", f);
    }, 500);
    return (f, p) => {
      const u = Q("Option"), v = Q("Select"), k = Q("Input");
      return S(), z("div", null, [
        q(v, {
          modelValue: m(l),
          "onUpdate:modelValue": p[0] || (p[0] = (g) => $e(l) ? l.value = g : null),
          style: se(m(s)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: le(() => [
            (S(!0), z(be, null, Ce(e.selectOption, (g, _) => (S(), te(u, {
              value: g == null ? void 0 : g.val,
              label: g == null ? void 0 : g.label,
              key: "selectInputOp" + (g == null ? void 0 : g.value) + _,
              style: se({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        q(k, {
          modelValue: m(i),
          "onUpdate:modelValue": p[1] || (p[1] = (g) => $e(i) ? i.value = g : null),
          placeholder: e.placeholder || m(A)("r.pInput"),
          style: se(m(c)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: o
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
let Ht = { securityJsCode: "", key: "" };
function Jn({ securityJsCode: t, key: r }) {
  Ht.securityJsCode = t, Ht.key = r;
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
  setup(t, { emit: r }) {
    const n = r, e = t, l = G({
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
    }), i = G(() => yt(e.width) ? e.width + "px" : e.width), s = G(() => yt(e.height) ? e.height + "px" : e.height ? e.height : yt(e.width) ? e.width * 0.66 + "px" : "200px"), c = G(() => ({
      width: i.value,
      position: "relative"
    })), o = G(() => ({
      width: i.value,
      height: s.value,
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
          var I, $, h, x;
          _ = new k.Geocoder(), (I = e.modelValue) != null && I.lng && (($ = e.modelValue) != null && $.lat) && T({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const D = (x = (h = f.value) == null ? void 0 : h.$el) == null ? void 0 : x.children;
          D && D.length > 1 && new k.AutoComplete({
            input: D[1]
          }).on("select", (L) => {
            var Z, U, K;
            (Z = L == null ? void 0 : L.poi) != null && Z.name && ((U = L.poi.location) != null && U.lng && ((K = L.poi.location) != null && K.lat) ? (T({
              name: L.poi.name,
              lng: L.poi.location.lng,
              lat: L.poi.location.lat
            }), l.value = {
              name: L.poi.name,
              lng: L.poi.location.lng,
              lat: L.poi.location.lat
            }) : g == null || g.setCity(L.poi.name, () => {
              let Y = g.getCenter();
              T({
                name: L.poi.name,
                lng: Y.lng,
                lat: Y.lat
              }), l.value = {
                name: L.poi.name,
                lng: Y.lng,
                lat: Y.lat
              };
            })), n("on-change", l.value);
          }), g == null || g.on("hotspotclick", (L) => {
            T({
              name: L.name,
              lng: L.lnglat.lng,
              lat: L.lnglat.lat
            }), l.value = {
              name: L.name,
              lng: L.lnglat.lng,
              lat: L.lnglat.lat
            };
          });
        });
      });
    }
    function T({ lng: B, lat: D, name: I }) {
      g == null || g.clearMap();
      let $ = new k.LngLat(B, D), h = new k.Marker({
        map: g,
        position: $,
        draggable: !0
      });
      g == null || g.add(h), C(B, D), h.on("dragend", () => {
        let x = h.getPosition();
        l.value = {
          name: I || null,
          lng: x.lng,
          lat: x.lat
        }, C(B, D);
      }), h.on("click", (x) => {
        var L, Z;
        u && u.open(g, (Z = (L = x == null ? void 0 : x.target) == null ? void 0 : L.getPosition) == null ? void 0 : Z.call(L));
      }), g == null || g.setFitView();
    }
    function C(B, D) {
      _ == null || _.getAddress([B, D], (I, $) => {
        I === "complete" && $.info === "OK" && $.regeocode && $.regeocode.formattedAddress ? u = new k.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + $.regeocode.formattedAddress + "</div>",
          offset: new k.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (u = null, console.warn("地图获取位置信息失败", $));
      });
    }
    return Ge(v), Tl(() => {
      var B;
      g && (g.destroy(), (B = dl) == null || B.reset(), g = null, _ = null, u = null);
    }), (B, D) => (S(), z("div", {
      style: se(m(c)),
      class: "containerIKJ"
    }, [
      q(m(ka), {
        ref_key: "mapInputRef",
        ref: f,
        modelValue: m(l).name,
        "onUpdate:modelValue": D[0] || (D[0] = (I) => m(l).name = I),
        class: we({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || m(A)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      R("div", {
        style: se(m(o)),
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
  setup(t, { emit: r }) {
    const n = r, e = t, l = E([]), i = G({
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
    function s() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      He.get(e.url).then((f) => {
        var u;
        let p = null;
        (u = f == null ? void 0 : f.data) != null && u.records ? p = f.data.records : f != null && f.data ? p = f.data : f && (p = f), p ? (typeof e.optionFilter == "function" && X(e.optionFilter) === "Function" && (p = e.optionFilter(p)), l.value = c(p)) : console.warn("级联数据错误，不能使用");
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
    function o(f) {
      return e.onlyLastLabel ? gt(f) : f.join(e.separator);
    }
    function y(f, p) {
      let u = "";
      Pe(p) || (u = p.map((v) => v == null ? void 0 : v.label).join(e.separator)), n("on-label-change", u);
    }
    return Ge(s), (f, p) => {
      const u = Q("Cascader");
      return S(), te(u, {
        data: m(l),
        modelValue: m(i),
        "onUpdate:modelValue": p[0] || (p[0] = (v) => $e(i) ? i.value = v : null),
        onOnChange: y,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": o,
        placeholder: e.placeholder || m(A)("r.pSelect"),
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
  setup(t, { emit: r }) {
    const n = r, e = t, l = G({
      get() {
        if (e.modelValue && (typeof e.modelValue == "string" || typeof e.modelValue == "number")) {
          let i = String(e.modelValue).trim();
          if (/^\d+$/.test(i)) {
            let c = i.substring(0, 2) + "0000000000", o = i.substring(0, 4) + "00000000";
            return [c, o, i];
          }
          return i.indexOf(e.separator) !== -1 ? i.split(e.separator) : [i];
        } else return Array.isArray(e.modelValue) ? fe(e.modelValue) : [];
      },
      set(i) {
        if (Pe(i))
          n("update:modelValue", null), n("on-name-change", null);
        else {
          let s = gt(i), c = "", o = "";
          if (s && (c = s.code), c && c.length < 12) {
            let y = [...c];
            for (; y.length < 12; )
              y.push(0);
            c = y.join("");
          }
          if (Array.isArray(i) && (o = i.map((y) => y == null ? void 0 : y.name).join(e.separator)), c) {
            if (c === e.modelValue)
              return;
            n("update:modelValue", c);
          }
          o && n("on-name-change", o);
        }
      }
    });
    return (i, s) => (S(), te(m(Va), ot(i.$attrs, {
      class: "alCascaderMC",
      modelValue: m(l),
      "onUpdate:modelValue": s[0] || (s[0] = (c) => $e(l) ? l.value = c : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || m(A)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let qe = 0;
function ql(t, r, n, e) {
  var l, i, s;
  e && (e.innerHTML = ((l = t[r]) == null ? void 0 : l.name) ?? "", (i = t[r]) != null && i.name ? e.classList.contains("hide") && e.classList.remove("hide") : e.classList.contains("hide") || e.classList.add("hide")), n && (n.src = ((s = t[r]) == null ? void 0 : s.src) ?? t[r], qe = r);
}
function gl(t, r, n, e) {
  if (t) {
    let l;
    qe - 1 < 0 ? l = r.length - 1 : l = qe - 1, ql(r, l, n, e);
  }
}
function bl(t, r, n, e) {
  if (t) {
    let l;
    qe + 1 > r.length - 1 ? l = 0 : l = qe + 1, ql(r, l, n, e);
  }
}
function dt(t, r = 0) {
  var w, T, C, B, D, I, $;
  const n = (...h) => Xe.apply(this, h), e = n("r.closePreview"), l = n("r.fullImg"), i = n("r.last"), s = n("r.next");
  let c, o, y;
  qe = r;
  const f = Array.isArray(t);
  f ? (o = ((w = t[qe]) == null ? void 0 : w.src) ?? t[qe], y = (T = t[qe]) == null ? void 0 : T.name) : o = t, f && t.length > 1 ? c = `${i} ： ←, ↑, A, W | ${s} ： →, ↓, D, S | ${e} ： Esc` : c = `${e} ： Esc`;
  let p = It(document.getElementsByTagName("body")), u = document.createElement("div");
  u.setAttribute("class", "fullScreenImgByDom"), u.innerHTML = `<div class='previewInner'><div class='pageFBt left${f && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${i}' ></i></div><img src='${o}' alt='${l}' ><div class='pageFBt right${f && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${s}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${c}</p><p class='pName ${y ? "" : "hide"}'>${y}</p>`;
  function v() {
    let h = It(document.getElementsByTagName("body"));
    h && h.removeChild(u), document.removeEventListener("keyup", _);
  }
  (B = (C = u.querySelector(".ivu-icon-md-close")) == null ? void 0 : C.addEventListener) == null || B.call(C, "click", v);
  const k = u.querySelector("img"), g = u.querySelector(".pName");
  (D = u.querySelector(".pageFBt.left")) == null || D.addEventListener("click", function() {
    gl(f, t, k, g);
  }), (I = u.querySelector(".pageFBt.right")) == null || I.addEventListener("click", function() {
    bl(f, t, k, g);
  });
  function _(h) {
    h.keyCode === 37 || h.keyCode === 38 || h.keyCode === 87 || h.keyCode === 65 ? gl(f, t, k, g) : h.keyCode === 39 || h.keyCode === 40 || h.keyCode === 83 || h.keyCode === 68 ? bl(f, t, k, g) : h.keyCode === 27 && v();
  }
  document.addEventListener("keyup", _), ($ = p == null ? void 0 : p.appendChild) == null || $.call(p, u), u.focus({ preventScroll: !0 });
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
  setup(t, { emit: r }) {
    const n = r, e = t, l = ct([]), i = ct([]), s = ct([]);
    let c = {};
    const o = G(() => !e.manualUpload && e.showImg && u.value ? "img" : e.manualUpload && e.showImg && u.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "list" : ""), y = G(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), f = G({
      //文件集合
      get() {
        return e.manualUpload ? p.value : p.value.map((b) => ({ id: b }));
      },
      set(b) {
        e.manualUpload ? p.value = b || [] : p.value = (b == null ? void 0 : b.map((F) => F == null ? void 0 : F.id)) || [];
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
            return Array.isArray(e.modelValue) ? e.modelValue.filter((b) => b !== "--") : X(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(b) {
        if (e.length === 1) {
          let F = It(b);
          n("update:modelValue", F ?? null), n("on-change", F ?? null);
        } else
          n("update:modelValue", fe(b)), n("on-change", fe(b));
      }
    }), u = G(() => {
      let b;
      if (e.manualUpload ? b = f.value : b = i.value, !b)
        return !1;
      for (let F of b) {
        let W;
        if (e.manualUpload ? W = F == null ? void 0 : F.type : W = F == null ? void 0 : F.mimeType, !W || W && !(rt(W) || W === "loading"))
          return !1;
      }
      return !0;
    }), v = G(() => i.value.filter((b) => rt(b == null ? void 0 : b.mimeType))), k = G(() => v.value.map((b) => ({
      src: e.url + "/" + (b == null ? void 0 : b.id) + "/download?preview=true",
      name: b == null ? void 0 : b.name
    }))), g = G(() => f.value.filter((b) => rt(b == null ? void 0 : b.type)));
    _e(g, async (b) => {
      s.value = await w(b);
    }), _e(
      () => f.value,
      async (b) => {
        if (o.value === "localImg")
          b != null && b.length ? l.value = await w(b) : l.value = [];
        else if (b != null && b.length && o.value !== "localList") {
          let F = fe(b);
          const W = fe(i.value);
          for (let M of F)
            if ((M == null ? void 0 : M.name) === void 0)
              if (M.id) {
                const ee = Pt(W, (J) => (J == null ? void 0 : J.id) === M.id);
                ee ? (M.name = ee.name, M.mimeType = ee.mimeType) : c.hasOwnProperty(M.id) ? (M.name = c[M.id].name, M.mimeType = c[M.id].mimeType) : (M.mimeType = "loading", He.get(e.url + "/" + M.id).then((J) => {
                  var me, ye, pe, xe, P, N;
                  M.name = ((pe = (ye = (me = J == null ? void 0 : J.data) == null ? void 0 : me.returnValue) == null ? void 0 : ye[0]) == null ? void 0 : pe.name) || A("r.file") + rl(b, M), M.mimeType = ((N = (P = (xe = J == null ? void 0 : J.data) == null ? void 0 : xe.returnValue) == null ? void 0 : P[0]) == null ? void 0 : N.mimeType) || "unknown", ca(i);
                }).catch(() => {
                  M.name = A("r.file") + rl(F, M);
                }));
              } else
                M.name = A("r.unknown");
          i.value = F;
        } else
          i.value = [];
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
      let F = [];
      for (let W of b) {
        let M = await pl(W);
        F.push(M);
      }
      return F;
    }
    function T(b) {
      if (!e.disabled) {
        let F = f.value;
        F == null || F.splice(b, 1), f.value = F;
      }
    }
    function C(b) {
      b != null && b.id && window.open(e.url + "/" + b.id + "/download");
    }
    function B(b) {
      return e.manualUpload ? (b == null ? void 0 : b.type) && rt(b.type) : (b == null ? void 0 : b.id) && b.mimeType && rt(b.mimeType);
    }
    async function D(b) {
      if (e.manualUpload) {
        let F, W;
        if (typeof b == "number" ? (F = b, W = l.value) : b && (F = bt(g.value, (M) => M.size === b.size && M.lastModified === b.lastModified), W = s.value), !W)
          return;
        dt(
          W.map((M, ee) => {
            var J;
            return {
              src: M,
              name: (J = g.value[ee]) == null ? void 0 : J.name
            };
          }),
          F
        );
      } else if (b != null && b.id) {
        const F = bt(v.value, (W) => W.id === b.id);
        dt(k.value, F);
      }
    }
    function I(b) {
      X(b) === "String" && b.indexOf("http") > -1 ? window.open(b) : X(b) === "File" && pl(b).then((F) => {
        $n(b.name, F);
      });
    }
    function $(b) {
      var F, W;
      if (e.manualUpload) {
        if (b) {
          let M = zl(b.name);
          if ((F = e.format) != null && F.length && e.format.indexOf(M) < 0)
            return De(
              A("r.wrongFileType"),
              A("r.supportType") + (((W = e.format) == null ? void 0 : W.length) && String(e.format) || A("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && b.size > e.maxSize * 1024)
            return De(A("r.fileIsBig"), A("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let ee = f.value;
          ee == null || ee.push(b), f.value = ee;
        }
        return !1;
      } else
        return !0;
    }
    function h(b) {
      console.warn(b), De(A("r.uploadError"), "", "error");
    }
    function x(b, F, W) {
      var M, ee, J, me, ye, pe;
      if ((b == null ? void 0 : b.code) === 0) {
        let xe = f.value;
        F.id = (ee = (M = b.data) == null ? void 0 : M[0]) == null ? void 0 : ee.id, F.name = (me = (J = b.data) == null ? void 0 : J[0]) == null ? void 0 : me.name, F.mimeType = (pe = (ye = b.data) == null ? void 0 : ye[0]) == null ? void 0 : pe.mimeType, c[F.id] = { name: F.name, mimeType: F.mimeType }, xe == null || xe.push(F), f.value = xe;
      } else
        De(A("r.uploadFail"), (b == null ? void 0 : b.message) || "", "error");
    }
    function L() {
      De(A("r.fileIsBig"), A("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function Z() {
      var b;
      De(
        A("r.wrongFileType"),
        A("r.supportType") + (((b = e.format) == null ? void 0 : b.length) && String(e.format) || A("r.none")),
        "warning"
      );
    }
    function U(b) {
      let F = b == null ? void 0 : b.id, W = b == null ? void 0 : b.mimeType;
      F && (X(W) === "String" && W.indexOf("image") > -1 ? dt(e.url + "/" + F + "/download?preview=true") : window.open(e.url + "/" + F + "/download?preview=true"));
    }
    function K(b) {
      var W, M, ee;
      let F = (ee = (M = (W = b == null ? void 0 : b.response) == null ? void 0 : W.data) == null ? void 0 : M[0]) == null ? void 0 : ee.id;
      Y(null, F);
    }
    function Y(b, F) {
      if (!(!F && F !== 0) && !e.disabled && p.value.indexOf(F) !== -1) {
        const W = fe(p.value);
        let M = f.value;
        M == null || M.splice(W.indexOf(F), 1), f.value = M;
      }
    }
    return (b, F) => {
      var J, me, ye, pe, xe;
      const W = Q("Button"), M = Q("Upload"), ee = Q("Icon");
      return S(), z("div", null, [
        q(M, {
          name: "files",
          action: m(y),
          "before-upload": $,
          "on-error": h,
          "on-success": x,
          "on-exceeded-size": L,
          "on-preview": U,
          "on-remove": K,
          "on-format-error": Z,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && ((J = m(f)) == null ? void 0 : J.length) >= e.length || !!e.disabled
        }, {
          default: le(() => {
            var P;
            return [
              q(W, {
                icon: "md-cloud-upload",
                class: we({
                  disabledR: e.length > 0 && ((P = m(f)) == null ? void 0 : P.length) >= e.length || !!e.disabled
                })
              }, {
                default: le(() => [
                  ke(H(m(A)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        m(o) === "img" && ((me = m(i)) == null ? void 0 : me.length) > 0 ? (S(), z("div", Qn, [
          (S(!0), z(be, null, Ce(m(i), (P, N) => (S(), z(be, {
            key: P == null ? void 0 : P.id
          }, [
            !e.manualUpload && (P == null ? void 0 : P.id) !== null ? (S(), z("div", {
              key: 0,
              class: we(["previewImg", { previewLoading: P.mimeType === "loading" }])
            }, [
              he(R("div", Zn, F[0] || (F[0] = [
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
                q(ee, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: m(A)("r.fView"),
                  onClick: (ie) => m(dt)(m(k), N)
                }, null, 8, ["title", "onClick"]),
                q(ee, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ie) => Y(ie, P.id),
                  title: m(A)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ge, P.mimeType !== "loading"]
              ])
            ], 2)) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(o) === "localImg" && ((ye = m(l)) == null ? void 0 : ye.length) > 0 ? (S(), z("div", lo, [
          (S(!0), z(be, null, Ce(m(l), (P, N) => (S(), z(be, {
            key: "manualImg" + N
          }, [
            e.manualUpload && P !== null ? (S(), z("div", ao, [
              R("img", {
                src: P,
                alt: "manualImg" + N
              }, null, 8, no),
              R("div", oo, [
                q(ee, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (ie) => D(N),
                  title: m(A)("r.fView")
                }, null, 8, ["onClick", "title"]),
                q(ee, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ie) => T(N),
                  title: m(A)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(o) === "localList" && ((pe = m(f)) == null ? void 0 : pe.length) > 0 ? (S(), z("div", io, [
          (S(!0), z(be, null, Ce(m(f), (P, N) => (S(), z(be, {
            key: "manualItem" + N
          }, [
            e.manualUpload && P !== null ? (S(), z("p", so, [
              P.name ? (S(), te(ee, {
                key: 0,
                class: "fileTypeIco",
                type: m(ml)(P.name),
                size: "20"
              }, null, 8, ["type"])) : ue("", !0),
              R("span", {
                class: we(["upNameT", { previewName: B(P) }]),
                onClick: (ie) => I(P),
                title: m(A)("r.download")
              }, H(_(P)), 11, ro),
              R("span", uo, [
                B(P) ? (S(), te(ee, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (ie) => D(P),
                  title: m(A)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                q(ee, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ie) => T(N),
                  title: m(A)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(o) === "list" && ((xe = m(i)) == null ? void 0 : xe.length) > 0 ? (S(), z("div", co, [
          (S(!0), z(be, null, Ce(m(i), (P, N) => (S(), z(be, {
            key: "defaultItem" + N
          }, [
            !e.manualUpload && P ? (S(), z("div", fo, [
              he(R("div", po, F[1] || (F[1] = [
                R("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ge, P.mimeType === "loading"]
              ]),
              he(q(ee, {
                type: m(ml)(P.name),
                class: "fileTypeIco",
                size: "20"
              }, null, 8, ["type"]), [
                [ge, P.mimeType !== "loading"]
              ]),
              he(R("span", {
                class: "upNameT",
                onClick: (ie) => C(P),
                title: m(A)("r.download")
              }, H(P.name || m(A)("r.file") + (N + 1)), 9, mo), [
                [ge, P.mimeType !== "loading"]
              ]),
              he(R("span", ho, [
                B(P) ? (S(), te(ee, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (ie) => D(P),
                  title: m(A)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                q(ee, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ie) => T(N),
                  title: m(A)("r.delete")
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
  setup(t, { emit: r }) {
    const n = r, e = t, l = E(!1), i = E(!1), s = E(!1), c = G({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(_) {
        n("update:modelValue", [_, o.value]), n("on-change", [_, o.value]);
      }
    }), o = G({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(_) {
        n("update:modelValue", [c.value, _]), n("on-change", [c.value, _]);
      }
    }), y = G(
      () => (c.value || "") + ((c.value || o.value) && " - " || "") + (o.value || "")
    ), f = E();
    Ge(() => {
      f.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        s.value = !0;
      }), f.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        s.value = !1;
      }), f.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (_) => {
        var w;
        !e.disabled && (c.value || o.value) && ((w = _ == null ? void 0 : _.stopPropagation) == null || w.call(_), k());
      });
    });
    function p() {
      e.disabled || (l.value = !0);
    }
    function u(_) {
      c.value = _, l.value = !1, i.value = !0;
    }
    function v(_) {
      o.value = _, i.value = !1;
    }
    function k() {
      n("update:modelValue", [null, null]), n("on-change", [null, null]);
    }
    function g() {
      l.value = !1, i.value = !1, c.value && o.value === null && (c.value = null);
    }
    return (_, w) => {
      const T = Q("DatePicker"), C = Q("Icon"), B = Q("Input");
      return S(), z("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: f
      }, [
        q(T, {
          open: m(i),
          modelValue: m(o),
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
        q(T, {
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
              q(B, {
                class: "aRoot",
                modelValue: m(y),
                "onUpdate:modelValue": w[0] || (w[0] = (D) => $e(y) ? y.value = D : null),
                readonly: "",
                placeholder: e.placeholder || m(A)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: le(() => [
                  q(C, {
                    type: m(s) && (m(c) || m(o)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
  setup(t, { emit: r }) {
    const n = r, e = t, l = E(), i = "date-c-r-" + Math.floor(Math.random() * 1e7 + 1e7), s = E({}), c = G({
      get() {
        return e.modelValue;
      },
      set(f) {
        n("update:modelValue", f);
      }
    }), o = G(() => {
      if (X(e.options) === "Object") {
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
          s.value = {
            ...o.value,
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
        s.value = f;
      },
      { immediate: !0 }
    ), Ge(() => {
      var p;
      const f = document.getElementsByClassName(i)[0];
      (p = f == null ? void 0 : f.addEventListener) == null || p.call(f, "click", y, !0);
    }), (f, p) => {
      const u = Q("DatePicker");
      return S(), te(u, {
        ref_key: "dateC",
        ref: l,
        modelValue: m(c),
        "onUpdate:modelValue": p[0] || (p[0] = (v) => $e(c) ? c.value = v : null),
        type: f.type,
        options: m(s),
        placement: f.placement,
        placeholder: f.placeholder,
        clearable: f.clearable,
        disabled: f.disabled,
        editable: !1,
        transferClassName: i,
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
  setup(t, { emit: r }) {
    const n = r, e = t, l = ct(), i = G({
      get() {
        return e.modelValue;
      },
      set(f) {
        n("update:modelValue", f), n("on-change", f);
      }
    }), s = G(
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
                  De(A("r.uploadFail"), "", "error");
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
                  De(A("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), o = G(() => ({
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
    }), (f, p) => (S(), z("div", yo, [
      he(q(m(Sa), {
        class: "editor-pro-toolbar",
        editor: m(l),
        defaultConfig: m(s),
        mode: f.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ge, !f.disabled]
      ]),
      q(m(Ca), {
        class: "editor-pro-editor",
        modelValue: m(i),
        "onUpdate:modelValue": p[0] || (p[0] = (u) => $e(i) ? i.value = u : null),
        defaultConfig: m(c),
        mode: f.mode,
        onOnCreated: y,
        style: se(m(o))
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
  setup(t, { emit: r }) {
    const n = r, e = t, l = G(() => {
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
    function i(p) {
      return {
        withInfo: !!p.info,
        withTitle: !!p.title,
        inlineFormItemXN: e.inline,
        noLabel: p.type === "selectInput",
        [p.class]: p.class,
        slotInput: p.slotPosition
      };
    }
    function s(p, u) {
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
    function o(p) {
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
      const v = Q("InputNumber"), k = Q("Input"), g = Q("Option"), _ = Q("Select"), w = Q("Radio"), T = Q("Icon"), C = Q("RadioGroup"), B = Q("Checkbox"), D = Q("CheckboxGroup"), I = Q("TimePicker"), $ = Q("FormItem");
      return e.item ? (S(), te($, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: we(["relativeBox", i(e.item)])
      }, {
        default: le(() => [
          e.item.type === "txt" ? (S(), z("div", {
            key: 0,
            style: se([e.itemStyle, { display: "inline-block" }]),
            class: we({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, H(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (S(), te(v, {
            key: 1,
            style: se(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[0] || (u[0] = (h) => e.tempKeys[e.item.tempKey] = h),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || m(A)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: u[1] || (u[1] = (h) => s(h, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (S(), te(k, {
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
            placeholder: e.item.placeholder || m(A)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[3] || (u[3] = (h) => s(h, e.item)),
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
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (S(), te(_, {
            key: 3,
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[4] || (u[4] = (h) => p.tempKeys[e.item.tempKey] = h),
            style: se(p.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || m(A)("r.pSelect"),
            onOnChange: u[5] || (u[5] = (h) => s(h, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: le(() => [
              (S(!0), z(be, null, Ce(e.item.options, (h, x) => (S(), te(g, {
                value: h.val,
                label: h.label || h.val,
                key: "option-" + e.item.key + x,
                disabled: !!h.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (S(), te(Gl, {
            key: 4,
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[6] || (u[6] = (h) => p.tempKeys[e.item.tempKey] = h),
            "label-width": p.labelWidth,
            "item-width": m(l),
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || m(A)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: o
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (S(), te(jl, {
            key: 5,
            style: se(p.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[7] || (u[7] = (h) => e.valGroup[e.item.key] = h),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || m(A)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: u[8] || (u[8] = (h) => y(h, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (S(), te(Wl, {
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
            placeholder: e.item.placeholder || m(A)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: u[10] || (u[10] = (h) => f(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (S(), te(w, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[11] || (u[11] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: u[12] || (u[12] = (h) => s(h, e.item))
          }, {
            default: le(() => [
              ke(H(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (S(), te(C, {
            key: 8,
            style: se(p.itemStyle),
            onOnChange: u[13] || (u[13] = (h) => c(h, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[14] || (u[14] = (h) => p.tempKeys[e.item.tempKey] = h)
          }, {
            default: le(() => [
              (S(!0), z(be, null, Ce(e.item.options, (h) => (S(), te(w, {
                key: "radioItem" + h.val,
                label: h.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: le(() => [
                  h.icon && !e.item.buttonType ? (S(), te(T, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : ue("", !0),
                  R("span", null, H(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (S(), te(B, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[15] || (u[15] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled,
            onOnChange: u[16] || (u[16] = (h) => s(h, e.item))
          }, {
            default: le(() => [
              ke(H(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (S(), te(D, {
            key: 10,
            style: se(p.itemStyle),
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[17] || (u[17] = (h) => p.tempKeys[e.item.tempKey] = h),
            onOnChange: u[18] || (u[18] = (h) => c(h, e.item))
          }, {
            default: le(() => [
              (S(!0), z(be, null, Ce(e.item.options, (h) => (S(), te(B, {
                key: "checkItem" + h.val,
                label: h.val,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: le(() => [
                  h.icon ? (S(), te(T, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : ue("", !0),
                  R("span", null, H(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (S(), te(k, {
            key: 11,
            type: "textarea",
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[19] || (u[19] = (h) => p.tempKeys[e.item.tempKey] = h),
            autosize: e.item.autosize || { minRows: 2 },
            style: se(p.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || m(A)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[20] || (u[20] = (h) => s(h, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (S(), te(Xl, {
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
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (S(), te(Yl, {
            key: 13,
            style: se(p.itemStyle),
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[23] || (u[23] = (h) => p.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placeholder: e.item.placeholder || m(A)("r.selectDate"),
            options: e.item.dateOptions || {},
            "time-picker-options": p.item.timePickerOptions || {},
            clearable: e.item.clearable !== !1,
            onOnChange: u[24] || (u[24] = (h) => s(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "time-picker-options", "clearable"])) : e.item.type === "time" ? (S(), te(I, {
            key: 14,
            style: se(p.itemStyle),
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[25] || (u[25] = (h) => p.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(A)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: u[26] || (u[26] = (h) => s(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (S(), te(Jl, {
            key: 15,
            style: se(p.itemStyle),
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[27] || (u[27] = (h) => p.tempKeys[e.item.tempKey] = h),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(A)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: u[28] || (u[28] = (h) => s(h, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (S(), te(Ql, {
            key: 16,
            class: "inlineBlock",
            style: se(p.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[29] || (u[29] = (h) => e.valGroup[e.item.key] = h),
            placeholder: e.item.placeholder || m(A)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: u[30] || (u[30] = (h) => s(h, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (S(), te(Hl, {
            key: 17,
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[31] || (u[31] = (h) => p.tempKeys[e.item.tempKey] = h),
            style: se(p.itemStyle),
            placeholder: e.item.placeholder || m(A)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: u[32] || (u[32] = (h) => s(h, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (S(), z("div", {
            key: 18,
            class: "inlineBlock",
            style: se(p.itemStyle)
          }, [
            Me(p.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ue("", !0),
          e.item.info ? (S(), z("div", vo, H(e.item.info), 1)) : ue("", !0),
          e.item.title ? (S(), z("div", go, H(e.item.title), 1)) : ue("", !0),
          e.inline ? ue("", !0) : (S(), z("span", bo))
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
  setup(t, { expose: r, emit: n }) {
    var ol, il;
    const e = n, l = t, i = E(null), s = E({}), c = E([]), o = E({});
    let y = [];
    const f = ((ol = window == null ? void 0 : window.g) == null ? void 0 : ol.mgrURL) ?? "";
    let p = E([]), u = [];
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
              O && O && !(O.message || O.validator) && (O.message = A("r.required"));
          else X(d[a]) === "Object" && (d[a].message || d[a].validator || (d[a].message = A("r.required")));
      return d;
    }), D = G(() => {
      let d = [];
      if (w.value)
        for (let a of c.value)
          h(a, d);
      else
        h(c.value, d);
      return d.concat(p.value, u);
    }), I = G(() => {
      let d = [];
      if (w.value)
        for (let a of c.value)
          x(a, d);
      else
        x(c.value, d);
      return d;
    });
    function $(d) {
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
    function x(d, a) {
      for (let O of d)
        (O == null ? void 0 : O.showing) === !0 && O.key && O.type !== "selectInput" && a.push(O.key);
    }
    function L() {
      return new Promise((d) => {
        K(), U().then(() => {
          e("on-reset"), d(!0);
        });
      });
    }
    function Z() {
      return new Promise((d) => {
        for (let a of y)
          a();
        y = [], o.value = {}, N(), ye(), U().then(() => {
          e("on-re-render"), d(!0);
        });
      });
    }
    function U() {
      return new Promise((d) => {
        k.value = Math.floor(Math.random() * 1e8 + 1e3), Ae(function() {
          d(!0);
        });
      });
    }
    function K() {
      let d = F();
      for (let a in s.value)
        if (s.value.hasOwnProperty(a))
          if (Oe(d[a]))
            s.value[a] = d[a];
          else if (Array.isArray(s.value[a]))
            s.value[a] = [];
          else if (X(s.value[a]) === "Boolean")
            s.value[a] = !1;
          else {
            const O = vt(l.formData, (V) => (V == null ? void 0 : V.key) === a);
            O && (O.type === "editor" || O.type === "editorPro") ? s.value[a] = "" : s.value[a] = null;
          }
      Y(d);
    }
    function Y(d) {
      for (let a in o.value)
        o.value.hasOwnProperty(a) && (Oe(d[a]) ? o.value[a] = d[a] : Array.isArray(o.value[a]) ? o.value[a] = [] : X(o.value[a]) === "Object" && o.value[a].hasOwnProperty("key") && o.value[a].hasOwnProperty("val") ? o.value[a].val = null : o.value[a] = null);
    }
    function b(d) {
      let a = F();
      Oe(a[d]) ? o.value[d] = a[d] : Array.isArray(o.value[d]) ? o.value[d] = [] : o.value[d] = null;
    }
    function F() {
      let d = {};
      if (w.value)
        for (let a of c.value)
          W(a, d);
      else
        W(c.value, d);
      return d;
    }
    function W(d, a) {
      for (let O of d)
        O.tempKey && Oe(O.defaultVal) && me(O, a), O.key && Oe(O.defaultVal) && (a[O.key] = O.defaultVal), O.key2 && Oe(O.defaultVal2) && (a[O.key2] = O.defaultVal2);
    }
    function M(d) {
      if (d.show) {
        if (X(d.show) === "Object")
          return J(d, ee(d.show));
        if (Array.isArray(d.show))
          if (d.showOr) {
            for (let a of d.show)
              if (ee(a) === !0)
                return J(d, !0);
            return J(d, !1);
          } else {
            for (let a of d.show)
              if (ee(a) === !1)
                return J(d, !1);
            return J(d, !0);
          }
        else if (typeof d.show == "function")
          return J(d, d.show(s.value));
      } else d.showing || (d.showing = !0);
      return !0;
    }
    function ee(d) {
      if (d.reg && typeof d.reg.test == "function")
        return d.reg.test(s.value[d.key]);
      if (Array.isArray(d.val)) {
        for (let a of d.val) {
          if ((s.value[d.key] || s.value[d.key] === 0 || s.value[d.key] === !1) && a === ".")
            return !0;
          if (s.value[d.key] === a)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function J(d, a) {
      return !(d != null && d.showing) && a && (d != null && d.key) ? (d.showing = a, d.defaultVal !== void 0 && (d.tempKey ? (o.value[d.tempKey] === null || o.value[d.tempKey] === void 0 || (X(o.value[d.tempKey]) === "Object" || Array.isArray(o.value[d.tempKey])) && Pe(o.value[d.tempKey])) && me(d, o.value) : (s.value[d.key] === null || s.value[d.key] === void 0) && (s.value[d.key] = d.defaultVal), d.key2 && d.deafultVal2 !== void 0 && (s.value[d.key2] === null || s.value[d.key2] === void 0) && d.type !== "inputMap" && (s.value[d.key2] = d.defaultVal2)), d.tempKey && ve(o.value[d.tempKey], d)) : d.showing = a, a;
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
              a.tempKey = O, o.value[O] = E({
                key: a.key || null,
                val: a.defaultVal || null
              }), y.push(
                _e(
                  () => o.value[O],
                  (j) => {
                    ve(j, a);
                  },
                  { immediate: !0 }
                )
              );
              break;
            case "inputMap":
              const V = "inputMap" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = V, a.key3 ? o.value[V] = a.defaultVal !== void 0 && a.defaultVal2 !== void 0 ? {
                lng: a.defaultVal,
                lat: a.defaultVal2,
                name: a.defaultVal3 || ""
              } : {
                lng: null,
                lat: null,
                name: null
              } : o.value[V] = a.defaultVal !== void 0 && a.defaultVal2 !== void 0 ? {
                lng: a.defaultVal,
                lat: a.defaultVal2
              } : {
                lng: null,
                lat: null
              }, y.push(
                _e(
                  () => o.value[V],
                  (j) => {
                    ve(j, a);
                  },
                  { immediate: !0 }
                )
              ));
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              const ae = "inputT" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = ae, o.value[ae] = a.defaultVal !== void 0 ? a.defaultVal : null, y.push(
                _e(
                  () => o.value[ae],
                  (j) => {
                    ve(j, a);
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
                    let j = !0;
                    for (let oe of a.changeOption)
                      if (!oe.valKey || !oe.key) {
                        j = !1;
                        break;
                      }
                    j ? y.push(
                      _e(
                        () => {
                          let oe = "";
                          if (Array.isArray(a.changeOption))
                            for (let Te of a.changeOption) {
                              let Ke = s.value[Te.valKey];
                              if (Ke && !Array.isArray(Ke) || Array.isArray(Ke) && Ke.length || Ke === 0 || Ke === !1)
                                oe += "&" + Te.key + "=" + Ke;
                              else if (!Te.notRequired)
                                return !1;
                            }
                          return oe;
                        },
                        (oe) => {
                          let Te = fe(o.value[a.tempKey]);
                          if (o.value[a.tempKey] = null, oe && a.optionUrl) {
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
                      () => typeof a.changeOption == "object" && !Array.isArray(a.changeOption) ? s.value[a.changeOption.valKey] : !1,
                      (j) => {
                        let oe = fe(o.value[a.tempKey]);
                        if (o.value[a.tempKey] = null, (j && !Array.isArray(j) || Array.isArray(j) && j.length || j === 0 || j === !1) && a.optionUrl && typeof a.changeOption == "object" && !Array.isArray(a.changeOption)) {
                          let Te = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                          xe((Te + "&" + a.changeOption.key + "=" + j).replace(/\?&/, "?"), a, oe);
                        } else
                          a.localOption ? je(a, "options", [...a.localOption]) : je(a, "options", []), Oe(oe) && P(oe, a);
                      },
                      { immediate: !0 }
                    )
                  ) : X(a.changeOption) === "Boolean" && y.push(
                    _e(
                      () => {
                        const j = vt(l.formData, (oe) => (oe == null ? void 0 : oe.key) === a.key);
                        return j.optionUrl = fa(j.optionUrl), j.optionUrl.value;
                      },
                      (j) => {
                        let oe = fe(o.value[a.tempKey]);
                        o.value[a.tempKey] = null, j ? xe(j, a, oe) : (a.localOption ? je(a, "options", [...a.localOption]) : je(a, "options", []), Oe(oe) && P(oe, a));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
                else a.optionUrl && xe(a.optionUrl, a);
              else X(a.borrowOption) === "String" && Ae(function() {
                a.options = vt(c.value, (j) => (j == null ? void 0 : j.key) === a.borrowOption).options;
              });
              const re = "opEle" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = re, a.type === "select" && a.multiple || a.type === "checkboxGroup" ? o.value[re] = a.defaultVal !== void 0 ? a.defaultVal : [] : a.booleanVal ? o.value[re] = a.defaultVal !== void 0 ? a.defaultVal ? 1 : 0 : null : o.value[re] = a.defaultVal !== void 0 ? a.defaultVal : null, y.push(
                _e(
                  () => o.value[re],
                  (j) => {
                    ve(j, a);
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
              a.tempKey = Se, a.dateType === "date" || a.dateType === "datetime" || a.dateType === "time" || a.dateType === "year" || a.dateType === "month" ? o.value[Se] = a.defaultVal || null : (a.dateType === "daterange" || a.dateType === "datetimerange" || a.dateType === "timerange" || a.type === "monthRange") && (o.value[Se] = a.defaultVal && a.defaultVal2 && [a.defaultVal, a.defaultVal2] || []), y.push(
                _e(
                  () => o.value[Se],
                  (j) => {
                    ve(j, a);
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
        Array.isArray(re) ? (a.optionFilter && X(a.optionFilter) === "Function" && (re = a.optionFilter(re)), a.optionLabel && a.optionVal ? (ae.length = 0, ae.push(
          ...re.map((j) => {
            let oe;
            if (Array.isArray(a.optionLabel)) {
              let Te = "";
              a.optionLabel.forEach((Ke, sl) => {
                let xt = String(j[Ke]);
                sl === 1 ? Te += "（" + xt : sl > 1 ? Te += "、" + xt : Te += xt;
              }), oe = {
                label: Te + "）",
                val: a.optionVal && j[a.optionVal]
              };
            } else
              oe = {
                label: a.optionLabel && j[a.optionLabel],
                val: a.optionVal && j[a.optionVal]
              };
            if (a.collectLabel)
              if (Array.isArray(a.collectLabel))
                for (let Te of a.collectLabel)
                  Te.valKey && Te.valKey !== "label" && (oe[Te.valKey] = j[Te.valKey]);
              else
                a.collectLabel.valKey && a.collectLabel.valKey !== "label" && (oe[a.collectLabel.valKey] = j[a.collectLabel.valKey]);
            if (oe.val !== null && oe.val !== void 0)
              return oe;
          })
        )) : (ae.length = 0, ae.push(...re))) : ae.length = 0, a.localOption && ae.unshift(...a.localOption), Oe(O) && P(O, a), a.disableOptionByOthers && (X(a.disableOptionByOthers) === "String" ? y.push(
          _e(
            () => s.value[a.disableOptionByOthers],
            (j) => {
              if (b(a.tempKey), !!ae) {
                for (let oe of ae)
                  oe.disabled && (oe.disabled = !1);
                if (j || j === 0 || j === !1)
                  for (let oe of ae)
                    oe.val === j && (oe.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(a.disableOptionByOthers) && y.push(
          _e(
            () => a.disableOptionByOthers.filter((j) => j).map((j) => s.value[j]),
            (j) => {
              if (b(a.tempKey), !!ae) {
                for (let oe of ae)
                  oe.disabled && (oe.disabled = !1);
                if (j) {
                  for (let oe of ae)
                    for (let Te = 0; Te < j.length; Te++)
                      if (oe.val === j[Te]) {
                        oe.disabled = !0, j.splice(Te, 1);
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
              valGroup: s.value
            })
          )
        );
      }).catch(() => {
        console.warn("拉取选项出错");
      });
    }
    function P(d, a) {
      Array.isArray(Lt(a.options)) && bt(Lt(a.options), { val: d }) !== -1 && (o.value[a.tempKey] = d);
    }
    function N() {
      if (s.value = {}, w.value)
        for (let d of l.formData)
          ie(d);
      else
        ie(l.formData);
    }
    function ie(d) {
      for (let a of d)
        a != null && a.key && (a.type === "checkboxGroup" || a.type === "select" && a.multiple ? s.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : [] : a.type === "editor" || a.type === "editorPro" ? s.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : "" : (s.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : null, a.key2 && (s.value[a.key2] = a.defaultVal2 !== void 0 && a.show === void 0 ? a.defaultVal2 : null)));
    }
    function ve(d, a) {
      if (a != null && a.showing)
        switch (a.type) {
          case "selectInput":
            d && (d.beforeKey && delete s.value[d.beforeKey], s.value[d.key] = d.val);
            break;
          case "inputMap":
            if (!a.key || !a.key2)
              return;
            d ? (s.value[a.key] = d.lng, s.value[a.key2] = d.lat, a.key3 && (s.value[a.key3] = d.name)) : (s.value[a.key] = null, s.value[a.key2] = null, a.key3 && (s.value[a.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!a.key)
              return;
            if (d || d === 0) {
              let ae = /^-?\d+(.\d+)?$/;
              a.numberVal && ae.test(d) ? s.value[a.key] = Number(d) : s.value[a.key] = d;
            } else
              s.value[a.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!a.key)
              return;
            if (a.booleanVal && !a.multiple ? s.value[a.key] = d === void 0 || d === "" || d === null ? null : !!d : a.multiple || a.type === "checkboxGroup" ? s.value[a.key] = Object.assign([], d) : s.value[a.key] = d, a.collectLabel) {
              const ae = Ve(a, d);
              if (Array.isArray(a.collectLabel)) {
                for (let re of a.collectLabel)
                  if (re != null && re.key && re.valKey) {
                    const Se = ne(re.key);
                    let j = null;
                    Array.isArray(ae) ? (j = ae.map((oe) => oe[re.valKey]), s.value[re.key] = j, Se && (o.value[Se.tempKey] = j)) : (ae && Oe(ae[re.valKey]) && (j = ae[re.valKey]), s.value[re.key] = j, Se && (Se.booleanVal && typeof j == "boolean" ? o.value[Se.tempKey] = j ? 1 : 0 : o.value[Se.tempKey] = j));
                  }
              } else if (typeof a.collectLabel == "object" && a.collectLabel.key && a.collectLabel.valKey) {
                const re = ne(a.collectLabel.key);
                let Se = null;
                Array.isArray(ae) ? (Se = ae.map(
                  (j) => a.collectLabel && !Array.isArray(a.collectLabel) && j[a.collectLabel.valKey]
                ), s.value[a.collectLabel.key] = Se, re && (o.value[re.tempKey] = Se)) : (ae && Oe(ae[a.collectLabel.valKey]) && (Se = ae[a.collectLabel.valKey]), s.value[a.collectLabel.key] = Se, re && (re.booleanVal && typeof Se == "boolean" ? o.value[re.tempKey] = Se ? 1 : 0 : o.value[re.tempKey] = Se));
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
              d ? (O === "time" ? s.value[a.key] = d : s.value[a.key] = st(d).format(typeof a.format == "string" ? a.format : V[O]), O === "date" && a.addTime && (s.value[a.key] += " 00:00:00")) : s.value[a.key] = null;
            else if (a.type === "monthRange" || O === "daterange" || O === "datetimerange" || O === "timerange") {
              if (!a.key2)
                return;
              d && d[0] && d[1] ? (O === "timerange" ? (s.value[a.key] = d[0], s.value[a.key2] = d[1]) : a.type === "monthRange" ? (s.value[a.key] = typeof a.format == "string" && st(d[0]).format(a.format) || d[0], s.value[a.key2] = typeof a.format == "string" && a.format && st(d[1]).format(a.format) || d[1]) : (s.value[a.key] = st(d[0]).format(a.format || O && V[O]), s.value[a.key2] = st(d[1]).format(a.format || O && V[O])), O === "daterange" && a.addTime && (s.value[a.key] += " 00:00:00", s.value[a.key2] += " 23:59:59")) : (s.value[a.key] = null, s.value[a.key2] = null);
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
          const O = Ie(a, d);
          if (O)
            return O;
        }
        return !1;
      }
      return Ie(c.value, d);
    }
    function Ie(d, a) {
      for (let O of d)
        if (O.key === a)
          return O;
      return !1;
    }
    function ze(d, a) {
      let O = {};
      for (let V in s.value)
        s.value.hasOwnProperty(V) && d[V] !== void 0 && (O[V] = d[V], delete d[V]);
      Ue(O, a);
      for (let V in d)
        d.hasOwnProperty(V) && (u.indexOf(V) < 0 && u.push(V), s.value[V] = d[V]);
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
          if ((O == null ? void 0 : O.key) === V && I.value.indexOf(V) > -1 && !(a[V] === null || (Array.isArray(a[V]) || X(a[V]) === "Object") && Pe(a[V])))
            return delete a[V], !0;
        return !1;
      }).map((O) => O == null ? void 0 : O.key);
    }
    function Ue(d, a = !1) {
      let O = fe(d);
      de(d, a);
      for (let V in s.value)
        if (s.value.hasOwnProperty(V) && d[V] !== void 0 && d[V] !== "--") {
          if (Array.isArray(d[V]))
            d[V] = d[V].filter((ae) => ae !== "--");
          else if (X(d[V]) === "Object")
            for (let ae in d[V])
              d[V].hasOwnProperty(ae) && d[V][ae] === "--" && (d[V][ae] = null);
          s.value[V] = d[V];
        } else a || (s.value[V] = Array.isArray(s.value[V]) ? [] : null);
      Ae(function() {
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
              X(a[V.key]) === "Number" && X(a[V.key2] === "Number") ? V.key3 ? o.value[V.tempKey] = {
                lng: a[V.key],
                lat: a[V.key2],
                name: a[V.key3]
              } : o.value[V.tempKey] = {
                lng: a[V.key],
                lat: a[V.key2]
              } : V.key3 ? o.value[V.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : o.value[V.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              a[V.key] && a[V.key] !== "--" || a[V.key] === 0 ? o.value[V.tempKey] = a[V.key] : o.value[V.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              a[V.key] && a[V.key] !== "--" || a[V.key] === 0 || a[V.key] === !1 ? V.multiple || V.type === "checkboxGroup" ? o.value[V.tempKey] = [...a[V.key]] : V.booleanVal ? o.value[V.tempKey] = a[V.key] ? 1 : 0 : o.value[V.tempKey] = a[V.key] : V.multiple || V.type === "checkboxGroup" ? o.value[V.tempKey] = [] : o.value[V.tempKey] = null;
              break;
            case "date":
            case "time":
              if (V.dateType === "date" || V.dateType === "datetime" || V.dateType === "year" || V.dateType === "month" || V.dateType === "time")
                o.value[V.tempKey] = a[V.key] && a[V.key] !== "--" ? a[V.key] : null;
              else if (V.dateType === "daterange" || V.dateType === "datetimerange" || V.dateType === "timerange") {
                if (!V.key2)
                  continue;
                o.value[V.tempKey] = a[V.key] && a[V.key] !== "--" && a[V.key2] && a[V.key2] !== "--" && [a[V.key], a[V.key2]] || [];
              }
              break;
          }
    }
    function ea(d) {
      if (Array.isArray(d))
        for (let a of d)
          Zt(a);
      else X(d) === "Object" && Zt(d);
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
      a.key2 && (s.value[a.key2] = d), et({
        e: d,
        root: a
      });
    }
    function tl(d) {
      d.beforeKey && ya(p.value, (a) => a === d.beforeKey), d.key && (p.value.indexOf(d.key) === -1 && p.value.push(d.key), et({
        e: null,
        root: d
      }));
    }
    function ll({ name: d, root: a }) {
      a.key2 && (s.value[a.key2] = d), et({
        e: d,
        root: a
      });
    }
    function al({ e: d, root: a }) {
      et({
        e: d,
        root: a
      }), Ae(function() {
        var O, V;
        (V = (O = i.value) == null ? void 0 : O.validateField) == null || V.call(O, a.key);
      });
    }
    function et({ e: d, root: a }) {
      Re(() => {
        var V;
        let O = {
          event: d
        };
        if (a.key && (O[a.key] = s.value[a.key]), a.key2 && (O[a.key2] = s.value[a.key2]), Array.isArray(a.collectLabel))
          for (let ae of a.collectLabel)
            O[ae.key] = s.value[ae.key];
        else (V = a.collectLabel) != null && V.key && (O[a.collectLabel.key] = s.value[a.collectLabel.key]);
        e("on-item-change", O);
      }, 300);
    }
    function nl() {
      let d = {};
      for (let a of D.value)
        d[a] = s.value[a];
      return l.trim && (d = _t(d)), d;
    }
    function ta() {
      var d, a;
      (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d);
    }
    function la(d) {
      Re(() => {
        var a, O;
        (O = (a = i.value) == null ? void 0 : a.validateField) == null || O.call(a, d, () => {
        });
      }, 10);
    }
    function aa(d) {
      Re(() => {
        var a, O;
        if (Array.isArray(d))
          for (let V of d)
            (O = (a = i.value) == null ? void 0 : a.validateField) == null || O.call(a, V, () => {
            });
      }, 10);
    }
    function na(d) {
      d !== void 0 && (v.value = !!d);
    }
    function Bt() {
      var d, a;
      l.disabled || (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d, (O) => {
        _ || (_ = !0, O && (v.value = !0, e("on-submit", nl())), Re(() => {
          _ = !1;
        }, 2e3));
      });
    }
    return Ge(() => {
      N(), ye();
    }), r({
      resetForm: L,
      refreshFormDom: U,
      reRenderForm: Z,
      setItemToValGroup: ze,
      updateValGroup: Ue,
      updateFormDataT: ea,
      validate: ta,
      reValidate: la,
      changeLoading: na,
      getValGroup: nl,
      submit: Bt
    }), (d, a) => {
      const O = Q("FormItem"), V = Q("Button"), ae = Q("Form");
      return S(), te(ae, {
        ref_key: "formGroupXRef",
        ref: i,
        model: m(s),
        rules: m(B),
        "label-width": l.labelWidth,
        inline: l.inline,
        "show-message": l.showMessage,
        class: "formXN",
        key: m(k)
      }, {
        default: le(() => [
          q(O, { style: { display: "none" } }, {
            default: le(() => a[0] || (a[0] = [
              R("input", { type: "text" }, null, -1)
            ])),
            _: 1,
            __: [0]
          }),
          m(w) ? (S(!0), z(be, { key: 0 }, Ce(m(c), (re, Se) => (S(), z("div", {
            class: we([d.teamClass, "formTeamBox" + Se]),
            key: "formTeamBox" + Se
          }, [
            (S(!0), z(be, null, Ce(re, (j, oe) => (S(), z(be, {
              key: "formItem" + oe
            }, [
              M(j) ? (S(), te(kl, {
                key: 0,
                item: j,
                style: se(m(T)),
                "item-style": m(C),
                "val-group": m(s),
                "temp-keys": m(o),
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
                Ce($(re), (Te) => ({
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
          (S(!0), z(be, null, Ce(m(c), (re, Se) => (S(), z(be, {
            key: "formItem" + Se
          }, [
            !m(w) && M(re) ? (S(), te(kl, {
              key: 0,
              item: re,
              style: se(m(T)),
              "item-style": m(C),
              "val-group": m(s),
              "temp-keys": m(o),
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
              Ce($(d.formData), (j) => ({
                name: j.slotName,
                fn: le((oe) => [
                  Me(d.$slots, j.slotName, {
                    valGroup: oe.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ue("", !0)
          ], 64))), 128)),
          l.showLongOkBt ? (S(), te(O, { key: 1 }, {
            default: le(() => [
              q(V, {
                onClick: Bt,
                style: se(m(C)),
                type: "primary",
                loading: l.btnLoading && m(v),
                disabled: l.disabled
              }, {
                default: le(() => [
                  ke(H(l.longOkBtTxt || m(A)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ue("", !0),
          R("div", ko, [
            l.showInlineOkBt ? (S(), te(V, {
              key: 0,
              type: "primary",
              class: we({ inlineFormBtXN: l.inline, okBtnXN: !0 }),
              onClick: Bt,
              loading: l.btnLoading && m(v),
              disabled: l.disabled
            }, {
              default: le(() => [
                ke(H(l.inlineOkBtTxt || m(A)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : ue("", !0),
            l.showInlineClearBt ? (S(), te(V, {
              key: 1,
              onClick: L,
              class: we({ inlineFormBtXN: l.inline }),
              type: "dashed"
            }, {
              default: le(() => [
                ke(H(l.inlineClearBtTxt || m(A)("r.clear")), 1)
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
  setup(t, { expose: r, emit: n }) {
    const e = n, l = t, i = E({ width: l.with }), s = E(!1), c = E(), o = G(() => {
      var I, $;
      if (Array.isArray(l.formData))
        if (Array.isArray(l.formData[0])) {
          let h = [];
          for (let x of l.formData)
            x && (h = h.concat(
              x.filter((L) => (L == null ? void 0 : L.type) === "custom" || (L == null ? void 0 : L.type) === "input" && L.slotName && L.slotPosition)
            ));
          return h;
        } else
          return ($ = (I = l.formData) == null ? void 0 : I.filter) == null ? void 0 : $.call(
            I,
            (h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition
          );
      return [];
    });
    function y() {
      return new Promise((I) => {
        var $, h;
        (h = ($ = c.value).resetForm) == null || h.call($).then((x) => {
          I(x);
        });
      });
    }
    function f() {
      return new Promise((I) => {
        var $, h;
        (h = ($ = c.value).refreshFormDom) == null || h.call($).then((x) => {
          I(x);
        });
      });
    }
    function p() {
      return new Promise((I) => {
        var $, h;
        (h = ($ = c.value).reRenderForm) == null || h.call($).then((x) => {
          I(x);
        });
      });
    }
    function u(I, $) {
      var h, x;
      (x = (h = c.value).setItemToValGroup) == null || x.call(h, I, $);
    }
    function v(I, $) {
      var h, x;
      (x = (h = c.value).updateValGroup) == null || x.call(h, I, $);
    }
    function k(I) {
      var $, h;
      (h = ($ = c.value).updateFormDataT) == null || h.call($, I);
    }
    function g() {
      var I, $;
      ($ = (I = c.value).validate) == null || $.call(I);
    }
    function _(I) {
      var $, h;
      (h = ($ = c.value).reValidate) == null || h.call($, I);
    }
    function w(I) {
      var $, h;
      I !== void 0 && (s.value = !!I, (h = ($ = c.value).changeLoading) == null || h.call($, s.value));
    }
    function T() {
      var I, $;
      return ($ = (I = c.value).getValGroup) == null ? void 0 : $.call(I);
    }
    function C() {
      s.value = !0;
    }
    function B() {
      var I, $;
      ($ = (I = c.value).submit) == null || $.call(I);
    }
    function D() {
      e("on-cancel"), Re(() => {
        var I, $;
        s.value = !1, ($ = (I = c.value).changeLoading) == null || $.call(I, !1);
      }, 1e3);
    }
    return r({
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
      close: D
    }), (I, $) => {
      const h = Q("Button");
      return S(), z("div", {
        style: se(m(i)),
        class: "formGroupBoxVM"
      }, [
        q(Tt, ot({
          ref_key: "formRRef",
          ref: c
        }, I.$attrs, {
          "form-data": l.formData,
          "label-width": l.labelWidth,
          "content-width": l.contentWidth,
          "item-width": l.itemWidth,
          btnLoading: l.btnLoading,
          disabled: l.disabled,
          onOnSubmit: C
        }), nt({ _: 2 }, [
          Ce(m(o), (x) => ({
            name: x.slotName,
            fn: le(({ valGroup: L }) => [
              Me(I.$slots, x.slotName, { valGroup: L })
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
            l.showOkBt ? (S(), te(h, {
              key: 0,
              onClick: B,
              class: "form-save-btn",
              loading: l.btnLoading && m(s),
              disabled: l.disabled
            }, {
              default: le(() => [
                ke(H(l.okBtTxt || m(A)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])) : ue("", !0),
            l.showCancelBt ? (S(), te(h, {
              key: 1,
              onClick: D,
              class: "form-cancel-btn"
            }, {
              default: le(() => [
                ke(H(l.cancelBtTxt || m(A)("r.cancel")), 1)
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
  setup(t, { expose: r, emit: n }) {
    const e = n, l = t, i = E(), s = G(() => {
      var C, B;
      if (Array.isArray(l.formData[0])) {
        let D = [];
        for (let I of l.formData)
          I && (D = D.concat(
            I.filter(($) => ($ == null ? void 0 : $.type) === "custom" || ($ == null ? void 0 : $.type) === "input" && $.slotName && $.slotPosition)
          ));
        return D;
      }
      return (B = (C = l.formData) == null ? void 0 : C.filter) == null ? void 0 : B.call(
        C,
        (D) => (D == null ? void 0 : D.type) === "custom" || (D == null ? void 0 : D.type) === "input" && D.slotName && D.slotPosition
      );
    });
    function c() {
      return new Promise((C) => {
        var B, D;
        (D = (B = i.value).resetForm) == null || D.call(B).then(() => {
          C();
        });
      });
    }
    function o() {
      return new Promise((C) => {
        var B, D;
        (D = (B = i.value).refreshFormDom) == null || D.call(B).then(() => {
          C();
        });
      });
    }
    function y() {
      return new Promise((C) => {
        var B, D;
        (D = (B = i.value).reRenderForm) == null || D.call(B).then(() => {
          C();
        });
      });
    }
    function f(C, B) {
      var D, I;
      (I = (D = i.value).setItemToValGroup) == null || I.call(D, C, B);
    }
    function p(C, B) {
      var D, I;
      (I = (D = i.value).updateValGroup) == null || I.call(D, C, B);
    }
    function u(C) {
      var B, D;
      (D = (B = i.value).updateFormDataT) == null || D.call(B, C);
    }
    function v() {
      var C, B;
      (B = (C = i.value).validate) == null || B.call(C);
    }
    function k(C) {
      var B, D;
      (D = (B = i.value).reValidate) == null || D.call(B, C);
    }
    function g(C) {
      var B, D;
      (D = (B = i.value).changeLoading) == null || D.call(B, C === void 0 ? !1 : C);
    }
    function _() {
      var C, B;
      return (B = (C = i.value).getValGroup) == null ? void 0 : B.call(C);
    }
    function w(C) {
      e("on-search", C);
    }
    function T() {
      var C, B;
      (B = (C = i.value).submit) == null || B.call(C);
    }
    return Ge(() => {
      const C = i.value.$el;
      C != null && C.parentNode && C.parentNode.addEventListener("keyup", (B) => {
        (B == null ? void 0 : B.keyCode) === 13 && T();
      });
    }), r({
      resetForm: c,
      refreshFormDom: o,
      reRenderForm: y,
      setItemToValGroup: f,
      updateValGroup: p,
      updateFormDataT: u,
      validate: v,
      reValidate: k,
      changeLoading: g,
      getValGroup: _,
      submit: T
    }), (C, B) => (S(), te(Tt, ot({
      ref_key: "formRRef",
      ref: i
    }, C.$attrs, {
      "form-data": l.formData,
      "label-width": l.labelWidth,
      "item-width": l.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": l.showInlineOkBt,
      "inline-ok-bt-txt": m(A)("r.check"),
      "show-inline-clear-bt": l.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: w
    }), nt({ _: 2 }, [
      Ce(m(s), (D) => ({
        name: D.slotName,
        fn: le(({ valGroup: I }) => [
          Me(C.$slots, D.slotName, { valGroup: I })
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
  setup(t, { expose: r, emit: n }) {
    const e = n, l = t, i = E(), s = E(!1), c = E(!1), o = G(() => {
      var h, x;
      if (Array.isArray(l.formData[0])) {
        let L = [];
        for (let Z of l.formData)
          Z && (L = L.concat(
            Z.filter((U) => (U == null ? void 0 : U.type) === "custom" || (U == null ? void 0 : U.type) === "input" && U.slotName && U.slotPosition)
          ));
        return L;
      }
      return (x = (h = l.formData) == null ? void 0 : h.filter) == null ? void 0 : x.call(
        h,
        (L) => (L == null ? void 0 : L.type) === "custom" || (L == null ? void 0 : L.type) === "input" && L.slotName && L.slotPosition
      );
    });
    function y() {
      return new Promise((h) => {
        var x, L;
        (L = (x = i.value).resetForm) == null || L.call(x).then(() => {
          h();
        });
      });
    }
    function f() {
      return new Promise((h) => {
        var x, L;
        (L = (x = i.value).refreshFormDom) == null || L.call(x).then(() => {
          h();
        });
      });
    }
    function p() {
      return new Promise((h) => {
        var x, L;
        (L = (x = i.value).reRenderForm) == null || L.call(x).then(() => {
          h();
        });
      });
    }
    function u(h, x) {
      var L, Z;
      (Z = (L = i.value).setItemToValGroup) == null || Z.call(L, h, x);
    }
    function v(h, x) {
      var L, Z;
      (Z = (L = i.value).updateValGroup) == null || Z.call(L, h, x);
    }
    function k(h) {
      var x, L;
      (L = (x = i.value).updateFormDataT) == null || L.call(x, h);
    }
    function g() {
      var h, x;
      (x = (h = i.value).validate) == null || x.call(h);
    }
    function _(h) {
      var x, L;
      (L = (x = i.value).reValidate) == null || L.call(x, h);
    }
    function w(h) {
      var x, L;
      h !== void 0 && (c.value = !!h, (L = (x = i.value).changeLoading) == null || L.call(x, c.value));
    }
    function T() {
      var h, x;
      return (x = (h = i.value).getValGroup) == null ? void 0 : x.call(h);
    }
    function C() {
      c.value = !0;
    }
    function B() {
      var h, x;
      l.hideCancelBt ? I() : (x = (h = i.value).submit) == null || x.call(h);
    }
    function D() {
      s.value = !0;
    }
    function I() {
      s.value = !1, Re(() => {
        var h, x;
        c.value = !1, (x = (h = i.value).changeLoading) == null || x.call(h, !1);
      }, 1e3);
    }
    function $(h) {
      e(h ? "on-open" : "on-close");
    }
    return r({
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
      open: D,
      close: I
    }), (h, x) => {
      const L = Q("Button"), Z = Q("Modal");
      return S(), te(Z, {
        class: we(["formModal", { hideFooter: l.hideFooter }]),
        title: l.title || m(A)("r.title"),
        modelValue: m(s),
        "onUpdate:modelValue": x[0] || (x[0] = (U) => $e(s) ? s.value = U : null),
        "mask-closable": !1,
        "footer-hide": l.hideFooter,
        width: l.width,
        onOnVisibleChange: $
      }, {
        footer: le(() => [
          q(L, {
            onClick: B,
            class: "modal-save-btn",
            loading: l.btnLoading && m(c),
            disabled: l.disabled
          }, {
            default: le(() => [
              ke(H(l.okBtTxt || m(A)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled"]),
          l.hideCancelBt ? ue("", !0) : (S(), te(L, {
            key: 0,
            onClick: I,
            class: "modal-cancel-btn"
          }, {
            default: le(() => [
              ke(H(l.cancelBtTxt || m(A)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: le(() => [
          q(Tt, ot({
            ref_key: "formRRef",
            ref: i
          }, h.$attrs, {
            "form-data": l.formData,
            "label-width": l.labelWidth,
            btnLoading: l.btnLoading,
            disabled: l.disabled,
            onOnSubmit: C
          }), nt({ _: 2 }, [
            Ce(m(o), (U) => ({
              name: U.slotName,
              fn: le(({ valGroup: K }) => [
                Me(h.$slots, U.slotName, { valGroup: K })
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
  setup(t, { emit: r }) {
    const n = r, e = t, l = E(!0), i = E([]), s = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let c = [];
    const o = G(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), y = G(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    _e(
      () => e.data,
      (g) => {
        l.value = !1;
        let _ = [];
        f(g, _), i.value = _, Ae(function() {
          l.value = !0, e.inlineLeaf && Ae(v);
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
          group: i.value,
          condition: (T) => (T == null ? void 0 : T.checked) === !0,
          key: "checked",
          val: !1
        }), lt(w === "a" ? {
          group: i.value,
          condition: (T) => bt(g, [_, T == null ? void 0 : T[_]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: i.value,
          condition: (T) => g.indexOf(T == null ? void 0 : T[_]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), _e(
      () => e.disabled,
      (g) => {
        lt({
          group: i.value,
          condition: (_) => _ && _.disableCheckbox !== g,
          key: "disableCheckbox",
          val: g
        }), e.inlineLeaf && Ae(v);
      },
      { immediate: !0 }
    );
    function f(g, _ = []) {
      for (let w of g) {
        let T = !1;
        o.value.length > 1 ? T = Pt(y.value, (B) => B[o.value[0]] === w[o.value[0]]) !== void 0 : T = o.value[0] ? y.value.indexOf(w[o.value[0]]) !== -1 : !1;
        let C = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let B of o.value)
          C[B] = w[B];
        _.push(C), w != null && w.children && w.children.length > 0 && (C.children = [], p(w.children, C.children));
      }
    }
    function p(g, _ = []) {
      for (let w of g) {
        let T = !1;
        o.value.length > 1 ? T = Pt(y.value, (B) => B[o.value[0]] === w[o.value[0]]) !== void 0 : T = o.value[0] ? y.value.indexOf(w[o.value[0]]) !== -1 : !1;
        let C = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let B of o.value)
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
        g.expand && Ae(v);
        return;
      }
      let _ = document.querySelectorAll("#" + s + " .inlineChildXA");
      if (_.length > 0)
        for (let w of _) {
          let T = w == null ? void 0 : w.parentElement, C = T == null ? void 0 : T.nextElementSibling;
          if (!C)
            return;
          if (C.tagName !== "BR") {
            let B = T == null ? void 0 : T.parentElement, D = document.createElement("br");
            B == null || B.insertBefore(D, C), C = D.nextElementSibling, (C == null ? void 0 : C.className.indexOf("inlineTreeNodeF")) === -1 && C.setAttribute("class", C.className + " inlineTreeNodeF");
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
      const w = Q("Tree");
      return m(l) ? (S(), te(w, {
        key: 0,
        id: s,
        class: "checkboxTreeGA",
        data: m(i),
        render: u,
        onOnCheckChange: k,
        onOnToggleExpand: v,
        "show-checkbox": ""
      }, null, 8, ["data"])) : ue("", !0);
    };
  }
}), So = { class: "transferBoxRL" }, Co = { class: "leftBoxLLL" }, To = { class: "fullHeight flexColumnBox" }, Bo = { class: "notGrow" }, xo = { class: "titleLLL" }, Lo = { class: "growFlexItem" }, Oo = { class: "middleBoxLLL" }, Ao = { class: "rightBoxLLL" }, Io = { class: "fullHeight flexColumnBox" }, Po = { class: "notGrow" }, Ro = { class: "titleLLL" }, $o = { class: "growFlexItem" }, Mo = /* @__PURE__ */ ce({
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
    addParamsHandle: { type: Function, default: (t) => t.map((r) => r == null ? void 0 : r.id) },
    deleteParamsHandle: { type: Function, default: (t) => t.map((r) => r == null ? void 0 : r.id) },
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
  setup(t, { expose: r, emit: n }) {
    const e = n, l = t;
    let i = E({}), s = E({}), c = E([]), o = E([]), y = E(0), f = E(0);
    const p = G(() => ({ ...l.constSearchDataLeft, ...i.value })), u = G(() => ({ ...l.constSearchDataRight, ...s.value })), v = G(() => y.value < 1), k = G(() => c.value.length < 1), g = G(() => o.value.length < 1), _ = G(() => f.value < 1), w = E(), T = E(), C = E(), B = E();
    function D() {
      w.value.resetForm(), T.value.resetForm(), Pe(i.value) || (i.value = {}), Pe(s.value) || (s.value = {}), C.value.clearSelect(), B.value.clearSelect();
    }
    function I() {
      C.value.search(), B.value.search();
    }
    function $(M) {
      c.value = M;
    }
    function h(M) {
      o.value = M;
    }
    function x(M) {
      var ee, J, me, ye, pe;
      y.value = ((J = (ee = M == null ? void 0 : M.data) == null ? void 0 : ee.page) == null ? void 0 : J.total) || ((ye = (me = M == null ? void 0 : M.data) == null ? void 0 : me.data) == null ? void 0 : ye.total) || ((pe = M == null ? void 0 : M.data) == null ? void 0 : pe.total) || (M == null ? void 0 : M.total) || 0, e("on-data-change-l", M);
    }
    function L(M) {
      var ee, J, me, ye, pe;
      f.value = ((J = (ee = M == null ? void 0 : M.data) == null ? void 0 : ee.page) == null ? void 0 : J.total) || ((ye = (me = M == null ? void 0 : M.data) == null ? void 0 : me.data) == null ? void 0 : ye.total) || ((pe = M == null ? void 0 : M.data) == null ? void 0 : pe.total) || (M == null ? void 0 : M.total) || 0, e("on-data-change-r", M);
    }
    function Z(M) {
      typeof l.leftSearchDataFilter == "function" ? i.value = l.leftSearchDataFilter(M) : i.value = M;
    }
    function U(M) {
      typeof l.rightSearchDataFilter == "function" ? s.value = l.rightSearchDataFilter(M) : s.value = M;
    }
    function K() {
      l.addUrl && W("add");
    }
    function Y() {
      l.deleteUrl && W("delete");
    }
    function b() {
      l.addAllUrl && l.addUrl && W("addAll");
    }
    function F() {
      l.deleteAllUrl && W("deleteAll");
    }
    function W(M) {
      let ee, J, me = {}, ye = "";
      switch (M) {
        case "add":
          ee = l.addMethod, J = l.addUrl, me = l.addParamsHandle(o.value), ye = A("r.add");
          break;
        case "delete":
          ee = l.deleteMethod, J = l.deleteUrl, me = l.deleteParamsHandle(c.value), ye = A("r.remove");
          break;
        case "addAll":
          ee = l.addAllMethod, J = l.addAllUrl, me = l.addAllParamsHandle(u.value), ye = A("r.addAll");
          break;
        case "deleteAll":
          ee = l.deleteAllMethod, J = l.deleteAllUrl, me = l.deleteAllParamsHandle(p.value), ye = A("r.removeAll");
          break;
      }
      J && ee && He[ee](J, me, null, [], { spin: !0 }, !1).then((pe) => {
        (pe == null ? void 0 : pe.code) === 0 ? (De(ye + A("r.success"), (pe == null ? void 0 : pe.message) || "", "success"), C.value && C.value.getTableData(), B.value && B.value.getTableData(), e("transferred")) : De(ye + A("r.failed"), (pe == null ? void 0 : pe.message) || "", "error");
      }).catch(() => {
        De(ye + A("r.error"), "", "error");
      });
    }
    return r({
      reset: D,
      search: I
    }), (M, ee) => {
      const J = Q("Icon"), me = Q("Button");
      return S(), z("div", So, [
        R("div", Co, [
          R("div", To, [
            R("div", Bo, [
              R("div", xo, H(l.titleLeft || m(A)("r.added")), 1),
              q(zt, null, {
                default: le(() => [
                  q(Wt, {
                    ref_key: "leftFormRef",
                    ref: w,
                    "form-data": l.formDataLeft,
                    "form-rules": l.formRulesLeft,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: Z
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            R("div", Lo, [
              q(Gt, {
                ref_key: "lTabRef",
                ref: C,
                columns: l.leftTableColumns,
                url: l.leftTableUrl,
                "search-data": m(p),
                onOnSelectionChange: $,
                onOnDataChange: x,
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
          q(me, {
            class: "middleBtLLL",
            type: "default",
            onClick: F,
            disabled: m(v)
          }, {
            default: le(() => [
              ke(H(m(A)("r.removeAll")) + " ", 1),
              q(J, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          q(me, {
            class: "middleBtLLL",
            type: "default",
            onClick: Y,
            disabled: m(k)
          }, {
            default: le(() => [
              ke(H(m(A)("r.remove")) + " ", 1),
              q(J, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          q(me, {
            class: "middleBtLLL",
            type: "primary",
            onClick: K,
            disabled: m(g)
          }, {
            default: le(() => [
              q(J, { type: "ios-arrow-back" }),
              ke(" " + H(m(A)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          q(me, {
            class: "middleBtLLL",
            type: "primary",
            onClick: b,
            disabled: m(_)
          }, {
            default: le(() => [
              q(J, { type: "ios-arrow-back" }),
              ke(" " + H(m(A)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        R("div", Ao, [
          R("div", Io, [
            R("div", Po, [
              R("div", Ro, H(l.titleRight || m(A)("r.notAdded")), 1),
              q(zt, null, {
                default: le(() => [
                  q(Wt, {
                    ref_key: "rightFormRef",
                    ref: T,
                    "form-data": l.formDataRight,
                    "form-rules": l.formRulesRight,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: U
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            R("div", $o, [
              q(Gt, {
                ref_key: "rTabRef",
                ref: B,
                columns: l.rightTableColumns,
                url: l.rightTableUrl,
                "search-data": m(u),
                onOnSelectionChange: h,
                onOnDataChange: L,
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
  setup(t, { emit: r }) {
    const n = t, e = r, l = E([]), i = G(() => {
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
    function s(y, f) {
      if (y.children)
        for (let p of y.children)
          p.checked = f;
      c();
    }
    function c() {
      o(i.value, !0);
    }
    function o(y, f) {
      let p = [];
      for (let u of y) {
        if (!f && !n.leaf && u.checked && u.indeterminate === !1)
          if (Array.isArray(n.collectVal)) {
            let v = {};
            for (let k of n.collectVal)
              v[k] = u[k];
            p.push(v);
          } else X(n.collectVal) === "String" && p.push(u[n.collectVal]);
        if (u.children) {
          for (let v of u.children)
            if (v.checked)
              if (Array.isArray(n.collectVal)) {
                let k = {};
                for (let g of n.collectVal)
                  k[g] = v[g];
                p.push(k);
              } else X(n.collectVal) === "String" && p.push(v[n.collectVal]);
        }
      }
      f ? (l.value = p, n.leaf ? (e("update:modelValue", p), e("on-change", fe(p))) : Ae(function() {
        o(i.value);
      })) : (e("update:modelValue", p), e("on-change", fe(p)));
    }
    return (y, f) => {
      const p = Q("Checkbox");
      return S(), z("div", Fo, [
        R("div", No, [
          R("div", Do, H(y.firstTitle || m(A)("r.level.1")), 1),
          R("div", Ko, H(y.secondTitle || m(A)("r.level.2")), 1)
        ]),
        (S(!0), z(be, null, Ce(m(i), (u, v) => (S(), z("div", {
          class: "bodyJ",
          key: "checkboxJ" + v
        }, [
          R("div", zo, [
            q(p, {
              modelValue: u.checked,
              "onUpdate:modelValue": (k) => u.checked = k,
              indeterminate: u.indeterminate,
              onOnChange: (k) => s(u, k),
              disabled: y.disabled
            }, {
              default: le(() => [
                ke(H(u[y.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          R("div", Uo, [
            (S(!0), z(be, null, Ce(u.children, (k, g) => (S(), z("div", {
              class: "secItem",
              key: "secItem" + g
            }, [
              q(p, {
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
  setup(t, { emit: r }) {
    const n = r, e = t, l = E([]), i = G(() => {
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
                    for (let D of e.collectVal)
                      if (p[T][D] !== w[D]) {
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
    function s(f, p) {
      if (f.children) {
        for (let u of f.children)
          if (u.checked = p, u.children)
            for (let v of u.children)
              v.checked = p;
      }
      o();
    }
    function c(f, p) {
      if (f.children)
        for (let u of f.children)
          u.checked = p;
      o();
    }
    function o() {
      y(i.value, !0);
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
          } else X(e.collectVal) === "String" && u.push(v[e.collectVal]);
        if (v != null && v.children)
          for (let k of v.children) {
            if (!p && !e.leaf && k.checked && k.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let g = {};
                for (let _ of e.collectVal)
                  g[_] = k[_];
                u.push(g);
              } else X(e.collectVal) === "String" && u.push(k[e.collectVal]);
            if (k.children) {
              for (let g of k.children)
                if (g.checked)
                  if (Array.isArray(e.collectVal)) {
                    let _ = {};
                    for (let w of e.collectVal)
                      _[w] = g[w];
                    u.push(_);
                  } else X(e.collectVal) === "String" && u.push(g[e.collectVal]);
            }
          }
      }
      p ? (l.value = u, e.leaf ? (n("update:modelValue", u), n("on-change", fe(u))) : Ae(function() {
        y(i.value);
      })) : (n("update:modelValue", u), n("on-change", fe(u)));
    }
    return (f, p) => {
      const u = Q("Checkbox");
      return S(), z("div", Go, [
        R("div", Ho, [
          R("div", Wo, H(f.firstTitle || m(A)("r.level.1")), 1),
          R("div", jo, H(f.secondTitle || m(A)("r.level.2")), 1),
          R("div", qo, H(f.thirdTitle || m(A)("r.level.3")), 1)
        ]),
        (S(!0), z(be, null, Ce(m(i), (v, k) => (S(), z("div", {
          class: "bodyF",
          key: "checkboxJ" + k
        }, [
          R("div", Xo, [
            q(u, {
              modelValue: v.checked,
              "onUpdate:modelValue": (g) => v.checked = g,
              indeterminate: v.indeterminate,
              onOnChange: (g) => s(v, g),
              disabled: f.disabled
            }, {
              default: le(() => [
                ke(H(v[f.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          R("div", Jo, [
            (S(!0), z(be, null, Ce(v.children, (g, _) => (S(), z("div", {
              class: "rightBoxInner",
              key: "secItem" + _
            }, [
              R("div", Yo, [
                q(u, {
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
                (S(!0), z(be, null, Ce(g.children, (w, T) => (S(), z("div", {
                  class: "thirdItem",
                  key: "thirdItem" + T
                }, [
                  q(u, {
                    modelValue: w.checked,
                    "onUpdate:modelValue": (C) => w.checked = C,
                    onOnChange: o,
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
    const r = t, n = G(() => {
      let e = {
        width: r.fitToContent ? "fit-content" : r.width + "px",
        height: r.fitToContent ? "fit-content" : r.height + "px"
      };
      return r.inline && (e.display = "inline-block"), e;
    });
    return (e, l) => (S(), z("div", {
      style: se(m(n))
    }, [
      R("div", {
        class: we(["wellCardR", { flexColumnBox: !r.fitToContent }])
      }, [
        R("div", {
          class: we(["panelHeader", { notGrow: !r.fitToContent }])
        }, [
          R("div", ei, H(r.title || m(A)("r.title")), 1),
          R("div", ti, [
            Me(e.$slots, "bts")
          ])
        ], 2),
        r.fitToContent ? (S(), z("div", li, [
          Me(e.$slots, "default")
        ])) : (S(), z("div", ai, [
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
  setup(t, { emit: r }) {
    const n = r, e = t;
    let l = E(1), i = 1;
    const s = E(""), c = ct([]);
    let o = {}, y = !0, f = !1;
    const p = "scm" + Math.random(), u = G(() => s.value ? A("r.searchFor") + s.value : e.placeholder || A("r.pInput")), v = G({
      get() {
        return e.modelValue ?? "";
      },
      set(I) {
        if (n("update:modelValue", I ?? ""), e.collectLabel && I !== void 0) {
          let $ = {};
          for (let h of c.value)
            if (h[e.optionsValKey] === I) {
              $ = JSON.parse(JSON.stringify(h));
              break;
            }
          n("on-change", $);
        }
      }
    }), k = G(() => e.searchKey ? {
      ...e.searchData,
      current: l.value,
      [e.searchKey]: s.value
    } : {
      ...e.searchData,
      current: l.value
    });
    _e(
      () => e.getOptions,
      (I) => {
        I ? y && D() : w();
      },
      { immediate: !0 }
    ), _e(
      () => e.url,
      (I) => {
        I && (f = !0);
      }
    );
    const g = E();
    function _() {
      g.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", C);
    }
    function w() {
      y || (v.value = "", y = !0, s.value = "", c.value = [], l.value = 1, i = 1, o = {}, f = !1);
    }
    function T(I) {
      for (let $ of c.value)
        if (($ == null ? void 0 : $.label) === I)
          return !0;
      return !1;
    }
    const C = qt(function(I) {
      var h;
      const $ = (h = I == null ? void 0 : I.target) == null ? void 0 : h.value;
      T($) || (Oe($) ? (f ? w() : (Pe(o) && (o.current = l.value, o.pages = i, o.options = fe(c.value)), Oe(v.value) && (v.value = "")), s.value = String($), c.value = [], l.value = 1, y = !0, D()) : f ? (w(), D()) : (v.value = "", s.value = "", o.current ? (l.value = o.current, i = o.pages, c.value = fe(o.options), o = {}) : D()));
    }, 600);
    function B() {
      f && w(), l.value < i ? (++l.value, Ae(function() {
        D();
      })) : ul.warning({
        background: !0,
        content: A("r.noMore")
      });
    }
    function D() {
      return new Promise((I, $) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Oe(s.value)) {
            I(!1);
            return;
          }
          He.get(e.url, k.value).then((h) => {
            var Z;
            y = !1;
            let x = [];
            (Z = h == null ? void 0 : h.data) != null && Z.records ? (x = h.data.records, i = h.data.pages) : h != null && h.data && X(h.data) === "Array" ? (x = h.data, i = h.pages) : h != null && h.data && X(h.data) === "Object" && (x = [h.data], i = 1), typeof e.optionFilter == "function" && X(e.optionFilter) === "Function" && (x = e.optionFilter(x)), Pe(x) || (x = x.map((U, K) => {
              let Y = A("r.optionLabel") + K;
              if (Array.isArray(e.optionsLabelKey)) {
                let b = [];
                for (let F = 1, W = e.optionsLabelKey.length; F < W; F++)
                  b.push(U[e.optionsLabelKey[F]]);
                Y = `${U[e.optionsLabelKey[0]]}(${String(b)})`;
              } else Ll(e.optionsLabelKey) && (Y = U[e.optionsLabelKey]);
              if (e.collectLabel) {
                let b = fe(U);
                return delete b.value, delete b.label, {
                  value: U[e.optionsValKey],
                  label: Y,
                  ...b
                };
              }
              return {
                value: U[e.optionsValKey],
                label: Y
              };
            })), c.value.push(...x);
            let L = {};
            c.value = c.value.filter((U) => L[U == null ? void 0 : U.value] ? !1 : (L[U == null ? void 0 : U.value] = !0, !0)), Ae(function() {
              n("update-option-finish");
            }), I(!0);
          }).catch(() => {
            ul.error(A("r.getDataError")), $(A("r.getDataError"));
          });
        } else
          I(!1);
      });
    }
    return Ge(_), (I, $) => {
      const h = Q("Option"), x = Q("Select"), L = jt("loadmore");
      return he((S(), te(x, ot({
        modelValue: m(v),
        "onUpdate:modelValue": $[0] || ($[0] = (Z) => $e(v) ? v.value = Z : null),
        ref_key: "selectScrollSourceRef",
        ref: g,
        "transfer-class-name": p
      }, I.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: m(u),
        disabled: I.disabled
      }), {
        default: le(() => [
          (S(!0), z(be, null, Ce(m(c), (Z, U) => (S(), te(h, {
            key: "op" + U,
            value: Z == null ? void 0 : Z.value,
            label: Z == null ? void 0 : Z.label,
            disabled: Z == null ? void 0 : Z.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [L, B, p]
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
  HeaderBt: Al,
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
    const r = Xt(), n = E(), e = E(!1), l = E(!1), i = E(!1), s = E(100), c = E(), o = E(715), y = E(!1), f = E(), p = "tablePrint_" + Date.now().toString(), u = E(""), v = E([]), k = E([]), g = E(!1), _ = G(() => ({
      width: o.value + "px"
    })), w = () => {
      f.value && window.sessionStorage.removeItem("print_" + f.value), window.sessionStorage.removeItem(p), window.close();
    }, T = () => {
      y.value && (y.value = !1);
    }, C = () => {
      g.value = !0;
    }, B = (x) => {
      g.value && (o.value = (x == null ? void 0 : x.layerX) - 20);
    }, D = () => {
      g.value && (g.value = !1);
    }, I = () => {
      y.value = !1;
      let x = window.setTimeout(() => {
        window.clearTimeout(x), window.print();
      }, 100);
    }, $ = (x) => {
      if (typeof c.value == "function")
        return c.value(x);
    }, h = () => {
      var x, L, Z, U, K, Y, b;
      if (f.value = (x = r == null ? void 0 : r.params) == null ? void 0 : x.isFrom, f.value) {
        let F = window.sessionStorage.getItem("print_" + f.value);
        if (F) {
          const W = JSON.parse(F);
          if (!W) {
            e.value = !0;
            return;
          }
          if (v.value = W.columns, k.value = W.data, n.value = W.title, u.value = ((L = W.config) == null ? void 0 : L.customClass) || "", l.value = ((Z = W.config) == null ? void 0 : Z.domPrint) || !1, i.value = ((U = W.config) == null ? void 0 : U.autoPrint) || !1, s.value = ((K = W.config) == null ? void 0 : K.autoPrintTimeout) || 100, o.value = ((Y = W.config) == null ? void 0 : Y.width) || 715, document.title = (n.value || A("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString(), (b = W.funcArr) != null && b.length) {
            for (let M of W.funcArr)
              if (M.name === "spanMethod") {
                c.value = new Function("return " + M.func)();
                break;
              }
          }
        } else
          e.value = !0;
      }
    };
    return Ge(() => {
      if (i.value) {
        let x = window.setTimeout(() => {
          window.clearTimeout(x), I();
        }, s.value);
      }
      document.addEventListener("click", T), document.addEventListener("mousemove", B), document.addEventListener("mouseup", D);
    }), h(), (x, L) => {
      const Z = Q("Table");
      return S(), z("div", {
        class: we(["tablePrintModal", [m(u)]])
      }, [
        he(R("div", { class: "msgL notPrint" }, H(m(A)("r.printGuide.9")), 513), [
          [ge, m(e)]
        ]),
        he(R("div", si, [
          R("p", null, H(m(A)("r.printGuide.7")), 1),
          L[2] || (L[2] = ke()),
          R("p", null, H(m(A)("r.printGuide.5")), 1)
        ], 512), [
          [ge, !m(e)]
        ]),
        he(R("div", ri, [
          R("p", null, H(m(A)("r.printGuide.7")), 1),
          L[3] || (L[3] = ke()),
          R("p", null, H(m(A)("r.printGuide.6")), 1)
        ], 512), [
          [ge, !m(e)]
        ]),
        he(R("div", ui, [
          R("p", null, H(m(A)("r.printGuide.8")), 1),
          L[4] || (L[4] = ke()),
          R("p", null, H(m(A)("r.printGuide.5")), 1)
        ], 512), [
          [ge, !m(e)]
        ]),
        he(R("div", di, [
          R("p", null, H(m(A)("r.printGuide.8")), 1),
          L[5] || (L[5] = ke()),
          R("p", null, H(m(A)("r.printGuide.6")), 1)
        ], 512), [
          [ge, !m(e)]
        ]),
        he(R("div", ci, [
          R("div", fi, H(m(n) || m(A)("r.print")), 1),
          R("div", pi, [
            q($t, {
              icon: "md-help-circle",
              name: m(A)("r.help"),
              onClick: L[0] || (L[0] = At((U) => y.value = !m(y), ["stop"]))
            }, null, 8, ["name"]),
            q($t, {
              icon: "md-print",
              name: m(A)("r.preview"),
              onClick: I
            }, null, 8, ["name"]),
            m(l) ? ue("", !0) : (S(), te(Kl, {
              key: 0,
              modelValue: m(v),
              "onUpdate:modelValue": L[1] || (L[1] = (U) => $e(v) ? v.value = U : null),
              "s-key": p,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            q(Fl, {
              icon: "md-close",
              onClick: w,
              title: m(A)("r.close")
            }, null, 8, ["title"])
          ]),
          he(R("div", mi, [
            m(l) ? ue("", !0) : (S(), z("p", hi, [
              L[6] || (L[6] = R("span", null, "1. ", -1)),
              R("span", null, H(m(A)("r.printGuide.1")), 1)
            ])),
            m(l) ? ue("", !0) : (S(), z("p", yi, [
              L[7] || (L[7] = R("span", null, "2. ", -1)),
              R("span", null, H(m(A)("r.printGuide.2")), 1)
            ])),
            m(l) ? (S(), z("p", vi, [
              L[8] || (L[8] = R("span", null, "1. ", -1)),
              R("span", null, H(m(A)("r.printGuide.10")), 1)
            ])) : ue("", !0),
            R("p", null, [
              R("span", null, H(m(l) ? "2. " : "3. "), 1),
              R("span", null, H(m(A)("r.printGuide.3")), 1)
            ]),
            R("p", null, [
              R("span", null, H(m(l) ? "3. " : "4. "), 1),
              R("span", null, H(m(A)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ge, m(y)]
          ])
        ], 512), [
          [ge, !m(e)]
        ]),
        m(l) ? (S(), z("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: se(m(_))
        }, [
          R("div", {
            class: "settingLine",
            onMousedown: At(C, ["stop"])
          }, null, 32)
        ], 4)) : ue("", !0),
        m(l) ? (S(), z("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: m(k),
          style: se(m(_))
        }, null, 12, gi)) : ue("", !0),
        m(l) ? ue("", !0) : he((S(), te(Z, {
          key: 2,
          class: "tablePW",
          columns: m(v),
          data: m(k),
          "span-method": $,
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
  const r = document.createElement("style");
  r.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(r);
}
function ki(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: bi
  })), Ze = t, location.pathname.indexOf("tablePrint") > -1 ? (Ze.push(location.pathname), _l()) : location.hash.indexOf("tablePrint") > -1 && (Ze.push(location.hash.replace(/^#/, "")), _l());
}
function Zl(t) {
  return X(t) === "Object" && (t.width = t.minWidth || 100, t.sortable = !1, delete t.minWidth, delete t.__id, t.resizable = !0, t.children && X(t.children) === "Array" && (t.children = t.children.map(Zl))), t;
}
function wi(t, r, n, e) {
  var f, p, u;
  if (!Ze)
    return;
  let l;
  if (!(e != null && e.domPrint)) {
    let v = fe(
      t.filter((k) => (k == null ? void 0 : k.key) || (k == null ? void 0 : k.children))
    );
    v[0].type === "selection" && v.shift(), v.length ? l = v.map(Zl) : l = [];
  }
  const i = [];
  e && Object.entries(e).forEach(([v, k]) => {
    typeof k == "function" && (i.push({
      name: v,
      func: k.toString().replaceAll(/[\r\n\t]/g, "").replaceAll(/\s{2,}/g, " ")
    }), delete e[v]);
  });
  let s = (p = (f = Ze == null ? void 0 : Ze.currentRoute) == null ? void 0 : f.value) == null ? void 0 : p.fullPath;
  s && (s = (u = s.replace) == null ? void 0 : u.call(s, /\//g, "_"));
  let c = {
    data: r,
    title: n,
    config: e,
    funcArr: i
  };
  e != null && e.domPrint || (c.columns = l), window.sessionStorage.setItem("print_" + s, JSON.stringify(c));
  const o = Ze.resolve({
    name: "tablePrint",
    params: { isFrom: s }
  });
  window.open(o == null ? void 0 : o.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const Qt = {
  print: wi,
  init: ki
};
function _i(t = "", r = "", n = {}) {
  n.domPrint = !0, n.width || (n.width = 715), Qt.print([], t, r, n);
}
function Vi(t) {
  var i, s;
  const r = (...c) => Xe.apply(this, c), n = r("r.closePreview"), e = r("r.fullImg");
  let l = "previewImg" + Math.floor(Math.random() * 1e7);
  (s = (i = Qe) == null ? void 0 : i.info) == null || s.call(i, {
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
                var o, y;
                (y = (o = Qe) == null ? void 0 : o.remove) == null || y.call(o);
              }
            })
          ]
        )
      ]
    )
  }), Re(() => {
    var y, f, p, u, v, k;
    const c = (u = (p = (f = (y = document.getElementById(l)) == null ? void 0 : y.parentElement) == null ? void 0 : f.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : u.parentElement, o = (k = (v = document.getElementById(l)) == null ? void 0 : v.parentElement) == null ? void 0 : k.nextSibling;
    c && (c.style.height = "0"), c && (c.style.padding = "0"), o && (o.style.display = "none");
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
      var o, y, f, p, u, v, k, g, _;
      const l = document.getElementById("editor-preview");
      let i = localStorage.getItem("editorPreviewW") || 300, s = localStorage.getItem("editorPreviewH") || 500;
      const c = (o = e == null ? void 0 : e.getHtml) == null ? void 0 : o.call(e);
      if (l) {
        let w = (v = (u = (p = (f = (y = l.children) == null ? void 0 : y[0]) == null ? void 0 : f.children) == null ? void 0 : p[1]) == null ? void 0 : u.children) == null ? void 0 : v[0], T = (_ = (g = (k = l.children) == null ? void 0 : k[0]) == null ? void 0 : g.children) == null ? void 0 : _[1];
        w && (w.innerHTML = c, w.style.width = i + "px"), T && (T.style.height = s + "px"), l.style.display = "block";
      } else {
        const w = document.body, T = document.createElement("div");
        T.setAttribute("id", "editor-preview"), T.setAttribute("class", "editor-preview-mask"), T.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${i}' min='200'><span>高</span><input type='number' value='${s}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let C = T.children[0].children[1], B = T.children[0].children[1].children[0], D = T.children[0].children[0].children[0].children[1];
        const I = 40, $ = 70, h = (U) => {
          var b;
          if ((U == null ? void 0 : U.type) === "keyup") {
            let F = !1;
            if (U.key && (F = U.key !== "Enter"), F)
              return;
          }
          let K = (b = U == null ? void 0 : U.target) == null ? void 0 : b.value;
          if (K = Number(K), B.style && B.style.width === K + "px")
            return;
          const Y = w.clientWidth;
          K < 250 ? (K = 250, U.target.value = 250) : K > Y - I && (K = Y - I, U.target.value = Y - I), B.style.width = K + "px", localStorage.setItem("editorPreviewW", K);
        };
        D.addEventListener("blur", h), D.addEventListener("keyup", h);
        let x = T.children[0].children[0].children[0].children[3];
        const L = (U) => {
          var b;
          if ((U == null ? void 0 : U.type) === "keyup") {
            let F = !1;
            if (U.key && (F = U.key !== "Enter"), F)
              return;
          }
          let K = (b = U == null ? void 0 : U.target) == null ? void 0 : b.value;
          if (K = Number(K), C.style && C.style.height === K + "px")
            return;
          const Y = w.clientHeight;
          K < 300 ? (K = 300, U.target.value = 300) : K > Y - $ && (K = Y - $, U.target.value = Y - $), C.style.height = K + "px", localStorage.setItem("editorPreviewH", K);
        };
        x.addEventListener("blur", L), x.addEventListener("keyup", L), T.children[0].children[0].children[1].addEventListener("click", () => {
          T.style.display = "none";
        }), B.innerHTML = c, B.style.width = i + "px", C.style.height = s + "px", w.append(T);
      }
    }
  }
  const r = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  Ta.registerMenu(r), window.wangeditorMenuInit = !0;
})();
const Hi = wt.use, Wi = wt.i18n, Vl = {
  ...Si,
  ...nn
}, Ci = function(t, r = {}) {
  He.init(r.useStore || r.store, t), t.use(Ba), r.locale && wt.use(r.locale), r.i18n && wt.i18n(r.i18n), r.router && (un(r.router), Qt.init(r.router)), r.amap && Jn(r.amap), r.notRegistryGlobal || (Object.keys(wl).forEach((n) => {
    t.component(n) || t.component(n, wl[n]);
  }), Object.keys(Vl).forEach((n) => {
    t.config.globalProperties[n] = Vl[n];
  })), t.directive("has") || t.directive("has", (n, e) => {
    e.value && !Jt(e.value) && (n.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", {
    mounted(n, e) {
      var i;
      let l = n;
      e.arg && (l = (i = document.getElementsByClassName(e.arg)) == null ? void 0 : i[0]), l && l.addEventListener("scroll", function() {
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
  Al as HeaderBt,
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
  X as myTypeof,
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
  Il as toLine,
  Rl as tooltipManual,
  _t as trimObj
};
//# sourceMappingURL=plugRQw.js.map
