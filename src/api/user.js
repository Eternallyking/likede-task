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
