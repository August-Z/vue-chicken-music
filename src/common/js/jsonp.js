import originJSONP from 'jsonp'

function param(data) {
  let url = ''
  for (const k in data) {
    if (data.hasOwnProperty(k)) {
      const value = data[k] !== undefined ? data[k] : ''
      url += `&${k}=${encodeURIComponent(value)}`
    }
  }
  return url ? url.substring(1) : ''
}

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}