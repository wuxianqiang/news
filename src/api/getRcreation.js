import {
  opts2
} from './config'
import jsonp from 'common/js/jsonp'

export function getRcreation () {
  // https://pacaio.match.qq.com/irs/rcd
  let url = 'https://pacaio.match.qq.com/irs/rcd'

  let data = {
    cid: 24,
    ext: 'ent',
    page: 0,
    token: '6519a55d4dd6c430612bf8c3b6e098fa'
  }

  return jsonp(url, data, opts2)
}
