// @ts-ignore
/* eslint-disable */
declare namespace API {
  type PageResult = {
    result?: any[];
    error?: string;
    limit?: number;
    page?: number;
    total?: number;
  };

  type ApiResult = {
    result?: any[];
    error?: string;
    message?: string;
    status?: number;
  };

  type Page = {
    limit?: number;
    page?: number;
    total?: number;
  };

  type Flow = {
    id?: string;
    name?: string;
    description?: string;
    status?: string;
    createDate?: string;
    updateDate?: string;
  };

  type Log = {
    type?: string;
    path?: string;
    date?: string;
    flow?: string;
    size?: number;
  };

  type Node = {
    id: string;
    flowId: string;
    left?: string;
    top?: string;
    nodeName?: string;
    typeId?: number;
    from?: string;
    to?: string;
    remark?: string;
    params?: object;
    nodeType?: object;
    payload?: object;
  };

  type NodeType = {
    id: number;
    type: string;
    typeName?: string;
    svg?: string;
    background?: number;
    params?: any[];
    description?: string;
  };

  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
