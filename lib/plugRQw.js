var va = Object.defineProperty;
var ga = (t, o, n) => o in t ? va(t, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[o] = n;
var pt = (t, o, n) => ga(t, typeof o != "symbol" ? o + "" : o, n);
import { getCurrentInstance as Mt, defineComponent as ce, resolveComponent as te, createElementBlock as K, openBlock as T, normalizeStyle as re, normalizeClass as we, createBlock as le, createCommentVNode as ue, renderSlot as Ne, ref as U, computed as j, withDirectives as fe, unref as p, createElementVNode as M, createVNode as Z, toDisplayString as q, withCtx as ne, createTextVNode as ke, vShow as ve, resolveDirective as $t, onMounted as Ge, nextTick as $e, onUpdated as ba, onUnmounted as Ft, h as Ae, isRef as Fe, Fragment as ge, renderList as Ve, onBeforeMount as Kl, watch as Se, mergeModels as ka, useModel as wa, onBeforeUnmount as ul, Teleport as _a, withModifiers as qt, mergeProps as ct, shallowRef as gt, triggerRef as Ca, createSlots as dt, toRef as Sa, toValue as Gt } from "vue";
import Va from "deepmerge";
import { debounce as Dt, cloneDeep as pe, isPlainObject as ut, isObject as Ta, isFunction as Ba, isEmpty as De, isNumber as Tt, last as Lt, isEqual as bt, isString as zl, first as Xt, find as Jt, indexOf as kl, findIndex as xt, remove as La } from "lodash-es";
import Ct from "sweetalert";
import { Tooltip as xa, Modal as lt, Button as Ht, TableColumnConfig as Oa, Radio as Ia, Input as Aa, Message as wl, Icon as Pa } from "view-ui-plus";
import { useRouter as Nt, useRoute as dl } from "vue-router";
import Ra from "popper.js";
import Yt from "axios";
import Wt from "@amap/amap-jsapi-loader";
import Ma from "ar-cascader";
import { Toolbar as $a, Editor as Fa } from "@wangeditor/editor-for-vue";
import mt from "moment";
import { Boot as Da } from "@wangeditor/editor";
import Na from "vue-json-viewer";
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
}, Ea = /(%|){([0-9a-zA-Z_]+)}/g;
function Ka() {
  function t(n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }
  function o(n, ...e) {
    let l;
    return e.length === 1 && typeof e[0] == "object" && (l = e[0]), (!l || !l.hasOwnProperty) && (l = {}), n === void 0 ? "" : n.replace(Ea, (i, u, c, s) => {
      let y;
      return n[s - 1] === "{" && n[s + i.length] === "}" ? c : (y = t(l, c) ? l[c] : null, y ?? "");
    });
  }
  return o;
}
const za = Ka();
let Ot = Ul;
const Ua = {
  zh: Ul
};
let _l, Cl = {}, Ee, jt = !1, Ga = function(t, o) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, o);
  if (Ee && Ee.global)
    return Ee.global.t(t, o);
  if (Ee && Ee.locale) {
    if (!Cl[Ee.locale] || _l != Ee.locale) {
      Cl[Ee.locale] = !0;
      let n = Ee.getLocaleMessage(Ee.locale) || {}, e = Va(Ua[Ee.locale], n, { clone: !0 });
      Ot = e, Ee.setLocaleMessage(Ee.locale, e), _l = Ee.locale;
    }
    return Ee.hlang(t, o);
  }
};
const Qe = function(t, o) {
  if (jt)
    return "";
  let n = Ga.apply(this, [t, o]);
  if (n != null)
    return n;
  const e = t.split(".");
  let l = Ot;
  for (let i = 0, u = e.length; i < u; i++) {
    const c = e[i];
    if (n = l[c], i === u - 1) {
      jt = !0;
      try {
        return za(n, o);
      } finally {
        jt = !1;
      }
    }
    if (!n)
      return "";
    l = n;
  }
  return "";
}, Ha = function(t) {
  Ot = t || Ot;
}, Wa = function(t) {
  Ee = t;
}, It = {
  use: Ha,
  t: Qe,
  i18n: Wa
};
function x(t, o) {
  var e, l, i;
  const n = (i = (l = (e = Mt()) == null ? void 0 : e.appContext) == null ? void 0 : l.config) == null ? void 0 : i.globalProperties;
  return Qe.apply(n, [t, o]);
}
const Gl = /* @__PURE__ */ ce({
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
    return (i, u) => {
      const c = te("Icon");
      return T(), K("div", {
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
  const t = (n = Mt()) == null ? void 0 : n.appContext;
  return ((e = t == null ? void 0 : t.config) == null ? void 0 : e.globalProperties) || {};
}
const ja = { class: "headerTxtAM" }, qa = { class: "contentAM" }, Xa = /* @__PURE__ */ ce({
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
    let i = U(!1);
    const u = j(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), c = j(() => ({ zIndex: e.zIndex }));
    function s() {
      i.value = !0, l("on-open");
    }
    function y(m) {
      i.value = !1, l("on-close", m === !0);
    }
    return o({
      open: s,
      close: y
    }), (m, f) => fe((T(), K("div", {
      class: "fullScreenPopBoxAM",
      style: re(p(c))
    }, [
      M("div", {
        class: "headerAM",
        style: re({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: p(u) })
      }, [
        M("span", ja, q(m.title || p(x)("r.title")), 1),
        Z(Gl, {
          icon: "md-return-left",
          onClick: y
        }, {
          default: ne(() => [
            ke(q(p(x)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      M("div", qa, [
        Ne(m.$slots, "default")
      ])
    ], 4)), [
      [ve, p(i)]
    ]);
  }
}), Ja = { class: "msg" }, Ya = /* @__PURE__ */ ce({
  __name: "Hello",
  setup(t) {
    let o = U("Greetings from Ricky.");
    return (n, e) => (T(), K("span", Ja, q(p(o)), 1));
  }
}), Qt = /* @__PURE__ */ ce({
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
    function i(u) {
      n.disabled || e("click", u);
    }
    return (u, c) => {
      const s = te("Icon"), y = $t("has");
      return fe((T(), K("div", {
        class: we(["tabTopBtnsT", { disabled: n.disabled }]),
        onClick: i,
        style: re({ "font-size": p(l) })
      }, [
        Z(s, {
          type: n.icon,
          size: n.size
        }, null, 8, ["type", "size"]),
        ke(" " + q(n.name || p(x)("r.button")), 1)
      ], 6)), [
        [y, u.has]
      ]);
    };
  }
}), Qa = { class: "c404K" }, Za = { class: "ct404" }, en = { class: "p404" }, tn = /* @__PURE__ */ ce({
  __name: "Page404",
  setup(t) {
    const n = Mt().appContext.config.globalProperties.$router;
    function e() {
      n.go(-1);
    }
    return (l, i) => {
      const u = te("Button");
      return T(), K("div", Qa, [
        i[0] || (i[0] = M("div", { class: "t404" }, "404", -1)),
        M("div", Za, "UH OH! " + q(p(x)("r.pageNotFound")), 1),
        M("div", en, q(p(x)("r.notFoundMsg")), 1),
        Z(u, {
          class: "bt404",
          onClick: e
        }, {
          default: ne(() => [
            ke(q(p(x)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Ke(t, o, n, e = !0) {
  const l = (...i) => Qe.apply(this, i);
  return new Promise((i, u) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let c = l("r.confirm"), s = l("r.cancel"), y = !1, m = "swalConfirmBt", f = "swalCancelBt";
      const r = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let h = "";
      t.text && r.test(Q(t.text)) ? h = "content" : t.text && Q(t.text) === "String" && (h = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (s = t.buttons.cancel.text) && (y = !0), t.buttons.cancel.className && (f = t.buttons.cancel.className), t.buttons.confirm.text && (c = t.buttons.confirm.text), t.buttons.confirm.className && (m = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (s = t.buttons[0], y = !0), t.buttons[1] && (c = t.buttons[1]))), Ct({
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
            visible: y,
            className: f
          }
        },
        closeOnClickOutside: t.closeOnClickOutside ?? !0
      }).then((b) => {
        b && typeof t.onOk == "function" && t.onOk(), i(b);
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
      Ct({
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
        i(s);
      }).catch((s) => {
        u(s);
      });
    } else if (typeof t == "boolean")
      !t && Ct.close && Ct.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
const ln = { class: "tableTooltip" }, an = /* @__PURE__ */ ce({
  __name: "TableTooltip",
  props: {
    content: { type: [String, Number, Boolean, null] }
  },
  setup(t) {
    const o = t, n = U(), e = U(), l = U(!0);
    let i = null;
    const u = U(200);
    function c() {
      const s = l.value ? n.value : e.value;
      if (!s)
        return;
      let y = document.createRange();
      y.setStart(s, 0), y.setEnd(s, s.childNodes.length);
      const m = y.getBoundingClientRect().width;
      u.value = s.offsetWidth * 2, l.value = m < s.offsetWidth, y = null;
    }
    return Ge(() => {
      c(), i = Dt(() => {
        $e(function() {
          c();
        });
      }, 200), window.addEventListener("resize", i);
    }), ba(c), Ft(() => {
      i == null || i.cancel(), window.removeEventListener("resize", i);
    }), (s, y) => (T(), K("div", ln, [
      p(l) ? (T(), K("span", {
        key: 0,
        ref_key: "spanRef",
        ref: n,
        class: "contentText"
      }, q(o.content), 513)) : (T(), le(p(xa), {
        key: 1,
        content: typeof o.content == "boolean" ? String(o.content) : o.content ?? "",
        "max-width": p(u),
        transfer: ""
      }, {
        default: ne(() => [
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
let st = 0, tt = null;
function Zt() {
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
  Zt();
}) : Zt());
function Sl(t) {
  const o = tt || Zt();
  t ? o.classList.add("show") : o.classList.remove("show");
}
function At(t) {
  let o = st;
  t ? st++ : st > 0 && st--, o !== st && (st === 0 ? Sl(!1) : o === 0 && Sl(!0));
}
const el = typeof window < "u";
function Je(t, o, n) {
  Fe(t[o]) ? t[o].value = n : t[o] = n;
}
function Q(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function nn(t) {
  return { style: { display: cl(t) ? "unset" : "none" } };
}
function Hl(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function Wl(t) {
  const o = pe(t);
  let n = Q(o);
  if (n === "Object") {
    for (let e in o)
      if (o.hasOwnProperty(e)) {
        let l = Q(o[e]);
        l === "String" ? o[e] = o[e].trim() : (l === "Object" || l === "Array") && Pt(o[e]);
      }
  } else if (n === "Array")
    for (let e = 0, l = o.length; e < l; e++) {
      let i = Q(o[e]);
      i === "String" ? o[e] = o[e].trim() : (i === "Array" || i === "Object") && Pt(o[e]);
    }
  return o;
}
function Pt(t) {
  let o = Q(t);
  if (o === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = Q(t[n]);
        e === "String" ? t[n] = t[n].trim() : (e === "Object" || e === "Array") && Pt(t[n]);
      }
  } else if (o === "Array")
    for (let n = 0, e = t.length; n < e; n++) {
      let l = Q(t[n]);
      l === "String" ? t[n] = t[n].trim() : (l === "Array" || l === "Object") && Pt(t[n]);
    }
}
function tl(t, o = []) {
  if (Q(t) === "Array")
    return t.forEach((n, e) => {
      switch (Q(n)) {
        case "Array":
        case "Object":
          tl(n);
          break;
        default:
          t[e] = null;
      }
    }), t;
  if (Q(t) === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = !0;
        for (let l of o)
          if (l === n) {
            e = !1;
            break;
          }
        if (e)
          switch (Q(t[n])) {
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
const on = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function sn(t) {
  let o = new FormData();
  for (let n in t)
    t.hasOwnProperty(n) && t[n] !== null && o.append(n, t[n]);
  return o;
}
function Bt(t, o, n = !1) {
  if (!t || !o)
    return !1;
  let e, l = "notFoundC", i = function(u, c) {
    if (Array.isArray(u)) {
      if (Q(c) === "Function" && c(u))
        return l = u, [];
      for (let s of u) {
        if (l !== "notFoundC")
          break;
        if (Q(c) === "Function" && c(s) || s === c)
          return l = s, [u.indexOf(s)];
        if (Q(s) === "Array" || Q(s) === "Object") {
          let y = i(s, c);
          if (y !== void 0)
            return [u.indexOf(s), ...y];
        }
      }
    } else if (Q(u) === "Object") {
      if (Q(c) === "Function" && c(u))
        return l = u, [];
      for (let s in u) {
        if (l !== "notFoundC")
          break;
        if (u.hasOwnProperty(s)) {
          if (Q(c) === "Function" && c(s) || u[s] === c)
            return l = u[s], [s];
          if (Q(u[s]) === "Object" || Q(u[s]) === "Array") {
            let y = i(u[s], c);
            if (y !== void 0)
              return [s, ...y];
          }
        }
      }
    }
  };
  return e = i(t, o), n ? e || !1 : l === "notFoundC" ? !1 : l;
}
function rn(t, o) {
  for (let n = 0, e = o.length; n < e; n++)
    if (t === o[n])
      return !0;
  return !1;
}
function un(t, o = 2) {
  let n = new RegExp(`(^-?\\d+\\.\\d{${o}})(\\d+$)`), e = t && String(t) || "";
  return n.test(e) ? Number(e.replace(n, "$1")) : t;
}
let je = null;
function jl(t, o = {}, n = "get") {
  let e = document.getElementsByTagName("body")[0];
  if (!e) {
    console.error("document.body 不存在，无法执行文件下载");
    return;
  }
  je || (je = document.createElement("form"), je.setAttribute("style", "display:none"), je.setAttribute("target", ""), e.appendChild(je)), je.innerHTML = "", je.setAttribute("method", n);
  let l = t;
  if (window != null && window.g) {
    let i = Object.keys(window.g).filter((u) => {
      var c;
      return ((c = u == null ? void 0 : u.indexOf) == null ? void 0 : c.call(u, "URL")) > -1;
    }).map((u) => {
      var c;
      return (c = u.replace) == null ? void 0 : c.call(u, "URL", "");
    });
    for (let u of i) {
      let c = new RegExp("^/" + u + "(?=/.*$)", "i");
      if (c.test(t) && window.g[u + "URL"]) {
        l = window.g[u + "URL"] + t.replace(c, "");
        break;
      }
    }
  }
  if (je.setAttribute("action", l), ut(o)) {
    for (let i in o)
      if (o.hasOwnProperty(i) && (o[i] || o[i] === 0 || o[i] === !1 || o[i] === "")) {
        let u = document.createElement("input");
        u.setAttribute("type", "hidden"), u.setAttribute("name", i), u.setAttribute("value", o[i]), je.appendChild(u);
      }
    je.submit();
  } else
    console.error("请求数据格式有误，无法下载文件");
}
async function dn(t, o = {}, n = "get", e = !1, l) {
  if (o.hasOwnProperty("columns") && (o.columns === "" || o.columns === null || o.columns === void 0)) {
    Ke.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  e ? await ql(t, o, n, l) : jl(t, o, n);
}
async function ql(t, o = {}, n = "get", e) {
  At(!0);
  try {
    let l = t;
    if (window != null && window.g) {
      let f = Object.keys(window.g).filter((r) => (r == null ? void 0 : r.indexOf("URL")) > -1).map((r) => r == null ? void 0 : r.replace("URL", ""));
      for (let r of f) {
        let h = new RegExp("^/" + r + "(?=/.*$)", "i");
        if (h.test(t) && window.g[r + "URL"]) {
          l = window.g[r + "URL"] + t.replace(h, "");
          break;
        }
      }
    }
    const i = {
      method: n.toUpperCase(),
      credentials: "include"
    };
    if (n.toLowerCase() === "get" && Object.keys(o).length > 0) {
      const f = new URLSearchParams();
      for (let r in o)
        o.hasOwnProperty(r) && (o[r] || o[r] === 0 || o[r] === !1 || o[r] === "") && f.append(r, o[r]);
      l += (l.includes("?") ? "&" : "?") + f.toString();
    }
    ["post", "put"].includes(n.toLowerCase()) && (i.headers = {
      "Content-Type": "application/json"
    }, i.body = JSON.stringify(o));
    const u = await fetch(l, i);
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
        const r = l.split("?")[0], h = r.substring(r.lastIndexOf("/") + 1);
        h && h.includes(".") && (c = decodeURIComponent(h));
      }
    }
    const s = await u.blob(), y = window.URL.createObjectURL(s), m = document.createElement("a");
    m.href = y, m.download = c, document.body.appendChild(m), m.click(), document.body.removeChild(m), window.URL.revokeObjectURL(y);
  } catch (l) {
    console.error("下载出错:", l);
  } finally {
    At(!1);
  }
}
function cn(t, o, n = !1) {
  let e;
  if (t && Q(o) === "Array") {
    let l = localStorage.getItem(t);
    if (l) {
      let i = JSON.parse(decodeURI(l));
      e = o.filter((u) => {
        var c;
        return (u == null ? void 0 : u.key) && ((c = i == null ? void 0 : i.indexOf) == null ? void 0 : c.call(i, u.title)) !== -1;
      }).map((u) => u.key);
    } else
      e = o.map((i) => i == null ? void 0 : i.key);
  } else
    e = [];
  return n || (e = String(e)), e;
}
function Re(t) {
  return t != null && t !== "";
}
function fn(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function Xl(t, o = !1, n = "") {
  return function(e, l) {
    var u, c;
    let i;
    if (Array.isArray(t)) {
      let s = [];
      for (let y of t)
        Re((u = l.row) == null ? void 0 : u[y]) && s.push(l.row[y]);
      i = s.join(n);
    } else typeof t == "function" ? i = t(l) : i = (c = l.row) == null ? void 0 : c[t];
    return Ae(an, { content: o ? i === "" ? "--" : i ?? "--" : i });
  };
}
function pn(t) {
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
function mn(t) {
  return Q(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : Q(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function rt({
  group: t,
  condition: o,
  key: n,
  val: e,
  childKey: l = "children"
}) {
  if (Q(t) !== "Array" || Q(o) !== "Function" || Q(n) !== "String" || Q(l) !== "String")
    return !1;
  t.forEach((i) => {
    o(i) && (Q(e) === "Function" ? i[n] = e(i[n]) : i[n] = e), Q(i[l]) === "Array" && i[l].length > 0 && rt({
      group: i[l],
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
function hn(t) {
  return fl(t);
}
function fl(t) {
  return typeof t == "number" && Number.isNaN(t);
}
function yn(t, o = !1, n = !1) {
  if (Q(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), l = "";
  for (let i in e)
    if (e.hasOwnProperty(i)) {
      let u = e[i];
      u === void 0 || u === "" || Q(u) === "String" && u.trim() === "" || u === null || fl(u) ? n ? o ? l += i + "=&" : e[i] = "" : delete e[i] : o && (l += i + "=" + u + "&");
    }
  return o ? l.length > 0 ? l.substring(0, l.length - 1) : "" : e;
}
function ll(t) {
  let o = {};
  if (Array.isArray(t)) {
    o = [];
    for (let n of t)
      Array.isArray(n) || ut(n) ? o.push(ll(n)) : Re(n) && o.push(n);
  } else if (ut(t))
    for (let n in t)
      t.hasOwnProperty(n) && (Array.isArray(t[n]) || ut(t[n]) ? o[n] = ll(t[n]) : Re(t[n]) && (o[n] = t[n]));
  return o;
}
function vn(t) {
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
function gn(t, o) {
  if (!t)
    return "";
  const n = [];
  if (Array.isArray(o) && typeof o[0] == "string")
    n.push(Vl(o));
  else
    for (let e of o)
      n.push(Vl(e));
  return fe(t, n);
}
function Vl(t) {
  const [o, ...n] = t;
  return [$t(o), ...n];
}
const bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: tl,
  dataFilterOrToUrl: yn,
  decimalDigitsLimit: un,
  directivesComponent: gn,
  downloadFileByFormSubmit: jl,
  downloadFileWithSpin: ql,
  fileExport: dn,
  findCollection: Bt,
  formDataHeadConfig: on,
  getColumnsKeys: cn,
  has: nn,
  hasPermission: cl,
  htmlPrint: vn,
  isClient: el,
  isEmptyValue: pn,
  isNaN: hn,
  isNumberNaN: fl,
  isNumberValue: fn,
  isValidValue: Re,
  myTypeof: Q,
  oneOf: rn,
  removeEmptyValue: ll,
  setValByOption: rt,
  setValue: Je,
  siblingElems: pl,
  stringLength: mn,
  toFormData: sn,
  toLine: Hl,
  tooltipManual: Xl,
  trimObj: Wl
}, Symbol.toStringTag, { value: "Module" })), kn = { class: "groupBoxRP" }, wn = ["onClick"], _n = /* @__PURE__ */ ce({
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
    function l(i, u) {
      var m, f, r, h, b, k, C, w;
      (m = i == null ? void 0 : i.preventDefault) == null || m.call(i);
      let c = i == null ? void 0 : i.target;
      if (u && !u.children && !c.classList.contains("active")) {
        o.push(u.path);
        return;
      }
      let s = c.parentNode, y = pl(s);
      for (let S of y) {
        (r = (f = S == null ? void 0 : S.classList) == null ? void 0 : f.remove) == null || r.call(f, "open");
        const B = (h = S == null ? void 0 : S.querySelectorAll) == null ? void 0 : h.call(S, ".open");
        if (B && Array.isArray(B))
          for (let O of B)
            (k = (b = O == null ? void 0 : O.classList) == null ? void 0 : b.remove) == null || k.call(b, "open");
      }
      (w = (C = s == null ? void 0 : s.classList) == null ? void 0 : C.toggle) == null || w.call(C, "open");
    }
    return (i, u) => {
      const c = te("Icon"), s = te("sideMenuGroup", !0);
      return T(), K("ul", kn, [
        (T(!0), K(ge, null, Ve(n.data, (y, m) => (T(), K(ge, {
          key: (y == null ? void 0 : y.path) + m
        }, [
          y ? (T(), K("li", {
            key: 0,
            class: we({ dropItemRP: y.children })
          }, [
            M("div", {
              class: we(["menuTxtR", e(y)]),
              onClick: (f) => l(f, y),
              style: re({ paddingLeft: y.level * 20 + "px" })
            }, [
              y != null && y.icon ? (T(), le(c, {
                key: 0,
                class: "menuIcoL",
                custom: "iconfont " + y.icon
              }, null, 8, ["custom"])) : ue("", !0),
              M("span", null, q((y == null ? void 0 : y.name) || "-- no name --"), 1)
            ], 14, wn),
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
let kt = [], wt = [], Tl = !1;
const Cn = function(t) {
  if (Tl) {
    console.warn("定时器模块已经初始化过，请勿重复调用 init");
    return;
  }
  t && typeof t.beforeEach == "function" ? (t.beforeEach(() => {
    kt.forEach((o) => {
      window.clearTimeout(o);
    }), wt.forEach((o) => {
      window.clearInterval(o);
    }), kt.length = 0, wt.length = 0;
  }), Tl = !0) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Me = function(t, o) {
  if (typeof t != "function")
    throw new TypeError("第一个参数必须是函数");
  if (typeof o != "number" || o < 0)
    throw new TypeError("第二个参数必须是非负数");
  let n = window.setTimeout(t, o);
  return kt.push(n), n;
}, Sn = function(t, o) {
  if (typeof t != "function")
    throw new TypeError("第一个参数必须是函数");
  if (typeof o != "number" || o <= 0)
    throw new TypeError("第二个参数必须是正数");
  let n = window.setInterval(t, o);
  return wt.push(n), n;
}, Vn = function(t) {
  window.clearTimeout(t);
  const o = kt.indexOf(t);
  o > -1 && kt.splice(o, 1);
}, Tn = function(t) {
  window.clearInterval(t);
  const o = wt.indexOf(t);
  o > -1 && wt.splice(o, 1);
}, Bn = { class: "menuListR" }, Ln = /* @__PURE__ */ ce({
  __name: "SideMenu",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: o }) {
    const n = t, e = o, l = dl(), i = U(!0), u = U(), c = U(), s = j(() => i.value ? x("r.hideMenu") : x("r.showMenu")), y = j(() => i.value ? "ios-arrow-back" : "ios-arrow-forward");
    Kl(() => {
      let r = localStorage.getItem("menuDisplayR") || "";
      r !== "" ? i.value = JSON.parse(r) : (i.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), Se(
      () => l.path,
      (r) => {
        u.value = r, $e(() => {
          Me(f, 10);
        });
      },
      { immediate: !0 }
    );
    function m() {
      i.value = !i.value, localStorage.setItem("menuDisplayR", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function f() {
      var h, b, k, C, w;
      let r = c.value.querySelectorAll(".dropItemRP");
      for (let S of r)
        (h = S == null ? void 0 : S.querySelector) != null && h.call(S, ".active") && !((k = (b = S.classList) == null ? void 0 : b.contains) != null && k.call(b, "open")) && ((w = (C = S.classList) == null ? void 0 : C.add) == null || w.call(C, "open"));
    }
    return (r, h) => {
      const b = te("Icon");
      return T(), K("div", {
        ref_key: "menuRef",
        ref: c,
        class: we(["menuBoxRP", "cannotSelect", { light: r.light }])
      }, [
        fe(M("div", Bn, [
          Z(_n, {
            data: n.data,
            pathName: p(u)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, p(i)]
        ]),
        Z(b, {
          type: p(y),
          size: 25,
          class: we([{ showIco: !p(i) }, "menuShowHideIco"]),
          title: p(s),
          onClick: m,
          color: p(i) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 2);
    };
  }
}), xn = { class: "groupBoxRX" }, On = ["onMouseenter"], In = ["onClick"], An = /* @__PURE__ */ ce({
  __name: "SideMenuProGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const o = Nt(), n = t, e = U("");
    function l(s) {
      let y = "menuTxtR ";
      return (s == null ? void 0 : s.path) === n.pathName && (y += "active "), y;
    }
    function i(s, y) {
      var f;
      (f = s == null ? void 0 : s.preventDefault) == null || f.call(s);
      let m = s == null ? void 0 : s.target;
      y && !y.children && !m.classList.contains("active") && o.push(y.path);
    }
    function u(s, y) {
      var m;
      (m = s == null ? void 0 : s.preventDefault) == null || m.call(s), e.value = y == null ? void 0 : y.path;
    }
    function c(s) {
      var y;
      (y = s == null ? void 0 : s.preventDefault) == null || y.call(s), e.value = "";
    }
    return (s, y) => {
      const m = te("Icon"), f = te("SideMenuProGroup", !0);
      return T(), K("ul", xn, [
        (T(!0), K(ge, null, Ve(n.data, (r, h) => {
          var b;
          return T(), K("li", {
            key: (r == null ? void 0 : r.path) + h,
            class: we({ dropItemRX: r == null ? void 0 : r.children }),
            onMouseenter: (k) => u(k, r),
            onMouseleave: y[0] || (y[0] = (k) => c(k))
          }, [
            M("div", {
              class: we(l(r)),
              onClick: (k) => i(k, r),
              style: re({ paddingLeft: r.level * 20 + "px" })
            }, [
              ke(q((r == null ? void 0 : r.name) || "-- no name --") + " ", 1),
              fe(Z(m, {
                class: "dropIcoRX",
                type: "ios-arrow-forward",
                size: 16
              }, null, 512), [
                [ve, r.children && r.children.length > 0]
              ])
            ], 14, In),
            ((b = r == null ? void 0 : r.children) == null ? void 0 : b.length) > 0 ? fe((T(), le(f, {
              key: 0,
              class: "rightChildRX",
              data: r == null ? void 0 : r.children,
              "path-name": s.pathName
            }, null, 8, ["data", "path-name"])), [
              [ve, p(e) === (r == null ? void 0 : r.path)]
            ]) : ue("", !0)
          ], 42, On);
        }), 128))
      ]);
    };
  }
}), Pn = { class: "groupBoxRX" }, Rn = ["onClick"], Jl = /* @__PURE__ */ ce({
  __name: "SideMenuTwoLevel",
  props: {
    data: { default: () => [] },
    pathName: { default: "" },
    fromIcoMenu: { type: Boolean }
  },
  setup(t) {
    const o = Nt(), n = t;
    function e(i) {
      let u = "menuTxtR ";
      return (i == null ? void 0 : i.path) === n.pathName && (u += "active "), u;
    }
    function l(i, u) {
      var f, r, h, b, k, C, w, S, B, O, $, N, D, v;
      (f = i == null ? void 0 : i.preventDefault) == null || f.call(i);
      let c = i == null ? void 0 : i.target;
      if (u && !u.children && !c.classList.contains("active")) {
        o.push(u.path);
        return;
      }
      const s = (r = c == null ? void 0 : c.querySelector) == null ? void 0 : r.call(c, ".dropIcoRX"), y = c.parentNode, m = pl(y);
      for (let A of m) {
        (b = (h = A == null ? void 0 : A.classList) == null ? void 0 : h.remove) == null || b.call(h, "open");
        const L = (k = A == null ? void 0 : A.querySelector) == null ? void 0 : k.call(A, ".dropIcoRX");
        (w = (C = L == null ? void 0 : L.classList) == null ? void 0 : C.remove) == null || w.call(C, "open");
        const ee = (S = A == null ? void 0 : A.querySelectorAll) == null ? void 0 : S.call(A, ".open");
        for (let E of ee)
          (O = (B = E == null ? void 0 : E.classList) == null ? void 0 : B.remove) == null || O.call(B, "open");
      }
      (N = ($ = y == null ? void 0 : y.classList) == null ? void 0 : $.toggle) == null || N.call($, "open"), (v = (D = s == null ? void 0 : s.classList) == null ? void 0 : D.toggle) == null || v.call(D, "open");
    }
    return (i, u) => {
      const c = te("Icon");
      return T(), K("ul", Pn, [
        (T(!0), K(ge, null, Ve(n.data, (s, y) => (T(), K("li", {
          key: (s == null ? void 0 : s.path) + y,
          class: we({ dropItemRX: s == null ? void 0 : s.children, open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu })
        }, [
          M("div", {
            class: we(e(s)),
            onClick: (m) => l(m, s),
            style: re({ paddingLeft: s.level * 20 + "px" })
          }, [
            Z(c, {
              class: "menuIcoL",
              custom: "iconfont " + (s.icon || "icon-r-menu-default")
            }, null, 8, ["custom"]),
            M("span", null, q((s == null ? void 0 : s.name) || "-- no name --"), 1),
            fe(Z(c, {
              class: we(["dropIcoRX", { open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu }]),
              type: "ios-arrow-forward"
            }, null, 8, ["class"]), [
              [ve, s.children && s.children.length > 0]
            ])
          ], 14, Rn),
          s.children ? (T(), le(An, {
            key: 0,
            data: s.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : ue("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Mn = { class: "groupBoxRX" }, $n = ["onMouseenter"], Fn = ["onClick"], Dn = /* @__PURE__ */ ce({
  __name: "SideIcoMenu",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const o = Nt(), n = t, e = U("");
    function l(s) {
      let y = "menuTxtR ";
      return (s == null ? void 0 : s.path) === n.pathName && (y += "active "), y;
    }
    function i(s, y) {
      var f;
      (f = s == null ? void 0 : s.preventDefault) == null || f.call(s);
      let m = s == null ? void 0 : s.target;
      y && !y.children && !m.classList.contains("active") && o.push(y.path);
    }
    function u(s, y) {
      var m;
      (m = s == null ? void 0 : s.preventDefault) == null || m.call(s), e.value = y == null ? void 0 : y.path;
    }
    function c(s) {
      var y;
      (y = s == null ? void 0 : s.preventDefault) == null || y.call(s), e.value = "";
    }
    return (s, y) => {
      const m = te("Icon");
      return T(), K("ul", Mn, [
        (T(!0), K(ge, null, Ve(n.data, (f, r) => (T(), K("li", {
          key: (f == null ? void 0 : f.path) + r,
          class: we({ dropItemRX: f.children }),
          onMouseenter: (h) => u(h, f),
          onMouseleave: y[0] || (y[0] = (h) => c(h))
        }, [
          M("div", {
            class: we(l(f)),
            onClick: (h) => i(h, f)
          }, [
            Z(m, {
              class: "menuIcoM",
              custom: "iconfont " + (f.icon || "icon-r-menu-default"),
              size: "20"
            }, null, 8, ["custom"])
          ], 10, Fn),
          fe(Z(Jl, {
            class: "rightTwoMenu",
            data: [f],
            pathName: n.pathName,
            fromIcoMenu: ""
          }, null, 8, ["data", "pathName"]), [
            [ve, p(e) === (f == null ? void 0 : f.path)]
          ])
        ], 42, $n))), 128))
      ]);
    };
  }
}), Nn = { class: "menuListR" }, En = /* @__PURE__ */ ce({
  __name: "SideMenuPro",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: o }) {
    const n = t, e = o, l = dl(), i = U(!0), u = U(), c = U(), s = j(() => i.value ? x("r.hideMenu") : x("r.showMenu")), y = j(() => i.value ? "iconfont icon-r-menu-hide" : "iconfont icon-r-menu-open");
    Kl(() => {
      let r = localStorage.getItem("menuDisplayRPro") || "";
      r !== "" ? i.value = JSON.parse(r) : (i.value = !0, localStorage.setItem("menuDisplayRPro", JSON.stringify(!0)));
    }), Se(
      () => l.path,
      (r) => {
        u.value = r, $e(() => {
          Me(f, 10);
        });
      },
      { immediate: !0 }
    );
    function m() {
      i.value = !i.value, localStorage.setItem("menuDisplayRPro", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function f() {
      var h, b, k, C, w, S, B, O, $, N, D, v, A, L, ee, E, _, X, F, g, P, R, G, J, ie, me, he, Oe, Ie, ae, xe, Pe, Ze, We, H, z, ye, be, _e;
      let r = c.value.querySelectorAll(".dropItemRX");
      for (let W of r) {
        const Ce = (b = (h = W == null ? void 0 : W.childNodes[0]) == null ? void 0 : h.querySelector) == null ? void 0 : b.call(h, ".dropIcoRX");
        (k = W == null ? void 0 : W.querySelector) != null && k.call(W, ".active") ? (S = (w = (C = W == null ? void 0 : W.childNodes[1]) == null ? void 0 : C.classList) == null ? void 0 : w.contains) != null && S.call(w, "rightChildRX") ? ($ = (O = (B = W == null ? void 0 : W.childNodes[0]) == null ? void 0 : B.classList) == null ? void 0 : O.contains) != null && $.call(O, "activeR") || (D = W == null ? void 0 : (N = W.childNodes[0].classList).add) == null || D.call(N, "activeR") : ((A = (v = W == null ? void 0 : W.classList) == null ? void 0 : v.contains) != null && A.call(v, "open") || (ee = (L = W.classList).add) == null || ee.call(L, "open"), Ce && !((_ = (E = Ce == null ? void 0 : Ce.classList) == null ? void 0 : E.contains) != null && _.call(E, "open")) && ((F = (X = Ce.classList).add) == null || F.call(X, "open"))) : (R = (P = (g = W == null ? void 0 : W.childNodes[1]) == null ? void 0 : g.classList) == null ? void 0 : P.contains) != null && R.call(P, "rightChildRX") ? (ie = (J = (G = W == null ? void 0 : W.childNodes[0]) == null ? void 0 : G.classList) == null ? void 0 : J.contains) != null && ie.call(J, "activeR") && ((he = W == null ? void 0 : (me = W.childNodes[0].classList).remove) == null || he.call(me, "activeR")) : ((Ie = (Oe = W == null ? void 0 : W.classList) == null ? void 0 : Oe.contains) != null && Ie.call(Oe, "open") && !((xe = (ae = W == null ? void 0 : W.classList) == null ? void 0 : ae.contains) != null && xe.call(ae, "fromIcoMenu")) && ((Ze = (Pe = W.classList).remove) == null || Ze.call(Pe, "open")), (H = (We = Ce == null ? void 0 : Ce.classList) == null ? void 0 : We.contains) != null && H.call(We, "open") && !((ye = (z = Ce == null ? void 0 : Ce.classList) == null ? void 0 : z.contains) != null && ye.call(z, "fromIcoMenu")) && ((_e = (be = Ce.classList).remove) == null || _e.call(be, "open")));
      }
    }
    return (r, h) => {
      const b = te("Icon");
      return T(), K("div", {
        ref_key: "menuProRef",
        ref: c,
        class: we(["menuBoxRPro", "cannotSelect", { light: r.light }])
      }, [
        fe(M("div", Nn, [
          Z(Jl, {
            data: n.data,
            pathName: p(u)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, p(i)]
        ]),
        fe(Z(Dn, {
          class: "icoMenuR",
          data: r.data,
          pathName: p(u)
        }, null, 8, ["data", "pathName"]), [
          [ve, !p(i)]
        ]),
        Z(b, {
          custom: p(y),
          size: 14,
          class: we([{ showIco: !p(i) }, "menuShowHideIco"]),
          title: p(s),
          onClick: m
        }, null, 8, ["custom", "class", "title"])
      ], 2);
    };
  }
}), Kn = ["title"], Yl = /* @__PURE__ */ ce({
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
    return (i, u) => {
      const c = te("Icon"), s = $t("has");
      return fe((T(), K("div", {
        class: we(["tableBtnsG", { disabled: e.disabled }]),
        onClick: l,
        title: e.title || p(x)("r.button")
      }, [
        Z(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Kn)), [
        [s, e.has]
      ]);
    };
  }
}), zn = { class: "contentX" }, Un = { class: "arrowA" }, al = /* @__PURE__ */ ce({
  __name: "ShowHidePanel",
  props: /* @__PURE__ */ ka({
    bg: {}
  }, {
    modelValue: { type: Boolean, default: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const o = wa(t, "modelValue"), n = t, e = j(() => o ? "background:" + n.bg || "transparent" : "");
    return (l, i) => {
      const u = te("Icon");
      return T(), K("div", {
        style: re(p(e))
      }, [
        fe(M("div", zn, [
          Ne(l.$slots, "default")
        ], 512), [
          [ve, o.value]
        ]),
        M("div", Un, [
          M("div", {
            class: "btA",
            onClick: i[0] || (i[0] = (c) => o.value = !o.value)
          }, [
            Z(u, {
              type: o.value ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Gn = { class: "contentZ" }, Hn = /* @__PURE__ */ ce({
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
    }), i = j(() => l.value ? "background:" + n.bg : "");
    return (u, c) => (T(), K("div", {
      style: re(p(i))
    }, [
      fe(M("div", Gn, [
        Ne(u.$slots, "default")
      ], 512), [
        [ve, p(l)]
      ])
    ], 4));
  }
});
function Et() {
  const t = U(!1);
  function o() {
    t.value = !0;
  }
  function n() {
    t.value = !1;
  }
  function e(i) {
    t.value || i();
  }
  function l(i) {
    t.value || i();
  }
  return {
    isComposing: t,
    onCompositionStart: o,
    onCompositionEnd: n,
    handleChange: e,
    handleSearch: l
  };
}
const Wn = /* @__PURE__ */ ce({
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
    const { onCompositionStart: i, onCompositionEnd: u, handleSearch: c } = Et(), s = j({
      get() {
        return e.modelValue;
      },
      set(r) {
        n("update:modelValue", r);
      }
    }), y = j({
      get() {
        return e.open;
      },
      set(r) {
        n("on-toggle", r);
      }
    }), m = j(() => y.value ? "ios-arrow-up" : "ios-arrow-down");
    function f() {
      c(() => {
        l || (l = !0, n("on-search", s.value), Me(() => {
          l = !1;
        }, 2e3));
      });
    }
    return (r, h) => {
      const b = te("Input"), k = te("icon");
      return T(), K("div", {
        class: "tableSearchV",
        style: re({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Ne(r.$slots, "default", {}, () => [
          Z(b, {
            modelValue: p(s),
            "onUpdate:modelValue": h[0] || (h[0] = (C) => Fe(s) ? s.value = C : null),
            style: re({ width: e.width }),
            search: "",
            onCompositionstart: p(i),
            onCompositionend: p(u),
            onOnSearch: f,
            class: "searchInputC",
            placeholder: e.placeholder || p(x)("r.pInput")
          }, null, 8, ["modelValue", "style", "onCompositionstart", "onCompositionend", "placeholder"])
        ]),
        fe(M("span", {
          class: "sbt",
          onClick: h[1] || (h[1] = (C) => y.value = !p(y)),
          style: re({ color: e.btnColor })
        }, [
          Z(k, {
            type: p(m),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ke(q(p(x)("r.adSearch")), 1)
        ], 4), [
          [ve, e.showBtn]
        ])
      ], 4);
    };
  }
}), Ql = {
  beforeMount(t, o) {
    t.__vueClickOutsideBinding__ = o;
    function n(e) {
      var l, i;
      if (t.contains(e.target))
        return !1;
      (i = (l = t.__vueClickOutsideBinding__) == null ? void 0 : l.value) == null || i.call(l, e);
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
function Zl(t, o, n, e, l = !1) {
  const i = (...u) => Qe.apply(this, u);
  Ke.call(this, {
    title: t === null ? i("r.info.title") : t,
    text: o === null ? i("r.info.text") : o,
    icon: n === null ? "warning" : n,
    onOk: e,
    buttons: [i("r.cancel")],
    closeOnClickOutside: l
  });
}
const jn = { class: "tabSetF" }, qn = { class: "cannotSelect" }, Xn = { class: "topCheck" }, ea = /* @__PURE__ */ ce({
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
    var v, A, L, ee, E;
    const n = o, e = t, l = U(), i = U(), u = U(!0), c = U(!1), s = U(!1), y = U([]), m = j(() => {
      var X;
      let _ = x("r.unknown");
      return ((X = e.modelValue) == null ? void 0 : X.length) > y.value.length && (y.value = pe(e.modelValue)), y.value.map((F) => {
        let g = { label: (F == null ? void 0 : F.title) || _ };
        return F != null && F.disableShowSetting && (g.disabled = !0), g;
      });
    }), f = j(() => m.value.filter((_) => _ == null ? void 0 : _.disabled)), r = j({
      get() {
        var _, X;
        return (X = (_ = e.modelValue) == null ? void 0 : _.map) == null ? void 0 : X.call(_, (F) => (F == null ? void 0 : F.title) || x("r.unknown"));
      },
      set(_) {
        let X = y.value.filter((F) => {
          for (let g of _)
            if (g === (F == null ? void 0 : F.title))
              return !0;
          return !1;
        });
        n("update:modelValue", X);
      }
    }), h = (E = (ee = (L = (A = (v = Mt()) == null ? void 0 : v.appContext) == null ? void 0 : A.config) == null ? void 0 : L.globalProperties) == null ? void 0 : ee.$i18n) == null ? void 0 : E.locale;
    let b = null;
    Ge(() => {
      let _ = x("r.unknown"), X = N();
      X ? r.value = JSON.parse(decodeURI(X)) : e.defaultCheck && (r.value = e.modelValue.filter((F) => F == null ? void 0 : F.showSettingCheck).map((F) => (F == null ? void 0 : F.title) || _)), $e(function() {
        !l.value || !i.value || (b = new Ra(l.value, i.value, {
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
            var g;
            if (F != null && F.popper && ((g = F.instance) != null && g.popper)) {
              const P = k(F), { needChange: R } = P;
              if (R) {
                const { height: G } = P, J = F.instance.popper;
                J.style && (J.style.height = `${G}px`);
              }
            }
          }
        }));
      }), Me(() => {
        var F;
        s.value = !0, (F = b == null ? void 0 : b.update) == null || F.call(b), $e(function() {
          s.value = !1;
        });
      }, 0);
    }), ul(function() {
      var _;
      (_ = b == null ? void 0 : b.destroy) == null || _.call(b);
    });
    function k(_) {
      var R, G;
      const { height: X } = _.popper, F = _.instance.popper, g = window.innerHeight;
      let P = 0;
      if ((R = F.childNodes) != null && R.length)
        for (let J = 0; J < F.childNodes.length; J++)
          P += (G = F.childNodes[J]) == null ? void 0 : G.offsetHeight;
      return g < X - 10 || X < P ? {
        needChange: !0,
        height: g - 10 < P ? g - 10 : P
      } : { needChange: !1 };
    }
    function C(_) {
      _.length === m.value.length ? (u.value = !1, c.value = !0) : _.length > f.value.length ? (u.value = !0, c.value = !1) : (u.value = !1, c.value = !1);
    }
    Se(() => r.value, C, {
      immediate: !0,
      deep: !0
    });
    function w() {
      s.value && (D() && Zl(x("r.notSave"), "", "warning", B), s.value = !1);
    }
    function S() {
      s.value ? w() : (s.value = !0, $e(function() {
        var _;
        (_ = b == null ? void 0 : b.update) == null || _.call(b);
      }));
    }
    function B() {
      h ? window[e.storage].setItem(e.sKey + "_" + h, encodeURI(JSON.stringify(r.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(r.value))), w();
    }
    function O(_) {
      var X, F;
      if (s.value) {
        if (e.transfer) {
          const g = i.value;
          if (g === (_ == null ? void 0 : _.target) || (X = g == null ? void 0 : g.contains) != null && X.call(g, _ == null ? void 0 : _.target))
            return;
        }
        (F = _ == null ? void 0 : _.preventDefault) == null || F.call(_), w();
      }
    }
    function $() {
      u.value ? c.value = !1 : c.value = !c.value, u.value = !1, c.value ? r.value = m.value.map((_) => _ == null ? void 0 : _.label) : r.value = f.value.map((_) => _ == null ? void 0 : _.label);
    }
    function N() {
      let _;
      return h ? _ = window[e.storage].getItem(e.sKey + "_" + h) : _ = window[e.storage].getItem(e.sKey), _;
    }
    function D() {
      var X;
      let _ = N();
      if (_) {
        if (_ = JSON.parse(decodeURI(_)), (_ == null ? void 0 : _.length) !== ((X = r.value) == null ? void 0 : X.length))
          return !0;
        for (let F of _)
          if (r.value.indexOf(F) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (_, X) => {
      const F = te("Icon"), g = te("Checkbox"), P = te("CheckboxGroup");
      return fe((T(), K("div", jn, [
        M("div", {
          ref_key: "buttonRef",
          ref: l,
          class: "tabSetBt",
          onClick: S
        }, [
          Z(F, {
            type: "md-settings",
            size: "17"
          }),
          M("span", qn, q(p(x)("r.tabSetting")), 1)
        ], 512),
        (T(), le(_a, {
          to: "body",
          disabled: !e.transfer
        }, [
          fe(M("div", {
            ref_key: "popperRef",
            ref: i,
            class: "tabSetCard",
            style: re({ width: e.width, backgroundColor: e.bg })
          }, [
            M("div", Xn, [
              Z(g, {
                indeterminate: p(u),
                modelValue: p(c),
                "onUpdate:modelValue": X[0] || (X[0] = (R) => Fe(c) ? c.value = R : null),
                onClick: qt($, ["prevent"])
              }, {
                default: ne(() => [
                  ke(q(p(x)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              M("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: B
              }, [
                X[2] || (X[2] = M("span", { class: "iconfont icon-r-save" }, null, -1)),
                M("span", null, q(p(x)("r.save")), 1)
              ])
            ]),
            Z(P, {
              modelValue: p(r),
              "onUpdate:modelValue": X[1] || (X[1] = (R) => Fe(r) ? r.value = R : null)
            }, {
              default: ne(() => [
                (T(!0), K(ge, null, Ve(p(m), (R, G) => (T(), le(g, {
                  class: "setItem",
                  label: R && R.label,
                  key: "tabSet_" + e.sKey + G,
                  disabled: R && R.disabled
                }, null, 8, ["label", "disabled"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ], 4), [
            [ve, p(s)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [p(Ql), O]
      ]);
    };
  }
});
function Jn(t) {
  return t.replace(/_(\w)/g, function(o, n) {
    return n.toUpperCase();
  });
}
function ds(t) {
  let o = document.createElement("div");
  return o.textContent !== void 0 ? o.textContent = t : o.innerText = t, o.innerHTML;
}
function cs(t) {
  let o = document.createElement("div");
  return o.innerHTML = t, o.innerText || o.textContent;
}
function Bl(t) {
  return new Promise((o) => {
    let n = new FileReader();
    n.readAsDataURL(t), n.onloadend = () => {
      o(n.result);
    };
  });
}
function ta(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function ht(t) {
  return Q(t) === "String" && t.indexOf("image") > -1;
}
function Ll(t) {
  const o = ta(t);
  let n = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(o) > -1 ? n = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(o) > -1 ? n = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(o) > -1 ? n = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(o) > -1 ? n = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(o) > -1 ? n = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(o) > -1 && (n = "ios-videocam"), n;
}
function Yn(t, o) {
  let n = document.createElement("a");
  n.href = o, n.download = t, Qn(n);
}
function Qn(t) {
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
  if (t && Ta(t)) {
    if (Ba(o)) {
      if (ut(t)) {
        let i = t, u = pe(l);
        if (o(i))
          return n && i[n] && u.push(i[n]), u;
        if (i[e] && !De(i[e])) {
          n && i[n] && u.push(i[n]);
          let c = nl({
            group: i[e],
            condition: o,
            pathKey: n,
            childKey: e,
            path: u
          });
          if (!De(c))
            return c;
        }
      } else if (Array.isArray(t))
        for (let i of t) {
          let u = pe(l);
          if (o(i))
            return n && i[n] ? u.push(i[n]) : u.push(String(t.indexOf(i))), u;
          if (i[e] && i[e].length > 0) {
            n && i[n] ? u.push(i[n]) : u.push(String(t.indexOf(i)));
            let c = nl({
              group: i[e],
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
      for (let i of t) {
        let u = pe(l);
        if (i === o)
          return u.push(String(t.indexOf(i))), u;
      }
  }
  return [];
}
function Zn(t, o = 12) {
  if (Q(t) === "String" && t.length > 0) {
    let n = document.createElement("span");
    n.style.fontSize = o + "px", n.style.fontFamily = "inherit", n.innerHTML = t, n.style.opacity = "0", n.style.position = "fixed", n.style.top = "3000px", document.body.append(n);
    const e = n.clientWidth;
    return document.body.removeChild(n), e;
  }
  return 0;
}
function fs(t) {
  return t === "" ? null : t;
}
function ps(t) {
  var o;
  t = t || window.Event, t != null && t.stopPropagation ? (o = t.stopPropagation) == null || o.call(t) : t && (t.cancelBubble = !0);
}
const He = /* @__PURE__ */ new Map();
let eo = 0;
function ol({
  height: t,
  width: o = 416,
  title: n,
  content: e,
  onOk: l,
  onCancel: i,
  onClose: u,
  okText: c,
  cancelText: s,
  noWarnIcon: y,
  footerAlign: m,
  cancelBt: f = !0
}) {
  const r = (...S) => Qe.apply(this, S);
  let b = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", k = Q(e) === "String";
  const C = typeof e == "function", w = "msgbox_" + ++eo;
  He.set(w, !1), lt.warning({
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
                  Ht,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      He.get(w) || (lt.remove(), He.delete(w), u && Q(u) === "Function" && u());
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
                  textAlign: k ? "center" : "left"
                }
              },
              [
                Ae("i", {
                  class: k && !y ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Ae("div", { class: "msgBoxConO" }, C ? [e(Ae)] : e || r("r.info.text"))
              ]
            ),
            Ae(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: m || "center"
                }
              },
              [
                Ae(
                  Ht,
                  {
                    class: "okBtN",
                    onClick(S) {
                      var B, O, $, N, D, v, A, L, ee;
                      if (l && typeof l == "function") {
                        const E = l();
                        if (E && Q(E) === "Promise") {
                          He.set(w, !0);
                          const _ = (S == null ? void 0 : S.currentTarget) || (S == null ? void 0 : S.target);
                          if (_) {
                            (O = (B = _.classList) == null ? void 0 : B.add) == null || O.call(B, "ivu-btn-loading"), (N = ($ = _.nextSibling) == null ? void 0 : $.setAttribute) == null || N.call($, "disabled", "disabled");
                            const X = (A = (v = (D = _.parentElement) == null ? void 0 : D.parentElement) == null ? void 0 : v.querySelector) == null ? void 0 : A.call(v, ".titleN .closeN");
                            (ee = (L = X == null ? void 0 : X.classList) == null ? void 0 : L.add) == null || ee.call(L, "disabled");
                          }
                          Promise.resolve(E).then(() => {
                            He.set(w, !1), lt.remove(), He.delete(w);
                          }).catch(() => {
                            He.set(w, !1), lt.remove(), He.delete(w);
                          });
                        } else
                          lt.remove(), He.delete(w);
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
                  Ht,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onClick() {
                      He.get(w) || (lt.remove(), He.delete(w), Q(i) === "Function" && i && i());
                    }
                  },
                  () => s || r("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
const to = window.location.origin;
let Rt = null;
const xl = (...t) => Qe.apply(Rt, t);
let Ue = Yt.create({
  baseURL: to,
  withCredentials: !0
  // 允许携带cookie
});
function lo() {
  console.info(
    "store为空，请在安装插件时传入store实例，vuex：app.use(plugRQw,{store})，Pinia：app.use(plugRQw,{useStore})"
  );
}
Ue.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function Ol() {
  var t, o;
  if (Ue.store)
    if (typeof Ue.store == "function") {
      const n = Ue.store();
      n.logout && n.logout();
    } else
      (o = (t = Ue.store) == null ? void 0 : t.dispatch) == null || o.call(t, "logout");
  else
    lo();
}
Ue.interceptors.response.use(
  (t) => {
    var o, n;
    return Rt && (((o = t == null ? void 0 : t.data) == null ? void 0 : o.code) === 403 || ((n = t == null ? void 0 : t.data) == null ? void 0 : n.code) === 409) && ol({
      content: xl("r.http." + t.data.code),
      onOk: Ol
    }), t;
  },
  (t) => {
    var o, n;
    return Rt && (((o = t == null ? void 0 : t.response) == null ? void 0 : o.status) === 403 || ((n = t == null ? void 0 : t.response) == null ? void 0 : n.status) === 409) && ol({
      content: xl("r.http." + t.response.status),
      onOk: Ol
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
function ao(t, o, n, e, l, i, u) {
  return new Promise((c, s) => {
    switch (t) {
      case "get":
        Ue.get(o, { params: n }).then((m) => {
          let f = et(m, e, l, i);
          f ? c(f) : s(m);
        }).catch((m) => {
          et({}, e, l, i), s(m);
        });
        break;
      case "delete":
        let y = u ? "params" : "data";
        Ue.delete(o, { [y]: n }).then((m) => {
          let f = et(m, e, l, i);
          f ? c(f) : s(m);
        }).catch((m) => {
          et({}, e, l, i), s(m);
        });
        break;
      case "post":
        Ue.post(o, n, i).then((m) => {
          let f = et(m, e, l, i);
          f ? c(f) : s(m);
        }).catch((m) => {
          et({}, e, l, i), s(m);
        });
        break;
      case "put":
        Ue.put(o, n, i).then((m) => {
          let f = et(m, e, l, i);
          f ? c(f) : s(m);
        }).catch((m) => {
          et({}, e, l, i), s(m);
        });
        break;
    }
  });
}
function St(t, o, n = {}, e, l, i, u) {
  return new Promise((c, s) => {
    var y;
    if (o) {
      i && i.spin && At(!0);
      let m = o;
      if (window != null && window.g) {
        const h = window.g;
        let b = Object.keys(h).filter((k) => {
          var C;
          return ((C = k == null ? void 0 : k.indexOf) == null ? void 0 : C.call(k, "URL")) > -1;
        }).map((k) => {
          var C;
          return (C = k.replace) == null ? void 0 : C.call(k, "URL", "");
        });
        for (let k of b) {
          let C = new RegExp("^/" + k + "(?=/.*$)", "i");
          if (C.test(o) && h[k + "URL"]) {
            m = h[k + "URL"] + o.replace(C, "");
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
          for (let h of n)
            (h || h === 0 || h === !1 || h === "" && i && !i.noEmptyStr) && f.push(h);
        } else {
          f = {};
          for (let h in n)
            n.hasOwnProperty(h) && (n[h] || n[h] === 0 || n[h] === !1 || n[h] === "" && i && !i.noEmptyStr) && (f[h] = n[h]);
        }
      let r = t.toLowerCase();
      ao(r, m, f, e, l, i, u).then((h) => {
        c(h);
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
    Ue.store = t, Rt = o.config.globalProperties;
  },
  post(t, o, n, e, l) {
    return new Promise((i, u) => {
      St("post", t, o, n, e, l).then((c) => {
        i(c);
      }).catch((c) => {
        u(c);
      });
    });
  },
  put(t, o, n, e, l) {
    return new Promise((i, u) => {
      St("put", t, o, n, e, l).then((c) => {
        i(c);
      }).catch((c) => {
        u(c);
      });
    });
  },
  get(t, o, n, e, l) {
    return new Promise((i, u) => {
      St("get", t, o, n, e, l).then((c) => {
        i(c);
      }).catch((c) => {
        u(c);
      });
    });
  },
  delete(t, o, n, e, l, i = !0) {
    return new Promise((u, c) => {
      St("delete", t, o, n, e, l, i).then((s) => {
        u(s);
      }).catch((s) => {
        c(s);
      });
    });
  },
  all: Yt.all,
  spread: Yt.spread,
  config: Ue
}, no = {
  key: 0,
  class: "pageTotal"
}, oo = {
  key: 1,
  class: "pageProSize"
}, la = /* @__PURE__ */ ce({
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
    const n = o, e = U(), l = t, i = ((r = Le == null ? void 0 : Le()) == null ? void 0 : r.fontSizeBase) || 14, u = U(16), c = j({
      get() {
        return l.modelValue;
      },
      set(h) {
        n("update:modelValue", h), n("on-change", h);
      }
    }), s = j({
      get() {
        return l.pageSize;
      },
      set(h) {
        n("on-page-size-change", h), c.value !== 1 && (c.value = 1);
      }
    }), y = j(() => {
      const h = Zn(String(l.total || 0), i) + u.value + 2;
      return h < 32 ? 32 : h;
    });
    Se(
      y,
      (h) => {
        $e(function() {
          f(h);
        });
      },
      { immediate: !0 }
    );
    function m() {
      var w, S, B;
      const h = (B = (S = (w = e.value) == null ? void 0 : w.$el) == null ? void 0 : S.querySelector) == null ? void 0 : B.call(S, "input");
      if (!h)
        return 16;
      const b = window.getComputedStyle(h), k = b == null ? void 0 : b.paddingLeft, C = b == null ? void 0 : b.paddingRight;
      return !k || !C ? 16 : Number(k.replace("px", "")) + Number(C.replace("px", ""));
    }
    function f(h) {
      var k, C, w;
      const b = (w = (C = (k = e.value) == null ? void 0 : k.$el) == null ? void 0 : C.querySelector) == null ? void 0 : w.call(C, "input");
      b != null && b.style && (b.style.width = `${h}px`);
    }
    return Ge(() => {
      u.value = m();
    }), (h, b) => {
      const k = te("Page"), C = te("Option"), w = te("Select");
      return T(), K("div", {
        class: we(["pagePro", { pageProDefault: l.size === "default" }])
      }, [
        l.showTotal ? (T(), K("span", no, q(p(x)("r.total") + " ") + q(l.total) + q(" " + p(x)("r.items")), 1)) : ue("", !0),
        Z(k, {
          ref_key: "pageRef",
          ref: e,
          modelValue: p(c),
          "onUpdate:modelValue": b[0] || (b[0] = (S) => Fe(c) ? c.value = S : null),
          "page-size": p(s),
          total: l.total,
          size: l.size,
          "page-size-opts": l.pageSizeOpts,
          disabled: l.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        l.showSizer ? (T(), K("div", oo, [
          Z(w, {
            modelValue: p(s),
            "onUpdate:modelValue": b[1] || (b[1] = (S) => Fe(s) ? s.value = S : null),
            size: l.size,
            transfer: l.transfer,
            disabled: l.disabled
          }, {
            default: ne(() => [
              (T(!0), K(ge, null, Ve(l.pageSizeOpts, (S) => (T(), le(C, {
                value: S,
                key: S
              }, {
                default: ne(() => [
                  ke(q(S) + " " + q(p(x)("r.page")), 1)
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
}), io = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, so = { class: "topBtn" }, ro = { class: "tableContainer growFlexItem" }, uo = { class: "fullHeight relativeBox" }, co = { class: "pageContainer" }, il = /* @__PURE__ */ ce({
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
    ({ ...Oa });
    const l = t, i = ((We = Le()) == null ? void 0 : We.pageSizes) || [10, 20, 50, 100], u = U(l.data), c = U(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || l.pageSize
    ), s = U(1), y = U(0);
    let m = [], f, r, h = U(l.orderKey), b = U(l.orderDefault);
    const k = U(300), C = j(() => {
      for (let H of l.columns)
        if (H != null && H.fixed)
          return !0;
      return !1;
    }), w = j(() => l.selectionFixed || C.value), S = j(() => {
      let H = {
        ...l.searchData,
        current: s.value,
        size: c.value
      };
      return l.sortable === "custom" && (l.orderKeyFormat === "underline" ? H[b.value] = Hl(h.value) : l.orderKeyFormat === "camelcase" && (H[b.value] = Jn(h.value))), H;
    }), B = j(() => {
      let H = l.columns.filter((z) => z && z.type !== "selection");
      if (l.selection || l.radio) {
        let z;
        l.radio ? z = {
          title: " ",
          width: 65,
          render: (ye, be) => Ae(Ia, {
            modelValue: be.row.btChecked
          })
        } : z = {
          type: "selection",
          width: 60
        }, l.selectionFixed && (z.fixed = l.selectionFixed), H.unshift(z);
      }
      return H.forEach((z) => {
        var ye;
        z && (l.sortable === "custom" ? z.key && z.sortable !== !0 && z.sortable !== !1 && (z.sortable = "custom") : z.sortable = !1, z.align || (z.align = ((ye = Le()) == null ? void 0 : ye.btTablePageAlign) || "center"));
      }), H.forEach((z) => {
        z != null && z.key && z.render === void 0 && (z.tooltip ? z.render = Xl(z.key, l.tableEmptyTdHandle) : z.render = (ye, be) => {
          let _e = "";
          return z != null && z.key && (_e = be.row[z.key]), l.tableEmptyTdHandle ? Ae("span", _e === "" ? "--" : _e ?? "--") : Ae("span", _e);
        });
      }), H;
    }), O = j({
      get() {
        return u.value.map((H, z) => Object.assign({}, H, {
          btKey: "bt-" + z,
          btChecked: !!H.btChecked
        }));
      },
      set(H) {
        u.value = H;
      }
    }), $ = j(() => m.map((H) => H == null ? void 0 : H.id)), N = j(() => m.map((H) => H == null ? void 0 : H.btKey)), D = U(), v = U();
    Se(() => l.searchData, A, { deep: !0 }), Se(
      () => l.orderDefault,
      (H) => {
        b.value = H;
      }
    ), Se(
      () => l.orderKey,
      (H) => {
        h.value = H;
      }
    );
    function A() {
      s.value = 1, Ie();
    }
    function L() {
      l.initData && Ie();
    }
    function ee(H) {
      u.value.unshift(pe(H)), Me(() => {
        var z, ye;
        (ye = (z = D.value) == null ? void 0 : z.clickCurrentRow) == null || ye.call(z, 0);
      }, 100);
    }
    function E(H, z, ye) {
      let be = null;
      if (typeof z == "number" ? be = z : z && (be = r), be !== null) {
        let _e = u.value[be];
        for (let W in H)
          H.hasOwnProperty(W) && (_e[W] = H[W]);
        ye && Me(() => {
          var W, Ce;
          (Ce = (W = D.value) == null ? void 0 : W.clickCurrentRow) == null || Ce.call(W, be);
        }, 10);
      }
    }
    function _(H) {
      u.value.splice(H, 1), Me(() => {
        var z, ye;
        (ye = (z = D.value) == null ? void 0 : z.clickCurrentRow) == null || ye.call(z, 0);
      }, 100);
    }
    function X(H, z) {
      var ye, be;
      H.btChecked && l.radio || (l.selection || l.radio) && l.rowClickSelect && ((be = (ye = D.value) == null ? void 0 : ye.toggleSelect) == null || be.call(ye, z));
    }
    function F(H, z) {
      f = z.btKey, r = Number(z.btKey.split("-")[1]), l.radio && (u.value[r].btChecked = !0);
    }
    function g(H) {
      if (l.radio)
        for (let z of O.value)
          z != null && z.btKey && z.btKey !== f && (u.value[Number(z.btKey.split("-")[1])].btChecked = !1);
      m = H, e("on-selection-change", H);
    }
    function P() {
      return pe(m);
    }
    function R() {
      Ie();
    }
    function G(H) {
      c.value = H, localStorage.setItem("btPageSize", String(H)), s.value === 1 && Ie();
    }
    function J({ key: H, order: z }) {
      z === "normal" ? (h.value = l.orderKey, b.value = l.orderDefault) : (h.value = H, b.value = z), s.value = 1, Oe();
    }
    function ie(H) {
      var ye, be, _e, W, Ce, nt, ot, ft;
      const z = H;
      if (typeof z == "number")
        me(), r = z, f = (be = (ye = O.value) == null ? void 0 : ye[z]) == null ? void 0 : be.btKey, (W = (_e = D.value) == null ? void 0 : _e.clickCurrentRow) == null || W.call(_e, z);
      else if (Array.isArray(z)) {
        if (l.radio || !l.selection)
          return;
        me();
        for (let Xe of z)
          (nt = (Ce = D.value) == null ? void 0 : Ce.clickCurrentRow) == null || nt.call(Ce, Xe);
      } else if (typeof z == "function")
        for (let Xe = 0; Xe < O.value.length; Xe++) {
          const _t = O.value[Xe];
          z(_t) && ((ft = (ot = D.value) == null ? void 0 : ot.clickCurrentRow) == null || ft.call(ot, Xe));
        }
    }
    function me() {
      var H, z;
      if (l.radio) {
        if (N.value.length > 0 && O.value.length > 0) {
          let ye = N.value[0].split("-")[1];
          O.value[ye].btChecked = !1;
        }
      } else
        (z = (H = D.value) == null ? void 0 : H.selectAll) == null || z.call(H, !1);
      m.length > 0 && (m = [], e("on-selection-change", [])), f = null, r = null;
    }
    function he() {
      u.value = [], me(), s.value = 1, y.value = 0;
    }
    function Oe(H, z, ye) {
      return new Promise((be) => {
        H && (b.value = H), z && (h.value = z), l.url ? qe[l.method](l.url, S.value, "", [], { spin: l.getDataLoading }).then((_e) => {
          var Ce, nt;
          let W;
          ye || me(), typeof l.dataHandler == "function" ? W = l.dataHandler(_e) : W = _e, W.data ? (W.data.records || W.data.records === null ? u.value = W.data.records || [] : W.data.page ? (W.data.page.records || W.data.page.records === null) && (u.value = W.data.page.records || []) : W.data.data ? (W.data.data.records || W.data.data.records === null) && (u.value = W.data.data.records || []) : u.value = W.data, y.value = ((Ce = W.data.page) == null ? void 0 : Ce.total) || ((nt = W.data.data) == null ? void 0 : nt.total) || W.data.total || W.total || 0, y.value === 0 && s.value > 1 && u.value && u.value.length === 0 ? s.value = 1 : s.value > 1 && y.value <= (s.value - 1) * c.value && (s.value--, $e(function() {
            Oe(H, z);
          })), e("on-data-change", W), be(W)) : (console.warn("请求返回数据有误，无法使用"), he(), e("on-data-change", W));
        }).catch((_e) => {
          me(), he(), e("on-data-change", _e);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Ie(H, z, ye) {
      l.radio && (H || l.rowClickNum !== -1) ? Oe(z, ye, H).then(() => {
        u.value.length > 0 && Me(() => {
          var be, _e, W, Ce;
          H ? (_e = (be = D.value) == null ? void 0 : be.clickCurrentRow) == null || _e.call(be, r || 0) : (Ce = (W = D.value) == null ? void 0 : W.clickCurrentRow) == null || Ce.call(W, l.rowClickNum);
        }, 10);
      }) : Oe();
    }
    function ae() {
      k.value < 50 ? Me(ae, 100) : Me(xe, 10);
    }
    function xe() {
      var H;
      k.value = ((H = v.value) == null ? void 0 : H.clientHeight) || 0;
    }
    function Pe() {
      var H, z;
      xe(), (z = (H = D.value) == null ? void 0 : H.handleResize) == null || z.call(H);
    }
    const Ze = Dt(Pe, 300);
    return Ge(() => {
      L(), w.value && (ae(), window.addEventListener("resize", Ze));
    }), ul(() => {
      Ze.cancel(), w.value && window.removeEventListener("resize", Ze);
    }), o({
      dataS: O,
      selectedIds: $,
      addRow: ee,
      setRowData: E,
      deleteRow: _,
      getSelected: P,
      selectRow: ie,
      clearSelect: me,
      clearTableData: he,
      getTableData: Oe,
      getDataAndClickRow: Ie
    }), (H, z) => {
      const ye = te("Table"), be = te("Page");
      return T(), K("div", io, [
        fe(M("div", so, [
          Ne(H.$slots, "tableSetting"),
          Ne(H.$slots, "topMsg"),
          Ne(H.$slots, "topBtnGroup")
        ], 512), [
          [ve, l.showTopRow]
        ]),
        M("div", ro, [
          M("div", uo, [
            M("div", {
              ref_key: "tableContainerLOI",
              ref: v,
              class: "fullFlowContent"
            }, [
              Z(ye, ct({
                ref_key: "tableRef",
                ref: D
              }, H.$attrs, {
                height: p(w) && p(k) || null,
                class: { noBorderTable: l.noBorderTable, fullHeightTable: !p(w), lightHeadO: l.lightHead },
                columns: p(B),
                data: p(O),
                "highlight-row": l.radio || l.highlightRow,
                onOnSelect: F,
                onOnSelectionChange: g,
                onOnSortChange: J,
                onOnRowClick: X
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        fe(M("div", co, [
          l.usePagePro ? (T(), le(la, {
            key: 0,
            modelValue: p(s),
            "onUpdate:modelValue": z[0] || (z[0] = (_e) => Fe(s) ? s.value = _e : null),
            total: p(y),
            showTotal: l.showTotal,
            pageSize: p(c),
            showSizer: l.showSizer,
            pageSizeOpts: p(i),
            size: l.pageComponentSize,
            onOnChange: R,
            onOnPageSizeChange: G
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (T(), le(be, {
            key: 1,
            modelValue: p(s),
            "onUpdate:modelValue": z[1] || (z[1] = (_e) => Fe(s) ? s.value = _e : null),
            total: p(y),
            pageSize: p(c),
            pageSizeOpts: p(i),
            showSizer: l.showSizer,
            showTotal: l.showTotal,
            size: l.pageComponentSize,
            showElevator: !l.noElevator,
            onOnChange: R,
            onOnPageSizeChange: G
          }, null, 8, ["modelValue", "total", "pageSize", "pageSizeOpts", "showSizer", "showTotal", "size", "showElevator"]))
        ], 512), [
          [ve, !l.noPage]
        ])
      ], 512);
    };
  }
}), aa = /* @__PURE__ */ ce({
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
    const n = o, e = t, { onCompositionStart: l, onCompositionEnd: i, handleChange: u } = Et(), c = j({
      get() {
        var h;
        return (h = e.modelValue) == null ? void 0 : h.key;
      },
      set(h) {
        let b = {
          key: h,
          val: null
        };
        c.value && c.value !== h && (b.beforeKey = c.value), n("update:modelValue", b), n("on-change", b);
      }
    }), s = j({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(h) {
        n("update:modelValue", {
          key: c.value,
          val: h
        });
      }
    }), y = j(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), m = j(() => ({
      width: typeof e.itemWidth == "number" ? e.itemWidth + "px" : e.itemWidth
    }));
    function f(h) {
      u(() => {
        h != null && h.target && h.target.value !== void 0 && r({
          key: c.value,
          val: h.target.value
        });
      });
    }
    const r = Dt((h) => {
      n("on-change", h);
    }, 500);
    return Ft(() => {
      r.cancel();
    }), (h, b) => {
      const k = te("Option"), C = te("Select"), w = te("Input");
      return T(), K("div", null, [
        Z(C, {
          modelValue: p(c),
          "onUpdate:modelValue": b[0] || (b[0] = (S) => Fe(c) ? c.value = S : null),
          style: re(p(y)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: ne(() => [
            (T(!0), K(ge, null, Ve(e.selectOption, (S, B) => (T(), le(k, {
              value: S == null ? void 0 : S.val,
              label: S == null ? void 0 : S.label,
              key: "selectInputOp" + (S == null ? void 0 : S.value) + B,
              style: re({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        Z(w, {
          modelValue: p(s),
          "onUpdate:modelValue": b[1] || (b[1] = (S) => Fe(s) ? s.value = S : null),
          placeholder: e.placeholder || p(x)("r.pInput"),
          style: re(p(m)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onCompositionstart: p(l),
          onCompositionend: p(i),
          onOnChange: f
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled", "onCompositionstart", "onCompositionend"])
      ]);
    };
  }
});
let sl = { securityJsCode: "", key: "" };
function fo({ securityJsCode: t, key: o }) {
  sl.securityJsCode = t, sl.key = o;
}
function Il(t) {
  return sl[t];
}
const po = { class: "searchInputWrap" }, mo = { class: "addressListWrap" }, ho = { class: "addressList" }, yo = ["onClick"], vo = { class: "addressName" }, go = {
  key: 0,
  class: "addressDetail"
}, na = /* @__PURE__ */ ce({
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
    const n = o, e = t, l = U(""), i = U([]), u = j({
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
    }), c = j(() => Tt(e.width) ? e.width + "px" : e.width), s = j(() => Tt(e.height) ? e.height + "px" : e.height ? e.height : Tt(e.width) ? e.width * 0.66 + "px" : "200px"), y = j(() => ({
      width: c.value,
      position: "relative"
    })), m = j(() => e.inputInMap ? {
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
    Se(
      () => e.modelValue,
      (_) => {
        if (_ != null && _.name && (l.value = _.name), e.showMap && _ && _.lng && _.lat) {
          if (!$ || !N)
            return;
          ee({
            lng: _.lng,
            lat: _.lat,
            name: _.name
          });
        }
      }
    );
    const f = "mapId" + Math.floor(Math.random() * 1e9), r = U(null), h = U(null);
    let b;
    const { onCompositionStart: k, onCompositionEnd: C, handleSearch: w } = Et();
    function S() {
      h.value && h.value.clientHeight < 10 || !h.value ? Me(S, 300) : Me(v, 100);
    }
    function B() {
      var _;
      (_ = e.modelValue) != null && _.name && (l.value = e.modelValue.name);
    }
    let O, $, N, D;
    function v() {
      Wt.load({
        key: Il("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((_) => {
        O = _, $ = new O.Map(f).on("complete", () => {
          var X, F;
          N = new O.Geocoder(), (X = e.modelValue) != null && X.lng && ((F = e.modelValue) != null && F.lat) && ee({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
        });
      });
    }
    function A() {
      w(() => {
        if (l.value.trim()) {
          if (e.showMap && !$) {
            console.warn("地图未就绪，请稍后重试");
            return;
          }
          Wt.load({
            key: Il("key"),
            version: "2.0",
            plugins: ["AMap.AutoComplete"]
          }).then((_) => {
            D || (D = new _.Autocomplete({
              city: "全国",
              type: ""
            })), D.search(l.value, (X, F) => {
              X === "complete" && F.info === "OK" ? i.value = F.tips.slice(0, 10).filter(
                (g) => {
                  var P, R;
                  return g.name && (g.address || ((P = g.location) == null ? void 0 : P.lng) && ((R = g.location) == null ? void 0 : R.lat));
                }
              ).map((g) => {
                var P, R;
                return {
                  name: g.name,
                  address: g.address,
                  lng: (P = g.location) == null ? void 0 : P.lng,
                  lat: (R = g.location) == null ? void 0 : R.lat
                };
              }) : (i.value = [], console.warn("地址搜索失败", F));
            });
          });
        }
      });
    }
    function L(_) {
      l.value = _.name, i.value = [], typeof _.lng == "number" && typeof _.lat == "number" ? (e.showMap && ee({
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
      })) : _.name && (e.showMap ? N == null || N.getLocation(_.name, (X, F) => {
        var g;
        if (X === "complete" && F.info === "OK" && ((g = F.geocodes) == null ? void 0 : g.length) > 0) {
          const P = F.geocodes[0].location;
          ee({
            name: _.name,
            lng: P.lng,
            lat: P.lat
          }), u.value = {
            name: _.name,
            lng: P.lng,
            lat: P.lat
          }, n("on-change", {
            name: _.name,
            lng: P.lng,
            lat: P.lat
          });
        } else
          console.warn("地址地理编码失败", F);
      }) : (u.value = {
        name: _.name
      }, n("on-change", {
        name: _.name
      })));
    }
    function ee({ lng: _, lat: X, name: F }) {
      if (typeof _ != "number" || typeof X != "number") {
        console.warn("无效的坐标数据:", { lng: _, lat: X });
        return;
      }
      if (!$) {
        console.warn("地图实例不存在");
        return;
      }
      $ == null || $.clearMap();
      let g = new O.LngLat(_, X);
      $ == null || $.setCenter(g);
      let P = new O.Marker({
        map: $,
        position: g,
        draggable: !0
      });
      E(_, X), P.on("dragend", () => {
        let R = P.getPosition();
        u.value = {
          name: F || null,
          lng: R.lng,
          lat: R.lat
        }, E(R.lng, R.lat);
      }), P.on("click", (R) => {
        var G, J;
        b && b.open($, (J = (G = R == null ? void 0 : R.target) == null ? void 0 : G.getPosition) == null ? void 0 : J.call(G));
      }), $ == null || $.setFitView();
    }
    function E(_, X) {
      const F = e.inputInMap ? "mapInfoWindowIKJ" : "mapInfoWindowMA";
      N == null || N.getAddress([_, X], (g, P) => {
        g === "complete" && P.info === "OK" && P.regeocode && P.regeocode.formattedAddress ? b = new O.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="' + F + '">' + P.regeocode.formattedAddress + "</div>",
          offset: new O.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (b = null, console.warn("地图获取位置信息失败", P));
      });
    }
    return Ge(() => {
      B(), S();
    }), Ft(() => {
      var _;
      $ && ($.destroy(), (_ = Wt) == null || _.reset(), $ = null, N = null, D = null, b = null);
    }), (_, X) => (T(), K("div", {
      style: re(p(y)),
      class: we(e.inputInMap ? "containerIKJ" : "containerMapAddress")
    }, [
      M("div", po, [
        Z(p(Aa), {
          ref_key: "mapInputRef",
          ref: r,
          modelValue: p(l),
          "onUpdate:modelValue": X[0] || (X[0] = (F) => Fe(l) ? l.value = F : null),
          class: we(e.inputInMap && e.showMap ? { mapInputIKJ: !0 } : "searchInput"),
          placeholder: e.placeholder || p(x)("r.search"),
          disabled: e.disabled,
          search: "",
          "enter-button": "",
          onCompositionstart: p(k),
          onCompositionend: p(C),
          onOnEnter: A,
          onOnSearch: A
        }, null, 8, ["modelValue", "class", "placeholder", "disabled", "onCompositionstart", "onCompositionend"]),
        fe(M("div", mo, [
          M("div", ho, [
            (T(!0), K(ge, null, Ve(p(i), (F, g) => (T(), K("div", {
              key: g,
              class: "addressItem",
              onClick: (P) => L(F)
            }, [
              M("span", vo, q(F.name), 1),
              typeof F.address == "string" ? (T(), K("span", go, q(F.address), 1)) : ue("", !0)
            ], 8, yo))), 128))
          ])
        ], 512), [
          [ve, p(i).length > 0]
        ])
      ]),
      fe(M("div", {
        style: re(p(m)),
        ref_key: "mapRef",
        ref: h,
        id: f
      }, null, 4), [
        [ve, e.showMap]
      ])
    ], 6));
  }
});
var Nl;
const oa = /* @__PURE__ */ ce({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (Nl = window == null ? void 0 : window.g) != null && Nl.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const n = o, e = t, l = U([]), i = j({
      get() {
        let m = e.modelValue;
        return Array.isArray(m) ? pe(m) : Tt(m) ? nl({
          group: l.value,
          condition: (f) => (f == null ? void 0 : f.value) === m,
          pathKey: "value"
        }) : zl(m) ? m.split(e.separator) : [];
      },
      set(m) {
        if (e.onlyLastVal)
          De(m) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", Lt(m));
        else {
          if (bt(e.modelValue, m))
            return;
          n("update:modelValue", pe(m));
        }
      }
    });
    function u() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      qe.get(e.url).then((m) => {
        var r;
        let f = null;
        (r = m == null ? void 0 : m.data) != null && r.records ? f = m.data.records : m != null && m.data ? f = m.data : m && (f = m), f ? (typeof e.optionFilter == "function" && Q(e.optionFilter) === "Function" && (f = e.optionFilter(f)), l.value = c(f)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function c(m) {
      let f = [];
      for (let r of m) {
        let h = {
          value: r[e.optionVal],
          label: r[e.optionLabel]
        };
        r != null && r.children && !De(r.children) && (h.children = c(r.children)), f.push(h);
      }
      return f;
    }
    function s(m) {
      return e.onlyLastLabel ? Lt(m) : m.join(e.separator);
    }
    function y(m, f) {
      let r = "";
      De(f) || (r = f.map((h) => h == null ? void 0 : h.label).join(e.separator)), n("on-label-change", r);
    }
    return Ge(u), (m, f) => {
      const r = te("Cascader");
      return T(), le(r, {
        data: p(l),
        modelValue: p(i),
        "onUpdate:modelValue": f[0] || (f[0] = (h) => Fe(i) ? i.value = h : null),
        onOnChange: y,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": s,
        placeholder: e.placeholder || p(x)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), ia = /* @__PURE__ */ ce({
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
            let c = i.substring(0, 2) + "0000000000", s = i.substring(0, 4) + "00000000";
            return [c, s, i];
          }
          return i.indexOf(e.separator) !== -1 ? i.split(e.separator) : [i];
        } else return Array.isArray(e.modelValue) ? pe(e.modelValue) : [];
      },
      set(i) {
        if (De(i))
          n("update:modelValue", null), n("on-name-change", null);
        else {
          let u = Lt(i), c = "", s = "";
          if (u && (c = u.code), c && c.length < 12) {
            let y = [...c];
            for (; y.length < 12; )
              y.push(0);
            c = y.join("");
          }
          if (Array.isArray(i) && (s = i.map((y) => y == null ? void 0 : y.name).join(e.separator)), c) {
            if (c === e.modelValue)
              return;
            n("update:modelValue", c);
          }
          s && n("on-name-change", s);
        }
      }
    });
    return (i, u) => (T(), le(p(Ma), ct(i.$attrs, {
      class: "alCascaderMC",
      modelValue: p(l),
      "onUpdate:modelValue": u[0] || (u[0] = (c) => Fe(l) ? l.value = c : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || p(x)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let Ye = 0, yt = [];
function sa(t, o, n, e) {
  var l, i, u;
  e && (e.innerHTML = ((l = t[o]) == null ? void 0 : l.name) ?? "", (i = t[o]) != null && i.name ? e.classList.contains("hide") && e.classList.remove("hide") : e.classList.contains("hide") || e.classList.add("hide")), n && (n.src = ((u = t[o]) == null ? void 0 : u.src) ?? t[o], Ye = o);
}
function Al(t, o, n, e) {
  if (t) {
    let l;
    Ye - 1 < 0 ? l = o.length - 1 : l = Ye - 1, sa(o, l, n, e);
  }
}
function Pl(t, o, n, e) {
  if (t) {
    let l;
    Ye + 1 > o.length - 1 ? l = 0 : l = Ye + 1, sa(o, l, n, e);
  }
}
function vt(t, o = 0) {
  var w, S, B, O, $, N, D;
  const n = (...v) => Qe.apply(this, v), e = n("r.closePreview"), l = n("r.fullImg"), i = n("r.last"), u = n("r.next");
  let c, s, y;
  Ye = o;
  const m = Array.isArray(t);
  m ? (s = ((w = t[Ye]) == null ? void 0 : w.src) ?? t[Ye], y = (S = t[Ye]) == null ? void 0 : S.name) : s = t, m && t.length > 1 ? c = `${i} ： ←, ↑, A, W | ${u} ： →, ↓, D, S | ${e} ： Esc` : c = `${e} ： Esc`;
  let f = Xt(document.getElementsByTagName("body")), r = document.createElement("div");
  r.setAttribute("class", "fullScreenImgByDom"), r.innerHTML = `<div class='previewInner'><div class='pageFBt left${m && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${i}' ></i></div><img alt='${l}' ><div class='pageFBt right${m && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${u}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${c}</p><p class='pName ${y ? "" : "hide"}'>${y}</p>`;
  const h = r.querySelector("img");
  h && s && (h.src = s);
  function b() {
    let v = Xt(document.getElementsByTagName("body"));
    v && r.parentNode && v.removeChild(r), document.removeEventListener("keyup", C);
    const A = yt.findIndex((L) => L.child === r);
    A > -1 && yt.splice(A, 1);
  }
  (O = (B = r.querySelector(".ivu-icon-md-close")) == null ? void 0 : B.addEventListener) == null || O.call(B, "click", b);
  const k = r.querySelector(".pName");
  ($ = r.querySelector(".pageFBt.left")) == null || $.addEventListener("click", function() {
    Al(m, t, h, k);
  }), (N = r.querySelector(".pageFBt.right")) == null || N.addEventListener("click", function() {
    Pl(m, t, h, k);
  });
  function C(v) {
    const A = yt[yt.length - 1];
    (A == null ? void 0 : A.child) === r && (v.keyCode === 37 || v.keyCode === 38 || v.keyCode === 87 || v.keyCode === 65 ? Al(m, t, h, k) : v.keyCode === 39 || v.keyCode === 40 || v.keyCode === 83 || v.keyCode === 68 ? Pl(m, t, h, k) : v.keyCode === 27 && b());
  }
  yt.push({ child: r, keyupHandler: C }), document.addEventListener("keyup", C), (D = f == null ? void 0 : f.appendChild) == null || D.call(f, r), r.focus({ preventScroll: !0 });
}
const bo = {
  key: 0,
  class: "previewBoxM"
}, ko = { class: "imgLoading" }, wo = ["src", "alt"], _o = { class: "deleteModal" }, Co = {
  key: 1,
  class: "previewBoxM"
}, So = {
  key: 0,
  class: "previewImg"
}, Vo = ["src", "alt"], To = { class: "deleteModal" }, Bo = {
  key: 2,
  class: "customFileListM"
}, Lo = {
  key: 0,
  class: "customFileListItem"
}, xo = ["onClick", "title"], Oo = { class: "btBoxJ" }, Io = {
  key: 3,
  class: "customFileListM"
}, Ao = {
  key: 0,
  class: "customFileListItem"
}, Po = { class: "listLoading" }, Ro = ["onClick", "title"], Mo = { class: "btBoxJ" };
var El;
const ra = /* @__PURE__ */ ce({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (El = window == null ? void 0 : window.g) != null && El.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const n = o, e = t, l = gt([]), i = gt([]), u = gt([]);
    let c = {};
    const s = U(0), y = j(() => !e.manualUpload && e.showImg && h.value ? "img" : e.manualUpload && e.showImg && h.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !h.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !h.value) ? "list" : ""), m = j(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), f = j({
      //文件集合
      get() {
        return e.manualUpload ? r.value : r.value.map((g) => ({ id: g }));
      },
      set(g) {
        e.manualUpload ? r.value = g || [] : r.value = (g == null ? void 0 : g.map((P) => P == null ? void 0 : P.id)) || [];
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
            return Array.isArray(e.modelValue) ? e.modelValue.filter((g) => g !== "--") : Q(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(g) {
        if (e.length === 1) {
          let P = Xt(g);
          n("update:modelValue", P ?? null), n("on-change", P ?? null);
        } else
          n("update:modelValue", pe(g)), n("on-change", pe(g));
      }
    }), h = j(() => {
      let g;
      if (e.manualUpload ? g = f.value : g = i.value, !g)
        return !1;
      for (let P of g) {
        let R;
        if (e.manualUpload ? R = P == null ? void 0 : P.type : R = P == null ? void 0 : P.mimeType, !R || R && !(ht(R) || R === "loading"))
          return !1;
      }
      return !0;
    }), b = j(() => i.value.filter((g) => ht(g == null ? void 0 : g.mimeType))), k = j(() => b.value.map((g) => ({
      src: e.url + "/" + (g == null ? void 0 : g.id) + "/download?preview=true",
      name: g == null ? void 0 : g.name
    }))), C = j(() => f.value.filter((g) => ht(g == null ? void 0 : g.type)));
    Se(C, async (g) => {
      u.value = await S(g);
    }), Se(
      () => f.value,
      async (g) => {
        if (y.value === "localImg")
          g != null && g.length ? l.value = await S(g) : l.value = [];
        else if (g != null && g.length && y.value !== "localList") {
          let P = pe(g);
          const R = pe(i.value);
          for (let G of P)
            if ((G == null ? void 0 : G.name) === void 0)
              if (G.id) {
                const J = Jt(R, (ie) => (ie == null ? void 0 : ie.id) === G.id);
                J ? (G.name = J.name, G.mimeType = J.mimeType) : c.hasOwnProperty(G.id) ? (G.name = c[G.id].name, G.mimeType = c[G.id].mimeType) : (G.mimeType = "loading", qe.get(e.url + "/" + G.id).then((ie) => {
                  var me, he, Oe, Ie, ae, xe;
                  G.name = ((Oe = (he = (me = ie == null ? void 0 : ie.data) == null ? void 0 : me.returnValue) == null ? void 0 : he[0]) == null ? void 0 : Oe.name) || x("r.file") + kl(g, G), G.mimeType = ((xe = (ae = (Ie = ie == null ? void 0 : ie.data) == null ? void 0 : Ie.returnValue) == null ? void 0 : ae[0]) == null ? void 0 : xe.mimeType) || "unknown", Ca(i);
                }).catch(() => {
                  G.name = x("r.file") + kl(P, G);
                }));
              } else
                G.name = x("r.unknown");
          i.value = P;
        } else
          i.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function w(g) {
      return (g == null ? void 0 : g.name) || (g == null ? void 0 : g.split) && Lt(g.split("/")) || g;
    }
    async function S(g) {
      let P = [];
      for (let R of g) {
        let G = await Bl(R);
        P.push(G);
      }
      return P;
    }
    function B(g) {
      if (!e.disabled) {
        let P = f.value;
        P == null || P.splice(g, 1), f.value = P, s.value && s.value--;
      }
    }
    function O(g) {
      g != null && g.id && window.open(e.url + "/" + g.id + "/download");
    }
    function $(g) {
      return e.manualUpload ? (g == null ? void 0 : g.type) && ht(g.type) : (g == null ? void 0 : g.id) && g.mimeType && ht(g.mimeType);
    }
    async function N(g) {
      if (e.manualUpload) {
        let P, R;
        if (typeof g == "number" ? (P = g, R = l.value) : g && (P = xt(C.value, (G) => G.size === g.size && G.lastModified === g.lastModified), R = u.value), !R)
          return;
        vt(
          R.map((G, J) => {
            var ie;
            return {
              src: G,
              name: (ie = C.value[J]) == null ? void 0 : ie.name
            };
          }),
          P
        );
      } else if (g != null && g.id) {
        const P = xt(b.value, (R) => R.id === g.id);
        vt(k.value, P);
      }
    }
    function D(g) {
      Q(g) === "String" && g.indexOf("http") > -1 ? window.open(g) : Q(g) === "File" && Bl(g).then((P) => {
        Yn(g.name, P);
      });
    }
    function v(g) {
      var P, R;
      if (e.length && s.value >= e.length)
        return Ke(x("r.info.title"), x("r.uploadLength", [e.length]), "warning"), !1;
      if (s.value++, e.manualUpload) {
        if (g) {
          let G = ta(g.name);
          if ((P = e.format) != null && P.length && e.format.indexOf(G) < 0)
            return Ke(
              x("r.wrongFileType"),
              x("r.supportType") + (((R = e.format) == null ? void 0 : R.length) && String(e.format) || x("r.none")),
              "warning"
            ), s.value--, !1;
          if (e.maxSize && g.size > e.maxSize * 1024)
            return Ke(x("r.fileIsBig"), x("r.supportSize") + e.maxSize + "kb", "warning"), s.value--, !1;
          let J = f.value;
          J == null || J.push(g), f.value = J;
        }
        return !1;
      } else
        return !0;
    }
    function A(g) {
      s.value--, console.warn(g), Ke(x("r.uploadError"), "", "error");
    }
    function L(g, P, R) {
      var G, J, ie, me, he, Oe;
      if ((g == null ? void 0 : g.code) === 0) {
        let Ie = f.value;
        P.id = (J = (G = g.data) == null ? void 0 : G[0]) == null ? void 0 : J.id, P.name = (me = (ie = g.data) == null ? void 0 : ie[0]) == null ? void 0 : me.name, P.mimeType = (Oe = (he = g.data) == null ? void 0 : he[0]) == null ? void 0 : Oe.mimeType, c[P.id] = { name: P.name, mimeType: P.mimeType }, Ie == null || Ie.push(P), f.value = Ie;
      } else
        s.value--, Ke(x("r.uploadFail"), (g == null ? void 0 : g.message) || "", "error");
    }
    function ee() {
      s.value--, Ke(x("r.fileIsBig"), x("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function E() {
      var g;
      s.value--, Ke(
        x("r.wrongFileType"),
        x("r.supportType") + (((g = e.format) == null ? void 0 : g.length) && String(e.format) || x("r.none")),
        "warning"
      );
    }
    function _(g) {
      let P = g == null ? void 0 : g.id, R = g == null ? void 0 : g.mimeType;
      P && (Q(R) === "String" && R.indexOf("image") > -1 ? vt(e.url + "/" + P + "/download?preview=true") : window.open(e.url + "/" + P + "/download?preview=true"));
    }
    function X(g) {
      var R, G, J;
      let P = (J = (G = (R = g == null ? void 0 : g.response) == null ? void 0 : R.data) == null ? void 0 : G[0]) == null ? void 0 : J.id;
      F(null, P);
    }
    function F(g, P) {
      if (!(!P && P !== 0) && !e.disabled && r.value.indexOf(P) !== -1) {
        const R = pe(r.value);
        let G = f.value;
        G == null || G.splice(R.indexOf(P), 1), f.value = G, s.value && s.value--;
      }
    }
    return (g, P) => {
      var ie, me, he, Oe, Ie;
      const R = te("Button"), G = te("Upload"), J = te("Icon");
      return T(), K("div", null, [
        Z(G, {
          name: "files",
          action: p(m),
          "before-upload": v,
          "on-error": A,
          "on-success": L,
          "on-exceeded-size": ee,
          "on-preview": _,
          "on-remove": X,
          "on-format-error": E,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && ((ie = p(f)) == null ? void 0 : ie.length) >= e.length || !!e.disabled
        }, {
          default: ne(() => {
            var ae;
            return [
              Z(R, {
                icon: "md-cloud-upload",
                disabled: e.length > 0 && ((ae = p(f)) == null ? void 0 : ae.length) >= e.length || !!e.disabled
              }, {
                default: ne(() => [
                  ke(q(p(x)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        p(y) === "img" && ((me = p(i)) == null ? void 0 : me.length) > 0 ? (T(), K("div", bo, [
          (T(!0), K(ge, null, Ve(p(i), (ae, xe) => (T(), K(ge, {
            key: ae == null ? void 0 : ae.id
          }, [
            !e.manualUpload && (ae == null ? void 0 : ae.id) !== null ? (T(), K("div", {
              key: 0,
              class: we(["previewImg", { previewLoading: ae.mimeType === "loading" }])
            }, [
              fe(M("div", ko, P[0] || (P[0] = [
                M("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ve, ae.mimeType === "loading"]
              ]),
              fe(M("img", {
                src: g.url + "/" + ae.id + "/download?preview=true",
                alt: ae.name
              }, null, 8, wo), [
                [ve, ae.mimeType !== "loading"]
              ]),
              fe(M("div", _o, [
                Z(J, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: p(x)("r.fView"),
                  onClick: (Pe) => p(vt)(p(k), xe)
                }, null, 8, ["title", "onClick"]),
                Z(J, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Pe) => F(Pe, ae.id),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ve, ae.mimeType !== "loading"]
              ])
            ], 2)) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        p(y) === "localImg" && ((he = p(l)) == null ? void 0 : he.length) > 0 ? (T(), K("div", Co, [
          (T(!0), K(ge, null, Ve(p(l), (ae, xe) => (T(), K(ge, {
            key: "manualImg" + xe
          }, [
            e.manualUpload && ae !== null ? (T(), K("div", So, [
              M("img", {
                src: ae,
                alt: "manualImg" + xe
              }, null, 8, Vo),
              M("div", To, [
                Z(J, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (Pe) => N(xe),
                  title: p(x)("r.fView")
                }, null, 8, ["onClick", "title"]),
                Z(J, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Pe) => B(xe),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        p(y) === "localList" && ((Oe = p(f)) == null ? void 0 : Oe.length) > 0 ? (T(), K("div", Bo, [
          (T(!0), K(ge, null, Ve(p(f), (ae, xe) => (T(), K(ge, {
            key: "manualItem" + xe
          }, [
            e.manualUpload && ae !== null ? (T(), K("p", Lo, [
              ae.name ? (T(), le(J, {
                key: 0,
                class: "fileTypeIco",
                type: p(Ll)(ae.name),
                size: "20"
              }, null, 8, ["type"])) : ue("", !0),
              M("span", {
                class: we(["upNameT", { previewName: $(ae) }]),
                onClick: (Pe) => D(ae),
                title: p(x)("r.download")
              }, q(w(ae)), 11, xo),
              M("span", Oo, [
                $(ae) ? (T(), le(J, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => N(ae),
                  title: p(x)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                Z(J, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => B(xe),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        p(y) === "list" && ((Ie = p(i)) == null ? void 0 : Ie.length) > 0 ? (T(), K("div", Io, [
          (T(!0), K(ge, null, Ve(p(i), (ae, xe) => (T(), K(ge, {
            key: "defaultItem" + xe
          }, [
            !e.manualUpload && ae ? (T(), K("div", Ao, [
              fe(M("div", Po, P[1] || (P[1] = [
                M("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ve, ae.mimeType === "loading"]
              ]),
              fe(Z(J, {
                type: p(Ll)(ae.name),
                class: "fileTypeIco",
                size: "20"
              }, null, 8, ["type"]), [
                [ve, ae.mimeType !== "loading"]
              ]),
              fe(M("span", {
                class: "upNameT",
                onClick: (Pe) => O(ae),
                title: p(x)("r.download")
              }, q(ae.name || p(x)("r.file") + (xe + 1)), 9, Ro), [
                [ve, ae.mimeType !== "loading"]
              ]),
              fe(M("span", Mo, [
                $(ae) ? (T(), le(J, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => N(ae),
                  title: p(x)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                Z(J, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => B(xe),
                  title: p(x)("r.delete")
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
}), ua = /* @__PURE__ */ ce({
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
    const n = o, e = t, l = U(!1), i = U(!1), u = U(!1), c = j({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(C) {
        n("update:modelValue", [C, s.value]), n("on-change", [C, s.value]);
      }
    }), s = j({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(C) {
        n("update:modelValue", [c.value, C]), n("on-change", [c.value, C]);
      }
    }), y = j(
      () => (c.value || "") + ((c.value || s.value) && " - " || "") + (s.value || "")
    ), m = U();
    Ge(() => {
      m.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        u.value = !0;
      }), m.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        u.value = !1;
      }), m.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (C) => {
        var w;
        !e.disabled && (c.value || s.value) && ((w = C == null ? void 0 : C.stopPropagation) == null || w.call(C), b());
      });
    });
    function f() {
      e.disabled || (l.value = !0);
    }
    function r(C) {
      c.value = C, l.value = !1, i.value = !0;
    }
    function h(C) {
      s.value = C, i.value = !1;
    }
    function b() {
      n("update:modelValue", [null, null]), n("on-change", [null, null]);
    }
    function k() {
      l.value = !1, i.value = !1, c.value && s.value === null && (c.value = null);
    }
    return (C, w) => {
      const S = te("DatePicker"), B = te("Icon"), O = te("Input");
      return T(), K("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: m
      }, [
        Z(S, {
          open: p(i),
          modelValue: p(s),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: h,
          onOnClickoutside: k
        }, {
          default: ne(() => w[1] || (w[1] = [
            M("div", { class: "bRoot" }, null, -1)
          ])),
          _: 1,
          __: [1]
        }, 8, ["open", "modelValue", "placement", "options"]),
        Z(S, {
          open: p(l),
          modelValue: p(c),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: r,
          onOnClickoutside: k
        }, {
          default: ne(() => [
            M("div", { onClick: f }, [
              Z(O, {
                class: "aRoot",
                modelValue: p(y),
                "onUpdate:modelValue": w[0] || (w[0] = ($) => Fe(y) ? y.value = $ : null),
                readonly: "",
                placeholder: e.placeholder || p(x)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: ne(() => [
                  Z(B, {
                    type: p(u) && (p(c) || p(s)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), da = /* @__PURE__ */ ce({
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
    const n = o, e = t, l = U(), i = "date-c-r-" + Math.floor(Math.random() * 1e7 + 1e7), u = U({}), c = j({
      get() {
        return e.modelValue;
      },
      set(m) {
        n("update:modelValue", m);
      }
    }), s = j(() => {
      if (Q(e.options) === "Object") {
        const { disabledDate: m, ...f } = e.options;
        return f;
      }
      return {};
    });
    function y(m) {
      var r, h;
      const f = m.target;
      ((h = (r = f.classList) == null ? void 0 : r.contains) != null && h.call(r, "ivu-date-picker-cells-cell") || f.tagName === "EM") && Me(() => {
        var k, C;
        const b = (C = (k = l == null ? void 0 : l.value) == null ? void 0 : k.$refs.pickerPanel) == null ? void 0 : C.rangeState;
        if (b) {
          const w = b.from, S = b.selecting;
          u.value = {
            ...s.value,
            disabledDate: (B) => {
              var O;
              return typeof ((O = e.options) == null ? void 0 : O.disabledDate) == "function" ? e.options.disabledDate(B, w, S) : !1;
            }
          };
        }
      }, 1);
    }
    return Se(
      () => e.options,
      (m) => {
        u.value = m;
      },
      { immediate: !0 }
    ), Ge(() => {
      var f;
      const m = document.getElementsByClassName(i)[0];
      (f = m == null ? void 0 : m.addEventListener) == null || f.call(m, "click", y, !0);
    }), (m, f) => {
      const r = te("DatePicker");
      return T(), le(r, {
        ref_key: "dateC",
        ref: l,
        modelValue: p(c),
        "onUpdate:modelValue": f[0] || (f[0] = (h) => Fe(c) ? c.value = h : null),
        type: m.type,
        options: p(u),
        placement: m.placement,
        placeholder: m.placeholder,
        clearable: m.clearable,
        disabled: m.disabled,
        editable: !1,
        transferClassName: i,
        transfer: ""
      }, null, 8, ["modelValue", "type", "options", "placement", "placeholder", "clearable", "disabled"]);
    };
  }
}), $o = { class: "editor-pro-root" }, ca = /* @__PURE__ */ ce({
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
      set(m) {
        n("update:modelValue", m), n("on-change", m);
      }
    }), u = j(
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
    ), c = j(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(m, f) {
                let r = new FormData();
                r.append("files", m);
                const h = m.name, b = e.imgUploadUrl ?? "/node-serve/file";
                qe.post(b, r, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((k) => {
                  if (k && k.data)
                    if (Array.isArray(k.data))
                      for (let C of k.data) {
                        const w = b + "/" + (C == null ? void 0 : C.id) + "/download";
                        f(w, h, w);
                      }
                    else {
                      const C = b + "/" + k.data.id + "/download";
                      f(C, h, C);
                    }
                }).catch(() => {
                  Ke(x("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(m, f) {
                let r = new FormData();
                r.append("files", m);
                const h = e.videoUploadUrl ?? "/node-serve/file";
                qe.post(h, r, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((b) => {
                  if (b && b.data)
                    if (Array.isArray(b.data))
                      for (let k of b.data) {
                        const C = h + "/" + (k == null ? void 0 : k.id) + "/download";
                        f(C);
                      }
                    else {
                      const k = h + "/" + b.data.id + "/download";
                      f(k);
                    }
                }).catch(() => {
                  Ke(x("r.uploadFail"), "", "error");
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
    function y(m) {
      l.value = m;
    }
    return Se(
      () => e.disabled,
      (m) => {
        m ? l.value.disable() : l.value.enable();
      }
    ), ul(() => {
      l.value && l.value.destroy();
    }), (m, f) => (T(), K("div", $o, [
      fe(Z(p($a), {
        class: "editor-pro-toolbar",
        editor: p(l),
        defaultConfig: p(u),
        mode: m.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ve, !m.disabled]
      ]),
      Z(p(Fa), {
        class: "editor-pro-editor",
        modelValue: p(i),
        "onUpdate:modelValue": f[0] || (f[0] = (r) => Fe(i) ? i.value = r : null),
        defaultConfig: p(c),
        mode: m.mode,
        onOnCreated: y,
        style: re(p(s))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Fo = {
  key: 19,
  class: "formInfoTxtXN"
}, Do = {
  key: 20,
  class: "formTitleTxtXN"
}, No = {
  key: 21,
  style: { display: "inline-block", width: "4px" }
}, Rl = /* @__PURE__ */ ce({
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
            const h = Number(r.replace("%", ""));
            return window.isNaN(h) ? `calc(100% - ${e.labelWidth}px)` : `calc((100% - ${e.labelWidth}px)*${h / 100})`;
          } else if (r.indexOf("px") > -1)
            return r;
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
    function s(f) {
      n("select-input-change", f);
    }
    function y(f, r) {
      n("al-name-change", {
        name: f,
        root: r
      });
    }
    function m(f, r) {
      n("async-label-change", {
        label: f,
        root: r
      });
    }
    return (f, r) => {
      const h = te("InputNumber"), b = te("Input"), k = te("Option"), C = te("Select"), w = te("Radio"), S = te("Icon"), B = te("RadioGroup"), O = te("Checkbox"), $ = te("CheckboxGroup"), N = te("TimePicker"), D = te("FormItem");
      return e.item ? (T(), le(D, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: we(["relativeBox", i(e.item)])
      }, {
        default: ne(() => [
          e.item.type === "txt" ? (T(), K("div", {
            key: 0,
            style: re([e.itemStyle, { display: "inline-block" }]),
            class: we({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, q(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (T(), le(h, {
            key: 1,
            style: re(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[0] || (r[0] = (v) => e.tempKeys[e.item.tempKey] = v),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: r[1] || (r[1] = (v) => u(v, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (T(), le(b, {
            key: 2,
            style: re(f.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[2] || (r[2] = (v) => e.tempKeys[e.item.tempKey] = v),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: r[3] || (r[3] = (v) => u(v, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, dt({ _: 2 }, [
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
                M("span", null, q(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: ne(() => [
                M("span", null, q(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (T(), le(C, {
            key: 3,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[4] || (r[4] = (v) => f.tempKeys[e.item.tempKey] = v),
            style: re(f.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || p(x)("r.pSelect"),
            onOnChange: r[5] || (r[5] = (v) => c(v, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: ne(() => [
              (T(!0), K(ge, null, Ve(e.item.options, (v, A) => (T(), le(k, {
                value: v.val,
                label: v.label || v.val,
                key: "option-" + e.item.key + A,
                disabled: !!v.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (T(), le(aa, {
            key: 4,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[6] || (r[6] = (v) => f.tempKeys[e.item.tempKey] = v),
            "label-width": f.labelWidth,
            "item-width": p(l),
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: s
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (T(), le(ia, {
            key: 5,
            style: re(f.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[7] || (r[7] = (v) => e.valGroup[e.item.key] = v),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || p(x)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: r[8] || (r[8] = (v) => y(v, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (T(), le(oa, {
            key: 6,
            style: re(f.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[9] || (r[9] = (v) => e.valGroup[e.item.key] = v),
            url: e.item.url || f.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || p(x)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: r[10] || (r[10] = (v) => m(v, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (T(), le(w, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[11] || (r[11] = (v) => e.valGroup[e.item.key] = v),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: r[12] || (r[12] = (v) => u(v, e.item))
          }, {
            default: ne(() => [
              ke(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (T(), le(B, {
            key: 8,
            style: re(f.itemStyle),
            onOnChange: r[13] || (r[13] = (v) => c(v, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[14] || (r[14] = (v) => f.tempKeys[e.item.tempKey] = v)
          }, {
            default: ne(() => [
              (T(!0), K(ge, null, Ve(e.item.options, (v) => (T(), le(w, {
                key: "radioItem" + v.val,
                label: v.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || v.disabled
              }, {
                default: ne(() => [
                  v.icon && !e.item.buttonType ? (T(), le(S, {
                    key: 0,
                    type: v.icon
                  }, null, 8, ["type"])) : ue("", !0),
                  M("span", null, q(v.label || v.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (T(), le(O, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[15] || (r[15] = (v) => e.valGroup[e.item.key] = v),
            disabled: !!e.item.disabled,
            onOnChange: r[16] || (r[16] = (v) => u(v, e.item))
          }, {
            default: ne(() => [
              ke(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (T(), le($, {
            key: 10,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[17] || (r[17] = (v) => f.tempKeys[e.item.tempKey] = v),
            onOnChange: r[18] || (r[18] = (v) => c(v, e.item))
          }, {
            default: ne(() => [
              (T(!0), K(ge, null, Ve(e.item.options, (v) => (T(), le(O, {
                key: "checkItem" + v.val,
                label: v.val,
                disabled: !!e.item.disabled || e.disabled || v.disabled
              }, {
                default: ne(() => [
                  v.icon ? (T(), le(S, {
                    key: 0,
                    type: v.icon
                  }, null, 8, ["type"])) : ue("", !0),
                  M("span", null, q(v.label || v.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (T(), le(b, {
            key: 11,
            type: "textarea",
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[19] || (r[19] = (v) => f.tempKeys[e.item.tempKey] = v),
            autosize: e.item.autosize || { minRows: 2 },
            style: re(f.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: r[20] || (r[20] = (v) => u(v, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (T(), le(ra, {
            key: 12,
            style: re(f.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[21] || (r[21] = (v) => e.valGroup[e.item.key] = v),
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
            onOnFileIdChange: r[22] || (r[22] = (v) => c(v, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "multiple", "disabled", "with-credentials"])) : e.item.type === "date" ? (T(), le(da, {
            key: 13,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[23] || (r[23] = (v) => f.tempKeys[e.item.tempKey] = v),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placeholder: e.item.placeholder || p(x)("r.selectDate"),
            options: e.item.dateOptions || {},
            "time-picker-options": f.item.timePickerOptions || {},
            clearable: e.item.clearable !== !1,
            onOnChange: r[24] || (r[24] = (v) => u(v, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "time-picker-options", "clearable"])) : e.item.type === "time" ? (T(), le(N, {
            key: 14,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[25] || (r[25] = (v) => f.tempKeys[e.item.tempKey] = v),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(x)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: r[26] || (r[26] = (v) => u(v, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (T(), le(ua, {
            key: 15,
            style: re(f.itemStyle),
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[27] || (r[27] = (v) => f.tempKeys[e.item.tempKey] = v),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(x)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: r[28] || (r[28] = (v) => u(v, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (T(), le(ca, {
            key: 16,
            class: "inlineBlock",
            style: re(f.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[29] || (r[29] = (v) => e.valGroup[e.item.key] = v),
            placeholder: e.item.placeholder || p(x)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: r[30] || (r[30] = (v) => u(v, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (T(), le(na, {
            key: 17,
            modelValue: f.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[31] || (r[31] = (v) => f.tempKeys[e.item.tempKey] = v),
            style: re(f.itemStyle),
            placeholder: e.item.placeholder || p(x)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            "input-in-map": e.item.inputInMap !== !1,
            onOnChange: r[32] || (r[32] = (v) => u(v, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height", "input-in-map"])) : e.item.type === "custom" ? (T(), K("div", {
            key: 18,
            class: "inlineBlock",
            style: re(f.itemStyle)
          }, [
            Ne(f.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ue("", !0),
          e.item.info ? (T(), K("div", Fo, q(e.item.info), 1)) : ue("", !0),
          e.item.title ? (T(), K("div", Do, q(e.item.title), 1)) : ue("", !0),
          e.inline ? ue("", !0) : (T(), K("span", No))
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : ue("", !0);
    };
  }
}), Eo = { class: "inlineBlock" }, Kt = /* @__PURE__ */ ce({
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
    var vl, gl;
    const e = n, l = t, i = U(null), u = U({}), c = U([]), s = U({});
    let y = [];
    const m = ((vl = window == null ? void 0 : window.g) == null ? void 0 : vl.mgrURL) ?? "";
    let f = U([]), r = [];
    const h = U(!1), b = U(Math.random() * 1e8 + 1e3), k = (gl = window == null ? void 0 : window.g) != null && gl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let C = !1;
    const w = j(() => Array.isArray(l.formData.length ? l.formData[0] : !1)), S = j(
      () => l.inline ? {
        width: l.itemWidth + l.labelWidth + "px"
      } : {}
    ), B = j(
      () => l.inline ? {
        width: "100%"
      } : { width: l.contentWidth }
    ), O = j(() => {
      let d = pe(l.formRules);
      for (let a in d)
        if (d.hasOwnProperty(a))
          if (Array.isArray(d[a]))
            for (let I of d[a])
              I && I && !(I.message || I.validator) && (I.message = x("r.required"));
          else Q(d[a]) === "Object" && (d[a].message || d[a].validator || (d[a].message = x("r.required")));
      return d;
    }), $ = j(() => {
      let d = [];
      if (w.value)
        for (let a of c.value)
          v(a, d);
      else
        v(c.value, d);
      return d.concat(f.value, r);
    }), N = j(() => {
      let d = [];
      if (w.value)
        for (let a of c.value)
          A(a, d);
      else
        A(c.value, d);
      return d;
    });
    function D(d) {
      return d.filter((a) => a == null ? void 0 : a.slotName);
    }
    function v(d, a) {
      for (let I of d)
        if ((I == null ? void 0 : I.showing) === !0 && I.key && I.type !== "selectInput" && (a.push(I.key), I.key2 && a.push(I.key2), I.collectLabel)) {
          if (!Array.isArray(I.collectLabel) && I.collectLabel.key)
            a.push(I.collectLabel.key);
          else if (Array.isArray(I.collectLabel))
            for (let V of I.collectLabel)
              V.key && a.push(V.key);
        }
    }
    function A(d, a) {
      for (let I of d)
        (I == null ? void 0 : I.showing) === !0 && I.key && I.type !== "selectInput" && a.push(I.key);
    }
    function L() {
      return new Promise((d) => {
        _(), E().then(() => {
          e("on-reset"), d(!0);
        });
      });
    }
    function ee() {
      return new Promise((d) => {
        for (let a of y)
          a();
        y = [], s.value = {}, ae(), me(), E().then(() => {
          e("on-re-render"), d(!0);
        });
      });
    }
    function E() {
      return new Promise((d) => {
        b.value = Math.floor(Math.random() * 1e8 + 1e3), $e(function() {
          d(!0);
        });
      });
    }
    function _() {
      let d = g();
      for (let a in u.value)
        if (u.value.hasOwnProperty(a))
          if (Re(d[a]))
            u.value[a] = d[a];
          else if (Array.isArray(u.value[a]))
            u.value[a] = [];
          else if (Q(u.value[a]) === "Boolean")
            u.value[a] = !1;
          else {
            const I = Bt(l.formData, (V) => (V == null ? void 0 : V.key) === a);
            I && (I.type === "editor" || I.type === "editorPro") ? u.value[a] = "" : u.value[a] = null;
          }
      X(d);
    }
    function X(d) {
      for (let a in s.value)
        s.value.hasOwnProperty(a) && (Re(d[a]) ? s.value[a] = d[a] : Array.isArray(s.value[a]) ? s.value[a] = [] : Q(s.value[a]) === "Object" && s.value[a].hasOwnProperty("key") && s.value[a].hasOwnProperty("val") ? s.value[a].val = null : s.value[a] = null);
    }
    function F(d) {
      let a = g();
      Re(a[d]) ? s.value[d] = a[d] : Array.isArray(s.value[d]) ? s.value[d] = [] : s.value[d] = null;
    }
    function g() {
      let d = {};
      if (w.value)
        for (let a of c.value)
          P(a, d);
      else
        P(c.value, d);
      return d;
    }
    function P(d, a) {
      for (let I of d)
        I.tempKey && Re(I.defaultVal) && ie(I, a), I.key && Re(I.defaultVal) && (a[I.key] = I.defaultVal), I.key2 && Re(I.defaultVal2) && (a[I.key2] = I.defaultVal2);
    }
    function R(d) {
      if (d.show) {
        if (Q(d.show) === "Object")
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
          return J(d, d.show(u.value));
      } else d.showing || (d.showing = !0);
      return !0;
    }
    function G(d) {
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
    function J(d, a) {
      return !(d != null && d.showing) && a && (d != null && d.key) ? (d.showing = a, d.defaultVal !== void 0 && (d.tempKey ? (s.value[d.tempKey] === null || s.value[d.tempKey] === void 0 || (Q(s.value[d.tempKey]) === "Object" || Array.isArray(s.value[d.tempKey])) && De(s.value[d.tempKey])) && ie(d, s.value) : (u.value[d.key] === null || u.value[d.key] === void 0) && (u.value[d.key] = d.defaultVal), d.key2 && d.deafultVal2 !== void 0 && (u.value[d.key2] === null || u.value[d.key2] === void 0) && d.type !== "inputMap" && (u.value[d.key2] = d.defaultVal2)), d.tempKey && Pe(s.value[d.tempKey], d)) : d.showing = a, a;
    }
    function ie(d, a) {
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
              const I = "selectInput" + Math.floor(Math.random() * 1e8);
              a.tempKey = I, s.value[I] = U({
                key: a.key || null,
                val: a.defaultVal || null
              }), y.push(
                Se(
                  () => s.value[I],
                  (Y) => {
                    Pe(Y, a);
                  },
                  { immediate: !0, flush: "sync" }
                )
              );
              break;
            case "inputMap":
              const V = "inputMap" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = V, a.key3 ? s.value[V] = a.defaultVal !== void 0 && a.defaultVal2 !== void 0 ? {
                lng: a.defaultVal,
                lat: a.defaultVal2,
                name: a.defaultVal3 || ""
              } : {
                lng: null,
                lat: null,
                name: null
              } : s.value[V] = a.defaultVal !== void 0 && a.defaultVal2 !== void 0 ? {
                lng: a.defaultVal,
                lat: a.defaultVal2
              } : {
                lng: null,
                lat: null
              }, y.push(
                Se(
                  () => s.value[V],
                  (Y) => {
                    Pe(Y, a);
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
                  (Y) => {
                    Pe(Y, a);
                  },
                  { immediate: !0, flush: "sync" }
                )
              ));
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              if (a.options || (a.options = []), (a.type === "checkboxGroup" || a.type === "radioGroup") && (a.options = U(pe(a.options))), a.asyncOption)
                if (a.changeOption)
                  if (Array.isArray(a.changeOption)) {
                    let Y = !0;
                    for (let se of a.changeOption)
                      if (!se.valKey || !se.key) {
                        Y = !1;
                        break;
                      }
                    Y ? y.push(
                      Se(
                        () => {
                          let se = "";
                          if (Array.isArray(a.changeOption))
                            for (let Be of a.changeOption) {
                              let ze = u.value[Be.valKey];
                              if (ze && !Array.isArray(ze) || Array.isArray(ze) && ze.length || ze === 0 || ze === !1)
                                se += "&" + Be.key + "=" + ze;
                              else if (!Be.notRequired)
                                return !1;
                            }
                          return se;
                        },
                        (se) => {
                          let Be = pe(s.value[a.tempKey]);
                          if (s.value[a.tempKey] = null, se && a.optionUrl) {
                            let ze = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                            Oe((ze + se).replace(/\?&/, "?"), a, Be);
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
                      () => typeof a.changeOption == "object" && !Array.isArray(a.changeOption) ? u.value[a.changeOption.valKey] : !1,
                      (Y) => {
                        let se = pe(s.value[a.tempKey]);
                        if (s.value[a.tempKey] = null, (Y && !Array.isArray(Y) || Array.isArray(Y) && Y.length || Y === 0 || Y === !1) && a.optionUrl && typeof a.changeOption == "object" && !Array.isArray(a.changeOption)) {
                          let Be = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                          Oe((Be + "&" + a.changeOption.key + "=" + Y).replace(/\?&/, "?"), a, se);
                        } else
                          a.localOption ? Je(a, "options", [...a.localOption]) : Je(a, "options", []), Re(se) && Ie(se, a);
                      },
                      { immediate: !0 }
                    )
                  ) : Q(a.changeOption) === "Boolean" && y.push(
                    Se(
                      () => {
                        const Y = Bt(l.formData, (se) => (se == null ? void 0 : se.key) === a.key);
                        return Y.optionUrl = Sa(Y.optionUrl), Y.optionUrl.value;
                      },
                      (Y) => {
                        let se = pe(s.value[a.tempKey]);
                        s.value[a.tempKey] = null, Y ? Oe(Y, a, se) : (a.localOption ? Je(a, "options", [...a.localOption]) : Je(a, "options", []), Re(se) && Ie(se, a));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
                else a.optionUrl && Oe(a.optionUrl, a);
              else Q(a.borrowOption) === "String" && $e(function() {
                a.options = Bt(c.value, (Y) => (Y == null ? void 0 : Y.key) === a.borrowOption).options;
              });
              const de = "opEle" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = de, a.type === "select" && a.multiple || a.type === "checkboxGroup" ? s.value[de] = a.defaultVal !== void 0 ? a.defaultVal : [] : a.booleanVal ? s.value[de] = a.defaultVal !== void 0 ? a.defaultVal ? 1 : 0 : null : s.value[de] = a.defaultVal !== void 0 ? a.defaultVal : null, y.push(
                Se(
                  () => s.value[de],
                  (Y) => {
                    Pe(Y, a);
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
                  (Y) => {
                    Pe(Y, a);
                  },
                  { flush: "sync" }
                )
              );
              break;
          }
    }
    function Oe(d, a, I) {
      qe.get(d).then((V) => {
        var Te;
        let oe;
        if (Fe(a.options) ? oe = a.options.value : oe = a.options, !oe)
          return;
        let de = ((Te = V == null ? void 0 : V.data) == null ? void 0 : Te.records) || (V == null ? void 0 : V.data) || V || [];
        Array.isArray(de) ? (a.optionFilter && Q(a.optionFilter) === "Function" && (de = a.optionFilter(de)), a.optionLabel && a.optionVal ? (oe.length = 0, oe.push(
          ...de.map((Y) => {
            let se;
            if (Array.isArray(a.optionLabel)) {
              let Be = "";
              a.optionLabel.forEach((ze, bl) => {
                let Ut = String(Y[ze]);
                bl === 1 ? Be += "（" + Ut : bl > 1 ? Be += "、" + Ut : Be += Ut;
              }), se = {
                label: Be + "）",
                val: a.optionVal && Y[a.optionVal]
              };
            } else
              se = {
                label: a.optionLabel && Y[a.optionLabel],
                val: a.optionVal && Y[a.optionVal]
              };
            if (a.collectLabel)
              if (Array.isArray(a.collectLabel))
                for (let Be of a.collectLabel)
                  Be.valKey && Be.valKey !== "label" && (se[Be.valKey] = Y[Be.valKey]);
              else
                a.collectLabel.valKey && a.collectLabel.valKey !== "label" && (se[a.collectLabel.valKey] = Y[a.collectLabel.valKey]);
            if (se.val !== null && se.val !== void 0)
              return se;
          })
        )) : (oe.length = 0, oe.push(...de))) : oe.length = 0, a.localOption && oe.unshift(...a.localOption), Re(I) && Ie(I, a), a.disableOptionByOthers && (Q(a.disableOptionByOthers) === "String" ? y.push(
          Se(
            () => u.value[a.disableOptionByOthers],
            (Y) => {
              if (F(a.tempKey), !!oe) {
                for (let se of oe)
                  se.disabled && (se.disabled = !1);
                if (Y || Y === 0 || Y === !1)
                  for (let se of oe)
                    se.val === Y && (se.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(a.disableOptionByOthers) && y.push(
          Se(
            () => a.disableOptionByOthers.filter((Y) => Y).map((Y) => u.value[Y]),
            (Y) => {
              if (F(a.tempKey), !!oe) {
                for (let se of oe)
                  se.disabled && (se.disabled = !1);
                if (Y) {
                  for (let se of oe)
                    for (let Be = 0; Be < Y.length; Be++)
                      if (se.val === Y[Be]) {
                        se.disabled = !0, Y.splice(Be, 1);
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
      Array.isArray(Gt(a.options)) && xt(Gt(a.options), { val: d }) !== -1 && (s.value[a.tempKey] = d);
    }
    function ae() {
      if (u.value = {}, w.value)
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
              const oe = Ze(a, d);
              if (Array.isArray(a.collectLabel)) {
                for (let de of a.collectLabel)
                  if (de != null && de.key && de.valKey) {
                    const Te = We(de.key);
                    let Y = null;
                    Array.isArray(oe) ? (Y = oe.map((se) => se[de.valKey]), u.value[de.key] = Y, Te && (s.value[Te.tempKey] = Y)) : (oe && Re(oe[de.valKey]) && (Y = oe[de.valKey]), u.value[de.key] = Y, Te && (Te.booleanVal && typeof Y == "boolean" ? s.value[Te.tempKey] = Y ? 1 : 0 : s.value[Te.tempKey] = Y));
                  }
              } else if (typeof a.collectLabel == "object" && a.collectLabel.key && a.collectLabel.valKey) {
                const de = We(a.collectLabel.key);
                let Te = null;
                Array.isArray(oe) ? (Te = oe.map(
                  (Y) => a.collectLabel && !Array.isArray(a.collectLabel) && Y[a.collectLabel.valKey]
                ), u.value[a.collectLabel.key] = Te, de && (s.value[de.tempKey] = Te)) : (oe && Re(oe[a.collectLabel.valKey]) && (Te = oe[a.collectLabel.valKey]), u.value[a.collectLabel.key] = Te, de && (de.booleanVal && typeof Te == "boolean" ? s.value[de.tempKey] = Te ? 1 : 0 : s.value[de.tempKey] = Te));
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!a.key)
              return;
            let I = a.dateType;
            const V = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "YYYY-MM"
            };
            if (I === "date" || I === "datetime" || I === "time" || I === "year" || I === "month")
              d ? (I === "time" ? u.value[a.key] = d : u.value[a.key] = mt(d).format(typeof a.format == "string" ? a.format : V[I]), I === "date" && a.addTime && (u.value[a.key] += " 00:00:00")) : u.value[a.key] = null;
            else if (a.type === "monthRange" || I === "daterange" || I === "datetimerange" || I === "timerange") {
              if (!a.key2)
                return;
              d && d[0] && d[1] ? (I === "timerange" ? (u.value[a.key] = d[0], u.value[a.key2] = d[1]) : a.type === "monthRange" ? (u.value[a.key] = typeof a.format == "string" && mt(d[0]).format(a.format) || d[0], u.value[a.key2] = typeof a.format == "string" && a.format && mt(d[1]).format(a.format) || d[1]) : (u.value[a.key] = mt(d[0]).format(a.format || I && V[I]), u.value[a.key2] = mt(d[1]).format(a.format || I && V[I])), I === "daterange" && a.addTime && (u.value[a.key] += " 00:00:00", u.value[a.key2] += " 23:59:59")) : (u.value[a.key] = null, u.value[a.key2] = null);
            }
            break;
        }
    }
    function Ze(d, a) {
      const I = Gt(d == null ? void 0 : d.options);
      if (I)
        if (d != null && d.multiple || (d == null ? void 0 : d.type) === "checkboxGroup") {
          if (a) {
            let V = [];
            for (let oe of I)
              a.indexOf(oe == null ? void 0 : oe.val) !== -1 && V.push(oe);
            return V;
          }
          return !1;
        } else {
          if (a || a === 0 || a === !1) {
            for (let V of I)
              if ((V == null ? void 0 : V.val) === a)
                return V;
          }
          return !1;
        }
    }
    function We(d) {
      if (w.value) {
        for (let a of c.value) {
          const I = H(a, d);
          if (I)
            return I;
        }
        return !1;
      }
      return H(c.value, d);
    }
    function H(d, a) {
      for (let I of d)
        if (I.key === a)
          return I;
      return !1;
    }
    function z(d, a) {
      let I = {};
      for (let V in u.value)
        u.value.hasOwnProperty(V) && d[V] !== void 0 && (I[V] = d[V], delete d[V]);
      _e(I, a);
      for (let V in d)
        d.hasOwnProperty(V) && (r.indexOf(V) < 0 && r.push(V), u.value[V] = d[V]);
    }
    function ye(d) {
      let a = pe(d);
      if (w.value) {
        let I = [];
        for (let V of l.formData)
          I.push(...be(V, a));
        return I;
      }
      return be(l.formData, a);
    }
    function be(d, a) {
      return d.filter((I) => {
        for (let V of Object.keys(a))
          if ((I == null ? void 0 : I.key) === V && N.value.indexOf(V) > -1 && !(a[V] === null || (Array.isArray(a[V]) || Q(a[V]) === "Object") && De(a[V])))
            return delete a[V], !0;
        return !1;
      }).map((I) => I == null ? void 0 : I.key);
    }
    function _e(d, a = !1) {
      let I = pe(d);
      W(d, a);
      for (let V in u.value)
        if (u.value.hasOwnProperty(V) && d[V] !== void 0 && d[V] !== "--") {
          if (Array.isArray(d[V]))
            d[V] = d[V].filter((oe) => oe !== "--");
          else if (Q(d[V]) === "Object")
            for (let oe in d[V])
              d[V].hasOwnProperty(oe) && d[V][oe] === "--" && (d[V][oe] = null);
          u.value[V] = d[V];
        } else a || (u.value[V] = Array.isArray(u.value[V]) ? [] : null);
      $e(function() {
        ha(ye(I));
      });
    }
    function W(d, a = !1) {
      if (w.value)
        for (let I of c.value)
          Ce(I, d, a);
      else
        Ce(c.value, d, a);
    }
    function Ce(d, a, I = !1) {
      for (let V of d)
        if (V != null && V.key && (I && (a[V.key] !== void 0 || V.key2 && a[V.key2] !== void 0) || !I) && V.tempKey)
          switch (V.type) {
            case "inputMap":
              if (!V.key2)
                continue;
              Q(a[V.key]) === "Number" && Q(a[V.key2] === "Number") ? V.key3 ? s.value[V.tempKey] = {
                lng: a[V.key],
                lat: a[V.key2],
                name: a[V.key3]
              } : s.value[V.tempKey] = {
                lng: a[V.key],
                lat: a[V.key2]
              } : V.key3 ? s.value[V.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : s.value[V.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              a[V.key] && a[V.key] !== "--" || a[V.key] === 0 ? s.value[V.tempKey] = a[V.key] : s.value[V.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              a[V.key] && a[V.key] !== "--" || a[V.key] === 0 || a[V.key] === !1 ? V.multiple || V.type === "checkboxGroup" ? s.value[V.tempKey] = [...a[V.key]] : V.booleanVal ? s.value[V.tempKey] = a[V.key] ? 1 : 0 : s.value[V.tempKey] = a[V.key] : V.multiple || V.type === "checkboxGroup" ? s.value[V.tempKey] = [] : s.value[V.tempKey] = null;
              break;
            case "date":
            case "time":
              if (V.dateType === "date" || V.dateType === "datetime" || V.dateType === "year" || V.dateType === "month" || V.dateType === "time")
                s.value[V.tempKey] = a[V.key] && a[V.key] !== "--" ? a[V.key] : null;
              else if (V.dateType === "daterange" || V.dateType === "datetimerange" || V.dateType === "timerange") {
                if (!V.key2)
                  continue;
                s.value[V.tempKey] = a[V.key] && a[V.key] !== "--" && a[V.key2] && a[V.key2] !== "--" && [a[V.key], a[V.key2]] || [];
              }
              break;
          }
    }
    function nt(d) {
      if (Array.isArray(d))
        for (let a of d)
          ot(a);
      else Q(d) === "Object" && ot(d);
    }
    function ot(d) {
      const { index: a, indexB: I, key: V, val: oe } = d;
      if (typeof a == "number")
        if (Array.isArray(c.value[a])) {
          if (typeof I == "number")
            if (V && d.hasOwnProperty("val"))
              c.value[a][I][V] = oe;
            else
              for (let de of Object.keys(d))
                de !== "index" && V !== "indexB" && (c.value[a][I][de] = d[de]);
        } else if (V && d.hasOwnProperty("val"))
          c.value[a][V] = oe;
        else
          for (let de of Object.keys(d))
            de !== "index" && (c.value[a][de] = d[de]);
    }
    function ft({ label: d, root: a }) {
      a.key2 && (u.value[a.key2] = d), it({
        e: d,
        root: a
      });
    }
    function Xe(d) {
      d.beforeKey && La(f.value, (a) => a === d.beforeKey), d.key && (f.value.indexOf(d.key) === -1 && f.value.push(d.key), it({
        e: null,
        root: d
      }));
    }
    function _t({ name: d, root: a }) {
      a.key2 && (u.value[a.key2] = d), it({
        e: d,
        root: a
      });
    }
    function hl({ e: d, root: a }) {
      it({
        e: d,
        root: a
      }), $e(function() {
        var I, V;
        (V = (I = i.value) == null ? void 0 : I.validateField) == null || V.call(I, a.key);
      });
    }
    function it({ e: d, root: a }) {
      Me(() => {
        var V;
        let I = {
          event: d
        };
        if (a.key && (I[a.key] = u.value[a.key]), a.key2 && (I[a.key2] = u.value[a.key2]), Array.isArray(a.collectLabel))
          for (let oe of a.collectLabel)
            I[oe.key] = u.value[oe.key];
        else (V = a.collectLabel) != null && V.key && (I[a.collectLabel.key] = u.value[a.collectLabel.key]);
        e("on-item-change", I);
      }, 300);
    }
    function yl() {
      let d = {};
      for (let a of $.value)
        d[a] = u.value[a];
      return l.trim && (d = Wl(d)), d;
    }
    function pa() {
      var d, a;
      (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d);
    }
    function ma(d) {
      Me(() => {
        var a, I;
        (I = (a = i.value) == null ? void 0 : a.validateField) == null || I.call(a, d, () => {
        });
      }, 10);
    }
    function ha(d) {
      Me(() => {
        var a, I;
        if (Array.isArray(d))
          for (let V of d)
            (I = (a = i.value) == null ? void 0 : a.validateField) == null || I.call(a, V, () => {
            });
      }, 10);
    }
    function ya(d) {
      d !== void 0 && (h.value = !!d);
    }
    function zt() {
      var d, a;
      l.disabled || (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d, (I) => {
        C || (C = !0, I && (h.value = !0, e("on-submit", yl())), Me(() => {
          C = !1;
        }, 2e3));
      });
    }
    return Ge(() => {
      ae(), me();
    }), o({
      resetForm: L,
      refreshFormDom: E,
      reRenderForm: ee,
      setItemToValGroup: z,
      updateValGroup: _e,
      updateFormDataT: nt,
      validate: pa,
      reValidate: ma,
      changeLoading: ya,
      getValGroup: yl,
      submit: zt
    }), (d, a) => {
      const I = te("FormItem"), V = te("Button"), oe = te("Form");
      return T(), le(oe, {
        ref_key: "formGroupXRef",
        ref: i,
        model: p(u),
        rules: p(O),
        "label-width": l.labelWidth,
        inline: l.inline,
        "show-message": l.showMessage,
        class: "formXN",
        key: p(b)
      }, {
        default: ne(() => [
          Z(I, { style: { display: "none" } }, {
            default: ne(() => a[0] || (a[0] = [
              M("input", { type: "text" }, null, -1)
            ])),
            _: 1,
            __: [0]
          }),
          p(w) ? (T(!0), K(ge, { key: 0 }, Ve(p(c), (de, Te) => (T(), K("div", {
            class: we([d.teamClass, "formTeamBox" + Te]),
            key: "formTeamBox" + Te
          }, [
            (T(!0), K(ge, null, Ve(de, (Y, se) => (T(), K(ge, {
              key: "formItem" + se
            }, [
              R(Y) ? (T(), le(Rl, {
                key: 0,
                item: Y,
                style: re(p(S)),
                "item-style": p(B),
                "val-group": p(u),
                "temp-keys": p(s),
                inline: l.inline,
                disabled: l.disabled,
                "label-width": l.labelWidth,
                "item-width": l.itemWidth,
                "mgr-url": p(m),
                "upload-url": p(k),
                onItemChange: it,
                onReValidate: hl,
                onClearTempKeyItem: F,
                onSelectInputChange: Xe,
                onAlNameChange: _t,
                onAsyncLabelChange: ft
              }, dt({ _: 2 }, [
                Ve(D(de), (Be) => ({
                  name: Be.slotName,
                  fn: ne((ze) => [
                    Ne(d.$slots, Be.slotName, {
                      valGroup: ze.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ue("", !0)
            ], 64))), 128))
          ], 2))), 128)) : ue("", !0),
          (T(!0), K(ge, null, Ve(p(c), (de, Te) => (T(), K(ge, {
            key: "formItem" + Te
          }, [
            !p(w) && R(de) ? (T(), le(Rl, {
              key: 0,
              item: de,
              style: re(p(S)),
              "item-style": p(B),
              "val-group": p(u),
              "temp-keys": p(s),
              inline: l.inline,
              disabled: l.disabled,
              "label-width": l.labelWidth,
              "item-width": l.itemWidth,
              "mgr-url": p(m),
              "upload-url": p(k),
              onItemChange: it,
              onReValidate: hl,
              onClearTempKeyItem: F,
              onSelectInputChange: Xe,
              onAlNameChange: _t,
              onAsyncLabelChange: ft
            }, dt({ _: 2 }, [
              Ve(D(d.formData), (Y) => ({
                name: Y.slotName,
                fn: ne((se) => [
                  Ne(d.$slots, Y.slotName, {
                    valGroup: se.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ue("", !0)
          ], 64))), 128)),
          l.showLongOkBt ? (T(), le(I, { key: 1 }, {
            default: ne(() => [
              Z(V, {
                onClick: zt,
                style: re(p(B)),
                type: "primary",
                loading: l.btnLoading && p(h),
                disabled: l.disabled
              }, {
                default: ne(() => [
                  ke(q(l.longOkBtTxt || p(x)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ue("", !0),
          M("div", Eo, [
            l.showInlineOkBt ? (T(), le(V, {
              key: 0,
              type: "primary",
              class: we({ inlineFormBtXN: l.inline, okBtnXN: !0 }),
              onClick: zt,
              loading: l.btnLoading && p(h),
              disabled: l.disabled
            }, {
              default: ne(() => [
                ke(q(l.inlineOkBtTxt || p(x)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : ue("", !0),
            l.showInlineClearBt ? (T(), le(V, {
              key: 1,
              onClick: L,
              class: we({ inlineFormBtXN: l.inline }),
              type: "dashed"
            }, {
              default: ne(() => [
                ke(q(l.inlineClearBtTxt || p(x)("r.clear")), 1)
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
    const e = n, l = t, i = U({ width: l.width }), u = U(!1), c = U(), s = j(() => {
      var N, D;
      if (Array.isArray(l.formData))
        if (Array.isArray(l.formData[0])) {
          let v = [];
          for (let A of l.formData)
            A && (v = v.concat(
              A.filter((L) => (L == null ? void 0 : L.type) === "custom" || (L == null ? void 0 : L.type) === "input" && L.slotName && L.slotPosition)
            ));
          return v;
        } else
          return (D = (N = l.formData) == null ? void 0 : N.filter) == null ? void 0 : D.call(
            N,
            (v) => (v == null ? void 0 : v.type) === "custom" || (v == null ? void 0 : v.type) === "input" && v.slotName && v.slotPosition
          );
      return [];
    });
    function y() {
      return new Promise((N) => {
        var D, v;
        (v = (D = c.value).resetForm) == null || v.call(D).then((A) => {
          N(A);
        });
      });
    }
    function m() {
      return new Promise((N) => {
        var D, v;
        (v = (D = c.value).refreshFormDom) == null || v.call(D).then((A) => {
          N(A);
        });
      });
    }
    function f() {
      return new Promise((N) => {
        var D, v;
        (v = (D = c.value).reRenderForm) == null || v.call(D).then((A) => {
          N(A);
        });
      });
    }
    function r(N, D) {
      var v, A;
      (A = (v = c.value).setItemToValGroup) == null || A.call(v, N, D);
    }
    function h(N, D) {
      var v, A;
      (A = (v = c.value).updateValGroup) == null || A.call(v, N, D);
    }
    function b(N) {
      var D, v;
      (v = (D = c.value).updateFormDataT) == null || v.call(D, N);
    }
    function k() {
      var N, D;
      (D = (N = c.value).validate) == null || D.call(N);
    }
    function C(N) {
      var D, v;
      (v = (D = c.value).reValidate) == null || v.call(D, N);
    }
    function w(N) {
      var D, v;
      N !== void 0 && (u.value = !!N, (v = (D = c.value).changeLoading) == null || v.call(D, u.value));
    }
    function S() {
      var N, D;
      return (D = (N = c.value).getValGroup) == null ? void 0 : D.call(N);
    }
    function B() {
      u.value = !0;
    }
    function O() {
      var N, D;
      (D = (N = c.value).submit) == null || D.call(N);
    }
    function $() {
      e("on-cancel"), Me(() => {
        var N, D;
        u.value = !1, (D = (N = c.value).changeLoading) == null || D.call(N, !1);
      }, 1e3);
    }
    return o({
      resetForm: y,
      refreshFormDom: m,
      reRenderForm: f,
      setItemToValGroup: r,
      updateValGroup: h,
      updateFormDataT: b,
      validate: k,
      reValidate: C,
      changeLoading: w,
      getValGroup: S,
      submit: O,
      close: $
    }), (N, D) => {
      const v = te("Button");
      return T(), K("div", {
        style: re(p(i)),
        class: "formGroupBoxVM"
      }, [
        Z(Kt, ct({
          ref_key: "formRRef",
          ref: c
        }, N.$attrs, {
          "form-data": l.formData,
          "label-width": l.labelWidth,
          "content-width": l.contentWidth,
          "item-width": l.itemWidth,
          btnLoading: l.btnLoading,
          disabled: l.disabled,
          onOnSubmit: B
        }), dt({ _: 2 }, [
          Ve(p(s), (A) => ({
            name: A.slotName,
            fn: ne(({ valGroup: L }) => [
              Ne(N.$slots, A.slotName, { valGroup: L })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading", "disabled"]),
        fe(M("div", {
          class: "formFooterVM",
          style: re({ marginLeft: l.labelWidth + "px" })
        }, [
          M("div", {
            style: re({ width: l.contentWidth }),
            class: "btnBoxKAL"
          }, [
            l.showOkBt ? (T(), le(v, {
              key: 0,
              onClick: O,
              class: "form-save-btn",
              loading: l.btnLoading && p(u),
              disabled: l.disabled
            }, {
              default: ne(() => [
                ke(q(l.okBtTxt || p(x)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])) : ue("", !0),
            l.showCancelBt ? (T(), le(v, {
              key: 1,
              onClick: $,
              class: "form-cancel-btn"
            }, {
              default: ne(() => [
                ke(q(l.cancelBtTxt || p(x)("r.cancel")), 1)
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
}), rl = /* @__PURE__ */ ce({
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
    const e = n, l = t, i = U(), u = j(() => {
      var B, O;
      if (Array.isArray(l.formData[0])) {
        let $ = [];
        for (let N of l.formData)
          N && ($ = $.concat(
            N.filter((D) => (D == null ? void 0 : D.type) === "custom" || (D == null ? void 0 : D.type) === "input" && D.slotName && D.slotPosition)
          ));
        return $;
      }
      return (O = (B = l.formData) == null ? void 0 : B.filter) == null ? void 0 : O.call(
        B,
        ($) => ($ == null ? void 0 : $.type) === "custom" || ($ == null ? void 0 : $.type) === "input" && $.slotName && $.slotPosition
      );
    });
    function c() {
      return new Promise((B) => {
        var O, $;
        ($ = (O = i.value).resetForm) == null || $.call(O).then(() => {
          B();
        });
      });
    }
    function s() {
      return new Promise((B) => {
        var O, $;
        ($ = (O = i.value).refreshFormDom) == null || $.call(O).then(() => {
          B();
        });
      });
    }
    function y() {
      return new Promise((B) => {
        var O, $;
        ($ = (O = i.value).reRenderForm) == null || $.call(O).then(() => {
          B();
        });
      });
    }
    function m(B, O) {
      var $, N;
      (N = ($ = i.value).setItemToValGroup) == null || N.call($, B, O);
    }
    function f(B, O) {
      var $, N;
      (N = ($ = i.value).updateValGroup) == null || N.call($, B, O);
    }
    function r(B) {
      var O, $;
      ($ = (O = i.value).updateFormDataT) == null || $.call(O, B);
    }
    function h() {
      var B, O;
      (O = (B = i.value).validate) == null || O.call(B);
    }
    function b(B) {
      var O, $;
      ($ = (O = i.value).reValidate) == null || $.call(O, B);
    }
    function k(B) {
      var O, $;
      ($ = (O = i.value).changeLoading) == null || $.call(O, B === void 0 ? !1 : B);
    }
    function C() {
      var B, O;
      return (O = (B = i.value).getValGroup) == null ? void 0 : O.call(B);
    }
    function w(B) {
      e("on-search", B);
    }
    function S() {
      var B, O;
      (O = (B = i.value).submit) == null || O.call(B);
    }
    return Ge(() => {
      const B = i.value.$el;
      B != null && B.parentNode && B.parentNode.addEventListener("keyup", (O) => {
        (O == null ? void 0 : O.keyCode) === 13 && S();
      });
    }), o({
      resetForm: c,
      refreshFormDom: s,
      reRenderForm: y,
      setItemToValGroup: m,
      updateValGroup: f,
      updateFormDataT: r,
      validate: h,
      reValidate: b,
      changeLoading: k,
      getValGroup: C,
      submit: S
    }), (B, O) => (T(), le(Kt, ct({
      ref_key: "formRRef",
      ref: i
    }, B.$attrs, {
      "form-data": l.formData,
      "label-width": l.labelWidth,
      "item-width": l.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": l.showInlineOkBt,
      "inline-ok-bt-txt": p(x)("r.check"),
      "show-inline-clear-bt": l.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: w
    }), dt({ _: 2 }, [
      Ve(p(u), ($) => ({
        name: $.slotName,
        fn: ne(({ valGroup: N }) => [
          Ne(B.$slots, $.slotName, { valGroup: N })
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
    const e = n, l = t, i = U(), u = U(!1), c = U(!1), s = j(() => {
      var v, A;
      if (Array.isArray(l.formData[0])) {
        let L = [];
        for (let ee of l.formData)
          ee && (L = L.concat(
            ee.filter((E) => (E == null ? void 0 : E.type) === "custom" || (E == null ? void 0 : E.type) === "input" && E.slotName && E.slotPosition)
          ));
        return L;
      }
      return (A = (v = l.formData) == null ? void 0 : v.filter) == null ? void 0 : A.call(
        v,
        (L) => (L == null ? void 0 : L.type) === "custom" || (L == null ? void 0 : L.type) === "input" && L.slotName && L.slotPosition
      );
    });
    function y() {
      return new Promise((v) => {
        var A, L;
        (L = (A = i.value).resetForm) == null || L.call(A).then(() => {
          v();
        });
      });
    }
    function m() {
      return new Promise((v) => {
        var A, L;
        (L = (A = i.value).refreshFormDom) == null || L.call(A).then(() => {
          v();
        });
      });
    }
    function f() {
      return new Promise((v) => {
        var A, L;
        (L = (A = i.value).reRenderForm) == null || L.call(A).then(() => {
          v();
        });
      });
    }
    function r(v, A) {
      var L, ee;
      (ee = (L = i.value).setItemToValGroup) == null || ee.call(L, v, A);
    }
    function h(v, A) {
      var L, ee;
      (ee = (L = i.value).updateValGroup) == null || ee.call(L, v, A);
    }
    function b(v) {
      var A, L;
      (L = (A = i.value).updateFormDataT) == null || L.call(A, v);
    }
    function k() {
      var v, A;
      (A = (v = i.value).validate) == null || A.call(v);
    }
    function C(v) {
      var A, L;
      (L = (A = i.value).reValidate) == null || L.call(A, v);
    }
    function w(v) {
      var A, L;
      v !== void 0 && (c.value = !!v, (L = (A = i.value).changeLoading) == null || L.call(A, c.value));
    }
    function S() {
      var v, A;
      return (A = (v = i.value).getValGroup) == null ? void 0 : A.call(v);
    }
    function B() {
      c.value = !0;
    }
    function O() {
      var v, A;
      l.hideCancelBt ? N() : (A = (v = i.value).submit) == null || A.call(v);
    }
    function $() {
      u.value = !0;
    }
    function N() {
      u.value = !1, Me(() => {
        var v, A;
        c.value = !1, (A = (v = i.value).changeLoading) == null || A.call(v, !1);
      }, 1e3);
    }
    function D(v) {
      e(v ? "on-open" : "on-close");
    }
    return o({
      resetForm: y,
      refreshFormDom: m,
      reRenderForm: f,
      setItemToValGroup: r,
      updateValGroup: h,
      updateFormDataT: b,
      validate: k,
      reValidate: C,
      changeLoading: w,
      getValGroup: S,
      submit: O,
      open: $,
      close: N
    }), (v, A) => {
      const L = te("Button"), ee = te("Modal");
      return T(), le(ee, {
        class: we(["formModal", { hideFooter: l.hideFooter }]),
        title: l.title || p(x)("r.title"),
        modelValue: p(u),
        "onUpdate:modelValue": A[0] || (A[0] = (E) => Fe(u) ? u.value = E : null),
        "mask-closable": !1,
        "footer-hide": l.hideFooter,
        width: l.width,
        onOnVisibleChange: D
      }, {
        footer: ne(() => [
          Z(L, {
            onClick: O,
            class: "modal-save-btn",
            loading: l.btnLoading && p(c),
            disabled: l.disabled
          }, {
            default: ne(() => [
              ke(q(l.okBtTxt || p(x)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled"]),
          l.hideCancelBt ? ue("", !0) : (T(), le(L, {
            key: 0,
            onClick: N,
            class: "modal-cancel-btn"
          }, {
            default: ne(() => [
              ke(q(l.cancelBtTxt || p(x)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: ne(() => [
          Z(Kt, ct({
            ref_key: "formRRef",
            ref: i
          }, v.$attrs, {
            "form-data": l.formData,
            "label-width": l.labelWidth,
            btnLoading: l.btnLoading,
            disabled: l.disabled,
            onOnSubmit: B
          }), dt({ _: 2 }, [
            Ve(p(s), (E) => ({
              name: E.slotName,
              fn: ne(({ valGroup: _ }) => [
                Ne(v.$slots, E.slotName, { valGroup: _ })
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
    const n = o, e = t, l = U(!0), i = U([]), u = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let c = [];
    const s = j(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), y = j(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    Se(
      () => e.data,
      (k) => {
        l.value = !1;
        let C = [];
        m(k, C), i.value = C, $e(function() {
          l.value = !0, e.inlineLeaf && $e(h);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), Se(
      () => y.value,
      (k) => {
        let C, w = "s";
        if (Array.isArray(e.collectVal) ? (C = e.collectVal[0] || "", w = "a") : C = e.collectVal, !C || JSON.stringify(k) === JSON.stringify(c)) {
          c = [];
          return;
        }
        rt({
          group: i.value,
          condition: (S) => (S == null ? void 0 : S.checked) === !0,
          key: "checked",
          val: !1
        }), rt(w === "a" ? {
          group: i.value,
          condition: (S) => xt(k, [C, S == null ? void 0 : S[C]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: i.value,
          condition: (S) => k.indexOf(S == null ? void 0 : S[C]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), Se(
      () => e.disabled,
      (k) => {
        rt({
          group: i.value,
          condition: (C) => C && C.disableCheckbox !== k,
          key: "disableCheckbox",
          val: k
        }), e.inlineLeaf && $e(h);
      },
      { immediate: !0 }
    );
    function m(k, C = []) {
      for (let w of k) {
        let S = !1;
        s.value.length > 1 ? S = Jt(y.value, (O) => O[s.value[0]] === w[s.value[0]]) !== void 0 : S = s.value[0] ? y.value.indexOf(w[s.value[0]]) !== -1 : !1;
        let B = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: S,
          disableCheckbox: e.disabled
        };
        for (let O of s.value)
          B[O] = w[O];
        C.push(B), w != null && w.children && w.children.length > 0 && (B.children = [], f(w.children, B.children));
      }
    }
    function f(k, C = []) {
      for (let w of k) {
        let S = !1;
        s.value.length > 1 ? S = Jt(y.value, (O) => O[s.value[0]] === w[s.value[0]]) !== void 0 : S = s.value[0] ? y.value.indexOf(w[s.value[0]]) !== -1 : !1;
        let B = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: S,
          disableCheckbox: e.disabled
        };
        for (let O of s.value)
          B[O] = w[O];
        C.push(B), w != null && w.children && w.children.length > 0 && (B.children = [], m(w.children, B.children));
      }
    }
    function r(k, {
      data: C
    }) {
      let w = "", S = !0;
      if (C.children && C.children.length > 0) {
        for (let B of C.children)
          if (B.children !== void 0) {
            S = !1;
            break;
          }
        S && e.inlineLeaf && (w = "inlineChildXA");
      }
      return k(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: w
        },
        [
          k(
            "span",
            {
              style: {
                fontWeight: C.children ? "bold" : "normal"
              }
            },
            C.name
          )
        ]
      );
    }
    function h(k) {
      if (k) {
        k.expand && $e(h);
        return;
      }
      let C = document.querySelectorAll("#" + u + " .inlineChildXA");
      if (C.length > 0)
        for (let w of C) {
          let S = w == null ? void 0 : w.parentElement, B = S == null ? void 0 : S.nextElementSibling;
          if (!B)
            return;
          if (B.tagName !== "BR") {
            let O = S == null ? void 0 : S.parentElement, $ = document.createElement("br");
            O == null || O.insertBefore($, B);
            const N = $.nextElementSibling;
            if (N) {
              const D = N.children;
              if (D)
                for (let v of D)
                  (v == null ? void 0 : v.className.indexOf("inlineTreeNodeF")) === -1 && v.setAttribute("class", v.className + " inlineTreeNodeF");
            }
          }
        }
    }
    function b(k) {
      let C = [];
      if (e.leaf) {
        for (let w of k)
          if (!w.children)
            if (Array.isArray(e.collectVal)) {
              let S = {};
              for (let B of e.collectVal)
                S[B] = w[B];
              C.push(S);
            } else
              C.push(w[e.collectVal]);
      } else
        for (let w of k)
          if (Array.isArray(e.collectVal)) {
            let S = {};
            for (let B of e.collectVal)
              S[B] = w[B];
            C.push(S);
          } else
            C.push(w[e.collectVal]);
      c = C, n("update:modelValue", C), n("on-change", pe(C));
    }
    return (k, C) => {
      const w = te("Tree");
      return p(l) ? (T(), le(w, {
        key: 0,
        id: u,
        class: "checkboxTreeGA",
        data: p(i),
        render: r,
        onOnCheckChange: b,
        onOnToggleExpand: h,
        "show-checkbox": ""
      }, null, 8, ["data"])) : ue("", !0);
    };
  }
}), Go = { class: "transferBoxRL" }, Ho = { class: "leftBoxLLL" }, Wo = { class: "fullHeight flexColumnBox" }, jo = { class: "notGrow" }, qo = { class: "titleLLL" }, Xo = { class: "growFlexItem" }, Jo = { class: "middleBoxLLL" }, Yo = { class: "rightBoxLLL" }, Qo = { class: "fullHeight flexColumnBox" }, Zo = { class: "notGrow" }, ei = { class: "titleLLL" }, ti = { class: "growFlexItem" }, li = /* @__PURE__ */ ce({
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
    let i = U({}), u = U({}), c = U([]), s = U([]), y = U(0), m = U(0);
    const f = j(() => ({ ...l.constSearchDataLeft, ...i.value })), r = j(() => ({ ...l.constSearchDataRight, ...u.value })), h = j(() => y.value < 1), b = j(() => c.value.length < 1), k = j(() => s.value.length < 1), C = j(() => m.value < 1), w = U(), S = U(), B = U(), O = U();
    function $() {
      w.value.resetForm(), S.value.resetForm(), De(i.value) || (i.value = {}), De(u.value) || (u.value = {}), B.value.clearSelect(), O.value.clearSelect();
    }
    function N() {
      B.value.search(), O.value.search();
    }
    function D(R) {
      c.value = R;
    }
    function v(R) {
      s.value = R;
    }
    function A(R) {
      var G, J, ie, me, he;
      y.value = ((J = (G = R == null ? void 0 : R.data) == null ? void 0 : G.page) == null ? void 0 : J.total) || ((me = (ie = R == null ? void 0 : R.data) == null ? void 0 : ie.data) == null ? void 0 : me.total) || ((he = R == null ? void 0 : R.data) == null ? void 0 : he.total) || (R == null ? void 0 : R.total) || 0, e("on-data-change-l", R);
    }
    function L(R) {
      var G, J, ie, me, he;
      m.value = ((J = (G = R == null ? void 0 : R.data) == null ? void 0 : G.page) == null ? void 0 : J.total) || ((me = (ie = R == null ? void 0 : R.data) == null ? void 0 : ie.data) == null ? void 0 : me.total) || ((he = R == null ? void 0 : R.data) == null ? void 0 : he.total) || (R == null ? void 0 : R.total) || 0, e("on-data-change-r", R);
    }
    function ee(R) {
      typeof l.leftSearchDataFilter == "function" ? i.value = l.leftSearchDataFilter(R) : i.value = R;
    }
    function E(R) {
      typeof l.rightSearchDataFilter == "function" ? u.value = l.rightSearchDataFilter(R) : u.value = R;
    }
    function _() {
      l.addUrl && P("add");
    }
    function X() {
      l.deleteUrl && P("delete");
    }
    function F() {
      l.addAllUrl && l.addUrl && P("addAll");
    }
    function g() {
      l.deleteAllUrl && P("deleteAll");
    }
    function P(R) {
      let G, J, ie = {}, me = "";
      switch (R) {
        case "add":
          G = l.addMethod, J = l.addUrl, ie = l.addParamsHandle(s.value), me = x("r.add");
          break;
        case "delete":
          G = l.deleteMethod, J = l.deleteUrl, ie = l.deleteParamsHandle(c.value), me = x("r.remove");
          break;
        case "addAll":
          G = l.addAllMethod, J = l.addAllUrl, ie = l.addAllParamsHandle(r.value), me = x("r.addAll");
          break;
        case "deleteAll":
          G = l.deleteAllMethod, J = l.deleteAllUrl, ie = l.deleteAllParamsHandle(f.value), me = x("r.removeAll");
          break;
      }
      J && G && qe[G](J, ie, null, [], { spin: !0 }, !1).then((he) => {
        (he == null ? void 0 : he.code) === 0 ? (Ke(me + x("r.success"), (he == null ? void 0 : he.message) || "", "success"), B.value && B.value.getTableData(), O.value && O.value.getTableData(), e("transferred")) : Ke(me + x("r.failed"), (he == null ? void 0 : he.message) || "", "error");
      }).catch(() => {
        Ke(me + x("r.error"), "", "error");
      });
    }
    return o({
      reset: $,
      search: N
    }), (R, G) => {
      const J = te("Icon"), ie = te("Button");
      return T(), K("div", Go, [
        M("div", Ho, [
          M("div", Wo, [
            M("div", jo, [
              M("div", qo, q(l.titleLeft || p(x)("r.added")), 1),
              Z(al, null, {
                default: ne(() => [
                  Z(rl, {
                    ref_key: "leftFormRef",
                    ref: w,
                    "form-data": l.formDataLeft,
                    "form-rules": l.formRulesLeft,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: ee
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            M("div", Xo, [
              Z(il, {
                ref_key: "lTabRef",
                ref: B,
                columns: l.leftTableColumns,
                url: l.leftTableUrl,
                "search-data": p(f),
                onOnSelectionChange: D,
                onOnDataChange: A,
                "init-data": !!(p(De)(l.constSearchDataLeft) && l.leftTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: l.usePagePro,
                showTotal: l.showTotal,
                showSizer: l.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ]),
        M("div", Jo, [
          Z(ie, {
            class: "middleBtLLL",
            type: "default",
            onClick: g,
            disabled: p(h)
          }, {
            default: ne(() => [
              ke(q(p(x)("r.removeAll")) + " ", 1),
              Z(J, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Z(ie, {
            class: "middleBtLLL",
            type: "default",
            onClick: X,
            disabled: p(b)
          }, {
            default: ne(() => [
              ke(q(p(x)("r.remove")) + " ", 1),
              Z(J, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Z(ie, {
            class: "middleBtLLL",
            type: "primary",
            onClick: _,
            disabled: p(k)
          }, {
            default: ne(() => [
              Z(J, { type: "ios-arrow-back" }),
              ke(" " + q(p(x)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          Z(ie, {
            class: "middleBtLLL",
            type: "primary",
            onClick: F,
            disabled: p(C)
          }, {
            default: ne(() => [
              Z(J, { type: "ios-arrow-back" }),
              ke(" " + q(p(x)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        M("div", Yo, [
          M("div", Qo, [
            M("div", Zo, [
              M("div", ei, q(l.titleRight || p(x)("r.notAdded")), 1),
              Z(al, null, {
                default: ne(() => [
                  Z(rl, {
                    ref_key: "rightFormRef",
                    ref: S,
                    "form-data": l.formDataRight,
                    "form-rules": l.formRulesRight,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: E
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            M("div", ti, [
              Z(il, {
                ref_key: "rTabRef",
                ref: O,
                columns: l.rightTableColumns,
                url: l.rightTableUrl,
                "search-data": p(r),
                onOnSelectionChange: v,
                onOnDataChange: L,
                "init-data": !!(p(De)(l.constSearchDataRight) && l.rightTableUrl),
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
}), ai = { class: "boxLPA" }, ni = { class: "headerJ" }, oi = { class: "firstT borderBoxAS" }, ii = { class: "secondT borderBoxAS" }, si = { class: "firstCol borderBoxAS" }, ri = { class: "secondCol borderBoxAS" }, ui = /* @__PURE__ */ ce({
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
    const n = t, e = o, l = U([]), i = j(() => {
      var f;
      let y = pe(n.data), m = pe(l.value);
      for (let r of y) {
        let h = 0;
        if (r != null && r.children && !De(r.children))
          for (let b of r.children) {
            for (let k = 0, C = m == null ? void 0 : m.length; k < C; k++)
              if (Array.isArray(n.collectVal)) {
                let w = !0;
                for (let S of n.collectVal)
                  if (((f = m[k]) == null ? void 0 : f[S]) !== (b == null ? void 0 : b[S])) {
                    w = !1;
                    break;
                  }
                if (w) {
                  b.checked = !0, h++, m.splice(k, 1);
                  break;
                }
              } else if (m[k] === b[n.collectVal]) {
                b.checked = !0, h++, m.splice(k, 1);
                break;
              }
            !b.checked && (b.checked = !1);
          }
        h === 0 ? (r.checked = !1, r.indeterminate = !1) : r.children && h === r.children.length ? (r.checked = !0, r.indeterminate = !1) : (r.checked = !1, r.indeterminate = !0);
      }
      return y;
    });
    Se(
      () => n.modelValue,
      (y, m) => {
        bt(l.value, y) || bt(y, m) || (l.value = y);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function u(y, m) {
      if (y.children)
        for (let f of y.children)
          f.checked = m;
      c();
    }
    function c() {
      s(i.value, !0);
    }
    function s(y, m) {
      let f = [];
      for (let r of y) {
        if (!m && !n.leaf && r.checked && r.indeterminate === !1)
          if (Array.isArray(n.collectVal)) {
            let h = {};
            for (let b of n.collectVal)
              h[b] = r[b];
            f.push(h);
          } else Q(n.collectVal) === "String" && f.push(r[n.collectVal]);
        if (r.children) {
          for (let h of r.children)
            if (h.checked)
              if (Array.isArray(n.collectVal)) {
                let b = {};
                for (let k of n.collectVal)
                  b[k] = h[k];
                f.push(b);
              } else Q(n.collectVal) === "String" && f.push(h[n.collectVal]);
        }
      }
      m ? (l.value = f, n.leaf ? (e("update:modelValue", f), e("on-change", pe(f))) : $e(function() {
        s(i.value);
      })) : (e("update:modelValue", f), e("on-change", pe(f)));
    }
    return (y, m) => {
      const f = te("Checkbox");
      return T(), K("div", ai, [
        M("div", ni, [
          M("div", oi, q(y.firstTitle || p(x)("r.level.1")), 1),
          M("div", ii, q(y.secondTitle || p(x)("r.level.2")), 1)
        ]),
        (T(!0), K(ge, null, Ve(p(i), (r, h) => (T(), K("div", {
          class: "bodyJ",
          key: "checkboxJ" + h
        }, [
          M("div", si, [
            Z(f, {
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
          M("div", ri, [
            (T(!0), K(ge, null, Ve(r.children, (b, k) => (T(), K("div", {
              class: "secItem",
              key: "secItem" + k
            }, [
              Z(f, {
                modelValue: b.checked,
                "onUpdate:modelValue": (C) => b.checked = C,
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
}), di = { class: "boxLPB" }, ci = { class: "headerF" }, fi = { class: "firstT borderBoxKa" }, pi = { class: "secondT borderBoxKa" }, mi = { class: "thirdT borderBoxKa" }, hi = { class: "firstCol borderBoxKa" }, yi = { class: "rightBoxAL" }, vi = { class: "secondCol borderBoxKa" }, gi = { class: "thirdCol borderBoxKa" }, bi = /* @__PURE__ */ ce({
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
    const n = o, e = t, l = U([]), i = j(() => {
      let m = pe(e.data), f = pe(l.value);
      for (let r of m) {
        let h = 0, b = 0;
        if (r != null && r.children && !De(r.children))
          for (let k of r.children) {
            let C = 0;
            if (k.children && !De(k.children))
              for (let w of k.children) {
                for (let S = 0, B = f.length; S < B; S++)
                  if (Array.isArray(e.collectVal)) {
                    let O = !0;
                    for (let $ of e.collectVal)
                      if (f[S][$] !== w[$]) {
                        O = !1;
                        break;
                      }
                    if (O) {
                      w.checked = !0, C++, f.splice(S, 1);
                      break;
                    }
                  } else if (f[S] === w[e.collectVal]) {
                    w.checked = !0, C++, f.splice(S, 1);
                    break;
                  }
                !w.checked && (w.checked = !1);
              }
            C === 0 ? (k.checked = !1, k.indeterminate = !1) : k.children && C === k.children.length ? (k.checked = !0, k.indeterminate = !1, h++) : (k.checked = !1, k.indeterminate = !0, b++);
          }
        h === 0 && b === 0 ? (r.checked = !1, r.indeterminate = !1) : r.children && h === r.children.length ? (r.checked = !0, r.indeterminate = !1) : (r.checked = !1, r.indeterminate = !0);
      }
      return m;
    });
    Se(
      () => e.modelValue,
      (m, f) => {
        bt(l.value, m) || bt(m, f) || (l.value = m);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function u(m, f) {
      if (m.children) {
        for (let r of m.children)
          if (r.checked = f, r.children)
            for (let h of r.children)
              h.checked = f;
      }
      s();
    }
    function c(m, f) {
      if (m.children)
        for (let r of m.children)
          r.checked = f;
      s();
    }
    function s() {
      y(i.value, !0);
    }
    function y(m, f) {
      let r = [];
      for (let h of m) {
        if (!f && !e.leaf && (h != null && h.checked) && h.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let b = {};
            for (let k of e.collectVal)
              b[k] = h[k];
            r.push(b);
          } else Q(e.collectVal) === "String" && r.push(h[e.collectVal]);
        if (h != null && h.children)
          for (let b of h.children) {
            if (!f && !e.leaf && b.checked && b.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let k = {};
                for (let C of e.collectVal)
                  k[C] = b[C];
                r.push(k);
              } else Q(e.collectVal) === "String" && r.push(b[e.collectVal]);
            if (b.children) {
              for (let k of b.children)
                if (k.checked)
                  if (Array.isArray(e.collectVal)) {
                    let C = {};
                    for (let w of e.collectVal)
                      C[w] = k[w];
                    r.push(C);
                  } else Q(e.collectVal) === "String" && r.push(k[e.collectVal]);
            }
          }
      }
      f ? (l.value = r, e.leaf ? (n("update:modelValue", r), n("on-change", pe(r))) : $e(function() {
        y(i.value);
      })) : (n("update:modelValue", r), n("on-change", pe(r)));
    }
    return (m, f) => {
      const r = te("Checkbox");
      return T(), K("div", di, [
        M("div", ci, [
          M("div", fi, q(m.firstTitle || p(x)("r.level.1")), 1),
          M("div", pi, q(m.secondTitle || p(x)("r.level.2")), 1),
          M("div", mi, q(m.thirdTitle || p(x)("r.level.3")), 1)
        ]),
        (T(!0), K(ge, null, Ve(p(i), (h, b) => (T(), K("div", {
          class: "bodyF",
          key: "checkboxJ" + b
        }, [
          M("div", hi, [
            Z(r, {
              modelValue: h.checked,
              "onUpdate:modelValue": (k) => h.checked = k,
              indeterminate: h.indeterminate,
              onOnChange: (k) => u(h, k),
              disabled: m.disabled
            }, {
              default: ne(() => [
                ke(q(h[m.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          M("div", yi, [
            (T(!0), K(ge, null, Ve(h.children, (k, C) => (T(), K("div", {
              class: "rightBoxInner",
              key: "secItem" + C
            }, [
              M("div", vi, [
                Z(r, {
                  modelValue: k.checked,
                  "onUpdate:modelValue": (w) => k.checked = w,
                  indeterminate: k.indeterminate,
                  onOnChange: (w) => c(k, w),
                  disabled: m.disabled
                }, {
                  default: ne(() => [
                    ke(q(k[m.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              M("div", gi, [
                (T(!0), K(ge, null, Ve(k.children, (w, S) => (T(), K("div", {
                  class: "thirdItem",
                  key: "thirdItem" + S
                }, [
                  Z(r, {
                    modelValue: w.checked,
                    "onUpdate:modelValue": (B) => w.checked = B,
                    onOnChange: s,
                    disabled: m.disabled
                  }, {
                    default: ne(() => [
                      ke(q(w[m.label]), 1)
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
}), ki = {
  class: "fl",
  style: { "font-weight": "bold" }
}, wi = { class: "btsF" }, _i = { key: 0 }, Ci = {
  key: 1,
  class: "growFlexItem relativeBox"
}, Si = { class: "fullFlowContent" }, Vi = /* @__PURE__ */ ce({
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
    return (l, i) => (T(), K("div", {
      style: re(p(n))
    }, [
      M("div", {
        class: we(["wellCardR", { flexColumnBox: !o.fitToContent }])
      }, [
        M("div", {
          class: we(["panelHeader", { notGrow: !o.fitToContent }])
        }, [
          M("div", ki, q(o.title || p(x)("r.title")), 1),
          M("div", wi, [
            Ne(l.$slots, "bts")
          ])
        ], 2),
        o.fitToContent ? (T(), K("div", _i, [
          Ne(l.$slots, "default")
        ])) : (T(), K("div", Ci, [
          M("div", Si, [
            Ne(l.$slots, "default")
          ])
        ]))
      ], 2)
    ], 4));
  }
}), Ti = /* @__PURE__ */ ce({
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
    let l = U(1), i = 1;
    const u = U(""), c = gt([]);
    let s = {}, y = !0, m = !1;
    const f = "scm" + Math.random(), { onCompositionStart: r, onCompositionEnd: h, handleChange: b } = Et(), k = j(() => u.value ? x("r.searchFor") + u.value : e.placeholder || x("r.pInput")), C = j({
      get() {
        return e.modelValue ?? "";
      },
      set(L) {
        if (n("update:modelValue", L ?? ""), e.collectLabel && L !== void 0) {
          let ee = {};
          for (let E of c.value)
            if (E[e.optionsValKey] === L) {
              ee = JSON.parse(JSON.stringify(E));
              break;
            }
          n("on-change", ee);
        }
      }
    }), w = j(() => e.searchKey ? {
      ...e.searchData,
      current: l.value,
      [e.searchKey]: u.value
    } : {
      ...e.searchData,
      current: l.value
    });
    Se(
      () => e.getOptions,
      (L) => {
        L ? y && A() : $();
      },
      { immediate: !0 }
    ), Se(
      () => e.url,
      (L) => {
        L && (m = !0);
      }
    );
    const S = U();
    function B() {
      const L = S.value.$el.querySelector('.ivu-select-input[type="text"]');
      L.addEventListener("compositionstart", r), L.addEventListener("compositionend", h), L.addEventListener("keyup", D);
    }
    function O() {
      var ee, E;
      const L = (E = (ee = S.value) == null ? void 0 : ee.$el) == null ? void 0 : E.querySelector('.ivu-select-input[type="text"]');
      L && (L.removeEventListener("compositionstart", r), L.removeEventListener("compositionend", h), L.removeEventListener("keyup", D));
    }
    function $() {
      y || (C.value = "", y = !0, u.value = "", c.value = [], l.value = 1, i = 1, s = {}, m = !1);
    }
    function N(L) {
      for (let ee of c.value)
        if ((ee == null ? void 0 : ee.label) === L)
          return !0;
      return !1;
    }
    const D = Dt(function(L) {
      b(() => {
        var E;
        const ee = (E = L == null ? void 0 : L.target) == null ? void 0 : E.value;
        N(ee) || (Re(ee) ? (m ? $() : (De(s) && (s.current = l.value, s.pages = i, s.options = pe(c.value)), Re(C.value) && (C.value = "")), u.value = String(ee), c.value = [], l.value = 1, y = !0, A()) : m ? ($(), A()) : (C.value = "", u.value = "", s.current ? (l.value = s.current, i = s.pages, c.value = pe(s.options), s = {}) : A()));
      });
    }, 600);
    Ft(() => {
      D.cancel(), O();
    });
    function v() {
      m && $(), l.value < i ? (++l.value, $e(function() {
        A();
      })) : wl.warning({
        background: !0,
        content: x("r.noMore")
      });
    }
    function A() {
      return new Promise((L, ee) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Re(u.value)) {
            L(!1);
            return;
          }
          qe.get(e.url, w.value).then((E) => {
            var F;
            y = !1;
            let _ = [];
            (F = E == null ? void 0 : E.data) != null && F.records ? (_ = E.data.records, i = E.data.pages) : E != null && E.data && Q(E.data) === "Array" ? (_ = E.data, i = E.pages) : E != null && E.data && Q(E.data) === "Object" && (_ = [E.data], i = 1), typeof e.optionFilter == "function" && Q(e.optionFilter) === "Function" && (_ = e.optionFilter(_)), De(_) || (_ = _.map((g, P) => {
              let R = x("r.optionLabel") + P;
              if (Array.isArray(e.optionsLabelKey)) {
                let G = [];
                for (let J = 1, ie = e.optionsLabelKey.length; J < ie; J++)
                  G.push(g[e.optionsLabelKey[J]]);
                R = `${g[e.optionsLabelKey[0]]}(${String(G)})`;
              } else zl(e.optionsLabelKey) && (R = g[e.optionsLabelKey]);
              if (e.collectLabel) {
                let G = pe(g);
                return delete G.value, delete G.label, {
                  value: g[e.optionsValKey],
                  label: R,
                  ...G
                };
              }
              return {
                value: g[e.optionsValKey],
                label: R
              };
            })), c.value.push(..._);
            let X = {};
            c.value = c.value.filter((g) => X[g == null ? void 0 : g.value] ? !1 : (X[g == null ? void 0 : g.value] = !0, !0)), $e(function() {
              n("update-option-finish");
            }), L(!0);
          }).catch(() => {
            wl.error(x("r.getDataError")), ee(x("r.getDataError"));
          });
        } else
          L(!1);
      });
    }
    return Ge(B), (L, ee) => {
      const E = te("Option"), _ = te("Select"), X = $t("loadmore");
      return fe((T(), le(_, ct({
        modelValue: p(C),
        "onUpdate:modelValue": ee[0] || (ee[0] = (F) => Fe(C) ? C.value = F : null),
        ref_key: "selectScrollSourceRef",
        ref: S,
        "transfer-class-name": f
      }, L.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: p(k),
        disabled: L.disabled
      }), {
        default: ne(() => [
          (T(!0), K(ge, null, Ve(p(c), (F, g) => (T(), le(E, {
            key: "op" + g,
            value: F == null ? void 0 : F.value,
            label: F == null ? void 0 : F.label,
            disabled: F == null ? void 0 : F.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [X, v, f]
      ]);
    };
  }
}), Ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: ia,
  AsyncCascader: oa,
  BtTablePage: il,
  CheckboxGroupThreeClass: bi,
  CheckboxGroupTwoClass: ui,
  CheckboxTree: Uo,
  Date: da,
  EditorPro: ca,
  FormGroup: Ko,
  FormModal: zo,
  FormR: Kt,
  FullPop: Xa,
  HeaderBt: Gl,
  Hello: Ya,
  IconTxtBtn: Qt,
  InputMap: na,
  MonthRange: ua,
  Page404: tn,
  PagePro: la,
  SearchForm: rl,
  SelectInput: aa,
  SelectScrollMore: Ti,
  ShowHidePanel: al,
  ShowHidePanelB: Hn,
  SideMenu: Ln,
  SideMenuPro: En,
  TableIconBtn: Yl,
  TableSearch: Wn,
  TableSetting: ea,
  TransferBox: li,
  UploadGroup: ra,
  WellCard: Vi
}, Symbol.toStringTag, { value: "Module" })), Bi = { class: "a4Line aL notPrint" }, Li = { class: "a4Line aR notPrint" }, xi = { class: "a4Line bL notPrint" }, Oi = { class: "a4Line bR notPrint" }, Ii = { class: "topsL notPrint" }, Ai = { class: "topsLTitle" }, Pi = { class: "topsLBtn" }, Ri = { class: "topsLHelp" }, Mi = { key: 0 }, $i = { key: 1 }, Fi = { key: 2 }, Di = ["innerHTML"], Ni = /* @__PURE__ */ ce({
  __name: "PrintModal",
  setup(t) {
    const o = dl(), n = U(), e = U(!1), l = U(!1), i = U(!1), u = U(100), c = U(), s = U(715), y = U(!1), m = U(), f = "tablePrint_" + Date.now().toString(), r = U(""), h = U([]), b = U([]), k = U(!1), C = j(() => ({
      width: s.value + "px"
    })), w = () => {
      m.value && window.sessionStorage.removeItem("print_" + m.value), window.sessionStorage.removeItem(f), window.close();
    }, S = () => {
      y.value && (y.value = !1);
    }, B = () => {
      k.value = !0;
    }, O = (A) => {
      k.value && (s.value = (A == null ? void 0 : A.layerX) - 20);
    }, $ = () => {
      k.value && (k.value = !1);
    }, N = () => {
      y.value = !1;
      let A = window.setTimeout(() => {
        window.clearTimeout(A), window.print();
      }, 100);
    }, D = (A) => {
      if (typeof c.value == "function")
        return c.value(A);
    }, v = () => {
      var A, L, ee, E, _, X, F;
      if (m.value = (A = o == null ? void 0 : o.params) == null ? void 0 : A.isFrom, m.value) {
        let g = window.sessionStorage.getItem("print_" + m.value);
        if (g) {
          const P = JSON.parse(g);
          if (!P) {
            e.value = !0;
            return;
          }
          if (h.value = P.columns, b.value = P.data, n.value = P.title, r.value = ((L = P.config) == null ? void 0 : L.customClass) || "", l.value = ((ee = P.config) == null ? void 0 : ee.domPrint) || !1, i.value = ((E = P.config) == null ? void 0 : E.autoPrint) || !1, u.value = ((_ = P.config) == null ? void 0 : _.autoPrintTimeout) || 100, s.value = ((X = P.config) == null ? void 0 : X.width) || 715, document.title = (n.value || x("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString(), (F = P.funcArr) != null && F.length) {
            for (let R of P.funcArr)
              if (R.name === "spanMethod") {
                c.value = new Function("return " + R.func)();
                break;
              }
          }
        } else
          e.value = !0;
      }
    };
    return Ge(() => {
      if (i.value) {
        let A = window.setTimeout(() => {
          window.clearTimeout(A), N();
        }, u.value);
      }
      document.addEventListener("click", S), document.addEventListener("mousemove", O), document.addEventListener("mouseup", $);
    }), v(), (A, L) => {
      const ee = te("Table");
      return T(), K("div", {
        class: we(["tablePrintModal", [p(r)]])
      }, [
        fe(M("div", { class: "msgL notPrint" }, q(p(x)("r.printGuide.9")), 513), [
          [ve, p(e)]
        ]),
        fe(M("div", Bi, [
          M("p", null, q(p(x)("r.printGuide.7")), 1),
          L[2] || (L[2] = ke()),
          M("p", null, q(p(x)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !p(e)]
        ]),
        fe(M("div", Li, [
          M("p", null, q(p(x)("r.printGuide.7")), 1),
          L[3] || (L[3] = ke()),
          M("p", null, q(p(x)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !p(e)]
        ]),
        fe(M("div", xi, [
          M("p", null, q(p(x)("r.printGuide.8")), 1),
          L[4] || (L[4] = ke()),
          M("p", null, q(p(x)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !p(e)]
        ]),
        fe(M("div", Oi, [
          M("p", null, q(p(x)("r.printGuide.8")), 1),
          L[5] || (L[5] = ke()),
          M("p", null, q(p(x)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !p(e)]
        ]),
        fe(M("div", Ii, [
          M("div", Ai, q(p(n) || p(x)("r.print")), 1),
          M("div", Pi, [
            Z(Qt, {
              icon: "md-help-circle",
              name: p(x)("r.help"),
              onClick: L[0] || (L[0] = qt((E) => y.value = !p(y), ["stop"]))
            }, null, 8, ["name"]),
            Z(Qt, {
              icon: "md-print",
              name: p(x)("r.preview"),
              onClick: N
            }, null, 8, ["name"]),
            p(l) ? ue("", !0) : (T(), le(ea, {
              key: 0,
              modelValue: p(h),
              "onUpdate:modelValue": L[1] || (L[1] = (E) => Fe(h) ? h.value = E : null),
              "s-key": f,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            Z(Yl, {
              icon: "md-close",
              onClick: w,
              title: p(x)("r.close")
            }, null, 8, ["title"])
          ]),
          fe(M("div", Ri, [
            p(l) ? ue("", !0) : (T(), K("p", Mi, [
              L[6] || (L[6] = M("span", null, "1. ", -1)),
              M("span", null, q(p(x)("r.printGuide.1")), 1)
            ])),
            p(l) ? ue("", !0) : (T(), K("p", $i, [
              L[7] || (L[7] = M("span", null, "2. ", -1)),
              M("span", null, q(p(x)("r.printGuide.2")), 1)
            ])),
            p(l) ? (T(), K("p", Fi, [
              L[8] || (L[8] = M("span", null, "1. ", -1)),
              M("span", null, q(p(x)("r.printGuide.10")), 1)
            ])) : ue("", !0),
            M("p", null, [
              M("span", null, q(p(l) ? "2. " : "3. "), 1),
              M("span", null, q(p(x)("r.printGuide.3")), 1)
            ]),
            M("p", null, [
              M("span", null, q(p(l) ? "3. " : "4. "), 1),
              M("span", null, q(p(x)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ve, p(y)]
          ])
        ], 512), [
          [ve, !p(e)]
        ]),
        p(l) ? (T(), K("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: re(p(C))
        }, [
          M("div", {
            class: "settingLine",
            onMousedown: qt(B, ["stop"])
          }, null, 32)
        ], 4)) : ue("", !0),
        p(l) ? (T(), K("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: p(b),
          style: re(p(C))
        }, null, 12, Di)) : ue("", !0),
        p(l) ? ue("", !0) : fe((T(), le(ee, {
          key: 2,
          class: "tablePW",
          columns: p(h),
          data: p(b),
          "span-method": D,
          border: ""
        }, null, 8, ["columns", "data"])), [
          [ve, !p(e)]
        ])
      ], 2);
    };
  }
});
let at = null, Vt = null;
function $l() {
  document.documentElement.style.setProperty("overflow", "auto"), Vt || (Vt = document.createElement("style"), Vt.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(Vt));
}
function Ei(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: Ni
  })), at = t, location.pathname.indexOf("tablePrint") > -1 ? (at.push(location.pathname), $l()) : location.hash.indexOf("tablePrint") > -1 && (at.push(location.hash.replace(/^#/, "")), $l());
}
function fa(t) {
  return Q(t) === "Object" && (t.hasOwnProperty("width") || (t.width = t.minWidth || 100), t.hasOwnProperty("minWidth") && delete t.minWidth, t.sortable = !1, delete t.__id, t.resizable = !0, t.children && Q(t.children) === "Array" && (t.children = t.children.map(fa))), t;
}
function Ki(t, o, n, e) {
  var m, f, r;
  if (!at)
    return;
  let l;
  if (!(e != null && e.domPrint)) {
    let h = pe(
      t.filter((b) => (b == null ? void 0 : b.key) || (b == null ? void 0 : b.children))
    );
    h[0].type === "selection" && h.shift(), h.length ? l = h.map(fa) : l = [];
  }
  const i = [];
  e && Object.entries(e).forEach(([h, b]) => {
    typeof b == "function" && (i.push({
      name: h,
      func: b.toString().replaceAll(/[\r\n\t]/g, "").replaceAll(/\s{2,}/g, " ")
    }), delete e[h]);
  });
  let u = (f = (m = at == null ? void 0 : at.currentRoute) == null ? void 0 : m.value) == null ? void 0 : f.fullPath;
  u && (u = (r = u.replace) == null ? void 0 : r.call(u, /\//g, "_"));
  let c = {
    data: o,
    title: n,
    config: e,
    funcArr: i
  };
  e != null && e.domPrint || (c.columns = l), window.sessionStorage.setItem("print_" + u, JSON.stringify(c));
  const s = at.resolve({
    name: "tablePrint",
    params: { isFrom: u }
  });
  window.open(s == null ? void 0 : s.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const ml = {
  print: Ki,
  init: Ei
};
function zi(t = "", o = "", n = {}) {
  n.domPrint = !0, n.width || (n.width = 715), ml.print([], t, o, n);
}
function Ui(t) {
  var i, u;
  const o = (...c) => Qe.apply(this, c), n = o("r.closePreview"), e = o("r.fullImg");
  let l = "previewImg" + Math.floor(Math.random() * 1e7);
  (u = (i = lt) == null ? void 0 : i.info) == null || u.call(i, {
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
            Ae(Pa, {
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
    var r, h, b, k;
    const c = document.getElementById(l);
    if (!c) return;
    let s = c.parentElement, y = 0, m = null;
    for (; s && y < 4; ) {
      if ((h = (r = s.classList) == null ? void 0 : r.contains) != null && h.call(r, "ivu-modal-content")) {
        m = s;
        break;
      }
      s = s.parentElement, y++;
    }
    m || (m = ((b = c.closest) == null ? void 0 : b.call(c, ".ivu-modal-content")) || null);
    const f = (k = c.parentElement) == null ? void 0 : k.nextSibling;
    m && (m.style.height = "0", m.style.padding = "0"), f && (f.style.display = "none");
  }, 10);
}
const Gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: qe,
  $swal: Ke,
  $swalConfirm: Zl,
  clearInterval: Tn,
  clearTimeout: Vn,
  domPrint: zi,
  fullScreenImgByDom: vt,
  fullScreenImgPreview: Ui,
  messageBox: ol,
  setInterval: Sn,
  setTimeout: Me,
  tablePrint: ml
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
      var s, y, m, f, r, h, b, k, C;
      const l = document.getElementById("editor-preview");
      let i = localStorage.getItem("editorPreviewW") || 300, u = localStorage.getItem("editorPreviewH") || 500;
      const c = (s = e == null ? void 0 : e.getHtml) == null ? void 0 : s.call(e);
      if (l) {
        let w = (h = (r = (f = (m = (y = l.children) == null ? void 0 : y[0]) == null ? void 0 : m.children) == null ? void 0 : f[1]) == null ? void 0 : r.children) == null ? void 0 : h[0], S = (C = (k = (b = l.children) == null ? void 0 : b[0]) == null ? void 0 : k.children) == null ? void 0 : C[1];
        w && (w.innerHTML = c, w.style.width = i + "px"), S && (S.style.height = u + "px"), l.style.display = "block";
      } else {
        const w = document.body, S = document.createElement("div");
        S.setAttribute("id", "editor-preview"), S.setAttribute("class", "editor-preview-mask"), S.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${i}' min='200'><span>高</span><input type='number' value='${u}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let B = S.children[0].children[1], O = S.children[0].children[1].children[0], $ = S.children[0].children[0].children[0].children[1];
        const N = 40, D = 70, v = (E) => {
          var F;
          if ((E == null ? void 0 : E.type) === "keyup") {
            let g = !1;
            if (E.key && (g = E.key !== "Enter"), g)
              return;
          }
          let _ = (F = E == null ? void 0 : E.target) == null ? void 0 : F.value;
          if (_ = Number(_), O.style && O.style.width === _ + "px")
            return;
          const X = w.clientWidth;
          _ < 250 ? (_ = 250, E.target.value = 250) : _ > X - N && (_ = X - N, E.target.value = X - N), O.style.width = _ + "px", localStorage.setItem("editorPreviewW", _);
        };
        $.addEventListener("blur", v), $.addEventListener("keyup", v);
        let A = S.children[0].children[0].children[0].children[3];
        const L = (E) => {
          var F;
          if ((E == null ? void 0 : E.type) === "keyup") {
            let g = !1;
            if (E.key && (g = E.key !== "Enter"), g)
              return;
          }
          let _ = (F = E == null ? void 0 : E.target) == null ? void 0 : F.value;
          if (_ = Number(_), B.style && B.style.height === _ + "px")
            return;
          const X = w.clientHeight;
          _ < 300 ? (_ = 300, E.target.value = 300) : _ > X - D && (_ = X - D, E.target.value = X - D), B.style.height = _ + "px", localStorage.setItem("editorPreviewH", _);
        };
        A.addEventListener("blur", L), A.addEventListener("keyup", L), S.children[0].children[0].children[1].addEventListener("click", () => {
          S.style.display = "none";
        }), O.innerHTML = c, O.style.width = i + "px", B.style.height = u + "px", w.append(S);
      }
    }
  }
  const o = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  Da.registerMenu(o), window.wangeditorMenuInit = !0;
})();
const Hi = {
  mounted(t, o) {
    o.value && !cl(o.value) && (t.style.display = "none");
  }
}, Wi = {
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
}, ms = It.use, hs = It.i18n, Fl = {
  ...Gi,
  ...bn
}, ji = {
  install(t) {
    t.component("JsonViewer", Na);
  }
};
let Dl = !1;
const qi = function(t, o = {}) {
  if (Dl) {
    console.warn("plug-r-qw 已经安装过，请勿重复调用 install");
    return;
  }
  Dl = !0, qe.init(o.useStore || o.store, t), ji.install(t), o.locale && It.use(o.locale), o.i18n && It.i18n(o.i18n), o.router && (Cn(o.router), ml.init(o.router)), o.amap && fo(o.amap), o.notRegistryGlobal || (Object.keys(Ml).forEach((n) => {
    t.component(n) || t.component(n, Ml[n]);
  }), Object.keys(Fl).forEach((n) => {
    t.config.globalProperties[n] = Fl[n];
  })), t.directive("has") || t.directive("has", Hi), t.directive("loadmore") || t.directive("loadmore", Wi), t.directive("clickOutside") || t.directive("clickOutside", Ql), t.config.globalProperties.fontSizeBase = 14, t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.btTablePageAlign = "center", t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !0, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, ys = { install: qi };
export {
  qe as $fetch,
  Ke as $swal,
  Zl as $swalConfirm,
  ia as AlCascaderMC,
  oa as AsyncCascader,
  il as BtTablePage,
  bi as CheckboxGroupThreeClass,
  ui as CheckboxGroupTwoClass,
  Uo as CheckboxTree,
  da as Date,
  ca as EditorPro,
  Ko as FormGroup,
  zo as FormModal,
  Kt as FormR,
  Xa as FullPop,
  Gl as HeaderBt,
  Ya as Hello,
  Qt as IconTxtBtn,
  na as InputMap,
  ua as MonthRange,
  tn as Page404,
  la as PagePro,
  rl as SearchForm,
  aa as SelectInput,
  Ti as SelectScrollMore,
  al as ShowHidePanel,
  Hn as ShowHidePanelB,
  Ln as SideMenu,
  En as SideMenuPro,
  Yl as TableIconBtn,
  Wn as TableSearch,
  ea as TableSetting,
  li as TransferBox,
  ra as UploadGroup,
  Vi as WellCard,
  Tn as clearInterval,
  tl as clearObj,
  Vn as clearTimeout,
  yn as dataFilterOrToUrl,
  un as decimalDigitsLimit,
  ys as default,
  gn as directivesComponent,
  zi as domPrint,
  jl as downloadFileByFormSubmit,
  Yn as downloadFileReaderFile,
  ql as downloadFileWithSpin,
  fs as emptyInput,
  Qn as fakeALinkClick,
  dn as fileExport,
  Bt as findCollection,
  nl as findPath,
  on as formDataHeadConfig,
  vt as fullScreenImgByDom,
  Ui as fullScreenImgPreview,
  cn as getColumnsKeys,
  Bl as getFileSrc,
  ta as getFileTypeByName,
  Ll as getFileTypeIconByName,
  Zn as getStringWidth,
  nn as has,
  cl as hasPermission,
  cs as htmlDecode,
  ds as htmlEncode,
  vn as htmlPrint,
  hs as i18n,
  qi as install,
  el as isClient,
  pn as isEmptyValue,
  ht as isImgByFile,
  hn as isNaN,
  fl as isNumberNaN,
  fn as isNumberValue,
  Re as isValidValue,
  ms as locale,
  ol as messageBox,
  Q as myTypeof,
  rn as oneOf,
  ll as removeEmptyValue,
  Sn as setInterval,
  Me as setTimeout,
  rt as setValByOption,
  Je as setValue,
  pl as siblingElems,
  ps as stopBubbling,
  mn as stringLength,
  ml as tablePrint,
  sn as toFormData,
  Jn as toHump,
  Hl as toLine,
  Xl as tooltipManual,
  Wl as trimObj,
  Et as useComposition
};
//# sourceMappingURL=plugRQw.js.map
