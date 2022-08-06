import request from '@/utils/request'

export function gettaskdetail() {
  return request({
    url: '/task-service/task/search'
  })
}

// export function gettaskdetail() {
//   return request({
//     url: '/task-service/task/allTaskStatus'
//   })
// }
// export function gettaskdetail() {
//   return request({
//     url: '/task-service/taskType/list'
//   })
// }
// export function gettaskdetail(start, end) {
//   return request({
//     url: '/task-service/task/taskReportInfo' + start + end
//   })
// }
