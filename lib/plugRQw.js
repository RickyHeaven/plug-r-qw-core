var oa = Object.defineProperty;
var ia = (t, r, n) => r in t ? oa(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[r] = n;
var dt = (t, r, n) => ia(t, typeof r != "symbol" ? r + "" : r, n);
import { getCurrentInstance as Lt, defineComponent as de, resolveComponent as Q, createElementBlock as N, openBlock as S, normalizeStyle as se, normalizeClass as we, createBlock as le, createCommentVNode as ue, renderSlot as De, ref as U, computed as H, withDirectives as pe, unref as m, createElementVNode as R, createVNode as X, toDisplayString as W, withCtx as ne, createTextVNode as ke, vShow as ve, resolveDirective as Zt, onMounted as Ee, nextTick as Re, onUpdated as sa, onUnmounted as xl, h as Ae, isRef as Fe, Fragment as be, renderList as Te, onBeforeMount as Ll, watch as Se, mergeModels as ra, useModel as ua, onBeforeUnmount as el, Teleport as da, withModifiers as Ft, mergeProps as rt, shallowRef as ht, triggerRef as ca, createSlots as st, toRef as fa, toValue as $t } from "vue";
import pa from "deepmerge";
import { debounce as Ot, isPlainObject as it, cloneDeep as ce, isObject as ma, isFunction as ha, isEmpty as Me, isNumber as wt, last as Vt, isEqual as yt, isString as Ol, first as Dt, find as Nt, indexOf as dl, findIndex as St, remove as ya } from "lodash-es";
import bt from "sweetalert";
import { Tooltip as va, Modal as Qe, Button as Mt, TableColumnConfig as ga, Radio as ba, Input as ka, Message as cl, Icon as wa } from "view-ui-plus";
import { useRouter as At, useRoute as tl } from "vue-router";
import _a from "popper.js";
import Kt from "axios";
import fl from "@amap/amap-jsapi-loader";
import Va from "ar-cascader";
import { Toolbar as Sa, Editor as Ca } from "@wangeditor/editor-for-vue";
import ct from "moment";
import { Boot as Ta } from "@wangeditor/editor";
import Ba from "vue-json-viewer";
const Al = {
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
let Ct = Al;
const Aa = {
  zh: Al
};
let pl, ml = {}, Ne, Ia = function(t, r) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, r);
  if (Ne && Ne.global)
    return Ne.global.t(t, r);
  if (Ne && Ne.locale) {
    if (!ml[Ne.locale] || pl != Ne.locale) {
      ml[Ne.locale] = !0;
      let n = Ne.getLocaleMessage(Ne.locale) || {}, e = pa(Aa[Ne.locale], n, { clone: !0 });
      Ct = e, Ne.setLocaleMessage(Ne.locale, e), pl = Ne.locale;
    }
    return Ne.hlang(t, r);
  }
};
const Je = function(t, r) {
  let n = Ia.apply(this, [t, r]);
  if (n != null)
    return n;
  const e = t.split(".");
  let l = Ct;
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
  Ct = t || Ct;
}, Ra = function(t) {
  Ne = t;
}, Tt = {
  use: Pa,
  t: Je,
  i18n: Ra
};
function A(t, r) {
  var e, l, i;
  const n = (i = (l = (e = Lt()) == null ? void 0 : e.appContext) == null ? void 0 : l.config) == null ? void 0 : i.globalProperties;
  return Je.apply(n, [t, r]);
}
const Il = /* @__PURE__ */ de({
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
      return S(), N("div", {
        class: we({ headerBtCTM: !0, withIconCTM: n.icon || n.withIcon, disabled: n.disabled }),
        style: se({ color: n.color, borderLeftColor: n.borderColor }),
        onClick: l
      }, [
        n.icon ? (S(), le(c, {
          key: 0,
          size: n.iconSize,
          type: n.icon
        }, null, 8, ["size", "type"])) : ue("", !0),
        De(i.$slots, "default")
      ], 6);
    };
  }
});
function Oe() {
  var n, e;
  const t = (n = Lt()) == null ? void 0 : n.appContext;
  return ((e = t == null ? void 0 : t.config) == null ? void 0 : e.globalProperties) || {};
}
const $a = { class: "headerTxtAM" }, Ma = { class: "contentAM" }, Fa = /* @__PURE__ */ de({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: () => {
      var t;
      return (t = Oe()) == null ? void 0 : t.fontSizeBase;
    } },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(t, { expose: r, emit: n }) {
    const e = t, l = n;
    let i = U(!1);
    const s = H(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), c = H(() => ({ zIndex: e.zIndex }));
    function o() {
      i.value = !0, l("on-open");
    }
    function y(f) {
      i.value = !1, l("on-close", f === !0);
    }
    return r({
      open: o,
      close: y
    }), (f, p) => pe((S(), N("div", {
      class: "fullScreenPopBoxAM",
      style: se(m(c))
    }, [
      R("div", {
        class: "headerAM",
        style: se({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: m(s) })
      }, [
        R("span", $a, W(f.title || m(A)("r.title")), 1),
        X(Il, {
          icon: "md-return-left",
          onClick: y
        }, {
          default: ne(() => [
            ke(W(m(A)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      R("div", Ma, [
        De(f.$slots, "default")
      ])
    ], 4)), [
      [ve, m(i)]
    ]);
  }
}), Da = { class: "msg" }, Na = /* @__PURE__ */ de({
  __name: "Hello",
  setup(t) {
    let r = U("Greetings from Ricky.");
    return (n, e) => (S(), N("span", Da, W(m(r)), 1));
  }
}), zt = /* @__PURE__ */ de({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => Oe().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const n = t, e = r, l = H(() => {
      var s;
      return Math.floor(n.size / 17 * ((s = Oe()) == null ? void 0 : s.fontSizeBase)) + "px";
    });
    function i(s) {
      n.disabled || e("click", s);
    }
    return (s, c) => {
      const o = Q("Icon"), y = Zt("has");
      return pe((S(), N("div", {
        class: we(["tabTopBtnsT", { disabled: n.disabled }]),
        onClick: i,
        style: se({ "font-size": m(l) })
      }, [
        X(o, {
          type: n.icon,
          size: n.size
        }, null, 8, ["type", "size"]),
        ke(" " + W(n.name || m(A)("r.button")), 1)
      ], 6)), [
        [y, s.has]
      ]);
    };
  }
}), Ka = { class: "c404K" }, za = { class: "ct404" }, Ua = { class: "p404" }, Ea = /* @__PURE__ */ de({
  __name: "Page404",
  setup(t) {
    const n = Lt().appContext.config.globalProperties.$router;
    function e() {
      n.go(-1);
    }
    return (l, i) => {
      const s = Q("Button");
      return S(), N("div", Ka, [
        i[0] || (i[0] = R("div", { class: "t404" }, "404", -1)),
        R("div", za, "UH OH! " + W(m(A)("r.pageNotFound")), 1),
        R("div", Ua, W(m(A)("r.notFoundMsg")), 1),
        X(s, {
          class: "bt404",
          onClick: e
        }, {
          default: ne(() => [
            ke(W(m(A)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Ke(t, r, n, e = !0) {
  const l = (...i) => Je.apply(this, i);
  return new Promise((i, s) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let c = l("r.confirm"), o = l("r.cancel"), y = !1, f = "swalConfirmBt", p = "swalCancelBt";
      const u = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let v = "";
      t.text && u.test(J(t.text)) ? v = "content" : t.text && J(t.text) === "String" && (v = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (o = t.buttons.cancel.text) && (y = !0), t.buttons.cancel.className && (p = t.buttons.cancel.className), t.buttons.confirm.text && (c = t.buttons.confirm.text), t.buttons.confirm.className && (f = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (o = t.buttons[0], y = !0), t.buttons[1] && (c = t.buttons[1]))), bt({
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
      bt({
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
      !t && bt.close && bt.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
const Ga = { class: "tableTooltip" }, Ha = /* @__PURE__ */ de({
  __name: "TableTooltip",
  props: {
    content: { type: [String, Number, Boolean, null] }
  },
  setup(t) {
    const r = t, n = U(), e = U(), l = U(!0);
    let i = null;
    const s = U(200);
    function c() {
      const o = l.value ? n.value : e.value;
      if (!o)
        return;
      let y = document.createRange();
      y.setStart(o, 0), y.setEnd(o, o.childNodes.length);
      const f = y.getBoundingClientRect().width;
      s.value = o.offsetWidth * 2, l.value = f < o.offsetWidth, y = null;
    }
    return Ee(() => {
      c(), i = Ot(() => {
        Re(function() {
          c();
        });
      }, 200), window.addEventListener("resize", i);
    }), sa(c), xl(() => {
      window.removeEventListener("resize", i);
    }), (o, y) => (S(), N("div", Ga, [
      m(l) ? (S(), N("span", {
        key: 0,
        ref_key: "spanRef",
        ref: n,
        class: "contentText"
      }, W(r.content), 513)) : (S(), le(m(va), {
        key: 1,
        content: typeof r.content == "boolean" ? String(r.content) : r.content ?? "",
        "max-width": m(s),
        transfer: ""
      }, {
        default: ne(() => [
          R("span", {
            ref_key: "contentRef",
            ref: e,
            class: "contentText"
          }, W(r.content), 513)
        ]),
        _: 1
      }, 8, ["content", "max-width"]))
    ]));
  }
}), Ut = typeof window < "u";
function qe(t, r, n) {
  Fe(t[r]) ? t[r].value = n : t[r] = n;
}
function J(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function Wa(t) {
  return { style: { display: ll(t) ? "unset" : "none" } };
}
function Pl(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function Bt(t) {
  let r = J(t);
  if (r === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = J(t[n]);
        e === "String" ? t[n] = t[n].trim() : (e === "Object" || e === "Array") && Bt(t[n]);
      }
  } else if (r === "Array")
    for (let n = 0, e = t.length; n < e; n++) {
      let l = J(t[n]);
      l === "String" ? t[n] = t[n].trim() : (l === "Array" || l === "Object") && Bt(t[n]);
    }
  return t;
}
function Et(t, r = []) {
  if (J(t) === "Array")
    return t.forEach((n, e) => {
      switch (J(n)) {
        case "Array":
        case "Object":
          Et(n);
          break;
        default:
          t[e] = null;
      }
    }), t;
  if (J(t) === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = !0;
        for (let l of r)
          if (l === n) {
            e = !1;
            break;
          }
        if (e)
          switch (J(t[n])) {
            case "Array":
            case "Object":
              Et(t[n]);
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
function _t(t, r, n = !1) {
  if (!t || !r)
    return !1;
  let e, l = "notFoundC", i = function(s, c) {
    if (Array.isArray(s)) {
      if (J(c) === "Function" && c(s))
        return l = s, [];
      for (let o of s) {
        if (l !== "notFoundC")
          break;
        if (J(c) === "Function" && c(o) || o === c)
          return l = o, [s.indexOf(o)];
        if (J(o) === "Array" || J(o) === "Object") {
          let y = i(o, c);
          if (y !== void 0)
            return [s.indexOf(o), ...y];
        }
      }
    } else if (J(s) === "Object") {
      if (J(c) === "Function" && c(s))
        return l = s, [];
      for (let o in s) {
        if (l !== "notFoundC")
          break;
        if (s.hasOwnProperty(o)) {
          if (J(c) === "Function" && c(o) || s[o] === c)
            return l = s[o], [o];
          if (J(s[o]) === "Object" || J(s[o]) === "Array") {
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
function Rl(t, r = {}, n = "get") {
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
  if (e.setAttribute("action", i), it(r)) {
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
    Ke.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  Rl(t, r, n);
}
function Qa(t, r, n = !1) {
  let e;
  if (t && J(r) === "Array") {
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
function Ie(t) {
  return t != null && t !== "";
}
function Za(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function $l(t, r = !1, n = "") {
  return function(e, l) {
    var s, c;
    let i;
    if (Array.isArray(t)) {
      let o = [];
      for (let y of t)
        Ie((s = l.row) == null ? void 0 : s[y]) && o.push(l.row[y]);
      i = o.join(n);
    } else typeof t == "function" ? i = t(l) : i = (c = l.row) == null ? void 0 : c[t];
    return Ae(Ha, { content: r ? i === "" ? "--" : i ?? "--" : i });
  };
}
function en(t) {
  if (it(t)) {
    for (let r in t)
      if (t.hasOwnProperty(r) && Ie(t[r]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let r of t)
      if (Ie(r))
        return !1;
    return !0;
  }
  return !Ie(t);
}
function tn(t) {
  return J(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : J(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function ot({
  group: t,
  condition: r,
  key: n,
  val: e,
  childKey: l = "children"
}) {
  if (J(t) !== "Array" || J(r) !== "Function" || J(n) !== "String" || J(l) !== "String")
    return !1;
  t.forEach((i) => {
    r(i) && (J(e) === "Function" ? i[n] = e(i[n]) : i[n] = e), J(i[l]) === "Array" && i[l].length > 0 && ot({
      group: i[l],
      condition: r,
      key: n,
      val: e,
      childKey: l
    });
  });
}
function ll(t) {
  let r = sessionStorage.getItem("btnPermissions");
  return r ? r.split(",").indexOf(t) > -1 : !1;
}
function Ml(t) {
  return J(t) === "Number" && String(t) === "NaN";
}
function ln(t, r = !1, n = !1) {
  if (J(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), l = "";
  for (let i in e)
    if (e.hasOwnProperty(i)) {
      let s = e[i];
      s === void 0 || s === "" || J(s) === "String" && s.trim() === "" || s === null || Ml(s) ? n ? r ? l += i + "=&" : e[i] = "" : delete e[i] : r && (l += i + "=" + s + "&");
    }
  return r ? l.length > 0 ? l.substring(0, l.length - 1) : "" : e;
}
function Gt(t) {
  let r = {};
  if (Array.isArray(t)) {
    r = [];
    for (let n of t)
      Array.isArray(n) || it(n) ? r.push(Gt(n)) : Ie(n) && r.push(n);
  } else if (it(t))
    for (let n in t)
      t.hasOwnProperty(n) && (Array.isArray(t[n]) || it(t[n]) ? r[n] = Gt(t[n]) : Ie(t[n]) && (r[n] = t[n]));
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
function al(t) {
  let r = [], n = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && r.push(t);
  for (; n.nextSibling && (n = n.nextSibling); )
    n.nodeType === 1 && r.push(n);
  return r;
}
const nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Et,
  dataFilterOrToUrl: ln,
  decimalDigitsLimit: Ja,
  downloadFileByFormSubmit: Rl,
  fileExport: Ya,
  findCollection: _t,
  formDataHeadConfig: ja,
  getColumnsKeys: Qa,
  has: Wa,
  hasPermission: ll,
  htmlPrint: an,
  isClient: Ut,
  isEmptyValue: en,
  isNaN: Ml,
  isNumberValue: Za,
  isValidValue: Ie,
  myTypeof: J,
  oneOf: Xa,
  removeEmptyValue: Gt,
  setValByOption: ot,
  setValue: qe,
  siblingElems: al,
  stringLength: tn,
  toFormData: qa,
  toLine: Pl,
  tooltipManual: $l,
  trimObj: Bt
}, Symbol.toStringTag, { value: "Module" })), on = { class: "groupBoxRP" }, sn = ["onClick"], rn = /* @__PURE__ */ de({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const r = At(), n = t;
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
      let o = c.parentNode, y = al(o);
      for (let T of y) {
        (u = (p = T == null ? void 0 : T.classList) == null ? void 0 : p.remove) == null || u.call(p, "open");
        const L = (v = T == null ? void 0 : T.querySelectorAll) == null ? void 0 : v.call(T, ".open");
        if (L && Array.isArray(L))
          for (let C of L)
            (g = (k = C == null ? void 0 : C.classList) == null ? void 0 : k.remove) == null || g.call(k, "open");
      }
      (w = (_ = o == null ? void 0 : o.classList) == null ? void 0 : _.toggle) == null || w.call(_, "open");
    }
    return (i, s) => {
      const c = Q("Icon"), o = Q("sideMenuGroup", !0);
      return S(), N("ul", on, [
        (S(!0), N(be, null, Te(n.data, (y, f) => (S(), N(be, {
          key: (y == null ? void 0 : y.path) + f
        }, [
          y ? (S(), N("li", {
            key: 0,
            class: we({ dropItemRP: y.children })
          }, [
            R("div", {
              class: we(["menuTxtR", e(y)]),
              onClick: (p) => l(p, y),
              style: se({ paddingLeft: y.level * 20 + "px" })
            }, [
              y != null && y.icon ? (S(), le(c, {
                key: 0,
                class: "menuIcoL",
                custom: "iconfont " + y.icon
              }, null, 8, ["custom"])) : ue("", !0),
              R("span", null, W((y == null ? void 0 : y.name) || "-- no name --"), 1)
            ], 14, sn),
            y.children ? (S(), le(o, {
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
let Ht = [], Wt = [];
const un = function(t) {
  t && t.beforeEach ? t.beforeEach(() => {
    Ht.map((r) => {
      window.clearTimeout(r);
    }), Wt.map((r) => {
      window.clearInterval(r);
    }), Ht.length = 0, Wt.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Pe = function(t, r) {
  let n = window.setTimeout(t, r);
  return Ht.push(n), n;
}, dn = function(t, r) {
  let n = window.setInterval(t, r);
  return Wt.push(n), n;
}, cn = { class: "menuListR" }, fn = /* @__PURE__ */ de({
  __name: "SideMenu",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: r }) {
    const n = t, e = r, l = tl(), i = U(!0), s = U(), c = U(), o = H(() => i.value ? A("r.hideMenu") : A("r.showMenu")), y = H(() => i.value ? "ios-arrow-back" : "ios-arrow-forward");
    Ll(() => {
      let u = localStorage.getItem("menuDisplayR") || "";
      u !== "" ? i.value = JSON.parse(u) : (i.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), Se(
      () => l.path,
      (u) => {
        s.value = u, Re(() => {
          Pe(p, 10);
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
      return S(), N("div", {
        ref_key: "menuRef",
        ref: c,
        class: we(["menuBoxRP", "cannotSelect", { light: u.light }])
      }, [
        pe(R("div", cn, [
          X(rn, {
            data: n.data,
            pathName: m(s)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, m(i)]
        ]),
        X(k, {
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
}), pn = { class: "groupBoxRX" }, mn = ["onMouseenter"], hn = ["onClick"], yn = /* @__PURE__ */ de({
  __name: "SideMenuProGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const r = At(), n = t, e = U("");
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
      return S(), N("ul", pn, [
        (S(!0), N(be, null, Te(n.data, (u, v) => {
          var k;
          return S(), N("li", {
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
              ke(W((u == null ? void 0 : u.name) || "-- no name --") + " ", 1),
              pe(X(f, {
                class: "dropIcoRX",
                type: "ios-arrow-forward",
                size: 16
              }, null, 512), [
                [ve, u.children && u.children.length > 0]
              ])
            ], 14, hn),
            ((k = u == null ? void 0 : u.children) == null ? void 0 : k.length) > 0 ? pe((S(), le(p, {
              key: 0,
              class: "rightChildRX",
              data: u == null ? void 0 : u.children,
              "path-name": o.pathName
            }, null, 8, ["data", "path-name"])), [
              [ve, m(e) === (u == null ? void 0 : u.path)]
            ]) : ue("", !0)
          ], 42, mn);
        }), 128))
      ]);
    };
  }
}), vn = { class: "groupBoxRX" }, gn = ["onClick"], Fl = /* @__PURE__ */ de({
  __name: "SideMenuTwoLevel",
  props: {
    data: { default: () => [] },
    pathName: { default: "" },
    fromIcoMenu: { type: Boolean }
  },
  setup(t) {
    const r = At(), n = t;
    function e(i) {
      let s = "menuTxtR ";
      return (i == null ? void 0 : i.path) === n.pathName && (s += "active "), s;
    }
    function l(i, s) {
      var p, u, v, k, g, _, w, T, L, C, F, P, I, h;
      (p = i == null ? void 0 : i.preventDefault) == null || p.call(i);
      let c = i == null ? void 0 : i.target;
      if (s && !s.children && !c.classList.contains("active")) {
        r.push(s.path);
        return;
      }
      const o = (u = c == null ? void 0 : c.querySelector) == null ? void 0 : u.call(c, ".dropIcoRX"), y = c.parentNode, f = al(y);
      for (let B of f) {
        (k = (v = B == null ? void 0 : B.classList) == null ? void 0 : v.remove) == null || k.call(v, "open");
        const x = (g = B == null ? void 0 : B.querySelector) == null ? void 0 : g.call(B, ".dropIcoRX");
        (w = (_ = x == null ? void 0 : x.classList) == null ? void 0 : _.remove) == null || w.call(_, "open");
        const te = (T = B == null ? void 0 : B.querySelectorAll) == null ? void 0 : T.call(B, ".open");
        for (let z of te)
          (C = (L = z == null ? void 0 : z.classList) == null ? void 0 : L.remove) == null || C.call(L, "open");
      }
      (P = (F = y == null ? void 0 : y.classList) == null ? void 0 : F.toggle) == null || P.call(F, "open"), (h = (I = o == null ? void 0 : o.classList) == null ? void 0 : I.toggle) == null || h.call(I, "open");
    }
    return (i, s) => {
      const c = Q("Icon");
      return S(), N("ul", vn, [
        (S(!0), N(be, null, Te(n.data, (o, y) => (S(), N("li", {
          key: (o == null ? void 0 : o.path) + y,
          class: we({ dropItemRX: o == null ? void 0 : o.children, open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu })
        }, [
          R("div", {
            class: we(e(o)),
            onClick: (f) => l(f, o),
            style: se({ paddingLeft: o.level * 20 + "px" })
          }, [
            X(c, {
              class: "menuIcoL",
              custom: "iconfont " + (o.icon || "icon-r-menu-default")
            }, null, 8, ["custom"]),
            R("span", null, W((o == null ? void 0 : o.name) || "-- no name --"), 1),
            pe(X(c, {
              class: we(["dropIcoRX", { open: n.fromIcoMenu, fromIcoMenu: n.fromIcoMenu }]),
              type: "ios-arrow-forward"
            }, null, 8, ["class"]), [
              [ve, o.children && o.children.length > 0]
            ])
          ], 14, gn),
          o.children ? (S(), le(yn, {
            key: 0,
            data: o.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : ue("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), bn = { class: "groupBoxRX" }, kn = ["onMouseenter"], wn = ["onClick"], _n = /* @__PURE__ */ de({
  __name: "SideIcoMenu",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const r = At(), n = t, e = U("");
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
      return S(), N("ul", bn, [
        (S(!0), N(be, null, Te(n.data, (p, u) => (S(), N("li", {
          key: (p == null ? void 0 : p.path) + u,
          class: we({ dropItemRX: p.children }),
          onMouseenter: (v) => s(v, p),
          onMouseleave: y[0] || (y[0] = (v) => c(v))
        }, [
          R("div", {
            class: we(l(p)),
            onClick: (v) => i(v, p)
          }, [
            X(f, {
              class: "menuIcoM",
              custom: "iconfont " + (p.icon || "icon-r-menu-default"),
              size: "20"
            }, null, 8, ["custom"])
          ], 10, wn),
          pe(X(Fl, {
            class: "rightTwoMenu",
            data: [p],
            pathName: n.pathName,
            fromIcoMenu: ""
          }, null, 8, ["data", "pathName"]), [
            [ve, m(e) === (p == null ? void 0 : p.path)]
          ])
        ], 42, kn))), 128))
      ]);
    };
  }
}), Vn = { class: "menuListR" }, Sn = /* @__PURE__ */ de({
  __name: "SideMenuPro",
  props: {
    data: { default: () => [] },
    light: { type: Boolean }
  },
  emits: ["on-change"],
  setup(t, { emit: r }) {
    const n = t, e = r, l = tl(), i = U(!0), s = U(), c = U(), o = H(() => i.value ? A("r.hideMenu") : A("r.showMenu")), y = H(() => i.value ? "iconfont icon-r-menu-hide" : "iconfont icon-r-menu-open");
    Ll(() => {
      let u = localStorage.getItem("menuDisplayRPro") || "";
      u !== "" ? i.value = JSON.parse(u) : (i.value = !0, localStorage.setItem("menuDisplayRPro", JSON.stringify(!0)));
    }), Se(
      () => l.path,
      (u) => {
        s.value = u, Re(() => {
          Pe(p, 10);
        });
      },
      { immediate: !0 }
    );
    function f() {
      i.value = !i.value, localStorage.setItem("menuDisplayRPro", JSON.stringify(i.value)), e("on-change", i.value);
    }
    function p() {
      var v, k, g, _, w, T, L, C, F, P, I, h, B, x, te, z, D, Y, b, M, j, $, Z, ee, he, fe, me, Le, ae, Be, $e, Ge, et, He, E, K, ye, ge, _e;
      let u = c.value.querySelectorAll(".dropItemRX");
      for (let G of u) {
        const Ve = (k = (v = G == null ? void 0 : G.childNodes[0]) == null ? void 0 : v.querySelector) == null ? void 0 : k.call(v, ".dropIcoRX");
        (g = G == null ? void 0 : G.querySelector) != null && g.call(G, ".active") ? (T = (w = (_ = G == null ? void 0 : G.childNodes[1]) == null ? void 0 : _.classList) == null ? void 0 : w.contains) != null && T.call(w, "rightChildRX") ? (F = (C = (L = G == null ? void 0 : G.childNodes[0]) == null ? void 0 : L.classList) == null ? void 0 : C.contains) != null && F.call(C, "activeR") || (I = G == null ? void 0 : (P = G.childNodes[0].classList).add) == null || I.call(P, "activeR") : ((B = (h = G == null ? void 0 : G.classList) == null ? void 0 : h.contains) != null && B.call(h, "open") || (te = (x = G.classList).add) == null || te.call(x, "open"), Ve && !((D = (z = Ve == null ? void 0 : Ve.classList) == null ? void 0 : z.contains) != null && D.call(z, "open")) && ((b = (Y = Ve.classList).add) == null || b.call(Y, "open"))) : ($ = (j = (M = G == null ? void 0 : G.childNodes[1]) == null ? void 0 : M.classList) == null ? void 0 : j.contains) != null && $.call(j, "rightChildRX") ? (he = (ee = (Z = G == null ? void 0 : G.childNodes[0]) == null ? void 0 : Z.classList) == null ? void 0 : ee.contains) != null && he.call(ee, "activeR") && ((me = G == null ? void 0 : (fe = G.childNodes[0].classList).remove) == null || me.call(fe, "activeR")) : ((ae = (Le = G == null ? void 0 : G.classList) == null ? void 0 : Le.contains) != null && ae.call(Le, "open") && !(($e = (Be = G == null ? void 0 : G.classList) == null ? void 0 : Be.contains) != null && $e.call(Be, "fromIcoMenu")) && ((et = (Ge = G.classList).remove) == null || et.call(Ge, "open")), (E = (He = Ve == null ? void 0 : Ve.classList) == null ? void 0 : He.contains) != null && E.call(He, "open") && !((ye = (K = Ve == null ? void 0 : Ve.classList) == null ? void 0 : K.contains) != null && ye.call(K, "fromIcoMenu")) && ((_e = (ge = Ve.classList).remove) == null || _e.call(ge, "open")));
      }
    }
    return (u, v) => {
      const k = Q("Icon");
      return S(), N("div", {
        ref_key: "menuProRef",
        ref: c,
        class: we(["menuBoxRPro", "cannotSelect", { light: u.light }])
      }, [
        pe(R("div", Vn, [
          X(Fl, {
            data: n.data,
            pathName: m(s)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, m(i)]
        ]),
        pe(X(_n, {
          class: "icoMenuR",
          data: u.data,
          pathName: m(s)
        }, null, 8, ["data", "pathName"]), [
          [ve, !m(i)]
        ]),
        X(k, {
          custom: m(y),
          size: 14,
          class: we([{ showIco: !m(i) }, "menuShowHideIco"]),
          title: m(o),
          onClick: f
        }, null, 8, ["custom", "class", "title"])
      ], 2);
    };
  }
}), Cn = ["title"], Dl = /* @__PURE__ */ de({
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
      const c = Q("Icon"), o = Zt("has");
      return pe((S(), N("div", {
        class: we(["tableBtnsG", { disabled: e.disabled }]),
        onClick: l,
        title: e.title || m(A)("r.button")
      }, [
        X(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Cn)), [
        [o, e.has]
      ]);
    };
  }
}), Tn = { class: "contentX" }, Bn = { class: "arrowA" }, jt = /* @__PURE__ */ de({
  __name: "ShowHidePanel",
  props: /* @__PURE__ */ ra({
    bg: {}
  }, {
    modelValue: { type: Boolean, default: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const r = ua(t, "modelValue"), n = t, e = H(() => r ? "background:" + n.bg || "transparent" : "");
    return (l, i) => {
      const s = Q("Icon");
      return S(), N("div", {
        style: se(m(e))
      }, [
        pe(R("div", Tn, [
          De(l.$slots, "default")
        ], 512), [
          [ve, r.value]
        ]),
        R("div", Bn, [
          R("div", {
            class: "btA",
            onClick: i[0] || (i[0] = (c) => r.value = !r.value)
          }, [
            X(s, {
              type: r.value ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), xn = { class: "contentZ" }, Ln = /* @__PURE__ */ de({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: r }) {
    const n = t, e = r, l = H({
      get() {
        return n.modelValue;
      },
      set(s) {
        e("update:modelValue", s);
      }
    }), i = H(() => l.value ? "background:" + n.bg : "");
    return (s, c) => (S(), N("div", {
      style: se(m(i))
    }, [
      pe(R("div", xn, [
        De(s.$slots, "default")
      ], 512), [
        [ve, m(l)]
      ])
    ], 4));
  }
}), On = /* @__PURE__ */ de({
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
    const i = H({
      get() {
        return e.modelValue;
      },
      set(y) {
        n("update:modelValue", y);
      }
    }), s = H({
      get() {
        return e.open;
      },
      set(y) {
        n("on-toggle", y);
      }
    }), c = H(() => s.value ? "ios-arrow-up" : "ios-arrow-down");
    function o() {
      l || (l = !0, n("on-search", i.value), Pe(() => {
        l = !1;
      }, 2e3));
    }
    return (y, f) => {
      const p = Q("Input"), u = Q("icon");
      return S(), N("div", {
        class: "tableSearchV",
        style: se({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        De(y.$slots, "default", {}, () => [
          X(p, {
            modelValue: m(i),
            "onUpdate:modelValue": f[0] || (f[0] = (v) => Fe(i) ? i.value = v : null),
            style: se({ width: e.width }),
            search: "",
            onOnSearch: o,
            class: "searchInputC",
            placeholder: e.placeholder || m(A)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        pe(R("span", {
          class: "sbt",
          onClick: f[1] || (f[1] = (v) => s.value = !m(s)),
          style: se({ color: e.btnColor })
        }, [
          X(u, {
            type: m(c),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ke(W(m(A)("r.adSearch")), 1)
        ], 4), [
          [ve, e.showBtn]
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
    t.__vueClickOutside__ = n, Ut && document.addEventListener("click", n);
  },
  unmounted(t) {
    Ut && document.removeEventListener("click", t.__vueClickOutside__), delete t.__vueClickOutside__;
  }
};
function Kl(t, r, n, e, l = !1) {
  const i = (...s) => Je.apply(this, s);
  Ke.call(this, {
    title: t || i("r.info.title"),
    text: r || i("r.info.text"),
    icon: n || "warning",
    onOk: e,
    buttons: [i("r.cancel")],
    closeOnClickOutside: l
  });
}
const An = { class: "tabSetF" }, In = { class: "cannotSelect" }, Pn = { class: "topCheck" }, zl = /* @__PURE__ */ de({
  __name: "TableSetting",
  props: {
    modelValue: { default: () => [] },
    sKey: {},
    width: { default: "240px" },
    bg: { default: () => Oe().tableSettingBg },
    placement: { default: "bottom-end" },
    defaultCheck: { type: Boolean, default: !1 },
    storage: { default: "localStorage" },
    transfer: { type: Boolean, default: () => Oe().tableSettingTransfer },
    eventsEnabled: { type: Boolean, default: () => Oe().tableSettingEventsEnabled }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: r }) {
    var h, B, x, te, z;
    const n = r, e = t, l = U(), i = U(), s = U(!0), c = U(!1), o = U(!1), y = U([]), f = H(() => {
      var Y;
      let D = A("r.unknown");
      return ((Y = e.modelValue) == null ? void 0 : Y.length) > y.value.length && (y.value = ce(e.modelValue)), y.value.map((b) => {
        let M = { label: (b == null ? void 0 : b.title) || D };
        return b != null && b.disableShowSetting && (M.disabled = !0), M;
      });
    }), p = H(() => f.value.filter((D) => D == null ? void 0 : D.disabled)), u = H({
      get() {
        var D, Y;
        return (Y = (D = e.modelValue) == null ? void 0 : D.map) == null ? void 0 : Y.call(D, (b) => (b == null ? void 0 : b.title) || A("r.unknown"));
      },
      set(D) {
        let Y = y.value.filter((b) => {
          for (let M of D)
            if (M === (b == null ? void 0 : b.title))
              return !0;
          return !1;
        });
        n("update:modelValue", Y);
      }
    }), v = (z = (te = (x = (B = (h = Lt()) == null ? void 0 : h.appContext) == null ? void 0 : B.config) == null ? void 0 : x.globalProperties) == null ? void 0 : te.$i18n) == null ? void 0 : z.locale;
    let k = null;
    Ee(() => {
      let D = A("r.unknown"), Y = P();
      Y ? u.value = JSON.parse(decodeURI(Y)) : e.defaultCheck && (u.value = e.modelValue.filter((b) => b == null ? void 0 : b.showSettingCheck).map((b) => (b == null ? void 0 : b.title) || D)), Re(function() {
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
            var M;
            if (b != null && b.popper && ((M = b.instance) != null && M.popper)) {
              const j = g(b), { needChange: $ } = j;
              if ($) {
                const { height: Z } = j, ee = b.instance.popper;
                ee.style && (ee.style.height = `${Z}px`);
              }
            }
          }
        }));
      }), Pe(() => {
        var b;
        o.value = !0, (b = k == null ? void 0 : k.update) == null || b.call(k), Re(function() {
          o.value = !1;
        });
      }, 0);
    }), el(function() {
      var D;
      (D = k == null ? void 0 : k.destroy) == null || D.call(k);
    });
    function g(D) {
      var $, Z;
      const { height: Y } = D.popper, b = D.instance.popper, M = window.innerHeight;
      let j = 0;
      if (($ = b.childNodes) != null && $.length)
        for (let ee = 0; ee < b.childNodes.length; ee++)
          j += (Z = b.childNodes[ee]) == null ? void 0 : Z.offsetHeight;
      return M < Y - 10 || Y < j ? {
        needChange: !0,
        height: M - 10 < j ? M - 10 : j
      } : { needChange: !1 };
    }
    function _(D) {
      D.length === f.value.length ? (s.value = !1, c.value = !0) : D.length > p.value.length ? (s.value = !0, c.value = !1) : (s.value = !1, c.value = !1);
    }
    Se(() => u.value, _, {
      immediate: !0,
      deep: !0
    });
    function w() {
      o.value && (I() && Kl(A("r.notSave"), "", "warning", L), o.value = !1);
    }
    function T() {
      o.value ? w() : (o.value = !0, Re(function() {
        var D;
        (D = k == null ? void 0 : k.update) == null || D.call(k);
      }));
    }
    function L() {
      v ? window[e.storage].setItem(e.sKey + "_" + v, encodeURI(JSON.stringify(u.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(u.value))), w();
    }
    function C(D) {
      var Y, b;
      if (o.value) {
        if (e.transfer) {
          const M = i.value;
          if (M === (D == null ? void 0 : D.target) || (Y = M == null ? void 0 : M.contains) != null && Y.call(M, D == null ? void 0 : D.target))
            return;
        }
        (b = D == null ? void 0 : D.preventDefault) == null || b.call(D), w();
      }
    }
    function F() {
      s.value ? c.value = !1 : c.value = !c.value, s.value = !1, c.value ? u.value = f.value.map((D) => D == null ? void 0 : D.label) : u.value = p.value.map((D) => D == null ? void 0 : D.label);
    }
    function P() {
      let D;
      return v ? D = window[e.storage].getItem(e.sKey + "_" + v) : D = window[e.storage].getItem(e.sKey), D;
    }
    function I() {
      var Y;
      let D = P();
      if (D) {
        if (D = JSON.parse(decodeURI(D)), (D == null ? void 0 : D.length) !== ((Y = u.value) == null ? void 0 : Y.length))
          return !0;
        for (let b of D)
          if (u.value.indexOf(b) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (D, Y) => {
      const b = Q("Icon"), M = Q("Checkbox"), j = Q("CheckboxGroup");
      return pe((S(), N("div", An, [
        R("div", {
          ref_key: "buttonRef",
          ref: l,
          class: "tabSetBt",
          onClick: T
        }, [
          X(b, {
            type: "md-settings",
            size: "17"
          }),
          R("span", In, W(m(A)("r.tabSetting")), 1)
        ], 512),
        (S(), le(da, {
          to: "body",
          disabled: !e.transfer
        }, [
          pe(R("div", {
            ref_key: "popperRef",
            ref: i,
            class: "tabSetCard",
            style: se({ width: e.width, backgroundColor: e.bg })
          }, [
            R("div", Pn, [
              X(M, {
                indeterminate: m(s),
                modelValue: m(c),
                "onUpdate:modelValue": Y[0] || (Y[0] = ($) => Fe(c) ? c.value = $ : null),
                onClick: Ft(F, ["prevent"])
              }, {
                default: ne(() => [
                  ke(W(m(A)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              R("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: L
              }, [
                Y[2] || (Y[2] = R("span", { class: "iconfont icon-r-save" }, null, -1)),
                R("span", null, W(m(A)("r.save")), 1)
              ])
            ]),
            X(j, {
              modelValue: m(u),
              "onUpdate:modelValue": Y[1] || (Y[1] = ($) => Fe(u) ? u.value = $ : null)
            }, {
              default: ne(() => [
                (S(!0), N(be, null, Te(m(f), ($, Z) => (S(), le(M, {
                  class: "setItem",
                  label: $ && $.label,
                  key: "tabSet_" + e.sKey + Z,
                  disabled: $ && $.disabled
                }, null, 8, ["label", "disabled"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ], 4), [
            [ve, m(o)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [m(Nl), C]
      ]);
    };
  }
});
function Rn(t) {
  return t.replace(/_(\w)/g, function(r, n) {
    return n.toUpperCase();
  });
}
function Ni(t) {
  let r = document.createElement("div");
  return r.textContent !== void 0 ? r.textContent = t : r.innerText = t, r.innerHTML;
}
function Ki(t) {
  let r = document.createElement("div");
  return r.innerHTML = t, r.innerText || r.textContent;
}
function hl(t) {
  return new Promise((r) => {
    let n = new FileReader();
    n.readAsDataURL(t), n.onloadend = () => {
      r(n.result);
    };
  });
}
function Ul(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function ft(t) {
  return J(t) === "String" && t.indexOf("image") > -1;
}
function yl(t) {
  const r = Ul(t);
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
function qt({
  group: t,
  condition: r,
  pathKey: n,
  childKey: e = "children",
  path: l = []
}) {
  if (t && ma(t)) {
    if (ha(r)) {
      if (it(t)) {
        let i = t, s = ce(l);
        if (r(i))
          return n && i[n] && s.push(i[n]), s;
        if (i[e] && !Me(i[e])) {
          n && i[n] && s.push(i[n]);
          let c = qt({
            group: i[e],
            condition: r,
            pathKey: n,
            childKey: e,
            path: s
          });
          if (!Me(c))
            return c;
        }
      } else if (Array.isArray(t))
        for (let i of t) {
          let s = ce(l);
          if (r(i))
            return n && i[n] ? s.push(i[n]) : s.push(String(t.indexOf(i))), s;
          if (i[e] && i[e].length > 0) {
            n && i[n] ? s.push(i[n]) : s.push(String(t.indexOf(i)));
            let c = qt({
              group: i[e],
              condition: r,
              pathKey: n,
              childKey: e,
              path: s
            });
            if (!Me(c))
              return c;
          }
        }
    } else if (Array.isArray(t))
      for (let i of t) {
        let s = ce(l);
        if (i === r)
          return s.push(String(t.indexOf(i))), s;
      }
  }
  return [];
}
function Fn(t, r = 12) {
  if (J(t) === "String" && t.length > 0) {
    let n = document.createElement("span");
    n.style.fontSize = r + "px", n.style.fontFamily = "inherit", n.innerHTML = t, n.style.opacity = "0", n.style.position = "fixed", n.style.top = "3000px", document.body.append(n);
    const e = n.clientWidth;
    return document.body.removeChild(n), e;
  }
  return 0;
}
function zi(t) {
  return t === "" ? null : t;
}
function Ui(t) {
  var r;
  t = t || window.Event, t != null && t.stopPropagation ? (r = t.stopPropagation) == null || r.call(t) : t && (t.cancelBubble = !0);
}
let pt = !1;
function Xt({
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
  const u = (...w) => Je.apply(this, w);
  let k = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", g = J(e) === "String";
  const _ = typeof e == "function";
  Qe.warning({
    width: r,
    footerHide: !0,
    render: () => Ae(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: k
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
                Ae("span", n || u("r.info.title")),
                Ae(
                  Mt,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      pt || (Qe.remove(), s && J(s) === "Function" && s());
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
                  textAlign: g ? "center" : "left"
                }
              },
              [
                Ae("i", {
                  class: g && !y ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Ae("div", { class: "msgBoxConO" }, _ ? [e(Ae)] : e || u("r.info.text"))
              ]
            ),
            Ae(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: f || "center"
                }
              },
              [
                Ae(
                  Mt,
                  {
                    class: "okBtN",
                    onClick(w) {
                      var T, L, C, F, P, I, h, B, x;
                      if (l && typeof l == "function") {
                        const te = l();
                        if (te && J(te) === "Promise") {
                          pt = !0;
                          const z = (w == null ? void 0 : w.currentTarget) || (w == null ? void 0 : w.target);
                          z && ((L = (T = z.classList) == null ? void 0 : T.add) == null || L.call(T, "ivu-btn-loading"), (F = (C = z.nextSibling) == null ? void 0 : C.setAttribute) == null || F.call(C, "disabled", "disabled"), (x = (B = ((h = (I = (P = z.parentElement) == null ? void 0 : P.parentElement) == null ? void 0 : I.querySelector) == null ? void 0 : h.call(I, ".titleN .closeN")).classList) == null ? void 0 : B.add) == null || x.call(B, "disabled")), Promise.resolve(te).then(() => {
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
                    Ae("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Ae("span", c || u("r.confirm"))
                  ]
                ),
                Ae(
                  Mt,
                  {
                    class: ["cancelBtN", !p && "hide"],
                    onClick() {
                      pt || (Qe.remove(), J(i) === "Function" && i && i());
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
function vl(t) {
  t ? vt.classList.add("show") : vt.classList.remove("show");
}
function El(t) {
  let r = nt;
  t ? nt++ : nt > 0 && nt--, r !== nt && (nt === 0 ? vl(!1) : r === 0 && vl(!0));
}
const Dn = window.location.origin;
let xt = null;
const gl = (...t) => Je.apply(xt, t);
let Ue = Kt.create({
  baseURL: Dn,
  withCredentials: !0
  // 允许携带cookie
});
function Nn() {
  console.info(
    "store为空，请在安装插件时传入store实例，vuex：app.use(plugRQw,{store})，Pinia：app.use(plugRQw,{useStore})"
  );
}
Ue.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function bl() {
  var t, r;
  if (Ue.store)
    if (typeof Ue.store == "function") {
      const n = Ue.store();
      n.logout && n.logout();
    } else
      (r = (t = Ue.store) == null ? void 0 : t.dispatch) == null || r.call(t, "logout");
  else
    Nn();
}
Ue.interceptors.response.use(
  (t) => {
    var r, n;
    return xt && (((r = t == null ? void 0 : t.data) == null ? void 0 : r.code) === 403 || ((n = t == null ? void 0 : t.data) == null ? void 0 : n.code) === 409) && Xt({
      content: gl("r.http." + t.data.code),
      onOk: bl
    }), t;
  },
  (t) => {
    var r, n;
    return xt && (((r = t == null ? void 0 : t.response) == null ? void 0 : r.status) === 403 || ((n = t == null ? void 0 : t.response) == null ? void 0 : n.status) === 409) && Xt({
      content: gl("r.http." + t.response.status),
      onOk: bl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function Ye(t, r, n, e) {
  e && e.spin && El(!1);
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
        Ue.get(r, { params: n }).then((f) => {
          let p = Ye(f, e, l, i);
          p ? c(p) : o(f);
        }).catch((f) => {
          Ye({}, e, l, i), o(f);
        });
        break;
      case "delete":
        let y = s ? "params" : "data";
        Ue.delete(r, { [y]: n }).then((f) => {
          let p = Ye(f, e, l, i);
          p ? c(p) : o(f);
        }).catch((f) => {
          Ye({}, e, l, i), o(f);
        });
        break;
      case "post":
        Ue.post(r, n, i).then((f) => {
          let p = Ye(f, e, l, i);
          p ? c(p) : o(f);
        }).catch((f) => {
          Ye({}, e, l, i), o(f);
        });
        break;
      case "put":
        Ue.put(r, n, i).then((f) => {
          let p = Ye(f, e, l, i);
          p ? c(p) : o(f);
        }).catch((f) => {
          Ye({}, e, l, i), o(f);
        });
        break;
    }
  });
}
function kt(t, r, n = {}, e, l, i, s) {
  return new Promise((c, o) => {
    var y;
    if (r) {
      i && i.spin && El(!0);
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
      else if (Array.isArray(n) ? p = [] : p = {}, n && !Me(n))
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
const We = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(t, r) {
    Ue.store = t, xt = r.config.globalProperties;
  },
  post(t, r, n, e, l) {
    return new Promise((i, s) => {
      kt("post", t, r, n, e, l).then((c) => {
        i(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  put(t, r, n, e, l) {
    return new Promise((i, s) => {
      kt("put", t, r, n, e, l).then((c) => {
        i(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  get(t, r, n, e, l) {
    return new Promise((i, s) => {
      kt("get", t, r, n, e, l).then((c) => {
        i(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  delete(t, r, n, e, l, i = !0) {
    return new Promise((s, c) => {
      kt("delete", t, r, n, e, l, i).then((o) => {
        s(o);
      }).catch((o) => {
        c(o);
      });
    });
  },
  all: Kt.all,
  spread: Kt.spread,
  config: Ue
}, zn = {
  key: 0,
  class: "pageTotal"
}, Un = {
  key: 1,
  class: "pageProSize"
}, Gl = /* @__PURE__ */ de({
  __name: "PagePro",
  props: {
    modelValue: { default: 1 },
    total: { default: 0 },
    pageSize: { default: 10 },
    size: { default: "default" },
    pageSizeOpts: { default: () => {
      var t;
      return ((t = Oe()) == null ? void 0 : t.pageSizes) || [10, 20, 50, 100];
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Oe()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Oe()) == null ? void 0 : t.pageShowSizer;
    } },
    transfer: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change", "on-page-size-change"],
  setup(t, { emit: r }) {
    var u;
    const n = r, e = U(), l = t, i = ((u = Oe == null ? void 0 : Oe()) == null ? void 0 : u.fontSizeBase) || 14, s = U(16), c = H({
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
      const v = Fn(String(l.total || 0), i) + s.value + 2;
      return v < 32 ? 32 : v;
    });
    Se(
      y,
      (v) => {
        Re(function() {
          p(v);
        });
      },
      { immediate: !0 }
    );
    function f() {
      var w, T, L;
      const v = (L = (T = (w = e.value) == null ? void 0 : w.$el) == null ? void 0 : T.querySelector) == null ? void 0 : L.call(T, "input");
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
    return Ee(() => {
      s.value = f();
    }), (v, k) => {
      const g = Q("Page"), _ = Q("Option"), w = Q("Select");
      return S(), N("div", {
        class: we(["pagePro", { pageProDefault: l.size === "default" }])
      }, [
        l.showTotal ? (S(), N("span", zn, W(m(A)("r.total") + " ") + W(l.total) + W(" " + m(A)("r.items")), 1)) : ue("", !0),
        X(g, {
          ref_key: "pageRef",
          ref: e,
          modelValue: m(c),
          "onUpdate:modelValue": k[0] || (k[0] = (T) => Fe(c) ? c.value = T : null),
          "page-size": m(o),
          total: l.total,
          size: l.size,
          "page-size-opts": l.pageSizeOpts,
          disabled: l.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        l.showSizer ? (S(), N("div", Un, [
          X(w, {
            modelValue: m(o),
            "onUpdate:modelValue": k[1] || (k[1] = (T) => Fe(o) ? o.value = T : null),
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
                  ke(W(T) + " " + W(m(A)("r.page")), 1)
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
}, Gn = { class: "topBtn" }, Hn = { class: "tableContainer growFlexItem" }, Wn = { class: "fullHeight relativeBox" }, jn = { class: "pageContainer" }, Jt = /* @__PURE__ */ de({
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
      return (t = Oe()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Oe()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Oe()) == null ? void 0 : t.pageShowSizer;
    } },
    pageSize: { default: 10 },
    pageComponentSize: { default: "default" },
    noElevator: { type: Boolean, default: !1 }
  },
  emits: ["on-selection-change", "on-data-change"],
  setup(t, { expose: r, emit: n }) {
    var He;
    const e = n;
    ({ ...ga });
    const l = t, i = ((He = Oe()) == null ? void 0 : He.pageSizes) || [10, 20, 50, 100], s = U(l.data), c = U(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || l.pageSize
    ), o = U(1), y = U(0);
    let f = [], p, u, v = U(l.orderKey), k = U(l.orderDefault);
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
      return l.sortable === "custom" && (l.orderKeyFormat === "underline" ? E[k.value] = Pl(v.value) : l.orderKeyFormat === "camelcase" && (E[k.value] = Rn(v.value))), E;
    }), L = H(() => {
      let E = l.columns.filter((K) => K && K.type !== "selection");
      if (l.selection || l.radio) {
        let K;
        l.radio ? K = {
          title: " ",
          width: 65,
          render: (ye, ge) => Ae(ba, {
            modelValue: ge.row.btChecked
          })
        } : K = {
          type: "selection",
          width: 60
        }, l.selectionFixed && (K.fixed = l.selectionFixed), E.unshift(K);
      }
      return E.forEach((K) => {
        var ye;
        K && (l.sortable === "custom" ? K.key && K.sortable !== !0 && K.sortable !== !1 && (K.sortable = "custom") : K.sortable = !1, K.align || (K.align = ((ye = Oe()) == null ? void 0 : ye.btTablePageAlign) || "center"));
      }), E.forEach((K) => {
        K != null && K.key && K.render === void 0 && (K.tooltip ? K.render = $l(K.key, l.tableEmptyTdHandle) : K.render = (ye, ge) => {
          let _e = "";
          return K != null && K.key && (_e = ge.row[K.key]), l.tableEmptyTdHandle ? Ae("span", _e === "" ? "--" : _e ?? "--") : Ae("span", _e);
        });
      }), E;
    }), C = H({
      get() {
        return s.value.map((E, K) => Object.assign({}, E, {
          btKey: "bt-" + K,
          btChecked: !!E.btChecked
        }));
      },
      set(E) {
        s.value = E;
      }
    }), F = H(() => f.map((E) => E == null ? void 0 : E.id)), P = H(() => f.map((E) => E == null ? void 0 : E.btKey)), I = U(), h = U();
    Se(() => l.searchData, B, { deep: !0 }), Se(
      () => l.orderDefault,
      (E) => {
        k.value = E;
      }
    ), Se(
      () => l.orderKey,
      (E) => {
        v.value = E;
      }
    );
    function B() {
      o.value = 1, ae();
    }
    function x() {
      l.initData && ae();
    }
    function te(E) {
      s.value.unshift(ce(E)), Pe(() => {
        var K, ye;
        (ye = (K = I.value) == null ? void 0 : K.clickCurrentRow) == null || ye.call(K, 0);
      }, 100);
    }
    function z(E, K, ye) {
      let ge = null;
      if (typeof K == "number" ? ge = K : K && (ge = u), ge !== null) {
        let _e = s.value[ge];
        for (let G in E)
          E.hasOwnProperty(G) && (_e[G] = E[G]);
        ye && Pe(() => {
          var G, Ve;
          (Ve = (G = I.value) == null ? void 0 : G.clickCurrentRow) == null || Ve.call(G, ge);
        }, 10);
      }
    }
    function D(E) {
      s.value.splice(E, 1), Pe(() => {
        var K, ye;
        (ye = (K = I.value) == null ? void 0 : K.clickCurrentRow) == null || ye.call(K, 0);
      }, 100);
    }
    function Y(E, K) {
      var ye, ge;
      E.btChecked && l.radio || (l.selection || l.radio) && l.rowClickSelect && ((ge = (ye = I.value) == null ? void 0 : ye.toggleSelect) == null || ge.call(ye, K));
    }
    function b(E, K) {
      p = K.btKey, u = Number(K.btKey.split("-")[1]), l.radio && (s.value[u].btChecked = !0);
    }
    function M(E) {
      if (l.radio)
        for (let K of C.value)
          K != null && K.btKey && K.btKey !== p && (s.value[Number(K.btKey.split("-")[1])].btChecked = !1);
      f = E, e("on-selection-change", E);
    }
    function j() {
      return ce(f);
    }
    function $() {
      ae();
    }
    function Z(E) {
      c.value = E, localStorage.setItem("btPageSize", String(E)), o.value === 1 && ae();
    }
    function ee({ key: E, order: K }) {
      K === "normal" ? (v.value = l.orderKey, k.value = l.orderDefault) : (v.value = E, k.value = K), o.value = 1, Le();
    }
    function he(E) {
      var ye, ge, _e, G, Ve, tt, lt, ut;
      const K = E;
      if (typeof K == "number")
        fe(), u = K, p = (ge = (ye = C.value) == null ? void 0 : ye[K]) == null ? void 0 : ge.btKey, (G = (_e = I.value) == null ? void 0 : _e.clickCurrentRow) == null || G.call(_e, K);
      else if (Array.isArray(K)) {
        if (l.radio || !l.selection)
          return;
        fe();
        for (let je of K)
          (tt = (Ve = I.value) == null ? void 0 : Ve.clickCurrentRow) == null || tt.call(Ve, je);
      } else if (typeof K == "function")
        for (let je = 0; je < C.value.length; je++) {
          const gt = C.value[je];
          K(gt) && ((ut = (lt = I.value) == null ? void 0 : lt.clickCurrentRow) == null || ut.call(lt, je));
        }
    }
    function fe() {
      var E, K;
      if (l.radio) {
        if (P.value.length > 0 && C.value.length > 0) {
          let ye = P.value[0].split("-")[1];
          C.value[ye].btChecked = !1;
        }
      } else
        (K = (E = I.value) == null ? void 0 : E.selectAll) == null || K.call(E, !1);
      f.length > 0 && (f = [], e("on-selection-change", [])), p = null, u = null;
    }
    function me() {
      s.value = [], fe(), o.value = 1, y.value = 0;
    }
    function Le(E, K, ye) {
      return new Promise((ge) => {
        E && (k.value = E), K && (v.value = K), l.url ? We[l.method](l.url, T.value, "", [], { spin: l.getDataLoading }).then((_e) => {
          var Ve, tt;
          let G;
          ye || fe(), typeof l.dataHandler == "function" ? G = l.dataHandler(_e) : G = _e, G.data ? (G.data.records || G.data.records === null ? s.value = G.data.records || [] : G.data.page ? (G.data.page.records || G.data.page.records === null) && (s.value = G.data.page.records || []) : G.data.data ? (G.data.data.records || G.data.data.records === null) && (s.value = G.data.data.records || []) : s.value = G.data, y.value = ((Ve = G.data.page) == null ? void 0 : Ve.total) || ((tt = G.data.data) == null ? void 0 : tt.total) || G.data.total || G.total || 0, y.value === 0 && o.value > 1 && s.value && s.value.length === 0 ? o.value = 1 : o.value > 1 && y.value <= (o.value - 1) * c.value && (o.value--, Re(function() {
            Le(E, K);
          })), e("on-data-change", G), ge(G)) : (console.warn("请求返回数据有误，无法使用"), me(), e("on-data-change", G));
        }).catch((_e) => {
          fe(), me(), e("on-data-change", _e);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function ae(E, K, ye) {
      l.radio && (E || l.rowClickNum !== -1) ? Le(K, ye, E).then(() => {
        s.value.length > 0 && Pe(() => {
          var ge, _e, G, Ve;
          E ? (_e = (ge = I.value) == null ? void 0 : ge.clickCurrentRow) == null || _e.call(ge, u || 0) : (Ve = (G = I.value) == null ? void 0 : G.clickCurrentRow) == null || Ve.call(G, l.rowClickNum);
        }, 10);
      }) : Le();
    }
    function Be() {
      g.value < 50 ? Pe(Be, 100) : Pe($e, 10);
    }
    function $e() {
      var E;
      g.value = ((E = h.value) == null ? void 0 : E.clientHeight) || 0;
    }
    function Ge() {
      var E, K;
      $e(), (K = (E = I.value) == null ? void 0 : E.handleResize) == null || K.call(E);
    }
    const et = Ot(Ge, 300);
    return Ee(() => {
      x(), w.value && (Be(), window.addEventListener("resize", et));
    }), el(() => {
      w.value && window.removeEventListener("resize", et);
    }), r({
      dataS: C,
      selectedIds: F,
      addRow: te,
      setRowData: z,
      deleteRow: D,
      getSelected: j,
      selectRow: he,
      clearSelect: fe,
      clearTableData: me,
      getTableData: Le,
      getDataAndClickRow: ae
    }), (E, K) => {
      const ye = Q("Table"), ge = Q("Page");
      return S(), N("div", En, [
        pe(R("div", Gn, [
          De(E.$slots, "tableSetting"),
          De(E.$slots, "topMsg"),
          De(E.$slots, "topBtnGroup")
        ], 512), [
          [ve, l.showTopRow]
        ]),
        R("div", Hn, [
          R("div", Wn, [
            R("div", {
              ref_key: "tableContainerLOI",
              ref: h,
              class: "fullFlowContent"
            }, [
              X(ye, rt({
                ref_key: "tableRef",
                ref: I
              }, E.$attrs, {
                height: m(w) && m(g) || null,
                class: { noBorderTable: l.noBorderTable, fullHeightTable: !m(w), lightHeadO: l.lightHead },
                columns: m(L),
                data: m(C),
                "highlight-row": l.radio || l.highlightRow,
                onOnSelect: b,
                onOnSelectionChange: M,
                onOnSortChange: ee,
                onOnRowClick: Y
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        pe(R("div", jn, [
          l.usePagePro ? (S(), le(Gl, {
            key: 0,
            modelValue: m(o),
            "onUpdate:modelValue": K[0] || (K[0] = (_e) => Fe(o) ? o.value = _e : null),
            total: m(y),
            showTotal: l.showTotal,
            pageSize: m(c),
            showSizer: l.showSizer,
            pageSizeOpts: m(i),
            size: l.pageComponentSize,
            onOnChange: $,
            onOnPageSizeChange: Z
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (S(), le(ge, {
            key: 1,
            modelValue: m(o),
            "onUpdate:modelValue": K[1] || (K[1] = (_e) => Fe(o) ? o.value = _e : null),
            total: m(y),
            pageSize: m(c),
            pageSizeOpts: m(i),
            showSizer: l.showSizer,
            showTotal: l.showTotal,
            size: l.pageComponentSize,
            showElevator: !l.noElevator,
            onOnChange: $,
            onOnPageSizeChange: Z
          }, null, 8, ["modelValue", "total", "pageSize", "pageSizeOpts", "showSizer", "showTotal", "size", "showElevator"]))
        ], 512), [
          [ve, !l.noPage]
        ])
      ], 512);
    };
  }
}), Hl = /* @__PURE__ */ de({
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
    const n = r, e = t, l = H({
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
    }), i = H({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(f) {
        n("update:modelValue", {
          key: l.value,
          val: f
        });
      }
    }), s = H(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), c = H(() => ({
      width: typeof e.itemWidth == "number" ? e.itemWidth + "px" : e.itemWidth
    }));
    function o(f) {
      f != null && f.target && f.target.value !== void 0 && y({
        key: l.value,
        val: f.target.value
      });
    }
    const y = Ot((f) => {
      n("on-change", f);
    }, 500);
    return (f, p) => {
      const u = Q("Option"), v = Q("Select"), k = Q("Input");
      return S(), N("div", null, [
        X(v, {
          modelValue: m(l),
          "onUpdate:modelValue": p[0] || (p[0] = (g) => Fe(l) ? l.value = g : null),
          style: se(m(s)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: ne(() => [
            (S(!0), N(be, null, Te(e.selectOption, (g, _) => (S(), le(u, {
              value: g == null ? void 0 : g.val,
              label: g == null ? void 0 : g.label,
              key: "selectInputOp" + (g == null ? void 0 : g.value) + _,
              style: se({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        X(k, {
          modelValue: m(i),
          "onUpdate:modelValue": p[1] || (p[1] = (g) => Fe(i) ? i.value = g : null),
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
let Yt = { securityJsCode: "", key: "" };
function qn({ securityJsCode: t, key: r }) {
  Yt.securityJsCode = t, Yt.key = r;
}
function Xn(t) {
  return Yt[t];
}
const Wl = /* @__PURE__ */ de({
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
    const n = r, e = t, l = H({
      get() {
        let C;
        return e.modelValue ? e.modelValue.name ? C = ce(e.modelValue) : C = {
          ...e.modelValue,
          name: null
        } : C = {
          name: null
        }, C;
      },
      set(C) {
        n("update:modelValue", ce(C));
      }
    }), i = H(() => wt(e.width) ? e.width + "px" : e.width), s = H(() => wt(e.height) ? e.height + "px" : e.height ? e.height : wt(e.width) ? e.width * 0.66 + "px" : "200px"), c = H(() => ({
      width: i.value,
      position: "relative"
    })), o = H(() => ({
      width: i.value,
      height: s.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    Se(
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
    const y = "mapId" + Math.floor(Math.random() * 1e9), f = U(null), p = U(null);
    let u;
    function v() {
      p.value && p.value.clientHeight < 10 || !p.value ? Pe(v, 300) : Pe(w, 100);
    }
    let k, g, _;
    function w() {
      fl.load({
        key: Xn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((C) => {
        k = C, g = new k.Map(y).on("complete", () => {
          var P, I, h, B;
          _ = new k.Geocoder(), (P = e.modelValue) != null && P.lng && ((I = e.modelValue) != null && I.lat) && T({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const F = (B = (h = f.value) == null ? void 0 : h.$el) == null ? void 0 : B.children;
          F && F.length > 1 && new k.AutoComplete({
            input: F[1]
          }).on("select", (x) => {
            var te, z, D;
            (te = x == null ? void 0 : x.poi) != null && te.name && ((z = x.poi.location) != null && z.lng && ((D = x.poi.location) != null && D.lat) ? (T({
              name: x.poi.name,
              lng: x.poi.location.lng,
              lat: x.poi.location.lat
            }), l.value = {
              name: x.poi.name,
              lng: x.poi.location.lng,
              lat: x.poi.location.lat
            }) : g == null || g.setCity(x.poi.name, () => {
              let Y = g.getCenter();
              T({
                name: x.poi.name,
                lng: Y.lng,
                lat: Y.lat
              }), l.value = {
                name: x.poi.name,
                lng: Y.lng,
                lat: Y.lat
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
    function T({ lng: C, lat: F, name: P }) {
      g == null || g.clearMap();
      let I = new k.LngLat(C, F), h = new k.Marker({
        map: g,
        position: I,
        draggable: !0
      });
      g == null || g.add(h), L(C, F), h.on("dragend", () => {
        let B = h.getPosition();
        l.value = {
          name: P || null,
          lng: B.lng,
          lat: B.lat
        }, L(C, F);
      }), h.on("click", (B) => {
        var x, te;
        u && u.open(g, (te = (x = B == null ? void 0 : B.target) == null ? void 0 : x.getPosition) == null ? void 0 : te.call(x));
      }), g == null || g.setFitView();
    }
    function L(C, F) {
      _ == null || _.getAddress([C, F], (P, I) => {
        P === "complete" && I.info === "OK" && I.regeocode && I.regeocode.formattedAddress ? u = new k.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + I.regeocode.formattedAddress + "</div>",
          offset: new k.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (u = null, console.warn("地图获取位置信息失败", I));
      });
    }
    return Ee(v), xl(() => {
      var C;
      g && (g.destroy(), (C = fl) == null || C.reset(), g = null, _ = null, u = null);
    }), (C, F) => (S(), N("div", {
      style: se(m(c)),
      class: "containerIKJ"
    }, [
      X(m(ka), {
        ref_key: "mapInputRef",
        ref: f,
        modelValue: m(l).name,
        "onUpdate:modelValue": F[0] || (F[0] = (P) => m(l).name = P),
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
var Tl;
const jl = /* @__PURE__ */ de({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (Tl = window == null ? void 0 : window.g) != null && Tl.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const n = r, e = t, l = U([]), i = H({
      get() {
        let f = e.modelValue;
        return Array.isArray(f) ? ce(f) : wt(f) ? qt({
          group: l.value,
          condition: (p) => (p == null ? void 0 : p.value) === f,
          pathKey: "value"
        }) : Ol(f) ? f.split(e.separator) : [];
      },
      set(f) {
        if (e.onlyLastVal)
          Me(f) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", Vt(f));
        else {
          if (yt(e.modelValue, f))
            return;
          n("update:modelValue", ce(f));
        }
      }
    });
    function s() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      We.get(e.url).then((f) => {
        var u;
        let p = null;
        (u = f == null ? void 0 : f.data) != null && u.records ? p = f.data.records : f != null && f.data ? p = f.data : f && (p = f), p ? (typeof e.optionFilter == "function" && J(e.optionFilter) === "Function" && (p = e.optionFilter(p)), l.value = c(p)) : console.warn("级联数据错误，不能使用");
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
        u != null && u.children && !Me(u.children) && (v.children = c(u.children)), p.push(v);
      }
      return p;
    }
    function o(f) {
      return e.onlyLastLabel ? Vt(f) : f.join(e.separator);
    }
    function y(f, p) {
      let u = "";
      Me(p) || (u = p.map((v) => v == null ? void 0 : v.label).join(e.separator)), n("on-label-change", u);
    }
    return Ee(s), (f, p) => {
      const u = Q("Cascader");
      return S(), le(u, {
        data: m(l),
        modelValue: m(i),
        "onUpdate:modelValue": p[0] || (p[0] = (v) => Fe(i) ? i.value = v : null),
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
}), ql = /* @__PURE__ */ de({
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
    const n = r, e = t, l = H({
      get() {
        if (e.modelValue && (typeof e.modelValue == "string" || typeof e.modelValue == "number")) {
          let i = String(e.modelValue).trim();
          if (/^\d+$/.test(i)) {
            let c = i.substring(0, 2) + "0000000000", o = i.substring(0, 4) + "00000000";
            return [c, o, i];
          }
          return i.indexOf(e.separator) !== -1 ? i.split(e.separator) : [i];
        } else return Array.isArray(e.modelValue) ? ce(e.modelValue) : [];
      },
      set(i) {
        if (Me(i))
          n("update:modelValue", null), n("on-name-change", null);
        else {
          let s = Vt(i), c = "", o = "";
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
    return (i, s) => (S(), le(m(Va), rt(i.$attrs, {
      class: "alCascaderMC",
      modelValue: m(l),
      "onUpdate:modelValue": s[0] || (s[0] = (c) => Fe(l) ? l.value = c : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || m(A)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let Xe = 0;
function Xl(t, r, n, e) {
  var l, i, s;
  e && (e.innerHTML = ((l = t[r]) == null ? void 0 : l.name) ?? "", (i = t[r]) != null && i.name ? e.classList.contains("hide") && e.classList.remove("hide") : e.classList.contains("hide") || e.classList.add("hide")), n && (n.src = ((s = t[r]) == null ? void 0 : s.src) ?? t[r], Xe = r);
}
function kl(t, r, n, e) {
  if (t) {
    let l;
    Xe - 1 < 0 ? l = r.length - 1 : l = Xe - 1, Xl(r, l, n, e);
  }
}
function wl(t, r, n, e) {
  if (t) {
    let l;
    Xe + 1 > r.length - 1 ? l = 0 : l = Xe + 1, Xl(r, l, n, e);
  }
}
function mt(t, r = 0) {
  var w, T, L, C, F, P, I;
  const n = (...h) => Je.apply(this, h), e = n("r.closePreview"), l = n("r.fullImg"), i = n("r.last"), s = n("r.next");
  let c, o, y;
  Xe = r;
  const f = Array.isArray(t);
  f ? (o = ((w = t[Xe]) == null ? void 0 : w.src) ?? t[Xe], y = (T = t[Xe]) == null ? void 0 : T.name) : o = t, f && t.length > 1 ? c = `${i} ： ←, ↑, A, W | ${s} ： →, ↓, D, S | ${e} ： Esc` : c = `${e} ： Esc`;
  let p = Dt(document.getElementsByTagName("body")), u = document.createElement("div");
  u.setAttribute("class", "fullScreenImgByDom"), u.innerHTML = `<div class='previewInner'><div class='pageFBt left${f && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${i}' ></i></div><img src='${o}' alt='${l}' ><div class='pageFBt right${f && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${s}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${c}</p><p class='pName ${y ? "" : "hide"}'>${y}</p>`;
  function v() {
    let h = Dt(document.getElementsByTagName("body"));
    h && h.removeChild(u), document.removeEventListener("keyup", _);
  }
  (C = (L = u.querySelector(".ivu-icon-md-close")) == null ? void 0 : L.addEventListener) == null || C.call(L, "click", v);
  const k = u.querySelector("img"), g = u.querySelector(".pName");
  (F = u.querySelector(".pageFBt.left")) == null || F.addEventListener("click", function() {
    kl(f, t, k, g);
  }), (P = u.querySelector(".pageFBt.right")) == null || P.addEventListener("click", function() {
    wl(f, t, k, g);
  });
  function _(h) {
    h.keyCode === 37 || h.keyCode === 38 || h.keyCode === 87 || h.keyCode === 65 ? kl(f, t, k, g) : h.keyCode === 39 || h.keyCode === 40 || h.keyCode === 83 || h.keyCode === 68 ? wl(f, t, k, g) : h.keyCode === 27 && v();
  }
  document.addEventListener("keyup", _), (I = p == null ? void 0 : p.appendChild) == null || I.call(p, u), u.focus({ preventScroll: !0 });
}
const Jn = {
  key: 0,
  class: "previewBoxM"
}, Yn = { class: "imgLoading" }, Qn = ["src", "alt"], Zn = { class: "deleteModal" }, eo = {
  key: 1,
  class: "previewBoxM"
}, to = {
  key: 0,
  class: "previewImg"
}, lo = ["src", "alt"], ao = { class: "deleteModal" }, no = {
  key: 2,
  class: "customFileListM"
}, oo = {
  key: 0,
  class: "customFileListItem"
}, io = ["onClick", "title"], so = { class: "btBoxJ" }, ro = {
  key: 3,
  class: "customFileListM"
}, uo = {
  key: 0,
  class: "customFileListItem"
}, co = { class: "listLoading" }, fo = ["onClick", "title"], po = { class: "btBoxJ" };
var Bl;
const Jl = /* @__PURE__ */ de({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (Bl = window == null ? void 0 : window.g) != null && Bl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const n = r, e = t, l = ht([]), i = ht([]), s = ht([]);
    let c = {};
    const o = H(() => !e.manualUpload && e.showImg && u.value ? "img" : e.manualUpload && e.showImg && u.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "list" : ""), y = H(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), f = H({
      //文件集合
      get() {
        return e.manualUpload ? p.value : p.value.map((b) => ({ id: b }));
      },
      set(b) {
        e.manualUpload ? p.value = b || [] : p.value = (b == null ? void 0 : b.map((M) => M == null ? void 0 : M.id)) || [];
      }
    }), p = H({
      //文件ID集合
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((b) => b !== "--") : J(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(b) {
        if (e.length === 1) {
          let M = Dt(b);
          n("update:modelValue", M ?? null), n("on-change", M ?? null);
        } else
          n("update:modelValue", ce(b)), n("on-change", ce(b));
      }
    }), u = H(() => {
      let b;
      if (e.manualUpload ? b = f.value : b = i.value, !b)
        return !1;
      for (let M of b) {
        let j;
        if (e.manualUpload ? j = M == null ? void 0 : M.type : j = M == null ? void 0 : M.mimeType, !j || j && !(ft(j) || j === "loading"))
          return !1;
      }
      return !0;
    }), v = H(() => i.value.filter((b) => ft(b == null ? void 0 : b.mimeType))), k = H(() => v.value.map((b) => ({
      src: e.url + "/" + (b == null ? void 0 : b.id) + "/download?preview=true",
      name: b == null ? void 0 : b.name
    }))), g = H(() => f.value.filter((b) => ft(b == null ? void 0 : b.type)));
    Se(g, async (b) => {
      s.value = await w(b);
    }), Se(
      () => f.value,
      async (b) => {
        if (o.value === "localImg")
          b != null && b.length ? l.value = await w(b) : l.value = [];
        else if (b != null && b.length && o.value !== "localList") {
          let M = ce(b);
          const j = ce(i.value);
          for (let $ of M)
            if (($ == null ? void 0 : $.name) === void 0)
              if ($.id) {
                const Z = Nt(j, (ee) => (ee == null ? void 0 : ee.id) === $.id);
                Z ? ($.name = Z.name, $.mimeType = Z.mimeType) : c.hasOwnProperty($.id) ? ($.name = c[$.id].name, $.mimeType = c[$.id].mimeType) : ($.mimeType = "loading", We.get(e.url + "/" + $.id).then((ee) => {
                  var he, fe, me, Le, ae, Be;
                  $.name = ((me = (fe = (he = ee == null ? void 0 : ee.data) == null ? void 0 : he.returnValue) == null ? void 0 : fe[0]) == null ? void 0 : me.name) || A("r.file") + dl(b, $), $.mimeType = ((Be = (ae = (Le = ee == null ? void 0 : ee.data) == null ? void 0 : Le.returnValue) == null ? void 0 : ae[0]) == null ? void 0 : Be.mimeType) || "unknown", ca(i);
                }).catch(() => {
                  $.name = A("r.file") + dl(M, $);
                }));
              } else
                $.name = A("r.unknown");
          i.value = M;
        } else
          i.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function _(b) {
      return (b == null ? void 0 : b.name) || (b == null ? void 0 : b.split) && Vt(b.split("/")) || b;
    }
    async function w(b) {
      let M = [];
      for (let j of b) {
        let $ = await hl(j);
        M.push($);
      }
      return M;
    }
    function T(b) {
      if (!e.disabled) {
        let M = f.value;
        M == null || M.splice(b, 1), f.value = M;
      }
    }
    function L(b) {
      b != null && b.id && window.open(e.url + "/" + b.id + "/download");
    }
    function C(b) {
      return e.manualUpload ? (b == null ? void 0 : b.type) && ft(b.type) : (b == null ? void 0 : b.id) && b.mimeType && ft(b.mimeType);
    }
    async function F(b) {
      if (e.manualUpload) {
        let M, j;
        if (typeof b == "number" ? (M = b, j = l.value) : b && (M = St(g.value, ($) => $.size === b.size && $.lastModified === b.lastModified), j = s.value), !j)
          return;
        mt(
          j.map(($, Z) => {
            var ee;
            return {
              src: $,
              name: (ee = g.value[Z]) == null ? void 0 : ee.name
            };
          }),
          M
        );
      } else if (b != null && b.id) {
        const M = St(v.value, (j) => j.id === b.id);
        mt(k.value, M);
      }
    }
    function P(b) {
      J(b) === "String" && b.indexOf("http") > -1 ? window.open(b) : J(b) === "File" && hl(b).then((M) => {
        $n(b.name, M);
      });
    }
    function I(b) {
      var M, j;
      if (e.manualUpload) {
        if (b) {
          let $ = Ul(b.name);
          if ((M = e.format) != null && M.length && e.format.indexOf($) < 0)
            return Ke(
              A("r.wrongFileType"),
              A("r.supportType") + (((j = e.format) == null ? void 0 : j.length) && String(e.format) || A("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && b.size > e.maxSize * 1024)
            return Ke(A("r.fileIsBig"), A("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let Z = f.value;
          Z == null || Z.push(b), f.value = Z;
        }
        return !1;
      } else
        return !0;
    }
    function h(b) {
      console.warn(b), Ke(A("r.uploadError"), "", "error");
    }
    function B(b, M, j) {
      var $, Z, ee, he, fe, me;
      if ((b == null ? void 0 : b.code) === 0) {
        let Le = f.value;
        M.id = (Z = ($ = b.data) == null ? void 0 : $[0]) == null ? void 0 : Z.id, M.name = (he = (ee = b.data) == null ? void 0 : ee[0]) == null ? void 0 : he.name, M.mimeType = (me = (fe = b.data) == null ? void 0 : fe[0]) == null ? void 0 : me.mimeType, c[M.id] = { name: M.name, mimeType: M.mimeType }, Le == null || Le.push(M), f.value = Le;
      } else
        Ke(A("r.uploadFail"), (b == null ? void 0 : b.message) || "", "error");
    }
    function x() {
      Ke(A("r.fileIsBig"), A("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function te() {
      var b;
      Ke(
        A("r.wrongFileType"),
        A("r.supportType") + (((b = e.format) == null ? void 0 : b.length) && String(e.format) || A("r.none")),
        "warning"
      );
    }
    function z(b) {
      let M = b == null ? void 0 : b.id, j = b == null ? void 0 : b.mimeType;
      M && (J(j) === "String" && j.indexOf("image") > -1 ? mt(e.url + "/" + M + "/download?preview=true") : window.open(e.url + "/" + M + "/download?preview=true"));
    }
    function D(b) {
      var j, $, Z;
      let M = (Z = ($ = (j = b == null ? void 0 : b.response) == null ? void 0 : j.data) == null ? void 0 : $[0]) == null ? void 0 : Z.id;
      Y(null, M);
    }
    function Y(b, M) {
      if (!(!M && M !== 0) && !e.disabled && p.value.indexOf(M) !== -1) {
        const j = ce(p.value);
        let $ = f.value;
        $ == null || $.splice(j.indexOf(M), 1), f.value = $;
      }
    }
    return (b, M) => {
      var ee, he, fe, me, Le;
      const j = Q("Button"), $ = Q("Upload"), Z = Q("Icon");
      return S(), N("div", null, [
        X($, {
          name: "files",
          action: m(y),
          "before-upload": I,
          "on-error": h,
          "on-success": B,
          "on-exceeded-size": x,
          "on-preview": z,
          "on-remove": D,
          "on-format-error": te,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && ((ee = m(f)) == null ? void 0 : ee.length) >= e.length || !!e.disabled
        }, {
          default: ne(() => {
            var ae;
            return [
              X(j, {
                icon: "md-cloud-upload",
                class: we({
                  disabledR: e.length > 0 && ((ae = m(f)) == null ? void 0 : ae.length) >= e.length || !!e.disabled
                })
              }, {
                default: ne(() => [
                  ke(W(m(A)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        m(o) === "img" && ((he = m(i)) == null ? void 0 : he.length) > 0 ? (S(), N("div", Jn, [
          (S(!0), N(be, null, Te(m(i), (ae, Be) => (S(), N(be, {
            key: ae == null ? void 0 : ae.id
          }, [
            !e.manualUpload && (ae == null ? void 0 : ae.id) !== null ? (S(), N("div", {
              key: 0,
              class: we(["previewImg", { previewLoading: ae.mimeType === "loading" }])
            }, [
              pe(R("div", Yn, M[0] || (M[0] = [
                R("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ve, ae.mimeType === "loading"]
              ]),
              pe(R("img", {
                src: b.url + "/" + ae.id + "/download?preview=true",
                alt: ae.name
              }, null, 8, Qn), [
                [ve, ae.mimeType !== "loading"]
              ]),
              pe(R("div", Zn, [
                X(Z, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: m(A)("r.fView"),
                  onClick: ($e) => m(mt)(m(k), Be)
                }, null, 8, ["title", "onClick"]),
                X(Z, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: ($e) => Y($e, ae.id),
                  title: m(A)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ve, ae.mimeType !== "loading"]
              ])
            ], 2)) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(o) === "localImg" && ((fe = m(l)) == null ? void 0 : fe.length) > 0 ? (S(), N("div", eo, [
          (S(!0), N(be, null, Te(m(l), (ae, Be) => (S(), N(be, {
            key: "manualImg" + Be
          }, [
            e.manualUpload && ae !== null ? (S(), N("div", to, [
              R("img", {
                src: ae,
                alt: "manualImg" + Be
              }, null, 8, lo),
              R("div", ao, [
                X(Z, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: ($e) => F(Be),
                  title: m(A)("r.fView")
                }, null, 8, ["onClick", "title"]),
                X(Z, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: ($e) => T(Be),
                  title: m(A)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(o) === "localList" && ((me = m(f)) == null ? void 0 : me.length) > 0 ? (S(), N("div", no, [
          (S(!0), N(be, null, Te(m(f), (ae, Be) => (S(), N(be, {
            key: "manualItem" + Be
          }, [
            e.manualUpload && ae !== null ? (S(), N("p", oo, [
              ae.name ? (S(), le(Z, {
                key: 0,
                class: "fileTypeIco",
                type: m(yl)(ae.name),
                size: "20"
              }, null, 8, ["type"])) : ue("", !0),
              R("span", {
                class: we(["upNameT", { previewName: C(ae) }]),
                onClick: ($e) => P(ae),
                title: m(A)("r.download")
              }, W(_(ae)), 11, io),
              R("span", so, [
                C(ae) ? (S(), le(Z, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: ($e) => F(ae),
                  title: m(A)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                X(Z, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: ($e) => T(Be),
                  title: m(A)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ])) : ue("", !0),
        m(o) === "list" && ((Le = m(i)) == null ? void 0 : Le.length) > 0 ? (S(), N("div", ro, [
          (S(!0), N(be, null, Te(m(i), (ae, Be) => (S(), N(be, {
            key: "defaultItem" + Be
          }, [
            !e.manualUpload && ae ? (S(), N("div", uo, [
              pe(R("div", co, M[1] || (M[1] = [
                R("div", {
                  "data-loader": "circle-side",
                  class: "loader-div"
                }, null, -1)
              ]), 512), [
                [ve, ae.mimeType === "loading"]
              ]),
              pe(X(Z, {
                type: m(yl)(ae.name),
                class: "fileTypeIco",
                size: "20"
              }, null, 8, ["type"]), [
                [ve, ae.mimeType !== "loading"]
              ]),
              pe(R("span", {
                class: "upNameT",
                onClick: ($e) => L(ae),
                title: m(A)("r.download")
              }, W(ae.name || m(A)("r.file") + (Be + 1)), 9, fo), [
                [ve, ae.mimeType !== "loading"]
              ]),
              pe(R("span", po, [
                C(ae) ? (S(), le(Z, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "22",
                  class: "listBtH",
                  onClick: ($e) => F(ae),
                  title: m(A)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                X(Z, {
                  type: "md-close",
                  size: "22",
                  class: "listBtH",
                  onClick: ($e) => T(Be),
                  title: m(A)("r.delete")
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
}), Yl = /* @__PURE__ */ de({
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
    const n = r, e = t, l = U(!1), i = U(!1), s = U(!1), c = H({
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
    ), f = U();
    Ee(() => {
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
      const T = Q("DatePicker"), L = Q("Icon"), C = Q("Input");
      return S(), N("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: f
      }, [
        X(T, {
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
        X(T, {
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
            R("div", { onClick: p }, [
              X(C, {
                class: "aRoot",
                modelValue: m(y),
                "onUpdate:modelValue": w[0] || (w[0] = (F) => Fe(y) ? y.value = F : null),
                readonly: "",
                placeholder: e.placeholder || m(A)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: ne(() => [
                  X(L, {
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
}), Ql = /* @__PURE__ */ de({
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
    const n = r, e = t, l = U(), i = "date-c-r-" + Math.floor(Math.random() * 1e7 + 1e7), s = U({}), c = H({
      get() {
        return e.modelValue;
      },
      set(f) {
        n("update:modelValue", f);
      }
    }), o = H(() => {
      if (J(e.options) === "Object") {
        const { disabledDate: f, ...p } = e.options;
        return p;
      }
      return {};
    });
    function y(f) {
      var u, v;
      const p = f.target;
      ((v = (u = p.classList) == null ? void 0 : u.contains) != null && v.call(u, "ivu-date-picker-cells-cell") || p.tagName === "EM") && Pe(() => {
        var g, _;
        const k = (_ = (g = l == null ? void 0 : l.value) == null ? void 0 : g.$refs.pickerPanel) == null ? void 0 : _.rangeState;
        if (k) {
          const w = k.from, T = k.selecting;
          s.value = {
            ...o.value,
            disabledDate: (L) => {
              var C;
              return typeof ((C = e.options) == null ? void 0 : C.disabledDate) == "function" ? e.options.disabledDate(L, w, T) : !1;
            }
          };
        }
      }, 1);
    }
    return Se(
      () => e.options,
      (f) => {
        s.value = f;
      },
      { immediate: !0 }
    ), Ee(() => {
      var p;
      const f = document.getElementsByClassName(i)[0];
      (p = f == null ? void 0 : f.addEventListener) == null || p.call(f, "click", y, !0);
    }), (f, p) => {
      const u = Q("DatePicker");
      return S(), le(u, {
        ref_key: "dateC",
        ref: l,
        modelValue: m(c),
        "onUpdate:modelValue": p[0] || (p[0] = (v) => Fe(c) ? c.value = v : null),
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
}), mo = { class: "editor-pro-root" }, Zl = /* @__PURE__ */ de({
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
    const n = r, e = t, l = ht(), i = H({
      get() {
        return e.modelValue;
      },
      set(f) {
        n("update:modelValue", f), n("on-change", f);
      }
    }), s = H(
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
    ), c = H(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(f, p) {
                let u = new FormData();
                u.append("files", f);
                const v = f.name, k = e.imgUploadUrl ?? "/node-serve/file";
                We.post(k, u, null, [], {
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
                  Ke(A("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(f, p) {
                let u = new FormData();
                u.append("files", f);
                const v = e.videoUploadUrl ?? "/node-serve/file";
                We.post(v, u, null, [], {
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
                  Ke(A("r.uploadFail"), "", "error");
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
    function y(f) {
      l.value = f;
    }
    return Se(
      () => e.disabled,
      (f) => {
        f ? l.value.disable() : l.value.enable();
      }
    ), el(() => {
      l.value && l.value.destroy();
    }), (f, p) => (S(), N("div", mo, [
      pe(X(m(Sa), {
        class: "editor-pro-toolbar",
        editor: m(l),
        defaultConfig: m(s),
        mode: f.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ve, !f.disabled]
      ]),
      X(m(Ca), {
        class: "editor-pro-editor",
        modelValue: m(i),
        "onUpdate:modelValue": p[0] || (p[0] = (u) => Fe(i) ? i.value = u : null),
        defaultConfig: m(c),
        mode: f.mode,
        onOnCreated: y,
        style: se(m(o))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), ho = {
  key: 19,
  class: "formInfoTxtXN"
}, yo = {
  key: 20,
  class: "formTitleTxtXN"
}, vo = {
  key: 21,
  style: { display: "inline-block", width: "4px" }
}, _l = /* @__PURE__ */ de({
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
    const n = r, e = t, l = H(() => {
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
      const v = Q("InputNumber"), k = Q("Input"), g = Q("Option"), _ = Q("Select"), w = Q("Radio"), T = Q("Icon"), L = Q("RadioGroup"), C = Q("Checkbox"), F = Q("CheckboxGroup"), P = Q("TimePicker"), I = Q("FormItem");
      return e.item ? (S(), le(I, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: we(["relativeBox", i(e.item)])
      }, {
        default: ne(() => [
          e.item.type === "txt" ? (S(), N("div", {
            key: 0,
            style: se([e.itemStyle, { display: "inline-block" }]),
            class: we({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, W(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (S(), le(v, {
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
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (S(), le(k, {
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
          }, st({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: ne(() => [
                De(p.$slots, e.item.slotName, {
                  valGroup: e.valGroup
                })
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: ne(() => [
                R("span", null, W(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: ne(() => [
                R("span", null, W(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (S(), le(_, {
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
            default: ne(() => [
              (S(!0), N(be, null, Te(e.item.options, (h, B) => (S(), le(g, {
                value: h.val,
                label: h.label || h.val,
                key: "option-" + e.item.key + B,
                disabled: !!h.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (S(), le(Hl, {
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
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (S(), le(ql, {
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
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (S(), le(jl, {
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
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (S(), le(w, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": u[11] || (u[11] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: u[12] || (u[12] = (h) => s(h, e.item))
          }, {
            default: ne(() => [
              ke(W(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (S(), le(L, {
            key: 8,
            style: se(p.itemStyle),
            onOnChange: u[13] || (u[13] = (h) => c(h, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[14] || (u[14] = (h) => p.tempKeys[e.item.tempKey] = h)
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
                  }, null, 8, ["type"])) : ue("", !0),
                  R("span", null, W(h.label || h.val), 1)
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
            onOnChange: u[16] || (u[16] = (h) => s(h, e.item))
          }, {
            default: ne(() => [
              ke(W(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (S(), le(F, {
            key: 10,
            style: se(p.itemStyle),
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[17] || (u[17] = (h) => p.tempKeys[e.item.tempKey] = h),
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
                  }, null, 8, ["type"])) : ue("", !0),
                  R("span", null, W(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (S(), le(k, {
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
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (S(), le(Jl, {
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
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (S(), le(Ql, {
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
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "time-picker-options", "clearable"])) : e.item.type === "time" ? (S(), le(P, {
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
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (S(), le(Yl, {
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
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (S(), le(Zl, {
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
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (S(), le(Wl, {
            key: 17,
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": u[31] || (u[31] = (h) => p.tempKeys[e.item.tempKey] = h),
            style: se(p.itemStyle),
            placeholder: e.item.placeholder || m(A)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: u[32] || (u[32] = (h) => s(h, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (S(), N("div", {
            key: 18,
            class: "inlineBlock",
            style: se(p.itemStyle)
          }, [
            De(p.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ue("", !0),
          e.item.info ? (S(), N("div", ho, W(e.item.info), 1)) : ue("", !0),
          e.item.title ? (S(), N("div", yo, W(e.item.title), 1)) : ue("", !0),
          e.inline ? ue("", !0) : (S(), N("span", vo))
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : ue("", !0);
    };
  }
}), go = { class: "inlineBlock" }, It = /* @__PURE__ */ de({
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
    var sl, rl;
    const e = n, l = t, i = U(null), s = U({}), c = U([]), o = U({});
    let y = [];
    const f = ((sl = window == null ? void 0 : window.g) == null ? void 0 : sl.mgrURL) ?? "";
    let p = U([]), u = [];
    const v = U(!1), k = U(Math.random() * 1e8 + 1e3), g = (rl = window == null ? void 0 : window.g) != null && rl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
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
      let d = ce(l.formRules);
      for (let a in d)
        if (d.hasOwnProperty(a))
          if (Array.isArray(d[a]))
            for (let O of d[a])
              O && O && !(O.message || O.validator) && (O.message = A("r.required"));
          else J(d[a]) === "Object" && (d[a].message || d[a].validator || (d[a].message = A("r.required")));
      return d;
    }), F = H(() => {
      let d = [];
      if (w.value)
        for (let a of c.value)
          h(a, d);
      else
        h(c.value, d);
      return d.concat(p.value, u);
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
      for (let O of d)
        if ((O == null ? void 0 : O.showing) === !0 && O.key && O.type !== "selectInput" && (a.push(O.key), O.key2 && a.push(O.key2), O.collectLabel)) {
          if (!Array.isArray(O.collectLabel) && O.collectLabel.key)
            a.push(O.collectLabel.key);
          else if (Array.isArray(O.collectLabel))
            for (let V of O.collectLabel)
              V.key && a.push(V.key);
        }
    }
    function B(d, a) {
      for (let O of d)
        (O == null ? void 0 : O.showing) === !0 && O.key && O.type !== "selectInput" && a.push(O.key);
    }
    function x() {
      return new Promise((d) => {
        D(), z().then(() => {
          e("on-reset"), d(!0);
        });
      });
    }
    function te() {
      return new Promise((d) => {
        for (let a of y)
          a();
        y = [], o.value = {}, Be(), fe(), z().then(() => {
          e("on-re-render"), d(!0);
        });
      });
    }
    function z() {
      return new Promise((d) => {
        k.value = Math.floor(Math.random() * 1e8 + 1e3), Re(function() {
          d(!0);
        });
      });
    }
    function D() {
      let d = M();
      for (let a in s.value)
        if (s.value.hasOwnProperty(a))
          if (Ie(d[a]))
            s.value[a] = d[a];
          else if (Array.isArray(s.value[a]))
            s.value[a] = [];
          else if (J(s.value[a]) === "Boolean")
            s.value[a] = !1;
          else {
            const O = _t(l.formData, (V) => (V == null ? void 0 : V.key) === a);
            O && (O.type === "editor" || O.type === "editorPro") ? s.value[a] = "" : s.value[a] = null;
          }
      Y(d);
    }
    function Y(d) {
      for (let a in o.value)
        o.value.hasOwnProperty(a) && (Ie(d[a]) ? o.value[a] = d[a] : Array.isArray(o.value[a]) ? o.value[a] = [] : J(o.value[a]) === "Object" && o.value[a].hasOwnProperty("key") && o.value[a].hasOwnProperty("val") ? o.value[a].val = null : o.value[a] = null);
    }
    function b(d) {
      let a = M();
      Ie(a[d]) ? o.value[d] = a[d] : Array.isArray(o.value[d]) ? o.value[d] = [] : o.value[d] = null;
    }
    function M() {
      let d = {};
      if (w.value)
        for (let a of c.value)
          j(a, d);
      else
        j(c.value, d);
      return d;
    }
    function j(d, a) {
      for (let O of d)
        O.tempKey && Ie(O.defaultVal) && he(O, a), O.key && Ie(O.defaultVal) && (a[O.key] = O.defaultVal), O.key2 && Ie(O.defaultVal2) && (a[O.key2] = O.defaultVal2);
    }
    function $(d) {
      if (d.show) {
        if (J(d.show) === "Object")
          return ee(d, Z(d.show));
        if (Array.isArray(d.show))
          if (d.showOr) {
            for (let a of d.show)
              if (Z(a) === !0)
                return ee(d, !0);
            return ee(d, !1);
          } else {
            for (let a of d.show)
              if (Z(a) === !1)
                return ee(d, !1);
            return ee(d, !0);
          }
        else if (typeof d.show == "function")
          return ee(d, d.show(s.value));
      } else d.showing || (d.showing = !0);
      return !0;
    }
    function Z(d) {
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
    function ee(d, a) {
      return !(d != null && d.showing) && a && (d != null && d.key) ? (d.showing = a, d.defaultVal !== void 0 && (d.tempKey ? (o.value[d.tempKey] === null || o.value[d.tempKey] === void 0 || (J(o.value[d.tempKey]) === "Object" || Array.isArray(o.value[d.tempKey])) && Me(o.value[d.tempKey])) && he(d, o.value) : (s.value[d.key] === null || s.value[d.key] === void 0) && (s.value[d.key] = d.defaultVal), d.key2 && d.deafultVal2 !== void 0 && (s.value[d.key2] === null || s.value[d.key2] === void 0) && d.type !== "inputMap" && (s.value[d.key2] = d.defaultVal2)), d.tempKey && Ge(o.value[d.tempKey], d)) : d.showing = a, a;
    }
    function he(d, a) {
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
    function fe() {
      let d = ce(l.formData);
      if (w.value)
        for (let a of d)
          me(a);
      else
        me(d);
      c.value = d;
    }
    function me(d) {
      for (let a of d)
        if (a != null && a.type)
          switch (a.type) {
            case "selectInput":
              const O = "selectInput" + Math.floor(Math.random() * 1e8);
              a.tempKey = O, o.value[O] = U({
                key: a.key || null,
                val: a.defaultVal || null
              }), y.push(
                Se(
                  () => o.value[O],
                  (q) => {
                    Ge(q, a);
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
                Se(
                  () => o.value[V],
                  (q) => {
                    Ge(q, a);
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
                  (q) => {
                    Ge(q, a);
                  },
                  { immediate: !0 }
                )
              ));
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              if (a.options || (a.options = []), (a.type === "checkboxGroup" || a.type === "radioGroup") && (a.options = U(ce(a.options))), a.asyncOption)
                if (a.changeOption)
                  if (Array.isArray(a.changeOption)) {
                    let q = !0;
                    for (let ie of a.changeOption)
                      if (!ie.valKey || !ie.key) {
                        q = !1;
                        break;
                      }
                    q ? y.push(
                      Se(
                        () => {
                          let ie = "";
                          if (Array.isArray(a.changeOption))
                            for (let xe of a.changeOption) {
                              let ze = s.value[xe.valKey];
                              if (ze && !Array.isArray(ze) || Array.isArray(ze) && ze.length || ze === 0 || ze === !1)
                                ie += "&" + xe.key + "=" + ze;
                              else if (!xe.notRequired)
                                return !1;
                            }
                          return ie;
                        },
                        (ie) => {
                          let xe = ce(o.value[a.tempKey]);
                          if (o.value[a.tempKey] = null, ie && a.optionUrl) {
                            let ze = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                            Le((ze + ie).replace(/\?&/, "?"), a, xe);
                          } else
                            a.localOption ? qe(a, "options", [...a.localOption]) : qe(a, "options", []), Ie(xe) && ae(xe, a);
                        },
                        {
                          immediate: !0
                        }
                      )
                    ) : a.localOption ? qe(a, "options", [...a.localOption]) : qe(a, "options", []);
                  } else typeof a.changeOption == "object" ? a.changeOption.valKey && a.changeOption.key && y.push(
                    Se(
                      () => typeof a.changeOption == "object" && !Array.isArray(a.changeOption) ? s.value[a.changeOption.valKey] : !1,
                      (q) => {
                        let ie = ce(o.value[a.tempKey]);
                        if (o.value[a.tempKey] = null, (q && !Array.isArray(q) || Array.isArray(q) && q.length || q === 0 || q === !1) && a.optionUrl && typeof a.changeOption == "object" && !Array.isArray(a.changeOption)) {
                          let xe = a.optionUrl.indexOf("?") !== -1 ? a.optionUrl : a.optionUrl + "?";
                          Le((xe + "&" + a.changeOption.key + "=" + q).replace(/\?&/, "?"), a, ie);
                        } else
                          a.localOption ? qe(a, "options", [...a.localOption]) : qe(a, "options", []), Ie(ie) && ae(ie, a);
                      },
                      { immediate: !0 }
                    )
                  ) : J(a.changeOption) === "Boolean" && y.push(
                    Se(
                      () => {
                        const q = _t(l.formData, (ie) => (ie == null ? void 0 : ie.key) === a.key);
                        return q.optionUrl = fa(q.optionUrl), q.optionUrl.value;
                      },
                      (q) => {
                        let ie = ce(o.value[a.tempKey]);
                        o.value[a.tempKey] = null, q ? Le(q, a, ie) : (a.localOption ? qe(a, "options", [...a.localOption]) : qe(a, "options", []), Ie(ie) && ae(ie, a));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
                else a.optionUrl && Le(a.optionUrl, a);
              else J(a.borrowOption) === "String" && Re(function() {
                a.options = _t(c.value, (q) => (q == null ? void 0 : q.key) === a.borrowOption).options;
              });
              const re = "opEle" + Math.floor(Math.random() * 1e8);
              a.key && (a.tempKey = re, a.type === "select" && a.multiple || a.type === "checkboxGroup" ? o.value[re] = a.defaultVal !== void 0 ? a.defaultVal : [] : a.booleanVal ? o.value[re] = a.defaultVal !== void 0 ? a.defaultVal ? 1 : 0 : null : o.value[re] = a.defaultVal !== void 0 ? a.defaultVal : null, y.push(
                Se(
                  () => o.value[re],
                  (q) => {
                    Ge(q, a);
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
                Se(
                  () => o.value[Ce],
                  (q) => {
                    Ge(q, a);
                  }
                )
              );
              break;
          }
    }
    function Le(d, a, O) {
      We.get(d).then((V) => {
        var Ce;
        let oe;
        if (Fe(a.options) ? oe = a.options.value : oe = a.options, !oe)
          return;
        let re = ((Ce = V == null ? void 0 : V.data) == null ? void 0 : Ce.records) || (V == null ? void 0 : V.data) || V || [];
        Array.isArray(re) ? (a.optionFilter && J(a.optionFilter) === "Function" && (re = a.optionFilter(re)), a.optionLabel && a.optionVal ? (oe.length = 0, oe.push(
          ...re.map((q) => {
            let ie;
            if (Array.isArray(a.optionLabel)) {
              let xe = "";
              a.optionLabel.forEach((ze, ul) => {
                let Rt = String(q[ze]);
                ul === 1 ? xe += "（" + Rt : ul > 1 ? xe += "、" + Rt : xe += Rt;
              }), ie = {
                label: xe + "）",
                val: a.optionVal && q[a.optionVal]
              };
            } else
              ie = {
                label: a.optionLabel && q[a.optionLabel],
                val: a.optionVal && q[a.optionVal]
              };
            if (a.collectLabel)
              if (Array.isArray(a.collectLabel))
                for (let xe of a.collectLabel)
                  xe.valKey && xe.valKey !== "label" && (ie[xe.valKey] = q[xe.valKey]);
              else
                a.collectLabel.valKey && a.collectLabel.valKey !== "label" && (ie[a.collectLabel.valKey] = q[a.collectLabel.valKey]);
            if (ie.val !== null && ie.val !== void 0)
              return ie;
          })
        )) : (oe.length = 0, oe.push(...re))) : oe.length = 0, a.localOption && oe.unshift(...a.localOption), Ie(O) && ae(O, a), a.disableOptionByOthers && (J(a.disableOptionByOthers) === "String" ? y.push(
          Se(
            () => s.value[a.disableOptionByOthers],
            (q) => {
              if (b(a.tempKey), !!oe) {
                for (let ie of oe)
                  ie.disabled && (ie.disabled = !1);
                if (q || q === 0 || q === !1)
                  for (let ie of oe)
                    ie.val === q && (ie.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(a.disableOptionByOthers) && y.push(
          Se(
            () => a.disableOptionByOthers.filter((q) => q).map((q) => s.value[q]),
            (q) => {
              if (b(a.tempKey), !!oe) {
                for (let ie of oe)
                  ie.disabled && (ie.disabled = !1);
                if (q) {
                  for (let ie of oe)
                    for (let xe = 0; xe < q.length; xe++)
                      if (ie.val === q[xe]) {
                        ie.disabled = !0, q.splice(xe, 1);
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
    function ae(d, a) {
      Array.isArray($t(a.options)) && St($t(a.options), { val: d }) !== -1 && (o.value[a.tempKey] = d);
    }
    function Be() {
      if (s.value = {}, w.value)
        for (let d of l.formData)
          $e(d);
      else
        $e(l.formData);
    }
    function $e(d) {
      for (let a of d)
        a != null && a.key && (a.type === "checkboxGroup" || a.type === "select" && a.multiple ? s.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : [] : a.type === "editor" || a.type === "editorPro" ? s.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : "" : (s.value[a.key] = a.defaultVal !== void 0 && a.show === void 0 ? a.defaultVal : null, a.key2 && (s.value[a.key2] = a.defaultVal2 !== void 0 && a.show === void 0 ? a.defaultVal2 : null)));
    }
    function Ge(d, a) {
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
              let oe = /^-?\d+(.\d+)?$/;
              a.numberVal && oe.test(d) ? s.value[a.key] = Number(d) : s.value[a.key] = d;
            } else
              s.value[a.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!a.key)
              return;
            if (a.booleanVal && !a.multiple ? s.value[a.key] = d === void 0 || d === "" || d === null ? null : !!d : a.multiple || a.type === "checkboxGroup" ? s.value[a.key] = Object.assign([], d) : s.value[a.key] = d, a.collectLabel) {
              const oe = et(a, d);
              if (Array.isArray(a.collectLabel)) {
                for (let re of a.collectLabel)
                  if (re != null && re.key && re.valKey) {
                    const Ce = He(re.key);
                    let q = null;
                    Array.isArray(oe) ? (q = oe.map((ie) => ie[re.valKey]), s.value[re.key] = q, Ce && (o.value[Ce.tempKey] = q)) : (oe && Ie(oe[re.valKey]) && (q = oe[re.valKey]), s.value[re.key] = q, Ce && (Ce.booleanVal && typeof q == "boolean" ? o.value[Ce.tempKey] = q ? 1 : 0 : o.value[Ce.tempKey] = q));
                  }
              } else if (typeof a.collectLabel == "object" && a.collectLabel.key && a.collectLabel.valKey) {
                const re = He(a.collectLabel.key);
                let Ce = null;
                Array.isArray(oe) ? (Ce = oe.map(
                  (q) => a.collectLabel && !Array.isArray(a.collectLabel) && q[a.collectLabel.valKey]
                ), s.value[a.collectLabel.key] = Ce, re && (o.value[re.tempKey] = Ce)) : (oe && Ie(oe[a.collectLabel.valKey]) && (Ce = oe[a.collectLabel.valKey]), s.value[a.collectLabel.key] = Ce, re && (re.booleanVal && typeof Ce == "boolean" ? o.value[re.tempKey] = Ce ? 1 : 0 : o.value[re.tempKey] = Ce));
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
              d ? (O === "time" ? s.value[a.key] = d : s.value[a.key] = ct(d).format(typeof a.format == "string" ? a.format : V[O]), O === "date" && a.addTime && (s.value[a.key] += " 00:00:00")) : s.value[a.key] = null;
            else if (a.type === "monthRange" || O === "daterange" || O === "datetimerange" || O === "timerange") {
              if (!a.key2)
                return;
              d && d[0] && d[1] ? (O === "timerange" ? (s.value[a.key] = d[0], s.value[a.key2] = d[1]) : a.type === "monthRange" ? (s.value[a.key] = typeof a.format == "string" && ct(d[0]).format(a.format) || d[0], s.value[a.key2] = typeof a.format == "string" && a.format && ct(d[1]).format(a.format) || d[1]) : (s.value[a.key] = ct(d[0]).format(a.format || O && V[O]), s.value[a.key2] = ct(d[1]).format(a.format || O && V[O])), O === "daterange" && a.addTime && (s.value[a.key] += " 00:00:00", s.value[a.key2] += " 23:59:59")) : (s.value[a.key] = null, s.value[a.key2] = null);
            }
            break;
        }
    }
    function et(d, a) {
      const O = $t(d == null ? void 0 : d.options);
      if (O)
        if (d != null && d.multiple || (d == null ? void 0 : d.type) === "checkboxGroup") {
          if (a) {
            let V = [];
            for (let oe of O)
              a.indexOf(oe == null ? void 0 : oe.val) !== -1 && V.push(oe);
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
    function He(d) {
      if (w.value) {
        for (let a of c.value) {
          const O = E(a, d);
          if (O)
            return O;
        }
        return !1;
      }
      return E(c.value, d);
    }
    function E(d, a) {
      for (let O of d)
        if (O.key === a)
          return O;
      return !1;
    }
    function K(d, a) {
      let O = {};
      for (let V in s.value)
        s.value.hasOwnProperty(V) && d[V] !== void 0 && (O[V] = d[V], delete d[V]);
      _e(O, a);
      for (let V in d)
        d.hasOwnProperty(V) && (u.indexOf(V) < 0 && u.push(V), s.value[V] = d[V]);
    }
    function ye(d) {
      let a = ce(d);
      if (w.value) {
        let O = [];
        for (let V of l.formData)
          O.push(...ge(V, a));
        return O;
      }
      return ge(l.formData, a);
    }
    function ge(d, a) {
      return d.filter((O) => {
        for (let V of Object.keys(a))
          if ((O == null ? void 0 : O.key) === V && P.value.indexOf(V) > -1 && !(a[V] === null || (Array.isArray(a[V]) || J(a[V]) === "Object") && Me(a[V])))
            return delete a[V], !0;
        return !1;
      }).map((O) => O == null ? void 0 : O.key);
    }
    function _e(d, a = !1) {
      let O = ce(d);
      G(d, a);
      for (let V in s.value)
        if (s.value.hasOwnProperty(V) && d[V] !== void 0 && d[V] !== "--") {
          if (Array.isArray(d[V]))
            d[V] = d[V].filter((oe) => oe !== "--");
          else if (J(d[V]) === "Object")
            for (let oe in d[V])
              d[V].hasOwnProperty(oe) && d[V][oe] === "--" && (d[V][oe] = null);
          s.value[V] = d[V];
        } else a || (s.value[V] = Array.isArray(s.value[V]) ? [] : null);
      Re(function() {
        aa(ye(O));
      });
    }
    function G(d, a = !1) {
      if (w.value)
        for (let O of c.value)
          Ve(O, d, a);
      else
        Ve(c.value, d, a);
    }
    function Ve(d, a, O = !1) {
      for (let V of d)
        if (V != null && V.key && (O && (a[V.key] !== void 0 || V.key2 && a[V.key2] !== void 0) || !O) && V.tempKey)
          switch (V.type) {
            case "inputMap":
              if (!V.key2)
                continue;
              J(a[V.key]) === "Number" && J(a[V.key2] === "Number") ? V.key3 ? o.value[V.tempKey] = {
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
      else J(d) === "Object" && lt(d);
    }
    function lt(d) {
      const { index: a, indexB: O, key: V, val: oe } = d;
      if (typeof a == "number")
        if (Array.isArray(c.value[a])) {
          if (typeof O == "number")
            if (V && d.hasOwnProperty("val"))
              c.value[a][O][V] = oe;
            else
              for (let re of Object.keys(d))
                re !== "index" && V !== "indexB" && (c.value[a][O][re] = d[re]);
        } else if (V && d.hasOwnProperty("val"))
          c.value[a][V] = oe;
        else
          for (let re of Object.keys(d))
            re !== "index" && (c.value[a][re] = d[re]);
    }
    function ut({ label: d, root: a }) {
      a.key2 && (s.value[a.key2] = d), at({
        e: d,
        root: a
      });
    }
    function je(d) {
      d.beforeKey && ya(p.value, (a) => a === d.beforeKey), d.key && (p.value.indexOf(d.key) === -1 && p.value.push(d.key), at({
        e: null,
        root: d
      }));
    }
    function gt({ name: d, root: a }) {
      a.key2 && (s.value[a.key2] = d), at({
        e: d,
        root: a
      });
    }
    function ol({ e: d, root: a }) {
      at({
        e: d,
        root: a
      }), Re(function() {
        var O, V;
        (V = (O = i.value) == null ? void 0 : O.validateField) == null || V.call(O, a.key);
      });
    }
    function at({ e: d, root: a }) {
      Pe(() => {
        var V;
        let O = {
          event: d
        };
        if (a.key && (O[a.key] = s.value[a.key]), a.key2 && (O[a.key2] = s.value[a.key2]), Array.isArray(a.collectLabel))
          for (let oe of a.collectLabel)
            O[oe.key] = s.value[oe.key];
        else (V = a.collectLabel) != null && V.key && (O[a.collectLabel.key] = s.value[a.collectLabel.key]);
        e("on-item-change", O);
      }, 300);
    }
    function il() {
      let d = {};
      for (let a of F.value)
        d[a] = s.value[a];
      return l.trim && (d = Bt(d)), d;
    }
    function ta() {
      var d, a;
      (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d);
    }
    function la(d) {
      Pe(() => {
        var a, O;
        (O = (a = i.value) == null ? void 0 : a.validateField) == null || O.call(a, d, () => {
        });
      }, 10);
    }
    function aa(d) {
      Pe(() => {
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
    function Pt() {
      var d, a;
      l.disabled || (a = (d = i.value) == null ? void 0 : d.validate) == null || a.call(d, (O) => {
        _ || (_ = !0, O && (v.value = !0, e("on-submit", il())), Pe(() => {
          _ = !1;
        }, 2e3));
      });
    }
    return Ee(() => {
      Be(), fe();
    }), r({
      resetForm: x,
      refreshFormDom: z,
      reRenderForm: te,
      setItemToValGroup: K,
      updateValGroup: _e,
      updateFormDataT: tt,
      validate: ta,
      reValidate: la,
      changeLoading: na,
      getValGroup: il,
      submit: Pt
    }), (d, a) => {
      const O = Q("FormItem"), V = Q("Button"), oe = Q("Form");
      return S(), le(oe, {
        ref_key: "formGroupXRef",
        ref: i,
        model: m(s),
        rules: m(C),
        "label-width": l.labelWidth,
        inline: l.inline,
        "show-message": l.showMessage,
        class: "formXN",
        key: m(k)
      }, {
        default: ne(() => [
          X(O, { style: { display: "none" } }, {
            default: ne(() => a[0] || (a[0] = [
              R("input", { type: "text" }, null, -1)
            ])),
            _: 1,
            __: [0]
          }),
          m(w) ? (S(!0), N(be, { key: 0 }, Te(m(c), (re, Ce) => (S(), N("div", {
            class: we([d.teamClass, "formTeamBox" + Ce]),
            key: "formTeamBox" + Ce
          }, [
            (S(!0), N(be, null, Te(re, (q, ie) => (S(), N(be, {
              key: "formItem" + ie
            }, [
              $(q) ? (S(), le(_l, {
                key: 0,
                item: q,
                style: se(m(T)),
                "item-style": m(L),
                "val-group": m(s),
                "temp-keys": m(o),
                inline: l.inline,
                disabled: l.disabled,
                "label-width": l.labelWidth,
                "item-width": l.itemWidth,
                "mgr-url": m(f),
                "upload-url": m(g),
                onItemChange: at,
                onReValidate: ol,
                onClearTempKeyItem: b,
                onSelectInputChange: je,
                onAlNameChange: gt,
                onAsyncLabelChange: ut
              }, st({ _: 2 }, [
                Te(I(re), (xe) => ({
                  name: xe.slotName,
                  fn: ne((ze) => [
                    De(d.$slots, xe.slotName, {
                      valGroup: ze.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ue("", !0)
            ], 64))), 128))
          ], 2))), 128)) : ue("", !0),
          (S(!0), N(be, null, Te(m(c), (re, Ce) => (S(), N(be, {
            key: "formItem" + Ce
          }, [
            !m(w) && $(re) ? (S(), le(_l, {
              key: 0,
              item: re,
              style: se(m(T)),
              "item-style": m(L),
              "val-group": m(s),
              "temp-keys": m(o),
              inline: l.inline,
              disabled: l.disabled,
              "label-width": l.labelWidth,
              "item-width": l.itemWidth,
              "mgr-url": m(f),
              "upload-url": m(g),
              onItemChange: at,
              onReValidate: ol,
              onClearTempKeyItem: b,
              onSelectInputChange: je,
              onAlNameChange: gt,
              onAsyncLabelChange: ut
            }, st({ _: 2 }, [
              Te(I(d.formData), (q) => ({
                name: q.slotName,
                fn: ne((ie) => [
                  De(d.$slots, q.slotName, {
                    valGroup: ie.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ue("", !0)
          ], 64))), 128)),
          l.showLongOkBt ? (S(), le(O, { key: 1 }, {
            default: ne(() => [
              X(V, {
                onClick: Pt,
                style: se(m(L)),
                type: "primary",
                loading: l.btnLoading && m(v),
                disabled: l.disabled
              }, {
                default: ne(() => [
                  ke(W(l.longOkBtTxt || m(A)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ue("", !0),
          R("div", go, [
            l.showInlineOkBt ? (S(), le(V, {
              key: 0,
              type: "primary",
              class: we({ inlineFormBtXN: l.inline, okBtnXN: !0 }),
              onClick: Pt,
              loading: l.btnLoading && m(v),
              disabled: l.disabled
            }, {
              default: ne(() => [
                ke(W(l.inlineOkBtTxt || m(A)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : ue("", !0),
            l.showInlineClearBt ? (S(), le(V, {
              key: 1,
              onClick: x,
              class: we({ inlineFormBtXN: l.inline }),
              type: "dashed"
            }, {
              default: ne(() => [
                ke(W(l.inlineClearBtTxt || m(A)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : ue("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), bo = /* @__PURE__ */ de({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    width: { default: () => Oe().formGroupWidth },
    labelWidth: { default: () => Oe().formGroupLabelWidth },
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
    const e = n, l = t, i = U({ width: l.width }), s = U(!1), c = U(), o = H(() => {
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
        (h = (I = c.value).resetForm) == null || h.call(I).then((B) => {
          P(B);
        });
      });
    }
    function f() {
      return new Promise((P) => {
        var I, h;
        (h = (I = c.value).refreshFormDom) == null || h.call(I).then((B) => {
          P(B);
        });
      });
    }
    function p() {
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
    function k(P) {
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
      P !== void 0 && (s.value = !!P, (h = (I = c.value).changeLoading) == null || h.call(I, s.value));
    }
    function T() {
      var P, I;
      return (I = (P = c.value).getValGroup) == null ? void 0 : I.call(P);
    }
    function L() {
      s.value = !0;
    }
    function C() {
      var P, I;
      (I = (P = c.value).submit) == null || I.call(P);
    }
    function F() {
      e("on-cancel"), Pe(() => {
        var P, I;
        s.value = !1, (I = (P = c.value).changeLoading) == null || I.call(P, !1);
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
      submit: C,
      close: F
    }), (P, I) => {
      const h = Q("Button");
      return S(), N("div", {
        style: se(m(i)),
        class: "formGroupBoxVM"
      }, [
        X(It, rt({
          ref_key: "formRRef",
          ref: c
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
              De(P.$slots, B.slotName, { valGroup: x })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading", "disabled"]),
        pe(R("div", {
          class: "formFooterVM",
          style: se({ marginLeft: l.labelWidth + "px" })
        }, [
          R("div", {
            style: se({ width: l.contentWidth }),
            class: "btnBoxKAL"
          }, [
            l.showOkBt ? (S(), le(h, {
              key: 0,
              onClick: C,
              class: "form-save-btn",
              loading: l.btnLoading && m(s),
              disabled: l.disabled
            }, {
              default: ne(() => [
                ke(W(l.okBtTxt || m(A)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])) : ue("", !0),
            l.showCancelBt ? (S(), le(h, {
              key: 1,
              onClick: F,
              class: "form-cancel-btn"
            }, {
              default: ne(() => [
                ke(W(l.cancelBtTxt || m(A)("r.cancel")), 1)
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
}), Qt = /* @__PURE__ */ de({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => Oe().searchFormLabelWidth },
    itemWidth: { default: () => Oe().searchFormItemWidth },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(t, { expose: r, emit: n }) {
    const e = n, l = t, i = U(), s = H(() => {
      var L, C;
      if (Array.isArray(l.formData[0])) {
        let F = [];
        for (let P of l.formData)
          P && (F = F.concat(
            P.filter((I) => (I == null ? void 0 : I.type) === "custom" || (I == null ? void 0 : I.type) === "input" && I.slotName && I.slotPosition)
          ));
        return F;
      }
      return (C = (L = l.formData) == null ? void 0 : L.filter) == null ? void 0 : C.call(
        L,
        (F) => (F == null ? void 0 : F.type) === "custom" || (F == null ? void 0 : F.type) === "input" && F.slotName && F.slotPosition
      );
    });
    function c() {
      return new Promise((L) => {
        var C, F;
        (F = (C = i.value).resetForm) == null || F.call(C).then(() => {
          L();
        });
      });
    }
    function o() {
      return new Promise((L) => {
        var C, F;
        (F = (C = i.value).refreshFormDom) == null || F.call(C).then(() => {
          L();
        });
      });
    }
    function y() {
      return new Promise((L) => {
        var C, F;
        (F = (C = i.value).reRenderForm) == null || F.call(C).then(() => {
          L();
        });
      });
    }
    function f(L, C) {
      var F, P;
      (P = (F = i.value).setItemToValGroup) == null || P.call(F, L, C);
    }
    function p(L, C) {
      var F, P;
      (P = (F = i.value).updateValGroup) == null || P.call(F, L, C);
    }
    function u(L) {
      var C, F;
      (F = (C = i.value).updateFormDataT) == null || F.call(C, L);
    }
    function v() {
      var L, C;
      (C = (L = i.value).validate) == null || C.call(L);
    }
    function k(L) {
      var C, F;
      (F = (C = i.value).reValidate) == null || F.call(C, L);
    }
    function g(L) {
      var C, F;
      (F = (C = i.value).changeLoading) == null || F.call(C, L === void 0 ? !1 : L);
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
    return Ee(() => {
      const L = i.value.$el;
      L != null && L.parentNode && L.parentNode.addEventListener("keyup", (C) => {
        (C == null ? void 0 : C.keyCode) === 13 && T();
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
    }), (L, C) => (S(), le(It, rt({
      ref_key: "formRRef",
      ref: i
    }, L.$attrs, {
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
    }), st({ _: 2 }, [
      Te(m(s), (F) => ({
        name: F.slotName,
        fn: ne(({ valGroup: P }) => [
          De(L.$slots, F.slotName, { valGroup: P })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), ko = /* @__PURE__ */ de({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: () => Oe().formModalWidth },
    labelWidth: { default: () => Oe().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(t, { expose: r, emit: n }) {
    const e = n, l = t, i = U(), s = U(!1), c = U(!1), o = H(() => {
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
    function f() {
      return new Promise((h) => {
        var B, x;
        (x = (B = i.value).refreshFormDom) == null || x.call(B).then(() => {
          h();
        });
      });
    }
    function p() {
      return new Promise((h) => {
        var B, x;
        (x = (B = i.value).reRenderForm) == null || x.call(B).then(() => {
          h();
        });
      });
    }
    function u(h, B) {
      var x, te;
      (te = (x = i.value).setItemToValGroup) == null || te.call(x, h, B);
    }
    function v(h, B) {
      var x, te;
      (te = (x = i.value).updateValGroup) == null || te.call(x, h, B);
    }
    function k(h) {
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
      h !== void 0 && (c.value = !!h, (x = (B = i.value).changeLoading) == null || x.call(B, c.value));
    }
    function T() {
      var h, B;
      return (B = (h = i.value).getValGroup) == null ? void 0 : B.call(h);
    }
    function L() {
      c.value = !0;
    }
    function C() {
      var h, B;
      l.hideCancelBt ? P() : (B = (h = i.value).submit) == null || B.call(h);
    }
    function F() {
      s.value = !0;
    }
    function P() {
      s.value = !1, Pe(() => {
        var h, B;
        c.value = !1, (B = (h = i.value).changeLoading) == null || B.call(h, !1);
      }, 1e3);
    }
    function I(h) {
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
      submit: C,
      open: F,
      close: P
    }), (h, B) => {
      const x = Q("Button"), te = Q("Modal");
      return S(), le(te, {
        class: we(["formModal", { hideFooter: l.hideFooter }]),
        title: l.title || m(A)("r.title"),
        modelValue: m(s),
        "onUpdate:modelValue": B[0] || (B[0] = (z) => Fe(s) ? s.value = z : null),
        "mask-closable": !1,
        "footer-hide": l.hideFooter,
        width: l.width,
        onOnVisibleChange: I
      }, {
        footer: ne(() => [
          X(x, {
            onClick: C,
            class: "modal-save-btn",
            loading: l.btnLoading && m(c),
            disabled: l.disabled
          }, {
            default: ne(() => [
              ke(W(l.okBtTxt || m(A)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled"]),
          l.hideCancelBt ? ue("", !0) : (S(), le(x, {
            key: 0,
            onClick: P,
            class: "modal-cancel-btn"
          }, {
            default: ne(() => [
              ke(W(l.cancelBtTxt || m(A)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: ne(() => [
          X(It, rt({
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
              fn: ne(({ valGroup: D }) => [
                De(h.$slots, z.slotName, { valGroup: D })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading", "disabled"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), wo = /* @__PURE__ */ de({
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
    const n = r, e = t, l = U(!0), i = U([]), s = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let c = [];
    const o = H(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), y = H(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    Se(
      () => e.data,
      (g) => {
        l.value = !1;
        let _ = [];
        f(g, _), i.value = _, Re(function() {
          l.value = !0, e.inlineLeaf && Re(v);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), Se(
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
    ), Se(
      () => e.disabled,
      (g) => {
        ot({
          group: i.value,
          condition: (_) => _ && _.disableCheckbox !== g,
          key: "disableCheckbox",
          val: g
        }), e.inlineLeaf && Re(v);
      },
      { immediate: !0 }
    );
    function f(g, _ = []) {
      for (let w of g) {
        let T = !1;
        o.value.length > 1 ? T = Nt(y.value, (C) => C[o.value[0]] === w[o.value[0]]) !== void 0 : T = o.value[0] ? y.value.indexOf(w[o.value[0]]) !== -1 : !1;
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
    function p(g, _ = []) {
      for (let w of g) {
        let T = !1;
        o.value.length > 1 ? T = Nt(y.value, (C) => C[o.value[0]] === w[o.value[0]]) !== void 0 : T = o.value[0] ? y.value.indexOf(w[o.value[0]]) !== -1 : !1;
        let L = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let C of o.value)
          L[C] = w[C];
        _.push(L), w != null && w.children && w.children.length > 0 && (L.children = [], f(w.children, L.children));
      }
    }
    function u(g, {
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
        g.expand && Re(v);
        return;
      }
      let _ = document.querySelectorAll("#" + s + " .inlineChildXA");
      if (_.length > 0)
        for (let w of _) {
          let T = w == null ? void 0 : w.parentElement, L = T == null ? void 0 : T.nextElementSibling;
          if (!L)
            return;
          if (L.tagName !== "BR") {
            let C = T == null ? void 0 : T.parentElement, F = document.createElement("br");
            C == null || C.insertBefore(F, L);
            const P = F.nextElementSibling;
            if (P) {
              const I = P.children;
              if (I)
                for (let h of I)
                  (h == null ? void 0 : h.className.indexOf("inlineTreeNodeF")) === -1 && h.setAttribute("class", h.className + " inlineTreeNodeF");
            }
          }
        }
    }
    function k(g) {
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
      c = _, n("update:modelValue", _), n("on-change", ce(_));
    }
    return (g, _) => {
      const w = Q("Tree");
      return m(l) ? (S(), le(w, {
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
}), _o = { class: "transferBoxRL" }, Vo = { class: "leftBoxLLL" }, So = { class: "fullHeight flexColumnBox" }, Co = { class: "notGrow" }, To = { class: "titleLLL" }, Bo = { class: "growFlexItem" }, xo = { class: "middleBoxLLL" }, Lo = { class: "rightBoxLLL" }, Oo = { class: "fullHeight flexColumnBox" }, Ao = { class: "notGrow" }, Io = { class: "titleLLL" }, Po = { class: "growFlexItem" }, Ro = /* @__PURE__ */ de({
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
      return (t = Oe()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Oe()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Oe()) == null ? void 0 : t.pageShowSizer;
    } },
    leftSearchDataFilter: {},
    rightSearchDataFilter: {}
  },
  emits: ["transferred", "on-data-change-l", "on-data-change-r"],
  setup(t, { expose: r, emit: n }) {
    const e = n, l = t;
    let i = U({}), s = U({}), c = U([]), o = U([]), y = U(0), f = U(0);
    const p = H(() => ({ ...l.constSearchDataLeft, ...i.value })), u = H(() => ({ ...l.constSearchDataRight, ...s.value })), v = H(() => y.value < 1), k = H(() => c.value.length < 1), g = H(() => o.value.length < 1), _ = H(() => f.value < 1), w = U(), T = U(), L = U(), C = U();
    function F() {
      w.value.resetForm(), T.value.resetForm(), Me(i.value) || (i.value = {}), Me(s.value) || (s.value = {}), L.value.clearSelect(), C.value.clearSelect();
    }
    function P() {
      L.value.search(), C.value.search();
    }
    function I($) {
      c.value = $;
    }
    function h($) {
      o.value = $;
    }
    function B($) {
      var Z, ee, he, fe, me;
      y.value = ((ee = (Z = $ == null ? void 0 : $.data) == null ? void 0 : Z.page) == null ? void 0 : ee.total) || ((fe = (he = $ == null ? void 0 : $.data) == null ? void 0 : he.data) == null ? void 0 : fe.total) || ((me = $ == null ? void 0 : $.data) == null ? void 0 : me.total) || ($ == null ? void 0 : $.total) || 0, e("on-data-change-l", $);
    }
    function x($) {
      var Z, ee, he, fe, me;
      f.value = ((ee = (Z = $ == null ? void 0 : $.data) == null ? void 0 : Z.page) == null ? void 0 : ee.total) || ((fe = (he = $ == null ? void 0 : $.data) == null ? void 0 : he.data) == null ? void 0 : fe.total) || ((me = $ == null ? void 0 : $.data) == null ? void 0 : me.total) || ($ == null ? void 0 : $.total) || 0, e("on-data-change-r", $);
    }
    function te($) {
      typeof l.leftSearchDataFilter == "function" ? i.value = l.leftSearchDataFilter($) : i.value = $;
    }
    function z($) {
      typeof l.rightSearchDataFilter == "function" ? s.value = l.rightSearchDataFilter($) : s.value = $;
    }
    function D() {
      l.addUrl && j("add");
    }
    function Y() {
      l.deleteUrl && j("delete");
    }
    function b() {
      l.addAllUrl && l.addUrl && j("addAll");
    }
    function M() {
      l.deleteAllUrl && j("deleteAll");
    }
    function j($) {
      let Z, ee, he = {}, fe = "";
      switch ($) {
        case "add":
          Z = l.addMethod, ee = l.addUrl, he = l.addParamsHandle(o.value), fe = A("r.add");
          break;
        case "delete":
          Z = l.deleteMethod, ee = l.deleteUrl, he = l.deleteParamsHandle(c.value), fe = A("r.remove");
          break;
        case "addAll":
          Z = l.addAllMethod, ee = l.addAllUrl, he = l.addAllParamsHandle(u.value), fe = A("r.addAll");
          break;
        case "deleteAll":
          Z = l.deleteAllMethod, ee = l.deleteAllUrl, he = l.deleteAllParamsHandle(p.value), fe = A("r.removeAll");
          break;
      }
      ee && Z && We[Z](ee, he, null, [], { spin: !0 }, !1).then((me) => {
        (me == null ? void 0 : me.code) === 0 ? (Ke(fe + A("r.success"), (me == null ? void 0 : me.message) || "", "success"), L.value && L.value.getTableData(), C.value && C.value.getTableData(), e("transferred")) : Ke(fe + A("r.failed"), (me == null ? void 0 : me.message) || "", "error");
      }).catch(() => {
        Ke(fe + A("r.error"), "", "error");
      });
    }
    return r({
      reset: F,
      search: P
    }), ($, Z) => {
      const ee = Q("Icon"), he = Q("Button");
      return S(), N("div", _o, [
        R("div", Vo, [
          R("div", So, [
            R("div", Co, [
              R("div", To, W(l.titleLeft || m(A)("r.added")), 1),
              X(jt, null, {
                default: ne(() => [
                  X(Qt, {
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
            R("div", Bo, [
              X(Jt, {
                ref_key: "lTabRef",
                ref: L,
                columns: l.leftTableColumns,
                url: l.leftTableUrl,
                "search-data": m(p),
                onOnSelectionChange: I,
                onOnDataChange: B,
                "init-data": !!(m(Me)(l.constSearchDataLeft) && l.leftTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: l.usePagePro,
                showTotal: l.showTotal,
                showSizer: l.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ]),
        R("div", xo, [
          X(he, {
            class: "middleBtLLL",
            type: "default",
            onClick: M,
            disabled: m(v)
          }, {
            default: ne(() => [
              ke(W(m(A)("r.removeAll")) + " ", 1),
              X(ee, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          X(he, {
            class: "middleBtLLL",
            type: "default",
            onClick: Y,
            disabled: m(k)
          }, {
            default: ne(() => [
              ke(W(m(A)("r.remove")) + " ", 1),
              X(ee, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          X(he, {
            class: "middleBtLLL",
            type: "primary",
            onClick: D,
            disabled: m(g)
          }, {
            default: ne(() => [
              X(ee, { type: "ios-arrow-back" }),
              ke(" " + W(m(A)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          X(he, {
            class: "middleBtLLL",
            type: "primary",
            onClick: b,
            disabled: m(_)
          }, {
            default: ne(() => [
              X(ee, { type: "ios-arrow-back" }),
              ke(" " + W(m(A)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        R("div", Lo, [
          R("div", Oo, [
            R("div", Ao, [
              R("div", Io, W(l.titleRight || m(A)("r.notAdded")), 1),
              X(jt, null, {
                default: ne(() => [
                  X(Qt, {
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
            R("div", Po, [
              X(Jt, {
                ref_key: "rTabRef",
                ref: C,
                columns: l.rightTableColumns,
                url: l.rightTableUrl,
                "search-data": m(u),
                onOnSelectionChange: h,
                onOnDataChange: x,
                "init-data": !!(m(Me)(l.constSearchDataRight) && l.rightTableUrl),
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
}), $o = { class: "boxLPA" }, Mo = { class: "headerJ" }, Fo = { class: "firstT borderBoxAS" }, Do = { class: "secondT borderBoxAS" }, No = { class: "firstCol borderBoxAS" }, Ko = { class: "secondCol borderBoxAS" }, zo = /* @__PURE__ */ de({
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
    const n = t, e = r, l = U([]), i = H(() => {
      var p;
      let y = ce(n.data), f = ce(l.value);
      for (let u of y) {
        let v = 0;
        if (u != null && u.children && !Me(u.children))
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
    Se(
      () => n.modelValue,
      (y, f) => {
        yt(l.value, y) || yt(y, f) || (l.value = y);
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
          } else J(n.collectVal) === "String" && p.push(u[n.collectVal]);
        if (u.children) {
          for (let v of u.children)
            if (v.checked)
              if (Array.isArray(n.collectVal)) {
                let k = {};
                for (let g of n.collectVal)
                  k[g] = v[g];
                p.push(k);
              } else J(n.collectVal) === "String" && p.push(v[n.collectVal]);
        }
      }
      f ? (l.value = p, n.leaf ? (e("update:modelValue", p), e("on-change", ce(p))) : Re(function() {
        o(i.value);
      })) : (e("update:modelValue", p), e("on-change", ce(p)));
    }
    return (y, f) => {
      const p = Q("Checkbox");
      return S(), N("div", $o, [
        R("div", Mo, [
          R("div", Fo, W(y.firstTitle || m(A)("r.level.1")), 1),
          R("div", Do, W(y.secondTitle || m(A)("r.level.2")), 1)
        ]),
        (S(!0), N(be, null, Te(m(i), (u, v) => (S(), N("div", {
          class: "bodyJ",
          key: "checkboxJ" + v
        }, [
          R("div", No, [
            X(p, {
              modelValue: u.checked,
              "onUpdate:modelValue": (k) => u.checked = k,
              indeterminate: u.indeterminate,
              onOnChange: (k) => s(u, k),
              disabled: y.disabled
            }, {
              default: ne(() => [
                ke(W(u[y.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          R("div", Ko, [
            (S(!0), N(be, null, Te(u.children, (k, g) => (S(), N("div", {
              class: "secItem",
              key: "secItem" + g
            }, [
              X(p, {
                modelValue: k.checked,
                "onUpdate:modelValue": (_) => k.checked = _,
                onOnChange: c,
                disabled: y.disabled
              }, {
                default: ne(() => [
                  ke(W(k[y.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), Uo = { class: "boxLPB" }, Eo = { class: "headerF" }, Go = { class: "firstT borderBoxKa" }, Ho = { class: "secondT borderBoxKa" }, Wo = { class: "thirdT borderBoxKa" }, jo = { class: "firstCol borderBoxKa" }, qo = { class: "rightBoxAL" }, Xo = { class: "secondCol borderBoxKa" }, Jo = { class: "thirdCol borderBoxKa" }, Yo = /* @__PURE__ */ de({
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
    const n = r, e = t, l = U([]), i = H(() => {
      let f = ce(e.data), p = ce(l.value);
      for (let u of f) {
        let v = 0, k = 0;
        if (u != null && u.children && !Me(u.children))
          for (let g of u.children) {
            let _ = 0;
            if (g.children && !Me(g.children))
              for (let w of g.children) {
                for (let T = 0, L = p.length; T < L; T++)
                  if (Array.isArray(e.collectVal)) {
                    let C = !0;
                    for (let F of e.collectVal)
                      if (p[T][F] !== w[F]) {
                        C = !1;
                        break;
                      }
                    if (C) {
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
    Se(
      () => e.modelValue,
      (f, p) => {
        yt(l.value, f) || yt(f, p) || (l.value = f);
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
          } else J(e.collectVal) === "String" && u.push(v[e.collectVal]);
        if (v != null && v.children)
          for (let k of v.children) {
            if (!p && !e.leaf && k.checked && k.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let g = {};
                for (let _ of e.collectVal)
                  g[_] = k[_];
                u.push(g);
              } else J(e.collectVal) === "String" && u.push(k[e.collectVal]);
            if (k.children) {
              for (let g of k.children)
                if (g.checked)
                  if (Array.isArray(e.collectVal)) {
                    let _ = {};
                    for (let w of e.collectVal)
                      _[w] = g[w];
                    u.push(_);
                  } else J(e.collectVal) === "String" && u.push(g[e.collectVal]);
            }
          }
      }
      p ? (l.value = u, e.leaf ? (n("update:modelValue", u), n("on-change", ce(u))) : Re(function() {
        y(i.value);
      })) : (n("update:modelValue", u), n("on-change", ce(u)));
    }
    return (f, p) => {
      const u = Q("Checkbox");
      return S(), N("div", Uo, [
        R("div", Eo, [
          R("div", Go, W(f.firstTitle || m(A)("r.level.1")), 1),
          R("div", Ho, W(f.secondTitle || m(A)("r.level.2")), 1),
          R("div", Wo, W(f.thirdTitle || m(A)("r.level.3")), 1)
        ]),
        (S(!0), N(be, null, Te(m(i), (v, k) => (S(), N("div", {
          class: "bodyF",
          key: "checkboxJ" + k
        }, [
          R("div", jo, [
            X(u, {
              modelValue: v.checked,
              "onUpdate:modelValue": (g) => v.checked = g,
              indeterminate: v.indeterminate,
              onOnChange: (g) => s(v, g),
              disabled: f.disabled
            }, {
              default: ne(() => [
                ke(W(v[f.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          R("div", qo, [
            (S(!0), N(be, null, Te(v.children, (g, _) => (S(), N("div", {
              class: "rightBoxInner",
              key: "secItem" + _
            }, [
              R("div", Xo, [
                X(u, {
                  modelValue: g.checked,
                  "onUpdate:modelValue": (w) => g.checked = w,
                  indeterminate: g.indeterminate,
                  onOnChange: (w) => c(g, w),
                  disabled: f.disabled
                }, {
                  default: ne(() => [
                    ke(W(g[f.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              R("div", Jo, [
                (S(!0), N(be, null, Te(g.children, (w, T) => (S(), N("div", {
                  class: "thirdItem",
                  key: "thirdItem" + T
                }, [
                  X(u, {
                    modelValue: w.checked,
                    "onUpdate:modelValue": (L) => w.checked = L,
                    onOnChange: o,
                    disabled: f.disabled
                  }, {
                    default: ne(() => [
                      ke(W(w[f.label]), 1)
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
}), Qo = {
  class: "fl",
  style: { "font-weight": "bold" }
}, Zo = { class: "btsF" }, ei = { key: 0 }, ti = {
  key: 1,
  class: "growFlexItem relativeBox"
}, li = { class: "fullFlowContent" }, ai = /* @__PURE__ */ de({
  __name: "WellCard",
  props: {
    title: {},
    fitToContent: { type: Boolean, default: !1 },
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, n = H(() => {
      let l = {
        width: r.fitToContent ? "fit-content" : e(r.width),
        height: r.fitToContent ? "fit-content" : e(r.height)
      };
      return r.inline && (l.display = "inline-block"), l;
    });
    function e(l) {
      const i = /^\d+$/;
      return typeof l == "number" || typeof l == "string" && i.test(l) ? l + "px" : l;
    }
    return (l, i) => (S(), N("div", {
      style: se(m(n))
    }, [
      R("div", {
        class: we(["wellCardR", { flexColumnBox: !r.fitToContent }])
      }, [
        R("div", {
          class: we(["panelHeader", { notGrow: !r.fitToContent }])
        }, [
          R("div", Qo, W(r.title || m(A)("r.title")), 1),
          R("div", Zo, [
            De(l.$slots, "bts")
          ])
        ], 2),
        r.fitToContent ? (S(), N("div", ei, [
          De(l.$slots, "default")
        ])) : (S(), N("div", ti, [
          R("div", li, [
            De(l.$slots, "default")
          ])
        ]))
      ], 2)
    ], 4));
  }
}), ni = /* @__PURE__ */ de({
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
    let l = U(1), i = 1;
    const s = U(""), c = ht([]);
    let o = {}, y = !0, f = !1;
    const p = "scm" + Math.random(), u = H(() => s.value ? A("r.searchFor") + s.value : e.placeholder || A("r.pInput")), v = H({
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
    }), k = H(() => e.searchKey ? {
      ...e.searchData,
      current: l.value,
      [e.searchKey]: s.value
    } : {
      ...e.searchData,
      current: l.value
    });
    Se(
      () => e.getOptions,
      (P) => {
        P ? y && F() : w();
      },
      { immediate: !0 }
    ), Se(
      () => e.url,
      (P) => {
        P && (f = !0);
      }
    );
    const g = U();
    function _() {
      g.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", L);
    }
    function w() {
      y || (v.value = "", y = !0, s.value = "", c.value = [], l.value = 1, i = 1, o = {}, f = !1);
    }
    function T(P) {
      for (let I of c.value)
        if ((I == null ? void 0 : I.label) === P)
          return !0;
      return !1;
    }
    const L = Ot(function(P) {
      var h;
      const I = (h = P == null ? void 0 : P.target) == null ? void 0 : h.value;
      T(I) || (Ie(I) ? (f ? w() : (Me(o) && (o.current = l.value, o.pages = i, o.options = ce(c.value)), Ie(v.value) && (v.value = "")), s.value = String(I), c.value = [], l.value = 1, y = !0, F()) : f ? (w(), F()) : (v.value = "", s.value = "", o.current ? (l.value = o.current, i = o.pages, c.value = ce(o.options), o = {}) : F()));
    }, 600);
    function C() {
      f && w(), l.value < i ? (++l.value, Re(function() {
        F();
      })) : cl.warning({
        background: !0,
        content: A("r.noMore")
      });
    }
    function F() {
      return new Promise((P, I) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Ie(s.value)) {
            P(!1);
            return;
          }
          We.get(e.url, k.value).then((h) => {
            var te;
            y = !1;
            let B = [];
            (te = h == null ? void 0 : h.data) != null && te.records ? (B = h.data.records, i = h.data.pages) : h != null && h.data && J(h.data) === "Array" ? (B = h.data, i = h.pages) : h != null && h.data && J(h.data) === "Object" && (B = [h.data], i = 1), typeof e.optionFilter == "function" && J(e.optionFilter) === "Function" && (B = e.optionFilter(B)), Me(B) || (B = B.map((z, D) => {
              let Y = A("r.optionLabel") + D;
              if (Array.isArray(e.optionsLabelKey)) {
                let b = [];
                for (let M = 1, j = e.optionsLabelKey.length; M < j; M++)
                  b.push(z[e.optionsLabelKey[M]]);
                Y = `${z[e.optionsLabelKey[0]]}(${String(b)})`;
              } else Ol(e.optionsLabelKey) && (Y = z[e.optionsLabelKey]);
              if (e.collectLabel) {
                let b = ce(z);
                return delete b.value, delete b.label, {
                  value: z[e.optionsValKey],
                  label: Y,
                  ...b
                };
              }
              return {
                value: z[e.optionsValKey],
                label: Y
              };
            })), c.value.push(...B);
            let x = {};
            c.value = c.value.filter((z) => x[z == null ? void 0 : z.value] ? !1 : (x[z == null ? void 0 : z.value] = !0, !0)), Re(function() {
              n("update-option-finish");
            }), P(!0);
          }).catch(() => {
            cl.error(A("r.getDataError")), I(A("r.getDataError"));
          });
        } else
          P(!1);
      });
    }
    return Ee(_), (P, I) => {
      const h = Q("Option"), B = Q("Select"), x = Zt("loadmore");
      return pe((S(), le(B, rt({
        modelValue: m(v),
        "onUpdate:modelValue": I[0] || (I[0] = (te) => Fe(v) ? v.value = te : null),
        ref_key: "selectScrollSourceRef",
        ref: g,
        "transfer-class-name": p
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
        [x, C, p]
      ]);
    };
  }
}), Vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: ql,
  AsyncCascader: jl,
  BtTablePage: Jt,
  CheckboxGroupThreeClass: Yo,
  CheckboxGroupTwoClass: zo,
  CheckboxTree: wo,
  Date: Ql,
  EditorPro: Zl,
  FormGroup: bo,
  FormModal: ko,
  FormR: It,
  FullPop: Fa,
  HeaderBt: Il,
  Hello: Na,
  IconTxtBtn: zt,
  InputMap: Wl,
  MonthRange: Yl,
  Page404: Ea,
  PagePro: Gl,
  SearchForm: Qt,
  SelectInput: Hl,
  SelectScrollMore: ni,
  ShowHidePanel: jt,
  ShowHidePanelB: Ln,
  SideMenu: fn,
  SideMenuPro: Sn,
  TableIconBtn: Dl,
  TableSearch: On,
  TableSetting: zl,
  TransferBox: Ro,
  UploadGroup: Jl,
  WellCard: ai
}, Symbol.toStringTag, { value: "Module" })), oi = { class: "a4Line aL notPrint" }, ii = { class: "a4Line aR notPrint" }, si = { class: "a4Line bL notPrint" }, ri = { class: "a4Line bR notPrint" }, ui = { class: "topsL notPrint" }, di = { class: "topsLTitle" }, ci = { class: "topsLBtn" }, fi = { class: "topsLHelp" }, pi = { key: 0 }, mi = { key: 1 }, hi = { key: 2 }, yi = ["innerHTML"], vi = /* @__PURE__ */ de({
  __name: "PrintModal",
  setup(t) {
    const r = tl(), n = U(), e = U(!1), l = U(!1), i = U(!1), s = U(100), c = U(), o = U(715), y = U(!1), f = U(), p = "tablePrint_" + Date.now().toString(), u = U(""), v = U([]), k = U([]), g = U(!1), _ = H(() => ({
      width: o.value + "px"
    })), w = () => {
      f.value && window.sessionStorage.removeItem("print_" + f.value), window.sessionStorage.removeItem(p), window.close();
    }, T = () => {
      y.value && (y.value = !1);
    }, L = () => {
      g.value = !0;
    }, C = (B) => {
      g.value && (o.value = (B == null ? void 0 : B.layerX) - 20);
    }, F = () => {
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
      var B, x, te, z, D, Y, b;
      if (f.value = (B = r == null ? void 0 : r.params) == null ? void 0 : B.isFrom, f.value) {
        let M = window.sessionStorage.getItem("print_" + f.value);
        if (M) {
          const j = JSON.parse(M);
          if (!j) {
            e.value = !0;
            return;
          }
          if (v.value = j.columns, k.value = j.data, n.value = j.title, u.value = ((x = j.config) == null ? void 0 : x.customClass) || "", l.value = ((te = j.config) == null ? void 0 : te.domPrint) || !1, i.value = ((z = j.config) == null ? void 0 : z.autoPrint) || !1, s.value = ((D = j.config) == null ? void 0 : D.autoPrintTimeout) || 100, o.value = ((Y = j.config) == null ? void 0 : Y.width) || 715, document.title = (n.value || A("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString(), (b = j.funcArr) != null && b.length) {
            for (let $ of j.funcArr)
              if ($.name === "spanMethod") {
                c.value = new Function("return " + $.func)();
                break;
              }
          }
        } else
          e.value = !0;
      }
    };
    return Ee(() => {
      if (i.value) {
        let B = window.setTimeout(() => {
          window.clearTimeout(B), P();
        }, s.value);
      }
      document.addEventListener("click", T), document.addEventListener("mousemove", C), document.addEventListener("mouseup", F);
    }), h(), (B, x) => {
      const te = Q("Table");
      return S(), N("div", {
        class: we(["tablePrintModal", [m(u)]])
      }, [
        pe(R("div", { class: "msgL notPrint" }, W(m(A)("r.printGuide.9")), 513), [
          [ve, m(e)]
        ]),
        pe(R("div", oi, [
          R("p", null, W(m(A)("r.printGuide.7")), 1),
          x[2] || (x[2] = ke()),
          R("p", null, W(m(A)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        pe(R("div", ii, [
          R("p", null, W(m(A)("r.printGuide.7")), 1),
          x[3] || (x[3] = ke()),
          R("p", null, W(m(A)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        pe(R("div", si, [
          R("p", null, W(m(A)("r.printGuide.8")), 1),
          x[4] || (x[4] = ke()),
          R("p", null, W(m(A)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        pe(R("div", ri, [
          R("p", null, W(m(A)("r.printGuide.8")), 1),
          x[5] || (x[5] = ke()),
          R("p", null, W(m(A)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !m(e)]
        ]),
        pe(R("div", ui, [
          R("div", di, W(m(n) || m(A)("r.print")), 1),
          R("div", ci, [
            X(zt, {
              icon: "md-help-circle",
              name: m(A)("r.help"),
              onClick: x[0] || (x[0] = Ft((z) => y.value = !m(y), ["stop"]))
            }, null, 8, ["name"]),
            X(zt, {
              icon: "md-print",
              name: m(A)("r.preview"),
              onClick: P
            }, null, 8, ["name"]),
            m(l) ? ue("", !0) : (S(), le(zl, {
              key: 0,
              modelValue: m(v),
              "onUpdate:modelValue": x[1] || (x[1] = (z) => Fe(v) ? v.value = z : null),
              "s-key": p,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            X(Dl, {
              icon: "md-close",
              onClick: w,
              title: m(A)("r.close")
            }, null, 8, ["title"])
          ]),
          pe(R("div", fi, [
            m(l) ? ue("", !0) : (S(), N("p", pi, [
              x[6] || (x[6] = R("span", null, "1. ", -1)),
              R("span", null, W(m(A)("r.printGuide.1")), 1)
            ])),
            m(l) ? ue("", !0) : (S(), N("p", mi, [
              x[7] || (x[7] = R("span", null, "2. ", -1)),
              R("span", null, W(m(A)("r.printGuide.2")), 1)
            ])),
            m(l) ? (S(), N("p", hi, [
              x[8] || (x[8] = R("span", null, "1. ", -1)),
              R("span", null, W(m(A)("r.printGuide.10")), 1)
            ])) : ue("", !0),
            R("p", null, [
              R("span", null, W(m(l) ? "2. " : "3. "), 1),
              R("span", null, W(m(A)("r.printGuide.3")), 1)
            ]),
            R("p", null, [
              R("span", null, W(m(l) ? "3. " : "4. "), 1),
              R("span", null, W(m(A)("r.printGuide.4")), 1)
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
          style: se(m(_))
        }, [
          R("div", {
            class: "settingLine",
            onMousedown: Ft(L, ["stop"])
          }, null, 32)
        ], 4)) : ue("", !0),
        m(l) ? (S(), N("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: m(k),
          style: se(m(_))
        }, null, 12, yi)) : ue("", !0),
        m(l) ? ue("", !0) : pe((S(), le(te, {
          key: 2,
          class: "tablePW",
          columns: m(v),
          data: m(k),
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
function Sl() {
  document.documentElement.style.setProperty("overflow", "auto");
  const r = document.createElement("style");
  r.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(r);
}
function gi(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: vi
  })), Ze = t, location.pathname.indexOf("tablePrint") > -1 ? (Ze.push(location.pathname), Sl()) : location.hash.indexOf("tablePrint") > -1 && (Ze.push(location.hash.replace(/^#/, "")), Sl());
}
function ea(t) {
  return J(t) === "Object" && (t.hasOwnProperty("width") || (t.width = t.minWidth || 100), t.hasOwnProperty("minWidth") && delete t.minWidth, t.sortable = !1, delete t.__id, t.resizable = !0, t.children && J(t.children) === "Array" && (t.children = t.children.map(ea))), t;
}
function bi(t, r, n, e) {
  var f, p, u;
  if (!Ze)
    return;
  let l;
  if (!(e != null && e.domPrint)) {
    let v = ce(
      t.filter((k) => (k == null ? void 0 : k.key) || (k == null ? void 0 : k.children))
    );
    v[0].type === "selection" && v.shift(), v.length ? l = v.map(ea) : l = [];
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
const nl = {
  print: bi,
  init: gi
};
function ki(t = "", r = "", n = {}) {
  n.domPrint = !0, n.width || (n.width = 715), nl.print([], t, r, n);
}
function wi(t) {
  var i, s;
  const r = (...c) => Je.apply(this, c), n = r("r.closePreview"), e = r("r.fullImg");
  let l = "previewImg" + Math.floor(Math.random() * 1e7);
  (s = (i = Qe) == null ? void 0 : i.info) == null || s.call(i, {
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
            Ae(wa, {
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
  }), Pe(() => {
    var y, f, p, u, v, k;
    const c = (u = (p = (f = (y = document.getElementById(l)) == null ? void 0 : y.parentElement) == null ? void 0 : f.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : u.parentElement, o = (k = (v = document.getElementById(l)) == null ? void 0 : v.parentElement) == null ? void 0 : k.nextSibling;
    c && (c.style.height = "0"), c && (c.style.padding = "0"), o && (o.style.display = "none");
  }, 10);
}
const _i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: We,
  $swal: Ke,
  $swalConfirm: Kl,
  domPrint: ki,
  fullScreenImgByDom: mt,
  fullScreenImgPreview: wi,
  messageBox: Xt,
  setInterval: dn,
  setTimeout: Pe,
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
        let L = T.children[0].children[1], C = T.children[0].children[1].children[0], F = T.children[0].children[0].children[0].children[1];
        const P = 40, I = 70, h = (z) => {
          var b;
          if ((z == null ? void 0 : z.type) === "keyup") {
            let M = !1;
            if (z.key && (M = z.key !== "Enter"), M)
              return;
          }
          let D = (b = z == null ? void 0 : z.target) == null ? void 0 : b.value;
          if (D = Number(D), C.style && C.style.width === D + "px")
            return;
          const Y = w.clientWidth;
          D < 250 ? (D = 250, z.target.value = 250) : D > Y - P && (D = Y - P, z.target.value = Y - P), C.style.width = D + "px", localStorage.setItem("editorPreviewW", D);
        };
        F.addEventListener("blur", h), F.addEventListener("keyup", h);
        let B = T.children[0].children[0].children[0].children[3];
        const x = (z) => {
          var b;
          if ((z == null ? void 0 : z.type) === "keyup") {
            let M = !1;
            if (z.key && (M = z.key !== "Enter"), M)
              return;
          }
          let D = (b = z == null ? void 0 : z.target) == null ? void 0 : b.value;
          if (D = Number(D), L.style && L.style.height === D + "px")
            return;
          const Y = w.clientHeight;
          D < 300 ? (D = 300, z.target.value = 300) : D > Y - I && (D = Y - I, z.target.value = Y - I), L.style.height = D + "px", localStorage.setItem("editorPreviewH", D);
        };
        B.addEventListener("blur", x), B.addEventListener("keyup", x), T.children[0].children[0].children[1].addEventListener("click", () => {
          T.style.display = "none";
        }), C.innerHTML = c, C.style.width = i + "px", L.style.height = s + "px", w.append(T);
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
const Ei = Tt.use, Gi = Tt.i18n, Cl = {
  ..._i,
  ...nn
}, Vi = function(t, r = {}) {
  We.init(r.useStore || r.store, t), t.use(Ba), r.locale && Tt.use(r.locale), r.i18n && Tt.i18n(r.i18n), r.router && (un(r.router), nl.init(r.router)), r.amap && qn(r.amap), r.notRegistryGlobal || (Object.keys(Vl).forEach((n) => {
    t.component(n) || t.component(n, Vl[n]);
  }), Object.keys(Cl).forEach((n) => {
    t.config.globalProperties[n] = Cl[n];
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
  }), t.directive("clickOutside") || t.directive("clickOutside", Nl), t.config.globalProperties.fontSizeBase = 14, t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.btTablePageAlign = "center", t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !0, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, Hi = { install: Vi };
export {
  We as $fetch,
  Ke as $swal,
  Kl as $swalConfirm,
  ql as AlCascaderMC,
  jl as AsyncCascader,
  Jt as BtTablePage,
  Yo as CheckboxGroupThreeClass,
  zo as CheckboxGroupTwoClass,
  wo as CheckboxTree,
  Ql as Date,
  Zl as EditorPro,
  bo as FormGroup,
  ko as FormModal,
  It as FormR,
  Fa as FullPop,
  Il as HeaderBt,
  Na as Hello,
  zt as IconTxtBtn,
  Wl as InputMap,
  Yl as MonthRange,
  Ea as Page404,
  Gl as PagePro,
  Qt as SearchForm,
  Hl as SelectInput,
  ni as SelectScrollMore,
  jt as ShowHidePanel,
  Ln as ShowHidePanelB,
  fn as SideMenu,
  Sn as SideMenuPro,
  Dl as TableIconBtn,
  On as TableSearch,
  zl as TableSetting,
  Ro as TransferBox,
  Jl as UploadGroup,
  ai as WellCard,
  Et as clearObj,
  ln as dataFilterOrToUrl,
  Ja as decimalDigitsLimit,
  Hi as default,
  ki as domPrint,
  Rl as downloadFileByFormSubmit,
  $n as downloadFileReaderFile,
  zi as emptyInput,
  Mn as fakeALinkClick,
  Ya as fileExport,
  _t as findCollection,
  qt as findPath,
  ja as formDataHeadConfig,
  mt as fullScreenImgByDom,
  wi as fullScreenImgPreview,
  Qa as getColumnsKeys,
  hl as getFileSrc,
  Ul as getFileTypeByName,
  yl as getFileTypeIconByName,
  Fn as getStringWidth,
  Wa as has,
  ll as hasPermission,
  Ki as htmlDecode,
  Ni as htmlEncode,
  an as htmlPrint,
  Gi as i18n,
  Vi as install,
  Ut as isClient,
  en as isEmptyValue,
  ft as isImgByFile,
  Ml as isNaN,
  Za as isNumberValue,
  Ie as isValidValue,
  Ei as locale,
  Xt as messageBox,
  J as myTypeof,
  Xa as oneOf,
  Gt as removeEmptyValue,
  dn as setInterval,
  Pe as setTimeout,
  ot as setValByOption,
  qe as setValue,
  al as siblingElems,
  Ui as stopBubbling,
  tn as stringLength,
  nl as tablePrint,
  qa as toFormData,
  Rn as toHump,
  Pl as toLine,
  $l as tooltipManual,
  Bt as trimObj
};
//# sourceMappingURL=plugRQw.js.map
