var va = Object.defineProperty;
var ga = (t, o, n) => o in t ? va(t, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[o] = n;
var mt = (t, o, n) => ga(t, typeof o != "symbol" ? o + "" : o, n);
import { getCurrentInstance as $t, defineComponent as ce, resolveComponent as te, createElementBlock as K, openBlock as T, normalizeStyle as re, normalizeClass as we, createBlock as le, createCommentVNode as ue, renderSlot as Ne, ref as U, computed as j, withDirectives as fe, unref as p, createElementVNode as R, createVNode as Z, toDisplayString as q, withCtx as ne, createTextVNode as ke, vShow as ve, resolveDirective as Ft, onMounted as Ge, nextTick as $e, onUpdated as ba, onUnmounted as nt, h as Ae, isRef as Fe, Fragment as ge, renderList as Ve, onBeforeMount as Kl, watch as Se, mergeModels as ka, useModel as wa, onBeforeUnmount as ul, Teleport as _a, withModifiers as qt, mergeProps as ft, shallowRef as bt, triggerRef as Ca, createSlots as ct, toRef as Sa, toValue as Gt } from "vue";
import Va from "deepmerge";
import { debounce as Dt, cloneDeep as pe, isPlainObject as dt, isObject as Ta, isFunction as Ba, isEmpty as De, isNumber as Bt, last as xt, isEqual as kt, isString as zl, first as Xt, find as Jt, indexOf as kl, findIndex as Ot, remove as La } from "lodash-es";
import St from "sweetalert";
import { Tooltip as xa, Modal as lt, Button as Ht, TableColumnConfig as Oa, Radio as Ia, Input as Aa, Message as wl, Icon as Pa } from "view-ui-plus";
import { useRouter as Nt, useRoute as dl } from "vue-router";
import Ma from "popper.js";
import Yt from "axios";
import Wt from "@amap/amap-jsapi-loader";
import Ra from "ar-cascader";
import { Toolbar as $a, Editor as Fa } from "@wangeditor/editor-for-vue";
import ht from "moment";
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
    return e.length === 1 && typeof e[0] == "object" && (l = e[0]), (!l || !l.hasOwnProperty) && (l = {}), n === void 0 ? "" : n.replace(Ea, (i, u, f, s) => {
      let v;
      return n[s - 1] === "{" && n[s + i.length] === "}" ? f : (v = t(l, f) ? l[f] : null, v ?? "");
    });
  }
  return o;
}
const za = Ka();
let It = Ul;
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
      It = e, Ee.setLocaleMessage(Ee.locale, e), _l = Ee.locale;
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
  let l = It;
  for (let i = 0, u = e.length; i < u; i++) {
    const f = e[i];
    if (n = l[f], i === u - 1) {
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
  It = t || It;
}, Wa = function(t) {
  Ee = t;
}, At = {
  use: Ha,
  t: Qe,
  i18n: Wa
};
function O(t, o) {
  var e, l, i;
  const n = (i = (l = (e = $t()) == null ? void 0 : e.appContext) == null ? void 0 : l.config) == null ? void 0 : i.globalProperties;
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
      const f = te("Icon");
      return T(), K("div", {
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
  const t = (n = $t()) == null ? void 0 : n.appContext;
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
    const u = j(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), f = j(() => ({ zIndex: e.zIndex }));
    function s() {
      i.value = !0, l("on-open");
    }
    function v(m) {
      i.value = !1, l("on-close", m === !0);
    }
    return o({
      open: s,
      close: v
    }), (m, c) => fe((T(), K("div", {
      class: "fullScreenPopBoxAM",
      style: re(p(f))
    }, [
      R("div", {
        class: "headerAM",
        style: re({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: p(u) })
      }, [
        R("span", ja, q(m.title || p(O)("r.title")), 1),
        Z(Gl, {
          icon: "md-return-left",
          onClick: v
        }, {
          default: ne(() => [
            ke(q(p(O)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      R("div", qa, [
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
    return (u, f) => {
      const s = te("Icon"), v = Ft("has");
      return fe((T(), K("div", {
        class: we(["tabTopBtnsT", { disabled: n.disabled }]),
        onClick: i,
        style: re({ "font-size": p(l) })
      }, [
        Z(s, {
          type: n.icon,
          size: n.size
        }, null, 8, ["type", "size"]),
        ke(" " + q(n.name || p(O)("r.button")), 1)
      ], 6)), [
        [v, u.has]
      ]);
    };
  }
}), Qa = { class: "c404K" }, Za = { class: "ct404" }, en = { class: "p404" }, tn = /* @__PURE__ */ ce({
  __name: "Page404",
  setup(t) {
    const n = $t().appContext.config.globalProperties.$router;
    function e() {
      n.go(-1);
    }
    return (l, i) => {
      const u = te("Button");
      return T(), K("div", Qa, [
        i[0] || (i[0] = R("div", { class: "t404" }, "404", -1)),
        R("div", Za, "UH OH! " + q(p(O)("r.pageNotFound")), 1),
        R("div", en, q(p(O)("r.notFoundMsg")), 1),
        Z(u, {
          class: "bt404",
          onClick: e
        }, {
          default: ne(() => [
            ke(q(p(O)("r.back")), 1)
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
      let f = l("r.confirm"), s = l("r.cancel"), v = !1, m = "swalConfirmBt", c = "swalCancelBt";
      const r = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let h = "";
      t.text && r.test(Q(t.text)) ? h = "content" : t.text && Q(t.text) === "String" && (h = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (s = t.buttons.cancel.text) && (v = !0), t.buttons.cancel.className && (c = t.buttons.cancel.className), t.buttons.confirm.text && (f = t.buttons.confirm.text), t.buttons.confirm.className && (m = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (s = t.buttons[0], v = !0), t.buttons[1] && (f = t.buttons[1]))), St({
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
        b && typeof t.onOk == "function" && t.onOk(), i(b);
      }).catch((b) => {
        u(b);
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
      St({
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
        u(s);
      });
    } else if (typeof t == "boolean")
      !t && St.close && St.close();
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
    function f() {
      const s = l.value ? n.value : e.value;
      if (!s)
        return;
      let v = document.createRange();
      v.setStart(s, 0), v.setEnd(s, s.childNodes.length);
      const m = v.getBoundingClientRect().width;
      u.value = s.offsetWidth * 2, l.value = m < s.offsetWidth, v = null;
    }
    return Ge(() => {
      f(), i = Dt(() => {
        $e(function() {
          f();
        });
      }, 200), window.addEventListener("resize", i);
    }), ba(f), nt(() => {
      i == null || i.cancel(), window.removeEventListener("resize", i);
    }), (s, v) => (T(), K("div", ln, [
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
          R("span", {
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
let rt = 0, tt = null;
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
function Pt(t) {
  let o = rt;
  t ? rt++ : rt > 0 && rt--, o !== rt && (rt === 0 ? Sl(!1) : o === 0 && Sl(!0));
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
        l === "String" ? o[e] = o[e].trim() : (l === "Object" || l === "Array") && Mt(o[e]);
      }
  } else if (n === "Array")
    for (let e = 0, l = o.length; e < l; e++) {
      let i = Q(o[e]);
      i === "String" ? o[e] = o[e].trim() : (i === "Array" || i === "Object") && Mt(o[e]);
    }
  return o;
}
function Mt(t) {
  let o = Q(t);
  if (o === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = Q(t[n]);
        e === "String" ? t[n] = t[n].trim() : (e === "Object" || e === "Array") && Mt(t[n]);
      }
  } else if (o === "Array")
    for (let n = 0, e = t.length; n < e; n++) {
      let l = Q(t[n]);
      l === "String" ? t[n] = t[n].trim() : (l === "Array" || l === "Object") && Mt(t[n]);
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
function Lt(t, o, n = !1) {
  if (!t || !o)
    return !1;
  let e, l = "notFoundC", i = function(u, f) {
    if (Array.isArray(u)) {
      if (Q(f) === "Function" && f(u))
        return l = u, [];
      for (let s of u) {
        if (l !== "notFoundC")
          break;
        if (Q(f) === "Function" && f(s) || s === f)
          return l = s, [u.indexOf(s)];
        if (Q(s) === "Array" || Q(s) === "Object") {
          let v = i(s, f);
          if (v !== void 0)
            return [u.indexOf(s), ...v];
        }
      }
    } else if (Q(u) === "Object") {
      if (Q(f) === "Function" && f(u))
        return l = u, [];
      for (let s in u) {
        if (l !== "notFoundC")
          break;
        if (u.hasOwnProperty(s)) {
          if (Q(f) === "Function" && f(s) || u[s] === f)
            return l = u[s], [s];
          if (Q(u[s]) === "Object" || Q(u[s]) === "Array") {
            let v = i(u[s], f);
            if (v !== void 0)
              return [s, ...v];
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
      var f;
      return ((f = u == null ? void 0 : u.indexOf) == null ? void 0 : f.call(u, "URL")) > -1;
    }).map((u) => {
      var f;
      return (f = u.replace) == null ? void 0 : f.call(u, "URL", "");
    });
    for (let u of i) {
      let f = new RegExp("^/" + u + "(?=/.*$)", "i");
      if (f.test(t) && window.g[u + "URL"]) {
        l = window.g[u + "URL"] + t.replace(f, "");
        break;
      }
    }
  }
  if (je.setAttribute("action", l), dt(o)) {
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
  Pt(!0);
  try {
    let l = t;
    if (window != null && window.g) {
      let c = Object.keys(window.g).filter((r) => (r == null ? void 0 : r.indexOf("URL")) > -1).map((r) => r == null ? void 0 : r.replace("URL", ""));
      for (let r of c) {
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
      const c = new URLSearchParams();
      for (let r in o)
        o.hasOwnProperty(r) && (o[r] || o[r] === 0 || o[r] === !1 || o[r] === "") && c.append(r, o[r]);
      l += (l.includes("?") ? "&" : "?") + c.toString();
    }
    ["post", "put"].includes(n.toLowerCase()) && (i.headers = {
      "Content-Type": "application/json"
    }, i.body = JSON.stringify(o));
    const u = await fetch(l, i);
    if (!u.ok)
      throw new Error("下载失败");
    let f = e || "download";
    if (!e) {
      let c = u.headers.get("Content-Disposition");
      if (c) {
        c = decodeURIComponent(c);
        const r = c.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        r && r[1] && (f = r[1].replace(/['"]/g, ""));
      } else {
        const r = l.split("?")[0], h = r.substring(r.lastIndexOf("/") + 1);
        h && h.includes(".") && (f = decodeURIComponent(h));
      }
    }
    const s = await u.blob(), v = window.URL.createObjectURL(s), m = document.createElement("a");
    m.href = v, m.download = f, document.body.appendChild(m), m.click(), document.body.removeChild(m), window.URL.revokeObjectURL(v);
  } catch (l) {
    console.error("下载出错:", l);
  } finally {
    Pt(!1);
  }
}
function cn(t, o, n = !1) {
  let e;
  if (t && Q(o) === "Array") {
    let l = localStorage.getItem(t);
    if (l) {
      let i = JSON.parse(decodeURI(l));
      e = o.filter((u) => {
        var f;
        return (u == null ? void 0 : u.key) && ((f = i == null ? void 0 : i.indexOf) == null ? void 0 : f.call(i, u.title)) !== -1;
      }).map((u) => u.key);
    } else
      e = o.map((i) => i == null ? void 0 : i.key);
  } else
    e = [];
  return n || (e = String(e)), e;
}
function Me(t) {
  return t != null && t !== "";
}
function fn(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function Xl(t, o = !1, n = "") {
  return function(e, l) {
    var u, f;
    let i;
    if (Array.isArray(t)) {
      let s = [];
      for (let v of t)
        Me((u = l.row) == null ? void 0 : u[v]) && s.push(l.row[v]);
      i = s.join(n);
    } else typeof t == "function" ? i = t(l) : i = (f = l.row) == null ? void 0 : f[t];
    return Ae(an, { content: o ? i === "" ? "--" : i ?? "--" : i });
  };
}
function pn(t) {
  if (dt(t)) {
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
function mn(t) {
  return Q(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : Q(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function ut({
  group: t,
  condition: o,
  key: n,
  val: e,
  childKey: l = "children"
}) {
  if (Q(t) !== "Array" || Q(o) !== "Function" || Q(n) !== "String" || Q(l) !== "String")
    return !1;
  t.forEach((i) => {
    o(i) && (Q(e) === "Function" ? i[n] = e(i[n]) : i[n] = e), Q(i[l]) === "Array" && i[l].length > 0 && ut({
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
      Array.isArray(n) || dt(n) ? o.push(ll(n)) : Me(n) && o.push(n);
  } else if (dt(t))
    for (let n in t)
      t.hasOwnProperty(n) && (Array.isArray(t[n]) || dt(t[n]) ? o[n] = ll(t[n]) : Me(t[n]) && (o[n] = t[n]));
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
  return [Ft(o), ...n];
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
  findCollection: Lt,
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
  isValidValue: Me,
  myTypeof: Q,
  oneOf: rn,
  removeEmptyValue: ll,
  setValByOption: ut,
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
      var m, c, r, h, b, k, B, _;
      (m = i == null ? void 0 : i.preventDefault) == null || m.call(i);
      let f = i == null ? void 0 : i.target;
      if (u && !u.children && !f.classList.contains("active")) {
        o.push(u.path);
        return;
      }
      let s = f.parentNode, v = pl(s);
      for (let C of v) {
        (r = (c = C == null ? void 0 : C.classList) == null ? void 0 : c.remove) == null || r.call(c, "open");
        const E = (h = C == null ? void 0 : C.querySelectorAll) == null ? void 0 : h.call(C, ".open");
        if (E && Array.isArray(E))
          for (let S of E)
            (k = (b = S == null ? void 0 : S.classList) == null ? void 0 : b.remove) == null || k.call(b, "open");
      }
      (_ = (B = s == null ? void 0 : s.classList) == null ? void 0 : B.toggle) == null || _.call(B, "open");
    }
    return (i, u) => {
      const f = te("Icon"), s = te("sideMenuGroup", !0);
      return T(), K("ul", kn, [
        (T(!0), K(ge, null, Ve(n.data, (v, m) => (T(), K(ge, {
          key: (v == null ? void 0 : v.path) + m
        }, [
          v ? (T(), K("li", {
            key: 0,
            class: we({ dropItemRP: v.children })
          }, [
            R("div", {
              class: we(["menuTxtR", e(v)]),
              onClick: (c) => l(c, v),
              style: re({ paddingLeft: v.level * 20 + "px" })
            }, [
              v != null && v.icon ? (T(), le(f, {
                key: 0,
                class: "menuIcoL",
                custom: "iconfont " + v.icon
              }, null, 8, ["custom"])) : ue("", !0),
              R("span", null, q((v == null ? void 0 : v.name) || "-- no name --"), 1)
            ], 14, wn),
            v.children ? (T(), le(s, {
              key: 0,
              data: v.children,
              "path-name": n.pathName
            }, null, 8, ["data", "path-name"])) : ue("", !0)
          ], 2)) : ue("", !0)
        ], 64))), 128))
      ]);
    };
  }
});
let wt = [], _t = [], Tl = !1;
const Cn = function(t) {
  if (Tl) {
    console.warn("定时器模块已经初始化过，请勿重复调用 init");
    return;
  }
  t && typeof t.beforeEach == "function" ? (t.beforeEach(() => {
    wt.forEach((o) => {
      window.clearTimeout(o);
    }), _t.forEach((o) => {
      window.clearInterval(o);
    }), wt.length = 0, _t.length = 0;
  }), Tl = !0) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Re = function(t, o) {
  if (typeof t != "function")
    throw new TypeError("第一个参数必须是函数");
  if (typeof o != "number" || o < 0)
    throw new TypeError("第二个参数必须是非负数");
  let n = window.setTimeout(t, o);
  return wt.push(n), n;
}, Sn = function(t, o) {
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
}, Tn = function(t) {
  window.clearInterval(t);
  const o = _t.indexOf(t);
  o > -1 && _t.splice(o, 1);
}, Bn = { class: "menuListR" }, Ln = /* @__PURE__ */ ce({
  __name: "SideMenu",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: o }) {
    const n = t, e = o, l = dl(), i = U(!0), u = U(), f = U(), s = j(() => i.value ? O("r.hideMenu") : O("r.showMenu")), v = j(() => i.value ? "ios-arrow-back" : "ios-arrow-forward");
    Kl(() => {
      let r = localStorage.getItem("menuDisplayR") || "";
      r !== "" ? i.value = JSON.parse(r) : (i.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), Se(
      () => l.path,
      (r) => {
        u.value = r, $e(() => {
          Re(c, 10);
        });
      },
      { immediate: !0 }
    );
    function m() {
      i.value = !i.value, localStorage.setItem("menuDisplayR", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function c() {
      var h, b, k, B, _;
      let r = f.value.querySelectorAll(".dropItemRP");
      for (let C of r)
        (h = C == null ? void 0 : C.querySelector) != null && h.call(C, ".active") && !((k = (b = C.classList) == null ? void 0 : b.contains) != null && k.call(b, "open")) && ((_ = (B = C.classList) == null ? void 0 : B.add) == null || _.call(B, "open"));
    }
    return (r, h) => {
      const b = te("Icon");
      return T(), K("div", {
        ref_key: "menuRef",
        ref: f,
        class: we(["menuBoxRP", "cannotSelect", { light: r.light }])
      }, [
        fe(R("div", Bn, [
          Z(_n, {
            data: n.data,
            pathName: p(u)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, p(i)]
        ]),
        Z(b, {
          type: p(v),
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
      let v = "menuTxtR ";
      return (s == null ? void 0 : s.path) === n.pathName && (v += "active "), v;
    }
    function i(s, v) {
      var c;
      (c = s == null ? void 0 : s.preventDefault) == null || c.call(s);
      let m = s == null ? void 0 : s.target;
      v && !v.children && !m.classList.contains("active") && o.push(v.path);
    }
    function u(s, v) {
      var m;
      (m = s == null ? void 0 : s.preventDefault) == null || m.call(s), e.value = v == null ? void 0 : v.path;
    }
    function f(s) {
      var v;
      (v = s == null ? void 0 : s.preventDefault) == null || v.call(s), e.value = "";
    }
    return (s, v) => {
      const m = te("Icon"), c = te("SideMenuProGroup", !0);
      return T(), K("ul", xn, [
        (T(!0), K(ge, null, Ve(n.data, (r, h) => {
          var b;
          return T(), K("li", {
            key: (r == null ? void 0 : r.path) + h,
            class: we({ dropItemRX: r == null ? void 0 : r.children }),
            onMouseenter: (k) => u(k, r),
            onMouseleave: v[0] || (v[0] = (k) => f(k))
          }, [
            R("div", {
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
            ((b = r == null ? void 0 : r.children) == null ? void 0 : b.length) > 0 ? fe((T(), le(c, {
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
}), Pn = { class: "groupBoxRX" }, Mn = ["onClick"], Jl = /* @__PURE__ */ ce({
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
      var c, r, h, b, k, B, _, C, E, S, $, L, F, y;
      (c = i == null ? void 0 : i.preventDefault) == null || c.call(i);
      let f = i == null ? void 0 : i.target;
      if (u && !u.children && !f.classList.contains("active")) {
        o.push(u.path);
        return;
      }
      const s = (r = f == null ? void 0 : f.querySelector) == null ? void 0 : r.call(f, ".dropIcoRX"), v = f.parentNode, m = pl(v);
      for (let I of m) {
        (b = (h = I == null ? void 0 : I.classList) == null ? void 0 : h.remove) == null || b.call(h, "open");
        const x = (k = I == null ? void 0 : I.querySelector) == null ? void 0 : k.call(I, ".dropIcoRX");
        (_ = (B = x == null ? void 0 : x.classList) == null ? void 0 : B.remove) == null || _.call(B, "open");
        const ee = (C = I == null ? void 0 : I.querySelectorAll) == null ? void 0 : C.call(I, ".open");
        for (let N of ee)
          (S = (E = N == null ? void 0 : N.classList) == null ? void 0 : E.remove) == null || S.call(E, "open");
      }
      (L = ($ = v == null ? void 0 : v.classList) == null ? void 0 : $.toggle) == null || L.call($, "open"), (y = (F = s == null ? void 0 : s.classList) == null ? void 0 : F.toggle) == null || y.call(F, "open");
    }
    return (i, u) => {
      const f = te("Icon");
      return T(), K("ul", Pn, [
        (T(!0), K(ge, null, Ve(n.data, (s, v) => (T(), K("li", {
          key: (s == null ? void 0 : s.path) + v,
          class: we({ dropItemRX: s == null ? void 0 : s.children, open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu })
        }, [
          R("div", {
            class: we(e(s)),
            onClick: (m) => l(m, s),
            style: re({ paddingLeft: s.level * 20 + "px" })
          }, [
            Z(f, {
              class: "menuIcoL",
              custom: "iconfont " + (s.icon || "icon-r-menu-default")
            }, null, 8, ["custom"]),
            R("span", null, q((s == null ? void 0 : s.name) || "-- no name --"), 1),
            fe(Z(f, {
              class: we(["dropIcoRX", { open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu }]),
              type: "ios-arrow-forward"
            }, null, 8, ["class"]), [
              [ve, s.children && s.children.length > 0]
            ])
          ], 14, Mn),
          s.children ? (T(), le(An, {
            key: 0,
            data: s.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : ue("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Rn = { class: "groupBoxRX" }, $n = ["onMouseenter"], Fn = ["onClick"], Dn = /* @__PURE__ */ ce({
  __name: "SideIcoMenu",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const o = Nt(), n = t, e = U("");
    function l(s) {
      let v = "menuTxtR ";
      return (s == null ? void 0 : s.path) === n.pathName && (v += "active "), v;
    }
    function i(s, v) {
      var c;
      (c = s == null ? void 0 : s.preventDefault) == null || c.call(s);
      let m = s == null ? void 0 : s.target;
      v && !v.children && !m.classList.contains("active") && o.push(v.path);
    }
    function u(s, v) {
      var m;
      (m = s == null ? void 0 : s.preventDefault) == null || m.call(s), e.value = v == null ? void 0 : v.path;
    }
    function f(s) {
      var v;
      (v = s == null ? void 0 : s.preventDefault) == null || v.call(s), e.value = "";
    }
    return (s, v) => {
      const m = te("Icon");
      return T(), K("ul", Rn, [
        (T(!0), K(ge, null, Ve(n.data, (c, r) => (T(), K("li", {
          key: (c == null ? void 0 : c.path) + r,
          class: we({ dropItemRX: c.children }),
          onMouseenter: (h) => u(h, c),
          onMouseleave: v[0] || (v[0] = (h) => f(h))
        }, [
          R("div", {
            class: we(l(c)),
            onClick: (h) => i(h, c)
          }, [
            Z(m, {
              class: "menuIcoM",
              custom: "iconfont " + (c.icon || "icon-r-menu-default"),
              size: "20"
            }, null, 8, ["custom"])
          ], 10, Fn),
          fe(Z(Jl, {
            class: "rightTwoMenu",
            data: [c],
            pathName: n.pathName,
            fromIcoMenu: ""
          }, null, 8, ["data", "pathName"]), [
            [ve, p(e) === (c == null ? void 0 : c.path)]
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
    const n = t, e = o, l = dl(), i = U(!0), u = U(), f = U(), s = j(() => i.value ? O("r.hideMenu") : O("r.showMenu")), v = j(() => i.value ? "iconfont icon-r-menu-hide" : "iconfont icon-r-menu-open");
    Kl(() => {
      let r = localStorage.getItem("menuDisplayRPro") || "";
      r !== "" ? i.value = JSON.parse(r) : (i.value = !0, localStorage.setItem("menuDisplayRPro", JSON.stringify(!0)));
    }), Se(
      () => l.path,
      (r) => {
        u.value = r, $e(() => {
          Re(c, 10);
        });
      },
      { immediate: !0 }
    );
    function m() {
      i.value = !i.value, localStorage.setItem("menuDisplayRPro", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function c() {
      var h, b, k, B, _, C, E, S, $, L, F, y, I, x, ee, N, w, X, D, g, P, M, G, J, ie, me, he, Oe, Ie, ae, xe, Pe, Ze, We, H, z, ye, be, _e;
      let r = f.value.querySelectorAll(".dropItemRX");
      for (let W of r) {
        const Ce = (b = (h = W == null ? void 0 : W.childNodes[0]) == null ? void 0 : h.querySelector) == null ? void 0 : b.call(h, ".dropIcoRX");
        (k = W == null ? void 0 : W.querySelector) != null && k.call(W, ".active") ? (C = (_ = (B = W == null ? void 0 : W.childNodes[1]) == null ? void 0 : B.classList) == null ? void 0 : _.contains) != null && C.call(_, "rightChildRX") ? ($ = (S = (E = W == null ? void 0 : W.childNodes[0]) == null ? void 0 : E.classList) == null ? void 0 : S.contains) != null && $.call(S, "activeR") || (F = W == null ? void 0 : (L = W.childNodes[0].classList).add) == null || F.call(L, "activeR") : ((I = (y = W == null ? void 0 : W.classList) == null ? void 0 : y.contains) != null && I.call(y, "open") || (ee = (x = W.classList).add) == null || ee.call(x, "open"), Ce && !((w = (N = Ce == null ? void 0 : Ce.classList) == null ? void 0 : N.contains) != null && w.call(N, "open")) && ((D = (X = Ce.classList).add) == null || D.call(X, "open"))) : (M = (P = (g = W == null ? void 0 : W.childNodes[1]) == null ? void 0 : g.classList) == null ? void 0 : P.contains) != null && M.call(P, "rightChildRX") ? (ie = (J = (G = W == null ? void 0 : W.childNodes[0]) == null ? void 0 : G.classList) == null ? void 0 : J.contains) != null && ie.call(J, "activeR") && ((he = W == null ? void 0 : (me = W.childNodes[0].classList).remove) == null || he.call(me, "activeR")) : ((Ie = (Oe = W == null ? void 0 : W.classList) == null ? void 0 : Oe.contains) != null && Ie.call(Oe, "open") && !((xe = (ae = W == null ? void 0 : W.classList) == null ? void 0 : ae.contains) != null && xe.call(ae, "fromIcoMenu")) && ((Ze = (Pe = W.classList).remove) == null || Ze.call(Pe, "open")), (H = (We = Ce == null ? void 0 : Ce.classList) == null ? void 0 : We.contains) != null && H.call(We, "open") && !((ye = (z = Ce == null ? void 0 : Ce.classList) == null ? void 0 : z.contains) != null && ye.call(z, "fromIcoMenu")) && ((_e = (be = Ce.classList).remove) == null || _e.call(be, "open")));
      }
    }
    return (r, h) => {
      const b = te("Icon");
      return T(), K("div", {
        ref_key: "menuProRef",
        ref: f,
        class: we(["menuBoxRPro", "cannotSelect", { light: r.light }])
      }, [
        fe(R("div", Nn, [
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
          custom: p(v),
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
      const f = te("Icon"), s = Ft("has");
      return fe((T(), K("div", {
        class: we(["tableBtnsG", { disabled: e.disabled }]),
        onClick: l,
        title: e.title || p(O)("r.button")
      }, [
        Z(f, {
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
        fe(R("div", zn, [
          Ne(l.$slots, "default")
        ], 512), [
          [ve, o.value]
        ]),
        R("div", Un, [
          R("div", {
            class: "btA",
            onClick: i[0] || (i[0] = (f) => o.value = !o.value)
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
    return (u, f) => (T(), K("div", {
      style: re(p(i))
    }, [
      fe(R("div", Gn, [
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
    const { onCompositionStart: i, onCompositionEnd: u, handleSearch: f } = Et(), s = j({
      get() {
        return e.modelValue;
      },
      set(r) {
        n("update:modelValue", r);
      }
    }), v = j({
      get() {
        return e.open;
      },
      set(r) {
        n("on-toggle", r);
      }
    }), m = j(() => v.value ? "ios-arrow-up" : "ios-arrow-down");
    function c() {
      f(() => {
        l || (l = !0, n("on-search", s.value), Re(() => {
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
            "onUpdate:modelValue": h[0] || (h[0] = (B) => Fe(s) ? s.value = B : null),
            style: re({ width: e.width }),
            search: "",
            onCompositionstart: p(i),
            onCompositionend: p(u),
            onOnSearch: c,
            class: "searchInputC",
            placeholder: e.placeholder || p(O)("r.pInput")
          }, null, 8, ["modelValue", "style", "onCompositionstart", "onCompositionend", "placeholder"])
        ]),
        fe(R("span", {
          class: "sbt",
          onClick: h[1] || (h[1] = (B) => v.value = !p(v)),
          style: re({ color: e.btnColor })
        }, [
          Z(k, {
            type: p(m),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ke(q(p(O)("r.adSearch")), 1)
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
    var y, I, x, ee, N;
    const n = o, e = t, l = U(), i = U(), u = U(!0), f = U(!1), s = U(!1), v = U([]), m = j(() => {
      var X;
      let w = O("r.unknown");
      return ((X = e.modelValue) == null ? void 0 : X.length) > v.value.length && (v.value = pe(e.modelValue)), v.value.map((D) => {
        let g = { label: (D == null ? void 0 : D.title) || w };
        return D != null && D.disableShowSetting && (g.disabled = !0), g;
      });
    }), c = j(() => m.value.filter((w) => w == null ? void 0 : w.disabled)), r = j({
      get() {
        var w, X;
        return (X = (w = e.modelValue) == null ? void 0 : w.map) == null ? void 0 : X.call(w, (D) => (D == null ? void 0 : D.title) || O("r.unknown"));
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
    }), h = (N = (ee = (x = (I = (y = $t()) == null ? void 0 : y.appContext) == null ? void 0 : I.config) == null ? void 0 : x.globalProperties) == null ? void 0 : ee.$i18n) == null ? void 0 : N.locale;
    let b = null;
    Ge(() => {
      let w = O("r.unknown"), X = L();
      X ? r.value = JSON.parse(decodeURI(X)) : e.defaultCheck && (r.value = e.modelValue.filter((D) => D == null ? void 0 : D.showSettingCheck).map((D) => (D == null ? void 0 : D.title) || w)), $e(function() {
        !l.value || !i.value || (b = new Ma(l.value, i.value, {
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
      }), Re(() => {
        var D;
        s.value = !0, (D = b == null ? void 0 : b.update) == null || D.call(b), $e(function() {
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
      w.length === m.value.length ? (u.value = !1, f.value = !0) : w.length > c.value.length ? (u.value = !0, f.value = !1) : (u.value = !1, f.value = !1);
    }
    Se(() => r.value, B, {
      immediate: !0,
      deep: !0
    });
    function _() {
      s.value && (F() && Zl(O("r.notSave"), "", "warning", E), s.value = !1);
    }
    function C() {
      s.value ? _() : (s.value = !0, $e(function() {
        var w;
        (w = b == null ? void 0 : b.update) == null || w.call(b);
      }));
    }
    function E() {
      h ? window[e.storage].setItem(e.sKey + "_" + h, encodeURI(JSON.stringify(r.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(r.value))), _();
    }
    function S(w) {
      var X, D;
      if (s.value) {
        if (e.transfer) {
          const g = i.value;
          if (g === (w == null ? void 0 : w.target) || (X = g == null ? void 0 : g.contains) != null && X.call(g, w == null ? void 0 : w.target))
            return;
        }
        (D = w == null ? void 0 : w.preventDefault) == null || D.call(w), _();
      }
    }
    function $() {
      u.value ? f.value = !1 : f.value = !f.value, u.value = !1, f.value ? r.value = m.value.map((w) => w == null ? void 0 : w.label) : r.value = c.value.map((w) => w == null ? void 0 : w.label);
    }
    function L() {
      let w;
      return h ? w = window[e.storage].getItem(e.sKey + "_" + h) : w = window[e.storage].getItem(e.sKey), w;
    }
    function F() {
      var X;
      let w = L();
      if (w) {
        if (w = JSON.parse(decodeURI(w)), (w == null ? void 0 : w.length) !== ((X = r.value) == null ? void 0 : X.length))
          return !0;
        for (let D of w)
          if (r.value.indexOf(D) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (w, X) => {
      const D = te("Icon"), g = te("Checkbox"), P = te("CheckboxGroup");
      return fe((T(), K("div", jn, [
        R("div", {
          ref_key: "buttonRef",
          ref: l,
          class: "tabSetBt",
          onClick: C
        }, [
          Z(D, {
            type: "md-settings",
            size: "17"
          }),
          R("span", qn, q(p(O)("r.tabSetting")), 1)
        ], 512),
        (T(), le(_a, {
          to: "body",
          disabled: !e.transfer
        }, [
          fe(R("div", {
            ref_key: "popperRef",
            ref: i,
            class: "tabSetCard",
            style: re({ width: e.width, backgroundColor: e.bg })
          }, [
            R("div", Xn, [
              Z(g, {
                indeterminate: p(u),
                modelValue: p(f),
                "onUpdate:modelValue": X[0] || (X[0] = (M) => Fe(f) ? f.value = M : null),
                onClick: qt($, ["prevent"])
              }, {
                default: ne(() => [
                  ke(q(p(O)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              R("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: E
              }, [
                X[2] || (X[2] = R("span", { class: "iconfont icon-r-save" }, null, -1)),
                R("span", null, q(p(O)("r.save")), 1)
              ])
            ]),
            Z(P, {
              modelValue: p(r),
              "onUpdate:modelValue": X[1] || (X[1] = (M) => Fe(r) ? r.value = M : null)
            }, {
              default: ne(() => [
                (T(!0), K(ge, null, Ve(p(m), (M, G) => (T(), le(g, {
                  class: "setItem",
                  label: M && M.label,
                  key: "tabSet_" + e.sKey + G,
                  disabled: M && M.disabled
                }, null, 8, ["label", "disabled"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ], 4), [
            [ve, p(s)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [p(Ql), S]
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
function yt(t) {
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
      if (dt(t)) {
        let i = t, u = pe(l);
        if (o(i))
          return n && i[n] && u.push(i[n]), u;
        if (i[e] && !De(i[e])) {
          n && i[n] && u.push(i[n]);
          let f = nl({
            group: i[e],
            condition: o,
            pathKey: n,
            childKey: e,
            path: u
          });
          if (!De(f))
            return f;
        }
      } else if (Array.isArray(t))
        for (let i of t) {
          let u = pe(l);
          if (o(i))
            return n && i[n] ? u.push(i[n]) : u.push(String(t.indexOf(i))), u;
          if (i[e] && i[e].length > 0) {
            n && i[n] ? u.push(i[n]) : u.push(String(t.indexOf(i)));
            let f = nl({
              group: i[e],
              condition: o,
              pathKey: n,
              childKey: e,
              path: u
            });
            if (!De(f))
              return f;
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
  okText: f,
  cancelText: s,
  noWarnIcon: v,
  footerAlign: m,
  cancelBt: c = !0
}) {
  const r = (...C) => Qe.apply(this, C);
  let b = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", k = Q(e) === "String";
  const B = typeof e == "function", _ = "msgbox_" + ++eo;
  He.set(_, !1), lt.warning({
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
                      He.get(_) || (lt.remove(), He.delete(_), u && Q(u) === "Function" && u());
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
                  class: k && !v ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Ae("div", { class: "msgBoxConO" }, B ? [e(Ae)] : e || r("r.info.text"))
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
                    onClick(C) {
                      var E, S, $, L, F, y, I, x, ee;
                      if (l && typeof l == "function") {
                        const N = l();
                        if (N && Q(N) === "Promise") {
                          He.set(_, !0);
                          const w = (C == null ? void 0 : C.currentTarget) || (C == null ? void 0 : C.target);
                          if (w) {
                            (S = (E = w.classList) == null ? void 0 : E.add) == null || S.call(E, "ivu-btn-loading"), (L = ($ = w.nextSibling) == null ? void 0 : $.setAttribute) == null || L.call($, "disabled", "disabled");
                            const X = (I = (y = (F = w.parentElement) == null ? void 0 : F.parentElement) == null ? void 0 : y.querySelector) == null ? void 0 : I.call(y, ".titleN .closeN");
                            (ee = (x = X == null ? void 0 : X.classList) == null ? void 0 : x.add) == null || ee.call(x, "disabled");
                          }
                          Promise.resolve(N).then(() => {
                            He.set(_, !1), lt.remove(), He.delete(_);
                          }).catch(() => {
                            He.set(_, !1), lt.remove(), He.delete(_);
                          });
                        } else
                          lt.remove(), He.delete(_);
                      }
                    }
                  },
                  () => [
                    Ae("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Ae("span", f || r("r.confirm"))
                  ]
                ),
                Ae(
                  Ht,
                  {
                    class: ["cancelBtN", !c && "hide"],
                    onClick() {
                      He.get(_) || (lt.remove(), He.delete(_), Q(i) === "Function" && i && i());
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
  if (e != null && e.spin && Pt(!1), t) {
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
  return new Promise((f, s) => {
    switch (t) {
      case "get":
        Ue.get(o, { params: n }).then((m) => {
          let c = et(m, e, l, i);
          c ? f(c) : s(m);
        }).catch((m) => {
          et({}, e, l, i), s(m);
        });
        break;
      case "delete":
        let v = u ? "params" : "data";
        Ue.delete(o, { [v]: n }).then((m) => {
          let c = et(m, e, l, i);
          c ? f(c) : s(m);
        }).catch((m) => {
          et({}, e, l, i), s(m);
        });
        break;
      case "post":
        Ue.post(o, n, i).then((m) => {
          let c = et(m, e, l, i);
          c ? f(c) : s(m);
        }).catch((m) => {
          et({}, e, l, i), s(m);
        });
        break;
      case "put":
        Ue.put(o, n, i).then((m) => {
          let c = et(m, e, l, i);
          c ? f(c) : s(m);
        }).catch((m) => {
          et({}, e, l, i), s(m);
        });
        break;
    }
  });
}
function Vt(t, o, n = {}, e, l, i, u) {
  return new Promise((f, s) => {
    var v;
    if (o) {
      i && i.spin && Pt(!0);
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
      if (((v = i == null ? void 0 : i.headers) == null ? void 0 : v["Content-Type"]) === "multipart/form-data")
        c = n;
      else if (Array.isArray(n) ? c = [] : c = {}, n && !De(n))
        if (Array.isArray(n)) {
          c = [];
          for (let h of n)
            (h || h === 0 || h === !1 || h === "" && i && !i.noEmptyStr) && c.push(h);
        } else {
          c = {};
          for (let h in n)
            n.hasOwnProperty(h) && (n[h] || n[h] === 0 || n[h] === !1 || n[h] === "" && i && !i.noEmptyStr) && (c[h] = n[h]);
        }
      let r = t.toLowerCase();
      ao(r, m, c, e, l, i, u).then((h) => {
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
    Ue.store = t, Rt = o.config.globalProperties;
  },
  post(t, o, n, e, l) {
    return new Promise((i, u) => {
      Vt("post", t, o, n, e, l).then((f) => {
        i(f);
      }).catch((f) => {
        u(f);
      });
    });
  },
  put(t, o, n, e, l) {
    return new Promise((i, u) => {
      Vt("put", t, o, n, e, l).then((f) => {
        i(f);
      }).catch((f) => {
        u(f);
      });
    });
  },
  get(t, o, n, e, l) {
    return new Promise((i, u) => {
      Vt("get", t, o, n, e, l).then((f) => {
        i(f);
      }).catch((f) => {
        u(f);
      });
    });
  },
  delete(t, o, n, e, l, i = !0) {
    return new Promise((u, f) => {
      Vt("delete", t, o, n, e, l, i).then((s) => {
        u(s);
      }).catch((s) => {
        f(s);
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
    const n = o, e = U(), l = t, i = ((r = Le == null ? void 0 : Le()) == null ? void 0 : r.fontSizeBase) || 14, u = U(16), f = j({
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
        n("on-page-size-change", h), f.value !== 1 && (f.value = 1);
      }
    }), v = j(() => {
      const h = Zn(String(l.total || 0), i) + u.value + 2;
      return h < 32 ? 32 : h;
    });
    Se(
      v,
      (h) => {
        $e(function() {
          c(h);
        });
      },
      { immediate: !0 }
    );
    function m() {
      var _, C, E;
      const h = (E = (C = (_ = e.value) == null ? void 0 : _.$el) == null ? void 0 : C.querySelector) == null ? void 0 : E.call(C, "input");
      if (!h)
        return 16;
      const b = window.getComputedStyle(h), k = b == null ? void 0 : b.paddingLeft, B = b == null ? void 0 : b.paddingRight;
      return !k || !B ? 16 : Number(k.replace("px", "")) + Number(B.replace("px", ""));
    }
    function c(h) {
      var k, B, _;
      const b = (_ = (B = (k = e.value) == null ? void 0 : k.$el) == null ? void 0 : B.querySelector) == null ? void 0 : _.call(B, "input");
      b != null && b.style && (b.style.width = `${h}px`);
    }
    return Ge(() => {
      u.value = m();
    }), (h, b) => {
      const k = te("Page"), B = te("Option"), _ = te("Select");
      return T(), K("div", {
        class: we(["pagePro", { pageProDefault: l.size === "default" }])
      }, [
        l.showTotal ? (T(), K("span", no, q(p(O)("r.total") + " ") + q(l.total) + q(" " + p(O)("r.items")), 1)) : ue("", !0),
        Z(k, {
          ref_key: "pageRef",
          ref: e,
          modelValue: p(f),
          "onUpdate:modelValue": b[0] || (b[0] = (C) => Fe(f) ? f.value = C : null),
          "page-size": p(s),
          total: l.total,
          size: l.size,
          "page-size-opts": l.pageSizeOpts,
          disabled: l.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        l.showSizer ? (T(), K("div", oo, [
          Z(_, {
            modelValue: p(s),
            "onUpdate:modelValue": b[1] || (b[1] = (C) => Fe(s) ? s.value = C : null),
            size: l.size,
            transfer: l.transfer,
            disabled: l.disabled
          }, {
            default: ne(() => [
              (T(!0), K(ge, null, Ve(l.pageSizeOpts, (C) => (T(), le(B, {
                value: C,
                key: C
              }, {
                default: ne(() => [
                  ke(q(C) + " " + q(p(O)("r.page")), 1)
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
    const l = t, i = ((We = Le()) == null ? void 0 : We.pageSizes) || [10, 20, 50, 100], u = U(l.data), f = U(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || l.pageSize
    ), s = U(1), v = U(0);
    let m = [], c, r, h = U(l.orderKey), b = U(l.orderDefault);
    const k = U(300), B = j(() => {
      for (let H of l.columns)
        if (H != null && H.fixed)
          return !0;
      return !1;
    }), _ = j(() => l.selectionFixed || B.value), C = j(() => {
      let H = {
        ...l.searchData,
        current: s.value,
        size: f.value
      };
      return l.sortable === "custom" && (l.orderKeyFormat === "underline" ? H[b.value] = Hl(h.value) : l.orderKeyFormat === "camelcase" && (H[b.value] = Jn(h.value))), H;
    }), E = j(() => {
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
    }), S = j({
      get() {
        return u.value.map((H, z) => Object.assign({}, H, {
          btKey: "bt-" + z,
          btChecked: !!H.btChecked
        }));
      },
      set(H) {
        u.value = H;
      }
    }), $ = j(() => m.map((H) => H == null ? void 0 : H.id)), L = j(() => m.map((H) => H == null ? void 0 : H.btKey)), F = U(), y = U();
    Se(() => l.searchData, I, { deep: !0 }), Se(
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
    function I() {
      s.value = 1, Ie();
    }
    function x() {
      l.initData && Ie();
    }
    function ee(H) {
      u.value.unshift(pe(H)), Re(() => {
        var z, ye;
        (ye = (z = F.value) == null ? void 0 : z.clickCurrentRow) == null || ye.call(z, 0);
      }, 100);
    }
    function N(H, z, ye) {
      let be = null;
      if (typeof z == "number" ? be = z : z && (be = r), be !== null) {
        let _e = u.value[be];
        for (let W in H)
          H.hasOwnProperty(W) && (_e[W] = H[W]);
        ye && Re(() => {
          var W, Ce;
          (Ce = (W = F.value) == null ? void 0 : W.clickCurrentRow) == null || Ce.call(W, be);
        }, 10);
      }
    }
    function w(H) {
      u.value.splice(H, 1), Re(() => {
        var z, ye;
        (ye = (z = F.value) == null ? void 0 : z.clickCurrentRow) == null || ye.call(z, 0);
      }, 100);
    }
    function X(H, z) {
      var ye, be;
      H.btChecked && l.radio || (l.selection || l.radio) && l.rowClickSelect && ((be = (ye = F.value) == null ? void 0 : ye.toggleSelect) == null || be.call(ye, z));
    }
    function D(H, z) {
      c = z.btKey, r = Number(z.btKey.split("-")[1]), l.radio && (u.value[r].btChecked = !0);
    }
    function g(H) {
      if (l.radio)
        for (let z of S.value)
          z != null && z.btKey && z.btKey !== c && (u.value[Number(z.btKey.split("-")[1])].btChecked = !1);
      m = H, e("on-selection-change", H);
    }
    function P() {
      return pe(m);
    }
    function M() {
      Ie();
    }
    function G(H) {
      f.value = H, localStorage.setItem("btPageSize", String(H)), s.value === 1 && Ie();
    }
    function J({ key: H, order: z }) {
      z === "normal" ? (h.value = l.orderKey, b.value = l.orderDefault) : (h.value = H, b.value = z), s.value = 1, Oe();
    }
    function ie(H) {
      var ye, be, _e, W, Ce, ot, it, pt;
      const z = H;
      if (typeof z == "number")
        me(), r = z, c = (be = (ye = S.value) == null ? void 0 : ye[z]) == null ? void 0 : be.btKey, (W = (_e = F.value) == null ? void 0 : _e.clickCurrentRow) == null || W.call(_e, z);
      else if (Array.isArray(z)) {
        if (l.radio || !l.selection)
          return;
        me();
        for (let Xe of z)
          (ot = (Ce = F.value) == null ? void 0 : Ce.clickCurrentRow) == null || ot.call(Ce, Xe);
      } else if (typeof z == "function")
        for (let Xe = 0; Xe < S.value.length; Xe++) {
          const Ct = S.value[Xe];
          z(Ct) && ((pt = (it = F.value) == null ? void 0 : it.clickCurrentRow) == null || pt.call(it, Xe));
        }
    }
    function me() {
      var H, z;
      if (l.radio) {
        if (L.value.length > 0 && S.value.length > 0) {
          let ye = L.value[0].split("-")[1];
          S.value[ye].btChecked = !1;
        }
      } else
        (z = (H = F.value) == null ? void 0 : H.selectAll) == null || z.call(H, !1);
      m.length > 0 && (m = [], e("on-selection-change", [])), c = null, r = null;
    }
    function he() {
      u.value = [], me(), s.value = 1, v.value = 0;
    }
    function Oe(H, z, ye) {
      return new Promise((be) => {
        H && (b.value = H), z && (h.value = z), l.url ? qe[l.method](l.url, C.value, "", [], { spin: l.getDataLoading }).then((_e) => {
          var Ce, ot;
          let W;
          ye || me(), typeof l.dataHandler == "function" ? W = l.dataHandler(_e) : W = _e, W.data ? (W.data.records || W.data.records === null ? u.value = W.data.records || [] : W.data.page ? (W.data.page.records || W.data.page.records === null) && (u.value = W.data.page.records || []) : W.data.data ? (W.data.data.records || W.data.data.records === null) && (u.value = W.data.data.records || []) : u.value = W.data, v.value = ((Ce = W.data.page) == null ? void 0 : Ce.total) || ((ot = W.data.data) == null ? void 0 : ot.total) || W.data.total || W.total || 0, v.value === 0 && s.value > 1 && u.value && u.value.length === 0 ? s.value = 1 : s.value > 1 && v.value <= (s.value - 1) * f.value && (s.value--, $e(function() {
            Oe(H, z);
          })), e("on-data-change", W), be(W)) : (console.warn("请求返回数据有误，无法使用"), he(), e("on-data-change", W));
        }).catch((_e) => {
          me(), he(), e("on-data-change", _e);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Ie(H, z, ye) {
      l.radio && (H || l.rowClickNum !== -1) ? Oe(z, ye, H).then(() => {
        u.value.length > 0 && Re(() => {
          var be, _e, W, Ce;
          H ? (_e = (be = F.value) == null ? void 0 : be.clickCurrentRow) == null || _e.call(be, r || 0) : (Ce = (W = F.value) == null ? void 0 : W.clickCurrentRow) == null || Ce.call(W, l.rowClickNum);
        }, 10);
      }) : Oe();
    }
    function ae() {
      k.value < 50 ? Re(ae, 100) : Re(xe, 10);
    }
    function xe() {
      var H;
      k.value = ((H = y.value) == null ? void 0 : H.clientHeight) || 0;
    }
    function Pe() {
      var H, z;
      xe(), (z = (H = F.value) == null ? void 0 : H.handleResize) == null || z.call(H);
    }
    const Ze = Dt(Pe, 300);
    return Ge(() => {
      x(), _.value && (ae(), window.addEventListener("resize", Ze));
    }), ul(() => {
      Ze.cancel(), _.value && window.removeEventListener("resize", Ze);
    }), o({
      dataS: S,
      selectedIds: $,
      addRow: ee,
      setRowData: N,
      deleteRow: w,
      getSelected: P,
      selectRow: ie,
      clearSelect: me,
      clearTableData: he,
      getTableData: Oe,
      getDataAndClickRow: Ie
    }), (H, z) => {
      const ye = te("Table"), be = te("Page");
      return T(), K("div", io, [
        fe(R("div", so, [
          Ne(H.$slots, "tableSetting"),
          Ne(H.$slots, "topMsg"),
          Ne(H.$slots, "topBtnGroup")
        ], 512), [
          [ve, l.showTopRow]
        ]),
        R("div", ro, [
          R("div", uo, [
            R("div", {
              ref_key: "tableContainerLOI",
              ref: y,
              class: "fullFlowContent"
            }, [
              Z(ye, ft({
                ref_key: "tableRef",
                ref: F
              }, H.$attrs, {
                height: p(_) && p(k) || null,
                class: { noBorderTable: l.noBorderTable, fullHeightTable: !p(_), lightHeadO: l.lightHead },
                columns: p(E),
                data: p(S),
                "highlight-row": l.radio || l.highlightRow,
                onOnSelect: D,
                onOnSelectionChange: g,
                onOnSortChange: J,
                onOnRowClick: X
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        fe(R("div", co, [
          l.usePagePro ? (T(), le(la, {
            key: 0,
            modelValue: p(s),
            "onUpdate:modelValue": z[0] || (z[0] = (_e) => Fe(s) ? s.value = _e : null),
            total: p(v),
            showTotal: l.showTotal,
            pageSize: p(f),
            showSizer: l.showSizer,
            pageSizeOpts: p(i),
            size: l.pageComponentSize,
            onOnChange: M,
            onOnPageSizeChange: G
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (T(), le(be, {
            key: 1,
            modelValue: p(s),
            "onUpdate:modelValue": z[1] || (z[1] = (_e) => Fe(s) ? s.value = _e : null),
            total: p(v),
            pageSize: p(f),
            pageSizeOpts: p(i),
            showSizer: l.showSizer,
            showTotal: l.showTotal,
            size: l.pageComponentSize,
            showElevator: !l.noElevator,
            onOnChange: M,
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
    const n = o, e = t, { onCompositionStart: l, onCompositionEnd: i, handleChange: u } = Et(), f = j({
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
    }), s = j({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(h) {
        n("update:modelValue", {
          key: f.value,
          val: h
        });
      }
    }), v = j(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), m = j(() => ({
      width: typeof e.itemWidth == "number" ? e.itemWidth + "px" : e.itemWidth
    }));
    function c(h) {
      u(() => {
        h != null && h.target && h.target.value !== void 0 && r({
          key: f.value,
          val: h.target.value
        });
      });
    }
    const r = Dt((h) => {
      n("on-change", h);
    }, 500);
    return nt(() => {
      r.cancel();
    }), (h, b) => {
      const k = te("Option"), B = te("Select"), _ = te("Input");
      return T(), K("div", null, [
        Z(B, {
          modelValue: p(f),
          "onUpdate:modelValue": b[0] || (b[0] = (C) => Fe(f) ? f.value = C : null),
          style: re(p(v)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: ne(() => [
            (T(!0), K(ge, null, Ve(e.selectOption, (C, E) => (T(), le(k, {
              value: C == null ? void 0 : C.val,
              label: C == null ? void 0 : C.label,
              key: "selectInputOp" + (C == null ? void 0 : C.value) + E,
              style: re({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        Z(_, {
          modelValue: p(s),
          "onUpdate:modelValue": b[1] || (b[1] = (C) => Fe(s) ? s.value = C : null),
          placeholder: e.placeholder || p(O)("r.pInput"),
          style: re(p(m)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onCompositionstart: p(l),
          onCompositionend: p(i),
          onOnChange: c
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
        let w;
        return e.modelValue ? e.modelValue.name ? w = pe(e.modelValue) : w = {
          ...e.modelValue,
          name: null
        } : w = {
          name: null
        }, w;
      },
      set(w) {
        n("update:modelValue", pe(w));
      }
    }), f = j(() => Bt(e.width) ? e.width + "px" : e.width), s = j(() => Bt(e.height) ? e.height + "px" : e.height ? e.height : Bt(e.width) ? e.width * 0.66 + "px" : "200px"), v = j(() => ({
      width: f.value,
      position: "relative"
    })), m = j(() => e.inputInMap ? {
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
      (w) => {
        if (w != null && w.name && (l.value = w.name), e.showMap && w && w.lng && w.lat) {
          if (!$ || !L)
            return;
          ee({
            lng: w.lng,
            lat: w.lat,
            name: w.name
          });
        }
      }
    );
    const c = "mapId" + Math.floor(Math.random() * 1e9), r = U(null), h = U(null);
    let b;
    const { onCompositionStart: k, onCompositionEnd: B, handleSearch: _ } = Et();
    function C() {
      h.value && h.value.clientHeight < 10 || !h.value ? Re(C, 300) : Re(y, 100);
    }
    function E() {
      var w;
      (w = e.modelValue) != null && w.name && (l.value = e.modelValue.name);
    }
    let S, $, L, F;
    function y() {
      Wt.load({
        key: Il("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((w) => {
        S = w, $ = new S.Map(c).on("complete", () => {
          var X, D;
          L = new S.Geocoder(), (X = e.modelValue) != null && X.lng && ((D = e.modelValue) != null && D.lat) && ee({
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
          if (e.showMap && !$) {
            console.warn("地图未就绪，请稍后重试");
            return;
          }
          Wt.load({
            key: Il("key"),
            version: "2.0",
            plugins: ["AMap.AutoComplete"]
          }).then((w) => {
            F || (F = new w.Autocomplete({
              city: "全国",
              type: ""
            })), F.search(l.value, (X, D) => {
              X === "complete" && D.info === "OK" ? i.value = D.tips.slice(0, 10).filter(
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
              }) : (i.value = [], console.warn("地址搜索失败", D));
            });
          });
        }
      });
    }
    function x(w) {
      l.value = w.name, i.value = [], typeof w.lng == "number" && typeof w.lat == "number" ? (e.showMap && ee({
        name: w.name,
        lng: w.lng,
        lat: w.lat
      }), u.value = {
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
          }), u.value = {
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
      }) : (u.value = {
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
      if (!$) {
        console.warn("地图实例不存在");
        return;
      }
      $ == null || $.clearMap();
      let g = new S.LngLat(w, X);
      $ == null || $.setCenter(g);
      let P = new S.Marker({
        map: $,
        position: g,
        draggable: !0
      });
      N(w, X), P.on("dragend", () => {
        let M = P.getPosition();
        u.value = {
          name: D || null,
          lng: M.lng,
          lat: M.lat
        }, N(M.lng, M.lat);
      }), P.on("click", (M) => {
        var G, J;
        b && b.open($, (J = (G = M == null ? void 0 : M.target) == null ? void 0 : G.getPosition) == null ? void 0 : J.call(G));
      }), $ == null || $.setFitView();
    }
    function N(w, X) {
      const D = e.inputInMap ? "mapInfoWindowIKJ" : "mapInfoWindowMA";
      L == null || L.getAddress([w, X], (g, P) => {
        g === "complete" && P.info === "OK" && P.regeocode && P.regeocode.formattedAddress ? b = new S.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="' + D + '">' + P.regeocode.formattedAddress + "</div>",
          offset: new S.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (b = null, console.warn("地图获取位置信息失败", P));
      });
    }
    return Ge(() => {
      E(), C();
    }), nt(() => {
      var w;
      $ && ($.destroy(), (w = Wt) == null || w.reset(), $ = null, L = null, F = null, b = null);
    }), (w, X) => (T(), K("div", {
      style: re(p(v)),
      class: we(e.inputInMap ? "containerIKJ" : "containerMapAddress")
    }, [
      R("div", po, [
        Z(p(Aa), {
          ref_key: "mapInputRef",
          ref: r,
          modelValue: p(l),
          "onUpdate:modelValue": X[0] || (X[0] = (D) => Fe(l) ? l.value = D : null),
          class: we(e.inputInMap && e.showMap ? { mapInputIKJ: !0 } : "searchInput"),
          placeholder: e.placeholder || p(O)("r.search"),
          disabled: e.disabled,
          search: "",
          "enter-button": "",
          onCompositionstart: p(k),
          onCompositionend: p(B),
          onOnEnter: I,
          onOnSearch: I
        }, null, 8, ["modelValue", "class", "placeholder", "disabled", "onCompositionstart", "onCompositionend"]),
        fe(R("div", mo, [
          R("div", ho, [
            (T(!0), K(ge, null, Ve(p(i), (D, g) => (T(), K("div", {
              key: g,
              class: "addressItem",
              onClick: (P) => x(D)
            }, [
              R("span", vo, q(D.name), 1),
              typeof D.address == "string" ? (T(), K("span", go, q(D.address), 1)) : ue("", !0)
            ], 8, yo))), 128))
          ])
        ], 512), [
          [ve, p(i).length > 0]
        ])
      ]),
      fe(R("div", {
        style: re(p(m)),
        ref_key: "mapRef",
        ref: h,
        id: c
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
        return Array.isArray(m) ? pe(m) : Bt(m) ? nl({
          group: l.value,
          condition: (c) => (c == null ? void 0 : c.value) === m,
          pathKey: "value"
        }) : zl(m) ? m.split(e.separator) : [];
      },
      set(m) {
        if (e.onlyLastVal)
          De(m) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", xt(m));
        else {
          if (kt(e.modelValue, m))
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
        let c = null;
        (r = m == null ? void 0 : m.data) != null && r.records ? c = m.data.records : m != null && m.data ? c = m.data : m && (c = m), c ? (typeof e.optionFilter == "function" && Q(e.optionFilter) === "Function" && (c = e.optionFilter(c)), l.value = f(c)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function f(m) {
      let c = [];
      for (let r of m) {
        let h = {
          value: r[e.optionVal],
          label: r[e.optionLabel]
        };
        r != null && r.children && !De(r.children) && (h.children = f(r.children)), c.push(h);
      }
      return c;
    }
    function s(m) {
      return e.onlyLastLabel ? xt(m) : m.join(e.separator);
    }
    function v(m, c) {
      let r = "";
      De(c) || (r = c.map((h) => h == null ? void 0 : h.label).join(e.separator)), n("on-label-change", r);
    }
    return Ge(u), (m, c) => {
      const r = te("Cascader");
      return T(), le(r, {
        data: p(l),
        modelValue: p(i),
        "onUpdate:modelValue": c[0] || (c[0] = (h) => Fe(i) ? i.value = h : null),
        onOnChange: v,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": s,
        placeholder: e.placeholder || p(O)("r.pSelect"),
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
          let u = xt(i), f = "", s = "";
          if (u && (f = u.code), f && f.length < 12) {
            let v = [...f];
            for (; v.length < 12; )
              v.push(0);
            f = v.join("");
          }
          if (Array.isArray(i) && (s = i.map((v) => v == null ? void 0 : v.name).join(e.separator)), f) {
            if (f === e.modelValue)
              return;
            n("update:modelValue", f);
          }
          s && n("on-name-change", s);
        }
      }
    });
    return (i, u) => (T(), le(p(Ra), ft(i.$attrs, {
      class: "alCascaderMC",
      modelValue: p(l),
      "onUpdate:modelValue": u[0] || (u[0] = (f) => Fe(l) ? l.value = f : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || p(O)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let Ye = 0, vt = [];
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
function gt(t, o = 0) {
  var _, C, E, S, $, L, F;
  const n = (...y) => Qe.apply(this, y), e = n("r.closePreview"), l = n("r.fullImg"), i = n("r.last"), u = n("r.next");
  let f, s, v;
  Ye = o;
  const m = Array.isArray(t);
  m ? (s = ((_ = t[Ye]) == null ? void 0 : _.src) ?? t[Ye], v = (C = t[Ye]) == null ? void 0 : C.name) : s = t, m && t.length > 1 ? f = `${i} ： ←, ↑, A, W | ${u} ： →, ↓, D, S | ${e} ： Esc` : f = `${e} ： Esc`;
  let c = Xt(document.getElementsByTagName("body")), r = document.createElement("div");
  r.setAttribute("class", "fullScreenImgByDom"), r.innerHTML = `<div class='previewInner'><div class='pageFBt left${m && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${i}' ></i></div><img alt='${l}' ><div class='pageFBt right${m && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${u}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${f}</p><p class='pName ${v ? "" : "hide"}'>${v}</p>`;
  const h = r.querySelector("img");
  h && s && (h.src = s);
  function b() {
    let y = Xt(document.getElementsByTagName("body"));
    y && r.parentNode && y.removeChild(r), document.removeEventListener("keyup", B);
    const I = vt.findIndex((x) => x.child === r);
    I > -1 && vt.splice(I, 1);
  }
  (S = (E = r.querySelector(".ivu-icon-md-close")) == null ? void 0 : E.addEventListener) == null || S.call(E, "click", b);
  const k = r.querySelector(".pName");
  ($ = r.querySelector(".pageFBt.left")) == null || $.addEventListener("click", function() {
    Al(m, t, h, k);
  }), (L = r.querySelector(".pageFBt.right")) == null || L.addEventListener("click", function() {
    Pl(m, t, h, k);
  });
  function B(y) {
    const I = vt[vt.length - 1];
    (I == null ? void 0 : I.child) === r && (y.keyCode === 37 || y.keyCode === 38 || y.keyCode === 87 || y.keyCode === 65 ? Al(m, t, h, k) : y.keyCode === 39 || y.keyCode === 40 || y.keyCode === 83 || y.keyCode === 68 ? Pl(m, t, h, k) : y.keyCode === 27 && b());
  }
  vt.push({ child: r, keyupHandler: B }), document.addEventListener("keyup", B), (F = c == null ? void 0 : c.appendChild) == null || F.call(c, r), r.focus({ preventScroll: !0 });
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
}, Po = { class: "listLoading" }, Mo = ["onClick", "title"], Ro = { class: "btBoxJ" };
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
    const n = o, e = t, l = bt([]), i = bt([]), u = bt([]);
    let f = {};
    const s = U(0), v = j(() => !e.manualUpload && e.showImg && h.value ? "img" : e.manualUpload && e.showImg && h.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !h.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !h.value) ? "list" : ""), m = j(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), c = j({
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
      if (e.manualUpload ? g = c.value : g = i.value, !g)
        return !1;
      for (let P of g) {
        let M;
        if (e.manualUpload ? M = P == null ? void 0 : P.type : M = P == null ? void 0 : P.mimeType, !M || M && !(yt(M) || M === "loading"))
          return !1;
      }
      return !0;
    }), b = j(() => i.value.filter((g) => yt(g == null ? void 0 : g.mimeType))), k = j(() => b.value.map((g) => ({
      src: e.url + "/" + (g == null ? void 0 : g.id) + "/download?preview=true",
      name: g == null ? void 0 : g.name
    }))), B = j(() => c.value.filter((g) => yt(g == null ? void 0 : g.type)));
    Se(B, async (g) => {
      u.value = await C(g);
    }), Se(
      () => c.value,
      async (g) => {
        if (v.value === "localImg")
          g != null && g.length ? l.value = await C(g) : l.value = [];
        else if (g != null && g.length && v.value !== "localList") {
          let P = pe(g);
          const M = pe(i.value);
          for (let G of P)
            if ((G == null ? void 0 : G.name) === void 0)
              if (G.id) {
                const J = Jt(M, (ie) => (ie == null ? void 0 : ie.id) === G.id);
                J ? (G.name = J.name, G.mimeType = J.mimeType) : f.hasOwnProperty(G.id) ? (G.name = f[G.id].name, G.mimeType = f[G.id].mimeType) : (G.mimeType = "loading", qe.get(e.url + "/" + G.id).then((ie) => {
                  var me, he, Oe, Ie, ae, xe;
                  G.name = ((Oe = (he = (me = ie == null ? void 0 : ie.data) == null ? void 0 : me.returnValue) == null ? void 0 : he[0]) == null ? void 0 : Oe.name) || O("r.file") + kl(g, G), G.mimeType = ((xe = (ae = (Ie = ie == null ? void 0 : ie.data) == null ? void 0 : Ie.returnValue) == null ? void 0 : ae[0]) == null ? void 0 : xe.mimeType) || "unknown", Ca(i);
                }).catch(() => {
                  G.name = O("r.file") + kl(P, G);
                }));
              } else
                G.name = O("r.unknown");
          i.value = P;
        } else
          i.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function _(g) {
      return (g == null ? void 0 : g.name) || (g == null ? void 0 : g.split) && xt(g.split("/")) || g;
    }
    async function C(g) {
      let P = [];
      for (let M of g) {
        let G = await Bl(M);
        P.push(G);
      }
      return P;
    }
    function E(g) {
      if (!e.disabled) {
        let P = c.value;
        P == null || P.splice(g, 1), c.value = P, s.value && s.value--;
      }
    }
    function S(g) {
      g != null && g.id && window.open(e.url + "/" + g.id + "/download");
    }
    function $(g) {
      return e.manualUpload ? (g == null ? void 0 : g.type) && yt(g.type) : (g == null ? void 0 : g.id) && g.mimeType && yt(g.mimeType);
    }
    async function L(g) {
      if (e.manualUpload) {
        let P, M;
        if (typeof g == "number" ? (P = g, M = l.value) : g && (P = Ot(B.value, (G) => G.size === g.size && G.lastModified === g.lastModified), M = u.value), !M)
          return;
        gt(
          M.map((G, J) => {
            var ie;
            return {
              src: G,
              name: (ie = B.value[J]) == null ? void 0 : ie.name
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
      Q(g) === "String" && g.indexOf("http") > -1 ? window.open(g) : Q(g) === "File" && Bl(g).then((P) => {
        Yn(g.name, P);
      });
    }
    function y(g) {
      var P, M;
      if (e.length && s.value >= e.length)
        return Ke(O("r.info.title"), O("r.uploadLength", [e.length]), "warning"), !1;
      if (s.value++, e.manualUpload) {
        if (g) {
          let G = ta(g.name);
          if ((P = e.format) != null && P.length && e.format.indexOf(G) < 0)
            return Ke(
              O("r.wrongFileType"),
              O("r.supportType") + (((M = e.format) == null ? void 0 : M.length) && String(e.format) || O("r.none")),
              "warning"
            ), s.value--, !1;
          if (e.maxSize && g.size > e.maxSize * 1024)
            return Ke(O("r.fileIsBig"), O("r.supportSize") + e.maxSize + "kb", "warning"), s.value--, !1;
          let J = c.value;
          J == null || J.push(g), c.value = J;
        }
        return !1;
      } else
        return !0;
    }
    function I(g) {
      s.value--, console.warn(g), Ke(O("r.uploadError"), "", "error");
    }
    function x(g, P, M) {
      var G, J, ie, me, he, Oe;
      if ((g == null ? void 0 : g.code) === 0) {
        let Ie = c.value;
        P.id = (J = (G = g.data) == null ? void 0 : G[0]) == null ? void 0 : J.id, P.name = (me = (ie = g.data) == null ? void 0 : ie[0]) == null ? void 0 : me.name, P.mimeType = (Oe = (he = g.data) == null ? void 0 : he[0]) == null ? void 0 : Oe.mimeType, f[P.id] = { name: P.name, mimeType: P.mimeType }, Ie == null || Ie.push(P), c.value = Ie;
      } else
        s.value--, Ke(O("r.uploadFail"), (g == null ? void 0 : g.message) || "", "error");
    }
    function ee() {
      s.value--, Ke(O("r.fileIsBig"), O("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function N() {
      var g;
      s.value--, Ke(
        O("r.wrongFileType"),
        O("r.supportType") + (((g = e.format) == null ? void 0 : g.length) && String(e.format) || O("r.none")),
        "warning"
      );
    }
    function w(g) {
      let P = g == null ? void 0 : g.id, M = g == null ? void 0 : g.mimeType;
      P && (Q(M) === "String" && M.indexOf("image") > -1 ? gt(e.url + "/" + P + "/download?preview=true") : window.open(e.url + "/" + P + "/download?preview=true"));
    }
    function X(g) {
      var M, G, J;
      let P = (J = (G = (M = g == null ? void 0 : g.response) == null ? void 0 : M.data) == null ? void 0 : G[0]) == null ? void 0 : J.id;
      D(null, P);
    }
    function D(g, P) {
      if (!(!P && P !== 0) && !e.disabled && r.value.indexOf(P) !== -1) {
        const M = pe(r.value);
        let G = c.value;
        G == null || G.splice(M.indexOf(P), 1), c.value = G, s.value && s.value--;
      }
    }
    return (g, P) => {
      var ie, me, he, Oe, Ie;
      const M = te("Button"), G = te("Upload"), J = te("Icon");
      return T(), K("div", null, [
        Z(G, {
          name: "files",
          action: p(m),
          "before-upload": y,
          "on-error": I,
          "on-success": x,
          "on-exceeded-size": ee,
          "on-preview": w,
          "on-remove": X,
          "on-format-error": N,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && ((ie = p(c)) == null ? void 0 : ie.length) >= e.length || !!e.disabled
        }, {
          default: ne(() => {
            var ae;
            return [
              Z(M, {
                icon: "md-cloud-upload",
                disabled: e.length > 0 && ((ae = p(c)) == null ? void 0 : ae.length) >= e.length || !!e.disabled
              }, {
                default: ne(() => [
                  ke(q(p(O)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        p(v) === "img" && ((me = p(i)) == null ? void 0 : me.length) > 0 ? (T(), K("div", bo, [
          (T(!0), K(ge, null, Ve(p(i), (ae, xe) => (T(), K(ge, {
            key: ae == null ? void 0 : ae.id
          }, [
            !e.manualUpload && (ae == null ? void 0 : ae.id) !== null ? (T(), K("div", {
              key: 0,
              class: we(["previewImg", { previewLoading: ae.mimeType === "loading" }])
            }, [
              fe(R("div", ko, P[0] || (P[0] = [
                R("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ve, ae.mimeType === "loading"]
              ]),
              fe(R("img", {
                src: g.url + "/" + ae.id + "/download?preview=true",
                alt: ae.name
              }, null, 8, wo), [
                [ve, ae.mimeType !== "loading"]
              ]),
              fe(R("div", _o, [
                Z(J, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: p(O)("r.fView"),
                  onClick: (Pe) => p(gt)(p(k), xe)
                }, null, 8, ["title", "onClick"]),
                Z(J, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Pe) => D(Pe, ae.id),
                  title: p(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ve, ae.mimeType !== "loading"]
              ])
            ], 2)) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        p(v) === "localImg" && ((he = p(l)) == null ? void 0 : he.length) > 0 ? (T(), K("div", Co, [
          (T(!0), K(ge, null, Ve(p(l), (ae, xe) => (T(), K(ge, {
            key: "manualImg" + xe
          }, [
            e.manualUpload && ae !== null ? (T(), K("div", So, [
              R("img", {
                src: ae,
                alt: "manualImg" + xe
              }, null, 8, Vo),
              R("div", To, [
                Z(J, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (Pe) => L(xe),
                  title: p(O)("r.fView")
                }, null, 8, ["onClick", "title"]),
                Z(J, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Pe) => E(xe),
                  title: p(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        p(v) === "localList" && ((Oe = p(c)) == null ? void 0 : Oe.length) > 0 ? (T(), K("div", Bo, [
          (T(!0), K(ge, null, Ve(p(c), (ae, xe) => (T(), K(ge, {
            key: "manualItem" + xe
          }, [
            e.manualUpload && ae !== null ? (T(), K("p", Lo, [
              ae.name ? (T(), le(J, {
                key: 0,
                class: "fileTypeIco",
                type: p(Ll)(ae.name),
                size: "20"
              }, null, 8, ["type"])) : ue("", !0),
              R("span", {
                class: we(["upNameT", { previewName: $(ae) }]),
                onClick: (Pe) => F(ae),
                title: p(O)("r.download")
              }, q(_(ae)), 11, xo),
              R("span", Oo, [
                $(ae) ? (T(), le(J, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => L(ae),
                  title: p(O)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                Z(J, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => E(xe),
                  title: p(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        p(v) === "list" && ((Ie = p(i)) == null ? void 0 : Ie.length) > 0 ? (T(), K("div", Io, [
          (T(!0), K(ge, null, Ve(p(i), (ae, xe) => (T(), K(ge, {
            key: "defaultItem" + xe
          }, [
            !e.manualUpload && ae ? (T(), K("div", Ao, [
              fe(R("div", Po, P[1] || (P[1] = [
                R("div", {
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
              fe(R("span", {
                class: "upNameT",
                onClick: (Pe) => S(ae),
                title: p(O)("r.download")
              }, q(ae.name || p(O)("r.file") + (xe + 1)), 9, Mo), [
                [ve, ae.mimeType !== "loading"]
              ]),
              fe(R("span", Ro, [
                $(ae) ? (T(), le(J, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => L(ae),
                  title: p(O)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                Z(J, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (Pe) => E(xe),
                  title: p(O)("r.delete")
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
    const n = o, e = t, l = U(!1), i = U(!1), u = U(!1), f = j({
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
    }), v = j(
      () => (f.value || "") + ((f.value || s.value) && " - " || "") + (s.value || "")
    ), m = U(), c = U(null), r = () => {
      u.value = !0;
    }, h = () => {
      u.value = !1;
    }, b = (S) => {
      var $;
      !e.disabled && (f.value || s.value) && (($ = S == null ? void 0 : S.stopPropagation) == null || $.call(S), C());
    };
    Ge(() => {
      c.value = m.value.querySelector(".aRoot .ivu-input-suffix"), c.value && (c.value.addEventListener("mouseover", r), c.value.addEventListener("mouseout", h), c.value.addEventListener("click", b));
    }), nt(() => {
      c.value && (c.value.removeEventListener("mouseover", r), c.value.removeEventListener("mouseout", h), c.value.removeEventListener("click", b));
    });
    function k() {
      e.disabled || (l.value = !0);
    }
    function B(S) {
      f.value = S, l.value = !1, i.value = !0;
    }
    function _(S) {
      s.value = S, i.value = !1;
    }
    function C() {
      n("update:modelValue", [null, null]), n("on-change", [null, null]);
    }
    function E() {
      l.value = !1, i.value = !1, f.value && s.value === null && (f.value = null);
    }
    return (S, $) => {
      const L = te("DatePicker"), F = te("Icon"), y = te("Input");
      return T(), K("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: m
      }, [
        Z(L, {
          open: p(i),
          modelValue: p(s),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: _,
          onOnClickoutside: E
        }, {
          default: ne(() => $[1] || ($[1] = [
            R("div", { class: "bRoot" }, null, -1)
          ])),
          _: 1,
          __: [1]
        }, 8, ["open", "modelValue", "placement", "options"]),
        Z(L, {
          open: p(l),
          modelValue: p(f),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: B,
          onOnClickoutside: E
        }, {
          default: ne(() => [
            R("div", { onClick: k }, [
              Z(y, {
                class: "aRoot",
                modelValue: p(v),
                "onUpdate:modelValue": $[0] || ($[0] = (I) => Fe(v) ? v.value = I : null),
                readonly: "",
                placeholder: e.placeholder || p(O)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: ne(() => [
                  Z(F, {
                    type: p(u) && (p(f) || p(s)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
    const n = o, e = t, l = U(), i = "date-c-r-" + Math.floor(Math.random() * 1e7 + 1e7), u = U({}), f = j({
      get() {
        return e.modelValue;
      },
      set(m) {
        n("update:modelValue", m);
      }
    }), s = j(() => {
      if (Q(e.options) === "Object") {
        const { disabledDate: m, ...c } = e.options;
        return c;
      }
      return {};
    });
    function v(m) {
      var r, h;
      const c = m.target;
      ((h = (r = c.classList) == null ? void 0 : r.contains) != null && h.call(r, "ivu-date-picker-cells-cell") || c.tagName === "EM") && Re(() => {
        var k, B;
        const b = (B = (k = l == null ? void 0 : l.value) == null ? void 0 : k.$refs.pickerPanel) == null ? void 0 : B.rangeState;
        if (b) {
          const _ = b.from, C = b.selecting;
          u.value = {
            ...s.value,
            disabledDate: (E) => {
              var S;
              return typeof ((S = e.options) == null ? void 0 : S.disabledDate) == "function" ? e.options.disabledDate(E, _, C) : !1;
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
      var c;
      const m = document.getElementsByClassName(i)[0];
      (c = m == null ? void 0 : m.addEventListener) == null || c.call(m, "click", v, !0);
    }), nt(() => {
      var c;
      const m = document.getElementsByClassName(i)[0];
      (c = m == null ? void 0 : m.removeEventListener) == null || c.call(m, "click", v, !0);
    }), (m, c) => {
      const r = te("DatePicker");
      return T(), le(r, {
        ref_key: "dateC",
        ref: l,
        modelValue: p(f),
        "onUpdate:modelValue": c[0] || (c[0] = (h) => Fe(f) ? f.value = h : null),
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
    const n = o, e = t, l = bt(), i = j({
      get() {
        return e.modelValue;
      },
      set(m) {
        n("update:modelValue", m), n("on-change", m);
      }
    }), u = j(
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
    ), f = j(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(m, c) {
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
                      for (let B of k.data) {
                        const _ = b + "/" + (B == null ? void 0 : B.id) + "/download";
                        c(_, h, _);
                      }
                    else {
                      const B = b + "/" + k.data.id + "/download";
                      c(B, h, B);
                    }
                }).catch(() => {
                  Ke(O("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(m, c) {
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
                        const B = h + "/" + (k == null ? void 0 : k.id) + "/download";
                        c(B);
                      }
                    else {
                      const k = h + "/" + b.data.id + "/download";
                      c(k);
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
    ), s = j(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function v(m) {
      l.value = m;
    }
    return Se(
      () => e.disabled,
      (m) => {
        m ? l.value.disable() : l.value.enable();
      }
    ), ul(() => {
      l.value && l.value.destroy();
    }), (m, c) => (T(), K("div", $o, [
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
        "onUpdate:modelValue": c[0] || (c[0] = (r) => Fe(i) ? i.value = r : null),
        defaultConfig: p(f),
        mode: m.mode,
        onOnCreated: v,
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
}, Ml = /* @__PURE__ */ ce({
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
        const r = (c = e.itemStyle) == null ? void 0 : c.width;
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
    function u(c, r) {
      n("item-change", {
        e: c,
        root: r
      });
    }
    function f(c, r) {
      n("re-validate", {
        e: c,
        root: r
      });
    }
    function s(c) {
      n("select-input-change", c);
    }
    function v(c, r) {
      n("al-name-change", {
        name: c,
        root: r
      });
    }
    function m(c, r) {
      n("async-label-change", {
        label: c,
        root: r
      });
    }
    return (c, r) => {
      const h = te("InputNumber"), b = te("Input"), k = te("Option"), B = te("Select"), _ = te("Radio"), C = te("Icon"), E = te("RadioGroup"), S = te("Checkbox"), $ = te("CheckboxGroup"), L = te("TimePicker"), F = te("FormItem");
      return e.item ? (T(), le(F, {
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
            "onUpdate:modelValue": r[0] || (r[0] = (y) => e.tempKeys[e.item.tempKey] = y),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || p(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: r[1] || (r[1] = (y) => u(y, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (T(), le(b, {
            key: 2,
            style: re(c.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[2] || (r[2] = (y) => e.tempKeys[e.item.tempKey] = y),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || p(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: r[3] || (r[3] = (y) => u(y, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, ct({ _: 2 }, [
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
                R("span", null, q(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: ne(() => [
                R("span", null, q(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (T(), le(B, {
            key: 3,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[4] || (r[4] = (y) => c.tempKeys[e.item.tempKey] = y),
            style: re(c.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || p(O)("r.pSelect"),
            onOnChange: r[5] || (r[5] = (y) => f(y, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: ne(() => [
              (T(!0), K(ge, null, Ve(e.item.options, (y, I) => (T(), le(k, {
                value: y.val,
                label: y.label || y.val,
                key: "option-" + e.item.key + I,
                disabled: !!y.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (T(), le(aa, {
            key: 4,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[6] || (r[6] = (y) => c.tempKeys[e.item.tempKey] = y),
            "label-width": c.labelWidth,
            "item-width": p(l),
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || p(O)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: s
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (T(), le(ia, {
            key: 5,
            style: re(c.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[7] || (r[7] = (y) => e.valGroup[e.item.key] = y),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || p(O)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: r[8] || (r[8] = (y) => v(y, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (T(), le(oa, {
            key: 6,
            style: re(c.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[9] || (r[9] = (y) => e.valGroup[e.item.key] = y),
            url: e.item.url || c.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || p(O)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: r[10] || (r[10] = (y) => m(y, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (T(), le(_, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[11] || (r[11] = (y) => e.valGroup[e.item.key] = y),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: r[12] || (r[12] = (y) => u(y, e.item))
          }, {
            default: ne(() => [
              ke(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (T(), le(E, {
            key: 8,
            style: re(c.itemStyle),
            onOnChange: r[13] || (r[13] = (y) => f(y, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[14] || (r[14] = (y) => c.tempKeys[e.item.tempKey] = y)
          }, {
            default: ne(() => [
              (T(!0), K(ge, null, Ve(e.item.options, (y) => (T(), le(_, {
                key: "radioItem" + y.val,
                label: y.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || y.disabled
              }, {
                default: ne(() => [
                  y.icon && !e.item.buttonType ? (T(), le(C, {
                    key: 0,
                    type: y.icon
                  }, null, 8, ["type"])) : ue("", !0),
                  R("span", null, q(y.label || y.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (T(), le(S, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[15] || (r[15] = (y) => e.valGroup[e.item.key] = y),
            disabled: !!e.item.disabled,
            onOnChange: r[16] || (r[16] = (y) => u(y, e.item))
          }, {
            default: ne(() => [
              ke(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (T(), le($, {
            key: 10,
            style: re(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[17] || (r[17] = (y) => c.tempKeys[e.item.tempKey] = y),
            onOnChange: r[18] || (r[18] = (y) => f(y, e.item))
          }, {
            default: ne(() => [
              (T(!0), K(ge, null, Ve(e.item.options, (y) => (T(), le(S, {
                key: "checkItem" + y.val,
                label: y.val,
                disabled: !!e.item.disabled || e.disabled || y.disabled
              }, {
                default: ne(() => [
                  y.icon ? (T(), le(C, {
                    key: 0,
                    type: y.icon
                  }, null, 8, ["type"])) : ue("", !0),
                  R("span", null, q(y.label || y.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (T(), le(b, {
            key: 11,
            type: "textarea",
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[19] || (r[19] = (y) => c.tempKeys[e.item.tempKey] = y),
            autosize: e.item.autosize || { minRows: 2 },
            style: re(c.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || p(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: r[20] || (r[20] = (y) => u(y, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (T(), le(ra, {
            key: 12,
            style: re(c.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[21] || (r[21] = (y) => e.valGroup[e.item.key] = y),
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
            onOnFileIdChange: r[22] || (r[22] = (y) => f(y, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "multiple", "disabled", "with-credentials"])) : e.item.type === "date" ? (T(), le(da, {
            key: 13,
            style: re(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[23] || (r[23] = (y) => c.tempKeys[e.item.tempKey] = y),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placeholder: e.item.placeholder || p(O)("r.selectDate"),
            options: e.item.dateOptions || {},
            "time-picker-options": c.item.timePickerOptions || {},
            clearable: e.item.clearable !== !1,
            onOnChange: r[24] || (r[24] = (y) => u(y, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "time-picker-options", "clearable"])) : e.item.type === "time" ? (T(), le(L, {
            key: 14,
            style: re(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[25] || (r[25] = (y) => c.tempKeys[e.item.tempKey] = y),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(O)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: r[26] || (r[26] = (y) => u(y, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (T(), le(ua, {
            key: 15,
            style: re(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[27] || (r[27] = (y) => c.tempKeys[e.item.tempKey] = y),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(O)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: r[28] || (r[28] = (y) => u(y, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (T(), le(ca, {
            key: 16,
            class: "inlineBlock",
            style: re(c.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[29] || (r[29] = (y) => e.valGroup[e.item.key] = y),
            placeholder: e.item.placeholder || p(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: r[30] || (r[30] = (y) => u(y, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (T(), le(na, {
            key: 17,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[31] || (r[31] = (y) => c.tempKeys[e.item.tempKey] = y),
            style: re(c.itemStyle),
            placeholder: e.item.placeholder || p(O)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            "input-in-map": e.item.inputInMap !== !1,
            onOnChange: r[32] || (r[32] = (y) => u(y, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height", "input-in-map"])) : e.item.type === "custom" ? (T(), K("div", {
            key: 18,
            class: "inlineBlock",
            style: re(c.itemStyle)
          }, [
            Ne(c.$slots, e.item.slotName, {
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
    const e = n, l = t, i = U(null), u = U({}), f = U([]), s = U({});
    let v = [];
    const m = ((vl = window == null ? void 0 : window.g) == null ? void 0 : vl.mgrURL) ?? "";
    let c = U([]), r = [];
    const h = U(!1), b = U(Math.random() * 1e8 + 1e3), k = (gl = window == null ? void 0 : window.g) != null && gl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let B = !1;
    const _ = j(() => Array.isArray(l.formData.length ? l.formData[0] : !1)), C = j(
      () => l.inline ? {
        width: l.itemWidth + l.labelWidth + "px"
      } : {}
    ), E = j(
      () => l.inline ? {
        width: "100%"
      } : { width: l.contentWidth }
    ), S = j(() => {
      let d = pe(l.formRules);
      for (let a in d)
        if (d.hasOwnProperty(a))
          if (Array.isArray(d[a]))
            for (let A of d[a])
              A && A && !(A.message || A.validator) && (A.message = O("r.required"));
          else Q(d[a]) === "Object" && (d[a].message || d[a].validator || (d[a].message = O("r.required")));
      return d;
    }), $ = j(() => {
      let d = [];
      if (_.value)
        for (let a of f.value)
          y(a, d);
      else
        y(f.value, d);
      return d.concat(c.value, r);
    }), L = j(() => {
      let d = [];
      if (_.value)
        for (let a of f.value)
          I(a, d);
      else
        I(f.value, d);
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
            for (let V of A.collectLabel)
              V.key && a.push(V.key);
        }
    }
    function I(d, a) {
      for (let A of d)
        (A == null ? void 0 : A.showing) === !0 && A.key && A.type !== "selectInput" && a.push(A.key);
    }
    function x() {
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
        v = [], s.value = {}, ae(), me(), N().then(() => {
          e("on-re-render"), d(!0);
        });
      });
    }
    function N() {
      return new Promise((d) => {
        b.value = Math.floor(Math.random() * 1e8 + 1e3), $e(function() {
          d(!0);
        });
      });
    }
    function w() {
      let d = g();
      for (let a in u.value)
        if (u.value.hasOwnProperty(a))
          if (Me(d[a]))
            u.value[a] = d[a];
          else if (Array.isArray(u.value[a]))
            u.value[a] = [];
          else if (Q(u.value[a]) === "Boolean")
            u.value[a] = !1;
          else {
            const A = Lt(l.formData, (V) => (V == null ? void 0 : V.key) === a);
            A && (A.type === "editor" || A.type === "editorPro") ? u.value[a] = "" : u.value[a] = null;
          }
      X(d);
    }
    function X(d) {
      for (let a in s.value)
        s.value.hasOwnProperty(a) && (Me(d[a]) ? s.value[a] = d[a] : Array.isArray(s.value[a]) ? s.value[a] = [] : Q(s.value[a]) === "Object" && s.value[a].hasOwnProperty("key") && s.value[a].hasOwnProperty("val") ? s.value[a].val = null : s.value[a] = null);
    }
    function D(d) {
      let a = g();
      Me(a[d]) ? s.value[d] = a[d] : Array.isArray(s.value[d]) ? s.value[d] = [] : s.value[d] = null;
    }
    function g() {
      let d = {};
      if (_.value)
        for (let a of f.value)
          P(a, d);
      else
        P(f.value, d);
      return d;
    }
    function P(d, a) {
      for (let A of d)
        A.tempKey && Me(A.defaultVal) && ie(A, a), A.key && Me(A.defaultVal) && (a[A.key] = A.defaultVal), A.key2 && Me(A.defaultVal2) && (a[A.key2] = A.defaultVal2);
    }
    function M(d) {
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
      if (_.value)
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
              const A = "selectInput" + Math.floor(Math.random() * 1e8);
              a.tempKey = A, s.value[A] = U({
                key: a.key || null,
                val: a.defaultVal || null
              }), v.push(
                Se(
                  () => s.value[A],
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
              }, v.push(
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
              a.key && (a.tempKey = oe, s.value[oe] = a.defaultVal !== void 0 ? a.defaultVal : null, v.push(
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
                    Y ? v.push(
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
                            a.localOption ? Je(a, "options", [...a.localOption]) : Je(a, "options", []), Me(Be) && Ie(Be, a);
                        },
                        {
                          immediate: !0
                        }
                      )
                    ) : a.localOption ? Je(a, "options", [...a.localOption]) : Je(a, "options", []);
                  } else typeof a.changeOption == "object" ? a.changeOption.valKey && a.changeOption.key && v.push(
                    Se(
                      () => typeof a.changeOption == "object" && !Array.isArray(a.changeOption) ? u.value[a.changeOption.valKey] : !1,
                      (Y) => {
                        let se = pe(s.value[a.tempKey]);
                        if (s.value[a.tempKey] = null, (Y && !Array.isArray(Y) || Array.isArray(Y) && Y.length || Y === 0 || Y === !1) && a.optionUrl && typeof a.changeOption == "object" && !Array.isArray(a.changeOption)) {
                          let Be = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                          Oe((Be + "&" + a.changeOption.key + "=" + Y).replace(/\?&/, "?"), a, se);
                        } else
                          a.localOption ? Je(a, "options", [...a.localOption]) : Je(a, "options", []), Me(se) && Ie(se, a);
                      },
                      { immediate: !0 }
                    )
                  ) : Q(a.changeOption) === "Boolean" && v.push(
                    Se(
                      () => {
                        const Y = Lt(l.formData, (se) => (se == null ? void 0 : se.key) === a.key);
                        return Y.optionUrl = Sa(Y.optionUrl), Y.optionUrl.value;
                      },
                      (Y) => {
                        let se = pe(s.value[a.tempKey]);
                        s.value[a.tempKey] = null, Y ? Oe(Y, a, se) : (a.localOption ? Je(a, "options", [...a.localOption]) : Je(a, "options", []), Me(se) && Ie(se, a));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
                else a.optionUrl && Oe(a.optionUrl, a);
              else Q(a.borrowOption) === "String" && $e(function() {
                a.options = Lt(f.value, (Y) => (Y == null ? void 0 : Y.key) === a.borrowOption).options;
              });
              const de = "opEle" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = de, a.type === "select" && a.multiple || a.type === "checkboxGroup" ? s.value[de] = a.defaultVal !== void 0 ? a.defaultVal : [] : a.booleanVal ? s.value[de] = a.defaultVal !== void 0 ? a.defaultVal ? 1 : 0 : null : s.value[de] = a.defaultVal !== void 0 ? a.defaultVal : null, v.push(
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
              a.tempKey = Te, a.dateType === "date" || a.dateType === "datetime" || a.dateType === "time" || a.dateType === "year" || a.dateType === "month" ? s.value[Te] = a.defaultVal || null : (a.dateType === "daterange" || a.dateType === "datetimerange" || a.dateType === "timerange" || a.type === "monthRange") && (s.value[Te] = a.defaultVal && a.defaultVal2 && [a.defaultVal, a.defaultVal2] || []), v.push(
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
    function Oe(d, a, A) {
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
        )) : (oe.length = 0, oe.push(...de))) : oe.length = 0, a.localOption && oe.unshift(...a.localOption), Me(A) && Ie(A, a), a.disableOptionByOthers && (Q(a.disableOptionByOthers) === "String" ? v.push(
          Se(
            () => u.value[a.disableOptionByOthers],
            (Y) => {
              if (D(a.tempKey), !!oe) {
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
        ) : Array.isArray(a.disableOptionByOthers) && v.push(
          Se(
            () => a.disableOptionByOthers.filter((Y) => Y).map((Y) => u.value[Y]),
            (Y) => {
              if (D(a.tempKey), !!oe) {
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
      Array.isArray(Gt(a.options)) && Ot(Gt(a.options), { val: d }) !== -1 && (s.value[a.tempKey] = d);
    }
    function ae() {
      if (u.value = {}, _.value)
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
                    Array.isArray(oe) ? (Y = oe.map((se) => se[de.valKey]), u.value[de.key] = Y, Te && (s.value[Te.tempKey] = Y)) : (oe && Me(oe[de.valKey]) && (Y = oe[de.valKey]), u.value[de.key] = Y, Te && (Te.booleanVal && typeof Y == "boolean" ? s.value[Te.tempKey] = Y ? 1 : 0 : s.value[Te.tempKey] = Y));
                  }
              } else if (typeof a.collectLabel == "object" && a.collectLabel.key && a.collectLabel.valKey) {
                const de = We(a.collectLabel.key);
                let Te = null;
                Array.isArray(oe) ? (Te = oe.map(
                  (Y) => a.collectLabel && !Array.isArray(a.collectLabel) && Y[a.collectLabel.valKey]
                ), u.value[a.collectLabel.key] = Te, de && (s.value[de.tempKey] = Te)) : (oe && Me(oe[a.collectLabel.valKey]) && (Te = oe[a.collectLabel.valKey]), u.value[a.collectLabel.key] = Te, de && (de.booleanVal && typeof Te == "boolean" ? s.value[de.tempKey] = Te ? 1 : 0 : s.value[de.tempKey] = Te));
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
              d ? (A === "time" ? u.value[a.key] = d : u.value[a.key] = ht(d).format(typeof a.format == "string" ? a.format : V[A]), A === "date" && a.addTime && (u.value[a.key] += " 00:00:00")) : u.value[a.key] = null;
            else if (a.type === "monthRange" || A === "daterange" || A === "datetimerange" || A === "timerange") {
              if (!a.key2)
                return;
              d && d[0] && d[1] ? (A === "timerange" ? (u.value[a.key] = d[0], u.value[a.key2] = d[1]) : a.type === "monthRange" ? (u.value[a.key] = typeof a.format == "string" && ht(d[0]).format(a.format) || d[0], u.value[a.key2] = typeof a.format == "string" && a.format && ht(d[1]).format(a.format) || d[1]) : (u.value[a.key] = ht(d[0]).format(a.format || A && V[A]), u.value[a.key2] = ht(d[1]).format(a.format || A && V[A])), A === "daterange" && a.addTime && (u.value[a.key] += " 00:00:00", u.value[a.key2] += " 23:59:59")) : (u.value[a.key] = null, u.value[a.key2] = null);
            }
            break;
        }
    }
    function Ze(d, a) {
      const A = Gt(d == null ? void 0 : d.options);
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
    function We(d) {
      if (_.value) {
        for (let a of f.value) {
          const A = H(a, d);
          if (A)
            return A;
        }
        return !1;
      }
      return H(f.value, d);
    }
    function H(d, a) {
      for (let A of d)
        if (A.key === a)
          return A;
      return !1;
    }
    function z(d, a) {
      let A = {};
      for (let V in u.value)
        u.value.hasOwnProperty(V) && d[V] !== void 0 && (A[V] = d[V], delete d[V]);
      _e(A, a);
      for (let V in d)
        d.hasOwnProperty(V) && (r.indexOf(V) < 0 && r.push(V), u.value[V] = d[V]);
    }
    function ye(d) {
      let a = pe(d);
      if (_.value) {
        let A = [];
        for (let V of l.formData)
          A.push(...be(V, a));
        return A;
      }
      return be(l.formData, a);
    }
    function be(d, a) {
      return d.filter((A) => {
        for (let V of Object.keys(a))
          if ((A == null ? void 0 : A.key) === V && L.value.indexOf(V) > -1 && !(a[V] === null || (Array.isArray(a[V]) || Q(a[V]) === "Object") && De(a[V])))
            return delete a[V], !0;
        return !1;
      }).map((A) => A == null ? void 0 : A.key);
    }
    function _e(d, a = !1) {
      let A = pe(d);
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
        ha(ye(A));
      });
    }
    function W(d, a = !1) {
      if (_.value)
        for (let A of f.value)
          Ce(A, d, a);
      else
        Ce(f.value, d, a);
    }
    function Ce(d, a, A = !1) {
      for (let V of d)
        if (V != null && V.key && (A && (a[V.key] !== void 0 || V.key2 && a[V.key2] !== void 0) || !A) && V.tempKey)
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
    function ot(d) {
      if (Array.isArray(d))
        for (let a of d)
          it(a);
      else Q(d) === "Object" && it(d);
    }
    function it(d) {
      const { index: a, indexB: A, key: V, val: oe } = d;
      if (typeof a == "number")
        if (Array.isArray(f.value[a])) {
          if (typeof A == "number")
            if (V && d.hasOwnProperty("val"))
              f.value[a][A][V] = oe;
            else
              for (let de of Object.keys(d))
                de !== "index" && V !== "indexB" && (f.value[a][A][de] = d[de]);
        } else if (V && d.hasOwnProperty("val"))
          f.value[a][V] = oe;
        else
          for (let de of Object.keys(d))
            de !== "index" && (f.value[a][de] = d[de]);
    }
    function pt({ label: d, root: a }) {
      a.key2 && (u.value[a.key2] = d), st({
        e: d,
        root: a
      });
    }
    function Xe(d) {
      d.beforeKey && La(c.value, (a) => a === d.beforeKey), d.key && (c.value.indexOf(d.key) === -1 && c.value.push(d.key), st({
        e: null,
        root: d
      }));
    }
    function Ct({ name: d, root: a }) {
      a.key2 && (u.value[a.key2] = d), st({
        e: d,
        root: a
      });
    }
    function hl({ e: d, root: a }) {
      st({
        e: d,
        root: a
      }), $e(function() {
        var A, V;
        (V = (A = i.value) == null ? void 0 : A.validateField) == null || V.call(A, a.key);
      });
    }
    function st({ e: d, root: a }) {
      Re(() => {
        var V;
        let A = {
          event: d
        };
        if (a.key && (A[a.key] = u.value[a.key]), a.key2 && (A[a.key2] = u.value[a.key2]), Array.isArray(a.collectLabel))
          for (let oe of a.collectLabel)
            A[oe.key] = u.value[oe.key];
        else (V = a.collectLabel) != null && V.key && (A[a.collectLabel.key] = u.value[a.collectLabel.key]);
        e("on-item-change", A);
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
      Re(() => {
        var a, A;
        (A = (a = i.value) == null ? void 0 : a.validateField) == null || A.call(a, d, () => {
        });
      }, 10);
    }
    function ha(d) {
      Re(() => {
        var a, A;
        if (Array.isArray(d))
          for (let V of d)
            (A = (a = i.value) == null ? void 0 : a.validateField) == null || A.call(a, V, () => {
            });
      }, 10);
    }
    function ya(d) {
      d !== void 0 && (h.value = !!d);
    }
    function zt() {
      var d, a;
      l.disabled || (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d, (A) => {
        B || (B = !0, A && (h.value = !0, e("on-submit", yl())), Re(() => {
          B = !1;
        }, 2e3));
      });
    }
    return Ge(() => {
      ae(), me();
    }), o({
      resetForm: x,
      refreshFormDom: N,
      reRenderForm: ee,
      setItemToValGroup: z,
      updateValGroup: _e,
      updateFormDataT: ot,
      validate: pa,
      reValidate: ma,
      changeLoading: ya,
      getValGroup: yl,
      submit: zt
    }), (d, a) => {
      const A = te("FormItem"), V = te("Button"), oe = te("Form");
      return T(), le(oe, {
        ref_key: "formGroupXRef",
        ref: i,
        model: p(u),
        rules: p(S),
        "label-width": l.labelWidth,
        inline: l.inline,
        "show-message": l.showMessage,
        class: "formXN",
        key: p(b)
      }, {
        default: ne(() => [
          Z(A, { style: { display: "none" } }, {
            default: ne(() => a[0] || (a[0] = [
              R("input", { type: "text" }, null, -1)
            ])),
            _: 1,
            __: [0]
          }),
          p(_) ? (T(!0), K(ge, { key: 0 }, Ve(p(f), (de, Te) => (T(), K("div", {
            class: we([d.teamClass, "formTeamBox" + Te]),
            key: "formTeamBox" + Te
          }, [
            (T(!0), K(ge, null, Ve(de, (Y, se) => (T(), K(ge, {
              key: "formItem" + se
            }, [
              M(Y) ? (T(), le(Ml, {
                key: 0,
                item: Y,
                style: re(p(C)),
                "item-style": p(E),
                "val-group": p(u),
                "temp-keys": p(s),
                inline: l.inline,
                disabled: l.disabled,
                "label-width": l.labelWidth,
                "item-width": l.itemWidth,
                "mgr-url": p(m),
                "upload-url": p(k),
                onItemChange: st,
                onReValidate: hl,
                onClearTempKeyItem: D,
                onSelectInputChange: Xe,
                onAlNameChange: Ct,
                onAsyncLabelChange: pt
              }, ct({ _: 2 }, [
                Ve(F(de), (Be) => ({
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
          (T(!0), K(ge, null, Ve(p(f), (de, Te) => (T(), K(ge, {
            key: "formItem" + Te
          }, [
            !p(_) && M(de) ? (T(), le(Ml, {
              key: 0,
              item: de,
              style: re(p(C)),
              "item-style": p(E),
              "val-group": p(u),
              "temp-keys": p(s),
              inline: l.inline,
              disabled: l.disabled,
              "label-width": l.labelWidth,
              "item-width": l.itemWidth,
              "mgr-url": p(m),
              "upload-url": p(k),
              onItemChange: st,
              onReValidate: hl,
              onClearTempKeyItem: D,
              onSelectInputChange: Xe,
              onAlNameChange: Ct,
              onAsyncLabelChange: pt
            }, ct({ _: 2 }, [
              Ve(F(d.formData), (Y) => ({
                name: Y.slotName,
                fn: ne((se) => [
                  Ne(d.$slots, Y.slotName, {
                    valGroup: se.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ue("", !0)
          ], 64))), 128)),
          l.showLongOkBt ? (T(), le(A, { key: 1 }, {
            default: ne(() => [
              Z(V, {
                onClick: zt,
                style: re(p(E)),
                type: "primary",
                loading: l.btnLoading && p(h),
                disabled: l.disabled
              }, {
                default: ne(() => [
                  ke(q(l.longOkBtTxt || p(O)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ue("", !0),
          R("div", Eo, [
            l.showInlineOkBt ? (T(), le(V, {
              key: 0,
              type: "primary",
              class: we({ inlineFormBtXN: l.inline, okBtnXN: !0 }),
              onClick: zt,
              loading: l.btnLoading && p(h),
              disabled: l.disabled
            }, {
              default: ne(() => [
                ke(q(l.inlineOkBtTxt || p(O)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : ue("", !0),
            l.showInlineClearBt ? (T(), le(V, {
              key: 1,
              onClick: x,
              class: we({ inlineFormBtXN: l.inline }),
              type: "dashed"
            }, {
              default: ne(() => [
                ke(q(l.inlineClearBtTxt || p(O)("r.clear")), 1)
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
    const e = n, l = t, i = U({ width: l.width }), u = U(!1), f = U(), s = j(() => {
      var L, F;
      if (Array.isArray(l.formData))
        if (Array.isArray(l.formData[0])) {
          let y = [];
          for (let I of l.formData)
            I && (y = y.concat(
              I.filter((x) => (x == null ? void 0 : x.type) === "custom" || (x == null ? void 0 : x.type) === "input" && x.slotName && x.slotPosition)
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
        (y = (F = f.value).resetForm) == null || y.call(F).then((I) => {
          L(I);
        });
      });
    }
    function m() {
      return new Promise((L) => {
        var F, y;
        (y = (F = f.value).refreshFormDom) == null || y.call(F).then((I) => {
          L(I);
        });
      });
    }
    function c() {
      return new Promise((L) => {
        var F, y;
        (y = (F = f.value).reRenderForm) == null || y.call(F).then((I) => {
          L(I);
        });
      });
    }
    function r(L, F) {
      var y, I;
      (I = (y = f.value).setItemToValGroup) == null || I.call(y, L, F);
    }
    function h(L, F) {
      var y, I;
      (I = (y = f.value).updateValGroup) == null || I.call(y, L, F);
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
    function _(L) {
      var F, y;
      L !== void 0 && (u.value = !!L, (y = (F = f.value).changeLoading) == null || y.call(F, u.value));
    }
    function C() {
      var L, F;
      return (F = (L = f.value).getValGroup) == null ? void 0 : F.call(L);
    }
    function E() {
      u.value = !0;
    }
    function S() {
      var L, F;
      (F = (L = f.value).submit) == null || F.call(L);
    }
    function $() {
      e("on-cancel"), Re(() => {
        var L, F;
        u.value = !1, (F = (L = f.value).changeLoading) == null || F.call(L, !1);
      }, 1e3);
    }
    return o({
      resetForm: v,
      refreshFormDom: m,
      reRenderForm: c,
      setItemToValGroup: r,
      updateValGroup: h,
      updateFormDataT: b,
      validate: k,
      reValidate: B,
      changeLoading: _,
      getValGroup: C,
      submit: S,
      close: $
    }), (L, F) => {
      const y = te("Button");
      return T(), K("div", {
        style: re(p(i)),
        class: "formGroupBoxVM"
      }, [
        Z(Kt, ft({
          ref_key: "formRRef",
          ref: f
        }, L.$attrs, {
          "form-data": l.formData,
          "label-width": l.labelWidth,
          "content-width": l.contentWidth,
          "item-width": l.itemWidth,
          btnLoading: l.btnLoading,
          disabled: l.disabled,
          onOnSubmit: E
        }), ct({ _: 2 }, [
          Ve(p(s), (I) => ({
            name: I.slotName,
            fn: ne(({ valGroup: x }) => [
              Ne(L.$slots, I.slotName, { valGroup: x })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading", "disabled"]),
        fe(R("div", {
          class: "formFooterVM",
          style: re({ marginLeft: l.labelWidth + "px" })
        }, [
          R("div", {
            style: re({ width: l.contentWidth }),
            class: "btnBoxKAL"
          }, [
            l.showOkBt ? (T(), le(y, {
              key: 0,
              onClick: S,
              class: "form-save-btn",
              loading: l.btnLoading && p(u),
              disabled: l.disabled
            }, {
              default: ne(() => [
                ke(q(l.okBtTxt || p(O)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])) : ue("", !0),
            l.showCancelBt ? (T(), le(y, {
              key: 1,
              onClick: $,
              class: "form-cancel-btn"
            }, {
              default: ne(() => [
                ke(q(l.cancelBtTxt || p(O)("r.cancel")), 1)
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
    const e = n, l = t, i = U(), u = (S) => {
      (S == null ? void 0 : S.keyCode) === 13 && E();
    }, f = j(() => {
      var S, $;
      if (Array.isArray(l.formData[0])) {
        let L = [];
        for (let F of l.formData)
          F && (L = L.concat(
            F.filter((y) => (y == null ? void 0 : y.type) === "custom" || (y == null ? void 0 : y.type) === "input" && y.slotName && y.slotPosition)
          ));
        return L;
      }
      return ($ = (S = l.formData) == null ? void 0 : S.filter) == null ? void 0 : $.call(
        S,
        (L) => (L == null ? void 0 : L.type) === "custom" || (L == null ? void 0 : L.type) === "input" && L.slotName && L.slotPosition
      );
    });
    function s() {
      return new Promise((S) => {
        var $, L;
        (L = ($ = i.value).resetForm) == null || L.call($).then(() => {
          S();
        });
      });
    }
    function v() {
      return new Promise((S) => {
        var $, L;
        (L = ($ = i.value).refreshFormDom) == null || L.call($).then(() => {
          S();
        });
      });
    }
    function m() {
      return new Promise((S) => {
        var $, L;
        (L = ($ = i.value).reRenderForm) == null || L.call($).then(() => {
          S();
        });
      });
    }
    function c(S, $) {
      var L, F;
      (F = (L = i.value).setItemToValGroup) == null || F.call(L, S, $);
    }
    function r(S, $) {
      var L, F;
      (F = (L = i.value).updateValGroup) == null || F.call(L, S, $);
    }
    function h(S) {
      var $, L;
      (L = ($ = i.value).updateFormDataT) == null || L.call($, S);
    }
    function b() {
      var S, $;
      ($ = (S = i.value).validate) == null || $.call(S);
    }
    function k(S) {
      var $, L;
      (L = ($ = i.value).reValidate) == null || L.call($, S);
    }
    function B(S) {
      var $, L;
      (L = ($ = i.value).changeLoading) == null || L.call($, S === void 0 ? !1 : S);
    }
    function _() {
      var S, $;
      return ($ = (S = i.value).getValGroup) == null ? void 0 : $.call(S);
    }
    function C(S) {
      e("on-search", S);
    }
    function E() {
      var S, $;
      ($ = (S = i.value).submit) == null || $.call(S);
    }
    return Ge(() => {
      const S = i.value.$el;
      S != null && S.parentNode && S.parentNode.addEventListener("keyup", u);
    }), nt(() => {
      var $;
      const S = ($ = i.value) == null ? void 0 : $.$el;
      S != null && S.parentNode && S.parentNode.removeEventListener("keyup", u);
    }), o({
      resetForm: s,
      refreshFormDom: v,
      reRenderForm: m,
      setItemToValGroup: c,
      updateValGroup: r,
      updateFormDataT: h,
      validate: b,
      reValidate: k,
      changeLoading: B,
      getValGroup: _,
      submit: E
    }), (S, $) => (T(), le(Kt, ft({
      ref_key: "formRRef",
      ref: i
    }, S.$attrs, {
      "form-data": l.formData,
      "label-width": l.labelWidth,
      "item-width": l.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": l.showInlineOkBt,
      "inline-ok-bt-txt": p(O)("r.check"),
      "show-inline-clear-bt": l.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: C
    }), ct({ _: 2 }, [
      Ve(p(f), (L) => ({
        name: L.slotName,
        fn: ne(({ valGroup: F }) => [
          Ne(S.$slots, L.slotName, { valGroup: F })
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
    const e = n, l = t, i = U(), u = U(!1), f = U(!1), s = j(() => {
      var y, I;
      if (Array.isArray(l.formData[0])) {
        let x = [];
        for (let ee of l.formData)
          ee && (x = x.concat(
            ee.filter((N) => (N == null ? void 0 : N.type) === "custom" || (N == null ? void 0 : N.type) === "input" && N.slotName && N.slotPosition)
          ));
        return x;
      }
      return (I = (y = l.formData) == null ? void 0 : y.filter) == null ? void 0 : I.call(
        y,
        (x) => (x == null ? void 0 : x.type) === "custom" || (x == null ? void 0 : x.type) === "input" && x.slotName && x.slotPosition
      );
    });
    function v() {
      return new Promise((y) => {
        var I, x;
        (x = (I = i.value).resetForm) == null || x.call(I).then(() => {
          y();
        });
      });
    }
    function m() {
      return new Promise((y) => {
        var I, x;
        (x = (I = i.value).refreshFormDom) == null || x.call(I).then(() => {
          y();
        });
      });
    }
    function c() {
      return new Promise((y) => {
        var I, x;
        (x = (I = i.value).reRenderForm) == null || x.call(I).then(() => {
          y();
        });
      });
    }
    function r(y, I) {
      var x, ee;
      (ee = (x = i.value).setItemToValGroup) == null || ee.call(x, y, I);
    }
    function h(y, I) {
      var x, ee;
      (ee = (x = i.value).updateValGroup) == null || ee.call(x, y, I);
    }
    function b(y) {
      var I, x;
      (x = (I = i.value).updateFormDataT) == null || x.call(I, y);
    }
    function k() {
      var y, I;
      (I = (y = i.value).validate) == null || I.call(y);
    }
    function B(y) {
      var I, x;
      (x = (I = i.value).reValidate) == null || x.call(I, y);
    }
    function _(y) {
      var I, x;
      y !== void 0 && (f.value = !!y, (x = (I = i.value).changeLoading) == null || x.call(I, f.value));
    }
    function C() {
      var y, I;
      return (I = (y = i.value).getValGroup) == null ? void 0 : I.call(y);
    }
    function E() {
      f.value = !0;
    }
    function S() {
      var y, I;
      l.hideCancelBt ? L() : (I = (y = i.value).submit) == null || I.call(y);
    }
    function $() {
      u.value = !0;
    }
    function L() {
      u.value = !1, Re(() => {
        var y, I;
        f.value = !1, (I = (y = i.value).changeLoading) == null || I.call(y, !1);
      }, 1e3);
    }
    function F(y) {
      e(y ? "on-open" : "on-close");
    }
    return o({
      resetForm: v,
      refreshFormDom: m,
      reRenderForm: c,
      setItemToValGroup: r,
      updateValGroup: h,
      updateFormDataT: b,
      validate: k,
      reValidate: B,
      changeLoading: _,
      getValGroup: C,
      submit: S,
      open: $,
      close: L
    }), (y, I) => {
      const x = te("Button"), ee = te("Modal");
      return T(), le(ee, {
        class: we(["formModal", { hideFooter: l.hideFooter }]),
        title: l.title || p(O)("r.title"),
        modelValue: p(u),
        "onUpdate:modelValue": I[0] || (I[0] = (N) => Fe(u) ? u.value = N : null),
        "mask-closable": !1,
        "footer-hide": l.hideFooter,
        width: l.width,
        onOnVisibleChange: F
      }, {
        footer: ne(() => [
          Z(x, {
            onClick: S,
            class: "modal-save-btn",
            loading: l.btnLoading && p(f),
            disabled: l.disabled
          }, {
            default: ne(() => [
              ke(q(l.okBtTxt || p(O)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled"]),
          l.hideCancelBt ? ue("", !0) : (T(), le(x, {
            key: 0,
            onClick: L,
            class: "modal-cancel-btn"
          }, {
            default: ne(() => [
              ke(q(l.cancelBtTxt || p(O)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: ne(() => [
          Z(Kt, ft({
            ref_key: "formRRef",
            ref: i
          }, y.$attrs, {
            "form-data": l.formData,
            "label-width": l.labelWidth,
            btnLoading: l.btnLoading,
            disabled: l.disabled,
            onOnSubmit: E
          }), ct({ _: 2 }, [
            Ve(p(s), (N) => ({
              name: N.slotName,
              fn: ne(({ valGroup: w }) => [
                Ne(y.$slots, N.slotName, { valGroup: w })
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
    let f = [];
    const s = j(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), v = j(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    Se(
      () => e.data,
      (k) => {
        l.value = !1;
        let B = [];
        m(k, B), i.value = B, $e(function() {
          l.value = !0, e.inlineLeaf && $e(h);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), Se(
      () => v.value,
      (k) => {
        let B, _ = "s";
        if (Array.isArray(e.collectVal) ? (B = e.collectVal[0] || "", _ = "a") : B = e.collectVal, !B || JSON.stringify(k) === JSON.stringify(f)) {
          f = [];
          return;
        }
        ut({
          group: i.value,
          condition: (C) => (C == null ? void 0 : C.checked) === !0,
          key: "checked",
          val: !1
        }), ut(_ === "a" ? {
          group: i.value,
          condition: (C) => Ot(k, [B, C == null ? void 0 : C[B]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: i.value,
          condition: (C) => k.indexOf(C == null ? void 0 : C[B]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), Se(
      () => e.disabled,
      (k) => {
        ut({
          group: i.value,
          condition: (B) => B && B.disableCheckbox !== k,
          key: "disableCheckbox",
          val: k
        }), e.inlineLeaf && $e(h);
      },
      { immediate: !0 }
    );
    function m(k, B = []) {
      for (let _ of k) {
        let C = !1;
        s.value.length > 1 ? C = Jt(v.value, (S) => S[s.value[0]] === _[s.value[0]]) !== void 0 : C = s.value[0] ? v.value.indexOf(_[s.value[0]]) !== -1 : !1;
        let E = {
          name: _ == null ? void 0 : _[e.label],
          expand: !!(e.expandAll || _ != null && _.expand),
          checked: C,
          disableCheckbox: e.disabled
        };
        for (let S of s.value)
          E[S] = _[S];
        B.push(E), _ != null && _.children && _.children.length > 0 && (E.children = [], c(_.children, E.children));
      }
    }
    function c(k, B = []) {
      for (let _ of k) {
        let C = !1;
        s.value.length > 1 ? C = Jt(v.value, (S) => S[s.value[0]] === _[s.value[0]]) !== void 0 : C = s.value[0] ? v.value.indexOf(_[s.value[0]]) !== -1 : !1;
        let E = {
          name: _ == null ? void 0 : _[e.label],
          expand: !!(e.expandAll || _ != null && _.expand),
          checked: C,
          disableCheckbox: e.disabled
        };
        for (let S of s.value)
          E[S] = _[S];
        B.push(E), _ != null && _.children && _.children.length > 0 && (E.children = [], m(_.children, E.children));
      }
    }
    function r(k, {
      data: B
    }) {
      let _ = "", C = !0;
      if (B.children && B.children.length > 0) {
        for (let E of B.children)
          if (E.children !== void 0) {
            C = !1;
            break;
          }
        C && e.inlineLeaf && (_ = "inlineChildXA");
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
        k.expand && $e(h);
        return;
      }
      let B = document.querySelectorAll("#" + u + " .inlineChildXA");
      if (B.length > 0)
        for (let _ of B) {
          let C = _ == null ? void 0 : _.parentElement, E = C == null ? void 0 : C.nextElementSibling;
          if (!E)
            return;
          if (E.tagName !== "BR") {
            let S = C == null ? void 0 : C.parentElement, $ = document.createElement("br");
            S == null || S.insertBefore($, E);
            const L = $.nextElementSibling;
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
        for (let _ of k)
          if (!_.children)
            if (Array.isArray(e.collectVal)) {
              let C = {};
              for (let E of e.collectVal)
                C[E] = _[E];
              B.push(C);
            } else
              B.push(_[e.collectVal]);
      } else
        for (let _ of k)
          if (Array.isArray(e.collectVal)) {
            let C = {};
            for (let E of e.collectVal)
              C[E] = _[E];
            B.push(C);
          } else
            B.push(_[e.collectVal]);
      f = B, n("update:modelValue", B), n("on-change", pe(B));
    }
    return (k, B) => {
      const _ = te("Tree");
      return p(l) ? (T(), le(_, {
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
    let i = U({}), u = U({}), f = U([]), s = U([]), v = U(0), m = U(0);
    const c = j(() => ({ ...l.constSearchDataLeft, ...i.value })), r = j(() => ({ ...l.constSearchDataRight, ...u.value })), h = j(() => v.value < 1), b = j(() => f.value.length < 1), k = j(() => s.value.length < 1), B = j(() => m.value < 1), _ = U(), C = U(), E = U(), S = U();
    function $() {
      _.value.resetForm(), C.value.resetForm(), De(i.value) || (i.value = {}), De(u.value) || (u.value = {}), E.value.clearSelect(), S.value.clearSelect();
    }
    function L() {
      E.value.search(), S.value.search();
    }
    function F(M) {
      f.value = M;
    }
    function y(M) {
      s.value = M;
    }
    function I(M) {
      var G, J, ie, me, he;
      v.value = ((J = (G = M == null ? void 0 : M.data) == null ? void 0 : G.page) == null ? void 0 : J.total) || ((me = (ie = M == null ? void 0 : M.data) == null ? void 0 : ie.data) == null ? void 0 : me.total) || ((he = M == null ? void 0 : M.data) == null ? void 0 : he.total) || (M == null ? void 0 : M.total) || 0, e("on-data-change-l", M);
    }
    function x(M) {
      var G, J, ie, me, he;
      m.value = ((J = (G = M == null ? void 0 : M.data) == null ? void 0 : G.page) == null ? void 0 : J.total) || ((me = (ie = M == null ? void 0 : M.data) == null ? void 0 : ie.data) == null ? void 0 : me.total) || ((he = M == null ? void 0 : M.data) == null ? void 0 : he.total) || (M == null ? void 0 : M.total) || 0, e("on-data-change-r", M);
    }
    function ee(M) {
      typeof l.leftSearchDataFilter == "function" ? i.value = l.leftSearchDataFilter(M) : i.value = M;
    }
    function N(M) {
      typeof l.rightSearchDataFilter == "function" ? u.value = l.rightSearchDataFilter(M) : u.value = M;
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
      let G, J, ie = {}, me = "";
      switch (M) {
        case "add":
          G = l.addMethod, J = l.addUrl, ie = l.addParamsHandle(s.value), me = O("r.add");
          break;
        case "delete":
          G = l.deleteMethod, J = l.deleteUrl, ie = l.deleteParamsHandle(f.value), me = O("r.remove");
          break;
        case "addAll":
          G = l.addAllMethod, J = l.addAllUrl, ie = l.addAllParamsHandle(r.value), me = O("r.addAll");
          break;
        case "deleteAll":
          G = l.deleteAllMethod, J = l.deleteAllUrl, ie = l.deleteAllParamsHandle(c.value), me = O("r.removeAll");
          break;
      }
      J && G && qe[G](J, ie, null, [], { spin: !0 }, !1).then((he) => {
        (he == null ? void 0 : he.code) === 0 ? (Ke(me + O("r.success"), (he == null ? void 0 : he.message) || "", "success"), E.value && E.value.getTableData(), S.value && S.value.getTableData(), e("transferred")) : Ke(me + O("r.failed"), (he == null ? void 0 : he.message) || "", "error");
      }).catch(() => {
        Ke(me + O("r.error"), "", "error");
      });
    }
    return o({
      reset: $,
      search: L
    }), (M, G) => {
      const J = te("Icon"), ie = te("Button");
      return T(), K("div", Go, [
        R("div", Ho, [
          R("div", Wo, [
            R("div", jo, [
              R("div", qo, q(l.titleLeft || p(O)("r.added")), 1),
              Z(al, null, {
                default: ne(() => [
                  Z(rl, {
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
            R("div", Xo, [
              Z(il, {
                ref_key: "lTabRef",
                ref: E,
                columns: l.leftTableColumns,
                url: l.leftTableUrl,
                "search-data": p(c),
                onOnSelectionChange: F,
                onOnDataChange: I,
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
        R("div", Jo, [
          Z(ie, {
            class: "middleBtLLL",
            type: "default",
            onClick: g,
            disabled: p(h)
          }, {
            default: ne(() => [
              ke(q(p(O)("r.removeAll")) + " ", 1),
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
              ke(q(p(O)("r.remove")) + " ", 1),
              Z(J, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Z(ie, {
            class: "middleBtLLL",
            type: "primary",
            onClick: w,
            disabled: p(k)
          }, {
            default: ne(() => [
              Z(J, { type: "ios-arrow-back" }),
              ke(" " + q(p(O)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          Z(ie, {
            class: "middleBtLLL",
            type: "primary",
            onClick: D,
            disabled: p(B)
          }, {
            default: ne(() => [
              Z(J, { type: "ios-arrow-back" }),
              ke(" " + q(p(O)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        R("div", Yo, [
          R("div", Qo, [
            R("div", Zo, [
              R("div", ei, q(l.titleRight || p(O)("r.notAdded")), 1),
              Z(al, null, {
                default: ne(() => [
                  Z(rl, {
                    ref_key: "rightFormRef",
                    ref: C,
                    "form-data": l.formDataRight,
                    "form-rules": l.formRulesRight,
                    "label-width": l.searchFormLabelWith,
                    onOnSearch: N
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            R("div", ti, [
              Z(il, {
                ref_key: "rTabRef",
                ref: S,
                columns: l.rightTableColumns,
                url: l.rightTableUrl,
                "search-data": p(r),
                onOnSelectionChange: y,
                onOnDataChange: x,
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
      var c;
      let v = pe(n.data), m = pe(l.value);
      for (let r of v) {
        let h = 0;
        if (r != null && r.children && !De(r.children))
          for (let b of r.children) {
            for (let k = 0, B = m == null ? void 0 : m.length; k < B; k++)
              if (Array.isArray(n.collectVal)) {
                let _ = !0;
                for (let C of n.collectVal)
                  if (((c = m[k]) == null ? void 0 : c[C]) !== (b == null ? void 0 : b[C])) {
                    _ = !1;
                    break;
                  }
                if (_) {
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
      return v;
    });
    Se(
      () => n.modelValue,
      (v, m) => {
        kt(l.value, v) || kt(v, m) || (l.value = v);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function u(v, m) {
      if (v.children)
        for (let c of v.children)
          c.checked = m;
      f();
    }
    function f() {
      s(i.value, !0);
    }
    function s(v, m) {
      let c = [];
      for (let r of v) {
        if (!m && !n.leaf && r.checked && r.indeterminate === !1)
          if (Array.isArray(n.collectVal)) {
            let h = {};
            for (let b of n.collectVal)
              h[b] = r[b];
            c.push(h);
          } else Q(n.collectVal) === "String" && c.push(r[n.collectVal]);
        if (r.children) {
          for (let h of r.children)
            if (h.checked)
              if (Array.isArray(n.collectVal)) {
                let b = {};
                for (let k of n.collectVal)
                  b[k] = h[k];
                c.push(b);
              } else Q(n.collectVal) === "String" && c.push(h[n.collectVal]);
        }
      }
      m ? (l.value = c, n.leaf ? (e("update:modelValue", c), e("on-change", pe(c))) : $e(function() {
        s(i.value);
      })) : (e("update:modelValue", c), e("on-change", pe(c)));
    }
    return (v, m) => {
      const c = te("Checkbox");
      return T(), K("div", ai, [
        R("div", ni, [
          R("div", oi, q(v.firstTitle || p(O)("r.level.1")), 1),
          R("div", ii, q(v.secondTitle || p(O)("r.level.2")), 1)
        ]),
        (T(!0), K(ge, null, Ve(p(i), (r, h) => (T(), K("div", {
          class: "bodyJ",
          key: "checkboxJ" + h
        }, [
          R("div", si, [
            Z(c, {
              modelValue: r.checked,
              "onUpdate:modelValue": (b) => r.checked = b,
              indeterminate: r.indeterminate,
              onOnChange: (b) => u(r, b),
              disabled: v.disabled
            }, {
              default: ne(() => [
                ke(q(r[v.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          R("div", ri, [
            (T(!0), K(ge, null, Ve(r.children, (b, k) => (T(), K("div", {
              class: "secItem",
              key: "secItem" + k
            }, [
              Z(c, {
                modelValue: b.checked,
                "onUpdate:modelValue": (B) => b.checked = B,
                onOnChange: f,
                disabled: v.disabled
              }, {
                default: ne(() => [
                  ke(q(b[v.label]), 1)
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
      let m = pe(e.data), c = pe(l.value);
      for (let r of m) {
        let h = 0, b = 0;
        if (r != null && r.children && !De(r.children))
          for (let k of r.children) {
            let B = 0;
            if (k.children && !De(k.children))
              for (let _ of k.children) {
                for (let C = 0, E = c.length; C < E; C++)
                  if (Array.isArray(e.collectVal)) {
                    let S = !0;
                    for (let $ of e.collectVal)
                      if (c[C][$] !== _[$]) {
                        S = !1;
                        break;
                      }
                    if (S) {
                      _.checked = !0, B++, c.splice(C, 1);
                      break;
                    }
                  } else if (c[C] === _[e.collectVal]) {
                    _.checked = !0, B++, c.splice(C, 1);
                    break;
                  }
                !_.checked && (_.checked = !1);
              }
            B === 0 ? (k.checked = !1, k.indeterminate = !1) : k.children && B === k.children.length ? (k.checked = !0, k.indeterminate = !1, h++) : (k.checked = !1, k.indeterminate = !0, b++);
          }
        h === 0 && b === 0 ? (r.checked = !1, r.indeterminate = !1) : r.children && h === r.children.length ? (r.checked = !0, r.indeterminate = !1) : (r.checked = !1, r.indeterminate = !0);
      }
      return m;
    });
    Se(
      () => e.modelValue,
      (m, c) => {
        kt(l.value, m) || kt(m, c) || (l.value = m);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function u(m, c) {
      if (m.children) {
        for (let r of m.children)
          if (r.checked = c, r.children)
            for (let h of r.children)
              h.checked = c;
      }
      s();
    }
    function f(m, c) {
      if (m.children)
        for (let r of m.children)
          r.checked = c;
      s();
    }
    function s() {
      v(i.value, !0);
    }
    function v(m, c) {
      let r = [];
      for (let h of m) {
        if (!c && !e.leaf && (h != null && h.checked) && h.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let b = {};
            for (let k of e.collectVal)
              b[k] = h[k];
            r.push(b);
          } else Q(e.collectVal) === "String" && r.push(h[e.collectVal]);
        if (h != null && h.children)
          for (let b of h.children) {
            if (!c && !e.leaf && b.checked && b.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let k = {};
                for (let B of e.collectVal)
                  k[B] = b[B];
                r.push(k);
              } else Q(e.collectVal) === "String" && r.push(b[e.collectVal]);
            if (b.children) {
              for (let k of b.children)
                if (k.checked)
                  if (Array.isArray(e.collectVal)) {
                    let B = {};
                    for (let _ of e.collectVal)
                      B[_] = k[_];
                    r.push(B);
                  } else Q(e.collectVal) === "String" && r.push(k[e.collectVal]);
            }
          }
      }
      c ? (l.value = r, e.leaf ? (n("update:modelValue", r), n("on-change", pe(r))) : $e(function() {
        v(i.value);
      })) : (n("update:modelValue", r), n("on-change", pe(r)));
    }
    return (m, c) => {
      const r = te("Checkbox");
      return T(), K("div", di, [
        R("div", ci, [
          R("div", fi, q(m.firstTitle || p(O)("r.level.1")), 1),
          R("div", pi, q(m.secondTitle || p(O)("r.level.2")), 1),
          R("div", mi, q(m.thirdTitle || p(O)("r.level.3")), 1)
        ]),
        (T(!0), K(ge, null, Ve(p(i), (h, b) => (T(), K("div", {
          class: "bodyF",
          key: "checkboxJ" + b
        }, [
          R("div", hi, [
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
          R("div", yi, [
            (T(!0), K(ge, null, Ve(h.children, (k, B) => (T(), K("div", {
              class: "rightBoxInner",
              key: "secItem" + B
            }, [
              R("div", vi, [
                Z(r, {
                  modelValue: k.checked,
                  "onUpdate:modelValue": (_) => k.checked = _,
                  indeterminate: k.indeterminate,
                  onOnChange: (_) => f(k, _),
                  disabled: m.disabled
                }, {
                  default: ne(() => [
                    ke(q(k[m.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              R("div", gi, [
                (T(!0), K(ge, null, Ve(k.children, (_, C) => (T(), K("div", {
                  class: "thirdItem",
                  key: "thirdItem" + C
                }, [
                  Z(r, {
                    modelValue: _.checked,
                    "onUpdate:modelValue": (E) => _.checked = E,
                    onOnChange: s,
                    disabled: m.disabled
                  }, {
                    default: ne(() => [
                      ke(q(_[m.label]), 1)
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
      R("div", {
        class: we(["wellCardR", { flexColumnBox: !o.fitToContent }])
      }, [
        R("div", {
          class: we(["panelHeader", { notGrow: !o.fitToContent }])
        }, [
          R("div", ki, q(o.title || p(O)("r.title")), 1),
          R("div", wi, [
            Ne(l.$slots, "bts")
          ])
        ], 2),
        o.fitToContent ? (T(), K("div", _i, [
          Ne(l.$slots, "default")
        ])) : (T(), K("div", Ci, [
          R("div", Si, [
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
    const u = U(""), f = bt([]);
    let s = {}, v = !0, m = !1;
    const c = "scm" + Math.random(), { onCompositionStart: r, onCompositionEnd: h, handleChange: b } = Et(), k = j(() => u.value ? O("r.searchFor") + u.value : e.placeholder || O("r.pInput")), B = j({
      get() {
        return e.modelValue ?? "";
      },
      set(x) {
        if (n("update:modelValue", x ?? ""), e.collectLabel && x !== void 0) {
          let ee = {};
          for (let N of f.value)
            if (N[e.optionsValKey] === x) {
              ee = JSON.parse(JSON.stringify(N));
              break;
            }
          n("on-change", ee);
        }
      }
    }), _ = j(() => e.searchKey ? {
      ...e.searchData,
      current: l.value,
      [e.searchKey]: u.value
    } : {
      ...e.searchData,
      current: l.value
    });
    Se(
      () => e.getOptions,
      (x) => {
        x ? v && I() : $();
      },
      { immediate: !0 }
    ), Se(
      () => e.url,
      (x) => {
        x && (m = !0);
      }
    );
    const C = U();
    function E() {
      const x = C.value.$el.querySelector('.ivu-select-input[type="text"]');
      x.addEventListener("compositionstart", r), x.addEventListener("compositionend", h), x.addEventListener("keyup", F);
    }
    function S() {
      var ee, N;
      const x = (N = (ee = C.value) == null ? void 0 : ee.$el) == null ? void 0 : N.querySelector('.ivu-select-input[type="text"]');
      x && (x.removeEventListener("compositionstart", r), x.removeEventListener("compositionend", h), x.removeEventListener("keyup", F));
    }
    function $() {
      v || (B.value = "", v = !0, u.value = "", f.value = [], l.value = 1, i = 1, s = {}, m = !1);
    }
    function L(x) {
      for (let ee of f.value)
        if ((ee == null ? void 0 : ee.label) === x)
          return !0;
      return !1;
    }
    const F = Dt(function(x) {
      b(() => {
        var N;
        const ee = (N = x == null ? void 0 : x.target) == null ? void 0 : N.value;
        L(ee) || (Me(ee) ? (m ? $() : (De(s) && (s.current = l.value, s.pages = i, s.options = pe(f.value)), Me(B.value) && (B.value = "")), u.value = String(ee), f.value = [], l.value = 1, v = !0, I()) : m ? ($(), I()) : (B.value = "", u.value = "", s.current ? (l.value = s.current, i = s.pages, f.value = pe(s.options), s = {}) : I()));
      });
    }, 600);
    nt(() => {
      F.cancel(), S();
    });
    function y() {
      m && $(), l.value < i ? (++l.value, $e(function() {
        I();
      })) : wl.warning({
        background: !0,
        content: O("r.noMore")
      });
    }
    function I() {
      return new Promise((x, ee) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Me(u.value)) {
            x(!1);
            return;
          }
          qe.get(e.url, _.value).then((N) => {
            var D;
            v = !1;
            let w = [];
            (D = N == null ? void 0 : N.data) != null && D.records ? (w = N.data.records, i = N.data.pages) : N != null && N.data && Q(N.data) === "Array" ? (w = N.data, i = N.pages) : N != null && N.data && Q(N.data) === "Object" && (w = [N.data], i = 1), typeof e.optionFilter == "function" && Q(e.optionFilter) === "Function" && (w = e.optionFilter(w)), De(w) || (w = w.map((g, P) => {
              let M = O("r.optionLabel") + P;
              if (Array.isArray(e.optionsLabelKey)) {
                let G = [];
                for (let J = 1, ie = e.optionsLabelKey.length; J < ie; J++)
                  G.push(g[e.optionsLabelKey[J]]);
                M = `${g[e.optionsLabelKey[0]]}(${String(G)})`;
              } else zl(e.optionsLabelKey) && (M = g[e.optionsLabelKey]);
              if (e.collectLabel) {
                let G = pe(g);
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
            f.value = f.value.filter((g) => X[g == null ? void 0 : g.value] ? !1 : (X[g == null ? void 0 : g.value] = !0, !0)), $e(function() {
              n("update-option-finish");
            }), x(!0);
          }).catch(() => {
            wl.error(O("r.getDataError")), ee(O("r.getDataError"));
          });
        } else
          x(!1);
      });
    }
    return Ge(E), (x, ee) => {
      const N = te("Option"), w = te("Select"), X = Ft("loadmore");
      return fe((T(), le(w, ft({
        modelValue: p(B),
        "onUpdate:modelValue": ee[0] || (ee[0] = (D) => Fe(B) ? B.value = D : null),
        ref_key: "selectScrollSourceRef",
        ref: C,
        "transfer-class-name": c
      }, x.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: p(k),
        disabled: x.disabled
      }), {
        default: ne(() => [
          (T(!0), K(ge, null, Ve(p(f), (D, g) => (T(), le(N, {
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
}), Rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}, Symbol.toStringTag, { value: "Module" })), Bi = { class: "a4Line aL notPrint" }, Li = { class: "a4Line aR notPrint" }, xi = { class: "a4Line bL notPrint" }, Oi = { class: "a4Line bR notPrint" }, Ii = { class: "topsL notPrint" }, Ai = { class: "topsLTitle" }, Pi = { class: "topsLBtn" }, Mi = { class: "topsLHelp" }, Ri = { key: 0 }, $i = { key: 1 }, Fi = { key: 2 }, Di = ["innerHTML"], Ni = /* @__PURE__ */ ce({
  __name: "PrintModal",
  setup(t) {
    const o = dl(), n = U(), e = U(!1), l = U(!1), i = U(!1), u = U(100), f = U(), s = U(715), v = U(!1), m = U(), c = "tablePrint_" + Date.now().toString(), r = U(""), h = U([]), b = U([]), k = U(!1), B = j(() => ({
      width: s.value + "px"
    })), _ = () => {
      m.value && window.sessionStorage.removeItem("print_" + m.value), window.sessionStorage.removeItem(c), window.close();
    }, C = () => {
      v.value && (v.value = !1);
    }, E = () => {
      k.value = !0;
    }, S = (I) => {
      k.value && (s.value = (I == null ? void 0 : I.layerX) - 20);
    }, $ = () => {
      k.value && (k.value = !1);
    }, L = () => {
      v.value = !1;
      let I = window.setTimeout(() => {
        window.clearTimeout(I), window.print();
      }, 100);
    }, F = (I) => {
      if (typeof f.value == "function")
        return f.value(I);
    }, y = () => {
      var I, x, ee, N, w, X, D;
      if (m.value = (I = o == null ? void 0 : o.params) == null ? void 0 : I.isFrom, m.value) {
        let g = window.sessionStorage.getItem("print_" + m.value);
        if (g) {
          const P = JSON.parse(g);
          if (!P) {
            e.value = !0;
            return;
          }
          if (h.value = P.columns, b.value = P.data, n.value = P.title, r.value = ((x = P.config) == null ? void 0 : x.customClass) || "", l.value = ((ee = P.config) == null ? void 0 : ee.domPrint) || !1, i.value = ((N = P.config) == null ? void 0 : N.autoPrint) || !1, u.value = ((w = P.config) == null ? void 0 : w.autoPrintTimeout) || 100, s.value = ((X = P.config) == null ? void 0 : X.width) || 715, document.title = (n.value || O("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString(), (D = P.funcArr) != null && D.length) {
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
    return Ge(() => {
      if (i.value) {
        let I = window.setTimeout(() => {
          window.clearTimeout(I), L();
        }, u.value);
      }
      document.addEventListener("click", C), document.addEventListener("mousemove", S), document.addEventListener("mouseup", $);
    }), nt(() => {
      document.removeEventListener("click", C), document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", $);
    }), y(), (I, x) => {
      const ee = te("Table");
      return T(), K("div", {
        class: we(["tablePrintModal", [p(r)]])
      }, [
        fe(R("div", { class: "msgL notPrint" }, q(p(O)("r.printGuide.9")), 513), [
          [ve, p(e)]
        ]),
        fe(R("div", Bi, [
          R("p", null, q(p(O)("r.printGuide.7")), 1),
          x[2] || (x[2] = ke()),
          R("p", null, q(p(O)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !p(e)]
        ]),
        fe(R("div", Li, [
          R("p", null, q(p(O)("r.printGuide.7")), 1),
          x[3] || (x[3] = ke()),
          R("p", null, q(p(O)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !p(e)]
        ]),
        fe(R("div", xi, [
          R("p", null, q(p(O)("r.printGuide.8")), 1),
          x[4] || (x[4] = ke()),
          R("p", null, q(p(O)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !p(e)]
        ]),
        fe(R("div", Oi, [
          R("p", null, q(p(O)("r.printGuide.8")), 1),
          x[5] || (x[5] = ke()),
          R("p", null, q(p(O)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !p(e)]
        ]),
        fe(R("div", Ii, [
          R("div", Ai, q(p(n) || p(O)("r.print")), 1),
          R("div", Pi, [
            Z(Qt, {
              icon: "md-help-circle",
              name: p(O)("r.help"),
              onClick: x[0] || (x[0] = qt((N) => v.value = !p(v), ["stop"]))
            }, null, 8, ["name"]),
            Z(Qt, {
              icon: "md-print",
              name: p(O)("r.preview"),
              onClick: L
            }, null, 8, ["name"]),
            p(l) ? ue("", !0) : (T(), le(ea, {
              key: 0,
              modelValue: p(h),
              "onUpdate:modelValue": x[1] || (x[1] = (N) => Fe(h) ? h.value = N : null),
              "s-key": c,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            Z(Yl, {
              icon: "md-close",
              onClick: _,
              title: p(O)("r.close")
            }, null, 8, ["title"])
          ]),
          fe(R("div", Mi, [
            p(l) ? ue("", !0) : (T(), K("p", Ri, [
              x[6] || (x[6] = R("span", null, "1. ", -1)),
              R("span", null, q(p(O)("r.printGuide.1")), 1)
            ])),
            p(l) ? ue("", !0) : (T(), K("p", $i, [
              x[7] || (x[7] = R("span", null, "2. ", -1)),
              R("span", null, q(p(O)("r.printGuide.2")), 1)
            ])),
            p(l) ? (T(), K("p", Fi, [
              x[8] || (x[8] = R("span", null, "1. ", -1)),
              R("span", null, q(p(O)("r.printGuide.10")), 1)
            ])) : ue("", !0),
            R("p", null, [
              R("span", null, q(p(l) ? "2. " : "3. "), 1),
              R("span", null, q(p(O)("r.printGuide.3")), 1)
            ]),
            R("p", null, [
              R("span", null, q(p(l) ? "3. " : "4. "), 1),
              R("span", null, q(p(O)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ve, p(v)]
          ])
        ], 512), [
          [ve, !p(e)]
        ]),
        p(l) ? (T(), K("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: re(p(B))
        }, [
          R("div", {
            class: "settingLine",
            onMousedown: qt(E, ["stop"])
          }, null, 32)
        ], 4)) : ue("", !0),
        p(l) ? (T(), K("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: p(b),
          style: re(p(B))
        }, null, 12, Di)) : ue("", !0),
        p(l) ? ue("", !0) : fe((T(), le(ee, {
          key: 2,
          class: "tablePW",
          columns: p(h),
          data: p(b),
          "span-method": F,
          border: ""
        }, null, 8, ["columns", "data"])), [
          [ve, !p(e)]
        ])
      ], 2);
    };
  }
});
let at = null, Tt = null;
function $l() {
  document.documentElement.style.setProperty("overflow", "auto"), Tt || (Tt = document.createElement("style"), Tt.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(Tt));
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
  var m, c, r;
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
  let u = (c = (m = at == null ? void 0 : at.currentRoute) == null ? void 0 : m.value) == null ? void 0 : c.fullPath;
  u && (u = (r = u.replace) == null ? void 0 : r.call(u, /\//g, "_"));
  let f = {
    data: o,
    title: n,
    config: e,
    funcArr: i
  };
  e != null && e.domPrint || (f.columns = l), window.sessionStorage.setItem("print_" + u, JSON.stringify(f));
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
  const o = (...f) => Qe.apply(this, f), n = o("r.closePreview"), e = o("r.fullImg");
  let l = "previewImg" + Math.floor(Math.random() * 1e7);
  (u = (i = lt) == null ? void 0 : i.info) == null || u.call(i, {
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
            Ae(Pa, {
              type: "md-close",
              title: n,
              class: "previewModalDelete",
              onClick() {
                var s, v;
                (v = (s = lt) == null ? void 0 : s.remove) == null || v.call(s);
              }
            })
          ]
        )
      ]
    )
  }), Re(() => {
    var r, h, b, k;
    const f = document.getElementById(l);
    if (!f) return;
    let s = f.parentElement, v = 0, m = null;
    for (; s && v < 4; ) {
      if ((h = (r = s.classList) == null ? void 0 : r.contains) != null && h.call(r, "ivu-modal-content")) {
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
const Gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: qe,
  $swal: Ke,
  $swalConfirm: Zl,
  clearInterval: Tn,
  clearTimeout: Vn,
  domPrint: zi,
  fullScreenImgByDom: gt,
  fullScreenImgPreview: Ui,
  messageBox: ol,
  setInterval: Sn,
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
      var s, v, m, c, r, h, b, k, B;
      const l = document.getElementById("editor-preview");
      let i = localStorage.getItem("editorPreviewW") || 300, u = localStorage.getItem("editorPreviewH") || 500;
      const f = (s = e == null ? void 0 : e.getHtml) == null ? void 0 : s.call(e);
      if (l) {
        let _ = (h = (r = (c = (m = (v = l.children) == null ? void 0 : v[0]) == null ? void 0 : m.children) == null ? void 0 : c[1]) == null ? void 0 : r.children) == null ? void 0 : h[0], C = (B = (k = (b = l.children) == null ? void 0 : b[0]) == null ? void 0 : k.children) == null ? void 0 : B[1];
        _ && (_.innerHTML = f, _.style.width = i + "px"), C && (C.style.height = u + "px"), l.style.display = "block";
      } else {
        const _ = document.body, C = document.createElement("div");
        C.setAttribute("id", "editor-preview"), C.setAttribute("class", "editor-preview-mask"), C.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${i}' min='200'><span>高</span><input type='number' value='${u}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let E = C.children[0].children[1], S = C.children[0].children[1].children[0], $ = C.children[0].children[0].children[0].children[1];
        const L = 40, F = 70, y = (N) => {
          var D;
          if ((N == null ? void 0 : N.type) === "keyup") {
            let g = !1;
            if (N.key && (g = N.key !== "Enter"), g)
              return;
          }
          let w = (D = N == null ? void 0 : N.target) == null ? void 0 : D.value;
          if (w = Number(w), S.style && S.style.width === w + "px")
            return;
          const X = _.clientWidth;
          w < 250 ? (w = 250, N.target.value = 250) : w > X - L && (w = X - L, N.target.value = X - L), S.style.width = w + "px", localStorage.setItem("editorPreviewW", w);
        };
        $.addEventListener("blur", y), $.addEventListener("keyup", y);
        let I = C.children[0].children[0].children[0].children[3];
        const x = (N) => {
          var D;
          if ((N == null ? void 0 : N.type) === "keyup") {
            let g = !1;
            if (N.key && (g = N.key !== "Enter"), g)
              return;
          }
          let w = (D = N == null ? void 0 : N.target) == null ? void 0 : D.value;
          if (w = Number(w), E.style && E.style.height === w + "px")
            return;
          const X = _.clientHeight;
          w < 300 ? (w = 300, N.target.value = 300) : w > X - F && (w = X - F, N.target.value = X - F), E.style.height = w + "px", localStorage.setItem("editorPreviewH", w);
        };
        I.addEventListener("blur", x), I.addEventListener("keyup", x), C.children[0].children[0].children[1].addEventListener("click", () => {
          C.style.display = "none";
        }), S.innerHTML = f, S.style.width = i + "px", E.style.height = u + "px", _.append(C);
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
}, ms = At.use, hs = At.i18n, Fl = {
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
  Dl = !0, qe.init(o.useStore || o.store, t), ji.install(t), o.locale && At.use(o.locale), o.i18n && At.i18n(o.i18n), o.router && (Cn(o.router), ml.init(o.router)), o.amap && fo(o.amap), o.notRegistryGlobal || (Object.keys(Rl).forEach((n) => {
    t.component(n) || t.component(n, Rl[n]);
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
  Lt as findCollection,
  nl as findPath,
  on as formDataHeadConfig,
  gt as fullScreenImgByDom,
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
  yt as isImgByFile,
  hn as isNaN,
  fl as isNumberNaN,
  fn as isNumberValue,
  Me as isValidValue,
  ms as locale,
  ol as messageBox,
  Q as myTypeof,
  rn as oneOf,
  ll as removeEmptyValue,
  Sn as setInterval,
  Re as setTimeout,
  ut as setValByOption,
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
