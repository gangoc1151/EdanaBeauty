import axios from 'axios'

const index = axios.create({
    baseURL: 'https://quanly.maidzo.vn/',
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Token ${Global.userToken}`
      }
})

export const fetchApi = async (method, path, params = {}, token) => {
  let finalPath = path
  let options = {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Token ${Global.userToken}`
    }
  }

  if (method.toUpperCase() === 'GET') {
    finalPath += '?' + Object.entries(params).map((v) => {
      if (Array.isArray(v[1])) {
        return `${v[0]}=${v[1].join(',')}`
      } else {
        return `${v[0]}=${v[1]}`
      }
    }).join('&')
  } else {
    options['body'] = JSON.stringify(params)
  }

  // console.log(Global.apiUrl + `${finalPath}`)
  return await fetch('https://quanly.maidzo.vn/' + `${finalPath}`, options).then(res => {
    // console.log(res)
    return res.json()
  }).then(response => {
    return response
  }).catch(err => {
    console.info("__err__", err)
  })
}
export const fetchApiLogin = async (method, path, params = {}) => {
  let finalPath = path
  let options = {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
    }
  }

  if (method.toUpperCase() === 'GET') {
    finalPath += '?' + Object.entries(params).map((v) => {
      if (Array.isArray(v[1])) {
        return `${v[0]}=${v[1].join(',')}`
      } else {
        return `${v[0]}=${v[1]}`
      }
    }).join('&')
  } else {
    options['body'] = JSON.stringify(params)
  }

  // console.log(Global.apiUrl + `${finalPath}`, options)

  return await fetch('https://quanly.maidzo.vn/'  + `${finalPath}`, options).then(res => {
    return res.json()
  }).then(response => {
    return response
  }).catch(err => {
    console.info("__err__", err)
  })
}

export default index