import request from '@/utils/request';

export function getAllMenu() {
  return request('/api/menu');
}

export async function saveMenu(menu) {
  return request('/api/menu', {
    method: 'PUT',
    data: menu,
  });
}
