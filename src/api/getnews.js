import {
  opts
} from './config'
import jsonp from 'common/js/jsonp'

export function getNews () {
  let url = 'http://openapi.inews.qq.com/getQQNewsIndexAndItems?chlid=news_news_top&refer=mobilewwwqqcom&otype=jsonp&ext_action=Fimgurl33,Fimgurl32,Fimgurl30'

  let data = {
    key: 'Xw @2017Mmd',
    charset: 'utf - 8'
  }

  return jsonp(url, data, opts)
}
