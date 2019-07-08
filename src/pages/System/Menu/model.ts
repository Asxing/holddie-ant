import { AnyAction, Reducer } from 'redux';
import { EffectsCommandMap } from 'dva';
import { getAllMenu } from '@/services/menu';

import { TableListDate } from './data.d';

export interface StateType {
  data: TableListDate;
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: StateType) => T) => T },
) => void;

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    fetchAllMenu: Effect;
  };
  reducers: {
    save: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'systemPermission',

  state: {
    data: {
      list: [],
      pagination: {},
    },
  },

  effects: {
    *fetchAllMenu({ payload }, { call, put }) {
      const response = yield call(getAllMenu, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};

export default Model;
