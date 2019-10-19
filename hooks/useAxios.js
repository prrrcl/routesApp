import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = (url) => {

  const ax =  axios.create({baseURL:'https://serverless.prrrcl.now.sh/api/rutas'})

  const [data, setData] = useState()
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    ax.get(url)
    .then(res => {
      setData(res.data)
      setRefreshing(false)
    })
  }, [refreshing]);
  
  const fetchData = () =>{
    return ax.get(url)
    .then(res => setData(res.data))
  }
  useEffect(()=>{
    fetchData();
  },[])
  return {refreshing, onRefresh, data}
}
export default useAxios
