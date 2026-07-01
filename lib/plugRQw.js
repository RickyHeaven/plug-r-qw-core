var sa = Object.defineProperty;
var ra = (t, s, n) => s in t ? sa(t, s, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[s] = n;
var dt = (t, s, n) => ra(t, typeof s != "symbol" ? s + "" : s, n);
import { getCurrentInstance as Ot, defineComponent as ce, resolveComponent as Z, createElementBlock as N, openBlock as S, normalizeStyle as re, normalizeClass as Se, createBlock as le, createCommentVNode as de, renderSlot as Ne, ref as U, computed as H, withDirectives as pe, unref as m, createElementVNode as R, createVNode as J, toDisplayString as j, withCtx as ne, createTextVNode as ke, vShow as ve, resolveDirective as At, onMounted as Ge, nextTick as Me, onUpdated as ua, onUnmounted as Ol, h as Ie, isRef as De, Fragment as be, renderList as Te, onBeforeMount as Al, watch as Ve, mergeModels as da, useModel as ca, onBeforeUnmount as tl, Teleport as fa, withModifiers as Nt, mergeProps as rt, shallowRef as ht, triggerRef as pa, createSlots as st, toRef as ma, toValue as Ft } from "vue";
import ha from "deepmerge";
import { debounce as It, isPlainObject as it, cloneDeep as fe, isObject as ya, isFunction as va, isEmpty as Fe, isNumber as wt, last as Vt, isEqual as yt, isString as Il, first as Kt, find as zt, indexOf as cl, findIndex as St, remove as ga } from "lodash-es";
import bt from "sweetalert";
import { Tooltip as ba, Modal as Qe, Button as Dt, TableColumnConfig as ka, Radio as wa, Input as _a, Message as fl, Icon as Va } from "view-ui-plus";
import { useRouter as Pt, useRoute as ll } from "vue-router";
import Sa from "popper.js";
import Ut from "axios";
import pl from "@amap/amap-jsapi-loader";
import Ca from "ar-cascader";
import { Toolbar as Ta, Editor as Ba } from "@wangeditor/editor-for-vue";
import ct from "moment";
import { Boot as La } from "@wangeditor/editor";
import xa from "vue-json-viewer";
const Pl = {
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
}, Oa = /(%|){([0-9a-zA-Z_]+)}/g;
function Aa() {
  function t(n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }
  function s(n, ...e) {
    let l;
    return e.length === 1 && typeof e[0] == "object" && (l = e[0]), (!l || !l.hasOwnProperty) && (l = {}), n === void 0 ? "" : n.replace(Oa, (i, u, f, o) => {
      let y;
      return n[o - 1] === "{" && n[o + i.length] === "}" ? f : (y = t(l, f) ? l[f] : null, y ?? "");
    });
  }
  return s;
}
const Ia = Aa();
let Ct = Pl;
const Pa = {
  zh: Pl
};
let ml, hl = {}, Ke, Ra = function(t, s) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, s);
  if (Ke && Ke.global)
    return Ke.global.t(t, s);
  if (Ke && Ke.locale) {
    if (!hl[Ke.locale] || ml != Ke.locale) {
      hl[Ke.locale] = !0;
      let n = Ke.getLocaleMessage(Ke.locale) || {}, e = ha(Pa[Ke.locale], n, { clone: !0 });
      Ct = e, Ke.setLocaleMessage(Ke.locale, e), ml = Ke.locale;
    }
    return Ke.hlang(t, s);
  }
};
const Je = function(t, s) {
  let n = Ra.apply(this, [t, s]);
  if (n != null)
    return n;
  const e = t.split(".");
  let l = Ct;
  for (let i = 0, u = e.length; i < u; i++) {
    const f = e[i];
    if (n = l[f], i === u - 1)
      return Ia(n, s);
    if (!n)
      return "";
    l = n;
  }
  return "";
}, $a = function(t) {
  Ct = t || Ct;
}, Ma = function(t) {
  Ke = t;
}, Tt = {
  use: $a,
  t: Je,
  i18n: Ma
};
function O(t, s) {
  var e, l, i;
  const n = (i = (l = (e = Ot()) == null ? void 0 : e.appContext) == null ? void 0 : l.config) == null ? void 0 : i.globalProperties;
  return Je.apply(n, [t, s]);
}
const Rl = /* @__PURE__ */ ce({
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
    return (i, u) => {
      const f = Z("Icon");
      return S(), N("div", {
        class: Se({ headerBtCTM: !0, withIconCTM: n.icon || n.withIcon, disabled: n.disabled }),
        style: re({ color: n.color, borderLeftColor: n.borderColor }),
        onClick: l
      }, [
        n.icon ? (S(), le(f, {
          key: 0,
          size: n.iconSize,
          type: n.icon
        }, null, 8, ["size", "type"])) : de("", !0),
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
const Fa = { class: "headerTxtAM" }, Da = { class: "contentAM" }, Na = /* @__PURE__ */ ce({
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
    let i = U(!1);
    const u = H(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), f = H(() => ({ zIndex: e.zIndex }));
    function o() {
      i.value = !0, l("on-open");
    }
    function y(p) {
      i.value = !1, l("on-close", p === !0);
    }
    return s({
      open: o,
      close: y
    }), (p, c) => pe((S(), N("div", {
      class: "fullScreenPopBoxAM",
      style: re(m(f))
    }, [
      R("div", {
        class: "headerAM",
        style: re({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: m(u) })
      }, [
        R("span", Fa, j(p.title || m(O)("r.title")), 1),
        J(Rl, {
          icon: "md-return-left",
          onClick: y
        }, {
          default: ne(() => [
            ke(j(m(O)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      R("div", Da, [
        Ne(p.$slots, "default")
      ])
    ], 4)), [
      [ve, m(i)]
    ]);
  }
}), Ka = { class: "msg" }, za = /* @__PURE__ */ ce({
  __name: "Hello",
  setup(t) {
    let s = U("Greetings from Ricky.");
    return (n, e) => (S(), N("span", Ka, j(m(s)), 1));
  }
}), Et = /* @__PURE__ */ ce({
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
    const n = t, e = s, l = H(() => {
      var u;
      return Math.floor(n.size / 17 * ((u = Le()) == null ? void 0 : u.fontSizeBase)) + "px";
    });
    function i(u) {
      n.disabled || e("click", u);
    }
    return (u, f) => {
      const o = Z("Icon"), y = At("has");
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
        [y, u.has]
      ]);
    };
  }
}), Ua = { class: "c404K" }, Ea = { class: "ct404" }, Ga = { class: "p404" }, Ha = /* @__PURE__ */ ce({
  __name: "Page404",
  setup(t) {
    const n = Ot().appContext.config.globalProperties.$router;
    function e() {
      n.go(-1);
    }
    return (l, i) => {
      const u = Z("Button");
      return S(), N("div", Ua, [
        i[0] || (i[0] = R("div", { class: "t404" }, "404", -1)),
        R("div", Ea, "UH OH! " + j(m(O)("r.pageNotFound")), 1),
        R("div", Ga, j(m(O)("r.notFoundMsg")), 1),
        J(u, {
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
  return new Promise((i, u) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let f = l("r.confirm"), o = l("r.cancel"), y = !1, p = "swalConfirmBt", c = "swalCancelBt";
      const r = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let v = "";
      t.text && r.test(Y(t.text)) ? v = "content" : t.text && Y(t.text) === "String" && (v = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (o = t.buttons.cancel.text) && (y = !0), t.buttons.cancel.className && (c = t.buttons.cancel.className), t.buttons.confirm.text && (f = t.buttons.confirm.text), t.buttons.confirm.className && (p = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (o = t.buttons[0], y = !0), t.buttons[1] && (f = t.buttons[1]))), bt({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [v]: t.text,
        buttons: {
          confirm: {
            text: f,
            value: !0,
            visible: !0,
            className: p
          },
          cancel: {
            text: o,
            value: null,
            visible: y,
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
      if (s)
        switch (typeof s) {
          case "string":
            f = "text";
            break;
          case "object":
            f = "content";
            break;
        }
      bt({
        title: t,
        [f]: s || "",
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
        u(o);
      });
    } else if (typeof t == "boolean")
      !t && bt.close && bt.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
const Wa = { class: "tableTooltip" }, ja = /* @__PURE__ */ ce({
  __name: "TableTooltip",
  props: {
    content: { type: [String, Number, Boolean, null] }
  },
  setup(t) {
    const s = t, n = U(), e = U(), l = U(!0);
    let i = null;
    const u = U(200);
    function f() {
      const o = l.value ? n.value : e.value;
      if (!o)
        return;
      let y = document.createRange();
      y.setStart(o, 0), y.setEnd(o, o.childNodes.length);
      const p = y.getBoundingClientRect().width;
      u.value = o.offsetWidth * 2, l.value = p < o.offsetWidth, y = null;
    }
    return Ge(() => {
      f(), i = It(() => {
        Me(function() {
          f();
        });
      }, 200), window.addEventListener("resize", i);
    }), ua(f), Ol(() => {
      window.removeEventListener("resize", i);
    }), (o, y) => (S(), N("div", Wa, [
      m(l) ? (S(), N("span", {
        key: 0,
        ref_key: "spanRef",
        ref: n,
        class: "contentText"
      }, j(s.content), 513)) : (S(), le(m(ba), {
        key: 1,
        content: typeof s.content == "boolean" ? String(s.content) : s.content ?? "",
        "max-width": m(u),
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
const Gt = typeof window < "u";
function qe(t, s, n) {
  De(t[s]) ? t[s].value = n : t[s] = n;
}
function Y(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function qa(t) {
  return { style: { display: al(t) ? "unset" : "none" } };
}
function $l(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function Lt(t) {
  let s = Y(t);
  if (s === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = Y(t[n]);
        e === "String" ? t[n] = t[n].trim() : (e === "Object" || e === "Array") && Lt(t[n]);
      }
  } else if (s === "Array")
    for (let n = 0, e = t.length; n < e; n++) {
      let l = Y(t[n]);
      l === "String" ? t[n] = t[n].trim() : (l === "Array" || l === "Object") && Lt(t[n]);
    }
  return t;
}
function Ht(t, s = []) {
  if (Y(t) === "Array")
    return t.forEach((n, e) => {
      switch (Y(n)) {
        case "Array":
        case "Object":
          Ht(n);
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
              Ht(t[n]);
              break;
            default:
              t[n] = null;
          }
      }
    return t;
  } else
    return t;
}
const Xa = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Ja(t) {
  let s = new FormData();
  for (let n in t)
    t.hasOwnProperty(n) && t[n] !== null && s.append(n, t[n]);
  return s;
}
function _t(t, s, n = !1) {
  if (!t || !s)
    return !1;
  let e, l = "notFoundC", i = function(u, f) {
    if (Array.isArray(u)) {
      if (Y(f) === "Function" && f(u))
        return l = u, [];
      for (let o of u) {
        if (l !== "notFoundC")
          break;
        if (Y(f) === "Function" && f(o) || o === f)
          return l = o, [u.indexOf(o)];
        if (Y(o) === "Array" || Y(o) === "Object") {
          let y = i(o, f);
          if (y !== void 0)
            return [u.indexOf(o), ...y];
        }
      }
    } else if (Y(u) === "Object") {
      if (Y(f) === "Function" && f(u))
        return l = u, [];
      for (let o in u) {
        if (l !== "notFoundC")
          break;
        if (u.hasOwnProperty(o)) {
          if (Y(f) === "Function" && f(o) || u[o] === f)
            return l = u[o], [o];
          if (Y(u[o]) === "Object" || Y(u[o]) === "Array") {
            let y = i(u[o], f);
            if (y !== void 0)
              return [o, ...y];
          }
        }
      }
    }
  };
  return e = i(t, s), n ? e || !1 : l === "notFoundC" ? !1 : l;
}
function Ya(t, s) {
  for (let n = 0, e = s.length; n < e; n++)
    if (t === s[n])
      return !0;
  return !1;
}
function Qa(t, s = 2) {
  let n = new RegExp(`(^-?\\d+\\.\\d{${s}})(\\d+$)`), e = t && String(t) || "";
  return n.test(e) ? Number(e.replace(n, "$1")) : t;
}
function Ml(t, s = {}, n = "get") {
  let e = document.createElement("form"), l = document.getElementsByTagName("body")[0];
  l.appendChild(e), e.setAttribute("style", "display:none"), e.setAttribute("target", ""), e.setAttribute("method", n);
  let i = t;
  if (window && window.hasOwnProperty("g")) {
    let u = Object.keys(window.g).filter((f) => {
      var o;
      return ((o = f == null ? void 0 : f.indexOf) == null ? void 0 : o.call(f, "URL")) > -1;
    }).map((f) => {
      var o;
      return (o = f.replace) == null ? void 0 : o.call(f, "URL", "");
    });
    for (let f of u) {
      let o = new RegExp("^/" + f + "(?=/.*$)", "i");
      if (o.test(t) && window.g[f + "URL"]) {
        i = window.g[f + "URL"] + t.replace(o, "");
        break;
      }
    }
  }
  if (e.setAttribute("action", i), it(s)) {
    for (let f in s)
      if (s.hasOwnProperty(f) && (s[f] || s[f] === 0 || s[f] === !1 || s[f] === "")) {
        let o = document.createElement("input");
        o.setAttribute("type", "hidden"), o.setAttribute("name", f), o.setAttribute("value", s[f]), e.appendChild(o);
      }
    e.submit();
    let u = setTimeout(() => {
      l.removeChild(e), clearTimeout(u), u = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
async function Za(t, s = {}, n = "get", e = !1, l) {
  if (s.hasOwnProperty("columns") && (s.columns === "" || s.columns === null || s.columns === void 0)) {
    ze.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  e ? await Fl(t, s, n, l) : Ml(t, s, n);
}
async function Fl(t, s = {}, n = "get", e) {
  Bt(!0);
  try {
    let l = t;
    if (window != null && window.g) {
      let c = Object.keys(window.g).filter((r) => (r == null ? void 0 : r.indexOf("URL")) > -1).map((r) => r == null ? void 0 : r.replace("URL", ""));
      for (let r of c) {
        let v = new RegExp("^/" + r + "(?=/.*$)", "i");
        if (v.test(t) && window.g[r + "URL"]) {
          l = window.g[r + "URL"] + t.replace(v, "");
          break;
        }
      }
    }
    const i = {
      method: n.toUpperCase(),
      credentials: "include"
    };
    if (n.toLowerCase() === "get" && Object.keys(s).length > 0) {
      const c = new URLSearchParams();
      for (let r in s)
        s.hasOwnProperty(r) && (s[r] || s[r] === 0 || s[r] === !1 || s[r] === "") && c.append(r, s[r]);
      l += (l.includes("?") ? "&" : "?") + c.toString();
    }
    ["post", "put"].includes(n.toLowerCase()) && (i.headers = {
      "Content-Type": "application/json"
    }, i.body = JSON.stringify(s));
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
        const r = l.split("?")[0], v = r.substring(r.lastIndexOf("/") + 1);
        v && v.includes(".") && (f = decodeURIComponent(v));
      }
    }
    const o = await u.blob(), y = window.URL.createObjectURL(o), p = document.createElement("a");
    p.href = y, p.download = f, document.body.appendChild(p), p.click(), document.body.removeChild(p), window.URL.revokeObjectURL(y);
  } catch (l) {
    console.error("下载出错:", l);
  } finally {
    Bt(!1);
  }
}
function en(t, s, n = !1) {
  let e;
  if (t && Y(s) === "Array") {
    let l = localStorage.getItem(t);
    if (l) {
      let i = JSON.parse(decodeURI(l));
      e = s.filter((u) => {
        var f;
        return (u == null ? void 0 : u.key) && ((f = i == null ? void 0 : i.indexOf) == null ? void 0 : f.call(i, u.title)) !== -1;
      }).map((u) => u.key);
    } else
      e = s.map((i) => i == null ? void 0 : i.key);
  } else
    e = [];
  return n || (e = String(e)), e;
}
function Re(t) {
  return t != null && t !== "";
}
function tn(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function Dl(t, s = !1, n = "") {
  return function(e, l) {
    var u, f;
    let i;
    if (Array.isArray(t)) {
      let o = [];
      for (let y of t)
        Re((u = l.row) == null ? void 0 : u[y]) && o.push(l.row[y]);
      i = o.join(n);
    } else typeof t == "function" ? i = t(l) : i = (f = l.row) == null ? void 0 : f[t];
    return Ie(ja, { content: s ? i === "" ? "--" : i ?? "--" : i });
  };
}
function ln(t) {
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
function an(t) {
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
function al(t) {
  let s = sessionStorage.getItem("btnPermissions");
  return s ? s.split(",").indexOf(t) > -1 : !1;
}
function Nl(t) {
  return Y(t) === "Number" && String(t) === "NaN";
}
function nn(t, s = !1, n = !1) {
  if (Y(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), l = "";
  for (let i in e)
    if (e.hasOwnProperty(i)) {
      let u = e[i];
      u === void 0 || u === "" || Y(u) === "String" && u.trim() === "" || u === null || Nl(u) ? n ? s ? l += i + "=&" : e[i] = "" : delete e[i] : s && (l += i + "=" + u + "&");
    }
  return s ? l.length > 0 ? l.substring(0, l.length - 1) : "" : e;
}
function Wt(t) {
  let s = {};
  if (Array.isArray(t)) {
    s = [];
    for (let n of t)
      Array.isArray(n) || it(n) ? s.push(Wt(n)) : Re(n) && s.push(n);
  } else if (it(t))
    for (let n in t)
      t.hasOwnProperty(n) && (Array.isArray(t[n]) || it(t[n]) ? s[n] = Wt(t[n]) : Re(t[n]) && (s[n] = t[n]));
  return s;
}
function on(t) {
  const s = window.open();
  if (s) {
    s.document.write(t);
    let n = setTimeout(() => {
      s.print(), window.clearTimeout(n), n = null;
    }, 10);
  }
}
function nl(t) {
  let s = [], n = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && s.push(t);
  for (; n.nextSibling && (n = n.nextSibling); )
    n.nodeType === 1 && s.push(n);
  return s;
}
function sn(t, s) {
  if (!t)
    return "";
  const n = [];
  if (Array.isArray(s) && typeof s[0] == "string")
    n.push(vl(s));
  else
    for (let e of s)
      n.push(vl(e));
  return pe(t, n);
}
function vl(t) {
  const [s, ...n] = t;
  return [At(s), ...n];
}
const rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Ht,
  dataFilterOrToUrl: nn,
  decimalDigitsLimit: Qa,
  directivesComponent: sn,
  downloadFileByFormSubmit: Ml,
  downloadFileWithSpin: Fl,
  fileExport: Za,
  findCollection: _t,
  formDataHeadConfig: Xa,
  getColumnsKeys: en,
  has: qa,
  hasPermission: al,
  htmlPrint: on,
  isClient: Gt,
  isEmptyValue: ln,
  isNaN: Nl,
  isNumberValue: tn,
  isValidValue: Re,
  myTypeof: Y,
  oneOf: Ya,
  removeEmptyValue: Wt,
  setValByOption: ot,
  setValue: qe,
  siblingElems: nl,
  stringLength: an,
  toFormData: Ja,
  toLine: $l,
  tooltipManual: Dl,
  trimObj: Lt
}, Symbol.toStringTag, { value: "Module" })), un = { class: "groupBoxRP" }, dn = ["onClick"], cn = /* @__PURE__ */ ce({
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
    function l(i, u) {
      var p, c, r, v, b, g, _, w;
      (p = i == null ? void 0 : i.preventDefault) == null || p.call(i);
      let f = i == null ? void 0 : i.target;
      if (u && !u.children && !f.classList.contains("active")) {
        s.push(u.path);
        return;
      }
      let o = f.parentNode, y = nl(o);
      for (let T of y) {
        (r = (c = T == null ? void 0 : T.classList) == null ? void 0 : c.remove) == null || r.call(c, "open");
        const L = (v = T == null ? void 0 : T.querySelectorAll) == null ? void 0 : v.call(T, ".open");
        if (L && Array.isArray(L))
          for (let C of L)
            (g = (b = C == null ? void 0 : C.classList) == null ? void 0 : b.remove) == null || g.call(b, "open");
      }
      (w = (_ = o == null ? void 0 : o.classList) == null ? void 0 : _.toggle) == null || w.call(_, "open");
    }
    return (i, u) => {
      const f = Z("Icon"), o = Z("sideMenuGroup", !0);
      return S(), N("ul", un, [
        (S(!0), N(be, null, Te(n.data, (y, p) => (S(), N(be, {
          key: (y == null ? void 0 : y.path) + p
        }, [
          y ? (S(), N("li", {
            key: 0,
            class: Se({ dropItemRP: y.children })
          }, [
            R("div", {
              class: Se(["menuTxtR", e(y)]),
              onClick: (c) => l(c, y),
              style: re({ paddingLeft: y.level * 20 + "px" })
            }, [
              y != null && y.icon ? (S(), le(f, {
                key: 0,
                class: "menuIcoL",
                custom: "iconfont " + y.icon
              }, null, 8, ["custom"])) : de("", !0),
              R("span", null, j((y == null ? void 0 : y.name) || "-- no name --"), 1)
            ], 14, dn),
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
let jt = [], qt = [];
const fn = function(t) {
  t && t.beforeEach ? t.beforeEach(() => {
    jt.map((s) => {
      window.clearTimeout(s);
    }), qt.map((s) => {
      window.clearInterval(s);
    }), jt.length = 0, qt.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, $e = function(t, s) {
  let n = window.setTimeout(t, s);
  return jt.push(n), n;
}, pn = function(t, s) {
  let n = window.setInterval(t, s);
  return qt.push(n), n;
}, mn = { class: "menuListR" }, hn = /* @__PURE__ */ ce({
  __name: "SideMenu",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: s }) {
    const n = t, e = s, l = ll(), i = U(!0), u = U(), f = U(), o = H(() => i.value ? O("r.hideMenu") : O("r.showMenu")), y = H(() => i.value ? "ios-arrow-back" : "ios-arrow-forward");
    Al(() => {
      let r = localStorage.getItem("menuDisplayR") || "";
      r !== "" ? i.value = JSON.parse(r) : (i.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), Ve(
      () => l.path,
      (r) => {
        u.value = r, Me(() => {
          $e(c, 10);
        });
      },
      { immediate: !0 }
    );
    function p() {
      i.value = !i.value, localStorage.setItem("menuDisplayR", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function c() {
      var v, b, g, _, w;
      let r = f.value.querySelectorAll(".dropItemRP");
      for (let T of r)
        (v = T == null ? void 0 : T.querySelector) != null && v.call(T, ".active") && !((g = (b = T.classList) == null ? void 0 : b.contains) != null && g.call(b, "open")) && ((w = (_ = T.classList) == null ? void 0 : _.add) == null || w.call(_, "open"));
    }
    return (r, v) => {
      const b = Z("Icon");
      return S(), N("div", {
        ref_key: "menuRef",
        ref: f,
        class: Se(["menuBoxRP", "cannotSelect", { light: r.light }])
      }, [
        pe(R("div", mn, [
          J(cn, {
            data: n.data,
            pathName: m(u)
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
}), yn = { class: "groupBoxRX" }, vn = ["onMouseenter"], gn = ["onClick"], bn = /* @__PURE__ */ ce({
  __name: "SideMenuProGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const s = Pt(), n = t, e = U("");
    function l(o) {
      let y = "menuTxtR ";
      return (o == null ? void 0 : o.path) === n.pathName && (y += "active "), y;
    }
    function i(o, y) {
      var c;
      (c = o == null ? void 0 : o.preventDefault) == null || c.call(o);
      let p = o == null ? void 0 : o.target;
      y && !y.children && !p.classList.contains("active") && s.push(y.path);
    }
    function u(o, y) {
      var p;
      (p = o == null ? void 0 : o.preventDefault) == null || p.call(o), e.value = y == null ? void 0 : y.path;
    }
    function f(o) {
      var y;
      (y = o == null ? void 0 : o.preventDefault) == null || y.call(o), e.value = "";
    }
    return (o, y) => {
      const p = Z("Icon"), c = Z("SideMenuProGroup", !0);
      return S(), N("ul", yn, [
        (S(!0), N(be, null, Te(n.data, (r, v) => {
          var b;
          return S(), N("li", {
            key: (r == null ? void 0 : r.path) + v,
            class: Se({ dropItemRX: r == null ? void 0 : r.children }),
            onMouseenter: (g) => u(g, r),
            onMouseleave: y[0] || (y[0] = (g) => f(g))
          }, [
            R("div", {
              class: Se(l(r)),
              onClick: (g) => i(g, r),
              style: re({ paddingLeft: r.level * 20 + "px" })
            }, [
              ke(j((r == null ? void 0 : r.name) || "-- no name --") + " ", 1),
              pe(J(p, {
                class: "dropIcoRX",
                type: "ios-arrow-forward",
                size: 16
              }, null, 512), [
                [ve, r.children && r.children.length > 0]
              ])
            ], 14, gn),
            ((b = r == null ? void 0 : r.children) == null ? void 0 : b.length) > 0 ? pe((S(), le(c, {
              key: 0,
              class: "rightChildRX",
              data: r == null ? void 0 : r.children,
              "path-name": o.pathName
            }, null, 8, ["data", "path-name"])), [
              [ve, m(e) === (r == null ? void 0 : r.path)]
            ]) : de("", !0)
          ], 42, vn);
        }), 128))
      ]);
    };
  }
}), kn = { class: "groupBoxRX" }, wn = ["onClick"], Kl = /* @__PURE__ */ ce({
  __name: "SideMenuTwoLevel",
  props: {
    data: { default: () => [] },
    pathName: { default: "" },
    fromIcoMenu: { type: Boolean }
  },
  setup(t) {
    const s = Pt(), n = t;
    function e(i) {
      let u = "menuTxtR ";
      return (i == null ? void 0 : i.path) === n.pathName && (u += "active "), u;
    }
    function l(i, u) {
      var c, r, v, b, g, _, w, T, L, C, $, P, I, h;
      (c = i == null ? void 0 : i.preventDefault) == null || c.call(i);
      let f = i == null ? void 0 : i.target;
      if (u && !u.children && !f.classList.contains("active")) {
        s.push(u.path);
        return;
      }
      const o = (r = f == null ? void 0 : f.querySelector) == null ? void 0 : r.call(f, ".dropIcoRX"), y = f.parentNode, p = nl(y);
      for (let B of p) {
        (b = (v = B == null ? void 0 : B.classList) == null ? void 0 : v.remove) == null || b.call(v, "open");
        const x = (g = B == null ? void 0 : B.querySelector) == null ? void 0 : g.call(B, ".dropIcoRX");
        (w = (_ = x == null ? void 0 : x.classList) == null ? void 0 : _.remove) == null || w.call(_, "open");
        const te = (T = B == null ? void 0 : B.querySelectorAll) == null ? void 0 : T.call(B, ".open");
        for (let z of te)
          (C = (L = z == null ? void 0 : z.classList) == null ? void 0 : L.remove) == null || C.call(L, "open");
      }
      (P = ($ = y == null ? void 0 : y.classList) == null ? void 0 : $.toggle) == null || P.call($, "open"), (h = (I = o == null ? void 0 : o.classList) == null ? void 0 : I.toggle) == null || h.call(I, "open");
    }
    return (i, u) => {
      const f = Z("Icon");
      return S(), N("ul", kn, [
        (S(!0), N(be, null, Te(n.data, (o, y) => (S(), N("li", {
          key: (o == null ? void 0 : o.path) + y,
          class: Se({ dropItemRX: o == null ? void 0 : o.children, open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu })
        }, [
          R("div", {
            class: Se(e(o)),
            onClick: (p) => l(p, o),
            style: re({ paddingLeft: o.level * 20 + "px" })
          }, [
            J(f, {
              class: "menuIcoL",
              custom: "iconfont " + (o.icon || "icon-r-menu-default")
            }, null, 8, ["custom"]),
            R("span", null, j((o == null ? void 0 : o.name) || "-- no name --"), 1),
            pe(J(f, {
              class: Se(["dropIcoRX", { open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu }]),
              type: "ios-arrow-forward"
            }, null, 8, ["class"]), [
              [ve, o.children && o.children.length > 0]
            ])
          ], 14, wn),
          o.children ? (S(), le(bn, {
            key: 0,
            data: o.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : de("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), _n = { class: "groupBoxRX" }, Vn = ["onMouseenter"], Sn = ["onClick"], Cn = /* @__PURE__ */ ce({
  __name: "SideIcoMenu",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const s = Pt(), n = t, e = U("");
    function l(o) {
      let y = "menuTxtR ";
      return (o == null ? void 0 : o.path) === n.pathName && (y += "active "), y;
    }
    function i(o, y) {
      var c;
      (c = o == null ? void 0 : o.preventDefault) == null || c.call(o);
      let p = o == null ? void 0 : o.target;
      y && !y.children && !p.classList.contains("active") && s.push(y.path);
    }
    function u(o, y) {
      var p;
      (p = o == null ? void 0 : o.preventDefault) == null || p.call(o), e.value = y == null ? void 0 : y.path;
    }
    function f(o) {
      var y;
      (y = o == null ? void 0 : o.preventDefault) == null || y.call(o), e.value = "";
    }
    return (o, y) => {
      const p = Z("Icon");
      return S(), N("ul", _n, [
        (S(!0), N(be, null, Te(n.data, (c, r) => (S(), N("li", {
          key: (c == null ? void 0 : c.path) + r,
          class: Se({ dropItemRX: c.children }),
          onMouseenter: (v) => u(v, c),
          onMouseleave: y[0] || (y[0] = (v) => f(v))
        }, [
          R("div", {
            class: Se(l(c)),
            onClick: (v) => i(v, c)
          }, [
            J(p, {
              class: "menuIcoM",
              custom: "iconfont " + (c.icon || "icon-r-menu-default"),
              size: "20"
            }, null, 8, ["custom"])
          ], 10, Sn),
          pe(J(Kl, {
            class: "rightTwoMenu",
            data: [c],
            pathName: n.pathName,
            fromIcoMenu: ""
          }, null, 8, ["data", "pathName"]), [
            [ve, m(e) === (c == null ? void 0 : c.path)]
          ])
        ], 42, Vn))), 128))
      ]);
    };
  }
}), Tn = { class: "menuListR" }, Bn = /* @__PURE__ */ ce({
  __name: "SideMenuPro",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: s }) {
    const n = t, e = s, l = ll(), i = U(!0), u = U(), f = U(), o = H(() => i.value ? O("r.hideMenu") : O("r.showMenu")), y = H(() => i.value ? "iconfont icon-r-menu-hide" : "iconfont icon-r-menu-open");
    Al(() => {
      let r = localStorage.getItem("menuDisplayRPro") || "";
      r !== "" ? i.value = JSON.parse(r) : (i.value = !0, localStorage.setItem("menuDisplayRPro", JSON.stringify(!0)));
    }), Ve(
      () => l.path,
      (r) => {
        u.value = r, Me(() => {
          $e(c, 10);
        });
      },
      { immediate: !0 }
    );
    function p() {
      i.value = !i.value, localStorage.setItem("menuDisplayRPro", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function c() {
      var v, b, g, _, w, T, L, C, $, P, I, h, B, x, te, z, M, ee, W, k, F, D, q, Q, se, me, he, Oe, Ae, ae, xe, Pe, et, He, E, K, ye, ge, we;
      let r = f.value.querySelectorAll(".dropItemRX");
      for (let G of r) {
        const _e = (b = (v = G == null ? void 0 : G.childNodes[0]) == null ? void 0 : v.querySelector) == null ? void 0 : b.call(v, ".dropIcoRX");
        (g = G == null ? void 0 : G.querySelector) != null && g.call(G, ".active") ? (T = (w = (_ = G == null ? void 0 : G.childNodes[1]) == null ? void 0 : _.classList) == null ? void 0 : w.contains) != null && T.call(w, "rightChildRX") ? ($ = (C = (L = G == null ? void 0 : G.childNodes[0]) == null ? void 0 : L.classList) == null ? void 0 : C.contains) != null && $.call(C, "activeR") || (I = G == null ? void 0 : (P = G.childNodes[0].classList).add) == null || I.call(P, "activeR") : ((B = (h = G == null ? void 0 : G.classList) == null ? void 0 : h.contains) != null && B.call(h, "open") || (te = (x = G.classList).add) == null || te.call(x, "open"), _e && !((M = (z = _e == null ? void 0 : _e.classList) == null ? void 0 : z.contains) != null && M.call(z, "open")) && ((W = (ee = _e.classList).add) == null || W.call(ee, "open"))) : (D = (F = (k = G == null ? void 0 : G.childNodes[1]) == null ? void 0 : k.classList) == null ? void 0 : F.contains) != null && D.call(F, "rightChildRX") ? (se = (Q = (q = G == null ? void 0 : G.childNodes[0]) == null ? void 0 : q.classList) == null ? void 0 : Q.contains) != null && se.call(Q, "activeR") && ((he = G == null ? void 0 : (me = G.childNodes[0].classList).remove) == null || he.call(me, "activeR")) : ((Ae = (Oe = G == null ? void 0 : G.classList) == null ? void 0 : Oe.contains) != null && Ae.call(Oe, "open") && !((xe = (ae = G == null ? void 0 : G.classList) == null ? void 0 : ae.contains) != null && xe.call(ae, "fromIcoMenu")) && ((et = (Pe = G.classList).remove) == null || et.call(Pe, "open")), (E = (He = _e == null ? void 0 : _e.classList) == null ? void 0 : He.contains) != null && E.call(He, "open") && !((ye = (K = _e == null ? void 0 : _e.classList) == null ? void 0 : K.contains) != null && ye.call(K, "fromIcoMenu")) && ((we = (ge = _e.classList).remove) == null || we.call(ge, "open")));
      }
    }
    return (r, v) => {
      const b = Z("Icon");
      return S(), N("div", {
        ref_key: "menuProRef",
        ref: f,
        class: Se(["menuBoxRPro", "cannotSelect", { light: r.light }])
      }, [
        pe(R("div", Tn, [
          J(Kl, {
            data: n.data,
            pathName: m(u)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, m(i)]
        ]),
        pe(J(Cn, {
          class: "icoMenuR",
          data: r.data,
          pathName: m(u)
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
}), Ln = ["title"], zl = /* @__PURE__ */ ce({
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
    return (i, u) => {
      const f = Z("Icon"), o = At("has");
      return pe((S(), N("div", {
        class: Se(["tableBtnsG", { disabled: e.disabled }]),
        onClick: l,
        title: e.title || m(O)("r.button")
      }, [
        J(f, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Ln)), [
        [o, e.has]
      ]);
    };
  }
}), xn = { class: "contentX" }, On = { class: "arrowA" }, Xt = /* @__PURE__ */ ce({
  __name: "ShowHidePanel",
  props: /* @__PURE__ */ da({
    bg: {}
  }, {
    modelValue: { type: Boolean, default: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const s = ca(t, "modelValue"), n = t, e = H(() => s ? "background:" + n.bg || "transparent" : "");
    return (l, i) => {
      const u = Z("Icon");
      return S(), N("div", {
        style: re(m(e))
      }, [
        pe(R("div", xn, [
          Ne(l.$slots, "default")
        ], 512), [
          [ve, s.value]
        ]),
        R("div", On, [
          R("div", {
            class: "btA",
            onClick: i[0] || (i[0] = (f) => s.value = !s.value)
          }, [
            J(u, {
              type: s.value ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), An = { class: "contentZ" }, In = /* @__PURE__ */ ce({
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
      set(u) {
        e("update:modelValue", u);
      }
    }), i = H(() => l.value ? "background:" + n.bg : "");
    return (u, f) => (S(), N("div", {
      style: re(m(i))
    }, [
      pe(R("div", An, [
        Ne(u.$slots, "default")
      ], 512), [
        [ve, m(l)]
      ])
    ], 4));
  }
}), Pn = /* @__PURE__ */ ce({
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
    }), u = H({
      get() {
        return e.open;
      },
      set(y) {
        n("on-toggle", y);
      }
    }), f = H(() => u.value ? "ios-arrow-up" : "ios-arrow-down");
    function o() {
      l || (l = !0, n("on-search", i.value), $e(() => {
        l = !1;
      }, 2e3));
    }
    return (y, p) => {
      const c = Z("Input"), r = Z("icon");
      return S(), N("div", {
        class: "tableSearchV",
        style: re({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Ne(y.$slots, "default", {}, () => [
          J(c, {
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
          onClick: p[1] || (p[1] = (v) => u.value = !m(u)),
          style: re({ color: e.btnColor })
        }, [
          J(r, {
            type: m(f),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ke(j(m(O)("r.adSearch")), 1)
        ], 4), [
          [ve, e.showBtn]
        ])
      ], 4);
    };
  }
}), Ul = {
  beforeMount(t, s) {
    function n(e) {
      var l;
      if (t.contains(e.target))
        return !1;
      (l = s == null ? void 0 : s.value) == null || l.call(s, e);
    }
    t.__vueClickOutside__ = n, Gt && document.addEventListener("click", n);
  },
  unmounted(t) {
    Gt && document.removeEventListener("click", t.__vueClickOutside__), delete t.__vueClickOutside__;
  }
};
function El(t, s, n, e, l = !1) {
  const i = (...u) => Je.apply(this, u);
  ze.call(this, {
    title: t || i("r.info.title"),
    text: s || i("r.info.text"),
    icon: n || "warning",
    onOk: e,
    buttons: [i("r.cancel")],
    closeOnClickOutside: l
  });
}
const Rn = { class: "tabSetF" }, $n = { class: "cannotSelect" }, Mn = { class: "topCheck" }, Gl = /* @__PURE__ */ ce({
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
    var h, B, x, te, z;
    const n = s, e = t, l = U(), i = U(), u = U(!0), f = U(!1), o = U(!1), y = U([]), p = H(() => {
      var ee;
      let M = O("r.unknown");
      return ((ee = e.modelValue) == null ? void 0 : ee.length) > y.value.length && (y.value = fe(e.modelValue)), y.value.map((W) => {
        let k = { label: (W == null ? void 0 : W.title) || M };
        return W != null && W.disableShowSetting && (k.disabled = !0), k;
      });
    }), c = H(() => p.value.filter((M) => M == null ? void 0 : M.disabled)), r = H({
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
    }), v = (z = (te = (x = (B = (h = Ot()) == null ? void 0 : h.appContext) == null ? void 0 : B.config) == null ? void 0 : x.globalProperties) == null ? void 0 : te.$i18n) == null ? void 0 : z.locale;
    let b = null;
    Ge(() => {
      let M = O("r.unknown"), ee = P();
      ee ? r.value = JSON.parse(decodeURI(ee)) : e.defaultCheck && (r.value = e.modelValue.filter((W) => W == null ? void 0 : W.showSettingCheck).map((W) => (W == null ? void 0 : W.title) || M)), Me(function() {
        !l.value || !i.value || (b = new Sa(l.value, i.value, {
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
    }), tl(function() {
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
      M.length === p.value.length ? (u.value = !1, f.value = !0) : M.length > c.value.length ? (u.value = !0, f.value = !1) : (u.value = !1, f.value = !1);
    }
    Ve(() => r.value, _, {
      immediate: !0,
      deep: !0
    });
    function w() {
      o.value && (I() && El(O("r.notSave"), "", "warning", L), o.value = !1);
    }
    function T() {
      o.value ? w() : (o.value = !0, Me(function() {
        var M;
        (M = b == null ? void 0 : b.update) == null || M.call(b);
      }));
    }
    function L() {
      v ? window[e.storage].setItem(e.sKey + "_" + v, encodeURI(JSON.stringify(r.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(r.value))), w();
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
      u.value ? f.value = !1 : f.value = !f.value, u.value = !1, f.value ? r.value = p.value.map((M) => M == null ? void 0 : M.label) : r.value = c.value.map((M) => M == null ? void 0 : M.label);
    }
    function P() {
      let M;
      return v ? M = window[e.storage].getItem(e.sKey + "_" + v) : M = window[e.storage].getItem(e.sKey), M;
    }
    function I() {
      var ee;
      let M = P();
      if (M) {
        if (M = JSON.parse(decodeURI(M)), (M == null ? void 0 : M.length) !== ((ee = r.value) == null ? void 0 : ee.length))
          return !0;
        for (let W of M)
          if (r.value.indexOf(W) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (M, ee) => {
      const W = Z("Icon"), k = Z("Checkbox"), F = Z("CheckboxGroup");
      return pe((S(), N("div", Rn, [
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
          R("span", $n, j(m(O)("r.tabSetting")), 1)
        ], 512),
        (S(), le(fa, {
          to: "body",
          disabled: !e.transfer
        }, [
          pe(R("div", {
            ref_key: "popperRef",
            ref: i,
            class: "tabSetCard",
            style: re({ width: e.width, backgroundColor: e.bg })
          }, [
            R("div", Mn, [
              J(k, {
                indeterminate: m(u),
                modelValue: m(f),
                "onUpdate:modelValue": ee[0] || (ee[0] = (D) => De(f) ? f.value = D : null),
                onClick: Nt($, ["prevent"])
              }, {
                default: ne(() => [
                  ke(j(m(O)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              R("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: L
              }, [
                ee[2] || (ee[2] = R("span", { class: "iconfont icon-r-save" }, null, -1)),
                R("span", null, j(m(O)("r.save")), 1)
              ])
            ]),
            J(F, {
              modelValue: m(r),
              "onUpdate:modelValue": ee[1] || (ee[1] = (D) => De(r) ? r.value = D : null)
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
        [m(Ul), C]
      ]);
    };
  }
});
function Fn(t) {
  return t.replace(/_(\w)/g, function(s, n) {
    return n.toUpperCase();
  });
}
function Ei(t) {
  let s = document.createElement("div");
  return s.textContent !== void 0 ? s.textContent = t : s.innerText = t, s.innerHTML;
}
function Gi(t) {
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
function Hl(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function ft(t) {
  return Y(t) === "String" && t.indexOf("image") > -1;
}
function bl(t) {
  const s = Hl(t);
  let n = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(s) > -1 ? n = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(s) > -1 ? n = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(s) > -1 ? n = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(s) > -1 ? n = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(s) > -1 ? n = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(s) > -1 && (n = "ios-videocam"), n;
}
function Dn(t, s) {
  let n = document.createElement("a");
  n.href = s, n.download = t, Nn(n);
}
function Nn(t) {
  let s = document.createEvent("MouseEvents");
  s.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(s);
}
function Jt({
  group: t,
  condition: s,
  pathKey: n,
  childKey: e = "children",
  path: l = []
}) {
  if (t && ya(t)) {
    if (va(s)) {
      if (it(t)) {
        let i = t, u = fe(l);
        if (s(i))
          return n && i[n] && u.push(i[n]), u;
        if (i[e] && !Fe(i[e])) {
          n && i[n] && u.push(i[n]);
          let f = Jt({
            group: i[e],
            condition: s,
            pathKey: n,
            childKey: e,
            path: u
          });
          if (!Fe(f))
            return f;
        }
      } else if (Array.isArray(t))
        for (let i of t) {
          let u = fe(l);
          if (s(i))
            return n && i[n] ? u.push(i[n]) : u.push(String(t.indexOf(i))), u;
          if (i[e] && i[e].length > 0) {
            n && i[n] ? u.push(i[n]) : u.push(String(t.indexOf(i)));
            let f = Jt({
              group: i[e],
              condition: s,
              pathKey: n,
              childKey: e,
              path: u
            });
            if (!Fe(f))
              return f;
          }
        }
    } else if (Array.isArray(t))
      for (let i of t) {
        let u = fe(l);
        if (i === s)
          return u.push(String(t.indexOf(i))), u;
      }
  }
  return [];
}
function Kn(t, s = 12) {
  if (Y(t) === "String" && t.length > 0) {
    let n = document.createElement("span");
    n.style.fontSize = s + "px", n.style.fontFamily = "inherit", n.innerHTML = t, n.style.opacity = "0", n.style.position = "fixed", n.style.top = "3000px", document.body.append(n);
    const e = n.clientWidth;
    return document.body.removeChild(n), e;
  }
  return 0;
}
function Hi(t) {
  return t === "" ? null : t;
}
function Wi(t) {
  var s;
  t = t || window.Event, t != null && t.stopPropagation ? (s = t.stopPropagation) == null || s.call(t) : t && (t.cancelBubble = !0);
}
let pt = !1;
function Yt({
  height: t,
  width: s = 416,
  title: n,
  content: e,
  onOk: l,
  onCancel: i,
  onClose: u,
  okText: f,
  cancelText: o,
  noWarnIcon: y,
  footerAlign: p,
  cancelBt: c = !0
}) {
  const r = (...w) => Je.apply(this, w);
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
                Ie("span", n || r("r.info.title")),
                Ie(
                  Dt,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      pt || (Qe.remove(), u && Y(u) === "Function" && u());
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
                Ie("div", { class: "msgBoxConO" }, _ ? [e(Ie)] : e || r("r.info.text"))
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
                    onClick(w) {
                      var T, L, C, $, P, I, h, B, x;
                      if (l && typeof l == "function") {
                        const te = l();
                        if (te && Y(te) === "Promise") {
                          pt = !0;
                          const z = (w == null ? void 0 : w.currentTarget) || (w == null ? void 0 : w.target);
                          z && ((L = (T = z.classList) == null ? void 0 : T.add) == null || L.call(T, "ivu-btn-loading"), ($ = (C = z.nextSibling) == null ? void 0 : C.setAttribute) == null || $.call(C, "disabled", "disabled"), (x = (B = ((h = (I = (P = z.parentElement) == null ? void 0 : P.parentElement) == null ? void 0 : I.querySelector) == null ? void 0 : h.call(I, ".titleN .closeN")).classList) == null ? void 0 : B.add) == null || x.call(B, "disabled")), Promise.resolve(te).then(() => {
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
                    Ie("span", f || r("r.confirm"))
                  ]
                ),
                Ie(
                  Dt,
                  {
                    class: ["cancelBtN", !c && "hide"],
                    onClick() {
                      pt || (Qe.remove(), Y(i) === "Function" && i && i());
                    }
                  },
                  () => o || r("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
const zn = window.location.origin;
let xt = null;
const kl = (...t) => Je.apply(xt, t);
let Ee = Ut.create({
  baseURL: zn,
  withCredentials: !0
  // 允许携带cookie
});
function Un() {
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
    Un();
}
Ee.interceptors.response.use(
  (t) => {
    var s, n;
    return xt && (((s = t == null ? void 0 : t.data) == null ? void 0 : s.code) === 403 || ((n = t == null ? void 0 : t.data) == null ? void 0 : n.code) === 409) && Yt({
      content: kl("r.http." + t.data.code),
      onOk: wl
    }), t;
  },
  (t) => {
    var s, n;
    return xt && (((s = t == null ? void 0 : t.response) == null ? void 0 : s.status) === 403 || ((n = t == null ? void 0 : t.response) == null ? void 0 : n.status) === 409) && Yt({
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
    for (let u of n)
      i = i[u], l = l && i;
    return l ? i : (s && console.warn(s), !1);
  }
  return s && console.warn(s), !1;
}
function En(t, s, n, e, l, i, u) {
  return new Promise((f, o) => {
    switch (t) {
      case "get":
        Ee.get(s, { params: n }).then((p) => {
          let c = Ye(p, e, l, i);
          c ? f(c) : o(p);
        }).catch((p) => {
          Ye({}, e, l, i), o(p);
        });
        break;
      case "delete":
        let y = u ? "params" : "data";
        Ee.delete(s, { [y]: n }).then((p) => {
          let c = Ye(p, e, l, i);
          c ? f(c) : o(p);
        }).catch((p) => {
          Ye({}, e, l, i), o(p);
        });
        break;
      case "post":
        Ee.post(s, n, i).then((p) => {
          let c = Ye(p, e, l, i);
          c ? f(c) : o(p);
        }).catch((p) => {
          Ye({}, e, l, i), o(p);
        });
        break;
      case "put":
        Ee.put(s, n, i).then((p) => {
          let c = Ye(p, e, l, i);
          c ? f(c) : o(p);
        }).catch((p) => {
          Ye({}, e, l, i), o(p);
        });
        break;
    }
  });
}
function kt(t, s, n = {}, e, l, i, u) {
  return new Promise((f, o) => {
    var y;
    if (s) {
      i && i.spin && Bt(!0);
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
      let c;
      if (((y = i == null ? void 0 : i.headers) == null ? void 0 : y["Content-Type"]) === "multipart/form-data")
        c = n;
      else if (Array.isArray(n) ? c = [] : c = {}, n && !Fe(n))
        if (Array.isArray(n)) {
          c = [];
          for (let v of n)
            (v || v === 0 || v === !1 || v === "" && i && !i.noEmptyStr) && c.push(v);
        } else {
          c = {};
          for (let v in n)
            n.hasOwnProperty(v) && (n[v] || n[v] === 0 || n[v] === !1 || n[v] === "" && i && !i.noEmptyStr) && (c[v] = n[v]);
        }
      let r = t.toLowerCase();
      En(r, p, c, e, l, i, u).then((v) => {
        f(v);
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
    return new Promise((i, u) => {
      kt("post", t, s, n, e, l).then((f) => {
        i(f);
      }).catch((f) => {
        u(f);
      });
    });
  },
  put(t, s, n, e, l) {
    return new Promise((i, u) => {
      kt("put", t, s, n, e, l).then((f) => {
        i(f);
      }).catch((f) => {
        u(f);
      });
    });
  },
  get(t, s, n, e, l) {
    return new Promise((i, u) => {
      kt("get", t, s, n, e, l).then((f) => {
        i(f);
      }).catch((f) => {
        u(f);
      });
    });
  },
  delete(t, s, n, e, l, i = !0) {
    return new Promise((u, f) => {
      kt("delete", t, s, n, e, l, i).then((o) => {
        u(o);
      }).catch((o) => {
        f(o);
      });
    });
  },
  all: Ut.all,
  spread: Ut.spread,
  config: Ee
}, Gn = {
  key: 0,
  class: "pageTotal"
}, Hn = {
  key: 1,
  class: "pageProSize"
}, Wl = /* @__PURE__ */ ce({
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
    var r;
    const n = s, e = U(), l = t, i = ((r = Le == null ? void 0 : Le()) == null ? void 0 : r.fontSizeBase) || 14, u = U(16), f = H({
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
        n("on-page-size-change", v), f.value !== 1 && (f.value = 1);
      }
    }), y = H(() => {
      const v = Kn(String(l.total || 0), i) + u.value + 2;
      return v < 32 ? 32 : v;
    });
    Ve(
      y,
      (v) => {
        Me(function() {
          c(v);
        });
      },
      { immediate: !0 }
    );
    function p() {
      var w, T, L;
      const v = (L = (T = (w = e.value) == null ? void 0 : w.$el) == null ? void 0 : T.querySelector) == null ? void 0 : L.call(T, "input");
      if (!v)
        return 16;
      const b = window.getComputedStyle(v), g = b == null ? void 0 : b.paddingLeft, _ = b == null ? void 0 : b.paddingRight;
      return !g || !_ ? 16 : Number(g.replace("px", "")) + Number(_.replace("px", ""));
    }
    function c(v) {
      var g, _, w;
      const b = (w = (_ = (g = e.value) == null ? void 0 : g.$el) == null ? void 0 : _.querySelector) == null ? void 0 : w.call(_, "input");
      b != null && b.style && (b.style.width = `${v}px`);
    }
    return Ge(() => {
      u.value = p();
    }), (v, b) => {
      const g = Z("Page"), _ = Z("Option"), w = Z("Select");
      return S(), N("div", {
        class: Se(["pagePro", { pageProDefault: l.size === "default" }])
      }, [
        l.showTotal ? (S(), N("span", Gn, j(m(O)("r.total") + " ") + j(l.total) + j(" " + m(O)("r.items")), 1)) : de("", !0),
        J(g, {
          ref_key: "pageRef",
          ref: e,
          modelValue: m(f),
          "onUpdate:modelValue": b[0] || (b[0] = (T) => De(f) ? f.value = T : null),
          "page-size": m(o),
          total: l.total,
          size: l.size,
          "page-size-opts": l.pageSizeOpts,
          disabled: l.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        l.showSizer ? (S(), N("div", Hn, [
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
}), Wn = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, jn = { class: "topBtn" }, qn = { class: "tableContainer growFlexItem" }, Xn = { class: "fullHeight relativeBox" }, Jn = { class: "pageContainer" }, Qt = /* @__PURE__ */ ce({
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
    ({ ...ka });
    const l = t, i = ((He = Le()) == null ? void 0 : He.pageSizes) || [10, 20, 50, 100], u = U(l.data), f = U(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || l.pageSize
    ), o = U(1), y = U(0);
    let p = [], c, r, v = U(l.orderKey), b = U(l.orderDefault);
    const g = U(300), _ = H(() => {
      for (let E of l.columns)
        if (E != null && E.fixed)
          return !0;
      return !1;
    }), w = H(() => l.selectionFixed || _.value), T = H(() => {
      let E = {
        ...l.searchData,
        current: o.value,
        size: f.value
      };
      return l.sortable === "custom" && (l.orderKeyFormat === "underline" ? E[b.value] = $l(v.value) : l.orderKeyFormat === "camelcase" && (E[b.value] = Fn(v.value))), E;
    }), L = H(() => {
      let E = l.columns.filter((K) => K && K.type !== "selection");
      if (l.selection || l.radio) {
        let K;
        l.radio ? K = {
          title: " ",
          width: 65,
          render: (ye, ge) => Ie(wa, {
            modelValue: ge.row.btChecked
          })
        } : K = {
          type: "selection",
          width: 60
        }, l.selectionFixed && (K.fixed = l.selectionFixed), E.unshift(K);
      }
      return E.forEach((K) => {
        var ye;
        K && (l.sortable === "custom" ? K.key && K.sortable !== !0 && K.sortable !== !1 && (K.sortable = "custom") : K.sortable = !1, K.align || (K.align = ((ye = Le()) == null ? void 0 : ye.btTablePageAlign) || "center"));
      }), E.forEach((K) => {
        K != null && K.key && K.render === void 0 && (K.tooltip ? K.render = Dl(K.key, l.tableEmptyTdHandle) : K.render = (ye, ge) => {
          let we = "";
          return K != null && K.key && (we = ge.row[K.key]), l.tableEmptyTdHandle ? Ie("span", we === "" ? "--" : we ?? "--") : Ie("span", we);
        });
      }), E;
    }), C = H({
      get() {
        return u.value.map((E, K) => Object.assign({}, E, {
          btKey: "bt-" + K,
          btChecked: !!E.btChecked
        }));
      },
      set(E) {
        u.value = E;
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
    function x() {
      l.initData && Ae();
    }
    function te(E) {
      u.value.unshift(fe(E)), $e(() => {
        var K, ye;
        (ye = (K = I.value) == null ? void 0 : K.clickCurrentRow) == null || ye.call(K, 0);
      }, 100);
    }
    function z(E, K, ye) {
      let ge = null;
      if (typeof K == "number" ? ge = K : K && (ge = r), ge !== null) {
        let we = u.value[ge];
        for (let G in E)
          E.hasOwnProperty(G) && (we[G] = E[G]);
        ye && $e(() => {
          var G, _e;
          (_e = (G = I.value) == null ? void 0 : G.clickCurrentRow) == null || _e.call(G, ge);
        }, 10);
      }
    }
    function M(E) {
      u.value.splice(E, 1), $e(() => {
        var K, ye;
        (ye = (K = I.value) == null ? void 0 : K.clickCurrentRow) == null || ye.call(K, 0);
      }, 100);
    }
    function ee(E, K) {
      var ye, ge;
      E.btChecked && l.radio || (l.selection || l.radio) && l.rowClickSelect && ((ge = (ye = I.value) == null ? void 0 : ye.toggleSelect) == null || ge.call(ye, K));
    }
    function W(E, K) {
      c = K.btKey, r = Number(K.btKey.split("-")[1]), l.radio && (u.value[r].btChecked = !0);
    }
    function k(E) {
      if (l.radio)
        for (let K of C.value)
          K != null && K.btKey && K.btKey !== c && (u.value[Number(K.btKey.split("-")[1])].btChecked = !1);
      p = E, e("on-selection-change", E);
    }
    function F() {
      return fe(p);
    }
    function D() {
      Ae();
    }
    function q(E) {
      f.value = E, localStorage.setItem("btPageSize", String(E)), o.value === 1 && Ae();
    }
    function Q({ key: E, order: K }) {
      K === "normal" ? (v.value = l.orderKey, b.value = l.orderDefault) : (v.value = E, b.value = K), o.value = 1, Oe();
    }
    function se(E) {
      var ye, ge, we, G, _e, tt, lt, ut;
      const K = E;
      if (typeof K == "number")
        me(), r = K, c = (ge = (ye = C.value) == null ? void 0 : ye[K]) == null ? void 0 : ge.btKey, (G = (we = I.value) == null ? void 0 : we.clickCurrentRow) == null || G.call(we, K);
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
      p.length > 0 && (p = [], e("on-selection-change", [])), c = null, r = null;
    }
    function he() {
      u.value = [], me(), o.value = 1, y.value = 0;
    }
    function Oe(E, K, ye) {
      return new Promise((ge) => {
        E && (b.value = E), K && (v.value = K), l.url ? We[l.method](l.url, T.value, "", [], { spin: l.getDataLoading }).then((we) => {
          var _e, tt;
          let G;
          ye || me(), typeof l.dataHandler == "function" ? G = l.dataHandler(we) : G = we, G.data ? (G.data.records || G.data.records === null ? u.value = G.data.records || [] : G.data.page ? (G.data.page.records || G.data.page.records === null) && (u.value = G.data.page.records || []) : G.data.data ? (G.data.data.records || G.data.data.records === null) && (u.value = G.data.data.records || []) : u.value = G.data, y.value = ((_e = G.data.page) == null ? void 0 : _e.total) || ((tt = G.data.data) == null ? void 0 : tt.total) || G.data.total || G.total || 0, y.value === 0 && o.value > 1 && u.value && u.value.length === 0 ? o.value = 1 : o.value > 1 && y.value <= (o.value - 1) * f.value && (o.value--, Me(function() {
            Oe(E, K);
          })), e("on-data-change", G), ge(G)) : (console.warn("请求返回数据有误，无法使用"), he(), e("on-data-change", G));
        }).catch((we) => {
          me(), he(), e("on-data-change", we);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Ae(E, K, ye) {
      l.radio && (E || l.rowClickNum !== -1) ? Oe(K, ye, E).then(() => {
        u.value.length > 0 && $e(() => {
          var ge, we, G, _e;
          E ? (we = (ge = I.value) == null ? void 0 : ge.clickCurrentRow) == null || we.call(ge, r || 0) : (_e = (G = I.value) == null ? void 0 : G.clickCurrentRow) == null || _e.call(G, l.rowClickNum);
        }, 10);
      }) : Oe();
    }
    function ae() {
      g.value < 50 ? $e(ae, 100) : $e(xe, 10);
    }
    function xe() {
      var E;
      g.value = ((E = h.value) == null ? void 0 : E.clientHeight) || 0;
    }
    function Pe() {
      var E, K;
      xe(), (K = (E = I.value) == null ? void 0 : E.handleResize) == null || K.call(E);
    }
    const et = It(Pe, 300);
    return Ge(() => {
      x(), w.value && (ae(), window.addEventListener("resize", et));
    }), tl(() => {
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
      return S(), N("div", Wn, [
        pe(R("div", jn, [
          Ne(E.$slots, "tableSetting"),
          Ne(E.$slots, "topMsg"),
          Ne(E.$slots, "topBtnGroup")
        ], 512), [
          [ve, l.showTopRow]
        ]),
        R("div", qn, [
          R("div", Xn, [
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
                columns: m(L),
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
        pe(R("div", Jn, [
          l.usePagePro ? (S(), le(Wl, {
            key: 0,
            modelValue: m(o),
            "onUpdate:modelValue": K[0] || (K[0] = (we) => De(o) ? o.value = we : null),
            total: m(y),
            showTotal: l.showTotal,
            pageSize: m(f),
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
            pageSize: m(f),
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
}), jl = /* @__PURE__ */ ce({
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
        let c = {
          key: p,
          val: null
        };
        l.value && l.value !== p && (c.beforeKey = l.value), n("update:modelValue", c), n("on-change", c);
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
    }), u = H(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), f = H(() => ({
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
    return (p, c) => {
      const r = Z("Option"), v = Z("Select"), b = Z("Input");
      return S(), N("div", null, [
        J(v, {
          modelValue: m(l),
          "onUpdate:modelValue": c[0] || (c[0] = (g) => De(l) ? l.value = g : null),
          style: re(m(u)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: ne(() => [
            (S(!0), N(be, null, Te(e.selectOption, (g, _) => (S(), le(r, {
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
          "onUpdate:modelValue": c[1] || (c[1] = (g) => De(i) ? i.value = g : null),
          placeholder: e.placeholder || m(O)("r.pInput"),
          style: re(m(f)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: o
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
let Zt = { securityJsCode: "", key: "" };
function Yn({ securityJsCode: t, key: s }) {
  Zt.securityJsCode = t, Zt.key = s;
}
function Qn(t) {
  return Zt[t];
}
const ql = /* @__PURE__ */ ce({
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
    }), i = H(() => wt(e.width) ? e.width + "px" : e.width), u = H(() => wt(e.height) ? e.height + "px" : e.height ? e.height : wt(e.width) ? e.width * 0.66 + "px" : "200px"), f = H(() => ({
      width: i.value,
      position: "relative"
    })), o = H(() => ({
      width: i.value,
      height: u.value,
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
    const y = "mapId" + Math.floor(Math.random() * 1e9), p = U(null), c = U(null);
    let r;
    function v() {
      c.value && c.value.clientHeight < 10 || !c.value ? $e(v, 300) : $e(w, 100);
    }
    let b, g, _;
    function w() {
      pl.load({
        key: Qn("key"),
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
          }).on("select", (x) => {
            var te, z, M;
            (te = x == null ? void 0 : x.poi) != null && te.name && ((z = x.poi.location) != null && z.lng && ((M = x.poi.location) != null && M.lat) ? (T({
              name: x.poi.name,
              lng: x.poi.location.lng,
              lat: x.poi.location.lat
            }), l.value = {
              name: x.poi.name,
              lng: x.poi.location.lng,
              lat: x.poi.location.lat
            }) : g == null || g.setCity(x.poi.name, () => {
              let ee = g.getCenter();
              T({
                name: x.poi.name,
                lng: ee.lng,
                lat: ee.lat
              }), l.value = {
                name: x.poi.name,
                lng: ee.lng,
                lat: ee.lat
              };
            })), n("on-change", l.value);
          }), g == null || g.on("hotspotclick", (x) => {
            T({
              name: x.name,
              lng: x.lnglat.lng,
              lat: x.lnglat.lat
            }), l.value = {
              name: x.name,
              lng: x.lnglat.lng,
              lat: x.lnglat.lat
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
      g == null || g.add(h), L(C, $), h.on("dragend", () => {
        let B = h.getPosition();
        l.value = {
          name: P || null,
          lng: B.lng,
          lat: B.lat
        }, L(C, $);
      }), h.on("click", (B) => {
        var x, te;
        r && r.open(g, (te = (x = B == null ? void 0 : B.target) == null ? void 0 : x.getPosition) == null ? void 0 : te.call(x));
      }), g == null || g.setFitView();
    }
    function L(C, $) {
      _ == null || _.getAddress([C, $], (P, I) => {
        P === "complete" && I.info === "OK" && I.regeocode && I.regeocode.formattedAddress ? r = new b.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + I.regeocode.formattedAddress + "</div>",
          offset: new b.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (r = null, console.warn("地图获取位置信息失败", I));
      });
    }
    return Ge(v), Ol(() => {
      var C;
      g && (g.destroy(), (C = pl) == null || C.reset(), g = null, _ = null, r = null);
    }), (C, $) => (S(), N("div", {
      style: re(m(f)),
      class: "containerIKJ"
    }, [
      J(m(_a), {
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
        ref: c,
        id: y
      }, null, 4)
    ], 4));
  }
});
var Ll;
const Xl = /* @__PURE__ */ ce({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (Ll = window == null ? void 0 : window.g) != null && Ll.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
        return Array.isArray(p) ? fe(p) : wt(p) ? Jt({
          group: l.value,
          condition: (c) => (c == null ? void 0 : c.value) === p,
          pathKey: "value"
        }) : Il(p) ? p.split(e.separator) : [];
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
    function u() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      We.get(e.url).then((p) => {
        var r;
        let c = null;
        (r = p == null ? void 0 : p.data) != null && r.records ? c = p.data.records : p != null && p.data ? c = p.data : p && (c = p), c ? (typeof e.optionFilter == "function" && Y(e.optionFilter) === "Function" && (c = e.optionFilter(c)), l.value = f(c)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function f(p) {
      let c = [];
      for (let r of p) {
        let v = {
          value: r[e.optionVal],
          label: r[e.optionLabel]
        };
        r != null && r.children && !Fe(r.children) && (v.children = f(r.children)), c.push(v);
      }
      return c;
    }
    function o(p) {
      return e.onlyLastLabel ? Vt(p) : p.join(e.separator);
    }
    function y(p, c) {
      let r = "";
      Fe(c) || (r = c.map((v) => v == null ? void 0 : v.label).join(e.separator)), n("on-label-change", r);
    }
    return Ge(u), (p, c) => {
      const r = Z("Cascader");
      return S(), le(r, {
        data: m(l),
        modelValue: m(i),
        "onUpdate:modelValue": c[0] || (c[0] = (v) => De(i) ? i.value = v : null),
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
}), Jl = /* @__PURE__ */ ce({
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
            let f = i.substring(0, 2) + "0000000000", o = i.substring(0, 4) + "00000000";
            return [f, o, i];
          }
          return i.indexOf(e.separator) !== -1 ? i.split(e.separator) : [i];
        } else return Array.isArray(e.modelValue) ? fe(e.modelValue) : [];
      },
      set(i) {
        if (Fe(i))
          n("update:modelValue", null), n("on-name-change", null);
        else {
          let u = Vt(i), f = "", o = "";
          if (u && (f = u.code), f && f.length < 12) {
            let y = [...f];
            for (; y.length < 12; )
              y.push(0);
            f = y.join("");
          }
          if (Array.isArray(i) && (o = i.map((y) => y == null ? void 0 : y.name).join(e.separator)), f) {
            if (f === e.modelValue)
              return;
            n("update:modelValue", f);
          }
          o && n("on-name-change", o);
        }
      }
    });
    return (i, u) => (S(), le(m(Ca), rt(i.$attrs, {
      class: "alCascaderMC",
      modelValue: m(l),
      "onUpdate:modelValue": u[0] || (u[0] = (f) => De(l) ? l.value = f : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || m(O)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let Xe = 0;
function Yl(t, s, n, e) {
  var l, i, u;
  e && (e.innerHTML = ((l = t[s]) == null ? void 0 : l.name) ?? "", (i = t[s]) != null && i.name ? e.classList.contains("hide") && e.classList.remove("hide") : e.classList.contains("hide") || e.classList.add("hide")), n && (n.src = ((u = t[s]) == null ? void 0 : u.src) ?? t[s], Xe = s);
}
function _l(t, s, n, e) {
  if (t) {
    let l;
    Xe - 1 < 0 ? l = s.length - 1 : l = Xe - 1, Yl(s, l, n, e);
  }
}
function Vl(t, s, n, e) {
  if (t) {
    let l;
    Xe + 1 > s.length - 1 ? l = 0 : l = Xe + 1, Yl(s, l, n, e);
  }
}
function mt(t, s = 0) {
  var w, T, L, C, $, P, I;
  const n = (...h) => Je.apply(this, h), e = n("r.closePreview"), l = n("r.fullImg"), i = n("r.last"), u = n("r.next");
  let f, o, y;
  Xe = s;
  const p = Array.isArray(t);
  p ? (o = ((w = t[Xe]) == null ? void 0 : w.src) ?? t[Xe], y = (T = t[Xe]) == null ? void 0 : T.name) : o = t, p && t.length > 1 ? f = `${i} ： ←, ↑, A, W | ${u} ： →, ↓, D, S | ${e} ： Esc` : f = `${e} ： Esc`;
  let c = Kt(document.getElementsByTagName("body")), r = document.createElement("div");
  r.setAttribute("class", "fullScreenImgByDom"), r.innerHTML = `<div class='previewInner'><div class='pageFBt left${p && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${i}' ></i></div><img src='${o}' alt='${l}' ><div class='pageFBt right${p && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${u}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${f}</p><p class='pName ${y ? "" : "hide"}'>${y}</p>`;
  function v() {
    let h = Kt(document.getElementsByTagName("body"));
    h && h.removeChild(r), document.removeEventListener("keyup", _);
  }
  (C = (L = r.querySelector(".ivu-icon-md-close")) == null ? void 0 : L.addEventListener) == null || C.call(L, "click", v);
  const b = r.querySelector("img"), g = r.querySelector(".pName");
  ($ = r.querySelector(".pageFBt.left")) == null || $.addEventListener("click", function() {
    _l(p, t, b, g);
  }), (P = r.querySelector(".pageFBt.right")) == null || P.addEventListener("click", function() {
    Vl(p, t, b, g);
  });
  function _(h) {
    h.keyCode === 37 || h.keyCode === 38 || h.keyCode === 87 || h.keyCode === 65 ? _l(p, t, b, g) : h.keyCode === 39 || h.keyCode === 40 || h.keyCode === 83 || h.keyCode === 68 ? Vl(p, t, b, g) : h.keyCode === 27 && v();
  }
  document.addEventListener("keyup", _), (I = c == null ? void 0 : c.appendChild) == null || I.call(c, r), r.focus({ preventScroll: !0 });
}
const Zn = {
  key: 0,
  class: "previewBoxM"
}, eo = { class: "imgLoading" }, to = ["src", "alt"], lo = { class: "deleteModal" }, ao = {
  key: 1,
  class: "previewBoxM"
}, no = {
  key: 0,
  class: "previewImg"
}, oo = ["src", "alt"], io = { class: "deleteModal" }, so = {
  key: 2,
  class: "customFileListM"
}, ro = {
  key: 0,
  class: "customFileListItem"
}, uo = ["onClick", "title"], co = { class: "btBoxJ" }, fo = {
  key: 3,
  class: "customFileListM"
}, po = {
  key: 0,
  class: "customFileListItem"
}, mo = { class: "listLoading" }, ho = ["onClick", "title"], yo = { class: "btBoxJ" };
var xl;
const Ql = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = ht([]), i = ht([]), u = ht([]);
    let f = {};
    const o = U(0), y = H(() => !e.manualUpload && e.showImg && v.value ? "img" : e.manualUpload && e.showImg && v.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !v.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !v.value) ? "list" : ""), p = H(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), c = H({
      //文件集合
      get() {
        return e.manualUpload ? r.value : r.value.map((k) => ({ id: k }));
      },
      set(k) {
        e.manualUpload ? r.value = k || [] : r.value = (k == null ? void 0 : k.map((F) => F == null ? void 0 : F.id)) || [];
      }
    }), r = H({
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
          let F = Kt(k);
          n("update:modelValue", F ?? null), n("on-change", F ?? null);
        } else
          n("update:modelValue", fe(k)), n("on-change", fe(k));
      }
    }), v = H(() => {
      let k;
      if (e.manualUpload ? k = c.value : k = i.value, !k)
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
    }))), _ = H(() => c.value.filter((k) => ft(k == null ? void 0 : k.type)));
    Ve(_, async (k) => {
      u.value = await T(k);
    }), Ve(
      () => c.value,
      async (k) => {
        if (y.value === "localImg")
          k != null && k.length ? l.value = await T(k) : l.value = [];
        else if (k != null && k.length && y.value !== "localList") {
          let F = fe(k);
          const D = fe(i.value);
          for (let q of F)
            if ((q == null ? void 0 : q.name) === void 0)
              if (q.id) {
                const Q = zt(D, (se) => (se == null ? void 0 : se.id) === q.id);
                Q ? (q.name = Q.name, q.mimeType = Q.mimeType) : f.hasOwnProperty(q.id) ? (q.name = f[q.id].name, q.mimeType = f[q.id].mimeType) : (q.mimeType = "loading", We.get(e.url + "/" + q.id).then((se) => {
                  var me, he, Oe, Ae, ae, xe;
                  q.name = ((Oe = (he = (me = se == null ? void 0 : se.data) == null ? void 0 : me.returnValue) == null ? void 0 : he[0]) == null ? void 0 : Oe.name) || O("r.file") + cl(k, q), q.mimeType = ((xe = (ae = (Ae = se == null ? void 0 : se.data) == null ? void 0 : Ae.returnValue) == null ? void 0 : ae[0]) == null ? void 0 : xe.mimeType) || "unknown", pa(i);
                }).catch(() => {
                  q.name = O("r.file") + cl(F, q);
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
        let q = await gl(D);
        F.push(q);
      }
      return F;
    }
    function L(k) {
      if (!e.disabled) {
        let F = c.value;
        F == null || F.splice(k, 1), c.value = F, o.value && o.value--;
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
        if (typeof k == "number" ? (F = k, D = l.value) : k && (F = St(_.value, (q) => q.size === k.size && q.lastModified === k.lastModified), D = u.value), !D)
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
      Y(k) === "String" && k.indexOf("http") > -1 ? window.open(k) : Y(k) === "File" && gl(k).then((F) => {
        Dn(k.name, F);
      });
    }
    function h(k) {
      var F, D;
      if (e.length && o.value >= e.length)
        return ze(O("r.info.title"), O("r.uploadLength", [e.length]), "warning"), !1;
      if (o.value++, e.manualUpload) {
        if (k) {
          let q = Hl(k.name);
          if ((F = e.format) != null && F.length && e.format.indexOf(q) < 0)
            return ze(
              O("r.wrongFileType"),
              O("r.supportType") + (((D = e.format) == null ? void 0 : D.length) && String(e.format) || O("r.none")),
              "warning"
            ), o.value--, !1;
          if (e.maxSize && k.size > e.maxSize * 1024)
            return ze(O("r.fileIsBig"), O("r.supportSize") + e.maxSize + "kb", "warning"), o.value--, !1;
          let Q = c.value;
          Q == null || Q.push(k), c.value = Q;
        }
        return !1;
      } else
        return !0;
    }
    function B(k) {
      o.value--, console.warn(k), ze(O("r.uploadError"), "", "error");
    }
    function x(k, F, D) {
      var q, Q, se, me, he, Oe;
      if ((k == null ? void 0 : k.code) === 0) {
        let Ae = c.value;
        F.id = (Q = (q = k.data) == null ? void 0 : q[0]) == null ? void 0 : Q.id, F.name = (me = (se = k.data) == null ? void 0 : se[0]) == null ? void 0 : me.name, F.mimeType = (Oe = (he = k.data) == null ? void 0 : he[0]) == null ? void 0 : Oe.mimeType, f[F.id] = { name: F.name, mimeType: F.mimeType }, Ae == null || Ae.push(F), c.value = Ae;
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
      if (!(!F && F !== 0) && !e.disabled && r.value.indexOf(F) !== -1) {
        const D = fe(r.value);
        let q = c.value;
        q == null || q.splice(D.indexOf(F), 1), c.value = q, o.value && o.value--;
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
          "on-success": x,
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
          disabled: e.length > 0 && ((se = m(c)) == null ? void 0 : se.length) >= e.length || !!e.disabled
        }, {
          default: ne(() => {
            var ae;
            return [
              J(D, {
                icon: "md-cloud-upload",
                disabled: e.length > 0 && ((ae = m(c)) == null ? void 0 : ae.length) >= e.length || !!e.disabled
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
        m(y) === "img" && ((me = m(i)) == null ? void 0 : me.length) > 0 ? (S(), N("div", Zn, [
          (S(!0), N(be, null, Te(m(i), (ae, xe) => (S(), N(be, {
            key: ae == null ? void 0 : ae.id
          }, [
            !e.manualUpload && (ae == null ? void 0 : ae.id) !== null ? (S(), N("div", {
              key: 0,
              class: Se(["previewImg", { previewLoading: ae.mimeType === "loading" }])
            }, [
              pe(R("div", eo, F[0] || (F[0] = [
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
              }, null, 8, to), [
                [ve, ae.mimeType !== "loading"]
              ]),
              pe(R("div", lo, [
                J(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: m(O)("r.fView"),
                  onClick: (Pe) => m(mt)(m(g), xe)
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
        m(y) === "localImg" && ((he = m(l)) == null ? void 0 : he.length) > 0 ? (S(), N("div", ao, [
          (S(!0), N(be, null, Te(m(l), (ae, xe) => (S(), N(be, {
            key: "manualImg" + xe
          }, [
            e.manualUpload && ae !== null ? (S(), N("div", no, [
              R("img", {
                src: ae,
                alt: "manualImg" + xe
              }, null, 8, oo),
              R("div", io, [
                J(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (Pe) => P(xe),
                  title: m(O)("r.fView")
                }, null, 8, ["onClick", "title"]),
                J(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (Pe) => L(xe),
                  title: m(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : de("", !0)
          ], 64))), 128))
        ])) : de("", !0),
        m(y) === "localList" && ((Oe = m(c)) == null ? void 0 : Oe.length) > 0 ? (S(), N("div", so, [
          (S(!0), N(be, null, Te(m(c), (ae, xe) => (S(), N(be, {
            key: "manualItem" + xe
          }, [
            e.manualUpload && ae !== null ? (S(), N("p", ro, [
              ae.name ? (S(), le(Q, {
                key: 0,
                class: "fileTypeIco",
                type: m(bl)(ae.name),
                size: "20"
              }, null, 8, ["type"])) : de("", !0),
              R("span", {
                class: Se(["upNameT", { previewName: $(ae) }]),
                onClick: (Pe) => I(ae),
                title: m(O)("r.download")
              }, j(w(ae)), 11, uo),
              R("span", co, [
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
                  onClick: (Pe) => L(xe),
                  title: m(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : de("", !0)
          ], 64))), 128))
        ])) : de("", !0),
        m(y) === "list" && ((Ae = m(i)) == null ? void 0 : Ae.length) > 0 ? (S(), N("div", fo, [
          (S(!0), N(be, null, Te(m(i), (ae, xe) => (S(), N(be, {
            key: "defaultItem" + xe
          }, [
            !e.manualUpload && ae ? (S(), N("div", po, [
              pe(R("div", mo, F[1] || (F[1] = [
                R("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ve, ae.mimeType === "loading"]
              ]),
              pe(J(Q, {
                type: m(bl)(ae.name),
                class: "fileTypeIco",
                size: "20"
              }, null, 8, ["type"]), [
                [ve, ae.mimeType !== "loading"]
              ]),
              pe(R("span", {
                class: "upNameT",
                onClick: (Pe) => C(ae),
                title: m(O)("r.download")
              }, j(ae.name || m(O)("r.file") + (xe + 1)), 9, ho), [
                [ve, ae.mimeType !== "loading"]
              ]),
              pe(R("span", yo, [
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
                  onClick: (Pe) => L(xe),
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
}), Zl = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = U(!1), i = U(!1), u = U(!1), f = H({
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
        n("update:modelValue", [f.value, _]), n("on-change", [f.value, _]);
      }
    }), y = H(
      () => (f.value || "") + ((f.value || o.value) && " - " || "") + (o.value || "")
    ), p = U();
    Ge(() => {
      p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        u.value = !0;
      }), p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        u.value = !1;
      }), p.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (_) => {
        var w;
        !e.disabled && (f.value || o.value) && ((w = _ == null ? void 0 : _.stopPropagation) == null || w.call(_), b());
      });
    });
    function c() {
      e.disabled || (l.value = !0);
    }
    function r(_) {
      f.value = _, l.value = !1, i.value = !0;
    }
    function v(_) {
      o.value = _, i.value = !1;
    }
    function b() {
      n("update:modelValue", [null, null]), n("on-change", [null, null]);
    }
    function g() {
      l.value = !1, i.value = !1, f.value && o.value === null && (f.value = null);
    }
    return (_, w) => {
      const T = Z("DatePicker"), L = Z("Icon"), C = Z("Input");
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
          modelValue: m(f),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: r,
          onOnClickoutside: g
        }, {
          default: ne(() => [
            R("div", { onClick: c }, [
              J(C, {
                class: "aRoot",
                modelValue: m(y),
                "onUpdate:modelValue": w[0] || (w[0] = ($) => De(y) ? y.value = $ : null),
                readonly: "",
                placeholder: e.placeholder || m(O)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: ne(() => [
                  J(L, {
                    type: m(u) && (m(f) || m(o)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), ea = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = U(), i = "date-c-r-" + Math.floor(Math.random() * 1e7 + 1e7), u = U({}), f = H({
      get() {
        return e.modelValue;
      },
      set(p) {
        n("update:modelValue", p);
      }
    }), o = H(() => {
      if (Y(e.options) === "Object") {
        const { disabledDate: p, ...c } = e.options;
        return c;
      }
      return {};
    });
    function y(p) {
      var r, v;
      const c = p.target;
      ((v = (r = c.classList) == null ? void 0 : r.contains) != null && v.call(r, "ivu-date-picker-cells-cell") || c.tagName === "EM") && $e(() => {
        var g, _;
        const b = (_ = (g = l == null ? void 0 : l.value) == null ? void 0 : g.$refs.pickerPanel) == null ? void 0 : _.rangeState;
        if (b) {
          const w = b.from, T = b.selecting;
          u.value = {
            ...o.value,
            disabledDate: (L) => {
              var C;
              return typeof ((C = e.options) == null ? void 0 : C.disabledDate) == "function" ? e.options.disabledDate(L, w, T) : !1;
            }
          };
        }
      }, 1);
    }
    return Ve(
      () => e.options,
      (p) => {
        u.value = p;
      },
      { immediate: !0 }
    ), Ge(() => {
      var c;
      const p = document.getElementsByClassName(i)[0];
      (c = p == null ? void 0 : p.addEventListener) == null || c.call(p, "click", y, !0);
    }), (p, c) => {
      const r = Z("DatePicker");
      return S(), le(r, {
        ref_key: "dateC",
        ref: l,
        modelValue: m(f),
        "onUpdate:modelValue": c[0] || (c[0] = (v) => De(f) ? f.value = v : null),
        type: p.type,
        options: m(u),
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
}), vo = { class: "editor-pro-root" }, ta = /* @__PURE__ */ ce({
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
    }), u = H(
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
    ), f = H(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(p, c) {
                let r = new FormData();
                r.append("files", p);
                const v = p.name, b = e.imgUploadUrl ?? "/node-serve/file";
                We.post(b, r, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((g) => {
                  if (g && g.data)
                    if (Array.isArray(g.data))
                      for (let _ of g.data) {
                        const w = b + "/" + (_ == null ? void 0 : _.id) + "/download";
                        c(w, v, w);
                      }
                    else {
                      const _ = b + "/" + g.data.id + "/download";
                      c(_, v, _);
                    }
                }).catch(() => {
                  ze(O("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(p, c) {
                let r = new FormData();
                r.append("files", p);
                const v = e.videoUploadUrl ?? "/node-serve/file";
                We.post(v, r, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((b) => {
                  if (b && b.data)
                    if (Array.isArray(b.data))
                      for (let g of b.data) {
                        const _ = v + "/" + (g == null ? void 0 : g.id) + "/download";
                        c(_);
                      }
                    else {
                      const g = v + "/" + b.data.id + "/download";
                      c(g);
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
    ), tl(() => {
      l.value && l.value.destroy();
    }), (p, c) => (S(), N("div", vo, [
      pe(J(m(Ta), {
        class: "editor-pro-toolbar",
        editor: m(l),
        defaultConfig: m(u),
        mode: p.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ve, !p.disabled]
      ]),
      J(m(Ba), {
        class: "editor-pro-editor",
        modelValue: m(i),
        "onUpdate:modelValue": c[0] || (c[0] = (r) => De(i) ? i.value = r : null),
        defaultConfig: m(f),
        mode: p.mode,
        onOnCreated: y,
        style: re(m(o))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), go = {
  key: 19,
  class: "formInfoTxtXN"
}, bo = {
  key: 20,
  class: "formTitleTxtXN"
}, ko = {
  key: 21,
  style: { display: "inline-block", width: "4px" }
}, Sl = /* @__PURE__ */ ce({
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
      var c;
      if (e.inline)
        return e.itemWidth;
      {
        const r = (c = e.itemStyle) == null ? void 0 : c.width;
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
    function o(c) {
      n("select-input-change", c);
    }
    function y(c, r) {
      n("al-name-change", {
        name: c,
        root: r
      });
    }
    function p(c, r) {
      n("async-label-change", {
        label: c,
        root: r
      });
    }
    return (c, r) => {
      const v = Z("InputNumber"), b = Z("Input"), g = Z("Option"), _ = Z("Select"), w = Z("Radio"), T = Z("Icon"), L = Z("RadioGroup"), C = Z("Checkbox"), $ = Z("CheckboxGroup"), P = Z("TimePicker"), I = Z("FormItem");
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
            "onUpdate:modelValue": r[0] || (r[0] = (h) => e.tempKeys[e.item.tempKey] = h),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: r[1] || (r[1] = (h) => u(h, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (S(), le(b, {
            key: 2,
            style: re(c.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[2] || (r[2] = (h) => e.tempKeys[e.item.tempKey] = h),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: r[3] || (r[3] = (h) => u(h, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, st({ _: 2 }, [
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
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[4] || (r[4] = (h) => c.tempKeys[e.item.tempKey] = h),
            style: re(c.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || m(O)("r.pSelect"),
            onOnChange: r[5] || (r[5] = (h) => u(h, e.item)),
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
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (S(), le(jl, {
            key: 4,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[6] || (r[6] = (h) => c.tempKeys[e.item.tempKey] = h),
            "label-width": c.labelWidth,
            "item-width": m(l),
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: o
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (S(), le(Jl, {
            key: 5,
            style: re(c.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[7] || (r[7] = (h) => e.valGroup[e.item.key] = h),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || m(O)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: r[8] || (r[8] = (h) => y(h, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (S(), le(Xl, {
            key: 6,
            style: re(c.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[9] || (r[9] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || c.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || m(O)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: r[10] || (r[10] = (h) => p(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (S(), le(w, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[11] || (r[11] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: r[12] || (r[12] = (h) => u(h, e.item))
          }, {
            default: ne(() => [
              ke(j(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (S(), le(L, {
            key: 8,
            style: re(c.itemStyle),
            onOnChange: r[13] || (r[13] = (h) => f(h, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[14] || (r[14] = (h) => c.tempKeys[e.item.tempKey] = h)
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
            "onUpdate:modelValue": r[15] || (r[15] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled,
            onOnChange: r[16] || (r[16] = (h) => u(h, e.item))
          }, {
            default: ne(() => [
              ke(j(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (S(), le($, {
            key: 10,
            style: re(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[17] || (r[17] = (h) => c.tempKeys[e.item.tempKey] = h),
            onOnChange: r[18] || (r[18] = (h) => f(h, e.item))
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
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[19] || (r[19] = (h) => c.tempKeys[e.item.tempKey] = h),
            autosize: e.item.autosize || { minRows: 2 },
            style: re(c.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: r[20] || (r[20] = (h) => u(h, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (S(), le(Ql, {
            key: 12,
            style: re(c.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[21] || (r[21] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || c.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: r[22] || (r[22] = (h) => f(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (S(), le(ea, {
            key: 13,
            style: re(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[23] || (r[23] = (h) => c.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placeholder: e.item.placeholder || m(O)("r.selectDate"),
            options: e.item.dateOptions || {},
            "time-picker-options": c.item.timePickerOptions || {},
            clearable: e.item.clearable !== !1,
            onOnChange: r[24] || (r[24] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "time-picker-options", "clearable"])) : e.item.type === "time" ? (S(), le(P, {
            key: 14,
            style: re(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[25] || (r[25] = (h) => c.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(O)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: r[26] || (r[26] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (S(), le(Zl, {
            key: 15,
            style: re(c.itemStyle),
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[27] || (r[27] = (h) => c.tempKeys[e.item.tempKey] = h),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(O)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: r[28] || (r[28] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (S(), le(ta, {
            key: 16,
            class: "inlineBlock",
            style: re(c.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": r[29] || (r[29] = (h) => e.valGroup[e.item.key] = h),
            placeholder: e.item.placeholder || m(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: r[30] || (r[30] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (S(), le(ql, {
            key: 17,
            modelValue: c.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": r[31] || (r[31] = (h) => c.tempKeys[e.item.tempKey] = h),
            style: re(c.itemStyle),
            placeholder: e.item.placeholder || m(O)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: r[32] || (r[32] = (h) => u(h, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (S(), N("div", {
            key: 18,
            class: "inlineBlock",
            style: re(c.itemStyle)
          }, [
            Ne(c.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : de("", !0),
          e.item.info ? (S(), N("div", go, j(e.item.info), 1)) : de("", !0),
          e.item.title ? (S(), N("div", bo, j(e.item.title), 1)) : de("", !0),
          e.inline ? de("", !0) : (S(), N("span", ko))
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : de("", !0);
    };
  }
}), wo = { class: "inlineBlock" }, Rt = /* @__PURE__ */ ce({
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
    var rl, ul;
    const e = n, l = t, i = U(null), u = U({}), f = U([]), o = U({});
    let y = [];
    const p = ((rl = window == null ? void 0 : window.g) == null ? void 0 : rl.mgrURL) ?? "";
    let c = U([]), r = [];
    const v = U(!1), b = U(Math.random() * 1e8 + 1e3), g = (ul = window == null ? void 0 : window.g) != null && ul.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let _ = !1;
    const w = H(() => Array.isArray(l.formData.length ? l.formData[0] : !1)), T = H(
      () => l.inline ? {
        width: l.itemWidth + l.labelWidth + "px"
      } : {}
    ), L = H(
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
        for (let a of f.value)
          h(a, d);
      else
        h(f.value, d);
      return d.concat(c.value, r);
    }), P = H(() => {
      let d = [];
      if (w.value)
        for (let a of f.value)
          B(a, d);
      else
        B(f.value, d);
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
    function x() {
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
      for (let a in u.value)
        if (u.value.hasOwnProperty(a))
          if (Re(d[a]))
            u.value[a] = d[a];
          else if (Array.isArray(u.value[a]))
            u.value[a] = [];
          else if (Y(u.value[a]) === "Boolean")
            u.value[a] = !1;
          else {
            const A = _t(l.formData, (V) => (V == null ? void 0 : V.key) === a);
            A && (A.type === "editor" || A.type === "editorPro") ? u.value[a] = "" : u.value[a] = null;
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
        for (let a of f.value)
          F(a, d);
      else
        F(f.value, d);
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
          return Q(d, d.show(u.value));
      } else d.showing || (d.showing = !0);
      return !0;
    }
    function q(d) {
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
    function Q(d, a) {
      return !(d != null && d.showing) && a && (d != null && d.key) ? (d.showing = a, d.defaultVal !== void 0 && (d.tempKey ? (o.value[d.tempKey] === null || o.value[d.tempKey] === void 0 || (Y(o.value[d.tempKey]) === "Object" || Array.isArray(o.value[d.tempKey])) && Fe(o.value[d.tempKey])) && se(d, o.value) : (u.value[d.key] === null || u.value[d.key] === void 0) && (u.value[d.key] = d.defaultVal), d.key2 && d.deafultVal2 !== void 0 && (u.value[d.key2] === null || u.value[d.key2] === void 0) && d.type !== "inputMap" && (u.value[d.key2] = d.defaultVal2)), d.tempKey && Pe(o.value[d.tempKey], d)) : d.showing = a, a;
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
      f.value = d;
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
                              let Ue = u.value[Be.valKey];
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
                      () => typeof a.changeOption == "object" && !Array.isArray(a.changeOption) ? u.value[a.changeOption.valKey] : !1,
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
                        return X.optionUrl = ma(X.optionUrl), X.optionUrl.value;
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
                a.options = _t(f.value, (X) => (X == null ? void 0 : X.key) === a.borrowOption).options;
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
              a.optionLabel.forEach((Ue, dl) => {
                let Mt = String(X[Ue]);
                dl === 1 ? Be += "（" + Mt : dl > 1 ? Be += "、" + Mt : Be += Mt;
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
            () => u.value[a.disableOptionByOthers],
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
            () => a.disableOptionByOthers.filter((X) => X).map((X) => u.value[X]),
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
              valGroup: u.value
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
              const oe = et(a, d);
              if (Array.isArray(a.collectLabel)) {
                for (let ue of a.collectLabel)
                  if (ue != null && ue.key && ue.valKey) {
                    const Ce = He(ue.key);
                    let X = null;
                    Array.isArray(oe) ? (X = oe.map((ie) => ie[ue.valKey]), u.value[ue.key] = X, Ce && (o.value[Ce.tempKey] = X)) : (oe && Re(oe[ue.valKey]) && (X = oe[ue.valKey]), u.value[ue.key] = X, Ce && (Ce.booleanVal && typeof X == "boolean" ? o.value[Ce.tempKey] = X ? 1 : 0 : o.value[Ce.tempKey] = X));
                  }
              } else if (typeof a.collectLabel == "object" && a.collectLabel.key && a.collectLabel.valKey) {
                const ue = He(a.collectLabel.key);
                let Ce = null;
                Array.isArray(oe) ? (Ce = oe.map(
                  (X) => a.collectLabel && !Array.isArray(a.collectLabel) && X[a.collectLabel.valKey]
                ), u.value[a.collectLabel.key] = Ce, ue && (o.value[ue.tempKey] = Ce)) : (oe && Re(oe[a.collectLabel.valKey]) && (Ce = oe[a.collectLabel.valKey]), u.value[a.collectLabel.key] = Ce, ue && (ue.booleanVal && typeof Ce == "boolean" ? o.value[ue.tempKey] = Ce ? 1 : 0 : o.value[ue.tempKey] = Ce));
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
              d ? (A === "time" ? u.value[a.key] = d : u.value[a.key] = ct(d).format(typeof a.format == "string" ? a.format : V[A]), A === "date" && a.addTime && (u.value[a.key] += " 00:00:00")) : u.value[a.key] = null;
            else if (a.type === "monthRange" || A === "daterange" || A === "datetimerange" || A === "timerange") {
              if (!a.key2)
                return;
              d && d[0] && d[1] ? (A === "timerange" ? (u.value[a.key] = d[0], u.value[a.key2] = d[1]) : a.type === "monthRange" ? (u.value[a.key] = typeof a.format == "string" && ct(d[0]).format(a.format) || d[0], u.value[a.key2] = typeof a.format == "string" && a.format && ct(d[1]).format(a.format) || d[1]) : (u.value[a.key] = ct(d[0]).format(a.format || A && V[A]), u.value[a.key2] = ct(d[1]).format(a.format || A && V[A])), A === "daterange" && a.addTime && (u.value[a.key] += " 00:00:00", u.value[a.key2] += " 23:59:59")) : (u.value[a.key] = null, u.value[a.key2] = null);
            }
            break;
        }
    }
    function et(d, a) {
      const A = Ft(d == null ? void 0 : d.options);
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
        for (let a of f.value) {
          const A = E(a, d);
          if (A)
            return A;
        }
        return !1;
      }
      return E(f.value, d);
    }
    function E(d, a) {
      for (let A of d)
        if (A.key === a)
          return A;
      return !1;
    }
    function K(d, a) {
      let A = {};
      for (let V in u.value)
        u.value.hasOwnProperty(V) && d[V] !== void 0 && (A[V] = d[V], delete d[V]);
      we(A, a);
      for (let V in d)
        d.hasOwnProperty(V) && (r.indexOf(V) < 0 && r.push(V), u.value[V] = d[V]);
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
      for (let V in u.value)
        if (u.value.hasOwnProperty(V) && d[V] !== void 0 && d[V] !== "--") {
          if (Array.isArray(d[V]))
            d[V] = d[V].filter((oe) => oe !== "--");
          else if (Y(d[V]) === "Object")
            for (let oe in d[V])
              d[V].hasOwnProperty(oe) && d[V][oe] === "--" && (d[V][oe] = null);
          u.value[V] = d[V];
        } else a || (u.value[V] = Array.isArray(u.value[V]) ? [] : null);
      Me(function() {
        oa(ye(A));
      });
    }
    function G(d, a = !1) {
      if (w.value)
        for (let A of f.value)
          _e(A, d, a);
      else
        _e(f.value, d, a);
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
        if (Array.isArray(f.value[a])) {
          if (typeof A == "number")
            if (V && d.hasOwnProperty("val"))
              f.value[a][A][V] = oe;
            else
              for (let ue of Object.keys(d))
                ue !== "index" && V !== "indexB" && (f.value[a][A][ue] = d[ue]);
        } else if (V && d.hasOwnProperty("val"))
          f.value[a][V] = oe;
        else
          for (let ue of Object.keys(d))
            ue !== "index" && (f.value[a][ue] = d[ue]);
    }
    function ut({ label: d, root: a }) {
      a.key2 && (u.value[a.key2] = d), at({
        e: d,
        root: a
      });
    }
    function je(d) {
      d.beforeKey && ga(c.value, (a) => a === d.beforeKey), d.key && (c.value.indexOf(d.key) === -1 && c.value.push(d.key), at({
        e: null,
        root: d
      }));
    }
    function gt({ name: d, root: a }) {
      a.key2 && (u.value[a.key2] = d), at({
        e: d,
        root: a
      });
    }
    function il({ e: d, root: a }) {
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
        if (a.key && (A[a.key] = u.value[a.key]), a.key2 && (A[a.key2] = u.value[a.key2]), Array.isArray(a.collectLabel))
          for (let oe of a.collectLabel)
            A[oe.key] = u.value[oe.key];
        else (V = a.collectLabel) != null && V.key && (A[a.collectLabel.key] = u.value[a.collectLabel.key]);
        e("on-item-change", A);
      }, 300);
    }
    function sl() {
      let d = {};
      for (let a of $.value)
        d[a] = u.value[a];
      return l.trim && (d = Lt(d)), d;
    }
    function aa() {
      var d, a;
      (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d);
    }
    function na(d) {
      $e(() => {
        var a, A;
        (A = (a = i.value) == null ? void 0 : a.validateField) == null || A.call(a, d, () => {
        });
      }, 10);
    }
    function oa(d) {
      $e(() => {
        var a, A;
        if (Array.isArray(d))
          for (let V of d)
            (A = (a = i.value) == null ? void 0 : a.validateField) == null || A.call(a, V, () => {
            });
      }, 10);
    }
    function ia(d) {
      d !== void 0 && (v.value = !!d);
    }
    function $t() {
      var d, a;
      l.disabled || (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d, (A) => {
        _ || (_ = !0, A && (v.value = !0, e("on-submit", sl())), $e(() => {
          _ = !1;
        }, 2e3));
      });
    }
    return Ge(() => {
      ae(), me();
    }), s({
      resetForm: x,
      refreshFormDom: z,
      reRenderForm: te,
      setItemToValGroup: K,
      updateValGroup: we,
      updateFormDataT: tt,
      validate: aa,
      reValidate: na,
      changeLoading: ia,
      getValGroup: sl,
      submit: $t
    }), (d, a) => {
      const A = Z("FormItem"), V = Z("Button"), oe = Z("Form");
      return S(), le(oe, {
        ref_key: "formGroupXRef",
        ref: i,
        model: m(u),
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
          m(w) ? (S(!0), N(be, { key: 0 }, Te(m(f), (ue, Ce) => (S(), N("div", {
            class: Se([d.teamClass, "formTeamBox" + Ce]),
            key: "formTeamBox" + Ce
          }, [
            (S(!0), N(be, null, Te(ue, (X, ie) => (S(), N(be, {
              key: "formItem" + ie
            }, [
              D(X) ? (S(), le(Sl, {
                key: 0,
                item: X,
                style: re(m(T)),
                "item-style": m(L),
                "val-group": m(u),
                "temp-keys": m(o),
                inline: l.inline,
                disabled: l.disabled,
                "label-width": l.labelWidth,
                "item-width": l.itemWidth,
                "mgr-url": m(p),
                "upload-url": m(g),
                onItemChange: at,
                onReValidate: il,
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
          (S(!0), N(be, null, Te(m(f), (ue, Ce) => (S(), N(be, {
            key: "formItem" + Ce
          }, [
            !m(w) && D(ue) ? (S(), le(Sl, {
              key: 0,
              item: ue,
              style: re(m(T)),
              "item-style": m(L),
              "val-group": m(u),
              "temp-keys": m(o),
              inline: l.inline,
              disabled: l.disabled,
              "label-width": l.labelWidth,
              "item-width": l.itemWidth,
              "mgr-url": m(p),
              "upload-url": m(g),
              onItemChange: at,
              onReValidate: il,
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
                onClick: $t,
                style: re(m(L)),
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
          R("div", wo, [
            l.showInlineOkBt ? (S(), le(V, {
              key: 0,
              type: "primary",
              class: Se({ inlineFormBtXN: l.inline, okBtnXN: !0 }),
              onClick: $t,
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
              onClick: x,
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
}), _o = /* @__PURE__ */ ce({
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
    const e = n, l = t, i = U({ width: l.width }), u = U(!1), f = U(), o = H(() => {
      var P, I;
      if (Array.isArray(l.formData))
        if (Array.isArray(l.formData[0])) {
          let h = [];
          for (let B of l.formData)
            B && (h = h.concat(
              B.filter((x) => (x == null ? void 0 : x.type) === "custom" || (x == null ? void 0 : x.type) === "input" && x.slotName && x.slotPosition)
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
        (h = (I = f.value).resetForm) == null || h.call(I).then((B) => {
          P(B);
        });
      });
    }
    function p() {
      return new Promise((P) => {
        var I, h;
        (h = (I = f.value).refreshFormDom) == null || h.call(I).then((B) => {
          P(B);
        });
      });
    }
    function c() {
      return new Promise((P) => {
        var I, h;
        (h = (I = f.value).reRenderForm) == null || h.call(I).then((B) => {
          P(B);
        });
      });
    }
    function r(P, I) {
      var h, B;
      (B = (h = f.value).setItemToValGroup) == null || B.call(h, P, I);
    }
    function v(P, I) {
      var h, B;
      (B = (h = f.value).updateValGroup) == null || B.call(h, P, I);
    }
    function b(P) {
      var I, h;
      (h = (I = f.value).updateFormDataT) == null || h.call(I, P);
    }
    function g() {
      var P, I;
      (I = (P = f.value).validate) == null || I.call(P);
    }
    function _(P) {
      var I, h;
      (h = (I = f.value).reValidate) == null || h.call(I, P);
    }
    function w(P) {
      var I, h;
      P !== void 0 && (u.value = !!P, (h = (I = f.value).changeLoading) == null || h.call(I, u.value));
    }
    function T() {
      var P, I;
      return (I = (P = f.value).getValGroup) == null ? void 0 : I.call(P);
    }
    function L() {
      u.value = !0;
    }
    function C() {
      var P, I;
      (I = (P = f.value).submit) == null || I.call(P);
    }
    function $() {
      e("on-cancel"), $e(() => {
        var P, I;
        u.value = !1, (I = (P = f.value).changeLoading) == null || I.call(P, !1);
      }, 1e3);
    }
    return s({
      resetForm: y,
      refreshFormDom: p,
      reRenderForm: c,
      setItemToValGroup: r,
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
        J(Rt, rt({
          ref_key: "formRRef",
          ref: f
        }, P.$attrs, {
          "form-data": l.formData,
          "label-width": l.labelWidth,
          "content-width": l.contentWidth,
          "item-width": l.itemWidth,
          btnLoading: l.btnLoading,
          disabled: l.disabled,
          onOnSubmit: L
        }), st({ _: 2 }, [
          Te(m(o), (B) => ({
            name: B.slotName,
            fn: ne(({ valGroup: x }) => [
              Ne(P.$slots, B.slotName, { valGroup: x })
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
              loading: l.btnLoading && m(u),
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
}), el = /* @__PURE__ */ ce({
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
    const e = n, l = t, i = U(), u = H(() => {
      var L, C;
      if (Array.isArray(l.formData[0])) {
        let $ = [];
        for (let P of l.formData)
          P && ($ = $.concat(
            P.filter((I) => (I == null ? void 0 : I.type) === "custom" || (I == null ? void 0 : I.type) === "input" && I.slotName && I.slotPosition)
          ));
        return $;
      }
      return (C = (L = l.formData) == null ? void 0 : L.filter) == null ? void 0 : C.call(
        L,
        ($) => ($ == null ? void 0 : $.type) === "custom" || ($ == null ? void 0 : $.type) === "input" && $.slotName && $.slotPosition
      );
    });
    function f() {
      return new Promise((L) => {
        var C, $;
        ($ = (C = i.value).resetForm) == null || $.call(C).then(() => {
          L();
        });
      });
    }
    function o() {
      return new Promise((L) => {
        var C, $;
        ($ = (C = i.value).refreshFormDom) == null || $.call(C).then(() => {
          L();
        });
      });
    }
    function y() {
      return new Promise((L) => {
        var C, $;
        ($ = (C = i.value).reRenderForm) == null || $.call(C).then(() => {
          L();
        });
      });
    }
    function p(L, C) {
      var $, P;
      (P = ($ = i.value).setItemToValGroup) == null || P.call($, L, C);
    }
    function c(L, C) {
      var $, P;
      (P = ($ = i.value).updateValGroup) == null || P.call($, L, C);
    }
    function r(L) {
      var C, $;
      ($ = (C = i.value).updateFormDataT) == null || $.call(C, L);
    }
    function v() {
      var L, C;
      (C = (L = i.value).validate) == null || C.call(L);
    }
    function b(L) {
      var C, $;
      ($ = (C = i.value).reValidate) == null || $.call(C, L);
    }
    function g(L) {
      var C, $;
      ($ = (C = i.value).changeLoading) == null || $.call(C, L === void 0 ? !1 : L);
    }
    function _() {
      var L, C;
      return (C = (L = i.value).getValGroup) == null ? void 0 : C.call(L);
    }
    function w(L) {
      e("on-search", L);
    }
    function T() {
      var L, C;
      (C = (L = i.value).submit) == null || C.call(L);
    }
    return Ge(() => {
      const L = i.value.$el;
      L != null && L.parentNode && L.parentNode.addEventListener("keyup", (C) => {
        (C == null ? void 0 : C.keyCode) === 13 && T();
      });
    }), s({
      resetForm: f,
      refreshFormDom: o,
      reRenderForm: y,
      setItemToValGroup: p,
      updateValGroup: c,
      updateFormDataT: r,
      validate: v,
      reValidate: b,
      changeLoading: g,
      getValGroup: _,
      submit: T
    }), (L, C) => (S(), le(Rt, rt({
      ref_key: "formRRef",
      ref: i
    }, L.$attrs, {
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
      Te(m(u), ($) => ({
        name: $.slotName,
        fn: ne(({ valGroup: P }) => [
          Ne(L.$slots, $.slotName, { valGroup: P })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), Vo = /* @__PURE__ */ ce({
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
    const e = n, l = t, i = U(), u = U(!1), f = U(!1), o = H(() => {
      var h, B;
      if (Array.isArray(l.formData[0])) {
        let x = [];
        for (let te of l.formData)
          te && (x = x.concat(
            te.filter((z) => (z == null ? void 0 : z.type) === "custom" || (z == null ? void 0 : z.type) === "input" && z.slotName && z.slotPosition)
          ));
        return x;
      }
      return (B = (h = l.formData) == null ? void 0 : h.filter) == null ? void 0 : B.call(
        h,
        (x) => (x == null ? void 0 : x.type) === "custom" || (x == null ? void 0 : x.type) === "input" && x.slotName && x.slotPosition
      );
    });
    function y() {
      return new Promise((h) => {
        var B, x;
        (x = (B = i.value).resetForm) == null || x.call(B).then(() => {
          h();
        });
      });
    }
    function p() {
      return new Promise((h) => {
        var B, x;
        (x = (B = i.value).refreshFormDom) == null || x.call(B).then(() => {
          h();
        });
      });
    }
    function c() {
      return new Promise((h) => {
        var B, x;
        (x = (B = i.value).reRenderForm) == null || x.call(B).then(() => {
          h();
        });
      });
    }
    function r(h, B) {
      var x, te;
      (te = (x = i.value).setItemToValGroup) == null || te.call(x, h, B);
    }
    function v(h, B) {
      var x, te;
      (te = (x = i.value).updateValGroup) == null || te.call(x, h, B);
    }
    function b(h) {
      var B, x;
      (x = (B = i.value).updateFormDataT) == null || x.call(B, h);
    }
    function g() {
      var h, B;
      (B = (h = i.value).validate) == null || B.call(h);
    }
    function _(h) {
      var B, x;
      (x = (B = i.value).reValidate) == null || x.call(B, h);
    }
    function w(h) {
      var B, x;
      h !== void 0 && (f.value = !!h, (x = (B = i.value).changeLoading) == null || x.call(B, f.value));
    }
    function T() {
      var h, B;
      return (B = (h = i.value).getValGroup) == null ? void 0 : B.call(h);
    }
    function L() {
      f.value = !0;
    }
    function C() {
      var h, B;
      l.hideCancelBt ? P() : (B = (h = i.value).submit) == null || B.call(h);
    }
    function $() {
      u.value = !0;
    }
    function P() {
      u.value = !1, $e(() => {
        var h, B;
        f.value = !1, (B = (h = i.value).changeLoading) == null || B.call(h, !1);
      }, 1e3);
    }
    function I(h) {
      e(h ? "on-open" : "on-close");
    }
    return s({
      resetForm: y,
      refreshFormDom: p,
      reRenderForm: c,
      setItemToValGroup: r,
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
      const x = Z("Button"), te = Z("Modal");
      return S(), le(te, {
        class: Se(["formModal", { hideFooter: l.hideFooter }]),
        title: l.title || m(O)("r.title"),
        modelValue: m(u),
        "onUpdate:modelValue": B[0] || (B[0] = (z) => De(u) ? u.value = z : null),
        "mask-closable": !1,
        "footer-hide": l.hideFooter,
        width: l.width,
        onOnVisibleChange: I
      }, {
        footer: ne(() => [
          J(x, {
            onClick: C,
            class: "modal-save-btn",
            loading: l.btnLoading && m(f),
            disabled: l.disabled
          }, {
            default: ne(() => [
              ke(j(l.okBtTxt || m(O)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled"]),
          l.hideCancelBt ? de("", !0) : (S(), le(x, {
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
          J(Rt, rt({
            ref_key: "formRRef",
            ref: i
          }, h.$attrs, {
            "form-data": l.formData,
            "label-width": l.labelWidth,
            btnLoading: l.btnLoading,
            disabled: l.disabled,
            onOnSubmit: L
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
}), So = /* @__PURE__ */ ce({
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
    const n = s, e = t, l = U(!0), i = U([]), u = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let f = [];
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
        if (Array.isArray(e.collectVal) ? (_ = e.collectVal[0] || "", w = "a") : _ = e.collectVal, !_ || JSON.stringify(g) === JSON.stringify(f)) {
          f = [];
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
        o.value.length > 1 ? T = zt(y.value, (C) => C[o.value[0]] === w[o.value[0]]) !== void 0 : T = o.value[0] ? y.value.indexOf(w[o.value[0]]) !== -1 : !1;
        let L = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let C of o.value)
          L[C] = w[C];
        _.push(L), w != null && w.children && w.children.length > 0 && (L.children = [], c(w.children, L.children));
      }
    }
    function c(g, _ = []) {
      for (let w of g) {
        let T = !1;
        o.value.length > 1 ? T = zt(y.value, (C) => C[o.value[0]] === w[o.value[0]]) !== void 0 : T = o.value[0] ? y.value.indexOf(w[o.value[0]]) !== -1 : !1;
        let L = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let C of o.value)
          L[C] = w[C];
        _.push(L), w != null && w.children && w.children.length > 0 && (L.children = [], p(w.children, L.children));
      }
    }
    function r(g, {
      data: _
    }) {
      let w = "", T = !0;
      if (_.children && _.children.length > 0) {
        for (let L of _.children)
          if (L.children !== void 0) {
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
      let _ = document.querySelectorAll("#" + u + " .inlineChildXA");
      if (_.length > 0)
        for (let w of _) {
          let T = w == null ? void 0 : w.parentElement, L = T == null ? void 0 : T.nextElementSibling;
          if (!L)
            return;
          if (L.tagName !== "BR") {
            let C = T == null ? void 0 : T.parentElement, $ = document.createElement("br");
            C == null || C.insertBefore($, L);
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
              for (let L of e.collectVal)
                T[L] = w[L];
              _.push(T);
            } else
              _.push(w[e.collectVal]);
      } else
        for (let w of g)
          if (Array.isArray(e.collectVal)) {
            let T = {};
            for (let L of e.collectVal)
              T[L] = w[L];
            _.push(T);
          } else
            _.push(w[e.collectVal]);
      f = _, n("update:modelValue", _), n("on-change", fe(_));
    }
    return (g, _) => {
      const w = Z("Tree");
      return m(l) ? (S(), le(w, {
        key: 0,
        id: u,
        class: "checkboxTreeGA",
        data: m(i),
        render: r,
        onOnCheckChange: b,
        onOnToggleExpand: v,
        "show-checkbox": ""
      }, null, 8, ["data"])) : de("", !0);
    };
  }
}), Co = { class: "transferBoxRL" }, To = { class: "leftBoxLLL" }, Bo = { class: "fullHeight flexColumnBox" }, Lo = { class: "notGrow" }, xo = { class: "titleLLL" }, Oo = { class: "growFlexItem" }, Ao = { class: "middleBoxLLL" }, Io = { class: "rightBoxLLL" }, Po = { class: "fullHeight flexColumnBox" }, Ro = { class: "notGrow" }, $o = { class: "titleLLL" }, Mo = { class: "growFlexItem" }, Fo = /* @__PURE__ */ ce({
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
    let i = U({}), u = U({}), f = U([]), o = U([]), y = U(0), p = U(0);
    const c = H(() => ({ ...l.constSearchDataLeft, ...i.value })), r = H(() => ({ ...l.constSearchDataRight, ...u.value })), v = H(() => y.value < 1), b = H(() => f.value.length < 1), g = H(() => o.value.length < 1), _ = H(() => p.value < 1), w = U(), T = U(), L = U(), C = U();
    function $() {
      w.value.resetForm(), T.value.resetForm(), Fe(i.value) || (i.value = {}), Fe(u.value) || (u.value = {}), L.value.clearSelect(), C.value.clearSelect();
    }
    function P() {
      L.value.search(), C.value.search();
    }
    function I(D) {
      f.value = D;
    }
    function h(D) {
      o.value = D;
    }
    function B(D) {
      var q, Q, se, me, he;
      y.value = ((Q = (q = D == null ? void 0 : D.data) == null ? void 0 : q.page) == null ? void 0 : Q.total) || ((me = (se = D == null ? void 0 : D.data) == null ? void 0 : se.data) == null ? void 0 : me.total) || ((he = D == null ? void 0 : D.data) == null ? void 0 : he.total) || (D == null ? void 0 : D.total) || 0, e("on-data-change-l", D);
    }
    function x(D) {
      var q, Q, se, me, he;
      p.value = ((Q = (q = D == null ? void 0 : D.data) == null ? void 0 : q.page) == null ? void 0 : Q.total) || ((me = (se = D == null ? void 0 : D.data) == null ? void 0 : se.data) == null ? void 0 : me.total) || ((he = D == null ? void 0 : D.data) == null ? void 0 : he.total) || (D == null ? void 0 : D.total) || 0, e("on-data-change-r", D);
    }
    function te(D) {
      typeof l.leftSearchDataFilter == "function" ? i.value = l.leftSearchDataFilter(D) : i.value = D;
    }
    function z(D) {
      typeof l.rightSearchDataFilter == "function" ? u.value = l.rightSearchDataFilter(D) : u.value = D;
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
          q = l.deleteMethod, Q = l.deleteUrl, se = l.deleteParamsHandle(f.value), me = O("r.remove");
          break;
        case "addAll":
          q = l.addAllMethod, Q = l.addAllUrl, se = l.addAllParamsHandle(r.value), me = O("r.addAll");
          break;
        case "deleteAll":
          q = l.deleteAllMethod, Q = l.deleteAllUrl, se = l.deleteAllParamsHandle(c.value), me = O("r.removeAll");
          break;
      }
      Q && q && We[q](Q, se, null, [], { spin: !0 }, !1).then((he) => {
        (he == null ? void 0 : he.code) === 0 ? (ze(me + O("r.success"), (he == null ? void 0 : he.message) || "", "success"), L.value && L.value.getTableData(), C.value && C.value.getTableData(), e("transferred")) : ze(me + O("r.failed"), (he == null ? void 0 : he.message) || "", "error");
      }).catch(() => {
        ze(me + O("r.error"), "", "error");
      });
    }
    return s({
      reset: $,
      search: P
    }), (D, q) => {
      const Q = Z("Icon"), se = Z("Button");
      return S(), N("div", Co, [
        R("div", To, [
          R("div", Bo, [
            R("div", Lo, [
              R("div", xo, j(l.titleLeft || m(O)("r.added")), 1),
              J(Xt, null, {
                default: ne(() => [
                  J(el, {
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
            R("div", Oo, [
              J(Qt, {
                ref_key: "lTabRef",
                ref: L,
                columns: l.leftTableColumns,
                url: l.leftTableUrl,
                "search-data": m(c),
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
        R("div", Ao, [
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
        R("div", Io, [
          R("div", Po, [
            R("div", Ro, [
              R("div", $o, j(l.titleRight || m(O)("r.notAdded")), 1),
              J(Xt, null, {
                default: ne(() => [
                  J(el, {
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
            R("div", Mo, [
              J(Qt, {
                ref_key: "rTabRef",
                ref: C,
                columns: l.rightTableColumns,
                url: l.rightTableUrl,
                "search-data": m(r),
                onOnSelectionChange: h,
                onOnDataChange: x,
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
}), Do = { class: "boxLPA" }, No = { class: "headerJ" }, Ko = { class: "firstT borderBoxAS" }, zo = { class: "secondT borderBoxAS" }, Uo = { class: "firstCol borderBoxAS" }, Eo = { class: "secondCol borderBoxAS" }, Go = /* @__PURE__ */ ce({
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
      var c;
      let y = fe(n.data), p = fe(l.value);
      for (let r of y) {
        let v = 0;
        if (r != null && r.children && !Fe(r.children))
          for (let b of r.children) {
            for (let g = 0, _ = p == null ? void 0 : p.length; g < _; g++)
              if (Array.isArray(n.collectVal)) {
                let w = !0;
                for (let T of n.collectVal)
                  if (((c = p[g]) == null ? void 0 : c[T]) !== (b == null ? void 0 : b[T])) {
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
        v === 0 ? (r.checked = !1, r.indeterminate = !1) : r.children && v === r.children.length ? (r.checked = !0, r.indeterminate = !1) : (r.checked = !1, r.indeterminate = !0);
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
    function u(y, p) {
      if (y.children)
        for (let c of y.children)
          c.checked = p;
      f();
    }
    function f() {
      o(i.value, !0);
    }
    function o(y, p) {
      let c = [];
      for (let r of y) {
        if (!p && !n.leaf && r.checked && r.indeterminate === !1)
          if (Array.isArray(n.collectVal)) {
            let v = {};
            for (let b of n.collectVal)
              v[b] = r[b];
            c.push(v);
          } else Y(n.collectVal) === "String" && c.push(r[n.collectVal]);
        if (r.children) {
          for (let v of r.children)
            if (v.checked)
              if (Array.isArray(n.collectVal)) {
                let b = {};
                for (let g of n.collectVal)
                  b[g] = v[g];
                c.push(b);
              } else Y(n.collectVal) === "String" && c.push(v[n.collectVal]);
        }
      }
      p ? (l.value = c, n.leaf ? (e("update:modelValue", c), e("on-change", fe(c))) : Me(function() {
        o(i.value);
      })) : (e("update:modelValue", c), e("on-change", fe(c)));
    }
    return (y, p) => {
      const c = Z("Checkbox");
      return S(), N("div", Do, [
        R("div", No, [
          R("div", Ko, j(y.firstTitle || m(O)("r.level.1")), 1),
          R("div", zo, j(y.secondTitle || m(O)("r.level.2")), 1)
        ]),
        (S(!0), N(be, null, Te(m(i), (r, v) => (S(), N("div", {
          class: "bodyJ",
          key: "checkboxJ" + v
        }, [
          R("div", Uo, [
            J(c, {
              modelValue: r.checked,
              "onUpdate:modelValue": (b) => r.checked = b,
              indeterminate: r.indeterminate,
              onOnChange: (b) => u(r, b),
              disabled: y.disabled
            }, {
              default: ne(() => [
                ke(j(r[y.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          R("div", Eo, [
            (S(!0), N(be, null, Te(r.children, (b, g) => (S(), N("div", {
              class: "secItem",
              key: "secItem" + g
            }, [
              J(c, {
                modelValue: b.checked,
                "onUpdate:modelValue": (_) => b.checked = _,
                onOnChange: f,
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
}), Ho = { class: "boxLPB" }, Wo = { class: "headerF" }, jo = { class: "firstT borderBoxKa" }, qo = { class: "secondT borderBoxKa" }, Xo = { class: "thirdT borderBoxKa" }, Jo = { class: "firstCol borderBoxKa" }, Yo = { class: "rightBoxAL" }, Qo = { class: "secondCol borderBoxKa" }, Zo = { class: "thirdCol borderBoxKa" }, ei = /* @__PURE__ */ ce({
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
      let p = fe(e.data), c = fe(l.value);
      for (let r of p) {
        let v = 0, b = 0;
        if (r != null && r.children && !Fe(r.children))
          for (let g of r.children) {
            let _ = 0;
            if (g.children && !Fe(g.children))
              for (let w of g.children) {
                for (let T = 0, L = c.length; T < L; T++)
                  if (Array.isArray(e.collectVal)) {
                    let C = !0;
                    for (let $ of e.collectVal)
                      if (c[T][$] !== w[$]) {
                        C = !1;
                        break;
                      }
                    if (C) {
                      w.checked = !0, _++, c.splice(T, 1);
                      break;
                    }
                  } else if (c[T] === w[e.collectVal]) {
                    w.checked = !0, _++, c.splice(T, 1);
                    break;
                  }
                !w.checked && (w.checked = !1);
              }
            _ === 0 ? (g.checked = !1, g.indeterminate = !1) : g.children && _ === g.children.length ? (g.checked = !0, g.indeterminate = !1, v++) : (g.checked = !1, g.indeterminate = !0, b++);
          }
        v === 0 && b === 0 ? (r.checked = !1, r.indeterminate = !1) : r.children && v === r.children.length ? (r.checked = !0, r.indeterminate = !1) : (r.checked = !1, r.indeterminate = !0);
      }
      return p;
    });
    Ve(
      () => e.modelValue,
      (p, c) => {
        yt(l.value, p) || yt(p, c) || (l.value = p);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function u(p, c) {
      if (p.children) {
        for (let r of p.children)
          if (r.checked = c, r.children)
            for (let v of r.children)
              v.checked = c;
      }
      o();
    }
    function f(p, c) {
      if (p.children)
        for (let r of p.children)
          r.checked = c;
      o();
    }
    function o() {
      y(i.value, !0);
    }
    function y(p, c) {
      let r = [];
      for (let v of p) {
        if (!c && !e.leaf && (v != null && v.checked) && v.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let b = {};
            for (let g of e.collectVal)
              b[g] = v[g];
            r.push(b);
          } else Y(e.collectVal) === "String" && r.push(v[e.collectVal]);
        if (v != null && v.children)
          for (let b of v.children) {
            if (!c && !e.leaf && b.checked && b.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let g = {};
                for (let _ of e.collectVal)
                  g[_] = b[_];
                r.push(g);
              } else Y(e.collectVal) === "String" && r.push(b[e.collectVal]);
            if (b.children) {
              for (let g of b.children)
                if (g.checked)
                  if (Array.isArray(e.collectVal)) {
                    let _ = {};
                    for (let w of e.collectVal)
                      _[w] = g[w];
                    r.push(_);
                  } else Y(e.collectVal) === "String" && r.push(g[e.collectVal]);
            }
          }
      }
      c ? (l.value = r, e.leaf ? (n("update:modelValue", r), n("on-change", fe(r))) : Me(function() {
        y(i.value);
      })) : (n("update:modelValue", r), n("on-change", fe(r)));
    }
    return (p, c) => {
      const r = Z("Checkbox");
      return S(), N("div", Ho, [
        R("div", Wo, [
          R("div", jo, j(p.firstTitle || m(O)("r.level.1")), 1),
          R("div", qo, j(p.secondTitle || m(O)("r.level.2")), 1),
          R("div", Xo, j(p.thirdTitle || m(O)("r.level.3")), 1)
        ]),
        (S(!0), N(be, null, Te(m(i), (v, b) => (S(), N("div", {
          class: "bodyF",
          key: "checkboxJ" + b
        }, [
          R("div", Jo, [
            J(r, {
              modelValue: v.checked,
              "onUpdate:modelValue": (g) => v.checked = g,
              indeterminate: v.indeterminate,
              onOnChange: (g) => u(v, g),
              disabled: p.disabled
            }, {
              default: ne(() => [
                ke(j(v[p.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          R("div", Yo, [
            (S(!0), N(be, null, Te(v.children, (g, _) => (S(), N("div", {
              class: "rightBoxInner",
              key: "secItem" + _
            }, [
              R("div", Qo, [
                J(r, {
                  modelValue: g.checked,
                  "onUpdate:modelValue": (w) => g.checked = w,
                  indeterminate: g.indeterminate,
                  onOnChange: (w) => f(g, w),
                  disabled: p.disabled
                }, {
                  default: ne(() => [
                    ke(j(g[p.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              R("div", Zo, [
                (S(!0), N(be, null, Te(g.children, (w, T) => (S(), N("div", {
                  class: "thirdItem",
                  key: "thirdItem" + T
                }, [
                  J(r, {
                    modelValue: w.checked,
                    "onUpdate:modelValue": (L) => w.checked = L,
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
}), ti = {
  class: "fl",
  style: { "font-weight": "bold" }
}, li = { class: "btsF" }, ai = { key: 0 }, ni = {
  key: 1,
  class: "growFlexItem relativeBox"
}, oi = { class: "fullFlowContent" }, ii = /* @__PURE__ */ ce({
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
          R("div", ti, j(s.title || m(O)("r.title")), 1),
          R("div", li, [
            Ne(l.$slots, "bts")
          ])
        ], 2),
        s.fitToContent ? (S(), N("div", ai, [
          Ne(l.$slots, "default")
        ])) : (S(), N("div", ni, [
          R("div", oi, [
            Ne(l.$slots, "default")
          ])
        ]))
      ], 2)
    ], 4));
  }
}), si = /* @__PURE__ */ ce({
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
    const u = U(""), f = ht([]);
    let o = {}, y = !0, p = !1;
    const c = "scm" + Math.random(), r = H(() => u.value ? O("r.searchFor") + u.value : e.placeholder || O("r.pInput")), v = H({
      get() {
        return e.modelValue ?? "";
      },
      set(P) {
        if (n("update:modelValue", P ?? ""), e.collectLabel && P !== void 0) {
          let I = {};
          for (let h of f.value)
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
      [e.searchKey]: u.value
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
      g.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", L);
    }
    function w() {
      y || (v.value = "", y = !0, u.value = "", f.value = [], l.value = 1, i = 1, o = {}, p = !1);
    }
    function T(P) {
      for (let I of f.value)
        if ((I == null ? void 0 : I.label) === P)
          return !0;
      return !1;
    }
    const L = It(function(P) {
      var h;
      const I = (h = P == null ? void 0 : P.target) == null ? void 0 : h.value;
      T(I) || (Re(I) ? (p ? w() : (Fe(o) && (o.current = l.value, o.pages = i, o.options = fe(f.value)), Re(v.value) && (v.value = "")), u.value = String(I), f.value = [], l.value = 1, y = !0, $()) : p ? (w(), $()) : (v.value = "", u.value = "", o.current ? (l.value = o.current, i = o.pages, f.value = fe(o.options), o = {}) : $()));
    }, 600);
    function C() {
      p && w(), l.value < i ? (++l.value, Me(function() {
        $();
      })) : fl.warning({
        background: !0,
        content: O("r.noMore")
      });
    }
    function $() {
      return new Promise((P, I) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Re(u.value)) {
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
              } else Il(e.optionsLabelKey) && (ee = z[e.optionsLabelKey]);
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
            })), f.value.push(...B);
            let x = {};
            f.value = f.value.filter((z) => x[z == null ? void 0 : z.value] ? !1 : (x[z == null ? void 0 : z.value] = !0, !0)), Me(function() {
              n("update-option-finish");
            }), P(!0);
          }).catch(() => {
            fl.error(O("r.getDataError")), I(O("r.getDataError"));
          });
        } else
          P(!1);
      });
    }
    return Ge(_), (P, I) => {
      const h = Z("Option"), B = Z("Select"), x = At("loadmore");
      return pe((S(), le(B, rt({
        modelValue: m(v),
        "onUpdate:modelValue": I[0] || (I[0] = (te) => De(v) ? v.value = te : null),
        ref_key: "selectScrollSourceRef",
        ref: g,
        "transfer-class-name": c
      }, P.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: m(r),
        disabled: P.disabled
      }), {
        default: ne(() => [
          (S(!0), N(be, null, Te(m(f), (te, z) => (S(), le(h, {
            key: "op" + z,
            value: te == null ? void 0 : te.value,
            label: te == null ? void 0 : te.label,
            disabled: te == null ? void 0 : te.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [x, C, c]
      ]);
    };
  }
}), Cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: Jl,
  AsyncCascader: Xl,
  BtTablePage: Qt,
  CheckboxGroupThreeClass: ei,
  CheckboxGroupTwoClass: Go,
  CheckboxTree: So,
  Date: ea,
  EditorPro: ta,
  FormGroup: _o,
  FormModal: Vo,
  FormR: Rt,
  FullPop: Na,
  HeaderBt: Rl,
  Hello: za,
  IconTxtBtn: Et,
  InputMap: ql,
  MonthRange: Zl,
  Page404: Ha,
  PagePro: Wl,
  SearchForm: el,
  SelectInput: jl,
  SelectScrollMore: si,
  ShowHidePanel: Xt,
  ShowHidePanelB: In,
  SideMenu: hn,
  SideMenuPro: Bn,
  TableIconBtn: zl,
  TableSearch: Pn,
  TableSetting: Gl,
  TransferBox: Fo,
  UploadGroup: Ql,
  WellCard: ii
}, Symbol.toStringTag, { value: "Module" })), ri = { class: "a4Line aL notPrint" }, ui = { class: "a4Line aR notPrint" }, di = { class: "a4Line bL notPrint" }, ci = { class: "a4Line bR notPrint" }, fi = { class: "topsL notPrint" }, pi = { class: "topsLTitle" }, mi = { class: "topsLBtn" }, hi = { class: "topsLHelp" }, yi = { key: 0 }, vi = { key: 1 }, gi = { key: 2 }, bi = ["innerHTML"], ki = /* @__PURE__ */ ce({
  __name: "PrintModal",
  setup(t) {
    const s = ll(), n = U(), e = U(!1), l = U(!1), i = U(!1), u = U(100), f = U(), o = U(715), y = U(!1), p = U(), c = "tablePrint_" + Date.now().toString(), r = U(""), v = U([]), b = U([]), g = U(!1), _ = H(() => ({
      width: o.value + "px"
    })), w = () => {
      p.value && window.sessionStorage.removeItem("print_" + p.value), window.sessionStorage.removeItem(c), window.close();
    }, T = () => {
      y.value && (y.value = !1);
    }, L = () => {
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
      if (typeof f.value == "function")
        return f.value(B);
    }, h = () => {
      var B, x, te, z, M, ee, W;
      if (p.value = (B = s == null ? void 0 : s.params) == null ? void 0 : B.isFrom, p.value) {
        let k = window.sessionStorage.getItem("print_" + p.value);
        if (k) {
          const F = JSON.parse(k);
          if (!F) {
            e.value = !0;
            return;
          }
          if (v.value = F.columns, b.value = F.data, n.value = F.title, r.value = ((x = F.config) == null ? void 0 : x.customClass) || "", l.value = ((te = F.config) == null ? void 0 : te.domPrint) || !1, i.value = ((z = F.config) == null ? void 0 : z.autoPrint) || !1, u.value = ((M = F.config) == null ? void 0 : M.autoPrintTimeout) || 100, o.value = ((ee = F.config) == null ? void 0 : ee.width) || 715, document.title = (n.value || O("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString(), (W = F.funcArr) != null && W.length) {
            for (let D of F.funcArr)
              if (D.name === "spanMethod") {
                f.value = new Function("return " + D.func)();
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
        }, u.value);
      }
      document.addEventListener("click", T), document.addEventListener("mousemove", C), document.addEventListener("mouseup", $);
    }), h(), (B, x) => {
      const te = Z("Table");
      return S(), N("div", {
        class: Se(["tablePrintModal", [m(r)]])
      }, [
        pe(R("div", { class: "msgL notPrint" }, j(m(O)("r.printGuide.9")), 513), [
          [ve, m(e)]
        ]),
        pe(R("div", ri, [
          R("p", null, j(m(O)("r.printGuide.7")), 1),
          x[2] || (x[2] = ke()),
          R("p", null, j(m(O)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        pe(R("div", ui, [
          R("p", null, j(m(O)("r.printGuide.7")), 1),
          x[3] || (x[3] = ke()),
          R("p", null, j(m(O)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        pe(R("div", di, [
          R("p", null, j(m(O)("r.printGuide.8")), 1),
          x[4] || (x[4] = ke()),
          R("p", null, j(m(O)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        pe(R("div", ci, [
          R("p", null, j(m(O)("r.printGuide.8")), 1),
          x[5] || (x[5] = ke()),
          R("p", null, j(m(O)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        pe(R("div", fi, [
          R("div", pi, j(m(n) || m(O)("r.print")), 1),
          R("div", mi, [
            J(Et, {
              icon: "md-help-circle",
              name: m(O)("r.help"),
              onClick: x[0] || (x[0] = Nt((z) => y.value = !m(y), ["stop"]))
            }, null, 8, ["name"]),
            J(Et, {
              icon: "md-print",
              name: m(O)("r.preview"),
              onClick: P
            }, null, 8, ["name"]),
            m(l) ? de("", !0) : (S(), le(Gl, {
              key: 0,
              modelValue: m(v),
              "onUpdate:modelValue": x[1] || (x[1] = (z) => De(v) ? v.value = z : null),
              "s-key": c,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            J(zl, {
              icon: "md-close",
              onClick: w,
              title: m(O)("r.close")
            }, null, 8, ["title"])
          ]),
          pe(R("div", hi, [
            m(l) ? de("", !0) : (S(), N("p", yi, [
              x[6] || (x[6] = R("span", null, "1. ", -1)),
              R("span", null, j(m(O)("r.printGuide.1")), 1)
            ])),
            m(l) ? de("", !0) : (S(), N("p", vi, [
              x[7] || (x[7] = R("span", null, "2. ", -1)),
              R("span", null, j(m(O)("r.printGuide.2")), 1)
            ])),
            m(l) ? (S(), N("p", gi, [
              x[8] || (x[8] = R("span", null, "1. ", -1)),
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
            onMousedown: Nt(L, ["stop"])
          }, null, 32)
        ], 4)) : de("", !0),
        m(l) ? (S(), N("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: m(b),
          style: re(m(_))
        }, null, 12, bi)) : de("", !0),
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
function Tl() {
  document.documentElement.style.setProperty("overflow", "auto");
  const s = document.createElement("style");
  s.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(s);
}
function wi(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: ki
  })), Ze = t, location.pathname.indexOf("tablePrint") > -1 ? (Ze.push(location.pathname), Tl()) : location.hash.indexOf("tablePrint") > -1 && (Ze.push(location.hash.replace(/^#/, "")), Tl());
}
function la(t) {
  return Y(t) === "Object" && (t.hasOwnProperty("width") || (t.width = t.minWidth || 100), t.hasOwnProperty("minWidth") && delete t.minWidth, t.sortable = !1, delete t.__id, t.resizable = !0, t.children && Y(t.children) === "Array" && (t.children = t.children.map(la))), t;
}
function _i(t, s, n, e) {
  var p, c, r;
  if (!Ze)
    return;
  let l;
  if (!(e != null && e.domPrint)) {
    let v = fe(
      t.filter((b) => (b == null ? void 0 : b.key) || (b == null ? void 0 : b.children))
    );
    v[0].type === "selection" && v.shift(), v.length ? l = v.map(la) : l = [];
  }
  const i = [];
  e && Object.entries(e).forEach(([v, b]) => {
    typeof b == "function" && (i.push({
      name: v,
      func: b.toString().replaceAll(/[\r\n\t]/g, "").replaceAll(/\s{2,}/g, " ")
    }), delete e[v]);
  });
  let u = (c = (p = Ze == null ? void 0 : Ze.currentRoute) == null ? void 0 : p.value) == null ? void 0 : c.fullPath;
  u && (u = (r = u.replace) == null ? void 0 : r.call(u, /\//g, "_"));
  let f = {
    data: s,
    title: n,
    config: e,
    funcArr: i
  };
  e != null && e.domPrint || (f.columns = l), window.sessionStorage.setItem("print_" + u, JSON.stringify(f));
  const o = Ze.resolve({
    name: "tablePrint",
    params: { isFrom: u }
  });
  window.open(o == null ? void 0 : o.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const ol = {
  print: _i,
  init: wi
};
function Vi(t = "", s = "", n = {}) {
  n.domPrint = !0, n.width || (n.width = 715), ol.print([], t, s, n);
}
function Si(t) {
  var i, u;
  const s = (...f) => Je.apply(this, f), n = s("r.closePreview"), e = s("r.fullImg");
  let l = "previewImg" + Math.floor(Math.random() * 1e7);
  (u = (i = Qe) == null ? void 0 : i.info) == null || u.call(i, {
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (f) => Ie(
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
            Ie(Va, {
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
    var y, p, c, r, v, b;
    const f = (r = (c = (p = (y = document.getElementById(l)) == null ? void 0 : y.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : c.parentElement) == null ? void 0 : r.parentElement, o = (b = (v = document.getElementById(l)) == null ? void 0 : v.parentElement) == null ? void 0 : b.nextSibling;
    f && (f.style.height = "0"), f && (f.style.padding = "0"), o && (o.style.display = "none");
  }, 10);
}
const Ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: We,
  $swal: ze,
  $swalConfirm: El,
  domPrint: Vi,
  fullScreenImgByDom: mt,
  fullScreenImgPreview: Si,
  messageBox: Yt,
  setInterval: pn,
  setTimeout: $e,
  tablePrint: ol
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
      var o, y, p, c, r, v, b, g, _;
      const l = document.getElementById("editor-preview");
      let i = localStorage.getItem("editorPreviewW") || 300, u = localStorage.getItem("editorPreviewH") || 500;
      const f = (o = e == null ? void 0 : e.getHtml) == null ? void 0 : o.call(e);
      if (l) {
        let w = (v = (r = (c = (p = (y = l.children) == null ? void 0 : y[0]) == null ? void 0 : p.children) == null ? void 0 : c[1]) == null ? void 0 : r.children) == null ? void 0 : v[0], T = (_ = (g = (b = l.children) == null ? void 0 : b[0]) == null ? void 0 : g.children) == null ? void 0 : _[1];
        w && (w.innerHTML = f, w.style.width = i + "px"), T && (T.style.height = u + "px"), l.style.display = "block";
      } else {
        const w = document.body, T = document.createElement("div");
        T.setAttribute("id", "editor-preview"), T.setAttribute("class", "editor-preview-mask"), T.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${i}' min='200'><span>高</span><input type='number' value='${u}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let L = T.children[0].children[1], C = T.children[0].children[1].children[0], $ = T.children[0].children[0].children[0].children[1];
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
        const x = (z) => {
          var W;
          if ((z == null ? void 0 : z.type) === "keyup") {
            let k = !1;
            if (z.key && (k = z.key !== "Enter"), k)
              return;
          }
          let M = (W = z == null ? void 0 : z.target) == null ? void 0 : W.value;
          if (M = Number(M), L.style && L.style.height === M + "px")
            return;
          const ee = w.clientHeight;
          M < 300 ? (M = 300, z.target.value = 300) : M > ee - I && (M = ee - I, z.target.value = ee - I), L.style.height = M + "px", localStorage.setItem("editorPreviewH", M);
        };
        B.addEventListener("blur", x), B.addEventListener("keyup", x), T.children[0].children[0].children[1].addEventListener("click", () => {
          T.style.display = "none";
        }), C.innerHTML = f, C.style.width = i + "px", L.style.height = u + "px", w.append(T);
      }
    }
  }
  const s = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  La.registerMenu(s), window.wangeditorMenuInit = !0;
})();
const ji = Tt.use, qi = Tt.i18n, Bl = {
  ...Ci,
  ...rn
}, Ti = {
  install(t) {
    t.component("JsonViewer", xa);
  }
}, Bi = function(t, s = {}) {
  We.init(s.useStore || s.store, t), Ti.install(t), s.locale && Tt.use(s.locale), s.i18n && Tt.i18n(s.i18n), s.router && (fn(s.router), ol.init(s.router)), s.amap && Yn(s.amap), s.notRegistryGlobal || (Object.keys(Cl).forEach((n) => {
    t.component(n) || t.component(n, Cl[n]);
  }), Object.keys(Bl).forEach((n) => {
    t.config.globalProperties[n] = Bl[n];
  })), t.directive("has") || t.directive("has", (n, e) => {
    e.value && !al(e.value) && (n.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", {
    mounted(n, e) {
      var i;
      let l = n;
      e.arg && (l = (i = document.getElementsByClassName(e.arg)) == null ? void 0 : i[0]), l && l.addEventListener("scroll", function() {
        l.scrollTop > 0 && l.scrollHeight - l.scrollTop <= l.clientHeight && e.value();
      });
    }
  }), t.directive("clickOutside") || t.directive("clickOutside", Ul), t.config.globalProperties.fontSizeBase = 14, t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.btTablePageAlign = "center", t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !0, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, Xi = { install: Bi };
export {
  We as $fetch,
  ze as $swal,
  El as $swalConfirm,
  Jl as AlCascaderMC,
  Xl as AsyncCascader,
  Qt as BtTablePage,
  ei as CheckboxGroupThreeClass,
  Go as CheckboxGroupTwoClass,
  So as CheckboxTree,
  ea as Date,
  ta as EditorPro,
  _o as FormGroup,
  Vo as FormModal,
  Rt as FormR,
  Na as FullPop,
  Rl as HeaderBt,
  za as Hello,
  Et as IconTxtBtn,
  ql as InputMap,
  Zl as MonthRange,
  Ha as Page404,
  Wl as PagePro,
  el as SearchForm,
  jl as SelectInput,
  si as SelectScrollMore,
  Xt as ShowHidePanel,
  In as ShowHidePanelB,
  hn as SideMenu,
  Bn as SideMenuPro,
  zl as TableIconBtn,
  Pn as TableSearch,
  Gl as TableSetting,
  Fo as TransferBox,
  Ql as UploadGroup,
  ii as WellCard,
  Ht as clearObj,
  nn as dataFilterOrToUrl,
  Qa as decimalDigitsLimit,
  Xi as default,
  sn as directivesComponent,
  Vi as domPrint,
  Ml as downloadFileByFormSubmit,
  Dn as downloadFileReaderFile,
  Fl as downloadFileWithSpin,
  Hi as emptyInput,
  Nn as fakeALinkClick,
  Za as fileExport,
  _t as findCollection,
  Jt as findPath,
  Xa as formDataHeadConfig,
  mt as fullScreenImgByDom,
  Si as fullScreenImgPreview,
  en as getColumnsKeys,
  gl as getFileSrc,
  Hl as getFileTypeByName,
  bl as getFileTypeIconByName,
  Kn as getStringWidth,
  qa as has,
  al as hasPermission,
  Gi as htmlDecode,
  Ei as htmlEncode,
  on as htmlPrint,
  qi as i18n,
  Bi as install,
  Gt as isClient,
  ln as isEmptyValue,
  ft as isImgByFile,
  Nl as isNaN,
  tn as isNumberValue,
  Re as isValidValue,
  ji as locale,
  Yt as messageBox,
  Y as myTypeof,
  Ya as oneOf,
  Wt as removeEmptyValue,
  pn as setInterval,
  $e as setTimeout,
  ot as setValByOption,
  qe as setValue,
  nl as siblingElems,
  Wi as stopBubbling,
  an as stringLength,
  ol as tablePrint,
  Ja as toFormData,
  Fn as toHump,
  $l as toLine,
  Dl as tooltipManual,
  Lt as trimObj
};
//# sourceMappingURL=plugRQw.js.map
