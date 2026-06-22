var ia = Object.defineProperty;
var sa = (t, s, n) => s in t ? ia(t, s, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[s] = n;
var dt = (t, s, n) => sa(t, typeof s != "symbol" ? s + "" : s, n);
import { getCurrentInstance as Lt, defineComponent as ce, resolveComponent as Z, createElementBlock as N, openBlock as S, normalizeStyle as re, normalizeClass as Se, createBlock as le, createCommentVNode as de, renderSlot as Ne, ref as U, computed as H, withDirectives as pe, unref as m, createElementVNode as R, createVNode as J, toDisplayString as j, withCtx as ne, createTextVNode as ke, vShow as ve, resolveDirective as Ot, onMounted as Ge, nextTick as Me, onUpdated as ra, onUnmounted as Ll, h as Ie, isRef as De, Fragment as be, renderList as Te, onBeforeMount as Ol, watch as Ve, mergeModels as ua, useModel as da, onBeforeUnmount as el, Teleport as ca, withModifiers as Dt, mergeProps as rt, shallowRef as ht, triggerRef as fa, createSlots as st, toRef as pa, toValue as Mt } from "vue";
import ma from "deepmerge";
import { debounce as At, isPlainObject as it, cloneDeep as fe, isObject as ha, isFunction as ya, isEmpty as Fe, isNumber as wt, last as Vt, isEqual as yt, isString as Al, first as Nt, find as Kt, indexOf as dl, findIndex as St, remove as va } from "lodash-es";
import bt from "sweetalert";
import { Tooltip as ga, Modal as Qe, Button as Ft, TableColumnConfig as ba, Radio as ka, Input as wa, Message as cl, Icon as _a } from "view-ui-plus";
import { useRouter as It, useRoute as tl } from "vue-router";
import Va from "popper.js";
import zt from "axios";
import fl from "@amap/amap-jsapi-loader";
import Sa from "ar-cascader";
import { Toolbar as Ca, Editor as Ta } from "@wangeditor/editor-for-vue";
import ct from "moment";
import { Boot as Ba } from "@wangeditor/editor";
import xa from "vue-json-viewer";
const Il = {
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
}, La = /(%|){([0-9a-zA-Z_]+)}/g;
function Oa() {
  function t(n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }
  function s(n, ...e) {
    let l;
    return e.length === 1 && typeof e[0] == "object" && (l = e[0]), (!l || !l.hasOwnProperty) && (l = {}), n === void 0 ? "" : n.replace(La, (i, r, c, o) => {
      let y;
      return n[o - 1] === "{" && n[o + i.length] === "}" ? c : (y = t(l, c) ? l[c] : null, y ?? "");
    });
  }
  return s;
}
const Aa = Oa();
let Ct = Il;
const Ia = {
  zh: Il
};
let pl, ml = {}, Ke, Pa = function(t, s) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, s);
  if (Ke && Ke.global)
    return Ke.global.t(t, s);
  if (Ke && Ke.locale) {
    if (!ml[Ke.locale] || pl != Ke.locale) {
      ml[Ke.locale] = !0;
      let n = Ke.getLocaleMessage(Ke.locale) || {}, e = ma(Ia[Ke.locale], n, { clone: !0 });
      Ct = e, Ke.setLocaleMessage(Ke.locale, e), pl = Ke.locale;
    }
    return Ke.hlang(t, s);
  }
};
const Je = function(t, s) {
  let n = Pa.apply(this, [t, s]);
  if (n != null)
    return n;
  const e = t.split(".");
  let l = Ct;
  for (let i = 0, r = e.length; i < r; i++) {
    const c = e[i];
    if (n = l[c], i === r - 1)
      return Aa(n, s);
    if (!n)
      return "";
    l = n;
  }
  return "";
}, Ra = function(t) {
  Ct = t || Ct;
}, $a = function(t) {
  Ke = t;
}, Tt = {
  use: Ra,
  t: Je,
  i18n: $a
};
function O(t, s) {
  var e, l, i;
  const n = (i = (l = (e = Lt()) == null ? void 0 : e.appContext) == null ? void 0 : l.config) == null ? void 0 : i.globalProperties;
  return Je.apply(n, [t, s]);
}
const Pl = /* @__PURE__ */ ce({
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
    return (i, r) => {
      const c = Z("Icon");
      return S(), N("div", {
        class: Se({ headerBtCTM: !0, withIconCTM: n.icon || n.withIcon, disabled: n.disabled }),
        style: re({ color: n.color, borderLeftColor: n.borderColor }),
        onClick: l
      }, [
        n.icon ? (S(), le(c, {
          key: 0,
          size: n.iconSize,
          type: n.icon
        }, null, 8, ["size", "type"])) : de("", !0),
        Ne(i.$slots, "default")
      ], 6);
    };
  }
});
function xe() {
  var n, e;
  const t = (n = Lt()) == null ? void 0 : n.appContext;
  return ((e = t == null ? void 0 : t.config) == null ? void 0 : e.globalProperties) || {};
}
const Ma = { class: "headerTxtAM" }, Fa = { class: "contentAM" }, Da = /* @__PURE__ */ ce({
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
  setup(t, { expose: s, emit: n }) {
    const e = t, l = n;
    let i = U(!1);
    const r = H(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), c = H(() => ({ zIndex: e.zIndex }));
    function o() {
      i.value = !0, l("on-open");
    }
    function y(p) {
      i.value = !1, l("on-close", p === !0);
    }
    return s({
      open: o,
      close: y
    }), (p, f) => pe((S(), N("div", {
      class: "fullScreenPopBoxAM",
      style: re(m(c))
    }, [
      R("div", {
        class: "headerAM",
        style: re({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: m(r) })
      }, [
        R("span", Ma, j(p.title || m(O)("r.title")), 1),
        J(Pl, {
          icon: "md-return-left",
          onClick: y
        }, {
          default: ne(() => [
            ke(j(m(O)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      R("div", Fa, [
        Ne(p.$slots, "default")
      ])
    ], 4)), [
      [ve, m(i)]
    ]);
  }
}), Na = { class: "msg" }, Ka = /* @__PURE__ */ ce({
  __name: "Hello",
  setup(t) {
    let s = U("Greetings from Ricky.");
    return (n, e) => (S(), N("span", Na, j(m(s)), 1));
  }
}), Ut = /* @__PURE__ */ ce({
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
    const n = t, e = s, l = H(() => {
      var r;
      return Math.floor(n.size / 17 * ((r = xe()) == null ? void 0 : r.fontSizeBase)) + "px";
    });
    function i(r) {
      n.disabled || e("click", r);
    }
    return (r, c) => {
      const o = Z("Icon"), y = Ot("has");
      return pe((S(), N("div", {
        class: Se(["tabTopBtnsT", { disabled: n.disabled }]),
        onClick: i,
        style: re({ "font-size": m(l) })
      }, [
        J(o, {
          type: n.icon,
          size: n.size
        }, null, 8, ["type", "size"]),
        ke(" " + j(n.name || m(O)("r.button")), 1)
      ], 6)), [
        [y, r.has]
      ]);
    };
  }
}), za = { class: "c404K" }, Ua = { class: "ct404" }, Ea = { class: "p404" }, Ga = /* @__PURE__ */ ce({
  __name: "Page404",
  setup(t) {
    const n = Lt().appContext.config.globalProperties.$router;
    function e() {
      n.go(-1);
    }
    return (l, i) => {
      const r = Z("Button");
      return S(), N("div", za, [
        i[0] || (i[0] = R("div", { class: "t404" }, "404", -1)),
        R("div", Ua, "UH OH! " + j(m(O)("r.pageNotFound")), 1),
        R("div", Ea, j(m(O)("r.notFoundMsg")), 1),
        J(r, {
          class: "bt404",
          onClick: e
        }, {
          default: ne(() => [
            ke(j(m(O)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function ze(t, s, n, e = !0) {
  const l = (...i) => Je.apply(this, i);
  return new Promise((i, r) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let c = l("r.confirm"), o = l("r.cancel"), y = !1, p = "swalConfirmBt", f = "swalCancelBt";
      const u = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let v = "";
      t.text && u.test(Y(t.text)) ? v = "content" : t.text && Y(t.text) === "String" && (v = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (o = t.buttons.cancel.text) && (y = !0), t.buttons.cancel.className && (f = t.buttons.cancel.className), t.buttons.confirm.text && (c = t.buttons.confirm.text), t.buttons.confirm.className && (p = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (o = t.buttons[0], y = !0), t.buttons[1] && (c = t.buttons[1]))), bt({
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
            text: o,
            value: null,
            visible: y,
            className: f
          }
        },
        closeOnClickOutside: t.closeOnClickOutside ?? !0
      }).then((b) => {
        b && typeof t.onOk == "function" && t.onOk(), i(b);
      }).catch((b) => {
        r(b);
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
      bt({
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
      }).then((o) => {
        i(o);
      }).catch((o) => {
        r(o);
      });
    } else if (typeof t == "boolean")
      !t && bt.close && bt.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
const Ha = { class: "tableTooltip" }, Wa = /* @__PURE__ */ ce({
  __name: "TableTooltip",
  props: {
    content: { type: [String, Number, Boolean, null] }
  },
  setup(t) {
    const s = t, n = U(), e = U(), l = U(!0);
    let i = null;
    const r = U(200);
    function c() {
      const o = l.value ? n.value : e.value;
      if (!o)
        return;
      let y = document.createRange();
      y.setStart(o, 0), y.setEnd(o, o.childNodes.length);
      const p = y.getBoundingClientRect().width;
      r.value = o.offsetWidth * 2, l.value = p < o.offsetWidth, y = null;
    }
    return Ge(() => {
      c(), i = At(() => {
        Me(function() {
          c();
        });
      }, 200), window.addEventListener("resize", i);
    }), ra(c), Ll(() => {
      window.removeEventListener("resize", i);
    }), (o, y) => (S(), N("div", Ha, [
      m(l) ? (S(), N("span", {
        key: 0,
        ref_key: "spanRef",
        ref: n,
        class: "contentText"
      }, j(s.content), 513)) : (S(), le(m(ga), {
        key: 1,
        content: typeof s.content == "boolean" ? String(s.content) : s.content ?? "",
        "max-width": m(r),
        transfer: ""
      }, {
        default: ne(() => [
          R("span", {
            ref_key: "contentRef",
            ref: e,
            class: "contentText"
          }, j(s.content), 513)
        ]),
        _: 1
      }, 8, ["content", "max-width"]))
    ]));
  }
}), Et = typeof window < "u";
function qe(t, s, n) {
  De(t[s]) ? t[s].value = n : t[s] = n;
}
function Y(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function ja(t) {
  return { style: { display: ll(t) ? "unset" : "none" } };
}
function Rl(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function Bt(t) {
  let s = Y(t);
  if (s === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = Y(t[n]);
        e === "String" ? t[n] = t[n].trim() : (e === "Object" || e === "Array") && Bt(t[n]);
      }
  } else if (s === "Array")
    for (let n = 0, e = t.length; n < e; n++) {
      let l = Y(t[n]);
      l === "String" ? t[n] = t[n].trim() : (l === "Array" || l === "Object") && Bt(t[n]);
    }
  return t;
}
function Gt(t, s = []) {
  if (Y(t) === "Array")
    return t.forEach((n, e) => {
      switch (Y(n)) {
        case "Array":
        case "Object":
          Gt(n);
          break;
        default:
          t[e] = null;
      }
    }), t;
  if (Y(t) === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = !0;
        for (let l of s)
          if (l === n) {
            e = !1;
            break;
          }
        if (e)
          switch (Y(t[n])) {
            case "Array":
            case "Object":
              Gt(t[n]);
              break;
            default:
              t[n] = null;
          }
      }
    return t;
  } else
    return t;
}
const qa = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Xa(t) {
  let s = new FormData();
  for (let n in t)
    t.hasOwnProperty(n) && t[n] !== null && s.append(n, t[n]);
  return s;
}
function _t(t, s, n = !1) {
  if (!t || !s)
    return !1;
  let e, l = "notFoundC", i = function(r, c) {
    if (Array.isArray(r)) {
      if (Y(c) === "Function" && c(r))
        return l = r, [];
      for (let o of r) {
        if (l !== "notFoundC")
          break;
        if (Y(c) === "Function" && c(o) || o === c)
          return l = o, [r.indexOf(o)];
        if (Y(o) === "Array" || Y(o) === "Object") {
          let y = i(o, c);
          if (y !== void 0)
            return [r.indexOf(o), ...y];
        }
      }
    } else if (Y(r) === "Object") {
      if (Y(c) === "Function" && c(r))
        return l = r, [];
      for (let o in r) {
        if (l !== "notFoundC")
          break;
        if (r.hasOwnProperty(o)) {
          if (Y(c) === "Function" && c(o) || r[o] === c)
            return l = r[o], [o];
          if (Y(r[o]) === "Object" || Y(r[o]) === "Array") {
            let y = i(r[o], c);
            if (y !== void 0)
              return [o, ...y];
          }
        }
      }
    }
  };
  return e = i(t, s), n ? e || !1 : l === "notFoundC" ? !1 : l;
}
function Ja(t, s) {
  for (let n = 0, e = s.length; n < e; n++)
    if (t === s[n])
      return !0;
  return !1;
}
function Ya(t, s = 2) {
  let n = new RegExp(`(^-?\\d+\\.\\d{${s}})(\\d+$)`), e = t && String(t) || "";
  return n.test(e) ? Number(e.replace(n, "$1")) : t;
}
function $l(t, s = {}, n = "get") {
  let e = document.createElement("form"), l = document.getElementsByTagName("body")[0];
  l.appendChild(e), e.setAttribute("style", "display:none"), e.setAttribute("target", ""), e.setAttribute("method", n);
  let i = t;
  if (window && window.hasOwnProperty("g")) {
    let r = Object.keys(window.g).filter((c) => {
      var o;
      return ((o = c == null ? void 0 : c.indexOf) == null ? void 0 : o.call(c, "URL")) > -1;
    }).map((c) => {
      var o;
      return (o = c.replace) == null ? void 0 : o.call(c, "URL", "");
    });
    for (let c of r) {
      let o = new RegExp("^/" + c + "(?=/.*$)", "i");
      if (o.test(t) && window.g[c + "URL"]) {
        i = window.g[c + "URL"] + t.replace(o, "");
        break;
      }
    }
  }
  if (e.setAttribute("action", i), it(s)) {
    for (let c in s)
      if (s.hasOwnProperty(c) && (s[c] || s[c] === 0 || s[c] === !1 || s[c] === "")) {
        let o = document.createElement("input");
        o.setAttribute("type", "hidden"), o.setAttribute("name", c), o.setAttribute("value", s[c]), e.appendChild(o);
      }
    e.submit();
    let r = setTimeout(() => {
      l.removeChild(e), clearTimeout(r), r = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function Qa(t, s = {}, n = "get") {
  if (s.hasOwnProperty("columns") && (s.columns === "" || s.columns === null || s.columns === void 0)) {
    ze.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  $l(t, s, n);
}
function Za(t, s, n = !1) {
  let e;
  if (t && Y(s) === "Array") {
    let l = localStorage.getItem(t);
    if (l) {
      let i = JSON.parse(decodeURI(l));
      e = s.filter((r) => {
        var c;
        return (r == null ? void 0 : r.key) && ((c = i == null ? void 0 : i.indexOf) == null ? void 0 : c.call(i, r.title)) !== -1;
      }).map((r) => r.key);
    } else
      e = s.map((i) => i == null ? void 0 : i.key);
  } else
    e = [];
  return n || (e = String(e)), e;
}
function Re(t) {
  return t != null && t !== "";
}
function en(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function Ml(t, s = !1, n = "") {
  return function(e, l) {
    var r, c;
    let i;
    if (Array.isArray(t)) {
      let o = [];
      for (let y of t)
        Re((r = l.row) == null ? void 0 : r[y]) && o.push(l.row[y]);
      i = o.join(n);
    } else typeof t == "function" ? i = t(l) : i = (c = l.row) == null ? void 0 : c[t];
    return Ie(Wa, { content: s ? i === "" ? "--" : i ?? "--" : i });
  };
}
function tn(t) {
  if (it(t)) {
    for (let s in t)
      if (t.hasOwnProperty(s) && Re(t[s]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let s of t)
      if (Re(s))
        return !1;
    return !0;
  }
  return !Re(t);
}
function ln(t) {
  return Y(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : Y(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function ot({
  group: t,
  condition: s,
  key: n,
  val: e,
  childKey: l = "children"
}) {
  if (Y(t) !== "Array" || Y(s) !== "Function" || Y(n) !== "String" || Y(l) !== "String")
    return !1;
  t.forEach((i) => {
    s(i) && (Y(e) === "Function" ? i[n] = e(i[n]) : i[n] = e), Y(i[l]) === "Array" && i[l].length > 0 && ot({
      group: i[l],
      condition: s,
      key: n,
      val: e,
      childKey: l
    });
  });
}
function ll(t) {
  let s = sessionStorage.getItem("btnPermissions");
  return s ? s.split(",").indexOf(t) > -1 : !1;
}
function Fl(t) {
  return Y(t) === "Number" && String(t) === "NaN";
}
function an(t, s = !1, n = !1) {
  if (Y(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), l = "";
  for (let i in e)
    if (e.hasOwnProperty(i)) {
      let r = e[i];
      r === void 0 || r === "" || Y(r) === "String" && r.trim() === "" || r === null || Fl(r) ? n ? s ? l += i + "=&" : e[i] = "" : delete e[i] : s && (l += i + "=" + r + "&");
    }
  return s ? l.length > 0 ? l.substring(0, l.length - 1) : "" : e;
}
function Ht(t) {
  let s = {};
  if (Array.isArray(t)) {
    s = [];
    for (let n of t)
      Array.isArray(n) || it(n) ? s.push(Ht(n)) : Re(n) && s.push(n);
  } else if (it(t))
    for (let n in t)
      t.hasOwnProperty(n) && (Array.isArray(t[n]) || it(t[n]) ? s[n] = Ht(t[n]) : Re(t[n]) && (s[n] = t[n]));
  return s;
}
function nn(t) {
  const s = window.open();
  if (s) {
    s.document.write(t);
    let n = setTimeout(() => {
      s.print(), window.clearTimeout(n), n = null;
    }, 10);
  }
}
function al(t) {
  let s = [], n = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && s.push(t);
  for (; n.nextSibling && (n = n.nextSibling); )
    n.nodeType === 1 && s.push(n);
  return s;
}
function on(t, s) {
  if (!t)
    return "";
  const n = [];
  if (Array.isArray(s) && typeof s[0] == "string")
    n.push(hl(s));
  else
    for (let e of s)
      n.push(hl(e));
  return pe(t, n);
}
function hl(t) {
  const [s, ...n] = t;
  return [Ot(s), ...n];
}
const sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Gt,
  dataFilterOrToUrl: an,
  decimalDigitsLimit: Ya,
  directivesComponent: on,
  downloadFileByFormSubmit: $l,
  fileExport: Qa,
  findCollection: _t,
  formDataHeadConfig: qa,
  getColumnsKeys: Za,
  has: ja,
  hasPermission: ll,
  htmlPrint: nn,
  isClient: Et,
  isEmptyValue: tn,
  isNaN: Fl,
  isNumberValue: en,
  isValidValue: Re,
  myTypeof: Y,
  oneOf: Ja,
  removeEmptyValue: Ht,
  setValByOption: ot,
  setValue: qe,
  siblingElems: al,
  stringLength: ln,
  toFormData: Xa,
  toLine: Rl,
  tooltipManual: Ml,
  trimObj: Bt
}, Symbol.toStringTag, { value: "Module" })), rn = { class: "groupBoxRP" }, un = ["onClick"], dn = /* @__PURE__ */ ce({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const s = It(), n = t;
    function e(i) {
      return (i == null ? void 0 : i.path) === n.pathName ? "active" : "";
    }
    function l(i, r) {
      var p, f, u, v, b, g, _, w;
      (p = i == null ? void 0 : i.preventDefault) == null || p.call(i);
      let c = i == null ? void 0 : i.target;
      if (r && !r.children && !c.classList.contains("active")) {
        s.push(r.path);
        return;
      }
      let o = c.parentNode, y = al(o);
      for (let T of y) {
        (u = (f = T == null ? void 0 : T.classList) == null ? void 0 : f.remove) == null || u.call(f, "open");
        const x = (v = T == null ? void 0 : T.querySelectorAll) == null ? void 0 : v.call(T, ".open");
        if (x && Array.isArray(x))
          for (let C of x)
            (g = (b = C == null ? void 0 : C.classList) == null ? void 0 : b.remove) == null || g.call(b, "open");
      }
      (w = (_ = o == null ? void 0 : o.classList) == null ? void 0 : _.toggle) == null || w.call(_, "open");
    }
    return (i, r) => {
      const c = Z("Icon"), o = Z("sideMenuGroup", !0);
      return S(), N("ul", rn, [
        (S(!0), N(be, null, Te(n.data, (y, p) => (S(), N(be, {
          key: (y == null ? void 0 : y.path) + p
        }, [
          y ? (S(), N("li", {
            key: 0,
            class: Se({ dropItemRP: y.children })
          }, [
            R("div", {
              class: Se(["menuTxtR", e(y)]),
              onClick: (f) => l(f, y),
              style: re({ paddingLeft: y.level * 20 + "px" })
            }, [
              y != null && y.icon ? (S(), le(c, {
                key: 0,
                class: "menuIcoL",
                custom: "iconfont " + y.icon
              }, null, 8, ["custom"])) : de("", !0),
              R("span", null, j((y == null ? void 0 : y.name) || "-- no name --"), 1)
            ], 14, un),
            y.children ? (S(), le(o, {
              key: 0,
              data: y.children,
              "path-name": n.pathName
            }, null, 8, ["data", "path-name"])) : de("", !0)
          ], 2)) : de("", !0)
        ], 64))), 128))
      ]);
    };
  }
});
let Wt = [], jt = [];
const cn = function(t) {
  t && t.beforeEach ? t.beforeEach(() => {
    Wt.map((s) => {
      window.clearTimeout(s);
    }), jt.map((s) => {
      window.clearInterval(s);
    }), Wt.length = 0, jt.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, $e = function(t, s) {
  let n = window.setTimeout(t, s);
  return Wt.push(n), n;
}, fn = function(t, s) {
  let n = window.setInterval(t, s);
  return jt.push(n), n;
}, pn = { class: "menuListR" }, mn = /* @__PURE__ */ ce({
  __name: "SideMenu",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: s }) {
    const n = t, e = s, l = tl(), i = U(!0), r = U(), c = U(), o = H(() => i.value ? O("r.hideMenu") : O("r.showMenu")), y = H(() => i.value ? "ios-arrow-back" : "ios-arrow-forward");
    Ol(() => {
      let u = localStorage.getItem("menuDisplayR") || "";
      u !== "" ? i.value = JSON.parse(u) : (i.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), Ve(
      () => l.path,
      (u) => {
        r.value = u, Me(() => {
          $e(f, 10);
        });
      },
      { immediate: !0 }
    );
    function p() {
      i.value = !i.value, localStorage.setItem("menuDisplayR", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function f() {
      var v, b, g, _, w;
      let u = c.value.querySelectorAll(".dropItemRP");
      for (let T of u)
        (v = T == null ? void 0 : T.querySelector) != null && v.call(T, ".active") && !((g = (b = T.classList) == null ? void 0 : b.contains) != null && g.call(b, "open")) && ((w = (_ = T.classList) == null ? void 0 : _.add) == null || w.call(_, "open"));
    }
    return (u, v) => {
      const b = Z("Icon");
      return S(), N("div", {
        ref_key: "menuRef",
        ref: c,
        class: Se(["menuBoxRP", "cannotSelect", { light: u.light }])
      }, [
        pe(R("div", pn, [
          J(dn, {
            data: n.data,
            pathName: m(r)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, m(i)]
        ]),
        J(b, {
          type: m(y),
          size: 25,
          class: Se([{ showIco: !m(i) }, "menuShowHideIco"]),
          title: m(o),
          onClick: p,
          color: m(i) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 2);
    };
  }
}), hn = { class: "groupBoxRX" }, yn = ["onMouseenter"], vn = ["onClick"], gn = /* @__PURE__ */ ce({
  __name: "SideMenuProGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const s = It(), n = t, e = U("");
    function l(o) {
      let y = "menuTxtR ";
      return (o == null ? void 0 : o.path) === n.pathName && (y += "active "), y;
    }
    function i(o, y) {
      var f;
      (f = o == null ? void 0 : o.preventDefault) == null || f.call(o);
      let p = o == null ? void 0 : o.target;
      y && !y.children && !p.classList.contains("active") && s.push(y.path);
    }
    function r(o, y) {
      var p;
      (p = o == null ? void 0 : o.preventDefault) == null || p.call(o), e.value = y == null ? void 0 : y.path;
    }
    function c(o) {
      var y;
      (y = o == null ? void 0 : o.preventDefault) == null || y.call(o), e.value = "";
    }
    return (o, y) => {
      const p = Z("Icon"), f = Z("SideMenuProGroup", !0);
      return S(), N("ul", hn, [
        (S(!0), N(be, null, Te(n.data, (u, v) => {
          var b;
          return S(), N("li", {
            key: (u == null ? void 0 : u.path) + v,
            class: Se({ dropItemRX: u == null ? void 0 : u.children }),
            onMouseenter: (g) => r(g, u),
            onMouseleave: y[0] || (y[0] = (g) => c(g))
          }, [
            R("div", {
              class: Se(l(u)),
              onClick: (g) => i(g, u),
              style: re({ paddingLeft: u.level * 20 + "px" })
            }, [
              ke(j((u == null ? void 0 : u.name) || "-- no name --") + " ", 1),
              pe(J(p, {
                class: "dropIcoRX",
                type: "ios-arrow-forward",
                size: 16
              }, null, 512), [
                [ve, u.children && u.children.length > 0]
              ])
            ], 14, vn),
            ((b = u == null ? void 0 : u.children) == null ? void 0 : b.length) > 0 ? pe((S(), le(f, {
              key: 0,
              class: "rightChildRX",
              data: u == null ? void 0 : u.children,
              "path-name": o.pathName
            }, null, 8, ["data", "path-name"])), [
              [ve, m(e) === (u == null ? void 0 : u.path)]
            ]) : de("", !0)
          ], 42, yn);
        }), 128))
      ]);
    };
  }
}), bn = { class: "groupBoxRX" }, kn = ["onClick"], Dl = /* @__PURE__ */ ce({
  __name: "SideMenuTwoLevel",
  props: {
    data: { default: () => [] },
    pathName: { default: "" },
    fromIcoMenu: { type: Boolean }
  },
  setup(t) {
    const s = It(), n = t;
    function e(i) {
      let r = "menuTxtR ";
      return (i == null ? void 0 : i.path) === n.pathName && (r += "active "), r;
    }
    function l(i, r) {
      var f, u, v, b, g, _, w, T, x, C, $, P, I, h;
      (f = i == null ? void 0 : i.preventDefault) == null || f.call(i);
      let c = i == null ? void 0 : i.target;
      if (r && !r.children && !c.classList.contains("active")) {
        s.push(r.path);
        return;
      }
      const o = (u = c == null ? void 0 : c.querySelector) == null ? void 0 : u.call(c, ".dropIcoRX"), y = c.parentNode, p = al(y);
      for (let B of p) {
        (b = (v = B == null ? void 0 : B.classList) == null ? void 0 : v.remove) == null || b.call(v, "open");
        const L = (g = B == null ? void 0 : B.querySelector) == null ? void 0 : g.call(B, ".dropIcoRX");
        (w = (_ = L == null ? void 0 : L.classList) == null ? void 0 : _.remove) == null || w.call(_, "open");
        const te = (T = B == null ? void 0 : B.querySelectorAll) == null ? void 0 : T.call(B, ".open");
        for (let z of te)
          (C = (x = z == null ? void 0 : z.classList) == null ? void 0 : x.remove) == null || C.call(x, "open");
      }
      (P = ($ = y == null ? void 0 : y.classList) == null ? void 0 : $.toggle) == null || P.call($, "open"), (h = (I = o == null ? void 0 : o.classList) == null ? void 0 : I.toggle) == null || h.call(I, "open");
    }
    return (i, r) => {
      const c = Z("Icon");
      return S(), N("ul", bn, [
        (S(!0), N(be, null, Te(n.data, (o, y) => (S(), N("li", {
          key: (o == null ? void 0 : o.path) + y,
          class: Se({ dropItemRX: o == null ? void 0 : o.children, open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu })
        }, [
          R("div", {
            class: Se(e(o)),
            onClick: (p) => l(p, o),
            style: re({ paddingLeft: o.level * 20 + "px" })
          }, [
            J(c, {
              class: "menuIcoL",
              custom: "iconfont " + (o.icon || "icon-r-menu-default")
            }, null, 8, ["custom"]),
            R("span", null, j((o == null ? void 0 : o.name) || "-- no name --"), 1),
            pe(J(c, {
              class: Se(["dropIcoRX", { open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu }]),
              type: "ios-arrow-forward"
            }, null, 8, ["class"]), [
              [ve, o.children && o.children.length > 0]
            ])
          ], 14, kn),
          o.children ? (S(), le(gn, {
            key: 0,
            data: o.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : de("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), wn = { class: "groupBoxRX" }, _n = ["onMouseenter"], Vn = ["onClick"], Sn = /* @__PURE__ */ ce({
  __name: "SideIcoMenu",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const s = It(), n = t, e = U("");
    function l(o) {
      let y = "menuTxtR ";
      return (o == null ? void 0 : o.path) === n.pathName && (y += "active "), y;
    }
    function i(o, y) {
      var f;
      (f = o == null ? void 0 : o.preventDefault) == null || f.call(o);
      let p = o == null ? void 0 : o.target;
      y && !y.children && !p.classList.contains("active") && s.push(y.path);
    }
    function r(o, y) {
      var p;
      (p = o == null ? void 0 : o.preventDefault) == null || p.call(o), e.value = y == null ? void 0 : y.path;
    }
    function c(o) {
      var y;
      (y = o == null ? void 0 : o.preventDefault) == null || y.call(o), e.value = "";
    }
    return (o, y) => {
      const p = Z("Icon");
      return S(), N("ul", wn, [
        (S(!0), N(be, null, Te(n.data, (f, u) => (S(), N("li", {
          key: (f == null ? void 0 : f.path) + u,
          class: Se({ dropItemRX: f.children }),
          onMouseenter: (v) => r(v, f),
          onMouseleave: y[0] || (y[0] = (v) => c(v))
        }, [
          R("div", {
            class: Se(l(f)),
            onClick: (v) => i(v, f)
          }, [
            J(p, {
              class: "menuIcoM",
              custom: "iconfont " + (f.icon || "icon-r-menu-default"),
              size: "20"
            }, null, 8, ["custom"])
          ], 10, Vn),
          pe(J(Dl, {
            class: "rightTwoMenu",
            data: [f],
            pathName: n.pathName,
            fromIcoMenu: ""
          }, null, 8, ["data", "pathName"]), [
            [ve, m(e) === (f == null ? void 0 : f.path)]
          ])
        ], 42, _n))), 128))
      ]);
    };
  }
}), Cn = { class: "menuListR" }, Tn = /* @__PURE__ */ ce({
  __name: "SideMenuPro",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: s }) {
    const n = t, e = s, l = tl(), i = U(!0), r = U(), c = U(), o = H(() => i.value ? O("r.hideMenu") : O("r.showMenu")), y = H(() => i.value ? "iconfont icon-r-menu-hide" : "iconfont icon-r-menu-open");
    Ol(() => {
      let u = localStorage.getItem("menuDisplayRPro") || "";
      u !== "" ? i.value = JSON.parse(u) : (i.value = !0, localStorage.setItem("menuDisplayRPro", JSON.stringify(!0)));
    }), Ve(
      () => l.path,
      (u) => {
        r.value = u, Me(() => {
          $e(f, 10);
        });
      },
      { immediate: !0 }
    );
    function p() {
      i.value = !i.value, localStorage.setItem("menuDisplayRPro", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function f() {
      var v, b, g, _, w, T, x, C, $, P, I, h, B, L, te, z, M, ee, W, k, F, D, q, Q, se, me, he, Oe, Ae, ae, Le, Pe, et, He, E, K, ye, ge, we;
      let u = c.value.querySelectorAll(".dropItemRX");
      for (let G of u) {
        const _e = (b = (v = G == null ? void 0 : G.childNodes[0]) == null ? void 0 : v.querySelector) == null ? void 0 : b.call(v, ".dropIcoRX");
        (g = G == null ? void 0 : G.querySelector) != null && g.call(G, ".active") ? (T = (w = (_ = G == null ? void 0 : G.childNodes[1]) == null ? void 0 : _.classList) == null ? void 0 : w.contains) != null && T.call(w, "rightChildRX") ? ($ = (C = (x = G == null ? void 0 : G.childNodes[0]) == null ? void 0 : x.classList) == null ? void 0 : C.contains) != null && $.call(C, "activeR") || (I = G == null ? void 0 : (P = G.childNodes[0].classList).add) == null || I.call(P, "activeR") : ((B = (h = G == null ? void 0 : G.classList) == null ? void 0 : h.contains) != null && B.call(h, "open") || (te = (L = G.classList).add) == null || te.call(L, "open"), _e && !((M = (z = _e == null ? void 0 : _e.classList) == null ? void 0 : z.contains) != null && M.call(z, "open")) && ((W = (ee = _e.classList).add) == null || W.call(ee, "open"))) : (D = (F = (k = G == null ? void 0 : G.childNodes[1]) == null ? void 0 : k.classList) == null ? void 0 : F.contains) != null && D.call(F, "rightChildRX") ? (se = (Q = (q = G == null ? void 0 : G.childNodes[0]) == null ? void 0 : q.classList) == null ? void 0 : Q.contains) != null && se.call(Q, "activeR") && ((he = G == null ? void 0 : (me = G.childNodes[0].classList).remove) == null || he.call(me, "activeR")) : ((Ae = (Oe = G == null ? void 0 : G.classList) == null ? void 0 : Oe.contains) != null && Ae.call(Oe, "open") && !((Le = (ae = G == null ? void 0 : G.classList) == null ? void 0 : ae.contains) != null && Le.call(ae, "fromIcoMenu")) && ((et = (Pe = G.classList).remove) == null || et.call(Pe, "open")), (E = (He = _e == null ? void 0 : _e.classList) == null ? void 0 : He.contains) != null && E.call(He, "open") && !((ye = (K = _e == null ? void 0 : _e.classList) == null ? void 0 : K.contains) != null && ye.call(K, "fromIcoMenu")) && ((we = (ge = _e.classList).remove) == null || we.call(ge, "open")));
      }
    }
    return (u, v) => {
      const b = Z("Icon");
      return S(), N("div", {
        ref_key: "menuProRef",
        ref: c,
        class: Se(["menuBoxRPro", "cannotSelect", { light: u.light }])
      }, [
        pe(R("div", Cn, [
          J(Dl, {
            data: n.data,
            pathName: m(r)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, m(i)]
        ]),
        pe(J(Sn, {
          class: "icoMenuR",
          data: u.data,
          pathName: m(r)
        }, null, 8, ["data", "pathName"]), [
          [ve, !m(i)]
        ]),
        J(b, {
          custom: m(y),
          size: 14,
          class: Se([{ showIco: !m(i) }, "menuShowHideIco"]),
          title: m(o),
          onClick: p
        }, null, 8, ["custom", "class", "title"])
      ], 2);
    };
  }
}), Bn = ["title"], Nl = /* @__PURE__ */ ce({
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
    function l(i) {
      e.disabled || n("click", i);
    }
    return (i, r) => {
      const c = Z("Icon"), o = Ot("has");
      return pe((S(), N("div", {
        class: Se(["tableBtnsG", { disabled: e.disabled }]),
        onClick: l,
        title: e.title || m(O)("r.button")
      }, [
        J(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Bn)), [
        [o, e.has]
      ]);
    };
  }
}), xn = { class: "contentX" }, Ln = { class: "arrowA" }, qt = /* @__PURE__ */ ce({
  __name: "ShowHidePanel",
  props: /* @__PURE__ */ ua({
    bg: {}
  }, {
    modelValue: { type: Boolean, default: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const s = da(t, "modelValue"), n = t, e = H(() => s ? "background:" + n.bg || "transparent" : "");
    return (l, i) => {
      const r = Z("Icon");
      return S(), N("div", {
        style: re(m(e))
      }, [
        pe(R("div", xn, [
          Ne(l.$slots, "default")
        ], 512), [
          [ve, s.value]
        ]),
        R("div", Ln, [
          R("div", {
            class: "btA",
            onClick: i[0] || (i[0] = (c) => s.value = !s.value)
          }, [
            J(r, {
              type: s.value ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), On = { class: "contentZ" }, An = /* @__PURE__ */ ce({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: s }) {
    const n = t, e = s, l = H({
      get() {
        return n.modelValue;
      },
      set(r) {
        e("update:modelValue", r);
      }
    }), i = H(() => l.value ? "background:" + n.bg : "");
    return (r, c) => (S(), N("div", {
      style: re(m(i))
    }, [
      pe(R("div", On, [
        Ne(r.$slots, "default")
      ], 512), [
        [ve, m(l)]
      ])
    ], 4));
  }
}), In = /* @__PURE__ */ ce({
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
    const i = H({
      get() {
        return e.modelValue;
      },
      set(y) {
        n("update:modelValue", y);
      }
    }), r = H({
      get() {
        return e.open;
      },
      set(y) {
        n("on-toggle", y);
      }
    }), c = H(() => r.value ? "ios-arrow-up" : "ios-arrow-down");
    function o() {
      l || (l = !0, n("on-search", i.value), $e(() => {
        l = !1;
      }, 2e3));
    }
    return (y, p) => {
      const f = Z("Input"), u = Z("icon");
      return S(), N("div", {
        class: "tableSearchV",
        style: re({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Ne(y.$slots, "default", {}, () => [
          J(f, {
            modelValue: m(i),
            "onUpdate:modelValue": p[0] || (p[0] = (v) => De(i) ? i.value = v : null),
            style: re({ width: e.width }),
            search: "",
            onOnSearch: o,
            class: "searchInputC",
            placeholder: e.placeholder || m(O)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        pe(R("span", {
          class: "sbt",
          onClick: p[1] || (p[1] = (v) => r.value = !m(r)),
          style: re({ color: e.btnColor })
        }, [
          J(u, {
            type: m(c),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ke(j(m(O)("r.adSearch")), 1)
        ], 4), [
          [ve, e.showBtn]
        ])
      ], 4);
    };
  }
}), Kl = {
  beforeMount(t, s) {
    function n(e) {
      var l;
      if (t.contains(e.target))
        return !1;
      (l = s == null ? void 0 : s.value) == null || l.call(s, e);
    }
    t.__vueClickOutside__ = n, Et && document.addEventListener("click", n);
  },
  unmounted(t) {
    Et && document.removeEventListener("click", t.__vueClickOutside__), delete t.__vueClickOutside__;
  }
};
function zl(t, s, n, e, l = !1) {
  const i = (...r) => Je.apply(this, r);
  ze.call(this, {
    title: t || i("r.info.title"),
    text: s || i("r.info.text"),
    icon: n || "warning",
    onOk: e,
    buttons: [i("r.cancel")],
    closeOnClickOutside: l
  });
}
const Pn = { class: "tabSetF" }, Rn = { class: "cannotSelect" }, $n = { class: "topCheck" }, Ul = /* @__PURE__ */ ce({
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
    var h, B, L, te, z;
    const n = s, e = t, l = U(), i = U(), r = U(!0), c = U(!1), o = U(!1), y = U([]), p = H(() => {
      var ee;
      let M = O("r.unknown");
      return ((ee = e.modelValue) == null ? void 0 : ee.length) > y.value.length && (y.value = fe(e.modelValue)), y.value.map((W) => {
        let k = { label: (W == null ? void 0 : W.title) || M };
        return W != null && W.disableShowSetting && (k.disabled = !0), k;
      });
    }), f = H(() => p.value.filter((M) => M == null ? void 0 : M.disabled)), u = H({
      get() {
        var M, ee;
        return (ee = (M = e.modelValue) == null ? void 0 : M.map) == null ? void 0 : ee.call(M, (W) => (W == null ? void 0 : W.title) || O("r.unknown"));
      },
      set(M) {
        let ee = y.value.filter((W) => {
          for (let k of M)
            if (k === (W == null ? void 0 : W.title))
              return !0;
          return !1;
        });
        n("update:modelValue", ee);
      }
    }), v = (z = (te = (L = (B = (h = Lt()) == null ? void 0 : h.appContext) == null ? void 0 : B.config) == null ? void 0 : L.globalProperties) == null ? void 0 : te.$i18n) == null ? void 0 : z.locale;
    let b = null;
    Ge(() => {
      let M = O("r.unknown"), ee = P();
      ee ? u.value = JSON.parse(decodeURI(ee)) : e.defaultCheck && (u.value = e.modelValue.filter((W) => W == null ? void 0 : W.showSettingCheck).map((W) => (W == null ? void 0 : W.title) || M)), Me(function() {
        !l.value || !i.value || (b = new Va(l.value, i.value, {
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
          onUpdate: (W) => {
            var k;
            if (W != null && W.popper && ((k = W.instance) != null && k.popper)) {
              const F = g(W), { needChange: D } = F;
              if (D) {
                const { height: q } = F, Q = W.instance.popper;
                Q.style && (Q.style.height = `${q}px`);
              }
            }
          }
        }));
      }), $e(() => {
        var W;
        o.value = !0, (W = b == null ? void 0 : b.update) == null || W.call(b), Me(function() {
          o.value = !1;
        });
      }, 0);
    }), el(function() {
      var M;
      (M = b == null ? void 0 : b.destroy) == null || M.call(b);
    });
    function g(M) {
      var D, q;
      const { height: ee } = M.popper, W = M.instance.popper, k = window.innerHeight;
      let F = 0;
      if ((D = W.childNodes) != null && D.length)
        for (let Q = 0; Q < W.childNodes.length; Q++)
          F += (q = W.childNodes[Q]) == null ? void 0 : q.offsetHeight;
      return k < ee - 10 || ee < F ? {
        needChange: !0,
        height: k - 10 < F ? k - 10 : F
      } : { needChange: !1 };
    }
    function _(M) {
      M.length === p.value.length ? (r.value = !1, c.value = !0) : M.length > f.value.length ? (r.value = !0, c.value = !1) : (r.value = !1, c.value = !1);
    }
    Ve(() => u.value, _, {
      immediate: !0,
      deep: !0
    });
    function w() {
      o.value && (I() && zl(O("r.notSave"), "", "warning", x), o.value = !1);
    }
    function T() {
      o.value ? w() : (o.value = !0, Me(function() {
        var M;
        (M = b == null ? void 0 : b.update) == null || M.call(b);
      }));
    }
    function x() {
      v ? window[e.storage].setItem(e.sKey + "_" + v, encodeURI(JSON.stringify(u.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(u.value))), w();
    }
    function C(M) {
      var ee, W;
      if (o.value) {
        if (e.transfer) {
          const k = i.value;
          if (k === (M == null ? void 0 : M.target) || (ee = k == null ? void 0 : k.contains) != null && ee.call(k, M == null ? void 0 : M.target))
            return;
        }
        (W = M == null ? void 0 : M.preventDefault) == null || W.call(M), w();
      }
    }
    function $() {
      r.value ? c.value = !1 : c.value = !c.value, r.value = !1, c.value ? u.value = p.value.map((M) => M == null ? void 0 : M.label) : u.value = f.value.map((M) => M == null ? void 0 : M.label);
    }
    function P() {
      let M;
      return v ? M = window[e.storage].getItem(e.sKey + "_" + v) : M = window[e.storage].getItem(e.sKey), M;
    }
    function I() {
      var ee;
      let M = P();
      if (M) {
        if (M = JSON.parse(decodeURI(M)), (M == null ? void 0 : M.length) !== ((ee = u.value) == null ? void 0 : ee.length))
          return !0;
        for (let W of M)
          if (u.value.indexOf(W) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (M, ee) => {
      const W = Z("Icon"), k = Z("Checkbox"), F = Z("CheckboxGroup");
      return pe((S(), N("div", Pn, [
        R("div", {
          ref_key: "buttonRef",
          ref: l,
          class: "tabSetBt",
          onClick: T
        }, [
          J(W, {
            type: "md-settings",
            size: "17"
          }),
          R("span", Rn, j(m(O)("r.tabSetting")), 1)
        ], 512),
        (S(), le(ca, {
          to: "body",
          disabled: !e.transfer
        }, [
          pe(R("div", {
            ref_key: "popperRef",
            ref: i,
            class: "tabSetCard",
            style: re({ width: e.width, backgroundColor: e.bg })
          }, [
            R("div", $n, [
              J(k, {
                indeterminate: m(r),
                modelValue: m(c),
                "onUpdate:modelValue": ee[0] || (ee[0] = (D) => De(c) ? c.value = D : null),
                onClick: Dt($, ["prevent"])
              }, {
                default: ne(() => [
                  ke(j(m(O)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              R("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: x
              }, [
                ee[2] || (ee[2] = R("span", { class: "iconfont icon-r-save" }, null, -1)),
                R("span", null, j(m(O)("r.save")), 1)
              ])
            ]),
            J(F, {
              modelValue: m(u),
              "onUpdate:modelValue": ee[1] || (ee[1] = (D) => De(u) ? u.value = D : null)
            }, {
              default: ne(() => [
                (S(!0), N(be, null, Te(m(p), (D, q) => (S(), le(k, {
                  class: "setItem",
                  label: D && D.label,
                  key: "tabSet_" + e.sKey + q,
                  disabled: D && D.disabled
                }, null, 8, ["label", "disabled"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ], 4), [
            [ve, m(o)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [m(Kl), C]
      ]);
    };
  }
});
function Mn(t) {
  return t.replace(/_(\w)/g, function(s, n) {
    return n.toUpperCase();
  });
}
function Ui(t) {
  let s = document.createElement("div");
  return s.textContent !== void 0 ? s.textContent = t : s.innerText = t, s.innerHTML;
}
function Ei(t) {
  let s = document.createElement("div");
  return s.innerHTML = t, s.innerText || s.textContent;
}
function yl(t) {
  return new Promise((s) => {
    let n = new FileReader();
    n.readAsDataURL(t), n.onloadend = () => {
      s(n.result);
    };
  });
}
function El(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function ft(t) {
  return Y(t) === "String" && t.indexOf("image") > -1;
}
function vl(t) {
  const s = El(t);
  let n = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(s) > -1 ? n = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(s) > -1 ? n = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(s) > -1 ? n = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(s) > -1 ? n = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(s) > -1 ? n = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(s) > -1 && (n = "ios-videocam"), n;
}
function Fn(t, s) {
  let n = document.createElement("a");
  n.href = s, n.download = t, Dn(n);
}
function Dn(t) {
  let s = document.createEvent("MouseEvents");
  s.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(s);
}
function Xt({
  group: t,
  condition: s,
  pathKey: n,
  childKey: e = "children",
  path: l = []
}) {
  if (t && ha(t)) {
    if (ya(s)) {
      if (it(t)) {
        let i = t, r = fe(l);
        if (s(i))
          return n && i[n] && r.push(i[n]), r;
        if (i[e] && !Fe(i[e])) {
          n && i[n] && r.push(i[n]);
          let c = Xt({
            group: i[e],
            condition: s,
            pathKey: n,
            childKey: e,
            path: r
          });
          if (!Fe(c))
            return c;
        }
      } else if (Array.isArray(t))
        for (let i of t) {
          let r = fe(l);
          if (s(i))
            return n && i[n] ? r.push(i[n]) : r.push(String(t.indexOf(i))), r;
          if (i[e] && i[e].length > 0) {
            n && i[n] ? r.push(i[n]) : r.push(String(t.indexOf(i)));
            let c = Xt({
              group: i[e],
              condition: s,
              pathKey: n,
              childKey: e,
              path: r
            });
            if (!Fe(c))
              return c;
          }
        }
    } else if (Array.isArray(t))
      for (let i of t) {
        let r = fe(l);
        if (i === s)
          return r.push(String(t.indexOf(i))), r;
      }
  }
  return [];
}
function Nn(t, s = 12) {
  if (Y(t) === "String" && t.length > 0) {
    let n = document.createElement("span");
    n.style.fontSize = s + "px", n.style.fontFamily = "inherit", n.innerHTML = t, n.style.opacity = "0", n.style.position = "fixed", n.style.top = "3000px", document.body.append(n);
    const e = n.clientWidth;
    return document.body.removeChild(n), e;
  }
  return 0;
}
function Gi(t) {
  return t === "" ? null : t;
}
function Hi(t) {
  var s;
  t = t || window.Event, t != null && t.stopPropagation ? (s = t.stopPropagation) == null || s.call(t) : t && (t.cancelBubble = !0);
}
let pt = !1;
function Jt({
  height: t,
  width: s = 416,
  title: n,
  content: e,
  onOk: l,
  onCancel: i,
  onClose: r,
  okText: c,
  cancelText: o,
  noWarnIcon: y,
  footerAlign: p,
  cancelBt: f = !0
}) {
  const u = (...w) => Je.apply(this, w);
  let b = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", g = Y(e) === "String";
  const _ = typeof e == "function";
  Qe.warning({
    width: s,
    footerHide: !0,
    render: () => Ie(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: b
        }
      },
      [
        Ie(
          "div",
          {
            class: "containerN"
          },
          [
            Ie(
              "div",
              {
                class: "titleN"
              },
              [
                Ie("span", n || u("r.info.title")),
                Ie(
                  Ft,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      pt || (Qe.remove(), r && Y(r) === "Function" && r());
                    }
                  },
                  () => Ie("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            Ie(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: g ? "center" : "left"
                }
              },
              [
                Ie("i", {
                  class: g && !y ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Ie("div", { class: "msgBoxConO" }, _ ? [e(Ie)] : e || u("r.info.text"))
              ]
            ),
            Ie(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: p || "center"
                }
              },
              [
                Ie(
                  Ft,
                  {
                    class: "okBtN",
                    onClick(w) {
                      var T, x, C, $, P, I, h, B, L;
                      if (l && typeof l == "function") {
                        const te = l();
                        if (te && Y(te) === "Promise") {
                          pt = !0;
                          const z = (w == null ? void 0 : w.currentTarget) || (w == null ? void 0 : w.target);
                          z && ((x = (T = z.classList) == null ? void 0 : T.add) == null || x.call(T, "ivu-btn-loading"), ($ = (C = z.nextSibling) == null ? void 0 : C.setAttribute) == null || $.call(C, "disabled", "disabled"), (L = (B = ((h = (I = (P = z.parentElement) == null ? void 0 : P.parentElement) == null ? void 0 : I.querySelector) == null ? void 0 : h.call(I, ".titleN .closeN")).classList) == null ? void 0 : B.add) == null || L.call(B, "disabled")), Promise.resolve(te).then(() => {
                            pt = !1, Qe.remove();
                          }).catch(() => {
                            pt = !1, Qe.remove();
                          });
                        } else
                          Qe.remove();
                      }
                    }
                  },
                  () => [
                    Ie("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Ie("span", c || u("r.confirm"))
                  ]
                ),
                Ie(
                  Ft,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onClick() {
                      pt || (Qe.remove(), Y(i) === "Function" && i && i());
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
let nt = 0, vt = document.createElement("div");
vt.setAttribute("class", "spinModal");
vt.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(vt);
};
function gl(t) {
  t ? vt.classList.add("show") : vt.classList.remove("show");
}
function Gl(t) {
  let s = nt;
  t ? nt++ : nt > 0 && nt--, s !== nt && (nt === 0 ? gl(!1) : s === 0 && gl(!0));
}
const Kn = window.location.origin;
let xt = null;
const bl = (...t) => Je.apply(xt, t);
let Ee = zt.create({
  baseURL: Kn,
  withCredentials: !0
  // 允许携带cookie
});
function zn() {
  console.info(
    "store为空，请在安装插件时传入store实例，vuex：app.use(plugRQw,{store})，Pinia：app.use(plugRQw,{useStore})"
  );
}
Ee.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function kl() {
  var t, s;
  if (Ee.store)
    if (typeof Ee.store == "function") {
      const n = Ee.store();
      n.logout && n.logout();
    } else
      (s = (t = Ee.store) == null ? void 0 : t.dispatch) == null || s.call(t, "logout");
  else
    zn();
}
Ee.interceptors.response.use(
  (t) => {
    var s, n;
    return xt && (((s = t == null ? void 0 : t.data) == null ? void 0 : s.code) === 403 || ((n = t == null ? void 0 : t.data) == null ? void 0 : n.code) === 409) && Jt({
      content: bl("r.http." + t.data.code),
      onOk: kl
    }), t;
  },
  (t) => {
    var s, n;
    return xt && (((s = t == null ? void 0 : t.response) == null ? void 0 : s.status) === 403 || ((n = t == null ? void 0 : t.response) == null ? void 0 : n.status) === 409) && Jt({
      content: bl("r.http." + t.response.status),
      onOk: kl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function Ye(t, s, n, e) {
  e && e.spin && Gl(!1);
  let l = !0, i = t && t.data;
  if (i) {
    n = n || [];
    for (let r of n)
      i = i[r], l = l && i;
    return l ? i : (s && console.warn(s), !1);
  }
  return s && console.warn(s), !1;
}
function Un(t, s, n, e, l, i, r) {
  return new Promise((c, o) => {
    switch (t) {
      case "get":
        Ee.get(s, { params: n }).then((p) => {
          let f = Ye(p, e, l, i);
          f ? c(f) : o(p);
        }).catch((p) => {
          Ye({}, e, l, i), o(p);
        });
        break;
      case "delete":
        let y = r ? "params" : "data";
        Ee.delete(s, { [y]: n }).then((p) => {
          let f = Ye(p, e, l, i);
          f ? c(f) : o(p);
        }).catch((p) => {
          Ye({}, e, l, i), o(p);
        });
        break;
      case "post":
        Ee.post(s, n, i).then((p) => {
          let f = Ye(p, e, l, i);
          f ? c(f) : o(p);
        }).catch((p) => {
          Ye({}, e, l, i), o(p);
        });
        break;
      case "put":
        Ee.put(s, n, i).then((p) => {
          let f = Ye(p, e, l, i);
          f ? c(f) : o(p);
        }).catch((p) => {
          Ye({}, e, l, i), o(p);
        });
        break;
    }
  });
}
function kt(t, s, n = {}, e, l, i, r) {
  return new Promise((c, o) => {
    var y;
    if (s) {
      i && i.spin && Gl(!0);
      let p = s;
      if (window && window.hasOwnProperty("g")) {
        const v = window.g;
        let b = Object.keys(v).filter((g) => {
          var _;
          return ((_ = g == null ? void 0 : g.indexOf) == null ? void 0 : _.call(g, "URL")) > -1;
        }).map((g) => {
          var _;
          return (_ = g.replace) == null ? void 0 : _.call(g, "URL", "");
        });
        for (let g of b) {
          let _ = new RegExp("^/" + g + "(?=/.*$)", "i");
          if (_.test(s) && v[g + "URL"]) {
            p = v[g + "URL"] + s.replace(_, "");
            break;
          }
        }
      }
      let f;
      if (((y = i == null ? void 0 : i.headers) == null ? void 0 : y["Content-Type"]) === "multipart/form-data")
        f = n;
      else if (Array.isArray(n) ? f = [] : f = {}, n && !Fe(n))
        if (Array.isArray(n)) {
          f = [];
          for (let v of n)
            (v || v === 0 || v === !1 || v === "" && i && !i.noEmptyStr) && f.push(v);
        } else {
          f = {};
          for (let v in n)
            n.hasOwnProperty(v) && (n[v] || n[v] === 0 || n[v] === !1 || n[v] === "" && i && !i.noEmptyStr) && (f[v] = n[v]);
        }
      let u = t.toLowerCase();
      Un(u, p, f, e, l, i, r).then((v) => {
        c(v);
      }).catch((v) => {
        o(v);
      });
    } else
      console.error("没有请求地址:url"), o("没有请求地址:url");
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
    Ee.store = t, xt = s.config.globalProperties;
  },
  post(t, s, n, e, l) {
    return new Promise((i, r) => {
      kt("post", t, s, n, e, l).then((c) => {
        i(c);
      }).catch((c) => {
        r(c);
      });
    });
  },
  put(t, s, n, e, l) {
    return new Promise((i, r) => {
      kt("put", t, s, n, e, l).then((c) => {
        i(c);
      }).catch((c) => {
        r(c);
      });
    });
  },
  get(t, s, n, e, l) {
    return new Promise((i, r) => {
      kt("get", t, s, n, e, l).then((c) => {
        i(c);
      }).catch((c) => {
        r(c);
      });
    });
  },
  delete(t, s, n, e, l, i = !0) {
    return new Promise((r, c) => {
      kt("delete", t, s, n, e, l, i).then((o) => {
        r(o);
      }).catch((o) => {
        c(o);
      });
    });
  },
  all: zt.all,
  spread: zt.spread,
  config: Ee
}, En = {
  key: 0,
  class: "pageTotal"
}, Gn = {
  key: 1,
  class: "pageProSize"
}, Hl = /* @__PURE__ */ ce({
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
    const n = s, e = U(), l = t, i = ((u = xe == null ? void 0 : xe()) == null ? void 0 : u.fontSizeBase) || 14, r = U(16), c = H({
      get() {
        return l.modelValue;
      },
      set(v) {
        n("update:modelValue", v), n("on-change", v);
      }
    }), o = H({
      get() {
        return l.pageSize;
      },
      set(v) {
        n("on-page-size-change", v), c.value !== 1 && (c.value = 1);
      }
    }), y = H(() => {
      const v = Nn(String(l.total || 0), i) + r.value + 2;
      return v < 32 ? 32 : v;
    });
    Ve(
      y,
      (v) => {
        Me(function() {
          f(v);
        });
      },
      { immediate: !0 }
    );
    function p() {
      var w, T, x;
      const v = (x = (T = (w = e.value) == null ? void 0 : w.$el) == null ? void 0 : T.querySelector) == null ? void 0 : x.call(T, "input");
      if (!v)
        return 16;
      const b = window.getComputedStyle(v), g = b == null ? void 0 : b.paddingLeft, _ = b == null ? void 0 : b.paddingRight;
      return !g || !_ ? 16 : Number(g.replace("px", "")) + Number(_.replace("px", ""));
    }
    function f(v) {
      var g, _, w;
      const b = (w = (_ = (g = e.value) == null ? void 0 : g.$el) == null ? void 0 : _.querySelector) == null ? void 0 : w.call(_, "input");
      b != null && b.style && (b.style.width = `${v}px`);
    }
    return Ge(() => {
      r.value = p();
    }), (v, b) => {
      const g = Z("Page"), _ = Z("Option"), w = Z("Select");
      return S(), N("div", {
        class: Se(["pagePro", { pageProDefault: l.size === "default" }])
      }, [
        l.showTotal ? (S(), N("span", En, j(m(O)("r.total") + " ") + j(l.total) + j(" " + m(O)("r.items")), 1)) : de("", !0),
        J(g, {
          ref_key: "pageRef",
          ref: e,
          modelValue: m(c),
          "onUpdate:modelValue": b[0] || (b[0] = (T) => De(c) ? c.value = T : null),
          "page-size": m(o),
          total: l.total,
          size: l.size,
          "page-size-opts": l.pageSizeOpts,
          disabled: l.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        l.showSizer ? (S(), N("div", Gn, [
          J(w, {
            modelValue: m(o),
            "onUpdate:modelValue": b[1] || (b[1] = (T) => De(o) ? o.value = T : null),
            size: l.size,
            transfer: l.transfer,
            disabled: l.disabled
          }, {
            default: ne(() => [
              (S(!0), N(be, null, Te(l.pageSizeOpts, (T) => (S(), le(_, {
                value: T,
                key: T
              }, {
                default: ne(() => [
                  ke(j(T) + " " + j(m(O)("r.page")), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size", "transfer", "disabled"])
        ])) : de("", !0)
      ], 2);
    };
  }
}), Hn = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, Wn = { class: "topBtn" }, jn = { class: "tableContainer growFlexItem" }, qn = { class: "fullHeight relativeBox" }, Xn = { class: "pageContainer" }, Yt = /* @__PURE__ */ ce({
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
  setup(t, { expose: s, emit: n }) {
    var He;
    const e = n;
    ({ ...ba });
    const l = t, i = ((He = xe()) == null ? void 0 : He.pageSizes) || [10, 20, 50, 100], r = U(l.data), c = U(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || l.pageSize
    ), o = U(1), y = U(0);
    let p = [], f, u, v = U(l.orderKey), b = U(l.orderDefault);
    const g = U(300), _ = H(() => {
      for (let E of l.columns)
        if (E != null && E.fixed)
          return !0;
      return !1;
    }), w = H(() => l.selectionFixed || _.value), T = H(() => {
      let E = {
        ...l.searchData,
        current: o.value,
        size: c.value
      };
      return l.sortable === "custom" && (l.orderKeyFormat === "underline" ? E[b.value] = Rl(v.value) : l.orderKeyFormat === "camelcase" && (E[b.value] = Mn(v.value))), E;
    }), x = H(() => {
      let E = l.columns.filter((K) => K && K.type !== "selection");
      if (l.selection || l.radio) {
        let K;
        l.radio ? K = {
          title: " ",
          width: 65,
          render: (ye, ge) => Ie(ka, {
            modelValue: ge.row.btChecked
          })
        } : K = {
          type: "selection",
          width: 60
        }, l.selectionFixed && (K.fixed = l.selectionFixed), E.unshift(K);
      }
      return E.forEach((K) => {
        var ye;
        K && (l.sortable === "custom" ? K.key && K.sortable !== !0 && K.sortable !== !1 && (K.sortable = "custom") : K.sortable = !1, K.align || (K.align = ((ye = xe()) == null ? void 0 : ye.btTablePageAlign) || "center"));
      }), E.forEach((K) => {
        K != null && K.key && K.render === void 0 && (K.tooltip ? K.render = Ml(K.key, l.tableEmptyTdHandle) : K.render = (ye, ge) => {
          let we = "";
          return K != null && K.key && (we = ge.row[K.key]), l.tableEmptyTdHandle ? Ie("span", we === "" ? "--" : we ?? "--") : Ie("span", we);
        });
      }), E;
    }), C = H({
      get() {
        return r.value.map((E, K) => Object.assign({}, E, {
          btKey: "bt-" + K,
          btChecked: !!E.btChecked
        }));
      },
      set(E) {
        r.value = E;
      }
    }), $ = H(() => p.map((E) => E == null ? void 0 : E.id)), P = H(() => p.map((E) => E == null ? void 0 : E.btKey)), I = U(), h = U();
    Ve(() => l.searchData, B, { deep: !0 }), Ve(
      () => l.orderDefault,
      (E) => {
        b.value = E;
      }
    ), Ve(
      () => l.orderKey,
      (E) => {
        v.value = E;
      }
    );
    function B() {
      o.value = 1, Ae();
    }
    function L() {
      l.initData && Ae();
    }
    function te(E) {
      r.value.unshift(fe(E)), $e(() => {
        var K, ye;
        (ye = (K = I.value) == null ? void 0 : K.clickCurrentRow) == null || ye.call(K, 0);
      }, 100);
    }
    function z(E, K, ye) {
      let ge = null;
      if (typeof K == "number" ? ge = K : K && (ge = u), ge !== null) {
        let we = r.value[ge];
        for (let G in E)
          E.hasOwnProperty(G) && (we[G] = E[G]);
        ye && $e(() => {
          var G, _e;
          (_e = (G = I.value) == null ? void 0 : G.clickCurrentRow) == null || _e.call(G, ge);
        }, 10);
      }
    }
    function M(E) {
      r.value.splice(E, 1), $e(() => {
        var K, ye;
        (ye = (K = I.value) == null ? void 0 : K.clickCurrentRow) == null || ye.call(K, 0);
      }, 100);
    }
    function ee(E, K) {
      var ye, ge;
      E.btChecked && l.radio || (l.selection || l.radio) && l.rowClickSelect && ((ge = (ye = I.value) == null ? void 0 : ye.toggleSelect) == null || ge.call(ye, K));
    }
    function W(E, K) {
      f = K.btKey, u = Number(K.btKey.split("-")[1]), l.radio && (r.value[u].btChecked = !0);
    }
    function k(E) {
      if (l.radio)
        for (let K of C.value)
          K != null && K.btKey && K.btKey !== f && (r.value[Number(K.btKey.split("-")[1])].btChecked = !1);
      p = E, e("on-selection-change", E);
    }
    function F() {
      return fe(p);
    }
    function D() {
      Ae();
    }
    function q(E) {
      c.value = E, localStorage.setItem("btPageSize", String(E)), o.value === 1 && Ae();
    }
    function Q({ key: E, order: K }) {
      K === "normal" ? (v.value = l.orderKey, b.value = l.orderDefault) : (v.value = E, b.value = K), o.value = 1, Oe();
    }
    function se(E) {
      var ye, ge, we, G, _e, tt, lt, ut;
      const K = E;
      if (typeof K == "number")
        me(), u = K, f = (ge = (ye = C.value) == null ? void 0 : ye[K]) == null ? void 0 : ge.btKey, (G = (we = I.value) == null ? void 0 : we.clickCurrentRow) == null || G.call(we, K);
      else if (Array.isArray(K)) {
        if (l.radio || !l.selection)
          return;
        me();
        for (let je of K)
          (tt = (_e = I.value) == null ? void 0 : _e.clickCurrentRow) == null || tt.call(_e, je);
      } else if (typeof K == "function")
        for (let je = 0; je < C.value.length; je++) {
          const gt = C.value[je];
          K(gt) && ((ut = (lt = I.value) == null ? void 0 : lt.clickCurrentRow) == null || ut.call(lt, je));
        }
    }
    function me() {
      var E, K;
      if (l.radio) {
        if (P.value.length > 0 && C.value.length > 0) {
          let ye = P.value[0].split("-")[1];
          C.value[ye].btChecked = !1;
        }
      } else
        (K = (E = I.value) == null ? void 0 : E.selectAll) == null || K.call(E, !1);
      p.length > 0 && (p = [], e("on-selection-change", [])), f = null, u = null;
    }
    function he() {
      r.value = [], me(), o.value = 1, y.value = 0;
    }
    function Oe(E, K, ye) {
      return new Promise((ge) => {
        E && (b.value = E), K && (v.value = K), l.url ? We[l.method](l.url, T.value, "", [], { spin: l.getDataLoading }).then((we) => {
          var _e, tt;
          let G;
          ye || me(), typeof l.dataHandler == "function" ? G = l.dataHandler(we) : G = we, G.data ? (G.data.records || G.data.records === null ? r.value = G.data.records || [] : G.data.page ? (G.data.page.records || G.data.page.records === null) && (r.value = G.data.page.records || []) : G.data.data ? (G.data.data.records || G.data.data.records === null) && (r.value = G.data.data.records || []) : r.value = G.data, y.value = ((_e = G.data.page) == null ? void 0 : _e.total) || ((tt = G.data.data) == null ? void 0 : tt.total) || G.data.total || G.total || 0, y.value === 0 && o.value > 1 && r.value && r.value.length === 0 ? o.value = 1 : o.value > 1 && y.value <= (o.value - 1) * c.value && (o.value--, Me(function() {
            Oe(E, K);
          })), e("on-data-change", G), ge(G)) : (console.warn("请求返回数据有误，无法使用"), he(), e("on-data-change", G));
        }).catch((we) => {
          me(), he(), e("on-data-change", we);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Ae(E, K, ye) {
      l.radio && (E || l.rowClickNum !== -1) ? Oe(K, ye, E).then(() => {
        r.value.length > 0 && $e(() => {
          var ge, we, G, _e;
          E ? (we = (ge = I.value) == null ? void 0 : ge.clickCurrentRow) == null || we.call(ge, u || 0) : (_e = (G = I.value) == null ? void 0 : G.clickCurrentRow) == null || _e.call(G, l.rowClickNum);
        }, 10);
      }) : Oe();
    }
    function ae() {
      g.value < 50 ? $e(ae, 100) : $e(Le, 10);
    }
    function Le() {
      var E;
      g.value = ((E = h.value) == null ? void 0 : E.clientHeight) || 0;
    }
    function Pe() {
      var E, K;
      Le(), (K = (E = I.value) == null ? void 0 : E.handleResize) == null || K.call(E);
    }
    const et = At(Pe, 300);
    return Ge(() => {
      L(), w.value && (ae(), window.addEventListener("resize", et));
    }), el(() => {
      w.value && window.removeEventListener("resize", et);
    }), s({
      dataS: C,
      selectedIds: $,
      addRow: te,
      setRowData: z,
      deleteRow: M,
      getSelected: F,
      selectRow: se,
      clearSelect: me,
      clearTableData: he,
      getTableData: Oe,
      getDataAndClickRow: Ae
    }), (E, K) => {
      const ye = Z("Table"), ge = Z("Page");
      return S(), N("div", Hn, [
        pe(R("div", Wn, [
          Ne(E.$slots, "tableSetting"),
          Ne(E.$slots, "topMsg"),
          Ne(E.$slots, "topBtnGroup")
        ], 512), [
          [ve, l.showTopRow]
        ]),
        R("div", jn, [
          R("div", qn, [
            R("div", {
              ref_key: "tableContainerLOI",
              ref: h,
              class: "fullFlowContent"
            }, [
              J(ye, rt({
                ref_key: "tableRef",
                ref: I
              }, E.$attrs, {
                height: m(w) && m(g) || null,
                class: { noBorderTable: l.noBorderTable, fullHeightTable: !m(w), lightHeadO: l.lightHead },
                columns: m(x),
                data: m(C),
                "highlight-row": l.radio || l.highlightRow,
                onOnSelect: W,
                onOnSelectionChange: k,
                onOnSortChange: Q,
                onOnRowClick: ee
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        pe(R("div", Xn, [
          l.usePagePro ? (S(), le(Hl, {
            key: 0,
            modelValue: m(o),
            "onUpdate:modelValue": K[0] || (K[0] = (we) => De(o) ? o.value = we : null),
            total: m(y),
            showTotal: l.showTotal,
            pageSize: m(c),
            showSizer: l.showSizer,
            pageSizeOpts: m(i),
            size: l.pageComponentSize,
            onOnChange: D,
            onOnPageSizeChange: q
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (S(), le(ge, {
            key: 1,
            modelValue: m(o),
            "onUpdate:modelValue": K[1] || (K[1] = (we) => De(o) ? o.value = we : null),
            total: m(y),
            pageSize: m(c),
            pageSizeOpts: m(i),
            showSizer: l.showSizer,
            showTotal: l.showTotal,
            size: l.pageComponentSize,
            showElevator: !l.noElevator,
            onOnChange: D,
            onOnPageSizeChange: q
          }, null, 8, ["modelValue", "total", "pageSize", "pageSizeOpts", "showSizer", "showTotal", "size", "showElevator"]))
        ], 512), [
          [ve, !l.noPage]
        ])
      ], 512);
    };
  }
}), Wl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = H({
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
    }), i = H({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(p) {
        n("update:modelValue", {
          key: l.value,
          val: p
        });
      }
    }), r = H(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), c = H(() => ({
      width: typeof e.itemWidth == "number" ? e.itemWidth + "px" : e.itemWidth
    }));
    function o(p) {
      p != null && p.target && p.target.value !== void 0 && y({
        key: l.value,
        val: p.target.value
      });
    }
    const y = At((p) => {
      n("on-change", p);
    }, 500);
    return (p, f) => {
      const u = Z("Option"), v = Z("Select"), b = Z("Input");
      return S(), N("div", null, [
        J(v, {
          modelValue: m(l),
          "onUpdate:modelValue": f[0] || (f[0] = (g) => De(l) ? l.value = g : null),
          style: re(m(r)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: ne(() => [
            (S(!0), N(be, null, Te(e.selectOption, (g, _) => (S(), le(u, {
              value: g == null ? void 0 : g.val,
              label: g == null ? void 0 : g.label,
              key: "selectInputOp" + (g == null ? void 0 : g.value) + _,
              style: re({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        J(b, {
          modelValue: m(i),
          "onUpdate:modelValue": f[1] || (f[1] = (g) => De(i) ? i.value = g : null),
          placeholder: e.placeholder || m(O)("r.pInput"),
          style: re(m(c)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: o
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
let Qt = { securityJsCode: "", key: "" };
function Jn({ securityJsCode: t, key: s }) {
  Qt.securityJsCode = t, Qt.key = s;
}
function Yn(t) {
  return Qt[t];
}
const jl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = H({
      get() {
        let C;
        return e.modelValue ? e.modelValue.name ? C = fe(e.modelValue) : C = {
          ...e.modelValue,
          name: null
        } : C = {
          name: null
        }, C;
      },
      set(C) {
        n("update:modelValue", fe(C));
      }
    }), i = H(() => wt(e.width) ? e.width + "px" : e.width), r = H(() => wt(e.height) ? e.height + "px" : e.height ? e.height : wt(e.width) ? e.width * 0.66 + "px" : "200px"), c = H(() => ({
      width: i.value,
      position: "relative"
    })), o = H(() => ({
      width: i.value,
      height: r.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    Ve(
      () => e.modelValue,
      (C) => {
        if (C && C.lng && C.lat) {
          if (!g || !_)
            return;
          T({
            lng: C.lng,
            lat: C.lat,
            name: C.name
          });
        }
      }
    );
    const y = "mapId" + Math.floor(Math.random() * 1e9), p = U(null), f = U(null);
    let u;
    function v() {
      f.value && f.value.clientHeight < 10 || !f.value ? $e(v, 300) : $e(w, 100);
    }
    let b, g, _;
    function w() {
      fl.load({
        key: Yn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((C) => {
        b = C, g = new b.Map(y).on("complete", () => {
          var P, I, h, B;
          _ = new b.Geocoder(), (P = e.modelValue) != null && P.lng && ((I = e.modelValue) != null && I.lat) && T({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const $ = (B = (h = p.value) == null ? void 0 : h.$el) == null ? void 0 : B.children;
          $ && $.length > 1 && new b.AutoComplete({
            input: $[1]
          }).on("select", (L) => {
            var te, z, M;
            (te = L == null ? void 0 : L.poi) != null && te.name && ((z = L.poi.location) != null && z.lng && ((M = L.poi.location) != null && M.lat) ? (T({
              name: L.poi.name,
              lng: L.poi.location.lng,
              lat: L.poi.location.lat
            }), l.value = {
              name: L.poi.name,
              lng: L.poi.location.lng,
              lat: L.poi.location.lat
            }) : g == null || g.setCity(L.poi.name, () => {
              let ee = g.getCenter();
              T({
                name: L.poi.name,
                lng: ee.lng,
                lat: ee.lat
              }), l.value = {
                name: L.poi.name,
                lng: ee.lng,
                lat: ee.lat
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
    function T({ lng: C, lat: $, name: P }) {
      g == null || g.clearMap();
      let I = new b.LngLat(C, $), h = new b.Marker({
        map: g,
        position: I,
        draggable: !0
      });
      g == null || g.add(h), x(C, $), h.on("dragend", () => {
        let B = h.getPosition();
        l.value = {
          name: P || null,
          lng: B.lng,
          lat: B.lat
        }, x(C, $);
      }), h.on("click", (B) => {
        var L, te;
        u && u.open(g, (te = (L = B == null ? void 0 : B.target) == null ? void 0 : L.getPosition) == null ? void 0 : te.call(L));
      }), g == null || g.setFitView();
    }
    function x(C, $) {
      _ == null || _.getAddress([C, $], (P, I) => {
        P === "complete" && I.info === "OK" && I.regeocode && I.regeocode.formattedAddress ? u = new b.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + I.regeocode.formattedAddress + "</div>",
          offset: new b.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (u = null, console.warn("地图获取位置信息失败", I));
      });
    }
    return Ge(v), Ll(() => {
      var C;
      g && (g.destroy(), (C = fl) == null || C.reset(), g = null, _ = null, u = null);
    }), (C, $) => (S(), N("div", {
      style: re(m(c)),
      class: "containerIKJ"
    }, [
      J(m(wa), {
        ref_key: "mapInputRef",
        ref: p,
        modelValue: m(l).name,
        "onUpdate:modelValue": $[0] || ($[0] = (P) => m(l).name = P),
        class: Se({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || m(O)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      R("div", {
        style: re(m(o)),
        ref_key: "mapRef",
        ref: f,
        id: y
      }, null, 4)
    ], 4));
  }
});
var Bl;
const ql = /* @__PURE__ */ ce({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (Bl = window == null ? void 0 : window.g) != null && Bl.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const n = s, e = t, l = U([]), i = H({
      get() {
        let p = e.modelValue;
        return Array.isArray(p) ? fe(p) : wt(p) ? Xt({
          group: l.value,
          condition: (f) => (f == null ? void 0 : f.value) === p,
          pathKey: "value"
        }) : Al(p) ? p.split(e.separator) : [];
      },
      set(p) {
        if (e.onlyLastVal)
          Fe(p) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", Vt(p));
        else {
          if (yt(e.modelValue, p))
            return;
          n("update:modelValue", fe(p));
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
        (u = p == null ? void 0 : p.data) != null && u.records ? f = p.data.records : p != null && p.data ? f = p.data : p && (f = p), f ? (typeof e.optionFilter == "function" && Y(e.optionFilter) === "Function" && (f = e.optionFilter(f)), l.value = c(f)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function c(p) {
      let f = [];
      for (let u of p) {
        let v = {
          value: u[e.optionVal],
          label: u[e.optionLabel]
        };
        u != null && u.children && !Fe(u.children) && (v.children = c(u.children)), f.push(v);
      }
      return f;
    }
    function o(p) {
      return e.onlyLastLabel ? Vt(p) : p.join(e.separator);
    }
    function y(p, f) {
      let u = "";
      Fe(f) || (u = f.map((v) => v == null ? void 0 : v.label).join(e.separator)), n("on-label-change", u);
    }
    return Ge(r), (p, f) => {
      const u = Z("Cascader");
      return S(), le(u, {
        data: m(l),
        modelValue: m(i),
        "onUpdate:modelValue": f[0] || (f[0] = (v) => De(i) ? i.value = v : null),
        onOnChange: y,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": o,
        placeholder: e.placeholder || m(O)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), Xl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = H({
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
        if (Fe(i))
          n("update:modelValue", null), n("on-name-change", null);
        else {
          let r = Vt(i), c = "", o = "";
          if (r && (c = r.code), c && c.length < 12) {
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
    return (i, r) => (S(), le(m(Sa), rt(i.$attrs, {
      class: "alCascaderMC",
      modelValue: m(l),
      "onUpdate:modelValue": r[0] || (r[0] = (c) => De(l) ? l.value = c : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || m(O)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let Xe = 0;
function Jl(t, s, n, e) {
  var l, i, r;
  e && (e.innerHTML = ((l = t[s]) == null ? void 0 : l.name) ?? "", (i = t[s]) != null && i.name ? e.classList.contains("hide") && e.classList.remove("hide") : e.classList.contains("hide") || e.classList.add("hide")), n && (n.src = ((r = t[s]) == null ? void 0 : r.src) ?? t[s], Xe = s);
}
function wl(t, s, n, e) {
  if (t) {
    let l;
    Xe - 1 < 0 ? l = s.length - 1 : l = Xe - 1, Jl(s, l, n, e);
  }
}
function _l(t, s, n, e) {
  if (t) {
    let l;
    Xe + 1 > s.length - 1 ? l = 0 : l = Xe + 1, Jl(s, l, n, e);
  }
}
function mt(t, s = 0) {
  var w, T, x, C, $, P, I;
  const n = (...h) => Je.apply(this, h), e = n("r.closePreview"), l = n("r.fullImg"), i = n("r.last"), r = n("r.next");
  let c, o, y;
  Xe = s;
  const p = Array.isArray(t);
  p ? (o = ((w = t[Xe]) == null ? void 0 : w.src) ?? t[Xe], y = (T = t[Xe]) == null ? void 0 : T.name) : o = t, p && t.length > 1 ? c = `${i} ： ←, ↑, A, W | ${r} ： →, ↓, D, S | ${e} ： Esc` : c = `${e} ： Esc`;
  let f = Nt(document.getElementsByTagName("body")), u = document.createElement("div");
  u.setAttribute("class", "fullScreenImgByDom"), u.innerHTML = `<div class='previewInner'><div class='pageFBt left${p && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${i}' ></i></div><img src='${o}' alt='${l}' ><div class='pageFBt right${p && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${r}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${c}</p><p class='pName ${y ? "" : "hide"}'>${y}</p>`;
  function v() {
    let h = Nt(document.getElementsByTagName("body"));
    h && h.removeChild(u), document.removeEventListener("keyup", _);
  }
  (C = (x = u.querySelector(".ivu-icon-md-close")) == null ? void 0 : x.addEventListener) == null || C.call(x, "click", v);
  const b = u.querySelector("img"), g = u.querySelector(".pName");
  ($ = u.querySelector(".pageFBt.left")) == null || $.addEventListener("click", function() {
    wl(p, t, b, g);
  }), (P = u.querySelector(".pageFBt.right")) == null || P.addEventListener("click", function() {
    _l(p, t, b, g);
  });
  function _(h) {
    h.keyCode === 37 || h.keyCode === 38 || h.keyCode === 87 || h.keyCode === 65 ? wl(p, t, b, g) : h.keyCode === 39 || h.keyCode === 40 || h.keyCode === 83 || h.keyCode === 68 ? _l(p, t, b, g) : h.keyCode === 27 && v();
  }
  document.addEventListener("keyup", _), (I = f == null ? void 0 : f.appendChild) == null || I.call(f, u), u.focus({ preventScroll: !0 });
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
var xl;
const Yl = /* @__PURE__ */ ce({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (xl = window == null ? void 0 : window.g) != null && xl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const n = s, e = t, l = ht([]), i = ht([]), r = ht([]);
    let c = {};
    const o = U(0), y = H(() => !e.manualUpload && e.showImg && v.value ? "img" : e.manualUpload && e.showImg && v.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !v.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !v.value) ? "list" : ""), p = H(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), f = H({
      //文件集合
      get() {
        return e.manualUpload ? u.value : u.value.map((k) => ({ id: k }));
      },
      set(k) {
        e.manualUpload ? u.value = k || [] : u.value = (k == null ? void 0 : k.map((F) => F == null ? void 0 : F.id)) || [];
      }
    }), u = H({
      //文件ID集合
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((k) => k !== "--") : Y(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(k) {
        if (e.length === 1) {
          let F = Nt(k);
          n("update:modelValue", F ?? null), n("on-change", F ?? null);
        } else
          n("update:modelValue", fe(k)), n("on-change", fe(k));
      }
    }), v = H(() => {
      let k;
      if (e.manualUpload ? k = f.value : k = i.value, !k)
        return !1;
      for (let F of k) {
        let D;
        if (e.manualUpload ? D = F == null ? void 0 : F.type : D = F == null ? void 0 : F.mimeType, !D || D && !(ft(D) || D === "loading"))
          return !1;
      }
      return !0;
    }), b = H(() => i.value.filter((k) => ft(k == null ? void 0 : k.mimeType))), g = H(() => b.value.map((k) => ({
      src: e.url + "/" + (k == null ? void 0 : k.id) + "/download?preview=true",
      name: k == null ? void 0 : k.name
    }))), _ = H(() => f.value.filter((k) => ft(k == null ? void 0 : k.type)));
    Ve(_, async (k) => {
      r.value = await T(k);
    }), Ve(
      () => f.value,
      async (k) => {
        if (y.value === "localImg")
          k != null && k.length ? l.value = await T(k) : l.value = [];
        else if (k != null && k.length && y.value !== "localList") {
          let F = fe(k);
          const D = fe(i.value);
          for (let q of F)
            if ((q == null ? void 0 : q.name) === void 0)
              if (q.id) {
                const Q = Kt(D, (se) => (se == null ? void 0 : se.id) === q.id);
                Q ? (q.name = Q.name, q.mimeType = Q.mimeType) : c.hasOwnProperty(q.id) ? (q.name = c[q.id].name, q.mimeType = c[q.id].mimeType) : (q.mimeType = "loading", We.get(e.url + "/" + q.id).then((se) => {
                  var me, he, Oe, Ae, ae, Le;
                  q.name = ((Oe = (he = (me = se == null ? void 0 : se.data) == null ? void 0 : me.returnValue) == null ? void 0 : he[0]) == null ? void 0 : Oe.name) || O("r.file") + dl(k, q), q.mimeType = ((Le = (ae = (Ae = se == null ? void 0 : se.data) == null ? void 0 : Ae.returnValue) == null ? void 0 : ae[0]) == null ? void 0 : Le.mimeType) || "unknown", fa(i);
                }).catch(() => {
                  q.name = O("r.file") + dl(F, q);
                }));
              } else
                q.name = O("r.unknown");
          i.value = F;
        } else
          i.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function w(k) {
      return (k == null ? void 0 : k.name) || (k == null ? void 0 : k.split) && Vt(k.split("/")) || k;
    }
    async function T(k) {
      let F = [];
      for (let D of k) {
        let q = await yl(D);
        F.push(q);
      }
      return F;
    }
    function x(k) {
      if (!e.disabled) {
        let F = f.value;
        F == null || F.splice(k, 1), f.value = F, o.value && o.value--;
      }
    }
    function C(k) {
      k != null && k.id && window.open(e.url + "/" + k.id + "/download");
    }
    function $(k) {
      return e.manualUpload ? (k == null ? void 0 : k.type) && ft(k.type) : (k == null ? void 0 : k.id) && k.mimeType && ft(k.mimeType);
    }
    async function P(k) {
      if (e.manualUpload) {
        let F, D;
        if (typeof k == "number" ? (F = k, D = l.value) : k && (F = St(_.value, (q) => q.size === k.size && q.lastModified === k.lastModified), D = r.value), !D)
          return;
        mt(
          D.map((q, Q) => {
            var se;
            return {
              src: q,
              name: (se = _.value[Q]) == null ? void 0 : se.name
            };
          }),
          F
        );
      } else if (k != null && k.id) {
        const F = St(b.value, (D) => D.id === k.id);
        mt(g.value, F);
      }
    }
    function I(k) {
      Y(k) === "String" && k.indexOf("http") > -1 ? window.open(k) : Y(k) === "File" && yl(k).then((F) => {
        Fn(k.name, F);
      });
    }
    function h(k) {
      var F, D;
      if (e.length && o.value >= e.length)
        return ze(O("r.info.title"), O("r.uploadLength", [e.length]), "warning"), !1;
      if (o.value++, e.manualUpload) {
        if (k) {
          let q = El(k.name);
          if ((F = e.format) != null && F.length && e.format.indexOf(q) < 0)
            return ze(
              O("r.wrongFileType"),
              O("r.supportType") + (((D = e.format) == null ? void 0 : D.length) && String(e.format) || O("r.none")),
              "warning"
            ), o.value--, !1;
          if (e.maxSize && k.size > e.maxSize * 1024)
            return ze(O("r.fileIsBig"), O("r.supportSize") + e.maxSize + "kb", "warning"), o.value--, !1;
          let Q = f.value;
          Q == null || Q.push(k), f.value = Q;
        }
        return !1;
      } else
        return !0;
    }
    function B(k) {
      o.value--, console.warn(k), ze(O("r.uploadError"), "", "error");
    }
    function L(k, F, D) {
      var q, Q, se, me, he, Oe;
      if ((k == null ? void 0 : k.code) === 0) {
        let Ae = f.value;
        F.id = (Q = (q = k.data) == null ? void 0 : q[0]) == null ? void 0 : Q.id, F.name = (me = (se = k.data) == null ? void 0 : se[0]) == null ? void 0 : me.name, F.mimeType = (Oe = (he = k.data) == null ? void 0 : he[0]) == null ? void 0 : Oe.mimeType, c[F.id] = { name: F.name, mimeType: F.mimeType }, Ae == null || Ae.push(F), f.value = Ae;
      } else
        o.value--, ze(O("r.uploadFail"), (k == null ? void 0 : k.message) || "", "error");
    }
    function te() {
      o.value--, ze(O("r.fileIsBig"), O("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function z() {
      var k;
      o.value--, ze(
        O("r.wrongFileType"),
        O("r.supportType") + (((k = e.format) == null ? void 0 : k.length) && String(e.format) || O("r.none")),
        "warning"
      );
    }
    function M(k) {
      let F = k == null ? void 0 : k.id, D = k == null ? void 0 : k.mimeType;
      F && (Y(D) === "String" && D.indexOf("image") > -1 ? mt(e.url + "/" + F + "/download?preview=true") : window.open(e.url + "/" + F + "/download?preview=true"));
    }
    function ee(k) {
      var D, q, Q;
      let F = (Q = (q = (D = k == null ? void 0 : k.response) == null ? void 0 : D.data) == null ? void 0 : q[0]) == null ? void 0 : Q.id;
      W(null, F);
    }
    function W(k, F) {
      if (!(!F && F !== 0) && !e.disabled && u.value.indexOf(F) !== -1) {
        const D = fe(u.value);
        let q = f.value;
        q == null || q.splice(D.indexOf(F), 1), f.value = q, o.value && o.value--;
      }
    }
    return (k, F) => {
      var se, me, he, Oe, Ae;
      const D = Z("Button"), q = Z("Upload"), Q = Z("Icon");
      return S(), N("div", null, [
        J(q, {
          name: "files",
          action: m(p),
          "before-upload": h,
          "on-error": B,
          "on-success": L,
          "on-exceeded-size": te,
          "on-preview": M,
          "on-remove": ee,
          "on-format-error": z,
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
              J(D, {
                icon: "md-cloud-upload",
                disabled: e.length > 0 && ((ae = m(f)) == null ? void 0 : ae.length) >= e.length || !!e.disabled
              }, {
                default: ne(() => [
                  ke(j(m(O)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        m(y) === "img" && ((me = m(i)) == null ? void 0 : me.length) > 0 ? (S(), N("div", Qn, [
          (S(!0), N(be, null, Te(m(i), (ae, Le) => (S(), N(be, {
            key: ae == null ? void 0 : ae.id
          }, [
            !e.manualUpload && (ae == null ? void 0 : ae.id) !== null ? (S(), N("div", {
              key: 0,
              class: Se(["previewImg", { previewLoading: ae.mimeType === "loading" }])
            }, [
              pe(R("div", Zn, F[0] || (F[0] = [
                R("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ve, ae.mimeType === "loading"]
              ]),
              pe(R("img", {
                src: k.url + "/" + ae.id + "/download?preview=true",
                alt: ae.name
              }, null, 8, eo), [
                [ve, ae.mimeType !== "loading"]
              ]),
              pe(R("div", to, [
                J(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: m(O)("r.fView"),
                  onClick: (Pe) => m(mt)(m(g), Le)
                }, null, 8, ["title", "onClick"]),
                J(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Pe) => W(Pe, ae.id),
                  title: m(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ve, ae.mimeType !== "loading"]
              ])
            ], 2)) : de("", !0)
          ], 64))), 128))
        ])) : de("", !0),
        m(y) === "localImg" && ((he = m(l)) == null ? void 0 : he.length) > 0 ? (S(), N("div", lo, [
          (S(!0), N(be, null, Te(m(l), (ae, Le) => (S(), N(be, {
            key: "manualImg" + Le
          }, [
            e.manualUpload && ae !== null ? (S(), N("div", ao, [
              R("img", {
                src: ae,
                alt: "manualImg" + Le
              }, null, 8, no),
              R("div", oo, [
                J(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (Pe) => P(Le),
                  title: m(O)("r.fView")
                }, null, 8, ["onClick", "title"]),
                J(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Pe) => x(Le),
                  title: m(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : de("", !0)
          ], 64))), 128))
        ])) : de("", !0),
        m(y) === "localList" && ((Oe = m(f)) == null ? void 0 : Oe.length) > 0 ? (S(), N("div", io, [
          (S(!0), N(be, null, Te(m(f), (ae, Le) => (S(), N(be, {
            key: "manualItem" + Le
          }, [
            e.manualUpload && ae !== null ? (S(), N("p", so, [
              ae.name ? (S(), le(Q, {
                key: 0,
                class: "fileTypeIco",
                type: m(vl)(ae.name),
                size: "20"
              }, null, 8, ["type"])) : de("", !0),
              R("span", {
                class: Se(["upNameT", { previewName: $(ae) }]),
                onClick: (Pe) => I(ae),
                title: m(O)("r.download")
              }, j(w(ae)), 11, ro),
              R("span", uo, [
                $(ae) ? (S(), le(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => P(ae),
                  title: m(O)("r.fView")
                }, null, 8, ["onClick", "title"])) : de("", !0),
                J(Q, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => x(Le),
                  title: m(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : de("", !0)
          ], 64))), 128))
        ])) : de("", !0),
        m(y) === "list" && ((Ae = m(i)) == null ? void 0 : Ae.length) > 0 ? (S(), N("div", co, [
          (S(!0), N(be, null, Te(m(i), (ae, Le) => (S(), N(be, {
            key: "defaultItem" + Le
          }, [
            !e.manualUpload && ae ? (S(), N("div", fo, [
              pe(R("div", po, F[1] || (F[1] = [
                R("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ve, ae.mimeType === "loading"]
              ]),
              pe(J(Q, {
                type: m(vl)(ae.name),
                class: "fileTypeIco",
                size: "20"
              }, null, 8, ["type"]), [
                [ve, ae.mimeType !== "loading"]
              ]),
              pe(R("span", {
                class: "upNameT",
                onClick: (Pe) => C(ae),
                title: m(O)("r.download")
              }, j(ae.name || m(O)("r.file") + (Le + 1)), 9, mo), [
                [ve, ae.mimeType !== "loading"]
              ]),
              pe(R("span", ho, [
                $(ae) ? (S(), le(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => P(ae),
                  title: m(O)("r.fView")
                }, null, 8, ["onClick", "title"])) : de("", !0),
                J(Q, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => x(Le),
                  title: m(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ve, ae.mimeType !== "loading"]
              ])
            ])) : de("", !0)
          ], 64))), 128))
        ])) : de("", !0)
      ]);
    };
  }
}), Ql = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = U(!1), i = U(!1), r = U(!1), c = H({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(_) {
        n("update:modelValue", [_, o.value]), n("on-change", [_, o.value]);
      }
    }), o = H({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(_) {
        n("update:modelValue", [c.value, _]), n("on-change", [c.value, _]);
      }
    }), y = H(
      () => (c.value || "") + ((c.value || o.value) && " - " || "") + (o.value || "")
    ), p = U();
    Ge(() => {
      p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        r.value = !0;
      }), p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        r.value = !1;
      }), p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (_) => {
        var w;
        !e.disabled && (c.value || o.value) && ((w = _ == null ? void 0 : _.stopPropagation) == null || w.call(_), b());
      });
    });
    function f() {
      e.disabled || (l.value = !0);
    }
    function u(_) {
      c.value = _, l.value = !1, i.value = !0;
    }
    function v(_) {
      o.value = _, i.value = !1;
    }
    function b() {
      n("update:modelValue", [null, null]), n("on-change", [null, null]);
    }
    function g() {
      l.value = !1, i.value = !1, c.value && o.value === null && (c.value = null);
    }
    return (_, w) => {
      const T = Z("DatePicker"), x = Z("Icon"), C = Z("Input");
      return S(), N("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: p
      }, [
        J(T, {
          open: m(i),
          modelValue: m(o),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: v,
          onOnClickoutside: g
        }, {
          default: ne(() => w[1] || (w[1] = [
            R("div", { class: "bRoot" }, null, -1)
          ])),
          _: 1,
          __: [1]
        }, 8, ["open", "modelValue", "placement", "options"]),
        J(T, {
          open: m(l),
          modelValue: m(c),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: u,
          onOnClickoutside: g
        }, {
          default: ne(() => [
            R("div", { onClick: f }, [
              J(C, {
                class: "aRoot",
                modelValue: m(y),
                "onUpdate:modelValue": w[0] || (w[0] = ($) => De(y) ? y.value = $ : null),
                readonly: "",
                placeholder: e.placeholder || m(O)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: ne(() => [
                  J(x, {
                    type: m(r) && (m(c) || m(o)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), Zl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = U(), i = "date-c-r-" + Math.floor(Math.random() * 1e7 + 1e7), r = U({}), c = H({
      get() {
        return e.modelValue;
      },
      set(p) {
        n("update:modelValue", p);
      }
    }), o = H(() => {
      if (Y(e.options) === "Object") {
        const { disabledDate: p, ...f } = e.options;
        return f;
      }
      return {};
    });
    function y(p) {
      var u, v;
      const f = p.target;
      ((v = (u = f.classList) == null ? void 0 : u.contains) != null && v.call(u, "ivu-date-picker-cells-cell") || f.tagName === "EM") && $e(() => {
        var g, _;
        const b = (_ = (g = l == null ? void 0 : l.value) == null ? void 0 : g.$refs.pickerPanel) == null ? void 0 : _.rangeState;
        if (b) {
          const w = b.from, T = b.selecting;
          r.value = {
            ...o.value,
            disabledDate: (x) => {
              var C;
              return typeof ((C = e.options) == null ? void 0 : C.disabledDate) == "function" ? e.options.disabledDate(x, w, T) : !1;
            }
          };
        }
      }, 1);
    }
    return Ve(
      () => e.options,
      (p) => {
        r.value = p;
      },
      { immediate: !0 }
    ), Ge(() => {
      var f;
      const p = document.getElementsByClassName(i)[0];
      (f = p == null ? void 0 : p.addEventListener) == null || f.call(p, "click", y, !0);
    }), (p, f) => {
      const u = Z("DatePicker");
      return S(), le(u, {
        ref_key: "dateC",
        ref: l,
        modelValue: m(c),
        "onUpdate:modelValue": f[0] || (f[0] = (v) => De(c) ? c.value = v : null),
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
}), yo = { class: "editor-pro-root" }, ea = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = ht(), i = H({
      get() {
        return e.modelValue;
      },
      set(p) {
        n("update:modelValue", p), n("on-change", p);
      }
    }), r = H(
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
    ), c = H(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(p, f) {
                let u = new FormData();
                u.append("files", p);
                const v = p.name, b = e.imgUploadUrl ?? "/node-serve/file";
                We.post(b, u, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((g) => {
                  if (g && g.data)
                    if (Array.isArray(g.data))
                      for (let _ of g.data) {
                        const w = b + "/" + (_ == null ? void 0 : _.id) + "/download";
                        f(w, v, w);
                      }
                    else {
                      const _ = b + "/" + g.data.id + "/download";
                      f(_, v, _);
                    }
                }).catch(() => {
                  ze(O("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(p, f) {
                let u = new FormData();
                u.append("files", p);
                const v = e.videoUploadUrl ?? "/node-serve/file";
                We.post(v, u, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((b) => {
                  if (b && b.data)
                    if (Array.isArray(b.data))
                      for (let g of b.data) {
                        const _ = v + "/" + (g == null ? void 0 : g.id) + "/download";
                        f(_);
                      }
                    else {
                      const g = v + "/" + b.data.id + "/download";
                      f(g);
                    }
                }).catch(() => {
                  ze(O("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), o = H(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function y(p) {
      l.value = p;
    }
    return Ve(
      () => e.disabled,
      (p) => {
        p ? l.value.disable() : l.value.enable();
      }
    ), el(() => {
      l.value && l.value.destroy();
    }), (p, f) => (S(), N("div", yo, [
      pe(J(m(Ca), {
        class: "editor-pro-toolbar",
        editor: m(l),
        defaultConfig: m(r),
        mode: p.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ve, !p.disabled]
      ]),
      J(m(Ta), {
        class: "editor-pro-editor",
        modelValue: m(i),
        "onUpdate:modelValue": f[0] || (f[0] = (u) => De(i) ? i.value = u : null),
        defaultConfig: m(c),
        mode: p.mode,
        onOnCreated: y,
        style: re(m(o))
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
}, Vl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = H(() => {
      var f;
      if (e.inline)
        return e.itemWidth;
      {
        const u = (f = e.itemStyle) == null ? void 0 : f.width;
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
    function i(f) {
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
    function o(f) {
      n("select-input-change", f);
    }
    function y(f, u) {
      n("al-name-change", {
        name: f,
        root: u
      });
    }
    function p(f, u) {
      n("async-label-change", {
        label: f,
        root: u
      });
    }
    return (f, u) => {
      const v = Z("InputNumber"), b = Z("Input"), g = Z("Option"), _ = Z("Select"), w = Z("Radio"), T = Z("Icon"), x = Z("RadioGroup"), C = Z("Checkbox"), $ = Z("CheckboxGroup"), P = Z("TimePicker"), I = Z("FormItem");
      return e.item ? (S(), le(I, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: Se(["relativeBox", i(e.item)])
      }, {
        default: ne(() => [
          e.item.type === "txt" ? (S(), N("div", {
            key: 0,
            style: re([e.itemStyle, { display: "inline-block" }]),
            class: Se({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, j(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (S(), le(v, {
            key: 1,
            style: re(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[0] || (u[0] = (h) => e.tempKeys[e.item.tempKey] = h),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: u[1] || (u[1] = (h) => r(h, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (S(), le(b, {
            key: 2,
            style: re(f.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[2] || (u[2] = (h) => e.tempKeys[e.item.tempKey] = h),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[3] || (u[3] = (h) => r(h, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, st({ _: 2 }, [
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
                R("span", null, j(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: ne(() => [
                R("span", null, j(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (S(), le(_, {
            key: 3,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[4] || (u[4] = (h) => f.tempKeys[e.item.tempKey] = h),
            style: re(f.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || m(O)("r.pSelect"),
            onOnChange: u[5] || (u[5] = (h) => r(h, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: ne(() => [
              (S(!0), N(be, null, Te(e.item.options, (h, B) => (S(), le(g, {
                value: h.val,
                label: h.label || h.val,
                key: "option-" + e.item.key + B,
                disabled: !!h.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (S(), le(Wl, {
            key: 4,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[6] || (u[6] = (h) => f.tempKeys[e.item.tempKey] = h),
            "label-width": f.labelWidth,
            "item-width": m(l),
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: o
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (S(), le(Xl, {
            key: 5,
            style: re(f.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[7] || (u[7] = (h) => e.valGroup[e.item.key] = h),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || m(O)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: u[8] || (u[8] = (h) => y(h, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (S(), le(ql, {
            key: 6,
            style: re(f.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[9] || (u[9] = (h) => e.valGroup[e.item.key] = h),
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
            onOnLabelChange: u[10] || (u[10] = (h) => p(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (S(), le(w, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[11] || (u[11] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: u[12] || (u[12] = (h) => r(h, e.item))
          }, {
            default: ne(() => [
              ke(j(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (S(), le(x, {
            key: 8,
            style: re(f.itemStyle),
            onOnChange: u[13] || (u[13] = (h) => c(h, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[14] || (u[14] = (h) => f.tempKeys[e.item.tempKey] = h)
          }, {
            default: ne(() => [
              (S(!0), N(be, null, Te(e.item.options, (h) => (S(), le(w, {
                key: "radioItem" + h.val,
                label: h.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: ne(() => [
                  h.icon && !e.item.buttonType ? (S(), le(T, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : de("", !0),
                  R("span", null, j(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (S(), le(C, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[15] || (u[15] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled,
            onOnChange: u[16] || (u[16] = (h) => r(h, e.item))
          }, {
            default: ne(() => [
              ke(j(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (S(), le($, {
            key: 10,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[17] || (u[17] = (h) => f.tempKeys[e.item.tempKey] = h),
            onOnChange: u[18] || (u[18] = (h) => c(h, e.item))
          }, {
            default: ne(() => [
              (S(!0), N(be, null, Te(e.item.options, (h) => (S(), le(C, {
                key: "checkItem" + h.val,
                label: h.val,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: ne(() => [
                  h.icon ? (S(), le(T, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : de("", !0),
                  R("span", null, j(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (S(), le(b, {
            key: 11,
            type: "textarea",
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[19] || (u[19] = (h) => f.tempKeys[e.item.tempKey] = h),
            autosize: e.item.autosize || { minRows: 2 },
            style: re(f.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[20] || (u[20] = (h) => r(h, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (S(), le(Yl, {
            key: 12,
            style: re(f.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[21] || (u[21] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || f.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: u[22] || (u[22] = (h) => c(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (S(), le(Zl, {
            key: 13,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[23] || (u[23] = (h) => f.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placeholder: e.item.placeholder || m(O)("r.selectDate"),
            options: e.item.dateOptions || {},
            "time-picker-options": f.item.timePickerOptions || {},
            clearable: e.item.clearable !== !1,
            onOnChange: u[24] || (u[24] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "time-picker-options", "clearable"])) : e.item.type === "time" ? (S(), le(P, {
            key: 14,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[25] || (u[25] = (h) => f.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(O)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: u[26] || (u[26] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (S(), le(Ql, {
            key: 15,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[27] || (u[27] = (h) => f.tempKeys[e.item.tempKey] = h),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(O)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: u[28] || (u[28] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (S(), le(ea, {
            key: 16,
            class: "inlineBlock",
            style: re(f.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[29] || (u[29] = (h) => e.valGroup[e.item.key] = h),
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: u[30] || (u[30] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (S(), le(jl, {
            key: 17,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[31] || (u[31] = (h) => f.tempKeys[e.item.tempKey] = h),
            style: re(f.itemStyle),
            placeholder: e.item.placeholder || m(O)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: u[32] || (u[32] = (h) => r(h, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (S(), N("div", {
            key: 18,
            class: "inlineBlock",
            style: re(f.itemStyle)
          }, [
            Ne(f.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : de("", !0),
          e.item.info ? (S(), N("div", vo, j(e.item.info), 1)) : de("", !0),
          e.item.title ? (S(), N("div", go, j(e.item.title), 1)) : de("", !0),
          e.inline ? de("", !0) : (S(), N("span", bo))
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : de("", !0);
    };
  }
}), ko = { class: "inlineBlock" }, Pt = /* @__PURE__ */ ce({
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
    var sl, rl;
    const e = n, l = t, i = U(null), r = U({}), c = U([]), o = U({});
    let y = [];
    const p = ((sl = window == null ? void 0 : window.g) == null ? void 0 : sl.mgrURL) ?? "";
    let f = U([]), u = [];
    const v = U(!1), b = U(Math.random() * 1e8 + 1e3), g = (rl = window == null ? void 0 : window.g) != null && rl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let _ = !1;
    const w = H(() => Array.isArray(l.formData.length ? l.formData[0] : !1)), T = H(
      () => l.inline ? {
        width: l.itemWidth + l.labelWidth + "px"
      } : {}
    ), x = H(
      () => l.inline ? {
        width: "100%"
      } : { width: l.contentWidth }
    ), C = H(() => {
      let d = fe(l.formRules);
      for (let a in d)
        if (d.hasOwnProperty(a))
          if (Array.isArray(d[a]))
            for (let A of d[a])
              A && A && !(A.message || A.validator) && (A.message = O("r.required"));
          else Y(d[a]) === "Object" && (d[a].message || d[a].validator || (d[a].message = O("r.required")));
      return d;
    }), $ = H(() => {
      let d = [];
      if (w.value)
        for (let a of c.value)
          h(a, d);
      else
        h(c.value, d);
      return d.concat(f.value, u);
    }), P = H(() => {
      let d = [];
      if (w.value)
        for (let a of c.value)
          B(a, d);
      else
        B(c.value, d);
      return d;
    });
    function I(d) {
      return d.filter((a) => a == null ? void 0 : a.slotName);
    }
    function h(d, a) {
      for (let A of d)
        if ((A == null ? void 0 : A.showing) === !0 && A.key && A.type !== "selectInput" && (a.push(A.key), A.key2 && a.push(A.key2), A.collectLabel)) {
          if (!Array.isArray(A.collectLabel) && A.collectLabel.key)
            a.push(A.collectLabel.key);
          else if (Array.isArray(A.collectLabel))
            for (let V of A.collectLabel)
              V.key && a.push(V.key);
        }
    }
    function B(d, a) {
      for (let A of d)
        (A == null ? void 0 : A.showing) === !0 && A.key && A.type !== "selectInput" && a.push(A.key);
    }
    function L() {
      return new Promise((d) => {
        M(), z().then(() => {
          e("on-reset"), d(!0);
        });
      });
    }
    function te() {
      return new Promise((d) => {
        for (let a of y)
          a();
        y = [], o.value = {}, ae(), me(), z().then(() => {
          e("on-re-render"), d(!0);
        });
      });
    }
    function z() {
      return new Promise((d) => {
        b.value = Math.floor(Math.random() * 1e8 + 1e3), Me(function() {
          d(!0);
        });
      });
    }
    function M() {
      let d = k();
      for (let a in r.value)
        if (r.value.hasOwnProperty(a))
          if (Re(d[a]))
            r.value[a] = d[a];
          else if (Array.isArray(r.value[a]))
            r.value[a] = [];
          else if (Y(r.value[a]) === "Boolean")
            r.value[a] = !1;
          else {
            const A = _t(l.formData, (V) => (V == null ? void 0 : V.key) === a);
            A && (A.type === "editor" || A.type === "editorPro") ? r.value[a] = "" : r.value[a] = null;
          }
      ee(d);
    }
    function ee(d) {
      for (let a in o.value)
        o.value.hasOwnProperty(a) && (Re(d[a]) ? o.value[a] = d[a] : Array.isArray(o.value[a]) ? o.value[a] = [] : Y(o.value[a]) === "Object" && o.value[a].hasOwnProperty("key") && o.value[a].hasOwnProperty("val") ? o.value[a].val = null : o.value[a] = null);
    }
    function W(d) {
      let a = k();
      Re(a[d]) ? o.value[d] = a[d] : Array.isArray(o.value[d]) ? o.value[d] = [] : o.value[d] = null;
    }
    function k() {
      let d = {};
      if (w.value)
        for (let a of c.value)
          F(a, d);
      else
        F(c.value, d);
      return d;
    }
    function F(d, a) {
      for (let A of d)
        A.tempKey && Re(A.defaultVal) && se(A, a), A.key && Re(A.defaultVal) && (a[A.key] = A.defaultVal), A.key2 && Re(A.defaultVal2) && (a[A.key2] = A.defaultVal2);
    }
    function D(d) {
      if (d.show) {
        if (Y(d.show) === "Object")
          return Q(d, q(d.show));
        if (Array.isArray(d.show))
          if (d.showOr) {
            for (let a of d.show)
              if (q(a) === !0)
                return Q(d, !0);
            return Q(d, !1);
          } else {
            for (let a of d.show)
              if (q(a) === !1)
                return Q(d, !1);
            return Q(d, !0);
          }
        else if (typeof d.show == "function")
          return Q(d, d.show(r.value));
      } else d.showing || (d.showing = !0);
      return !0;
    }
    function q(d) {
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
    function Q(d, a) {
      return !(d != null && d.showing) && a && (d != null && d.key) ? (d.showing = a, d.defaultVal !== void 0 && (d.tempKey ? (o.value[d.tempKey] === null || o.value[d.tempKey] === void 0 || (Y(o.value[d.tempKey]) === "Object" || Array.isArray(o.value[d.tempKey])) && Fe(o.value[d.tempKey])) && se(d, o.value) : (r.value[d.key] === null || r.value[d.key] === void 0) && (r.value[d.key] = d.defaultVal), d.key2 && d.deafultVal2 !== void 0 && (r.value[d.key2] === null || r.value[d.key2] === void 0) && d.type !== "inputMap" && (r.value[d.key2] = d.defaultVal2)), d.tempKey && Pe(o.value[d.tempKey], d)) : d.showing = a, a;
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
      let d = fe(l.formData);
      if (w.value)
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
              const A = "selectInput" + Math.floor(Math.random() * 1e8);
              a.tempKey = A, o.value[A] = U({
                key: a.key || null,
                val: a.defaultVal || null
              }), y.push(
                Ve(
                  () => o.value[A],
                  (X) => {
                    Pe(X, a);
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
                Ve(
                  () => o.value[V],
                  (X) => {
                    Pe(X, a);
                  },
                  { immediate: !0 }
                )
              ));
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              const oe = "inputT" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = oe, o.value[oe] = a.defaultVal !== void 0 ? a.defaultVal : null, y.push(
                Ve(
                  () => o.value[oe],
                  (X) => {
                    Pe(X, a);
                  },
                  { immediate: !0 }
                )
              ));
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              if (a.options || (a.options = []), (a.type === "checkboxGroup" || a.type === "radioGroup") && (a.options = U(fe(a.options))), a.asyncOption)
                if (a.changeOption)
                  if (Array.isArray(a.changeOption)) {
                    let X = !0;
                    for (let ie of a.changeOption)
                      if (!ie.valKey || !ie.key) {
                        X = !1;
                        break;
                      }
                    X ? y.push(
                      Ve(
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
                          let Be = fe(o.value[a.tempKey]);
                          if (o.value[a.tempKey] = null, ie && a.optionUrl) {
                            let Ue = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                            Oe((Ue + ie).replace(/\?&/, "?"), a, Be);
                          } else
                            a.localOption ? qe(a, "options", [...a.localOption]) : qe(a, "options", []), Re(Be) && Ae(Be, a);
                        },
                        {
                          immediate: !0
                        }
                      )
                    ) : a.localOption ? qe(a, "options", [...a.localOption]) : qe(a, "options", []);
                  } else typeof a.changeOption == "object" ? a.changeOption.valKey && a.changeOption.key && y.push(
                    Ve(
                      () => typeof a.changeOption == "object" && !Array.isArray(a.changeOption) ? r.value[a.changeOption.valKey] : !1,
                      (X) => {
                        let ie = fe(o.value[a.tempKey]);
                        if (o.value[a.tempKey] = null, (X && !Array.isArray(X) || Array.isArray(X) && X.length || X === 0 || X === !1) && a.optionUrl && typeof a.changeOption == "object" && !Array.isArray(a.changeOption)) {
                          let Be = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                          Oe((Be + "&" + a.changeOption.key + "=" + X).replace(/\?&/, "?"), a, ie);
                        } else
                          a.localOption ? qe(a, "options", [...a.localOption]) : qe(a, "options", []), Re(ie) && Ae(ie, a);
                      },
                      { immediate: !0 }
                    )
                  ) : Y(a.changeOption) === "Boolean" && y.push(
                    Ve(
                      () => {
                        const X = _t(l.formData, (ie) => (ie == null ? void 0 : ie.key) === a.key);
                        return X.optionUrl = pa(X.optionUrl), X.optionUrl.value;
                      },
                      (X) => {
                        let ie = fe(o.value[a.tempKey]);
                        o.value[a.tempKey] = null, X ? Oe(X, a, ie) : (a.localOption ? qe(a, "options", [...a.localOption]) : qe(a, "options", []), Re(ie) && Ae(ie, a));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
                else a.optionUrl && Oe(a.optionUrl, a);
              else Y(a.borrowOption) === "String" && Me(function() {
                a.options = _t(c.value, (X) => (X == null ? void 0 : X.key) === a.borrowOption).options;
              });
              const ue = "opEle" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = ue, a.type === "select" && a.multiple || a.type === "checkboxGroup" ? o.value[ue] = a.defaultVal !== void 0 ? a.defaultVal : [] : a.booleanVal ? o.value[ue] = a.defaultVal !== void 0 ? a.defaultVal ? 1 : 0 : null : o.value[ue] = a.defaultVal !== void 0 ? a.defaultVal : null, y.push(
                Ve(
                  () => o.value[ue],
                  (X) => {
                    Pe(X, a);
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
              const Ce = "date" + Math.floor(Math.random() * 1e8);
              a.tempKey = Ce, a.dateType === "date" || a.dateType === "datetime" || a.dateType === "time" || a.dateType === "year" || a.dateType === "month" ? o.value[Ce] = a.defaultVal || null : (a.dateType === "daterange" || a.dateType === "datetimerange" || a.dateType === "timerange" || a.type === "monthRange") && (o.value[Ce] = a.defaultVal && a.defaultVal2 && [a.defaultVal, a.defaultVal2] || []), y.push(
                Ve(
                  () => o.value[Ce],
                  (X) => {
                    Pe(X, a);
                  }
                )
              );
              break;
          }
    }
    function Oe(d, a, A) {
      We.get(d).then((V) => {
        var Ce;
        let oe;
        if (De(a.options) ? oe = a.options.value : oe = a.options, !oe)
          return;
        let ue = ((Ce = V == null ? void 0 : V.data) == null ? void 0 : Ce.records) || (V == null ? void 0 : V.data) || V || [];
        Array.isArray(ue) ? (a.optionFilter && Y(a.optionFilter) === "Function" && (ue = a.optionFilter(ue)), a.optionLabel && a.optionVal ? (oe.length = 0, oe.push(
          ...ue.map((X) => {
            let ie;
            if (Array.isArray(a.optionLabel)) {
              let Be = "";
              a.optionLabel.forEach((Ue, ul) => {
                let $t = String(X[Ue]);
                ul === 1 ? Be += "（" + $t : ul > 1 ? Be += "、" + $t : Be += $t;
              }), ie = {
                label: Be + "）",
                val: a.optionVal && X[a.optionVal]
              };
            } else
              ie = {
                label: a.optionLabel && X[a.optionLabel],
                val: a.optionVal && X[a.optionVal]
              };
            if (a.collectLabel)
              if (Array.isArray(a.collectLabel))
                for (let Be of a.collectLabel)
                  Be.valKey && Be.valKey !== "label" && (ie[Be.valKey] = X[Be.valKey]);
              else
                a.collectLabel.valKey && a.collectLabel.valKey !== "label" && (ie[a.collectLabel.valKey] = X[a.collectLabel.valKey]);
            if (ie.val !== null && ie.val !== void 0)
              return ie;
          })
        )) : (oe.length = 0, oe.push(...ue))) : oe.length = 0, a.localOption && oe.unshift(...a.localOption), Re(A) && Ae(A, a), a.disableOptionByOthers && (Y(a.disableOptionByOthers) === "String" ? y.push(
          Ve(
            () => r.value[a.disableOptionByOthers],
            (X) => {
              if (W(a.tempKey), !!oe) {
                for (let ie of oe)
                  ie.disabled && (ie.disabled = !1);
                if (X || X === 0 || X === !1)
                  for (let ie of oe)
                    ie.val === X && (ie.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(a.disableOptionByOthers) && y.push(
          Ve(
            () => a.disableOptionByOthers.filter((X) => X).map((X) => r.value[X]),
            (X) => {
              if (W(a.tempKey), !!oe) {
                for (let ie of oe)
                  ie.disabled && (ie.disabled = !1);
                if (X) {
                  for (let ie of oe)
                    for (let Be = 0; Be < X.length; Be++)
                      if (ie.val === X[Be]) {
                        ie.disabled = !0, X.splice(Be, 1);
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
    function Ae(d, a) {
      Array.isArray(Mt(a.options)) && St(Mt(a.options), { val: d }) !== -1 && (o.value[a.tempKey] = d);
    }
    function ae() {
      if (r.value = {}, w.value)
        for (let d of l.formData)
          Le(d);
      else
        Le(l.formData);
    }
    function Le(d) {
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
              const oe = et(a, d);
              if (Array.isArray(a.collectLabel)) {
                for (let ue of a.collectLabel)
                  if (ue != null && ue.key && ue.valKey) {
                    const Ce = He(ue.key);
                    let X = null;
                    Array.isArray(oe) ? (X = oe.map((ie) => ie[ue.valKey]), r.value[ue.key] = X, Ce && (o.value[Ce.tempKey] = X)) : (oe && Re(oe[ue.valKey]) && (X = oe[ue.valKey]), r.value[ue.key] = X, Ce && (Ce.booleanVal && typeof X == "boolean" ? o.value[Ce.tempKey] = X ? 1 : 0 : o.value[Ce.tempKey] = X));
                  }
              } else if (typeof a.collectLabel == "object" && a.collectLabel.key && a.collectLabel.valKey) {
                const ue = He(a.collectLabel.key);
                let Ce = null;
                Array.isArray(oe) ? (Ce = oe.map(
                  (X) => a.collectLabel && !Array.isArray(a.collectLabel) && X[a.collectLabel.valKey]
                ), r.value[a.collectLabel.key] = Ce, ue && (o.value[ue.tempKey] = Ce)) : (oe && Re(oe[a.collectLabel.valKey]) && (Ce = oe[a.collectLabel.valKey]), r.value[a.collectLabel.key] = Ce, ue && (ue.booleanVal && typeof Ce == "boolean" ? o.value[ue.tempKey] = Ce ? 1 : 0 : o.value[ue.tempKey] = Ce));
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!a.key)
              return;
            let A = a.dateType;
            const V = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "YYYY-MM"
            };
            if (A === "date" || A === "datetime" || A === "time" || A === "year" || A === "month")
              d ? (A === "time" ? r.value[a.key] = d : r.value[a.key] = ct(d).format(typeof a.format == "string" ? a.format : V[A]), A === "date" && a.addTime && (r.value[a.key] += " 00:00:00")) : r.value[a.key] = null;
            else if (a.type === "monthRange" || A === "daterange" || A === "datetimerange" || A === "timerange") {
              if (!a.key2)
                return;
              d && d[0] && d[1] ? (A === "timerange" ? (r.value[a.key] = d[0], r.value[a.key2] = d[1]) : a.type === "monthRange" ? (r.value[a.key] = typeof a.format == "string" && ct(d[0]).format(a.format) || d[0], r.value[a.key2] = typeof a.format == "string" && a.format && ct(d[1]).format(a.format) || d[1]) : (r.value[a.key] = ct(d[0]).format(a.format || A && V[A]), r.value[a.key2] = ct(d[1]).format(a.format || A && V[A])), A === "daterange" && a.addTime && (r.value[a.key] += " 00:00:00", r.value[a.key2] += " 23:59:59")) : (r.value[a.key] = null, r.value[a.key2] = null);
            }
            break;
        }
    }
    function et(d, a) {
      const A = Mt(d == null ? void 0 : d.options);
      if (A)
        if (d != null && d.multiple || (d == null ? void 0 : d.type) === "checkboxGroup") {
          if (a) {
            let V = [];
            for (let oe of A)
              a.indexOf(oe == null ? void 0 : oe.val) !== -1 && V.push(oe);
            return V;
          }
          return !1;
        } else {
          if (a || a === 0 || a === !1) {
            for (let V of A)
              if ((V == null ? void 0 : V.val) === a)
                return V;
          }
          return !1;
        }
    }
    function He(d) {
      if (w.value) {
        for (let a of c.value) {
          const A = E(a, d);
          if (A)
            return A;
        }
        return !1;
      }
      return E(c.value, d);
    }
    function E(d, a) {
      for (let A of d)
        if (A.key === a)
          return A;
      return !1;
    }
    function K(d, a) {
      let A = {};
      for (let V in r.value)
        r.value.hasOwnProperty(V) && d[V] !== void 0 && (A[V] = d[V], delete d[V]);
      we(A, a);
      for (let V in d)
        d.hasOwnProperty(V) && (u.indexOf(V) < 0 && u.push(V), r.value[V] = d[V]);
    }
    function ye(d) {
      let a = fe(d);
      if (w.value) {
        let A = [];
        for (let V of l.formData)
          A.push(...ge(V, a));
        return A;
      }
      return ge(l.formData, a);
    }
    function ge(d, a) {
      return d.filter((A) => {
        for (let V of Object.keys(a))
          if ((A == null ? void 0 : A.key) === V && P.value.indexOf(V) > -1 && !(a[V] === null || (Array.isArray(a[V]) || Y(a[V]) === "Object") && Fe(a[V])))
            return delete a[V], !0;
        return !1;
      }).map((A) => A == null ? void 0 : A.key);
    }
    function we(d, a = !1) {
      let A = fe(d);
      G(d, a);
      for (let V in r.value)
        if (r.value.hasOwnProperty(V) && d[V] !== void 0 && d[V] !== "--") {
          if (Array.isArray(d[V]))
            d[V] = d[V].filter((oe) => oe !== "--");
          else if (Y(d[V]) === "Object")
            for (let oe in d[V])
              d[V].hasOwnProperty(oe) && d[V][oe] === "--" && (d[V][oe] = null);
          r.value[V] = d[V];
        } else a || (r.value[V] = Array.isArray(r.value[V]) ? [] : null);
      Me(function() {
        na(ye(A));
      });
    }
    function G(d, a = !1) {
      if (w.value)
        for (let A of c.value)
          _e(A, d, a);
      else
        _e(c.value, d, a);
    }
    function _e(d, a, A = !1) {
      for (let V of d)
        if (V != null && V.key && (A && (a[V.key] !== void 0 || V.key2 && a[V.key2] !== void 0) || !A) && V.tempKey)
          switch (V.type) {
            case "inputMap":
              if (!V.key2)
                continue;
              Y(a[V.key]) === "Number" && Y(a[V.key2] === "Number") ? V.key3 ? o.value[V.tempKey] = {
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
    function tt(d) {
      if (Array.isArray(d))
        for (let a of d)
          lt(a);
      else Y(d) === "Object" && lt(d);
    }
    function lt(d) {
      const { index: a, indexB: A, key: V, val: oe } = d;
      if (typeof a == "number")
        if (Array.isArray(c.value[a])) {
          if (typeof A == "number")
            if (V && d.hasOwnProperty("val"))
              c.value[a][A][V] = oe;
            else
              for (let ue of Object.keys(d))
                ue !== "index" && V !== "indexB" && (c.value[a][A][ue] = d[ue]);
        } else if (V && d.hasOwnProperty("val"))
          c.value[a][V] = oe;
        else
          for (let ue of Object.keys(d))
            ue !== "index" && (c.value[a][ue] = d[ue]);
    }
    function ut({ label: d, root: a }) {
      a.key2 && (r.value[a.key2] = d), at({
        e: d,
        root: a
      });
    }
    function je(d) {
      d.beforeKey && va(f.value, (a) => a === d.beforeKey), d.key && (f.value.indexOf(d.key) === -1 && f.value.push(d.key), at({
        e: null,
        root: d
      }));
    }
    function gt({ name: d, root: a }) {
      a.key2 && (r.value[a.key2] = d), at({
        e: d,
        root: a
      });
    }
    function ol({ e: d, root: a }) {
      at({
        e: d,
        root: a
      }), Me(function() {
        var A, V;
        (V = (A = i.value) == null ? void 0 : A.validateField) == null || V.call(A, a.key);
      });
    }
    function at({ e: d, root: a }) {
      $e(() => {
        var V;
        let A = {
          event: d
        };
        if (a.key && (A[a.key] = r.value[a.key]), a.key2 && (A[a.key2] = r.value[a.key2]), Array.isArray(a.collectLabel))
          for (let oe of a.collectLabel)
            A[oe.key] = r.value[oe.key];
        else (V = a.collectLabel) != null && V.key && (A[a.collectLabel.key] = r.value[a.collectLabel.key]);
        e("on-item-change", A);
      }, 300);
    }
    function il() {
      let d = {};
      for (let a of $.value)
        d[a] = r.value[a];
      return l.trim && (d = Bt(d)), d;
    }
    function la() {
      var d, a;
      (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d);
    }
    function aa(d) {
      $e(() => {
        var a, A;
        (A = (a = i.value) == null ? void 0 : a.validateField) == null || A.call(a, d, () => {
        });
      }, 10);
    }
    function na(d) {
      $e(() => {
        var a, A;
        if (Array.isArray(d))
          for (let V of d)
            (A = (a = i.value) == null ? void 0 : a.validateField) == null || A.call(a, V, () => {
            });
      }, 10);
    }
    function oa(d) {
      d !== void 0 && (v.value = !!d);
    }
    function Rt() {
      var d, a;
      l.disabled || (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d, (A) => {
        _ || (_ = !0, A && (v.value = !0, e("on-submit", il())), $e(() => {
          _ = !1;
        }, 2e3));
      });
    }
    return Ge(() => {
      ae(), me();
    }), s({
      resetForm: L,
      refreshFormDom: z,
      reRenderForm: te,
      setItemToValGroup: K,
      updateValGroup: we,
      updateFormDataT: tt,
      validate: la,
      reValidate: aa,
      changeLoading: oa,
      getValGroup: il,
      submit: Rt
    }), (d, a) => {
      const A = Z("FormItem"), V = Z("Button"), oe = Z("Form");
      return S(), le(oe, {
        ref_key: "formGroupXRef",
        ref: i,
        model: m(r),
        rules: m(C),
        "label-width": l.labelWidth,
        inline: l.inline,
        "show-message": l.showMessage,
        class: "formXN",
        key: m(b)
      }, {
        default: ne(() => [
          J(A, { style: { display: "none" } }, {
            default: ne(() => a[0] || (a[0] = [
              R("input", { type: "text" }, null, -1)
            ])),
            _: 1,
            __: [0]
          }),
          m(w) ? (S(!0), N(be, { key: 0 }, Te(m(c), (ue, Ce) => (S(), N("div", {
            class: Se([d.teamClass, "formTeamBox" + Ce]),
            key: "formTeamBox" + Ce
          }, [
            (S(!0), N(be, null, Te(ue, (X, ie) => (S(), N(be, {
              key: "formItem" + ie
            }, [
              D(X) ? (S(), le(Vl, {
                key: 0,
                item: X,
                style: re(m(T)),
                "item-style": m(x),
                "val-group": m(r),
                "temp-keys": m(o),
                inline: l.inline,
                disabled: l.disabled,
                "label-width": l.labelWidth,
                "item-width": l.itemWidth,
                "mgr-url": m(p),
                "upload-url": m(g),
                onItemChange: at,
                onReValidate: ol,
                onClearTempKeyItem: W,
                onSelectInputChange: je,
                onAlNameChange: gt,
                onAsyncLabelChange: ut
              }, st({ _: 2 }, [
                Te(I(ue), (Be) => ({
                  name: Be.slotName,
                  fn: ne((Ue) => [
                    Ne(d.$slots, Be.slotName, {
                      valGroup: Ue.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : de("", !0)
            ], 64))), 128))
          ], 2))), 128)) : de("", !0),
          (S(!0), N(be, null, Te(m(c), (ue, Ce) => (S(), N(be, {
            key: "formItem" + Ce
          }, [
            !m(w) && D(ue) ? (S(), le(Vl, {
              key: 0,
              item: ue,
              style: re(m(T)),
              "item-style": m(x),
              "val-group": m(r),
              "temp-keys": m(o),
              inline: l.inline,
              disabled: l.disabled,
              "label-width": l.labelWidth,
              "item-width": l.itemWidth,
              "mgr-url": m(p),
              "upload-url": m(g),
              onItemChange: at,
              onReValidate: ol,
              onClearTempKeyItem: W,
              onSelectInputChange: je,
              onAlNameChange: gt,
              onAsyncLabelChange: ut
            }, st({ _: 2 }, [
              Te(I(d.formData), (X) => ({
                name: X.slotName,
                fn: ne((ie) => [
                  Ne(d.$slots, X.slotName, {
                    valGroup: ie.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : de("", !0)
          ], 64))), 128)),
          l.showLongOkBt ? (S(), le(A, { key: 1 }, {
            default: ne(() => [
              J(V, {
                onClick: Rt,
                style: re(m(x)),
                type: "primary",
                loading: l.btnLoading && m(v),
                disabled: l.disabled
              }, {
                default: ne(() => [
                  ke(j(l.longOkBtTxt || m(O)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : de("", !0),
          R("div", ko, [
            l.showInlineOkBt ? (S(), le(V, {
              key: 0,
              type: "primary",
              class: Se({ inlineFormBtXN: l.inline, okBtnXN: !0 }),
              onClick: Rt,
              loading: l.btnLoading && m(v),
              disabled: l.disabled
            }, {
              default: ne(() => [
                ke(j(l.inlineOkBtTxt || m(O)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : de("", !0),
            l.showInlineClearBt ? (S(), le(V, {
              key: 1,
              onClick: L,
              class: Se({ inlineFormBtXN: l.inline }),
              type: "dashed"
            }, {
              default: ne(() => [
                ke(j(l.inlineClearBtTxt || m(O)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : de("", !0)
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
  setup(t, { expose: s, emit: n }) {
    const e = n, l = t, i = U({ width: l.width }), r = U(!1), c = U(), o = H(() => {
      var P, I;
      if (Array.isArray(l.formData))
        if (Array.isArray(l.formData[0])) {
          let h = [];
          for (let B of l.formData)
            B && (h = h.concat(
              B.filter((L) => (L == null ? void 0 : L.type) === "custom" || (L == null ? void 0 : L.type) === "input" && L.slotName && L.slotPosition)
            ));
          return h;
        } else
          return (I = (P = l.formData) == null ? void 0 : P.filter) == null ? void 0 : I.call(
            P,
            (h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition
          );
      return [];
    });
    function y() {
      return new Promise((P) => {
        var I, h;
        (h = (I = c.value).resetForm) == null || h.call(I).then((B) => {
          P(B);
        });
      });
    }
    function p() {
      return new Promise((P) => {
        var I, h;
        (h = (I = c.value).refreshFormDom) == null || h.call(I).then((B) => {
          P(B);
        });
      });
    }
    function f() {
      return new Promise((P) => {
        var I, h;
        (h = (I = c.value).reRenderForm) == null || h.call(I).then((B) => {
          P(B);
        });
      });
    }
    function u(P, I) {
      var h, B;
      (B = (h = c.value).setItemToValGroup) == null || B.call(h, P, I);
    }
    function v(P, I) {
      var h, B;
      (B = (h = c.value).updateValGroup) == null || B.call(h, P, I);
    }
    function b(P) {
      var I, h;
      (h = (I = c.value).updateFormDataT) == null || h.call(I, P);
    }
    function g() {
      var P, I;
      (I = (P = c.value).validate) == null || I.call(P);
    }
    function _(P) {
      var I, h;
      (h = (I = c.value).reValidate) == null || h.call(I, P);
    }
    function w(P) {
      var I, h;
      P !== void 0 && (r.value = !!P, (h = (I = c.value).changeLoading) == null || h.call(I, r.value));
    }
    function T() {
      var P, I;
      return (I = (P = c.value).getValGroup) == null ? void 0 : I.call(P);
    }
    function x() {
      r.value = !0;
    }
    function C() {
      var P, I;
      (I = (P = c.value).submit) == null || I.call(P);
    }
    function $() {
      e("on-cancel"), $e(() => {
        var P, I;
        r.value = !1, (I = (P = c.value).changeLoading) == null || I.call(P, !1);
      }, 1e3);
    }
    return s({
      resetForm: y,
      refreshFormDom: p,
      reRenderForm: f,
      setItemToValGroup: u,
      updateValGroup: v,
      updateFormDataT: b,
      validate: g,
      reValidate: _,
      changeLoading: w,
      getValGroup: T,
      submit: C,
      close: $
    }), (P, I) => {
      const h = Z("Button");
      return S(), N("div", {
        style: re(m(i)),
        class: "formGroupBoxVM"
      }, [
        J(Pt, rt({
          ref_key: "formRRef",
          ref: c
        }, P.$attrs, {
          "form-data": l.formData,
          "label-width": l.labelWidth,
          "content-width": l.contentWidth,
          "item-width": l.itemWidth,
          btnLoading: l.btnLoading,
          disabled: l.disabled,
          onOnSubmit: x
        }), st({ _: 2 }, [
          Te(m(o), (B) => ({
            name: B.slotName,
            fn: ne(({ valGroup: L }) => [
              Ne(P.$slots, B.slotName, { valGroup: L })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading", "disabled"]),
        pe(R("div", {
          class: "formFooterVM",
          style: re({ marginLeft: l.labelWidth + "px" })
        }, [
          R("div", {
            style: re({ width: l.contentWidth }),
            class: "btnBoxKAL"
          }, [
            l.showOkBt ? (S(), le(h, {
              key: 0,
              onClick: C,
              class: "form-save-btn",
              loading: l.btnLoading && m(r),
              disabled: l.disabled
            }, {
              default: ne(() => [
                ke(j(l.okBtTxt || m(O)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])) : de("", !0),
            l.showCancelBt ? (S(), le(h, {
              key: 1,
              onClick: $,
              class: "form-cancel-btn"
            }, {
              default: ne(() => [
                ke(j(l.cancelBtTxt || m(O)("r.cancel")), 1)
              ]),
              _: 1
            })) : de("", !0)
          ], 4)
        ], 4), [
          [ve, l.showOkBt || l.showCancelBt]
        ])
      ], 4);
    };
  }
}), Zt = /* @__PURE__ */ ce({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => xe().searchFormLabelWidth },
    itemWidth: { default: () => xe().searchFormItemWidth },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(t, { expose: s, emit: n }) {
    const e = n, l = t, i = U(), r = H(() => {
      var x, C;
      if (Array.isArray(l.formData[0])) {
        let $ = [];
        for (let P of l.formData)
          P && ($ = $.concat(
            P.filter((I) => (I == null ? void 0 : I.type) === "custom" || (I == null ? void 0 : I.type) === "input" && I.slotName && I.slotPosition)
          ));
        return $;
      }
      return (C = (x = l.formData) == null ? void 0 : x.filter) == null ? void 0 : C.call(
        x,
        ($) => ($ == null ? void 0 : $.type) === "custom" || ($ == null ? void 0 : $.type) === "input" && $.slotName && $.slotPosition
      );
    });
    function c() {
      return new Promise((x) => {
        var C, $;
        ($ = (C = i.value).resetForm) == null || $.call(C).then(() => {
          x();
        });
      });
    }
    function o() {
      return new Promise((x) => {
        var C, $;
        ($ = (C = i.value).refreshFormDom) == null || $.call(C).then(() => {
          x();
        });
      });
    }
    function y() {
      return new Promise((x) => {
        var C, $;
        ($ = (C = i.value).reRenderForm) == null || $.call(C).then(() => {
          x();
        });
      });
    }
    function p(x, C) {
      var $, P;
      (P = ($ = i.value).setItemToValGroup) == null || P.call($, x, C);
    }
    function f(x, C) {
      var $, P;
      (P = ($ = i.value).updateValGroup) == null || P.call($, x, C);
    }
    function u(x) {
      var C, $;
      ($ = (C = i.value).updateFormDataT) == null || $.call(C, x);
    }
    function v() {
      var x, C;
      (C = (x = i.value).validate) == null || C.call(x);
    }
    function b(x) {
      var C, $;
      ($ = (C = i.value).reValidate) == null || $.call(C, x);
    }
    function g(x) {
      var C, $;
      ($ = (C = i.value).changeLoading) == null || $.call(C, x === void 0 ? !1 : x);
    }
    function _() {
      var x, C;
      return (C = (x = i.value).getValGroup) == null ? void 0 : C.call(x);
    }
    function w(x) {
      e("on-search", x);
    }
    function T() {
      var x, C;
      (C = (x = i.value).submit) == null || C.call(x);
    }
    return Ge(() => {
      const x = i.value.$el;
      x != null && x.parentNode && x.parentNode.addEventListener("keyup", (C) => {
        (C == null ? void 0 : C.keyCode) === 13 && T();
      });
    }), s({
      resetForm: c,
      refreshFormDom: o,
      reRenderForm: y,
      setItemToValGroup: p,
      updateValGroup: f,
      updateFormDataT: u,
      validate: v,
      reValidate: b,
      changeLoading: g,
      getValGroup: _,
      submit: T
    }), (x, C) => (S(), le(Pt, rt({
      ref_key: "formRRef",
      ref: i
    }, x.$attrs, {
      "form-data": l.formData,
      "label-width": l.labelWidth,
      "item-width": l.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": l.showInlineOkBt,
      "inline-ok-bt-txt": m(O)("r.check"),
      "show-inline-clear-bt": l.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: w
    }), st({ _: 2 }, [
      Te(m(r), ($) => ({
        name: $.slotName,
        fn: ne(({ valGroup: P }) => [
          Ne(x.$slots, $.slotName, { valGroup: P })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), _o = /* @__PURE__ */ ce({
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
  setup(t, { expose: s, emit: n }) {
    const e = n, l = t, i = U(), r = U(!1), c = U(!1), o = H(() => {
      var h, B;
      if (Array.isArray(l.formData[0])) {
        let L = [];
        for (let te of l.formData)
          te && (L = L.concat(
            te.filter((z) => (z == null ? void 0 : z.type) === "custom" || (z == null ? void 0 : z.type) === "input" && z.slotName && z.slotPosition)
          ));
        return L;
      }
      return (B = (h = l.formData) == null ? void 0 : h.filter) == null ? void 0 : B.call(
        h,
        (L) => (L == null ? void 0 : L.type) === "custom" || (L == null ? void 0 : L.type) === "input" && L.slotName && L.slotPosition
      );
    });
    function y() {
      return new Promise((h) => {
        var B, L;
        (L = (B = i.value).resetForm) == null || L.call(B).then(() => {
          h();
        });
      });
    }
    function p() {
      return new Promise((h) => {
        var B, L;
        (L = (B = i.value).refreshFormDom) == null || L.call(B).then(() => {
          h();
        });
      });
    }
    function f() {
      return new Promise((h) => {
        var B, L;
        (L = (B = i.value).reRenderForm) == null || L.call(B).then(() => {
          h();
        });
      });
    }
    function u(h, B) {
      var L, te;
      (te = (L = i.value).setItemToValGroup) == null || te.call(L, h, B);
    }
    function v(h, B) {
      var L, te;
      (te = (L = i.value).updateValGroup) == null || te.call(L, h, B);
    }
    function b(h) {
      var B, L;
      (L = (B = i.value).updateFormDataT) == null || L.call(B, h);
    }
    function g() {
      var h, B;
      (B = (h = i.value).validate) == null || B.call(h);
    }
    function _(h) {
      var B, L;
      (L = (B = i.value).reValidate) == null || L.call(B, h);
    }
    function w(h) {
      var B, L;
      h !== void 0 && (c.value = !!h, (L = (B = i.value).changeLoading) == null || L.call(B, c.value));
    }
    function T() {
      var h, B;
      return (B = (h = i.value).getValGroup) == null ? void 0 : B.call(h);
    }
    function x() {
      c.value = !0;
    }
    function C() {
      var h, B;
      l.hideCancelBt ? P() : (B = (h = i.value).submit) == null || B.call(h);
    }
    function $() {
      r.value = !0;
    }
    function P() {
      r.value = !1, $e(() => {
        var h, B;
        c.value = !1, (B = (h = i.value).changeLoading) == null || B.call(h, !1);
      }, 1e3);
    }
    function I(h) {
      e(h ? "on-open" : "on-close");
    }
    return s({
      resetForm: y,
      refreshFormDom: p,
      reRenderForm: f,
      setItemToValGroup: u,
      updateValGroup: v,
      updateFormDataT: b,
      validate: g,
      reValidate: _,
      changeLoading: w,
      getValGroup: T,
      submit: C,
      open: $,
      close: P
    }), (h, B) => {
      const L = Z("Button"), te = Z("Modal");
      return S(), le(te, {
        class: Se(["formModal", { hideFooter: l.hideFooter }]),
        title: l.title || m(O)("r.title"),
        modelValue: m(r),
        "onUpdate:modelValue": B[0] || (B[0] = (z) => De(r) ? r.value = z : null),
        "mask-closable": !1,
        "footer-hide": l.hideFooter,
        width: l.width,
        onOnVisibleChange: I
      }, {
        footer: ne(() => [
          J(L, {
            onClick: C,
            class: "modal-save-btn",
            loading: l.btnLoading && m(c),
            disabled: l.disabled
          }, {
            default: ne(() => [
              ke(j(l.okBtTxt || m(O)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled"]),
          l.hideCancelBt ? de("", !0) : (S(), le(L, {
            key: 0,
            onClick: P,
            class: "modal-cancel-btn"
          }, {
            default: ne(() => [
              ke(j(l.cancelBtTxt || m(O)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: ne(() => [
          J(Pt, rt({
            ref_key: "formRRef",
            ref: i
          }, h.$attrs, {
            "form-data": l.formData,
            "label-width": l.labelWidth,
            btnLoading: l.btnLoading,
            disabled: l.disabled,
            onOnSubmit: x
          }), st({ _: 2 }, [
            Te(m(o), (z) => ({
              name: z.slotName,
              fn: ne(({ valGroup: M }) => [
                Ne(h.$slots, z.slotName, { valGroup: M })
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
    const n = s, e = t, l = U(!0), i = U([]), r = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let c = [];
    const o = H(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), y = H(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    Ve(
      () => e.data,
      (g) => {
        l.value = !1;
        let _ = [];
        p(g, _), i.value = _, Me(function() {
          l.value = !0, e.inlineLeaf && Me(v);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), Ve(
      () => y.value,
      (g) => {
        let _, w = "s";
        if (Array.isArray(e.collectVal) ? (_ = e.collectVal[0] || "", w = "a") : _ = e.collectVal, !_ || JSON.stringify(g) === JSON.stringify(c)) {
          c = [];
          return;
        }
        ot({
          group: i.value,
          condition: (T) => (T == null ? void 0 : T.checked) === !0,
          key: "checked",
          val: !1
        }), ot(w === "a" ? {
          group: i.value,
          condition: (T) => St(g, [_, T == null ? void 0 : T[_]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: i.value,
          condition: (T) => g.indexOf(T == null ? void 0 : T[_]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), Ve(
      () => e.disabled,
      (g) => {
        ot({
          group: i.value,
          condition: (_) => _ && _.disableCheckbox !== g,
          key: "disableCheckbox",
          val: g
        }), e.inlineLeaf && Me(v);
      },
      { immediate: !0 }
    );
    function p(g, _ = []) {
      for (let w of g) {
        let T = !1;
        o.value.length > 1 ? T = Kt(y.value, (C) => C[o.value[0]] === w[o.value[0]]) !== void 0 : T = o.value[0] ? y.value.indexOf(w[o.value[0]]) !== -1 : !1;
        let x = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let C of o.value)
          x[C] = w[C];
        _.push(x), w != null && w.children && w.children.length > 0 && (x.children = [], f(w.children, x.children));
      }
    }
    function f(g, _ = []) {
      for (let w of g) {
        let T = !1;
        o.value.length > 1 ? T = Kt(y.value, (C) => C[o.value[0]] === w[o.value[0]]) !== void 0 : T = o.value[0] ? y.value.indexOf(w[o.value[0]]) !== -1 : !1;
        let x = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let C of o.value)
          x[C] = w[C];
        _.push(x), w != null && w.children && w.children.length > 0 && (x.children = [], p(w.children, x.children));
      }
    }
    function u(g, {
      data: _
    }) {
      let w = "", T = !0;
      if (_.children && _.children.length > 0) {
        for (let x of _.children)
          if (x.children !== void 0) {
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
        g.expand && Me(v);
        return;
      }
      let _ = document.querySelectorAll("#" + r + " .inlineChildXA");
      if (_.length > 0)
        for (let w of _) {
          let T = w == null ? void 0 : w.parentElement, x = T == null ? void 0 : T.nextElementSibling;
          if (!x)
            return;
          if (x.tagName !== "BR") {
            let C = T == null ? void 0 : T.parentElement, $ = document.createElement("br");
            C == null || C.insertBefore($, x);
            const P = $.nextElementSibling;
            if (P) {
              const I = P.children;
              if (I)
                for (let h of I)
                  (h == null ? void 0 : h.className.indexOf("inlineTreeNodeF")) === -1 && h.setAttribute("class", h.className + " inlineTreeNodeF");
            }
          }
        }
    }
    function b(g) {
      let _ = [];
      if (e.leaf) {
        for (let w of g)
          if (!w.children)
            if (Array.isArray(e.collectVal)) {
              let T = {};
              for (let x of e.collectVal)
                T[x] = w[x];
              _.push(T);
            } else
              _.push(w[e.collectVal]);
      } else
        for (let w of g)
          if (Array.isArray(e.collectVal)) {
            let T = {};
            for (let x of e.collectVal)
              T[x] = w[x];
            _.push(T);
          } else
            _.push(w[e.collectVal]);
      c = _, n("update:modelValue", _), n("on-change", fe(_));
    }
    return (g, _) => {
      const w = Z("Tree");
      return m(l) ? (S(), le(w, {
        key: 0,
        id: r,
        class: "checkboxTreeGA",
        data: m(i),
        render: u,
        onOnCheckChange: b,
        onOnToggleExpand: v,
        "show-checkbox": ""
      }, null, 8, ["data"])) : de("", !0);
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
  setup(t, { expose: s, emit: n }) {
    const e = n, l = t;
    let i = U({}), r = U({}), c = U([]), o = U([]), y = U(0), p = U(0);
    const f = H(() => ({ ...l.constSearchDataLeft, ...i.value })), u = H(() => ({ ...l.constSearchDataRight, ...r.value })), v = H(() => y.value < 1), b = H(() => c.value.length < 1), g = H(() => o.value.length < 1), _ = H(() => p.value < 1), w = U(), T = U(), x = U(), C = U();
    function $() {
      w.value.resetForm(), T.value.resetForm(), Fe(i.value) || (i.value = {}), Fe(r.value) || (r.value = {}), x.value.clearSelect(), C.value.clearSelect();
    }
    function P() {
      x.value.search(), C.value.search();
    }
    function I(D) {
      c.value = D;
    }
    function h(D) {
      o.value = D;
    }
    function B(D) {
      var q, Q, se, me, he;
      y.value = ((Q = (q = D == null ? void 0 : D.data) == null ? void 0 : q.page) == null ? void 0 : Q.total) || ((me = (se = D == null ? void 0 : D.data) == null ? void 0 : se.data) == null ? void 0 : me.total) || ((he = D == null ? void 0 : D.data) == null ? void 0 : he.total) || (D == null ? void 0 : D.total) || 0, e("on-data-change-l", D);
    }
    function L(D) {
      var q, Q, se, me, he;
      p.value = ((Q = (q = D == null ? void 0 : D.data) == null ? void 0 : q.page) == null ? void 0 : Q.total) || ((me = (se = D == null ? void 0 : D.data) == null ? void 0 : se.data) == null ? void 0 : me.total) || ((he = D == null ? void 0 : D.data) == null ? void 0 : he.total) || (D == null ? void 0 : D.total) || 0, e("on-data-change-r", D);
    }
    function te(D) {
      typeof l.leftSearchDataFilter == "function" ? i.value = l.leftSearchDataFilter(D) : i.value = D;
    }
    function z(D) {
      typeof l.rightSearchDataFilter == "function" ? r.value = l.rightSearchDataFilter(D) : r.value = D;
    }
    function M() {
      l.addUrl && F("add");
    }
    function ee() {
      l.deleteUrl && F("delete");
    }
    function W() {
      l.addAllUrl && l.addUrl && F("addAll");
    }
    function k() {
      l.deleteAllUrl && F("deleteAll");
    }
    function F(D) {
      let q, Q, se = {}, me = "";
      switch (D) {
        case "add":
          q = l.addMethod, Q = l.addUrl, se = l.addParamsHandle(o.value), me = O("r.add");
          break;
        case "delete":
          q = l.deleteMethod, Q = l.deleteUrl, se = l.deleteParamsHandle(c.value), me = O("r.remove");
          break;
        case "addAll":
          q = l.addAllMethod, Q = l.addAllUrl, se = l.addAllParamsHandle(u.value), me = O("r.addAll");
          break;
        case "deleteAll":
          q = l.deleteAllMethod, Q = l.deleteAllUrl, se = l.deleteAllParamsHandle(f.value), me = O("r.removeAll");
          break;
      }
      Q && q && We[q](Q, se, null, [], { spin: !0 }, !1).then((he) => {
        (he == null ? void 0 : he.code) === 0 ? (ze(me + O("r.success"), (he == null ? void 0 : he.message) || "", "success"), x.value && x.value.getTableData(), C.value && C.value.getTableData(), e("transferred")) : ze(me + O("r.failed"), (he == null ? void 0 : he.message) || "", "error");
      }).catch(() => {
        ze(me + O("r.error"), "", "error");
      });
    }
    return s({
      reset: $,
      search: P
    }), (D, q) => {
      const Q = Z("Icon"), se = Z("Button");
      return S(), N("div", So, [
        R("div", Co, [
          R("div", To, [
            R("div", Bo, [
              R("div", xo, j(l.titleLeft || m(O)("r.added")), 1),
              J(qt, null, {
                default: ne(() => [
                  J(Zt, {
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
              J(Yt, {
                ref_key: "lTabRef",
                ref: x,
                columns: l.leftTableColumns,
                url: l.leftTableUrl,
                "search-data": m(f),
                onOnSelectionChange: I,
                onOnDataChange: B,
                "init-data": !!(m(Fe)(l.constSearchDataLeft) && l.leftTableUrl),
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
          J(se, {
            class: "middleBtLLL",
            type: "default",
            onClick: k,
            disabled: m(v)
          }, {
            default: ne(() => [
              ke(j(m(O)("r.removeAll")) + " ", 1),
              J(Q, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          J(se, {
            class: "middleBtLLL",
            type: "default",
            onClick: ee,
            disabled: m(b)
          }, {
            default: ne(() => [
              ke(j(m(O)("r.remove")) + " ", 1),
              J(Q, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          J(se, {
            class: "middleBtLLL",
            type: "primary",
            onClick: M,
            disabled: m(g)
          }, {
            default: ne(() => [
              J(Q, { type: "ios-arrow-back" }),
              ke(" " + j(m(O)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          J(se, {
            class: "middleBtLLL",
            type: "primary",
            onClick: W,
            disabled: m(_)
          }, {
            default: ne(() => [
              J(Q, { type: "ios-arrow-back" }),
              ke(" " + j(m(O)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        R("div", Ao, [
          R("div", Io, [
            R("div", Po, [
              R("div", Ro, j(l.titleRight || m(O)("r.notAdded")), 1),
              J(qt, null, {
                default: ne(() => [
                  J(Zt, {
                    ref_key: "rightFormRef",
                    ref: T,
                    "form-data": l.formDataRight,
                    "form-rules": l.formRulesRight,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: z
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            R("div", $o, [
              J(Yt, {
                ref_key: "rTabRef",
                ref: C,
                columns: l.rightTableColumns,
                url: l.rightTableUrl,
                "search-data": m(u),
                onOnSelectionChange: h,
                onOnDataChange: L,
                "init-data": !!(m(Fe)(l.constSearchDataRight) && l.rightTableUrl),
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
}), Fo = { class: "boxLPA" }, Do = { class: "headerJ" }, No = { class: "firstT borderBoxAS" }, Ko = { class: "secondT borderBoxAS" }, zo = { class: "firstCol borderBoxAS" }, Uo = { class: "secondCol borderBoxAS" }, Eo = /* @__PURE__ */ ce({
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
    const n = t, e = s, l = U([]), i = H(() => {
      var f;
      let y = fe(n.data), p = fe(l.value);
      for (let u of y) {
        let v = 0;
        if (u != null && u.children && !Fe(u.children))
          for (let b of u.children) {
            for (let g = 0, _ = p == null ? void 0 : p.length; g < _; g++)
              if (Array.isArray(n.collectVal)) {
                let w = !0;
                for (let T of n.collectVal)
                  if (((f = p[g]) == null ? void 0 : f[T]) !== (b == null ? void 0 : b[T])) {
                    w = !1;
                    break;
                  }
                if (w) {
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
    Ve(
      () => n.modelValue,
      (y, p) => {
        yt(l.value, y) || yt(y, p) || (l.value = y);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function r(y, p) {
      if (y.children)
        for (let f of y.children)
          f.checked = p;
      c();
    }
    function c() {
      o(i.value, !0);
    }
    function o(y, p) {
      let f = [];
      for (let u of y) {
        if (!p && !n.leaf && u.checked && u.indeterminate === !1)
          if (Array.isArray(n.collectVal)) {
            let v = {};
            for (let b of n.collectVal)
              v[b] = u[b];
            f.push(v);
          } else Y(n.collectVal) === "String" && f.push(u[n.collectVal]);
        if (u.children) {
          for (let v of u.children)
            if (v.checked)
              if (Array.isArray(n.collectVal)) {
                let b = {};
                for (let g of n.collectVal)
                  b[g] = v[g];
                f.push(b);
              } else Y(n.collectVal) === "String" && f.push(v[n.collectVal]);
        }
      }
      p ? (l.value = f, n.leaf ? (e("update:modelValue", f), e("on-change", fe(f))) : Me(function() {
        o(i.value);
      })) : (e("update:modelValue", f), e("on-change", fe(f)));
    }
    return (y, p) => {
      const f = Z("Checkbox");
      return S(), N("div", Fo, [
        R("div", Do, [
          R("div", No, j(y.firstTitle || m(O)("r.level.1")), 1),
          R("div", Ko, j(y.secondTitle || m(O)("r.level.2")), 1)
        ]),
        (S(!0), N(be, null, Te(m(i), (u, v) => (S(), N("div", {
          class: "bodyJ",
          key: "checkboxJ" + v
        }, [
          R("div", zo, [
            J(f, {
              modelValue: u.checked,
              "onUpdate:modelValue": (b) => u.checked = b,
              indeterminate: u.indeterminate,
              onOnChange: (b) => r(u, b),
              disabled: y.disabled
            }, {
              default: ne(() => [
                ke(j(u[y.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          R("div", Uo, [
            (S(!0), N(be, null, Te(u.children, (b, g) => (S(), N("div", {
              class: "secItem",
              key: "secItem" + g
            }, [
              J(f, {
                modelValue: b.checked,
                "onUpdate:modelValue": (_) => b.checked = _,
                onOnChange: c,
                disabled: y.disabled
              }, {
                default: ne(() => [
                  ke(j(b[y.label]), 1)
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
    const n = s, e = t, l = U([]), i = H(() => {
      let p = fe(e.data), f = fe(l.value);
      for (let u of p) {
        let v = 0, b = 0;
        if (u != null && u.children && !Fe(u.children))
          for (let g of u.children) {
            let _ = 0;
            if (g.children && !Fe(g.children))
              for (let w of g.children) {
                for (let T = 0, x = f.length; T < x; T++)
                  if (Array.isArray(e.collectVal)) {
                    let C = !0;
                    for (let $ of e.collectVal)
                      if (f[T][$] !== w[$]) {
                        C = !1;
                        break;
                      }
                    if (C) {
                      w.checked = !0, _++, f.splice(T, 1);
                      break;
                    }
                  } else if (f[T] === w[e.collectVal]) {
                    w.checked = !0, _++, f.splice(T, 1);
                    break;
                  }
                !w.checked && (w.checked = !1);
              }
            _ === 0 ? (g.checked = !1, g.indeterminate = !1) : g.children && _ === g.children.length ? (g.checked = !0, g.indeterminate = !1, v++) : (g.checked = !1, g.indeterminate = !0, b++);
          }
        v === 0 && b === 0 ? (u.checked = !1, u.indeterminate = !1) : u.children && v === u.children.length ? (u.checked = !0, u.indeterminate = !1) : (u.checked = !1, u.indeterminate = !0);
      }
      return p;
    });
    Ve(
      () => e.modelValue,
      (p, f) => {
        yt(l.value, p) || yt(p, f) || (l.value = p);
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
            for (let v of u.children)
              v.checked = f;
      }
      o();
    }
    function c(p, f) {
      if (p.children)
        for (let u of p.children)
          u.checked = f;
      o();
    }
    function o() {
      y(i.value, !0);
    }
    function y(p, f) {
      let u = [];
      for (let v of p) {
        if (!f && !e.leaf && (v != null && v.checked) && v.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let b = {};
            for (let g of e.collectVal)
              b[g] = v[g];
            u.push(b);
          } else Y(e.collectVal) === "String" && u.push(v[e.collectVal]);
        if (v != null && v.children)
          for (let b of v.children) {
            if (!f && !e.leaf && b.checked && b.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let g = {};
                for (let _ of e.collectVal)
                  g[_] = b[_];
                u.push(g);
              } else Y(e.collectVal) === "String" && u.push(b[e.collectVal]);
            if (b.children) {
              for (let g of b.children)
                if (g.checked)
                  if (Array.isArray(e.collectVal)) {
                    let _ = {};
                    for (let w of e.collectVal)
                      _[w] = g[w];
                    u.push(_);
                  } else Y(e.collectVal) === "String" && u.push(g[e.collectVal]);
            }
          }
      }
      f ? (l.value = u, e.leaf ? (n("update:modelValue", u), n("on-change", fe(u))) : Me(function() {
        y(i.value);
      })) : (n("update:modelValue", u), n("on-change", fe(u)));
    }
    return (p, f) => {
      const u = Z("Checkbox");
      return S(), N("div", Go, [
        R("div", Ho, [
          R("div", Wo, j(p.firstTitle || m(O)("r.level.1")), 1),
          R("div", jo, j(p.secondTitle || m(O)("r.level.2")), 1),
          R("div", qo, j(p.thirdTitle || m(O)("r.level.3")), 1)
        ]),
        (S(!0), N(be, null, Te(m(i), (v, b) => (S(), N("div", {
          class: "bodyF",
          key: "checkboxJ" + b
        }, [
          R("div", Xo, [
            J(u, {
              modelValue: v.checked,
              "onUpdate:modelValue": (g) => v.checked = g,
              indeterminate: v.indeterminate,
              onOnChange: (g) => r(v, g),
              disabled: p.disabled
            }, {
              default: ne(() => [
                ke(j(v[p.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          R("div", Jo, [
            (S(!0), N(be, null, Te(v.children, (g, _) => (S(), N("div", {
              class: "rightBoxInner",
              key: "secItem" + _
            }, [
              R("div", Yo, [
                J(u, {
                  modelValue: g.checked,
                  "onUpdate:modelValue": (w) => g.checked = w,
                  indeterminate: g.indeterminate,
                  onOnChange: (w) => c(g, w),
                  disabled: p.disabled
                }, {
                  default: ne(() => [
                    ke(j(g[p.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              R("div", Qo, [
                (S(!0), N(be, null, Te(g.children, (w, T) => (S(), N("div", {
                  class: "thirdItem",
                  key: "thirdItem" + T
                }, [
                  J(u, {
                    modelValue: w.checked,
                    "onUpdate:modelValue": (x) => w.checked = x,
                    onOnChange: o,
                    disabled: p.disabled
                  }, {
                    default: ne(() => [
                      ke(j(w[p.label]), 1)
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
    const s = t, n = H(() => {
      let l = {
        width: s.fitToContent ? "fit-content" : e(s.width),
        height: s.fitToContent ? "fit-content" : e(s.height)
      };
      return s.inline && (l.display = "inline-block"), l;
    });
    function e(l) {
      const i = /^\d+$/;
      return typeof l == "number" || typeof l == "string" && i.test(l) ? l + "px" : l;
    }
    return (l, i) => (S(), N("div", {
      style: re(m(n))
    }, [
      R("div", {
        class: Se(["wellCardR", { flexColumnBox: !s.fitToContent }])
      }, [
        R("div", {
          class: Se(["panelHeader", { notGrow: !s.fitToContent }])
        }, [
          R("div", ei, j(s.title || m(O)("r.title")), 1),
          R("div", ti, [
            Ne(l.$slots, "bts")
          ])
        ], 2),
        s.fitToContent ? (S(), N("div", li, [
          Ne(l.$slots, "default")
        ])) : (S(), N("div", ai, [
          R("div", ni, [
            Ne(l.$slots, "default")
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
    let l = U(1), i = 1;
    const r = U(""), c = ht([]);
    let o = {}, y = !0, p = !1;
    const f = "scm" + Math.random(), u = H(() => r.value ? O("r.searchFor") + r.value : e.placeholder || O("r.pInput")), v = H({
      get() {
        return e.modelValue ?? "";
      },
      set(P) {
        if (n("update:modelValue", P ?? ""), e.collectLabel && P !== void 0) {
          let I = {};
          for (let h of c.value)
            if (h[e.optionsValKey] === P) {
              I = JSON.parse(JSON.stringify(h));
              break;
            }
          n("on-change", I);
        }
      }
    }), b = H(() => e.searchKey ? {
      ...e.searchData,
      current: l.value,
      [e.searchKey]: r.value
    } : {
      ...e.searchData,
      current: l.value
    });
    Ve(
      () => e.getOptions,
      (P) => {
        P ? y && $() : w();
      },
      { immediate: !0 }
    ), Ve(
      () => e.url,
      (P) => {
        P && (p = !0);
      }
    );
    const g = U();
    function _() {
      g.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", x);
    }
    function w() {
      y || (v.value = "", y = !0, r.value = "", c.value = [], l.value = 1, i = 1, o = {}, p = !1);
    }
    function T(P) {
      for (let I of c.value)
        if ((I == null ? void 0 : I.label) === P)
          return !0;
      return !1;
    }
    const x = At(function(P) {
      var h;
      const I = (h = P == null ? void 0 : P.target) == null ? void 0 : h.value;
      T(I) || (Re(I) ? (p ? w() : (Fe(o) && (o.current = l.value, o.pages = i, o.options = fe(c.value)), Re(v.value) && (v.value = "")), r.value = String(I), c.value = [], l.value = 1, y = !0, $()) : p ? (w(), $()) : (v.value = "", r.value = "", o.current ? (l.value = o.current, i = o.pages, c.value = fe(o.options), o = {}) : $()));
    }, 600);
    function C() {
      p && w(), l.value < i ? (++l.value, Me(function() {
        $();
      })) : cl.warning({
        background: !0,
        content: O("r.noMore")
      });
    }
    function $() {
      return new Promise((P, I) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Re(r.value)) {
            P(!1);
            return;
          }
          We.get(e.url, b.value).then((h) => {
            var te;
            y = !1;
            let B = [];
            (te = h == null ? void 0 : h.data) != null && te.records ? (B = h.data.records, i = h.data.pages) : h != null && h.data && Y(h.data) === "Array" ? (B = h.data, i = h.pages) : h != null && h.data && Y(h.data) === "Object" && (B = [h.data], i = 1), typeof e.optionFilter == "function" && Y(e.optionFilter) === "Function" && (B = e.optionFilter(B)), Fe(B) || (B = B.map((z, M) => {
              let ee = O("r.optionLabel") + M;
              if (Array.isArray(e.optionsLabelKey)) {
                let W = [];
                for (let k = 1, F = e.optionsLabelKey.length; k < F; k++)
                  W.push(z[e.optionsLabelKey[k]]);
                ee = `${z[e.optionsLabelKey[0]]}(${String(W)})`;
              } else Al(e.optionsLabelKey) && (ee = z[e.optionsLabelKey]);
              if (e.collectLabel) {
                let W = fe(z);
                return delete W.value, delete W.label, {
                  value: z[e.optionsValKey],
                  label: ee,
                  ...W
                };
              }
              return {
                value: z[e.optionsValKey],
                label: ee
              };
            })), c.value.push(...B);
            let L = {};
            c.value = c.value.filter((z) => L[z == null ? void 0 : z.value] ? !1 : (L[z == null ? void 0 : z.value] = !0, !0)), Me(function() {
              n("update-option-finish");
            }), P(!0);
          }).catch(() => {
            cl.error(O("r.getDataError")), I(O("r.getDataError"));
          });
        } else
          P(!1);
      });
    }
    return Ge(_), (P, I) => {
      const h = Z("Option"), B = Z("Select"), L = Ot("loadmore");
      return pe((S(), le(B, rt({
        modelValue: m(v),
        "onUpdate:modelValue": I[0] || (I[0] = (te) => De(v) ? v.value = te : null),
        ref_key: "selectScrollSourceRef",
        ref: g,
        "transfer-class-name": f
      }, P.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: m(u),
        disabled: P.disabled
      }), {
        default: ne(() => [
          (S(!0), N(be, null, Te(m(c), (te, z) => (S(), le(h, {
            key: "op" + z,
            value: te == null ? void 0 : te.value,
            label: te == null ? void 0 : te.label,
            disabled: te == null ? void 0 : te.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [L, C, f]
      ]);
    };
  }
}), Sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: Xl,
  AsyncCascader: ql,
  BtTablePage: Yt,
  CheckboxGroupThreeClass: Zo,
  CheckboxGroupTwoClass: Eo,
  CheckboxTree: Vo,
  Date: Zl,
  EditorPro: ea,
  FormGroup: wo,
  FormModal: _o,
  FormR: Pt,
  FullPop: Da,
  HeaderBt: Pl,
  Hello: Ka,
  IconTxtBtn: Ut,
  InputMap: jl,
  MonthRange: Ql,
  Page404: Ga,
  PagePro: Hl,
  SearchForm: Zt,
  SelectInput: Wl,
  SelectScrollMore: ii,
  ShowHidePanel: qt,
  ShowHidePanelB: An,
  SideMenu: mn,
  SideMenuPro: Tn,
  TableIconBtn: Nl,
  TableSearch: In,
  TableSetting: Ul,
  TransferBox: Mo,
  UploadGroup: Yl,
  WellCard: oi
}, Symbol.toStringTag, { value: "Module" })), si = { class: "a4Line aL notPrint" }, ri = { class: "a4Line aR notPrint" }, ui = { class: "a4Line bL notPrint" }, di = { class: "a4Line bR notPrint" }, ci = { class: "topsL notPrint" }, fi = { class: "topsLTitle" }, pi = { class: "topsLBtn" }, mi = { class: "topsLHelp" }, hi = { key: 0 }, yi = { key: 1 }, vi = { key: 2 }, gi = ["innerHTML"], bi = /* @__PURE__ */ ce({
  __name: "PrintModal",
  setup(t) {
    const s = tl(), n = U(), e = U(!1), l = U(!1), i = U(!1), r = U(100), c = U(), o = U(715), y = U(!1), p = U(), f = "tablePrint_" + Date.now().toString(), u = U(""), v = U([]), b = U([]), g = U(!1), _ = H(() => ({
      width: o.value + "px"
    })), w = () => {
      p.value && window.sessionStorage.removeItem("print_" + p.value), window.sessionStorage.removeItem(f), window.close();
    }, T = () => {
      y.value && (y.value = !1);
    }, x = () => {
      g.value = !0;
    }, C = (B) => {
      g.value && (o.value = (B == null ? void 0 : B.layerX) - 20);
    }, $ = () => {
      g.value && (g.value = !1);
    }, P = () => {
      y.value = !1;
      let B = window.setTimeout(() => {
        window.clearTimeout(B), window.print();
      }, 100);
    }, I = (B) => {
      if (typeof c.value == "function")
        return c.value(B);
    }, h = () => {
      var B, L, te, z, M, ee, W;
      if (p.value = (B = s == null ? void 0 : s.params) == null ? void 0 : B.isFrom, p.value) {
        let k = window.sessionStorage.getItem("print_" + p.value);
        if (k) {
          const F = JSON.parse(k);
          if (!F) {
            e.value = !0;
            return;
          }
          if (v.value = F.columns, b.value = F.data, n.value = F.title, u.value = ((L = F.config) == null ? void 0 : L.customClass) || "", l.value = ((te = F.config) == null ? void 0 : te.domPrint) || !1, i.value = ((z = F.config) == null ? void 0 : z.autoPrint) || !1, r.value = ((M = F.config) == null ? void 0 : M.autoPrintTimeout) || 100, o.value = ((ee = F.config) == null ? void 0 : ee.width) || 715, document.title = (n.value || O("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString(), (W = F.funcArr) != null && W.length) {
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
      if (i.value) {
        let B = window.setTimeout(() => {
          window.clearTimeout(B), P();
        }, r.value);
      }
      document.addEventListener("click", T), document.addEventListener("mousemove", C), document.addEventListener("mouseup", $);
    }), h(), (B, L) => {
      const te = Z("Table");
      return S(), N("div", {
        class: Se(["tablePrintModal", [m(u)]])
      }, [
        pe(R("div", { class: "msgL notPrint" }, j(m(O)("r.printGuide.9")), 513), [
          [ve, m(e)]
        ]),
        pe(R("div", si, [
          R("p", null, j(m(O)("r.printGuide.7")), 1),
          L[2] || (L[2] = ke()),
          R("p", null, j(m(O)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        pe(R("div", ri, [
          R("p", null, j(m(O)("r.printGuide.7")), 1),
          L[3] || (L[3] = ke()),
          R("p", null, j(m(O)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        pe(R("div", ui, [
          R("p", null, j(m(O)("r.printGuide.8")), 1),
          L[4] || (L[4] = ke()),
          R("p", null, j(m(O)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        pe(R("div", di, [
          R("p", null, j(m(O)("r.printGuide.8")), 1),
          L[5] || (L[5] = ke()),
          R("p", null, j(m(O)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        pe(R("div", ci, [
          R("div", fi, j(m(n) || m(O)("r.print")), 1),
          R("div", pi, [
            J(Ut, {
              icon: "md-help-circle",
              name: m(O)("r.help"),
              onClick: L[0] || (L[0] = Dt((z) => y.value = !m(y), ["stop"]))
            }, null, 8, ["name"]),
            J(Ut, {
              icon: "md-print",
              name: m(O)("r.preview"),
              onClick: P
            }, null, 8, ["name"]),
            m(l) ? de("", !0) : (S(), le(Ul, {
              key: 0,
              modelValue: m(v),
              "onUpdate:modelValue": L[1] || (L[1] = (z) => De(v) ? v.value = z : null),
              "s-key": f,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            J(Nl, {
              icon: "md-close",
              onClick: w,
              title: m(O)("r.close")
            }, null, 8, ["title"])
          ]),
          pe(R("div", mi, [
            m(l) ? de("", !0) : (S(), N("p", hi, [
              L[6] || (L[6] = R("span", null, "1. ", -1)),
              R("span", null, j(m(O)("r.printGuide.1")), 1)
            ])),
            m(l) ? de("", !0) : (S(), N("p", yi, [
              L[7] || (L[7] = R("span", null, "2. ", -1)),
              R("span", null, j(m(O)("r.printGuide.2")), 1)
            ])),
            m(l) ? (S(), N("p", vi, [
              L[8] || (L[8] = R("span", null, "1. ", -1)),
              R("span", null, j(m(O)("r.printGuide.10")), 1)
            ])) : de("", !0),
            R("p", null, [
              R("span", null, j(m(l) ? "2. " : "3. "), 1),
              R("span", null, j(m(O)("r.printGuide.3")), 1)
            ]),
            R("p", null, [
              R("span", null, j(m(l) ? "3. " : "4. "), 1),
              R("span", null, j(m(O)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ve, m(y)]
          ])
        ], 512), [
          [ve, !m(e)]
        ]),
        m(l) ? (S(), N("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: re(m(_))
        }, [
          R("div", {
            class: "settingLine",
            onMousedown: Dt(x, ["stop"])
          }, null, 32)
        ], 4)) : de("", !0),
        m(l) ? (S(), N("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: m(b),
          style: re(m(_))
        }, null, 12, gi)) : de("", !0),
        m(l) ? de("", !0) : pe((S(), le(te, {
          key: 2,
          class: "tablePW",
          columns: m(v),
          data: m(b),
          "span-method": I,
          border: ""
        }, null, 8, ["columns", "data"])), [
          [ve, !m(e)]
        ])
      ], 2);
    };
  }
});
let Ze = null;
function Cl() {
  document.documentElement.style.setProperty("overflow", "auto");
  const s = document.createElement("style");
  s.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(s);
}
function ki(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: bi
  })), Ze = t, location.pathname.indexOf("tablePrint") > -1 ? (Ze.push(location.pathname), Cl()) : location.hash.indexOf("tablePrint") > -1 && (Ze.push(location.hash.replace(/^#/, "")), Cl());
}
function ta(t) {
  return Y(t) === "Object" && (t.hasOwnProperty("width") || (t.width = t.minWidth || 100), t.hasOwnProperty("minWidth") && delete t.minWidth, t.sortable = !1, delete t.__id, t.resizable = !0, t.children && Y(t.children) === "Array" && (t.children = t.children.map(ta))), t;
}
function wi(t, s, n, e) {
  var p, f, u;
  if (!Ze)
    return;
  let l;
  if (!(e != null && e.domPrint)) {
    let v = fe(
      t.filter((b) => (b == null ? void 0 : b.key) || (b == null ? void 0 : b.children))
    );
    v[0].type === "selection" && v.shift(), v.length ? l = v.map(ta) : l = [];
  }
  const i = [];
  e && Object.entries(e).forEach(([v, b]) => {
    typeof b == "function" && (i.push({
      name: v,
      func: b.toString().replaceAll(/[\r\n\t]/g, "").replaceAll(/\s{2,}/g, " ")
    }), delete e[v]);
  });
  let r = (f = (p = Ze == null ? void 0 : Ze.currentRoute) == null ? void 0 : p.value) == null ? void 0 : f.fullPath;
  r && (r = (u = r.replace) == null ? void 0 : u.call(r, /\//g, "_"));
  let c = {
    data: s,
    title: n,
    config: e,
    funcArr: i
  };
  e != null && e.domPrint || (c.columns = l), window.sessionStorage.setItem("print_" + r, JSON.stringify(c));
  const o = Ze.resolve({
    name: "tablePrint",
    params: { isFrom: r }
  });
  window.open(o == null ? void 0 : o.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const nl = {
  print: wi,
  init: ki
};
function _i(t = "", s = "", n = {}) {
  n.domPrint = !0, n.width || (n.width = 715), nl.print([], t, s, n);
}
function Vi(t) {
  var i, r;
  const s = (...c) => Je.apply(this, c), n = s("r.closePreview"), e = s("r.fullImg");
  let l = "previewImg" + Math.floor(Math.random() * 1e7);
  (r = (i = Qe) == null ? void 0 : i.info) == null || r.call(i, {
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (c) => Ie(
      "div",
      {
        class: "previewModal",
        id: l
      },
      [
        Ie(
          "div",
          {
            class: "previewModalInner"
          },
          [
            Ie("img", {
              src: t,
              alt: e
            }),
            Ie(_a, {
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
  }), $e(() => {
    var y, p, f, u, v, b;
    const c = (u = (f = (p = (y = document.getElementById(l)) == null ? void 0 : y.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : f.parentElement) == null ? void 0 : u.parentElement, o = (b = (v = document.getElementById(l)) == null ? void 0 : v.parentElement) == null ? void 0 : b.nextSibling;
    c && (c.style.height = "0"), c && (c.style.padding = "0"), o && (o.style.display = "none");
  }, 10);
}
const Si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: We,
  $swal: ze,
  $swalConfirm: zl,
  domPrint: _i,
  fullScreenImgByDom: mt,
  fullScreenImgPreview: Vi,
  messageBox: Jt,
  setInterval: fn,
  setTimeout: $e,
  tablePrint: nl
}, Symbol.toStringTag, { value: "Module" }));
(() => {
  if (window.wangeditorMenuInit)
    return;
  class t {
    constructor() {
      dt(this, "title");
      dt(this, "iconSvg");
      dt(this, "tag");
      dt(this, "alwaysEnable");
      this.title = Je("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
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
      var o, y, p, f, u, v, b, g, _;
      const l = document.getElementById("editor-preview");
      let i = localStorage.getItem("editorPreviewW") || 300, r = localStorage.getItem("editorPreviewH") || 500;
      const c = (o = e == null ? void 0 : e.getHtml) == null ? void 0 : o.call(e);
      if (l) {
        let w = (v = (u = (f = (p = (y = l.children) == null ? void 0 : y[0]) == null ? void 0 : p.children) == null ? void 0 : f[1]) == null ? void 0 : u.children) == null ? void 0 : v[0], T = (_ = (g = (b = l.children) == null ? void 0 : b[0]) == null ? void 0 : g.children) == null ? void 0 : _[1];
        w && (w.innerHTML = c, w.style.width = i + "px"), T && (T.style.height = r + "px"), l.style.display = "block";
      } else {
        const w = document.body, T = document.createElement("div");
        T.setAttribute("id", "editor-preview"), T.setAttribute("class", "editor-preview-mask"), T.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${i}' min='200'><span>高</span><input type='number' value='${r}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let x = T.children[0].children[1], C = T.children[0].children[1].children[0], $ = T.children[0].children[0].children[0].children[1];
        const P = 40, I = 70, h = (z) => {
          var W;
          if ((z == null ? void 0 : z.type) === "keyup") {
            let k = !1;
            if (z.key && (k = z.key !== "Enter"), k)
              return;
          }
          let M = (W = z == null ? void 0 : z.target) == null ? void 0 : W.value;
          if (M = Number(M), C.style && C.style.width === M + "px")
            return;
          const ee = w.clientWidth;
          M < 250 ? (M = 250, z.target.value = 250) : M > ee - P && (M = ee - P, z.target.value = ee - P), C.style.width = M + "px", localStorage.setItem("editorPreviewW", M);
        };
        $.addEventListener("blur", h), $.addEventListener("keyup", h);
        let B = T.children[0].children[0].children[0].children[3];
        const L = (z) => {
          var W;
          if ((z == null ? void 0 : z.type) === "keyup") {
            let k = !1;
            if (z.key && (k = z.key !== "Enter"), k)
              return;
          }
          let M = (W = z == null ? void 0 : z.target) == null ? void 0 : W.value;
          if (M = Number(M), x.style && x.style.height === M + "px")
            return;
          const ee = w.clientHeight;
          M < 300 ? (M = 300, z.target.value = 300) : M > ee - I && (M = ee - I, z.target.value = ee - I), x.style.height = M + "px", localStorage.setItem("editorPreviewH", M);
        };
        B.addEventListener("blur", L), B.addEventListener("keyup", L), T.children[0].children[0].children[1].addEventListener("click", () => {
          T.style.display = "none";
        }), C.innerHTML = c, C.style.width = i + "px", x.style.height = r + "px", w.append(T);
      }
    }
  }
  const s = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  Ba.registerMenu(s), window.wangeditorMenuInit = !0;
})();
const Wi = Tt.use, ji = Tt.i18n, Tl = {
  ...Si,
  ...sn
}, Ci = {
  install(t) {
    t.component("JsonViewer", xa);
  }
}, Ti = function(t, s = {}) {
  We.init(s.useStore || s.store, t), Ci.install(t), s.locale && Tt.use(s.locale), s.i18n && Tt.i18n(s.i18n), s.router && (cn(s.router), nl.init(s.router)), s.amap && Jn(s.amap), s.notRegistryGlobal || (Object.keys(Sl).forEach((n) => {
    t.component(n) || t.component(n, Sl[n]);
  }), Object.keys(Tl).forEach((n) => {
    t.config.globalProperties[n] = Tl[n];
  })), t.directive("has") || t.directive("has", (n, e) => {
    e.value && !ll(e.value) && (n.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", {
    mounted(n, e) {
      var i;
      let l = n;
      e.arg && (l = (i = document.getElementsByClassName(e.arg)) == null ? void 0 : i[0]), l && l.addEventListener("scroll", function() {
        l.scrollTop > 0 && l.scrollHeight - l.scrollTop <= l.clientHeight && e.value();
      });
    }
  }), t.directive("clickOutside") || t.directive("clickOutside", Kl), t.config.globalProperties.fontSizeBase = 14, t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.btTablePageAlign = "center", t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !0, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, qi = { install: Ti };
export {
  We as $fetch,
  ze as $swal,
  zl as $swalConfirm,
  Xl as AlCascaderMC,
  ql as AsyncCascader,
  Yt as BtTablePage,
  Zo as CheckboxGroupThreeClass,
  Eo as CheckboxGroupTwoClass,
  Vo as CheckboxTree,
  Zl as Date,
  ea as EditorPro,
  wo as FormGroup,
  _o as FormModal,
  Pt as FormR,
  Da as FullPop,
  Pl as HeaderBt,
  Ka as Hello,
  Ut as IconTxtBtn,
  jl as InputMap,
  Ql as MonthRange,
  Ga as Page404,
  Hl as PagePro,
  Zt as SearchForm,
  Wl as SelectInput,
  ii as SelectScrollMore,
  qt as ShowHidePanel,
  An as ShowHidePanelB,
  mn as SideMenu,
  Tn as SideMenuPro,
  Nl as TableIconBtn,
  In as TableSearch,
  Ul as TableSetting,
  Mo as TransferBox,
  Yl as UploadGroup,
  oi as WellCard,
  Gt as clearObj,
  an as dataFilterOrToUrl,
  Ya as decimalDigitsLimit,
  qi as default,
  on as directivesComponent,
  _i as domPrint,
  $l as downloadFileByFormSubmit,
  Fn as downloadFileReaderFile,
  Gi as emptyInput,
  Dn as fakeALinkClick,
  Qa as fileExport,
  _t as findCollection,
  Xt as findPath,
  qa as formDataHeadConfig,
  mt as fullScreenImgByDom,
  Vi as fullScreenImgPreview,
  Za as getColumnsKeys,
  yl as getFileSrc,
  El as getFileTypeByName,
  vl as getFileTypeIconByName,
  Nn as getStringWidth,
  ja as has,
  ll as hasPermission,
  Ei as htmlDecode,
  Ui as htmlEncode,
  nn as htmlPrint,
  ji as i18n,
  Ti as install,
  Et as isClient,
  tn as isEmptyValue,
  ft as isImgByFile,
  Fl as isNaN,
  en as isNumberValue,
  Re as isValidValue,
  Wi as locale,
  Jt as messageBox,
  Y as myTypeof,
  Ja as oneOf,
  Ht as removeEmptyValue,
  fn as setInterval,
  $e as setTimeout,
  ot as setValByOption,
  qe as setValue,
  al as siblingElems,
  Hi as stopBubbling,
  ln as stringLength,
  nl as tablePrint,
  Xa as toFormData,
  Mn as toHump,
  Rl as toLine,
  Ml as tooltipManual,
  Bt as trimObj
};
//# sourceMappingURL=plugRQw.js.map
