async function fetchData(request) {
  try {
    if (request) {
      const url = 'http://localhost:3000'
      const data = await fetch(url + request)
      const dataObj = await data.json()
      return dataObj
    }
    return 404
  } catch (error) {
    console.error(error)
  }
  return 404
}

export default fetchData