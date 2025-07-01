import { all } from 'axios';
import type { App } from 'vue';
import type { AxiosInstance } from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import type { Placement } from 'popper.js';
import { PublicProps } from 'vue';
import type { Ref } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { spread } from 'axios';
import type { VNode } from 'vue';

/**
 * @description 基于axios封装的请求插件，引入库时使用this.$fetch时直接调用以下方法（选项式），例如：this.$fetch.get("/getData",{id:1})，
 * vue3的setup模式使用：proxy调用（更推荐单独引用：import {$fetch} from '@zhangqingcq/plug-r-qw'）
 * 单独引入时遵循Es Modules规范即可
 * @class
 */
export declare const $fetch: {
    /**
     * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
     * @function
     * @param {object} store 项目中vuex的store，或pinia的useStore
     * @param app 当前vue实例
     */
    init(store: any, app: any): void; /**
    * post 请求
    * @function
    * @param {string} url 请求地址
    * @param {object} data 请求数据
    * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传，例如：
    * @example this.$fetch.post("/getDataB",{name:'ricky'},"获取数据B失败")
    * @param {Array.<string>} rPath 请求结果提取路径，如：[data,list]表示data.list,如不需过滤可不传
    * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
    * @return {Promise<object>}
    * @example this.$fetch.post("/getData",{id:1},null,['result','list'])
    *  .then(r=>{
    *      console.log(r)
    *      r相当于:data.result.list,data是网络请求结果
    *  })
    *
    * 注意：
    *  请求最多支持5个入参，最少一个(url)，依次为：url,data,msg,rPath,config。如果要传靠后的入参，但不想传前面的，应该这样传：
    *  this.$fetch.post("/setData",{},null,[],{
    *     headers: {
    *         'Content-Type': 'multipart/form-data'
    *       },
    *       spin:true
    *   }
    *  )
    */
    post(url: string, data?: Collection, msg?: string | null, rPath?: string[], config?: RequestConfigR): Promise<unknown>; /**
    * put请求
    * @param {string} url 请求地址
    * @param {object} data 请求数据
    * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
    * @param {Array.<string>} rPath 请求结果提取路径
    * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
    * @return {Promise<unknown>}
    */
    put(url: string, data?: Collection, msg?: string | null, rPath?: string[], config?: RequestConfigR): Promise<unknown>; /**
    * get请求
    * @param {string} url 请求地址
    * @param {object} data 请求数据
    * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
    * @param {Array.<string>} rPath 请求结果提取路径
    * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
    * @return {Promise<unknown>}
    * PS: get请求时(delete请求同理)，可以把请求参数写在url里，也可以写在data里，注意写在data里时，data是对象
    * 以请求'/devices',找到id=2,name=meter举例：
    *  只传url时，url = '/devices?id=2&name=meter'
    *  url和data都传时,url = '/devices',data={id:2,name:'meter'}
    */
    get(url: string, data?: Collection, msg?: string | null, rPath?: string[], config?: RequestConfigR): Promise<unknown>; /**
    * delete 请求
    * @param {string} url 请求地址
    * @param {object} data 请求数据
    * @param {string} msg 错误信息，在控制台输出，方便调试，不用可以不传
    * @param {Array.<string>} rPath 请求结果提取路径
    * @param {object} config 请求配置  如请求过程需要遮罩层，设置 spin:true即可
    * @param isUrlData 传参模式 true:params,false:data
    * @return {Promise<unknown>}
    */
    delete(url: string, data?: Collection, msg?: string | null, rPath?: string[], config?: RequestConfigR, isUrlData?: boolean): Promise<unknown>; /**
    * 并发请求   例如：
    * @example this.$fetch.all(
    *  [
    *    this.$fetch.get("/getData"),
    *    this.$fetch.post("/getDataB",{name:'ricky'})
    *  ]
    * )
    */
    all: all; /**
    * 并发请求结果分离 例如：
    * @example this.$fetch.all(
    *  [
    *    this.$fetch.get("/getData"),
    *    this.$fetch.post("/getDataB",{name:'ricky'})
    *  ]
    * )
    *  .then(
    *    this.$fetch.spread((result1,result2)=>{
    *        console.log(result1,result2)
    *    })
    *   )
    */
    spread: spread; /**
    * 该请求插件暴露给外界的配置对象，为axios.create创建的实例对象，使用方法见axios官方网站
    */
    config: ServiceR;
};

/**
 * $swal实例
 * @param {object|string|boolean} option object:{title:'标题',content(or text):'内容，可以为空',type(or icon):'success(or error
 *   or warning)'}---string:'标题'---boolean:关闭$swal窗体
 * @param {string|HTMLElement} [text] 当option为object时不传此变量，当option为string时该变量为'内容'
 * @param {string} [icon] 当option为object时不传此变量，当option为string时该变量为弹出框类型'success'/'error'/'warning'
 * @param {boolean} [closeOnClickOutside] 点击外部关闭，默认：true
 */
export declare function $swal(this: any, option: string | {
    title?: string;
    content?: string;
    text?: string | HTMLElement;
    type?: string;
    icon?: string;
    onOk?: () => void;
    className?: string;
    buttons?: ButtonS | Array<string>;
    closeOnClickOutside?: boolean;
} | boolean, text?: string | HTMLElement, icon?: string, closeOnClickOutside?: boolean): Promise<unknown>;

/**
 * @description 提示框
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.05.09
 */
export declare function $swalConfirm(this: any, title: string, text: string, icon: string, onOk: () => void, closeOnClickOutside?: boolean): void;

