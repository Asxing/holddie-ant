import { AnyAction, Reducer } from 'redux';
import { EffectsCommandMap } from 'dva';
import { addRule, queryRule, removeRule, updateRule } from './service';
import { getAllMenu } from '@/services/menu';

import { TableListDate, MenuList, TableListItem } from './data.d';

export interface StateType {
  data?: TableListDate;
  menus: Array<MenuList>;
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: StateType) => T) => T },
) => void;

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    fetch: Effect;
    fetchMenu: Effect;
    add: Effect;
    remove: Effect;
    update: Effect;
  };
  reducers: {
    save: Reducer<StateType>;
    saveMenu: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'systemPermission',

  state: {
    data: {
      list: [],
      pagination: {},
    },
    menus: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      console.log('fetch permission');
      const response = yield call(queryRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchMenu({ payload }, { call, put }) {
      const response = yield call(getAllMenu, payload);
      yield put({
        type: 'saveMenu',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
        menus: action.menus,
      };
    },
    saveMenu(state, action) {
      console.log('fetchmenu:', action.payload);
      return {
        ...state,
        menus: action.payload,
      };
    },
  },
};

export default Model;
