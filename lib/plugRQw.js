var ra = Object.defineProperty;
var ua = (t, s, n) => s in t ? ra(t, s, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[s] = n;
var dt = (t, s, n) => ua(t, typeof s != "symbol" ? s + "" : s, n);
import { getCurrentInstance as Ot, defineComponent as ce, resolveComponent as te, createElementBlock as N, openBlock as T, normalizeStyle as re, normalizeClass as we, createBlock as le, createCommentVNode as ue, renderSlot as Ne, ref as E, computed as W, withDirectives as fe, unref as m, createElementVNode as P, createVNode as Q, toDisplayString as q, withCtx as ne, createTextVNode as ke, vShow as ve, resolveDirective as At, onMounted as Ge, nextTick as $e, onUpdated as da, onUnmounted as Al, h as Ie, isRef as Fe, Fragment as ge, renderList as Ce, onBeforeMount as Il, watch as Se, mergeModels as ca, useModel as fa, onBeforeUnmount as ll, Teleport as pa, withModifiers as Kt, mergeProps as rt, shallowRef as ht, triggerRef as ma, createSlots as st, toRef as ha, toValue as Ft } from "vue";
import ya from "deepmerge";
import { debounce as It, isPlainObject as it, cloneDeep as pe, isObject as va, isFunction as ga, isEmpty as De, isNumber as wt, last as Vt, isEqual as yt, isString as Pl, first as zt, find as Ut, indexOf as fl, findIndex as St, remove as ba } from "lodash-es";
import bt from "sweetalert";
import { Tooltip as ka, Modal as Qe, Button as Dt, TableColumnConfig as wa, Radio as _a, Input as Va, Message as pl, Icon as Sa } from "view-ui-plus";
import { useRouter as Pt, useRoute as al } from "vue-router";
import Ca from "popper.js";
import Et from "axios";
import Nt from "@amap/amap-jsapi-loader";
import Ta from "ar-cascader";
import { Toolbar as Ba, Editor as La } from "@wangeditor/editor-for-vue";
import ct from "moment";
import { Boot as xa } from "@wangeditor/editor";
import Oa from "vue-json-viewer";
const Rl = {
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
}, Aa = /(%|){([0-9a-zA-Z_]+)}/g;
function Ia() {
  function t(n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }
  function s(n, ...e) {
    let l;
    return e.length === 1 && typeof e[0] == "object" && (l = e[0]), (!l || !l.hasOwnProperty) && (l = {}), n === void 0 ? "" : n.replace(Aa, (i, r, c, o) => {
      let y;
      return n[o - 1] === "{" && n[o + i.length] === "}" ? c : (y = t(l, c) ? l[c] : null, y ?? "");
    });
  }
  return s;
}
const Pa = Ia();
let Ct = Rl;
const Ra = {
  zh: Rl
};
let ml, hl = {}, Ke, Ma = function(t, s) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, s);
  if (Ke && Ke.global)
    return Ke.global.t(t, s);
  if (Ke && Ke.locale) {
    if (!hl[Ke.locale] || ml != Ke.locale) {
      hl[Ke.locale] = !0;
      let n = Ke.getLocaleMessage(Ke.locale) || {}, e = ya(Ra[Ke.locale], n, { clone: !0 });
      Ct = e, Ke.setLocaleMessage(Ke.locale, e), ml = Ke.locale;
    }
    return Ke.hlang(t, s);
  }
};
const Je = function(t, s) {
  let n = Ma.apply(this, [t, s]);
  if (n != null)
    return n;
  const e = t.split(".");
  let l = Ct;
  for (let i = 0, r = e.length; i < r; i++) {
    const c = e[i];
    if (n = l[c], i === r - 1)
      return Pa(n, s);
    if (!n)
      return "";
    l = n;
  }
  return "";
}, $a = function(t) {
  Ct = t || Ct;
}, Fa = function(t) {
  Ke = t;
}, Tt = {
  use: $a,
  t: Je,
  i18n: Fa
};
function L(t, s) {
  var e, l, i;
  const n = (i = (l = (e = Ot()) == null ? void 0 : e.appContext) == null ? void 0 : l.config) == null ? void 0 : i.globalProperties;
  return Je.apply(n, [t, s]);
}
const Ml = /* @__PURE__ */ ce({
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
        Ne(i.$slots, "default")
      ], 6);
    };
  }
});
function Le() {
  var n, e;
  const t = (n = Ot()) == null ? void 0 : n.appContext;
  return ((e = t == null ? void 0 : t.config) == null ? void 0 : e.globalProperties) || {};
}
const Da = { class: "headerTxtAM" }, Na = { class: "contentAM" }, Ka = /* @__PURE__ */ ce({
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
  setup(t, { expose: s, emit: n }) {
    const e = t, l = n;
    let i = E(!1);
    const r = W(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), c = W(() => ({ zIndex: e.zIndex }));
    function o() {
      i.value = !0, l("on-open");
    }
    function y(p) {
      i.value = !1, l("on-close", p === !0);
    }
    return s({
      open: o,
      close: y
    }), (p, f) => fe((T(), N("div", {
      class: "fullScreenPopBoxAM",
      style: re(m(c))
    }, [
      P("div", {
        class: "headerAM",
        style: re({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: m(r) })
      }, [
        P("span", Da, q(p.title || m(L)("r.title")), 1),
        Q(Ml, {
          icon: "md-return-left",
          onClick: y
        }, {
          default: ne(() => [
            ke(q(m(L)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      P("div", Na, [
        Ne(p.$slots, "default")
      ])
    ], 4)), [
      [ve, m(i)]
    ]);
  }
}), za = { class: "msg" }, Ua = /* @__PURE__ */ ce({
  __name: "Hello",
  setup(t) {
    let s = E("Greetings from Ricky.");
    return (n, e) => (T(), N("span", za, q(m(s)), 1));
  }
}), Gt = /* @__PURE__ */ ce({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => Le().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: s }) {
    const n = t, e = s, l = W(() => {
      var r;
      return Math.floor(n.size / 17 * ((r = Le()) == null ? void 0 : r.fontSizeBase)) + "px";
    });
    function i(r) {
      n.disabled || e("click", r);
    }
    return (r, c) => {
      const o = te("Icon"), y = At("has");
      return fe((T(), N("div", {
        class: we(["tabTopBtnsT", { disabled: n.disabled }]),
        onClick: i,
        style: re({ "font-size": m(l) })
      }, [
        Q(o, {
          type: n.icon,
          size: n.size
        }, null, 8, ["type", "size"]),
        ke(" " + q(n.name || m(L)("r.button")), 1)
      ], 6)), [
        [y, r.has]
      ]);
    };
  }
}), Ea = { class: "c404K" }, Ga = { class: "ct404" }, Ha = { class: "p404" }, Wa = /* @__PURE__ */ ce({
  __name: "Page404",
  setup(t) {
    const n = Ot().appContext.config.globalProperties.$router;
    function e() {
      n.go(-1);
    }
    return (l, i) => {
      const r = te("Button");
      return T(), N("div", Ea, [
        i[0] || (i[0] = P("div", { class: "t404" }, "404", -1)),
        P("div", Ga, "UH OH! " + q(m(L)("r.pageNotFound")), 1),
        P("div", Ha, q(m(L)("r.notFoundMsg")), 1),
        Q(r, {
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
function ze(t, s, n, e = !0) {
  const l = (...i) => Je.apply(this, i);
  return new Promise((i, r) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let c = l("r.confirm"), o = l("r.cancel"), y = !1, p = "swalConfirmBt", f = "swalCancelBt";
      const u = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let v = "";
      t.text && u.test(Z(t.text)) ? v = "content" : t.text && Z(t.text) === "String" && (v = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (o = t.buttons.cancel.text) && (y = !0), t.buttons.cancel.className && (f = t.buttons.cancel.className), t.buttons.confirm.text && (c = t.buttons.confirm.text), t.buttons.confirm.className && (p = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (o = t.buttons[0], y = !0), t.buttons[1] && (c = t.buttons[1]))), bt({
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
const ja = { class: "tableTooltip" }, qa = /* @__PURE__ */ ce({
  __name: "TableTooltip",
  props: {
    content: { type: [String, Number, Boolean, null] }
  },
  setup(t) {
    const s = t, n = E(), e = E(), l = E(!0);
    let i = null;
    const r = E(200);
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
      c(), i = It(() => {
        $e(function() {
          c();
        });
      }, 200), window.addEventListener("resize", i);
    }), da(c), Al(() => {
      window.removeEventListener("resize", i);
    }), (o, y) => (T(), N("div", ja, [
      m(l) ? (T(), N("span", {
        key: 0,
        ref_key: "spanRef",
        ref: n,
        class: "contentText"
      }, q(s.content), 513)) : (T(), le(m(ka), {
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
          }, q(s.content), 513)
        ]),
        _: 1
      }, 8, ["content", "max-width"]))
    ]));
  }
});
let nt = 0, vt = document.createElement("div");
vt.setAttribute("class", "spinModal");
vt.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(vt);
};
function yl(t) {
  t ? vt.classList.add("show") : vt.classList.remove("show");
}
function Bt(t) {
  let s = nt;
  t ? nt++ : nt > 0 && nt--, s !== nt && (nt === 0 ? yl(!1) : s === 0 && yl(!0));
}
const Ht = typeof window < "u";
function qe(t, s, n) {
  Fe(t[s]) ? t[s].value = n : t[s] = n;
}
function Z(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function Xa(t) {
  return { style: { display: nl(t) ? "unset" : "none" } };
}
function $l(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function Lt(t) {
  let s = Z(t);
  if (s === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = Z(t[n]);
        e === "String" ? t[n] = t[n].trim() : (e === "Object" || e === "Array") && Lt(t[n]);
      }
  } else if (s === "Array")
    for (let n = 0, e = t.length; n < e; n++) {
      let l = Z(t[n]);
      l === "String" ? t[n] = t[n].trim() : (l === "Array" || l === "Object") && Lt(t[n]);
    }
  return t;
}
function Wt(t, s = []) {
  if (Z(t) === "Array")
    return t.forEach((n, e) => {
      switch (Z(n)) {
        case "Array":
        case "Object":
          Wt(n);
          break;
        default:
          t[e] = null;
      }
    }), t;
  if (Z(t) === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = !0;
        for (let l of s)
          if (l === n) {
            e = !1;
            break;
          }
        if (e)
          switch (Z(t[n])) {
            case "Array":
            case "Object":
              Wt(t[n]);
              break;
            default:
              t[n] = null;
          }
      }
    return t;
  } else
    return t;
}
const Ja = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Ya(t) {
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
      if (Z(c) === "Function" && c(r))
        return l = r, [];
      for (let o of r) {
        if (l !== "notFoundC")
          break;
        if (Z(c) === "Function" && c(o) || o === c)
          return l = o, [r.indexOf(o)];
        if (Z(o) === "Array" || Z(o) === "Object") {
          let y = i(o, c);
          if (y !== void 0)
            return [r.indexOf(o), ...y];
        }
      }
    } else if (Z(r) === "Object") {
      if (Z(c) === "Function" && c(r))
        return l = r, [];
      for (let o in r) {
        if (l !== "notFoundC")
          break;
        if (r.hasOwnProperty(o)) {
          if (Z(c) === "Function" && c(o) || r[o] === c)
            return l = r[o], [o];
          if (Z(r[o]) === "Object" || Z(r[o]) === "Array") {
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
function Qa(t, s) {
  for (let n = 0, e = s.length; n < e; n++)
    if (t === s[n])
      return !0;
  return !1;
}
function Za(t, s = 2) {
  let n = new RegExp(`(^-?\\d+\\.\\d{${s}})(\\d+$)`), e = t && String(t) || "";
  return n.test(e) ? Number(e.replace(n, "$1")) : t;
}
function Fl(t, s = {}, n = "get") {
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
async function en(t, s = {}, n = "get", e = !1, l) {
  if (s.hasOwnProperty("columns") && (s.columns === "" || s.columns === null || s.columns === void 0)) {
    ze.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  e ? await Dl(t, s, n, l) : Fl(t, s, n);
}
async function Dl(t, s = {}, n = "get", e) {
  Bt(!0);
  try {
    let l = t;
    if (window != null && window.g) {
      let f = Object.keys(window.g).filter((u) => (u == null ? void 0 : u.indexOf("URL")) > -1).map((u) => u == null ? void 0 : u.replace("URL", ""));
      for (let u of f) {
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
    if (n.toLowerCase() === "get" && Object.keys(s).length > 0) {
      const f = new URLSearchParams();
      for (let u in s)
        s.hasOwnProperty(u) && (s[u] || s[u] === 0 || s[u] === !1 || s[u] === "") && f.append(u, s[u]);
      l += (l.includes("?") ? "&" : "?") + f.toString();
    }
    ["post", "put"].includes(n.toLowerCase()) && (i.headers = {
      "Content-Type": "application/json"
    }, i.body = JSON.stringify(s));
    const r = await fetch(l, i);
    if (!r.ok)
      throw new Error("下载失败");
    let c = e || "download";
    if (!e) {
      let f = r.headers.get("Content-Disposition");
      if (f) {
        f = decodeURIComponent(f);
        const u = f.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        u && u[1] && (c = u[1].replace(/['"]/g, ""));
      } else {
        const u = l.split("?")[0], v = u.substring(u.lastIndexOf("/") + 1);
        v && v.includes(".") && (c = decodeURIComponent(v));
      }
    }
    const o = await r.blob(), y = window.URL.createObjectURL(o), p = document.createElement("a");
    p.href = y, p.download = c, document.body.appendChild(p), p.click(), document.body.removeChild(p), window.URL.revokeObjectURL(y);
  } catch (l) {
    console.error("下载出错:", l);
  } finally {
    Bt(!1);
  }
}
function tn(t, s, n = !1) {
  let e;
  if (t && Z(s) === "Array") {
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
function ln(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function Nl(t, s = !1, n = "") {
  return function(e, l) {
    var r, c;
    let i;
    if (Array.isArray(t)) {
      let o = [];
      for (let y of t)
        Re((r = l.row) == null ? void 0 : r[y]) && o.push(l.row[y]);
      i = o.join(n);
    } else typeof t == "function" ? i = t(l) : i = (c = l.row) == null ? void 0 : c[t];
    return Ie(qa, { content: s ? i === "" ? "--" : i ?? "--" : i });
  };
}
function an(t) {
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
function nn(t) {
  return Z(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : Z(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function ot({
  group: t,
  condition: s,
  key: n,
  val: e,
  childKey: l = "children"
}) {
  if (Z(t) !== "Array" || Z(s) !== "Function" || Z(n) !== "String" || Z(l) !== "String")
    return !1;
  t.forEach((i) => {
    s(i) && (Z(e) === "Function" ? i[n] = e(i[n]) : i[n] = e), Z(i[l]) === "Array" && i[l].length > 0 && ot({
      group: i[l],
      condition: s,
      key: n,
      val: e,
      childKey: l
    });
  });
}
function nl(t) {
  let s = sessionStorage.getItem("btnPermissions");
  return s ? s.split(",").indexOf(t) > -1 : !1;
}
function Kl(t) {
  return Z(t) === "Number" && String(t) === "NaN";
}
function on(t, s = !1, n = !1) {
  if (Z(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), l = "";
  for (let i in e)
    if (e.hasOwnProperty(i)) {
      let r = e[i];
      r === void 0 || r === "" || Z(r) === "String" && r.trim() === "" || r === null || Kl(r) ? n ? s ? l += i + "=&" : e[i] = "" : delete e[i] : s && (l += i + "=" + r + "&");
    }
  return s ? l.length > 0 ? l.substring(0, l.length - 1) : "" : e;
}
function jt(t) {
  let s = {};
  if (Array.isArray(t)) {
    s = [];
    for (let n of t)
      Array.isArray(n) || it(n) ? s.push(jt(n)) : Re(n) && s.push(n);
  } else if (it(t))
    for (let n in t)
      t.hasOwnProperty(n) && (Array.isArray(t[n]) || it(t[n]) ? s[n] = jt(t[n]) : Re(t[n]) && (s[n] = t[n]));
  return s;
}
function sn(t) {
  const s = window.open();
  if (s) {
    s.document.write(t);
    let n = setTimeout(() => {
      s.print(), window.clearTimeout(n), n = null;
    }, 10);
  }
}
function ol(t) {
  let s = [], n = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && s.push(t);
  for (; n.nextSibling && (n = n.nextSibling); )
    n.nodeType === 1 && s.push(n);
  return s;
}
function rn(t, s) {
  if (!t)
    return "";
  const n = [];
  if (Array.isArray(s) && typeof s[0] == "string")
    n.push(vl(s));
  else
    for (let e of s)
      n.push(vl(e));
  return fe(t, n);
}
function vl(t) {
  const [s, ...n] = t;
  return [At(s), ...n];
}
const un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Wt,
  dataFilterOrToUrl: on,
  decimalDigitsLimit: Za,
  directivesComponent: rn,
  downloadFileByFormSubmit: Fl,
  downloadFileWithSpin: Dl,
  fileExport: en,
  findCollection: _t,
  formDataHeadConfig: Ja,
  getColumnsKeys: tn,
  has: Xa,
  hasPermission: nl,
  htmlPrint: sn,
  isClient: Ht,
  isEmptyValue: an,
  isNaN: Kl,
  isNumberValue: ln,
  isValidValue: Re,
  myTypeof: Z,
  oneOf: Qa,
  removeEmptyValue: jt,
  setValByOption: ot,
  setValue: qe,
  siblingElems: ol,
  stringLength: nn,
  toFormData: Ya,
  toLine: $l,
  tooltipManual: Nl,
  trimObj: Lt
}, Symbol.toStringTag, { value: "Module" })), dn = { class: "groupBoxRP" }, cn = ["onClick"], fn = /* @__PURE__ */ ce({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const s = Pt(), n = t;
    function e(i) {
      return (i == null ? void 0 : i.path) === n.pathName ? "active" : "";
    }
    function l(i, r) {
      var p, f, u, v, b, g, V, k;
      (p = i == null ? void 0 : i.preventDefault) == null || p.call(i);
      let c = i == null ? void 0 : i.target;
      if (r && !r.children && !c.classList.contains("active")) {
        s.push(r.path);
        return;
      }
      let o = c.parentNode, y = ol(o);
      for (let S of y) {
        (u = (f = S == null ? void 0 : S.classList) == null ? void 0 : f.remove) == null || u.call(f, "open");
        const B = (v = S == null ? void 0 : S.querySelectorAll) == null ? void 0 : v.call(S, ".open");
        if (B && Array.isArray(B))
          for (let x of B)
            (g = (b = x == null ? void 0 : x.classList) == null ? void 0 : b.remove) == null || g.call(b, "open");
      }
      (k = (V = o == null ? void 0 : o.classList) == null ? void 0 : V.toggle) == null || k.call(V, "open");
    }
    return (i, r) => {
      const c = te("Icon"), o = te("sideMenuGroup", !0);
      return T(), N("ul", dn, [
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
            ], 14, cn),
            y.children ? (T(), le(o, {
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
let qt = [], Xt = [];
const pn = function(t) {
  t && t.beforeEach ? t.beforeEach(() => {
    qt.map((s) => {
      window.clearTimeout(s);
    }), Xt.map((s) => {
      window.clearInterval(s);
    }), qt.length = 0, Xt.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Me = function(t, s) {
  let n = window.setTimeout(t, s);
  return qt.push(n), n;
}, mn = function(t, s) {
  let n = window.setInterval(t, s);
  return Xt.push(n), n;
}, hn = { class: "menuListR" }, yn = /* @__PURE__ */ ce({
  __name: "SideMenu",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: s }) {
    const n = t, e = s, l = al(), i = E(!0), r = E(), c = E(), o = W(() => i.value ? L("r.hideMenu") : L("r.showMenu")), y = W(() => i.value ? "ios-arrow-back" : "ios-arrow-forward");
    Il(() => {
      let u = localStorage.getItem("menuDisplayR") || "";
      u !== "" ? i.value = JSON.parse(u) : (i.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), Se(
      () => l.path,
      (u) => {
        r.value = u, $e(() => {
          Me(f, 10);
        });
      },
      { immediate: !0 }
    );
    function p() {
      i.value = !i.value, localStorage.setItem("menuDisplayR", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function f() {
      var v, b, g, V, k;
      let u = c.value.querySelectorAll(".dropItemRP");
      for (let S of u)
        (v = S == null ? void 0 : S.querySelector) != null && v.call(S, ".active") && !((g = (b = S.classList) == null ? void 0 : b.contains) != null && g.call(b, "open")) && ((k = (V = S.classList) == null ? void 0 : V.add) == null || k.call(V, "open"));
    }
    return (u, v) => {
      const b = te("Icon");
      return T(), N("div", {
        ref_key: "menuRef",
        ref: c,
        class: we(["menuBoxRP", "cannotSelect", { light: u.light }])
      }, [
        fe(P("div", hn, [
          Q(fn, {
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
          title: m(o),
          onClick: p,
          color: m(i) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 2);
    };
  }
}), vn = { class: "groupBoxRX" }, gn = ["onMouseenter"], bn = ["onClick"], kn = /* @__PURE__ */ ce({
  __name: "SideMenuProGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const s = Pt(), n = t, e = E("");
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
      const p = te("Icon"), f = te("SideMenuProGroup", !0);
      return T(), N("ul", vn, [
        (T(!0), N(ge, null, Ce(n.data, (u, v) => {
          var b;
          return T(), N("li", {
            key: (u == null ? void 0 : u.path) + v,
            class: we({ dropItemRX: u == null ? void 0 : u.children }),
            onMouseenter: (g) => r(g, u),
            onMouseleave: y[0] || (y[0] = (g) => c(g))
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
            ], 14, bn),
            ((b = u == null ? void 0 : u.children) == null ? void 0 : b.length) > 0 ? fe((T(), le(f, {
              key: 0,
              class: "rightChildRX",
              data: u == null ? void 0 : u.children,
              "path-name": o.pathName
            }, null, 8, ["data", "path-name"])), [
              [ve, m(e) === (u == null ? void 0 : u.path)]
            ]) : ue("", !0)
          ], 42, gn);
        }), 128))
      ]);
    };
  }
}), wn = { class: "groupBoxRX" }, _n = ["onClick"], zl = /* @__PURE__ */ ce({
  __name: "SideMenuTwoLevel",
  props: {
    data: { default: () => [] },
    pathName: { default: "" },
    fromIcoMenu: { type: Boolean }
  },
  setup(t) {
    const s = Pt(), n = t;
    function e(i) {
      let r = "menuTxtR ";
      return (i == null ? void 0 : i.path) === n.pathName && (r += "active "), r;
    }
    function l(i, r) {
      var f, u, v, b, g, V, k, S, B, x, K, M, R, h;
      (f = i == null ? void 0 : i.preventDefault) == null || f.call(i);
      let c = i == null ? void 0 : i.target;
      if (r && !r.children && !c.classList.contains("active")) {
        s.push(r.path);
        return;
      }
      const o = (u = c == null ? void 0 : c.querySelector) == null ? void 0 : u.call(c, ".dropIcoRX"), y = c.parentNode, p = ol(y);
      for (let O of p) {
        (b = (v = O == null ? void 0 : O.classList) == null ? void 0 : v.remove) == null || b.call(v, "open");
        const _ = (g = O == null ? void 0 : O.querySelector) == null ? void 0 : g.call(O, ".dropIcoRX");
        (k = (V = _ == null ? void 0 : _.classList) == null ? void 0 : V.remove) == null || k.call(V, "open");
        const Y = (S = O == null ? void 0 : O.querySelectorAll) == null ? void 0 : S.call(O, ".open");
        for (let $ of Y)
          (x = (B = $ == null ? void 0 : $.classList) == null ? void 0 : B.remove) == null || x.call(B, "open");
      }
      (M = (K = y == null ? void 0 : y.classList) == null ? void 0 : K.toggle) == null || M.call(K, "open"), (h = (R = o == null ? void 0 : o.classList) == null ? void 0 : R.toggle) == null || h.call(R, "open");
    }
    return (i, r) => {
      const c = te("Icon");
      return T(), N("ul", wn, [
        (T(!0), N(ge, null, Ce(n.data, (o, y) => (T(), N("li", {
          key: (o == null ? void 0 : o.path) + y,
          class: we({ dropItemRX: o == null ? void 0 : o.children, open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu })
        }, [
          P("div", {
            class: we(e(o)),
            onClick: (p) => l(p, o),
            style: re({ paddingLeft: o.level * 20 + "px" })
          }, [
            Q(c, {
              class: "menuIcoL",
              custom: "iconfont " + (o.icon || "icon-r-menu-default")
            }, null, 8, ["custom"]),
            P("span", null, q((o == null ? void 0 : o.name) || "-- no name --"), 1),
            fe(Q(c, {
              class: we(["dropIcoRX", { open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu }]),
              type: "ios-arrow-forward"
            }, null, 8, ["class"]), [
              [ve, o.children && o.children.length > 0]
            ])
          ], 14, _n),
          o.children ? (T(), le(kn, {
            key: 0,
            data: o.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : ue("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Vn = { class: "groupBoxRX" }, Sn = ["onMouseenter"], Cn = ["onClick"], Tn = /* @__PURE__ */ ce({
  __name: "SideIcoMenu",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const s = Pt(), n = t, e = E("");
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
      const p = te("Icon");
      return T(), N("ul", Vn, [
        (T(!0), N(ge, null, Ce(n.data, (f, u) => (T(), N("li", {
          key: (f == null ? void 0 : f.path) + u,
          class: we({ dropItemRX: f.children }),
          onMouseenter: (v) => r(v, f),
          onMouseleave: y[0] || (y[0] = (v) => c(v))
        }, [
          P("div", {
            class: we(l(f)),
            onClick: (v) => i(v, f)
          }, [
            Q(p, {
              class: "menuIcoM",
              custom: "iconfont " + (f.icon || "icon-r-menu-default"),
              size: "20"
            }, null, 8, ["custom"])
          ], 10, Cn),
          fe(Q(zl, {
            class: "rightTwoMenu",
            data: [f],
            pathName: n.pathName,
            fromIcoMenu: ""
          }, null, 8, ["data", "pathName"]), [
            [ve, m(e) === (f == null ? void 0 : f.path)]
          ])
        ], 42, Sn))), 128))
      ]);
    };
  }
}), Bn = { class: "menuListR" }, Ln = /* @__PURE__ */ ce({
  __name: "SideMenuPro",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: s }) {
    const n = t, e = s, l = al(), i = E(!0), r = E(), c = E(), o = W(() => i.value ? L("r.hideMenu") : L("r.showMenu")), y = W(() => i.value ? "iconfont icon-r-menu-hide" : "iconfont icon-r-menu-open");
    Il(() => {
      let u = localStorage.getItem("menuDisplayRPro") || "";
      u !== "" ? i.value = JSON.parse(u) : (i.value = !0, localStorage.setItem("menuDisplayRPro", JSON.stringify(!0)));
    }), Se(
      () => l.path,
      (u) => {
        r.value = u, $e(() => {
          Me(f, 10);
        });
      },
      { immediate: !0 }
    );
    function p() {
      i.value = !i.value, localStorage.setItem("menuDisplayRPro", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function f() {
      var v, b, g, V, k, S, B, x, K, M, R, h, O, _, Y, $, I, j, U, w, F, D, X, ee, se, me, he, Oe, Ae, ae, xe, Pe, et, He, G, z, ye, be, _e;
      let u = c.value.querySelectorAll(".dropItemRX");
      for (let H of u) {
        const Ve = (b = (v = H == null ? void 0 : H.childNodes[0]) == null ? void 0 : v.querySelector) == null ? void 0 : b.call(v, ".dropIcoRX");
        (g = H == null ? void 0 : H.querySelector) != null && g.call(H, ".active") ? (S = (k = (V = H == null ? void 0 : H.childNodes[1]) == null ? void 0 : V.classList) == null ? void 0 : k.contains) != null && S.call(k, "rightChildRX") ? (K = (x = (B = H == null ? void 0 : H.childNodes[0]) == null ? void 0 : B.classList) == null ? void 0 : x.contains) != null && K.call(x, "activeR") || (R = H == null ? void 0 : (M = H.childNodes[0].classList).add) == null || R.call(M, "activeR") : ((O = (h = H == null ? void 0 : H.classList) == null ? void 0 : h.contains) != null && O.call(h, "open") || (Y = (_ = H.classList).add) == null || Y.call(_, "open"), Ve && !((I = ($ = Ve == null ? void 0 : Ve.classList) == null ? void 0 : $.contains) != null && I.call($, "open")) && ((U = (j = Ve.classList).add) == null || U.call(j, "open"))) : (D = (F = (w = H == null ? void 0 : H.childNodes[1]) == null ? void 0 : w.classList) == null ? void 0 : F.contains) != null && D.call(F, "rightChildRX") ? (se = (ee = (X = H == null ? void 0 : H.childNodes[0]) == null ? void 0 : X.classList) == null ? void 0 : ee.contains) != null && se.call(ee, "activeR") && ((he = H == null ? void 0 : (me = H.childNodes[0].classList).remove) == null || he.call(me, "activeR")) : ((Ae = (Oe = H == null ? void 0 : H.classList) == null ? void 0 : Oe.contains) != null && Ae.call(Oe, "open") && !((xe = (ae = H == null ? void 0 : H.classList) == null ? void 0 : ae.contains) != null && xe.call(ae, "fromIcoMenu")) && ((et = (Pe = H.classList).remove) == null || et.call(Pe, "open")), (G = (He = Ve == null ? void 0 : Ve.classList) == null ? void 0 : He.contains) != null && G.call(He, "open") && !((ye = (z = Ve == null ? void 0 : Ve.classList) == null ? void 0 : z.contains) != null && ye.call(z, "fromIcoMenu")) && ((_e = (be = Ve.classList).remove) == null || _e.call(be, "open")));
      }
    }
    return (u, v) => {
      const b = te("Icon");
      return T(), N("div", {
        ref_key: "menuProRef",
        ref: c,
        class: we(["menuBoxRPro", "cannotSelect", { light: u.light }])
      }, [
        fe(P("div", Bn, [
          Q(zl, {
            data: n.data,
            pathName: m(r)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, m(i)]
        ]),
        fe(Q(Tn, {
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
          title: m(o),
          onClick: p
        }, null, 8, ["custom", "class", "title"])
      ], 2);
    };
  }
}), xn = ["title"], Ul = /* @__PURE__ */ ce({
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
      const c = te("Icon"), o = At("has");
      return fe((T(), N("div", {
        class: we(["tableBtnsG", { disabled: e.disabled }]),
        onClick: l,
        title: e.title || m(L)("r.button")
      }, [
        Q(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, xn)), [
        [o, e.has]
      ]);
    };
  }
}), On = { class: "contentX" }, An = { class: "arrowA" }, Jt = /* @__PURE__ */ ce({
  __name: "ShowHidePanel",
  props: /* @__PURE__ */ ca({
    bg: {}
  }, {
    modelValue: { type: Boolean, default: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const s = fa(t, "modelValue"), n = t, e = W(() => s ? "background:" + n.bg || "transparent" : "");
    return (l, i) => {
      const r = te("Icon");
      return T(), N("div", {
        style: re(m(e))
      }, [
        fe(P("div", On, [
          Ne(l.$slots, "default")
        ], 512), [
          [ve, s.value]
        ]),
        P("div", An, [
          P("div", {
            class: "btA",
            onClick: i[0] || (i[0] = (c) => s.value = !s.value)
          }, [
            Q(r, {
              type: s.value ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), In = { class: "contentZ" }, Pn = /* @__PURE__ */ ce({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: s }) {
    const n = t, e = s, l = W({
      get() {
        return n.modelValue;
      },
      set(r) {
        e("update:modelValue", r);
      }
    }), i = W(() => l.value ? "background:" + n.bg : "");
    return (r, c) => (T(), N("div", {
      style: re(m(i))
    }, [
      fe(P("div", In, [
        Ne(r.$slots, "default")
      ], 512), [
        [ve, m(l)]
      ])
    ], 4));
  }
}), Rn = /* @__PURE__ */ ce({
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
    const i = W({
      get() {
        return e.modelValue;
      },
      set(y) {
        n("update:modelValue", y);
      }
    }), r = W({
      get() {
        return e.open;
      },
      set(y) {
        n("on-toggle", y);
      }
    }), c = W(() => r.value ? "ios-arrow-up" : "ios-arrow-down");
    function o() {
      l || (l = !0, n("on-search", i.value), Me(() => {
        l = !1;
      }, 2e3));
    }
    return (y, p) => {
      const f = te("Input"), u = te("icon");
      return T(), N("div", {
        class: "tableSearchV",
        style: re({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Ne(y.$slots, "default", {}, () => [
          Q(f, {
            modelValue: m(i),
            "onUpdate:modelValue": p[0] || (p[0] = (v) => Fe(i) ? i.value = v : null),
            style: re({ width: e.width }),
            search: "",
            onOnSearch: o,
            class: "searchInputC",
            placeholder: e.placeholder || m(L)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        fe(P("span", {
          class: "sbt",
          onClick: p[1] || (p[1] = (v) => r.value = !m(r)),
          style: re({ color: e.btnColor })
        }, [
          Q(u, {
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
}), El = {
  beforeMount(t, s) {
    function n(e) {
      var l;
      if (t.contains(e.target))
        return !1;
      (l = s == null ? void 0 : s.value) == null || l.call(s, e);
    }
    t.__vueClickOutside__ = n, Ht && document.addEventListener("click", n);
  },
  unmounted(t) {
    Ht && document.removeEventListener("click", t.__vueClickOutside__), delete t.__vueClickOutside__;
  }
};
function Gl(t, s, n, e, l = !1) {
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
const Mn = { class: "tabSetF" }, $n = { class: "cannotSelect" }, Fn = { class: "topCheck" }, Hl = /* @__PURE__ */ ce({
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
  setup(t, { emit: s }) {
    var h, O, _, Y, $;
    const n = s, e = t, l = E(), i = E(), r = E(!0), c = E(!1), o = E(!1), y = E([]), p = W(() => {
      var j;
      let I = L("r.unknown");
      return ((j = e.modelValue) == null ? void 0 : j.length) > y.value.length && (y.value = pe(e.modelValue)), y.value.map((U) => {
        let w = { label: (U == null ? void 0 : U.title) || I };
        return U != null && U.disableShowSetting && (w.disabled = !0), w;
      });
    }), f = W(() => p.value.filter((I) => I == null ? void 0 : I.disabled)), u = W({
      get() {
        var I, j;
        return (j = (I = e.modelValue) == null ? void 0 : I.map) == null ? void 0 : j.call(I, (U) => (U == null ? void 0 : U.title) || L("r.unknown"));
      },
      set(I) {
        let j = y.value.filter((U) => {
          for (let w of I)
            if (w === (U == null ? void 0 : U.title))
              return !0;
          return !1;
        });
        n("update:modelValue", j);
      }
    }), v = ($ = (Y = (_ = (O = (h = Ot()) == null ? void 0 : h.appContext) == null ? void 0 : O.config) == null ? void 0 : _.globalProperties) == null ? void 0 : Y.$i18n) == null ? void 0 : $.locale;
    let b = null;
    Ge(() => {
      let I = L("r.unknown"), j = M();
      j ? u.value = JSON.parse(decodeURI(j)) : e.defaultCheck && (u.value = e.modelValue.filter((U) => U == null ? void 0 : U.showSettingCheck).map((U) => (U == null ? void 0 : U.title) || I)), $e(function() {
        !l.value || !i.value || (b = new Ca(l.value, i.value, {
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
        o.value = !0, (U = b == null ? void 0 : b.update) == null || U.call(b), $e(function() {
          o.value = !1;
        });
      }, 0);
    }), ll(function() {
      var I;
      (I = b == null ? void 0 : b.destroy) == null || I.call(b);
    });
    function g(I) {
      var D, X;
      const { height: j } = I.popper, U = I.instance.popper, w = window.innerHeight;
      let F = 0;
      if ((D = U.childNodes) != null && D.length)
        for (let ee = 0; ee < U.childNodes.length; ee++)
          F += (X = U.childNodes[ee]) == null ? void 0 : X.offsetHeight;
      return w < j - 10 || j < F ? {
        needChange: !0,
        height: w - 10 < F ? w - 10 : F
      } : { needChange: !1 };
    }
    function V(I) {
      I.length === p.value.length ? (r.value = !1, c.value = !0) : I.length > f.value.length ? (r.value = !0, c.value = !1) : (r.value = !1, c.value = !1);
    }
    Se(() => u.value, V, {
      immediate: !0,
      deep: !0
    });
    function k() {
      o.value && (R() && Gl(L("r.notSave"), "", "warning", B), o.value = !1);
    }
    function S() {
      o.value ? k() : (o.value = !0, $e(function() {
        var I;
        (I = b == null ? void 0 : b.update) == null || I.call(b);
      }));
    }
    function B() {
      v ? window[e.storage].setItem(e.sKey + "_" + v, encodeURI(JSON.stringify(u.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(u.value))), k();
    }
    function x(I) {
      var j, U;
      if (o.value) {
        if (e.transfer) {
          const w = i.value;
          if (w === (I == null ? void 0 : I.target) || (j = w == null ? void 0 : w.contains) != null && j.call(w, I == null ? void 0 : I.target))
            return;
        }
        (U = I == null ? void 0 : I.preventDefault) == null || U.call(I), k();
      }
    }
    function K() {
      r.value ? c.value = !1 : c.value = !c.value, r.value = !1, c.value ? u.value = p.value.map((I) => I == null ? void 0 : I.label) : u.value = f.value.map((I) => I == null ? void 0 : I.label);
    }
    function M() {
      let I;
      return v ? I = window[e.storage].getItem(e.sKey + "_" + v) : I = window[e.storage].getItem(e.sKey), I;
    }
    function R() {
      var j;
      let I = M();
      if (I) {
        if (I = JSON.parse(decodeURI(I)), (I == null ? void 0 : I.length) !== ((j = u.value) == null ? void 0 : j.length))
          return !0;
        for (let U of I)
          if (u.value.indexOf(U) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (I, j) => {
      const U = te("Icon"), w = te("Checkbox"), F = te("CheckboxGroup");
      return fe((T(), N("div", Mn, [
        P("div", {
          ref_key: "buttonRef",
          ref: l,
          class: "tabSetBt",
          onClick: S
        }, [
          Q(U, {
            type: "md-settings",
            size: "17"
          }),
          P("span", $n, q(m(L)("r.tabSetting")), 1)
        ], 512),
        (T(), le(pa, {
          to: "body",
          disabled: !e.transfer
        }, [
          fe(P("div", {
            ref_key: "popperRef",
            ref: i,
            class: "tabSetCard",
            style: re({ width: e.width, backgroundColor: e.bg })
          }, [
            P("div", Fn, [
              Q(w, {
                indeterminate: m(r),
                modelValue: m(c),
                "onUpdate:modelValue": j[0] || (j[0] = (D) => Fe(c) ? c.value = D : null),
                onClick: Kt(K, ["prevent"])
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
                j[2] || (j[2] = P("span", { class: "iconfont icon-r-save" }, null, -1)),
                P("span", null, q(m(L)("r.save")), 1)
              ])
            ]),
            Q(F, {
              modelValue: m(u),
              "onUpdate:modelValue": j[1] || (j[1] = (D) => Fe(u) ? u.value = D : null)
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
            [ve, m(o)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [m(El), x]
      ]);
    };
  }
});
function Dn(t) {
  return t.replace(/_(\w)/g, function(s, n) {
    return n.toUpperCase();
  });
}
function Xi(t) {
  let s = document.createElement("div");
  return s.textContent !== void 0 ? s.textContent = t : s.innerText = t, s.innerHTML;
}
function Ji(t) {
  let s = document.createElement("div");
  return s.innerHTML = t, s.innerText || s.textContent;
}
function gl(t) {
  return new Promise((s) => {
    let n = new FileReader();
    n.readAsDataURL(t), n.onloadend = () => {
      s(n.result);
    };
  });
}
function Wl(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function ft(t) {
  return Z(t) === "String" && t.indexOf("image") > -1;
}
function bl(t) {
  const s = Wl(t);
  let n = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(s) > -1 ? n = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(s) > -1 ? n = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(s) > -1 ? n = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(s) > -1 ? n = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(s) > -1 ? n = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(s) > -1 && (n = "ios-videocam"), n;
}
function Nn(t, s) {
  let n = document.createElement("a");
  n.href = s, n.download = t, Kn(n);
}
function Kn(t) {
  let s = document.createEvent("MouseEvents");
  s.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(s);
}
function Yt({
  group: t,
  condition: s,
  pathKey: n,
  childKey: e = "children",
  path: l = []
}) {
  if (t && va(t)) {
    if (ga(s)) {
      if (it(t)) {
        let i = t, r = pe(l);
        if (s(i))
          return n && i[n] && r.push(i[n]), r;
        if (i[e] && !De(i[e])) {
          n && i[n] && r.push(i[n]);
          let c = Yt({
            group: i[e],
            condition: s,
            pathKey: n,
            childKey: e,
            path: r
          });
          if (!De(c))
            return c;
        }
      } else if (Array.isArray(t))
        for (let i of t) {
          let r = pe(l);
          if (s(i))
            return n && i[n] ? r.push(i[n]) : r.push(String(t.indexOf(i))), r;
          if (i[e] && i[e].length > 0) {
            n && i[n] ? r.push(i[n]) : r.push(String(t.indexOf(i)));
            let c = Yt({
              group: i[e],
              condition: s,
              pathKey: n,
              childKey: e,
              path: r
            });
            if (!De(c))
              return c;
          }
        }
    } else if (Array.isArray(t))
      for (let i of t) {
        let r = pe(l);
        if (i === s)
          return r.push(String(t.indexOf(i))), r;
      }
  }
  return [];
}
function zn(t, s = 12) {
  if (Z(t) === "String" && t.length > 0) {
    let n = document.createElement("span");
    n.style.fontSize = s + "px", n.style.fontFamily = "inherit", n.innerHTML = t, n.style.opacity = "0", n.style.position = "fixed", n.style.top = "3000px", document.body.append(n);
    const e = n.clientWidth;
    return document.body.removeChild(n), e;
  }
  return 0;
}
function Yi(t) {
  return t === "" ? null : t;
}
function Qi(t) {
  var s;
  t = t || window.Event, t != null && t.stopPropagation ? (s = t.stopPropagation) == null || s.call(t) : t && (t.cancelBubble = !0);
}
let pt = !1;
function Qt({
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
  const u = (...k) => Je.apply(this, k);
  let b = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", g = Z(e) === "String";
  const V = typeof e == "function";
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
                  Dt,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      pt || (Qe.remove(), r && Z(r) === "Function" && r());
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
                Ie("div", { class: "msgBoxConO" }, V ? [e(Ie)] : e || u("r.info.text"))
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
                  Dt,
                  {
                    class: "okBtN",
                    onClick(k) {
                      var S, B, x, K, M, R, h, O, _;
                      if (l && typeof l == "function") {
                        const Y = l();
                        if (Y && Z(Y) === "Promise") {
                          pt = !0;
                          const $ = (k == null ? void 0 : k.currentTarget) || (k == null ? void 0 : k.target);
                          $ && ((B = (S = $.classList) == null ? void 0 : S.add) == null || B.call(S, "ivu-btn-loading"), (K = (x = $.nextSibling) == null ? void 0 : x.setAttribute) == null || K.call(x, "disabled", "disabled"), (_ = (O = ((h = (R = (M = $.parentElement) == null ? void 0 : M.parentElement) == null ? void 0 : R.querySelector) == null ? void 0 : h.call(R, ".titleN .closeN")).classList) == null ? void 0 : O.add) == null || _.call(O, "disabled")), Promise.resolve(Y).then(() => {
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
                  Dt,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onClick() {
                      pt || (Qe.remove(), Z(i) === "Function" && i && i());
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
const Un = window.location.origin;
let xt = null;
const kl = (...t) => Je.apply(xt, t);
let Ee = Et.create({
  baseURL: Un,
  withCredentials: !0
  // 允许携带cookie
});
function En() {
  console.info(
    "store为空，请在安装插件时传入store实例，vuex：app.use(plugRQw,{store})，Pinia：app.use(plugRQw,{useStore})"
  );
}
Ee.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function wl() {
  var t, s;
  if (Ee.store)
    if (typeof Ee.store == "function") {
      const n = Ee.store();
      n.logout && n.logout();
    } else
      (s = (t = Ee.store) == null ? void 0 : t.dispatch) == null || s.call(t, "logout");
  else
    En();
}
Ee.interceptors.response.use(
  (t) => {
    var s, n;
    return xt && (((s = t == null ? void 0 : t.data) == null ? void 0 : s.code) === 403 || ((n = t == null ? void 0 : t.data) == null ? void 0 : n.code) === 409) && Qt({
      content: kl("r.http." + t.data.code),
      onOk: wl
    }), t;
  },
  (t) => {
    var s, n;
    return xt && (((s = t == null ? void 0 : t.response) == null ? void 0 : s.status) === 403 || ((n = t == null ? void 0 : t.response) == null ? void 0 : n.status) === 409) && Qt({
      content: kl("r.http." + t.response.status),
      onOk: wl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function Ye(t, s, n, e) {
  e && e.spin && Bt(!1);
  let l = !0, i = t && t.data;
  if (i) {
    n = n || [];
    for (let r of n)
      i = i[r], l = l && i;
    return l ? i : (s && console.warn(s), !1);
  }
  return s && console.warn(s), !1;
}
function Gn(t, s, n, e, l, i, r) {
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
      i && i.spin && Bt(!0);
      let p = s;
      if (window && window.hasOwnProperty("g")) {
        const v = window.g;
        let b = Object.keys(v).filter((g) => {
          var V;
          return ((V = g == null ? void 0 : g.indexOf) == null ? void 0 : V.call(g, "URL")) > -1;
        }).map((g) => {
          var V;
          return (V = g.replace) == null ? void 0 : V.call(g, "URL", "");
        });
        for (let g of b) {
          let V = new RegExp("^/" + g + "(?=/.*$)", "i");
          if (V.test(s) && v[g + "URL"]) {
            p = v[g + "URL"] + s.replace(V, "");
            break;
          }
        }
      }
      let f;
      if (((y = i == null ? void 0 : i.headers) == null ? void 0 : y["Content-Type"]) === "multipart/form-data")
        f = n;
      else if (Array.isArray(n) ? f = [] : f = {}, n && !De(n))
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
      Gn(u, p, f, e, l, i, r).then((v) => {
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
  all: Et.all,
  spread: Et.spread,
  config: Ee
}, Hn = {
  key: 0,
  class: "pageTotal"
}, Wn = {
  key: 1,
  class: "pageProSize"
}, jl = /* @__PURE__ */ ce({
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
  setup(t, { emit: s }) {
    var u;
    const n = s, e = E(), l = t, i = ((u = Le == null ? void 0 : Le()) == null ? void 0 : u.fontSizeBase) || 14, r = E(16), c = W({
      get() {
        return l.modelValue;
      },
      set(v) {
        n("update:modelValue", v), n("on-change", v);
      }
    }), o = W({
      get() {
        return l.pageSize;
      },
      set(v) {
        n("on-page-size-change", v), c.value !== 1 && (c.value = 1);
      }
    }), y = W(() => {
      const v = zn(String(l.total || 0), i) + r.value + 2;
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
      var k, S, B;
      const v = (B = (S = (k = e.value) == null ? void 0 : k.$el) == null ? void 0 : S.querySelector) == null ? void 0 : B.call(S, "input");
      if (!v)
        return 16;
      const b = window.getComputedStyle(v), g = b == null ? void 0 : b.paddingLeft, V = b == null ? void 0 : b.paddingRight;
      return !g || !V ? 16 : Number(g.replace("px", "")) + Number(V.replace("px", ""));
    }
    function f(v) {
      var g, V, k;
      const b = (k = (V = (g = e.value) == null ? void 0 : g.$el) == null ? void 0 : V.querySelector) == null ? void 0 : k.call(V, "input");
      b != null && b.style && (b.style.width = `${v}px`);
    }
    return Ge(() => {
      r.value = p();
    }), (v, b) => {
      const g = te("Page"), V = te("Option"), k = te("Select");
      return T(), N("div", {
        class: we(["pagePro", { pageProDefault: l.size === "default" }])
      }, [
        l.showTotal ? (T(), N("span", Hn, q(m(L)("r.total") + " ") + q(l.total) + q(" " + m(L)("r.items")), 1)) : ue("", !0),
        Q(g, {
          ref_key: "pageRef",
          ref: e,
          modelValue: m(c),
          "onUpdate:modelValue": b[0] || (b[0] = (S) => Fe(c) ? c.value = S : null),
          "page-size": m(o),
          total: l.total,
          size: l.size,
          "page-size-opts": l.pageSizeOpts,
          disabled: l.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        l.showSizer ? (T(), N("div", Wn, [
          Q(k, {
            modelValue: m(o),
            "onUpdate:modelValue": b[1] || (b[1] = (S) => Fe(o) ? o.value = S : null),
            size: l.size,
            transfer: l.transfer,
            disabled: l.disabled
          }, {
            default: ne(() => [
              (T(!0), N(ge, null, Ce(l.pageSizeOpts, (S) => (T(), le(V, {
                value: S,
                key: S
              }, {
                default: ne(() => [
                  ke(q(S) + " " + q(m(L)("r.page")), 1)
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
}), jn = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, qn = { class: "topBtn" }, Xn = { class: "tableContainer growFlexItem" }, Jn = { class: "fullHeight relativeBox" }, Yn = { class: "pageContainer" }, Zt = /* @__PURE__ */ ce({
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
  setup(t, { expose: s, emit: n }) {
    var He;
    const e = n;
    ({ ...wa });
    const l = t, i = ((He = Le()) == null ? void 0 : He.pageSizes) || [10, 20, 50, 100], r = E(l.data), c = E(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || l.pageSize
    ), o = E(1), y = E(0);
    let p = [], f, u, v = E(l.orderKey), b = E(l.orderDefault);
    const g = E(300), V = W(() => {
      for (let G of l.columns)
        if (G != null && G.fixed)
          return !0;
      return !1;
    }), k = W(() => l.selectionFixed || V.value), S = W(() => {
      let G = {
        ...l.searchData,
        current: o.value,
        size: c.value
      };
      return l.sortable === "custom" && (l.orderKeyFormat === "underline" ? G[b.value] = $l(v.value) : l.orderKeyFormat === "camelcase" && (G[b.value] = Dn(v.value))), G;
    }), B = W(() => {
      let G = l.columns.filter((z) => z && z.type !== "selection");
      if (l.selection || l.radio) {
        let z;
        l.radio ? z = {
          title: " ",
          width: 65,
          render: (ye, be) => Ie(_a, {
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
        z != null && z.key && z.render === void 0 && (z.tooltip ? z.render = Nl(z.key, l.tableEmptyTdHandle) : z.render = (ye, be) => {
          let _e = "";
          return z != null && z.key && (_e = be.row[z.key]), l.tableEmptyTdHandle ? Ie("span", _e === "" ? "--" : _e ?? "--") : Ie("span", _e);
        });
      }), G;
    }), x = W({
      get() {
        return r.value.map((G, z) => Object.assign({}, G, {
          btKey: "bt-" + z,
          btChecked: !!G.btChecked
        }));
      },
      set(G) {
        r.value = G;
      }
    }), K = W(() => p.map((G) => G == null ? void 0 : G.id)), M = W(() => p.map((G) => G == null ? void 0 : G.btKey)), R = E(), h = E();
    Se(() => l.searchData, O, { deep: !0 }), Se(
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
    function O() {
      o.value = 1, Ae();
    }
    function _() {
      l.initData && Ae();
    }
    function Y(G) {
      r.value.unshift(pe(G)), Me(() => {
        var z, ye;
        (ye = (z = R.value) == null ? void 0 : z.clickCurrentRow) == null || ye.call(z, 0);
      }, 100);
    }
    function $(G, z, ye) {
      let be = null;
      if (typeof z == "number" ? be = z : z && (be = u), be !== null) {
        let _e = r.value[be];
        for (let H in G)
          G.hasOwnProperty(H) && (_e[H] = G[H]);
        ye && Me(() => {
          var H, Ve;
          (Ve = (H = R.value) == null ? void 0 : H.clickCurrentRow) == null || Ve.call(H, be);
        }, 10);
      }
    }
    function I(G) {
      r.value.splice(G, 1), Me(() => {
        var z, ye;
        (ye = (z = R.value) == null ? void 0 : z.clickCurrentRow) == null || ye.call(z, 0);
      }, 100);
    }
    function j(G, z) {
      var ye, be;
      G.btChecked && l.radio || (l.selection || l.radio) && l.rowClickSelect && ((be = (ye = R.value) == null ? void 0 : ye.toggleSelect) == null || be.call(ye, z));
    }
    function U(G, z) {
      f = z.btKey, u = Number(z.btKey.split("-")[1]), l.radio && (r.value[u].btChecked = !0);
    }
    function w(G) {
      if (l.radio)
        for (let z of x.value)
          z != null && z.btKey && z.btKey !== f && (r.value[Number(z.btKey.split("-")[1])].btChecked = !1);
      p = G, e("on-selection-change", G);
    }
    function F() {
      return pe(p);
    }
    function D() {
      Ae();
    }
    function X(G) {
      c.value = G, localStorage.setItem("btPageSize", String(G)), o.value === 1 && Ae();
    }
    function ee({ key: G, order: z }) {
      z === "normal" ? (v.value = l.orderKey, b.value = l.orderDefault) : (v.value = G, b.value = z), o.value = 1, Oe();
    }
    function se(G) {
      var ye, be, _e, H, Ve, tt, lt, ut;
      const z = G;
      if (typeof z == "number")
        me(), u = z, f = (be = (ye = x.value) == null ? void 0 : ye[z]) == null ? void 0 : be.btKey, (H = (_e = R.value) == null ? void 0 : _e.clickCurrentRow) == null || H.call(_e, z);
      else if (Array.isArray(z)) {
        if (l.radio || !l.selection)
          return;
        me();
        for (let je of z)
          (tt = (Ve = R.value) == null ? void 0 : Ve.clickCurrentRow) == null || tt.call(Ve, je);
      } else if (typeof z == "function")
        for (let je = 0; je < x.value.length; je++) {
          const gt = x.value[je];
          z(gt) && ((ut = (lt = R.value) == null ? void 0 : lt.clickCurrentRow) == null || ut.call(lt, je));
        }
    }
    function me() {
      var G, z;
      if (l.radio) {
        if (M.value.length > 0 && x.value.length > 0) {
          let ye = M.value[0].split("-")[1];
          x.value[ye].btChecked = !1;
        }
      } else
        (z = (G = R.value) == null ? void 0 : G.selectAll) == null || z.call(G, !1);
      p.length > 0 && (p = [], e("on-selection-change", [])), f = null, u = null;
    }
    function he() {
      r.value = [], me(), o.value = 1, y.value = 0;
    }
    function Oe(G, z, ye) {
      return new Promise((be) => {
        G && (b.value = G), z && (v.value = z), l.url ? We[l.method](l.url, S.value, "", [], { spin: l.getDataLoading }).then((_e) => {
          var Ve, tt;
          let H;
          ye || me(), typeof l.dataHandler == "function" ? H = l.dataHandler(_e) : H = _e, H.data ? (H.data.records || H.data.records === null ? r.value = H.data.records || [] : H.data.page ? (H.data.page.records || H.data.page.records === null) && (r.value = H.data.page.records || []) : H.data.data ? (H.data.data.records || H.data.data.records === null) && (r.value = H.data.data.records || []) : r.value = H.data, y.value = ((Ve = H.data.page) == null ? void 0 : Ve.total) || ((tt = H.data.data) == null ? void 0 : tt.total) || H.data.total || H.total || 0, y.value === 0 && o.value > 1 && r.value && r.value.length === 0 ? o.value = 1 : o.value > 1 && y.value <= (o.value - 1) * c.value && (o.value--, $e(function() {
            Oe(G, z);
          })), e("on-data-change", H), be(H)) : (console.warn("请求返回数据有误，无法使用"), he(), e("on-data-change", H));
        }).catch((_e) => {
          me(), he(), e("on-data-change", _e);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Ae(G, z, ye) {
      l.radio && (G || l.rowClickNum !== -1) ? Oe(z, ye, G).then(() => {
        r.value.length > 0 && Me(() => {
          var be, _e, H, Ve;
          G ? (_e = (be = R.value) == null ? void 0 : be.clickCurrentRow) == null || _e.call(be, u || 0) : (Ve = (H = R.value) == null ? void 0 : H.clickCurrentRow) == null || Ve.call(H, l.rowClickNum);
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
      xe(), (z = (G = R.value) == null ? void 0 : G.handleResize) == null || z.call(G);
    }
    const et = It(Pe, 300);
    return Ge(() => {
      _(), k.value && (ae(), window.addEventListener("resize", et));
    }), ll(() => {
      k.value && window.removeEventListener("resize", et);
    }), s({
      dataS: x,
      selectedIds: K,
      addRow: Y,
      setRowData: $,
      deleteRow: I,
      getSelected: F,
      selectRow: se,
      clearSelect: me,
      clearTableData: he,
      getTableData: Oe,
      getDataAndClickRow: Ae
    }), (G, z) => {
      const ye = te("Table"), be = te("Page");
      return T(), N("div", jn, [
        fe(P("div", qn, [
          Ne(G.$slots, "tableSetting"),
          Ne(G.$slots, "topMsg"),
          Ne(G.$slots, "topBtnGroup")
        ], 512), [
          [ve, l.showTopRow]
        ]),
        P("div", Xn, [
          P("div", Jn, [
            P("div", {
              ref_key: "tableContainerLOI",
              ref: h,
              class: "fullFlowContent"
            }, [
              Q(ye, rt({
                ref_key: "tableRef",
                ref: R
              }, G.$attrs, {
                height: m(k) && m(g) || null,
                class: { noBorderTable: l.noBorderTable, fullHeightTable: !m(k), lightHeadO: l.lightHead },
                columns: m(B),
                data: m(x),
                "highlight-row": l.radio || l.highlightRow,
                onOnSelect: U,
                onOnSelectionChange: w,
                onOnSortChange: ee,
                onOnRowClick: j
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        fe(P("div", Yn, [
          l.usePagePro ? (T(), le(jl, {
            key: 0,
            modelValue: m(o),
            "onUpdate:modelValue": z[0] || (z[0] = (_e) => Fe(o) ? o.value = _e : null),
            total: m(y),
            showTotal: l.showTotal,
            pageSize: m(c),
            showSizer: l.showSizer,
            pageSizeOpts: m(i),
            size: l.pageComponentSize,
            onOnChange: D,
            onOnPageSizeChange: X
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (T(), le(be, {
            key: 1,
            modelValue: m(o),
            "onUpdate:modelValue": z[1] || (z[1] = (_e) => Fe(o) ? o.value = _e : null),
            total: m(y),
            pageSize: m(c),
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
}), ql = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = W({
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
    }), i = W({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(p) {
        n("update:modelValue", {
          key: l.value,
          val: p
        });
      }
    }), r = W(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), c = W(() => ({
      width: typeof e.itemWidth == "number" ? e.itemWidth + "px" : e.itemWidth
    }));
    function o(p) {
      p != null && p.target && p.target.value !== void 0 && y({
        key: l.value,
        val: p.target.value
      });
    }
    const y = It((p) => {
      n("on-change", p);
    }, 500);
    return (p, f) => {
      const u = te("Option"), v = te("Select"), b = te("Input");
      return T(), N("div", null, [
        Q(v, {
          modelValue: m(l),
          "onUpdate:modelValue": f[0] || (f[0] = (g) => Fe(l) ? l.value = g : null),
          style: re(m(r)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: ne(() => [
            (T(!0), N(ge, null, Ce(e.selectOption, (g, V) => (T(), le(u, {
              value: g == null ? void 0 : g.val,
              label: g == null ? void 0 : g.label,
              key: "selectInputOp" + (g == null ? void 0 : g.value) + V,
              style: re({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        Q(b, {
          modelValue: m(i),
          "onUpdate:modelValue": f[1] || (f[1] = (g) => Fe(i) ? i.value = g : null),
          placeholder: e.placeholder || m(L)("r.pInput"),
          style: re(m(c)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: o
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
let el = { securityJsCode: "", key: "" };
function Qn({ securityJsCode: t, key: s }) {
  el.securityJsCode = t, el.key = s;
}
function _l(t) {
  return el[t];
}
const Zn = { class: "searchInputWrap" }, eo = { class: "addressListWrap" }, to = { class: "addressList" }, lo = ["onClick"], ao = { class: "addressName" }, no = {
  key: 0,
  class: "addressDetail"
}, Xl = /* @__PURE__ */ ce({
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
  setup(t, { emit: s }) {
    const n = s, e = t, l = E(""), i = E([]), r = W({
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
    }), c = W(() => wt(e.width) ? e.width + "px" : e.width), o = W(() => wt(e.height) ? e.height + "px" : e.height ? e.height : wt(e.width) ? e.width * 0.66 + "px" : "200px"), y = W(() => ({
      width: c.value,
      position: "relative"
    })), p = W(() => e.inputInMap ? {
      width: c.value,
      height: o.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    } : {
      width: c.value,
      height: o.value,
      marginTop: "6px"
    });
    Se(
      () => e.modelValue,
      (_) => {
        if (_ != null && _.name && (l.value = _.name), e.showMap && _ && _.lng && _.lat) {
          if (!S || !B)
            return;
          h({
            lng: _.lng,
            lat: _.lat,
            name: _.name
          });
        }
      }
    );
    const f = "mapId" + Math.floor(Math.random() * 1e9), u = E(null), v = E(null);
    let b;
    function g() {
      v.value && v.value.clientHeight < 10 || !v.value ? Me(g, 300) : Me(K, 100);
    }
    function V() {
      var _;
      (_ = e.modelValue) != null && _.name && (l.value = e.modelValue.name);
    }
    let k, S, B, x;
    function K() {
      Nt.load({
        key: _l("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((_) => {
        k = _, S = new k.Map(f).on("complete", () => {
          var Y, $;
          B = new k.Geocoder(), (Y = e.modelValue) != null && Y.lng && (($ = e.modelValue) != null && $.lat) && h({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
        });
      });
    }
    function M() {
      if (l.value.trim()) {
        if (e.showMap && !S) {
          console.warn("地图未就绪，请稍后重试");
          return;
        }
        Nt.load({
          key: _l("key"),
          version: "2.0",
          plugins: ["AMap.AutoComplete"]
        }).then((_) => {
          x || (x = new _.Autocomplete({
            city: "全国",
            type: ""
          })), x.search(l.value, (Y, $) => {
            Y === "complete" && $.info === "OK" ? i.value = $.tips.slice(0, 10).filter((I) => {
              var j, U;
              return I.name && (I.address || ((j = I.location) == null ? void 0 : j.lng) && ((U = I.location) == null ? void 0 : U.lat));
            }).map((I) => {
              var j, U;
              return {
                name: I.name,
                address: I.address,
                lng: (j = I.location) == null ? void 0 : j.lng,
                lat: (U = I.location) == null ? void 0 : U.lat
              };
            }) : (i.value = [], console.warn("地址搜索失败", $));
          });
        });
      }
    }
    function R(_) {
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
      })) : _.name && (e.showMap ? B == null || B.getLocation(_.name, (Y, $) => {
        var I;
        if (Y === "complete" && $.info === "OK" && ((I = $.geocodes) == null ? void 0 : I.length) > 0) {
          const j = $.geocodes[0].location;
          h({
            name: _.name,
            lng: j.lng,
            lat: j.lat
          }), r.value = {
            name: _.name,
            lng: j.lng,
            lat: j.lat
          }, n("on-change", {
            name: _.name,
            lng: j.lng,
            lat: j.lat
          });
        } else
          console.warn("地址地理编码失败", $);
      }) : (r.value = {
        name: _.name
      }, n("on-change", {
        name: _.name
      })));
    }
    function h({ lng: _, lat: Y, name: $ }) {
      if (typeof _ != "number" || typeof Y != "number") {
        console.warn("无效的坐标数据:", { lng: _, lat: Y });
        return;
      }
      if (!S) {
        console.warn("地图实例不存在");
        return;
      }
      S == null || S.clearMap();
      let I = new k.LngLat(_, Y);
      S == null || S.setCenter(I);
      let j = new k.Marker({
        map: S,
        position: I,
        draggable: !0
      });
      O(_, Y), j.on("dragend", () => {
        let U = j.getPosition();
        r.value = {
          name: $ || null,
          lng: U.lng,
          lat: U.lat
        }, O(U.lng, U.lat);
      }), j.on("click", (U) => {
        var w, F;
        b && b.open(S, (F = (w = U == null ? void 0 : U.target) == null ? void 0 : w.getPosition) == null ? void 0 : F.call(w));
      }), S == null || S.setFitView();
    }
    function O(_, Y) {
      const $ = e.inputInMap ? "mapInfoWindowIKJ" : "mapInfoWindowMA";
      B == null || B.getAddress([_, Y], (I, j) => {
        I === "complete" && j.info === "OK" && j.regeocode && j.regeocode.formattedAddress ? b = new k.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="' + $ + '">' + j.regeocode.formattedAddress + "</div>",
          offset: new k.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (b = null, console.warn("地图获取位置信息失败", j));
      });
    }
    return Ge(() => {
      V(), g();
    }), Al(() => {
      var _;
      S && (S.destroy(), (_ = Nt) == null || _.reset(), S = null, B = null, x = null, b = null);
    }), (_, Y) => (T(), N("div", {
      style: re(m(y)),
      class: we(e.inputInMap ? "containerIKJ" : "containerMapAddress")
    }, [
      P("div", Zn, [
        Q(m(Va), {
          ref_key: "mapInputRef",
          ref: u,
          modelValue: m(l),
          "onUpdate:modelValue": Y[0] || (Y[0] = ($) => Fe(l) ? l.value = $ : null),
          class: we(e.inputInMap && e.showMap ? { mapInputIKJ: !0 } : "searchInput"),
          placeholder: e.placeholder || m(L)("r.search"),
          disabled: e.disabled,
          search: "",
          "enter-button": "",
          onOnEnter: M,
          onOnSearch: M
        }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
        fe(P("div", eo, [
          P("div", to, [
            (T(!0), N(ge, null, Ce(m(i), ($, I) => (T(), N("div", {
              key: I,
              class: "addressItem",
              onClick: (j) => R($)
            }, [
              P("span", ao, q($.name), 1),
              typeof $.address == "string" ? (T(), N("span", no, q($.address), 1)) : ue("", !0)
            ], 8, lo))), 128))
          ])
        ], 512), [
          [ve, m(i).length > 0]
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
var xl;
const Jl = /* @__PURE__ */ ce({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (xl = window == null ? void 0 : window.g) != null && xl.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const n = s, e = t, l = E([]), i = W({
      get() {
        let p = e.modelValue;
        return Array.isArray(p) ? pe(p) : wt(p) ? Yt({
          group: l.value,
          condition: (f) => (f == null ? void 0 : f.value) === p,
          pathKey: "value"
        }) : Pl(p) ? p.split(e.separator) : [];
      },
      set(p) {
        if (e.onlyLastVal)
          De(p) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", Vt(p));
        else {
          if (yt(e.modelValue, p))
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
      We.get(e.url).then((p) => {
        var u;
        let f = null;
        (u = p == null ? void 0 : p.data) != null && u.records ? f = p.data.records : p != null && p.data ? f = p.data : p && (f = p), f ? (typeof e.optionFilter == "function" && Z(e.optionFilter) === "Function" && (f = e.optionFilter(f)), l.value = c(f)) : console.warn("级联数据错误，不能使用");
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
        u != null && u.children && !De(u.children) && (v.children = c(u.children)), f.push(v);
      }
      return f;
    }
    function o(p) {
      return e.onlyLastLabel ? Vt(p) : p.join(e.separator);
    }
    function y(p, f) {
      let u = "";
      De(f) || (u = f.map((v) => v == null ? void 0 : v.label).join(e.separator)), n("on-label-change", u);
    }
    return Ge(r), (p, f) => {
      const u = te("Cascader");
      return T(), le(u, {
        data: m(l),
        modelValue: m(i),
        "onUpdate:modelValue": f[0] || (f[0] = (v) => Fe(i) ? i.value = v : null),
        onOnChange: y,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": o,
        placeholder: e.placeholder || m(L)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), Yl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = W({
      get() {
        if (e.modelValue && (typeof e.modelValue == "string" || typeof e.modelValue == "number")) {
          let i = String(e.modelValue).trim();
          if (/^\d+$/.test(i)) {
            let c = i.substring(0, 2) + "0000000000", o = i.substring(0, 4) + "00000000";
            return [c, o, i];
          }
          return i.indexOf(e.separator) !== -1 ? i.split(e.separator) : [i];
        } else return Array.isArray(e.modelValue) ? pe(e.modelValue) : [];
      },
      set(i) {
        if (De(i))
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
    return (i, r) => (T(), le(m(Ta), rt(i.$attrs, {
      class: "alCascaderMC",
      modelValue: m(l),
      "onUpdate:modelValue": r[0] || (r[0] = (c) => Fe(l) ? l.value = c : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || m(L)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let Xe = 0;
function Ql(t, s, n, e) {
  var l, i, r;
  e && (e.innerHTML = ((l = t[s]) == null ? void 0 : l.name) ?? "", (i = t[s]) != null && i.name ? e.classList.contains("hide") && e.classList.remove("hide") : e.classList.contains("hide") || e.classList.add("hide")), n && (n.src = ((r = t[s]) == null ? void 0 : r.src) ?? t[s], Xe = s);
}
function Vl(t, s, n, e) {
  if (t) {
    let l;
    Xe - 1 < 0 ? l = s.length - 1 : l = Xe - 1, Ql(s, l, n, e);
  }
}
function Sl(t, s, n, e) {
  if (t) {
    let l;
    Xe + 1 > s.length - 1 ? l = 0 : l = Xe + 1, Ql(s, l, n, e);
  }
}
function mt(t, s = 0) {
  var k, S, B, x, K, M, R;
  const n = (...h) => Je.apply(this, h), e = n("r.closePreview"), l = n("r.fullImg"), i = n("r.last"), r = n("r.next");
  let c, o, y;
  Xe = s;
  const p = Array.isArray(t);
  p ? (o = ((k = t[Xe]) == null ? void 0 : k.src) ?? t[Xe], y = (S = t[Xe]) == null ? void 0 : S.name) : o = t, p && t.length > 1 ? c = `${i} ： ←, ↑, A, W | ${r} ： →, ↓, D, S | ${e} ： Esc` : c = `${e} ： Esc`;
  let f = zt(document.getElementsByTagName("body")), u = document.createElement("div");
  u.setAttribute("class", "fullScreenImgByDom"), u.innerHTML = `<div class='previewInner'><div class='pageFBt left${p && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${i}' ></i></div><img src='${o}' alt='${l}' ><div class='pageFBt right${p && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${r}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${c}</p><p class='pName ${y ? "" : "hide"}'>${y}</p>`;
  function v() {
    let h = zt(document.getElementsByTagName("body"));
    h && h.removeChild(u), document.removeEventListener("keyup", V);
  }
  (x = (B = u.querySelector(".ivu-icon-md-close")) == null ? void 0 : B.addEventListener) == null || x.call(B, "click", v);
  const b = u.querySelector("img"), g = u.querySelector(".pName");
  (K = u.querySelector(".pageFBt.left")) == null || K.addEventListener("click", function() {
    Vl(p, t, b, g);
  }), (M = u.querySelector(".pageFBt.right")) == null || M.addEventListener("click", function() {
    Sl(p, t, b, g);
  });
  function V(h) {
    h.keyCode === 37 || h.keyCode === 38 || h.keyCode === 87 || h.keyCode === 65 ? Vl(p, t, b, g) : h.keyCode === 39 || h.keyCode === 40 || h.keyCode === 83 || h.keyCode === 68 ? Sl(p, t, b, g) : h.keyCode === 27 && v();
  }
  document.addEventListener("keyup", V), (R = f == null ? void 0 : f.appendChild) == null || R.call(f, u), u.focus({ preventScroll: !0 });
}
const oo = {
  key: 0,
  class: "previewBoxM"
}, io = { class: "imgLoading" }, so = ["src", "alt"], ro = { class: "deleteModal" }, uo = {
  key: 1,
  class: "previewBoxM"
}, co = {
  key: 0,
  class: "previewImg"
}, fo = ["src", "alt"], po = { class: "deleteModal" }, mo = {
  key: 2,
  class: "customFileListM"
}, ho = {
  key: 0,
  class: "customFileListItem"
}, yo = ["onClick", "title"], vo = { class: "btBoxJ" }, go = {
  key: 3,
  class: "customFileListM"
}, bo = {
  key: 0,
  class: "customFileListItem"
}, ko = { class: "listLoading" }, wo = ["onClick", "title"], _o = { class: "btBoxJ" };
var Ol;
const Zl = /* @__PURE__ */ ce({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (Ol = window == null ? void 0 : window.g) != null && Ol.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const o = E(0), y = W(() => !e.manualUpload && e.showImg && v.value ? "img" : e.manualUpload && e.showImg && v.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !v.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !v.value) ? "list" : ""), p = W(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), f = W({
      //文件集合
      get() {
        return e.manualUpload ? u.value : u.value.map((w) => ({ id: w }));
      },
      set(w) {
        e.manualUpload ? u.value = w || [] : u.value = (w == null ? void 0 : w.map((F) => F == null ? void 0 : F.id)) || [];
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
            return Array.isArray(e.modelValue) ? e.modelValue.filter((w) => w !== "--") : Z(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(w) {
        if (e.length === 1) {
          let F = zt(w);
          n("update:modelValue", F ?? null), n("on-change", F ?? null);
        } else
          n("update:modelValue", pe(w)), n("on-change", pe(w));
      }
    }), v = W(() => {
      let w;
      if (e.manualUpload ? w = f.value : w = i.value, !w)
        return !1;
      for (let F of w) {
        let D;
        if (e.manualUpload ? D = F == null ? void 0 : F.type : D = F == null ? void 0 : F.mimeType, !D || D && !(ft(D) || D === "loading"))
          return !1;
      }
      return !0;
    }), b = W(() => i.value.filter((w) => ft(w == null ? void 0 : w.mimeType))), g = W(() => b.value.map((w) => ({
      src: e.url + "/" + (w == null ? void 0 : w.id) + "/download?preview=true",
      name: w == null ? void 0 : w.name
    }))), V = W(() => f.value.filter((w) => ft(w == null ? void 0 : w.type)));
    Se(V, async (w) => {
      r.value = await S(w);
    }), Se(
      () => f.value,
      async (w) => {
        if (y.value === "localImg")
          w != null && w.length ? l.value = await S(w) : l.value = [];
        else if (w != null && w.length && y.value !== "localList") {
          let F = pe(w);
          const D = pe(i.value);
          for (let X of F)
            if ((X == null ? void 0 : X.name) === void 0)
              if (X.id) {
                const ee = Ut(D, (se) => (se == null ? void 0 : se.id) === X.id);
                ee ? (X.name = ee.name, X.mimeType = ee.mimeType) : c.hasOwnProperty(X.id) ? (X.name = c[X.id].name, X.mimeType = c[X.id].mimeType) : (X.mimeType = "loading", We.get(e.url + "/" + X.id).then((se) => {
                  var me, he, Oe, Ae, ae, xe;
                  X.name = ((Oe = (he = (me = se == null ? void 0 : se.data) == null ? void 0 : me.returnValue) == null ? void 0 : he[0]) == null ? void 0 : Oe.name) || L("r.file") + fl(w, X), X.mimeType = ((xe = (ae = (Ae = se == null ? void 0 : se.data) == null ? void 0 : Ae.returnValue) == null ? void 0 : ae[0]) == null ? void 0 : xe.mimeType) || "unknown", ma(i);
                }).catch(() => {
                  X.name = L("r.file") + fl(F, X);
                }));
              } else
                X.name = L("r.unknown");
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
      return (w == null ? void 0 : w.name) || (w == null ? void 0 : w.split) && Vt(w.split("/")) || w;
    }
    async function S(w) {
      let F = [];
      for (let D of w) {
        let X = await gl(D);
        F.push(X);
      }
      return F;
    }
    function B(w) {
      if (!e.disabled) {
        let F = f.value;
        F == null || F.splice(w, 1), f.value = F, o.value && o.value--;
      }
    }
    function x(w) {
      w != null && w.id && window.open(e.url + "/" + w.id + "/download");
    }
    function K(w) {
      return e.manualUpload ? (w == null ? void 0 : w.type) && ft(w.type) : (w == null ? void 0 : w.id) && w.mimeType && ft(w.mimeType);
    }
    async function M(w) {
      if (e.manualUpload) {
        let F, D;
        if (typeof w == "number" ? (F = w, D = l.value) : w && (F = St(V.value, (X) => X.size === w.size && X.lastModified === w.lastModified), D = r.value), !D)
          return;
        mt(
          D.map((X, ee) => {
            var se;
            return {
              src: X,
              name: (se = V.value[ee]) == null ? void 0 : se.name
            };
          }),
          F
        );
      } else if (w != null && w.id) {
        const F = St(b.value, (D) => D.id === w.id);
        mt(g.value, F);
      }
    }
    function R(w) {
      Z(w) === "String" && w.indexOf("http") > -1 ? window.open(w) : Z(w) === "File" && gl(w).then((F) => {
        Nn(w.name, F);
      });
    }
    function h(w) {
      var F, D;
      if (e.length && o.value >= e.length)
        return ze(L("r.info.title"), L("r.uploadLength", [e.length]), "warning"), !1;
      if (o.value++, e.manualUpload) {
        if (w) {
          let X = Wl(w.name);
          if ((F = e.format) != null && F.length && e.format.indexOf(X) < 0)
            return ze(
              L("r.wrongFileType"),
              L("r.supportType") + (((D = e.format) == null ? void 0 : D.length) && String(e.format) || L("r.none")),
              "warning"
            ), o.value--, !1;
          if (e.maxSize && w.size > e.maxSize * 1024)
            return ze(L("r.fileIsBig"), L("r.supportSize") + e.maxSize + "kb", "warning"), o.value--, !1;
          let ee = f.value;
          ee == null || ee.push(w), f.value = ee;
        }
        return !1;
      } else
        return !0;
    }
    function O(w) {
      o.value--, console.warn(w), ze(L("r.uploadError"), "", "error");
    }
    function _(w, F, D) {
      var X, ee, se, me, he, Oe;
      if ((w == null ? void 0 : w.code) === 0) {
        let Ae = f.value;
        F.id = (ee = (X = w.data) == null ? void 0 : X[0]) == null ? void 0 : ee.id, F.name = (me = (se = w.data) == null ? void 0 : se[0]) == null ? void 0 : me.name, F.mimeType = (Oe = (he = w.data) == null ? void 0 : he[0]) == null ? void 0 : Oe.mimeType, c[F.id] = { name: F.name, mimeType: F.mimeType }, Ae == null || Ae.push(F), f.value = Ae;
      } else
        o.value--, ze(L("r.uploadFail"), (w == null ? void 0 : w.message) || "", "error");
    }
    function Y() {
      o.value--, ze(L("r.fileIsBig"), L("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function $() {
      var w;
      o.value--, ze(
        L("r.wrongFileType"),
        L("r.supportType") + (((w = e.format) == null ? void 0 : w.length) && String(e.format) || L("r.none")),
        "warning"
      );
    }
    function I(w) {
      let F = w == null ? void 0 : w.id, D = w == null ? void 0 : w.mimeType;
      F && (Z(D) === "String" && D.indexOf("image") > -1 ? mt(e.url + "/" + F + "/download?preview=true") : window.open(e.url + "/" + F + "/download?preview=true"));
    }
    function j(w) {
      var D, X, ee;
      let F = (ee = (X = (D = w == null ? void 0 : w.response) == null ? void 0 : D.data) == null ? void 0 : X[0]) == null ? void 0 : ee.id;
      U(null, F);
    }
    function U(w, F) {
      if (!(!F && F !== 0) && !e.disabled && u.value.indexOf(F) !== -1) {
        const D = pe(u.value);
        let X = f.value;
        X == null || X.splice(D.indexOf(F), 1), f.value = X, o.value && o.value--;
      }
    }
    return (w, F) => {
      var se, me, he, Oe, Ae;
      const D = te("Button"), X = te("Upload"), ee = te("Icon");
      return T(), N("div", null, [
        Q(X, {
          name: "files",
          action: m(p),
          "before-upload": h,
          "on-error": O,
          "on-success": _,
          "on-exceeded-size": Y,
          "on-preview": I,
          "on-remove": j,
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
        m(y) === "img" && ((me = m(i)) == null ? void 0 : me.length) > 0 ? (T(), N("div", oo, [
          (T(!0), N(ge, null, Ce(m(i), (ae, xe) => (T(), N(ge, {
            key: ae == null ? void 0 : ae.id
          }, [
            !e.manualUpload && (ae == null ? void 0 : ae.id) !== null ? (T(), N("div", {
              key: 0,
              class: we(["previewImg", { previewLoading: ae.mimeType === "loading" }])
            }, [
              fe(P("div", io, F[0] || (F[0] = [
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
              }, null, 8, so), [
                [ve, ae.mimeType !== "loading"]
              ]),
              fe(P("div", ro, [
                Q(ee, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: m(L)("r.fView"),
                  onClick: (Pe) => m(mt)(m(g), xe)
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
        m(y) === "localImg" && ((he = m(l)) == null ? void 0 : he.length) > 0 ? (T(), N("div", uo, [
          (T(!0), N(ge, null, Ce(m(l), (ae, xe) => (T(), N(ge, {
            key: "manualImg" + xe
          }, [
            e.manualUpload && ae !== null ? (T(), N("div", co, [
              P("img", {
                src: ae,
                alt: "manualImg" + xe
              }, null, 8, fo),
              P("div", po, [
                Q(ee, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (Pe) => M(xe),
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
        m(y) === "localList" && ((Oe = m(f)) == null ? void 0 : Oe.length) > 0 ? (T(), N("div", mo, [
          (T(!0), N(ge, null, Ce(m(f), (ae, xe) => (T(), N(ge, {
            key: "manualItem" + xe
          }, [
            e.manualUpload && ae !== null ? (T(), N("p", ho, [
              ae.name ? (T(), le(ee, {
                key: 0,
                class: "fileTypeIco",
                type: m(bl)(ae.name),
                size: "20"
              }, null, 8, ["type"])) : ue("", !0),
              P("span", {
                class: we(["upNameT", { previewName: K(ae) }]),
                onClick: (Pe) => R(ae),
                title: m(L)("r.download")
              }, q(k(ae)), 11, yo),
              P("span", vo, [
                K(ae) ? (T(), le(ee, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => M(ae),
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
        m(y) === "list" && ((Ae = m(i)) == null ? void 0 : Ae.length) > 0 ? (T(), N("div", go, [
          (T(!0), N(ge, null, Ce(m(i), (ae, xe) => (T(), N(ge, {
            key: "defaultItem" + xe
          }, [
            !e.manualUpload && ae ? (T(), N("div", bo, [
              fe(P("div", ko, F[1] || (F[1] = [
                P("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ve, ae.mimeType === "loading"]
              ]),
              fe(Q(ee, {
                type: m(bl)(ae.name),
                class: "fileTypeIco",
                size: "20"
              }, null, 8, ["type"]), [
                [ve, ae.mimeType !== "loading"]
              ]),
              fe(P("span", {
                class: "upNameT",
                onClick: (Pe) => x(ae),
                title: m(L)("r.download")
              }, q(ae.name || m(L)("r.file") + (xe + 1)), 9, wo), [
                [ve, ae.mimeType !== "loading"]
              ]),
              fe(P("span", _o, [
                K(ae) ? (T(), le(ee, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => M(ae),
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
}), ea = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = E(!1), i = E(!1), r = E(!1), c = W({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(V) {
        n("update:modelValue", [V, o.value]), n("on-change", [V, o.value]);
      }
    }), o = W({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(V) {
        n("update:modelValue", [c.value, V]), n("on-change", [c.value, V]);
      }
    }), y = W(
      () => (c.value || "") + ((c.value || o.value) && " - " || "") + (o.value || "")
    ), p = E();
    Ge(() => {
      p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        r.value = !0;
      }), p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        r.value = !1;
      }), p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (V) => {
        var k;
        !e.disabled && (c.value || o.value) && ((k = V == null ? void 0 : V.stopPropagation) == null || k.call(V), b());
      });
    });
    function f() {
      e.disabled || (l.value = !0);
    }
    function u(V) {
      c.value = V, l.value = !1, i.value = !0;
    }
    function v(V) {
      o.value = V, i.value = !1;
    }
    function b() {
      n("update:modelValue", [null, null]), n("on-change", [null, null]);
    }
    function g() {
      l.value = !1, i.value = !1, c.value && o.value === null && (c.value = null);
    }
    return (V, k) => {
      const S = te("DatePicker"), B = te("Icon"), x = te("Input");
      return T(), N("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: p
      }, [
        Q(S, {
          open: m(i),
          modelValue: m(o),
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
        Q(S, {
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
            P("div", { onClick: f }, [
              Q(x, {
                class: "aRoot",
                modelValue: m(y),
                "onUpdate:modelValue": k[0] || (k[0] = (K) => Fe(y) ? y.value = K : null),
                readonly: "",
                placeholder: e.placeholder || m(L)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: ne(() => [
                  Q(B, {
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
}), ta = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = E(), i = "date-c-r-" + Math.floor(Math.random() * 1e7 + 1e7), r = E({}), c = W({
      get() {
        return e.modelValue;
      },
      set(p) {
        n("update:modelValue", p);
      }
    }), o = W(() => {
      if (Z(e.options) === "Object") {
        const { disabledDate: p, ...f } = e.options;
        return f;
      }
      return {};
    });
    function y(p) {
      var u, v;
      const f = p.target;
      ((v = (u = f.classList) == null ? void 0 : u.contains) != null && v.call(u, "ivu-date-picker-cells-cell") || f.tagName === "EM") && Me(() => {
        var g, V;
        const b = (V = (g = l == null ? void 0 : l.value) == null ? void 0 : g.$refs.pickerPanel) == null ? void 0 : V.rangeState;
        if (b) {
          const k = b.from, S = b.selecting;
          r.value = {
            ...o.value,
            disabledDate: (B) => {
              var x;
              return typeof ((x = e.options) == null ? void 0 : x.disabledDate) == "function" ? e.options.disabledDate(B, k, S) : !1;
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
      var f;
      const p = document.getElementsByClassName(i)[0];
      (f = p == null ? void 0 : p.addEventListener) == null || f.call(p, "click", y, !0);
    }), (p, f) => {
      const u = te("DatePicker");
      return T(), le(u, {
        ref_key: "dateC",
        ref: l,
        modelValue: m(c),
        "onUpdate:modelValue": f[0] || (f[0] = (v) => Fe(c) ? c.value = v : null),
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
}), Vo = { class: "editor-pro-root" }, la = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = ht(), i = W({
      get() {
        return e.modelValue;
      },
      set(p) {
        n("update:modelValue", p), n("on-change", p);
      }
    }), r = W(
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
    ), c = W(
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
                      for (let V of g.data) {
                        const k = b + "/" + (V == null ? void 0 : V.id) + "/download";
                        f(k, v, k);
                      }
                    else {
                      const V = b + "/" + g.data.id + "/download";
                      f(V, v, V);
                    }
                }).catch(() => {
                  ze(L("r.uploadFail"), "", "error");
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
                        const V = v + "/" + (g == null ? void 0 : g.id) + "/download";
                        f(V);
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
    ), o = W(() => ({
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
    ), ll(() => {
      l.value && l.value.destroy();
    }), (p, f) => (T(), N("div", Vo, [
      fe(Q(m(Ba), {
        class: "editor-pro-toolbar",
        editor: m(l),
        defaultConfig: m(r),
        mode: p.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ve, !p.disabled]
      ]),
      Q(m(La), {
        class: "editor-pro-editor",
        modelValue: m(i),
        "onUpdate:modelValue": f[0] || (f[0] = (u) => Fe(i) ? i.value = u : null),
        defaultConfig: m(c),
        mode: p.mode,
        onOnCreated: y,
        style: re(m(o))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), So = {
  key: 19,
  class: "formInfoTxtXN"
}, Co = {
  key: 20,
  class: "formTitleTxtXN"
}, To = {
  key: 21,
  style: { display: "inline-block", width: "4px" }
}, Cl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = W(() => {
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
      const v = te("InputNumber"), b = te("Input"), g = te("Option"), V = te("Select"), k = te("Radio"), S = te("Icon"), B = te("RadioGroup"), x = te("Checkbox"), K = te("CheckboxGroup"), M = te("TimePicker"), R = te("FormItem");
      return e.item ? (T(), le(R, {
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
            placeholder: e.item.placeholder || m(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: u[1] || (u[1] = (h) => r(h, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (T(), le(b, {
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
            placeholder: e.item.placeholder || m(L)("r.pInput"),
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
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (T(), le(V, {
            key: 3,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[4] || (u[4] = (h) => f.tempKeys[e.item.tempKey] = h),
            style: re(f.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || m(L)("r.pSelect"),
            onOnChange: u[5] || (u[5] = (h) => r(h, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: ne(() => [
              (T(!0), N(ge, null, Ce(e.item.options, (h, O) => (T(), le(g, {
                value: h.val,
                label: h.label || h.val,
                key: "option-" + e.item.key + O,
                disabled: !!h.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (T(), le(ql, {
            key: 4,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[6] || (u[6] = (h) => f.tempKeys[e.item.tempKey] = h),
            "label-width": f.labelWidth,
            "item-width": m(l),
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || m(L)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: o
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (T(), le(Yl, {
            key: 5,
            style: re(f.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[7] || (u[7] = (h) => e.valGroup[e.item.key] = h),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || m(L)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: u[8] || (u[8] = (h) => y(h, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (T(), le(Jl, {
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
            placeholder: e.item.placeholder || m(L)("r.pSelect"),
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
            style: re(f.itemStyle),
            onOnChange: u[13] || (u[13] = (h) => c(h, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[14] || (u[14] = (h) => f.tempKeys[e.item.tempKey] = h)
          }, {
            default: ne(() => [
              (T(!0), N(ge, null, Ce(e.item.options, (h) => (T(), le(k, {
                key: "radioItem" + h.val,
                label: h.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: ne(() => [
                  h.icon && !e.item.buttonType ? (T(), le(S, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : ue("", !0),
                  P("span", null, q(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (T(), le(x, {
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
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[17] || (u[17] = (h) => f.tempKeys[e.item.tempKey] = h),
            onOnChange: u[18] || (u[18] = (h) => c(h, e.item))
          }, {
            default: ne(() => [
              (T(!0), N(ge, null, Ce(e.item.options, (h) => (T(), le(x, {
                key: "checkItem" + h.val,
                label: h.val,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: ne(() => [
                  h.icon ? (T(), le(S, {
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
            "onUpdate:modelValue": u[19] || (u[19] = (h) => f.tempKeys[e.item.tempKey] = h),
            autosize: e.item.autosize || { minRows: 2 },
            style: re(f.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || m(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: u[20] || (u[20] = (h) => r(h, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (T(), le(Zl, {
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
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (T(), le(ta, {
            key: 13,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[23] || (u[23] = (h) => f.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placeholder: e.item.placeholder || m(L)("r.selectDate"),
            options: e.item.dateOptions || {},
            "time-picker-options": f.item.timePickerOptions || {},
            clearable: e.item.clearable !== !1,
            onOnChange: u[24] || (u[24] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "time-picker-options", "clearable"])) : e.item.type === "time" ? (T(), le(M, {
            key: 14,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[25] || (u[25] = (h) => f.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(L)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: u[26] || (u[26] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (T(), le(ea, {
            key: 15,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[27] || (u[27] = (h) => f.tempKeys[e.item.tempKey] = h),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(L)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: u[28] || (u[28] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (T(), le(la, {
            key: 16,
            class: "inlineBlock",
            style: re(f.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[29] || (u[29] = (h) => e.valGroup[e.item.key] = h),
            placeholder: e.item.placeholder || m(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: u[30] || (u[30] = (h) => r(h, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (T(), le(Xl, {
            key: 17,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[31] || (u[31] = (h) => f.tempKeys[e.item.tempKey] = h),
            style: re(f.itemStyle),
            placeholder: e.item.placeholder || m(L)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            "input-in-map": e.item.inputInMap !== !1,
            onOnChange: u[32] || (u[32] = (h) => r(h, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height", "input-in-map"])) : e.item.type === "custom" ? (T(), N("div", {
            key: 18,
            class: "inlineBlock",
            style: re(f.itemStyle)
          }, [
            Ne(f.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ue("", !0),
          e.item.info ? (T(), N("div", So, q(e.item.info), 1)) : ue("", !0),
          e.item.title ? (T(), N("div", Co, q(e.item.title), 1)) : ue("", !0),
          e.inline ? ue("", !0) : (T(), N("span", To))
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : ue("", !0);
    };
  }
}), Bo = { class: "inlineBlock" }, Rt = /* @__PURE__ */ ce({
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
    var ul, dl;
    const e = n, l = t, i = E(null), r = E({}), c = E([]), o = E({});
    let y = [];
    const p = ((ul = window == null ? void 0 : window.g) == null ? void 0 : ul.mgrURL) ?? "";
    let f = E([]), u = [];
    const v = E(!1), b = E(Math.random() * 1e8 + 1e3), g = (dl = window == null ? void 0 : window.g) != null && dl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let V = !1;
    const k = W(() => Array.isArray(l.formData.length ? l.formData[0] : !1)), S = W(
      () => l.inline ? {
        width: l.itemWidth + l.labelWidth + "px"
      } : {}
    ), B = W(
      () => l.inline ? {
        width: "100%"
      } : { width: l.contentWidth }
    ), x = W(() => {
      let d = pe(l.formRules);
      for (let a in d)
        if (d.hasOwnProperty(a))
          if (Array.isArray(d[a]))
            for (let A of d[a])
              A && A && !(A.message || A.validator) && (A.message = L("r.required"));
          else Z(d[a]) === "Object" && (d[a].message || d[a].validator || (d[a].message = L("r.required")));
      return d;
    }), K = W(() => {
      let d = [];
      if (k.value)
        for (let a of c.value)
          h(a, d);
      else
        h(c.value, d);
      return d.concat(f.value, u);
    }), M = W(() => {
      let d = [];
      if (k.value)
        for (let a of c.value)
          O(a, d);
      else
        O(c.value, d);
      return d;
    });
    function R(d) {
      return d.filter((a) => a == null ? void 0 : a.slotName);
    }
    function h(d, a) {
      for (let A of d)
        if ((A == null ? void 0 : A.showing) === !0 && A.key && A.type !== "selectInput" && (a.push(A.key), A.key2 && a.push(A.key2), A.collectLabel)) {
          if (!Array.isArray(A.collectLabel) && A.collectLabel.key)
            a.push(A.collectLabel.key);
          else if (Array.isArray(A.collectLabel))
            for (let C of A.collectLabel)
              C.key && a.push(C.key);
        }
    }
    function O(d, a) {
      for (let A of d)
        (A == null ? void 0 : A.showing) === !0 && A.key && A.type !== "selectInput" && a.push(A.key);
    }
    function _() {
      return new Promise((d) => {
        I(), $().then(() => {
          e("on-reset"), d(!0);
        });
      });
    }
    function Y() {
      return new Promise((d) => {
        for (let a of y)
          a();
        y = [], o.value = {}, ae(), me(), $().then(() => {
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
    function I() {
      let d = w();
      for (let a in r.value)
        if (r.value.hasOwnProperty(a))
          if (Re(d[a]))
            r.value[a] = d[a];
          else if (Array.isArray(r.value[a]))
            r.value[a] = [];
          else if (Z(r.value[a]) === "Boolean")
            r.value[a] = !1;
          else {
            const A = _t(l.formData, (C) => (C == null ? void 0 : C.key) === a);
            A && (A.type === "editor" || A.type === "editorPro") ? r.value[a] = "" : r.value[a] = null;
          }
      j(d);
    }
    function j(d) {
      for (let a in o.value)
        o.value.hasOwnProperty(a) && (Re(d[a]) ? o.value[a] = d[a] : Array.isArray(o.value[a]) ? o.value[a] = [] : Z(o.value[a]) === "Object" && o.value[a].hasOwnProperty("key") && o.value[a].hasOwnProperty("val") ? o.value[a].val = null : o.value[a] = null);
    }
    function U(d) {
      let a = w();
      Re(a[d]) ? o.value[d] = a[d] : Array.isArray(o.value[d]) ? o.value[d] = [] : o.value[d] = null;
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
      for (let A of d)
        A.tempKey && Re(A.defaultVal) && se(A, a), A.key && Re(A.defaultVal) && (a[A.key] = A.defaultVal), A.key2 && Re(A.defaultVal2) && (a[A.key2] = A.defaultVal2);
    }
    function D(d) {
      if (d.show) {
        if (Z(d.show) === "Object")
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
      return !(d != null && d.showing) && a && (d != null && d.key) ? (d.showing = a, d.defaultVal !== void 0 && (d.tempKey ? (o.value[d.tempKey] === null || o.value[d.tempKey] === void 0 || (Z(o.value[d.tempKey]) === "Object" || Array.isArray(o.value[d.tempKey])) && De(o.value[d.tempKey])) && se(d, o.value) : (r.value[d.key] === null || r.value[d.key] === void 0) && (r.value[d.key] = d.defaultVal), d.key2 && d.deafultVal2 !== void 0 && (r.value[d.key2] === null || r.value[d.key2] === void 0) && d.type !== "inputMap" && (r.value[d.key2] = d.defaultVal2)), d.tempKey && Pe(o.value[d.tempKey], d)) : d.showing = a, a;
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
              const A = "selectInput" + Math.floor(Math.random() * 1e8);
              a.tempKey = A, o.value[A] = E({
                key: a.key || null,
                val: a.defaultVal || null
              }), y.push(
                Se(
                  () => o.value[A],
                  (J) => {
                    Pe(J, a);
                  },
                  { immediate: !0 }
                )
              );
              break;
            case "inputMap":
              const C = "inputMap" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = C, a.key3 ? o.value[C] = a.defaultVal !== void 0 && a.defaultVal2 !== void 0 ? {
                lng: a.defaultVal,
                lat: a.defaultVal2,
                name: a.defaultVal3 || ""
              } : {
                lng: null,
                lat: null,
                name: null
              } : o.value[C] = a.defaultVal !== void 0 && a.defaultVal2 !== void 0 ? {
                lng: a.defaultVal,
                lat: a.defaultVal2
              } : {
                lng: null,
                lat: null
              }, y.push(
                Se(
                  () => o.value[C],
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
              a.key && (a.tempKey = oe, o.value[oe] = a.defaultVal !== void 0 ? a.defaultVal : null, y.push(
                Se(
                  () => o.value[oe],
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
                              let Ue = r.value[Be.valKey];
                              if (Ue && !Array.isArray(Ue) || Array.isArray(Ue) && Ue.length || Ue === 0 || Ue === !1)
                                ie += "&" + Be.key + "=" + Ue;
                              else if (!Be.notRequired)
                                return !1;
                            }
                          return ie;
                        },
                        (ie) => {
                          let Be = pe(o.value[a.tempKey]);
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
                    Se(
                      () => typeof a.changeOption == "object" && !Array.isArray(a.changeOption) ? r.value[a.changeOption.valKey] : !1,
                      (J) => {
                        let ie = pe(o.value[a.tempKey]);
                        if (o.value[a.tempKey] = null, (J && !Array.isArray(J) || Array.isArray(J) && J.length || J === 0 || J === !1) && a.optionUrl && typeof a.changeOption == "object" && !Array.isArray(a.changeOption)) {
                          let Be = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                          Oe((Be + "&" + a.changeOption.key + "=" + J).replace(/\?&/, "?"), a, ie);
                        } else
                          a.localOption ? qe(a, "options", [...a.localOption]) : qe(a, "options", []), Re(ie) && Ae(ie, a);
                      },
                      { immediate: !0 }
                    )
                  ) : Z(a.changeOption) === "Boolean" && y.push(
                    Se(
                      () => {
                        const J = _t(l.formData, (ie) => (ie == null ? void 0 : ie.key) === a.key);
                        return J.optionUrl = ha(J.optionUrl), J.optionUrl.value;
                      },
                      (J) => {
                        let ie = pe(o.value[a.tempKey]);
                        o.value[a.tempKey] = null, J ? Oe(J, a, ie) : (a.localOption ? qe(a, "options", [...a.localOption]) : qe(a, "options", []), Re(ie) && Ae(ie, a));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
                else a.optionUrl && Oe(a.optionUrl, a);
              else Z(a.borrowOption) === "String" && $e(function() {
                a.options = _t(c.value, (J) => (J == null ? void 0 : J.key) === a.borrowOption).options;
              });
              const de = "opEle" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = de, a.type === "select" && a.multiple || a.type === "checkboxGroup" ? o.value[de] = a.defaultVal !== void 0 ? a.defaultVal : [] : a.booleanVal ? o.value[de] = a.defaultVal !== void 0 ? a.defaultVal ? 1 : 0 : null : o.value[de] = a.defaultVal !== void 0 ? a.defaultVal : null, y.push(
                Se(
                  () => o.value[de],
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
              a.tempKey = Te, a.dateType === "date" || a.dateType === "datetime" || a.dateType === "time" || a.dateType === "year" || a.dateType === "month" ? o.value[Te] = a.defaultVal || null : (a.dateType === "daterange" || a.dateType === "datetimerange" || a.dateType === "timerange" || a.type === "monthRange") && (o.value[Te] = a.defaultVal && a.defaultVal2 && [a.defaultVal, a.defaultVal2] || []), y.push(
                Se(
                  () => o.value[Te],
                  (J) => {
                    Pe(J, a);
                  }
                )
              );
              break;
          }
    }
    function Oe(d, a, A) {
      We.get(d).then((C) => {
        var Te;
        let oe;
        if (Fe(a.options) ? oe = a.options.value : oe = a.options, !oe)
          return;
        let de = ((Te = C == null ? void 0 : C.data) == null ? void 0 : Te.records) || (C == null ? void 0 : C.data) || C || [];
        Array.isArray(de) ? (a.optionFilter && Z(a.optionFilter) === "Function" && (de = a.optionFilter(de)), a.optionLabel && a.optionVal ? (oe.length = 0, oe.push(
          ...de.map((J) => {
            let ie;
            if (Array.isArray(a.optionLabel)) {
              let Be = "";
              a.optionLabel.forEach((Ue, cl) => {
                let $t = String(J[Ue]);
                cl === 1 ? Be += "（" + $t : cl > 1 ? Be += "、" + $t : Be += $t;
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
        )) : (oe.length = 0, oe.push(...de))) : oe.length = 0, a.localOption && oe.unshift(...a.localOption), Re(A) && Ae(A, a), a.disableOptionByOthers && (Z(a.disableOptionByOthers) === "String" ? y.push(
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
    function Ae(d, a) {
      Array.isArray(Ft(a.options)) && St(Ft(a.options), { val: d }) !== -1 && (o.value[a.tempKey] = d);
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
              const oe = et(a, d);
              if (Array.isArray(a.collectLabel)) {
                for (let de of a.collectLabel)
                  if (de != null && de.key && de.valKey) {
                    const Te = He(de.key);
                    let J = null;
                    Array.isArray(oe) ? (J = oe.map((ie) => ie[de.valKey]), r.value[de.key] = J, Te && (o.value[Te.tempKey] = J)) : (oe && Re(oe[de.valKey]) && (J = oe[de.valKey]), r.value[de.key] = J, Te && (Te.booleanVal && typeof J == "boolean" ? o.value[Te.tempKey] = J ? 1 : 0 : o.value[Te.tempKey] = J));
                  }
              } else if (typeof a.collectLabel == "object" && a.collectLabel.key && a.collectLabel.valKey) {
                const de = He(a.collectLabel.key);
                let Te = null;
                Array.isArray(oe) ? (Te = oe.map(
                  (J) => a.collectLabel && !Array.isArray(a.collectLabel) && J[a.collectLabel.valKey]
                ), r.value[a.collectLabel.key] = Te, de && (o.value[de.tempKey] = Te)) : (oe && Re(oe[a.collectLabel.valKey]) && (Te = oe[a.collectLabel.valKey]), r.value[a.collectLabel.key] = Te, de && (de.booleanVal && typeof Te == "boolean" ? o.value[de.tempKey] = Te ? 1 : 0 : o.value[de.tempKey] = Te));
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!a.key)
              return;
            let A = a.dateType;
            const C = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "YYYY-MM"
            };
            if (A === "date" || A === "datetime" || A === "time" || A === "year" || A === "month")
              d ? (A === "time" ? r.value[a.key] = d : r.value[a.key] = ct(d).format(typeof a.format == "string" ? a.format : C[A]), A === "date" && a.addTime && (r.value[a.key] += " 00:00:00")) : r.value[a.key] = null;
            else if (a.type === "monthRange" || A === "daterange" || A === "datetimerange" || A === "timerange") {
              if (!a.key2)
                return;
              d && d[0] && d[1] ? (A === "timerange" ? (r.value[a.key] = d[0], r.value[a.key2] = d[1]) : a.type === "monthRange" ? (r.value[a.key] = typeof a.format == "string" && ct(d[0]).format(a.format) || d[0], r.value[a.key2] = typeof a.format == "string" && a.format && ct(d[1]).format(a.format) || d[1]) : (r.value[a.key] = ct(d[0]).format(a.format || A && C[A]), r.value[a.key2] = ct(d[1]).format(a.format || A && C[A])), A === "daterange" && a.addTime && (r.value[a.key] += " 00:00:00", r.value[a.key2] += " 23:59:59")) : (r.value[a.key] = null, r.value[a.key2] = null);
            }
            break;
        }
    }
    function et(d, a) {
      const A = Ft(d == null ? void 0 : d.options);
      if (A)
        if (d != null && d.multiple || (d == null ? void 0 : d.type) === "checkboxGroup") {
          if (a) {
            let C = [];
            for (let oe of A)
              a.indexOf(oe == null ? void 0 : oe.val) !== -1 && C.push(oe);
            return C;
          }
          return !1;
        } else {
          if (a || a === 0 || a === !1) {
            for (let C of A)
              if ((C == null ? void 0 : C.val) === a)
                return C;
          }
          return !1;
        }
    }
    function He(d) {
      if (k.value) {
        for (let a of c.value) {
          const A = G(a, d);
          if (A)
            return A;
        }
        return !1;
      }
      return G(c.value, d);
    }
    function G(d, a) {
      for (let A of d)
        if (A.key === a)
          return A;
      return !1;
    }
    function z(d, a) {
      let A = {};
      for (let C in r.value)
        r.value.hasOwnProperty(C) && d[C] !== void 0 && (A[C] = d[C], delete d[C]);
      _e(A, a);
      for (let C in d)
        d.hasOwnProperty(C) && (u.indexOf(C) < 0 && u.push(C), r.value[C] = d[C]);
    }
    function ye(d) {
      let a = pe(d);
      if (k.value) {
        let A = [];
        for (let C of l.formData)
          A.push(...be(C, a));
        return A;
      }
      return be(l.formData, a);
    }
    function be(d, a) {
      return d.filter((A) => {
        for (let C of Object.keys(a))
          if ((A == null ? void 0 : A.key) === C && M.value.indexOf(C) > -1 && !(a[C] === null || (Array.isArray(a[C]) || Z(a[C]) === "Object") && De(a[C])))
            return delete a[C], !0;
        return !1;
      }).map((A) => A == null ? void 0 : A.key);
    }
    function _e(d, a = !1) {
      let A = pe(d);
      H(d, a);
      for (let C in r.value)
        if (r.value.hasOwnProperty(C) && d[C] !== void 0 && d[C] !== "--") {
          if (Array.isArray(d[C]))
            d[C] = d[C].filter((oe) => oe !== "--");
          else if (Z(d[C]) === "Object")
            for (let oe in d[C])
              d[C].hasOwnProperty(oe) && d[C][oe] === "--" && (d[C][oe] = null);
          r.value[C] = d[C];
        } else a || (r.value[C] = Array.isArray(r.value[C]) ? [] : null);
      $e(function() {
        ia(ye(A));
      });
    }
    function H(d, a = !1) {
      if (k.value)
        for (let A of c.value)
          Ve(A, d, a);
      else
        Ve(c.value, d, a);
    }
    function Ve(d, a, A = !1) {
      for (let C of d)
        if (C != null && C.key && (A && (a[C.key] !== void 0 || C.key2 && a[C.key2] !== void 0) || !A) && C.tempKey)
          switch (C.type) {
            case "inputMap":
              if (!C.key2)
                continue;
              Z(a[C.key]) === "Number" && Z(a[C.key2] === "Number") ? C.key3 ? o.value[C.tempKey] = {
                lng: a[C.key],
                lat: a[C.key2],
                name: a[C.key3]
              } : o.value[C.tempKey] = {
                lng: a[C.key],
                lat: a[C.key2]
              } : C.key3 ? o.value[C.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : o.value[C.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              a[C.key] && a[C.key] !== "--" || a[C.key] === 0 ? o.value[C.tempKey] = a[C.key] : o.value[C.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              a[C.key] && a[C.key] !== "--" || a[C.key] === 0 || a[C.key] === !1 ? C.multiple || C.type === "checkboxGroup" ? o.value[C.tempKey] = [...a[C.key]] : C.booleanVal ? o.value[C.tempKey] = a[C.key] ? 1 : 0 : o.value[C.tempKey] = a[C.key] : C.multiple || C.type === "checkboxGroup" ? o.value[C.tempKey] = [] : o.value[C.tempKey] = null;
              break;
            case "date":
            case "time":
              if (C.dateType === "date" || C.dateType === "datetime" || C.dateType === "year" || C.dateType === "month" || C.dateType === "time")
                o.value[C.tempKey] = a[C.key] && a[C.key] !== "--" ? a[C.key] : null;
              else if (C.dateType === "daterange" || C.dateType === "datetimerange" || C.dateType === "timerange") {
                if (!C.key2)
                  continue;
                o.value[C.tempKey] = a[C.key] && a[C.key] !== "--" && a[C.key2] && a[C.key2] !== "--" && [a[C.key], a[C.key2]] || [];
              }
              break;
          }
    }
    function tt(d) {
      if (Array.isArray(d))
        for (let a of d)
          lt(a);
      else Z(d) === "Object" && lt(d);
    }
    function lt(d) {
      const { index: a, indexB: A, key: C, val: oe } = d;
      if (typeof a == "number")
        if (Array.isArray(c.value[a])) {
          if (typeof A == "number")
            if (C && d.hasOwnProperty("val"))
              c.value[a][A][C] = oe;
            else
              for (let de of Object.keys(d))
                de !== "index" && C !== "indexB" && (c.value[a][A][de] = d[de]);
        } else if (C && d.hasOwnProperty("val"))
          c.value[a][C] = oe;
        else
          for (let de of Object.keys(d))
            de !== "index" && (c.value[a][de] = d[de]);
    }
    function ut({ label: d, root: a }) {
      a.key2 && (r.value[a.key2] = d), at({
        e: d,
        root: a
      });
    }
    function je(d) {
      d.beforeKey && ba(f.value, (a) => a === d.beforeKey), d.key && (f.value.indexOf(d.key) === -1 && f.value.push(d.key), at({
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
    function sl({ e: d, root: a }) {
      at({
        e: d,
        root: a
      }), $e(function() {
        var A, C;
        (C = (A = i.value) == null ? void 0 : A.validateField) == null || C.call(A, a.key);
      });
    }
    function at({ e: d, root: a }) {
      Me(() => {
        var C;
        let A = {
          event: d
        };
        if (a.key && (A[a.key] = r.value[a.key]), a.key2 && (A[a.key2] = r.value[a.key2]), Array.isArray(a.collectLabel))
          for (let oe of a.collectLabel)
            A[oe.key] = r.value[oe.key];
        else (C = a.collectLabel) != null && C.key && (A[a.collectLabel.key] = r.value[a.collectLabel.key]);
        e("on-item-change", A);
      }, 300);
    }
    function rl() {
      let d = {};
      for (let a of K.value)
        d[a] = r.value[a];
      return l.trim && (d = Lt(d)), d;
    }
    function na() {
      var d, a;
      (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d);
    }
    function oa(d) {
      Me(() => {
        var a, A;
        (A = (a = i.value) == null ? void 0 : a.validateField) == null || A.call(a, d, () => {
        });
      }, 10);
    }
    function ia(d) {
      Me(() => {
        var a, A;
        if (Array.isArray(d))
          for (let C of d)
            (A = (a = i.value) == null ? void 0 : a.validateField) == null || A.call(a, C, () => {
            });
      }, 10);
    }
    function sa(d) {
      d !== void 0 && (v.value = !!d);
    }
    function Mt() {
      var d, a;
      l.disabled || (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d, (A) => {
        V || (V = !0, A && (v.value = !0, e("on-submit", rl())), Me(() => {
          V = !1;
        }, 2e3));
      });
    }
    return Ge(() => {
      ae(), me();
    }), s({
      resetForm: _,
      refreshFormDom: $,
      reRenderForm: Y,
      setItemToValGroup: z,
      updateValGroup: _e,
      updateFormDataT: tt,
      validate: na,
      reValidate: oa,
      changeLoading: sa,
      getValGroup: rl,
      submit: Mt
    }), (d, a) => {
      const A = te("FormItem"), C = te("Button"), oe = te("Form");
      return T(), le(oe, {
        ref_key: "formGroupXRef",
        ref: i,
        model: m(r),
        rules: m(x),
        "label-width": l.labelWidth,
        inline: l.inline,
        "show-message": l.showMessage,
        class: "formXN",
        key: m(b)
      }, {
        default: ne(() => [
          Q(A, { style: { display: "none" } }, {
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
              D(J) ? (T(), le(Cl, {
                key: 0,
                item: J,
                style: re(m(S)),
                "item-style": m(B),
                "val-group": m(r),
                "temp-keys": m(o),
                inline: l.inline,
                disabled: l.disabled,
                "label-width": l.labelWidth,
                "item-width": l.itemWidth,
                "mgr-url": m(p),
                "upload-url": m(g),
                onItemChange: at,
                onReValidate: sl,
                onClearTempKeyItem: U,
                onSelectInputChange: je,
                onAlNameChange: gt,
                onAsyncLabelChange: ut
              }, st({ _: 2 }, [
                Ce(R(de), (Be) => ({
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
            !m(k) && D(de) ? (T(), le(Cl, {
              key: 0,
              item: de,
              style: re(m(S)),
              "item-style": m(B),
              "val-group": m(r),
              "temp-keys": m(o),
              inline: l.inline,
              disabled: l.disabled,
              "label-width": l.labelWidth,
              "item-width": l.itemWidth,
              "mgr-url": m(p),
              "upload-url": m(g),
              onItemChange: at,
              onReValidate: sl,
              onClearTempKeyItem: U,
              onSelectInputChange: je,
              onAlNameChange: gt,
              onAsyncLabelChange: ut
            }, st({ _: 2 }, [
              Ce(R(d.formData), (J) => ({
                name: J.slotName,
                fn: ne((ie) => [
                  Ne(d.$slots, J.slotName, {
                    valGroup: ie.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ue("", !0)
          ], 64))), 128)),
          l.showLongOkBt ? (T(), le(A, { key: 1 }, {
            default: ne(() => [
              Q(C, {
                onClick: Mt,
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
          P("div", Bo, [
            l.showInlineOkBt ? (T(), le(C, {
              key: 0,
              type: "primary",
              class: we({ inlineFormBtXN: l.inline, okBtnXN: !0 }),
              onClick: Mt,
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
}), Lo = /* @__PURE__ */ ce({
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
  setup(t, { expose: s, emit: n }) {
    const e = n, l = t, i = E({ width: l.width }), r = E(!1), c = E(), o = W(() => {
      var M, R;
      if (Array.isArray(l.formData))
        if (Array.isArray(l.formData[0])) {
          let h = [];
          for (let O of l.formData)
            O && (h = h.concat(
              O.filter((_) => (_ == null ? void 0 : _.type) === "custom" || (_ == null ? void 0 : _.type) === "input" && _.slotName && _.slotPosition)
            ));
          return h;
        } else
          return (R = (M = l.formData) == null ? void 0 : M.filter) == null ? void 0 : R.call(
            M,
            (h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition
          );
      return [];
    });
    function y() {
      return new Promise((M) => {
        var R, h;
        (h = (R = c.value).resetForm) == null || h.call(R).then((O) => {
          M(O);
        });
      });
    }
    function p() {
      return new Promise((M) => {
        var R, h;
        (h = (R = c.value).refreshFormDom) == null || h.call(R).then((O) => {
          M(O);
        });
      });
    }
    function f() {
      return new Promise((M) => {
        var R, h;
        (h = (R = c.value).reRenderForm) == null || h.call(R).then((O) => {
          M(O);
        });
      });
    }
    function u(M, R) {
      var h, O;
      (O = (h = c.value).setItemToValGroup) == null || O.call(h, M, R);
    }
    function v(M, R) {
      var h, O;
      (O = (h = c.value).updateValGroup) == null || O.call(h, M, R);
    }
    function b(M) {
      var R, h;
      (h = (R = c.value).updateFormDataT) == null || h.call(R, M);
    }
    function g() {
      var M, R;
      (R = (M = c.value).validate) == null || R.call(M);
    }
    function V(M) {
      var R, h;
      (h = (R = c.value).reValidate) == null || h.call(R, M);
    }
    function k(M) {
      var R, h;
      M !== void 0 && (r.value = !!M, (h = (R = c.value).changeLoading) == null || h.call(R, r.value));
    }
    function S() {
      var M, R;
      return (R = (M = c.value).getValGroup) == null ? void 0 : R.call(M);
    }
    function B() {
      r.value = !0;
    }
    function x() {
      var M, R;
      (R = (M = c.value).submit) == null || R.call(M);
    }
    function K() {
      e("on-cancel"), Me(() => {
        var M, R;
        r.value = !1, (R = (M = c.value).changeLoading) == null || R.call(M, !1);
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
      reValidate: V,
      changeLoading: k,
      getValGroup: S,
      submit: x,
      close: K
    }), (M, R) => {
      const h = te("Button");
      return T(), N("div", {
        style: re(m(i)),
        class: "formGroupBoxVM"
      }, [
        Q(Rt, rt({
          ref_key: "formRRef",
          ref: c
        }, M.$attrs, {
          "form-data": l.formData,
          "label-width": l.labelWidth,
          "content-width": l.contentWidth,
          "item-width": l.itemWidth,
          btnLoading: l.btnLoading,
          disabled: l.disabled,
          onOnSubmit: B
        }), st({ _: 2 }, [
          Ce(m(o), (O) => ({
            name: O.slotName,
            fn: ne(({ valGroup: _ }) => [
              Ne(M.$slots, O.slotName, { valGroup: _ })
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
              onClick: x,
              class: "form-save-btn",
              loading: l.btnLoading && m(r),
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
}), tl = /* @__PURE__ */ ce({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => Le().searchFormLabelWidth },
    itemWidth: { default: () => Le().searchFormItemWidth },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(t, { expose: s, emit: n }) {
    const e = n, l = t, i = E(), r = W(() => {
      var B, x;
      if (Array.isArray(l.formData[0])) {
        let K = [];
        for (let M of l.formData)
          M && (K = K.concat(
            M.filter((R) => (R == null ? void 0 : R.type) === "custom" || (R == null ? void 0 : R.type) === "input" && R.slotName && R.slotPosition)
          ));
        return K;
      }
      return (x = (B = l.formData) == null ? void 0 : B.filter) == null ? void 0 : x.call(
        B,
        (K) => (K == null ? void 0 : K.type) === "custom" || (K == null ? void 0 : K.type) === "input" && K.slotName && K.slotPosition
      );
    });
    function c() {
      return new Promise((B) => {
        var x, K;
        (K = (x = i.value).resetForm) == null || K.call(x).then(() => {
          B();
        });
      });
    }
    function o() {
      return new Promise((B) => {
        var x, K;
        (K = (x = i.value).refreshFormDom) == null || K.call(x).then(() => {
          B();
        });
      });
    }
    function y() {
      return new Promise((B) => {
        var x, K;
        (K = (x = i.value).reRenderForm) == null || K.call(x).then(() => {
          B();
        });
      });
    }
    function p(B, x) {
      var K, M;
      (M = (K = i.value).setItemToValGroup) == null || M.call(K, B, x);
    }
    function f(B, x) {
      var K, M;
      (M = (K = i.value).updateValGroup) == null || M.call(K, B, x);
    }
    function u(B) {
      var x, K;
      (K = (x = i.value).updateFormDataT) == null || K.call(x, B);
    }
    function v() {
      var B, x;
      (x = (B = i.value).validate) == null || x.call(B);
    }
    function b(B) {
      var x, K;
      (K = (x = i.value).reValidate) == null || K.call(x, B);
    }
    function g(B) {
      var x, K;
      (K = (x = i.value).changeLoading) == null || K.call(x, B === void 0 ? !1 : B);
    }
    function V() {
      var B, x;
      return (x = (B = i.value).getValGroup) == null ? void 0 : x.call(B);
    }
    function k(B) {
      e("on-search", B);
    }
    function S() {
      var B, x;
      (x = (B = i.value).submit) == null || x.call(B);
    }
    return Ge(() => {
      const B = i.value.$el;
      B != null && B.parentNode && B.parentNode.addEventListener("keyup", (x) => {
        (x == null ? void 0 : x.keyCode) === 13 && S();
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
      getValGroup: V,
      submit: S
    }), (B, x) => (T(), le(Rt, rt({
      ref_key: "formRRef",
      ref: i
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
    }), st({ _: 2 }, [
      Ce(m(r), (K) => ({
        name: K.slotName,
        fn: ne(({ valGroup: M }) => [
          Ne(B.$slots, K.slotName, { valGroup: M })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), xo = /* @__PURE__ */ ce({
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
  setup(t, { expose: s, emit: n }) {
    const e = n, l = t, i = E(), r = E(!1), c = E(!1), o = W(() => {
      var h, O;
      if (Array.isArray(l.formData[0])) {
        let _ = [];
        for (let Y of l.formData)
          Y && (_ = _.concat(
            Y.filter(($) => ($ == null ? void 0 : $.type) === "custom" || ($ == null ? void 0 : $.type) === "input" && $.slotName && $.slotPosition)
          ));
        return _;
      }
      return (O = (h = l.formData) == null ? void 0 : h.filter) == null ? void 0 : O.call(
        h,
        (_) => (_ == null ? void 0 : _.type) === "custom" || (_ == null ? void 0 : _.type) === "input" && _.slotName && _.slotPosition
      );
    });
    function y() {
      return new Promise((h) => {
        var O, _;
        (_ = (O = i.value).resetForm) == null || _.call(O).then(() => {
          h();
        });
      });
    }
    function p() {
      return new Promise((h) => {
        var O, _;
        (_ = (O = i.value).refreshFormDom) == null || _.call(O).then(() => {
          h();
        });
      });
    }
    function f() {
      return new Promise((h) => {
        var O, _;
        (_ = (O = i.value).reRenderForm) == null || _.call(O).then(() => {
          h();
        });
      });
    }
    function u(h, O) {
      var _, Y;
      (Y = (_ = i.value).setItemToValGroup) == null || Y.call(_, h, O);
    }
    function v(h, O) {
      var _, Y;
      (Y = (_ = i.value).updateValGroup) == null || Y.call(_, h, O);
    }
    function b(h) {
      var O, _;
      (_ = (O = i.value).updateFormDataT) == null || _.call(O, h);
    }
    function g() {
      var h, O;
      (O = (h = i.value).validate) == null || O.call(h);
    }
    function V(h) {
      var O, _;
      (_ = (O = i.value).reValidate) == null || _.call(O, h);
    }
    function k(h) {
      var O, _;
      h !== void 0 && (c.value = !!h, (_ = (O = i.value).changeLoading) == null || _.call(O, c.value));
    }
    function S() {
      var h, O;
      return (O = (h = i.value).getValGroup) == null ? void 0 : O.call(h);
    }
    function B() {
      c.value = !0;
    }
    function x() {
      var h, O;
      l.hideCancelBt ? M() : (O = (h = i.value).submit) == null || O.call(h);
    }
    function K() {
      r.value = !0;
    }
    function M() {
      r.value = !1, Me(() => {
        var h, O;
        c.value = !1, (O = (h = i.value).changeLoading) == null || O.call(h, !1);
      }, 1e3);
    }
    function R(h) {
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
      reValidate: V,
      changeLoading: k,
      getValGroup: S,
      submit: x,
      open: K,
      close: M
    }), (h, O) => {
      const _ = te("Button"), Y = te("Modal");
      return T(), le(Y, {
        class: we(["formModal", { hideFooter: l.hideFooter }]),
        title: l.title || m(L)("r.title"),
        modelValue: m(r),
        "onUpdate:modelValue": O[0] || (O[0] = ($) => Fe(r) ? r.value = $ : null),
        "mask-closable": !1,
        "footer-hide": l.hideFooter,
        width: l.width,
        onOnVisibleChange: R
      }, {
        footer: ne(() => [
          Q(_, {
            onClick: x,
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
            onClick: M,
            class: "modal-cancel-btn"
          }, {
            default: ne(() => [
              ke(q(l.cancelBtTxt || m(L)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: ne(() => [
          Q(Rt, rt({
            ref_key: "formRRef",
            ref: i
          }, h.$attrs, {
            "form-data": l.formData,
            "label-width": l.labelWidth,
            btnLoading: l.btnLoading,
            disabled: l.disabled,
            onOnSubmit: B
          }), st({ _: 2 }, [
            Ce(m(o), ($) => ({
              name: $.slotName,
              fn: ne(({ valGroup: I }) => [
                Ne(h.$slots, $.slotName, { valGroup: I })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading", "disabled"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), Oo = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = E(!0), i = E([]), r = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let c = [];
    const o = W(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), y = W(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    Se(
      () => e.data,
      (g) => {
        l.value = !1;
        let V = [];
        p(g, V), i.value = V, $e(function() {
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
        let V, k = "s";
        if (Array.isArray(e.collectVal) ? (V = e.collectVal[0] || "", k = "a") : V = e.collectVal, !V || JSON.stringify(g) === JSON.stringify(c)) {
          c = [];
          return;
        }
        ot({
          group: i.value,
          condition: (S) => (S == null ? void 0 : S.checked) === !0,
          key: "checked",
          val: !1
        }), ot(k === "a" ? {
          group: i.value,
          condition: (S) => St(g, [V, S == null ? void 0 : S[V]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: i.value,
          condition: (S) => g.indexOf(S == null ? void 0 : S[V]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), Se(
      () => e.disabled,
      (g) => {
        ot({
          group: i.value,
          condition: (V) => V && V.disableCheckbox !== g,
          key: "disableCheckbox",
          val: g
        }), e.inlineLeaf && $e(v);
      },
      { immediate: !0 }
    );
    function p(g, V = []) {
      for (let k of g) {
        let S = !1;
        o.value.length > 1 ? S = Ut(y.value, (x) => x[o.value[0]] === k[o.value[0]]) !== void 0 : S = o.value[0] ? y.value.indexOf(k[o.value[0]]) !== -1 : !1;
        let B = {
          name: k == null ? void 0 : k[e.label],
          expand: !!(e.expandAll || k != null && k.expand),
          checked: S,
          disableCheckbox: e.disabled
        };
        for (let x of o.value)
          B[x] = k[x];
        V.push(B), k != null && k.children && k.children.length > 0 && (B.children = [], f(k.children, B.children));
      }
    }
    function f(g, V = []) {
      for (let k of g) {
        let S = !1;
        o.value.length > 1 ? S = Ut(y.value, (x) => x[o.value[0]] === k[o.value[0]]) !== void 0 : S = o.value[0] ? y.value.indexOf(k[o.value[0]]) !== -1 : !1;
        let B = {
          name: k == null ? void 0 : k[e.label],
          expand: !!(e.expandAll || k != null && k.expand),
          checked: S,
          disableCheckbox: e.disabled
        };
        for (let x of o.value)
          B[x] = k[x];
        V.push(B), k != null && k.children && k.children.length > 0 && (B.children = [], p(k.children, B.children));
      }
    }
    function u(g, {
      data: V
    }) {
      let k = "", S = !0;
      if (V.children && V.children.length > 0) {
        for (let B of V.children)
          if (B.children !== void 0) {
            S = !1;
            break;
          }
        S && e.inlineLeaf && (k = "inlineChildXA");
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
                fontWeight: V.children ? "bold" : "normal"
              }
            },
            V.name
          )
        ]
      );
    }
    function v(g) {
      if (g) {
        g.expand && $e(v);
        return;
      }
      let V = document.querySelectorAll("#" + r + " .inlineChildXA");
      if (V.length > 0)
        for (let k of V) {
          let S = k == null ? void 0 : k.parentElement, B = S == null ? void 0 : S.nextElementSibling;
          if (!B)
            return;
          if (B.tagName !== "BR") {
            let x = S == null ? void 0 : S.parentElement, K = document.createElement("br");
            x == null || x.insertBefore(K, B);
            const M = K.nextElementSibling;
            if (M) {
              const R = M.children;
              if (R)
                for (let h of R)
                  (h == null ? void 0 : h.className.indexOf("inlineTreeNodeF")) === -1 && h.setAttribute("class", h.className + " inlineTreeNodeF");
            }
          }
        }
    }
    function b(g) {
      let V = [];
      if (e.leaf) {
        for (let k of g)
          if (!k.children)
            if (Array.isArray(e.collectVal)) {
              let S = {};
              for (let B of e.collectVal)
                S[B] = k[B];
              V.push(S);
            } else
              V.push(k[e.collectVal]);
      } else
        for (let k of g)
          if (Array.isArray(e.collectVal)) {
            let S = {};
            for (let B of e.collectVal)
              S[B] = k[B];
            V.push(S);
          } else
            V.push(k[e.collectVal]);
      c = V, n("update:modelValue", V), n("on-change", pe(V));
    }
    return (g, V) => {
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
}), Ao = { class: "transferBoxRL" }, Io = { class: "leftBoxLLL" }, Po = { class: "fullHeight flexColumnBox" }, Ro = { class: "notGrow" }, Mo = { class: "titleLLL" }, $o = { class: "growFlexItem" }, Fo = { class: "middleBoxLLL" }, Do = { class: "rightBoxLLL" }, No = { class: "fullHeight flexColumnBox" }, Ko = { class: "notGrow" }, zo = { class: "titleLLL" }, Uo = { class: "growFlexItem" }, Eo = /* @__PURE__ */ ce({
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
  setup(t, { expose: s, emit: n }) {
    const e = n, l = t;
    let i = E({}), r = E({}), c = E([]), o = E([]), y = E(0), p = E(0);
    const f = W(() => ({ ...l.constSearchDataLeft, ...i.value })), u = W(() => ({ ...l.constSearchDataRight, ...r.value })), v = W(() => y.value < 1), b = W(() => c.value.length < 1), g = W(() => o.value.length < 1), V = W(() => p.value < 1), k = E(), S = E(), B = E(), x = E();
    function K() {
      k.value.resetForm(), S.value.resetForm(), De(i.value) || (i.value = {}), De(r.value) || (r.value = {}), B.value.clearSelect(), x.value.clearSelect();
    }
    function M() {
      B.value.search(), x.value.search();
    }
    function R(D) {
      c.value = D;
    }
    function h(D) {
      o.value = D;
    }
    function O(D) {
      var X, ee, se, me, he;
      y.value = ((ee = (X = D == null ? void 0 : D.data) == null ? void 0 : X.page) == null ? void 0 : ee.total) || ((me = (se = D == null ? void 0 : D.data) == null ? void 0 : se.data) == null ? void 0 : me.total) || ((he = D == null ? void 0 : D.data) == null ? void 0 : he.total) || (D == null ? void 0 : D.total) || 0, e("on-data-change-l", D);
    }
    function _(D) {
      var X, ee, se, me, he;
      p.value = ((ee = (X = D == null ? void 0 : D.data) == null ? void 0 : X.page) == null ? void 0 : ee.total) || ((me = (se = D == null ? void 0 : D.data) == null ? void 0 : se.data) == null ? void 0 : me.total) || ((he = D == null ? void 0 : D.data) == null ? void 0 : he.total) || (D == null ? void 0 : D.total) || 0, e("on-data-change-r", D);
    }
    function Y(D) {
      typeof l.leftSearchDataFilter == "function" ? i.value = l.leftSearchDataFilter(D) : i.value = D;
    }
    function $(D) {
      typeof l.rightSearchDataFilter == "function" ? r.value = l.rightSearchDataFilter(D) : r.value = D;
    }
    function I() {
      l.addUrl && F("add");
    }
    function j() {
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
          X = l.addMethod, ee = l.addUrl, se = l.addParamsHandle(o.value), me = L("r.add");
          break;
        case "delete":
          X = l.deleteMethod, ee = l.deleteUrl, se = l.deleteParamsHandle(c.value), me = L("r.remove");
          break;
        case "addAll":
          X = l.addAllMethod, ee = l.addAllUrl, se = l.addAllParamsHandle(u.value), me = L("r.addAll");
          break;
        case "deleteAll":
          X = l.deleteAllMethod, ee = l.deleteAllUrl, se = l.deleteAllParamsHandle(f.value), me = L("r.removeAll");
          break;
      }
      ee && X && We[X](ee, se, null, [], { spin: !0 }, !1).then((he) => {
        (he == null ? void 0 : he.code) === 0 ? (ze(me + L("r.success"), (he == null ? void 0 : he.message) || "", "success"), B.value && B.value.getTableData(), x.value && x.value.getTableData(), e("transferred")) : ze(me + L("r.failed"), (he == null ? void 0 : he.message) || "", "error");
      }).catch(() => {
        ze(me + L("r.error"), "", "error");
      });
    }
    return s({
      reset: K,
      search: M
    }), (D, X) => {
      const ee = te("Icon"), se = te("Button");
      return T(), N("div", Ao, [
        P("div", Io, [
          P("div", Po, [
            P("div", Ro, [
              P("div", Mo, q(l.titleLeft || m(L)("r.added")), 1),
              Q(Jt, null, {
                default: ne(() => [
                  Q(tl, {
                    ref_key: "leftFormRef",
                    ref: k,
                    "form-data": l.formDataLeft,
                    "form-rules": l.formRulesLeft,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: Y
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            P("div", $o, [
              Q(Zt, {
                ref_key: "lTabRef",
                ref: B,
                columns: l.leftTableColumns,
                url: l.leftTableUrl,
                "search-data": m(f),
                onOnSelectionChange: R,
                onOnDataChange: O,
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
        P("div", Fo, [
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
            onClick: j,
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
            onClick: I,
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
            disabled: m(V)
          }, {
            default: ne(() => [
              Q(ee, { type: "ios-arrow-back" }),
              ke(" " + q(m(L)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        P("div", Do, [
          P("div", No, [
            P("div", Ko, [
              P("div", zo, q(l.titleRight || m(L)("r.notAdded")), 1),
              Q(Jt, null, {
                default: ne(() => [
                  Q(tl, {
                    ref_key: "rightFormRef",
                    ref: S,
                    "form-data": l.formDataRight,
                    "form-rules": l.formRulesRight,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: $
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            P("div", Uo, [
              Q(Zt, {
                ref_key: "rTabRef",
                ref: x,
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
}), Go = { class: "boxLPA" }, Ho = { class: "headerJ" }, Wo = { class: "firstT borderBoxAS" }, jo = { class: "secondT borderBoxAS" }, qo = { class: "firstCol borderBoxAS" }, Xo = { class: "secondCol borderBoxAS" }, Jo = /* @__PURE__ */ ce({
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
    const n = t, e = s, l = E([]), i = W(() => {
      var f;
      let y = pe(n.data), p = pe(l.value);
      for (let u of y) {
        let v = 0;
        if (u != null && u.children && !De(u.children))
          for (let b of u.children) {
            for (let g = 0, V = p == null ? void 0 : p.length; g < V; g++)
              if (Array.isArray(n.collectVal)) {
                let k = !0;
                for (let S of n.collectVal)
                  if (((f = p[g]) == null ? void 0 : f[S]) !== (b == null ? void 0 : b[S])) {
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
          } else Z(n.collectVal) === "String" && f.push(u[n.collectVal]);
        if (u.children) {
          for (let v of u.children)
            if (v.checked)
              if (Array.isArray(n.collectVal)) {
                let b = {};
                for (let g of n.collectVal)
                  b[g] = v[g];
                f.push(b);
              } else Z(n.collectVal) === "String" && f.push(v[n.collectVal]);
        }
      }
      p ? (l.value = f, n.leaf ? (e("update:modelValue", f), e("on-change", pe(f))) : $e(function() {
        o(i.value);
      })) : (e("update:modelValue", f), e("on-change", pe(f)));
    }
    return (y, p) => {
      const f = te("Checkbox");
      return T(), N("div", Go, [
        P("div", Ho, [
          P("div", Wo, q(y.firstTitle || m(L)("r.level.1")), 1),
          P("div", jo, q(y.secondTitle || m(L)("r.level.2")), 1)
        ]),
        (T(!0), N(ge, null, Ce(m(i), (u, v) => (T(), N("div", {
          class: "bodyJ",
          key: "checkboxJ" + v
        }, [
          P("div", qo, [
            Q(f, {
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
          P("div", Xo, [
            (T(!0), N(ge, null, Ce(u.children, (b, g) => (T(), N("div", {
              class: "secItem",
              key: "secItem" + g
            }, [
              Q(f, {
                modelValue: b.checked,
                "onUpdate:modelValue": (V) => b.checked = V,
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
}), Yo = { class: "boxLPB" }, Qo = { class: "headerF" }, Zo = { class: "firstT borderBoxKa" }, ei = { class: "secondT borderBoxKa" }, ti = { class: "thirdT borderBoxKa" }, li = { class: "firstCol borderBoxKa" }, ai = { class: "rightBoxAL" }, ni = { class: "secondCol borderBoxKa" }, oi = { class: "thirdCol borderBoxKa" }, ii = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = E([]), i = W(() => {
      let p = pe(e.data), f = pe(l.value);
      for (let u of p) {
        let v = 0, b = 0;
        if (u != null && u.children && !De(u.children))
          for (let g of u.children) {
            let V = 0;
            if (g.children && !De(g.children))
              for (let k of g.children) {
                for (let S = 0, B = f.length; S < B; S++)
                  if (Array.isArray(e.collectVal)) {
                    let x = !0;
                    for (let K of e.collectVal)
                      if (f[S][K] !== k[K]) {
                        x = !1;
                        break;
                      }
                    if (x) {
                      k.checked = !0, V++, f.splice(S, 1);
                      break;
                    }
                  } else if (f[S] === k[e.collectVal]) {
                    k.checked = !0, V++, f.splice(S, 1);
                    break;
                  }
                !k.checked && (k.checked = !1);
              }
            V === 0 ? (g.checked = !1, g.indeterminate = !1) : g.children && V === g.children.length ? (g.checked = !0, g.indeterminate = !1, v++) : (g.checked = !1, g.indeterminate = !0, b++);
          }
        v === 0 && b === 0 ? (u.checked = !1, u.indeterminate = !1) : u.children && v === u.children.length ? (u.checked = !0, u.indeterminate = !1) : (u.checked = !1, u.indeterminate = !0);
      }
      return p;
    });
    Se(
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
          } else Z(e.collectVal) === "String" && u.push(v[e.collectVal]);
        if (v != null && v.children)
          for (let b of v.children) {
            if (!f && !e.leaf && b.checked && b.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let g = {};
                for (let V of e.collectVal)
                  g[V] = b[V];
                u.push(g);
              } else Z(e.collectVal) === "String" && u.push(b[e.collectVal]);
            if (b.children) {
              for (let g of b.children)
                if (g.checked)
                  if (Array.isArray(e.collectVal)) {
                    let V = {};
                    for (let k of e.collectVal)
                      V[k] = g[k];
                    u.push(V);
                  } else Z(e.collectVal) === "String" && u.push(g[e.collectVal]);
            }
          }
      }
      f ? (l.value = u, e.leaf ? (n("update:modelValue", u), n("on-change", pe(u))) : $e(function() {
        y(i.value);
      })) : (n("update:modelValue", u), n("on-change", pe(u)));
    }
    return (p, f) => {
      const u = te("Checkbox");
      return T(), N("div", Yo, [
        P("div", Qo, [
          P("div", Zo, q(p.firstTitle || m(L)("r.level.1")), 1),
          P("div", ei, q(p.secondTitle || m(L)("r.level.2")), 1),
          P("div", ti, q(p.thirdTitle || m(L)("r.level.3")), 1)
        ]),
        (T(!0), N(ge, null, Ce(m(i), (v, b) => (T(), N("div", {
          class: "bodyF",
          key: "checkboxJ" + b
        }, [
          P("div", li, [
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
          P("div", ai, [
            (T(!0), N(ge, null, Ce(v.children, (g, V) => (T(), N("div", {
              class: "rightBoxInner",
              key: "secItem" + V
            }, [
              P("div", ni, [
                Q(u, {
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
              P("div", oi, [
                (T(!0), N(ge, null, Ce(g.children, (k, S) => (T(), N("div", {
                  class: "thirdItem",
                  key: "thirdItem" + S
                }, [
                  Q(u, {
                    modelValue: k.checked,
                    "onUpdate:modelValue": (B) => k.checked = B,
                    onOnChange: o,
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
}), si = {
  class: "fl",
  style: { "font-weight": "bold" }
}, ri = { class: "btsF" }, ui = { key: 0 }, di = {
  key: 1,
  class: "growFlexItem relativeBox"
}, ci = { class: "fullFlowContent" }, fi = /* @__PURE__ */ ce({
  __name: "WellCard",
  props: {
    title: {},
    fitToContent: { type: Boolean, default: !1 },
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(t) {
    const s = t, n = W(() => {
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
    return (l, i) => (T(), N("div", {
      style: re(m(n))
    }, [
      P("div", {
        class: we(["wellCardR", { flexColumnBox: !s.fitToContent }])
      }, [
        P("div", {
          class: we(["panelHeader", { notGrow: !s.fitToContent }])
        }, [
          P("div", si, q(s.title || m(L)("r.title")), 1),
          P("div", ri, [
            Ne(l.$slots, "bts")
          ])
        ], 2),
        s.fitToContent ? (T(), N("div", ui, [
          Ne(l.$slots, "default")
        ])) : (T(), N("div", di, [
          P("div", ci, [
            Ne(l.$slots, "default")
          ])
        ]))
      ], 2)
    ], 4));
  }
}), pi = /* @__PURE__ */ ce({
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
    let l = E(1), i = 1;
    const r = E(""), c = ht([]);
    let o = {}, y = !0, p = !1;
    const f = "scm" + Math.random(), u = W(() => r.value ? L("r.searchFor") + r.value : e.placeholder || L("r.pInput")), v = W({
      get() {
        return e.modelValue ?? "";
      },
      set(M) {
        if (n("update:modelValue", M ?? ""), e.collectLabel && M !== void 0) {
          let R = {};
          for (let h of c.value)
            if (h[e.optionsValKey] === M) {
              R = JSON.parse(JSON.stringify(h));
              break;
            }
          n("on-change", R);
        }
      }
    }), b = W(() => e.searchKey ? {
      ...e.searchData,
      current: l.value,
      [e.searchKey]: r.value
    } : {
      ...e.searchData,
      current: l.value
    });
    Se(
      () => e.getOptions,
      (M) => {
        M ? y && K() : k();
      },
      { immediate: !0 }
    ), Se(
      () => e.url,
      (M) => {
        M && (p = !0);
      }
    );
    const g = E();
    function V() {
      g.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", B);
    }
    function k() {
      y || (v.value = "", y = !0, r.value = "", c.value = [], l.value = 1, i = 1, o = {}, p = !1);
    }
    function S(M) {
      for (let R of c.value)
        if ((R == null ? void 0 : R.label) === M)
          return !0;
      return !1;
    }
    const B = It(function(M) {
      var h;
      const R = (h = M == null ? void 0 : M.target) == null ? void 0 : h.value;
      S(R) || (Re(R) ? (p ? k() : (De(o) && (o.current = l.value, o.pages = i, o.options = pe(c.value)), Re(v.value) && (v.value = "")), r.value = String(R), c.value = [], l.value = 1, y = !0, K()) : p ? (k(), K()) : (v.value = "", r.value = "", o.current ? (l.value = o.current, i = o.pages, c.value = pe(o.options), o = {}) : K()));
    }, 600);
    function x() {
      p && k(), l.value < i ? (++l.value, $e(function() {
        K();
      })) : pl.warning({
        background: !0,
        content: L("r.noMore")
      });
    }
    function K() {
      return new Promise((M, R) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Re(r.value)) {
            M(!1);
            return;
          }
          We.get(e.url, b.value).then((h) => {
            var Y;
            y = !1;
            let O = [];
            (Y = h == null ? void 0 : h.data) != null && Y.records ? (O = h.data.records, i = h.data.pages) : h != null && h.data && Z(h.data) === "Array" ? (O = h.data, i = h.pages) : h != null && h.data && Z(h.data) === "Object" && (O = [h.data], i = 1), typeof e.optionFilter == "function" && Z(e.optionFilter) === "Function" && (O = e.optionFilter(O)), De(O) || (O = O.map(($, I) => {
              let j = L("r.optionLabel") + I;
              if (Array.isArray(e.optionsLabelKey)) {
                let U = [];
                for (let w = 1, F = e.optionsLabelKey.length; w < F; w++)
                  U.push($[e.optionsLabelKey[w]]);
                j = `${$[e.optionsLabelKey[0]]}(${String(U)})`;
              } else Pl(e.optionsLabelKey) && (j = $[e.optionsLabelKey]);
              if (e.collectLabel) {
                let U = pe($);
                return delete U.value, delete U.label, {
                  value: $[e.optionsValKey],
                  label: j,
                  ...U
                };
              }
              return {
                value: $[e.optionsValKey],
                label: j
              };
            })), c.value.push(...O);
            let _ = {};
            c.value = c.value.filter(($) => _[$ == null ? void 0 : $.value] ? !1 : (_[$ == null ? void 0 : $.value] = !0, !0)), $e(function() {
              n("update-option-finish");
            }), M(!0);
          }).catch(() => {
            pl.error(L("r.getDataError")), R(L("r.getDataError"));
          });
        } else
          M(!1);
      });
    }
    return Ge(V), (M, R) => {
      const h = te("Option"), O = te("Select"), _ = At("loadmore");
      return fe((T(), le(O, rt({
        modelValue: m(v),
        "onUpdate:modelValue": R[0] || (R[0] = (Y) => Fe(v) ? v.value = Y : null),
        ref_key: "selectScrollSourceRef",
        ref: g,
        "transfer-class-name": f
      }, M.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: m(u),
        disabled: M.disabled
      }), {
        default: ne(() => [
          (T(!0), N(ge, null, Ce(m(c), (Y, $) => (T(), le(h, {
            key: "op" + $,
            value: Y == null ? void 0 : Y.value,
            label: Y == null ? void 0 : Y.label,
            disabled: Y == null ? void 0 : Y.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [_, x, f]
      ]);
    };
  }
}), Tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: Yl,
  AsyncCascader: Jl,
  BtTablePage: Zt,
  CheckboxGroupThreeClass: ii,
  CheckboxGroupTwoClass: Jo,
  CheckboxTree: Oo,
  Date: ta,
  EditorPro: la,
  FormGroup: Lo,
  FormModal: xo,
  FormR: Rt,
  FullPop: Ka,
  HeaderBt: Ml,
  Hello: Ua,
  IconTxtBtn: Gt,
  InputMap: Xl,
  MonthRange: ea,
  Page404: Wa,
  PagePro: jl,
  SearchForm: tl,
  SelectInput: ql,
  SelectScrollMore: pi,
  ShowHidePanel: Jt,
  ShowHidePanelB: Pn,
  SideMenu: yn,
  SideMenuPro: Ln,
  TableIconBtn: Ul,
  TableSearch: Rn,
  TableSetting: Hl,
  TransferBox: Eo,
  UploadGroup: Zl,
  WellCard: fi
}, Symbol.toStringTag, { value: "Module" })), mi = { class: "a4Line aL notPrint" }, hi = { class: "a4Line aR notPrint" }, yi = { class: "a4Line bL notPrint" }, vi = { class: "a4Line bR notPrint" }, gi = { class: "topsL notPrint" }, bi = { class: "topsLTitle" }, ki = { class: "topsLBtn" }, wi = { class: "topsLHelp" }, _i = { key: 0 }, Vi = { key: 1 }, Si = { key: 2 }, Ci = ["innerHTML"], Ti = /* @__PURE__ */ ce({
  __name: "PrintModal",
  setup(t) {
    const s = al(), n = E(), e = E(!1), l = E(!1), i = E(!1), r = E(100), c = E(), o = E(715), y = E(!1), p = E(), f = "tablePrint_" + Date.now().toString(), u = E(""), v = E([]), b = E([]), g = E(!1), V = W(() => ({
      width: o.value + "px"
    })), k = () => {
      p.value && window.sessionStorage.removeItem("print_" + p.value), window.sessionStorage.removeItem(f), window.close();
    }, S = () => {
      y.value && (y.value = !1);
    }, B = () => {
      g.value = !0;
    }, x = (O) => {
      g.value && (o.value = (O == null ? void 0 : O.layerX) - 20);
    }, K = () => {
      g.value && (g.value = !1);
    }, M = () => {
      y.value = !1;
      let O = window.setTimeout(() => {
        window.clearTimeout(O), window.print();
      }, 100);
    }, R = (O) => {
      if (typeof c.value == "function")
        return c.value(O);
    }, h = () => {
      var O, _, Y, $, I, j, U;
      if (p.value = (O = s == null ? void 0 : s.params) == null ? void 0 : O.isFrom, p.value) {
        let w = window.sessionStorage.getItem("print_" + p.value);
        if (w) {
          const F = JSON.parse(w);
          if (!F) {
            e.value = !0;
            return;
          }
          if (v.value = F.columns, b.value = F.data, n.value = F.title, u.value = ((_ = F.config) == null ? void 0 : _.customClass) || "", l.value = ((Y = F.config) == null ? void 0 : Y.domPrint) || !1, i.value = (($ = F.config) == null ? void 0 : $.autoPrint) || !1, r.value = ((I = F.config) == null ? void 0 : I.autoPrintTimeout) || 100, o.value = ((j = F.config) == null ? void 0 : j.width) || 715, document.title = (n.value || L("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString(), (U = F.funcArr) != null && U.length) {
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
        let O = window.setTimeout(() => {
          window.clearTimeout(O), M();
        }, r.value);
      }
      document.addEventListener("click", S), document.addEventListener("mousemove", x), document.addEventListener("mouseup", K);
    }), h(), (O, _) => {
      const Y = te("Table");
      return T(), N("div", {
        class: we(["tablePrintModal", [m(u)]])
      }, [
        fe(P("div", { class: "msgL notPrint" }, q(m(L)("r.printGuide.9")), 513), [
          [ve, m(e)]
        ]),
        fe(P("div", mi, [
          P("p", null, q(m(L)("r.printGuide.7")), 1),
          _[2] || (_[2] = ke()),
          P("p", null, q(m(L)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        fe(P("div", hi, [
          P("p", null, q(m(L)("r.printGuide.7")), 1),
          _[3] || (_[3] = ke()),
          P("p", null, q(m(L)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        fe(P("div", yi, [
          P("p", null, q(m(L)("r.printGuide.8")), 1),
          _[4] || (_[4] = ke()),
          P("p", null, q(m(L)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        fe(P("div", vi, [
          P("p", null, q(m(L)("r.printGuide.8")), 1),
          _[5] || (_[5] = ke()),
          P("p", null, q(m(L)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        fe(P("div", gi, [
          P("div", bi, q(m(n) || m(L)("r.print")), 1),
          P("div", ki, [
            Q(Gt, {
              icon: "md-help-circle",
              name: m(L)("r.help"),
              onClick: _[0] || (_[0] = Kt(($) => y.value = !m(y), ["stop"]))
            }, null, 8, ["name"]),
            Q(Gt, {
              icon: "md-print",
              name: m(L)("r.preview"),
              onClick: M
            }, null, 8, ["name"]),
            m(l) ? ue("", !0) : (T(), le(Hl, {
              key: 0,
              modelValue: m(v),
              "onUpdate:modelValue": _[1] || (_[1] = ($) => Fe(v) ? v.value = $ : null),
              "s-key": f,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            Q(Ul, {
              icon: "md-close",
              onClick: k,
              title: m(L)("r.close")
            }, null, 8, ["title"])
          ]),
          fe(P("div", wi, [
            m(l) ? ue("", !0) : (T(), N("p", _i, [
              _[6] || (_[6] = P("span", null, "1. ", -1)),
              P("span", null, q(m(L)("r.printGuide.1")), 1)
            ])),
            m(l) ? ue("", !0) : (T(), N("p", Vi, [
              _[7] || (_[7] = P("span", null, "2. ", -1)),
              P("span", null, q(m(L)("r.printGuide.2")), 1)
            ])),
            m(l) ? (T(), N("p", Si, [
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
          style: re(m(V))
        }, [
          P("div", {
            class: "settingLine",
            onMousedown: Kt(B, ["stop"])
          }, null, 32)
        ], 4)) : ue("", !0),
        m(l) ? (T(), N("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: m(b),
          style: re(m(V))
        }, null, 12, Ci)) : ue("", !0),
        m(l) ? ue("", !0) : fe((T(), le(Y, {
          key: 2,
          class: "tablePW",
          columns: m(v),
          data: m(b),
          "span-method": R,
          border: ""
        }, null, 8, ["columns", "data"])), [
          [ve, !m(e)]
        ])
      ], 2);
    };
  }
});
let Ze = null;
function Bl() {
  document.documentElement.style.setProperty("overflow", "auto");
  const s = document.createElement("style");
  s.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(s);
}
function Bi(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: Ti
  })), Ze = t, location.pathname.indexOf("tablePrint") > -1 ? (Ze.push(location.pathname), Bl()) : location.hash.indexOf("tablePrint") > -1 && (Ze.push(location.hash.replace(/^#/, "")), Bl());
}
function aa(t) {
  return Z(t) === "Object" && (t.hasOwnProperty("width") || (t.width = t.minWidth || 100), t.hasOwnProperty("minWidth") && delete t.minWidth, t.sortable = !1, delete t.__id, t.resizable = !0, t.children && Z(t.children) === "Array" && (t.children = t.children.map(aa))), t;
}
function Li(t, s, n, e) {
  var p, f, u;
  if (!Ze)
    return;
  let l;
  if (!(e != null && e.domPrint)) {
    let v = pe(
      t.filter((b) => (b == null ? void 0 : b.key) || (b == null ? void 0 : b.children))
    );
    v[0].type === "selection" && v.shift(), v.length ? l = v.map(aa) : l = [];
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
const il = {
  print: Li,
  init: Bi
};
function xi(t = "", s = "", n = {}) {
  n.domPrint = !0, n.width || (n.width = 715), il.print([], t, s, n);
}
function Oi(t) {
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
            Ie(Sa, {
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
  }), Me(() => {
    var y, p, f, u, v, b;
    const c = (u = (f = (p = (y = document.getElementById(l)) == null ? void 0 : y.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : f.parentElement) == null ? void 0 : u.parentElement, o = (b = (v = document.getElementById(l)) == null ? void 0 : v.parentElement) == null ? void 0 : b.nextSibling;
    c && (c.style.height = "0"), c && (c.style.padding = "0"), o && (o.style.display = "none");
  }, 10);
}
const Ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: We,
  $swal: ze,
  $swalConfirm: Gl,
  domPrint: xi,
  fullScreenImgByDom: mt,
  fullScreenImgPreview: Oi,
  messageBox: Qt,
  setInterval: mn,
  setTimeout: Me,
  tablePrint: il
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
      var o, y, p, f, u, v, b, g, V;
      const l = document.getElementById("editor-preview");
      let i = localStorage.getItem("editorPreviewW") || 300, r = localStorage.getItem("editorPreviewH") || 500;
      const c = (o = e == null ? void 0 : e.getHtml) == null ? void 0 : o.call(e);
      if (l) {
        let k = (v = (u = (f = (p = (y = l.children) == null ? void 0 : y[0]) == null ? void 0 : p.children) == null ? void 0 : f[1]) == null ? void 0 : u.children) == null ? void 0 : v[0], S = (V = (g = (b = l.children) == null ? void 0 : b[0]) == null ? void 0 : g.children) == null ? void 0 : V[1];
        k && (k.innerHTML = c, k.style.width = i + "px"), S && (S.style.height = r + "px"), l.style.display = "block";
      } else {
        const k = document.body, S = document.createElement("div");
        S.setAttribute("id", "editor-preview"), S.setAttribute("class", "editor-preview-mask"), S.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${i}' min='200'><span>高</span><input type='number' value='${r}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let B = S.children[0].children[1], x = S.children[0].children[1].children[0], K = S.children[0].children[0].children[0].children[1];
        const M = 40, R = 70, h = ($) => {
          var U;
          if (($ == null ? void 0 : $.type) === "keyup") {
            let w = !1;
            if ($.key && (w = $.key !== "Enter"), w)
              return;
          }
          let I = (U = $ == null ? void 0 : $.target) == null ? void 0 : U.value;
          if (I = Number(I), x.style && x.style.width === I + "px")
            return;
          const j = k.clientWidth;
          I < 250 ? (I = 250, $.target.value = 250) : I > j - M && (I = j - M, $.target.value = j - M), x.style.width = I + "px", localStorage.setItem("editorPreviewW", I);
        };
        K.addEventListener("blur", h), K.addEventListener("keyup", h);
        let O = S.children[0].children[0].children[0].children[3];
        const _ = ($) => {
          var U;
          if (($ == null ? void 0 : $.type) === "keyup") {
            let w = !1;
            if ($.key && (w = $.key !== "Enter"), w)
              return;
          }
          let I = (U = $ == null ? void 0 : $.target) == null ? void 0 : U.value;
          if (I = Number(I), B.style && B.style.height === I + "px")
            return;
          const j = k.clientHeight;
          I < 300 ? (I = 300, $.target.value = 300) : I > j - R && (I = j - R, $.target.value = j - R), B.style.height = I + "px", localStorage.setItem("editorPreviewH", I);
        };
        O.addEventListener("blur", _), O.addEventListener("keyup", _), S.children[0].children[0].children[1].addEventListener("click", () => {
          S.style.display = "none";
        }), x.innerHTML = c, x.style.width = i + "px", B.style.height = r + "px", k.append(S);
      }
    }
  }
  const s = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  xa.registerMenu(s), window.wangeditorMenuInit = !0;
})();
const Zi = Tt.use, es = Tt.i18n, Ll = {
  ...Ai,
  ...un
}, Ii = {
  install(t) {
    t.component("JsonViewer", Oa);
  }
}, Pi = function(t, s = {}) {
  We.init(s.useStore || s.store, t), Ii.install(t), s.locale && Tt.use(s.locale), s.i18n && Tt.i18n(s.i18n), s.router && (pn(s.router), il.init(s.router)), s.amap && Qn(s.amap), s.notRegistryGlobal || (Object.keys(Tl).forEach((n) => {
    t.component(n) || t.component(n, Tl[n]);
  }), Object.keys(Ll).forEach((n) => {
    t.config.globalProperties[n] = Ll[n];
  })), t.directive("has") || t.directive("has", (n, e) => {
    e.value && !nl(e.value) && (n.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", {
    mounted(n, e) {
      var i;
      let l = n;
      e.arg && (l = (i = document.getElementsByClassName(e.arg)) == null ? void 0 : i[0]), l && l.addEventListener("scroll", function() {
        l.scrollTop > 0 && l.scrollHeight - l.scrollTop <= l.clientHeight && e.value();
      });
    }
  }), t.directive("clickOutside") || t.directive("clickOutside", El), t.config.globalProperties.fontSizeBase = 14, t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.btTablePageAlign = "center", t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !0, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, ts = { install: Pi };
export {
  We as $fetch,
  ze as $swal,
  Gl as $swalConfirm,
  Yl as AlCascaderMC,
  Jl as AsyncCascader,
  Zt as BtTablePage,
  ii as CheckboxGroupThreeClass,
  Jo as CheckboxGroupTwoClass,
  Oo as CheckboxTree,
  ta as Date,
  la as EditorPro,
  Lo as FormGroup,
  xo as FormModal,
  Rt as FormR,
  Ka as FullPop,
  Ml as HeaderBt,
  Ua as Hello,
  Gt as IconTxtBtn,
  Xl as InputMap,
  ea as MonthRange,
  Wa as Page404,
  jl as PagePro,
  tl as SearchForm,
  ql as SelectInput,
  pi as SelectScrollMore,
  Jt as ShowHidePanel,
  Pn as ShowHidePanelB,
  yn as SideMenu,
  Ln as SideMenuPro,
  Ul as TableIconBtn,
  Rn as TableSearch,
  Hl as TableSetting,
  Eo as TransferBox,
  Zl as UploadGroup,
  fi as WellCard,
  Wt as clearObj,
  on as dataFilterOrToUrl,
  Za as decimalDigitsLimit,
  ts as default,
  rn as directivesComponent,
  xi as domPrint,
  Fl as downloadFileByFormSubmit,
  Nn as downloadFileReaderFile,
  Dl as downloadFileWithSpin,
  Yi as emptyInput,
  Kn as fakeALinkClick,
  en as fileExport,
  _t as findCollection,
  Yt as findPath,
  Ja as formDataHeadConfig,
  mt as fullScreenImgByDom,
  Oi as fullScreenImgPreview,
  tn as getColumnsKeys,
  gl as getFileSrc,
  Wl as getFileTypeByName,
  bl as getFileTypeIconByName,
  zn as getStringWidth,
  Xa as has,
  nl as hasPermission,
  Ji as htmlDecode,
  Xi as htmlEncode,
  sn as htmlPrint,
  es as i18n,
  Pi as install,
  Ht as isClient,
  an as isEmptyValue,
  ft as isImgByFile,
  Kl as isNaN,
  ln as isNumberValue,
  Re as isValidValue,
  Zi as locale,
  Qt as messageBox,
  Z as myTypeof,
  Qa as oneOf,
  jt as removeEmptyValue,
  mn as setInterval,
  Me as setTimeout,
  ot as setValByOption,
  qe as setValue,
  ol as siblingElems,
  Qi as stopBubbling,
  nn as stringLength,
  il as tablePrint,
  Ya as toFormData,
  Dn as toHump,
  $l as toLine,
  Nl as tooltipManual,
  Lt as trimObj
};
//# sourceMappingURL=plugRQw.js.map
