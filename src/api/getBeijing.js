import {
  opts2
} from './config'
import jsonp from 'common/js/jsonp'

export function getBeijing () {
  let url = 'https://xw.qq.com/service/api/proxy'

  let data = {
    key: 'Xw@2017Mmd',
    charset: 'utf-8',
    url: 'http://openapi.inews.qq.com/getQQNewsIndexAndItems?chlid=news_news_bj&refer=mobilewwwqqcom&srcfrom=newsapp&otype=json&ext_action=Fimgurl33,Fimgurl32,Fimgurl30'
  }

  return jsonp(url, data, opts2)
}
