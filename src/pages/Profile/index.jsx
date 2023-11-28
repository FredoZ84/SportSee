import { useParams, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import template from './template'

import getDatas from '../../calls/getDatas'

function Profile() {
  const [user, setUser] = useState({})
  const [activity, setActivity] = useState({})
  const [sessions, setSessions] = useState({})
  const [performance, setPerformance] = useState({})
  const [mocked, setMocked] = useState(null)

  const [searchParams] = useSearchParams()

  const { id } = useParams()

  useEffect(() => {
    if (searchParams.get('mocked') === 'true') {
      setMocked(true)
    } else {
      setMocked(false)
    }
  }, [searchParams])

  useEffect(() => {
    async function get() {
      const datas = await getDatas(id, mocked)

      setUser(datas[0])
      setActivity(datas[1])
      setSessions(datas[2])
      setPerformance(datas[3])
    }

    get()
  }, [id, mocked])

  if (Object.keys(user).length === 0 && user.constructor === Object) {
    return console.log("en cours d'affichage")
  } else {
    return template(user, activity, sessions, performance)
  }
}

export default Profile