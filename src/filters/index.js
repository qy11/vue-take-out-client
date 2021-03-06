import Vue from 'vue'
import format from 'date-fns/format'
// 自定义过滤器
Vue.filter('date-format', (value, formatStr = 'YYYY-MM-DD HH:mm:ss') => {
  // return moment(value).format(formatStr)
  return format(value, formatStr || 'YYYY-MM-DD HH:mm:ss')
})
