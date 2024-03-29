declare function addRow(row: Record<string, any>): void;
declare function setRowData(row: Record<string, any>, setCurrentRow: boolean, clickCurrentRow: boolean): void;
declare function deleteRow(index: number): void;
declare function getSelected(): Record<string, any>[];
declare function clearSelect(): void;
declare function clearTableData(): void;
declare function getTableData(order?: string, orderKey?: string, keepSelect?: boolean): Promise<unknown>;
declare function getDataAndClickRow(clickCurrentRow?: boolean, order?: string, orderKey?: string): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    url?: string | undefined;
    method?: "get" | "post" | undefined;
    searchData?: Record<string, any> | undefined;
    columns?: {
        type?: "html" | "index" | "selection" | "expand" | undefined;
        title?: string | undefined;
        key?: string | undefined;
        width?: number | undefined;
        minWidth?: number | undefined;
        maxWidth?: number | undefined;
        align?: "left" | "right" | "center" | undefined;
        className?: string | undefined;
        fixed?: "left" | "right" | undefined;
        ellipsis?: boolean | undefined;
        tooltip?: boolean | undefined;
        tooltipTheme?: string | undefined;
        tooltipMaxWidth?: number | undefined;
        render?: Function | undefined;
        renderHeader?: Function | undefined;
        indexMethod?: Function | undefined;
        sortable?: boolean | "custom" | undefined;
        sortMethod?: Function | undefined;
        sortType?: "desc" | "asc" | undefined;
        filters?: any[] | undefined;
        filterMethod?: Function | undefined;
        filterMultiple?: boolean | undefined;
        filteredValue?: any[] | undefined;
        filterRemote?: Function | undefined;
        children?: any[] | undefined;
        resizable?: boolean | undefined;
        tree?: boolean | undefined;
        display?: string | undefined;
        showSettingCheck?: boolean | undefined;
        disableShowSetting?: boolean | undefined;
    }[] | undefined;
    dataHandler?: ((d: any) => {
        [k: string]: any;
        [k: number]: any;
        [k: symbol]: any;
        data: Record<string, any>;
        total: number;
    }) | undefined;
    selection?: boolean | undefined;
    radio?: boolean | undefined;
    selectionFixed?: false | "left" | "right" | undefined;
    rowClickSelect?: boolean | undefined;
    data?: any[] | undefined;
    pageSize?: number | undefined;
    sortable?: "" | "custom" | undefined;
    initData?: boolean | undefined;
    highlightRow?: boolean | undefined;
    rowClickNum?: number | undefined;
    tableEmptyTdHandle?: boolean | undefined;
    noBorderTable?: boolean | undefined;
    noPage?: boolean | undefined;
    orderDefault?: "desc" | "asc" | undefined;
    orderKey?: string | undefined;
    orderKeyFormat?: "underline" | "camelcase" | undefined;
    getDataLoading?: boolean | undefined;
    showTopRow?: boolean | undefined;
    lightHead?: boolean | undefined;
    pageComponentSize?: "default" | "small" | undefined;
    noElevator?: boolean | undefined;
}>, {
    url: string;
    method: string;
    searchData: () => {};
    columns: () => never[];
    selection: boolean;
    radio: boolean;
    selectionFixed: boolean;
    rowClickSelect: boolean;
    data: () => never[];
    pageSize: number;
    sortable: string;
    initData: boolean;
    highlightRow: boolean;
    rowClickNum: number;
    tableEmptyTdHandle: boolean;
    noBorderTable: boolean;
    noPage: boolean;
    orderDefault: string;
    orderKey: string;
    orderKeyFormat: string;
    getDataLoading: boolean;
    showTopRow: boolean;
    lightHead: boolean;
    pageComponentSize: string;
    noElevator: boolean;
}>, {
    selectedIds: globalThis.ComputedRef<any[]>;
    addRow: typeof addRow;
    setRowData: typeof setRowData;
    deleteRow: typeof deleteRow;
    getSelected: typeof getSelected;
    clearSelect: typeof clearSelect;
    clearTableData: typeof clearTableData;
    getTableData: typeof getTableData;
    getDataAndClickRow: typeof getDataAndClickRow;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-selection-change" | "on-data-change")[], "on-selection-change" | "on-data-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    url?: string | undefined;
    method?: "get" | "post" | undefined;
    searchData?: Record<string, any> | undefined;
    columns?: {
        type?: "html" | "index" | "selection" | "expand" | undefined;
        title?: string | undefined;
        key?: string | undefined;
        width?: number | undefined;
        minWidth?: number | undefined;
        maxWidth?: number | undefined;
        align?: "left" | "right" | "center" | undefined;
        className?: string | undefined;
        fixed?: "left" | "right" | undefined;
        ellipsis?: boolean | undefined;
        tooltip?: boolean | undefined;
        tooltipTheme?: string | undefined;
        tooltipMaxWidth?: number | undefined;
        render?: Function | undefined;
        renderHeader?: Function | undefined;
        indexMethod?: Function | undefined;
        sortable?: boolean | "custom" | undefined;
        sortMethod?: Function | undefined;
        sortType?: "desc" | "asc" | undefined;
        filters?: any[] | undefined;
        filterMethod?: Function | undefined;
        filterMultiple?: boolean | undefined;
        filteredValue?: any[] | undefined;
        filterRemote?: Function | undefined;
        children?: any[] | undefined;
        resizable?: boolean | undefined;
        tree?: boolean | undefined;
        display?: string | undefined;
        showSettingCheck?: boolean | undefined;
        disableShowSetting?: boolean | undefined;
    }[] | undefined;
    dataHandler?: ((d: any) => {
        [k: string]: any;
        [k: number]: any;
        [k: symbol]: any;
        data: Record<string, any>;
        total: number;
    }) | undefined;
    selection?: boolean | undefined;
    radio?: boolean | undefined;
    selectionFixed?: false | "left" | "right" | undefined;
    rowClickSelect?: boolean | undefined;
    data?: any[] | undefined;
    pageSize?: number | undefined;
    sortable?: "" | "custom" | undefined;
    initData?: boolean | undefined;
    highlightRow?: boolean | undefined;
    rowClickNum?: number | undefined;
    tableEmptyTdHandle?: boolean | undefined;
    noBorderTable?: boolean | undefined;
    noPage?: boolean | undefined;
    orderDefault?: "desc" | "asc" | undefined;
    orderKey?: string | undefined;
    orderKeyFormat?: "underline" | "camelcase" | undefined;
    getDataLoading?: boolean | undefined;
    showTopRow?: boolean | undefined;
    lightHead?: boolean | undefined;
    pageComponentSize?: "default" | "small" | undefined;
    noElevator?: boolean | undefined;
}>, {
    url: string;
    method: string;
    searchData: () => {};
    columns: () => never[];
    selection: boolean;
    radio: boolean;
    selectionFixed: boolean;
    rowClickSelect: boolean;
    data: () => never[];
    pageSize: number;
    sortable: string;
    initData: boolean;
    highlightRow: boolean;
    rowClickNum: number;
    tableEmptyTdHandle: boolean;
    noBorderTable: boolean;
    noPage: boolean;
    orderDefault: string;
    orderKey: string;
    orderKeyFormat: string;
    getDataLoading: boolean;
    showTopRow: boolean;
    lightHead: boolean;
    pageComponentSize: string;
    noElevator: boolean;
}>>> & {
    "onOn-selection-change"?: ((...args: any[]) => any) | undefined;
    "onOn-data-change"?: ((...args: any[]) => any) | undefined;
}, {
    data: any[];
    method: "get" | "post";
    columns: {
        type?: "html" | "index" | "selection" | "expand" | undefined;
        title?: string | undefined;
        key?: string | undefined;
        width?: number | undefined;
        minWidth?: number | undefined;
        maxWidth?: number | undefined;
        align?: "left" | "right" | "center" | undefined;
        className?: string | undefined;
        fixed?: "left" | "right" | undefined;
        ellipsis?: boolean | undefined;
        tooltip?: boolean | undefined;
        tooltipTheme?: string | undefined;
        tooltipMaxWidth?: number | undefined;
        render?: Function | undefined;
        renderHeader?: Function | undefined;
        indexMethod?: Function | undefined;
        sortable?: boolean | "custom" | undefined;
        sortMethod?: Function | undefined;
        sortType?: "desc" | "asc" | undefined;
        filters?: any[] | undefined;
        filterMethod?: Function | undefined;
        filterMultiple?: boolean | undefined;
        filteredValue?: any[] | undefined;
        filterRemote?: Function | undefined;
        children?: any[] | undefined;
        resizable?: boolean | undefined;
        tree?: boolean | undefined;
        display?: string | undefined;
        showSettingCheck?: boolean | undefined;
        disableShowSetting?: boolean | undefined;
    }[];
    url: string;
    selection: boolean;
    searchData: Record<string, any>;
    radio: boolean;
    selectionFixed: false | "left" | "right";
    rowClickSelect: boolean;
    pageSize: number;
    sortable: "" | "custom";
    initData: boolean;
    highlightRow: boolean;
    rowClickNum: number;
    tableEmptyTdHandle: boolean;
    noBorderTable: boolean;
    noPage: boolean;
    orderDefault: "desc" | "asc";
    orderKey: string;
    orderKeyFormat: "underline" | "camelcase";
    getDataLoading: boolean;
    showTopRow: boolean;
    lightHead: boolean;
    pageComponentSize: "default" | "small";
    noElevator: boolean;
}, {}>, {
    tableSetting?(_: {}): any;
    topMsg?(_: {}): any;
    topBtnGroup?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
