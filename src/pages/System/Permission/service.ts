import request from '@/utils/request';
import { TableListParams } from './data.d';

export async function queryRule(params: TableListParams) {
  return request('/api/permission', {
    params,
  });
}

export async function removeRule(params: TableListParams) {
  return request('/api/permission/15', {
    method: 'delete',
  });
}

export async function addRule(params: TableListParams) {
  return request('/api/permission', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/permission', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
