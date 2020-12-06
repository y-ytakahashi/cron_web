import axios from 'axios'

export const axiosBase = axios.create({
  baseURL:'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json'  
})



// // 設定情報の取得
export const resSettings =  () => {
   const result =  axiosBase.get('/api/settings')
    .then((res) => {
      console.log(res)
      return res.data
    }).catch((err) => {
      return err
    });
    return result
}

