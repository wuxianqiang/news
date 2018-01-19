import {
  opts2
} from './config'
import jsonp from 'common/js/jsonp'

export function getRecommend () {
  let url = 'https://pacaio.match.qq.com/xw/recommend'

  let data = {
    num: 10
  }

  return jsonp(url, data, opts2)
}
