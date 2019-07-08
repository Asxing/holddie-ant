export interface TableListItem {
  id: number;
  disabled?: boolean;
  title: string;
  status: number;
  updatedAt: Date;
  moudelPath: string;
  moudelValue: Array<string>;
  moudelId: number;
  code: string;
  description: string;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListDate {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface MenuList {
  id: number;
  parentId: number;
  title: string;
  path: string;
  icon: string;
  hideInMenu: boolean;
  sort: number;
  authority: Array<string>;
  children: Array<MenuList>;
}

export interface TableListParams {
  sorter: string;
  status: string;
  name: string;
  pageSize: number;
  currentPage: number;
}
