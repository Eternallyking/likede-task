import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user-service/user/login',
    method: 'post',
    data
  })
}

export function Verificationcode(num) {
  return request({
    url: `/user-service/user/imageCode/${num}`
  })
}

export function getUserInfoApi(id) {
  return request({
    url: `/user-service/user/${id}`
  })
}
