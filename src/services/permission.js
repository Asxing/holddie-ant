export function getFunctionPagedList(query) {
  return request({
    url: '/function/pagedlist',
    method: 'get',
    params: query,
  });
}

export function delFunction(id) {
  return request('/function/del', {
    method: 'delete',
    params: id,
    loading: 'message',
  });
}

export function delFunctions(ids) {
  return request('/function/batchdel', {
    method: 'delete',
    params: ids,
    loading: 'message',
  });
}

export function saveFunction(data) {
  return request('/function/save', {
    method: 'post',
    data: data,
    loading: 'message',
  });
}
