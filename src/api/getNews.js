import {
  opts,
  opts2
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

export function getNewsList () {
  let url = 'https://pacaio.match.qq.com/irs/rcd'

  let data = {
    cid: 35,
    token: '4d1ddbd5ea23e1ec0cdd44a6ebe8dec6',
    page: 0
  }

  return jsonp(url, data, opts2)
}

export function getWeather () {
  let url = 'https://wis.qq.com/weather/common'

  let data = {
    weather_type: 'observe|forecast_24h|air|alarm',
    source: 'xw',
    province: '北京市',
    city: '北京市',
    county: ''
  }

  return jsonp(url, data, opts2)
}