declare const __VLS_component: DefineComponent<__VLS_Props, {
open: typeof open_2;
close: typeof close_2;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-open": (...args: any[]) => void;
"on-close": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
"onOn-open"?: ((...args: any[]) => any) | undefined;
"onOn-close"?: ((...args: any[]) => any) | undefined;
}>, {
headerFontSize: number | string;
zIndex: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_10: DefineComponent<__VLS_Props_24, {
resetForm: typeof resetForm_4;
refreshFormDom: typeof refreshFormDom_4;
reRenderForm: typeof reRenderForm_4;
setItemToValGroup: typeof setItemToValGroup_4;
updateValGroup: typeof updateValGroup_4;
updateFormDataT: typeof updateFormDataT_4;
validate: typeof validate_4;
reValidate: typeof reValidate_4;
changeLoading: typeof changeLoading_4;
getValGroup: typeof getValGroup_4;
submit: typeof submit_4;
open: typeof open_3;
close: typeof close_4;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-open": (...args: any[]) => void;
"on-close": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_24> & Readonly<{
"onOn-open"?: ((...args: any[]) => any) | undefined;
"onOn-close"?: ((...args: any[]) => any) | undefined;
}>, {
disabled: boolean;
width: number | string;
labelWidth: number;
formData: Array<FormItem | FormItem[]>;
btnLoading: boolean;
hideCancelBt: boolean;
hideFooter: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_11: DefineComponent<__VLS_Props_29, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props_29> & Readonly<{}>, {
height: number | string;
width: number | string;
inline: boolean;
fitToContent: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_2: DefineComponent<__VLS_Props_2, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_2> & Readonly<{
onClick?: ((...args: any[]) => any) | undefined;
}>, {
withIcon: boolean;
iconSize: number | string;
color: string;
borderColor: string;
disabled: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_3: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: boolean) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
"onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_4: DefineComponent<__VLS_Props_8, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_8> & Readonly<{
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
bg: string;
modelValue: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_5: DefineComponent<__VLS_Props_9, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (...args: any[]) => void;
"on-toggle": (...args: any[]) => void;
"on-search": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_9> & Readonly<{
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
"onOn-toggle"?: ((...args: any[]) => any) | undefined;
"onOn-search"?: ((...args: any[]) => any) | undefined;
}>, {
fixed: boolean;
open: boolean;
top: string | number;
right: string | number;
showBtn: boolean;
width: string | number;
btnColor: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_6: DefineComponent<__VLS_Props_11, {
dataS: globalThis.WritableComputedRef<(Record<string, any> & {
btKey: string;
btChecked: boolean;
})[], any>;
selectedIds: globalThis.ComputedRef<any[]>;
addRow: typeof addRow;
setRowData: typeof setRowData;
deleteRow: typeof deleteRow;
getSelected: typeof getSelected;
selectRow: typeof selectRow;
clearSelect: typeof clearSelect;
clearTableData: typeof clearTableData;
getTableData: typeof getTableData;
getDataAndClickRow: typeof getDataAndClickRow;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-selection-change": (...args: any[]) => void;
"on-data-change": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_11> & Readonly<{
"onOn-selection-change"?: ((...args: any[]) => any) | undefined;
"onOn-data-change"?: ((...args: any[]) => any) | undefined;
}>, {
data: any[];
url: string;
method: "get" | "post";
columns: Array<typeof TableColumnR>;
pageSize: number;
showTotal: boolean;
showSizer: boolean;
selection: boolean;
searchData: Record<string, any>;
radio: boolean;
selectionFixed: "left" | "right" | false;
rowClickSelect: boolean;
sortable: "custom" | "";
initData: boolean;
highlightRow: boolean;
rowClickNum: number;
tableEmptyTdHandle: boolean;
noBorderTable: boolean;
orderDefault: "asc" | "desc";
orderKey: string;
orderKeyFormat: "underline" | "camelcase";
getDataLoading: boolean;
showTopRow: boolean;
lightHead: boolean;
noPage: boolean;
usePagePro: boolean;
pageComponentSize: "small" | "default";
noElevator: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_7: DefineComponent<__VLS_Props_21, {
resetForm: typeof resetForm;
refreshFormDom: typeof refreshFormDom;
reRenderForm: typeof reRenderForm;
setItemToValGroup: typeof setItemToValGroup;
updateValGroup: typeof updateValGroup;
updateFormDataT: typeof updateFormDataT;
validate: typeof validate;
reValidate: typeof reValidate;
changeLoading: typeof changeLoading;
getValGroup: typeof getValGroup;
submit: typeof submit;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-item-change": (...args: any[]) => void;
"on-options-request-back": (...args: any[]) => void;
"on-reset": (...args: any[]) => void;
"on-re-render": (...args: any[]) => void;
"on-submit": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_21> & Readonly<{
"onOn-item-change"?: ((...args: any[]) => any) | undefined;
"onOn-options-request-back"?: ((...args: any[]) => any) | undefined;
"onOn-reset"?: ((...args: any[]) => any) | undefined;
"onOn-re-render"?: ((...args: any[]) => any) | undefined;
"onOn-submit"?: ((...args: any[]) => any) | undefined;
}>, {
disabled: boolean;
trim: boolean;
labelWidth: number;
itemWidth: number;
inline: boolean;
formData: Array<FormItem | FormItem[]>;
formRules: Record<string, any>;
showMessage: boolean;
contentWidth: string;
showLongOkBt: boolean;
showInlineOkBt: boolean;
showInlineClearBt: boolean;
btnLoading: boolean;
teamClass: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_8: DefineComponent<__VLS_Props_22, {
resetForm: typeof resetForm_2;
refreshFormDom: typeof refreshFormDom_2;
reRenderForm: typeof reRenderForm_2;
setItemToValGroup: typeof setItemToValGroup_2;
updateValGroup: typeof updateValGroup_2;
updateFormDataT: typeof updateFormDataT_2;
validate: typeof validate_2;
reValidate: typeof reValidate_2;
changeLoading: typeof changeLoading_2;
getValGroup: typeof getValGroup_2;
submit: typeof submit_2;
close: typeof close_3;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-cancel": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_22> & Readonly<{
"onOn-cancel"?: ((...args: any[]) => any) | undefined;
}>, {
disabled: boolean;
labelWidth: number;
itemWidth: number;
formData: Array<FormItem | FormItem[]>;
contentWidth: string;
btnLoading: boolean;
with: string;
showOkBt: boolean;
showCancelBt: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_9: DefineComponent<__VLS_Props_23, {
resetForm: typeof resetForm_3;
refreshFormDom: typeof refreshFormDom_3;
reRenderForm: typeof reRenderForm_3;
setItemToValGroup: typeof setItemToValGroup_3;
updateValGroup: typeof updateValGroup_3;
updateFormDataT: typeof updateFormDataT_3;
validate: typeof validate_3;
reValidate: typeof reValidate_3;
changeLoading: typeof changeLoading_3;
getValGroup: typeof getValGroup_3;
submit: typeof submit_3;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-search": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_23> & Readonly<{
"onOn-search"?: ((...args: any[]) => any) | undefined;
}>, {
labelWidth: number;
itemWidth: number;
formData: Array<FormItem | FormItem[]>;
showInlineOkBt: boolean;
showInlineClearBt: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare type __VLS_Props = {
    title?: string;
    headerColor?: string;
    headerBg?: string;
    headerFontSize?: number | string;
    zIndex?: number;
};

declare type __VLS_Props_10 = {
    modelValue?: any[];
    sKey: string;
    width?: string;
    bg?: string;
    placement?: Placement;
    defaultCheck?: boolean;
    storage?: 'localStorage' | 'sessionStorage';
    transfer?: boolean;
    eventsEnabled?: boolean;
};

declare type __VLS_Props_11 = {
    url?: string;
    method?: 'get' | 'post';
    searchData?: Record<string, any>;
    columns?: Array<typeof TableColumnR>;
    dataHandler?: (d: any) => {
        data: Record<string, any>;
        total: number;
        [k: keyof any]: any;
    };
    selection?: boolean;
    radio?: boolean;
    selectionFixed?: 'left' | 'right' | false;
    rowClickSelect?: boolean;
    data?: any[];
    sortable?: 'custom' | '';
    initData?: boolean;
    highlightRow?: boolean;
    rowClickNum?: number;
    tableEmptyTdHandle?: boolean;
    noBorderTable?: boolean;
    orderDefault?: 'asc' | 'desc';
    orderKey?: string;
    orderKeyFormat?: 'underline' | 'camelcase';
    getDataLoading?: boolean;
    showTopRow?: boolean;
    lightHead?: boolean;
    noPage?: boolean;
    usePagePro?: boolean;
    showTotal?: boolean;
    showSizer?: boolean;
    pageSize?: number;
    pageComponentSize?: 'small' | 'default';
    noElevator?: boolean;
};

declare type __VLS_Props_12 = {
    modelValue?: number;
    total?: number;
    pageSize?: number;
    size?: 'small' | 'default';
    pageSizeOpts?: number[];
    showTotal?: boolean;
    showSizer?: boolean;
    transfer?: boolean;
    disabled?: boolean;
};

declare type __VLS_Props_13 = {
    modelValue?: Record<string, any>;
    labelWidth?: number;
    labelTextAlign?: 'left' | 'center' | 'right';
    itemWidth?: number | string;
    selectOption?: any[];
    placeholder?: string;
    clearable?: boolean;
    disabled?: boolean;
};

declare type __VLS_Props_14 = {
    modelValue?: Record<string, any>;
    width?: string | number;
    height?: string | number;
    placeholder?: string;
    disabled?: boolean;
    showMap?: boolean;
};

declare type __VLS_Props_15 = {
    modelValue?: any[] | number | string;
    url?: string;
    optionVal?: string;
    optionLabel?: string;
    optionFilter?: <T>(d: T[]) => T[];
    separator?: string;
    onlyLastVal?: boolean;
    onlyLastLabel?: boolean;
    filterable?: boolean;
    placeholder?: string;
    disabled?: boolean;
};

declare type __VLS_Props_16 = {
    modelValue?: string | number | any[] | null;
    level?: 0 | 1 | 2 | '0' | '1' | '2';
    disabled?: boolean;
    transfer?: boolean;
    filterable?: boolean;
    separator?: string;
    placeholder?: string;
};

declare type __VLS_Props_17 = {
    modelValue?: number | string | File | any[];
    url?: string;
    data?: Record<string, any>;
    manualUpload?: boolean;
    maxSize?: number;
    length?: number;
    showUploadList?: boolean;
    withCredentials?: boolean;
    multiple?: boolean;
    format?: string[];
    showImg?: boolean;
    disabled?: boolean;
};

declare type __VLS_Props_18 = {
    modelValue?: string[];
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
    placeholder?: string;
    options1?: Record<string, any>;
    options2?: Record<string, any>;
    disabled?: boolean;
};

declare type __VLS_Props_19 = {
    modelValue?: string | any[] | Date;
    type?: 'date' | 'daterange' | 'datetime' | 'datetimerange' | 'year' | 'month';
    options?: Record<string, any>;
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
    placeholder?: string;
    clearable?: boolean;
    disabled?: boolean;
};

declare type __VLS_Props_2 = {
    icon?: string;
    withIcon?: boolean;
    iconSize?: number | string;
    color?: string;
    borderColor?: string;
    disabled?: boolean;
};

declare type __VLS_Props_20 = {
    modelValue?: string;
    toolbarConfig?: Record<string, any>;
    editorConfig?: Record<string, any>;
    mode?: 'default' | 'simple';
    height?: string | number;
    imgUploadUrl?: string;
    videoUploadUrl?: string;
    placeholder?: string;
    disabled?: boolean;
};

declare type __VLS_Props_21 = {
    formData?: Array<FormItem | FormItem[]>;
    formRules?: Record<string, any>;
    showMessage?: boolean;
    labelWidth?: number;
    contentWidth?: string;
    itemWidth?: number;
    inline?: boolean;
    showLongOkBt?: boolean;
    longOkBtTxt?: string;
    showInlineOkBt?: boolean;
    inlineOkBtTxt?: string;
    showInlineClearBt?: boolean;
    inlineClearBtTxt?: string;
    disabled?: boolean;
    btnLoading?: boolean;
    trim?: boolean;
    teamClass?: string;
};

declare type __VLS_Props_22 = {
    formData?: Array<FormItem | FormItem[]>;
    with?: string;
    labelWidth?: number;
    contentWidth?: string;
    itemWidth?: number;
    showOkBt?: boolean;
    showCancelBt?: boolean;
    okBtTxt?: string;
    cancelBtTxt?: string;
    btnLoading?: boolean;
    disabled?: boolean;
};

declare type __VLS_Props_23 = {
    formData?: Array<FormItem | FormItem[]>;
    labelWidth?: number;
    itemWidth?: number;
    showInlineOkBt?: boolean;
    showInlineClearBt?: boolean;
};

declare type __VLS_Props_24 = {
    title?: string;
    formData?: Array<FormItem | FormItem[]>;
    width?: number | string;
    labelWidth?: number;
    okBtTxt?: string;
    cancelBtTxt?: string;
    hideCancelBt?: boolean;
    hideFooter?: boolean;
    btnLoading?: boolean;
    disabled?: boolean;
};

declare type __VLS_Props_25 = {
    modelValue?: any[];
    data?: any[];
    expandAll?: boolean;
    label?: string;
    collectVal?: string | string[];
    leaf?: boolean;
    inlineLeaf?: boolean;
    disabled?: boolean;
};

declare type __VLS_Props_26 = {
    titleLeft?: string;
    titleRight?: string;
    formDataLeft?: any[];
    formDataRight?: any[];
    formRulesLeft?: Record<string, any>;
    formRulesRight?: Record<string, any>;
    constSearchDataLeft?: Record<string, any>;
    constSearchDataRight?: Record<string, any>;
    leftTableColumns?: any[];
    rightTableColumns?: any[];
    leftTableUrl?: string;
    rightTableUrl?: string;
    addUrl?: string;
    deleteUrl?: string;
    addAllUrl?: string;
    deleteAllUrl?: string;
    addParamsHandle?: (d: any) => any;
    deleteParamsHandle?: (d: any) => any;
    addAllParamsHandle?: (d: any) => any;
    deleteAllParamsHandle?: (d: any) => any;
    addMethod?: 'post' | 'put' | 'get';
    addAllMethod?: 'post' | 'put' | 'get';
    deleteMethod?: 'delete' | 'post' | 'put' | 'get';
    deleteAllMethod?: 'delete' | 'post' | 'put' | 'get';
    searchFormLabelWith?: number;
    usePagePro?: boolean;
    showTotal?: boolean;
    showSizer?: boolean;
    leftSearchDataFilter?: (d: any) => any;
    rightSearchDataFilter?: (d: any) => any;
};

declare type __VLS_Props_27 = {
    modelValue?: any[];
    data?: TreeNode[];
    firstTitle?: string;
    secondTitle?: string;
    label?: string;
    collectVal?: string | string[];
    leaf?: boolean;
    disabled?: boolean;
};

declare type __VLS_Props_28 = {
    modelValue?: any[];
    data?: TreeNode[];
    firstTitle?: string;
    secondTitle?: string;
    thirdTitle?: string;
    label?: string;
    collectVal?: string | string[];
    leaf?: boolean;
    disabled?: boolean;
};

declare type __VLS_Props_29 = {
    title?: string;
    fitToContent?: boolean;
    width?: number | string;
    height?: number | string;
    inline?: boolean;
};

declare type __VLS_Props_3 = {
    name: string;
    icon?: string;
    size?: number;
    disabled?: boolean;
    has?: string;
};

declare type __VLS_Props_30 = {
    modelValue?: string | number | any[];
    url: string;
    searchData?: Record<string, any>;
    getOptions?: boolean;
    optionFilter?: (d: any) => any;
    optionsLabelKey?: string | string[];
    optionsValKey?: string;
    searchKey?: string;
    searchWordsRequired?: boolean;
    collectLabel?: boolean;
    placeholder?: string;
    disabled?: boolean;
};

declare type __VLS_Props_4 = {
    data?: any[];
    light?: boolean;
};

declare type __VLS_Props_5 = {
    data?: any[];
    light?: boolean;
};

declare type __VLS_Props_6 = {
    icon?: string;
    title?: string;
    has?: string;
    disabled?: boolean;
    size?: number;
};

declare type __VLS_Props_7 = {
    bg?: string;
};

declare type __VLS_Props_8 = {
    modelValue?: boolean;
    bg?: string;
};

declare type __VLS_Props_9 = {
    modelValue: string;
    open: boolean;
    placeholder?: string;
    showBtn?: boolean;
    fixed?: boolean;
    width?: string | number;
    right?: string | number;
    top?: string | number;
    btnColor?: string;
};

declare type __VLS_PublicProps = __VLS_Props_7 & {
    modelValue?: boolean;
};

declare type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};

declare type __VLS_Slots_10 = {} & {
    [K in NonNullable<typeof __VLS_20>]?: (props: typeof __VLS_21) => any;
};

declare type __VLS_Slots_11 = {} & {
    bts?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_3) => any;
} & {
    default?: (props: typeof __VLS_5) => any;
};

declare type __VLS_Slots_2 = {} & {
    default?: (props: typeof __VLS_5) => any;
};

declare type __VLS_Slots_3 = {} & {
    default?: (props: typeof __VLS_1) => any;
};

declare type __VLS_Slots_4 = {} & {
    default?: (props: typeof __VLS_1) => any;
};

declare type __VLS_Slots_5 = {} & {
    default?: (props: typeof __VLS_1) => any;
};

declare type __VLS_Slots_6 = {} & {
    tableSetting?: (props: typeof __VLS_1) => any;
} & {
    topMsg?: (props: typeof __VLS_3) => any;
} & {
    topBtnGroup?: (props: typeof __VLS_5) => any;
};

declare type __VLS_Slots_7 = {} & {
    [K in NonNullable<typeof __VLS_24>]?: (props: typeof __VLS_25) => any;
} & {
    [K in NonNullable<typeof __VLS_40>]?: (props: typeof __VLS_41) => any;
};

declare type __VLS_Slots_8 = {} & {
    [K in NonNullable<typeof __VLS_11>]?: (props: typeof __VLS_12) => any;
};

declare type __VLS_Slots_9 = {} & {
    [K in NonNullable<typeof __VLS_11>]?: (props: typeof __VLS_12) => any;
};

declare type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithSlots_10<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithSlots_11<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithSlots_5<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithSlots_6<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithSlots_7<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithSlots_8<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithSlots_9<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare function addRow(row: Record<string, any>): void;

export declare const AlCascaderMC: DefineComponent<__VLS_Props_16, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (...args: any[]) => void;
"on-name-change": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_16> & Readonly<{
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
"onOn-name-change"?: ((...args: any[]) => any) | undefined;
}>, {
disabled: boolean;
transfer: boolean;
filterable: boolean;
level: 0 | 1 | 2 | "0" | "1" | "2";
separator: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare const AsyncCascader: DefineComponent<__VLS_Props_15, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (...args: any[]) => void;
"on-label-change": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_15> & Readonly<{
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
"onOn-label-change"?: ((...args: any[]) => any) | undefined;
}>, {
disabled: boolean;
filterable: boolean;
placeholder: string;
onlyLastLabel: boolean;
optionLabel: string;
optionVal: string;
separator: string;
url: string;
onlyLastVal: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare const BtTablePage: __VLS_WithSlots_6<typeof __VLS_component_6, __VLS_Slots_6>;

/**
 * @description 提示框
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.05.08
 */
declare type ButtonC = {
    text?: string;
    className?: string;
    value?: boolean | null;
    visible?: boolean;
};

declare type ButtonS = {
    cancel: ButtonC;
    confirm: ButtonC;
};

declare function changeLoading(v: any): void;

declare function changeLoading_2(val: any): void;

declare function changeLoading_3(val: any): void;

declare function changeLoading_4(val: any): void;

export declare const CheckboxGroupThreeClass: DefineComponent<__VLS_Props_28, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-change": (...args: any[]) => void;
"update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_28> & Readonly<{
"onOn-change"?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
disabled: boolean;
data: TreeNode[];
label: string;
modelValue: any[];
collectVal: string | string[];
leaf: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare const CheckboxGroupTwoClass: DefineComponent<__VLS_Props_27, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-change": (...args: any[]) => void;
"update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_27> & Readonly<{
"onOn-change"?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
data: TreeNode[];
label: string;
modelValue: any[];
collectVal: string | string[];
leaf: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare const CheckboxTree: DefineComponent<__VLS_Props_25, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-change": (...args: any[]) => void;
"update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_25> & Readonly<{
"onOn-change"?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
disabled: boolean;
data: any[];
label: string;
modelValue: any[];
expandAll: boolean;
collectVal: string | string[];
leaf: boolean;
inlineLeaf: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

/**
 * 清空集合
 * @param val 被清空的集合
 * @param ignoreList 不需要清理的字段集合
 * @return *
 */
export declare function clearObj(val: Collection, ignoreList?: Array<keyof Collection | never>): Collection;

declare function clearSelect(): void;

declare function clearTableData(): void;

declare function close_2(getData?: boolean): void;

declare function close_3(): void;

declare function close_4(): void;

declare type Collection = PlainObject | PlainObject[];

/**
 *过滤对象属性或者将对象转换成url的query字符串
 * @param {Object} data 需要处理的对象
 * @param {Boolean} toUrl 是否需要转换成url，为false时可以不传
 * @param {Boolean} keepEmptyVal 是否保留空值（用于接口置空某个字段），为false时可以不传
 * @returns {*}
 * 注意：当toUrl=false且keepEmptyVal=true时，两个参数都传比较好
 */
export declare function dataFilterOrToUrl(data: PlainObject, toUrl?: boolean, keepEmptyVal?: boolean): string | PlainObject;

declare const Date_2: DefineComponent<__VLS_Props_19, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_19> & Readonly<{
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
disabled: boolean;
type: "date" | "daterange" | "datetime" | "datetimerange" | "year" | "month";
clearable: boolean;
options: Record<string, any>;
placement: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end";
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export { Date_2 as Date }

/**
 * 小数位数限制，超出会返回被去掉后的值
 * @param val 原来的值
 * @param num 小数点后的位数，默认：2
 * @return {number|*}
 */
export declare function decimalDigitsLimit(val: number | string, num?: number): string | number;

declare function deleteRow(index: number): void;

/**
 * @description 打印Dom(网页指定的内容)
 * @param {String} data 要打印的dom数据，一般使用dom操作获取dom，然后将其outerHTML作为data传进去就行
 * @param {String} title 标题(如打印为PDF将是默认文件名)
 * @param {Object} config 打印设置，目前支持：1.customClass,用于定制打印页面样式；2.autoPrint,是否直接打印；3.width,dom容器宽度（打印内容将放在这个容器进行打印）
 * 注意：
 * 1.data只是dom,要打印出带样式的dom，需要将要打印的dom相关样式设置成全局样式，而且这些样式无需进入调用打印的页面即可生效。
 * 2.不要限制要打印的dom的高度（实在需要限制可在原来的页面写成局部样式，不要影响打印页面高度），否则无法正常分页打印出全部内容。
 */
export declare function domPrint(data?: string, title?: string, config?: Record<string, any>): void;

export declare function downloadFileByFormSubmit(url: string, data?: PlainObject, method?: string): void;

export declare function downloadFileReaderFile(name: string, href: string): void;

export declare const EditorPro: DefineComponent<__VLS_Props_20, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-change": (...args: any[]) => void;
"update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_20> & Readonly<{
"onOn-change"?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
disabled: boolean;
mode: "default" | "simple";
placeholder: string;
editorConfig: Record<string, any>;
height: string | number;
toolbarConfig: Record<string, any>;
modelValue: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

/**
 * 如果值为''则将其替换为null
 * @param val 被替换的值
 * @returns {*}
 */
export declare function emptyInput(val: any): any;

export declare function fakeALinkClick(obj: Record<string, any>): void;

/**
 * 文件导出功能（调用文件下载方法downloadFileByFormSubmit）
 * @param url 导出路径
 * @param data 参数
 * @param method 请求方式
 */
export declare function fileExport(this: any, url: string, data?: PlainObject, method?: string): void;

/**
 * 在目标集合中按条件查找或直接查找，返回第一个满足条件的元素或路径
 * 与findPath不同，这里的路径是完整路径（findPath省略了一些标准结构中间路径），找不到返回：false
 * @param {array|object} group 被查找的集合
 * @param {Function|string|number|boolean} condition 查找的条件或值
 * @param {boolean} [getPath] 是否返回路径，默认为：false，返回找到的元素
 */
export declare function findCollection(group: Collection, condition: PredicateFunc | string | number | boolean, getPath?: boolean): any;

/**
 * 按条件查找一个元素在集合中的位置（路径），返回找到的第一个符合条件的位置
 * 仅适用于[{children:[{...},...],...},...]类似树结构集合（最外层也可以是一个对象）或一维数组
 * @param  {Object} option 参数
 * @param {Array|Object} option.group - 集合，被查找的集合，必填
 * @param {Function|String|Number|Boolean} option.condition - 查找条件，为常量时，将常量和集合元素直接对比，必填
 * @param {String} option.pathKey - 查找结果（路径）元素在集合中的key，在集合为数组时，可以不填，返回index（索引）
 * @param {String} option.childKey - 集合子元素的key，默认值 children
 * @param {Array} option.path - 递归用参数，逻辑内部参数，不用传
 * @return {Array} 返回带有路径（层级）信息的数组
 * @example group: {id:1,name:'爸爸',children:[{id:2,name:'大儿子'},{id:3,name:'二儿子'}]}
 *          condition: e=>e?.id === 3
 *          pathKey: 'name'
 *          childKey: 'children'
 *
 *          返回：['爸爸','二儿子']
 */
export declare function findPath({ group, condition, pathKey, childKey, path }: {
    group: Collection;
    condition: (item: any) => boolean;
    pathKey?: any;
    childKey?: any;
    path?: string[];
}): Array<string | number>;

export declare const formDataHeadConfig: {
    headers: {
        'Content-Type': string;
    };
};

export declare const FormGroup: __VLS_WithSlots_8<typeof __VLS_component_8, __VLS_Slots_8>;

declare interface FormItem {
    activeChange?: boolean;
    addTime?: boolean;
    append?: string;
    asyncOption?: boolean;
    autoSize?: boolean | {
        minRows?: number;
        maxRows?: number;
    };
    booleanVal?: boolean;
    borrowOption?: string;
    buttonType?: boolean;
    changeOnSelect?: boolean;
    changeOption?: boolean | {
        valKey: string;
        key: string;
    } | {
        valKey: string;
        key: string;
        notRequired?: boolean;
    }[];
    class?: string;
    clearable?: boolean;
    collectLabel?: {
        valKey: string;
        key: string;
    } | {
        valKey: string;
        key: string;
    }[];
    data?: object;
    dateType?: string;
    dateOption?: object;
    defaultVal?: any;
    defaultVal2?: any;
    disabled?: boolean;
    disabledOptionByOthers?: string | string[];
    editable?: boolean;
    editorConfig?: object;
    filterable?: boolean;
    format?: string | string[];
    height?: number | string;
    icon?: string;
    itemBorder?: boolean;
    key?: string;
    key2?: string;
    label?: string;
    length?: number;
    level?: number;
    likeInput?: boolean;
    localOption?: any[];
    manualUpload?: boolean;
    mapHeight?: string;
    max?: number;
    maxLength?: number;
    maxSize?: number;
    min?: number;
    mode?: string;
    multiple?: boolean;
    numberVal?: boolean;
    onlyLasVal?: boolean;
    onlyLastLabel?: boolean;
    options?: Option_2[] | Ref<Option_2[]>;
    optionFilter?: <T>(d: T) => T;
    optionLabel?: string | string[];
    optionUrl?: string;
    optionVal?: string;
    password?: boolean;
    placeholder?: string;
    precision?: number;
    prefix?: string;
    prepend?: string;
    readonly?: boolean;
    separator?: string;
    show?: {
        key: string;
        val: any[];
    } | {
        key: string;
        val: any[];
    }[] | showFunc;
    showImg?: boolean;
    showMap?: boolean;
    showOr?: boolean;
    showWodLimit?: boolean;
    slotName?: string;
    slotPosition?: string;
    step?: number;
    steps?: number[];
    suffix?: string;
    title?: string;
    toolbarConfig?: object;
    type: string;
    url?: string;
    val?: any;
    valKey?: string;
    withCredentials?: boolean;
    uploadImgMaxSize?: number;
    uploadImgMaxLength?: number;
    uploadImgShowBase64?: boolean;
    [x: string]: any;
}

export declare const FormModal: __VLS_WithSlots_10<typeof __VLS_component_10, __VLS_Slots_10>;

export declare const FormR: __VLS_WithSlots_7<typeof __VLS_component_7, __VLS_Slots_7>;

export declare const FullPop: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;

/**
 * @description 全屏预览，原生dom技术
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.08.23
 */
/**
 * 全屏图片预览，支持单张图片预览，或多张图片轮播
 * @param {string|Array<string>|Array<Record<string,any>>} src 图片地址，或者地址组成的数组，或包含地址src和名字name的对象组成的数组
 * @param {number} index src为数组时默认展示图的索引值，默认：0
 */
export declare function fullScreenImgByDom(this: any, src: any, index?: number): void;

/**
 * @description 全屏预览
 * @author ricky zhangqingcq@foxmail.com
 * @created 2023.08.24
 * 注意：不能全局调整Modal弹框尺寸，否则预览图片可能不居中，推荐使用另一个插件fullScreenImgByDom
 */
export declare function fullScreenImgPreview(this: any, src: string): void;

/**
 * 依据列显示设置缓存获取columns的key的集合
 * @param {String} sKey - 列显示设置插件的sKey
 * @param {Array} columns - 表格table的columns
 * @param {Boolean} returnArray - 是否返回数组，默认值false,返回String
 * */
export declare function getColumnsKeys(sKey: string, columns: any[], returnArray?: boolean): string | string[];

declare function getDataAndClickRow(clickCurrentRow?: boolean, order?: string, orderKey?: string): void;

export declare function getFileSrc(file: File): Promise<unknown>;

export declare function getFileTypeByName(name: string): string;

export declare function getFileTypeIconByName(name: string): string;

declare function getSelected(): Record<string, any>[];

export declare function getStringWidth(str: string, fontSize?: number): number;

declare function getTableData(order?: string, orderKey?: string, keepSelect?: boolean): Promise<unknown>;

/**
 * 获取需要提交的数据(私有)
 */
declare function getValGroup(): Record<string, any>;

declare function getValGroup_2(): any;

declare function getValGroup_3(): any;

declare function getValGroup_4(): any;

export declare function has(v: string): {
    style: {
        display: string;
    };
};

/**
 * 是否有该权限，用于权限管理
 * @param {String} value 权限代码
 * @returns {boolean}
 */
export declare function hasPermission(value: string): boolean;

export declare const HeaderBt: __VLS_WithSlots_2<typeof __VLS_component_2, __VLS_Slots_2>;

export declare const Hello: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare function htmlDecode(html: string): string | null;

export declare function htmlEncode(text: string): string | HTMLElement;

/**
 *打印页面，根据后端所传递的数据生成
 * @param data
 * @return {Promise<any>}
 */
export declare function htmlPrint(data: string): void;

export declare const i18n: (initI18n: Record<keyof any, any>) => void;

export declare const IconTxtBtn: DefineComponent<__VLS_Props_3, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_3> & Readonly<{
onClick?: ((...args: any[]) => any) | undefined;
}>, {
icon: string;
disabled: boolean;
size: number;
has: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare function init(router: any): void;

export declare const InputMap: DefineComponent<__VLS_Props_14, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-change": (...args: any[]) => void;
"update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_14> & Readonly<{
"onOn-change"?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
disabled: boolean;
showMap: boolean;
modelValue: Record<string, any>;
width: string | number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare const install: (app: App, options?: plugROption) => void;

export declare const isClient: boolean;

export declare function isEmptyValue(data: Collection): boolean;

export declare function isImgByFile(type: string): boolean;

/**
 * 判断一个变量是否是NaN
 * @param v 变量
 * @returns {boolean}
 */
declare function isNaN_2(v: any): boolean;
export { isNaN_2 as isNaN }

export declare function isNumberValue(val: any): boolean;

/**
 * 判断一个值是否为有效值，有效值：不为空即为有效
 * @param val 需要判断的值
 * @returns {boolean}
 */
export declare function isValidValue(val: any): boolean;

export declare const locale: (l: Record<keyof any, any>) => void;

/**
 * 对话框
 * @param {object} options 对话框配置
 * @param {string|VNode|Function} options.content 提示框内容，必填，传`''`触发默认值，1.string，直接将文字插入对应位置；
 * 2.VNode，如：h('div',{style:{color:'red'}},'123')；注意此处h是vue的渲染函数，需要引入：import {h} from 'vue'
 * 3.Function,如：(_h)=>_h('div',{class:'my-class'},'123')；此处_h作为参数，不需要单独引入
 * @param {number} [options.height] 弹框高度,默认值130,最小值130
 * @param {number} [options.width] 弹框宽度，默认值416,最小值416
 * @param {string} [options.title] 弹框标题内容，默认值“提示”
 * @param {Function} [options.onOk] 确定按钮回调函数
 * @param {Function} [options.onCancel] 取消按钮回调函数
 * @param {Function} [options.onClose] 关闭（右上角叉叉）按钮回调函数
 * @param {string} [options.okText] 确定按钮文字，默认值“确定”
 * @param {string} [options.cancelText] 取消按钮文字，默认值“取消”
 * @param {boolean} [options.noWarnIcon] 不展示内容开头的警告图标(非字符串内容默认不展示)，默认值“false”
 * @param {string} [options.footerAlign] 底部对齐方式，string，默认值“center”
 * @param {boolean} [options.cancelBt] 展示取消按钮，boolean，默认值“true”
 * 组件中调用示例：this.messageBox({
 *                      content:'确定执行操作？'
 *                    })
 */
export declare function messageBox(this: any, { height, width, title, content, onOk, onCancel, onClose, okText, cancelText, noWarnIcon, footerAlign, cancelBt }: {
    height?: number;
    width?: number;
    title?: string;
    content: string | VNode | RenderFunc;
    onOk?: () => void | Promise<any>;
    onCancel?: () => void;
    onClose?: () => void;
    okText?: string;
    cancelText?: string;
    noWarnIcon?: boolean;
    footerAlign?: string;
    cancelBt?: boolean;
}): void;

export declare const MonthRange: DefineComponent<__VLS_Props_18, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-change": (...args: any[]) => void;
"update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_18> & Readonly<{
"onOn-change"?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
disabled: boolean;
placement: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end";
modelValue: string[];
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare function myTypeof(v: any): string;

export declare function oneOf(value: any, validList: any[]): boolean;

declare function open_2(): void;

declare function open_3(): void;

declare interface Option_2 {
    label?: string;
    val?: string | number;
    icon?: string;
    disabled?: boolean;
    [x: string]: any;
}

export declare const Page404: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const PagePro: DefineComponent<__VLS_Props_12, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-change": (...args: any[]) => void;
"update:modelValue": (...args: any[]) => void;
"on-page-size-change": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_12> & Readonly<{
"onOn-change"?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
"onOn-page-size-change"?: ((...args: any[]) => any) | undefined;
}>, {
disabled: boolean;
size: "small" | "default";
transfer: boolean;
modelValue: number;
total: number;
pageSize: number;
pageSizeOpts: number[];
showTotal: boolean;
showSizer: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare interface PlainObject extends Object {
    [k: keyof any]: any;
}

export declare interface plugROption {
    notRegistryGlobal?: boolean;
    store?: any;
    useStore?: any;
    router?: Record<keyof any, any>;
    locale?: Record<keyof any, any>;
    i18n?: Record<keyof any, any>;
    amap?: {
        securityJsCode: string;
        key: string;
    };
    [k: keyof any]: any;
}

declare const plugRQw: {
    install: (app: App, options?: plugROption) => void;
};
export default plugRQw;

declare type PredicateFunc = (d: any) => boolean;

/**
 * 供外部使用的打印API
 * @param {Array} columns Table的列设置，同view-design
 * @param {Array|String} data Table的数据
 * @param {String} title 标题(如打印为PDF将是默认文件名)
 * @param {Object} config 打印设置，目前支持：
 * 1.customClass,用于定制打印页面样式；
 * 2.autoPrint,是否直接打印；
 * 3.autoPrintTimeout,直接打印延时（给网页内容加载时间），默认：100ms
 * 4.spanMethod,用于打印表格时传递表格‘行合并’或‘列合并’回调函数，回调函数使用方法见view-design的Table的span-method属性，或是参考本库示例btTablePageEX中打印功能示例
 */
declare function print_2(columns: any[], data: any[] | string, title?: string, config?: Record<string, any>): void;

declare function refreshFormDom(): Promise<unknown>;

declare function refreshFormDom_2(): Promise<unknown>;

declare function refreshFormDom_3(): Promise<unknown>;

declare function refreshFormDom_4(): Promise<unknown>;

export declare function removeEmptyValue(data: Collection): Collection;

declare type RenderFunc = (h: any) => VNode;

declare interface RequestConfigR extends AxiosRequestConfig {
    spin?: boolean;
    noEmptyStr?: boolean;
}

declare function reRenderForm(): Promise<unknown>;

declare function reRenderForm_2(): Promise<unknown>;

declare function reRenderForm_3(): Promise<unknown>;

declare function reRenderForm_4(): Promise<unknown>;

declare function reset(): void;

declare function resetForm(): Promise<unknown>;

declare function resetForm_2(): Promise<unknown>;

declare function resetForm_3(): Promise<unknown>;

declare function resetForm_4(): Promise<unknown>;

/**
 * 手动验证表单项（公开）
 * @param prop 需要校验的表单项(rules中对应的key)
 */
declare function reValidate(prop: any): void;

declare function reValidate_2(prop: any): void;

declare function reValidate_3(prop: any): void;

declare function reValidate_4(prop: any): void;

declare function search(): void;

export declare const SearchForm: __VLS_WithSlots_9<typeof __VLS_component_9, __VLS_Slots_9>;

export declare const SelectInput: DefineComponent<__VLS_Props_13, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-change": (...args: any[]) => void;
"update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_13> & Readonly<{
"onOn-change"?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
disabled: boolean;
clearable: boolean;
modelValue: Record<string, any>;
labelWidth: number;
labelTextAlign: "left" | "center" | "right";
itemWidth: number | string;
selectOption: any[];
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

/**
 * 主动选中行（公开）多选、单选模式皆可用
 * @param {Number|Array|Function} predicate 断言,选中的条件：
 * 1. Number:根据索引index选中行
 * 2. Array:根据索引index数组选中行(仅多选)
 * 3. Function:根据断言函数返回true的行选中
 */
declare function selectRow(predicate: number | number[] | PredicateFunc): void;

export declare const SelectScrollMore: DefineComponent<__VLS_Props_30, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-change": (...args: any[]) => void;
"update:modelValue": (...args: any[]) => void;
"update-option-finish": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_30> & Readonly<{
"onOn-change"?: ((...args: any[]) => any) | undefined;
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
"onUpdate-option-finish"?: ((...args: any[]) => any) | undefined;
}>, {
disabled: boolean;
collectLabel: boolean;
searchData: Record<string, any>;
getOptions: boolean;
optionsLabelKey: string | string[];
optionsValKey: string;
searchKey: string;
searchWordsRequired: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare interface ServiceR extends AxiosInstance {
    store?: any;
}

declare const setInterval_2: (fn: () => void, time: number) => number;
export { setInterval_2 as setInterval }

declare function setItemToValGroup(data: Record<string, any>, notClearOthers?: boolean): void;

declare function setItemToValGroup_2(data: Record<string, any>, notClearOthers: boolean): void;

declare function setItemToValGroup_3(data: Record<string, any>, notClearOthers: boolean): void;

declare function setItemToValGroup_4(data: Record<string, any>, notClearOthers: boolean): void;

/**
 * 更新行数据（公开）
 * @param {object} row 新的行数据（只更新旧数据和新数据都有的字段，如想更新的其中一个字段为row.name，那么旧row数据需要有name这个字段）
 * @param {number|boolean} setCurrentRow 1.数字，行在表数据中的index；2.布尔值，更新当前行
 * @param {boolean} clickCurrentRow 更新完数据点击更新的行
 */
declare function setRowData(row: Record<string, any>, setCurrentRow: boolean | number, clickCurrentRow: boolean): void;

declare const setTimeout_2: (fn: () => void, time: number) => number;
export { setTimeout_2 as setTimeout }

/**
 * 按条件设置集合中指定字段的值
 * @param {Object} option
 * @param {Array} option.group 目标集合
 * @param {Function} option.condition 匹配条件
 * @param {String} option.key 要设置的字段键名
 * @param  option.val 要设置的字段的值，或处理逻辑
 * @param {String} option.childKey 子集键名
 */
export declare function setValByOption({ group, condition, key, val, childKey }: {
    group: Collection;
    condition: (item: any) => boolean;
    key: string;
    val: any;
    childKey?: string;
}): false | undefined;

export declare function setValue(target: any, key: string, value: any): void;

declare type showFunc = (valGroup: Record<string, any>) => boolean;

export declare const ShowHidePanel: __VLS_WithSlots_3<typeof __VLS_component_3, __VLS_Slots_3>;

export declare const ShowHidePanelB: __VLS_WithSlots_4<typeof __VLS_component_4, __VLS_Slots_4>;

/**
 * 查找dom元素所有兄弟
 * @param elem - 被查找的元素
 */
export declare function siblingElems(elem: ChildNode): any[];

export declare const SideMenu: DefineComponent<__VLS_Props_4, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-change": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_4> & Readonly<{
"onOn-change"?: ((...args: any[]) => any) | undefined;
}>, {
data: any[];
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare const SideMenuPro: DefineComponent<__VLS_Props_5, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"on-change": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_5> & Readonly<{
"onOn-change"?: ((...args: any[]) => any) | undefined;
}>, {
data: any[];
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare function stopBubbling(e: any): void;

export declare function stringLength(str: string): number;

declare function submit(): void;

declare function submit_2(): void;

declare function submit_3(): void;

declare function submit_4(): void;

declare const TableColumnR: {
    type?: "index" | "selection" | "expand" | "html";
    title?: string;
    key?: string;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    align?: "left" | "right" | "center";
    className?: string;
    fixed?: "left" | "right";
    ellipsis?: boolean;
    tooltip?: boolean;
    tooltipTheme?: string;
    tooltipMaxWidth?: number;
    render?: Function;
    renderHeader?: Function;
    indexMethod?: Function;
    sortable?: boolean | "custom";
    sortMethod?: Function;
    sortType?: "asc" | "desc";
    filters?: any[];
    filterMethod?: Function;
    filterMultiple?: boolean;
    filteredValue?: any[];
    filterRemote?: Function;
    children?: any[];
    resizable?: boolean;
    tree?: boolean;
    display?: string;
    showSettingCheck?: boolean;
    disableShowSetting?: boolean;
};

export declare const TableIconBtn: DefineComponent<__VLS_Props_6, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_6> & Readonly<{
onClick?: ((...args: any[]) => any) | undefined;
}>, {
icon: string;
disabled: boolean;
size: number;
has: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

/**
 * @created 2024.03.14
 * @author Ricky email:zhangqingcq@foxmail.com
 * @description 表格打印，可以在预览页面调整每列宽度以及可以选择打印的列
 * 注意：1.该插件依赖于vue-router，需要在安装库时传入router，详见该库使用说明文档；
 * 2.打印时会新开一个浏览器窗口，路由为'/tablePrint'，该路由页面需要铺满浏览器窗口，即该路由所在的router-view外部
 * 不应有任何dom元素渲染在页面上（隐藏的多余dom元素不影响打印）。
 * 3.由于内容较多时需要分页打印，所以需要在打印页面的html、body、div[data-v-app]上添加样式，该插件会自动添加这些样式，
 * 如果页面这些dom节点已经存在类似样式，该插件会覆盖已存在的样式（只会影响打印页面，无需担心其他页面被污染）
 * 4.虽然插件有调节列宽的功能，但为了用户使用方便，开发人员应该在columns里设置好适合的列宽（minWidth或width）,
 * 让打印页面打开时就具备较好的打印布局效果。
 */
export declare const tablePrint: {
    print: typeof print_2;
    init: typeof init;
};

export declare const TableSearch: __VLS_WithSlots_5<typeof __VLS_component_5, __VLS_Slots_5>;

export declare const TableSetting: DefineComponent<__VLS_Props_10, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_10> & Readonly<{
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
transfer: boolean;
placement: Placement;
storage: "localStorage" | "sessionStorage";
bg: string;
modelValue: any[];
width: string;
defaultCheck: boolean;
eventsEnabled: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare function toFormData(data: Record<string, any>): FormData;

export declare function toHump(name: string): string;

export declare function toLine(name: string): string;

/**
 * 手动tooltip(基于tableTooltip的高级表格内容展示，展示内容和形式更多样和合理)
 * tableTooltip: 替换view-design的Table的tooltip功能，只在内容会导致换行或显示不完整时渲染tooltip
 * @param {String/Array/Function} contentKey 要设置tooltip的column的key或者key组成的数组（内容按数组中key对应的内容先后拼接），
     * 或获取值的自定义逻辑（Function回调，会传入params）
     * @param {boolean} dash 在内容为空(null、undefined、'')时是否以'--'代替显示
     * @param {String} jointMark 在内容为多个字段拼接时，各字段间连接符，默认没有
     */
 export declare function tooltipManual(contentKey: string | string[] | ((params: any) => string), dash?: boolean, jointMark?: string): (_h: any, params: any) => globalThis.VNode<RendererNode, RendererElement, {
     [key: string]: any;
 }>;

 export declare const TransferBox: DefineComponent<__VLS_Props_26, {
 reset: typeof reset;
 search: typeof search;
 }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
 transferred: (...args: any[]) => void;
 "on-data-change-l": (...args: any[]) => void;
 "on-data-change-r": (...args: any[]) => void;
 }, string, PublicProps, Readonly<__VLS_Props_26> & Readonly<{
 onTransferred?: ((...args: any[]) => any) | undefined;
 "onOn-data-change-l"?: ((...args: any[]) => any) | undefined;
 "onOn-data-change-r"?: ((...args: any[]) => any) | undefined;
 }>, {
 showTotal: boolean;
 showSizer: boolean;
 usePagePro: boolean;
 formDataLeft: any[];
 formDataRight: any[];
 formRulesLeft: Record<string, any>;
 formRulesRight: Record<string, any>;
 constSearchDataLeft: Record<string, any>;
 constSearchDataRight: Record<string, any>;
 leftTableColumns: any[];
 rightTableColumns: any[];
 addParamsHandle: (d: any) => any;
 deleteParamsHandle: (d: any) => any;
 addAllParamsHandle: (d: any) => any;
 deleteAllParamsHandle: (d: any) => any;
 addMethod: "post" | "put" | "get";
 addAllMethod: "post" | "put" | "get";
 deleteMethod: "delete" | "post" | "put" | "get";
 deleteAllMethod: "delete" | "post" | "put" | "get";
 }, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

 declare interface TreeNode {
     [k: string]: any;
     children?: TreeNode[];
 }

 /**
  * 去掉对象属性前后空格
  */
 export declare function trimObj(obj: Collection): Collection;

 /**
  * 更新表单结构，例如设置或取消禁用,或者给type为txt的表单项（没有key）赋值（公开）；
  * @param {Object|Array} d 为对象（改变单个）或数组（改变多个），支持的属性：index（必填）-需要改变的formData项的索引值、
  * indexB-当表单为`分组表单`时必填（表示表单项的二位数组索引第二位）、需要改变的属性，如要改变第二个表单组件的label和title,
  * 则为:{index:1,label:XXX,title:XXX}
  */
 declare function updateFormDataT(d: Record<string, any> | Record<string, any>[]): void;

 declare function updateFormDataT_2(data: Record<string, any> | Record<string, any>[]): void;

 declare function updateFormDataT_3(data: Record<string, any> | Record<string, any>[]): void;

 declare function updateFormDataT_4(data: Record<string, any> | Record<string, any>[]): void;

 /**
  * 更新表单项的值（只能更新已有字段，公开）
  * @param data 新数据
  * @param notClearOthers 是否清空其他表单项，默认清空
  */
 declare function updateValGroup(data: Record<string, any>, notClearOthers?: boolean): void;

 declare function updateValGroup_2(data: Record<string, any>, notClearOthers: boolean): void;

 declare function updateValGroup_3(data: Record<string, any>, notClearOthers: boolean): void;

 declare function updateValGroup_4(data: Record<string, any>, notClearOthers: boolean): void;

 export declare const UploadGroup: DefineComponent<__VLS_Props_17, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
 "on-change": (...args: any[]) => void;
 "update:modelValue": (...args: any[]) => void;
 }, string, PublicProps, Readonly<__VLS_Props_17> & Readonly<{
 "onOn-change"?: ((...args: any[]) => any) | undefined;
 "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
 }>, {
 length: number;
 disabled: boolean;
 data: Record<string, any>;
 format: string[];
 manualUpload: boolean;
 maxSize: number;
 multiple: boolean;
 showImg: boolean;
 url: string;
 withCredentials: boolean;
 modelValue: number | string | File | any[];
 showUploadList: boolean;
 }, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

 declare function validate(): void;

 declare function validate_2(): void;

 declare function validate_3(): void;

 declare function validate_4(): void;

 export declare const WellCard: __VLS_WithSlots_11<typeof __VLS_component_11, __VLS_Slots_11>;

 export { }
