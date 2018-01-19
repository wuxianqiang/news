import {
  opts2
} from './config'
import jsonp from 'common/js/jsonp'

export function getVideos () {
  let url = 'https://pacaio.match.qq.com/xw/rcdVideo'

  let data = {}

  return jsonp(url, data, opts2)
}
